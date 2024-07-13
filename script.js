let cardsArray = [
    { 'name': 'CSS', 'img': 'images/css.png' },
    { 'name': 'HTML', 'img': 'images/html.png' },
    { 'name': 'JS', 'img': 'images/js.png' },
    { 'name': 'Node', 'img': 'images/node.png' },
    { 'name': 'VSCode', 'img': 'images/vscode.png' },
    { 'name': 'Python', 'img': 'images/python.png' }
];

const parentDiv = document.querySelector('#card-section');
const gameCard = cardsArray.concat(cardsArray);

let shuffleChild = Array.from(gameCard).sort(() => Math.random() - 0.5);
console.log('shuffled cards:', shuffleChild);

//
const cardMatches = () => {
    let card_selected = document.querySelectorAll('.card-selected');
    console.log('cards matched:', card_selected);
    card_selected.forEach(card => {
        card.classList.add('card-match');
    })
}

//play until completed
const resetGame = () => {
    firstCard = '';
    secondCard = '';
    clickCount = 0;
    let card_selected = document.querySelectorAll('.card-selected');
    console.log('cards selected before reset:', card_selected);
    card_selected.forEach(card => {
        card.classList.remove('card-selected');
    })
    console.log('cards selected after reset:', document.querySelectorAll('.card-selected'));
}
// step cards selected
//only 2 cards can be selected
let clickCount = 0;
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;
    if (curCard.id === 'card-section') return;
    console.log('clicked card:', curCard);
    
    clickCount++;
    console.log('click count:', clickCount);
    
    if (clickCount < 3) {
        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            console.log('first card:', firstCard);
            curCard.parentNode.classList.add('card-selected');
        } else {
            secondCard = curCard.parentNode.dataset.name;
            console.log('second card:', secondCard);
            curCard.parentNode.classList.add('card-selected');
        }
        if (firstCard && secondCard) {
            console.log('first card:', firstCard);
            console.log('second card:', secondCard);
            if (firstCard === secondCard) {
                console.log('match');
                setTimeout(() => {
                    cardMatches();
                    resetGame();
                }, 500);
            }
            else {
                setTimeout(() => {
                    resetGame();
                }, 500);
            }
        }
    }
})
//step 1 to add the card
//change style of card if they match 
for (let i = 0; i < shuffleChild.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffleChild[i].name;
    console.log('adding card:', childDiv);
    parentDiv.appendChild(childDiv);

    const front_div = document.createElement('div');
    front_div.classList.add('front-card');
    const back_div = document.createElement('div');
    back_div.classList.add('back-card');

    back_div.style.backgroundImage = `url(${shuffleChild[i].img})`;

    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);
    console.log('child div added:', childDiv);
}
