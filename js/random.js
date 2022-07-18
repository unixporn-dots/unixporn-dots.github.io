

function randomize(sourceArray) 
{
    for (var i = 0; i < sourceArray.length - 1; i++) 
    {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
}

var loaded = true; // The lock, to prevent spamming the shuffle button
document.getElementById('js-sortSwitcher').addEventListener("click", () => {
    if (loaded) // Only shuffle if the lock is open
    { 
        loaded = false; // Close the lock
        document.getElementById("themes_container").style.opacity = 0
        randomize(current_dotfiles)
            
        setTimeout(() => {
            resetPage();
            document.getElementById("themes_container").style.opacity = 1;

            // Open the lock after a certain timeout
            // This time includes the opactiy change to 1 too,
            // So the lock will be released 200ms after everything is done
            setTimeout(() => {
                loaded = true; 
            }, 400); 
                        
        }, 300);
    }
});


