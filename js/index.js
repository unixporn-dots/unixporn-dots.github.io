import { randomize, shuffle } from "./random.js";
import { initializeThemeSwitcher } from "./themeSwitcher.js";
import { GlobalContext } from "./global_ctx.js";
import { search } from "./search.js";
import { generateCards } from "./cardGenerator.js";
import { PageManager } from "./page.js";

const categoryPages = {
    dotfiles: "./",
    icons: "./icons.html",
    "gtk-themes": "./gtk-themes.html",
};

function initializeGallery(entries) {
    initializeThemeSwitcher();
    GlobalContext.cards = generateCards(entries);
    randomize(GlobalContext.cards);
    const pages = new PageManager(document.querySelector("[data-gallery]"), GlobalContext.cards);
    GlobalContext.page_manager = pages;

    document.getElementById("js-sortSwitcher").addEventListener("click", shuffle);
    document.getElementById("firstPage").addEventListener("click", () => pages.goToPage(1));
    document.getElementById("prevPage").addEventListener("click", () => pages.goToPage(pages.currentPage - 1));
    document.getElementById("nextPage").addEventListener("click", () => pages.goToPage(pages.currentPage + 1));
    document.getElementById("lastPage").addEventListener("click", () => pages.goToPage(pages.pageCount));

    const searchInput = document.getElementById("searchInput");
    document.getElementById("gallerySearch").addEventListener("submit", event => {
        event.preventDefault();
        search(searchInput.value);
    });
    searchInput.addEventListener("input", () => search(searchInput.value));
    if (searchInput.value) search(searchInput.value);

    for (const select of document.querySelectorAll(".category-box")) {
        select.addEventListener("change", () => {
            window.location.href = categoryPages[select.value];
        });
    }
}

export { initializeGallery };
