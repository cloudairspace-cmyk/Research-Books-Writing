#!/usr/bin/env python3
"""
business_books_generator.py
Shared framework and SVG generators for Books 17-21 (Business Research Series).
"""

import json
import os
import re

NAVY = '#1a3a5c'
GOLD = '#c9a227'
TEAL = '#2d6a4f'
MAROON = '#8b3a3a'
LGOLD = '#d4a843'
CREAM = '#f8f6f1'
DGRAY = '#1a2332'
SLATE = '#334155'
CARD_BG = '#222f3e'

def wrap_fig(svg_html, caption):
    return f'<div class="interactive-figure" style="margin:24px 0;text-align:center;">{svg_html}<p style="font-style:italic;color:#666;font-size:.82rem;margin-top:10px;text-align:center;">{caption}</p></div>'

def svg_flow(title, steps):
    step_w = 92
    step_h = 52
    arrow_w = 22
    n = len(steps)
    total_w = n * step_w + (n - 1) * arrow_w + 40
    total_h = 130
    shapes = []
    x = 20
    y = 52
    for i, s in enumerate(steps):
        num = s.get('num', str(i+1))
        txt = s.get('text', '')
        color = s.get('color', NAVY if i % 2 == 0 else TEAL)
        shapes.append(f'<rect x="{x}" y="{y}" width="{step_w}" height="{step_h}" rx="6" fill="{color}" stroke="{GOLD}" stroke-width="1.2"/>')
        shapes.append(f'<text x="{x+step_w/2}" y="{y+18}" text-anchor="middle" fill="{GOLD}" font-size="10" font-weight="700" font-family="Inter,sans-serif">STEP {num}</text>')
        # wrap text if too long
        lines = [txt]
        if len(txt) > 13:
            words = txt.split()
            mid = len(words) // 2
            lines = [' '.join(words[:mid]), ' '.join(words[mid:])]
        if len(lines) == 1:
            shapes.append(f'<text x="{x+step_w/2}" y="{y+34}" text-anchor="middle" fill="#ffffff" font-size="9" font-family="Inter,sans-serif">{lines[0]}</text>')
        else:
            shapes.append(f'<text x="{x+step_w/2}" y="{y+31}" text-anchor="middle" fill="#ffffff" font-size="8.5" font-family="Inter,sans-serif">{lines[0]}</text>')
            shapes.append(f'<text x="{x+step_w/2}" y="{y+43}" text-anchor="middle" fill="#ffffff" font-size="8.5" font-family="Inter,sans-serif">{lines[1]}</text>')
        
        if i < n - 1:
            ax = x + step_w + 3
            ay = y + step_h / 2
            shapes.append(f'<line x1="{ax}" y1="{ay}" x2="{ax+arrow_w-8}" y2="{ay}" stroke="{GOLD}" stroke-width="2"/>')
            shapes.append(f'<polygon points="{ax+arrow_w-8},{ay-4} {ax+arrow_w},{ay} {ax+arrow_w-8},{ay+4}" fill="{GOLD}"/>')
        x += step_w + arrow_w

    return f'<div style="background:{DGRAY};border-radius:8px;padding:16px 12px 14px;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {total_w} {total_h}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="{total_w/2}" y="26" text-anchor="middle" fill="#ffffff" font-size="12.5" font-weight="700" font-family="Inter,sans-serif">{title}</text>{"".join(shapes)}</svg></div>'

