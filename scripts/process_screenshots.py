#!/usr/bin/env python3
"""Scrub Expo FAB + light PII blur, write website screenshot assets."""

from __future__ import annotations

import math
import os
from PIL import Image, ImageFilter, ImageDraw

ASSETS = "/Users/notyourregulardev/.cursor/projects/Users-notyourregulardev-Documents-nexa/assets"
OUT = "/Users/notyourregulardev/Documents/nexhub-website/public/screenshots"


def is_expo_blue(r, g, b, a=255):
    if a < 180:
        return False
    if r > 200 and g > 200 and b > 200:
        return False
    return b > 140 and b > r + 40 and b > g + 20 and r < 140


def find_blue_blobs(im: Image.Image):
    rgba = im.convert("RGBA")
    px = rgba.load()
    w, h = rgba.size
    visited = [[False] * w for _ in range(h)]
    blobs = []
    for y in range(h):
        for x in range(w):
            if visited[y][x]:
                continue
            r, g, b, a = px[x, y]
            if not is_expo_blue(r, g, b, a):
                visited[y][x] = True
                continue
            stack = [(x, y)]
            visited[y][x] = True
            minx = miny = 10**9
            maxx = maxy = -1
            area = 0
            while stack:
                cx, cy = stack.pop()
                area += 1
                minx = min(minx, cx)
                maxx = max(maxx, cx)
                miny = min(miny, cy)
                maxy = max(maxy, cy)
                for nx, ny in (
                    (cx + 1, cy),
                    (cx - 1, cy),
                    (cx, cy + 1),
                    (cx, cy - 1),
                ):
                    if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                        visited[ny][nx] = True
                        rr, gg, bb, aa = px[nx, ny]
                        if is_expo_blue(rr, gg, bb, aa):
                            stack.append((nx, ny))
            bw, bh = maxx - minx + 1, maxy - miny + 1
            if 200 < area < 8000 and 25 <= bw <= 120 and 25 <= bh <= 120:
                blobs.append(
                    {
                        "cx": (minx + maxx) / 2,
                        "cy": (miny + maxy) / 2,
                        "r": max(bw, bh) / 2 + 14,
                        "area": area,
                    }
                )
    return blobs


def remove_blob(im: Image.Image, blob: dict) -> Image.Image:
    """Clone from a clean horizontal neighbor so UI behind the FAB is reconstructed."""
    src = im.convert("RGBA")
    out = src.copy()
    spx = src.load()
    opx = out.load()
    w, h = out.size
    cx, cy, rad = blob["cx"], blob["cy"], blob["r"]

    # Prefer cloning from inward (toward screen center)
    if cx < w * 0.35:
        offset = -int(rad * 2.6)  # FAB on left → sample from right
    else:
        offset = int(rad * 2.6)  # FAB on right → sample from left

    rad_i = int(rad) + 2
    for y in range(max(0, int(cy - rad_i)), min(h, int(cy + rad_i) + 1)):
        for x in range(max(0, int(cx - rad_i)), min(w, int(cx + rad_i) + 1)):
            d = math.hypot(x - cx, y - cy)
            if d > rad_i:
                continue
            sx = min(w - 1, max(0, x - offset))
            sy = y
            sr, sg, sb, sa = spx[sx, sy]
            if is_expo_blue(sr, sg, sb, sa):
                # fall back to a vertical neighbor outside the blob
                sy2 = min(h - 1, max(0, int(cy - rad - 16)))
                sr, sg, sb, sa = spx[sx, sy2]
                if is_expo_blue(sr, sg, sb, sa):
                    sr, sg, sb, sa = (248, 248, 248, 255)
            t = 1.0 if d < rad_i - 5 else max(0.0, (rad_i - d) / 5)
            r, g, b, a = opx[x, y]
            opx[x, y] = tuple(
                int(v * t + o * (1 - t))
                for v, o in zip((sr, sg, sb, sa), (r, g, b, a))
            )
    return out


