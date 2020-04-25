"use strict";


function toHex (num) { 
    let hex = Number(num).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
};

function start() {
    console.log("start");
    let red = Math.floor(Math.random() * 256 );
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    console.log("Red: ", red);
    console.log("Green: ", green);
    console.log("Blue: ", blue);

    let board = "";
    let color = "#" + toHex(red) + toHex(green) + toHex(blue);
    console.log(color);
    document.getElementById("left").style.background = color;
    setColor();
}

function setColor() {
    let userRed = document.getElementById('red').value;
    let userGreen = document.getElementById('green').value;
    let userBlue = document.getElementById('blue').value;
    console.log(userRed);
    let color = "#" + toHex(userRed) + toHex(userGreen) + toHex(userBlue);
    document.getElementById("right").style.background = color;
}

function setup() {
    document.getElementById('start').addEventListener('click', start);
    var buttons = document.getElementsByClassName('colors');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('change', setColor);
        buttons[i].value = 255;
    };

}


setup()