class ImagePreview {
  constructor() {
    // The parent
    this.parent = document.getElementById("main_content");

    // The window itself
    this.element = document.createElement("div");
    this.element.classList.add("img-viewer");

    // The close button
    const closeButton = document.createElement("a");
    closeButton.classList.add("viewer-close");
    closeButton.addEventListener("click", () => this.close());
    const closeButton_ico = document.createElement("i");
    closeButton_ico.classList.add("fa-solid", "fa-xmark");
    closeButton_ico.classList.add("fa-solid", "fa-xmark");
    closeButton.appendChild(closeButton_ico);

    const nextButton = document.createElement("a");
    nextButton.classList.add("next-img");
    nextButton.addEventListener("click", () => this.next());
    const nextButton_ico = document.createElement("i");
    nextButton_ico.classList.add("fa-solid", "fa-angle-right");

    nextButton.appendChild(nextButton_ico);

    const backButton = document.createElement("a");
    backButton.classList.add("prev-img");
    backButton.addEventListener("click", () => this.prev());
    const backButton_ico = document.createElement("i");
    backButton_ico.classList.add("fa-solid", "fa-angle-left");

    backButton.appendChild(backButton_ico);


    const enlargeBtn = document.createElement("a");
    enlargeBtn.classList.add("enlarge-img");
    enlargeBtn.addEventListener("click", () => this.redir());
    const enlarge_ico = document.createElement("i");
    enlarge_ico.classList.add(
      "fa-solid",
      "fa-up-right-and-down-left-from-center"
    );

    enlargeBtn.appendChild(enlarge_ico);

    this.nextButton = nextButton;
    this.back = backButton;

    // The image
    this.image = document.createElement("img");

    this.slidr = document.createElement("input");
    this.slidr.classList.add("img-slider");
    this.slidr.type = "range";
    this.slidr.min = "0";
    this.slidr.max = "100";
    this.slidr.addEventListener("change", (e) => {
      this.holdr.style.overflow = "scroll";
      

      this.image.style.transform =
        "scale(" +
        (Number(this.slidr.value) / 20 <= 1
          ? 1
          : Number(this.slidr.value) / 20) +
        ")";

      setTimeout(() => this.holdr.style.overflow = "auto" ,1)
      
    });

    this.holdr = document.createElement("div");
    this.holdr.classList.add("image-preview");
    this.holdr.appendChild(this.image);

    this.viewr = document.createElement('h2')
    this.viewr.classList.add('img-count')
    this.viewr.textContent = "0/0";

    // Images
    this.img_srcs = [];
    this.current_image_index = 0;

    // Add the image and close button to the popup
    this.element.appendChild(closeButton);
    this.element.appendChild(nextButton);
    this.element.appendChild(backButton);
    this.element.appendChild(enlargeBtn);
    this.element.appendChild(this.slidr);
    this.element.appendChild(this.holdr);
    this.element.appendChild(this.viewr)
  }

  open(img_srcs) {
    this.slidr.value = "0";
    this.image.style.transform = "scale(1)";
    if (img_srcs != this.img_srcs) {
      this.img_srcs = img_srcs;
      this.current_image_index = 0;
    }

    let backButton = this.back;
    let nextButton = this.nextButton;

    if (this.img_srcs.length == 1) {
      backButton.classList.add("disable-img-btn");
      nextButton.classList.add("disable-img-btn");
    } else {
      nextButton.classList.remove("disable-img-btn");
    }
    if (this.current_image_index == 0) {
      backButton.classList.add("disable-img-btn");
    } else {
      nextButton.classList.remove("disable-img-btn");
      backButton.classList.remove("disable-img-btn");
    }

    this.image.src = img_srcs[this.current_image_index];
    this.parent.appendChild(this.element);
    this.element.classList.add("popin");
    document.addEventListener("keydown", this.keyHandler);

    this.element.addEventListener("click", (event) => {
      if (event.target.className && event.target?.className?.split(" ")[0] == "img-viewer") this.close();
    });

    this.viewr.textContent = `${this.current_image_index + 1}/${
      this.img_srcs.length
    }`;
  }
  redir() {
    const url = this.img_srcs[this.current_image_index];

    window.open(url, "_blank").focus();
  }
  next() {
    if (this.current_image_index != this.img_srcs.length - 1) {
      this.image.style.opacity = 0;

      setTimeout(() => {
        this.image.style.opacity = 1;
      }, 400);
    }

    setTimeout(() => {
      this.image.src =
        this.current_image_index < this.img_srcs.length - 1
          ? this.img_srcs[++this.current_image_index]
          : this.image.src;
      
      this.viewr.textContent = `${this.current_image_index + 1}/${
        this.img_srcs.length
      }`;
    }, 200);

    let nextButton = this.nextButton;
    let backButton = this.back;
    if (this.current_image_index == this.img_srcs.length - 1) {
      nextButton.classList.add("disable-img-btn");
    } else {
      nextButton.classList.remove("disable-img-btn");
      backButton.classList.remove("disable-img-btn");
    }
  }
  prev() {
    if (this.current_image_index != 0) {
      this.image.style.opacity = 0;

      setTimeout(() => {
        this.image.style.opacity = 1;
      }, 400);
    }

    setTimeout(() => {
      this.image.src =
        this.current_image_index > 0
          ? this.img_srcs[--this.current_image_index]
          : this.image.src;
      
      this.viewr.textContent = `${this.current_image_index + 1}/${
        this.img_srcs.length
      }`;
    }, 200);

    let backButton = this.back;
    let nextButton = this.nextButton;
    if (this.current_image_index == 0) {
      backButton.classList.add("disable-img-btn");
    } else {
      nextButton.classList.remove("disable-img-btn");
      backButton.classList.remove("disable-img-btn");
    }
  }

  close() {
    this.element.classList.remove("popin");
    this.element.classList.add("popout");
    this.slidr.value = "0";

    setTimeout(() => { this.viewr.textContent = "0/0"; }, 200)
    

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
