import { GlobalContext } from "./global_ctx.js";

function randomize(items) {
    for (let index = 0; index < items.length - 1; index++) {
        const other = index + Math.floor(Math.random() * (items.length - index));
        [items[index], items[other]] = [items[other], items[index]];
    }
}

function shuffle() {
    const pages = GlobalContext.page_manager;
    const items = [...pages.items];
    randomize(items);
    pages.setItems(items);
}

export { shuffle, randomize };
