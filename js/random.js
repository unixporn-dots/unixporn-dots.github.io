load = false;

document.getElementById('js-sortSwitcher').onclick = function () {

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
            generateCards(random);
            load = false;
        }, 900)

    }


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

}
