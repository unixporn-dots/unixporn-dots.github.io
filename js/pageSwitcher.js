currentPage = 1;
document.getElementById('nextPage').addEventListener('click', function() {
    document.getElementById("themes_container").innerHTML = "";
    generateCards(current_dotfiles, currentPage + 1);
});