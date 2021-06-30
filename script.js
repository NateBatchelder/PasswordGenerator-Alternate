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
    special: getRandomSymbol,
};

generateEl.addEventListner('click', () => {
    const passwordCharacterCount = +lenghtEl.value;
    const hasLower = toIncludeLowercase.checked; 
    const hasUpper = toIncludeUppercase.checked;
    const hasNumber = includeNumbers.checked;
    const hasSymbol = includeSpecialCharacters.checked;

   resultEl.innerText = generatePassword(
       hasLower, 
       hasUpper, 
       hasNumber, 
       hasSymbol, 
       passwordCharacterCount
    );
});

// Generate Password Function

function generatePassword(lower, upper, number, symbol, length) {
// inculde initial password variable
// filter out unchecked types
// loop over until length is met, using checked types
    let yourNewPassword = '';
    const typesCount = lower + uppper + number + symbol;
// creates an array[] with the included objects {}
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter 
        (item => Object.valules(item)[0]);
// check to see if the varaible is requested by the user, if null, then return empty string
        if(typesCount === 0) {
        return '';
        }
        for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            randomPassword += randomFunc[funcName]();
        });
    const yourNewPassword = randomPassword.slice(0, length);
return yourNewPassword
}

// user options

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
}

function getRandomSpecial() {
    const symbols = '!@#$%^&*(){}=<>/,.';
    return symbols[Math.floor(Math.random() * length)];
}
}