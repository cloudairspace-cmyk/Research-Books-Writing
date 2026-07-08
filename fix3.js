const fs = require('fs');
const files = [
  'generate-book-07-expanded-part1.js',
  'generate-book-07-expanded-part2.js',
  'generate-book-07-expanded-part3.js',
  'generate-book-07-expanded-part4.js',
  'generate-book-07-expanded-part5.js'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\\`/g, '`');
  fs.writeFileSync(file, content);
  console.log('Fixed backticks in', file);
});
