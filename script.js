/*!-----------------------------------------------------------------------------
 * SiteGuard - Version 1.1.2
 * Author: Luiz Bizzio
 * License: MIT
 * Repository: https://github.com/luizbizzio/siteguard
 * Published: 2024-11-05
 * -------------------------------------------------------------------------- */

// 1. Function to detect DevTools and clear content
function af() {
    var e = !1; // Variable to track if the DevTools have been detected
    setInterval(function() {
        var t = performance.now(); // Get the current timestamp
        console.profile(); // Start profiling for performance
        console.profileEnd(); // End profiling
        console.clear && console.clear(); // Clear the console if supported
        
        // Detect if DevTools are opened by checking the performance
        // If more than 10 milliseconds have passed since the last check and DevTools are not detected yet
        if (performance.now() - t > 10 && !e) {
            e = !0; // Set the variable to true, indicating DevTools are detected
            document.documentElement.innerHTML = ""; // Clear the entire document content
            location.reload(true); // Attempt to reload the page without cache
        }
    }, 1); // Check every millisecond
}

af(); // Invoke the function to start the detection

// 2. Prevent users from dragging elements
document.addEventListener("dragstart", e => e.preventDefault()); // Prevent default drag behavior

// 3. Block Middle-click from opening new tabs and images
document.addEventListener("auxclick", (e) => {
    if (1 === e.button) { // Check if the middle mouse button was clicked
        e.stopPropagation(); // Stop the event from bubbling up
        e.preventDefault(); // Prevent the default action (e.g., opening a new tab)
    }
});

// 4. Disable Right-click context menu
document.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // Prevent the right-click context menu from appearing
});

// 5. Block Key Combinations
document.onkeydown = e => {
    // List of key combinations to block
    [{
        ctrl: !0,
        shift: !0,
        code: "KeyI" // Ctrl + Shift + I for Developer tools
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
        code: "F12" // F12 for Developer tools
    }].some(t => !!t.ctrl === e.ctrlKey && !!t.shift === e.shiftKey && e.code === t.code) // Check if any combination matches
    && e.preventDefault(); // Prevent the default action if a match is found
};

// 6. Prevent text selection on the entire body of the document
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.userSelect = "none"; // Disable text selection for the entire body
});
