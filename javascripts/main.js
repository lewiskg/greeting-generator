"use strict";

const french = require('./french');
const spanish = require('./spanish');
const korean = require('./korean');

let domHolder = document.getElementById("greeting-holder");

let buttonsArray = document.getElementsByClassName("lang");

for (let i = 0; i < buttonsArray.length; i++) {
	buttonsArray[i].addEventListener('click', (e) => {
		console.log(e.target.id);
		switch(e.target.id) {
			case "french":
				domHolder.innerHTML = `<p>${french()}</p>`;
			break;
			case "spanish":
				domHolder.innerHTML = `<p>${spanish()}</p>`;
			break;
			case "korean":
				domHolder.innerHTML = `<p>${korean()}</p>`;
			break;
			default:
				domHolder.innerHTML = `<p>Hello</p>`;
		}
	});
}
