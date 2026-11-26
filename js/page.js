const ITEMS_PER_PAGE = 12;

class PageManager {
    constructor(container, items) {
        this.container = container;
        this.pageSwitcher = document.querySelector(".page-switcher");
        this.pageNumber = document.getElementById("page-number");
        this.setItems(items);
    }

    get pageCount() {
        return Math.max(1, Math.ceil(this.items.length / ITEMS_PER_PAGE));
    }

    setItems(items) {
        this.items = items;
        this.currentPage = 1;
        this.render();
    }

    goToPage(number) {
        const page = Math.min(this.pageCount, Math.max(1, number));
        if (page === this.currentPage) return;
        this.currentPage = page;
        this.render();
    }

    render() {
        const start = (this.currentPage - 1) * ITEMS_PER_PAGE;
        const cards = this.items.slice(start, start + ITEMS_PER_PAGE);
        this.container.replaceChildren(...cards.map(card => card.html_element));

        // Measure the first screen from the document top, where pagination links land.
        const fold = window.innerHeight - window.scrollY;
        const images = Array.from(this.container.querySelectorAll(".card-img"));
        const aboveFold = images.map(image => image.getBoundingClientRect().top < fold);
        cards.forEach((card, index) => card.loadThumbnail(images[index], aboveFold[index]));

        this.pageNumber.textContent = `${this.currentPage}/${this.pageCount}`;
        this.pageSwitcher.style.display = this.pageCount > 1 ? "" : "none";
    }
}

export { PageManager };
