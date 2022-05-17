random = randomize(dotfiles)

function randomize(sourceArray) {

    for (var i = 0; i < sourceArray.length - 1; i++) {

        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];

        sourceArray[j] = sourceArray[i];

        sourceArray[i] = temp;

    }

    return sourceArray;

}

generateCards(random);

function generateCards(list) {
    list.forEach((dotfile) => {
        header = document.createElement("header");

        repo = document.createElement("a");
        repo.classList.add("button-child");
        repo.href = dotfile.link;
        repo.innerHTML = "Repository";

        reddit = document.createElement("a");
        reddit.classList.add("button-child");
        reddit.href = dotfile.reddit;
        reddit.innerHTML = "Reddit";

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

        // tags
        tag = document.createElement("h3");
        tag.innerHTML = dotfile.wm;
        tag.classList.add("tags");
        link.appendChild(tag);

        // Buttons Thingy
        buttonz = document.createElement("div");
        buttonz.classList.add("buttons");
        buttonz.appendChild(repo);
        buttonz.appendChild(reddit);

        // Card
        dotfile_div = document.createElement("div");
        dotfile_div.classList.add("card");
        dotfile_div.appendChild(header);
        dotfile_div.appendChild(image);
        dotfile_div.appendChild(buttonz);

        document.getElementById("themes_container").appendChild(dotfile_div);
    });
}