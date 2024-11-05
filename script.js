/*!-----------------------------------------------------------------------------
 * SiteGuard - Version 1.1.2
 * Author: Luiz Bizzio
 * License: MIT
 * Repository: https://github.com/luizbizzio/siteguard
 * Published: 2024-11-05
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
        e = 10 < performance.now() - t && !e && (document.documentElement.innerHTML = "", !0);
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

