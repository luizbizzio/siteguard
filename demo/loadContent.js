/* SiteGuard interactive demonstration. Source repo: luizbizzio/siteguard (read only) */
const styles="\n:root{\n  color-scheme:dark;\n  --bg:#080808;\n  --surface:#10100f;\n  --surface2:#151410;\n  --stroke:#292722;\n  --ink:#f1eee7;\n  --sub:#ada99e;\n  --dim:#847e71;\n  --yellow:#f1ce5c;\n  --mono:\"IBM Plex Mono\",Consolas,monospace;\n  --sans:\"DM Sans\",system-ui,sans-serif;\n  --display:\"Space Grotesk\",system-ui,sans-serif\n}\n*{box-sizing:border-box}\nhtml{background:var(--bg);scroll-behavior:smooth}\nbody{margin:0;min-width:320px;min-height:100svh;background:var(--bg);color:var(--ink);\n font:14px/1.6 var(--sans);-webkit-font-smoothing:antialiased;\n user-select:none;-webkit-user-select:none}\na{color:inherit;text-decoration:none}\na:hover{color:var(--yellow)}\nbutton,input{font:inherit}\nbutton{cursor:pointer}\n:where(a,button,input,select):focus-visible{outline:2px solid var(--yellow);outline-offset:3px}\ncode,kbd{font:12px var(--mono);color:#e2c777}\n.site-header{height:65px;border-bottom:1px solid var(--stroke)}\n.header-inner{width:min(calc(100% - 56px),1240px);margin:auto;height:100%;\n display:flex;align-items:center;justify-content:space-between;gap:16px}\n.brand{font:700 19px var(--display);letter-spacing:-.05em;color:var(--yellow)}\n.brand:hover{color:#ffe390}\n.nav{display:flex;align-items:center;gap:28px;color:#c0b8a7;font-size:12px}\n.nav span{font:11px var(--mono);color:#80796b}\n.page{width:min(calc(100% - 56px),1240px);margin:auto;min-height:calc(100svh - 65px);\n display:flex;flex-direction:column;justify-content:center;padding:30px 0 22px}\n.layout{display:grid;grid-template-columns:minmax(0,1.13fr) minmax(390px,.87fr);gap:clamp(44px,6vw,95px);align-items:start}\n.main-title{margin:0 0 15px;color:var(--yellow);font:600 clamp(49px,5.6vw,77px)/1 var(--display);letter-spacing:-.079em}\n.lead{color:#c1bbaf;max-width:510px;margin:0;font-size:15px;line-height:1.75}\n.rule{height:1px;background:var(--stroke);margin:29px 0 22px}\n.section-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:10px}\n.section-heading h2{margin:0;color:#f0ede7;font:600 18px/1.3 var(--display);letter-spacing:-.03em}\n.section-heading span{font:11px var(--mono);color:#8f8879}\n.function-list{border-top:1px solid var(--stroke)}\n.function-row{width:100%;display:grid;grid-template-columns:31px minmax(0,1fr) 24px;\n gap:10px;align-items:center;text-align:left;padding:12px 2px 12px 0;border:0;\n border-bottom:1px solid var(--stroke);background:transparent;min-height:59px}\n.function-row:hover{background:#12110d}\n.function-row:hover .function-name{color:var(--yellow)}\n.function-index{font:11px var(--mono);color:#9c8549}\n.function-name{display:block;font:600 13px/1.4 var(--sans);color:#e9e6df;transition:color .16s}\n.function-summary{display:block;font:12px/1.5 var(--sans);color:#999183;margin-top:2px}\n.function-arrow{font:19px/1 var(--sans);color:#786f5c;text-align:right}\n.purpose{color:#8f897d;font-size:11.5px;line-height:1.55;margin:17px 0 0}\n.purpose strong{color:#b9af9a;font-weight:600}\n.demo{border:1px solid #343024;border-radius:7px;background:#0e0d0a;overflow:hidden}\n.demo-top{display:flex;justify-content:space-between;align-items:center;gap:12px;\n padding:13px 16px;border-bottom:1px solid #302a20}\n.demo-top h2{font:600 13px var(--sans);margin:0}\n.demo-top span{color:#9e8753;font:11px var(--mono)}\n.canvas{height:240px;position:relative;display:flex;align-items:center;justify-content:center;\n background:#11100d;cursor:grab;overflow:hidden;border-bottom:1px solid #342d1f}\n.canvas:active{cursor:grabbing}\n.canvas::before{content:\"\";position:absolute;width:265px;height:265px;border:1px solid rgba(241,206,92,.24);\n border-radius:50%;box-shadow:0 0 0 43px rgba(241,206,92,.025),0 0 0 86px rgba(241,206,92,.012)}\n.canvas::after{content:\"\";position:absolute;left:11%;right:11%;top:50%;height:1px;background:rgba(241,206,92,.075)}\n.canvas-monogram{position:relative;z-index:1;color:var(--yellow);font:600 90px/1 var(--display);\n letter-spacing:-.11em;pointer-events:none}\n.canvas-mark{position:absolute;left:17px;top:15px;color:#968052;font:10px var(--mono);text-transform:uppercase;letter-spacing:.07em}\n.demo-instruction{padding:14px 16px 16px}\n.demo-instruction p{color:#c3bbad;font-size:12.5px;line-height:1.6;margin:0 0 10px}\n.kbd-row{display:flex;flex-wrap:wrap;gap:7px}\nkbd{border:1px solid #403728;background:#201c14;border-radius:3px;padding:5px 8px;color:#cfb76e;font:11px var(--mono)}\n.monitor{margin-top:14px;background:#0d0d0b;border:1px solid #302b20;border-radius:7px;overflow:hidden}\n.monitor-head{display:flex;align-items:center;justify-content:space-between;gap:12px;\n border-bottom:1px solid #29251b;padding:10px 13px}\n.monitor-head h2{font:600 12px var(--sans);margin:0}\n.event-meta{display:flex;align-items:center;gap:10px}\n.count{font:11px var(--mono);color:#b9a365}\n.status{display:inline-flex;align-items:center;gap:5px;font:10px var(--mono);color:#d5c188}\n.status::before{content:\"\";width:6px;height:6px;background:var(--yellow);border-radius:50%}\n.status.paused{color:#8e897d}\n.status.paused::before{background:#8e897d}\n.log{height:176px;overflow-y:auto;padding:13px;scrollbar-width:thin;scrollbar-color:#53472d #0d0d0b;\n overscroll-behavior:contain}\n.log-line{display:grid;grid-template-columns:60px 1fr;gap:10px;color:#b7ab8f;\n font:11px/1.65 var(--mono);margin-bottom:4px;overflow-wrap:anywhere}\n.log-time{color:#827869}\n.log-message{white-space:pre-wrap;min-width:0}\n.log-kind{color:#deb65b;margin-right:7px}\n.log-kind.info{color:#9f9582}\n.log-kind.warn{color:#ecbf6b}\n.log-kind.help{color:#c1b39a}\n.monitor-bottom{border-top:1px solid #29251b;padding:8px 10px;display:flex;align-items:center;gap:8px}\n.prompt-form{display:flex;align-items:center;gap:8px;flex:1;min-width:0}\n.prompt-form label{color:var(--yellow);font:12px var(--mono)}\n.prompt-form input{min-width:0;width:100%;background:transparent;border:0;outline:0;\n color:#e1d4b7;font:11px var(--mono);caret-color:var(--yellow);\n user-select:text!important;-webkit-user-select:text!important}\n.prompt-form input::placeholder{color:#877c69}\n.monitor-bottom button{border:1px solid #453a24;background:#1b1811;color:#d4c195;\n border-radius:3px;padding:5px 8px;font:11px var(--mono)}\n.monitor-bottom button:hover{border-color:#9d833d}\n.footer{margin-top:26px;padding-top:13px;border-top:1px solid var(--stroke);\n display:flex;justify-content:space-between;gap:15px;color:#777166;font:11px var(--sans)}\n.footer a{color:#ac9865}\n.detail-dialog{max-width:min(760px,calc(100vw - 36px));width:100%;max-height:min(84dvh,850px);\n background:#10100e;color:#f0ece4;border:1px solid #625131;border-radius:8px;\n box-shadow:0 30px 100px #000e;padding:0;overflow:auto}\n.detail-dialog::backdrop{background:rgba(0,0,0,.82);backdrop-filter:blur(3px)}\n.dialog-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:14px 22px;\n border-bottom:1px solid #302a21;color:#b99b58;font:11px var(--mono)}\n.dialog-head button{background:transparent;color:#c9bd9e;border:0;font-size:25px;line-height:1}\n.dialog-body{padding:24px 26px 26px}\n.dialog-body h2{font:600 clamp(24px,4vw,33px)/1.18 var(--display);letter-spacing:-.045em;margin:0 0 12px}\n.dialog-body p{font-size:14px;line-height:1.7;color:#c8c0b1;margin:0 0 17px}\n.snippet-label{display:flex;justify-content:space-between;gap:10px;font:11px var(--mono);\n color:#bba66e;border:1px solid #302a21;border-bottom:0;padding:9px 13px;background:#19160f;border-radius:4px 4px 0 0}\n.snippet{padding:16px 17px;background:#080808;color:#d9d2c2;font:12px/1.7 var(--mono);\n border:1px solid #302a21;border-radius:0 0 4px 4px;overflow:auto;\n max-height:260px;white-space:pre;user-select:text!important;-webkit-user-select:text!important;margin:0 0 18px}\n.dialog-result{border-left:2px solid #d6b456;padding-left:13px;color:#c7baa0}\n.dialog-result strong{color:#f0d27b}\n.dialog-links{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:22px}\n.dialog-links a{color:#d6b85f;font:12px var(--sans)}\n.dialog-links button{background:var(--yellow);color:#16120a;border:0;border-radius:4px;padding:8px 14px;font-weight:700;font-size:12px}\n@media(min-width:1080px) and (min-height:760px){\n  body{min-height:100dvh}\n  .page{padding-top:20px;padding-bottom:12px}\n  .main-title{font-size:clamp(53px,5vw,69px)}\n  .rule{margin:22px 0 17px}\n  .function-row{min-height:55px;padding-top:9px;padding-bottom:9px}\n  .canvas{height:210px}\n  .log{height:150px}\n  .footer{margin-top:17px}\n}\n@media(max-width:990px){\n  .layout{grid-template-columns:1fr;gap:29px}\n  .page{width:min(calc(100% - 38px),720px);padding-top:27px}\n  .header-inner{width:min(calc(100% - 38px),720px)}\n  .canvas{height:230px}\n  .log{height:190px}\n}\n@media(max-width:530px){\n  .site-header{height:58px}\n  .nav{gap:14px}\n  .page{min-height:calc(100svh - 58px)}\n  .main-title{font-size:51px}\n  .lead{font-size:14px}\n  .rule{margin:23px 0 18px}\n  .function-row{grid-template-columns:26px minmax(0,1fr) 20px;gap:6px}\n  .function-summary{font-size:11.5px}\n  .canvas{height:205px}\n  .canvas-monogram{font-size:79px}\n  .dialog-body{padding:20px 17px}\n  .footer{flex-wrap:wrap}\n  .log-line{grid-template-columns:1fr;gap:0}\n}\n@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}\n@media print{body>*{display:none!important}}\n";
const markup="\n<header class=\"site-header\">\n  <div class=\"header-inner\">\n    <a href=\"#top\" class=\"brand\">SiteGuard</a>\n    <nav class=\"nav\" aria-label=\"Project links\">\n      <span>v1.1.2</span>\n      <a href=\"https://github.com/luizbizzio/siteguard\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub ↗</a>\n    </nav>\n  </div>\n</header>\n<main class=\"page\" id=\"top\">\n  <div class=\"layout\">\n    <section class=\"intro\" aria-labelledby=\"site-title\">\n      <h1 id=\"site-title\" class=\"main-title\">SiteGuard.</h1>\n      <p class=\"lead\">A lightweight JavaScript deterrent that makes manual content copying and scraping less convenient through browser restrictions.</p>\n      <div class=\"rule\"></div>\n      <div class=\"section-heading\"><h2>How it works</h2><span>7 functions</span></div>\n      <div class=\"function-list\" id=\"function-list\" aria-label=\"Browse SiteGuard functions\"></div>\n      <p class=\"purpose\"><strong>Purpose:</strong> discourage manual scraping through common browser interactions.</p>\n    </section>\n    <section class=\"experience\" aria-label=\"Live demonstration\">\n      <div class=\"demo\" id=\"demo\">\n        <div class=\"demo-top\"><h2>Live test</h2><span>Interactive sample</span></div>\n        <div class=\"canvas\" id=\"test-art\" draggable=\"true\" role=\"img\" tabindex=\"0\" aria-label=\"SiteGuard logo. Try dragging or right-clicking it.\">\n          <span class=\"canvas-mark\">SiteGuard / Demo</span>\n          <span class=\"canvas-monogram\" aria-hidden=\"true\">S/</span>\n        </div>\n        <div class=\"demo-instruction\">\n          <p>Right-click or drag the artwork. Try selecting this sentence or using a blocked shortcut.</p>\n          <div class=\"kbd-row\"><kbd>F12</kbd><kbd>Ctrl + U</kbd><kbd>Ctrl + Shift + I</kbd></div>\n        </div>\n      </div>\n      <div class=\"monitor\" aria-label=\"Live event monitor\">\n        <div class=\"monitor-head\">\n          <h2>Event monitor</h2>\n          <div class=\"event-meta\"><span class=\"count\" id=\"event-counter\">0 events</span><span class=\"status\" id=\"term-state\">LIVE</span></div>\n        </div>\n        <div id=\"terminal-output\" class=\"log\" role=\"log\" aria-live=\"off\" aria-relevant=\"additions\"></div>\n        <div class=\"monitor-bottom\">\n          <form class=\"prompt-form\" id=\"terminal-form\" autocomplete=\"off\">\n            <label for=\"terminal-input\">$</label>\n            <input id=\"terminal-input\" type=\"text\" placeholder=\"help\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" aria-label=\"Terminal command\">\n          </form>\n          <button id=\"log-pause\" type=\"button\" aria-pressed=\"false\">pause</button>\n          <button id=\"log-clear\" type=\"button\">clear</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  <footer class=\"footer\"><span>JavaScript · Apache 2.0</span><span>Luiz Bizzio · <a href=\"https://github.com/luizbizzio/siteguard/tree/main/demo\" target=\"_blank\" rel=\"noopener noreferrer\">Demo source ↗</a></span></footer>\n</main>\n<dialog class=\"detail-dialog\" id=\"detail-dialog\" aria-labelledby=\"detail-title\">\n  <div class=\"dialog-head\"><span id=\"detail-index\">01 / 07</span><button type=\"button\" id=\"detail-x\" aria-label=\"Close details\">×</button></div>\n  <div class=\"dialog-body\">\n    <h2 id=\"detail-title\"></h2>\n    <p id=\"detail-description\"></p>\n    <div class=\"snippet-label\"><span>siteguard.js</span><span>Original source</span></div>\n    <pre class=\"snippet\" id=\"detail-code\" tabindex=\"0\"></pre>\n    <p class=\"dialog-result\" id=\"detail-result\"></p>\n    <div class=\"dialog-links\"><a href=\"https://github.com/luizbizzio/siteguard/blob/main/siteguard.js\" target=\"_blank\" rel=\"noopener noreferrer\">View full source ↗</a><button id=\"detail-close\" type=\"button\">Close</button></div>\n  </div>\n</dialog>\n";
const parts=[{"id":"timing","kind":"01 · DEVTOOLS","title":"Check console timing","description":"The script calls af() when it loads. A timer requests checks every 1 ms and measures how long console profiling takes. If a check takes longer than 10 ms, it clears the document and reloads the page.","effect":"A timing-based guess, not direct DevTools detection. Slow devices can trigger it.","code":"// Dev Tools Detector\nfunction af() {\n    var e = !1; // Initializes a variable to track the detection of DevTools\n    setInterval(function() {\n        var t = performance.now(); // Gets the current time in milliseconds\n        console.profile(); // Starts a profiling session for performance analysis\n        console.profileEnd(); // Ends the profiling session\n        console.clear && console.clear(); // Clears the console if supported\n        \n        // Detects if the developer tools are open\n        if (10 < performance.now() - t && !e) { // Adjusts the sensitivity of the performance detector (Recommended value between 5 and 10ms).\n                                                // Setting the threshold below 10ms may cause the script to trigger on older devices,\n                                                // Higher values increase sensitivity, potentially causing false positives.\n\n            e = true; // Set e to true to indicate DevTools are detected\n            document.documentElement.innerHTML = \"\"; // Clear the document\n            location.reload(); // Reload the page\n        }\n    }, 1); // Executes the function every millisecond\n}\n\naf(); // Invokes the function to start detection","summary":"Checks console profiling time for signs of inspection."},{"id":"drag","kind":"02 · MOUSE","title":"Stop element dragging","description":"The dragstart event fires when you begin dragging an image or other draggable element. SiteGuard cancels that default browser action.","effect":"Images and other elements cannot use the normal drag interaction.","code":"// 1. Prevents users from dragging elements\ndocument.addEventListener(\"dragstart\", e => e.preventDefault()); // Prevents the default drag behavior","summary":"Prevents dragging elements out of the page."},{"id":"middle","kind":"03 · MOUSE","title":"Block middle-click","description":"The auxclick listener looks for button 1, the middle mouse button. It stops the event from reaching parent elements and cancels its default action.","effect":"Middle-click actions are blocked. This listener does not cancel other mouse buttons.","code":"// 2. Blocks middle mouse button clicks\ndocument.addEventListener(\"auxclick\", e => {\n    if (1 === e.button) { // Checks if the middle mouse button was clicked\n        e.stopPropagation(); // Prevents the event from bubbling up\n        e.preventDefault(); // Prevents the default action\n    }\n});","summary":"Cancels the middle mouse button action."},{"id":"context","kind":"04 · MOUSE","title":"Remove the right-click menu","description":"A right-click normally creates a contextmenu event. Calling preventDefault() stops the standard browser menu.","effect":"The browser's normal right-click menu does not open.","code":"// 3. Disables the context menu (right-click)\ndocument.addEventListener(\"contextmenu\", function(e) {\n    e.preventDefault(); // Prevents the context menu from appearing\n});","summary":"Disables the browser's right-click menu."},{"id":"keys","kind":"05 · KEYBOARD","title":"Intercept selected shortcuts","description":"The handler compares Ctrl, Shift and key code against an array. A match calls preventDefault(). It covers F12, Ctrl+U/P/S/J/F and Ctrl+Shift+I/J/V/C.","effect":"Only these combinations are handled. Some shortcuts may still be reserved by the browser.","code":"// 4. Blocks key combinations\ndocument.onkeydown = e => {\n    // Defines an array of key combinations to block\n    [{\n        ctrl: !0,\n        shift: !0,\n        code: \"KeyI\" // Ctrl + Shift + I for Developer Tools\n    }, {\n        ctrl: !0,\n        shift: !0,\n        code: \"KeyJ\" // Ctrl + Shift + J for JavaScript console\n    }, {\n        ctrl: !0,\n        shift: !0,\n        code: \"KeyV\" // Ctrl + Shift + V for paste\n    }, {\n        ctrl: !0,\n        shift: !0,\n        code: \"KeyC\" // Ctrl + Shift + C for element inspector\n    }, {\n        ctrl: !0,\n        code: \"KeyU\" // Ctrl + U for view source\n    }, {\n        ctrl: !0,\n        code: \"KeyP\" // Ctrl + P for print\n    }, {\n        ctrl: !0,\n        code: \"KeyS\" // Ctrl + S for save\n    }, {\n        ctrl: !0,\n        code: \"KeyJ\" // Ctrl + J for downloads\n    }, {\n        ctrl: !0,\n        code: \"KeyF\" // Ctrl + F for find\n    }, {\n        code: \"F12\" // F12 for Developer Tools\n    }].some(t => !!t.ctrl === e.ctrlKey && !!t.shift === e.shiftKey && e.code === t.code) && e.preventDefault();\n};","summary":"Blocks specific keyboard shortcuts."},{"id":"selection","kind":"06 · CSS","title":"Disable normal text selection","description":"After DOMContentLoaded, it sets user-select to none on the body and adds a CSS style element with browser-specific selection rules.","effect":"Dragging the cursor over page text will not normally highlight it.","code":"// Inside DOMContentLoaded:\ndocument.body.style.setProperty('user-select', 'none', 'important');\n\nconst selectTextCss = document.createElement(\"style\");\n    selectTextCss.type = \"text/css\";\n    selectTextCss.innerHTML = \"body {-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}\"; // Prevents text selection    document.head.appendChild(selectTextCss);","summary":"Stops normal text highlighting."},{"id":"print","kind":"07 · CSS","title":"Hide the printed page","description":"Inside the same DOMContentLoaded handler, SiteGuard creates a style element for print media and hides all elements in print mode.","effect":"When printing, the page content is hidden by the injected print CSS.","code":"// Inside DOMContentLoaded:\nconst printStyle = document.createElement(\"style\");\n    printStyle.type = \"text/css\";\n    printStyle.media = \"print\";\n    printStyle.innerHTML = \"* { display: none !important; }\"; // Hides all content during print    document.head.appendChild(printStyle);","summary":"Hides the page when printing."}];

