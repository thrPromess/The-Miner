# ⛏ The Miner — Setup Guide

A professional Amazon affiliate deals website with a mining theme.

## Files

| File         | Purpose                        |
|--------------|-------------------------------|
| `index.html` | Main homepage                 |
| `style.css`  | All styles                    |
| `main.js`    | Timers, interactions, reveals |

## How to Use

### 1. Open Locally
Just open `index.html` in your browser — no server needed.

### 2. Upload to Hosting
Upload all 3 files to the same folder on your web host (e.g. Hostinger, Bluehost, Namecheap, etc.).

### 3. Add Your Amazon Affiliate Links
In `index.html`, find the `<a href="#" class="deal-card">` tags and replace `#` with your Amazon affiliate URLs.

In `main.js`, find the comment:
```js
// In production: replace href with your Amazon affiliate links
// Example: window.open('https://amzn.to/YOURLINK', '_blank', 'noopener');
```

### 4. Replace Deal Content
Each `.deal-card` in `index.html` has:
- An emoji (replace with a real product image using `<img src="...">`)
- Product name, price, discount badge
- Star rating
- "Ore Grade" meter (adjust the `width` % to reflect deal quality)

### 5. Update Prices
All prices are placeholder. Update with real current Amazon prices.

## Customization Tips

- **Brand color** — change `--gold: #F5A623` in `style.css` to match your palette
- **Logo** — replace the SVG in the `<header>` with an image if needed
- **Ticker** — edit `.ticker-item` spans in `index.html` to show your real deals
- **Stats** — update the hero stats (deals today, savings, members)

## SEO Tips

Add to `<head>` in `index.html`:
```html
<meta property="og:title" content="The Miner — Mining the Best Amazon Deals">
<meta property="og:description" content="We dig so you save. Best Amazon deals updated daily.">
<link rel="icon" href="favicon.ico">
```

## Affiliate Disclosure
The footer already includes the required Amazon Associates disclosure.
Make sure your Amazon affiliate account is approved before going live.

---
Built for The Miner © 2025
