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
  
  // Replace the exact literal string chunks one by one
  content = content.replace(/\\` textLength="\\\${maxTextW}" lengthAdjust="spacingAndGlyphs"\\`/g, "' textLength=\"' + maxTextW + '\" lengthAdjust=\"spacingAndGlyphs\"'");
  content = content.replace(/\\` textLength="\\\${stepW - 12}" lengthAdjust="spacingAndGlyphs"\\`/g, "' textLength=\"' + (stepW - 12) + '\" lengthAdjust=\"spacingAndGlyphs\"'");
  content = content.replace(/\\` textLength="\\\${maxLabelW}" lengthAdjust="spacingAndGlyphs"\\`/g, "' textLength=\"' + maxLabelW + '\" lengthAdjust=\"spacingAndGlyphs\"'");
  content = content.replace(/\\` textLength="\\\${boxW - 30}" lengthAdjust="spacingAndGlyphs"\\`/g, "' textLength=\"' + (boxW - 30) + '\" lengthAdjust=\"spacingAndGlyphs\"'");
  content = content.replace(/\\` textLength="\\\${r\*2 - 14}" lengthAdjust="spacingAndGlyphs"\\`/g, "' textLength=\"' + (r*2 - 14) + '\" lengthAdjust=\"spacingAndGlyphs\"'");
  content = content.replace(/\\` textLength="\\\${qW - 20}" lengthAdjust="spacingAndGlyphs"\\`/g, "' textLength=\"' + (qW - 20) + '\" lengthAdjust=\"spacingAndGlyphs\"'");

  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});
