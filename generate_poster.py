"""
Ivy's Sweet 16 Birthday Poster Generator
Theme: Pretty in Pink - Soft Florals, Chic & Elegant
Generates a high-quality PNG poster at 1080x1620 (2:3 ratio)
Renders at 2x then downsamples for anti-aliasing
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math
import os
import random

# ============ CONFIGURATION ============
SCALE = 2  # Render at 2x for anti-aliasing
W, H = 1080, 1620
WIDTH, HEIGHT = W * SCALE, H * SCALE
FONTS_DIR = "C:/Windows/Fonts"

# Pretty in Pink color palette
C = {
    'bg_top':       (255, 250, 248),
    'bg_bot':       (253, 235, 232),
    'blush':        (232, 160, 191),
    'baby_pink':    (244, 194, 194),
    'dusty_rose':   (196, 139, 159),
    'deep_pink':    (199, 91, 122),
    'champagne':    (245, 230, 204),
    'ivory':        (255, 255, 240),
    'white':        (255, 255, 255),
    'gold':         (191, 160, 110),
    'gold_light':   (212, 190, 150),
    'rose_gold':    (183, 110, 121),
    'text_dark':    (82, 48, 64),
    'text_med':     (130, 85, 105),
    'text_light':   (170, 130, 148),
    'sage':         (175, 195, 165),
    'sage_dark':    (145, 168, 138),
    'pink1':        (250, 218, 221),
    'pink2':        (242, 200, 210),
    'pink3':        (255, 228, 232),
    'pink4':        (238, 175, 195),
    'border':       (225, 185, 198),
    'border_gold':  (210, 188, 155),
    # Pastel additions for dress code
    'pastel_lav':   (210, 190, 220),    # Pastel lavender
    'pastel_mint':  (195, 225, 210),    # Pastel mint
    'pastel_peach': (255, 218, 200),    # Pastel peach
    # Faded background element colors
    'bg_bow':       (248, 225, 235),    # Very faded pink for bg bows
    'bg_steth':     (240, 218, 228),    # Very faded rose for bg stethoscope
    'bg_book':      (245, 232, 238),    # Very faded for bg books
    'bg_book_sp':   (238, 220, 230),    # Faded spine color
}

def S(v):
    """Scale value"""
    return int(v * SCALE)

def font(name, size):
    try:
        # Try current directory first
        if os.path.exists(name):
            return ImageFont.truetype(name, S(size))
        # Then try Windows fonts directory
        win_path = os.path.join(FONTS_DIR, name)
        if os.path.exists(win_path):
            return ImageFont.truetype(win_path, S(size))
    except Exception as e:
        pass
    return None

def get_font(names, size):
    """Try multiple font names, return first one that works"""
    if isinstance(names, str):
        names = [names]
    for name in names:
        f = font(name, size)
        if f:
            return f
    # Final fallback to a system font
    try:
        return ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", S(size))
    except:
        return ImageFont.load_default()

# ============ DRAWING PRIMITIVES ============

def gradient_bg(draw):
    for y in range(HEIGHT):
        t = y / HEIGHT
        r = int(C['bg_top'][0] + (C['bg_bot'][0] - C['bg_top'][0]) * t)
        g = int(C['bg_top'][1] + (C['bg_bot'][1] - C['bg_top'][1]) * t)
        b = int(C['bg_top'][2] + (C['bg_bot'][2] - C['bg_top'][2]) * t)
        draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))

def flower(draw, cx, cy, r, petal_col, center_col, n=5, rot=0):
    cx, cy, r = S(cx), S(cy), S(r)
    for i in range(n):
        a = rot + 2 * math.pi * i / n
        px = cx + r * 0.65 * math.cos(a)
        py = cy + r * 0.65 * math.sin(a)
        pr = r * 0.52
        draw.ellipse([px-pr, py-pr, px+pr, py+pr], fill=petal_col)
    cr = r * 0.28
    draw.ellipse([cx-cr, cy-cr, cx+cr, cy+cr], fill=center_col)

def tiny_flower(draw, cx, cy, sz, col):
    cx, cy, sz = S(cx), S(cy), S(sz)
    for i in range(5):
        a = 2 * math.pi * i / 5 - math.pi / 2
        px = cx + sz * 0.5 * math.cos(a)
        py = cy + sz * 0.5 * math.sin(a)
        draw.ellipse([px-sz*0.28, py-sz*0.28, px+sz*0.28, py+sz*0.28], fill=col)
    draw.ellipse([cx-sz*0.14, cy-sz*0.14, cx+sz*0.14, cy+sz*0.14], fill=C['gold_light'])

def leaf(draw, cx, cy, length, angle, col):
    cx, cy, length = S(cx), S(cy), S(length)
    ca, sa = math.cos(angle), math.sin(angle)
    pts = []
    for t in range(0, 360, 8):
        tr = math.radians(t)
        x = length * 0.5 * math.cos(tr)
        y = length * 0.14 * math.sin(tr)
        pts.append((x * ca - y * sa + cx, x * sa + y * ca + cy))
    if len(pts) >= 3:
        draw.polygon(pts, fill=col)

def bow(draw, cx, cy, sz, col, outline_col):
    """Outlined bow with heart center - matching reference"""
    cx, cy, sz = S(cx), S(cy), S(sz)
    lw = max(2, int(SCALE * 1.5))  # Line width

    # --- FOUR LOOPS (outline only) ---
    # Top-left loop
    draw.ellipse([cx - sz*0.48, cy - sz*0.28, cx - sz*0.10, cy + sz*0.08],
                 outline=col, width=lw)
    # Top-right loop
    draw.ellipse([cx + sz*0.10, cy - sz*0.28, cx + sz*0.48, cy + sz*0.08],
                 outline=col, width=lw)
    # Bottom-left loop
    draw.ellipse([cx - sz*0.38, cy - sz*0.08, cx - sz*0.05, cy + sz*0.18],
                 outline=col, width=lw)
    # Bottom-right loop
    draw.ellipse([cx + sz*0.05, cy - sz*0.08, cx + sz*0.38, cy + sz*0.18],
                 outline=col, width=lw)

    # --- FLOWING TAILS (outline curves) ---
    # Left tail curve
    tail_pts_l = []
    for i in range(20):
        t = i / 19.0
        x = cx - sz*0.10 - t * sz * 0.18
        y = cy + sz*0.15 + t * sz * 0.75
        x += math.sin(t * math.pi * 1.8) * sz * 0.12
        tail_pts_l.append((x, y))
    if len(tail_pts_l) > 1:
        draw.line(tail_pts_l, fill=col, width=lw, joint="curve")

    # Right tail curve
    tail_pts_r = []
    for i in range(20):
        t = i / 19.0
        x = cx + sz*0.10 + t * sz * 0.18
        y = cy + sz*0.15 + t * sz * 0.75
        x -= math.sin(t * math.pi * 1.8) * sz * 0.12
        tail_pts_r.append((x, y))
    if len(tail_pts_r) > 1:
        draw.line(tail_pts_r, fill=col, width=lw, joint="curve")

    # --- HEART CENTER ---
    heart(draw, cx, cy, int(sz*0.15), col)

def book_stack(draw, cx, cy, count=3):
    cx, cy = S(cx), S(cy)
    colors = [(C['blush'], C['dusty_rose']), (C['baby_pink'], C['deep_pink']),
              (C['champagne'], C['gold'])]
    for i in range(count):
        bw = S(48 + (i % 2) * 8)
        bh = S(13)
        bx = cx - bw // 2 + S((i % 2) * 4)
        by = cy - i * S(15)
        draw.rectangle([bx, by, bx+bw, by+bh], fill=colors[i%3][0], outline=colors[i%3][1], width=max(1, SCALE))
        draw.line([(bx+S(3), by), (bx+S(3), by+bh)], fill=colors[i%3][1], width=max(1, SCALE))

def stethoscope(img, cx, cy, sz, opacity=1.0):
    """Render 🩺 color emoji from Segoe UI Emoji onto the image"""
    cx, cy, sz = S(cx), S(cy), S(sz)
    font_sz = max(12, int(sz * 0.75))
    emoji_font = ImageFont.truetype(
        os.path.join(FONTS_DIR, "seguiemj.ttf"), font_sz)
    char = "\U0001FA7A"

    # Measure glyph
    tmp = Image.new('RGBA', (1, 1))
    td = ImageDraw.Draw(tmp)
    bb = td.textbbox((0, 0), char, font=emoji_font)
    ew, eh = bb[2] - bb[0] + 10, bb[3] - bb[1] + 10

    # Render emoji on transparent temp image
    tmp = Image.new('RGBA', (ew, eh), (0, 0, 0, 0))
    td = ImageDraw.Draw(tmp)
    td.text((-bb[0] + 5, -bb[1] + 5), char,
            font=emoji_font, embedded_color=True)

    # Apply opacity for faded background elements
    if opacity < 1.0:
        a = tmp.split()[3]
        a = a.point(lambda p: int(p * opacity))
        tmp.putalpha(a)

    # Paste centered at (cx, cy)
    px = int(cx - ew / 2)
    py = int(cy - eh / 2)
    img.paste(tmp, (px, py), tmp)

def ornament_line(draw, y, col):
    y = S(y)
    cx = WIDTH // 2
    lw = S(200)
    draw.line([(cx-lw, y), (cx+lw, y)], fill=col, width=max(1, SCALE))
    # Center diamond
    d = S(4)
    draw.polygon([(cx, y-d), (cx+d, y), (cx, y+d), (cx-d, y)], fill=col)
    # Side dots
    for off in [-0.4, 0.4, -0.7, 0.7]:
        ox = cx + int(lw * off)
        draw.ellipse([ox-S(2), y-S(2), ox+S(2), y+S(2)], fill=col)

def sparkle(draw, cx, cy, sz, col):
    cx, cy, sz = S(cx), S(cy), S(sz)
    draw.line([(cx, cy-sz), (cx, cy+sz)], fill=col, width=max(1, SCALE))
    draw.line([(cx-sz, cy), (cx+sz, cy)], fill=col, width=max(1, SCALE))
    s2 = int(sz * 0.6)
    draw.line([(cx-s2, cy-s2), (cx+s2, cy+s2)], fill=col, width=max(1, SCALE))
    draw.line([(cx+s2, cy-s2), (cx-s2, cy+s2)], fill=col, width=max(1, SCALE))

def heart(draw, cx, cy, sz, col):
    cx, cy, sz = S(cx), S(cy), S(sz)
    pts = []
    for t in range(0, 360, 3):
        tr = math.radians(t)
        x = sz * 16 * math.sin(tr)**3 / 16
        y = -sz * (13*math.cos(tr) - 5*math.cos(2*tr) - 2*math.cos(3*tr) - math.cos(4*tr)) / 16
        pts.append((cx + x, cy + y))
    if len(pts) >= 3:
        draw.polygon(pts, fill=col)

def centered(draw, text, fnt, y, col):
    y = S(y)
    bb = draw.textbbox((0, 0), text, font=fnt)
    tw = bb[2] - bb[0]
    draw.text(((WIDTH - tw) // 2, y), text, font=fnt, fill=col)

def txt_w(draw, text, fnt):
    bb = draw.textbbox((0, 0), text, font=fnt)
    return bb[2] - bb[0]

# ============ CREATE POSTER ============

def create_poster():
    img = Image.new('RGB', (WIDTH, HEIGHT), C['bg_top'])
    d = ImageDraw.Draw(img)

    # --- Fonts ---
    f_script_xl = get_font(["ITCEDSCR.TTF", "georgiai.ttf", "georgia.ttf"], 88)
    f_script_lg = get_font(["ITCEDSCR.TTF", "georgiai.ttf", "georgia.ttf"], 62)
    f_script_md = get_font(["ITCEDSCR.TTF", "georgiai.ttf", "georgia.ttf"], 48)
    f_script_sm = get_font(["ITCEDSCR.TTF", "georgiai.ttf", "georgia.ttf"], 38)
    # IVY'S - use DancingScript, very important to show!
    f_name      = get_font(["DancingScript.ttf", "SCRIPTBL.TTF", "ITCEDSCR.TTF", "georgiai.ttf"], 140)
    f_name_i    = get_font(["BOD_I.TTF", "timesi.ttf", "times.ttf"], 44)
    f_serif     = get_font(["BASKVILL.TTF", "georgia.ttf", "times.ttf"], 28)
    f_serif_sm  = get_font(["BASKVILL.TTF", "georgia.ttf", "times.ttf"], 22)
    f_gothic    = get_font(["GOTHIC.TTF", "arial.ttf"], 21)
    f_gothic_sm = get_font(["GOTHIC.TTF", "arial.ttf"], 17)
    f_gothic_xs = get_font(["GOTHIC.TTF", "arial.ttf"], 13)
    f_bell      = get_font(["BELL.TTF", "times.ttf"], 27)
    f_bell_sm   = get_font(["BELL.TTF", "times.ttf"], 21)

    # 1. Gradient background
    gradient_bg(d)

    # 1b. Background watermark elements (bows, stethoscopes, books)
    draw_background_elements(d, img)

    # 2. Double border frame
    m1, m2 = S(32), S(44)
    d.rectangle([m1, m1, WIDTH-m1, HEIGHT-m1], outline=C['border'], width=max(2, SCALE))
    d.rectangle([m2, m2, WIDTH-m2, HEIGHT-m2], outline=C['border_gold'], width=max(1, SCALE))

    # Corner flowers
    for cx, cy in [(m2+S(12), m2+S(12)), (WIDTH-m2-S(12), m2+S(12)),
                   (m2+S(12), HEIGHT-m2-S(12)), (WIDTH-m2-S(12), HEIGHT-m2-S(12))]:
        draw_corner_flower(d, cx, cy)

    # Load and place bow image (1.png) - BIGGER sizes
    try:
        bow_img = Image.open("1.png").convert("RGBA")

        # Resize and place bows at different locations (increased sizes)
        bow_positions = [
            # Corner bows (MASSIVE)
            (m2+S(50), m2+S(50), 350),
            (WIDTH-m2-S(50), m2+S(50), 350),
            (m2+S(50), HEIGHT-m2-S(50), 350),
            (WIDTH-m2-S(50), HEIGHT-m2-S(50), 350),
            # Top area
            (WIDTH//2, S(148), 320),
            (S(200), S(280), 220),
            (WIDTH-S(200), S(300), 220),
            # Upper middle area
            (WIDTH//4, S(450), 240),
            (WIDTH*3//4, S(480), 240),
            (S(180), S(620), 190),
            (WIDTH-S(180), S(650), 190),
            (WIDTH//2, S(680), 230),
            # Center middle area
            (WIDTH//2, S(850), 260),
            (S(220), S(920), 200),
            (WIDTH-S(220), S(950), 200),
            (WIDTH//3, S(1020), 230),
            (WIDTH*2//3, S(1050), 230),
            # Lower middle area
            (WIDTH//4, S(1150), 230),
            (WIDTH*3//4, S(1180), 230),
            (S(190), S(1280), 190),
            (WIDTH-S(190), S(1310), 190),
            (WIDTH//2, S(1380), 210),
            # Extra scattered bows
            (S(250), S(370), 180),
            (WIDTH-S(250), S(390), 180),
            (S(160), S(1480), 185),
            (WIDTH-S(160), S(1500), 185),
        ]
        for bx, by, bsize in bow_positions:
            bow_resized = bow_img.resize((bsize, bsize), Image.LANCZOS)
            # Center the bow image
            paste_x = int(bx - bsize // 2)
            paste_y = int(by - bsize // 2)
            img.paste(bow_resized, (paste_x, paste_y), bow_resized)
    except Exception as e:
        print(f"Could not load bow image: {e}")

    # 3. Top floral crown
    draw_top_florals(d)

    # 5. "You're Invited to"
    centered(d, "You're Invited to", f_script_lg, 198, C['text_med'])

    # 6. Ornamental line
    ornament_line(d, 262, C['gold_light'])

    # 7. IVY'S
    centered(d, "IVY'S", f_name, 280, C['deep_pink'])

    # 8. Sweet Sixteen
    centered(d, "Sweet Sixteen", f_script_xl, 420, C['dusty_rose'])

    # Hearts beside title
    heart(d, W//2 - 185, 465, 9, C['pink1'])
    heart(d, W//2 + 185, 465, 9, C['pink1'])

    # 9. BIRTHDAY CELEBRATION
    centered(d, "B I R T H D A Y   C E L E B R A T I O N", f_gothic, 520, C['text_med'])

    # 10. Ornamental line
    ornament_line(d, 535, C['gold_light'])

    # 11. Side decorations
    book_stack(d, 108, 572, 3)
    stethoscope(img, W - 108, 540, 58, opacity=0.45)
    # bow(d, 102, 625, 28, C['pink2'], C['dusty_rose'])
    # bow(d, W - 102, 618, 28, C['pink2'], C['dusty_rose'])

    # 12. Invitation text
    centered(d, "Please join us for an afternoon of", f_script_sm, 560, C['text_light'])
    centered(d, "elegance & celebration", f_script_sm, 600, C['text_light'])

    # 13. Details box
    draw_details_box(d, f_gothic_sm, f_bell)

    # 14. Ornamental line
    ornament_line(d, 940, C['gold_light'])

    # 15. Pretty in Pink
    centered(d, "~ Pretty in Pink ~", f_script_lg, 960, C['deep_pink'])

    # 16. Dress code
    draw_dress_code(d, f_gothic, f_gothic_xs)

    # 17. Theme line
    # centered(d, "T H E M E", f_gothic_sm, 1198, C['gold'])
    # centered(d, "Soft Florals  ·  Chic & Elegant  ·  Bows", f_serif_sm, 1222, C['text_med'])

    # 18. Middle decorative row
    draw_middle_decor(d, img)

    # 19. Ornamental line
    ornament_line(d, 1330, C['gold_light'])

    # 20. Closing text
    centered(d, "With love,", f_script_sm, 1365, C['text_light'])
    centered(d, "we can't wait to celebrate with you!", f_script_sm, 1405, C['text_light'])

    # 22. Bottom bow
    # bow(d, W//2, H - 115, 38, C['blush'], C['dusty_rose'])

    # 23. Bottom florals
    draw_bottom_florals(d)

    # 24. Scattered sparkles, hearts, dots, tiny flowers
    draw_scatter(d)

    # Downsample for anti-aliasing
    img = img.resize((W, H), Image.LANCZOS)
    return img


def draw_corner_flower(d, cx, cy):
    """Small corner flower (already in pixel coords)"""
    sz = S(7)
    for i in range(5):
        a = 2 * math.pi * i / 5 - math.pi / 2
        px = cx + sz * math.cos(a)
        py = cy + sz * math.sin(a)
        d.ellipse([px-S(3), py-S(3), px+S(3), py+S(3)], fill=C['blush'])
    d.ellipse([cx-S(2), cy-S(2), cx+S(2), cy+S(2)], fill=C['gold_light'])


def draw_background_elements(d, img):
    """Draw faded bows, stethoscopes, and books scattered across background"""
    random.seed(99)

    # --- Background bows (scattered, faded) ---
    bg_bow_positions = [
        (155, 200, 50), (W-160, 250, 45), (130, 480, 40), (W-140, 520, 42),
        (170, 720, 48), (W-170, 680, 44), (140, 950, 46), (W-150, 1000, 40),
        (160, 1180, 42), (W-165, 1150, 48), (135, 1380, 44), (W-145, 1420, 40),
        (W//2 - 280, 350, 35), (W//2 + 280, 380, 35),
        (W//2 - 300, 820, 38), (W//2 + 300, 860, 38),
        (W//2 - 260, 1100, 36), (W//2 + 260, 1300, 36),
    ]
    # for bx, by, bsz in bg_bow_positions:
    #     bow(d, bx, by, bsz, C['pink2'], C['dusty_rose'])

    # --- Background stethoscopes (scattered, faded) ---
    bg_steth_positions = [
        (180, 350, 55), (W-180, 400, 50), (160, 650, 48), (W-160, 600, 52),
        (175, 880, 50), (W-175, 850, 48), (155, 1100, 52), (W-155, 1080, 50),
        (170, 1320, 48), (W-170, 1350, 52),
        (W//2 - 320, 500, 42), (W//2 + 320, 550, 42),
        (W//2 - 300, 1050, 44), (W//2 + 300, 1020, 44),
    ]
    for sx, sy, ssz in bg_steth_positions:
        stethoscope(img, sx, sy, ssz, opacity=0.25)

    # --- Background book stacks (scattered, faded) ---
    bg_book_positions = [
        (165, 300), (W-165, 330), (150, 560), (W-150, 590),
        (175, 780), (W-175, 760), (160, 1020), (W-160, 990),
        (145, 1260), (W-145, 1280), (170, 1450), (W-170, 1470),
        (W//2 - 290, 680), (W//2 + 290, 720),
        (W//2 - 310, 1200), (W//2 + 310, 1180),
    ]
    for bbx, bby in bg_book_positions:
        # Draw faded books manually (lighter colors)
        cx, cy = S(bbx), S(bby)
        for i in range(random.randint(2, 4)):
            bw = S(random.randint(38, 55))
            bh = S(12)
            bkx = cx - bw // 2 + S((i % 2) * 3)
            bky = cy - i * S(14)
            d.rectangle([bkx, bky, bkx+bw, bky+bh], fill=C['bg_book'], outline=C['bg_book_sp'], width=max(1, SCALE))
            d.line([(bkx+S(3), bky), (bkx+S(3), bky+bh)], fill=C['bg_book_sp'], width=max(1, SCALE))


def draw_top_florals(d):
    """Floral arrangement at top of poster"""
    cx = W // 2
    # Large center
    flower(d, cx, 90, 30, C['pink1'], C['gold_light'], 5, 0)
    flower(d, cx-55, 78, 24, C['baby_pink'], C['champagne'], 5, 0.3)
    flower(d, cx+55, 78, 24, C['blush'], C['champagne'], 5, 0.6)
    flower(d, cx-105, 90, 19, C['pink2'], C['gold_light'], 5, 0.1)
    flower(d, cx+105, 90, 19, C['pink2'], C['gold_light'], 5, 0.4)
    # Tiny accents
    tiny_flower(d, cx-148, 85, 6, C['dusty_rose'])
    tiny_flower(d, cx+148, 85, 6, C['dusty_rose'])
    tiny_flower(d, cx-178, 92, 5, C['pink4'])
    tiny_flower(d, cx+178, 92, 5, C['pink4'])
    # Leaves
    leaf(d, cx-72, 108, 28, -0.5, C['sage'])
    leaf(d, cx+72, 108, 28, 0.5, C['sage'])
    leaf(d, cx-130, 98, 24, -0.8, C['sage_dark'])
    leaf(d, cx+130, 98, 24, 0.8, C['sage_dark'])
    leaf(d, cx-165, 100, 18, -1.0, C['sage'])
    leaf(d, cx+165, 100, 18, 1.0, C['sage'])


def draw_details_box(d, f_sm, f_bell):
    """Date, time, venue details"""
    bx1, bx2 = S(130), WIDTH - S(130)
    by1, by2 = S(655), S(900)
    # Subtle fill
    d.rectangle([bx1, by1, bx2, by2], fill=(255, 248, 245), outline=C['border_gold'], width=max(1, SCALE))

    y = 672
    centered(d, "D A T E", f_sm, y, C['gold'])
    y += 26
    centered(d, "Sunday, February 15th, 2026", f_bell, y, C['text_dark'])

    y += 52
    centered(d, "T I M E", f_sm, y, C['gold'])
    y += 26
    centered(d, "2 : 30  PM   —   6 : 30  PM", f_bell, y, C['text_dark'])

    y += 52
    centered(d, "V E N U E", f_sm, y, C['gold'])
    y += 26
    centered(d, "— To Be Announced —", f_bell, y, C['text_light'])


def draw_dress_code(d, f_title, f_xs):
    """Dress code section with color swatches in rows of 4"""
    centered(d, "D R E S S   C O D E", f_title, 1030, C['text_dark'])

    swatches = [
        (C['blush'],        "Blush\nPink"),
        (C['baby_pink'],    "Baby\nPink"),
        (C['dusty_rose'],   "Dusty\nRose"),
        (C['champagne'],    "Nude\nChampagne"),
        (C['ivory'],        "Ivory"),
        (C['white'],        "White"),
        (C['pink2'],        "Pastel\nFloral"),
        (C['pastel_lav'],   "Pastel\nLavender"),
        (C['pastel_mint'],  "Pastel\nMint"),
        (C['pastel_peach'], "Pastel\nPeach"),
    ]

    sw = S(38)  # Swatch size
    gap = S(20)  # Gap between swatches
    cols_per_row = 5  # 5 colors per row
    row_gap = S(100)  # Gap between rows

    sy = S(1055)  # Starting y position

    # Draw swatches in rows of 4
    for i, (col, label) in enumerate(swatches):
        row = i // cols_per_row
        col_in_row = i % cols_per_row

        # Calculate x position (center each row)
        colors_in_this_row = min(cols_per_row, len(swatches) - row * cols_per_row)
        row_width = colors_in_this_row * sw + (colors_in_this_row - 1) * gap
        row_start_x = (WIDTH - row_width) // 2

        x = row_start_x + col_in_row * (sw + gap)
        y = sy + row * row_gap

        # Circle swatch
        d.ellipse([x, y, x+sw, y+sw], fill=col, outline=C['gold_light'], width=max(1, SCALE))
        # Label lines
        for j, line in enumerate(label.split('\n')):
            bb = d.textbbox((0, 0), line, font=f_xs)
            lw = bb[2] - bb[0]
            d.text((x + sw//2 - lw//2, y + sw + S(6) + j * S(15)), line, font=f_xs, fill=C['text_light'])

    # Add text for "any other pastel color"
    final_y = sy + ((len(swatches) - 1) // cols_per_row) * row_gap + S(72)
    centered(d, "or any other pastel color", f_xs, final_y, C['text_light'])


def draw_middle_decor(d, img):
    """Middle decorative row with icons"""
    cx = W // 2
    y = 1275

    flower(d, cx-150, y, 16, C['pink1'], C['gold_light'], 5, 0.2)
    leaf(d, cx-170, y+10, 18, -0.6, C['sage'])
    # bow(d, cx, y, 42, C['blush'], C['dusty_rose'])
    flower(d, cx+150, y, 16, C['pink1'], C['gold_light'], 5, 0.8)
    leaf(d, cx+170, y+10, 18, 0.6, C['sage'])
    book_stack(d, cx-210, y+12, 2)
    stethoscope(img, cx+210, y-8, 42, opacity=0.45)


def draw_bottom_florals(d):
    """Bottom floral arrangement"""
    cx = W // 2
    by = H - 72
    flower(d, cx, by, 24, C['pink1'], C['gold_light'], 5, 0.5)
    flower(d, cx-48, by+5, 19, C['baby_pink'], C['champagne'], 5, 0.2)
    flower(d, cx+48, by+5, 19, C['blush'], C['champagne'], 5, 0.8)
    flower(d, cx-92, by, 15, C['pink2'], C['gold_light'], 5, 0)
    flower(d, cx+92, by, 15, C['pink2'], C['gold_light'], 5, 0.4)
    leaf(d, cx-68, by+14, 22, -0.4, C['sage'])
    leaf(d, cx+68, by+14, 22, 0.4, C['sage'])
    leaf(d, cx-115, by+6, 18, -0.7, C['sage_dark'])
    leaf(d, cx+115, by+6, 18, 0.7, C['sage_dark'])


def draw_scatter(d):
    """Scatter sparkles, hearts, tiny flowers, dots"""
    random.seed(42)

    # Sparkles
    for sx, sy in [(148, 305), (W-148, 355), (175, 910), (W-175, 955),
                    (195, 1155), (W-195, 1108), (128, 1410), (W-128, 1425)]:
        sparkle(d, sx, sy, 7, C['gold_light'])

    # Tiny side flowers
    for fx, fy in [(88, 255), (W-88, 285), (82, 755), (W-82, 710),
                    (92, 1055), (W-92, 1085), (78, 1355), (W-78, 1385)]:
        tiny_flower(d, fx, fy, 5, C['pink2'])

    # Hearts
    for hx, hy in [(118, 455), (W-118, 485), (98, 1255), (W-98, 1285)]:
        heart(d, hx, hy, 7, C['pink2'])

    # Dot scatter along borders
    for _ in range(45):
        x = random.choice([random.randint(55, 140), random.randint(W-140, W-55)])
        y = random.randint(130, H-130)
        s = random.randint(1, 3)
        d.ellipse([S(x-s), S(y-s), S(x+s), S(y+s)], fill=C['pink1'])


# ============ RUN ============
if __name__ == "__main__":
    print("Generating Ivy's Sweet 16 poster...")
    poster = create_poster()
    out = os.path.join(os.path.dirname(__file__), "ivy_sweet16_poster.png")
    poster.save(out, "PNG")
    print(f"Saved: {out}")
    print(f"Size: {poster.size[0]}x{poster.size[1]} px")
