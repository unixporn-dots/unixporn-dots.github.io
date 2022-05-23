var fuzzy = function (items, key) {
    // Returns a method that does a fuzzy search on a specific key

    return function (query) {
        var words = query.toLowerCase().split(' ');

        return items.filter(function (item) {
            var normalizedTerm = item[key].toString().toLowerCase();

            return words.every(function (word) {
                return (normalizedTerm.indexOf(word) > -1);
            });
        });
    };
};


var searchByTitle = fuzzy(dotfiles, 'title');
var searchByTags = fuzzy(dotfiles, 'tags');
var searchByAuthor = fuzzy(dotfiles, 'author');
var timer;
var loaded = true; // Timeout the search button
var currentQuery = ""; // Handle keyup events on things like ctrl key, etc.
var load = false; // Prevent spams

function search(evt) {

    var query = document.getElementById('searchInput').value;

    if (query != currentQuery || evt.currentTarget.forceSearch) { // So that we only search on query changes, not every keystroke (modifier keys, etc.)
        currentQuery = query;
        if (!evt.currentTarget.forceSearch) { // Timeout is not needed when event is fired from typing
            loaded = true;
            clearTimeout(timer); // We shouldn't clear the timer if the event is fired from the button
                                 // Otherwise, the lock will never be opened
        }
        if (loaded) { // Only do search if the lock is open
            if (evt.currentTarget.forceSearch) { // Only lock if the event is fired from the button
                loaded = false;
            }
            document.getElementById("themes_container").style.opacity = 0;

            timer = setTimeout(() => {
                document.getElementById("themes_container").innerHTML = "";

                result = searchByTitle(query).concat(searchByTags(query)).concat(searchByAuthor(query));

                result = result.filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates
                current_dotfiles = result;
                resetPageInfo();

                if (result.length > 0) {
                    generateCards(result,1);
                }
                document.getElementById("themes_container").style.opacity = 1;
                setTimeout(() => {
                    loaded = true // Open the lock after a certain timeout
                }, 400); // This time includes the opactiy change to 1 too,
                         // meaning the lock will be released 200ms after everything is done
            }, 500);
        }
    }

}
document.getElementById('searchInput').addEventListener('keyup', search);
document.getElementById('searchSubmit').addEventListener('click', search);
document.getElementById('searchSubmit').forceSearch = true;
