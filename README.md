# SiteGuard

**A lightweight JavaScript deterrent for manual scraping and casual copying.**

[Live demo](https://siteguard.luizbizzio.com/) · [JavaScript source](./siteguard.js) · [Demo files](./demo/) · [License](./LICENSE)

SiteGuard runs in the browser and restricts common actions used to copy or inspect a page. Its goal is to make simple manual copying less convenient.

**Current version:** `1.1.2`

## Live demo

Try SiteGuard at **https://siteguard.luizbizzio.com/**.

The demo lets you test right-click, dragging, selection, and keyboard shortcuts. It also includes a local event monitor and a short explanation of every part of the script.

All demo files are in [`demo/`](./demo/). The demo is a standalone static site, with its page content created by [`demo/loadContent.js`](./demo/loadContent.js).

## How it works

| Browser action | What SiteGuard does |
| --- | --- |
| Right-click | Cancels the browser context menu (`contextmenu`). |
| Dragging | Stops normal element dragging (`dragstart`). |
| Middle-click | Cancels the middle mouse button action (`auxclick`). |
| Keyboard shortcuts | Blocks selected `Ctrl` and `Ctrl + Shift` shortcuts, plus `F12`. |
| Text selection | Applies `user-select: none` and related CSS rules. |
| Printing | Hides page content with a print-only CSS rule. |
| DevTools timing | Checks console profiling time and reloads if it passes a threshold. |

The original script requests a profiling check every **1 ms**. If a check takes longer than **10 ms**, it clears the document and reloads the page. This is a timing-based check, so results can change with the browser and device.

**Demo difference:** To keep the live monitor usable, the demo requests a timing check every **250 ms** and logs a slow check instead of clearing and reloading the page. It is a demonstration of the behavior, not a direct copy of the full original script.

## Install

1. Copy [`siteguard.js`](./siteguard.js) into your website.
2. Include the script in the HTML `<head>`:

```html
<head>
  <script src="/siteguard.js"></script>
</head>
```

Adjust the file path if the script is stored in another folder. For earlier browser restrictions, load the script before the rest of the interactive page.

SiteGuard changes normal browser interactions. Test your site carefully, especially keyboard navigation, text selection, printing, accessibility, and performance.

## Repository

```text
siteguard/
├── siteguard.js       Original JavaScript (v1.1.2)
├── demo/              Static demonstration website
│   ├── index.html
│   ├── loadContent.js
│   ├── favicon.svg
│   ├── favicon.png
│   ├── social-preview.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── LICENSE
└── README.md
```

## Deploy the demo with Cloudflare Pages

The demo needs no framework, build tool, or server code.

| Setting | Value |
| --- | --- |
| GitHub repository | `luizbizzio/siteguard` |
| Production branch | `main` |
| Framework preset | None |
| Root directory | Repository root (default) |
| Build command | Leave blank or use `exit 0` |
| Build output directory | `demo` |

The `demo/` directory becomes the root of the deployed website. This keeps the current demo URLs, including `/favicon.svg` and `/social-preview.jpg`, working.

## Notes

SiteGuard is meant to discourage **casual manual** copying. It does not make public content private or stop a determined scraper. Do not use browser restrictions as a replacement for server-side access controls.

## License

Apache License 2.0. See [LICENSE](./LICENSE).

Created by [Luiz Bizzio](https://github.com/luizbizzio).
