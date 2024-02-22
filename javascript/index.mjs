import data from '../data/data.json' assert { type: 'json' } // getting the questions data

// console.log(data)
// console.log(data.One.Question)
var proWidth = 0;
var Score = null // increments on any good answer
var globali = null //a global variable to note the index of the current question so it can be removed from the array when it is answered 
var QuesArr = [] // a global array that stores the indexes of the  available questions
for(let d = 0;d<data.qData.length;d++){ //populating quesarr with the indexes of the question data
    QuesArr.push(d)
}
console.log(QuesArr)

let questionBar = document.querySelector('.demo');//assigning the elements to values
let FirstAnswer = document.querySelector(".answer1 p")
let SecondAnswer = document.querySelector(".answer2 p")
let ThirdAnswer = document.querySelector(".answer3 p")
let FourthAnswer = document.querySelector(".answer4 p")
let probar = document.querySelector('.progressBar')

function ReadQues() { //a function that accepts quesArr as an argument
    //if quesArr is not empty, it will generate a random index in ques arr that willbe used to
    //give a new random question each time
progreShow()

    if (QuesArr.length != 0) {
let eX = Math.random() * QuesArr.length;
eX = Math.floor(eX); // randon index generated
eX =QuesArr[eX] // the index becomes its number in the array(avoids using of an index twice)
globali = eX // global copies it
console.log(eX);

questionBar.innerText = data.qData[eX].Question; //number is used in the questioning
FirstAnswer.innerText = data.qData[eX].options[0];
SecondAnswer.innerText = data.qData[eX].options[1];
ThirdAnswer.innerText = data.qData[eX].options[2];
FourthAnswer.innerText = data.qData[eX].options[3];
    }else{ //if ques arr is empty, end scores and display scores
        questionBar.innerText = `Questions Finshed. scores: ${Score} / ${data.qData.length}`;
        FirstAnswer.style.display = "none";
        SecondAnswer.style.display = "none";
        ThirdAnswer.style.display = "none";
        FourthAnswer.style.display = "none";
    }

}

FirstAnswer.addEventListener("click", chek)
SecondAnswer.addEventListener("click", chek)
ThirdAnswer.addEventListener("click", chek)
FourthAnswer.addEventListener("click", chek)

function chek() {// this function checks for the validity of the answer and scores

    if(this.innerText == data.qData[globali].answer){ // if the innerText of the element is the same as the answer stored in the json
        QuesArr.splice(QuesArr.indexOf(globali),1) //remove that index from ques arr
        Score += 1
    console.log('matches',QuesArr, Score)
    ReadQues(QuesArr) // then refresh the page with a brand new question(using the modified quesarr to randomize)

    } else {
        QuesArr.splice(QuesArr.indexOf(globali),1) // same here
        console.log('failed',QuesArr, Score)
        ReadQues(QuesArr)
    }

    console.log("finished")
}
ReadQues(QuesArr)

function progreShow() {
    
    
    let incrementor = 100/data.qData.length
    incrementor = Math.floor(incrementor)
    proWidth += incrementor
    probar.style.width = `${proWidth}%`
    console.log("progress added",proWidth)
}
