<h2 align=center>Unixporn-dots</h2>

<div align=center>
A collection of dotfiles from the r/unixporn community
<br>
<a href="https://unixporn-dots.github.io">Visit the website</a>
</div>

---
<br>

# Adding your Dotfiles
To add your dots simply open a pull request:
  1. Fork this repository.
  2. Add your entry to a new folder under `assets/dotfiles`, `assets/icons`, or `assets/gtk-themes`. Add a `manifest.yaml` file and 1 to 5 PNG, JPEG, or WebP screenshots.
  3. If you want a particular image to be shown on the main page preview rename it to `thumbnail`. This is optional.
  4. Open a pull request and it's done!

<br>

The YAML file looks like this:
```yaml
author: I am the author
title: This is the title
description: This is a short description
link: https://github.com/your-name/your-repository
reddit: https://www.reddit.com/r/unixporn/ # Optional link to your post
wm: windowmanager # Optional
tags: ['tag1', 'tag2', 'tag3'] 
```

NOTE: Please try to make sure the image has a 16:9 aspect ratio for consistency

## Build and preview locally

Use Python 3.13, matching the GitHub Actions build.

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r scripts/requirements.txt
.venv/bin/python scripts/build.py
.venv/bin/python -m http.server --directory dist 8000
```

Open `http://localhost:8000/`. Re-run the build after editing a manifest or adding screenshots. The build generates the catalogs and responsive WebP thumbnails in `dist/` and copies the original screenshots for the full-size viewer.

## GitHub Pages deployment

Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** before merging the workflow into `main`. Pull requests build and validate the site. Pushes to `main` build and deploy `dist/` to GitHub Pages. You can also run the workflow manually from `main`.
