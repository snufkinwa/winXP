import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, m as missing_component, b as each, n as null_to_empty, g as get_store_value, d as subscribe } from "../../../chunks/ssr.js";
import interact from "interactjs";
import { r as readable, w as writable } from "../../../chunks/index.js";
import "@emailjs/browser";
const recycleIcon = "/_app/immutable/assets/Recycle%20Bin%20(empty).BGRZVM6H.png";
const notepad = "/_app/immutable/assets/Notepad.BlMQNhYy.png";
const maxthonIcon = "/_app/immutable/assets/Maxthon.B3Zezrk9.png";
const paint = "/_app/immutable/assets/Paint.BC1K0L6d.png";
const myComp = "/_app/immutable/assets/My%20Computer.DLvbEHSq.png";
const mediaPlayer = "/_app/immutable/assets/Windows%20Media%20Player%209.BetdHvzF.png";
const minimizeIcon = "/_app/immutable/assets/Minimize.Dog5u1tX.png";
const maximizeIcon = "/_app/immutable/assets/Maximize.CuV0IepR.png";
const closeIcon = "/_app/immutable/assets/Exit.Ccdtabm5.png";
const css$c = {
  code: ".window-container.svelte-wroou5.svelte-wroou5{border-top:none !important;border:3px solid #0000c0;border-top-left-radius:8px;border-top-right-radius:8px;overflow:hidden;position:absolute;cursor:pointer;touch-action:none;user-select:none;box-sizing:border-box}.window.svelte-wroou5.svelte-wroou5{width:100%;background:#e0e0e0;height:calc(100% - 28px);-webkit-font-smoothing:antialiased}.header.svelte-wroou5.svelte-wroou5{display:flex;align-items:center;justify-content:space-between;font-family:'Trebuchet MS';font-size:13px;color:#fff;height:24px;border-left:1px solid #0831d9;border-right:1px solid #001ea0;border-top:1px solid #0831d9;background:linear-gradient(\n			180deg,\n			rgba(9, 151, 255, 1) 0%,\n			rgba(0, 83, 238, 1) 8%,\n			rgba(0, 80, 238, 1) 40%,\n			rgba(0, 102, 255, 1) 88%,\n			rgba(0, 102, 255, 1) 93%,\n			rgba(0, 91, 255, 1) 95%,\n			rgba(0, 61, 215, 1) 96%,\n			rgba(0, 61, 215, 1) 100%\n		);padding:3px 5px 3px 3px;border-top-left-radius:8px;border-top-right-radius:7px;text-shadow:1px 1px #0f1089;cursor:default}.left-side.svelte-wroou5.svelte-wroou5{display:flex;align-items:center}.left-side.svelte-wroou5 img.svelte-wroou5{width:16px;height:16px;margin-right:5px}.title.svelte-wroou5.svelte-wroou5{font-weight:bold}.right-side.svelte-wroou5.svelte-wroou5{display:flex}.minimize.svelte-wroou5.svelte-wroou5,.maximize.svelte-wroou5.svelte-wroou5,.close.svelte-wroou5.svelte-wroou5{width:22px;height:22px;display:flex;align-items:center;justify-content:center;margin-left:2px;background-color:transparent;border:none;color:#fff;font-size:12px;margin-left:5px;cursor:pointer}.minimize.svelte-wroou5.svelte-wroou5:hover,.maximize.svelte-wroou5.svelte-wroou5:hover,.close.svelte-wroou5.svelte-wroou5:hover{background-color:rgba(255, 255, 255, 0.1)}.close.svelte-wroou5.svelte-wroou5:hover{background-color:#e81123}.close.svelte-wroou5.svelte-wroou5{background-color:transparent;border:none;cursor:pointer}.content.svelte-wroou5.svelte-wroou5{height:calc(100% - 3px);width:100%;padding:0;margin:0}.window-container.invisible.svelte-wroou5.svelte-wroou5{border:none;display:flex}.window-container.invisible.svelte-wroou5 .header.svelte-wroou5{opacity:0;position:absolute;height:50px;width:100px;background:transparent;border:none;border-bottom-left-radius:50px;left:63px;z-index:0}.window-container.invisible.svelte-wroou5 .header .minimize.svelte-wroou5{padding-bottom:50px;right:50px;top:18px;position:absolute}.window-container.invisible.svelte-wroou5 .header .maximize.svelte-wroou5{display:none}.window-container.invisible.svelte-wroou5 .header .close.svelte-wroou5{position:absolute;right:0px;top:39px}.window-container.invisible.svelte-wroou5 .header .right-side.svelte-wroou5{flex-direction:column;height:100%}.window-container.invisible.svelte-wroou5 .window-icon.svelte-wroou5{display:none}.window-container.invisible.svelte-wroou5 .title.svelte-wroou5{display:none}.window-container.invisible.svelte-wroou5 .window.svelte-wroou5{background:transparent !important}.window-container.minimized.svelte-wroou5.svelte-wroou5{display:none}.window-container.maximized.svelte-wroou5.svelte-wroou5{width:100% !important;height:calc(100% - 40px) !important;top:0 !important;left:0 !important;transform:none !important}.resizable.svelte-wroou5.svelte-wroou5{touch-action:none;box-sizing:border-box}.draggable.svelte-wroou5.svelte-wroou5{touch-action:none;user-select:none}.resizer-top.svelte-wroou5.svelte-wroou5{cursor:n-resize;height:5px;width:20%;position:absolute;top:0;left:40%;right:0%}",
  map: `{"version":3,"file":"Window.svelte","sources":["Window.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from 'svelte';\\n\\t// import Draggable from './Draggable.svelte';\\n\\timport interact from 'interactjs';\\n\\n\\timport {\\n\\t\\tminimizeApp,\\n\\t\\tupdateAppState,\\n\\t\\tfocusApp,\\n\\t\\tremoveApp,\\n\\t\\ttoggleMaximizeApp\\n\\t} from '../stores/appState';\\n\\timport minimizeIcon from '$lib/assets/windowsIcons/Minimize.png';\\n\\timport maximizeIcon from '$lib/assets/windowsIcons/Maximize.png';\\n\\timport closeIcon from '$lib/assets/windowsIcons/Exit.png';\\n\\n\\texport let window;\\n\\texport let onClose;\\n\\texport let defaultSize;\\n\\texport let defaultOffset;\\n\\texport let zIndex;\\n\\texport let onMinimize;\\n\\tlet onMaximize;\\n\\texport let onFocus;\\n\\n\\tlet localX = window.x;\\n\\tlet localY = window.y;\\n\\tlet localWidth = window.width;\\n\\tlet localHeight = window.height;\\n\\n\\tconst position = { x: 0, y: 0 };\\n\\n\\tconst resizableContainer = interact('.resizable');\\n\\tconst draggable = interact('.window-container');\\n\\n\\tonMount(() => {\\n\\t\\tdraggable.draggable({\\n\\t\\t\\tallowFrom: '.header',\\n\\t\\t\\tmodifiers: [\\n\\t\\t\\t\\tinteract.modifiers.restrictRect({\\n\\t\\t\\t\\t\\trestriction: 'parent'\\n\\t\\t\\t\\t})\\n\\t\\t\\t],\\n\\t\\t\\tlisteners: {\\n\\t\\t\\t\\tstart(event) {\\n\\t\\t\\t\\t\\tconsole.log(event.type, event.target);\\n\\t\\t\\t\\t},\\n\\t\\t\\t\\tmove(event) {\\n\\t\\t\\t\\t\\tposition.x += event.dx;\\n\\t\\t\\t\\t\\tposition.y += event.dy;\\n\\t\\t\\t\\t\\tevent.target.style.transform = \`translate(\${position.x}px, \${position.y}px)\`;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tif (window.resizable) {\\n\\t\\t\\tresizableContainer.resizable({\\n\\t\\t\\t\\tmodifiers: [\\n\\t\\t\\t\\t\\tinteract.modifiers.restrictSize({\\n\\t\\t\\t\\t\\t\\tmin: { width: window.minSize.width, height: window.minSize.height },\\n\\t\\t\\t\\t\\t\\tmax: { width: window.maxSize.width, height: window.maxSize.height }\\n\\t\\t\\t\\t\\t})\\n\\t\\t\\t\\t],\\n\\t\\t\\t\\tedges: { top: '.resizer-top', left: true, bottom: true, right: true },\\n\\t\\t\\t\\tlisteners: {\\n\\t\\t\\t\\t\\tmove(event) {\\n\\t\\t\\t\\t\\t\\tlocalX = (parseFloat(event.target.getAttribute('data-x')) || 0) + event.deltaRect.left;\\n\\t\\t\\t\\t\\t\\tlocalY = (parseFloat(event.target.getAttribute('data-y')) || 0) + event.deltaRect.top;\\n\\t\\t\\t\\t\\t\\tlocalWidth = event.rect.width;\\n\\t\\t\\t\\t\\t\\tlocalHeight = event.rect.height;\\n\\t\\t\\t\\t\\t\\tObject.assign(event.target.style, {\\n\\t\\t\\t\\t\\t\\t\\twidth: \`\${localWidth}px\`,\\n\\t\\t\\t\\t\\t\\t\\theight: \`\${localHeight}px\`,\\n\\t\\t\\t\\t\\t\\t\\ttransform: \`translate(\${localX}px, \${localY}px)\`\\n\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\tevent.target.setAttribute('data-x', localX);\\n\\t\\t\\t\\t\\t\\tevent.target.setAttribute('data-y', localY);\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\tend(event) {\\n\\t\\t\\t\\t\\t\\t// Update the window size in the initialState object\\n\\t\\t\\t\\t\\t\\twindow.width = localWidth;\\n\\t\\t\\t\\t\\t\\twindow.height = localHeight;\\n\\n\\t\\t\\t\\t\\t\\t// Update the window size in the appState\\n\\t\\t\\t\\t\\t\\tupdateAppState(window.id, localWidth, localHeight);\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}\\n\\t\\t\\t});\\n\\t\\t}\\n\\t});\\n\\n\\tfunction handleMinimize() {\\n\\t\\tif (onMinimize) {\\n\\t\\t\\tminimizeApp(window.id);\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleMaximize() {\\n\\t\\ttoggleMaximizeApp(window.id);\\n\\t}\\n\\n\\tfunction handleClose() {\\n\\t\\tif (onClose) {\\n\\t\\t\\tremoveApp(window.id);\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleFocus() {\\n\\t\\tif (onFocus) {\\n\\t\\t\\tfocusApp(window.id);\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleKeyPress(event) {\\n\\t\\tif (event.key === 'Enter' || event.key === ' ') {\\n\\t\\t\\thandleFocus();\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\n<!-- svelte-ignore a11y-no-noninteractive-tabindex -->\\n<div\\n\\tclass=\\"window-container resizable draggable\\"\\n\\tclass:minimized={window.minimized}\\n\\tclass:maximized={window.maximized}\\n\\tclass:invisible={window.header.invisible}\\n\\tstyle=\\"width: {window.maximized ? 0 : defaultSize.width + 'px'}; height: {window.maximized\\n\\t\\t? 0\\n\\t\\t: defaultSize.height + 'px'}; z-index: {zIndex}; top: {window.maximized\\n\\t\\t? '0'\\n\\t\\t: defaultOffset.y + 'px'}; left: {window.maximized ? '0' : defaultOffset.x + 'px'};\\"\\n\\ton:mousedown={handleFocus}\\n\\ttabindex=\\"0\\"\\n\\trole=\\"dialog\\"\\n\\taria-label={window.header.title}\\n\\ton:keydown={handleKeyPress}\\n>\\n\\t<div class=\\"header\\" id={window.id + 'header'}>\\n\\t\\t<div class=\\"left-side\\">\\n\\t\\t\\t<img src={window.header.icon} alt={window.header.title} class=\\"window-icon\\" />\\n\\t\\t\\t<span class=\\"title\\">{window.header.title}</span>\\n\\t\\t</div>\\n\\t\\t<div class=\\"right-side\\">\\n\\t\\t\\t<button class=\\"minimize\\" on:click={handleMinimize}>\\n\\t\\t\\t\\t<img src={minimizeIcon} alt=\\"&#9472;\\" />\\n\\t\\t\\t</button>\\n\\t\\t\\t<button class=\\"maximize\\" on:click={handleMaximize}>\\n\\t\\t\\t\\t<img src={maximizeIcon} alt=\\"&#9723;\\" />\\n\\t\\t\\t</button>\\n\\t\\t\\t<button class=\\"close\\" on:click={handleClose}>\\n\\t\\t\\t\\t<img src={closeIcon} alt=\\"&#10005;\\" />\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"window\\">\\n\\t\\t<div class=\\"content\\">\\n\\t\\t\\t<svelte:component this={window.component} />\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"resizer-top\\" />\\n</div>\\n\\n<style>\\n\\t.window-container {\\n\\t\\tborder-top: none !important;\\n\\t\\tborder: 3px solid #0000c0; /* Dark blue border */\\n\\t\\tborder-top-left-radius: 8px;\\n\\t\\tborder-top-right-radius: 8px;\\n\\t\\toverflow: hidden;\\n\\t\\tposition: absolute;\\n\\t\\tcursor: pointer;\\n\\t\\ttouch-action: none;\\n\\t\\tuser-select: none;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\t.window {\\n\\t\\twidth: 100%;\\n\\t\\tbackground: #e0e0e0;\\n\\t\\theight: calc(100% - 28px);\\n\\t\\t-webkit-font-smoothing: antialiased;\\n\\t}\\n\\n\\t.header {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: space-between;\\n\\t\\tfont-family: 'Trebuchet MS';\\n\\t\\tfont-size: 13px;\\n\\t\\tcolor: #fff;\\n\\t\\theight: 24px;\\n\\t\\tborder-left: 1px solid #0831d9;\\n\\t\\tborder-right: 1px solid #001ea0;\\n\\t\\tborder-top: 1px solid #0831d9;\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\t180deg,\\n\\t\\t\\trgba(9, 151, 255, 1) 0%,\\n\\t\\t\\trgba(0, 83, 238, 1) 8%,\\n\\t\\t\\trgba(0, 80, 238, 1) 40%,\\n\\t\\t\\trgba(0, 102, 255, 1) 88%,\\n\\t\\t\\trgba(0, 102, 255, 1) 93%,\\n\\t\\t\\trgba(0, 91, 255, 1) 95%,\\n\\t\\t\\trgba(0, 61, 215, 1) 96%,\\n\\t\\t\\trgba(0, 61, 215, 1) 100%\\n\\t\\t);\\n\\t\\tpadding: 3px 5px 3px 3px;\\n\\t\\tborder-top-left-radius: 8px;\\n\\t\\tborder-top-right-radius: 7px;\\n\\t\\ttext-shadow: 1px 1px #0f1089;\\n\\t\\tcursor: default;\\n\\t}\\n\\n\\t.left-side {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t.left-side img {\\n\\t\\twidth: 16px;\\n\\t\\theight: 16px;\\n\\t\\tmargin-right: 5px;\\n\\t}\\n\\n\\t.title {\\n\\t\\tfont-weight: bold;\\n\\t}\\n\\n\\t.right-side {\\n\\t\\tdisplay: flex;\\n\\t}\\n\\t.minimize,\\n\\t.maximize,\\n\\t.close {\\n\\t\\twidth: 22px;\\n\\t\\theight: 22px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tmargin-left: 2px;\\n\\t\\tbackground-color: transparent;\\n\\t\\tborder: none;\\n\\t\\tcolor: #fff;\\n\\t\\tfont-size: 12px;\\n\\t\\tmargin-left: 5px;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.minimize:hover,\\n\\t.maximize:hover,\\n\\t.close:hover {\\n\\t\\tbackground-color: rgba(255, 255, 255, 0.1);\\n\\t}\\n\\n\\t.close:hover {\\n\\t\\tbackground-color: #e81123;\\n\\t}\\n\\n\\t.close {\\n\\t\\tbackground-color: transparent;\\n\\t\\tborder: none;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.content {\\n\\t\\theight: calc(100% - 3px);\\n\\t\\twidth: 100%;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t}\\n\\t.window-container.invisible {\\n\\t\\tborder: none;\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\t.window-container.invisible .header {\\n\\t\\topacity: 0;\\n\\t\\tposition: absolute;\\n\\t\\theight: 50px;\\n\\t\\twidth: 100px;\\n\\t\\tbackground: transparent;\\n\\t\\tborder: none;\\n\\t\\tborder-bottom-left-radius: 50px;\\n\\t\\tleft: 63px;\\n\\t\\tz-index: 0;\\n\\t}\\n\\n\\t.window-container.invisible .header .minimize {\\n\\t\\tpadding-bottom: 50px;\\n\\t\\tright: 50px;\\n\\t\\ttop: 18px;\\n\\t\\tposition: absolute;\\n\\t}\\n\\n\\t.window-container.invisible .header .maximize {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t.window-container.invisible .header .close {\\n\\t\\tposition: absolute;\\n\\t\\tright: 0px;\\n\\t\\ttop: 39px;\\n\\t}\\n\\t.window-container.invisible .header .right-side {\\n\\t\\tflex-direction: column;\\n\\t\\theight: 100%;\\n\\t}\\n\\t.window-container.invisible .window-icon {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t.window-container.invisible .title {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t.window-container.invisible .window {\\n\\t\\tbackground: transparent !important;\\n\\t}\\n\\t.window-container.minimized {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t.window-container.maximized {\\n\\t\\twidth: 100% !important;\\n\\t\\theight: calc(100% - 40px) !important;\\n\\t\\ttop: 0 !important;\\n\\t\\tleft: 0 !important;\\n\\t\\ttransform: none !important;\\n\\t}\\n\\n\\t.resizable {\\n\\t\\ttouch-action: none;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\t.draggable {\\n\\t\\ttouch-action: none;\\n\\t\\tuser-select: none;\\n\\t}\\n\\t.resizer-top {\\n\\t\\tcursor: n-resize;\\n\\t\\theight: 5px;\\n\\t\\twidth: 20%;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 40%;\\n\\t\\tright: 0%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { window } = $$props;
  let { onClose } = $$props;
  let { defaultSize } = $$props;
  let { defaultOffset } = $$props;
  let { zIndex } = $$props;
  let { onMinimize } = $$props;
  let { onFocus } = $$props;
  window.x;
  window.y;
  window.width;
  window.height;
  interact(".resizable");
  interact(".window-container");
  if ($$props.window === void 0 && $$bindings.window && window !== void 0) $$bindings.window(window);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.defaultSize === void 0 && $$bindings.defaultSize && defaultSize !== void 0) $$bindings.defaultSize(defaultSize);
  if ($$props.defaultOffset === void 0 && $$bindings.defaultOffset && defaultOffset !== void 0) $$bindings.defaultOffset(defaultOffset);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0) $$bindings.zIndex(zIndex);
  if ($$props.onMinimize === void 0 && $$bindings.onMinimize && onMinimize !== void 0) $$bindings.onMinimize(onMinimize);
  if ($$props.onFocus === void 0 && $$bindings.onFocus && onFocus !== void 0) $$bindings.onFocus(onFocus);
  $$result.css.add(css$c);
  return `  <div class="${[
    "window-container resizable draggable svelte-wroou5",
    (window.minimized ? "minimized" : "") + " " + (window.maximized ? "maximized" : "") + " " + (window.header.invisible ? "invisible" : "")
  ].join(" ").trim()}" style="${"width: " + escape(window.maximized ? 0 : defaultSize.width + "px", true) + "; height: " + escape(window.maximized ? 0 : defaultSize.height + "px", true) + "; z-index: " + escape(zIndex, true) + "; top: " + escape(window.maximized ? "0" : defaultOffset.y + "px", true) + "; left: " + escape(window.maximized ? "0" : defaultOffset.x + "px", true) + ";"}" tabindex="0" role="dialog"${add_attribute("aria-label", window.header.title, 0)}><div class="header svelte-wroou5"${add_attribute("id", window.id + "header", 0)}><div class="left-side svelte-wroou5"><img${add_attribute("src", window.header.icon, 0)}${add_attribute("alt", window.header.title, 0)} class="window-icon svelte-wroou5"> <span class="title svelte-wroou5">${escape(window.header.title)}</span></div> <div class="right-side svelte-wroou5"><button class="minimize svelte-wroou5" data-svelte-h="svelte-1816iya"><img${add_attribute("src", minimizeIcon, 0)} alt="─"></button> <button class="maximize svelte-wroou5" data-svelte-h="svelte-n1yit"><img${add_attribute("src", maximizeIcon, 0)} alt="◻"></button> <button class="close svelte-wroou5" data-svelte-h="svelte-1hbhyaa"><img${add_attribute("src", closeIcon, 0)} alt="✕"></button></div></div> <div class="window svelte-wroou5"><div class="content svelte-wroou5">${validate_component(window.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div> <div class="resizer-top svelte-wroou5"></div> </div>`;
});
const css$b = {
  code: ".drop-down__menu.svelte-1vu75ih{position:absolute;background-color:#f0f0f0;border:1px solid #a6a6a6;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.2);font-size:12px;min-width:200px;z-index:1000;padding:4px 0px}.drop-down__row.svelte-1vu75ih{display:flex;flex-direction:column;padding:4px 2px;cursor:pointer;color:#000;white-space:nowrap}.drop-down__row.svelte-1vu75ih:hover{background-color:#0a246a;color:#fff}.drop-down__row--disable.svelte-1vu75ih{color:#aaa;cursor:default;display:flex;flex-direction:column;padding:4px 4px;cursor:pointer;white-space:nowrap}.drop-down__check.svelte-1vu75ih{width:16px;margin-right:8px}.drop-down__text.svelte-1vu75ih{flex-grow:1;display:flex;justify-content:space-between}.drop-down__hot-key.svelte-1vu75ih{margin-right:5px;color:#888}.drop-down__arrow.svelte-1vu75ih{width:0;height:0;margin-left:8px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #000}.drop-down__arrow--disable.svelte-1vu75ih{width:0;height:0}.drop-down__separator.svelte-1vu75ih{height:1px;background-color:#a6a6a6;margin:4px 0}",
  map: `{"version":3,"file":"WindowDropDown.svelte","sources":["WindowDropDown.svelte"],"sourcesContent":["<script>\\n\\texport let items = [];\\n\\n\\texport let onClick = () => {};\\n\\n\\tlet option = '';\\n\\n\\tfunction handleItemClick(item) {\\n\\t\\tonClick(item.text);\\n\\t}\\n<\/script>\\n\\n<div class=\\"drop-down__menu\\">\\n\\t{#each items as item, index}\\n\\t\\t{#if item.type === 'item'}\\n\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass={\`drop-down__row\${item.disable ? '--disable' : ''}\`}\\n\\t\\t\\t\\ton:mouseenter={() => (option = item.text)}\\n\\t\\t\\t\\ton:click={() => handleItemClick(item)}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"drop-down__check\\"></div>\\n\\t\\t\\t\\t<div class=\\"drop-down__text\\">\\n\\t\\t\\t\\t\\t{item.text}\\n\\t\\t\\t\\t\\t<span class=\\"drop-down__hot-key\\">{item.hotkey || ''}</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"drop-down__arrow--disable\\"></div>\\n\\t\\t\\t</div>\\n\\t\\t{:else if item.type === 'separator'}\\n\\t\\t\\t<div class=\\"drop-down__separator\\"></div>\\n\\t\\t{/if}\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.drop-down__menu {\\n\\t\\tposition: absolute;\\n\\t\\tbackground-color: #f0f0f0;\\n\\t\\tborder: 1px solid #a6a6a6;\\n\\t\\tbox-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\\n\\t\\tfont-size: 12px;\\n\\t\\tmin-width: 200px;\\n\\t\\tz-index: 1000;\\n\\t\\tpadding: 4px 0px;\\n\\t}\\n\\n\\t.drop-down__row {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 4px 2px;\\n\\t\\tcursor: pointer;\\n\\t\\tcolor: #000;\\n\\t\\twhite-space: nowrap;\\n\\t}\\n\\n\\t.drop-down__row:hover {\\n\\t\\tbackground-color: #0a246a;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\t.drop-down__row--disable {\\n\\t\\tcolor: #aaa;\\n\\t\\tcursor: default;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 4px 4px;\\n\\t\\tcursor: pointer;\\n\\t\\twhite-space: nowrap;\\n\\t}\\n\\n\\t.drop-down__check {\\n\\t\\twidth: 16px;\\n\\t\\tmargin-right: 8px;\\n\\t}\\n\\n\\t.drop-down__text {\\n\\t\\tflex-grow: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n\\n\\t.drop-down__hot-key {\\n\\t\\tmargin-right: 5px;\\n\\t\\tcolor: #888;\\n\\t}\\n\\n\\t.drop-down__arrow {\\n\\t\\twidth: 0;\\n\\t\\theight: 0;\\n\\t\\tmargin-left: 8px;\\n\\t\\tborder-top: 5px solid transparent;\\n\\t\\tborder-bottom: 5px solid transparent;\\n\\t\\tborder-left: 5px solid #000;\\n\\t}\\n\\n\\t.drop-down__arrow--disable {\\n\\t\\twidth: 0;\\n\\t\\theight: 0;\\n\\t}\\n\\n\\t.drop-down__separator {\\n\\t\\theight: 1px;\\n\\t\\tbackground-color: #a6a6a6;\\n\\t\\tmargin: 4px 0;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoCC,+BAAiB,CAChB,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC1C,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CAAC,GACd,CAEA,8BAAgB,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MACd,CAEA,8BAAe,MAAO,CACrB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IACR,CAEA,uCAAyB,CACxB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,MACd,CAEA,gCAAkB,CACjB,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,GACf,CAEA,+BAAiB,CAChB,SAAS,CAAE,CAAC,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAClB,CAEA,kCAAoB,CACnB,YAAY,CAAE,GAAG,CACjB,KAAK,CAAE,IACR,CAEA,gCAAkB,CACjB,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACjC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACpC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IACxB,CAEA,yCAA2B,CAC1B,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACT,CAEA,oCAAsB,CACrB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,GAAG,CAAC,CACb"}`
};
const WindowDropDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  $$result.css.add(css$b);
  return `<div class="drop-down__menu svelte-1vu75ih">${each(items, (item, index) => {
    return `${item.type === "item" ? `  <div class="${escape(null_to_empty(`drop-down__row${item.disable ? "--disable" : ""}`), true) + " svelte-1vu75ih"}"><div class="drop-down__check svelte-1vu75ih"></div> <div class="drop-down__text svelte-1vu75ih">${escape(item.text)} <span class="drop-down__hot-key svelte-1vu75ih">${escape(item.hotkey || "")}</span></div> <div class="drop-down__arrow--disable svelte-1vu75ih"></div> </div>` : `${item.type === "separator" ? `<div class="drop-down__separator svelte-1vu75ih"></div>` : ``}`}`;
  })} </div>`;
});
const css$a = {
  code: ".drop-down-list.svelte-1suvwku.svelte-1suvwku{list-style-type:none;padding-left:0;margin:0;display:flex;font-size:13px}.drop-down-list.svelte-1suvwku li.svelte-1suvwku{padding-right:10px}.drop-down-item.svelte-1suvwku.svelte-1suvwku{margin-bottom:0px}",
  map: `{"version":3,"file":"HeaderWindow.svelte","sources":["HeaderWindow.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from 'svelte';\\n\\timport WindowDropDown from './WindowDropDown.svelte';\\n\\timport { removeApp, appState } from '../../stores/appState';\\n\\timport { get } from 'svelte/store';\\n\\n\\texport let items = {};\\n\\texport let onClickItem = () => {};\\n\\texport let onClose; // Add onClose prop\\n\\n\\tlet dropDown;\\n\\tlet openOption = '';\\n\\n\\t// Get the current app ID from the appState\\n\\tlet currentWindowId = null;\\n\\n\\t$: currentWindowId = get(appState).focusedAppId;\\n\\n\\tfunction hoverOption(option) {\\n\\t\\tif (openOption) openOption = option;\\n\\t}\\n\\n\\tfunction handleClickItem(name) {\\n\\t\\tif (name === 'Close' || name === 'Exit') {\\n\\t\\t\\tif (onClose) {\\n\\t\\t\\t\\tonClose();\\n\\t\\t\\t}\\n\\t\\t\\tremoveApp(currentWindowId); // Call removeApp with currentWindowId\\n\\t\\t} else {\\n\\t\\t\\tonClickItem(name);\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleMouseUp(e) {\\n\\t\\tif (!dropDown.contains(e.target)) openOption = '';\\n\\t}\\n\\n\\tonMount(() => {\\n\\t\\twindow.addEventListener('mouseup', handleMouseUp);\\n\\t\\treturn () => {\\n\\t\\t\\twindow.removeEventListener('mouseup', handleMouseUp);\\n\\t\\t};\\n\\t});\\n<\/script>\\n\\n<ul bind:this={dropDown} class=\\"drop-down-list\\" role=\\"menu\\" aria-label=\\"Window Options\\">\\n\\t{#each Object.keys(items) as name}\\n\\t\\t<li class=\\"drop-down-item\\" role=\\"presentation\\">\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t<div\\n\\t\\t\\t\\trole=\\"menuitem\\"\\n\\t\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\t\\ton:mousedown={() => (openOption = name)}\\n\\t\\t\\t\\ton:mouseenter={() => hoverOption(name)}\\n\\t\\t\\t\\ton:click={() => handleClickItem(name)}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{name}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if openOption === name}\\n\\t\\t\\t\\t<WindowDropDown onClick={handleClickItem} items={items[name]} />\\n\\t\\t\\t{/if}\\n\\t\\t</li>\\n\\t{/each}\\n</ul>\\n\\n<style>\\n\\t.drop-down-list {\\n\\t\\tlist-style-type: none;\\n\\t\\tpadding-left: 0;\\n\\t\\tmargin: 0;\\n\\t\\tdisplay: flex;\\n\\t\\tfont-size: 13px;\\n\\t}\\n\\n\\t.drop-down-list li {\\n\\t\\tpadding-right: 10px;\\n\\t}\\n\\n\\t.drop-down-item {\\n\\t\\tmargin-bottom: 0px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkEC,6CAAgB,CACf,eAAe,CAAE,IAAI,CACrB,YAAY,CAAE,CAAC,CACf,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IACZ,CAEA,8BAAe,CAAC,iBAAG,CAClB,aAAa,CAAE,IAChB,CAEA,6CAAgB,CACf,aAAa,CAAE,GAChB"}`
};
const HeaderWindow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = {} } = $$props;
  let { onClickItem = () => {
  } } = $$props;
  let { onClose } = $$props;
  let dropDown;
  let openOption = "";
  let currentWindowId = null;
  function handleClickItem2(name) {
    if (name === "Close" || name === "Exit") {
      if (onClose) {
        onClose();
      }
      removeApp(currentWindowId);
    } else {
      onClickItem(name);
    }
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.onClickItem === void 0 && $$bindings.onClickItem && onClickItem !== void 0) $$bindings.onClickItem(onClickItem);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  $$result.css.add(css$a);
  currentWindowId = get_store_value(appState).focusedAppId;
  return `<ul class="drop-down-list svelte-1suvwku" role="menu" aria-label="Window Options"${add_attribute("this", dropDown, 0)}>${each(Object.keys(items), (name) => {
    return `<li class="drop-down-item svelte-1suvwku" role="presentation"> <div role="menuitem" tabindex="0">${escape(name)}</div> ${openOption === name ? `${validate_component(WindowDropDown, "WindowDropDown").$$render(
      $$result,
      {
        onClick: handleClickItem2,
        items: items[name]
      },
      {},
      {}
    )}` : ``} </li>`;
  })} </ul>`;
});
const File$3 = [
  {
    type: "item",
    text: "Open...",
    hotkey: "Ctrl+O"
  },
  {
    type: "item",
    text: "Edit",
    disable: true
  },
  {
    type: "item",
    disable: true,
    text: "Save",
    hotkey: "Ctrl+S"
  },
  {
    type: "item",
    text: "Save As..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Page Setup..."
  },
  {
    type: "item",
    text: "Print...",
    hotkey: "Ctrl+P"
  },
  {
    type: "item",
    text: "Print Preview..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Import and Export..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Properties"
  },
  {
    type: "item",
    text: "Work Offline"
  },
  {
    type: "item",
    text: "Close"
  }
];
const Edit$3 = [
  {
    type: "item",
    disable: true,
    text: "Cut",
    hotkey: "Ctrl+X"
  },
  {
    type: "item",
    disable: true,
    text: "Copy",
    hotkey: "Ctrl+C"
  },
  {
    type: "item",
    disable: true,
    text: "Paste",
    hotkey: "Ctrl+V"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Select All",
    hotkey: "Ctrl+A"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Find (on This Page)...",
    hotkey: "Ctrl+F"
  }
];
const View$3 = [
  {
    type: "item",
    symbol: "check",
    text: "Status Bar"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Stop",
    hotkey: "Esc"
  },
  {
    type: "item",
    text: "Refresh",
    hotkey: "F5"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Source"
  },
  {
    type: "item",
    disable: true,
    text: "Privacy Report..."
  },
  {
    type: "item",
    text: "Full Screen",
    hotkey: "F11"
  }
];
const Favorites$2 = [
  {
    type: "item",
    text: "Add to Favorites..."
  },
  {
    type: "item",
    text: "Organize Favorites..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Fireship - Learn to Code Faster"
  },
  {
    type: "item",
    text: "MDN Web Docs"
  }
];
const Tools$2 = [
  {
    type: "item",
    text: "Manage Add-ons..."
  },
  {
    type: "item",
    text: "Synchronize..."
  },
  {
    type: "item",
    text: "Maxthon Update"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Diagnose Connection Problems..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Internet Options..."
  }
];
const Help$3 = [
  {
    type: "item",
    text: "Contents and Index"
  },
  {
    type: "item",
    text: "Tip of the Day"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Online Support"
  },
  {
    type: "item",
    text: "Send Feedback"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "About Maxthon"
  }
];
const menuItems$3 = { File: File$3, Edit: Edit$3, View: View$3, Favorites: Favorites$2, Tools: Tools$2, Help: Help$3 };
const forward = "/_app/immutable/assets/Forward.uES_Ppm4.png";
const back = "/_app/immutable/assets/Back.BhIy5HV3.png";
const folder$1 = "/_app/immutable/assets/OE%20Folder%20List.CCJNqAC7.png";
const search$1 = "/_app/immutable/assets/Search.DWhJH6aq.png";
const xangaIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsSAAALEgHS3X78AAAEFUlEQVR4nKVV32/TVhSu2/J37YVJ03TPWodWbNIw0CEhVlrstSVMAmnaHuLFbRewx6AVm8ReeSNqQ5I1EWqYranEXfcD2DR42fbAkpW10KRx/U3nxvnBWGmnXenTzbVuvu+c7xwf9/T8hzXkQO5I0L7uYyK6pzl4V3NQ1BykNQcLXUhrDgqag3G+d8wOlG1T7ZV/Nmk0NKkIU6Rh0kIH8lyESWNtJSY/+SVw/CowMt8Bn09eBzQbHt8btdeVLXO4L8qihM+GgZkBYHawAz5fHgZMKnULpJlMc1DXHARdqB+/AhxxkOd7py/9yQJRBiIjCU1Rg0kBTBE0d6phRj7PdAsscMQRKboQjMzJfalLoJVBFp+oHGkDJiFCKM/N59mXC9ghRx5IATuUAskPPeXZB0NSIExQriUQJtoC2J+AHbYF3pkDjto7Bb53Q/+8d3My1r8/AZH99xrYCJiYodlh/e1rwJuX8dULLZikW7ioIkxQVIM26s0a0HM1KHC3cEHZEgZHzuTX3s9i7a2xPypE6QrRYpVosSLo5pPD9Dg0BoAUd05XF01zFw1xBsvdAuNHbHiag7xmY4k9Z1s4cibHa6+gHjuEhqo2EVOx8foA1oepimnKhQkqwKQliYTIwyQPJhn7ehsrRGkmrwpRqxA1qkSNiqDatqqiSlTck2AohZ5jzo4yemVDOX31L4lk4hvlxsQXst8rRIscNZNXiJiUEUQCt/nO+gj1b86QsjkjFN6fzghlxxQKzoumyPbdyd6tlXjf1kpc7s/yRt/m9VOyW6qRAEcekbOYFKhEAoWPxYFUifqaEL2pO9Q3+zXJAHtQ1l9ukRA32fOKEDWOnMnZrnpMZdtk++62km407ODro2HZKME3Migb2bCs58K7eg7fv3fryYlDjzcOCmzHVHDUDCYPXh3AQ40qH31Li9N3KGd5lEt6lLNcyiQ9UbJcOtNWgq8X8fsF4P5Z4Oc48FMceBAHHp1DOH8C60djVS4oe862VAUVmDz/6QBm76uw11TY3zVxcXUQ84+GYbnUaVP4Rho/TgG+XoNvNFoIy3oNv7DYRO6f6XPkTG65VEt61LA6qKVWB2F5XcMOvrGAB2cB3wjgGwjLuoQ835tCuKJLr9fPHe4vWHSAf7MtHLkkdwmW10bj0prKe3ZXgS4E0jbfkMNuszympLw35LBjz9mSKOoXBdzdBcL/IRDukoEe1cB4rgbwjTp+mOTn+S4B2d/cLVxQyxW1tv/u7jUo4rcLYL9lB7Vwbwr49TzXQ34yn5bH2xlwK3K3MBlH3AKf5x7KLup8MuEbY6GvN98DX892IM/L8HU5uHbKujLbysCjM5ZHy5YrMmwHey7hUcZyRcnyomGH252P/14Lq/HoDY1mzB4r6YmevwHtSnAl0rGcJgAAAABJRU5ErkJggg==";
const globe = "/_app/immutable/assets/Internet%20Shortcut.BWa9iqfK.png";
const refresh = "/_app/immutable/assets/IE%20Refresh.BBmPGW4g.png";
const stop = "/_app/immutable/assets/IE%20Stop.BS_iRdSe.png";
const blank = "/_app/immutable/assets/Generic%20Document.B6ZVN6kT.png";
const link = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAAAJklEQVQYV2MAgv8gDAQgApOPVRCJDxZAF0Tm45WEsnFL/v//nwEAkHRPsfhCgVMAAAAASUVORK5CYII=";
const myspacelogo = "data:image/png;base64,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";
const empty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNgAAIAAAUAAen63NgAAAAASUVORK5CYII=";
const time = readable(/* @__PURE__ */ new Date(), function start(set) {
  const interval = setInterval(() => {
    set(/* @__PURE__ */ new Date());
  }, 1e3);
  return function stop2() {
    clearInterval(interval);
  };
});
const javaLogo = "/_app/immutable/assets/java-icon-1511x2048-6ikx8301.BiA37Tvy.png";
const pythonLogo = "/_app/immutable/assets/Python-logo-notext.svg.CTJsvUCz.png";
const reactLogo = "/_app/immutable/assets/React-icon.svg.D6PlakiV.png";
const gitLogo = "data:image/svg+xml,%3csvg%20width='51'%20height='50'%20viewBox='0%200%2051%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1479_21476)'%3e%3cpath%20d='M2.04529%2027.5236C0.651571%2026.1298%200.651571%2023.8702%202.04529%2022.4764L23.4764%201.04529C24.8702%20-0.348429%2027.1298%20-0.348429%2028.5236%201.04529L49.9547%2022.4764C51.3484%2023.8702%2051.3484%2026.1298%2049.9547%2027.5236L28.5236%2048.9547C27.1298%2050.3484%2024.8702%2050.3484%2023.4764%2048.9547L2.04529%2027.5236Z'%20fill='%23EE513B'/%3e%3cpath%20d='M19.1342%205L17%207.17115L22.5122%2012.7787C22.2892%2013.2653%2022.1647%2013.8081%2022.1647%2014.3805C22.1647%2016.0054%2023.1683%2017.3919%2024.5793%2017.9334V31.6509C23.1683%2032.1923%2022.1647%2033.5788%2022.1647%2035.2038C22.1647%2037.3004%2023.8354%2039%2025.8963%2039C27.9573%2039%2029.628%2037.3004%2029.628%2035.2038C29.628%2033.7307%2028.8032%2032.4533%2027.5976%2031.8242V17.9521L32.8668%2023.3124C32.6546%2023.7892%2032.5366%2024.3185%2032.5366%2024.8759C32.5366%2026.9725%2034.2074%2028.6721%2036.2683%2028.6721C38.3293%2028.6721%2040%2026.9725%2040%2024.8759C40%2022.7793%2038.3293%2021.0797%2036.2683%2021.0797C35.8678%2021.0797%2035.4821%2021.1438%2035.1204%2021.2626L29.4614%2015.5058C29.5697%2015.1503%2029.628%2014.7722%2029.628%2014.3805C29.628%2012.2839%2027.9573%2010.5842%2025.8963%2010.5842C25.5112%2010.5842%2025.1398%2010.6436%2024.7902%2010.7538L19.1342%205Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1479_21476'%3e%3crect%20width='50'%20height='50'%20fill='white'%20transform='translate(0.820312)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const mySQLLogo = "/_app/immutable/assets/mysql.D1fmG43W.png";
const sqlliteLogo = "/_app/immutable/assets/SQLitelogo_641x400.DmPq8zPG.png";
const mongodbLogo = "data:image/svg+xml,%3csvg%20width='51'%20height='50'%20viewBox='0%200%2051%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1479_21496)'%3e%3cpath%20d='M25.7715%2050C39.5786%2050%2050.7715%2038.8071%2050.7715%2025C50.7715%2011.1929%2039.5786%200%2025.7715%200C11.9644%200%200.771484%2011.1929%200.771484%2025C0.771484%2038.8071%2011.9644%2050%2025.7715%2050Z'%20fill='%2313AA52'/%3e%3cpath%20d='M32.4546%2021.9453C30.8755%2014.9761%2027.1436%2012.6846%2026.7417%2011.8091C26.3023%2011.1914%2025.857%2010.0928%2025.857%2010.0928C25.8497%2010.0742%2025.8379%2010.0415%2025.8243%2010.0098C25.7789%2010.6274%2025.7554%2010.8657%2025.1714%2011.4888C24.2671%2012.1958%2019.6275%2016.0889%2019.2501%2024.0068C18.898%2031.3916%2024.5845%2035.792%2025.3536%2036.353L25.441%2036.415V36.4097C25.4459%2036.4468%2025.6851%2038.1675%2025.8531%2039.9907H26.4556C26.597%2038.7019%2026.8089%2037.4219%2027.0904%2036.1562L27.1392%2036.1245C27.4832%2035.8779%2027.8112%2035.6096%2028.1211%2035.3213L28.1563%2035.2896C29.7911%2033.7793%2032.73%2030.2861%2032.7012%2024.7168C32.6951%2023.7878%2032.6127%2022.8608%2032.4546%2021.9453ZM25.7891%2032.1836C25.7891%2032.1836%2025.7891%2021.8262%2026.1309%2021.8281C26.3975%2021.8281%2026.7427%2035.188%2026.7427%2035.188C26.2681%2035.1309%2025.7891%2032.9893%2025.7891%2032.1836Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1479_21496'%3e%3crect%20width='50'%20height='50'%20fill='white'%20transform='translate(0.771484)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const cssLogo = "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.03125%2044.9219L2.92969%200H46.9727L42.9688%2044.9219L25%2050'%20fill='%23264DE4'/%3e%3cpath%20d='M25%203.61328V46.0938L39.5508%2042.0898L42.9688%203.61328'%20fill='%232965F1'/%3e%3cpath%20d='M11.1328%209.17969H25V14.6484H11.6211M12.1094%2020.3125H25V25.8789H12.5977M12.8906%2028.6133H18.3594L18.75%2033.0078L25%2034.668V40.4297L13.5742%2037.3047'%20fill='%23EBEBEB'/%3e%3cpath%20d='M25%2020.3125V25.8789H31.7383L31.0547%2033.0078L25%2034.668V40.4297L36.2305%2037.3047L38.7695%209.17969H25V14.6484H32.8125L32.2754%2020.3125H25Z'%20fill='white'/%3e%3c/svg%3e";
const jsLogo = "data:image/svg+xml,%3csvg%20width='51'%20height='50'%20viewBox='0%200%2051%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1479_21409)'%3e%3cpath%20d='M43%200H8C3.85786%200%200.5%203.35786%200.5%207.5V42.5C0.5%2046.6421%203.85786%2050%208%2050H43C47.1421%2050%2050.5%2046.6421%2050.5%2042.5V7.5C50.5%203.35786%2047.1421%200%2043%200Z'%20fill='%23F0DB4F'/%3e%3cpath%20d='M32.1406%2036.1328C33.1172%2037.793%2034.4844%2038.9648%2036.7305%2038.9648C38.6836%2038.9648%2039.9531%2037.9883%2039.9531%2036.6211C39.9531%2035.0586%2038.6836%2034.4727%2036.5352%2033.4961L35.3633%2033.0078C31.9453%2031.543%2029.6992%2029.7852%2029.6992%2025.9766C29.6992%2022.4609%2032.3359%2019.7266%2036.5352%2019.7266C39.5625%2019.7266%2041.7109%2020.8008%2043.1758%2023.5352L39.5625%2025.8789C38.7812%2024.4141%2037.9023%2023.8281%2036.5352%2023.8281C35.168%2023.8281%2034.2891%2024.707%2034.2891%2025.8789C34.2891%2027.2461%2035.168%2027.832%2037.2188%2028.7109L38.3906%2029.1992C42.3945%2030.957%2044.6406%2032.6172%2044.6406%2036.6211C44.6406%2040.8203%2041.3203%2043.1641%2036.8281%2043.1641C32.4336%2043.1641%2029.6016%2041.1133%2028.2344%2038.3789L32.1406%2036.1328ZM15.5391%2036.5234C16.3203%2037.793%2016.9062%2038.9648%2018.5664%2038.9648C20.1289%2038.9648%2021.1055%2038.3789%2021.1055%2036.0352V19.8242H25.793V35.8398C25.793%2040.7227%2022.9609%2042.8711%2018.7617%2042.8711C14.9531%2042.8711%2012.8047%2040.918%2011.7305%2038.5742L15.5391%2036.5234Z'%20fill='%23323330'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1479_21409'%3e%3crect%20width='50'%20height='50'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const htmlLogo = "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.93359%2044.9219L2.92969%200H46.9727L42.9688%2044.9219L24.9023%2050'%20fill='%23E34F26'/%3e%3cpath%20d='M25%2046.0938L39.5508%2042.0898L42.9688%203.61328H25'%20fill='%23EF652A'/%3e%3cpath%20d='M25%2020.3125H17.6758L17.1875%2014.6484H25V9.17969H11.1328L12.5977%2025.8789H25V20.3125ZM24.9023%2034.668L18.75%2033.0078L18.3594%2028.6133H12.8906L13.5742%2037.3047L24.9023%2040.4297V34.668Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M24.9023%2020.3125V25.8789H31.7383L31.0547%2033.0078L24.9023%2034.668V40.4297L36.2305%2037.3047L37.793%2020.3125H24.9023ZM24.9023%209.17969V14.6484H38.2812L38.7695%209.17969H24.9023Z'%20fill='white'/%3e%3c/svg%3e";
const svelteLogo = "/_app/immutable/assets/svelte_logo.CtSjgb46.png";
const css$9 = {
  code: ".svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{box-sizing:border-box}h1.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev,h2.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev,p.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{margin-top:0}a.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{text-decoration:none}a.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev:hover{text-decoration:underline}.is-online.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:100%;max-width:80px;height:20px;background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/396624/onlinenow.gif');background-size:contain;background-position:center left;background-repeat:no-repeat;margin:5px 0}ul.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{list-style-type:none;margin:0;padding:0}.inline-list.svelte-1gi8iev li.svelte-1gi8iev.svelte-1gi8iev{display:inline-block}.skill.svelte-1gi8iev .name.svelte-1gi8iev.svelte-1gi8iev{display:block;margin-top:5px;text-decoration:none}.skill.svelte-1gi8iev .photo.svelte-1gi8iev.svelte-1gi8iev{width:54px;height:auto}.inline-list.svelte-1gi8iev li.svelte-1gi8iev.svelte-1gi8iev:after{content:'|';margin:0 6px 0 10px}.inline-list.svelte-1gi8iev li.svelte-1gi8iev.svelte-1gi8iev:last-child:after{content:''}.main-body.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{max-width:1000px;background-color:#fff;margin:0 auto;padding-bottom:10px}nav.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{color:#fff;background-color:#0047ab}nav.svelte-1gi8iev a.svelte-1gi8iev.svelte-1gi8iev{color:#fff}.nav-top.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{display:flex;justify-content:space-between;align-items:center;padding:10px 10px;font-size:14px}.nav-top.svelte-1gi8iev a.svelte-1gi8iev.svelte-1gi8iev{margin:0 5px}.nav-top.svelte-1gi8iev label.svelte-1gi8iev~label.svelte-1gi8iev{margin-left:10px}.nav-middle.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:100%;height:150px}.nav-bottom.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-color:#73aad6;text-align:center;padding:5px 0}.nav-bottom.svelte-1gi8iev ul.svelte-1gi8iev li.svelte-1gi8iev:after{color:#000}.nav-bottom.svelte-1gi8iev a.svelte-1gi8iev.svelte-1gi8iev{font-size:12px;text-transform:capitalize;color:#fff}.profile-body.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:100%;display:inline-block;font-size:0}.col.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{font-size:16px;display:inline-block;vertical-align:top;width:40%;padding:10px 20px}.col.svelte-1gi8iev+.col.svelte-1gi8iev.svelte-1gi8iev{width:60%}.identity.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:100%;font-size:0}.avatar.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev,.details.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{display:inline-block;vertical-align:top;font-size:16px}.avatar.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:50%;text-align:center;font-size:12px}.avatar.svelte-1gi8iev img.svelte-1gi8iev.svelte-1gi8iev{max-width:100%}.details.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:50%;padding-left:20px;font-size:14px}.details.svelte-1gi8iev ul.svelte-1gi8iev li.svelte-1gi8iev{line-height:1.25}.details.svelte-1gi8iev ul.svelte-1gi8iev li.svelte-1gi8iev:last-child{margin-top:30px}.radio--input.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{appearance:none;padding:4px;background-color:white;border-radius:50%;border:2px solid grey}.radio--input.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev:checked{border-color:magenta}.search.svelte-1gi8iev input.svelte-1gi8iev.svelte-1gi8iev{background-color:white}.search.svelte-1gi8iev button.svelte-1gi8iev.svelte-1gi8iev{background-color:white;color:black}.small-panel.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{display:inline-block;width:100%;margin-top:20px;border:2px solid #73aad6}.panel-header.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-color:#73aad6;color:#fff;font-weight:700;padding:1px 15px}.row.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{display:inline-block;width:100%;padding:5px 0 0 5px;font-size:0}.contact-panel.svelte-1gi8iev .row.svelte-1gi8iev.svelte-1gi8iev{height:29px;padding:0}.btn.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{cursor:pointer;display:inline-block;height:100%;width:50%;font-size:14px;background-size:contain;background-repeat:no-repeat;background-position:center}.act-1.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-image:url('https://xpportfoliowebsite.s3.amazonaws.com/Images/sendMailIcon.gif')}.act-2.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-image:url('https://xpportfoliowebsite.s3.amazonaws.com/Images/forwardMailIcon.gif')}.act-3.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-image:url('https://xpportfoliowebsite.s3.amazonaws.com/Images/addFriendIcon.gif')}.act-4.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-image:url('https://xpportfoliowebsite.s3.amazonaws.com/Images/addFavoritesIcon.gif')}.act-5.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-image:url('https://xpportfoliowebsite.s3.amazonaws.com/Images/messagefriend.gif')}.act-6.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-image:url('https://xpportfoliowebsite.s3.amazonaws.com/Images/blockuser.gif')}.act-7.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-image:url('https://xpportfoliowebsite.s3.amazonaws.com/Images/icon_add_to_group.gif')}.act-8.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-image:url('https://xpportfoliowebsite.s3.amazonaws.com/Images/icon_rank_user4.gif')}.m-details-panel.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{padding-bottom:5px}.m-details-panel.svelte-1gi8iev .row.svelte-1gi8iev.svelte-1gi8iev{display:flex;align-items:stretch}.m-details-panel.svelte-1gi8iev .sm-col.svelte-1gi8iev.svelte-1gi8iev{display:inline-block;width:40%;font-size:14px;padding:0 5px 0 0;align-self:stretch}.m-details-panel.svelte-1gi8iev .sm-col:first-child p.svelte-1gi8iev.svelte-1gi8iev{font-weight:700;color:#0047ab;text-transform:capitalize}.m-details-panel.svelte-1gi8iev .sm-col.svelte-1gi8iev.svelte-1gi8iev:last-child{width:60%}.m-details-panel.svelte-1gi8iev .sm-col p.svelte-1gi8iev.svelte-1gi8iev{background-color:#b5d2fa;padding:5px;margin:0;height:100%}.m-details-panel.svelte-1gi8iev .sm-col:last-child p.svelte-1gi8iev.svelte-1gi8iev{background-color:#d5e7fb}.profile-section.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:100%}.section-header.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{background-color:#ffd6a8;color:#ff7b00;font-weight:700;padding:2px 20px;margin-bottom:10px}.section-subheader.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{font-weight:700;color:#ff7b00;margin-left:10px;margin-bottom:5px}.section-subheader.svelte-1gi8iev+p.svelte-1gi8iev.svelte-1gi8iev{margin-left:10px}.profile-section.svelte-1gi8iev b.svelte-1gi8iev.svelte-1gi8iev{font-weight:normal;color:#dd1900}.user-content.svelte-1gi8iev .top-banner.svelte-1gi8iev.svelte-1gi8iev{display:flex;justify-content:center;align-items:center;min-height:130px;width:100%;border:3px solid #000;margin-bottom:20px}.user-content.svelte-1gi8iev .top-banner h1.svelte-1gi8iev.svelte-1gi8iev{margin:0;font-size:23px}.skill-count.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{font-weight:700}.skill-grid.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:100%}.skill-grid.svelte-1gi8iev .row.svelte-1gi8iev.svelte-1gi8iev{width:100%;display:flex;gap:10px}.skill-grid.svelte-1gi8iev .skill.svelte-1gi8iev.svelte-1gi8iev{padding:20px;width:100%;color:black;align-items:center;text-align:center;display:flex;flex-direction:column;justify-content:center;cursor:pointer}.skill-grid.svelte-1gi8iev .skill:hover a.svelte-1gi8iev.svelte-1gi8iev{text-decoration:underline}.skill-grid__a.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:30%;display:flex;color:black;font-size:12px;margin-bottom:10px}.skill-grid.svelte-1gi8iev img.svelte-1gi8iev.svelte-1gi8iev{width:100%;vertical-align:top}.view-all-f.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{display:inline-block;width:100%;text-align:right;color:#dd1900;font-weight:700;margin:10px 0;font-size:14px;background-color:transparent;border:none}.comment-details.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{display:flex;justify-content:space-between;margin-bottom:10px}.comment-details.svelte-1gi8iev .comments-to-display.svelte-1gi8iev.svelte-1gi8iev{font-weight:700}.comment-stream.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:100%}.comment.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{width:100%;display:flex;background-color:#fbeacc}.comment.svelte-1gi8iev .dp-group.svelte-1gi8iev.svelte-1gi8iev{max-width:120px;overflow:hidden}.comment.svelte-1gi8iev .dp-group.svelte-1gi8iev.svelte-1gi8iev,.comment.svelte-1gi8iev .comment-cont.svelte-1gi8iev.svelte-1gi8iev{padding:15px}.comment.svelte-1gi8iev .dp-group.svelte-1gi8iev.svelte-1gi8iev{background-color:#ffd6a8;text-align:center}.comment.svelte-1gi8iev .dp-group a.svelte-1gi8iev.svelte-1gi8iev{font-weight:200}.comment.svelte-1gi8iev .dp-group img.svelte-1gi8iev.svelte-1gi8iev{width:100%;max-height:150px;margin:10px 0}.comment.svelte-1gi8iev .comment-cont.svelte-1gi8iev.svelte-1gi8iev{flex-grow:2}.comment.svelte-1gi8iev .comment-cont .post-info.svelte-1gi8iev.svelte-1gi8iev{display:flex;justify-content:space-between;margin-bottom:10px;font-size:12px}.comment.svelte-1gi8iev .comment-cont .post-info .date.svelte-1gi8iev.svelte-1gi8iev{font-weight:700}.comment.svelte-1gi8iev .comment-cont .post-info .c-actions.svelte-1gi8iev.svelte-1gi8iev{text-align:right}.comment.svelte-1gi8iev .message-body.svelte-1gi8iev.svelte-1gi8iev{font-size:12px;line-height:16px}footer.svelte-1gi8iev.svelte-1gi8iev.svelte-1gi8iev{display:flex;justify-content:center;margin:20px 0}footer.svelte-1gi8iev ul.svelte-1gi8iev li a.svelte-1gi8iev{color:#0047ab;text-decoration:underline}",
  map: `{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script>\\n\\timport { time } from '../../../stores/stores';\\n\\n\\timport javaLogo from '$lib/assets/skillslogo/java-icon-1511x2048-6ikx8301.png';\\n\\timport pythonLogo from '$lib/assets/skillslogo/Python-logo-notext.svg.png';\\n\\timport reactLogo from '$lib/assets/skillslogo/React-icon.svg.png';\\n\\timport gitLogo from '$lib/assets/skillslogo/git.svg';\\n\\timport mySQLLogo from '$lib/assets/skillslogo/mysql.png';\\n\\timport sqlliteLogo from '$lib/assets/skillslogo/SQLitelogo_641x400.png';\\n\\timport mongodbLogo from '$lib/assets/skillslogo/mongodb.svg';\\n\\timport cssLogo from '$lib/assets/skillslogo/css.svg';\\n\\timport jsLogo from '$lib/assets/skillslogo/javascript.svg';\\n\\timport htmlLogo from '$lib/assets/skillslogo/html.svg';\\n\\timport svelteLogo from '$lib/assets/skillslogo/svelte_logo.png';\\n\\timport empty from '$lib/assets/empty.png';\\n\\n\\tconst formatter = new Intl.DateTimeFormat('en', {\\n\\t\\tmonth: 'short',\\n\\t\\tday: 'numeric',\\n\\t\\tyear: 'numeric'\\n\\t});\\n\\n\\tlet skills = [\\n\\t\\t{\\n\\t\\t\\tname: 'Java',\\n\\t\\t\\ticon: javaLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'Git',\\n\\t\\t\\ticon: gitLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'Python',\\n\\t\\t\\ticon: pythonLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'JavaScript',\\n\\t\\t\\ticon: jsLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'React',\\n\\t\\t\\ticon: reactLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'CSS',\\n\\t\\t\\ticon: cssLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'HTML',\\n\\t\\t\\ticon: htmlLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'MySQL',\\n\\t\\t\\ticon: mySQLLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'Svelte',\\n\\t\\t\\ticon: svelteLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'MongoDB',\\n\\t\\t\\ticon: mongodbLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'SQLite',\\n\\t\\t\\ticon: sqlliteLogo\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: '',\\n\\t\\t\\ticon: empty\\n\\t\\t}\\n\\t];\\n\\n\\tlet showAllSkills = false;\\n<\/script>\\n\\n<div class=\\"main-body\\">\\n\\t<nav>\\n\\t\\t<div class=\\"nav-top\\">\\n\\t\\t\\t<div class=\\"links\\">\\n\\t\\t\\t\\t<a href=\\"#/\\">MySpace.com</a>&nbsp;|&nbsp;<a href=\\"#/\\">Home</a>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"search\\">\\n\\t\\t\\t\\t<label for=\\"forGeneral\\"> The Web </label>\\n\\t\\t\\t\\t<input type=\\"radio\\" name=\\"search\\" id=\\"forGeneral\\" class=\\"radio--input\\" />\\n\\t\\t\\t\\t<label for=\\"forMyspace\\"> MySpace </label>\\n\\t\\t\\t\\t<input type=\\"radio\\" name=\\"search\\" id=\\"forMyspace\\" checked class=\\"radio--input\\" />\\n\\t\\t\\t\\t<input type=\\"text\\" name=\\"\\" id=\\"\\" />\\n\\t\\t\\t\\t<button>search</button>\\n\\t\\t\\t</div>\\n\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t<div class=\\"links\\"><a href=\\"#\\">Help</a>&nbsp;|&nbsp;<a href=\\"#\\">SignUp</a></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"nav-middle\\"></div>\\n\\t\\t<div class=\\"nav-bottom\\">\\n\\t\\t\\t<ul class=\\"inline-list\\">\\n\\t\\t\\t\\t<li><a href=\\"#/\\">home</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">browse</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">search</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">invite</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">film</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">mail</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">blog</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">favorites</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">forum</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">group</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">events</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">video</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">music</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">comedy</a></li>\\n\\t\\t\\t\\t<li><a href=\\"#/\\">classifieds</a></li>\\n\\t\\t\\t</ul>\\n\\t\\t</div>\\n\\t</nav>\\n\\t<section class=\\"profile-body\\">\\n\\t\\t<div class=\\"col user-info\\">\\n\\t\\t\\t<h2 class=\\"name\\">Janay King</h2>\\n\\t\\t\\t<div class=\\"identity\\">\\n\\t\\t\\t\\t<div class=\\"avatar\\">\\n\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\tsrc=\\"https://media1.tenor.com/m/AlUkiGkR2j8AAAAC/new-game-ahagon-umiko-programming.gif\\"\\n\\t\\t\\t\\t\\t\\talt=\\"avatar\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<div class=\\"media-view\\">\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t\\t\\t\\tView My: <a href=\\"#/\\">Pics</a>&nbsp;|&nbsp;<a href=\\"#/\\">Videos</a>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t<li>\\"Code. Create. Conquer.\\"</li>\\n\\t\\t\\t\\t\\t\\t<li>&nbsp;</li>\\n\\t\\t\\t\\t\\t\\t<li>Female</li>\\n\\t\\t\\t\\t\\t\\t<li><span class=\\"age\\">32</span> years old</li>\\n\\t\\t\\t\\t\\t\\t<li>Texas</li>\\n\\t\\t\\t\\t\\t\\t<li>United States</li>\\n\\t\\t\\t\\t\\t\\t<li class=\\"is-online\\"></li>\\n\\t\\t\\t\\t\\t\\t<li>Last Login: <span class=\\"date\\">{formatter.format($time)}</span></li>\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"small-panel contact-panel\\">\\n\\t\\t\\t\\t<div class=\\"panel-header\\">Contacting Janay King</div>\\n\\t\\t\\t\\t<div class=\\"buttons-container\\">\\n\\t\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-attribute -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-attribute -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t\\t<a intent=\\"reply\\" class=\\"btn act-1\\"></a>\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t\\t<a href=\\"#/\\" class=\\"btn act-2\\"></a>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-attribute -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t\\t\\t\\t<a intent=\\"add\\" class=\\"btn act-3\\"></a>\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-invalid-attribute -->\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\" class=\\"btn act-4\\"></a>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t\\t<a href=\\"#/\\" class=\\"btn act-5\\"></a>\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t\\t<a href=\\"#/\\" class=\\"btn act-6\\"></a>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-missing-content -->\\n\\t\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"#/\\" class=\\"btn act-7\\"></a>\\n\\t\\t\\t\\t\\t\\t<a href=\\"#/\\" class=\\"btn act-8\\"></a>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"small-panel m-details-panel\\">\\n\\t\\t\\t\\t<div class=\\"panel-header\\">Janay King's Interests</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>General:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Internet, Blockchain, Machine Learning, Quantum Computing</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Music:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Game instrumentals and EDM</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Movies:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Fantasy films, Legend(1985) and scifi flicks</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Television:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Delicious in Dungeon, Bridgerton</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Goals:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t\\tTo become a leading expert in AI and Blockchain, contribute to open-source projects,\\n\\t\\t\\t\\t\\t\\t\\tand develop innovative tech solutions.\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"small-panel m-details-panel\\">\\n\\t\\t\\t\\t<div class=\\"panel-header\\">Janay King's Details</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Status:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Student</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Here for:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>skills, Collaborators, Work opportunities</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Hobbies:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Coding, Reading Tech Blogs</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Hometown:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Ansbach, Germany</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Certifications:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Python Essentials I, Python Essentials II</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Ethnicity:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Mixed</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Occupation:</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sm-col\\">\\n\\t\\t\\t\\t\\t\\t<p>Computer Science Student</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"col user-content\\">\\n\\t\\t\\t<div class=\\"top-banner\\">\\n\\t\\t\\t\\t<h1>Janay King is in your extended network</h1>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"profile-section\\" id=\\"blog-container\\"></div>\\n\\t\\t\\t<div class=\\"profile-section\\" id=\\"blurbs-container\\">\\n\\t\\t\\t\\t<div class=\\"section-header\\">Janay King's blurbs</div>\\n\\t\\t\\t\\t<div class=\\"section-subheader\\">About me:</div>\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\tBet you didn’t know... <br /> <br /> The original MySpace was heavily built using HTML tables,\\n\\t\\t\\t\\t\\tmaking the site clunky by today's standards. Despite this, it brought people together and inspired\\n\\t\\t\\t\\t\\tmany Y2K kids to learn coding by customizing their profiles with HTML and CSS.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<div class=\\"section-subheader\\">Who I'd Like to meet:</div>\\n\\t\\t\\t\\t<p>Fellow web devs, coders, and meme masters.</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"profile-section\\" id=\\"skill-container\\">\\n\\t\\t\\t\\t<div class=\\"section-header\\">Janay King's skill space</div>\\n\\t\\t\\t\\t<div class=\\"skill-count\\">Janay King has <b>{skills.length}</b> skills.</div>\\n\\t\\t\\t\\t<div class=\\"skill-grid\\">\\n\\t\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t\\t{#each skills.slice(0, 4) as skill}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"skill\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#/\\" class=\\"skill-grid__a name\\" target=\\"_blank\\">{skill.name}</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t<img src={skill.icon} alt={skill.name} class=\\"photo\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t\\t{#each skills.slice(4, 8) as skill}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"skill\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#/\\" class=\\"skill-grid__a\\" target=\\"_blank\\">{skill.name}</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t<img src={skill.icon} alt={skill.name} class=\\"photo\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{#if showAllSkills}\\n\\t\\t\\t\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t\\t\\t\\t{#each skills.slice(8) as skill}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"skill\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#/\\" class=\\"skill-grid__a\\" target=\\"_blank\\">{skill.name}</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src={skill.icon} alt={skill.name} class=\\"photo\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{#if skills.length > 9}\\n\\t\\t\\t\\t\\t<button on:click={() => (showAllSkills = !showAllSkills)} class=\\"view-all-f\\">\\n\\t\\t\\t\\t\\t\\t{showAllSkills ? 'Show Less' : \\"View All of Janay King's skills\\"}\\n\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"profile-section\\" id=\\"comments-container\\">\\n\\t\\t\\t\\t<div class=\\"section-header\\">Comments</div>\\n\\t\\t\\t\\t<div class=\\"comment-details\\">\\n\\t\\t\\t\\t\\t<div class=\\"comments-to-display\\">Displaying <b>1</b> of <b></b> comments</div>\\n\\t\\t\\t\\t\\t<div class=\\"comment-actions\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"#/\\">View All</a>&nbsp;|&nbsp;<a href=\\"#/\\">Add Comment</a>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"comment-stream\\">\\n\\t\\t\\t\\t\\t<div class=\\"comment user03324\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"dp-group\\">\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#/\\" class=\\"prof-name\\">Elon M&sup2; </a>\\n\\t\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-img-redundant-alt -->\\n\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"https://pics.craiyon.com/2023-06-28/e97ccd283e0740fab888df91e834520e.webp\\"\\n\\t\\t\\t\\t\\t\\t\\t\\talt=\\"profile photo\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t<p></p>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"user-status\\"></span>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"comment-cont\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"post-info\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"date\\">Jan 1, 2024</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"c-actions\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<ul class=\\"inline-list\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<li><a href=\\"#/\\">Reply</a></li>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<li><a href=\\"#/\\">Report</a></li>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<li><a href=\\"#/\\">View All</a></li>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"message-body\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"https://xpportfoliowebsite.s3.amazonaws.com/Images/iNSk.gif\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"width: 100%;\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\talt=\\"insk\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</section>\\n</div>\\n<footer>\\n\\t<ul class=\\"inline-list\\">\\n\\t\\t<li><a href=\\"#/\\">About</a></li>\\n\\t\\t<li><a href=\\"#/\\">FAQ</a></li>\\n\\t\\t<li><a href=\\"#/\\">Terms</a></li>\\n\\t\\t<li><a href=\\"#/\\">Privacy</a></li>\\n\\t\\t<li><a href=\\"#/\\">Safety Tips</a></li>\\n\\t\\t<li><a href=\\"#/\\">Contact MySpace</a></li>\\n\\t\\t<li><a href=\\"#/\\">Report Inappropriate Content</a></li>\\n\\t\\t<li><a href=\\"#/\\">Promote!</a></li>\\n\\t\\t<li><a href=\\"#/\\">Advertise</a></li>\\n\\t\\t<li><a href=\\"#/\\">MySpace International</a></li>\\n\\t</ul>\\n</footer>\\n\\n<style>\\n\\t* {\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\th1,\\n\\th2,\\n\\tp {\\n\\t\\tmargin-top: 0;\\n\\t}\\n\\ta {\\n\\t\\ttext-decoration: none;\\n\\t}\\n\\ta:hover {\\n\\t\\ttext-decoration: underline;\\n\\t}\\n\\t.is-online {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 80px;\\n\\t\\theight: 20px;\\n\\t\\tbackground-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/396624/onlinenow.gif');\\n\\t\\tbackground-size: contain;\\n\\t\\tbackground-position: center left;\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tmargin: 5px 0;\\n\\t}\\n\\tul {\\n\\t\\tlist-style-type: none;\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t}\\n\\t.inline-list li {\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t.skill .name {\\n\\t\\tdisplay: block;\\n\\t\\tmargin-top: 5px;\\n\\t\\ttext-decoration: none;\\n\\t}\\n\\n\\t.skill .photo {\\n\\t\\twidth: 54px;\\n\\t\\theight: auto;\\n\\t}\\n\\n\\t.inline-list li:after {\\n\\t\\tcontent: '|';\\n\\t\\tmargin: 0 6px 0 10px;\\n\\t}\\n\\t.inline-list li:last-child:after {\\n\\t\\tcontent: '';\\n\\t}\\n\\n\\t.main-body {\\n\\t\\tmax-width: 1000px;\\n\\t\\tbackground-color: #fff;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding-bottom: 10px;\\n\\t}\\n\\tnav {\\n\\t\\tcolor: #fff;\\n\\t\\tbackground-color: #0047ab;\\n\\t}\\n\\tnav a {\\n\\t\\tcolor: #fff;\\n\\t}\\n\\t.nav-top {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 10px 10px;\\n\\t\\tfont-size: 14px;\\n\\t}\\n\\t.nav-top a {\\n\\t\\tmargin: 0 5px;\\n\\t}\\n\\t.nav-top label ~ label {\\n\\t\\tmargin-left: 10px;\\n\\t}\\n\\t.nav-middle {\\n\\t\\twidth: 100%;\\n\\t\\theight: 150px;\\n\\t}\\n\\t.nav-bottom {\\n\\t\\tbackground-color: #73aad6;\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 5px 0;\\n\\t}\\n\\t.nav-bottom ul li:after {\\n\\t\\tcolor: #000;\\n\\t}\\n\\t.nav-bottom a {\\n\\t\\tfont-size: 12px;\\n\\t\\ttext-transform: capitalize;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\t.profile-body {\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: inline-block;\\n\\t\\tfont-size: 0;\\n\\t}\\n\\t.col {\\n\\t\\tfont-size: 16px;\\n\\t\\tdisplay: inline-block;\\n\\t\\tvertical-align: top;\\n\\t\\twidth: 40%;\\n\\t\\tpadding: 10px 20px;\\n\\t}\\n\\t.col + .col {\\n\\t\\twidth: 60%;\\n\\t}\\n\\t.identity {\\n\\t\\twidth: 100%;\\n\\t\\tfont-size: 0;\\n\\t}\\n\\t.avatar,\\n\\t.details {\\n\\t\\tdisplay: inline-block;\\n\\t\\tvertical-align: top;\\n\\t\\tfont-size: 16px;\\n\\t}\\n\\t.avatar {\\n\\t\\twidth: 50%;\\n\\t\\ttext-align: center;\\n\\t\\tfont-size: 12px;\\n\\t}\\n\\t.avatar img {\\n\\t\\tmax-width: 100%;\\n\\t}\\n\\t.details {\\n\\t\\twidth: 50%;\\n\\t\\tpadding-left: 20px;\\n\\t\\tfont-size: 14px;\\n\\t}\\n\\t.details ul li {\\n\\t\\tline-height: 1.25;\\n\\t}\\n\\t.details ul li:last-child {\\n\\t\\tmargin-top: 30px;\\n\\t}\\n\\n\\t.radio--input {\\n\\t\\tappearance: none;\\n\\t\\tpadding: 4px;\\n\\t\\tbackground-color: white;\\n\\t\\tborder-radius: 50%;\\n\\t\\tborder: 2px solid grey;\\n\\t}\\n\\n\\t.radio--input:checked {\\n\\t\\tborder-color: magenta;\\n\\t}\\n\\n\\t.search input {\\n\\t\\tbackground-color: white;\\n\\t}\\n\\n\\t.search button {\\n\\t\\tbackground-color: white;\\n\\t\\tcolor: black;\\n\\t}\\n\\t.small-panel {\\n\\t\\tdisplay: inline-block;\\n\\t\\twidth: 100%;\\n\\t\\tmargin-top: 20px;\\n\\t\\tborder: 2px solid #73aad6;\\n\\t}\\n\\t.panel-header {\\n\\t\\tbackground-color: #73aad6;\\n\\t\\tcolor: #fff;\\n\\t\\tfont-weight: 700;\\n\\t\\tpadding: 1px 15px;\\n\\t}\\n\\t.row {\\n\\t\\tdisplay: inline-block;\\n\\t\\twidth: 100%;\\n\\t\\tpadding: 5px 0 0 5px;\\n\\t\\tfont-size: 0;\\n\\t}\\n\\t.contact-panel .row {\\n\\t\\theight: 29px;\\n\\t\\tpadding: 0;\\n\\t}\\n\\t.btn {\\n\\t\\tcursor: pointer;\\n\\t\\tdisplay: inline-block;\\n\\t\\theight: 100%;\\n\\t\\twidth: 50%;\\n\\t\\tfont-size: 14px;\\n\\t\\tbackground-size: contain;\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tbackground-position: center;\\n\\t}\\n\\t.act-1 {\\n\\t\\tbackground-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/sendMailIcon.gif');\\n\\t}\\n\\t.act-2 {\\n\\t\\tbackground-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/forwardMailIcon.gif');\\n\\t}\\n\\t.act-3 {\\n\\t\\tbackground-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/addFriendIcon.gif');\\n\\t}\\n\\t.act-4 {\\n\\t\\tbackground-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/addFavoritesIcon.gif');\\n\\t}\\n\\t.act-5 {\\n\\t\\tbackground-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/messagefriend.gif');\\n\\t}\\n\\t.act-6 {\\n\\t\\tbackground-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/blockuser.gif');\\n\\t}\\n\\t.act-7 {\\n\\t\\tbackground-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/icon_add_to_group.gif');\\n\\t}\\n\\t.act-8 {\\n\\t\\tbackground-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/icon_rank_user4.gif');\\n\\t}\\n\\n\\t.m-details-panel {\\n\\t\\tpadding-bottom: 5px;\\n\\t}\\n\\t.m-details-panel .row {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: stretch;\\n\\t}\\n\\t.m-details-panel .sm-col {\\n\\t\\tdisplay: inline-block;\\n\\t\\twidth: 40%;\\n\\t\\tfont-size: 14px;\\n\\t\\tpadding: 0 5px 0 0;\\n\\t\\talign-self: stretch;\\n\\t}\\n\\t.m-details-panel .sm-col:first-child p {\\n\\t\\tfont-weight: 700;\\n\\t\\tcolor: #0047ab;\\n\\t\\ttext-transform: capitalize;\\n\\t}\\n\\t.m-details-panel .sm-col:last-child {\\n\\t\\twidth: 60%;\\n\\t}\\n\\t.m-details-panel .sm-col p {\\n\\t\\tbackground-color: #b5d2fa;\\n\\t\\tpadding: 5px;\\n\\t\\tmargin: 0;\\n\\t\\theight: 100%;\\n\\t}\\n\\t.m-details-panel .sm-col:last-child p {\\n\\t\\tbackground-color: #d5e7fb;\\n\\t}\\n\\n\\t.profile-section {\\n\\t\\twidth: 100%;\\n\\t}\\n\\t.section-header {\\n\\t\\tbackground-color: #ffd6a8;\\n\\t\\tcolor: #ff7b00;\\n\\t\\tfont-weight: 700;\\n\\t\\tpadding: 2px 20px;\\n\\t\\tmargin-bottom: 10px;\\n\\t}\\n\\t.section-subheader {\\n\\t\\tfont-weight: 700;\\n\\t\\tcolor: #ff7b00;\\n\\t\\tmargin-left: 10px;\\n\\t\\tmargin-bottom: 5px;\\n\\t}\\n\\t.section-subheader + p {\\n\\t\\tmargin-left: 10px;\\n\\t}\\n\\t.profile-section b {\\n\\t\\tfont-weight: normal;\\n\\t\\tcolor: #dd1900;\\n\\t}\\n\\n\\t.user-content .top-banner {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmin-height: 130px;\\n\\t\\twidth: 100%;\\n\\t\\tborder: 3px solid #000;\\n\\t\\tmargin-bottom: 20px;\\n\\t}\\n\\t.user-content .top-banner h1 {\\n\\t\\tmargin: 0;\\n\\t\\tfont-size: 23px;\\n\\t}\\n\\t.skill-count {\\n\\t\\tfont-weight: 700;\\n\\t}\\n\\t.skill-grid {\\n\\t\\twidth: 100%;\\n\\t}\\n\\t.skill-grid .row {\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tgap: 10px;\\n\\t}\\n\\t.skill-grid .skill {\\n\\t\\tpadding: 20px;\\n\\t\\twidth: 100%;\\n\\t\\tcolor: black;\\n\\t\\talign-items: center;\\n\\t\\ttext-align: center;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\t.skill-grid .skill:hover a {\\n\\t\\ttext-decoration: underline;\\n\\t}\\n\\n\\t.skill-grid__a {\\n\\t\\twidth: 30%;\\n\\t\\tdisplay: flex;\\n\\t\\tcolor: black;\\n\\t\\tfont-size: 12px;\\n\\t\\tmargin-bottom: 10px;\\n\\t}\\n\\t.skill-grid img {\\n\\t\\twidth: 100%;\\n\\t\\tvertical-align: top;\\n\\t}\\n\\n\\t.view-all-f {\\n\\t\\tdisplay: inline-block;\\n\\t\\twidth: 100%;\\n\\t\\ttext-align: right;\\n\\t\\tcolor: #dd1900;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 10px 0;\\n\\t\\tfont-size: 14px;\\n\\t\\tbackground-color: transparent;\\n\\t\\tborder: none;\\n\\t}\\n\\n\\t.comment-details {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tmargin-bottom: 10px;\\n\\t}\\n\\t.comment-details .comments-to-display {\\n\\t\\tfont-weight: 700;\\n\\t}\\n\\t.comment-stream {\\n\\t\\twidth: 100%;\\n\\t}\\n\\t.comment {\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tbackground-color: #fbeacc;\\n\\t}\\n\\n\\t.comment .dp-group {\\n\\t\\tmax-width: 120px;\\n\\t\\toverflow: hidden;\\n\\t}\\n\\t.comment .dp-group,\\n\\t.comment .comment-cont {\\n\\t\\tpadding: 15px;\\n\\t}\\n\\t.comment .dp-group {\\n\\t\\tbackground-color: #ffd6a8;\\n\\t\\ttext-align: center;\\n\\t}\\n\\t.comment .dp-group a {\\n\\t\\tfont-weight: 200;\\n\\t}\\n\\t.comment .dp-group img {\\n\\t\\twidth: 100%;\\n\\t\\tmax-height: 150px;\\n\\t\\tmargin: 10px 0;\\n\\t}\\n\\n\\t.comment .comment-cont {\\n\\t\\tflex-grow: 2;\\n\\t}\\n\\t.comment .comment-cont .post-info {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tmargin-bottom: 10px;\\n\\t\\tfont-size: 12px;\\n\\t}\\n\\t.comment .comment-cont .post-info .date {\\n\\t\\tfont-weight: 700;\\n\\t}\\n\\t.comment .comment-cont .post-info .c-actions {\\n\\t\\ttext-align: right;\\n\\t}\\n\\t.comment .message-body {\\n\\t\\tfont-size: 12px;\\n\\t\\tline-height: 16px;\\n\\t}\\n\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\tmargin: 20px 0;\\n\\t}\\n\\tfooter ul li a {\\n\\t\\tcolor: #0047ab;\\n\\t\\ttext-decoration: underline;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $time, $$unsubscribe_time;
  $$unsubscribe_time = subscribe(time, (value) => $time = value);
  const formatter = new Intl.DateTimeFormat(
    "en",
    {
      month: "short",
      day: "numeric",
      year: "numeric"
    }
  );
  let skills = [
    { name: "Java", icon: javaLogo },
    { name: "Git", icon: gitLogo },
    { name: "Python", icon: pythonLogo },
    { name: "JavaScript", icon: jsLogo },
    { name: "React", icon: reactLogo },
    { name: "CSS", icon: cssLogo },
    { name: "HTML", icon: htmlLogo },
    { name: "MySQL", icon: mySQLLogo },
    { name: "Svelte", icon: svelteLogo },
    { name: "MongoDB", icon: mongodbLogo },
    { name: "SQLite", icon: sqlliteLogo },
    { name: "", icon: empty }
  ];
  $$result.css.add(css$9);
  $$unsubscribe_time();
  return `<div class="main-body svelte-1gi8iev"><nav class="svelte-1gi8iev" data-svelte-h="svelte-glf59v"><div class="nav-top svelte-1gi8iev"><div class="links svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">MySpace.com</a> | <a href="#/" class="svelte-1gi8iev">Home</a></div> <div class="search svelte-1gi8iev"><label for="forGeneral" class="svelte-1gi8iev">The Web</label> <input type="radio" name="search" id="forGeneral" class="radio--input svelte-1gi8iev"> <label for="forMyspace" class="svelte-1gi8iev">MySpace</label> <input type="radio" name="search" id="forMyspace" checked class="radio--input svelte-1gi8iev"> <input type="text" name="" id="" class="svelte-1gi8iev"> <button class="svelte-1gi8iev">search</button></div>  <div class="links svelte-1gi8iev"><a href="#" class="svelte-1gi8iev">Help</a> | <a href="#" class="svelte-1gi8iev">SignUp</a></div></div> <div class="nav-middle svelte-1gi8iev"></div> <div class="nav-bottom svelte-1gi8iev"><ul class="inline-list svelte-1gi8iev"><li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">home</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">browse</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">search</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">invite</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">film</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">mail</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">blog</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">favorites</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">forum</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">group</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">events</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">video</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">music</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">comedy</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">classifieds</a></li></ul></div></nav> <section class="profile-body svelte-1gi8iev"><div class="col user-info svelte-1gi8iev"><h2 class="name svelte-1gi8iev" data-svelte-h="svelte-onthb6">Janay King</h2> <div class="identity svelte-1gi8iev"><div class="avatar svelte-1gi8iev" data-svelte-h="svelte-smk9e4"><img src="https://media1.tenor.com/m/AlUkiGkR2j8AAAAC/new-game-ahagon-umiko-programming.gif" alt="avatar" class="svelte-1gi8iev"> <div class="media-view svelte-1gi8iev">     
						View My: <a href="#/" class="svelte-1gi8iev">Pics</a> | <a href="#/" class="svelte-1gi8iev">Videos</a></div></div> <div class="details svelte-1gi8iev"><ul class="svelte-1gi8iev"><li class="svelte-1gi8iev" data-svelte-h="svelte-1qo8kz0">&quot;Code. Create. Conquer.&quot;</li> <li class="svelte-1gi8iev" data-svelte-h="svelte-16vfa06"> </li> <li class="svelte-1gi8iev" data-svelte-h="svelte-13u1meo">Female</li> <li class="svelte-1gi8iev" data-svelte-h="svelte-9x3ypn"><span class="age svelte-1gi8iev">32</span> years old</li> <li class="svelte-1gi8iev" data-svelte-h="svelte-j4vppx">Texas</li> <li class="svelte-1gi8iev" data-svelte-h="svelte-1hy0fu7">United States</li> <li class="is-online svelte-1gi8iev"></li> <li class="svelte-1gi8iev">Last Login: <span class="date svelte-1gi8iev">${escape(formatter.format($time))}</span></li></ul></div></div> <div class="small-panel contact-panel svelte-1gi8iev" data-svelte-h="svelte-ggp9oi"><div class="panel-header svelte-1gi8iev">Contacting Janay King</div> <div class="buttons-container svelte-1gi8iev"><div class="row svelte-1gi8iev">   <a intent="reply" class="btn act-1 svelte-1gi8iev"></a>  <a href="#/" class="btn act-2 svelte-1gi8iev"></a></div>  <div class="row svelte-1gi8iev">   <a intent="add" class="btn act-3 svelte-1gi8iev"></a>  <a href="#" class="btn act-4 svelte-1gi8iev"></a></div> <div class="row svelte-1gi8iev">    <a href="#/" class="btn act-5 svelte-1gi8iev"></a>  <a href="#/" class="btn act-6 svelte-1gi8iev"></a></div>   <div class="row svelte-1gi8iev"><a href="#/" class="btn act-7 svelte-1gi8iev"></a> <a href="#/" class="btn act-8 svelte-1gi8iev"></a></div></div></div> <div class="small-panel m-details-panel svelte-1gi8iev" data-svelte-h="svelte-1ca1ely"><div class="panel-header svelte-1gi8iev">Janay King&#39;s Interests</div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">General:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Internet, Blockchain, Machine Learning, Quantum Computing</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Music:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Game instrumentals and EDM</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Movies:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Fantasy films, Legend(1985) and scifi flicks</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Television:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Delicious in Dungeon, Bridgerton</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Goals:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">To become a leading expert in AI and Blockchain, contribute to open-source projects,
							and develop innovative tech solutions.</p></div></div></div> <div class="small-panel m-details-panel svelte-1gi8iev" data-svelte-h="svelte-1ms4nuo"><div class="panel-header svelte-1gi8iev">Janay King&#39;s Details</div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Status:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Student</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Here for:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">skills, Collaborators, Work opportunities</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Hobbies:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Coding, Reading Tech Blogs</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Hometown:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Ansbach, Germany</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Certifications:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Python Essentials I, Python Essentials II</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Ethnicity:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Mixed</p></div></div> <div class="row svelte-1gi8iev"><div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Occupation:</p></div> <div class="sm-col svelte-1gi8iev"><p class="svelte-1gi8iev">Computer Science Student</p></div></div></div></div> <div class="col user-content svelte-1gi8iev"><div class="top-banner svelte-1gi8iev" data-svelte-h="svelte-o5mzmq"><h1 class="svelte-1gi8iev">Janay King is in your extended network</h1></div> <div class="profile-section svelte-1gi8iev" id="blog-container"></div> <div class="profile-section svelte-1gi8iev" id="blurbs-container" data-svelte-h="svelte-l5bgrg"><div class="section-header svelte-1gi8iev">Janay King&#39;s blurbs</div> <div class="section-subheader svelte-1gi8iev">About me:</div> <p class="svelte-1gi8iev">Bet you didn’t know... <br class="svelte-1gi8iev"> <br class="svelte-1gi8iev"> The original MySpace was heavily built using HTML tables,
					making the site clunky by today&#39;s standards. Despite this, it brought people together and inspired
					many Y2K kids to learn coding by customizing their profiles with HTML and CSS.</p> <div class="section-subheader svelte-1gi8iev">Who I&#39;d Like to meet:</div> <p class="svelte-1gi8iev">Fellow web devs, coders, and meme masters.</p></div> <div class="profile-section svelte-1gi8iev" id="skill-container"><div class="section-header svelte-1gi8iev" data-svelte-h="svelte-xh4ksr">Janay King&#39;s skill space</div> <div class="skill-count svelte-1gi8iev">Janay King has <b class="svelte-1gi8iev">${escape(skills.length)}</b> skills.</div> <div class="skill-grid svelte-1gi8iev"><div class="row svelte-1gi8iev">${each(skills.slice(0, 4), (skill) => {
    return `<div class="skill svelte-1gi8iev"><a href="#/" class="skill-grid__a name svelte-1gi8iev" target="_blank">${escape(skill.name)}</a> <img${add_attribute("src", skill.icon, 0)}${add_attribute("alt", skill.name, 0)} class="photo svelte-1gi8iev"> </div>`;
  })}</div> <div class="row svelte-1gi8iev">${each(skills.slice(4, 8), (skill) => {
    return `<div class="skill svelte-1gi8iev"><a href="#/" class="skill-grid__a svelte-1gi8iev" target="_blank">${escape(skill.name)}</a> <img${add_attribute("src", skill.icon, 0)}${add_attribute("alt", skill.name, 0)} class="photo svelte-1gi8iev"> </div>`;
  })}</div> ${``}</div> ${skills.length > 9 ? `<button class="view-all-f svelte-1gi8iev">${escape("View All of Janay King's skills")}</button>` : ``}</div> <div class="profile-section svelte-1gi8iev" id="comments-container" data-svelte-h="svelte-qvoxat"><div class="section-header svelte-1gi8iev">Comments</div> <div class="comment-details svelte-1gi8iev"><div class="comments-to-display svelte-1gi8iev">Displaying <b class="svelte-1gi8iev">1</b> of <b class="svelte-1gi8iev"></b> comments</div> <div class="comment-actions svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">View All</a> | <a href="#/" class="svelte-1gi8iev">Add Comment</a></div></div> <div class="comment-stream svelte-1gi8iev"><div class="comment user03324 svelte-1gi8iev"><div class="dp-group svelte-1gi8iev"><a href="#/" class="prof-name svelte-1gi8iev">Elon M²</a>  <img src="https://pics.craiyon.com/2023-06-28/e97ccd283e0740fab888df91e834520e.webp" alt="profile photo" class="svelte-1gi8iev"> <p class="svelte-1gi8iev"></p> <span class="user-status svelte-1gi8iev"></span></div> <div class="comment-cont svelte-1gi8iev"><div class="post-info svelte-1gi8iev"><span class="date svelte-1gi8iev">Jan 1, 2024</span> <div class="c-actions svelte-1gi8iev"><ul class="inline-list svelte-1gi8iev"><li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">Reply</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">Report</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">View All</a></li></ul></div></div> <div class="message-body svelte-1gi8iev"><img src="https://xpportfoliowebsite.s3.amazonaws.com/Images/iNSk.gif" style="width: 100%;" alt="insk" class="svelte-1gi8iev"></div></div></div></div></div></div></section></div> <footer class="svelte-1gi8iev" data-svelte-h="svelte-tzehov"><ul class="inline-list svelte-1gi8iev"><li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">About</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">FAQ</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">Terms</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">Privacy</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">Safety Tips</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">Contact MySpace</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">Report Inappropriate Content</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">Promote!</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">Advertise</a></li> <li class="svelte-1gi8iev"><a href="#/" class="svelte-1gi8iev">MySpace International</a></li></ul> </footer>`;
});
const Y2Kaesthetic = "/_app/immutable/assets/6.pQTD48xD.png";
const css$8 = {
  code: ".bubble.svelte-srdjae{position:absolute;bottom:-30px;border-radius:50%;animation:svelte-srdjae-float 10s infinite ease-in-out;background:radial-gradient(\n      circle at 75% 30%,\n      white 5px,\n      aqua 8%,\n      darkblue 60%,\n      aqua 100%\n    );box-shadow:inset 0 0 20px #fff,\n      inset 10px 0 46px #eaf5fc,\n      inset 88px 0px 60px #c2d8fe,\n      inset -20px -60px 100px #fde9ea,\n      inset 0 50px 140px #fde9ea,\n      0 0 100px #fff}.bubble.svelte-srdjae::after{content:'';position:absolute;top:20%;left:20%;width:30%;height:30%;border-radius:50%;background-color:rgba(255, 255, 255, 0.8);filter:blur(2px)}@keyframes svelte-srdjae-float{0%{transform:translate(0, 0);opacity:0}10%{opacity:1}50%{transform:translate(calc(-50vw + 50% + 1vw), -50vh)}100%{transform:translate(calc(50vw - 50% - 1vw), -100vh);opacity:0}}",
  map: '{"version":3,"file":"Bubble.svelte","sources":["Bubble.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \'svelte\';\\n\\n  export let size = \'50px\';\\n  export const color = \'rgba(155, 158, 217, 0.5)\';\\n\\n  let bubble;\\n\\n  onMount(() => {\\n    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;\\n    bubble.style.left = `${Math.random() * 100}vw`;\\n    bubble.style.animationDelay = `${Math.random() * 10}s`;\\n  });\\n<\/script>\\n\\n<style>\\n   .bubble {\\n    position: absolute;\\n    bottom: -30px;\\n    border-radius: 50%;\\n    animation: float 10s infinite ease-in-out;\\n    background: radial-gradient(\\n      circle at 75% 30%,\\n      white 5px,\\n      aqua 8%,\\n      darkblue 60%,\\n      aqua 100%\\n    );\\n    box-shadow:\\n      inset 0 0 20px #fff,\\n      inset 10px 0 46px #eaf5fc,\\n      inset 88px 0px 60px #c2d8fe,\\n      inset -20px -60px 100px #fde9ea,\\n      inset 0 50px 140px #fde9ea,\\n      0 0 100px #fff;\\n  }\\n\\n  .bubble::after {\\n    content: \'\';\\n    position: absolute;\\n    top: 20%;\\n    left: 20%;\\n    width: 30%;\\n    height: 30%;\\n    border-radius: 50%;\\n    background-color: rgba(255, 255, 255, 0.8);\\n    filter: blur(2px);\\n  }\\n\\n  @keyframes float {\\n    0% {\\n      transform: translate(0, 0);\\n      opacity: 0;\\n    }\\n    10% {\\n      opacity: 1;\\n    }\\n    50% {\\n      transform: translate(calc(-50vw + 50% + 1vw), -50vh);\\n    }\\n    100% {\\n      transform: translate(calc(50vw - 50% - 1vw), -100vh);\\n      opacity: 0;\\n    }\\n  }\\n</style>\\n\\n<div class=\\"bubble\\" bind:this={bubble} style=\\"width: {size}; height: {size};\\"></div>\\n"],"names":[],"mappings":"AAgBG,qBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,mBAAK,CAAC,GAAG,CAAC,QAAQ,CAAC,WAAW,CACzC,UAAU,CAAE;AAChB,MAAM,MAAM,CAAC,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC;AACxB,MAAM,KAAK,CAAC,GAAG,CAAC;AAChB,MAAM,IAAI,CAAC,EAAE,CAAC;AACd,MAAM,QAAQ,CAAC,GAAG,CAAC;AACnB,MAAM,IAAI,CAAC,IAAI;AACf,KAAK,CACD,UAAU,CACR,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC;AAC1B,MAAM,KAAK,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,OAAO,CAAC;AAChC,MAAM,KAAK,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC;AAClC,MAAM,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,OAAO,CAAC;AACtC,MAAM,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,OAAO,CAAC;AACjC,MAAM,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,IACd,CAEA,qBAAO,OAAQ,CACb,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,MAAM,CAAE,KAAK,GAAG,CAClB,CAEA,WAAW,mBAAM,CACf,EAAG,CACD,SAAS,CAAE,UAAU,CAAC,CAAC,CAAC,CAAC,CAAC,CAC1B,OAAO,CAAE,CACX,CACA,GAAI,CACF,OAAO,CAAE,CACX,CACA,GAAI,CACF,SAAS,CAAE,UAAU,KAAK,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CACrD,CACA,IAAK,CACH,SAAS,CAAE,UAAU,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CACpD,OAAO,CAAE,CACX,CACF"}'
};
const Bubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "50px" } = $$props;
  const color = "rgba(155, 158, 217, 0.5)";
  let bubble;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  $$result.css.add(css$8);
  return `<div class="bubble svelte-srdjae" style="${"width: " + escape(size, true) + "; height: " + escape(size, true) + ";"}"${add_attribute("this", bubble, 0)}></div>`;
});
const glassBuble = "/_app/immutable/assets/1.CnGVfqEm.png";
const glassCyclone = "/_app/immutable/assets/2.XZl4dCTd.png";
const starLink = "data:image/gif;base64,R0lGODlhGQAZAOYAAAAAAP///2Bja19ial5haYmNmGxveGRnb2NmboyQm3F0fW9ye2lsdGZpcXt/iXp+iHh8hoGFj4CEjn+DjX6CjIaLloyRnImOmZCVoI+Un3h8hXN3gFxfZlteZXl9hmBjal9iaV5haH+DjGJlbGRocISJk4OIkmpudmltdWhsdGdrc4mOmIiNl4aLlYWKlG1xeWxweIyRm3N3f3F1fW9ze3V5gVtfZnd8hWFlbF5iaYCFjn+EjX6DjHyBimVpcGRob2NnbmJmbf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAEIALAAAAAAZABkAAAfsgEKCg4SFhoeIQgCJjIOLgo+NiROSiYsSEzyKlYSPEg+am4wApKSCKhIyPAeQpZGMKBIvPEGNizAYJhcVJTgwEig8Ix0UNhMSEQ6igxguFy0lHzQSKTw4ORQdxxGGjywr0CAbEgzCP9nHkIWLCeAlBDcSBrQv6BLLhu4gPRIzPEAQ0I0SBG1ABAkaePigQIGDum6C3Ak4mEkFBR4hdjx0JMiCOxwUeZy4+GGHjo2DMniEhoCiiHq0TCpYJ8RFhhgFoJFwqeBiA5MLTOA75LJGJVePQnpoVcqWIEyhXh0VAnUoJ0GUrkJEqZXroUAAOw==";
const css$7 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Cute+Font&display=swap');@font-face{font-family:'Planet Kosmos';src:url('$lib/assets/fonts/PLANK.ttf') format('truetype')}@font-face{font-family:'FontoVision IV';src:url('$lib/assets/fonts/Fontout.ttf') format('truetype')}.wrapper.svelte-b1tmdj.svelte-b1tmdj{background-color:#365ab4;background:linear-gradient(to top, #abc3ef, #365ab4);box-shadow:inset 0px 0px 150px rgba(0, 0, 0, 0.65);font-family:'Cute Font', cursive;color:#000;margin:0;padding:0;position:relative;min-height:100vh;overflow:hidden;display:flex;overflow:hidden}.container.svelte-b1tmdj.svelte-b1tmdj{width:100%;margin:0 auto;padding:0px;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.title.svelte-b1tmdj.svelte-b1tmdj{width:293px;text-align:center;position:absolute;top:54%;left:50%;transform:translate(-50%, -50%);text-align:center;z-index:1}.header.svelte-b1tmdj img.svelte-b1tmdj{display:block;width:400px}h1.svelte-b1tmdj.svelte-b1tmdj{font-family:'Planet Kosmos', sans-serif;font-size:3em;color:#fff;z-index:3;background-image:url($lib/assets/MaxthonImages/stainless-steel-texture-388.png);background-repeat:repeat;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}h4.svelte-b1tmdj.svelte-b1tmdj{font-family:'Fontovision IV', sans-serif;font-size:3em;color:#fff;z-index:3;background-image:url($lib/assets/MaxthonImages/stainless-steel-texture-388.png);background-repeat:repeat;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-align:center;animation-name:svelte-b1tmdj-spin, svelte-b1tmdj-depth;animation-timing-function:linear;animation-iteration-count:infinite;animation-duration:3s;transform-style:preserve-3d;position:relative;display:inline-block}h4.svelte-b1tmdj.svelte-b1tmdj::before,h4.svelte-b1tmdj.svelte-b1tmdj::after{content:'';display:block;position:absolute;width:100%;height:100%;top:0;transform:rotateY(0.5deg);transform-origin:0 50%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}h4.svelte-b1tmdj.svelte-b1tmdj::after{transform:rotateY(-0.5deg);transform-origin:100% 50%}@keyframes svelte-b1tmdj-spin{from{transform:rotateY(0deg)}to{transform:rotateY(-360deg)}}@keyframes svelte-b1tmdj-depth{0%{text-shadow:0 0 5px #878686,\n				0 0 10px #545454,\n				0 0 15px #f5f5f5}25%{text-shadow:1px 0 5px #878686,\n				2px 0 10px #545454,\n				3px 0 15px #f5f5f5,\n				4px 0 20px #272626}50%{text-shadow:0 0 5px #878686,\n				0 0 10px #545454,\n				0 0 15px #f5f5f5}75%{text-shadow:-1px 0 5px #878686,\n				-2px 0 10px #545454,\n				-3px 0 15px #f5f5f5,\n				-4px 0 20px #272626}100%{text-shadow:0 0 5px #878686,\n				0 0 10px #545454,\n				0 0 15px #f5f5f5}}.header.svelte-b1tmdj.svelte-b1tmdj{color:#fff;display:inline-block;position:relative}.footer.svelte-b1tmdj.svelte-b1tmdj{background-color:transparent;color:#fff;text-align:center;padding:20px;width:100%}.menu.svelte-b1tmdj.svelte-b1tmdj{display:flex;justify-content:space-around;padding:10px;margin-bottom:20px}.glassbuble.svelte-b1tmdj.svelte-b1tmdj{position:absolute;top:5%;left:15%;transform:translate(-50%, -50%);z-index:10}.glasscyclone.svelte-b1tmdj.svelte-b1tmdj{position:absolute;bottom:-23%;right:-23%;z-index:10}.sidebar.svelte-b1tmdj.svelte-b1tmdj{width:150px;background-color:#c3cbdc;background-image:linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%);border-radius:5px;padding:10px;float:left;margin-right:20px}.content.svelte-b1tmdj.svelte-b1tmdj{width:calc(100% - 240px);float:left}.project-item.svelte-b1tmdj.svelte-b1tmdj{background-color:#c3cbdc;background-image:linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%);border-radius:5px;margin-bottom:20px;padding:10px}.project-item.svelte-b1tmdj h2.svelte-b1tmdj{font-size:1.8em}.project-item.svelte-b1tmdj p.svelte-b1tmdj{font-size:1.2em}.categories.svelte-b1tmdj.svelte-b1tmdj{list-style-type:none}.clearfix.svelte-b1tmdj.svelte-b1tmdj::after{content:'';clear:both;display:table}.grid-wrapper.svelte-b1tmdj.svelte-b1tmdj{position:absolute;width:100%;height:100%;left:0;bottom:0px;perspective:200px;z-index:0;overflow:hidden}.blog-container.svelte-b1tmdj.svelte-b1tmdj{background-image:url($lib/assets/MaxthonImages/MELT_FRAME.png);background-repeat:no-repeat;background-size:contain;margin:-60px auto 0;width:100%;max-width:800px;height:600px;padding:0px 100px 0px 100px;position:relative;z-index:2;overflow:hidden;display:flex;justify-content:center;align-items:center}.blog.svelte-b1tmdj.svelte-b1tmdj{width:600px;height:330px;overflow-y:auto;padding:0px;box-sizing:border-box;display:flex;flex-direction:column;padding-bottom:20px}.glass-overlay.svelte-b1tmdj.svelte-b1tmdj{position:absolute;top:17%;left:17%;width:630px;height:350px;background:rgba(255, 255, 255, 0.2);backdrop-filter:blur(5px);border-radius:45px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);pointer-events:none;padding:7px 12px 8px 12px;z-index:1;text-align:center}.loader.svelte-b1tmdj.svelte-b1tmdj{size:10rem;margin-top:70px}.blink.svelte-b1tmdj.svelte-b1tmdj{animation:svelte-b1tmdj-blink-animation 1s steps(5, start) infinite;-webkit-animation:svelte-b1tmdj-blink-animation 1s steps(5, start) infinite}@keyframes svelte-b1tmdj-blink-animation{to{visibility:hidden}}.grid.svelte-b1tmdj.svelte-b1tmdj{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin-top:-50px;transform:rotateX(45deg)}.floating.svelte-b1tmdj.svelte-b1tmdj{animation-name:svelte-b1tmdj-floating;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out;margin-left:30px;margin-top:5px}@keyframes svelte-b1tmdj-floating{0%{transform:translate(0, 0px)}50%{transform:translate(0, 15px)}100%{transform:translate(0, -0px)}}.line.svelte-b1tmdj.svelte-b1tmdj{position:absolute;background:rgba(155, 158, 217, 0.35);backface-visibility:hidden}.vertical.svelte-b1tmdj .line.svelte-b1tmdj{top:0;left:0;bottom:0;width:5px;background:linear-gradient(\n			to bottom,\n			rgba(255, 255, 255, 0),\n			rgba(155, 158, 217, 0.35)\n		)}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(1){left:10%}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(2){left:20%}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(3){left:30%}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(4){left:40%}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(5){left:50%}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(6){left:60%}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(7){left:70%}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(8){left:80%}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(9){left:90%}.vertical.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(10){left:100%;margin-left:-1px}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj{top:0;left:0;right:0;height:5px;z-index:2}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(1){top:10%;opacity:0.2}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(2){top:20%;opacity:0.3}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(3){top:30%;opacity:0.4}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(4){top:40%;opacity:0.5}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(5){top:50%;opacity:0.6}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(6){top:60%;opacity:0.7}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(7){top:70%;opacity:0.8}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(8){top:80%;opacity:0.9}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(9){top:90%;opacity:0.95}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(10){top:100%;margin-top:-1px;opacity:1}.horizontal.svelte-b1tmdj .line.svelte-b1tmdj:nth-child(11){opacity:0.05}.dot.svelte-b1tmdj.svelte-b1tmdj{position:absolute;background:#57c1e8;width:5px;height:5px;top:100%;border-radius:5px;box-shadow:0 0 3px #fff;backface-visibility:hidden}.dot.svelte-b1tmdj.svelte-b1tmdj:nth-child(1){left:10%;animation:svelte-b1tmdj-moveDot 5s infinite}.dot.svelte-b1tmdj.svelte-b1tmdj:nth-child(2){left:20%;animation:svelte-b1tmdj-moveDot 20s infinite}.dot.svelte-b1tmdj.svelte-b1tmdj:nth-child(3){left:30%;animation:svelte-b1tmdj-moveDot 15s infinite}.dot.svelte-b1tmdj.svelte-b1tmdj:nth-child(4){left:50%;animation:svelte-b1tmdj-moveDot 30s infinite}.dot.svelte-b1tmdj.svelte-b1tmdj:nth-child(5){left:60%;animation:svelte-b1tmdj-moveDot 12s infinite}.dot.svelte-b1tmdj.svelte-b1tmdj:nth-child(6){left:80%;animation:svelte-b1tmdj-moveDot 6s infinite}.dot.svelte-b1tmdj.svelte-b1tmdj:nth-child(7){left:90%;animation:svelte-b1tmdj-moveDot 8s infinite}@keyframes svelte-b1tmdj-moveDot{0%{top:100%;opacity:1}100%{top:0%;opacity:0}}",
  map: `{"version":3,"file":"Projects.svelte","sources":["Projects.svelte"],"sourcesContent":["<script>\\n\\timport Y2Kaesthetic from '$lib/assets/MaxthonImages/6.png';\\n\\timport Bubble from './components/Bubble.svelte';\\n\\timport glassBuble from '$lib/assets/MaxthonImages/1.png';\\n\\timport glassCyclone from '$lib/assets/MaxthonImages/2.png';\\n\\timport starLink from '$lib/assets/MaxthonImages/star.gif';\\n\\n\\tconst bubbles = Array.from({ length: 20 });\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n\\t<div class=\\"grid-wrapper\\">\\n\\t\\t<div class=\\"grid\\">\\n\\t\\t\\t<div class=\\"vertical\\">\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"dots\\">\\n\\t\\t\\t\\t<div class=\\"dot\\"></div>\\n\\t\\t\\t\\t<div class=\\"dot\\"></div>\\n\\t\\t\\t\\t<div class=\\"dot\\"></div>\\n\\t\\t\\t\\t<div class=\\"dot\\"></div>\\n\\t\\t\\t\\t<div class=\\"dot\\"></div>\\n\\t\\t\\t\\t<div class=\\"dot\\"></div>\\n\\t\\t\\t\\t<div class=\\"dot\\"></div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"horizontal\\">\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t\\t<div class=\\"line\\"></div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"glassbuble\\"><img src={glassBuble} alt=\\"bubbles\\" /></div>\\n\\n\\t<div class=\\"container\\">\\n\\t\\t{#each bubbles as _, i}\\n\\t\\t\\t<Bubble\\n\\t\\t\\t\\tsize={\`\${Math.random() * 50 + 20}px\`}\\n\\t\\t\\t\\tcolor={\`rgba(155, 158, 217, \${Math.random() * 0.5 + 0.3})\`}\\n\\t\\t\\t/>\\n\\t\\t{/each}\\n\\t\\t<div class=\\"header floating\\">\\n\\t\\t\\t<div class=\\"title\\"><h1>Projects</h1></div>\\n\\t\\t\\t<div><img src={Y2Kaesthetic} alt=\\"y2k aesthetic\\" /></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"blog-container\\">\\n\\t\\t\\t<div class=\\"glass-overlay\\">\\n\\t\\t\\t\\t<div class=\\"loader\\">\\n\\t\\t\\t\\t\\t<span>𓆩.⚝.𓆪</span>\\n\\t\\t\\t\\t\\t<div><h4>loading</h4></div>\\n\\t\\t\\t\\t\\t<span class=\\"blink\\">✧</span>\\n\\t\\t\\t\\t\\t<span class=\\"blink\\">✧</span>\\n\\t\\t\\t\\t\\t<span class=\\"blink\\">✧</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"blog\\">\\n\\t\\t\\t\\t<div class=\\"menu\\">\\n\\t\\t\\t\\t\\t<a href=\\"/\\"><img src={starLink} alt=\\"star link\\" /></a>\\n\\t\\t\\t\\t\\t<a href=\\"/about\\"><img src={starLink} alt=\\"star link\\" /></a>\\n\\t\\t\\t\\t\\t<a href=\\"/contact\\"><img src={starLink} alt=\\"star link\\" /></a>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"clearfix\\">\\n\\t\\t\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t\\t\\t<h2>Categories</h2>\\n\\t\\t\\t\\t\\t\\t<ul class=\\"categories\\">\\n\\t\\t\\t\\t\\t\\t\\t<li>Web Design</li>\\n\\t\\t\\t\\t\\t\\t\\t<li>Graphic Design</li>\\n\\t\\t\\t\\t\\t\\t\\t<li>Development</li>\\n\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"project-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<h2>Travel Site</h2>\\n\\t\\t\\t\\t\\t\\t\\t<p>Java and MySQL on the back end. Angular front-end.</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"project-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<h2>Booking Platform</h2>\\n\\t\\t\\t\\t\\t\\t\\t<p>Django and SQLlite backend. The front end is Svelte.</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"project-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<h2>Hexwood Hunt (Game)</h2>\\n\\t\\t\\t\\t\\t\\t\\t<p>No framerworks, just JavaScript, HTML and CSS.</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"project-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<h2>Windows XP Portfolio</h2>\\n\\t\\t\\t\\t\\t\\t\\t<p>Sveltekit, other small projects called in for a more realistic experience.</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"footer\\">&copy; 2024 Full Stack 🥞 . All rights reserved.</div>\\n\\t</div>\\n\\t<div class=\\"glasscyclone\\"><img src={glassCyclone} alt=\\"cyclone\\" /></div>\\n</div>\\n\\n<style>\\n\\t@import url('https://fonts.googleapis.com/css2?family=Cute+Font&display=swap');\\n\\n\\t@font-face {\\n\\t\\tfont-family: 'Planet Kosmos';\\n\\t\\tsrc: url('$lib/assets/fonts/PLANK.ttf') format('truetype');\\n\\t}\\n\\n\\t@font-face {\\n\\t\\tfont-family: 'FontoVision IV';\\n\\t\\tsrc: url('$lib/assets/fonts/Fontout.ttf') format('truetype');\\n\\t}\\n\\n\\t.wrapper {\\n\\t\\tbackground-color: #365ab4;\\n\\t\\tbackground: linear-gradient(to top, #abc3ef, #365ab4);\\n\\t\\tbox-shadow: inset 0px 0px 150px rgba(0, 0, 0, 0.65);\\n\\t\\tfont-family: 'Cute Font', cursive;\\n\\t\\tcolor: #000;\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\tposition: relative;\\n\\t\\tmin-height: 100vh;\\n\\t\\toverflow: hidden;\\n\\t\\tdisplay: flex;\\n\\t\\toverflow: hidden;\\n\\t}\\n\\n\\t.container {\\n\\t\\twidth: 100%;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding: 0px;\\n\\t\\tz-index: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\t.title {\\n\\t\\twidth: 293px;\\n\\t\\ttext-align: center;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 54%;\\n\\t\\tleft: 50%;\\n\\t\\ttransform: translate(-50%, -50%);\\n\\t\\ttext-align: center;\\n\\t\\tz-index: 1;\\n\\t}\\n\\t.header img {\\n\\t\\tdisplay: block;\\n\\t\\twidth: 400px;\\n\\t}\\n\\th1 {\\n\\t\\tfont-family: 'Planet Kosmos', sans-serif;\\n\\t\\tfont-size: 3em;\\n\\t\\tcolor: #fff;\\n\\t\\tz-index: 3;\\n\\t\\tbackground-image: url($lib/assets/MaxthonImages/stainless-steel-texture-388.png);\\n\\t\\tbackground-repeat: repeat;\\n\\t\\t-webkit-background-clip: text;\\n\\t\\tbackground-clip: text;\\n\\t\\t-webkit-text-fill-color: transparent;\\n\\t}\\n\\n\\th4 {\\n\\t\\tfont-family: 'Fontovision IV', sans-serif;\\n\\t\\tfont-size: 3em;\\n\\t\\tcolor: #fff;\\n\\t\\tz-index: 3;\\n\\t\\tbackground-image: url($lib/assets/MaxthonImages/stainless-steel-texture-388.png);\\n\\t\\tbackground-repeat: repeat;\\n\\t\\t-webkit-background-clip: text;\\n\\t\\tbackground-clip: text;\\n\\t\\t-webkit-text-fill-color: transparent;\\n\\t\\ttext-align: center;\\n\\t\\tanimation-name: spin, depth;\\n\\t\\tanimation-timing-function: linear;\\n\\t\\tanimation-iteration-count: infinite;\\n\\t\\tanimation-duration: 3s;\\n\\t\\ttransform-style: preserve-3d;\\n\\t\\tposition: relative;\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\th4::before,\\n\\th4::after {\\n\\t\\tcontent: '';\\n\\t\\tdisplay: block;\\n\\t\\tposition: absolute;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\ttop: 0;\\n\\t\\ttransform: rotateY(0.5deg);\\n\\t\\ttransform-origin: 0 50%;\\n\\t\\t-webkit-background-clip: text;\\n\\t\\tbackground-clip: text;\\n\\t\\t-webkit-text-fill-color: transparent;\\n\\t}\\n\\n\\th4::after {\\n\\t\\ttransform: rotateY(-0.5deg);\\n\\t\\ttransform-origin: 100% 50%;\\n\\t}\\n\\n\\t@keyframes spin {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: rotateY(0deg);\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: rotateY(-360deg);\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes depth {\\n\\t\\t0% {\\n\\t\\t\\ttext-shadow:\\n\\t\\t\\t\\t0 0 5px #878686,\\n\\t\\t\\t\\t0 0 10px #545454,\\n\\t\\t\\t\\t0 0 15px #f5f5f5;\\n\\t\\t}\\n\\t\\t25% {\\n\\t\\t\\ttext-shadow:\\n\\t\\t\\t\\t1px 0 5px #878686,\\n\\t\\t\\t\\t2px 0 10px #545454,\\n\\t\\t\\t\\t3px 0 15px #f5f5f5,\\n\\t\\t\\t\\t4px 0 20px #272626;\\n\\t\\t}\\n\\t\\t50% {\\n\\t\\t\\ttext-shadow:\\n\\t\\t\\t\\t0 0 5px #878686,\\n\\t\\t\\t\\t0 0 10px #545454,\\n\\t\\t\\t\\t0 0 15px #f5f5f5;\\n\\t\\t}\\n\\t\\t75% {\\n\\t\\t\\ttext-shadow:\\n\\t\\t\\t\\t-1px 0 5px #878686,\\n\\t\\t\\t\\t-2px 0 10px #545454,\\n\\t\\t\\t\\t-3px 0 15px #f5f5f5,\\n\\t\\t\\t\\t-4px 0 20px #272626;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttext-shadow:\\n\\t\\t\\t\\t0 0 5px #878686,\\n\\t\\t\\t\\t0 0 10px #545454,\\n\\t\\t\\t\\t0 0 15px #f5f5f5;\\n\\t\\t}\\n\\t}\\n\\n\\t.header {\\n\\t\\tcolor: #fff;\\n\\t\\tdisplay: inline-block;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.footer {\\n\\t\\tbackground-color: transparent;\\n\\t\\tcolor: #fff;\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 20px;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.menu {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-around;\\n\\t\\tpadding: 10px;\\n\\t\\tmargin-bottom: 20px;\\n\\t}\\n\\n\\t.glassbuble {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 5%;\\n\\t\\tleft: 15%;\\n\\t\\ttransform: translate(-50%, -50%);\\n\\t\\tz-index: 10;\\n\\t}\\n\\n\\t.glasscyclone {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: -23%;\\n\\t\\tright: -23%;\\n\\t\\tz-index: 10;\\n\\t}\\n\\n\\t.sidebar {\\n\\t\\twidth: 150px;\\n\\t\\tbackground-color: #c3cbdc;\\n\\t\\tbackground-image: linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%);\\n\\t\\tborder-radius: 5px;\\n\\t\\tpadding: 10px;\\n\\t\\tfloat: left;\\n\\t\\tmargin-right: 20px;\\n\\t}\\n\\n\\t.content {\\n\\t\\twidth: calc(100% - 240px);\\n\\t\\tfloat: left;\\n\\t}\\n\\n\\t.project-item {\\n\\t\\tbackground-color: #c3cbdc;\\n\\t\\tbackground-image: linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%);\\n\\t\\tborder-radius: 5px;\\n\\t\\tmargin-bottom: 20px;\\n\\t\\tpadding: 10px;\\n\\t}\\n\\n\\t.project-item h2 {\\n\\t\\tfont-size: 1.8em;\\n\\t}\\n\\n\\t.project-item p {\\n\\t\\tfont-size: 1.2em;\\n\\t}\\n\\t.categories {\\n\\t\\tlist-style-type: none;\\n\\t}\\n\\t.clearfix::after {\\n\\t\\tcontent: '';\\n\\t\\tclear: both;\\n\\t\\tdisplay: table;\\n\\t}\\n\\n\\t.grid-wrapper {\\n\\t\\tposition: absolute;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tleft: 0;\\n\\t\\tbottom: 0px;\\n\\t\\tperspective: 200px;\\n\\t\\tz-index: 0;\\n\\t\\toverflow: hidden;\\n\\t}\\n\\n\\t.blog-container {\\n\\t\\tbackground-image: url($lib/assets/MaxthonImages/MELT_FRAME.png);\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tbackground-size: contain;\\n\\t\\tmargin: -60px auto 0;\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 800px;\\n\\t\\theight: 600px;\\n\\t\\tpadding: 0px 100px 0px 100px;\\n\\t\\tposition: relative;\\n\\t\\tz-index: 2;\\n\\t\\toverflow: hidden;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t.blog {\\n\\t\\twidth: 600px;\\n\\t\\theight: 330px;\\n\\t\\toverflow-y: auto;\\n\\t\\tpadding: 0px;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding-bottom: 20px;\\n\\t}\\n\\n\\t.glass-overlay {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 17%;\\n\\t\\tleft: 17%;\\n\\t\\twidth: 630px;\\n\\t\\theight: 350px;\\n\\t\\tbackground: rgba(255, 255, 255, 0.2);\\n\\t\\tbackdrop-filter: blur(5px);\\n\\t\\tborder-radius: 45px;\\n\\t\\tbox-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n\\t\\tpointer-events: none;\\n\\t\\tpadding: 7px 12px 8px 12px;\\n\\t\\tz-index: 1;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.loader {\\n\\t\\tsize: 10rem;\\n\\t\\tmargin-top: 70px;\\n\\t}\\n\\t.blink {\\n\\t\\tanimation: blink-animation 1s steps(5, start) infinite;\\n\\t\\t-webkit-animation: blink-animation 1s steps(5, start) infinite;\\n\\t}\\n\\n\\t@keyframes blink-animation {\\n\\t\\tto {\\n\\t\\t\\tvisibility: hidden;\\n\\t\\t}\\n\\t}\\n\\n\\t.grid {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tbottom: 0;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tmargin-top: -50px;\\n\\t\\ttransform: rotateX(45deg);\\n\\t}\\n\\n\\t.floating {\\n\\t\\tanimation-name: floating;\\n\\t\\tanimation-duration: 3s;\\n\\t\\tanimation-iteration-count: infinite;\\n\\t\\tanimation-timing-function: ease-in-out;\\n\\t\\tmargin-left: 30px;\\n\\t\\tmargin-top: 5px;\\n\\t}\\n\\n\\t@keyframes floating {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translate(0, 0px);\\n\\t\\t}\\n\\t\\t50% {\\n\\t\\t\\ttransform: translate(0, 15px);\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translate(0, -0px);\\n\\t\\t}\\n\\t}\\n\\n\\t.line {\\n\\t\\tposition: absolute;\\n\\t\\tbackground: rgba(155, 158, 217, 0.35); /* Changed to a more icy blue color */\\n\\t\\tbackface-visibility: hidden;\\n\\t}\\n\\n\\t.vertical .line {\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tbottom: 0;\\n\\t\\twidth: 5px;\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\tto bottom,\\n\\t\\t\\trgba(255, 255, 255, 0),\\n\\t\\t\\trgba(155, 158, 217, 0.35)\\n\\t\\t); /* Changed to a more icy blue color */\\n\\t}\\n\\t.vertical .line:nth-child(1) {\\n\\t\\tleft: 10%;\\n\\t}\\n\\t.vertical .line:nth-child(2) {\\n\\t\\tleft: 20%;\\n\\t}\\n\\t.vertical .line:nth-child(3) {\\n\\t\\tleft: 30%;\\n\\t}\\n\\t.vertical .line:nth-child(4) {\\n\\t\\tleft: 40%;\\n\\t}\\n\\t.vertical .line:nth-child(5) {\\n\\t\\tleft: 50%;\\n\\t}\\n\\t.vertical .line:nth-child(6) {\\n\\t\\tleft: 60%;\\n\\t}\\n\\t.vertical .line:nth-child(7) {\\n\\t\\tleft: 70%;\\n\\t}\\n\\t.vertical .line:nth-child(8) {\\n\\t\\tleft: 80%;\\n\\t}\\n\\t.vertical .line:nth-child(9) {\\n\\t\\tleft: 90%;\\n\\t}\\n\\t.vertical .line:nth-child(10) {\\n\\t\\tleft: 100%;\\n\\t\\tmargin-left: -1px;\\n\\t}\\n\\n\\t.horizontal .line {\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\theight: 5px;\\n\\t\\tz-index: 2;\\n\\t}\\n\\n\\t.horizontal .line:nth-child(1) {\\n\\t\\ttop: 10%;\\n\\t\\topacity: 0.2;\\n\\t}\\n\\t.horizontal .line:nth-child(2) {\\n\\t\\ttop: 20%;\\n\\t\\topacity: 0.3;\\n\\t}\\n\\t.horizontal .line:nth-child(3) {\\n\\t\\ttop: 30%;\\n\\t\\topacity: 0.4;\\n\\t}\\n\\t.horizontal .line:nth-child(4) {\\n\\t\\ttop: 40%;\\n\\t\\topacity: 0.5;\\n\\t}\\n\\t.horizontal .line:nth-child(5) {\\n\\t\\ttop: 50%;\\n\\t\\topacity: 0.6;\\n\\t}\\n\\t.horizontal .line:nth-child(6) {\\n\\t\\ttop: 60%;\\n\\t\\topacity: 0.7;\\n\\t}\\n\\t.horizontal .line:nth-child(7) {\\n\\t\\ttop: 70%;\\n\\t\\topacity: 0.8;\\n\\t}\\n\\t.horizontal .line:nth-child(8) {\\n\\t\\ttop: 80%;\\n\\t\\topacity: 0.9;\\n\\t}\\n\\t.horizontal .line:nth-child(9) {\\n\\t\\ttop: 90%;\\n\\t\\topacity: 0.95;\\n\\t}\\n\\t.horizontal .line:nth-child(10) {\\n\\t\\ttop: 100%;\\n\\t\\tmargin-top: -1px;\\n\\t\\topacity: 1;\\n\\t}\\n\\t.horizontal .line:nth-child(11) {\\n\\t\\topacity: 0.05;\\n\\t}\\n\\n\\t.dot {\\n\\t\\tposition: absolute;\\n\\t\\tbackground: #57c1e8;\\n\\t\\twidth: 5px;\\n\\t\\theight: 5px;\\n\\t\\ttop: 100%;\\n\\t\\tborder-radius: 5px;\\n\\t\\tbox-shadow: 0 0 3px #fff;\\n\\t\\tbackface-visibility: hidden;\\n\\t}\\n\\n\\t.dot:nth-child(1) {\\n\\t\\tleft: 10%;\\n\\t\\tanimation: moveDot 5s infinite;\\n\\t}\\n\\t.dot:nth-child(2) {\\n\\t\\tleft: 20%;\\n\\t\\tanimation: moveDot 20s infinite;\\n\\t}\\n\\t.dot:nth-child(3) {\\n\\t\\tleft: 30%;\\n\\t\\tanimation: moveDot 15s infinite;\\n\\t}\\n\\t.dot:nth-child(4) {\\n\\t\\tleft: 50%;\\n\\t\\tanimation: moveDot 30s infinite;\\n\\t}\\n\\t.dot:nth-child(5) {\\n\\t\\tleft: 60%;\\n\\t\\tanimation: moveDot 12s infinite;\\n\\t}\\n\\t.dot:nth-child(6) {\\n\\t\\tleft: 80%;\\n\\t\\tanimation: moveDot 6s infinite;\\n\\t}\\n\\t.dot:nth-child(7) {\\n\\t\\tleft: 90%;\\n\\t\\tanimation: moveDot 8s infinite;\\n\\t}\\n\\n\\t@keyframes moveDot {\\n\\t\\t0% {\\n\\t\\t\\ttop: 100%;\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttop: 0%;\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const bubbles = Array.from({ length: 20 });
  $$result.css.add(css$7);
  return `<div class="wrapper svelte-b1tmdj"><div class="grid-wrapper svelte-b1tmdj" data-svelte-h="svelte-1weagi5"><div class="grid svelte-b1tmdj"><div class="vertical svelte-b1tmdj"><div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div></div> <div class="dots"><div class="dot svelte-b1tmdj"></div> <div class="dot svelte-b1tmdj"></div> <div class="dot svelte-b1tmdj"></div> <div class="dot svelte-b1tmdj"></div> <div class="dot svelte-b1tmdj"></div> <div class="dot svelte-b1tmdj"></div> <div class="dot svelte-b1tmdj"></div></div> <div class="horizontal svelte-b1tmdj"><div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div> <div class="line svelte-b1tmdj"></div></div></div></div> <div class="glassbuble svelte-b1tmdj" data-svelte-h="svelte-1jgz65j"><img${add_attribute("src", glassBuble, 0)} alt="bubbles"></div> <div class="container svelte-b1tmdj">${each(bubbles, (_, i) => {
    return `${validate_component(Bubble, "Bubble").$$render(
      $$result,
      {
        size: `${Math.random() * 50 + 20}px`,
        color: `rgba(155, 158, 217, ${Math.random() * 0.5 + 0.3})`
      },
      {},
      {}
    )}`;
  })} <div class="header floating svelte-b1tmdj" data-svelte-h="svelte-14hmrtx"><div class="title svelte-b1tmdj"><h1 class="svelte-b1tmdj">Projects</h1></div> <div><img${add_attribute("src", Y2Kaesthetic, 0)} alt="y2k aesthetic" class="svelte-b1tmdj"></div></div> <div class="blog-container svelte-b1tmdj" data-svelte-h="svelte-1691ne8"><div class="glass-overlay svelte-b1tmdj"><div class="loader svelte-b1tmdj"><span>𓆩.⚝.𓆪</span> <div><h4 class="svelte-b1tmdj">loading</h4></div> <span class="blink svelte-b1tmdj">✧</span> <span class="blink svelte-b1tmdj">✧</span> <span class="blink svelte-b1tmdj">✧</span></div></div> <div class="blog svelte-b1tmdj"><div class="menu svelte-b1tmdj"><a href="/"><img${add_attribute("src", starLink, 0)} alt="star link"></a> <a href="/about"><img${add_attribute("src", starLink, 0)} alt="star link"></a> <a href="/contact"><img${add_attribute("src", starLink, 0)} alt="star link"></a></div> <div class="clearfix svelte-b1tmdj"><div class="sidebar svelte-b1tmdj"><h2>Categories</h2> <ul class="categories svelte-b1tmdj"><li>Web Design</li> <li>Graphic Design</li> <li>Development</li></ul></div> <div class="content svelte-b1tmdj"><div class="project-item svelte-b1tmdj"><h2 class="svelte-b1tmdj">Travel Site</h2> <p class="svelte-b1tmdj">Java and MySQL on the back end. Angular front-end.</p></div> <div class="project-item svelte-b1tmdj"><h2 class="svelte-b1tmdj">Booking Platform</h2> <p class="svelte-b1tmdj">Django and SQLlite backend. The front end is Svelte.</p></div> <div class="project-item svelte-b1tmdj"><h2 class="svelte-b1tmdj">Hexwood Hunt (Game)</h2> <p class="svelte-b1tmdj">No framerworks, just JavaScript, HTML and CSS.</p></div> <div class="project-item svelte-b1tmdj"><h2 class="svelte-b1tmdj">Windows XP Portfolio</h2> <p class="svelte-b1tmdj">Sveltekit, other small projects called in for a more realistic experience.</p></div></div></div></div></div> <div class="footer svelte-b1tmdj" data-svelte-h="svelte-oqmztz">© 2024 Full Stack 🥞 . All rights reserved.</div></div> <div class="glasscyclone svelte-b1tmdj" data-svelte-h="svelte-15n3zkl"><img${add_attribute("src", glassCyclone, 0)} alt="cyclone"></div> </div>`;
});
const mouseKnit = "/_app/immutable/assets/mouseknit.C9qJFLyy.gif";
const geocitiesLogo = "/_app/immutable/assets/geocitiessplash.jYjowLkq.gif";
const vine = "data:image/jpeg;base64,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";
const vineEmail = "/_app/immutable/assets/vinemailbut.fyJ1N4yS.png";
const githubLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB41BMVEUAAAD///8XFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRYXFRb///9reFiQAAAAn3RSTlMAACBeibDV6PSvXQJBmuAWg+MVHJH3BXX1M9YBb/luCaoPxs3MCseudDn7QDFfpwfbzhB47u9+jJL968Cgh3ONIvhgXB+ZSB76TU6OYumWTKM2fXwp5QjkZnqPIyS22rukpey89tw9PqyIgt5Y3ZwoyFG9T9IE4iom3w1VpmehntQ17Q5Df4ZLSQwuN/AsqVJTqzi/sj8ba20a/hifFNgb6tGkAAAAAWJLR0QB/wIt3gAAAAd0SU1FB+MEAQ03NzFalEEAAANUSURBVFjDpVf5XxJBFJ9EBVG8bxTURBEvhDJBvMX7TPPKo0xM8a7QDq/SDkuzMi2tnH812IWdN7Cww8f3077ve9+vu+PM9w0IBYkIWWRUtFyBsUIeHROpjEDhRGycKh77RbwqLpaRnpCYhEUjKTGZgZ6SmoaDRlpqigQ9PSMTh4zMjPRQ/KxsLBnZWUHp6pxczBC5GrU4X5uHGSNPK8bPL8DMUZAvwr+Nw4jCAAVdEQ4rinR+61eMw4xieiX1OOzQQ36JwQeXlpVXBN2KaRXlZaW+xFBC+JVGH1rlSU3mO2L0u2aTp1rly42VgkC10HSPB0w1Foyttba6eo2mvs5Wa8XYUmPiaw1Cc7WP39gkYM3Cpm5phd/Y2iJs4GahuanRC9nJa7ZJH9c20m3nkfYOAnVKC3SR7o52DukGC9UjLdAD2rs5C+gFSJ+0QB9o7/WYQz+1x6UFCmF/vxsYAHnHoLTAIFgyPOAG5CC/z2K6Q4AgR2gYpA9GWARGRgFlGI2BbJzN98cBZQxNgOwhm8AkoEygKTA4WCcX+IYpNE2SGVaBGcKZRlaSPGIVeEw4s4icRGxjFbARThOCNscqEANIUIB5DZ5AgTny7GAVcBDOHAJn0aBl42sN4DxSh2ueTeApdXwXQLbIJrAIKAvICbIlpltQ7BKgOGk/WWYRWKYdJQGmKzppvg6+AE7ws6hVaYFVfwt0UvNrSIpfTbU73cgaPQFVIV1Jq6K71zzgOo1Nd6qD3sI2HHTvOgfLuOdn889V3pP5Ikf0ZjypD7gEyriCa5Ozoy2EXgodr2z6LjK90es3Q9ujgQN/08WXd/g7qBKhZCOp7oIvUe+JXjh2vGXXvjAY31p8xXcH8PUPZkX4+y5f+dDrLu6veE/slooGEYFDUrb7LBapP3irH2mBT4F8Oygfef89n93PXwaMxysLskpaoDGA7ziC9RMFB34NuoNM/nzFCd1wyq/eBquA5dS/g5+Rc98YBcYCWzR85fsPNYOARqxH6fVK61nUz/VjUwgBg1L8Nc/hbSmEQO95sJW6OGMROLsIftzVvxRSAorf6pCGc7l3xTf+ofFkHr36eynpeVu73DXM70fqP27xdreYBsel+Rpv+4Pb+Nos+tdv3TBuLPAfrkcu2nGdXO4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDQtMDFUMTM6NTU6NTUrMDA6MDA+cUoBAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA0LTAxVDEzOjU1OjU1KzAwOjAwTyzyvQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=";
const linkedinLogo = "/_app/immutable/assets/linkedinicon.DseX-AfE.png";
const css$6 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Comic+Sans+MS&display=swap');.wrapper.svelte-1k820z0.svelte-1k820z0{display:flex;flex-direction:column;align-items:center;justify-content:center;color:#000;font-family:'Comic Sans MS', cursive, sans-serif;background:url('$lib/assets/MaxthonImages/vine2bg.png') repeat}.container.svelte-1k820z0.svelte-1k820z0{width:800px;margin:0 auto;padding:20px;text-align:center}.header.svelte-1k820z0.svelte-1k820z0{display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;padding:10px;font-size:2em;text-shadow:2px 2px 2px #000}.content.svelte-1k820z0.svelte-1k820z0{padding:20px}.contact-form.svelte-1k820z0.svelte-1k820z0{margin-top:20px;text-align:left;display:flex;flex-direction:column}.contact-form.svelte-1k820z0 label.svelte-1k820z0{display:block;margin-bottom:5px}.contact-form.svelte-1k820z0 input.svelte-1k820z0,.contact-form.svelte-1k820z0 textarea.svelte-1k820z0{width:100%;height:auto;margin-bottom:10px;padding:5px;resize:none}.contact-form.svelte-1k820z0 input[type='submit'].svelte-1k820z0{text-align:center;text-decoration:underline;border:none;cursor:pointer;background:transparent;font-family:'Comic Sans MS', cursive, sans-serif;font-size:large}.socials.svelte-1k820z0.svelte-1k820z0{width:30px;margin:5px}.submit.svelte-1k820z0.svelte-1k820z0{display:flex;flex-direction:column;width:100%;align-items:center;justify-content:center;padding:10px 20px}.footer.svelte-1k820z0.svelte-1k820z0{margin-top:30px;display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: `{"version":3,"file":"Contact.svelte","sources":["Contact.svelte"],"sourcesContent":["<script>\\n\\timport mouseKnit from '$lib/assets/MaxthonImages/mouseknit.gif';\\n\\timport geocitiesLogo from '$lib/assets/MaxthonImages/geocitiessplash.gif';\\n\\timport vine from '$lib/assets/MaxthonImages/vinebar.jpg';\\n\\timport vineEmail from '$lib/assets/MaxthonImages/vinemailbut.png';\\n\\timport githubLogo from '$lib/assets/github-logo.png';\\n\\timport linkedinLogo from '$lib/assets/linkedinicon.png';\\n\\n\\timport emailjs from '@emailjs/browser';\\n\\n\\tconst sendEmail = (e) => {\\n\\t\\temailjs\\n\\t\\t\\t.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, {\\n\\t\\t\\t\\tpublicKey: import.meta.env.VITE_PUBLIC_KEY\\n\\t\\t\\t})\\n\\t\\t\\t.then(\\n\\t\\t\\t\\t() => {\\n\\t\\t\\t\\t\\tconsole.log('SUCCESS!');\\n\\t\\t\\t\\t\\te.target.reset();\\n\\t\\t\\t\\t},\\n\\t\\t\\t\\t(error) => {\\n\\t\\t\\t\\t\\tconsole.log('FAILED...', error.text);\\n\\t\\t\\t\\t}\\n\\t\\t\\t);\\n\\t};\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n\\t<div class=\\"container\\">\\n\\t\\t<img src={mouseKnit} alt=\\"Mouse Knit\\" />\\n\\t\\t<div class=\\"header\\">\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<a href=\\"https://github.com/snufkinwa\\"\\n\\t\\t\\t\\t\\t><img class=\\"socials\\" src={githubLogo} alt=\\"Vine\\" />\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t<a href=\\"https://www.linkedin.com/in/jlpngcodes/\\"\\n\\t\\t\\t\\t\\t><img class=\\"socials\\" src={linkedinLogo} alt=\\"Vine\\" />\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t\\t<img src={vineEmail} alt=\\"Vine Email\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"content\\">\\n\\t\\t\\t<p>I'd love to hear from you! Please fill out the form below to get in touch with me.</p>\\n\\t\\t\\t<form class=\\"contact-form\\" on:submit|preventDefault={sendEmail}>\\n\\t\\t\\t\\t<label for=\\"name\\">Name:</label>\\n\\t\\t\\t\\t<input type=\\"text\\" id=\\"name\\" name=\\"user_name\\" />\\n\\n\\t\\t\\t\\t<label for=\\"email\\">Email:</label>\\n\\t\\t\\t\\t<input type=\\"email\\" id=\\"email\\" name=\\"user_email\\" />\\n\\n\\t\\t\\t\\t<label for=\\"message\\">Message:</label>\\n\\t\\t\\t\\t<textarea id=\\"message\\" name=\\"message\\"></textarea>\\n\\t\\t\\t\\t<input type=\\"submit\\" value=\\"Send\\" />\\n\\t\\t\\t\\t<div class=\\"submit\\">\\n\\t\\t\\t\\t\\t<div><img src={vine} alt=\\"Vine\\" /></div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\t\\t<div class=\\"footer\\">\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<p>© 2022 Janay King. All rights reserved.</p>\\n\\t\\t\\t\\t<img src={geocitiesLogo} alt=\\"Geocities\\" />\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t@import url('https://fonts.googleapis.com/css2?family=Comic+Sans+MS&display=swap');\\n\\n\\t.wrapper {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tcolor: #000;\\n\\t\\tfont-family: 'Comic Sans MS', cursive, sans-serif;\\n\\t\\tbackground: url('$lib/assets/MaxthonImages/vine2bg.png') repeat;\\n\\t}\\n\\n\\t.container {\\n\\t\\twidth: 800px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding: 20px;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.header {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tcolor: #fff;\\n\\t\\tpadding: 10px;\\n\\t\\tfont-size: 2em;\\n\\t\\ttext-shadow: 2px 2px 2px #000;\\n\\t}\\n\\n\\t.content {\\n\\t\\tpadding: 20px;\\n\\t}\\n\\n\\t.contact-form {\\n\\t\\tmargin-top: 20px;\\n\\t\\ttext-align: left;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\n\\t.contact-form label {\\n\\t\\tdisplay: block;\\n\\t\\tmargin-bottom: 5px;\\n\\t}\\n\\n\\t.contact-form input,\\n\\t.contact-form textarea {\\n\\t\\twidth: 100%;\\n\\t\\theight: auto;\\n\\t\\tmargin-bottom: 10px;\\n\\t\\tpadding: 5px;\\n\\t\\tresize: none;\\n\\t}\\n\\n\\t.contact-form input[type='submit'] {\\n\\t\\ttext-align: center;\\n\\t\\ttext-decoration: underline;\\n\\t\\tborder: none;\\n\\t\\tcursor: pointer;\\n\\t\\tbackground: transparent;\\n\\t\\tfont-family: 'Comic Sans MS', cursive, sans-serif;\\n\\t\\tfont-size: large;\\n\\t}\\n\\n\\t.socials {\\n\\t\\twidth: 30px;\\n\\t\\tmargin: 5px;\\n\\t}\\n\\n\\t.submit {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: 100%;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tpadding: 10px 20px;\\n\\t}\\n\\n\\t.footer {\\n\\t\\tmargin-top: 30px;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoEC,QAAQ,0EAA0E,CAElF,sCAAS,CACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,eAAe,CAAC,CAAC,OAAO,CAAC,CAAC,UAAU,CACjD,UAAU,CAAE,4CAA4C,CAAC,MAC1D,CAEA,wCAAW,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MACb,CAEA,qCAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAC1B,CAEA,sCAAS,CACR,OAAO,CAAE,IACV,CAEA,2CAAc,CACb,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACjB,CAEA,4BAAa,CAAC,oBAAM,CACnB,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAChB,CAEA,4BAAa,CAAC,oBAAK,CACnB,4BAAa,CAAC,uBAAS,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,IACT,CAEA,4BAAa,CAAC,KAAK,CAAC,IAAI,CAAC,QAAQ,gBAAE,CAClC,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,SAAS,CAC1B,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,WAAW,CACvB,WAAW,CAAE,eAAe,CAAC,CAAC,OAAO,CAAC,CAAC,UAAU,CACjD,SAAS,CAAE,KACZ,CAEA,sCAAS,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GACT,CAEA,qCAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,IAAI,CAAC,IACf,CAEA,qCAAQ,CACP,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACd"}`
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="wrapper svelte-1k820z0"><div class="container svelte-1k820z0"><img${add_attribute("src", mouseKnit, 0)} alt="Mouse Knit"> <div class="header svelte-1k820z0" data-svelte-h="svelte-pnmy1m"><div><a href="https://github.com/snufkinwa"><img class="socials svelte-1k820z0"${add_attribute("src", githubLogo, 0)} alt="Vine"></a> <a href="https://www.linkedin.com/in/jlpngcodes/"><img class="socials svelte-1k820z0"${add_attribute("src", linkedinLogo, 0)} alt="Vine"></a></div> <img${add_attribute("src", vineEmail, 0)} alt="Vine Email"></div> <div class="content svelte-1k820z0"><p data-svelte-h="svelte-4gyhqj">I&#39;d love to hear from you! Please fill out the form below to get in touch with me.</p> <form class="contact-form svelte-1k820z0" data-svelte-h="svelte-1ys29dq"><label for="name" class="svelte-1k820z0">Name:</label> <input type="text" id="name" name="user_name" class="svelte-1k820z0"> <label for="email" class="svelte-1k820z0">Email:</label> <input type="email" id="email" name="user_email" class="svelte-1k820z0"> <label for="message" class="svelte-1k820z0">Message:</label> <textarea id="message" name="message" class="svelte-1k820z0"></textarea> <input type="submit" value="Send" class="svelte-1k820z0"> <div class="submit svelte-1k820z0"><div><img${add_attribute("src", vine, 0)} alt="Vine"></div></div></form></div> <div class="footer svelte-1k820z0" data-svelte-h="svelte-1sdttlv"><div><p>© 2022 Janay King. All rights reserved.</p> <img${add_attribute("src", geocitiesLogo, 0)} alt="Geocities"></div></div></div> </div>`;
});
const css$5 = {
  code: ".main-container.svelte-1kcfocz.svelte-1kcfocz{color:black;display:flex;flex-direction:column;width:100%;height:100%}.tabs-section.svelte-1kcfocz.svelte-1kcfocz{height:30px;display:flex;align-items:center;justify-content:start;font-size:13px;border-bottom:1px solid #baafa3}.max-content.svelte-1kcfocz.svelte-1kcfocz{margin:0;padding:0;box-sizing:border-box;background-color:#fff;height:calc(100% - 300px);width:100%;flex-grow:1;overflow-y:auto}.max-toolbar.svelte-1kcfocz.svelte-1kcfocz{padding-left:5px;margin:0;padding-right:10px;border-bottom:1px solid #f1eeec;box-shadow:0 1px 0 0 #baafa3}.max-function__bar.svelte-1kcfocz.svelte-1kcfocz{padding-top:5px;display:flex;flex-direction:row;border-bottom:1px solid #f1eeec;box-shadow:0 1px 0 0 #baafa3;z-index:1}.forward.svelte-1kcfocz.svelte-1kcfocz,.back.svelte-1kcfocz.svelte-1kcfocz{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.func-icon.svelte-1kcfocz.svelte-1kcfocz{background:none;border:none;padding-right:25px}.func-icon.svelte-1kcfocz img.svelte-1kcfocz{width:36px;height:36px}.func-right.svelte-1kcfocz.svelte-1kcfocz{display:flex;align-items:center}.func-left.svelte-1kcfocz.svelte-1kcfocz{display:flex;width:100%;align-items:center;justify-content:center}.down--arrow.svelte-1kcfocz.svelte-1kcfocz{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #555;position:absolute;margin-left:43px}.max--seperator.svelte-1kcfocz.svelte-1kcfocz{height:100%;width:1px;background-color:#a6a6a6;position:relative;margin-left:5px;margin-right:5px}.address--bar.svelte-1kcfocz.svelte-1kcfocz{color:black;width:80%;height:50%;-webkit-appearance:none;-moz-appearance:none;border-radius:2px;outline:1px solid;outline-color:#4682b4;border:1px solid #fff;appearance:none;background-color:white;background-image:url($lib/assets/windowsIcons/dropdown.png);background-repeat:no-repeat;background-position:right}.search--bar.svelte-1kcfocz.svelte-1kcfocz{width:20%;height:50%;-webkit-appearance:none;-moz-appearance:none;border-radius:2px;outline:1px solid;outline-color:#4682b4;border:1px solid #fff;appearance:none;background-color:white;background-image:url($lib/assets/windowsIcons/dropdown.png);background-repeat:no-repeat;background-position:right}.search--icon.svelte-1kcfocz.svelte-1kcfocz{width:17px;height:17px;margin-right:2px;margin-left:2px}.down--arrow--search.svelte-1kcfocz.svelte-1kcfocz{width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #555;position:absolute;margin-left:19px;margin-top:-18px}.link.svelte-1kcfocz.svelte-1kcfocz{width:8px;height:6px}.box.svelte-1kcfocz.svelte-1kcfocz{height:100%}footer.svelte-1kcfocz.svelte-1kcfocz{display:flex;flex-direction:row;align-items:center;height:25px;border-top:2px solid #baafa3;box-shadow:0 1px 0 0 #baafa3}footer.svelte-1kcfocz .right.svelte-1kcfocz{width:95%;display:flex;flex-direction:row;align-items:center}footer.svelte-1kcfocz .right img.svelte-1kcfocz{width:18px;height:18px;margin-left:5px}.bottom-seperator.svelte-1kcfocz.svelte-1kcfocz{width:2px;background-color:#a6a6a6;height:80%}ul.tabs.svelte-1kcfocz.svelte-1kcfocz{display:flex;flex-wrap:wrap;list-style:none;padding-left:0;margin-bottom:1;list-style:none;border-bottom:1px solid #dee2e6}li.svelte-1kcfocz.svelte-1kcfocz{display:flex;align-items:center;margin-bottom:-1px;flex-direction:row}.icontab.svelte-1kcfocz.svelte-1kcfocz{width:auto;height:12px;padding-right:12px}span.svelte-1kcfocz.svelte-1kcfocz{border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;display:block;padding:0.2rem 1.4rem;cursor:pointer}span.svelte-1kcfocz.svelte-1kcfocz:hover{border-color:#baafa3}li.active.svelte-1kcfocz>span.svelte-1kcfocz{color:#495057;background-color:#fff;border-top:4px solid #fcc603;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;border-right:1px solid #baafa3;border-left:1px solid #baafa3}",
  map: `{"version":3,"file":"Maxthon.svelte","sources":["Maxthon.svelte"],"sourcesContent":["<script>\\n\\timport HeaderWindow from '../../Window/WindowDropDowns/HeaderWindow.svelte';\\n\\timport menuItems from './menuItems';\\n\\n\\timport forward from '$lib/assets/windowsIcons/Forward.png';\\n\\timport back from '$lib/assets/windowsIcons/Back.png';\\n\\timport folder from '$lib/assets/windowsIcons/OE Folder List.png';\\n\\timport search from '$lib/assets/windowsIcons/Search.png';\\n\\timport xangaIcon from '$lib/assets/MaxthonImages/xanga.png';\\n\\timport globe from '$lib/assets/windowsIcons/Internet Shortcut.png';\\n\\timport refresh from '$lib/assets/windowsIcons/IE Refresh.png';\\n\\timport stop from '$lib/assets/windowsIcons/IE Stop.png';\\n\\timport blank from '$lib/assets/windowsIcons/Generic Document.png';\\n\\timport link from '$lib/assets/windowsIcons/links.png';\\n\\timport myspacelogo from '$lib/assets/myspace-logo.png';\\n\\timport empty from '$lib/assets/empty.png';\\n\\n\\timport About from './Portfolio/About.svelte';\\n\\timport Projects from './Portfolio/Projects.svelte';\\n\\timport Contact from './Portfolio/Contact.svelte';\\n\\timport { onMount } from 'svelte';\\n\\n\\tfunction handleClickItem(item) {\\n\\t\\tconsole.log('click!');\\n\\t}\\n\\n\\tlet items = [\\n\\t\\t{\\n\\t\\t\\tid: '1',\\n\\t\\t\\ticon: myspacelogo,\\n\\t\\t\\taddress: 'https://myspace.com/jlpngcodes',\\n\\t\\t\\tlabel: 'About',\\n\\t\\t\\tvalue: 1,\\n\\t\\t\\tcomponent: About\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tid: '2',\\n\\t\\t\\ticon: xangaIcon,\\n\\t\\t\\taddress: 'https://jlpngcodes.livejournal.com/',\\n\\t\\t\\tlabel: 'Projects',\\n\\t\\t\\tvalue: 2,\\n\\t\\t\\tcomponent: Projects\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tid: '3',\\n\\t\\t\\ticon: empty,\\n\\t\\t\\taddress: 'http://www.geocities.com/jlpngcodes/9984',\\n\\t\\t\\tlabel: 'Projects',\\n\\t\\t\\tlabel: 'Contact',\\n\\t\\t\\tvalue: 3,\\n\\t\\t\\tcomponent: Contact\\n\\t\\t}\\n\\t];\\n\\n\\tlet activeTabValue = 1;\\n\\tlet selectID = '1';\\n\\n\\tconst handleClick = (tabValue) => () => {\\n\\t\\tactiveTabValue = tabValue;\\n\\t\\tconst selectedItem = items.find((item) => item.value === tabValue);\\n\\t\\tif (selectedItem) {\\n\\t\\t\\tselectID = selectedItem.id;\\n\\t\\t}\\n\\t};\\n\\n\\tconst handleSelectChange = (event) => {\\n\\t\\tconst selectedId = event.target.value;\\n\\t\\tconst selectedItem = items.find((item) => item.id === selectedId);\\n\\t\\tif (selectedItem) {\\n\\t\\t\\tactiveTabValue = selectedItem.value;\\n\\t\\t}\\n\\t};\\n\\tonMount(() => {\\n\\t\\tconst tabButtons = document.querySelectorAll('.tabs li');\\n\\n\\t\\tconst backButton = document.querySelector('.back');\\n\\n\\t\\tconst forwardButton = document.querySelector('.forward');\\n\\n\\t\\tconsole.log('Tab buttons:', tabButtons);\\n\\t\\tconsole.log('Back button:', backButton);\\n\\t\\tconsole.log('Forward button:', forwardButton);\\n\\n\\t\\tif (tabButtons.length === 0 || !backButton || !forwardButton) {\\n\\t\\t\\tconsole.error('One or more elements are not correctly selected.');\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\n\\t\\ttabButtons.forEach((button, index) => {\\n\\t\\t\\tbutton.addEventListener('click', () => {\\n\\t\\t\\t\\tconsole.log('Tab button clicked:', index);\\n\\n\\t\\t\\t\\ttabButtons.forEach((btn) => btn.classList.remove('active'));\\n\\n\\t\\t\\t\\tbutton.classList.add('active');\\n\\n\\t\\t\\t\\tif (index === 0) {\\n\\t\\t\\t\\t\\tbackButton.style.filter = 'grayscale(100%)';\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tbackButton.style.filter = 'none';\\n\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\tif (index === tabButtons.length - 1) {\\n\\t\\t\\t\\t\\tforwardButton.style.filter = 'grayscale(100%)';\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tforwardButton.style.filter = 'none';\\n\\t\\t\\t\\t}\\n\\t\\t\\t});\\n\\t\\t});\\n\\t});\\n<\/script>\\n\\n<div class=\\"main-container\\">\\n\\t<section class=\\"max-toolbar\\">\\n\\t\\t<HeaderWindow items={menuItems} onClickItem={handleClickItem} />\\n\\t</section>\\n\\t<section class=\\"max-function__bar\\">\\n\\t\\t<div class=\\"func-right\\">\\n\\t\\t\\t<button class=\\"func-icon\\"><img src={blank} alt=\\"blank\\" /> </button>\\n\\t\\t\\t<div class=\\"down--arrow\\"></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"max--seperator\\"></div>\\n\\t\\t<div class=\\"func-right\\">\\n\\t\\t\\t<button class=\\"func-icon\\"><img class=\\"back\\" src={back} alt=\\"blank\\" /> </button>\\n\\t\\t\\t<div class=\\"down--arrow\\"></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"func-right\\">\\n\\t\\t\\t<button class=\\"func-icon\\"><img class=\\"forward\\" src={forward} alt=\\"blank\\" /> </button>\\n\\t\\t\\t<div class=\\"down--arrow\\"></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"func-right\\">\\n\\t\\t\\t<button class=\\"func-icon\\"><img src={refresh} alt=\\"blank\\" /> </button>\\n\\t\\t\\t<div class=\\"down--arrow\\"></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"func-right\\">\\n\\t\\t\\t<button class=\\"func-icon\\"><img src={stop} alt=\\"blank\\" /> </button>\\n\\t\\t\\t<div class=\\"down--arrow\\"></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"func-right\\">\\n\\t\\t\\t<button class=\\"func-icon\\"><img src={folder} alt=\\"blank\\" /> </button>\\n\\t\\t\\t<div class=\\"max--seperator\\"></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"func-left\\">\\n\\t\\t\\t<select class=\\"address--bar\\" bind:value={selectID} on:change={handleSelectChange}>\\n\\t\\t\\t\\t{#each items as item}\\n\\t\\t\\t\\t\\t<option value={item.id} on:click={handleClick(item.value)}>{item.address}</option>\\n\\t\\t\\t\\t{/each}</select\\n\\t\\t\\t>\\n\\t\\t\\t<div class=\\"max--seperator\\"></div>\\n\\t\\t\\t<div class=\\"search--bar\\">\\n\\t\\t\\t\\t<img class=\\"search--icon\\" src={search} alt=\\"blank\\" />\\n\\t\\t\\t\\t<div class=\\"down--arrow--search\\"></div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<img src={link} alt=\\">>\\" title=\\"Links\\" class=\\"link\\" />\\n\\t</section>\\n\\t<section class=\\"tabs-section\\">\\n\\t\\t<ul class=\\"tabs\\">\\n\\t\\t\\t{#each items as item}\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t<li class={activeTabValue === item.value ? 'active' : ''}>\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t\\t\\t<span on:click={handleClick(item.value)}>\\n\\t\\t\\t\\t\\t\\t<img src={item.icon} alt=\\" \\" class=\\"icontab\\" />{item.label}</span\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t</section>\\n\\t<section class=\\"max-content\\">\\n\\t\\t{#each items as item}\\n\\t\\t\\t{#if activeTabValue == item.value}\\n\\t\\t\\t\\t<div class=\\"box\\">\\n\\t\\t\\t\\t\\t<svelte:component this={item.component} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t{/each}\\n\\t</section>\\n\\t<footer>\\n\\t\\t<div class=\\"right\\">\\n\\t\\t\\t<img src={globe} alt=\\"blank\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"bottom-seperator\\"></div>\\n\\t\\t<div></div>\\n\\t</footer>\\n</div>\\n\\n<style>\\n\\t.main-container {\\n\\t\\tcolor: black;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n\\t.tabs-section {\\n\\t\\theight: 30px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: start;\\n\\t\\tfont-size: 13px;\\n\\t\\tborder-bottom: 1px solid #baafa3;\\n\\t}\\n\\t.max-content {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tbackground-color: #fff;\\n\\t\\theight: calc(100% - 300px);\\n\\t\\twidth: 100%;\\n\\t\\tflex-grow: 1;\\n\\t\\toverflow-y: auto;\\n\\t}\\n\\t.max-toolbar {\\n\\t\\tpadding-left: 5px;\\n\\t\\tmargin: 0;\\n\\t\\tpadding-right: 10px;\\n\\t\\tborder-bottom: 1px solid #f1eeec;\\n\\t\\tbox-shadow: 0 1px 0 0 #baafa3;\\n\\t}\\n\\t.max-function__bar {\\n\\t\\tpadding-top: 5px;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\tborder-bottom: 1px solid #f1eeec;\\n\\t\\tbox-shadow: 0 1px 0 0 #baafa3;\\n\\t\\tz-index: 1;\\n\\t}\\n\\n\\t.forward,\\n\\t.back {\\n\\t\\t-webkit-filter: grayscale(100%);\\n\\t\\tfilter: grayscale(100%);\\n\\t}\\n\\n\\t.func-icon {\\n\\t\\tbackground: none;\\n\\t\\tborder: none;\\n\\t\\tpadding-right: 25px;\\n\\t}\\n\\t.func-icon img {\\n\\t\\twidth: 36px;\\n\\t\\theight: 36px;\\n\\t}\\n\\t.func-right {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t}\\n\\t.func-left {\\n\\t\\tdisplay: flex;\\n\\t\\twidth: 100%;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\t.down--arrow {\\n\\t\\twidth: 0;\\n\\t\\theight: 0;\\n\\t\\tborder-left: 5px solid transparent;\\n\\t\\tborder-right: 5px solid transparent;\\n\\t\\tborder-top: 5px solid #555;\\n\\t\\tposition: absolute;\\n\\t\\tmargin-left: 43px;\\n\\t}\\n\\t.max--seperator {\\n\\t\\theight: 100%;\\n\\t\\twidth: 1px;\\n\\t\\tbackground-color: #a6a6a6;\\n\\t\\tposition: relative;\\n\\t\\tmargin-left: 5px;\\n\\t\\tmargin-right: 5px;\\n\\t}\\n\\t.address--bar {\\n\\t\\tcolor: black;\\n\\t\\twidth: 80%;\\n\\t\\theight: 50%;\\n\\t\\t-webkit-appearance: none;\\n\\t\\t-moz-appearance: none;\\n\\t\\tborder-radius: 2px;\\n\\t\\toutline: 1px solid;\\n\\t\\toutline-color: #4682b4;\\n\\t\\tborder: 1px solid #fff;\\n\\t\\tappearance: none;\\n\\t\\tbackground-color: white;\\n\\t\\tbackground-image: url($lib/assets/windowsIcons/dropdown.png);\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tbackground-position: right;\\n\\t}\\n\\t.search--bar {\\n\\t\\twidth: 20%;\\n\\t\\theight: 50%;\\n\\t\\t-webkit-appearance: none;\\n\\t\\t-moz-appearance: none;\\n\\t\\tborder-radius: 2px;\\n\\t\\toutline: 1px solid;\\n\\t\\toutline-color: #4682b4;\\n\\t\\tborder: 1px solid #fff;\\n\\t\\tappearance: none;\\n\\t\\tbackground-color: white;\\n\\t\\tbackground-image: url($lib/assets/windowsIcons/dropdown.png);\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tbackground-position: right;\\n\\t}\\n\\t.search--icon {\\n\\t\\twidth: 17px;\\n\\t\\theight: 17px;\\n\\t\\tmargin-right: 2px;\\n\\t\\tmargin-left: 2px;\\n\\t}\\n\\t.down--arrow--search {\\n\\t\\twidth: 0;\\n\\t\\theight: 0;\\n\\t\\tborder-left: 3px solid transparent;\\n\\t\\tborder-right: 3px solid transparent;\\n\\t\\tborder-top: 3px solid #555;\\n\\t\\tposition: absolute;\\n\\t\\tmargin-left: 19px;\\n\\t\\tmargin-top: -18px;\\n\\t}\\n\\t.link {\\n\\t\\twidth: 8px;\\n\\t\\theight: 6px;\\n\\t}\\n\\t.box {\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\talign-items: center;\\n\\t\\theight: 25px;\\n\\t\\tborder-top: 2px solid #baafa3;\\n\\t\\tbox-shadow: 0 1px 0 0 #baafa3;\\n\\t}\\n\\n\\tfooter .right {\\n\\t\\twidth: 95%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\tfooter .right img {\\n\\t\\twidth: 18px;\\n\\t\\theight: 18px;\\n\\t\\tmargin-left: 5px;\\n\\t}\\n\\n\\t.bottom-seperator {\\n\\t\\twidth: 2px;\\n\\t\\tbackground-color: #a6a6a6;\\n\\t\\theight: 80%;\\n\\t}\\n\\n\\tul.tabs {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tlist-style: none;\\n\\t\\tpadding-left: 0;\\n\\t\\tmargin-bottom: 1;\\n\\t\\tlist-style: none;\\n\\t\\tborder-bottom: 1px solid #dee2e6;\\n\\t}\\n\\tli {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tmargin-bottom: -1px;\\n\\t\\tflex-direction: row;\\n\\t}\\n\\t.icontab {\\n\\t\\twidth: auto;\\n\\t\\theight: 12px;\\n\\t\\tpadding-right: 12px;\\n\\t}\\n\\tspan {\\n\\t\\tborder: 1px solid transparent;\\n\\t\\tborder-top-left-radius: 0.25rem;\\n\\t\\tborder-top-right-radius: 0.25rem;\\n\\t\\tdisplay: block;\\n\\t\\tpadding: 0.2rem 1.4rem;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\tspan:hover {\\n\\t\\tborder-color: #baafa3;\\n\\t}\\n\\n\\tli.active > span {\\n\\t\\tcolor: #495057;\\n\\t\\tbackground-color: #fff;\\n\\t\\tborder-top: 4px solid #fcc603;\\n\\t\\tborder-top-left-radius: 0.25rem;\\n\\t\\tborder-top-right-radius: 0.25rem;\\n\\t\\tborder-right: 1px solid #baafa3;\\n\\t\\tborder-left: 1px solid #baafa3;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
function handleClickItem(item) {
  console.log("click!");
}
const Maxthon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [
    {
      id: "1",
      icon: myspacelogo,
      address: "https://myspace.com/jlpngcodes",
      label: "About",
      value: 1,
      component: About
    },
    {
      id: "2",
      icon: xangaIcon,
      address: "https://jlpngcodes.livejournal.com/",
      label: "Projects",
      value: 2,
      component: Projects
    },
    {
      id: "3",
      icon: empty,
      address: "http://www.geocities.com/jlpngcodes/9984",
      label: "Projects",
      label: "Contact",
      value: 3,
      component: Contact
    }
  ];
  let activeTabValue = 1;
  $$result.css.add(css$5);
  return `<div class="main-container svelte-1kcfocz"><section class="max-toolbar svelte-1kcfocz">${validate_component(HeaderWindow, "HeaderWindow").$$render(
    $$result,
    {
      items: menuItems$3,
      onClickItem: handleClickItem
    },
    {},
    {}
  )}</section> <section class="max-function__bar svelte-1kcfocz"><div class="func-right svelte-1kcfocz" data-svelte-h="svelte-1o3y37m"><button class="func-icon svelte-1kcfocz"><img${add_attribute("src", blank, 0)} alt="blank" class="svelte-1kcfocz"></button> <div class="down--arrow svelte-1kcfocz"></div></div> <div class="max--seperator svelte-1kcfocz"></div> <div class="func-right svelte-1kcfocz" data-svelte-h="svelte-10fle0z"><button class="func-icon svelte-1kcfocz"><img class="back svelte-1kcfocz"${add_attribute("src", back, 0)} alt="blank"></button> <div class="down--arrow svelte-1kcfocz"></div></div> <div class="func-right svelte-1kcfocz" data-svelte-h="svelte-19bu3n5"><button class="func-icon svelte-1kcfocz"><img class="forward svelte-1kcfocz"${add_attribute("src", forward, 0)} alt="blank"></button> <div class="down--arrow svelte-1kcfocz"></div></div> <div class="func-right svelte-1kcfocz" data-svelte-h="svelte-9pkv8h"><button class="func-icon svelte-1kcfocz"><img${add_attribute("src", refresh, 0)} alt="blank" class="svelte-1kcfocz"></button> <div class="down--arrow svelte-1kcfocz"></div></div> <div class="func-right svelte-1kcfocz" data-svelte-h="svelte-gglq8s"><button class="func-icon svelte-1kcfocz"><img${add_attribute("src", stop, 0)} alt="blank" class="svelte-1kcfocz"></button> <div class="down--arrow svelte-1kcfocz"></div></div> <div class="func-right svelte-1kcfocz" data-svelte-h="svelte-1noq9m4"><button class="func-icon svelte-1kcfocz"><img${add_attribute("src", folder$1, 0)} alt="blank" class="svelte-1kcfocz"></button> <div class="max--seperator svelte-1kcfocz"></div></div> <div class="func-left svelte-1kcfocz"><select class="address--bar svelte-1kcfocz">${each(items, (item) => {
    return `<option${add_attribute("value", item.id, 0)}>${escape(item.address)}</option> `;
  })}</select> <div class="max--seperator svelte-1kcfocz"></div> <div class="search--bar svelte-1kcfocz" data-svelte-h="svelte-1911nqf"><img class="search--icon svelte-1kcfocz"${add_attribute("src", search$1, 0)} alt="blank"> <div class="down--arrow--search svelte-1kcfocz"></div></div></div> <img${add_attribute("src", link, 0)} alt=">>" title="Links" class="link svelte-1kcfocz"></section> <section class="tabs-section svelte-1kcfocz"><ul class="tabs svelte-1kcfocz">${each(items, (item) => {
    return ` <li class="${escape(null_to_empty(activeTabValue === item.value ? "active" : ""), true) + " svelte-1kcfocz"}">  <span class="svelte-1kcfocz"><img${add_attribute("src", item.icon, 0)} alt=" " class="icontab svelte-1kcfocz">${escape(item.label)}</span> </li>`;
  })}</ul></section> <section class="max-content svelte-1kcfocz">${each(items, (item) => {
    return `${activeTabValue == item.value ? `<div class="box svelte-1kcfocz">${validate_component(item.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})} </div>` : ``}`;
  })}</section> <footer class="svelte-1kcfocz" data-svelte-h="svelte-17il26i"><div class="right svelte-1kcfocz"><img${add_attribute("src", globe, 0)} alt="blank" class="svelte-1kcfocz"></div> <div class="bottom-seperator svelte-1kcfocz"></div> <div></div></footer> </div>`;
});
const File$2 = [
  {
    type: "item",
    text: "Create Shortcut",
    disable: true
  },
  {
    type: "item",
    text: "Delete",
    disable: true
  },
  {
    type: "item",
    text: "Rename",
    disable: true
  },
  {
    type: "item",
    disable: true,
    text: "Properties"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Close"
  }
];
const Edit$2 = [
  {
    type: "item",
    disable: true,
    text: "Undo",
    hotkey: "Ctrl+Z"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    disable: true,
    text: "Cut",
    hotkey: "Ctrl+X"
  },
  {
    type: "item",
    disable: true,
    text: "Copy",
    hotkey: "Ctrl+C"
  },
  {
    type: "item",
    disable: true,
    text: "Paste",
    hotkey: "Ctrl+V"
  },
  {
    type: "item",
    disable: true,
    text: "Paste Shortcut"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Copy To Folder...",
    disable: true
  },
  {
    type: "item",
    text: "Move To Folder...",
    disable: true
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Select All",
    hotkey: "Ctrl+A"
  },
  {
    type: "item",
    text: "Invert Selection"
  }
];
const View$2 = [
  {
    type: "menu",
    position: {
      left: "calc(100% - 4px)",
      top: "-3px"
    },
    text: "Toolbars",
    items: [
      {
        type: "item",
        symbol: "check",
        text: "Standard Buttons"
      },
      {
        type: "item",
        symbol: "check",
        text: "Address Bar"
      },
      {
        type: "item",
        symbol: "check",
        text: "Links"
      },
      {
        type: "separator"
      },
      {
        type: "item",
        symbol: "check",
        text: "Lock the Toolbars"
      },
      {
        type: "item",
        text: "Customize..."
      }
    ]
  },
  {
    type: "item",
    symbol: "check",
    text: "Status Bar"
  },
  {
    type: "menu",
    position: {
      left: "calc(100% - 4px)",
      top: "-3px"
    },
    text: "Explorer Bar",
    items: [
      {
        type: "item",
        text: "Search",
        hotkey: "Ctrl+E"
      },
      {
        type: "item",
        text: "Favorites",
        hotkey: "Ctrl+I"
      },
      {
        type: "item",
        text: "History",
        hotkey: "Ctrl+H"
      },
      {
        type: "item",
        text: "Folders"
      },
      {
        type: "separator"
      },
      {
        type: "item",
        text: "Tip of the Day"
      }
    ]
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Thumbnails"
  },
  {
    type: "item",
    text: "Tiles",
    symbol: "circle"
  },
  {
    type: "item",
    text: "Icons"
  },
  {
    type: "item",
    text: "List"
  },
  {
    type: "item",
    text: "Details"
  },
  {
    type: "item",
    text: "Choose Details..."
  },
  {
    type: "item",
    text: "Refresh"
  }
];
const Favorites$1 = [
  {
    type: "item",
    text: "Add to Favorites..."
  },
  {
    type: "item",
    text: "Organize Favorites..."
  }
];
const Tools$1 = [
  {
    type: "item",
    text: "Map Network Drive..."
  },
  {
    type: "item",
    text: "Disconnect Network Drive..."
  },
  {
    type: "item",
    text: "Synchronize..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Folder Options..."
  }
];
const Help$2 = [
  {
    type: "item",
    text: "Help and Support Center"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Is this copy of Windows legal?"
  },
  {
    type: "item",
    text: "About Windows"
  }
];
const menuItems$2 = { File: File$2, Edit: Edit$2, View: View$2, Favorites: Favorites$1, Tools: Tools$1, Help: Help$2 };
const go = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJPSURBVDhPjZHbS9phHMZ/RVIUJZ1VLDErsJNGVHbCMpQOYlQSVBQdCIsCuxg127K20U3URazWgcpSy85mx0Eb7Krb3Y3tr/ksf7qLXW0feK/e7/M83/d5hdDPEDNPMzhuHfRf9mM/tdMR6KDN30b7UTsWnwXjgZG6/TrKt8rRrGhYflpGmH2aZe/7HivPK7i+uJj+PM3E3QRjN2OMXI8wcDVAz3kPtoCNpsMmdOs65LNyhMn7SVafV1n8tojz0YnjxsHQ1RB3v+4IYz2y0upvFUW1e7XoN/TkzuUiDAYHmfs6JyaNXo/Sd95H13GXKPpDxXYF+m09+i29mKiZ1yB0n3Yz9TDF+N04g5eD2E/sWH1WTB5TVBZBu6mleKuY0o1SNO4XYbiI0dAow8Fhes976TzupMXbgtFjpGq3KiqLULhdSNFmEWq3GsHsNdN30Re9+jcFOwXkLOQghJ3D6/4vqn0VsncyhMqdSvG/uk66RAPbiY3WwEuLJ00YzgzR8QjyCzkyr4y092kIJZ9KMB2YxNrD77UGrFgCFhrPGqPjERS3CjKCGUh9UpIWkxDy1vIw7Bpo9jbT4m/BfGTGdPx3o+p7NbIHGSmhFBJ8CUjcEgT5qpxwavVuNQ2eBuo99dQc1uD74RNF+cF8lCEl6TfpJF4mEueJI9YVi5D6IRXVioqitSJ0H3WUrZeJRtodLZp9DUqfkkx/Jsn+ZCQeCTFrMQhOAWHpcQmpU0rWqywUMwrxyF7LyHZlkz6fTvJCMonuROLfxhP75iVpWmDheoHfNvbnLyE6SFEAAAAASUVORK5CYII=";
const search = "data:image/png;base64,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";
const computer = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALCSURBVDhPdZNvSFNRGMZvOEOIogLLjYS+2BfrSyZtU8Iiw4piEZouLDOJJkmWhAPT/JOZYcxi6rbKTVEnohvOqc106p1py6XOv4my6azcaJioBAn1dKYXhjAfeHm4557fw8t7zqF8SSqt3Ftaqjyt1fRktLdbCg3vR2mdbmReqezHPZFCcJiK2sls3Sqj0ai1WseXTSYLTCYrmppoVKl7oGwZxDt6FqUdNlw6+7j1oB8v3GfI8PAoJKpmvDKMoHpkAcbVPzD/Beh1oGkZKP8GXL1YNMr2554PpKICGMyrrs7+j4qhn3hhAyqdgIZA+lVAS1zlAkrswLW4smkOixdPOtjFYF6p6wzP1RYnsqY2N8u+A28XN/3lHJBN1pPFBhebxUs5RPF2M5hXudlvYloGFiAaAjLHgdxpoGAGyCMungBSyXpiTt8yCRAHUuH7GMwrz2A0GgtiTcAtM3D3yybk8eTPQFwfcL1sASTgWTAVsZ/BtqpePdgfq13CBSMg6CVDI2Ee93xfbv+D1OKvJIAvCwrgHmCQrZLL6PIbaieO6wBuK8BvA9I711BcP4eM+83usBARzWHxS7YNKMxvS7hT8wMnm/8hh/6NWo0NaWkfEB1djRNHhDRpP4vjxz+17WVq0VlfS2TD0OtnUVtrRUWFmcDyjUpMkDqPBV8R+jwBj+rqPiUtLS1hfv4XVlZWiDtI0ARSUmohEMiRl9eKzIc1FrZ/RAg5sx0M5lVDQ99Tl8u1AbvdbthsdtD0FCSSDgiFchQUtCInq9FJZpDEoaL2MJhXottynsUyvuZwOGC3z2FycgZG4xhUqm4yhyoS1IWYyHQLx5+f7vMehFKhrHORD+KL8lVjWo1pXa83kwc1AIWiG+KMykX+0Zu9ZIjSbd+CR54fHD8el0z6EdlcQ0pHqoVUI5vFfRLkzzvDocKY9inqP+OethPzSizLAAAAAElFTkSuQmCC";
const up = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAEwElEQVR42tWVe0zVdRiHrdZqy2U4aWJeADcZKoiAQ7JNVhKCCpShoPBHpqkT81ZaIiBOBT0mKghCipCEIBOKg0cOh4tcBA6XuESAwDmHw+FyRAVFEbmdp5/mbKzEa1t9t+ff99n7fj9731Gj/qvPK2olZvtnIpIe5F+T7Ez+lnf2jGZMyBuMCxiDQ4j9y5eFZYZicXQm+hFvYZSgh1nSeExO6WOwUx/f5F0vT+h2+lPGBQuSeD3Mfx7P3NSJfCydir3YGOtwQ+aJbPgxL0b5QpKNcd5MCTbAMPZPie2FSTjIpuKSbYJX4Sw8c8xZlGSKbegMNsavf77uQjNCsA6xYPIPesxIfBfr5Al8lGaE60PJ6mJL3NKnYx3xHob79JjsY8CycDfE5WK7EQu3yn24T8tDPjlkjb7PWKYdMsQmbBaWYdOYGzsRzwJz1pRY8aXABzHGhOYfJK44uj06/yRJxecCRpS0FPnQJt9OV/1xbjZGclMRTGzGDvbHuxOa+h0x+afZkrAO88Nj8cg2Y22pNd6VtliGT3m2cTWlOdJzTcLQQAY6XQ4gob83ixuN0bRXHKO9KhyxbBNuJ01xFps+kGytnf/sIk2mCwzKBEHEX+jiudeVQGfdLq6WraChYhVRRStxSjZlW50dOxoXYHXCkMKSYLS1cXH3ebIoywmGooTiJ4YzdFrgFLqhMPp7ROTWrMJRSNl9iV/zIqxPGJErcUWT5Ulr3jrUBdvQ1id99VhRs8we7oUJHPsbQ71H6OvaK/zfBi6kObDw/HT8NYsJaHMREmdEZX0idzqK6bujoblgC8r8rY8fp0piBx3HBfYypA1goM2XgdZdD7ir2EJHyXKuVflRpE5mScosAtpdONC1XBidMVc6KoRR3+W2Ng9llheqIr9/Ft1Up+opU2zQNR1Ap9xJV8kK1NL3UUmsHmLJ9ep9QlCqKG4LwkU8W5C4I7rlgZXIhCtXc4QAtaDKWoZa7j9yOBqTLNDV+NIj90RT4E1vl5zBvjKBHAGpIBELxZIfiYI63fn88nx2/OREW2e68H85KGQLURfvf7yI0ojX6xNMGCzfSqt4Dt2t6Qz2JwrjOCMQIyAEglM0dQRxJOszXFNns0e7HLPvJ1FWupl7d6WoLrkK3fg+Oeq1cYb0lnijTJlH3+0idP3RMHB8GNLfvFkab8X2BmcWn7dk9y9OdCn8GOw5S7N8LdorSWtGlID/q7/HGtBdtJ6Wwq8ZvC2BnnCB4EeoW/wRyVyZF2XCslQbYUvMR6n2YUC9G02uI5rywCd3I8zllcpoPa7letGtSWOoMxI6RQJBj0iXr8ZF2NC2h40JFC+krMob3Y1ABhq2UXN2AprqpzgTcO618qjRaGTODHTXoGsLhNbdw8jI82JTpCWiM3Mov+TM9ZKltF92pDXTnsZ0t6dfQ79GvU1Tpjt05YHSj6GGb+ir3UhP5RfcKvWgSvoh2Uk2KDIcUGcsoTFtMfVSNxoubQBV9ptPLao4MwFtpYie2r3cknvQmeeMNtuJZpkjCskC6sR21ElcUORtRlMRSltjiuNzHbnK2Ml01ESiuriAWiFR1YkW1F1ciqrQl9bqFzzTwzuaSGWcCc3lR9EqLpiN+j++PwBbsefO+2FUcAAAAABJRU5ErkJggg==";
const viewInfo = "data:image/x-icon;base64,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xP8QPfn/ADP//xA9+f8AM///r5++///Rov//0KH//9PA/11BQe0AAACDAAAAEgAAAAAAAAAAcnJy//fo2v+/rcH/IEby/6+lyv/fwLX/ED35/yBG8v/vyKr//9Gi///Uwv9fRETtAAAAgwAAABIAAAAAAAAAAHJycv/4693//9au///WrP//1av//9Sq/4CD1P8AM///gILR///RpP//1cX/YUVF7QAAAIMAAAASAAAAAAAAAABycnL/+e3i///Xr///1q7//9as///Vq///1Kr/IEby/wAz///fv7L//9fI/2NISO0AAACDAAAAEgAAAAAAAAAAcnJy//rw5///2LH//9ev///Wrv//1qz//9Wr/7+sv/8AM///n5bG///Xyv9mSkrtAAAAgwAAABIAAAAAAAAAAHJycv/77uL//8yZ///Mmf//zJn//8yZ///Mmf//zJn/z6+s///Mmf//z8P/Z0xM7QAAAIkAAAASAAAAAAAAAABycnL//Pz8//////////////z5///58f//9u3///Ln//3u4P/759P//8Sz/2pOTu8AAACJAAAAGAAAAAAAAAAAcnJy//39/f///////////////////Pn///nx///27f/RmVz/0Zlc/9GZXP+6cg3/AAAAMAAAAAAAAAAAAAAAAHJycv/+/v7////////////////////////8+f//+fH/0Zlc/9GZXP+6cg3/AAAAMAAAAAAAAAAAAAAAAAAAAABycnL///////z8/P/5+fn/9/f3//X19f/y8vL/8O7s/9GZXP+6cg3/AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAioB2/5KFef+Pg3j/jYB2/4t/df+JfHT/hnlz/4R3cf+6cg3/AAAAGAAAAAAAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAQAAwAMAAMAHAADADwAA";
const remove = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAOLSURBVDhPNdJrTFt1GAbwM53xiyaaCAlJV7dummic8YYfNLpkSuo3dSOxM45hKtqMViCb4JybRIyUbAzDksnQ0hu0A9YB6YABtuta2lLKoOtgo+MyWgqsXalwCm1HL49vu/gmvy/nnOc557z5M7VS6bNnGv98q0HWyW9o1h5quKA4elHZe0LVbm7QXjJeqamRCuVyuUiv11c2NTUVFhQUvMAwzHbyeNSaS380jkTi5+yJtHIsjfZxoIcMuQD7JNChcwRn7oXS6TRgMpm8HA7nI4o9T7ZlC1RKZWWY3cD5m0mcsaYgG45DYWCh7g+hrXsFpuEQgkEgHE7jwIGD1ynyHeGSJzJ5pqysLH9+Znrr2vA0jlf3orpGj/r6IchbrOjQOuEa8yC+HkTA74NEIvbk5uaKKZZHHn+BWCzec9vtjt1fWoXdtYi1BwEEAiF4lwLw+JZxdXIF1QNelPcsoPibijkul1dFsR3kyWxBVVXVbuM/A1HbrWlU2IFfnQn8OLwF0fUkPuuO4fDFKTT1+XDZuILGxkG2qKjWwePl8yn6DNnGnDrxA+83rTUq7V9EpRkoGgBEJtKXRG2rG0H/Q0RZYG4GGKfl9tH18vIrvp073/g4W3KqsoL3rXoi+nknC40b+MsRhdo8hxaNE+HAKjKztga4ncBVPaBSA3J5khZ6MrPQ15my7yW8Qaszqr8XRZd7E5u6r5G48B4sSi3YTSCRoIYIMGtk4byRQosc0FORVGqKUcERprRUzHOOWKPBYBj62Qh6Fw5jVPMurrXZcHMCmJ8D7k/50awexJhzFU7a0ahzC21t40kqqGFEIhHPYjZHff4QjN4ISpcP4rUeLmS6EYw5gFFyy76Mrm47/Avr2NiMg92Io1VjSlDBOaakpIRnMBiiXt8DOJbWsd/yJp5WMDguk8PQDyiUwGAP4BpKIka/8v8UF/+0SAW1jFAo3N3d1fVoYmIStx+u4SXdLuzqeAXC5r/RKqMCBXBZBxiMyJ7IzFgsU6m8vJeHqEDECASCHSqVcn1y6i7YFHCH9cEbeQTZjTBO/25Ld7bHYLMBHg8QCqUpfCe1d+9+F4XryQdMTk7OU3w+/8u6urpZrbb939M//7IkEBy6+/Y7+Vbui3v69n341YhIdHb+2LHz/sJCiYfDeTXz5rPkU5JLsmf6ObKPSMhJUk6OkMxDn5AvyFGSuV9E3icUZrb/B8LtcGMJbZn4AAAAAElFTkSuQmCC";
const control = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMkSURBVDhPZdJ9TMxxHAfw33WVaDt3pFjs2LCO3EJZrY4UucplOSF5OsXZPC2V0zLyLKO5yzNrZiNDzeOxOKE6nBPHzWWFHlWXWq7c1ZXePpdltT7b64/f9n5/fr99f1+mf+aGhrgsiY0aHTh7xqxoSYR0ZaJMIZVvvyZNyyr1F4XvowiPOPeFB86CyOiEjXsO3ko8dL5Mll3QLM1+2rXw5Fv4HfwIbooJzls+gx+wWOeIEm5faeDsUOZ9FWbVwVVuAJOgAyMtARNbBO6a5xBnvEbQbj08hVHVFJWTcYTl6P2fZemXDNwkHYKTi7H5tAHn7lfiRVkjqpps6O4FcgqbwBVE1FE0mYwngxeI5VmvF+19D3unHf1DPfw0G9FYX4zj6jbwBBENFN1Jhi5YsH7/s7A979Hd3dNXtnRSuQuo/HQDVTV65Gg6MEYQaaZoKpkQHK8Yr+KPSsp0YvzpeRgTsmLnw0BFGdosXbD9AZqtQK2lB0bdGXxttUL52Axnn1Vm1qTwHKGi5Orpc9dbDPF+UI12VtOCaUxQ7OZ8322vUGu2otVqQx0t+FJjgqEoFbpmYNfNGkiOaHvOatuh0nYiUVnYsSnAv8zH3f0CLZAwc6JluVPkxTDVd6KyJAWfTU9h/JAHXaECBy7dQKbajJw3dgTvK21jByu0TryJuVQ8SpKIHzN74XIVX6ZB6RcrvjeU490dCQy3RcjTFCJNqcSGi0aMDM1oZ1zc71DhMFlJAog3GcHMnBdzwHv1Y6jftaCiHdCb9NAVxOBuhR0JL4F09W94+6/9xWKxTlFhLvEgw8i/vyEULVJ4xD3A9ReNMP4ESmqBokoLNNXAEQOwJr8bXkHJNlcXlxMUn0qc+or94xsi3s6JycflJ/Uo7wC0DcC9CiDr0S9IMnXwicvt9RaEmdlsp2MU9yGDF0wPDNvgFnUTiivfcPzuDyzJKMa0pRd6vYTxllFjJ5dzOBwNlR0n7ji0oRdJ4DdH7BG6t9ZTKPvB44tqeF6TjVR6wmazHaedSdaRUDKJuJEhM5w4btU2kk62kngynzg+2ZOMIGwy+O0Mw/wFjSehlD+JWOoAAAAASUVORK5CYII=";
const network = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANoSURBVDhPZZN9TBRkHMcfA3T9wSabLe/UutnrxtyU1oJDiMw5GeofRJgXahouwzemrrOUlZLV5DiQt07ohZdjHEKEB3Ei43hHuDtAU8Dj8HgrKk4Q2KjNNT89R7c11nf77vdsz77P7+37CC8csLLg1+bCbyavzKa6stjXtZ9NpryOF77s36USUcuNxrqohvq+RKt1MLuy0tZmMDTNJu7PfDNYBAcsio/1nriVMZbM9YUqiqZyye1LocRu5cebozQ22jGbOykubeLr0mbyGwZIr7nHtvBks9Jf/Zo41t5RuKPpRVJd+zB6crg6Uc7w8AgZpXXk1tkwOu5zY3IG+2NofQQ/PISc+4+IjU51KQJCY0VIztjsc0WHiW/fwIc9ESTf/o6Ou+N8ZpsmcwxKpsA8D5YFqJ6Dwj9ANwJv70wblxUcFy9fHGT5hXJUZc8QXPU8ytJRPq+fRNfl4bwTLstHCibh+98hX0b9KKQMwoGPfnqo8Av7VKhOdSMO2RFnenlCt41l+mfZml1FXttvHL8FZwcgdQguuuCCjB/3w9E+0Jy0zCr8wwxCdbTZImKuIfY0IZLOIrSCoKTDFFvH0XRCoh2O9P4rSpLxoA12t0NC7gSyhRIRkv5zZGB0xV9+kUYCYr4iMGELy+S5sMTG1gbY2QRvtUJcG8TKuMMK26//TeIlF7KCNuHd5eotGQfWv9s4v3lvJaF7qgnXNPPFZTuRZXO8WgPqOtgs+UHDn5w3jaM9bVl4/ZVPhhT+6vpFIz0lop5U+IW+sTL4VEWQ6lBn0Jr3ut6Ju+SKLnpA6LXHpHUskH/VjVbbjUbTyKb1u+/I7Nmr/UP3Lj7ghbeStSvC1sqLsBBVfMy3V6w3CowD1NS4KCu7TVZWH8nJjkUmxKf/smHNroNPC3WQT/4fvNatrektnpubw+l8wMzMDENDbunGfvT6HnQ6BxkZLWhPGnuUAREv+WRLYTbbZqenp5mfn8fj8UhnumltvUdt7R1MJgd5eS2cO1M+rfRTn/NJliJTX61zOoeZmJjA7R6hv99FS8sAg4PDsp1mDIY2aeWUMaWcg0+yFLKNwNjt2hx9mmnKYrHJOXRTWXlTZm7k9ImCmYiN79+VG6iQPjjik/wf60T4KmWAOs7rNu++Jbt9bJHM9H6kdSJ81T9StzGUlLxGXgAAAABJRU5ErkJggg==";
const document = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAGSSURBVDhPlZPfK0NhGMfPktRSSklJaSUy0uJG7vwVbqRcmJYfLVJ+NKHWSvOzkaOllYSwJmYa2hJJm1JcKSVXshshotbX+zxnm43tNE99Op3zfr/f87zPeY/0u/ocp8hEiw8QEp1Ay+I0pTHPBJGpKCAW0iBIDQnL9Qgt1qHLfoSvKLB3mwo9M6xFEwjLTwiZ42Wy+fDyibSEHhVII2wjAl2SWWbax3bw9P63gzi0Rhphdgj0ErWNj1ngbYpps2zj4RWqkEaY5wXV0sWCAYhYQZ0QrYMb8Pj3VSHN7mgJhTRJ545a4H6IzVR3kWe+qhVpVsxaZQ5nczXATU8sQMZh4JIFbrHfdNAaaVzdecocTqargLCRP2FygBqkWe7MVeYQnKzkAO7kHwFOU44ScDxRzgEBe0UiIBuWOjRKgN+m44ADaxkH0Dyutpozcu1qZJ1slJQZiNJ5x0v5s3gsxXAPF2FzoBDr/QVY7c3nadPAaM9O0Ta9OWb2Cug08nmmc003dDiyhfTk46IQ+k31/0DoJe03D2xqsdaJ3cEAAAAASUVORK5CYII=";
const folderSmall = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFzSURBVDhPrZJPKERRFMbvm5dkUkpJIRpEJInNZGtta2s3kkhqSkRDJpE/0ZCRNCVFSmpMpBGpSTI7lhZWs7GwUew+9zs3jd5Mz0w59fV6753zu+d856r/DsuhwiMd7cHjTjcetrtwH+mE/uTT8srPv4LFzrhbbyPEr0WIs7Nsd9niqEPA9XIzrhZ9uFioR2K+DvFQDc5mqn+6KxMA28bnBvCxlqs8cTpdBdu2g7q0UctSnBlvYSATQmqzI69uV1uRXGrCZbgB53O10gmlAT5Fw/A6JYkFhT6IcTDuNZ1I4fMYjBdOH3L1lRqUZ2y0lICIottIB2SFkkQ/XPSeHJC8/ZESArYU5yPAjKAB9MNFmXi/5O0N2wbAVRFws9JiANoPN70c90ne7pBlANwzAXRYANoPNz3FeiUvGlDGA67i9yXhnk8mK3EUrMDhRLm4TcM4M9vmySz2eDwJDZglgFfVzxe2VIRYzKsuQQivZ3sR0vnK+w1PJ+slDj8IHAAAAABJRU5ErkJggg==";
const menu = "/_app/immutable/assets/Start%20Menu%20Programs.2W0jDfPR.png";
const folder = "data:image/png;base64,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";
const folderOpen = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAUxSURBVFhH7Zd5bFRVFMbviMoiAbQKqCghFsKiBNCIsbFBdgygoGJqZJEgkCAIsskiQZTKUirIUkVpQJAitGWpLS2LQ5kutrQs0zKdqUMbh+GZ0RFkoDTDTPn8zmuBdmhLGUPiH3zJLy957879zj333nPvqHv6P8pwnax1qsOR1ap/6go1aNlE1Zbv7q/6dneUG6O2WJJHZlqT+l10ZE2HlrcYF0p3w6MZkb4h5DibdCRN9ca160bw1WiYONq+2rEFQIWb/A5cyyUmAHv5PA2PMw1zI9Q2NpUg9ExkrFW9folWA0xfq8j0NSrGHB+Wad034KwjYwrMO19wss3TpAm5vfJjHz3qv3yWhtvIt7fic6Akc6E368fBFlvqW04tdx5cJ5fB40iG9/xxwG8npxh8FgPeA3taGNjtVCJB1J8JmWstZzZN8mo3F65t5feiSvzMTEUq3yXyW+ytbYktqZMEsIZ0JvUHwIX2tqdkJzuNr7WzYKgKYD3pRm4s6K3z9YAelHekUinL1GDPme3A1R0c3Yag8V9ZxbUyA27rWJi3hyDhy4e1EwlD7NcXtCzmw9FKFrME0Uw3FyVFqiGe3zYDl7cAZV81mDLnbNj3d4d27AOUGsfV2DU3dY1UED/8XjdiZqgiWr5PHieVWZAMuHJmAe4Y4K+lDaLMPhWOzMm6BaMhl8jf5A9yDrB9weflGrjMyxH6pEqh5QTSmtwMQDNN4G/XA85FdVJmmYQL+e9AM/aBI0PM/cRGuPoDsX3Gp6sGu5a3P0+7GBJOatSTplr6OMCxEShmJqpwm15DadJz0DLG3EixpNfrKWWHPnKMHKkd20I+WU+qcNtWYcQrKpdec0kHUmNnNNLSRwMla4GCqTpaSm+mjHOt6x/CtMJCcoiYJNWPbR6f0r6So7FdyumzmQwjLcW0ugyaMQKwRgF5E3Ucxvf4Q5nXBMIacKfYWFfAAkU82ncYM1Cdos8S0oVIJa0hgy2+GyosS+H7dSw8xmFVozeT2vf5bbHN5FNKuQkF+8J9IS3ULvqMIo/ojgEyFO3s6qmwrkR5xig49/aonGcf68LVdcFh/ZjmB9nPVsyJUHZ6rCQ9yQNiGCiDOa5njr9ouT76M0nh3L4XgSurg8cynQHs5eLtK1svmR7jSRvxEsNAGQp39Mj2FSzGn/vD9NUObwHX3orgOf0RC88mrJnR/Bz7X0deJnWejIb82DbZ3lPzULIrFGXuE4CH54I7MngKp3Egr6NfL2Vi/9PIU+IjZrVJzvbsqyfnojixBytnOaAxC/8Br3UK4pY0k8KzkQwkzcWoLhkORqnv/cyAHBy4wr3rYCG5A/wls3AhbxQcB3rDEtcWiUvUpZHhKpt9zyGhpJEY1SXDgSgV5T48VD9M4PoJsM+pF2/hZLgzKiul+YeW2LZAnf/kXVXc/3llZH9ScNYSqXp9yC2FJ1CGQ6vUSsfPYVy5VDGvZrKNqlGWPxquw6/CnhCKzA1NfBtnKteHI1Thi51VKn+/icjlYz4ZRwaQ7qQ9EfN6Ry8y8G63wmGaxEOrWC/Fnsw3oe3vDduOdjgU3bg8eopyjh2k8ju2U3vYXuZV9vVMEkFklM8SMXyMPETEtM5FFyg9AHvaGyhNG6bP3+fjVSnnMKtTO7Wb378hkUTueCOJbCm5VMjKDiFyst1HxLDBptVliPtUDZ88XC1q3Uq/Rsm+XUwmkqHkJdKJPEFakcYkaLO6JFekriSMSMl8hsifkRbkrhgGSlIolUrSef0f0F01vCellPoXiVdrMa6zZZsAAAAASUVORK5CYII=";
const disk = "data:image/png;base64,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";
const dropdown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAABeUlEQVR42q2TUU7CQBCGezGP4qkkBAJWBQyiwahRiQQpiEABUVGDGh9MPMJcYPz/DotbNL7ow5d2m/1mdnamwfxDtP0s2rgVPR6J7g+NWl+0ciVa6oKOsR2Jbl6K5sH4TTSgeP8uGmPRnVughEfR1kz0/E70dGocTUQPkaDKwAgUMCPF4ato9GSCk854GggnsUGxNlzIOFXAo7qMzZkJS8a2ebefhvJe768yL4f1NR8W9U3ScHPl2ij1vt4TmbfKjC7r2npumZkiBcLvO976m8wNDl/2v6dk9jHJNDX8jQdxer2FEl325LbZfL/GVcEXl6DmMpIGYdt6uYovVrEmTg4HmLbfZBfAiT/Khcgmh6PnU0eP6zeoD+TiNHnUHKLcIHthg8AAhIIP5XBi5BEwg6xZ1FyM/kPmxDBAPbano7qQwpHBI1PeQL1F3FWQaaB3WJQHNrM+pYG1Jdc3WCvFLOot4J8Oxi8QW8jesX80RccuxsGjMiPFGN4nW0p3ESpgWoUAAAAASUVORK5CYII=";
const pullup = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABTUlEQVR42r1US07DMBDNdVixZMMBcgyOwTV6CBbZoYLUqojSuKUIFj1AVSmlrUBKk9KGEOfnGE9So4Cd2giJkUaxo8zze28mNoz/iA5anP0ZpLcHQQ/OF9h6E1quF5b7x8nqWI+N7ZzzdYRTKgtCCloeOpgiLVAoUMV2h+mNPbMOAmU5EQqN0wspIJNeKmnfzkWW4IsMiGc9CkaeFJVkIfqjmZWkuRTo55qDgQpe3x275jfAJiDZO2CVZIS6fmhK2TWZLfMsZ02KmRI+MtrmN0n8iDPa2ElvEyIdz0AisAqilCpmrDr5kGfg1TsD8t6i1vDJET3rDJ5bdbk8gQVP2OOkYuTtMNL+R6MkKz2BJ18DGz/AwXqLhcnvjn1TCeoH8RQSmIAs2TeX/eWJNsshuykg72o3ya9YXdkLS3UIMBImXxXX9suR0LD7V4HlJ2GeRKYqB6UhAAAAAElFTkSuQmCC";
const windows = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAWCAYAAABDhYU9AAAD40lEQVR42s3X+U8UZxzHcf+PAmoJIq5gTyDai9ZWbcB6VLCnbSKVSkooBMolQgso1MoNatMotAWxkIIstpxyXwK7gFwKLlc4dwE5ZNnr3Yel5R9oBniSSeanyWu+n8/MM7ONLby2/d8LGPQGtOpJtAsLWwNnMpl4lneVlewADAlHIM4Fo/de1P5ujMmz0GtXNg+nezqDKfYdSHCBtMMC9zac38Oyx06euD7HYGYio9MjGAyGjcetKEoF7N01XPr7EHkAztoy/+F2VAKnbqjg21+O43P9GCWKPKbmplhe0TO1ME7zWCE1AwUS4nJjIOU9SBLTSxO4oFcwnbFBfcKKvqM7GZ8c5lTcbk7H78IzQ8Z3JS8R2eBIjMKJS+1OlPb8Lg3OaDSiS3SH5IOQKoCJh8DXAcMn1ox/YMlAoDtV3XJOxtrwadpuvslzIKLekeg2ZzMsqtUR1VS/NDjd+CBcERNLEj274bp2/vVa34aPWjCWlUJSUTCnftzFFz/b4X/vBX5odlqfWmyDq+iiURqctvkuxkwP5pKOockNR3PTj3lvR5bcd4i+WTDb3Y5n6ht4rEaaKSO4/GWiW8XUlGu4rPYI6R4IlWqClpo2ChRz3Kqf4WbFEHXKYaYrChkI/RzVeB8nRKQfJ9tyPsee8NpXifk30tWj8clf0uAWtUa8cibwK9ETUmUSkS1xMl6JS6Ac9/AC2h9PMij6dC7dhTM37PAt2Mf3TauROnO5Q/TtwX7U89PS4JoHFgkoXiag3MSFWvDOVeN2uZE3/fNxOvcrRXX9tMtjGHxYRXlHAWnVfsTXfUZyw1lyWq/Q0ltpfoFLgrtVpzFPLPC+wNWY+DJjiCORlbzm8wfOX2UwOjbJ3xetqY6yYiD7MEud0SyrUtGqLrDScwhNzzVpXsJGccdhcjVBVRBcDSEVOk6n9XAwtJj93tl8dDGfid4y7oVY0BRnhfq2NTTJ4OFe6JVh6tmDZkQhDW5iTodv4ZyYGuZI/YsWOf5TK28FFOLs9Rvxt5voLAynOMyC9oTtLN21AYWAdYujT8ZsoyN6vUEaXHn3PKFVOsLqxObQZSS4eA63Sw287puHo2cG9R2jVF51oTzCkkfXdqAvtYUOe+iRmXFqpY90e2tZp5r0qkHu1KuoVo5Q0TZMSn4nrkF/csArE83kEPIQS2qiLBnNeB5TrZ2I1N4MM+MeZW/899yKzkCtYogRZQFFwWt9m7kj+vZAth6prlPG0+nBjcetI7XP6Cq7TnOyMwtyEWnXixj7HNA07uNxpZfYk02bh/tv6XU6xvpbGO4sZKT7PvOzms37TN/S/xBSrn8AV1g6y44WVc0AAAAASUVORK5CYII=";
const pulldown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAE6ADAAQAAAABAAAAEwAAAAAysn64AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABt0lEQVQ4Ea1UzU7CQBDeFjQejBeN+gRGD8Z48qL3PoMn9Cl4Dd7AiybcNCEpkYi0KEYPPoAhaUSjCVB+amkLtKw7hd2061qNcchkfnbm6zezpQhxot6+Z7gUKmhvW3wuMS7Wmsp5+WUvsYgcFrRGPrGmWDMVUcH1nZGpPr7ugIrO+VwaEp7ndPkDiLc313YlWTpGkrRuWh5aXlrYENWxnIhVq+fmTcu1PpwRHnhj7AynSn3W/JNj9l3dIiDu0MdjP8DBZMIUYqoUR60856jPbPXBUNpdJwdshuMAo/3TUHFEaI7g4yDAmDWLHGDkjfyQCWDQZt6n+GbH1qM4UjSAncynZZSSZbLz6Yl0cMZKcPWQ+eD4wQTNpVMxjLCg2bYzwIoU0AczCwy/kxg6DZqmrcCuYOEg0REpkDBHAcDCm09juKkZ1hdAEdCQTFK+qbN/RGxeYCUh8otkk3bWMgdHqyuLJ5RMaC+ujPBWyN6ydKSoFe0MpoiB8EFJq+d7fTeKI/QDckl8rzAuVZ5CltAgEscdMSBVM7JCED55P/tSwCvT6thsyTr5kkDtpd4ILfh/FvU/QH7z9E+wWPbmdKOOnAAAAABJRU5ErkJggg==";
const floppyDisk = "/_app/immutable/assets/7.CAbkFJfW.ico";
const css$4 = {
  code: ".main-container.svelte-11ohjq8.svelte-11ohjq8{height:100%;width:100%;position:absolute;color:black;display:flex;overflow:hidden;flex-direction:column;background:linear-gradient(to right, #edede5 0%, #ede8cd 100%)}.toolBar.svelte-11ohjq8.svelte-11ohjq8{display:flex;align-items:center;height:24px;border-bottom:1px solid rgba(255, 255, 255, 0.7)}.options.svelte-11ohjq8.svelte-11ohjq8{flex:1;height:23px;border-bottom:1px solid rgba(0, 0, 0, 0.1);border-right:1px solid rgba(0, 0, 0, 0.1);padding:1px 0 1px 2px}.windows-logo.svelte-11ohjq8.svelte-11ohjq8{height:100%;border-left:1px solid white;border-bottom:1px solid rgba(0, 0, 0, 0.1)}.function_bar.svelte-11ohjq8.svelte-11ohjq8{height:36px;display:flex;align-items:center;font-size:11px;padding:4px 3px 4px;border-bottom:1px solid rgba(0, 0, 0, 0.1)}.function_bar__button.svelte-11ohjq8.svelte-11ohjq8{display:flex;height:100%;align-items:center;border:1px solid rgba(0, 0, 0, 0);border-radius:3px;cursor:pointer}.function_bar__button.svelte-11ohjq8.svelte-11ohjq8:hover{border:1px solid rgba(0, 0, 0, 0.1);box-shadow:inset 0 -1px 1px rgba(0, 0, 0, 0.1)}.function_bar__button.svelte-11ohjq8.svelte-11ohjq8:active{border:1px solid rgb(185, 185, 185);background-color:#dedede;box-shadow:inset 0 -1px 1px rgba(255, 255, 255, 0.7)}.function_bar__icon.svelte-11ohjq8.svelte-11ohjq8{height:22px;width:22px;margin:0 4px 0 1px}figure.svelte-11ohjq8.svelte-11ohjq8{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10px}figure.svelte-11ohjq8 img.svelte-11ohjq8{vertical-align:middle;align-items:center}figure.svelte-11ohjq8 figcaption.svelte-11ohjq8{text-align:center}.address_bar.svelte-11ohjq8.svelte-11ohjq8{display:flex;align-items:center;padding:5px 2px;height:20px;font-size:11px;border-top:1px solid rgba(255, 255, 255, 0.7);box-shadow:inset 0 -2px 3px -1px #b0b0b0}.address_bar__title.svelte-11ohjq8.svelte-11ohjq8{padding:5px;color:rgba(0, 0, 0, 0.5)}.address_bar__content.svelte-11ohjq8.svelte-11ohjq8{display:flex;align-items:center;flex:1;height:100%;border:1px solid rgba(122, 122, 255, 0.6);background-color:white;position:relative}.forward.svelte-11ohjq8.svelte-11ohjq8,.back.svelte-11ohjq8.svelte-11ohjq8{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.address_bar__img.svelte-11ohjq8.svelte-11ohjq8{width:14px;height:14px}.address_bar__img.svelte-11ohjq8.svelte-11ohjq8:last-child{width:15px;height:15px;position:absolute;right:1px}.address_bar__text.svelte-11ohjq8.svelte-11ohjq8{position:absolute;left:16px;right:17px;white-space:nowrap}.address_bar__go.svelte-11ohjq8.svelte-11ohjq8{display:flex;align-items:center;padding:0 18px 0 5px;height:100%;position:relative}.address_bar__go__img.svelte-11ohjq8.svelte-11ohjq8{height:95%;border:1px solid rgba(255, 255, 255, 0.2);margin-right:3px}.content.svelte-11ohjq8.svelte-11ohjq8{flex:1;border:1px solid rgba(0, 0, 0, 0.4);border-top-width:0;background-color:#f1f1f1;font-size:11px;position:relative}.inner.svelte-11ohjq8.svelte-11ohjq8{display:flex;height:100%;overflow:hidden}.left.svelte-11ohjq8.svelte-11ohjq8{width:180px;height:100%;background:linear-gradient(to bottom, #748aff 0%, #4057d3 100%);padding:10px}.left__card.svelte-11ohjq8.svelte-11ohjq8{border-top-left-radius:3px;border-top-right-radius:3px;width:100%;overflow:hidden;margin-bottom:12px}.left__card__header.svelte-11ohjq8.svelte-11ohjq8{display:flex;align-items:center;height:23px;padding-left:11px;padding-right:2px;cursor:pointer;background:linear-gradient(\n			to right,\n			rgb(240, 240, 255) 0,\n			rgb(240, 240, 255) 30%,\n			rgb(168, 188, 255) 100%\n		)}.left__card__header.svelte-11ohjq8:hover .left__card__header__text.svelte-11ohjq8{color:#1c68ff}.left__card__header__text.svelte-11ohjq8.svelte-11ohjq8{font-weight:700;color:#0c327d;flex:1}.left__card__header__img.svelte-11ohjq8.svelte-11ohjq8{width:18px;height:18px;filter:drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))}.left__card__content.svelte-11ohjq8.svelte-11ohjq8{padding:5px 10px;background:linear-gradient(\n			to right,\n			rgb(180, 200, 251) 0%,\n			rgb(164, 185, 251) 50%,\n			rgb(180, 200, 251) 100%\n		);background-color:rgba(198, 211, 255, 0.87)}.left__card__row.svelte-11ohjq8.svelte-11ohjq8{display:flex;margin-bottom:2px}.left__card__img.svelte-11ohjq8.svelte-11ohjq8{width:14px;height:14px;margin-right:5px}.left__card__text.svelte-11ohjq8.svelte-11ohjq8{font-size:10px;line-height:14px;color:#0c327d}.left__card__text.link.svelte-11ohjq8.svelte-11ohjq8:hover{cursor:pointer;color:#2b72ff;text-decoration:underline}.right.svelte-11ohjq8.svelte-11ohjq8{height:100%;overflow:auto;background-color:#fff;flex:1}.right__card__header.svelte-11ohjq8.svelte-11ohjq8{width:300px;font-weight:700;padding:2px 0 3px 12px;position:relative}.right__card__header.svelte-11ohjq8.svelte-11ohjq8::after{content:'';display:block;background:linear-gradient(to right, #70bfff 0, #fff 100%);position:absolute;bottom:0;left:-12px;height:1px;width:100%}.right__card__content.svelte-11ohjq8.svelte-11ohjq8{display:flex;align-items:center;padding-right:0;flex-wrap:wrap;padding:15px 15px 0}.right__card__item.svelte-11ohjq8.svelte-11ohjq8{display:flex;align-items:center;width:200px;margin-bottom:15px;height:auto}.right__card__img.svelte-11ohjq8.svelte-11ohjq8{width:45px;height:45px;margin-right:5px}.right__card__text.svelte-11ohjq8.svelte-11ohjq8{white-space:nowrap;height:100%}",
  map: `{"version":3,"file":"MyComputer.svelte","sources":["MyComputer.svelte"],"sourcesContent":["<script>\\n\\timport HeaderWindow from '../../Window/WindowDropDowns/HeaderWindow.svelte';\\n\\timport menuItems from './menuItems.js';\\n\\n\\timport go from '$lib/assets/windowsIcons/290.png';\\n\\timport search from '$lib/assets/windowsIcons/299(32x32).png';\\n\\timport computer from '$lib/assets/windowsIcons/676(16x16).png';\\n\\timport back from '$lib/assets/windowsIcons/Back.png';\\n\\timport forward from '$lib/assets/windowsIcons/Forward.png';\\n\\timport up from '$lib/assets/windowsIcons/up.png';\\n\\timport viewInfo from '$lib/assets/windowsIcons/view-info.ico';\\n\\timport remove from '$lib/assets/windowsIcons/302(16x16).png';\\n\\timport control from '$lib/assets/windowsIcons/300(16x16).png';\\n\\timport network from '$lib/assets/windowsIcons/693(16x16).png';\\n\\timport document from '$lib/assets/windowsIcons/308(16x16).png';\\n\\timport folderSmall from '$lib/assets/windowsIcons/318(16x16).png';\\n\\timport menu from '$lib/assets/windowsIcons/Start Menu Programs.png';\\n\\timport folder from '$lib/assets/windowsIcons/318(48x48).png';\\n\\timport folderOpen from '$lib/assets/windowsIcons/337(32x32).png';\\n\\timport disk from '$lib/assets/windowsIcons/334(48x48).png';\\n\\timport dropdown from '$lib/assets/windowsIcons/dropdown.png';\\n\\timport pullup from '$lib/assets/windowsIcons/pullup.png';\\n\\timport windows from '$lib/assets/windowsIcons/windows.png';\\n\\timport pulldown from '$lib/assets/windowsIcons/pulldown.png';\\n\\timport floppyDisk from '$lib/assets/windowsIcons/7.ico';\\n\\n\\texport let onClose;\\n\\n\\t//TODO: Make close work from the dropdown\\n\\tfunction onClickOptionItem(item) {\\n\\t\\tswitch (item) {\\n\\t\\t\\tcase 'Close':\\n\\t\\t\\t\\tonClose();\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tdefault:\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<div class=\\"main-container\\">\\n\\t<section class=\\"toolBar\\">\\n\\t\\t<div class=\\"options\\">\\n\\t\\t\\t<HeaderWindow items={menuItems} onClickItem={onClickOptionItem} />\\n\\t\\t</div>\\n\\t\\t<img class=\\"windows-logo\\" src={windows} alt=\\"windows\\" />\\n\\t</section>\\n\\t<section class=\\"function_bar\\">\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon back\\" src={back} alt=\\"Back\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Back</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t\\t<div class=\\"function_bar__arrow\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon forward\\" src={forward} alt=\\"Forward\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Forward</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t\\t<div class=\\"function_bar__arrow\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon\\" src={up} alt=\\"Up\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Up</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__separate\\" />\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon\\" src={search} alt=\\"Search\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Search</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon\\" src={folderOpen} alt=\\"Folders\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Folders</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__separate\\" />\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon\\" src={menu} alt=\\"Menu\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Views</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t\\t<div class=\\"function_bar__arrow\\" />\\n\\t\\t</div>\\n\\t</section>\\n\\t<section class=\\"address_bar\\">\\n\\t\\t<div class=\\"address_bar__title\\">Address</div>\\n\\t\\t<div class=\\"address_bar__content\\">\\n\\t\\t\\t<img src={computer} alt=\\"Computer\\" class=\\"address_bar__img\\" />\\n\\t\\t\\t<div class=\\"address_bar__text\\">My Computer</div>\\n\\t\\t\\t<img src={dropdown} alt=\\"Dropdown\\" class=\\"address_bar__img\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"address_bar__go\\">\\n\\t\\t\\t<img class=\\"address_bar__go__img\\" src={go} alt=\\"Go\\" />\\n\\t\\t\\t<span class=\\"address_bar__go__text\\">Go</span>\\n\\t\\t</div>\\n\\t</section>\\n\\t<div class=\\"content\\">\\n\\t\\t<div class=\\"inner\\">\\n\\t\\t\\t<div class=\\"left\\">\\n\\t\\t\\t\\t<div class=\\"left__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"left__card__header\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__header__text\\">System Tasks</div>\\n\\t\\t\\t\\t\\t\\t<img src={pullup} alt=\\"Pull Up\\" class=\\"left__card__header__img\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"left__card__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={viewInfo} alt=\\"View\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">View system information</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={remove} alt=\\"Remove\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">Add or remove programs</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={control} alt=\\"Control\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">Change a setting</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"left__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"left__card__header\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__header__text\\">Other Places</div>\\n\\t\\t\\t\\t\\t\\t<img src={pullup} alt=\\"Pull Up\\" class=\\"left__card__header__img\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"left__card__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={network} alt=\\"Network\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">My Network Places</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={document} alt=\\"Document\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">My Documents</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={folderSmall} alt=\\"Folder\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">Shared Documents</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={control} alt=\\"Control\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">Control Panel</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"left__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"left__card__header\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__header__text\\">Details</div>\\n\\t\\t\\t\\t\\t\\t<img src={pulldown} alt=\\"Pull Down\\" class=\\"left__card__header__img\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<!-- <div class=\\"left__card__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\t</div></div> -->\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"right\\">\\n\\t\\t\\t\\t<div class=\\"right__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"right__card__header\\">Files Stored on This Computer</div>\\n\\t\\t\\t\\t\\t<div class=\\"right__card__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"right__card__item\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src={folder} alt=\\"Shared Documents\\" class=\\"right__card__img\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"right__card__img-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"right__card__text\\">Shared Documents</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"right__card__item\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src={folder} alt=\\"User's Documents\\" class=\\"right__card__img\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"right__card__img-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"right__card__text\\">User's Documents</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"right__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"right__card__header\\">Hard Disk Drives</div>\\n\\t\\t\\t\\t\\t<div class=\\"right__card__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"right__card__item\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src={disk} alt=\\"Local Disk\\" class=\\"right__card__img\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"right__card__img-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"right__card__text\\">Local Disk (C:)</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"right__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"right__card__header\\">Devices with Removable Storage</div>\\n\\t\\t\\t\\t\\t<div class=\\"right__card__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"right__card__item\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"right__card__img-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<img src={floppyDisk} alt=\\"Floppy Drive\\" class=\\"right__card__img\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"right__card__text\\">3½ Floppy (A:)</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.main-container {\\n\\t\\theight: 100%;\\n\\t\\twidth: 100%;\\n\\t\\tposition: absolute;\\n\\t\\tcolor: black;\\n\\t\\tdisplay: flex;\\n\\t\\toverflow: hidden;\\n\\t\\tflex-direction: column;\\n\\t\\tbackground: linear-gradient(to right, #edede5 0%, #ede8cd 100%);\\n\\t}\\n\\n\\t.toolBar {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\theight: 24px;\\n\\t\\tborder-bottom: 1px solid rgba(255, 255, 255, 0.7);\\n\\t}\\n\\n\\t.options {\\n\\t\\tflex: 1;\\n\\t\\theight: 23px;\\n\\t\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tborder-right: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tpadding: 1px 0 1px 2px;\\n\\t}\\n\\n\\t.windows-logo {\\n\\t\\theight: 100%;\\n\\t\\tborder-left: 1px solid white;\\n\\t\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n\\t}\\n\\n\\t.function_bar {\\n\\t\\theight: 36px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tfont-size: 11px;\\n\\t\\tpadding: 4px 3px 4px;\\n\\t\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n\\t}\\n\\n\\t.function_bar__button {\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t\\talign-items: center;\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0);\\n\\t\\tborder-radius: 3px;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.function_bar__button:hover {\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tbox-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);\\n\\t}\\n\\n\\t.function_bar__button:active {\\n\\t\\tborder: 1px solid rgb(185, 185, 185);\\n\\t\\tbackground-color: #dedede;\\n\\t\\tbox-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);\\n\\t}\\n\\n\\t.function_bar__icon {\\n\\t\\theight: 22px;\\n\\t\\twidth: 22px;\\n\\t\\tmargin: 0 4px 0 1px;\\n\\t}\\n\\n\\tfigure {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmargin: 10px;\\n\\t}\\n\\tfigure img {\\n\\t\\tvertical-align: middle;\\n\\t\\talign-items: center;\\n\\t}\\n\\tfigure figcaption {\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.address_bar {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 5px 2px;\\n\\t\\theight: 20px;\\n\\t\\tfont-size: 11px;\\n\\t\\tborder-top: 1px solid rgba(255, 255, 255, 0.7);\\n\\t\\tbox-shadow: inset 0 -2px 3px -1px #b0b0b0;\\n\\t}\\n\\n\\t.address_bar__title {\\n\\t\\tpadding: 5px;\\n\\t\\tcolor: rgba(0, 0, 0, 0.5);\\n\\t}\\n\\n\\t.address_bar__content {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tflex: 1;\\n\\t\\theight: 100%;\\n\\t\\tborder: 1px solid rgba(122, 122, 255, 0.6);\\n\\t\\tbackground-color: white;\\n\\t\\tposition: relative;\\n\\t}\\n\\t.forward,\\n\\t.back {\\n\\t\\t-webkit-filter: grayscale(100%);\\n\\t\\tfilter: grayscale(100%);\\n\\t}\\n\\n\\t.address_bar__img {\\n\\t\\twidth: 14px;\\n\\t\\theight: 14px;\\n\\t}\\n\\n\\t.address_bar__img:last-child {\\n\\t\\twidth: 15px;\\n\\t\\theight: 15px;\\n\\t\\tposition: absolute;\\n\\t\\tright: 1px;\\n\\t}\\n\\n\\t.address_bar__text {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 16px;\\n\\t\\tright: 17px;\\n\\t\\twhite-space: nowrap;\\n\\t}\\n\\n\\t.address_bar__go {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 18px 0 5px;\\n\\t\\theight: 100%;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.address_bar__go__img {\\n\\t\\theight: 95%;\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.2);\\n\\t\\tmargin-right: 3px;\\n\\t}\\n\\n\\t.content {\\n\\t\\tflex: 1;\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0.4);\\n\\t\\tborder-top-width: 0;\\n\\t\\tbackground-color: #f1f1f1;\\n\\t\\tfont-size: 11px;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.inner {\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t\\toverflow: hidden;\\n\\t}\\n\\n\\t.left {\\n\\t\\twidth: 180px;\\n\\t\\theight: 100%;\\n\\t\\tbackground: linear-gradient(to bottom, #748aff 0%, #4057d3 100%);\\n\\t\\tpadding: 10px;\\n\\t}\\n\\n\\t.left__card {\\n\\t\\tborder-top-left-radius: 3px;\\n\\t\\tborder-top-right-radius: 3px;\\n\\t\\twidth: 100%;\\n\\t\\toverflow: hidden;\\n\\t\\tmargin-bottom: 12px;\\n\\t}\\n\\n\\t.left__card__header {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\theight: 23px;\\n\\t\\tpadding-left: 11px;\\n\\t\\tpadding-right: 2px;\\n\\t\\tcursor: pointer;\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\tto right,\\n\\t\\t\\trgb(240, 240, 255) 0,\\n\\t\\t\\trgb(240, 240, 255) 30%,\\n\\t\\t\\trgb(168, 188, 255) 100%\\n\\t\\t);\\n\\t}\\n\\n\\t.left__card__header:hover .left__card__header__text {\\n\\t\\tcolor: #1c68ff;\\n\\t}\\n\\n\\t.left__card__header__text {\\n\\t\\tfont-weight: 700;\\n\\t\\tcolor: #0c327d;\\n\\t\\tflex: 1;\\n\\t}\\n\\n\\t.left__card__header__img {\\n\\t\\twidth: 18px;\\n\\t\\theight: 18px;\\n\\t\\tfilter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));\\n\\t}\\n\\n\\t.left__card__content {\\n\\t\\tpadding: 5px 10px;\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\tto right,\\n\\t\\t\\trgb(180, 200, 251) 0%,\\n\\t\\t\\trgb(164, 185, 251) 50%,\\n\\t\\t\\trgb(180, 200, 251) 100%\\n\\t\\t);\\n\\t\\tbackground-color: rgba(198, 211, 255, 0.87);\\n\\t}\\n\\n\\t.left__card__row {\\n\\t\\tdisplay: flex;\\n\\t\\tmargin-bottom: 2px;\\n\\t}\\n\\n\\t.left__card__img {\\n\\t\\twidth: 14px;\\n\\t\\theight: 14px;\\n\\t\\tmargin-right: 5px;\\n\\t}\\n\\n\\t.left__card__text {\\n\\t\\tfont-size: 10px;\\n\\t\\tline-height: 14px;\\n\\t\\tcolor: #0c327d;\\n\\t}\\n\\n\\t.left__card__text.link:hover {\\n\\t\\tcursor: pointer;\\n\\t\\tcolor: #2b72ff;\\n\\t\\ttext-decoration: underline;\\n\\t}\\n\\n\\t.right {\\n\\t\\theight: 100%;\\n\\t\\toverflow: auto;\\n\\t\\tbackground-color: #fff;\\n\\t\\tflex: 1;\\n\\t}\\n\\n\\t.right__card__header {\\n\\t\\twidth: 300px;\\n\\t\\tfont-weight: 700;\\n\\t\\tpadding: 2px 0 3px 12px;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.right__card__header::after {\\n\\t\\tcontent: '';\\n\\t\\tdisplay: block;\\n\\t\\tbackground: linear-gradient(to right, #70bfff 0, #fff 100%);\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 0;\\n\\t\\tleft: -12px;\\n\\t\\theight: 1px;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.right__card__content {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tpadding-right: 0;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tpadding: 15px 15px 0;\\n\\t}\\n\\n\\t.right__card__item {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\twidth: 200px;\\n\\t\\tmargin-bottom: 15px;\\n\\t\\theight: auto;\\n\\t}\\n\\n\\t.right__card__img {\\n\\t\\twidth: 45px;\\n\\t\\theight: 45px;\\n\\t\\tmargin-right: 5px;\\n\\t}\\n\\n\\t.right__card__text {\\n\\t\\twhite-space: nowrap;\\n\\t\\theight: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const MyComputer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClose } = $$props;
  function onClickOptionItem(item) {
    switch (item) {
      case "Close":
        onClose();
        break;
    }
  }
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  $$result.css.add(css$4);
  return `<div class="main-container svelte-11ohjq8"><section class="toolBar svelte-11ohjq8"><div class="options svelte-11ohjq8">${validate_component(HeaderWindow, "HeaderWindow").$$render(
    $$result,
    {
      items: menuItems$2,
      onClickItem: onClickOptionItem
    },
    {},
    {}
  )}</div> <img class="windows-logo svelte-11ohjq8"${add_attribute("src", windows, 0)} alt="windows"></section> <section class="function_bar svelte-11ohjq8" data-svelte-h="svelte-q8ht42"><div class="function_bar__button svelte-11ohjq8"><figure class="svelte-11ohjq8"><img class="function_bar__icon back svelte-11ohjq8"${add_attribute("src", back, 0)} alt="Back"> <figcaption class="function_bar__text svelte-11ohjq8">Back</figcaption></figure> <div class="function_bar__arrow"></div></div> <div class="function_bar__button svelte-11ohjq8"><figure class="svelte-11ohjq8"><img class="function_bar__icon forward svelte-11ohjq8"${add_attribute("src", forward, 0)} alt="Forward"> <figcaption class="function_bar__text svelte-11ohjq8">Forward</figcaption></figure> <div class="function_bar__arrow"></div></div> <div class="function_bar__button svelte-11ohjq8"><figure class="svelte-11ohjq8"><img class="function_bar__icon svelte-11ohjq8"${add_attribute("src", up, 0)} alt="Up"> <figcaption class="function_bar__text svelte-11ohjq8">Up</figcaption></figure></div> <div class="function_bar__separate"></div> <div class="function_bar__button svelte-11ohjq8"><figure class="svelte-11ohjq8"><img class="function_bar__icon svelte-11ohjq8"${add_attribute("src", search, 0)} alt="Search"> <figcaption class="function_bar__text svelte-11ohjq8">Search</figcaption></figure></div> <div class="function_bar__button svelte-11ohjq8"><figure class="svelte-11ohjq8"><img class="function_bar__icon svelte-11ohjq8"${add_attribute("src", folderOpen, 0)} alt="Folders"> <figcaption class="function_bar__text svelte-11ohjq8">Folders</figcaption></figure></div> <div class="function_bar__separate"></div> <div class="function_bar__button svelte-11ohjq8"><figure class="svelte-11ohjq8"><img class="function_bar__icon svelte-11ohjq8"${add_attribute("src", menu, 0)} alt="Menu"> <figcaption class="function_bar__text svelte-11ohjq8">Views</figcaption></figure> <div class="function_bar__arrow"></div></div></section> <section class="address_bar svelte-11ohjq8" data-svelte-h="svelte-yxsjls"><div class="address_bar__title svelte-11ohjq8">Address</div> <div class="address_bar__content svelte-11ohjq8"><img${add_attribute("src", computer, 0)} alt="Computer" class="address_bar__img svelte-11ohjq8"> <div class="address_bar__text svelte-11ohjq8">My Computer</div> <img${add_attribute("src", dropdown, 0)} alt="Dropdown" class="address_bar__img svelte-11ohjq8"></div> <div class="address_bar__go svelte-11ohjq8"><img class="address_bar__go__img svelte-11ohjq8"${add_attribute("src", go, 0)} alt="Go"> <span class="address_bar__go__text">Go</span></div></section> <div class="content svelte-11ohjq8" data-svelte-h="svelte-1vu4av5"><div class="inner svelte-11ohjq8"><div class="left svelte-11ohjq8"><div class="left__card svelte-11ohjq8"><div class="left__card__header svelte-11ohjq8"><div class="left__card__header__text svelte-11ohjq8">System Tasks</div> <img${add_attribute("src", pullup, 0)} alt="Pull Up" class="left__card__header__img svelte-11ohjq8"></div> <div class="left__card__content svelte-11ohjq8"><div class="left__card__row svelte-11ohjq8"><img class="left__card__img svelte-11ohjq8"${add_attribute("src", viewInfo, 0)} alt="View"> <div class="left__card__text link svelte-11ohjq8">View system information</div></div> <div class="left__card__row svelte-11ohjq8"><img class="left__card__img svelte-11ohjq8"${add_attribute("src", remove, 0)} alt="Remove"> <div class="left__card__text link svelte-11ohjq8">Add or remove programs</div></div> <div class="left__card__row svelte-11ohjq8"><img class="left__card__img svelte-11ohjq8"${add_attribute("src", control, 0)} alt="Control"> <div class="left__card__text link svelte-11ohjq8">Change a setting</div></div></div></div> <div class="left__card svelte-11ohjq8"><div class="left__card__header svelte-11ohjq8"><div class="left__card__header__text svelte-11ohjq8">Other Places</div> <img${add_attribute("src", pullup, 0)} alt="Pull Up" class="left__card__header__img svelte-11ohjq8"></div> <div class="left__card__content svelte-11ohjq8"><div class="left__card__row svelte-11ohjq8"><img class="left__card__img svelte-11ohjq8"${add_attribute("src", network, 0)} alt="Network"> <div class="left__card__text link svelte-11ohjq8">My Network Places</div></div> <div class="left__card__row svelte-11ohjq8"><img class="left__card__img svelte-11ohjq8"${add_attribute("src", document, 0)} alt="Document"> <div class="left__card__text link svelte-11ohjq8">My Documents</div></div> <div class="left__card__row svelte-11ohjq8"><img class="left__card__img svelte-11ohjq8"${add_attribute("src", folderSmall, 0)} alt="Folder"> <div class="left__card__text link svelte-11ohjq8">Shared Documents</div></div> <div class="left__card__row svelte-11ohjq8"><img class="left__card__img svelte-11ohjq8"${add_attribute("src", control, 0)} alt="Control"> <div class="left__card__text link svelte-11ohjq8">Control Panel</div></div></div></div> <div class="left__card svelte-11ohjq8"><div class="left__card__header svelte-11ohjq8"><div class="left__card__header__text svelte-11ohjq8">Details</div> <img${add_attribute("src", pulldown, 0)} alt="Pull Down" class="left__card__header__img svelte-11ohjq8"></div> </div></div> <div class="right svelte-11ohjq8"><div class="right__card"><div class="right__card__header svelte-11ohjq8">Files Stored on This Computer</div> <div class="right__card__content svelte-11ohjq8"><div class="right__card__item svelte-11ohjq8"><img${add_attribute("src", folder, 0)} alt="Shared Documents" class="right__card__img svelte-11ohjq8"> <div class="right__card__img-container"><div class="right__card__text svelte-11ohjq8">Shared Documents</div></div></div> <div class="right__card__item svelte-11ohjq8"><img${add_attribute("src", folder, 0)} alt="User's Documents" class="right__card__img svelte-11ohjq8"> <div class="right__card__img-container"><div class="right__card__text svelte-11ohjq8">User&#39;s Documents</div></div></div></div></div> <div class="right__card"><div class="right__card__header svelte-11ohjq8">Hard Disk Drives</div> <div class="right__card__content svelte-11ohjq8"><div class="right__card__item svelte-11ohjq8"><img${add_attribute("src", disk, 0)} alt="Local Disk" class="right__card__img svelte-11ohjq8"> <div class="right__card__img-container"><div class="right__card__text svelte-11ohjq8">Local Disk (C:)</div></div></div></div></div> <div class="right__card"><div class="right__card__header svelte-11ohjq8">Devices with Removable Storage</div> <div class="right__card__content svelte-11ohjq8"><div class="right__card__item svelte-11ohjq8"><div class="right__card__img-container"><img${add_attribute("src", floppyDisk, 0)} alt="Floppy Drive" class="right__card__img svelte-11ohjq8"></div> <div class="right__card__text svelte-11ohjq8">3½ Floppy (A:)</div></div></div></div></div></div></div> </div>`;
});
const File$1 = [
  {
    type: "item",
    disable: true,
    text: "New"
  },
  {
    type: "item",
    disable: true,
    text: "Open..."
  },
  {
    type: "item",
    disable: true,
    text: "Save"
  },
  {
    type: "item",
    disable: true,
    text: "Save As..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    disable: true,
    text: "Page Setup..."
  },
  {
    type: "item",
    disable: true,
    text: "Print..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Exit"
  }
];
const Edit$1 = [
  {
    type: "item",
    disable: true,
    text: "Undo..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    disable: true,
    text: "Cut"
  },
  {
    type: "item",
    disable: true,
    text: "Copy"
  },
  {
    type: "item",
    disable: true,
    text: "Paste"
  },
  {
    type: "item",
    disable: true,
    text: "Delete"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    disable: true,
    text: "Find..."
  },
  {
    type: "item",
    disable: true,
    text: "Find Next"
  },
  {
    type: "item",
    disable: true,
    text: "Replace..."
  },
  {
    type: "item",
    disable: true,
    text: "Go To..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    disable: true,
    text: "Select All"
  },
  {
    type: "item",
    text: "Time/Date"
  }
];
const Format = [
  {
    type: "item",
    text: "Word Wrap"
  },
  {
    type: "item",
    disable: true,
    text: "Font..."
  }
];
const View$1 = [
  {
    type: "item",
    disable: true,
    text: "Status Bar"
  }
];
const Help$1 = [
  {
    type: "item",
    disable: true,
    text: "Help Topics"
  },
  {
    type: "item",
    disable: true,
    text: "About Notepad"
  }
];
const menuItems$1 = { File: File$1, Edit: Edit$1, Format, View: View$1, Help: Help$1 };
const css$3 = {
  code: "div.svelte-1vhf4um{display:flex;flex-direction:column;height:100%;width:100%;padding:0;margin:0}header.svelte-1vhf4um{color:black;padding-left:5px;margin:0;border-bottom:1px solid #0831d9;border-top:1px solid #0831d9}textarea.svelte-1vhf4um{background-color:white;width:calc(100% - 1px);height:calc(100% - 25px);resize:none;overflow:scroll;color:black;outline:none;border:none;padding:0;margin:0}",
  map: `{"version":3,"file":"Notepad.svelte","sources":["Notepad.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher, onMount } from 'svelte';\\n\\timport HeaderWindow from '../../Window/WindowDropDowns/HeaderWindow.svelte';\\n\\timport menuItems from './menuItems';\\n\\n\\tlet textarea;\\n\\tlet docText = \`Hello World!🌎✨\\\\n\\n.*♡ꕤ⸜⸝⸝⸝⸝ꕤ♡*.ﾟ\\n\\\\n\\nCredits:\\\\n\\n- JSPaint: https://github.com/1j01/jspaint\\\\n\\n- Windows Media Player Skins: Crafted by the talented Alfonso Roman\\\\n\\n and Jeff Schafer from The Skins Factory\\\\n\\n☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆\\n\\\\n\\nDouble-click the icons (that are draggable, so organize the desktop to your liking) on the desktop to open the apps and explore.\\\\n\\nThis project is my way of taking a delightful trip down memory lane, back to the early 2000s—a time of AOL Instant Messenger, MySpace, and the early days of online creativity. It was an exciting era of innovation and discovery.\\\\n\\n\\\\n\\nYou'll find the classic sections—About, Projects, and Contact—inside the Maxthon Browser on the desktop. Think of it as blending nostalgic charm with modern tech, all wrapped up in the iconic XP style.\\\\n\\n\\\\n\\nSo go ahead, double-click those icons, and dive into a nostalgic adventure! Enjoy!\`;\\n\\n\\tlet wordWrap = true;\\n\\n\\texport let onClose;\\n\\n\\tfunction handleClickItem(item) {\\n\\t\\tswitch (item) {\\n\\t\\t\\tcase 'Exit':\\n\\t\\t\\t\\tonClose();\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tcase 'Word Wrap':\\n\\t\\t\\t\\twordWrap = !wordWrap;\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tcase 'Time/Date':\\n\\t\\t\\t\\tconst date = new Date();\\n\\t\\t\\t\\tdocText += \`\${date.toLocaleTimeString()} \${date.toLocaleDateString()}\\\\n\`;\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tdefault:\\n\\t\\t}\\n\\t}\\n\\n\\tonMount(() => {\\n\\t\\t// Set the initial focus on the textarea\\n\\t\\ttextarea.focus();\\n\\t\\t// Set the cursor (caret) position to the top\\n\\t\\ttextarea.setSelectionRange(0, 0);\\n\\t});\\n<\/script>\\n\\n<div>\\n\\t<header><HeaderWindow items={menuItems} onClickItem={handleClickItem} /></header>\\n\\t<textarea bind:value={docText} bind:this={textarea} wrap={wordWrap ? 'soft' : 'off'}></textarea>\\n</div>\\n\\n<style>\\n\\tdiv {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\theight: 100%;\\n\\t\\twidth: 100%;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t}\\n\\theader {\\n\\t\\tcolor: black;\\n\\t\\tpadding-left: 5px;\\n\\t\\tmargin: 0;\\n\\t\\tborder-bottom: 1px solid #0831d9;\\n\\t\\tborder-top: 1px solid #0831d9;\\n\\t}\\n\\n\\ttextarea {\\n\\t\\tbackground-color: white;\\n\\t\\twidth: calc(100% - 1px);\\n\\t\\theight: calc(100% - 25px);\\n\\t\\tresize: none;\\n\\t\\toverflow: scroll;\\n\\t\\tcolor: black;\\n\\t\\toutline: none;\\n\\t\\tborder: none;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwDC,kBAAI,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACT,CACA,qBAAO,CACN,KAAK,CAAE,KAAK,CACZ,YAAY,CAAE,GAAG,CACjB,MAAM,CAAE,CAAC,CACT,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAChC,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OACvB,CAEA,uBAAS,CACR,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACT"}`
};
const Notepad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textarea;
  let docText = `Hello World!🌎✨

.*♡ꕤ⸜⸝⸝⸝⸝ꕤ♡*.ﾟ


Credits:

- JSPaint: https://github.com/1j01/jspaint

- Windows Media Player Skins: Crafted by the talented Alfonso Roman

 and Jeff Schafer from The Skins Factory

☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆


Double-click the icons (that are draggable, so organize the desktop to your liking) on the desktop to open the apps and explore.

This project is my way of taking a delightful trip down memory lane, back to the early 2000s—a time of AOL Instant Messenger, MySpace, and the early days of online creativity. It was an exciting era of innovation and discovery.



You'll find the classic sections—About, Projects, and Contact—inside the Maxthon Browser on the desktop. Think of it as blending nostalgic charm with modern tech, all wrapped up in the iconic XP style.



So go ahead, double-click those icons, and dive into a nostalgic adventure! Enjoy!`;
  let wordWrap = true;
  let { onClose } = $$props;
  function handleClickItem2(item) {
    switch (item) {
      case "Exit":
        onClose();
        break;
      case "Word Wrap":
        wordWrap = !wordWrap;
        break;
      case "Time/Date":
        const date = /* @__PURE__ */ new Date();
        docText += `${date.toLocaleTimeString()} ${date.toLocaleDateString()}
`;
        break;
    }
  }
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  $$result.css.add(css$3);
  return `<div class="svelte-1vhf4um"><header class="svelte-1vhf4um">${validate_component(HeaderWindow, "HeaderWindow").$$render(
    $$result,
    {
      items: menuItems$1,
      onClickItem: handleClickItem2
    },
    {},
    {}
  )}</header> <textarea${add_attribute("wrap", wordWrap ? "soft" : "off", 0)} class="svelte-1vhf4um"${add_attribute("this", textarea, 0)}>${escape(docText || "")}</textarea> </div>`;
});
const css$2 = {
  code: ".paint-container.svelte-vmyxa7{height:100%;display:flex}.paint-iframe.svelte-vmyxa7{flex:1;border:none;background-color:rgb(192, 192, 192)}",
  map: '{"version":3,"file":"Paint.svelte","sources":["Paint.svelte"],"sourcesContent":["<script>\\n<\/script>\\n\\n<div class=\\"paint-container\\">\\n\\t<iframe src=\\"https://jspaint.app\\" frameBorder=\\"0\\" title=\\"paint\\" class=\\"paint-iframe\\" />\\n</div>\\n\\n<style>\\n\\t.paint-container {\\n\\t\\theight: 100%;\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\t.paint-iframe {\\n\\t\\tflex: 1;\\n\\t\\tborder: none;\\n\\t\\tbackground-color: rgb(192, 192, 192);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,8BAAiB,CAChB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IACV,CAEA,2BAAc,CACb,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC"}'
};
const Paint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="paint-container svelte-vmyxa7" data-svelte-h="svelte-1hwzis4"><iframe src="https://jspaint.app" frameborder="0" title="paint" class="paint-iframe svelte-vmyxa7"></iframe> </div>`;
});
const WMPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<iframe src="https://snufkinwa.github.io/WMPlayer/" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="clipboard-write; encrypted-media; picture-in-picture; web-share; allow-same-origin" style="background-color: transparent; border: none; color-scheme: none;" title="wm"></iframe>`;
});
const File = [
  {
    type: "item",
    text: "Create Shortcut",
    disable: true
  },
  {
    type: "item",
    text: "Delete",
    disable: true
  },
  {
    type: "item",
    text: "Rename",
    disable: true
  },
  {
    type: "item",
    disable: true,
    text: "Properties"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Close"
  }
];
const Edit = [
  {
    type: "item",
    disable: true,
    text: "Undo",
    hotkey: "Ctrl+Z"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    disable: true,
    text: "Cut",
    hotkey: "Ctrl+X"
  },
  {
    type: "item",
    disable: true,
    text: "Copy",
    hotkey: "Ctrl+C"
  },
  {
    type: "item",
    disable: true,
    text: "Paste",
    hotkey: "Ctrl+V"
  },
  {
    type: "item",
    disable: true,
    text: "Paste Shortcut"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Copy To Folder...",
    disable: true
  },
  {
    type: "item",
    text: "Move To Folder...",
    disable: true
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Select All",
    hotkey: "Ctrl+A"
  },
  {
    type: "item",
    text: "Invert Selection"
  }
];
const View = [
  {
    type: "menu",
    position: {
      left: "calc(100% - 4px)",
      top: "-3px"
    },
    text: "Toolbars",
    items: [
      {
        type: "item",
        symbol: "check",
        text: "Standard Buttons"
      },
      {
        type: "item",
        symbol: "check",
        text: "Address Bar"
      },
      {
        type: "item",
        symbol: "check",
        text: "Links"
      },
      {
        type: "separator"
      },
      {
        type: "item",
        symbol: "check",
        text: "Lock the Toolbars"
      },
      {
        type: "item",
        text: "Customize..."
      }
    ]
  },
  {
    type: "item",
    symbol: "check",
    text: "Status Bar"
  },
  {
    type: "menu",
    position: {
      left: "calc(100% - 4px)",
      top: "-3px"
    },
    text: "Explorer Bar",
    items: [
      {
        type: "item",
        text: "Search",
        hotkey: "Ctrl+E"
      },
      {
        type: "item",
        text: "Favorites",
        hotkey: "Ctrl+I"
      },
      {
        type: "item",
        text: "History",
        hotkey: "Ctrl+H"
      },
      {
        type: "item",
        text: "Folders"
      },
      {
        type: "separator"
      },
      {
        type: "item",
        text: "Tip of the Day"
      }
    ]
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Thumbnails"
  },
  {
    type: "item",
    text: "Tiles",
    symbol: "circle"
  },
  {
    type: "item",
    text: "Icons"
  },
  {
    type: "item",
    text: "List"
  },
  {
    type: "item",
    text: "Details"
  },
  {
    type: "item",
    text: "Choose Details..."
  },
  {
    type: "item",
    text: "Refresh"
  }
];
const Favorites = [
  {
    type: "item",
    text: "Add to Favorites..."
  },
  {
    type: "item",
    text: "Organize Favorites..."
  }
];
const Tools = [
  {
    type: "item",
    text: "Map Network Drive..."
  },
  {
    type: "item",
    text: "Disconnect Network Drive..."
  },
  {
    type: "item",
    text: "Synchronize..."
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Folder Options..."
  }
];
const Help = [
  {
    type: "item",
    text: "Help and Support Center"
  },
  {
    type: "separator"
  },
  {
    type: "item",
    text: "Is this copy of Windows legal?"
  },
  {
    type: "item",
    text: "About Windows"
  }
];
const menuItems = { File, Edit, View, Favorites, Tools, Help };
const restore = "data:image/x-icon;base64,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";
const css$1 = {
  code: ".main-container.svelte-1kzhybb.svelte-1kzhybb{height:100%;width:100%;position:absolute;color:black;display:flex;overflow:hidden;flex-direction:column;background:linear-gradient(to right, #edede5 0%, #ede8cd 100%)}.toolBar.svelte-1kzhybb.svelte-1kzhybb{display:flex;align-items:center;height:24px;border-bottom:1px solid rgba(255, 255, 255, 0.7)}.options.svelte-1kzhybb.svelte-1kzhybb{flex:1;height:23px;border-bottom:1px solid rgba(0, 0, 0, 0.1);border-right:1px solid rgba(0, 0, 0, 0.1);padding:1px 0 1px 2px}.forward.svelte-1kzhybb.svelte-1kzhybb,.back.svelte-1kzhybb.svelte-1kzhybb{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.windows-logo.svelte-1kzhybb.svelte-1kzhybb{height:100%;border-left:1px solid white;border-bottom:1px solid rgba(0, 0, 0, 0.1)}.function_bar.svelte-1kzhybb.svelte-1kzhybb{height:36px;display:flex;align-items:center;font-size:11px;padding:4px 3px 4px;border-bottom:1px solid rgba(0, 0, 0, 0.1)}.function_bar__button.svelte-1kzhybb.svelte-1kzhybb{display:flex;height:100%;align-items:center;border:1px solid rgba(0, 0, 0, 0);border-radius:3px;cursor:pointer}.function_bar__button.svelte-1kzhybb.svelte-1kzhybb:hover{border:1px solid rgba(0, 0, 0, 0.1);box-shadow:inset 0 -1px 1px rgba(0, 0, 0, 0.1)}.function_bar__button.svelte-1kzhybb.svelte-1kzhybb:active{border:1px solid rgb(185, 185, 185);background-color:#dedede;box-shadow:inset 0 -1px 1px rgba(255, 255, 255, 0.7)}.function_bar__icon.svelte-1kzhybb.svelte-1kzhybb{height:22px;width:22px;margin:0 4px 0 1px}figure.svelte-1kzhybb.svelte-1kzhybb{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10px}figure.svelte-1kzhybb img.svelte-1kzhybb{vertical-align:middle;align-items:center}figure.svelte-1kzhybb figcaption.svelte-1kzhybb{text-align:center}.address_bar.svelte-1kzhybb.svelte-1kzhybb{display:flex;align-items:center;padding:5px 2px;height:20px;font-size:11px;border-top:1px solid rgba(255, 255, 255, 0.7);border-bottom:1px solid rgba(255, 255, 255, 0.7);box-shadow:inset 0 -2px 3px -1px #b0b0b0}.address_bar__title.svelte-1kzhybb.svelte-1kzhybb{padding:5px;color:rgba(0, 0, 0, 0.5)}.address_bar__content.svelte-1kzhybb.svelte-1kzhybb{display:flex;align-items:center;flex:1;height:100%;border:1px solid rgba(122, 122, 255, 0.6);background-color:white;position:relative}.address_bar__img.svelte-1kzhybb.svelte-1kzhybb{width:14px;height:14px}.address_bar__img.svelte-1kzhybb.svelte-1kzhybb:last-child{width:15px;height:15px;position:absolute;right:1px}.address_bar__text.svelte-1kzhybb.svelte-1kzhybb{position:absolute;left:16px;right:17px;white-space:nowrap}.address_bar__go.svelte-1kzhybb.svelte-1kzhybb{display:flex;align-items:center;padding:0 18px 0 5px;height:100%;position:relative}.address_bar__go__img.svelte-1kzhybb.svelte-1kzhybb{height:95%;border:1px solid rgba(255, 255, 255, 0.2);margin-right:3px}.content.svelte-1kzhybb.svelte-1kzhybb{flex:1;border:1px solid rgba(0, 0, 0, 0.4);border-top-width:0;background-color:#f1f1f1;font-size:11px;position:relative}.inner.svelte-1kzhybb.svelte-1kzhybb{display:flex;height:100%;overflow:hidden}.left.svelte-1kzhybb.svelte-1kzhybb{width:180px;height:100%;background:linear-gradient(to bottom, #748aff 0%, #4057d3 100%);padding:10px}.left__card.svelte-1kzhybb.svelte-1kzhybb{border-top-left-radius:3px;border-top-right-radius:3px;width:100%;overflow:hidden;margin-bottom:12px}.left__card__header.svelte-1kzhybb.svelte-1kzhybb{display:flex;align-items:center;height:23px;padding-left:11px;padding-right:2px;cursor:pointer;background:linear-gradient(\n			to right,\n			rgb(240, 240, 255) 0,\n			rgb(240, 240, 255) 30%,\n			rgb(168, 188, 255) 100%\n		)}.left__card__header.svelte-1kzhybb:hover .left__card__header__text.svelte-1kzhybb{color:#1c68ff}.left__card__header__text.svelte-1kzhybb.svelte-1kzhybb{font-weight:700;color:#0c327d;flex:1}.left__card__header__img.svelte-1kzhybb.svelte-1kzhybb{width:18px;height:18px;filter:drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))}.left__card__content.svelte-1kzhybb.svelte-1kzhybb{padding:5px 10px;background:linear-gradient(\n			to right,\n			rgb(180, 200, 251) 0%,\n			rgb(164, 185, 251) 50%,\n			rgb(180, 200, 251) 100%\n		);background-color:rgba(198, 211, 255, 0.87)}.left__card__row.svelte-1kzhybb.svelte-1kzhybb{display:flex;margin-bottom:2px}.left__card__img.svelte-1kzhybb.svelte-1kzhybb{width:14px;height:14px;margin-right:5px}.left__card__text.svelte-1kzhybb.svelte-1kzhybb{font-size:10px;line-height:14px;color:#0c327d}.left__card__text.link.svelte-1kzhybb.svelte-1kzhybb:hover{cursor:pointer;color:#2b72ff;text-decoration:underline}.right.svelte-1kzhybb.svelte-1kzhybb{height:100%;overflow:auto;background-color:#fff;flex:1}",
  map: `{"version":3,"file":"Recycle.svelte","sources":["Recycle.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from 'svelte';\\n\\timport HeaderWindow from '../../Window/WindowDropDowns/HeaderWindow.svelte';\\n\\timport menuItems from './menuItems.js';\\n\\n\\timport go from '$lib/assets/windowsIcons/290.png';\\n\\timport search from '$lib/assets/windowsIcons/Search.png';\\n\\timport computer from '$lib/assets/windowsIcons/676(16x16).png';\\n\\timport back from '$lib/assets/windowsIcons/Back.png';\\n\\timport forward from '$lib/assets/windowsIcons/Forward.png';\\n\\timport up from '$lib/assets/windowsIcons/up.png';\\n\\timport control from '$lib/assets/windowsIcons/300(16x16).png';\\n\\timport network from '$lib/assets/windowsIcons/693(16x16).png';\\n\\timport document from '$lib/assets/windowsIcons/308(16x16).png';\\n\\timport folderSmall from '$lib/assets/windowsIcons/318(16x16).png';\\n\\timport menu from '$lib/assets/windowsIcons/Start Menu Programs.png';\\n\\timport folderOpen from '$lib/assets/windowsIcons/337(32x32).png';\\n\\timport restore from '$lib/assets/windowsIcons/restore.ico';\\n\\timport recycle from '$lib/assets/windowsIcons/Recycle Bin (empty).png';\\n\\timport dropdown from '$lib/assets/windowsIcons/dropdown.png';\\n\\timport pullup from '$lib/assets/windowsIcons/pullup.png';\\n\\timport pulldown from '$lib/assets/windowsIcons/pulldown.png';\\n\\timport windows from '$lib/assets/windowsIcons/windows.png';\\n\\n\\texport let onClose;\\n\\n\\tfunction onClickOptionItem(item) {\\n\\t\\tswitch (item) {\\n\\t\\t\\tcase 'Close':\\n\\t\\t\\t\\tonClose();\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tdefault:\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<div class=\\"main-container\\">\\n\\t<section class=\\"toolBar\\">\\n\\t\\t<div class=\\"options\\">\\n\\t\\t\\t<HeaderWindow items={menuItems} onClickItem={onClickOptionItem} />\\n\\t\\t</div>\\n\\t\\t<img class=\\"windows-logo\\" src={windows} alt=\\"windows\\" />\\n\\t</section>\\n\\t<section class=\\"function_bar\\">\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon back\\" src={back} alt=\\"Back\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Back</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t\\t<div class=\\"function_bar__arrow\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon forward\\" src={forward} alt=\\"Forward\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Forward</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t\\t<div class=\\"function_bar__arrow\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon\\" src={up} alt=\\"Up\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Up</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__separate\\" />\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon\\" src={search} alt=\\"Search\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Search</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon\\" src={folderOpen} alt=\\"Folders\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Folders</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t</div>\\n\\t\\t<div class=\\"function_bar__separate\\" />\\n\\t\\t<div class=\\"function_bar__button\\">\\n\\t\\t\\t<figure>\\n\\t\\t\\t\\t<img class=\\"function_bar__icon\\" src={menu} alt=\\"Menu\\" />\\n\\t\\t\\t\\t<figcaption class=\\"function_bar__text\\">Views</figcaption>\\n\\t\\t\\t</figure>\\n\\t\\t\\t<div class=\\"function_bar__arrow\\" />\\n\\t\\t</div>\\n\\t</section>\\n\\t<section class=\\"address_bar\\">\\n\\t\\t<div class=\\"address_bar__title\\">Address</div>\\n\\t\\t<div class=\\"address_bar__content\\">\\n\\t\\t\\t<img src={computer} alt=\\"Computer\\" class=\\"address_bar__img\\" />\\n\\t\\t\\t<div class=\\"address_bar__text\\">My Computer</div>\\n\\t\\t\\t<img src={dropdown} alt=\\"Dropdown\\" class=\\"address_bar__img\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"address_bar__go\\">\\n\\t\\t\\t<img class=\\"address_bar__go__img\\" src={go} alt=\\"Go\\" />\\n\\t\\t\\t<span class=\\"address_bar__go__text\\">Go</span>\\n\\t\\t</div>\\n\\t</section>\\n\\t<div class=\\"content\\">\\n\\t\\t<div class=\\"inner\\">\\n\\t\\t\\t<div class=\\"left\\">\\n\\t\\t\\t\\t<div class=\\"left__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"left__card__header\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__header__text\\">Recycle Bin Tasks</div>\\n\\t\\t\\t\\t\\t\\t<img src={pullup} alt=\\"Pull Up\\" class=\\"left__card__header__img\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"left__card__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={recycle} alt=\\"View\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">Empty the Recycle Bin</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={restore} alt=\\"Remove\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">Restore all items</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"left__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"left__card__header\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__header__text\\">Other Places</div>\\n\\t\\t\\t\\t\\t\\t<img src={pullup} alt=\\"Pull Up\\" class=\\"left__card__header__img\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"left__card__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={network} alt=\\"Network\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">My Network Places</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={document} alt=\\"Document\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">My Documents</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={folderSmall} alt=\\"Folder\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">Shared Documents</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\"left__card__img\\" src={control} alt=\\"Control\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"left__card__text link\\">Control Panel</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"left__card\\">\\n\\t\\t\\t\\t\\t<div class=\\"left__card__header\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__header__text\\">Details</div>\\n\\t\\t\\t\\t\\t\\t<img src={pulldown} alt=\\"Pull Down\\" class=\\"left__card__header__img\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<!-- <div class=\\"left__card__content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"left__card__row\\">\\t</div></div> -->\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"right\\"></div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.main-container {\\n\\t\\theight: 100%;\\n\\t\\twidth: 100%;\\n\\t\\tposition: absolute;\\n\\t\\tcolor: black;\\n\\t\\tdisplay: flex;\\n\\t\\toverflow: hidden;\\n\\t\\tflex-direction: column;\\n\\t\\tbackground: linear-gradient(to right, #edede5 0%, #ede8cd 100%);\\n\\t}\\n\\n\\t.toolBar {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\theight: 24px;\\n\\t\\tborder-bottom: 1px solid rgba(255, 255, 255, 0.7);\\n\\t}\\n\\n\\t.options {\\n\\t\\tflex: 1;\\n\\t\\theight: 23px;\\n\\t\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tborder-right: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tpadding: 1px 0 1px 2px;\\n\\t}\\n\\n\\t.forward,\\n\\t.back {\\n\\t\\t-webkit-filter: grayscale(100%);\\n\\t\\tfilter: grayscale(100%);\\n\\t}\\n\\n\\t.windows-logo {\\n\\t\\theight: 100%;\\n\\t\\tborder-left: 1px solid white;\\n\\t\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n\\t}\\n\\n\\t.function_bar {\\n\\t\\theight: 36px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tfont-size: 11px;\\n\\t\\tpadding: 4px 3px 4px;\\n\\t\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n\\t}\\n\\n\\t.function_bar__button {\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t\\talign-items: center;\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0);\\n\\t\\tborder-radius: 3px;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.function_bar__button:hover {\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tbox-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);\\n\\t}\\n\\n\\t.function_bar__button:active {\\n\\t\\tborder: 1px solid rgb(185, 185, 185);\\n\\t\\tbackground-color: #dedede;\\n\\t\\tbox-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);\\n\\t}\\n\\n\\t.function_bar__icon {\\n\\t\\theight: 22px;\\n\\t\\twidth: 22px;\\n\\t\\tmargin: 0 4px 0 1px;\\n\\t}\\n\\n\\tfigure {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmargin: 10px;\\n\\t}\\n\\tfigure img {\\n\\t\\tvertical-align: middle;\\n\\t\\talign-items: center;\\n\\t}\\n\\tfigure figcaption {\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.address_bar {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 5px 2px;\\n\\t\\theight: 20px;\\n\\t\\tfont-size: 11px;\\n\\t\\tborder-top: 1px solid rgba(255, 255, 255, 0.7);\\n\\t\\tborder-bottom: 1px solid rgba(255, 255, 255, 0.7);\\n\\t\\tbox-shadow: inset 0 -2px 3px -1px #b0b0b0;\\n\\t}\\n\\n\\t.address_bar__title {\\n\\t\\tpadding: 5px;\\n\\t\\tcolor: rgba(0, 0, 0, 0.5);\\n\\t}\\n\\n\\t.address_bar__content {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tflex: 1;\\n\\t\\theight: 100%;\\n\\t\\tborder: 1px solid rgba(122, 122, 255, 0.6);\\n\\t\\tbackground-color: white;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.address_bar__img {\\n\\t\\twidth: 14px;\\n\\t\\theight: 14px;\\n\\t}\\n\\n\\t.address_bar__img:last-child {\\n\\t\\twidth: 15px;\\n\\t\\theight: 15px;\\n\\t\\tposition: absolute;\\n\\t\\tright: 1px;\\n\\t}\\n\\n\\t.address_bar__text {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 16px;\\n\\t\\tright: 17px;\\n\\t\\twhite-space: nowrap;\\n\\t}\\n\\n\\t.address_bar__go {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 18px 0 5px;\\n\\t\\theight: 100%;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.address_bar__go__img {\\n\\t\\theight: 95%;\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.2);\\n\\t\\tmargin-right: 3px;\\n\\t}\\n\\n\\t.content {\\n\\t\\tflex: 1;\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0.4);\\n\\t\\tborder-top-width: 0;\\n\\t\\tbackground-color: #f1f1f1;\\n\\t\\tfont-size: 11px;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.inner {\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t\\toverflow: hidden;\\n\\t}\\n\\n\\t.left {\\n\\t\\twidth: 180px;\\n\\t\\theight: 100%;\\n\\t\\tbackground: linear-gradient(to bottom, #748aff 0%, #4057d3 100%);\\n\\t\\tpadding: 10px;\\n\\t}\\n\\n\\t.left__card {\\n\\t\\tborder-top-left-radius: 3px;\\n\\t\\tborder-top-right-radius: 3px;\\n\\t\\twidth: 100%;\\n\\t\\toverflow: hidden;\\n\\t\\tmargin-bottom: 12px;\\n\\t}\\n\\n\\t.left__card__header {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\theight: 23px;\\n\\t\\tpadding-left: 11px;\\n\\t\\tpadding-right: 2px;\\n\\t\\tcursor: pointer;\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\tto right,\\n\\t\\t\\trgb(240, 240, 255) 0,\\n\\t\\t\\trgb(240, 240, 255) 30%,\\n\\t\\t\\trgb(168, 188, 255) 100%\\n\\t\\t);\\n\\t}\\n\\n\\t.left__card__header:hover .left__card__header__text {\\n\\t\\tcolor: #1c68ff;\\n\\t}\\n\\n\\t.left__card__header__text {\\n\\t\\tfont-weight: 700;\\n\\t\\tcolor: #0c327d;\\n\\t\\tflex: 1;\\n\\t}\\n\\n\\t.left__card__header__img {\\n\\t\\twidth: 18px;\\n\\t\\theight: 18px;\\n\\t\\tfilter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));\\n\\t}\\n\\n\\t.left__card__content {\\n\\t\\tpadding: 5px 10px;\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\tto right,\\n\\t\\t\\trgb(180, 200, 251) 0%,\\n\\t\\t\\trgb(164, 185, 251) 50%,\\n\\t\\t\\trgb(180, 200, 251) 100%\\n\\t\\t);\\n\\t\\tbackground-color: rgba(198, 211, 255, 0.87);\\n\\t}\\n\\n\\t.left__card__row {\\n\\t\\tdisplay: flex;\\n\\t\\tmargin-bottom: 2px;\\n\\t}\\n\\n\\t.left__card__img {\\n\\t\\twidth: 14px;\\n\\t\\theight: 14px;\\n\\t\\tmargin-right: 5px;\\n\\t}\\n\\n\\t.left__card__text {\\n\\t\\tfont-size: 10px;\\n\\t\\tline-height: 14px;\\n\\t\\tcolor: #0c327d;\\n\\t}\\n\\n\\t.left__card__text.link:hover {\\n\\t\\tcursor: pointer;\\n\\t\\tcolor: #2b72ff;\\n\\t\\ttext-decoration: underline;\\n\\t}\\n\\n\\t.right {\\n\\t\\theight: 100%;\\n\\t\\toverflow: auto;\\n\\t\\tbackground-color: #fff;\\n\\t\\tflex: 1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Recycle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClose } = $$props;
  function onClickOptionItem(item) {
    switch (item) {
      case "Close":
        onClose();
        break;
    }
  }
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  $$result.css.add(css$1);
  return `<div class="main-container svelte-1kzhybb"><section class="toolBar svelte-1kzhybb"><div class="options svelte-1kzhybb">${validate_component(HeaderWindow, "HeaderWindow").$$render(
    $$result,
    {
      items: menuItems,
      onClickItem: onClickOptionItem
    },
    {},
    {}
  )}</div> <img class="windows-logo svelte-1kzhybb"${add_attribute("src", windows, 0)} alt="windows"></section> <section class="function_bar svelte-1kzhybb" data-svelte-h="svelte-q8ht42"><div class="function_bar__button svelte-1kzhybb"><figure class="svelte-1kzhybb"><img class="function_bar__icon back svelte-1kzhybb"${add_attribute("src", back, 0)} alt="Back"> <figcaption class="function_bar__text svelte-1kzhybb">Back</figcaption></figure> <div class="function_bar__arrow"></div></div> <div class="function_bar__button svelte-1kzhybb"><figure class="svelte-1kzhybb"><img class="function_bar__icon forward svelte-1kzhybb"${add_attribute("src", forward, 0)} alt="Forward"> <figcaption class="function_bar__text svelte-1kzhybb">Forward</figcaption></figure> <div class="function_bar__arrow"></div></div> <div class="function_bar__button svelte-1kzhybb"><figure class="svelte-1kzhybb"><img class="function_bar__icon svelte-1kzhybb"${add_attribute("src", up, 0)} alt="Up"> <figcaption class="function_bar__text svelte-1kzhybb">Up</figcaption></figure></div> <div class="function_bar__separate"></div> <div class="function_bar__button svelte-1kzhybb"><figure class="svelte-1kzhybb"><img class="function_bar__icon svelte-1kzhybb"${add_attribute("src", search$1, 0)} alt="Search"> <figcaption class="function_bar__text svelte-1kzhybb">Search</figcaption></figure></div> <div class="function_bar__button svelte-1kzhybb"><figure class="svelte-1kzhybb"><img class="function_bar__icon svelte-1kzhybb"${add_attribute("src", folderOpen, 0)} alt="Folders"> <figcaption class="function_bar__text svelte-1kzhybb">Folders</figcaption></figure></div> <div class="function_bar__separate"></div> <div class="function_bar__button svelte-1kzhybb"><figure class="svelte-1kzhybb"><img class="function_bar__icon svelte-1kzhybb"${add_attribute("src", menu, 0)} alt="Menu"> <figcaption class="function_bar__text svelte-1kzhybb">Views</figcaption></figure> <div class="function_bar__arrow"></div></div></section> <section class="address_bar svelte-1kzhybb" data-svelte-h="svelte-yxsjls"><div class="address_bar__title svelte-1kzhybb">Address</div> <div class="address_bar__content svelte-1kzhybb"><img${add_attribute("src", computer, 0)} alt="Computer" class="address_bar__img svelte-1kzhybb"> <div class="address_bar__text svelte-1kzhybb">My Computer</div> <img${add_attribute("src", dropdown, 0)} alt="Dropdown" class="address_bar__img svelte-1kzhybb"></div> <div class="address_bar__go svelte-1kzhybb"><img class="address_bar__go__img svelte-1kzhybb"${add_attribute("src", go, 0)} alt="Go"> <span class="address_bar__go__text">Go</span></div></section> <div class="content svelte-1kzhybb" data-svelte-h="svelte-13h4nwo"><div class="inner svelte-1kzhybb"><div class="left svelte-1kzhybb"><div class="left__card svelte-1kzhybb"><div class="left__card__header svelte-1kzhybb"><div class="left__card__header__text svelte-1kzhybb">Recycle Bin Tasks</div> <img${add_attribute("src", pullup, 0)} alt="Pull Up" class="left__card__header__img svelte-1kzhybb"></div> <div class="left__card__content svelte-1kzhybb"><div class="left__card__row svelte-1kzhybb"><img class="left__card__img svelte-1kzhybb"${add_attribute("src", recycleIcon, 0)} alt="View"> <div class="left__card__text link svelte-1kzhybb">Empty the Recycle Bin</div></div> <div class="left__card__row svelte-1kzhybb"><img class="left__card__img svelte-1kzhybb"${add_attribute("src", restore, 0)} alt="Remove"> <div class="left__card__text link svelte-1kzhybb">Restore all items</div></div></div></div> <div class="left__card svelte-1kzhybb"><div class="left__card__header svelte-1kzhybb"><div class="left__card__header__text svelte-1kzhybb">Other Places</div> <img${add_attribute("src", pullup, 0)} alt="Pull Up" class="left__card__header__img svelte-1kzhybb"></div> <div class="left__card__content svelte-1kzhybb"><div class="left__card__row svelte-1kzhybb"><img class="left__card__img svelte-1kzhybb"${add_attribute("src", network, 0)} alt="Network"> <div class="left__card__text link svelte-1kzhybb">My Network Places</div></div> <div class="left__card__row svelte-1kzhybb"><img class="left__card__img svelte-1kzhybb"${add_attribute("src", document, 0)} alt="Document"> <div class="left__card__text link svelte-1kzhybb">My Documents</div></div> <div class="left__card__row svelte-1kzhybb"><img class="left__card__img svelte-1kzhybb"${add_attribute("src", folderSmall, 0)} alt="Folder"> <div class="left__card__text link svelte-1kzhybb">Shared Documents</div></div> <div class="left__card__row svelte-1kzhybb"><img class="left__card__img svelte-1kzhybb"${add_attribute("src", control, 0)} alt="Control"> <div class="left__card__text link svelte-1kzhybb">Control Panel</div></div></div></div> <div class="left__card svelte-1kzhybb"><div class="left__card__header svelte-1kzhybb"><div class="left__card__header__text svelte-1kzhybb">Details</div> <img${add_attribute("src", pulldown, 0)} alt="Pull Down" class="left__card__header__img svelte-1kzhybb"></div> </div></div> <div class="right svelte-1kzhybb"></div></div></div> </div>`;
});
const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
const initialAppState = {
  "Recycle Bin": {
    component: Recycle,
    header: {
      title: "Recycle Bin",
      icon: recycleIcon,
      invisible: false
    },
    defaultSize: {
      width: 660,
      height: 500
    },
    minSize: {
      width: 560,
      height: 400
    },
    maxSize: {
      width: 800,
      height: 600
    },
    defaultOffset: {
      x: 130,
      y: 20
    },
    resizable: true,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex()
  },
  "My Computer": {
    component: MyComputer,
    header: {
      title: "My Computer",
      icon: myComp,
      invisible: false
    },
    defaultSize: {
      width: 660,
      height: 500
    },
    minSize: {
      width: 560,
      height: 400
    },
    maxSize: {
      width: 800,
      height: 600
    },
    defaultOffset: {
      x: 180,
      y: 170
    },
    resizable: true,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex()
  },
  Notepad: {
    component: Notepad,
    header: {
      title: "Untitled - Notepad",
      icon: notepad,
      invisible: false
    },
    defaultSize: {
      width: 660,
      height: 500
    },
    minSize: {
      width: 460,
      height: 300
    },
    maxSize: {
      width: 860,
      height: 700
    },
    defaultOffset: {
      x: 525,
      y: 200
    },
    resizable: true,
    minimized: false,
    maximized: Window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex()
  },
  Maxthon: {
    component: Maxthon,
    header: {
      title: "Maxthon",
      icon: maxthonIcon,
      invisible: false
    },
    defaultSize: {
      width: 1150,
      height: 800
    },
    minSize: {
      width: 1090,
      height: 700
    },
    maxSize: {
      width: 1330,
      height: 830
    },
    defaultOffset: {
      x: 120,
      y: 40
    },
    resizable: true,
    minimized: false,
    maximized: Window.innerWidth < 1400,
    id: genId(),
    zIndex: genIndex()
  },
  "Window Media Player": {
    component: WMPlayer,
    header: {
      title: "Window Media Player",
      icon: mediaPlayer,
      invisible: true
    },
    defaultSize: {
      width: 600,
      height: 378
    },
    defaultOffset: {
      x: 190,
      y: 200
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex()
  },
  Paint: {
    component: Paint,
    header: {
      title: "Untitled - Paint",
      icon: paint,
      invisible: false
    },
    defaultSize: {
      width: 800,
      height: 600
    },
    minSize: {
      width: 600,
      height: 400
    },
    maxSize: {
      width: 900,
      height: 670
    },
    defaultOffset: {
      x: 250,
      y: 100
    },
    resizable: true,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex()
  }
};
const initialNotepadApp = {
  ...initialAppState.Notepad,
  id: genId(),
  zIndex: 1
};
const initialState = {
  apps: [initialNotepadApp],
  // Include Notepad in the initially opened apps
  nextAppID: 1,
  zIndex: 2,
  focusedAppId: initialNotepadApp.id
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_APP": {
      const appConfig = initialAppState[action.appKey];
      if (!appConfig) return state;
      const newApp = {
        ...appConfig,
        id: state.nextAppID,
        zIndex: state.zIndex
      };
      return {
        ...state,
        apps: [...state.apps, newApp],
        nextAppID: state.nextAppID + 1,
        zIndex: state.zIndex + 1,
        focusedAppId: state.nextAppID
      };
    }
    case "REMOVE_APP": {
      const updatedApps = state.apps.filter((app) => app.id !== action.id);
      let nextFocusedAppId = state.focusedAppId;
      if (state.focusedAppId === action.id) {
        const nonMinimizedApps = updatedApps.filter((app) => !app.minimized);
        if (nonMinimizedApps.length > 0) {
          const appToFocus = nonMinimizedApps.reduce(
            (prev, current) => prev.zIndex > current.zIndex ? prev : current
          );
          nextFocusedAppId = appToFocus.id;
        } else {
          nextFocusedAppId = null;
        }
      }
      return {
        ...state,
        apps: updatedApps,
        focusedAppId: nextFocusedAppId
      };
    }
    case "MINIMIZE_APP": {
      const minimizedApps = state.apps.map(
        (app) => app.id === action.id ? { ...app, minimized: true } : app
      );
      let nextFocusedAppId = state.focusedAppId;
      if (state.focusedAppId === action.id) {
        const nonMinimizedApps = minimizedApps.filter((app) => !app.minimized);
        if (nonMinimizedApps.length > 0) {
          const appToFocus = nonMinimizedApps.reduce(
            (prev, current) => prev.zIndex > current.zIndex ? prev : current
          );
          nextFocusedAppId = appToFocus.id;
        } else {
          nextFocusedAppId = null;
        }
      }
      return {
        ...state,
        apps: minimizedApps,
        focusedAppId: nextFocusedAppId
      };
    }
    case "RESTORE_APP": {
      return {
        ...state,
        apps: state.apps.map((app) => app.id === action.id ? { ...app, minimized: false } : app),
        focusedAppId: action.id
      };
    }
    case "FOCUS_APP": {
      const updatedApps = state.apps.map((app) => {
        if (app.id === action.id) {
          return { ...app, zIndex: state.zIndex };
        }
        return app;
      });
      return {
        ...state,
        apps: updatedApps,
        focusedAppId: action.id,
        zIndex: state.zIndex + 1
      };
    }
    case "TOGGLE_MAXIMIZE_APP": {
      const windowWidth = Window.innerWidth;
      const windowHeight = Window.innerHeight;
      const newState = state.apps.map((app) => {
        if (app.id === action.id) {
          const maximized = !app.maximized;
          const width = maximized ? windowWidth + 6 : app.defaultSize.width;
          const height = maximized ? windowHeight - 24 : app.defaultSize.height;
          const x = maximized ? -3 : app.defaultOffset.x;
          const y = maximized ? -3 : app.defaultOffset.y;
          return { ...app, maximized, width, height, x, y };
        }
        return app;
      });
      return { ...state, apps: newState };
    }
    case "UPDATE_APP_STATE": {
      const updatedApps = state.apps.map((app) => {
        if (app.id === action.id) {
          return {
            ...app,
            defaultSize: { width: action.width, height: action.height }
          };
        }
        return app;
      });
      return {
        ...state,
        apps: updatedApps
      };
    }
    default:
      return state;
  }
}
function createAppState() {
  const { subscribe: subscribe2, update } = writable(initialState);
  return {
    subscribe: subscribe2,
    dispatch: (action) => update((state) => reducer(state, action))
  };
}
const appState = createAppState();
function removeApp(id) {
  appState.dispatch({ type: "REMOVE_APP", id });
}
const css = {
  code: ".mainContainer.svelte-tiyr7b{margin:0;top:0;display:flex;width:100vw;height:100vh;background-image:url('https://i.imgur.com/Zk6TR5k.jpeg');background-repeat:no-repeat;background-size:cover;background-position:center;opacity:0;transition:opacity 1s ease-in}.fade-in.svelte-tiyr7b{opacity:0}.show.svelte-tiyr7b{opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from 'svelte';\\n\\timport Desktop from './Desktop.svelte';\\n\\n\\tlet showDesktop = false;\\n\\tlet isVisible = false;\\n\\n\\tonMount(() => {\\n\\t\\tsetTimeout(() => {\\n\\t\\t\\tisVisible = true;\\n\\t\\t\\tsetTimeout(() => {\\n\\t\\t\\t\\tshowDesktop = true;\\n\\t\\t\\t}, 50);\\n\\t\\t}, 100);\\n\\t});\\n<\/script>\\n\\n<div class={\`mainContainer \${isVisible ? 'fade-in show' : ''}\`}>\\n\\t{#if showDesktop}\\n\\t\\t<Desktop />\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.mainContainer {\\n\\t\\tmargin: 0;\\n\\t\\ttop: 0;\\n\\t\\tdisplay: flex;\\n\\t\\twidth: 100vw;\\n\\t\\theight: 100vh;\\n\\t\\tbackground-image: url('https://i.imgur.com/Zk6TR5k.jpeg');\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tbackground-size: cover;\\n\\t\\tbackground-position: center;\\n\\t\\topacity: 0;\\n\\t\\ttransition: opacity 1s ease-in;\\n\\t}\\n\\n\\t.fade-in {\\n\\t\\topacity: 0;\\n\\t}\\n\\n\\t.show {\\n\\t\\topacity: 1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBC,4BAAe,CACd,MAAM,CAAE,CAAC,CACT,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,uCAAuC,CACzD,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,EAAE,CAAC,OACxB,CAEA,sBAAS,CACR,OAAO,CAAE,CACV,CAEA,mBAAM,CACL,OAAO,CAAE,CACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`mainContainer ${""}`), true) + " svelte-tiyr7b"}">${``} </div>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
