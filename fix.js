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
  // Look for textLength in any backticks format and replace it with single quotes
  // We want to replace:  \` textLength="${maxTextW}" lengthAdjust="spacingAndGlyphs"\`
  // Actually, we can just replace the whole backslash-backtick sequence.
  content = content.replace(/\\\` textLength="\\\$\\{([^}]+)\\}" lengthAdjust="spacingAndGlyphs"\\\`/g, "' textLength=\"' + $1 + '\" lengthAdjust=\"spacingAndGlyphs\"'");
  
  // Wait, let's use a simpler replace without regex
  const searchStr1 = '\\` textLength="${maxTextW}" lengthAdjust="spacingAndGlyphs"\\`';
  const replaceStr1 = "' textLength=\"' + maxTextW + '\" lengthAdjust=\"spacingAndGlyphs\"'";
  content = content.split(searchStr1).join(replaceStr1);
  
  const searchStr2 = '\\` textLength="${maxLabelW}" lengthAdjust="spacingAndGlyphs"\\`';
  const replaceStr2 = "' textLength=\"' + maxLabelW + '\" lengthAdjust=\"spacingAndGlyphs\"'";
  content = content.split(searchStr2).join(replaceStr2);

  const searchStr3 = '\\` textLength="${boxW - 30}" lengthAdjust="spacingAndGlyphs"\\`';
  const replaceStr3 = "' textLength=\"' + (boxW - 30) + '\" lengthAdjust=\"spacingAndGlyphs\"'";
  content = content.split(searchStr3).join(replaceStr3);
  
  const searchStr4 = '\\` textLength="${stepW - 12}" lengthAdjust="spacingAndGlyphs"\\`';
  const replaceStr4 = "' textLength=\"' + (stepW - 12) + '\" lengthAdjust=\"spacingAndGlyphs\"'";
  content = content.split(searchStr4).join(replaceStr4);

  const searchStr5 = '\\` textLength="${r*2 - 14}" lengthAdjust="spacingAndGlyphs"\\`';
  const replaceStr5 = "' textLength=\"' + (r*2 - 14) + '\" lengthAdjust=\"spacingAndGlyphs\"'";
  content = content.split(searchStr5).join(replaceStr5);

  const searchStr6 = '\\` textLength="${qW - 20}" lengthAdjust="spacingAndGlyphs"\\`';
  const replaceStr6 = "' textLength=\"' + (qW - 20) + '\" lengthAdjust=\"spacingAndGlyphs\"'";
  content = content.split(searchStr6).join(replaceStr6);

  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});
