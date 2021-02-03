const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const clipboardEl = document.getElementById('clipboard');
const generateEl = document.getElementById('generate');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) { return };

  textArea.value = password;
  document.body.appendChild(textArea);

  // selects everything in text area
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
  alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {

  // Returns length value in number;
  const length = +lengthEl.value;

  // Returns true or false if checked/unchecked
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length);

})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';

  // How many checkboxes are selected
  const typesCount = lower + upper + number + symbol;

  // filters out everything that has false as a value and doesn't include in the array
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

  if (typesCount === 0) {
    return ""
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]();
    })
  }
  const finalPassword = generatedPassword.slice(0, length)
  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = `!@#$%^&*(){}[]=<>/,.`
  return symbols[Math.floor(Math.random() * symbols.length)]
}

