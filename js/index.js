function randomize(sourceArray) {

    for (var i = 0; i < sourceArray.length - 1; i++) {

        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];

        sourceArray[j] = sourceArray[i];

        sourceArray[i] = temp;

    }

    return sourceArray;

}

var current_dotfiles = dotfiles;

random = randomize(current_dotfiles)

function generateCards(list) {
    list.forEach((dotfile) => {
        header = document.createElement("header");

        repo = document.createElement("a");
        repo.classList.add("button-child");
        repo.href = dotfile.link;
        repo.innerHTML = "Repository";

        if (dotfile.reddit && /\S/.test(dotfile.reddit)) { // Reddit post is optional
            reddit = document.createElement("a");
            reddit.classList.add("button-child");
            reddit.href = dotfile.reddit;
            reddit.innerHTML = "Reddit";
        }

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
        var img_link = document.createElement("a");
        img_link.target = "_blank";
        img_link.href = dotfile.image;
        image = document.createElement("img");
        image.src = dotfile.image;
        img_link.appendChild(image);

        // // link
        // link = document.createElement("a");
        // link.href = dotfile.link;
        // link.target = "_blank";
        // header.appendChild(link);

        // tags
        tag = document.createElement("h3");
        tag.innerHTML = dotfile.wm;
        tag.classList.add("tags");
        header.appendChild(tag);

        // Buttons Thingy
        buttonz = document.createElement("div");
        buttonz.classList.add("buttons");
        buttonz.appendChild(repo);
        if (dotfile.reddit && /\S/.test(dotfile.reddit)) {
            buttonz.appendChild(reddit);
        }

        // Card
        dotfile_card = document.createElement("a");
        dotfile_card.classList.add("card");
        dotfile_card.href = dotfile.link;
        dotfile_card.target = "_blank";
        dotfile_card.appendChild(header);
        dotfile_card.appendChild(img_link);
        dotfile_card.appendChild(buttonz);

        document.getElementById("themes_container").appendChild(dotfile_card);
    });
}

generateCards(random);