const fs = require('fs');
['book-06','book-07'].forEach(bn => {
  const book = JSON.parse(fs.readFileSync(`books/${bn}.json`, 'utf8'));
  console.log(`\n======= ${bn}: ${book.title} =======`);
  book.chapters.forEach((ch, i) => {
    const headings = ch.content.match(/<h2[^>]*>([^<]+)<\/h2>/g) || [];
    const words = ch.content.split(/\s+/).filter(w => w.length > 0).length;
    console.log(`Ch ${i+1}: [${words}w] "${ch.title}"`);
    headings.slice(0, 3).forEach(h => console.log(`  - ${h.replace(/<[^>]+>/g, '')}`));
    if (headings.length > 3) console.log(`  ... +${headings.length-3} more sections`);
  });
});
