var fuzzy = function (items, key) {
    // Returns a method that does a fuzzy search on a specific key1

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
var loaded = true;
var currentQuery = ""; // Handle keyup events on things like ctrl key, etc.

function search(evt) {

    var query = document.getElementById('searchInput').value;

    if (query != currentQuery || evt.currentTarget.forceSearch) { // So that we only search on query changes, not every keystroke (modifier keys, etc.)
        currentQuery = query;
        if (!evt.currentTarget.forceSearch) {
            loaded = true;
            clearTimeout(timer);
        }
        if (loaded) {
            if (evt.currentTarget.forceSearch) {
                loaded = false;
            }
            document.getElementById("themes_container").style.opacity = 0;

            timer = setTimeout(() => {
                document.getElementById("themes_container").innerHTML = "";

                result = searchByTitle(query).concat(searchByTags(query)).concat(searchByAuthor(query));

                result = new Set(result)
                if (result.size > 0) {
                    generateCards(result);
                }
                document.getElementById("themes_container").style.opacity = 1;
                setTimeout(() => {
                    loaded = true
                }, 400);
            }, 500);
        }
    }

}
document.getElementById('searchInput').addEventListener('keyup', search);
document.getElementById('searchSubmit').addEventListener('click', search);
document.getElementById('searchSubmit').forceSearch = true;
