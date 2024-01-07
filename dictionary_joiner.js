const fs = require('fs');
const path = require('path');
const filePaths = process.argv.slice(2);

const words = new Set();

filePaths.forEach(filePath => {
  const content = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
  content.split('\n').forEach((word) => {
    words.add(word.toLowerCase().replaceAll('"', '').trim());
  });
});

const output = Array.from(words).sort().join('\n');

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), output);
console.log(`Wrote ${words.size} words to output.txt`)
