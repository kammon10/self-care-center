var affermationslist =
[
  'I am confident and value myself',
  'I am growing and learning every day',
  'I believe in myself and my skills',
  'I have the power to change the world',
  'I can do anything I set my mind to',
  'I am confident in my abilities',
  'I grow with every challenge',
  'I am consistent in my hard work',
];

var mantrasList = [
  'I am powerful. I am capable. I am in control',
  'I am becoming. I am becoming who I want to be. I am becoming all that I dream. I am becoming what I deserve to be. I am becoming what I want to be',
  'Do not be afraid to give up the good to go for the great',
  'I let go of anything not for my highest good',
  'You are the sky, everything else is just the weather',
];
var messageBox = document.querySelector('.message-box');
var affirmationButton = document.querySelector('#option1');
var mantraButton = document.querySelector('#option2');
var messageButton = document.querySelector('.message');
var picture = document.querySelector('picture-box');
var icon = document.querySelector('.icon');
var expressionQuote = document.querySelector('.expression-quote');
var spinner = document.querySelector('.spinner');



messageButton.addEventListener('click', displayRandomMessage);

function displayRandomMessage() {
  event.preventDefault()
icon.classList.add('hidden')
expressionQuote.classList.remove('hidden')
if (mantraButton.checked === true) {
  expressionQuote.innerText = `${mantrasList[randomReturns(mantrasList)]}`;
} else {
  expressionQuote.innerText = `${affermationslist[randomReturns(affermationslist)]}`;
}
// spinner.parentElement.removeChild(spinner);
  }

function randomReturns(array) {
  return Math.floor(Math.random() * array.length)
};
