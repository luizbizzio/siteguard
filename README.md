# SiteGuard 🛡️

**Version:** 1.1.0  
**Author:** Luiz Bizzio  
**License:** MIT  
**Repository:** [GitHub - SiteGuard](https://github.com/luizbizzio/siteguard)  
**Published:** 2024-10-26  

## Overview 🚀

SiteGuard is your ultimate **JavaScript** tool for protecting web content! Safeguard your intellectual property by preventing unauthorized access and interactions on your website. With SiteGuard, you can maintain control over your content and deter unwanted actions.

## Test the Features! 🕵️‍♂️

[**Try to Steal This Content!** 😈](https://luizbizzio.github.io/siteguard/)

**Challenge:** Test the SiteGuard's capabilities! Try to copy, save, or inspect the content on this page. Think you can bypass it? Give it a shot! 🔒

## Features 🌟

| Feature | Description | Status |
| ------- | ----------- | ------ |
| 📅 Dev Tools Detection | Monitors for Developer Tools and clears content if detected. | ✅ Active |
| 🔍 Prevent Dragging Elements | Disables dragging of elements to maintain content integrity. | ✅ Active |
| 🚧 Block Middle-click | Disable Middle-click from opening new tabs and images. | ✅ Active |
| 🚫 Disable Right-Click Menu | Prevents the context menu from appearing to reduce content theft. | ✅ Active |
| 🔒 Block Key Combinations | Stops users from opening developer tools and the JavaScript console using shortcuts. | ✅ Active |
| 🛑 Prevent Text Selection | Disables text selection on your web pages, making copying difficult. | ✅ Active |

## How to Use 🔧

### Minified Script Version (Recommended) ✅

 This lightweight, minified version is ideal for most use cases. It’s streamlined and efficient, offering full protection without additional comments.

```html
<script>
/*!-----------------------------------------------------------------------------
 * SiteGuard - Version 1.1.0
 * Author: Luiz Bizzio
 * License: MIT
 * Repository: https://github.com/luizbizzio/siteguard
 * Published: 2024-10-26
 * -------------------------------------------------------------------------- */
function af(){var e=!1;setInterval((function(){var t=performance.now();console.profile(),console.profileEnd(),console.clear&&console.clear(),e=10<performance.now()-t&&!e&&!(document.documentElement.innerHTML="")}),50)}af(),document.addEventListener("dragstart",(e=>e.preventDefault())),document.addEventListener("auxclick",(e=>1===e.button&&(e.stopPropagation(),e.preventDefault()))),document.addEventListener("contextmenu",(function(e){e.preventDefault()})),document.onkeydown=e=>{[{ctrl:!0,shift:!0,code:"KeyI"},{ctrl:!0,shift:!0,code:"KeyJ"},{ctrl:!0,shift:!0,code:"KeyV"},{ctrl:!0,code:"KeyU"},{code:"F12"}].some((t=>!!t.ctrl===e.ctrlKey&&!!t.shift===e.shiftKey&&e.code===t.code))&&e.preventDefault()},document.body.style.userSelect="none";
</script>
```
<br>

### **IMPORTANT ⚠** 
Ensure this script is embedded directly before the "head" tag at the very beginning of your HTML, not in a separate file. This prevents users from easily blocking the script and ensures no traces remain if content is auto-cleared.

<br>

---
<br>

### Explained Script Version 📝

```html
<script>
/*!-----------------------------------------------------------------------------
 * SiteGuard - Version 1.1.0
 * Author: Luiz Bizzio
 * License: MIT
 * Repository: https://github.com/luizbizzio/siteguard
 * Published: 2024-10-26
 * -------------------------------------------------------------------------- */

// 1. Dev Tools Detector
function af() {
    var n = !1;
    setInterval(function() {
        var e = performance.now();
        console.profile();
        console.profileEnd();
        console.clear && console.clear(); // Clear console
        n = 10 < performance.now() - e && !n && !(document.documentElement.innerHTML = ""); // Clear document content
    }, 50);
}

af();

// 2. Prevent users from dragging elements
document.addEventListener("dragstart", e => e.preventDefault()),

// 3. Block Middle-click from opening new tabs and images
document.addEventListener("auxclick",(t=>1===t.button&&(t.stopPropagation(),t.preventDefault())));

// 4. Disable Right-click context menu
document.addEventListener("contextmenu", function(e) {
    e.preventDefault()
});

// 5. Block Key Combinations
document.onkeydown = c => {
    // Check if any of the blocked key combinations are pressed
    [{
        ctrl: !0,
        shift: !0,
        code: "KeyI" // Developer tools
    }, {
        ctrl: !0,
        shift: !0,
        code: "KeyJ" //JavaScript console
    }, {
        ctrl: !0,
        shift: !0,
        code: "KeyV" // Console
    }, {
        ctrl: !0, 
        code: "KeyU" // Source
    }, {
        code: "F12" // Developer Tools
    }].some(e => !!e.ctrl === c.ctrlKey && !!e.shift === c.shiftKey && c.code === e.code)
    && c.preventDefault()
};

// 6. Prevent text selection on the entire body of the document
document.body.style.userSelect = "none";
</script>
```

## Function Explanations 📚

This project employs various JavaScript functions and event listeners to block access to developer tools and prevent unauthorized interactions. Below is a breakdown of each function’s purpose and functionality.

---

### 1. Dev Tools Detection 📅

The main function, `af()`, continuously monitors for Dev Tools by assessing performance lag:

- **Execution:** Runs every 50ms to detect Dev Tools.
- **Method:** Utilizes `console.profile()` and `console.profileEnd()` to measure code execution time.
- **Action Triggered:** If execution time exceeds 10ms, it assumes Dev Tools are open and clears the entire `document.documentElement`.

his approach effectively monitors Dev Tools access by checking for performance delays that typically occur when Dev Tools are active, all without impacting normal user interactions.

---

### 2. Prevent Dragging Elements 🔍

To prevent element dragging, a `dragstart` event listener is added:

- **Execution:** `document.addEventListener("dragstart", e => e.preventDefault())`
- **Functionality:** Prevents users from saving images or content by dragging, thereby preserving both visual structure and content security.

---

### 3. Block Middle-Click 🚧

To block the middle-click action, an `auxclick` event listener is used:

- **Execution:** `document.addEventListener("auxclick", e => e.button === 1 && (e.stopPropagation(), e.preventDefault()))`
- **Functionality:** Prevents middle-click from opening new tabs, limiting potential unintended navigation and reinforcing content access restrictions.

---

### 4. Disable Right-Click Menu 🚫

To block the right-click context menu, a `contextmenu` event listener is used:

- **Execution:** `document.addEventListener("contextmenu", e => e.preventDefault())`
- **Functionality:** Disables right-click to reduce access to inspection options and content copying.

---

### 5. Block Key Combinations 🔒

This function blocks common shortcuts that open Dev Tools and other inspection options:

- **Monitored Combinations:** Includes `Ctrl + Shift + I`, `Ctrl + Shift + J`, `Ctrl + U`, `Ctrl + Shift + J`, and `F12`.
- **Execution:** Uses `document.onkeydown` to listen for key presses.
- **Functionality:** Prevents default actions of key combinations commonly used to access Dev Tools, the JavaScript console, and source code viewing.

---

### 6. Prevent Text Selection 🛑

To prevent text selection across the page, the `userSelect` property of `document.body` is set to `"none"`:

- **Execution:** `document.body.style.userSelect = "none"`
- **Functionality:** Disables text selection, providing another layer of protection against direct content copying.

---

These combined functions form a comprehensive barrier against unauthorized content access and manipulation, ideal for safeguarding sensitive or proprietary content on web pages.



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
