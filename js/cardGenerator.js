

//clears then generates and shows all cards in list
function generateCards(list) 
{
    document.getElementById("themes_container").innerHTML = "";

    for (var i = 0; i < list.length; i++) 
    {
        dotfile = list[i];
        if(!dotfile) return;



        repo = document.createElement("a");
        repo.classList.add("button-child");
        repo.href = dotfile.link;
        repo.target = "_blank";
        repo.innerHTML = "Repository";

        if (dotfile.reddit && /\S/.test(dotfile.reddit)) { // Reddit post is optional
            reddit = document.createElement("a");
            reddit.classList.add("button-child");
            reddit.href = dotfile.reddit;
            reddit.target = "_blank";
            reddit.innerHTML = "Reddit";
        }

        header = document.createElement("header");
        
        title = document.createElement("h3");
        title.innerHTML = dotfile.title;
        title.classList.add("theme-title");
        header.appendChild(title);

        desc = document.createElement("h3");
        desc.innerHTML = dotfile.description;
        desc.classList.add("theme-desc");
        header.appendChild(desc);



        // Image
        image = document.createElement("img");
        image.src = dotfile.image;

        // link
        link = document.createElement("a");
        // link.href = dotfile.link;
        link.target = "_blank";
        header.appendChild(link);

        imageLink = document.createElement("a");
        imageLink.target = "_blank";
        imageLink.classList.add("imageRedir");
        imageLink.classList.add(dotfile.image)
        imageLink.setAttribute("onclick", "imgPop(this)");
        link.appendChild(imageLink);

        imageIcon = document.createElement("i");
        imageIcon.classList.add("fas");
        imageIcon.classList.add("fa-image");
        imageLink.appendChild(imageIcon);

        // tags
        tag = document.createElement("h3");
        tag.innerHTML = dotfile.wm;
        tag.classList.add("tags");
        link.appendChild(tag);

        // Buttons Thingy
        buttonz = document.createElement("div");
        buttonz.classList.add("buttons");
        buttonz.appendChild(imageLink);
        buttonz.appendChild(repo);
        if (dotfile.reddit && /\S/.test(dotfile.reddit)) {
            buttonz.appendChild(reddit);
        }

        // Card
        dotfile_div = document.createElement("div");
        dotfile_div.classList.add("card");
        dotfile_div.appendChild(header);
        dotfile_div.appendChild(image);
        dotfile_div.appendChild(buttonz);

        document.getElementById("themes_container").appendChild(dotfile_div);
 
    }
}
