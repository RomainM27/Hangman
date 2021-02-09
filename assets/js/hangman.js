let countPos = 0;// counter to know if we win
let countNeg = 0; // counter of the fails
let letterOfTheButton = ""; // var for the value of button
let letterOfFailure = "";// var for the str with all the failure
const chosseOneWord = [
    "Django",
    "Laravel",
    "Wordpress",
    "React",
    "Vues",
    "Angular",
    "coder",
    "hangman"
];

let wordsArray = chooseOne(chosseOneWord).toUpperCase().split('');
console.log(wordsArray);
createSpanForWord(wordsArray);
let placeLetterArray = document.querySelectorAll(".letter"); // array of class (word to think)

let ctx = document.getElementById("myCanvas").getContext("2d");
startDraw() // start the canvas event (begin,etc)
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
            DrawHangman(countNeg); // hangman function
        }

        Win(countPos); //check if we win
        Lost(countNeg); //check if we lost
    })
}); // end of button interaction

// at the end its the replace
let buttonPop = document.querySelector('#pop-up button');
buttonPop.addEventListener("click", () =>{
    location.href = 'https://romainm27.github.io/index.html'
})

// =============================== function ==============
// return an random word
function chooseOne(chosseOneWord){
    return chosseOneWord[Math.floor(Math.random() * chosseOneWord.length)];
}

//background-color: rgb(172, 255, 172); vert
// to this when its win
function Win(countPos) {
    if (countPos === wordsArray.length) {
        disabledAllButtons();
        console.log('win');
        popUpWin();
    }
}

function popUpWin(){
    let pop = document.getElementById('pop-up');
    let h1Pop = document.querySelector('#pop-up h1');
    let buttonPop = document.querySelector('#pop-up button');
    h1Pop.innerHTML = 'Congratulation ! You are a winner !';
    pop.style.backgroundColor = 'rgb(198, 253, 198)';
    buttonPop.classList.add('win');
    pop.hidden = false;
}

// to this when its lost
function Lost(countNeg) {
    if (countNeg === 5){
        disabledAllButtons();
        console.log('lost');
        popUpLost()
    }
}

function popUpLost(){
    let pop = document.getElementById('pop-up');
    let h1Pop = document.querySelector('#pop-up h1');
    let buttonPop = document.querySelector('#pop-up button');
    h1Pop.innerHTML = 'Looooser, you are realy bad !!! AHAH';
    pop.style.backgroundColor = 'rgb(250, 161, 161)';
    buttonPop.classList.add('lost');
    pop.hidden = false;
}

// create the span with they class for the word to guess
function createSpanForWord(wordsArray) {
    for (let countTiret = 0; countTiret < wordsArray.length; countTiret++) {
        let wordsPart = document.querySelector('.wordsPart');
        let span = document.createElement('span');
        span.classList.add('letter');
        wordsPart.appendChild(span);
    }
}

// disa all the buttons (at the end)
function disabledAllButtons() {
    allButton.forEach(button => {
        button.setAttribute("disabled","true") ;
        button.classList.add('disa');
    });
}

// init the canvas
function startDraw() {
    ctx.fillStyle = "#615661";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.stroke();
}

// check in witch step we are and do the canvas
function DrawHangman(ite){
    if(ite === 1){
        hangman1()
    }
    else if(ite === 2){
        ctx.lineTo(300,250);
        ctx.moveTo(350,300);
        ctx.arc(300,300, 50,0 , Math.PI *2,true)
        ctx.stroke();
    }
    else if(ite === 3) {
        ctx.moveTo(300,350);
        ctx.lineTo(300,500);
        ctx.stroke();
    }
    else if(ite === 4) {
        ctx.moveTo(300,375);
        ctx.lineTo(225,450);
        ctx.moveTo(300,375);
        ctx.lineTo(375,450);
        ctx.stroke();
    }
    else {
        ctx.moveTo(300,500);
        ctx.lineTo(250,600);
        ctx.moveTo(300,500);
        ctx.lineTo(350,600);
        ctx.stroke();
    }

}

// all function ?? dont know
function hangman1(){
    ctx.moveTo(500,700);
    ctx.lineTo(50,700);
    ctx.lineTo(50,100);
    ctx.lineTo(300,100);
    ctx.stroke();
}
