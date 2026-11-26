#!/usr/bin/env python3
import json
import shutil
import sys
import tempfile
from pathlib import Path
from urllib.parse import quote, urlsplit

import yaml
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
COLLECTIONS = ('dotfiles', 'icons', 'gtk-themes')
IMAGE_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.webp'}
THUMBNAIL_WIDTHS = (480, 960)
REQUIRED_TEXT = ('author', 'title', 'description', 'link')
OPTIONAL_TEXT = ('reddit', 'wm')
MANIFEST_FIELDS = {*REQUIRED_TEXT, *OPTIONAL_TEXT, 'tags'}


def read_manifest(path):
    data = yaml.safe_load(path.read_text(encoding='utf-8'))
    if not isinstance(data, dict):
        raise ValueError('expected a YAML mapping')

    unknown = data.keys() - MANIFEST_FIELDS
    if unknown:
        raise ValueError(f'unexpected field(s): {", ".join(sorted(map(repr, unknown)))}')

    for field in REQUIRED_TEXT:
        if not isinstance(data.get(field), str) or not data[field].strip():
            raise ValueError(f'{field} must be non-empty text')

    for field in OPTIONAL_TEXT:
        if data.get(field) is None:
            data.pop(field, None)
        elif not isinstance(data[field], str):
            raise ValueError(f'{field} must be text')

    tags = data.get('tags')
    if not isinstance(tags, list) or not all(isinstance(tag, str) for tag in tags):
        raise ValueError('tags must be a list of strings (use [] for no tags)')

    for field in ('link', 'reddit'):
        value = data.get(field, '').strip()
        if value:
            url = urlsplit(value)
            if url.scheme not in ('http', 'https') or not url.hostname:
                raise ValueError(f'{field} must be an http or https URL')
            data[field] = value

    return data


def asset_url(path):
    return './' + quote(path.as_posix())


def build_thumbnails(source, destination, output):
    destination.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        image = image.convert('RGBA' if image.has_transparency_data else 'RGB')

    widths = sorted({min(width, image.width) for width in THUMBNAIL_WIDTHS})
    variants = []
    for width in widths:
        height = max(1, round(image.height * width / image.width))
        thumbnail = image.resize((width, height), Image.Resampling.LANCZOS)
        path = destination / f'{width}.webp'
        thumbnail.save(path, 'WEBP', quality=80, method=4)
        variants.append({'src': asset_url(path.relative_to(output)), 'width': width, 'height': height})
    return variants


def build_entry(folder, output):
    manifest = folder / 'manifest.yaml'
    try:
        data = read_manifest(manifest)
    except (OSError, ValueError, yaml.YAMLError) as error:
        raise ValueError(f'{manifest.relative_to(ROOT)}: {error}') from error

    images = sorted(
        (image for image in folder.iterdir() if image.is_file() and image.suffix.lower() in IMAGE_EXTENSIONS),
        key=lambda image: (image.stem != 'thumbnail', image.name),
    )
    if not images:
        raise ValueError(f'{folder.relative_to(ROOT)}: add at least one PNG, JPEG or WebP screenshot')

    relative_folder = folder.relative_to(ROOT)
    thumbnails = output / 'assets' / 'thumbnails' / folder.parent.name / folder.name
    try:
        data['thumbnails'] = build_thumbnails(images[0], thumbnails, output)
    except (OSError, ValueError, Image.DecompressionBombError) as error:
        raise ValueError(f'{images[0].relative_to(ROOT)}: {error}') from error

    originals = output / relative_folder
    originals.mkdir(parents=True, exist_ok=True)
    for index, image in enumerate(images):
        if index > 0:
            try:
                with Image.open(image) as screenshot:
                    screenshot.load()
            except (OSError, ValueError, Image.DecompressionBombError) as error:
                raise ValueError(f'{image.relative_to(ROOT)}: {error}') from error
        shutil.copyfile(image, originals / image.name)
    data['images'] = [asset_url(image.relative_to(ROOT)) for image in images]
    return data


def build_site(output):
    for html in ROOT.glob('*.html'):
        shutil.copyfile(html, output / html.name)
    for directory in ('css', 'js'):
        shutil.copytree(ROOT / directory, output / directory)

    assets = output / 'assets'
    assets.mkdir()
    shutil.copyfile(ROOT / 'assets' / 'favicon.ico', assets / 'favicon.ico')
    catalogs = output / 'js' / 'assets'
    catalogs.mkdir(exist_ok=True)

    for collection in COLLECTIONS:
        folders = sorted((ROOT / 'assets' / collection).iterdir())
        entries = [build_entry(folder, output) for folder in folders if folder.is_dir()]
        catalog = json.dumps(entries, ensure_ascii=False, indent=2, sort_keys=True)
        (catalogs / f'{collection}.js').write_text(f'export default {catalog};\n', encoding='utf-8')
        print(f'{collection}: {len(entries)} entries')


def main():
    try:
        with tempfile.TemporaryDirectory(prefix='.site-build-', dir=ROOT) as directory:
            output = Path(directory) / 'site'
            output.mkdir()
            build_site(output)
            if DIST.exists():
                shutil.rmtree(DIST)
            output.rename(DIST)
    except (OSError, ValueError) as error:
        print(f'Build failed: {error}', file=sys.stderr)
        return 1
    print(f'Built {DIST.relative_to(ROOT)}/')
    return 0


if __name__ == '__main__':
    sys.exit(main())
