#!/usr/bin/env python3
"""
run-generators.py
Converts the Node.js book generators to Python execution.
Reads each generate-book-XX.js, extracts the book JSON structure via
a lightweight JS-to-JSON approach using the subprocess module with
the system's JavaScript runtime, or falls back to direct Python generation.
"""
import json
import os
import re
import subprocess
import sys

BOOKS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'books')

def run_js_with_osascript(js_file):
    """Use macOS osascript (JXA) to run JavaScript and capture output."""
    # Read the JS file
    with open(js_file, 'r') as f:
        js_content = f.read()
    
    # Modify the JS to output JSON to stdout instead of writing to file
    # Replace fs.writeFileSync with a print
    modified = js_content.replace(
        "const fs = require('fs');",
        "// const fs = require('fs');"
    ).replace(
        "const path = require('path');",
        "// const path = require('path');"
    )
    
    # Find the writeFileSync line and replace with console output
    modified = re.sub(
        r"fs\.writeFileSync\([^;]+;",
        "",
        modified
    )
    
    # Remove the stats section at the end
    # Add JSON output instead
    modified = re.sub(
        r"// Stats[\s\S]*$",
        "\n// Output JSON\nconsole.log(JSON.stringify(book));",
        modified
    )
    
    # Try running with osascript -l JavaScript
    try:
        result = subprocess.run(
            ['osascript', '-l', 'JavaScript', '-e', modified],
            capture_output=True, text=True, timeout=60
        )
        if result.returncode == 0 and result.stdout.strip():
            return json.loads(result.stdout.strip())
    except Exception as e:
        print(f"  osascript failed: {e}")
    
    return None

def extract_book_from_js(js_file):
    """Parse the JS generator file and extract the book JSON data directly in Python."""
    with open(js_file, 'r') as f:
        content = f.read()
    
    # Extract book metadata
    book = {}
    
    # Simple regex extractions for the book object properties
    for field in ['id', 'title', 'subtitle', 'author', 'publisher', 'edition', 'category']:
        match = re.search(rf'{field}:\s*"([^"]*)"', content)
        if match:
            book[field] = match.group(1)
    
    for field in ['year', 'pages']:
        match = re.search(rf'{field}:\s*(\d+)', content)
        if match:
            book[field] = int(match.group(1))
    
    # Extract chapter functions - find all function chXX() blocks
    # Each function returns a template literal with the chapter content
    chapters = []
    
    # Find the parts array structure
    parts_data = []
    parts_match = re.search(r'const parts = \[(.*?)\];', content, re.DOTALL)
    if parts_match:
        parts_text = parts_match.group(1)
        # Parse parts
        part_blocks = re.findall(r'\{\s*title:\s*"([^"]*)".*?chapters:\s*\[(.*?)\]\s*\}', parts_text, re.DOTALL)
        for part_title, chs_text in part_blocks:
            ch_items = re.findall(r'\{\s*id:\s*"([^"]*)",\s*title:\s*"([^"]*)"', chs_text)
            parts_data.append({
                'title': part_title,
                'chapters': [{'id': cid, 'title': ctitle} for cid, ctitle in ch_items]
            })
    
    # Extract each chapter function's content
    # Find function chXX() { return `...`; }
    func_pattern = re.compile(r'function (ch\d+|references)\(\)\s*\{[^`]*`(.*?)`;\s*\}', re.DOTALL)
    func_contents = {}
    for match in func_pattern.finditer(content):
        func_name = match.group(1)
        func_content = match.group(2)
        # Unescape the template literal
        func_content = func_content.replace('\\n', '\n').replace("\\'", "'").replace('\\"', '"').replace('\\\\', '\\')
        func_contents[func_name] = func_content
    
    # Assemble chapters from parts
    ch_idx = 1
    for part in parts_data:
        for ch_info in part['chapters']:
            func_name = f"ch{ch_idx:02d}"
            if func_name in func_contents:
                chapters.append({
                    'id': ch_info['id'],
                    'title': ch_info['title'],
                    'part': part['title'],
                    'content': func_contents[func_name]
                })
            ch_idx += 1
    
    # Add references
    if 'references' in func_contents:
        chapters.append({
            'id': 'ch-references',
            'title': 'References',
            'content': func_contents['references']
        })
    
    book['chapters'] = chapters
    return book

def process_book(js_file, book_num):
    """Process a single book generator file."""
    print(f"\nProcessing Book {book_num}: {os.path.basename(js_file)}")
    
    book = extract_book_from_js(js_file)
    
    if not book or not book.get('chapters'):
        print(f"  ERROR: Could not extract book data from {js_file}")
        return False
    
    # Write JSON
    out_path = os.path.join(BOOKS_DIR, f'book-{book_num:02d}.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(book, f, indent=2, ensure_ascii=False)
    
    # Stats
    total_chars = sum(len(ch.get('content', '')) for ch in book['chapters'])
    total_words = sum(len(re.sub(r'<[^>]*>', '', ch.get('content', '')).split()) for ch in book['chapters'])
    file_size = os.path.getsize(out_path)
    
    print(f"  Title: {book.get('title', 'N/A')}")
    print(f"  Chapters: {len(book['chapters'])}")
    print(f"  Total HTML chars: {total_chars:,}")
    print(f"  Approx words: {total_words:,}")
    print(f"  File size: {file_size:,} bytes")
    print(f"  Output: {out_path}")
    
    return True

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Process book 11
    js_file = os.path.join(base_dir, 'generate-book-11.js')
    if os.path.exists(js_file):
        process_book(js_file, 11)
    
    # Process books 12-16 as they are created
    for num in range(12, 17):
        js_file = os.path.join(base_dir, f'generate-book-{num}.js')
        if os.path.exists(js_file):
            process_book(js_file, num)
    
    print("\nDone!")
