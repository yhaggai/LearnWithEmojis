import wordsWithEmojis from './wordsWithEmojis.js';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const regexWithEmojis = initRegex(wordsWithEmojis);
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'he';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  const poopScript = regexWithEmojis.reduce((updatedTranscript, { regex, emoji }) => {
    return updatedTranscript.replace(regex, emoji)
  }, transcript)
  const numberOfWords = poopScript.split(" ").length;
  console.log('poopScript', poopScript)
  if (e.results[0].isFinal) {
    const oldChild = p;
    p = document.createElement('p');
    words.replaceChild(p, oldChild);
    p.textContent = poopScript;
    console.log('p', p.textContent)
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();

function initRegex(words) {
  return words.map(({ word, emoji }) => ({ regex: new RegExp(word, 'gi'), emoji }));
}