/**
 * verify-no-emdashes.js
 * Strictly enforcing the zero em-dash rule across Books 1, 2, 3, and 4.
 */
const fs = require('fs');
const path = require('path');

const books = ['book-01.json', 'book-02.json', 'book-03.json', 'book-04.json', 'book-05.json'];

books.forEach(filename => {
  const filepath = path.join(__dirname, 'books', filename);
  if (fs.existsSync(filepath)) {
    let rawData = fs.readFileSync(filepath, 'utf-8');
    
    // Check if em-dashes exist
    if (rawData.includes('\u2014') || rawData.includes('—')) {
      console.log(`Em-dashes found in ${filename}. Removing them...`);
      // Replace em-dash with a standard hyphen and a space or just a standard hyphen
      // The user said: "in book 1 we dont didnt use this kind of "— " in it didnt you see put it in your momery do not use them"
      // I will replace them with standard hyphens "-".
      rawData = rawData.replace(/—/g, '-');
      rawData = rawData.replace(/\u2014/g, '-');
      
      fs.writeFileSync(filepath, rawData, 'utf-8');
      console.log(`Cleaned ${filename}`);
    } else {
      console.log(`${filename} is clean. No em-dashes found.`);
    }
    
    // Also let's print final word counts to confirm
    const bookJson = JSON.parse(rawData);
    let words = 0;
    bookJson.chapters.forEach(ch => {
      words += ch.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
    });
    console.log(`${filename} Final Word Count: ${words} (Est Pages: ${Math.ceil(words / 280)})`);
  }
});
