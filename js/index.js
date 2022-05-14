dotfiles.forEach(dotfile => {

    header = document.createElement('header')

    // Title
    title = document.createElement('h3')
    title.innerHTML = dotfile.title
    title.classList.add('theme-title')
    header.appendChild(title)

    // Image
    image = document.createElement('img')
    image.src = dotfile.image

    // link
    link = document.createElement('a')
    link.href = dotfile.link
    link.target = '_blank'
    header.appendChild(link)

    // link-icon
    linkIcon = document.createElement('i')
    linkIcon.classList.add('fas', 'fa-external-link-alt')
    link.appendChild(linkIcon)

    // Card
    dotfile_div = document.createElement('div')
    dotfile_div.classList.add('card')
    dotfile_div.appendChild(header);
    dotfile_div.appendChild(image);

    document.getElementById('themes_container').appendChild(dotfile_div);
});