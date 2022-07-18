//clears then generates and shows all cards in list
function generateCards(list) 
{
    document.getElementById("themes_container").innerHTML = "";

    for (var i = 0; i < list.length; i++) 
    {
        dotfile = list[i];
        if(!dotfile) return;

        header = document.createElement("header");

        repo = document.createElement("a");
        repo.classList.add("button-child");
        repo.href = dotfile.link;
        repo.target = "_blank";

        // Add github icon
        repoIcon = document.createElement('i');
        repoIcon.classList.add("fa-brands", "fa-github");
        repo.appendChild(repoIcon);

        if (dotfile.reddit && /\S/.test(dotfile.reddit)) { // Reddit post is optional
            reddit = document.createElement("a");
            reddit.classList.add("button-child");
            reddit.href = dotfile.reddit;
            reddit.target = "_blank";

            // Add reddit icon  
            redditIcon = document.createElement("i");
            redditIcon.classList.add("fa-brands", "fa-reddit");
            reddit.appendChild(redditIcon);
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
        image = document.createElement("img");
        image.src = dotfile.image;

        // link
        link = document.createElement("a");
        // link.href = dotfile.link;
        link.target = "_blank";

        // Image Preview
        imageLink = document.createElement("a");
        imageLink.target = "_blank";
        imageLink.classList.add("button-child", dotfile.image);
        imageLink.setAttribute("onclick", "imgPop(this)");
        link.appendChild(imageLink);

        imageIcon = document.createElement("i");
        imageIcon.classList.add("fa-regular", "fa-images");
        imageLink.appendChild(imageIcon);

        // tags
        tag = document.createElement("h3");
        tag.innerHTML = dotfile.wm;
        tag.classList.add("tags");

        // Buttons Thingy
        buttonz = document.createElement("div");
        buttonz.classList.add("buttons");
        buttonz.appendChild(imageLink);
        buttonz.appendChild(repo);
        if (dotfile.reddit && /\S/.test(dotfile.reddit)) {
            buttonz.appendChild(reddit);
        }
        header.appendChild(buttonz);

        // Card
        dotfile_div = document.createElement("div");
        dotfile_div.classList.add("card");
        dotfile_div.appendChild(header);
        dotfile_div.appendChild(tag);
        dotfile_div.appendChild(image);

        document.getElementById("themes_container").appendChild(dotfile_div);
    }
}