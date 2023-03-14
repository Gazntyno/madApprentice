const cardArray = [ 
    {
        name: 'flower',
        img: 'images/flower.png',
    },
    {
        name: 'film',
        img: 'images/film.png',
    },
    {
        name: 'ape',
        img: 'images/boredape.jpeg',
    },
    {
        name: 'glitch',
        img: 'images/glitch.jpeg',
    },
    {
        name: 'jet',
        img: 'images/jet.jpeg',
    },
    {
        name: 'philosopher',
        img: 'images/philosopher.jpeg',
    },
    {
        name: 'flower',
        img: 'images/flower.png',
    },
    {
        name: 'film',
        img: 'images/film.png',
    },
    {
        name: 'ape',
        img: 'images/boredape.jpeg',
    },
    {
        name: 'glitch',
        img: 'images/glitch.jpeg',
    },
    {
        name: 'jet',
        img: 'images/jet.jpeg',
    },
    {
        name: 'philosopher',
        img: 'images/philosopher.jpeg',
    },
    


];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('#grid');

function createBoard()
{
    for (let i = 0; i < cardArray.length; i++)
    {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/bandana.jpeg');
        card.setAttribute('data-id', i);
        grid.appendChild(card);
    }
}

createBoard();