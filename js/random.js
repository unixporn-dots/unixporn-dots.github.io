<<<<<<< HEAD
var loaded = true; // The lock, to prevent spamming the shuffle button
=======
load = false

>>>>>>> 7dea5ed950a20a0b066fc23f2322b5a32b8dbd62
document.getElementById('js-sortSwitcher').addEventListener("click", () => {
    if (loaded) { // Only shuffle if the lock is open
        loaded = false; // Close the lock
        document.getElementById("themes_container").style.opacity = 0
        random = randomize(current_dotfiles)

<<<<<<< HEAD
        setTimeout(() => {
            document.getElementById("themes_container").innerHTML = "";
            generateCards(random);
            document.getElementById("themes_container").style.opacity = 1;
            setTimeout(() => {
                loaded = true; // Open the lock after a certain timeout
            }, 400); // This time includes the opactiy change to 1 too,
                     // So the lock will be released 200ms after everything is done
        }, 300);
    }
=======
  if(load == false) {
    load = true;

    document.getElementById("themes_container").style.opacity = 0

    random = randomize(dotfiles)

    setTimeout(() => {
        document.getElementById("themes_container").innerHTML = "";
        generateCards(random);
        document.getElementById("themes_container").style.opacity = 1;
        load = false
    }, 300);
  }
>>>>>>> 7dea5ed950a20a0b066fc23f2322b5a32b8dbd62
});