def svg_quadrant(title, axes, quads):
    vb_w, vb_h = 560, 360
    q_w, q_h = 220, 125
    cx, cy = 290, 205
    top_label = axes.get('top', 'HIGH')
    bot_label = axes.get('bottom', 'LOW')
    left_label = axes.get('left', 'LOW')
    right_label = axes.get('right', 'HIGH')
    
    shapes = []
    # Axes
    shapes.append(f'<line x1="70" y1="{cy}" x2="{vb_w-20}" y2="{cy}" stroke="#64748b" stroke-width="1.8"/>')
    shapes.append(f'<polygon points="{vb_w-20},{cy-5} {vb_w-10},{cy} {vb_w-20},{cy+5}" fill="#64748b"/>')
    shapes.append(f'<line x1="{cx}" y1="{vb_h-20}" x2="{cx}" y2="55" stroke="#64748b" stroke-width="1.8"/>')
    shapes.append(f'<polygon points="{cx-5},55 {cx},45 {cx+5},55" fill="#64748b"/>')
    
    # Axis labels
    shapes.append(f'<text x="{vb_w-15}" y="{cy-10}" text-anchor="end" fill="{GOLD}" font-size="10" font-weight="700">{right_label} →</text>')
    shapes.append(f'<text x="75" y="{cy-10}" text-anchor="start" fill="#94a3b8" font-size="10" font-weight="600">← {left_label}</text>')
    shapes.append(f'<text x="{cx+10}" y="65" text-anchor="start" fill="{GOLD}" font-size="10" font-weight="700">↑ {top_label}</text>')
    shapes.append(f'<text x="{cx+10}" y="{vb_h-25}" text-anchor="start" fill="#94a3b8" font-size="10" font-weight="600">↓ {bot_label}</text>')

    coords = [
        (cx - q_w - 12, cy - q_h - 12),  # Q2 (top-left)
        (cx + 12, cy - q_h - 12),        # Q1 (top-right)
        (cx - q_w - 12, cy + 12),        # Q3 (bot-left)
        (cx + 12, cy + 12)               # Q4 (bot-right)
    ]
    
    for i, q in enumerate(quads[:4]):
        qx, qy = coords[i]
        c = q.get('color', NAVY)
        t = q.get('title', '')
        d = q.get('desc', '')
        shapes.append(f'<rect x="{qx}" y="{qy}" width="{q_w}" height="{q_h}" rx="6" fill="{c}" fill-opacity="0.85" stroke="{c}" stroke-width="1.5"/>')
        shapes.append(f'<text x="{qx+q_w/2}" y="{qy+28}" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">{t}</text>')
        # desc lines
        d_lines = d.split('\\n') if '\\n' in d else [d]
        for di, dl in enumerate(d_lines[:3]):
            shapes.append(f'<text x="{qx+q_w/2}" y="{qy+52+di*18}" text-anchor="middle" fill="#e2e8f0" font-size="9">{dl}</text>')

    return f'<div style="background:{DGRAY};border-radius:8px;padding:16px 12px 14px;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w} {vb_h}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="{vb_w/2}" y="28" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">{title}</text>{"".join(shapes)}</svg></div>'

def svg_radial(title, center_text, items):
    vb_w, vb_h = 560, 360
    cx, cy = 280, 195
    cr = 54
    shapes = []
    # Center circle
    shapes.append(f'<circle cx="{cx}" cy="{cy}" r="{cr}" fill="{NAVY}" stroke="{GOLD}" stroke-width="2.5"/>')
    c_lines = center_text.split('\\n') if '\\n' in center_text else [center_text]
    if len(c_lines) == 1:
        shapes.append(f'<text x="{cx}" y="{cy+4}" text-anchor="middle" fill="{GOLD}" font-size="11" font-weight="700">{c_lines[0]}</text>')
    else:
        shapes.append(f'<text x="{cx}" y="{cy-3}" text-anchor="middle" fill="{GOLD}" font-size="10" font-weight="700">{c_lines[0]}</text>')
        shapes.append(f'<text x="{cx}" y="{cy+12}" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="600">{c_lines[1]}</text>')

    import math
    n = len(items)
    radius = 125
    node_w, node_h = 110, 42
    for i, it in enumerate(items):
        angle = (2 * math.pi / n) * i - math.pi / 2
        nx = cx + radius * math.cos(angle)
        ny = cy + radius * math.sin(angle)
        color = [TEAL, MAROON, NAVY, '#b45309', '#0369a1', '#4338ca'][i % 6]
        shapes.append(f'<line x1="{cx}" y1="{cy}" x2="{nx}" y2="{ny}" stroke="{GOLD}" stroke-width="1.4" stroke-dasharray="3,3"/>')
        shapes.append(f'<rect x="{nx-node_w/2}" y="{ny-node_h/2}" width="{node_w}" height="{node_h}" rx="6" fill="{color}" stroke="{GOLD}" stroke-width="1"/>')
        t = it.get('text', it) if isinstance(it, dict) else str(it)
        lines = [t]
        if len(t) > 15:
            words = t.split()
            mid = len(words) // 2
            lines = [' '.join(words[:mid]), ' '.join(words[mid:])]
        if len(lines) == 1:
            shapes.append(f'<text x="{nx}" y="{ny+4}" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="600">{lines[0]}</text>')
        else:
            shapes.append(f'<text x="{nx}" y="{ny-2}" text-anchor="middle" fill="#ffffff" font-size="8.5" font-weight="600">{lines[0]}</text>')
            shapes.append(f'<text x="{nx}" y="{ny+10}" text-anchor="middle" fill="#ffffff" font-size="8.5" font-weight="600">{lines[1]}</text>')

    return f'<div style="background:{DGRAY};border-radius:8px;padding:16px 12px 14px;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w} {vb_h}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="{vb_w/2}" y="28" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">{title}</text>{"".join(shapes)}</svg></div>'

