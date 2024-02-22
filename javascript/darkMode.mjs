let ball = document.querySelector('.whiteBall');
let moon = document.querySelector('.moonIcon');
let sun = document.querySelector('.sunIcon');
let body = document.querySelector('body');

let qwest = document.querySelector("p.demo")
let FstAns = document.querySelector(".answer1 p")
let SndAns = document.querySelector(".answer2 p")
let TrdAns = document.querySelector(".answer3 p")
let FothAns = document.querySelector(".answer4 p")


moon.addEventListener('click', SwitchMoon)
sun.addEventListener('click', SwitchSun)

function SwitchMoon() {
    ball.style.transform = 'translateX(35px)';
    console.log("done");
    // console.log(window.scrollY) //this the scroll element

    body.style.setProperty('--ce','#2d2d2f')
    body.style.setProperty('--dce','grey')
    body.style.setProperty('--whit','black')
    body.style.setProperty('--blac','white')
    body.style.setProperty('--b2','rgb(60,60,60')
    body.style.setProperty('--b3','grey')
    body.style.color = "white";
    qwest.style.color = 'white'
    FstAns.style.color = 'white'
    SndAns.style.color = 'white'
    TrdAns.style.color = 'white'
    FothAns.style.color = 'white'
}

function SwitchSun() {
    ball.style.transform = 'translateX(0px)'
    // console.log(window.scrollY) 

    body.style.setProperty('--ce','#475AFF')
    body.style.setProperty('--dce','#1900FF')
    body.style.setProperty('--whit','antiquewhite')
    body.style.setProperty('--blac','black')
    body.style.setProperty('--b2','rgb(105, 105, 148)')
    body.style.setProperty('--b3','rgb(168, 179, 131)')
}
