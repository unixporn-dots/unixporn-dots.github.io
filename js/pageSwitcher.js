

const cardsPerPage = 12;
currentPage = 1;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function generatePage()
{
    maxPage = Math.ceil(current_dotfiles.length / cardsPerPage);
    if (currentPage == -1) currentPage = maxPage;
    currentPage = clamp(currentPage, 1, maxPage);
    generateCards(current_dotfiles.slice(cardsPerPage * (currentPage - 1), cardsPerPage * currentPage));
    document.getElementById('page-number').innerHTML = `${currentPage}/${maxPage}`;
}


function resetPage() {
    currentPage = 1;
    generatePage();
}

document.getElementById('nextPage').addEventListener('click', function() {
    currentPage++;
    generatePage();
});

document.getElementById('prevPage').addEventListener('click', function() {
    currentPage--;
    generatePage();
});

document.getElementById('firstPage').addEventListener('click', function() {
    currentPage = 1;
    generatePage();
});

document.getElementById('lastPage').addEventListener('click', function() {
    currentPage = -1;
    generatePage();
});

