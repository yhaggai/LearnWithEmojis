import animals from './words/animals.js';
import vehicles from './words/vehicles.js';

const wordsWithEmojis = [
  {
    word: "אדום|אדם",
    emoji: "🔴"
  },
  {
    word: "סגול|סגל",
    emoji: "💜"
  },
  {
    word: "poop",
    emoji: "💩"
  },
  ...vehicles,
  ...animals

]
export default wordsWithEmojis; 