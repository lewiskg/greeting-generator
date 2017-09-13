(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const greetingFrench = () => {
	return "Bonjour";
};

module.exports = greetingFrench;
},{}],2:[function(require,module,exports){
"use strict";

const greetingKorean = () => {
	return "안녕하세요";
};

module.exports = greetingKorean;
},{}],3:[function(require,module,exports){
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
			case "lang-french":
				domHolder.innerHTML = `<p>${french()}</p>`;
			break;
			case "lang-spanish":
				domHolder.innerHTML = `<p>${spanish()}</p>`;
			break;
			case "lang-korean":
				domHolder.innerHTML = `<p>${korean()}</p>`;
			break;
			default:
				domHolder.innerHTML = `<p>Hello</p>`;
		}
	});
}


},{"./french":1,"./korean":2,"./spanish":4}],4:[function(require,module,exports){
"use strict";

const greetingSpanish = () => {
	return "Hola";
};

module.exports = greetingSpanish;
},{}]},{},[3]);
