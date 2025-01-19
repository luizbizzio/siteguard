# SiteGuard 🛡️

**Version:** 1.1.2  
**Author:** Luiz Bizzio  
**License:** MIT  
**Repository:** [GitHub - SiteGuard](https://github.com/luizbizzio/siteguard)
**Published:** 2024-11-08

## Overview 🚀

SiteGuard is your ultimate **JavaScript** tool for protecting web content! Safeguard your intellectual property by preventing unauthorized access and interactions on your website. With SiteGuard, you can maintain control over your content and deter unwanted actions.

## Test the Features! 🕵️‍♂️

[**Try to Steal This Content!** 😈](https://siteguard.pages.dev/)

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
| 🖨️ Hide Content During Print | Hides all content when the user attempts to print the page. | ✅ Active |

## How to Use 🔧

### Minified Script Version (Recommended) ✅

 This lightweight, minified version is ideal for most use cases. It’s streamlined and efficient, offering full protection without additional comments.

```html
<script>
/*!-----------------------------------------------------------------------------
 * SiteGuard - Version 1.1.2
 * License: MIT
 * Repository: https://github.com/luizbizzio/siteguard
 * Published: 2024-11-08
 * -------------------------------------------------------------------------- */
function af(){var e=!1;setInterval(function(){var t=performance.now();console.profile(),console.profileEnd(),console.clear&&console.clear(),10<performance.now()-t&&!e&&(e=!0,document.documentElement.innerHTML="",location.reload())},1)}af(),document.addEventListener("dragstart",e=>e.preventDefault()),document.addEventListener("auxclick",e=>{1===e.button&&(e.stopPropagation(),e.preventDefault())}),document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.onkeydown=e=>{[{ctrl:!0,shift:!0,code:"KeyI"},{ctrl:!0,shift:!0,code:"KeyJ"},{ctrl:!0,shift:!0,code:"KeyV"},{ctrl:!0,shift:!0,code:"KeyC"},{ctrl:!0,code:"KeyU"},{ctrl:!0,code:"KeyP"},{ctrl:!0,code:"KeyS"},{ctrl:!0,code:"KeyJ"},{ctrl:!0,code:"KeyF"},{code:"F12"}].some(t=>!!t.ctrl===e.ctrlKey&&!!t.shift===e.shiftKey&&e.code===t.code)&&e.preventDefault()},document.addEventListener("DOMContentLoaded",function(){document.body.style.setProperty("user-select","none","important");let e=document.createElement("style");e.type="text/css",e.media="print",e.innerHTML="* { display: none !important; }",document.head.appendChild(e);let t=document.createElement("style");t.type="text/css",t.innerHTML="body {-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}",document.head.appendChild(t)});
</script>

```

<br>

---

<br>
<br>

### **IMPORTANT ⚠** 
Ensure this script is embedded directly at the very beginning of the `<html>` tag, before the `<head>` tag. This prevents users from easily blocking the script and ensures no traces remain if content is auto-cleared.

---

<br>

### Explained Script Version 📝

```html
<script>
/*!-----------------------------------------------------------------------------
 * SiteGuard - Version 1.1.2
 * Author: Luiz Bizzio
 * License: MIT
 * Repository: https://github.com/luizbizzio/siteguard
 * Published: 2024-11-08
 * -------------------------------------------------------------------------- */

// Dev Tools Detector
function af() {
    var e = !1; // Initializes a variable to track the detection of DevTools
    setInterval(function() {
        var t = performance.now(); // Gets the current time in milliseconds
        console.profile(); // Starts a profiling session for performance analysis
        console.profileEnd(); // Ends the profiling session
        console.clear && console.clear(); // Clears the console if supported
        
        // Detects if the developer tools are open
        if (10 < performance.now() - t && !e) { // Adjusts the sensitivity of the performance detector (Recommended value between 5 and 10ms).
                                                // Setting the threshold below 10ms may cause the script to trigger on older devices,
                                                // Higher values increase sensitivity, potentially causing false positives.

            e = true; // Set e to true to indicate DevTools are detected
            document.documentElement.innerHTML = ""; // Clear the document
            location.reload(); // Reload the page
        }
    }, 1); // Executes the function every millisecond
}

af(); // Invokes the function to start detection

// 1. Prevents users from dragging elements
document.addEventListener("dragstart", e => e.preventDefault()); // Prevents the default drag behavior

// 2. Blocks middle mouse button clicks
document.addEventListener("auxclick", e => {
    if (1 === e.button) { // Checks if the middle mouse button was clicked
        e.stopPropagation(); // Prevents the event from bubbling up
        e.preventDefault(); // Prevents the default action
    }
});

// 3. Disables the context menu (right-click)
document.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // Prevents the context menu from appearing
});

// 4. Blocks key combinations
document.onkeydown = e => {
    // Defines an array of key combinations to block
    [{
        ctrl: !0,
        shift: !0,
        code: "KeyI" // Ctrl + Shift + I for Developer Tools
    }, {
        ctrl: !0,
        shift: !0,
        code: "KeyJ" // Ctrl + Shift + J for JavaScript console
    }, {
        ctrl: !0,
        shift: !0,
        code: "KeyV" // Ctrl + Shift + V for paste
    }, {
        ctrl: !0,
        shift: !0,
        code: "KeyC" // Ctrl + Shift + C for element inspector
    }, {
        ctrl: !0,
        code: "KeyU" // Ctrl + U for view source
    }, {
        ctrl: !0,
        code: "KeyP" // Ctrl + P for print
    }, {
        ctrl: !0,
        code: "KeyS" // Ctrl + S for save
    }, {
        ctrl: !0,
        code: "KeyJ" // Ctrl + J for downloads
    }, {
        ctrl: !0,
        code: "KeyF" // Ctrl + F for find
    }, {
        code: "F12" // F12 for Developer Tools
    }].some(t => !!t.ctrl === e.ctrlKey && !!t.shift === e.shiftKey && e.code === t.code) && e.preventDefault();
};

// 5. Prevents text selection on the entire body of the document
document.addEventListener("DOMContentLoaded", function() {
    // Sets the user-select property to none to disable text selection
    document.body.style.setProperty('user-select', 'none', 'important');

    // Style to hide all content during printing
    const printStyle = document.createElement("style");
    printStyle.type = "text/css";
    printStyle.media = "print";
    printStyle.innerHTML = "* { display: none !important; }"; // Hides all content during print
    document.head.appendChild(printStyle);

    // Style to disable text selection for various browsers
    const selectTextCss = document.createElement("style");
    selectTextCss.type = "text/css";
    selectTextCss.innerHTML = "body {-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}"; // Prevents text selection
    document.head.appendChild(selectTextCss);
});
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

### 7. Hide Content During Print 🖨️

TTo prevent content from being printed, a specific style is added for the print media:

- **Execution:** `const printStyle = document.createElement("style");
printStyle.type = "text/css";
printStyle.media = "print";
printStyle.innerHTML = "* { display: none !important; }";
document.head.appendChild(printStyle);`
- **Functionality:** Hides all content during printing, ensuring that nothing from the page is printed.

---

## ⚠ Adjusting Sensitivity for Developer Tools Detection ⚠

The code provided helps detect when the **developer tools** are open in the browser. It does this by tracking script performance using `performance.now()`. If the script takes longer than a certain amount of time to execute, it assumes that the developer tools are open and triggers an action.

The key to making this system work well is to **adjust the sensitivity** of the detection. You want to find a balance between **accuracy** in detecting the developer tools and **compatibility** with different devices. This adjustment depends on the **performance** of the user's device and the **type of web page** being viewed.

---

## How Does the Detection Work? 🤔

The detection is based on the **milliseconds** (`ms`) it takes to execute a script. The difference between the script’s expected execution time and the actual time defines the **sensitivity threshold**:

- **Smaller values**: These make the system more sensitive, so it detects developer tools faster. However, it could trigger **false positives** on slower devices.
- **Larger values**: These reduce sensitivity, improving **compatibility** with slower devices but may not detect developer tools as quickly on faster devices.

### Recommended Sensitivity ⚖️

The sensitivity can be adjusted between **5ms to 10ms** to ensure effective detection, without negatively affecting page performance on different devices.

---

## CPU Performance Limitation 🖥️

You can also adjust the sensitivity based on the **CPU performance** of the device. Below, we demonstrate how **CPU throttling** (limiting CPU usage) affects detection sensitivity. We performed tests by intentionally reducing the CPU usage to certain percentages to see how the detection reacts.

| **CPU Usage (Throttle Test)**   | **Detection Limit (ms)**  | **Behavior**                               | **Compatibility**      
|-----------------------------|---------------------------|--------------------------------------------|------------------------|
| **8%**                       | 150ms                     | Works well for low-load devices. May not trigger on newer devices. | ❌ |
| **17%**                      | 10ms                      | A good balance between detection speed and device compatibility. | ✅ |
| **27%**                      | 5ms                       | Sensitive enough, but won’t generate false positives on older devices. | ✅ |
| **50%**                      | 2ms                       | Very sensitive, but has a small risk of false positives. | ✅ |
| **100%**                     | 1ms                       | Extremely sensitive, may cause false positives on lower-performance devices. | ❌ |

---

## Adjusting Sensitivity Based on Need 🔧

### How to Adjust Sensitivity for Your Site

The ideal sensitivity for your site depends on the **type of site** and the **expected performance** of users' devices:

- **Lightweight Sites**: 🚀 If your site is simple and loads quickly, you can use **lower values (2ms)** for fast detection of developer tools.
- **Heavy Sites**: 🏋️ For more complex sites with many scripts, it’s better to use **higher values (5ms or more)** to ensure detection doesn’t impact performance.

You should also consider adjusting sensitivity based on how users interact with the site on different devices.

---

## Differences Between Browsers and Processors 🌐

Detection performance also depends on the **browser** and **processor** the user has. We found that **sensitivity** can vary between devices, and this method **only works on Chromium-based browsers** (like Chrome, Edge, Opera, etc.).

- **Devices with slower CPUs** (like older processors) may need higher `ms` values (10ms or more) to avoid failing detection.
- **Devices with faster CPUs** (newer processors) can allow **lower values** (such as 5ms or even 2ms) to make detection more effective.

In tests using **Opera GX** (version `114.0.5282.159`) with a **Ryzen 5 5500** processor, the code’s behavior was tested with different CPU limits to adjust its sensitivity based on performance.

---

## Conclusion 🎯

Detecting **developer tools** should be tailored based on the **type of site** and the **device configuration** of the user. When choosing the right sensitivity value, you need to **balance detection effectiveness** with **device compatibility**.

### Recommendation ✅

- For **lightweight sites**, values between **2ms** and **5ms** work best for fast detection.
- For **heavier sites**, values between **5ms** and **10ms** are better to reduce performance impact while keeping detection effective.

Be sure to **test the sensitivity settings** on different devices to provide the best user experience for everyone.

---


## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
