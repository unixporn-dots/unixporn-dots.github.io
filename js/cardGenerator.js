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

        // Image Preview
        imagePreview = document.createElement("a");
        imagePreview.target = "_blank";
        imagePreview.classList.add("img-preview", dotfile.image);
        imagePreview.setAttribute("onclick", "imgPop(this)");

        // tags
        tag = document.createElement("h3");
        tag.innerHTML = dotfile.wm;
        tag.classList.add("tags");

        // Buttons Thingy
        buttonz = document.createElement("div");
        buttonz.classList.add("buttons");
        buttonz.appendChild(imagePreview);
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
        dotfile_div.appendChild(imagePreview);

        document.getElementById("themes_container").appendChild(dotfile_div);
    }
}