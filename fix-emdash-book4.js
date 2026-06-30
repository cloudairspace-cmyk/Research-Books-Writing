const fs = require('fs');

function removeEmDashes(filePath) {
  if (fs.existsSync(filePath)) {
    let raw = fs.readFileSync(filePath, 'utf8');
    const count = (raw.match(/\u2014/g) || []).length;
    if (count > 0) {
      raw = raw.replace(/\u2014/g, '-');
      fs.writeFileSync(filePath, raw, 'utf8');
      console.log(`Replaced ${count} em dashes in ${filePath}`);
    } else {
      console.log(`No em dashes found in ${filePath}`);
    }
  }
}

removeEmDashes('books/book-04.json');
removeEmDashes('generate-book-04-part12.js');
removeEmDashes('generate-book-04-part34.js');
removeEmDashes('generate-book-04-part56.js');
removeEmDashes('assemble-book-04.js');

console.log('Done.');
