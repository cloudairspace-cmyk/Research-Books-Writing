const b = require('./books/book-02.json');
console.log('Title:', b.title);
console.log('Subtitle:', b.subtitle);
console.log('Pages:', b.pages);
console.log('Chapters:', b.chapters.length);
const parts = [...new Set(b.chapters.map(c => c.part))];
console.log('Parts:', parts.length);
parts.forEach(p => console.log('  -', p));
console.log('\nChapter Details:');
let totalChars = 0;
b.chapters.forEach((c, i) => {
  totalChars += c.content.length;
  console.log('  ' + c.id + ': ' + c.title.substring(0, 60) + '... [' + c.content.length + ' chars]');
});
console.log('\nTotal content:', (totalChars / 1024).toFixed(1), 'KB');
console.log('Est. word count:', Math.round(totalChars / 6));