def svg_bars(title, subtitle, categories, legend):
    bar_h = 32
    gap = 14
    total_h = 80 + len(categories) * (bar_h + gap) + 30
    vb_w = 560
    max_w = 330
    shapes = []
    
    # Legend
    shapes.append(f'<rect x="180" y="38" width="12" height="12" fill="{TEAL}" rx="2"/>')
    shapes.append(f'<text x="198" y="48" fill="#e2e8f0" font-size="9.5">{legend.get("leg1", "Primary Metric")}</text>')
    shapes.append(f'<rect x="340" y="38" width="12" height="12" fill="{GOLD}" rx="2"/>')
    shapes.append(f'<text x="358" y="48" fill="#e2e8f0" font-size="9.5">{legend.get("leg2", "Secondary Metric")}</text>')

    y = 70
    for c in categories:
        name = c.get('name', '')
        v1 = c.get('val1', 50)
        v2 = c.get('val2', 30)
        w1 = (v1 / 100) * max_w
        w2 = (v2 / 100) * max_w
        shapes.append(f'<text x="135" y="{y+bar_h/2+4}" text-anchor="end" fill="#f8fafc" font-size="10" font-weight="600">{name}</text>')
        # bar 1
        shapes.append(f'<rect x="145" y="{y}" width="{w1}" height="{bar_h/2-1}" fill="{TEAL}" rx="3"/>')
        shapes.append(f'<text x="{145+w1+6}" y="{y+11}" fill="{TEAL}" font-size="9" font-weight="700">{v1}%</text>')
        # bar 2
        shapes.append(f'<rect x="145" y="{y+bar_h/2+1}" width="{w2}" height="{bar_h/2-1}" fill="{GOLD}" rx="3"/>')
        shapes.append(f'<text x="{145+w2+6}" y="{y+bar_h-3}" fill="{GOLD}" font-size="9" font-weight="700">{v2}%</text>')
        y += bar_h + gap

    return f'<div style="background:{DGRAY};border-radius:8px;padding:16px 12px 14px;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w} {total_h}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="{vb_w/2}" y="24" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">{title}</text>{"".join(shapes)}</svg></div>'

