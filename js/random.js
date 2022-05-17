document.getElementById('js-sortSwitcher').addEventListener("click", () => {

    document.getElementById("themes_container").style.opacity = 0

    random = randomize(dotfiles)

    setTimeout(() => {
        document.getElementById("themes_container").innerHTML = "";
        generateCards(random);
        document.getElementById("themes_container").style.opacity = 1;
    }, 300);

});
