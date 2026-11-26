import { GlobalContext } from "./global_ctx.js";

function search(query) {
    const words = query.toLowerCase().trim().split(/\s+/);
    const results = new Set();
    for (const key of ["title", "tags", "author"]) {
        for (const card of GlobalContext.cards) {
            const text = String(card[key]).toLowerCase();
            if (words.every(word => text.includes(word))) results.add(card);
        }
    }
    GlobalContext.page_manager.setItems([...results]);
}

export { search };