def blur_boxes(im: Image.Image, boxes, radius=12) -> Image.Image:
    out = im.convert("RGBA")
    for box in boxes:
        x0, y0, x1, y1 = [int(v) for v in box]
        x0 = max(0, x0)
        y0 = max(0, y0)
        x1 = min(out.width, x1)
        y1 = min(out.height, y1)
        if x1 <= x0 or y1 <= y0:
            continue
        # Stronger privacy blur: pixelate then gaussian
        region = out.crop((x0, y0, x1, y1))
        small = region.resize(
            (max(1, region.width // 12), max(1, region.height // 12)),
            Image.Resampling.BILINEAR,
        )
        region = small.resize(region.size, Image.Resampling.NEAREST)
        region = region.filter(ImageFilter.GaussianBlur(radius=2))
        out.paste(region, (x0, y0))
    return out


def scrub(im: Image.Image, blur_regions, forced_blobs=None) -> Image.Image:
    out = im.convert("RGBA")
    blobs = list(find_blue_blobs(out))
    if forced_blobs:
        blobs.extend(forced_blobs)
    for blob in blobs:
        out = remove_blob(out, blob)
    # catch glow leftovers
    for blob in find_blue_blobs(out):
        out = remove_blob(out, blob)
    if blur_regions:
        out = blur_boxes(out, blur_regions)
    return out.convert("RGB")


# Student picks — 473x1024
JOBS = [
    {
        "src": "IMG_5964-c85f2374-264d-4d64-b2bb-0e733f7735de.png",
        "dest": "mobile-student-home.png",
        "blur": [
            (18, 88, 220, 130),  # large name "Tunde"
        ],
        "forced_blobs": [{"cx": 418, "cy": 177, "r": 48, "area": 0}],
    },
    {
        "src": "IMG_5970-78f0a168-ef85-4226-ab96-9b76dff321d6.png",
        "dest": "mobile-student-rednote-create.png",
        "blur": [],
        "forced_blobs": [{"cx": 418, "cy": 851, "r": 48, "area": 0}],
    },
    {
        "src": "IMG_5971-190342c1-caeb-4a2f-aad8-8c667dc87d6f.jpg",
        "dest": "mobile-student-rednote-detail.png",
        "blur": [
            (280, 688, 465, 742),  # author
        ],
        "forced_blobs": [{"cx": 450, "cy": 235, "r": 46, "area": 0}],
    },
    {
        "src": "IMG_5969-609bc3ed-2c85-40f9-ba91-313336d9dadf.png",
        "dest": "mobile-student-events.png",
        "blur": [
            (100, 625, 380, 655),  # Organized by Michelle Anu
        ],
        "forced_blobs": [{"cx": 54, "cy": 300, "r": 58, "area": 0}],
    },
    {
        "src": "IMG_5967-35beed53-986e-4f3e-b435-3558dfc8298a.png",
        "dest": "mobile-profile-learning.png",
        "blur": [
            (55, 268, 340, 298),  # Mr. Adebayo Johnson · 45 students
        ],
        "forced_blobs": [{"cx": 418, "cy": 84, "r": 50, "area": 0}],
    },
    {
        "src": "IMG_5968-d5b2cc11-a6e6-4904-9c28-53fef6b5ecc5.png",
        "dest": "mobile-student-class-board.png",
        "blur": [
            (48, 92, 440, 132),  # teacher + school under class title
            (55, 430, 220, 460),  # School Admin attribution if present
        ],
        "forced_blobs": [{"cx": 418, "cy": 84, "r": 50, "area": 0}],
    },
]


def main():
    os.makedirs(OUT, exist_ok=True)
    for job in JOBS:
        src = os.path.join(ASSETS, job["src"])
        dest = os.path.join(OUT, job["dest"])
        im = Image.open(src)
        cleaned = scrub(im, job["blur"], job.get("forced_blobs"))
        cleaned.save(dest, "PNG", optimize=True)
        print(f"wrote {job['dest']} ({cleaned.size})")


if __name__ == "__main__":
    main()
