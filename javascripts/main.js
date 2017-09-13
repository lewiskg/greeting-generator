"use strict";

console.log("in main.js");

const french = require('./french');
const spanish = require('./spanish');
const korean = require('./korean');

let domHolder = document.getElementById("greeting-holder");

domHolder.innerHTML += `<p>${french()}</p>`;
domHolder.innerHTML += `<p>${spanish()}</p>`;
domHolder.innerHTML += `<p>${korean()}</p>`;

