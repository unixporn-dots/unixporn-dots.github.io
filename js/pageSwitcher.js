currentPage = 1;
totalPages = Math.ceil(current_dotfiles.length / 12);
document.getElementById('page-number').innerHTML = `${currentPage}/${totalPages}`;

document.getElementById('nextPage').addEventListener('click', function() {
    if (currentPage == totalPages) return;
    document.getElementById("themes_container").innerHTML = "";
    currentPage++;
    generateCards(current_dotfiles, currentPage);
    document.getElementById('page-number').innerHTML = `${currentPage}/${totalPages}`;
});

document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage == 1) return;
    document.getElementById("themes_container").innerHTML = "";
    currentPage--;
    generateCards(current_dotfiles, currentPage);
    document.getElementById('page-number').innerHTML = `${currentPage}/${totalPages}`;
});

document.getElementById('firstPage').addEventListener('click', function() {
    if (currentPage == 1) return;
    document.getElementById("themes_container").innerHTML = "";
    currentPage = 1;
    generateCards(current_dotfiles, currentPage);
    document.getElementById('page-number').innerHTML = `${currentPage}/${totalPages}`;
});

document.getElementById('lastPage').addEventListener('click', function() {
    if (currentPage == totalPages) return;
    document.getElementById("themes_container").innerHTML = "";
    currentPage = totalPages;
    generateCards(current_dotfiles, currentPage);
    document.getElementById('page-number').innerHTML = `${currentPage}/${totalPages}`;
});

function resetPageInfo() {
    currentPage = 1;
    totalPages = Math.ceil(current_dotfiles.length / 12);
    document.getElementById('page-number').innerHTML = `${currentPage}/${totalPages}`;
}