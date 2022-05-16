var fuzzy = function(items, key) {
  // Returns a method that you can use to create your own reusable fuzzy search.

  return function(query) {
    var words  = query.toLowerCase().split(' ');

    return items.filter(function(item) {
      var normalizedTerm = item[key].toString().toLowerCase();

      return words.every(function(word) {
        return (normalizedTerm.indexOf(word) > -1);
      });
    });
  };
};


var searchByTitle = fuzzy(dotfiles, 'title');

load = false;

document.getElementById('searchInput').onkeyup = function() {
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

if(!load){
 load = true;
 
 setTimeout (() => {
  document.getElementById("themes_container").innerHTML = ""
 }, 200)

setTimeout(() => {
  document.getElementById("themes_container").style.opacity = 1

 }, 1000)

setTimeout(() => {
  result.forEach((dotfile) => {
    header = document.createElement("header");

    downld = document.createElement("a");
    downld.classList.add("button-child");
    downld.href = dotfile.link;
    downld.innerHTML = "Download";

    // Desc
    desc = document.createElement("h3");
    desc.innerHTML = dotfile.description;
    desc.classList.add("theme-desc");
    header.appendChild(desc);

    // Title
    title = document.createElement("h3");
    title.innerHTML = dotfile.title;
    title.classList.add("theme-title");
    header.appendChild(title);

    // Image
    image = document.createElement("img");
    image.src = dotfile.image;

    // link
    link = document.createElement("a");
    link.href = dotfile.link;
    link.target = "_blank";
    header.appendChild(link);

    // link-icon
    tag = document.createElement("h3");
    tag.innerHTML = dotfile.tags[0];
    tag.classList.add("tags");
    link.appendChild(tag);

    // Buttons Thingy
    buttonz = document.createElement("div");
    buttonz.classList.add("buttons");
    buttonz.appendChild(downld);

    // Card
    dotfile_div = document.createElement("div");
    dotfile_div.classList.add("card");
    dotfile_div.appendChild(header);
    dotfile_div.appendChild(image);
    dotfile_div.appendChild(buttonz);

    document.getElementById("themes_container").appendChild(dotfile_div);
    load = false;
  });
  }, 900)
  
}

}
