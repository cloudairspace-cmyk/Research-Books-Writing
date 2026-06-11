const fs = require('fs');
const path = require('path');

function removeEmDashes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace em dashes with spaces around them " — " with " - "
    content = content.replace(/ — /g, ' - ');
    // Replace remaining em dashes "—" with " - " (adding spaces for readability if they were squished)
    content = content.replace(/([a-zA-Z])—([a-zA-Z])/g, '$1 - $2');
    // Replace any leftover em dashes with a standard hyphen
    content = content.replace(/—/g, '-');
    
    // Do the same for en dashes (–) just in case
    content = content.replace(/ – /g, ' - ');
    content = content.replace(/([a-zA-Z])–([a-zA-Z])/g, '$1 - $2');
    content = content.replace(/–/g, '-');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Processed: ${filePath}`);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

const bookPath = path.join(__dirname, 'books', 'book-01.json');
const booksDataPath = path.join(__dirname, 'js', 'books-data.js');

removeEmDashes(bookPath);
removeEmDashes(booksDataPath);

console.log('Finished replacing dashes.');
