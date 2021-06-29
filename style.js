//Document Object Model Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('lowercase');
const lowercaseEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const resgenerateEl = document.getElementById('generate');
const resultEl = document.getElementById('result');



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


// user options

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
}

function getRandomSpecial() {
    const symbols = '!@#$%^&*(){}=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.lenght)]
}