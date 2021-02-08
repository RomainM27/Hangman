const countPos = 0;
const countNeg = 0;

let words = 'hangman';

let wordsArray = words.toUpperCase().split('');
console.log(wordsArray);
createSpanForWord(wordsArray);

document.querySelectorAll('.buttonsOfWords').forEach((button) =>{
    button.addEventListener("click" , () => {
        button.disabled = true;
        button.classList.add('disa');
        console.log(button.innerHTML);
    })
});






function createSpanForWord(wordsArray) {
    for (let countTiret = 0; countTiret < wordsArray.length; countTiret++) {
        let wordsPart = document.querySelector('.wordsPart');
        let span = document.createElement('span');
        let letter = document.createTextNode(wordsArray[countTiret]);
        span.appendChild(letter);
        span.classList.add('letter');
        wordsPart.appendChild(span);
    }
    
}