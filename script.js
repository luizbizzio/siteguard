/*!-----------------------------------------------------------------------------
 * SiteGuard - Version 1.1.0
 * Author: Luiz Bizzio
 * License: MIT
 * Repository: https://github.com/luizbizzio/SiteGuard
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
