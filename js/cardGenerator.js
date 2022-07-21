import { Card } from "./card.js";

function generateCards(dotfiles) {
    var cards = [];
    dotfiles.forEach((dotfile) => {
        cards.push(
            new Card(
                dotfile.title,
                dotfile.description,
                dotfile.image,
                dotfile.link,
                dotfile.reddit,
                dotfile.wm,
                dotfile.author,
                dotfile.tags
            )
        );
    });
    return cards;
}

export { generateCards };
