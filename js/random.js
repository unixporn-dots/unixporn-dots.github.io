var loaded = true;
document.getElementById('js-sortSwitcher').addEventListener("click", () => {
    if (loaded) {
        loaded = false;
        document.getElementById("themes_container").style.opacity = 0
        console.log("hi");
        random = randomize(dotfiles)

        setTimeout(() => {
            document.getElementById("themes_container").innerHTML = "";
            generateCards(random);
            document.getElementById("themes_container").style.opacity = 1;
            setTimeout(() => {
                loaded = true;
            }, 400);
        }, 300);
    }
});