(() => {
  "use strict";
  const sheet=document.createElement("style");
  sheet.textContent=styles;
  document.head.appendChild(sheet);
  function setup(){
    document.body.innerHTML=markup;
    const dialog=document.getElementById("detail-dialog");
    const list=document.getElementById("function-list");
    let lastTrigger=null;
    parts.forEach((item,index)=>{
      const button=document.createElement("button");
      button.type="button";
      button.className="function-row";
      const idx=document.createElement("span");
      idx.className="function-index";
      idx.textContent=String(index+1).padStart(2,"0");
      const text=document.createElement("span");
      const name=document.createElement("span");
      name.className="function-name"; name.textContent=item.title;
      const summary=document.createElement("span");
      summary.className="function-summary"; summary.textContent=item.summary;
      text.append(name,summary);
      const arrow=document.createElement("span");
      arrow.className="function-arrow";arrow.textContent="›";arrow.setAttribute("aria-hidden","true");
      button.append(idx,text,arrow);
      button.setAttribute("aria-label","Read about "+item.title);
      button.addEventListener("click",()=>{
        lastTrigger=button;
        document.getElementById("detail-index").textContent=String(index+1).padStart(2,"0")+" / 07";
        document.getElementById("detail-title").textContent=item.title;
        document.getElementById("detail-description").textContent=item.description;
        document.getElementById("detail-code").textContent=item.code;
        document.getElementById("detail-code").scrollTop=0;
        const effect=document.getElementById("detail-result");
        effect.replaceChildren();
        const label=document.createElement("strong");label.textContent="Result: ";
        effect.append(label,document.createTextNode(item.effect));
        dialog.showModal();
      });
      list.append(button);
    });
    function closeDialog(){dialog.close()}
    document.getElementById("detail-x").addEventListener("click",closeDialog);
    document.getElementById("detail-close").addEventListener("click",closeDialog);
    dialog.addEventListener("click",event=>{if(event.target===dialog)closeDialog()});
    dialog.addEventListener("close",()=>{if(lastTrigger)lastTrigger.focus()});

    const output=document.getElementById("terminal-output");
    const counter=document.getElementById("event-counter");
    const indicator=document.getElementById("term-state");
    const pauseButton=document.getElementById("log-pause");
    const input=document.getElementById("terminal-input");
    let events=0,paused=false,warned=false,history=[],historyIndex=0;
    function log(kind,message){
      const row=document.createElement("div");row.className="log-line";
      const time=document.createElement("span");time.className="log-time";
      time.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false});
      const text=document.createElement("span");text.className="log-message";
      const prefix=document.createElement("span");prefix.className="log-kind "+kind.toLowerCase();
      prefix.textContent="["+kind+"]";
      text.append(prefix,document.createTextNode(message));row.append(time,text);
      output.append(row);while(output.childElementCount>70)output.firstElementChild.remove();
      output.scrollTop=output.scrollHeight;
    }
    function record(message){if(paused)return;events++;counter.textContent=events+(events===1?" event":" events");log("BLOCK",message)}
    function pause(next){
      if(paused===next)return;
      paused=next;pauseButton.textContent=paused?"resume":"pause";
      pauseButton.setAttribute("aria-pressed",String(paused));
      indicator.textContent=paused?"PAUSED":"LIVE";indicator.classList.toggle("paused",paused);
      log("INFO",paused?"Logging paused. Restrictions remain active.":"Logging resumed.");
    }
    function clear(){
      output.replaceChildren();events=0;counter.textContent="0 events";log("INFO","Log cleared.")
    }
    function command(raw){
      const cmd=raw.trim().toLowerCase();if(!cmd)return;
      log("CMD","$ "+raw.trim());
      if(cmd==="help")log("HELP","help · status · test · clear · pause · resume · version · source");
      else if(cmd==="status"){log("INFO","Browser listeners active; logging "+(paused?"paused":"live"));log("INFO","DevTools check: 250 ms / threshold 10 ms")}
      else if(cmd==="test"){document.getElementById("demo").scrollIntoView({behavior:"smooth",block:"nearest"});log("HELP","Right-click or drag the sample. Try Ctrl+U or F12.")}
      else if(cmd==="pause")pause(true);
      else if(cmd==="resume")pause(false);
      else if(cmd==="clear")clear();
      else if(cmd==="version")log("INFO","Original siteguard.js v1.1.2 · Apache-2.0");
      else if(cmd==="source"){log("INFO","Opening original source on GitHub.");window.open("https://github.com/luizbizzio/siteguard/blob/main/siteguard.js","_blank","noopener,noreferrer")}
      else log("WARN","Unknown command. Try help.");
    }
    pauseButton.addEventListener("click",()=>pause(!paused));
    document.getElementById("log-clear").addEventListener("click",clear);
    document.getElementById("terminal-form").addEventListener("submit",event=>{
      event.preventDefault();const value=input.value.trim();if(!value)return;
      history.push(value);if(history.length>25)history.shift();historyIndex=history.length;input.value="";
      command(value);input.focus();
    });
    input.addEventListener("keydown",event=>{
      if(event.key==="ArrowUp"&&history.length){event.preventDefault();historyIndex=Math.max(0,historyIndex-1);input.value=history[historyIndex]}
      else if(event.key==="ArrowDown"&&history.length){event.preventDefault();historyIndex=Math.min(history.length,historyIndex+1);input.value=historyIndex===history.length?"":history[historyIndex]}
      else if(event.key==="Escape")input.value="";
    });
    document.addEventListener("contextmenu",event=>{
      record("context menu prevented");event.preventDefault()
    },true);
    document.addEventListener("dragstart",event=>{
      record("drag prevented");event.preventDefault()
    },true);
    document.addEventListener("auxclick",event=>{
      if(event.button!==1)return;record("middle-click prevented");
      event.preventDefault();event.stopPropagation()
    },true);
    document.addEventListener("keydown",event=>{
      const ctrl=event.ctrlKey,shift=event.shiftKey,code=event.code;
      const blocked=(!ctrl&&!shift&&code==="F12")||
        (ctrl&&shift&&["KeyI","KeyJ","KeyC","KeyV"].includes(code))||
        (ctrl&&!shift&&["KeyU","KeyP","KeyS","KeyJ","KeyF"].includes(code));
      if(!blocked)return;
      record("shortcut prevented: "+(ctrl?"Ctrl+":"")+(shift?"Shift+":"")+(code==="F12"?"F12":code.replace("Key","")));
      event.preventDefault()
    },true);
    log("INFO","Ready. Try the demo or type help.");
    if(typeof console.profile==="function"&&typeof console.profileEnd==="function"){
      window.setInterval(()=>{
        if(document.hidden||warned)return;
        const start=performance.now();console.profile();console.profileEnd();console.clear?.();
        const ms=performance.now()-start;
        if(ms>10){warned=true;log("WARN","Profiling took "+ms.toFixed(1)+" ms; original script would reload.")}
      },250);
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setup,{once:true});
  else setup();
})();