def svg_pyramid(title, levels):
    n = len(levels)
    layer_h = 42
    gap = 4
    total_h = 70 + n * (layer_h + gap) + 15
    vb_w = 560
    cx = vb_w / 2
    top_w = 120
    bot_w = 440
    shapes = []
    
    for i, lv in enumerate(levels):
        f1 = i / max(n - 1, 1)
        f2 = (i + 1) / max(n - 1, 1)
        w1 = top_w + (bot_w - top_w) * f1
        w2 = top_w + (bot_w - top_w) * f2
        y = 55 + i * (layer_h + gap)
        x1 = cx - w1 / 2
        x2 = cx - w2 / 2
        c = [MAROON, '#b45309', NAVY, TEAL, '#0f766e', '#1e3a8a'][i % 6]
        pts = f"{x1:.1f},{y:.1f} {x1+w1:.1f},{y:.1f} {x2+w2:.1f},{y+layer_h:.1f} {x2:.1f},{y+layer_h:.1f}"
        shapes.append(f'<polygon points="{pts}" fill="{c}" stroke="{GOLD}" stroke-width="1"/>')
        t = lv.get('title', '')
        d = lv.get('desc', '')
        shapes.append(f'<text x="{cx}" y="{y+18}" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700">{t}</text>')
        if d:
            shapes.append(f'<text x="{cx}" y="{y+32}" text-anchor="middle" fill="#e2e8f0" font-size="8.5">{d}</text>')

    return f'<div style="background:{DGRAY};border-radius:8px;padding:16px 12px 14px;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w} {total_h}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="{cx}" y="28" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">{title}</text>{"".join(shapes)}</svg></div>'

def svg_compare(title, left, right):
    vb_w, vb_h = 560, 320
    box_w = 230
    box_h = 240
    lx = 30
    rx = 300
    y = 55
    shapes = []
    
    # Left Box
    shapes.append(f'<rect x="{lx}" y="{y}" width="{box_w}" height="{box_h}" rx="8" fill="{NAVY}" stroke="{GOLD}" stroke-width="1.2"/>')
    shapes.append(f'<rect x="{lx+15}" y="{y+14}" width="{box_w-30}" height="28" rx="4" fill="{GOLD}"/>')
    shapes.append(f'<text x="{lx+box_w/2}" y="{y+32}" text-anchor="middle" fill="{NAVY}" font-size="11" font-weight="800">{left.get("badge","APPROACH A")}</text>')
    shapes.append(f'<text x="{lx+box_w/2}" y="{y+64}" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">{left.get("title","Model A")}</text>')
    for pi, pt in enumerate(left.get('points', [])[:5]):
        shapes.append(f'<circle cx="{lx+24}" cy="{y+92+pi*26}" r="3.5" fill="{GOLD}"/>')
        shapes.append(f'<text x="{lx+36}" y="{y+95+pi*26}" fill="#f1f5f9" font-size="9">{pt}</text>')
        
    # Right Box
    shapes.append(f'<rect x="{rx}" y="{y}" width="{box_w}" height="{box_h}" rx="8" fill="{TEAL}" stroke="{GOLD}" stroke-width="1.2"/>')
    shapes.append(f'<rect x="{rx+15}" y="{y+14}" width="{box_w-30}" height="28" rx="4" fill="{GOLD}"/>')
    shapes.append(f'<text x="{rx+box_w/2}" y="{y+32}" text-anchor="middle" fill="{TEAL}" font-size="11" font-weight="800">{right.get("badge","APPROACH B")}</text>')
    shapes.append(f'<text x="{rx+box_w/2}" y="{y+64}" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">{right.get("title","Model B")}</text>')
    for pi, pt in enumerate(right.get('points', [])[:5]):
        shapes.append(f'<circle cx="{rx+24}" cy="{y+92+pi*26}" r="3.5" fill="{GOLD}"/>')
        shapes.append(f'<text x="{rx+36}" y="{y+95+pi*26}" fill="#f1f5f9" font-size="9">{pt}</text>')
        
    # Central VS badge
    cx = vb_w / 2
    cy = y + box_h / 2
    shapes.append(f'<circle cx="{cx}" cy="{cy}" r="22" fill="{DGRAY}" stroke="{GOLD}" stroke-width="2"/>')
    shapes.append(f'<text x="{cx}" y="{cy+5}" text-anchor="middle" fill="{GOLD}" font-size="12" font-weight="900">VS</text>')

    return f'<div style="background:{DGRAY};border-radius:8px;padding:16px 12px 14px;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w} {vb_h}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="{vb_w/2}" y="28" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">{title}</text>{"".join(shapes)}</svg></div>'

