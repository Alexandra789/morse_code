const DIST = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
}

let button = document.querySelector('.button');
let output = document.querySelector('.output');
let error = document.querySelector('.error');
let regExp = /^[A-Za-z0-9]*$/;

function checkText(value) {
    if (!value) {
        error.innerHTML = 'ачто кодировать???';
        return false;
    } else if (!regExp.test(value)) {
        error.innerHTML = 'пишите только инглиш букавы и цифры пж';
        return false;
    } else {
        error.innerHTML = '';
        return true;
    }
}

button.addEventListener('click', (e) => {
    let inputValue = document.querySelector('.input').value.toUpperCase();
    let correctText = checkText(inputValue);
    let resultString = '';
    if (correctText) {
        inputValue.split('');
        for (let i = 0; i < inputValue.length; i++) {
            let firstSymbol = inputValue[i];
            for (const symbol in DIST) {
                if (symbol === firstSymbol) {
                    resultString += DIST[firstSymbol];
                    output.innerHTML += resultString;
                }
            }
        }
    }
})