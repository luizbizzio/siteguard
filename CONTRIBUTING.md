# Contributing to SiteGuard

Edit [`siteguard.js`](siteguard.js) and test it with the [demo](demo/index.html). Serve the repository root with `python -m http.server 8000` and open `http://localhost:8000/demo/`.

## Review a change

- Check the affected browser interaction on the demo and a plain test page. Cover keyboard navigation, touch or mouse behavior, and ordinary browser UI changes such as resizing.
- For detection changes, report false positives and expected interactions alongside detection results. Verify that important page controls remain usable.
- Keep claims about the tested behavior tied to the browser and version. Document any compatibility limitation you confirm.

Include the browser, platform, script configuration, and steps to reproduce the expected and observed behavior.
