var fuzzy = function(items, key) {
  // Returns a method that you can use to create your own reusable fuzzy search.

  return function(query) {
    var words  = query.toLowerCase().split(' ');

    return items.filter(function(item) {
      var normalizedTerm = item[key].toLowerCase();

      return words.every(function(word) {
        return (normalizedTerm.indexOf(word) > -1);
      });
    });
  };
};


var searchByTitle = fuzzy(dotlists, 'title');

document.getElementById('searchInput').onkeyup = function() {
  result = searchByTitle(document.getElementById('searchInput').value)
 console.log(result)
}
