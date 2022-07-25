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

        // Images
        this.img_srcs = [];
        this.current_image_index = 0;

        // Add the image and close button to the popup
        this.element.appendChild(close_button);
        this.element.appendChild(this.image);
    }

    open(img_srcs) {
        if (img_srcs != this.img_srcs) {
            this.img_srcs = img_srcs;
            this.current_image_index = 0;
        }
        this.image.src = img_srcs[this.current_image_index];
        this.parent.appendChild(this.element);
        this.element.classList.add("popin");
        document.addEventListener("keydown", this.keyHandler);
    }
    next() {
        this.image.src =
            this.current_image_index < this.img_srcs.length - 1
                ? this.img_srcs[++this.current_image_index]
                : this.image.src;
    }
    prev() {
        this.image.src =
            this.current_image_index > 0
                ? this.img_srcs[--this.current_image_index]
                : this.image.src;
    }

    close() {
        this.element.classList.remove("popin");
        this.element.classList.add("popout");
        document.removeEventListener("keydown", this.keyHandler);
        this.element.addEventListener(
            "animationend",
            () => {
                if (this.parent.contains(this.element)) {
                    this.parent.removeChild(this.element);
                }
            },
            { once: true }
        );
    }
    keyHandler = (event) => {
        switch (event.key) {
            case "Escape":
                this.close();
                break;
            case "ArrowRight":
                this.next();
                break;
            case "ArrowLeft":
                this.prev();
                break;
            default:
                break;
        }
        if (event.key == "Escape") {
            this.close();
        }
    };
}
export { ImagePreview };
