/*!-----------------------------------------------------------------------------
 * SiteGuard - Version 1.1.2
 * Author: Luiz Bizzio
 * License: MIT
 * Repository: https://github.com/luizbizzio/siteguard
 * Published: 2024-11-05
 * -------------------------------------------------------------------------- */

// 1. Dev Tools Detector
function af() {
    var n = !1;
    setInterval(function() {
        var e = performance.now();
        console.profile();
        console.profileEnd();
        console.clear && console.clear(); // Clear console
        
        // Detect DevTools and clear content
        if (performance.now() - e > 10 && !n) {
            n = !0;
            document.documentElement.innerHTML = ""; // Clear document content
            location.reload(true); // Attempt to reload without cache
        }
    }, 1);
}

af();

// 2. Prevent users from dragging elements
document.addEventListener("dragstart", e => e.preventDefault());

// 3. Block Middle-click from opening new tabs and images
document.addEventListener("auxclick",(t=>1===t.button&&(t.stopPropagation(),t.preventDefault())));

// 4. Disable Right-click context menu
document.addEventListener("contextmenu", function(e) {
    e.preventDefault()
});

// 5. Block Key Combinations
document.onkeydown = c => {
    [{
        ctrl: !0,
        shift: !0,
        code: "KeyI" // Developer tools
    }, {
        ctrl: !0,
        shift: !0,
        code: "KeyJ" // JavaScript console
    }, {
        ctrl: !0,
        shift: !0,
        code: "KeyV" // Paste
    }, {
        ctrl: !0,
        code: "KeyU" // View source
    }, {
        code: "F12" // Developer Tools
    }, {
        ctrl: !0,
        code: "KeyP" // Print
    }, {
        ctrl: !0,
        code: "KeyS" // Save
    }].some(e => !!e.ctrl === c.ctrlKey && !!e.shift === c.shiftKey && c.code === e.code)
    && c.preventDefault();
};


// 6. Prevent text selection on the entire body of the document
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.userSelect = "none";
});
