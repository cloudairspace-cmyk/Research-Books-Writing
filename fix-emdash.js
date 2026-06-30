/**
 * Strip all em dashes from book-02.json
 * Replaces "—" with " - " in all content
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'books', 'book-02.json');
let raw = fs.readFileSync(filePath, 'utf8');

// Count occurrences
const count = (raw.match(/\u2014/g) || []).length;
console.log('Em dashes found:', count);

// Replace all em dashes with " - "
raw = raw.replace(/\u2014/g, ' - ');

fs.writeFileSync(filePath, raw, 'utf8');
console.log('All em dashes removed from book-02.json');

// Verify
const check = (raw.match(/\u2014/g) || []).length;
console.log('Em dashes remaining:', check);
