"use strict";

function start() {
    console.log("start");
    let width = 3;
    let height = 4;
    console.log("Height: ", height); 
    console.log("Width: ", width); 
    let board = "<table>";
    let status = new Array();

    for (let h=0; h < height; h++) {
        let row = new Array();
        for (let w=0; w < width; w++) {
            row.push("no")
        }
        status.push(row);
    }
    status[0][0] = "user";
    status[height-1][width-1] = "comp";


    for (let h=0; h < height; h++) {
        let row = '<tr>';
        for (let w=0; w < width; w++) {
            let btnId = h + '-' + w;
            row += '<td><button class="boardBtn" id="' + btnId + '">' + status[h][w] + '</button></td>';
        }
        row += '</tr>\n';
        board += row;
    }
    document.getElementById('board').innerHTML = board;

    var buttons = document.getElementsByClassName('boardBtn');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', move);
    };

}

function move(event) {
    //console.log("move");
    //console.log(event);
    console.log(this.id);
    let parts = this.id.split('-');
    x = parts[0];
    y = parts[1];
    console.log(x);
    console.log(y);
}

function setup() {
    document.getElementById('start').addEventListener('click', start);
}



setup()