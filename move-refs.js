// Script to extract references from each chapter and combine into a single final chapter
const fs = require('fs');
const path = require('path');

const bookPath = path.join(__dirname, 'books', 'book-01.json');
const book = JSON.parse(fs.readFileSync(bookPath, 'utf-8'));

let allReferences = [];

book.chapters.forEach((ch, i) => {
  const content = ch.content;
  
  // Find the references section - look for <h2>References</h2> or similar patterns
  const refPatterns = [
    /<h2>References<\/h2>/i,
    /<h2>.*References.*<\/h2>/i,
    /<h3>References<\/h3>/i,
  ];
  
  let refIndex = -1;
  let matchedPattern = null;
  
  for (const pattern of refPatterns) {
    const match = content.match(pattern);
    if (match) {
      refIndex = content.indexOf(match[0]);
      matchedPattern = match[0];
      break;
    }
  }
  
  if (refIndex === -1) {
    console.log(`Chapter ${i + 1} (${ch.id}): No references heading found`);
    return;
  }
  
  // Extract references section (everything from the heading onwards)
  const refSection = content.substring(refIndex);
  
  // Remove the heading itself, keep only the list items
  const refContent = refSection.replace(matchedPattern, '').trim();
  
  // Extract individual reference items (li tags)
  const refItems = [];
  const liRegex = /<li>(.*?)<\/li>/gs;
  let liMatch;
  while ((liMatch = liRegex.exec(refContent)) !== null) {
    refItems.push(liMatch[1].trim());
  }
  
  if (refItems.length > 0) {
    allReferences.push({
      chapter: ch.title,
      chapterNum: i + 1,
      items: refItems
    });
    console.log(`Chapter ${i + 1}: Found ${refItems.length} references`);
  } else {
    // Maybe references are in <p> tags instead
    const pRegex = /<p>(.*?)<\/p>/gs;
    let pMatch;
    const pItems = [];
    while ((pMatch = pRegex.exec(refContent)) !== null) {
      const text = pMatch[1].trim();
      if (text.length > 20) { // Filter out short non-reference paragraphs
        pItems.push(text);
      }
    }
    if (pItems.length > 0) {
      allReferences.push({
        chapter: ch.title,
        chapterNum: i + 1,
        items: pItems
      });
      console.log(`Chapter ${i + 1}: Found ${pItems.length} references (from <p> tags)`);
    } else {
      console.log(`Chapter ${i + 1}: References heading found but no items extracted`);
    }
  }
  
  // Remove references section from chapter content
  ch.content = content.substring(0, refIndex).trim();
});

// Build the combined references chapter
let refsHtml = `<h1>References</h1>\n<p>This section contains all references cited throughout the book, organised by chapter for easy navigation.</p>\n\n`;

allReferences.forEach(ref => {
  refsHtml += `<h2>${ref.chapter}</h2>\n<ul>\n`;
  ref.items.forEach(item => {
    refsHtml += `<li>${item}</li>\n`;
  });
  refsHtml += `</ul>\n\n`;
});

// Add the references chapter
book.chapters.push({
  id: 'ch-references',
  title: 'References',
  content: refsHtml
});

// Save the updated book
fs.writeFileSync(bookPath, JSON.stringify(book, null, 2), 'utf-8');

console.log(`\nDone! Created combined References chapter with ${allReferences.reduce((sum, r) => sum + r.items.length, 0)} total references from ${allReferences.length} chapters.`);
console.log(`Book now has ${book.chapters.length} chapters.`);
