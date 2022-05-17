var fuzzy = function (items, key) {
    // Returns a method that you can use to create your own reusable fuzzy search.

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

load = false;

document.getElementById('searchInput').onkeyup = function () {
    searchByTags = fuzzy(dotfiles, 'tags')
    searchByAuthor = fuzzy(dotfiles, 'author')

    value = document.getElementById('searchInput').value

    result = searchByTitle(value)
    tagy = searchByTags(value)
    author = searchByAuthor(value)

    result = tagy.concat(result)
    result = result.concat(author)

    result = [...new Set(result)]

    document.getElementById("themes_container").style.opacity = 0

    if (!load) {
        load = true;

        setTimeout(() => {
            document.getElementById("themes_container").innerHTML = ""
        }, 200)

        setTimeout(() => {
            document.getElementById("themes_container").style.opacity = 1

        }, 1000)

        setTimeout(() => {
            generateCards(result);
            load = false;
        }, 900)

    }
}