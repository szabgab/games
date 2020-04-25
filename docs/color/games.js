"use strict";

let red = 0;
let green = 0;
let blue = 0;
let hidden_color_hex = "#000000";

function toHex (num) { 
    let hex = Number(num).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
};

function start() {
    console.log("start");
    red = 0;
    green = 0;
    blue = 0;
    if (document.getElementById('use-red').checked) {
        red = Math.floor(Math.random() * 256 );
    }
    if (document.getElementById('use-green').checked) {
        green = Math.floor(Math.random() * 256);
    }
    if (document.getElementById('use-blue').checked) {
        blue = Math.floor(Math.random() * 256);
    }
    console.log("Red: ", red);
    console.log("Green: ", green);
    console.log("Blue: ", blue);

    let board = "";
    hidden_color_hex = "#" + toHex(red) + toHex(green) + toHex(blue);
    console.log(hidden_color_hex);
    document.getElementById('hidden-color').innerHTML = "";
    document.getElementById('match').innerHTML = "";

    document.getElementById("left").style.background = hidden_color_hex;
    setColor();
}

function show_hidden() {
    document.getElementById('hidden-color').innerHTML = hidden_color_hex + " (" + red + ", " + green + ", " + blue + ")";
    // TODO set color
}

function setColor() {
    let userRed = document.getElementById('red').value;
    let userGreen = document.getElementById('green').value;
    let userBlue = document.getElementById('blue').value;
    console.log(userRed);
    let color = "#" + toHex(userRed) + toHex(userGreen) + toHex(userBlue);
    document.getElementById("right").style.background = color;
//    console.log("red", red)
//    console.log("user red", userRed)
    if (userRed == red && userGreen == green && userBlue == blue) {
        document.getElementById('match').innerHTML = "Match!";
    }
}

function setup() {
    document.getElementById('start').addEventListener('click', start);
    document.getElementById('show').addEventListener('click', show_hidden);
    var buttons = document.getElementsByClassName('colors');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('change', setColor);
        buttons[i].value = 0;
    };

}


setup()