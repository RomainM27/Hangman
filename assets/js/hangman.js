let countPos = 0;// counter to know if we win
let countNeg = 0; // counter of the fails
let letterOfTheButton = ""; // var for the value of button
let letterOfFailure = "";// var for the str with all the failure
let words = 'hangman';

let wordsArray = words.toUpperCase().split('');
console.log(wordsArray);
createSpanForWord(wordsArray);
let placeLetterArray = document.querySelectorAll(".letter"); // array of class (word to think)
// event on button
let allButton = document.querySelectorAll('.buttonsOfWords');
allButton.forEach((button) =>{
    button.addEventListener("click" , () => {
        // Modif the button first
        button.setAttribute("disabled","true") ;
        button.classList.add('disa');
        // stock the letter 
        letterOfTheButton = button.innerHTML;
        console.log(letterOfTheButton);

        // if the lettre is good 
        if(wordsArray.includes(letterOfTheButton)) {
            button.classList.add('yes');
            // check all value in the wors(in the array)
            for (let i = 0; i < wordsArray.length; i++) {
                if(wordsArray[i]=== letterOfTheButton){
                    placeLetterArray[i].innerHTML = letterOfTheButton;
                    countPos++; // counter to know if we win
                }
            }
        }else{
            button.classList.add('no');
            letterOfFailure += letterOfTheButton; // Stock all the letter of failure
            document.querySelector('.failurePart').innerHTML = letterOfFailure;
            countNeg++;
            document.querySelector('.errorCount span').innerHTML = countNeg;
        }

        Win(countPos); //check if we win
        Lost(countNeg);
    })
}); // end of button interaction





function Win(countPos) {
    if (countPos === words.length) {
        disabledAllButtons();
        console.log('win');
    }
}
function Lost(countNeg) {
    if (countNeg === 5){
        disabledAllButtons();
        console.log('lost');
    }
}


function createSpanForWord(wordsArray) {
    for (let countTiret = 0; countTiret < wordsArray.length; countTiret++) {
        let wordsPart = document.querySelector('.wordsPart');
        let div = document.createElement('div');
        let span = document.createElement('span');
        let letter = document.createTextNode(wordsArray[countTiret]);

        span.classList.add('letter');
        //div.appendChild(span);
        //span.appendChild(letter);
        //.classList.add('hidden');
        wordsPart.appendChild(span);
    }
    
}

function disabledAllButtons() {
    allButton.forEach(button => {
        button.setAttribute("disabled","true") ;
        button.classList.add('disa');
    });
}