class ImagePreview {
    constructor() {
        // The parent
        this.parent = document.getElementById("main_content");

        // The window itself
        this.element = document.createElement("div");
        this.element.classList.add("img-viewer");

        // The close button
        const close_button = document.createElement("a"); // TODO: Make this a button instead of an anchor
        close_button.classList.add("viewer-close");
        close_button.addEventListener("click", () => this.close());
        const close_button_ico = document.createElement("i");
        close_button_ico.classList.add("fa-solid", "fa-xmark");
        close_button_ico.classList.add("fa-solid", "fa-xmark");
        close_button.appendChild(close_button_ico);

        // The image
        this.image = document.createElement("img");

        // Add the image and close button to the popup
        this.element.appendChild(close_button);
        this.element.appendChild(this.image);
    }

    open(img_src) {
        this.image.src = img_src;
        this.parent.appendChild(this.element);
        document.addEventListener("keydown", this.closeKeyHandler);
    }

    close() {
        this.parent.removeChild(this.element);
        document.removeEventListener("keydown", this.closeKeyHandler);
    }
    closeKeyHandler = (event) => {
        if (event.key == "Escape") {
            this.close();
        }
    }
}
export { ImagePreview };