def svg_funnel(title, levels):
    h = 44
    gap = 4
    start_w = 400
    end_w = 140
    total_h = len(levels) * (h + gap) + 80
    vb_w = 560
    cx = vb_w / 2
    shapes = []
    n = max(len(levels) - 1, 1)
    for i, lv in enumerate(levels):
        frac = i / n
        next_frac = min((i + 1) / n, 1)
        w = start_w - (start_w - end_w) * frac
        next_w = start_w - (start_w - end_w) * next_frac
        x = (cx * 2 - 90 - w) / 2 + 70
        nx = (cx * 2 - 90 - next_w) / 2 + 70
        y = 52 + i * (h + gap)
        color = NAVY if i == 0 else (TEAL if i == len(levels) - 1 else f"hsl({210 - i * 15}, 45%, {26 + i * 5}%)")
        shapes.append(f'<polygon points="{x:.1f},{y:.1f} {x+w:.1f},{y:.1f} {nx+next_w:.1f},{y+h:.1f} {nx:.1f},{y+h:.1f}" fill="{color}" stroke="{color}" stroke-width="0.5"/>')
        shapes.append(f'<text x="{x+w/2:.1f}" y="{y+h/2+4:.1f}" text-anchor="middle" fill="#fff" font-size="10" font-family="Inter,sans-serif">{lv.get("text","")}</text>')
        shapes.append(f'<circle cx="{x+w+20:.1f}" cy="{y+h/2:.1f}" r="11" fill="{GOLD}"/>')
        shapes.append(f'<text x="{x+w+20:.1f}" y="{y+h/2+4:.1f}" text-anchor="middle" fill="#fff" font-size="9" font-weight="700">{lv.get("num", i+1)}</text>')
        shapes.append(f'<text x="{x-12:.1f}" y="{y+h/2+4:.1f}" text-anchor="end" fill="#cbd5e1" font-size="9" font-weight="600">{lv.get("label","")}</text>')
    return f'<div style="background:{DGRAY};border-radius:8px;padding:16px 10px 12px;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w} {total_h}" style="max-width:100%;height:auto;display:block;margin:0 auto;"><text x="{cx}" y="28" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">{title}</text>{"".join(shapes)}</svg></div>'

def simulate_pagination(book_dict):
    prev_part = ''
    cur_h = 0
    pages = 1
    
    for ch in book_dict['chapters']:
        part = ch.get('part', '')
        if part and part != prev_part:
            prev_part = part
            pages += 1
            cur_h = 0
        
        content = ch.get('content', '')
        tags = re.findall(r'(<(?:h\d|p|blockquote|div|table|ul|ol)[^>]*>.*?</(?:h\d|p|blockquote|div|table|ul|ol)>|<img[^>]*>)', content, re.DOTALL | re.IGNORECASE)
        if not tags:
            tags = [content]
            
        for idx, tag in enumerate(tags):
            tag_lower = tag.lower()
            if tag_lower.startswith('<h1'):
                h = 75
            elif tag_lower.startswith('<h2'):
                h = 55
            elif tag_lower.startswith('<h3'):
                h = 45
            elif tag_lower.startswith('<blockquote'):
                words = len(re.sub(r'<[^>]+>', '', tag).split())
                h = max(60, int(words / 12 * 25) + 30)
            elif 'diagram-container' in tag_lower:
                boxes = tag_lower.count('diagram-box')
                h = 160 + (boxes // 3) * 80
            elif '<svg' in tag_lower:
                h = 240
            elif '<table' in tag_lower:
                rows = tag_lower.count('<tr')
                h = max(100, rows * 35 + 40)
            elif tag_lower.startswith('<p'):
                words = len(re.sub(r'<[^>]+>', '', tag).split())
                lines = max(1, words / 13)
                h = int(lines * 25) + 12
            else:
                words = len(re.sub(r'<[^>]+>', '', tag).split())
                h = max(30, int(words / 12 * 25))
            
            is_ch_start = (idx == 0)
            if is_ch_start and cur_h > 0:
                pages += 1
                cur_h = 0
            elif cur_h + h > 700:
                pages += 1
                cur_h = 0
            cur_h += h
            
    return pages
