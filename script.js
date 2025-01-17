const cardList = document.querySelector('.child')
const cards = document.querySelector('.child .card')
const allCards = document.querySelectorAll('.child p')
// const windowLoad = window.addEventListener('DOMContentLoaded',start)


cardList.addEventListener('click',clickMe)

let cardNumOne = null;
let cardNumTwo = null;
 
let trackFirst = null;
let trackSecond = null;
 
function clickMe(e) {
    if (e.target.classList[0] == 'toggle-card'){
        if (cardNumOne == null) {
            cardNumOne = e.target.innerHTML;
            trackFirst = e.target;
            e.target.classList.toggle('card');
        } else if (cardNumTwo == null) {
            cardNumTwo = e.target.innerHTML;
            trackSecond = e.target;
            e.target.classList.toggle('card');
            setTimeout(start, 500);
        }
        console.log(`card one = ${cardNumOne}`);
        console.log(`card two = ${cardNumTwo}`);
    } 
}
 
function start() {
    if ((cardNumOne && cardNumTwo) && (cardNumOne == cardNumTwo)) {
        alert('A MATCH');
    }else if ((cardNumOne && cardNumTwo) && (cardNumOne != cardNumTwo)){
        alert('NOT A MATCH');
        trackFirst.classList.toggle('card');
        trackSecond.classList.toggle('card');
    }
 
    
    cardNumOne = null;
    cardNumTwo = null;
    trackFirst = null;
    trackSecond = null;
}
 
 

