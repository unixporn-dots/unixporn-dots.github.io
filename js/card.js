import { ImagePreview } from "./preview.js";

const prev_window = new ImagePreview();
class Card {
    constructor(
        title,
        desc,
        img_urls,
        repo_link,
        reddit_link = null,
        wm = null,
        author,
        tags
    ) {
        this.title = title;
        this.desc = desc;
        this.img_urls = img_urls;
        this.repo_link = repo_link;
        if (reddit_link) {
            this.reddit_link = reddit_link;
        }
        this.wm = wm;
        this.author = author;
        this.tags = tags;
    }

    get html_element() {
        return this.generateHTML();
    }

    generateHTML() {
        // Root card div
        const root_container = document.createElement("div");
        root_container.classList.add("card");

        // Header
        const header = document.createElement("header");

        // Header Items START

        const links_container = document.createElement("div");
        links_container.classList.add("buttons");

        // Repo Link
        const repo_link = document.createElement("a");
        repo_link.classList.add("button-child");
        repo_link.href = this.repo_link;
        repo_link.target = "_blank";
        // Repo Link Icon
        const repo_link_ico = document.createElement("i");
        repo_link_ico.classList.add("fa-brands", "fa-github");
        repo_link.appendChild(repo_link_ico);

        // Reddit Post Link
        const reddit_link =
            this.reddit_link && /\S/.test(this.reddit_link)
                ? document.createElement("a")
                : null;
        if (reddit_link) {
            reddit_link.classList.add("button-child");
            reddit_link.href = this.reddit_link;
            reddit_link.target = "_blank";

            // Reddit Link Icon
            const reddit_link_ico = document.createElement("i");
            reddit_link_ico.classList.add("fa-brands", "fa-reddit");
            reddit_link.appendChild(reddit_link_ico);
        }

        // Append links to the container
        links_container.appendChild(repo_link);
        if (reddit_link) {
            links_container.appendChild(reddit_link);
        }

        // Title
        const title = document.createElement("h3");
        title.innerHTML = this.title;
        title.classList.add("theme-title");
        header.appendChild(title);

        // Desc
        const desc = document.createElement("h3");
        desc.innerHTML = this.desc;
        desc.classList.add("theme-desc");
        header.appendChild(desc);

        // Add header items
        header.appendChild(title);
        header.appendChild(desc);
        header.appendChild(links_container);

        // Header Items END

        // WM
        const wm = document.createElement("h3");
        wm.classList.add("tags");
        wm.innerHTML = this.wm;

        // Image
        const img = document.createElement("img");
        img.src = this.img_urls[0];
        img.classList.add("card-img");
        
        // Image preview icon container
        const imgPreviewIconContainer = document.createElement('div');
        imgPreviewIconContainer.addEventListener("click", () => prev_window.open(this.img_urls));

        // Image preview icon
        const imgPreviewIcon = document.createElement("i");
        imgPreviewIcon.classList.add("fa-regular", "fa-images", "img-preview-icon");
        imgPreviewIconContainer.appendChild(imgPreviewIcon);
        
        // Add everything to the card
        root_container.appendChild(header);
        root_container.appendChild(wm);
        root_container.appendChild(img);
        root_container.appendChild(imgPreviewIconContainer);
        return root_container;
    }
}
export { Card };
