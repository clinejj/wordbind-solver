const fs = require('fs');

function loadDictionary(filePath) {
  return fs.readFileSync(filePath, 'utf-8').split('\n').map(word => word.replaceAll('"', '').trim().toLowerCase());
}

function validInput(word, letterSet) {
  // Skip word if shorter than target length
  if (word.length < targetLength) {
    return false;
  }

  // Skip word if it has letters that are not in the combined word
  const wordSet = new Set(word);
  for (let letter of wordSet) {
    if (!letterSet.has(letter)) {
      return false;
    }
  }

  return true;
}

function validSolution(word, letters) {
  let wordIndex = 0;
  for (let i = 0; i < letters.length; i++) {
    if (word[wordIndex] === letters[i]) {
        wordIndex++;
    }
    if (wordIndex === word.length) {
        break;
    }
  }
  return wordIndex === word.length;
}

// Command line arguments
const dictionaryPath = process.argv[2];
const word1 = process.argv[3];
const word2 = process.argv[4];
const combinedWord = word1 + word2;
const combinedWordSet = new Set(combinedWord);
let targetLength = 5;
if (process.argv[5]) {
  targetLength = process.argv[5];
}

// Load the dictionary
const dictionary = loadDictionary(dictionaryPath);

// Find valid words and filter by length
const validWords = dictionary.filter((word) => {
  return word !== word1 &&
  word !== word2 &&
  validInput(word, combinedWordSet) &&
  validSolution(word, combinedWord);
});

// Sort validWords longest to shortest
validWords.sort((a, b) => b.length - a.length);

// Output the valid words
console.log(validWords);
