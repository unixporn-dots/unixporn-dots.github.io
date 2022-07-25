import { GlobalContext } from "./global_ctx.js";
var fuzzy = function (items, key) {
    // Returns a method that does a fuzzy search on a specific key

    return function (query) {
        var words = query.toLowerCase().split(" ");

        return items.filter(function (item) {
            var normalizedTerm = item[key].toString().toLowerCase();

            return words.every(function (word) {
                return normalizedTerm.indexOf(word) > -1;
            });
        });
    };
};

var timer;
var loaded = true; // Timeout the search button
var currentQuery = ""; // Handle keyup events on things like ctrl key, etc.

function search(evt) {
    const searchByTitle = fuzzy(GlobalContext.cards, "title");
    const searchByTags = fuzzy(GlobalContext.cards, "tags");
    const searchByAuthor = fuzzy(GlobalContext.cards, "author");
    var query = document.getElementById("searchInput").value;

    if (query != currentQuery || evt.currentTarget.forceSearch) {
        // So that we only search on query changes, not every keystroke (modifier keys, etc.)
        currentQuery = query;
        if (!evt.currentTarget.forceSearch) {
            // Timeout is not needed when event is fired from typing
            loaded = true;
            clearTimeout(timer); // We shouldn't clear the timer if the event is fired from the button
            // Otherwise, the lock will never be opened
        }
        if (loaded) {
            // Only do search if the lock is open
            if (evt.currentTarget.forceSearch) {
                // Only lock if the event is fired from the button
                loaded = false;
            }
            GlobalContext.page_manager.current_page.disappear();

            timer = setTimeout(() => {
                var result = searchByTitle(query)
                    .concat(searchByTags(query))
                    .concat(searchByAuthor(query));
                result = result.filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates
                GlobalContext.page_manager.generate_pages(result);
                GlobalContext.page_manager.update_number();
                GlobalContext.page_manager.current_page.render();
                setTimeout(() => {
                    loaded = true; // Open the lock after a certain timeout
                }, 400); // This time includes the opactiy change to 1 too,
                // meaning the lock will be released 200ms after everything is done
            }, 500);
        }
    }
}

export { search };
