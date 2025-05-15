var Fg = Object.defineProperty;
var Bg = (ti, Ue, Ki) =>
  Ue in ti
    ? Fg(ti, Ue, { enumerable: !0, configurable: !0, writable: !0, value: Ki })
    : (ti[Ue] = Ki);
var V = (ti, Ue, Ki) => Bg(ti, typeof Ue != "symbol" ? Ue + "" : Ue, Ki);
(function (ti) {
  typeof define == "function" && define.amd ? define(ti) : ti();
})(function () {
  "use strict";
  var ti = document.createElement("style");
  (ti.textContent = `body{margin:0;padding:0}[data-show=auth],[data-show=guest]{transition:opacity .3s ease;opacity:0;pointer-events:none;display:none!important}[auth-visible]{opacity:1;pointer-events:all;display:block!important}[auth-visible][data-display=flex]{display:flex!important}[auth-visible][data-display=grid]{display:grid!important}[auth-visible][data-display=inline]{display:inline!important}@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:var(--swiper-navigation-top-offset, 50%);width:calc(var(--swiper-navigation-size) / 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-prev svg,.swiper-rtl .swiper-button-next svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset, 10px);right:auto}.swiper-button-lock{display:none}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset, 10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}
/*$vite$:1*/`),
    document.head.appendChild(ti);
  function Ue(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function Ki(n, e) {
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.constructor = n),
      (n.__proto__ = e);
  }
  /*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Ct = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Pr = { duration: 0.5, overwrite: !1, delay: 0 },
    oa,
    Ze,
    ye,
    li = 1e8,
    it = 1 / li,
    la = Math.PI * 2,
    sd = la / 4,
    ad = 0,
    el = Math.sqrt,
    od = Math.cos,
    ld = Math.sin,
    We = function (e) {
      return typeof e == "string";
    },
    Ae = function (e) {
      return typeof e == "function";
    },
    _i = function (e) {
      return typeof e == "number";
    },
    ca = function (e) {
      return typeof e > "u";
    },
    ci = function (e) {
      return typeof e == "object";
    },
    _t = function (e) {
      return e !== !1;
    },
    ua = function () {
      return typeof window < "u";
    },
    rs = function (e) {
      return Ae(e) || We(e);
    },
    tl =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    rt = Array.isArray,
    da = /(?:-?\.?\d|\.)+/gi,
    il = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Or = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    fa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    rl = /[+-]=-?[.\d]+/,
    nl = /[^,'"\[\]\s]+/gi,
    cd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ee,
    ui,
    pa,
    ha,
    Pt = {},
    ns = {},
    sl,
    al = function (e) {
      return (ns = Lr(e, Pt)) && Et;
    },
    ma = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    cn = function (e, t) {
      return !t && console.warn(e);
    },
    ol = function (e, t) {
      return (e && (Pt[e] = t) && ns && (ns[e] = t)) || Pt;
    },
    un = function () {
      return 0;
    },
    ud = { suppressEvents: !0, isStart: !0, kill: !1 },
    ss = { suppressEvents: !0, kill: !1 },
    dd = { suppressEvents: !0 },
    ga = {},
    Ii = [],
    wa = {},
    ll,
    Ot = {},
    va = {},
    cl = 30,
    as = [],
    ya = "",
    ba = function (e) {
      var t = e[0],
        i,
        r;
      if ((ci(t) || Ae(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = as.length; r-- && !as[r].targetTest(t); );
        i = as[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Fl(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    Ji = function (e) {
      return e._gsap || ba(Gt(e))[0]._gsap;
    },
    ul = function (e, t, i) {
      return (i = e[t]) && Ae(i)
        ? e[t]()
        : (ca(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    St = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Oe = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    De = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Ir = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    fd = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    os = function () {
      var e = Ii.length,
        t = Ii.slice(0),
        i,
        r;
      for (wa = {}, Ii.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    _a = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    dl = function (e, t, i, r) {
      Ii.length && !Ze && os(),
        e.render(t, i, !!(Ze && t < 0 && _a(e))),
        Ii.length && !Ze && os();
    },
    fl = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(nl).length < 2
        ? t
        : We(e)
        ? e.trim()
        : e;
    },
    pl = function (e) {
      return e;
    },
    It = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    pd = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    Lr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    hl = function n(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = ci(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    ls = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    dn = function (e) {
      var t = e.parent || Ee,
        i = e.keyframes ? pd(rt(e.keyframes)) : It;
      if (_t(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    hd = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    ml = function (e, t, i, r, s) {
      var a = e[r],
        o;
      if (s) for (o = t[s]; a && a[s] > o; ) a = a._prev;
      return (
        a
          ? ((t._next = a._next), (a._next = t))
          : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[r] = t),
        (t._prev = a),
        (t.parent = t._dp = e),
        t
      );
    },
    cs = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var s = t._prev,
        a = t._next;
      s ? (s._next = a) : e[i] === t && (e[i] = a),
        a ? (a._prev = s) : e[r] === t && (e[r] = s),
        (t._next = t._prev = t.parent = null);
    },
    Li = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    Qi = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    md = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    Sa = function (e, t, i, r) {
      return (
        e._startAt &&
        (Ze
          ? e._startAt.revert(ss)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    gd = function n(e) {
      return !e || (e._ts && n(e.parent));
    },
    gl = function (e) {
      return e._repeat ? Dr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Dr = function (e, t) {
      var i = Math.floor((e = De(e / t)));
      return e && i === e ? i - 1 : i;
    },
    us = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    ds = function (e) {
      return (e._end = De(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || it) || 0)
      ));
    },
    fs = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = De(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          ds(e),
          i._dirty || Qi(i, e)),
        e
      );
    },
    wl = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = us(e.rawTime(), t)),
          (!t._dur || pn(0, t.totalDuration(), i) - t._tTime > it) &&
            t.render(i, !0)),
        Qi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -1e-8;
      }
    },
    di = function (e, t, i, r) {
      return (
        t.parent && Li(t),
        (t._start = De(
          (_i(i) ? i : i || e !== Ee ? qt(e, i, t) : e._time) + t._delay
        )),
        (t._end = De(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        ml(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Ta(t) || (e._recent = t),
        r || wl(e, t),
        e._ts < 0 && fs(e, e._tTime),
        e
      );
    },
    vl = function (e, t) {
      return (
        (Pt.ScrollTrigger || ma("scrollTrigger", t)) &&
        Pt.ScrollTrigger.create(t, e)
      );
    },
    yl = function (e, t, i, r, s) {
      if ((Ia(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Ze &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        ll !== Dt.frame
      )
        return Ii.push(e), (e._lazy = [s, r]), 1;
    },
    wd = function n(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
    },
    Ta = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    vd = function (e, t, i, r) {
      var s = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && wd(e) && !(!e._initted && Ta(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Ta(e))))
            ? 0
            : 1,
        o = e._rDelay,
        l = 0,
        c,
        u,
        h;
      if (
        (o &&
          e._repeat &&
          ((l = pn(0, e._tDur, t)),
          (u = Dr(l, o)),
          e._yoyo && u & 1 && (a = 1 - a),
          u !== Dr(e._tTime, o) &&
            ((s = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== s || Ze || r || e._zTime === it || (!t && e._zTime))
      ) {
        if (!e._initted && yl(e, t, r, i, l)) return;
        for (
          h = e._zTime,
            e._zTime = t || (i ? it : 0),
            i || (i = t && !h),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            c = e._pt;
          c;

        )
          c.r(a, c.d), (c = c._next);
        t < 0 && Sa(e, t, i, !0),
          e._onUpdate && !i && Lt(e, "onUpdate"),
          l && e._repeat && !i && e.parent && Lt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && Li(e, 1),
            !i &&
              !Ze &&
              (Lt(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    yd = function (e, t, i) {
      var r;
      if (i > t)
        for (r = e._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > t) return r;
          r = r._next;
        }
      else
        for (r = e._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < t) return r;
          r = r._prev;
        }
    },
    zr = function (e, t, i, r) {
      var s = e._repeat,
        a = De(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = s ? (s < 0 ? 1e10 : De(a * (s + 1) + e._rDelay * s)) : a),
        o > 0 && !r && fs(e, (e._tTime = e._tDur * o)),
        e.parent && ds(e),
        i || Qi(e.parent, e),
        e
      );
    },
    bl = function (e) {
      return e instanceof pt ? Qi(e) : zr(e, e._dur);
    },
    bd = { _start: 0, endTime: un, totalDuration: un },
    qt = function n(e, t, i) {
      var r = e.labels,
        s = e._recent || bd,
        a = e.duration() >= li ? s.endTime(!1) : e._dur,
        o,
        l,
        c;
      return We(t) && (isNaN(t) || t in r)
        ? ((l = t.charAt(0)),
          (c = t.substr(-1) === "%"),
          (o = t.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (c ? (o < 0 ? s : i).totalDuration() / 100 : 1))
            : o < 0
            ? (t in r || (r[t] = a), r[t])
            : ((l = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
              c && i && (l = (l / 100) * (rt(i) ? i[0] : i).totalDuration()),
              o > 1 ? n(e, t.substr(0, o - 1), i) + l : a + l))
        : t == null
        ? a
        : +t;
    },
    fn = function (e, t, i) {
      var r = _i(t[1]),
        s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[s],
        o,
        l;
      if ((r && (a.duration = t[1]), (a.parent = i), e)) {
        for (o = a, l = i; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = _t(l.vars.inherit) && l.parent);
        (a.immediateRender = _t(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
      }
      return new ze(t[0], a, t[s + 1]);
    },
    Di = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    pn = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    nt = function (e, t) {
      return !We(e) || !(t = cd.exec(e)) ? "" : t[1];
    },
    _d = function (e, t, i) {
      return Di(i, function (r) {
        return pn(e, t, r);
      });
    },
    Ea = [].slice,
    _l = function (e, t) {
      return (
        e &&
        ci(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && ci(e[0]))) &&
        !e.nodeType &&
        e !== ui
      );
    },
    Sd = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var s;
          return (We(r) && !t) || _l(r, 1)
            ? (s = i).push.apply(s, Gt(r))
            : i.push(r);
        }) || i
      );
    },
    Gt = function (e, t, i) {
      return ye && !t && ye.selector
        ? ye.selector(e)
        : We(e) && !i && (pa || !Nr())
        ? Ea.call((t || ha).querySelectorAll(e), 0)
        : rt(e)
        ? Sd(e, i)
        : _l(e)
        ? Ea.call(e, 0)
        : e
        ? [e]
        : [];
    },
    xa = function (e) {
      return (
        (e = Gt(e)[0] || cn("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Gt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? cn("Invalid scope") || ha.createElement("div")
              : e
          );
        }
      );
    },
    Sl = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Tl = function (e) {
      if (Ae(e)) return e;
      var t = ci(e) ? e : { each: e },
        i = er(t.ease),
        r = t.from || 0,
        s = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        c = t.axis,
        u = r,
        h = r;
      return (
        We(r)
          ? (u = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((u = r[0]), (h = r[1])),
        function (m, p, d) {
          var f = (d || t).length,
            w = a[f],
            b,
            v,
            g,
            y,
            _,
            A,
            M,
            E,
            k;
          if (!w) {
            if (((k = t.grid === "auto" ? 0 : (t.grid || [1, li])[1]), !k)) {
              for (
                M = -1e8;
                M < (M = d[k++].getBoundingClientRect().left) && k < f;

              );
              k < f && k--;
            }
            for (
              w = a[f] = [],
                b = l ? Math.min(k, f) * u - 0.5 : r % k,
                v = k === li ? 0 : l ? (f * h) / k - 0.5 : (r / k) | 0,
                M = 0,
                E = li,
                A = 0;
              A < f;
              A++
            )
              (g = (A % k) - b),
                (y = v - ((A / k) | 0)),
                (w[A] = _ =
                  c ? Math.abs(c === "y" ? y : g) : el(g * g + y * y)),
                _ > M && (M = _),
                _ < E && (E = _);
            r === "random" && Sl(w),
              (w.max = M - E),
              (w.min = E),
              (w.v = f =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (k > f
                      ? f - 1
                      : c
                      ? c === "y"
                        ? f / k
                        : k
                      : Math.max(k, f / k)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (w.b = f < 0 ? s - f : s),
              (w.u = nt(t.amount || t.each) || 0),
              (i = i && f < 0 ? zl(i) : i);
          }
          return (
            (f = (w[m] - w.min) / w.max || 0),
            De(w.b + (i ? i(f) : f) * w.v) + w.u
          );
        }
      );
    },
    Ma = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = De(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (_i(i) ? 0 : nt(i));
      };
    },
    El = function (e, t) {
      var i = rt(e),
        r,
        s;
      return (
        !i &&
          ci(e) &&
          ((r = i = e.radius || li),
          e.values
            ? ((e = Gt(e.values)), (s = !_i(e[0])) && (r *= r))
            : (e = Ma(e.increment))),
        Di(
          t,
          i
            ? Ae(e)
              ? function (a) {
                  return (s = e(a)), Math.abs(s - a) <= r ? s : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(s ? a.x : a),
                      l = parseFloat(s ? a.y : 0),
                      c = li,
                      u = 0,
                      h = e.length,
                      m,
                      p;
                    h--;

                  )
                    s
                      ? ((m = e[h].x - o),
                        (p = e[h].y - l),
                        (m = m * m + p * p))
                      : (m = Math.abs(e[h] - o)),
                      m < c && ((c = m), (u = h));
                  return (
                    (u = !r || c <= r ? e[u] : a),
                    s || u === a || _i(a) ? u : u + nt(a)
                  );
                }
            : Ma(e)
        )
      );
    },
    xl = function (e, t, i, r) {
      return Di(rt(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return rt(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    Td = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (s, a) {
          return a(s);
        }, r);
      };
    },
    Ed = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || nt(i));
      };
    },
    xd = function (e, t, i) {
      return Al(e, t, 0, 1, i);
    },
    Ml = function (e, t, i) {
      return Di(i, function (r) {
        return e[~~t(r)];
      });
    },
    Md = function n(e, t, i) {
      var r = t - e;
      return rt(e)
        ? Ml(e, n(0, e.length), t)
        : Di(i, function (s) {
            return ((r + ((s - e) % r)) % r) + e;
          });
    },
    Ad = function n(e, t, i) {
      var r = t - e,
        s = r * 2;
      return rt(e)
        ? Ml(e, n(0, e.length - 1), t)
        : Di(i, function (a) {
            return (a = (s + ((a - e) % s)) % s || 0), e + (a > r ? s - a : a);
          });
    },
    hn = function (e) {
      for (var t = 0, i = "", r, s, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (s = e.substr(r + 7, a - r - 7).match(o ? nl : da)),
          (i +=
            e.substr(t, r - t) +
            xl(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    Al = function (e, t, i, r, s) {
      var a = t - e,
        o = r - i;
      return Di(s, function (l) {
        return i + (((l - e) / a) * o || 0);
      });
    },
    kd = function n(e, t, i, r) {
      var s = isNaN(e + t)
        ? 0
        : function (p) {
            return (1 - p) * e + p * t;
          };
      if (!s) {
        var a = We(e),
          o = {},
          l,
          c,
          u,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (rt(e) && !rt(t)) {
          for (u = [], h = e.length, m = h - 2, c = 1; c < h; c++)
            u.push(n(e[c - 1], e[c]));
          h--,
            (s = function (d) {
              d *= h;
              var f = Math.min(m, ~~d);
              return u[f](d - f);
            }),
            (i = t);
        } else r || (e = Lr(rt(e) ? [] : {}, e));
        if (!u) {
          for (l in t) Pa.call(o, e, l, "get", t[l]);
          s = function (d) {
            return za(d, o) || (a ? e.p : e);
          };
        }
      }
      return Di(i, s);
    },
    kl = function (e, t, i) {
      var r = e.labels,
        s = li,
        a,
        o,
        l;
      for (a in r)
        (o = r[a] - t),
          o < 0 == !!i && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
      return l;
    },
    Lt = function (e, t, i) {
      var r = e.vars,
        s = r[t],
        a = ye,
        o = e._ctx,
        l,
        c,
        u;
      if (s)
        return (
          (l = r[t + "Params"]),
          (c = r.callbackScope || e),
          i && Ii.length && os(),
          o && (ye = o),
          (u = l ? s.apply(c, l) : s.call(c)),
          (ye = a),
          u
        );
    },
    mn = function (e) {
      return (
        Li(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ze),
        e.progress() < 1 && Lt(e, "onInterrupt"),
        e
      );
    },
    Rr,
    Cl = [],
    Pl = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), ua() || e.headless)) {
          var t = e.name,
            i = Ae(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: un,
              render: za,
              add: Pa,
              kill: Vd,
              modifier: Wd,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Da,
              aliases: {},
              register: 0,
            };
          if ((Nr(), e !== r)) {
            if (Ot[t]) return;
            It(r, It(ls(e, s), a)),
              Lr(r.prototype, Lr(s, ls(e, a))),
              (Ot[(r.prop = t)] = r),
              e.targetTest && (as.push(r), (ga[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          ol(t, r), e.register && e.register(Et, r, Tt);
        } else Cl.push(e);
    },
    he = 255,
    gn = {
      aqua: [0, he, he],
      lime: [0, he, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, he],
      navy: [0, 0, 128],
      white: [he, he, he],
      olive: [128, 128, 0],
      yellow: [he, he, 0],
      orange: [he, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [he, 0, 0],
      pink: [he, 192, 203],
      cyan: [0, he, he],
      transparent: [he, he, he, 0],
    },
    Aa = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          he +
          0.5) |
          0
      );
    },
    Ol = function (e, t, i) {
      var r = e ? (_i(e) ? [e >> 16, (e >> 8) & he, e & he] : 0) : gn.black,
        s,
        a,
        o,
        l,
        c,
        u,
        h,
        m,
        p,
        d;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), gn[e]))
          r = gn[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((s = e.charAt(1)),
              (a = e.charAt(2)),
              (o = e.charAt(3)),
              (e =
                "#" +
                s +
                s +
                a +
                a +
                o +
                o +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (r = parseInt(e.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & he, r & he, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & he, e & he]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = d = e.match(da)), !t))
            (l = (+r[0] % 360) / 360),
              (c = +r[1] / 100),
              (u = +r[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (s = u * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = Aa(l + 1 / 3, s, a)),
              (r[1] = Aa(l, s, a)),
              (r[2] = Aa(l - 1 / 3, s, a));
          else if (~e.indexOf("="))
            return (r = e.match(il)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(da) || gn.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !d &&
          ((s = r[0] / he),
          (a = r[1] / he),
          (o = r[2] / he),
          (h = Math.max(s, a, o)),
          (m = Math.min(s, a, o)),
          (u = (h + m) / 2),
          h === m
            ? (l = c = 0)
            : ((p = h - m),
              (c = u > 0.5 ? p / (2 - h - m) : p / (h + m)),
              (l =
                h === s
                  ? (a - o) / p + (a < o ? 6 : 0)
                  : h === a
                  ? (o - s) / p + 2
                  : (s - a) / p + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(c * 100 + 0.5)),
          (r[2] = ~~(u * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Il = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(zi).forEach(function (s) {
          var a = s.match(Or) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Ll = function (e, t, i) {
      var r = "",
        s = (e + r).match(zi),
        a = t ? "hsla(" : "rgba(",
        o = 0,
        l,
        c,
        u,
        h;
      if (!s) return e;
      if (
        ((s = s.map(function (m) {
          return (
            (m = Ol(m, t, 1)) &&
            a +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((u = Il(e)), (l = i.c), l.join(r) !== u.c.join(r)))
      )
        for (c = e.replace(zi, "1").split(Or), h = c.length - 1; o < h; o++)
          r +=
            c[o] +
            (~l.indexOf(o)
              ? s.shift() || a + "0,0,0,0)"
              : (u.length ? u : s.length ? s : i).shift());
      if (!c)
        for (c = e.split(zi), h = c.length - 1; o < h; o++) r += c[o] + s[o];
      return r + c[h];
    },
    zi = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in gn) n += "|" + e + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    Cd = /hsl[a]?\(/,
    Dl = function (e) {
      var t = e.join(" "),
        i;
      if (((zi.lastIndex = 0), zi.test(t)))
        return (
          (i = Cd.test(t)),
          (e[1] = Ll(e[1], i)),
          (e[0] = Ll(e[0], i, Il(e[1]))),
          !0
        );
    },
    wn,
    Dt = (function () {
      var n = Date.now,
        e = 500,
        t = 33,
        i = n(),
        r = i,
        s = 1e3 / 240,
        a = s,
        o = [],
        l,
        c,
        u,
        h,
        m,
        p,
        d = function f(w) {
          var b = n() - r,
            v = w === !0,
            g,
            y,
            _,
            A;
          if (
            ((b > e || b < 0) && (i += b - t),
            (r += b),
            (_ = r - i),
            (g = _ - a),
            (g > 0 || v) &&
              ((A = ++h.frame),
              (m = _ - h.time * 1e3),
              (h.time = _ = _ / 1e3),
              (a += g + (g >= s ? 4 : s - g)),
              (y = 1)),
            v || (l = c(f)),
            y)
          )
            for (p = 0; p < o.length; p++) o[p](_, m, A, w);
        };
      return (
        (h = {
          time: 0,
          frame: 0,
          tick: function () {
            d(!0);
          },
          deltaRatio: function (w) {
            return m / (1e3 / (w || 60));
          },
          wake: function () {
            sl &&
              (!pa &&
                ua() &&
                ((ui = pa = window),
                (ha = ui.document || {}),
                (Pt.gsap = Et),
                (ui.gsapVersions || (ui.gsapVersions = [])).push(Et.version),
                al(ns || ui.GreenSockGlobals || (!ui.gsap && ui) || {}),
                Cl.forEach(Pl)),
              (u = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && h.sleep(),
              (c =
                u ||
                function (w) {
                  return setTimeout(w, (a - h.time * 1e3 + 1) | 0);
                }),
              (wn = 1),
              d(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (wn = 0), (c = un);
          },
          lagSmoothing: function (w, b) {
            (e = w || 1 / 0), (t = Math.min(b || 33, e));
          },
          fps: function (w) {
            (s = 1e3 / (w || 240)), (a = h.time * 1e3 + s);
          },
          add: function (w, b, v) {
            var g = b
              ? function (y, _, A, M) {
                  w(y, _, A, M), h.remove(g);
                }
              : w;
            return h.remove(w), o[v ? "unshift" : "push"](g), Nr(), g;
          },
          remove: function (w, b) {
            ~(b = o.indexOf(w)) && o.splice(b, 1) && p >= b && p--;
          },
          _listeners: o,
        }),
        h
      );
    })(),
    Nr = function () {
      return !wn && Dt.wake();
    },
    oe = {},
    Pd = /^[\d.\-M][\d.\-,\s]/,
    Od = /["']/g,
    Id = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          s = 1,
          a = i.length,
          o,
          l,
          c;
        s < a;
        s++
      )
        (l = i[s]),
          (o = s !== a - 1 ? l.lastIndexOf(",") : l.length),
          (c = l.substr(0, o)),
          (t[r] = isNaN(c) ? c.replace(Od, "").trim() : +c),
          (r = l.substr(o + 1).trim());
      return t;
    },
    Ld = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    Dd = function (e) {
      var t = (e + "").split("("),
        i = oe[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Id(t[1])] : Ld(e).split(",").map(fl)
          )
        : oe._CE && Pd.test(e)
        ? oe._CE("", e)
        : i;
    },
    zl = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Rl = function n(e, t) {
      for (var i = e._first, r; i; )
        i instanceof pt
          ? n(i, t)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== t &&
            (i.timeline
              ? n(i.timeline, t)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = t))),
          (i = i._next);
    },
    er = function (e, t) {
      return (e && (Ae(e) ? e : oe[e] || Dd(e))) || t;
    },
    tr = function (e, t, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - t(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
          });
      var s = { easeIn: t, easeOut: i, easeInOut: r },
        a;
      return (
        St(e, function (o) {
          (oe[o] = Pt[o] = s), (oe[(a = o.toLowerCase())] = i);
          for (var l in s)
            oe[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = oe[o + "." + l] = s[l];
        }),
        s
      );
    },
    Nl = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    ka = function n(e, t, i) {
      var r = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (s / la) * (Math.asin(1 / r) || 0),
        o = function (u) {
          return u === 1 ? 1 : r * Math.pow(2, -10 * u) * ld((u - a) * s) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : Nl(o);
      return (
        (s = la / s),
        (l.config = function (c, u) {
          return n(e, c, u);
        }),
        l
      );
    },
    Ca = function n(e, t) {
      t === void 0 && (t = 1.70158);
      var i = function (a) {
          return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
        },
        r =
          e === "out"
            ? i
            : e === "in"
            ? function (s) {
                return 1 - i(1 - s);
              }
            : Nl(i);
      return (
        (r.config = function (s) {
          return n(e, s);
        }),
        r
      );
    };
  St("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    tr(
      n + ",Power" + (t - 1),
      e
        ? function (i) {
            return Math.pow(i, t);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, t);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, t) / 2
          : 1 - Math.pow((1 - i) * 2, t) / 2;
      }
    );
  }),
    (oe.Linear.easeNone = oe.none = oe.Linear.easeIn),
    tr("Elastic", ka("in"), ka("out"), ka()),
    (function (n, e) {
      var t = 1 / e,
        i = 2 * t,
        r = 2.5 * t,
        s = function (o) {
          return o < t
            ? n * o * o
            : o < i
            ? n * Math.pow(o - 1.5 / e, 2) + 0.75
            : o < r
            ? n * (o -= 2.25 / e) * o + 0.9375
            : n * Math.pow(o - 2.625 / e, 2) + 0.984375;
        };
      tr(
        "Bounce",
        function (a) {
          return 1 - s(1 - a);
        },
        s
      );
    })(7.5625, 2.75),
    tr("Expo", function (n) {
      return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
    }),
    tr("Circ", function (n) {
      return -(el(1 - n * n) - 1);
    }),
    tr("Sine", function (n) {
      return n === 1 ? 1 : -od(n * sd) + 1;
    }),
    tr("Back", Ca("in"), Ca("out"), Ca()),
    (oe.SteppedEase =
      oe.steps =
      Pt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              a = 1 - it;
            return function (o) {
              return (((r * pn(0, a, o)) | 0) + s) * i;
            };
          },
        }),
    (Pr.ease = oe["quad.out"]),
    St(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (n) {
        return (ya += n + "," + n + "Params,");
      }
    );
  var Fl = function (e, t) {
      (this.id = ad++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : ul),
        (this.set = t ? t.getSetter : Da);
    },
    vn = (function () {
      function n(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          zr(this, +t.duration, 1, 1),
          (this.data = t.data),
          ye && ((this._ctx = ye), ye.data.push(this)),
          wn || Dt.wake();
      }
      var e = n.prototype;
      return (
        (e.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (e.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              zr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((Nr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              fs(this, i), !s._dp || s.parent || wl(s, this);
              s && s.parent;

            )
              s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              di(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === it) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), dl(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + gl(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (e.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (e.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  gl(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (i, r) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * s, r)
            : this._repeat
            ? Dr(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === i) return this;
          var s =
            this.parent && this._ts ? us(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
            this.totalTime(
              pn(-Math.abs(this._delay), this.totalDuration(), s),
              r !== !1
            ),
            ds(this),
            md(this)
          );
        }),
        (e.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Nr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== it &&
                        (this._tTime -= it)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && di(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (_t(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? us(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = dd);
          var r = Ze;
          return (
            (Ze = i),
            _a(this) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (Ze = r),
            this
          );
        }),
        (e.globalTime = function (i) {
          for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
            (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : s;
        }),
        (e.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), bl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), bl(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(qt(this, i), _t(r));
        }),
        (e.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, _t(r)),
            this._dur || (this._zTime = -1e-8),
            this
          );
        }),
        (e.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            s;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (s = i.rawTime(!0)) >= r &&
              s < this.endTime(!0) - it)
          );
        }),
        (e.eventCallback = function (i, r, s) {
          var a = this.vars;
          return arguments.length > 1
            ? (r
                ? ((a[i] = r),
                  s && (a[i + "Params"] = s),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete a[i],
              this)
            : a[i];
        }),
        (e.then = function (i) {
          var r = this;
          return new Promise(function (s) {
            var a = Ae(i) ? i : pl,
              o = function () {
                var c = r.then;
                (r.then = null),
                  Ae(a) && (a = a(r)) && (a.then || a === r) && (r.then = c),
                  s(a),
                  (r.then = c);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? o()
              : (r._prom = o);
          });
        }),
        (e.kill = function () {
          mn(this);
        }),
        n
      );
    })();
  It(vn.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var pt = (function (n) {
    Ki(e, n);
    function e(i, r) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = n.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = _t(i.sortChildren)),
        Ee && di(i.parent || Ee, Ue(s), r),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && vl(Ue(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, s, a) {
        return fn(0, arguments, this), this;
      }),
      (t.from = function (r, s, a) {
        return fn(1, arguments, this), this;
      }),
      (t.fromTo = function (r, s, a, o) {
        return fn(2, arguments, this), this;
      }),
      (t.set = function (r, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          dn(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new ze(r, s, qt(this, a), 1),
          this
        );
      }),
      (t.call = function (r, s, a) {
        return di(this, ze.delayedCall(0, r, s), a);
      }),
      (t.staggerTo = function (r, s, a, o, l, c, u) {
        return (
          (a.duration = s),
          (a.stagger = a.stagger || o),
          (a.onComplete = c),
          (a.onCompleteParams = u),
          (a.parent = this),
          new ze(r, a, qt(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, s, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          (dn(a).immediateRender = _t(a.immediateRender)),
          this.staggerTo(r, s, a, o, l, c, u)
        );
      }),
      (t.staggerFromTo = function (r, s, a, o, l, c, u, h) {
        return (
          (o.startAt = a),
          (dn(o).immediateRender = _t(o.immediateRender)),
          this.staggerTo(r, s, o, l, c, u, h)
        );
      }),
      (t.render = function (r, s, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          c = this._dur,
          u = r <= 0 ? 0 : De(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !c),
          m,
          p,
          d,
          f,
          w,
          b,
          v,
          g,
          y,
          _,
          A,
          M;
        if (
          (this !== Ee && u > l && r >= 0 && (u = l),
          u !== this._tTime || a || h)
        ) {
          if (
            (o !== this._time &&
              c &&
              ((u += this._time - o), (r += this._time - o)),
            (m = u),
            (y = this._start),
            (g = this._ts),
            (b = !g),
            h && (c || (o = this._zTime), (r || !s) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((A = this._yoyo),
              (w = c + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(w * 100 + r, s, a);
            if (
              ((m = De(u % w)),
              u === l
                ? ((f = this._repeat), (m = c))
                : ((_ = De(u / w)),
                  (f = ~~_),
                  f && f === _ && ((m = c), f--),
                  m > c && (m = c)),
              (_ = Dr(this._tTime, w)),
              !o &&
                this._tTime &&
                _ !== f &&
                this._tTime - _ * w - this._dur <= 0 &&
                (_ = f),
              A && f & 1 && ((m = c - m), (M = 1)),
              f !== _ && !this._lock)
            ) {
              var E = A && _ & 1,
                k = E === (A && f & 1);
              if (
                (f < _ && (E = !E),
                (o = E ? 0 : u % c ? c : u),
                (this._lock = 1),
                (this.render(o || (M ? 0 : De(f * w)), s, !c)._lock = 0),
                (this._tTime = u),
                !s && this.parent && Lt(this, "onRepeat"),
                this.vars.repeatRefresh && !M && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  b !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((c = this._dur),
                (l = this._tDur),
                k &&
                  ((this._lock = 2),
                  (o = E ? c : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !M && this.invalidate()),
                (this._lock = 0),
                !this._ts && !b)
              )
                return this;
              Rl(this, M);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = yd(this, De(o), De(m))), v && (u -= m - (m = v._start))),
            (this._tTime = u),
            (this._time = m),
            (this._act = !g),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && u && !s && !_ && (Lt(this, "onStart"), this._tTime !== u))
          )
            return this;
          if (m >= o && r >= 0)
            for (p = this._first; p; ) {
              if (
                ((d = p._next), (p._act || m >= p._start) && p._ts && v !== p)
              ) {
                if (p.parent !== this) return this.render(r, s, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (m - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (m - p._start) * p._ts,
                    s,
                    a
                  ),
                  m !== this._time || (!this._ts && !b))
                ) {
                  (v = 0), d && (u += this._zTime = -1e-8);
                  break;
                }
              }
              p = d;
            }
          else {
            p = this._last;
            for (var x = r < 0 ? r : m; p; ) {
              if (
                ((d = p._prev), (p._act || x <= p._end) && p._ts && v !== p)
              ) {
                if (p.parent !== this) return this.render(r, s, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (x - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (x - p._start) * p._ts,
                    s,
                    a || (Ze && _a(p))
                  ),
                  m !== this._time || (!this._ts && !b))
                ) {
                  (v = 0), d && (u += this._zTime = x ? -1e-8 : it);
                  break;
                }
              }
              p = d;
            }
          }
          if (
            v &&
            !s &&
            (this.pause(),
            (v.render(m >= o ? 0 : -1e-8)._zTime = m >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = y), ds(this), this.render(r, s, a);
          this._onUpdate && !s && Lt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (y === this._start || Math.abs(g) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !c) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  Li(this, 1),
                !s &&
                  !(r < 0 && !o) &&
                  (u || o || !l) &&
                  (Lt(
                    this,
                    u === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(u < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, s) {
        var a = this;
        if ((_i(s) || (s = qt(this, s, r)), !(r instanceof vn))) {
          if (rt(r))
            return (
              r.forEach(function (o) {
                return a.add(o, s);
              }),
              this
            );
          if (We(r)) return this.addLabel(r, s);
          if (Ae(r)) r = ze.delayedCall(0, r);
          else return this;
        }
        return this !== r ? di(this, r, s) : this;
      }),
      (t.getChildren = function (r, s, a, o) {
        r === void 0 && (r = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -1e8);
        for (var l = [], c = this._first; c; )
          c._start >= o &&
            (c instanceof ze
              ? s && l.push(c)
              : (a && l.push(c),
                r && l.push.apply(l, c.getChildren(!0, s, a)))),
            (c = c._next);
        return l;
      }),
      (t.getById = function (r) {
        for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
          if (s[a].vars.id === r) return s[a];
      }),
      (t.remove = function (r) {
        return We(r)
          ? this.removeLabel(r)
          : Ae(r)
          ? this.killTweensOf(r)
          : (r.parent === this && cs(this, r),
            r === this._recent && (this._recent = this._last),
            Qi(this));
      }),
      (t.totalTime = function (r, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = De(
                Dt.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            n.prototype.totalTime.call(this, r, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (r, s) {
        return (this.labels[r] = qt(this, s)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, s, a) {
        var o = ze.delayedCall(0, s || un, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), di(this, o, qt(this, r))
        );
      }),
      (t.removePause = function (r) {
        var s = this._first;
        for (r = qt(this, r); s; )
          s._start === r && s.data === "isPause" && Li(s), (s = s._next);
      }),
      (t.killTweensOf = function (r, s, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          Ri !== o[l] && o[l].kill(r, s);
        return this;
      }),
      (t.getTweensOf = function (r, s) {
        for (var a = [], o = Gt(r), l = this._first, c = _i(s), u; l; )
          l instanceof ze
            ? fd(l._targets, o) &&
              (c
                ? (!Ri || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              a.push(l)
            : (u = l.getTweensOf(o, s)).length && a.push.apply(a, u),
            (l = l._next);
        return a;
      }),
      (t.tweenTo = function (r, s) {
        s = s || {};
        var a = this,
          o = qt(a, r),
          l = s,
          c = l.startAt,
          u = l.onStart,
          h = l.onStartParams,
          m = l.immediateRender,
          p,
          d = ze.to(
            a,
            It(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (o - (c && "time" in c ? c.time : a._time)) / a.timeScale()
                  ) ||
                  it,
                onStart: function () {
                  if ((a.pause(), !p)) {
                    var w =
                      s.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    d._dur !== w && zr(d, w, 0, 1).render(d._time, !0, !0),
                      (p = 1);
                  }
                  u && u.apply(d, h || []);
                },
              },
              s
            )
          );
        return m ? d.render(0) : d;
      }),
      (t.tweenFromTo = function (r, s, a) {
        return this.tweenTo(s, It({ startAt: { time: qt(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), kl(this, qt(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), kl(this, qt(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + it);
      }),
      (t.shiftChildren = function (r, s, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, c; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (s) for (c in l) l[c] >= a && (l[c] += r);
        return Qi(this);
      }),
      (t.invalidate = function (r) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
        return n.prototype.invalidate.call(this, r);
      }),
      (t.clear = function (r) {
        r === void 0 && (r = !0);
        for (var s = this._first, a; s; )
          (a = s._next), this.remove(s), (s = a);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          Qi(this)
        );
      }),
      (t.totalDuration = function (r) {
        var s = 0,
          a = this,
          o = a._last,
          l = li,
          c,
          u,
          h;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -r : r)
          );
        if (a._dirty) {
          for (h = a.parent; o; )
            (c = o._prev),
              o._dirty && o.totalDuration(),
              (u = o._start),
              u > l && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (di(a, o, u - o._delay, 1)._lock = 0))
                : (l = u),
              u < 0 &&
                o._ts &&
                ((s -= u),
                ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                  ((a._start += u / a._ts), (a._time -= u), (a._tTime -= u)),
                a.shiftChildren(-u, !1, -1 / 0),
                (l = 0)),
              o._end > s && o._ts && (s = o._end),
              (o = c);
          zr(a, a === Ee && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Ee._ts && (dl(Ee, us(r, Ee)), (ll = Dt.frame)), Dt.frame >= cl)) {
          cl += Ct.autoSleep || 120;
          var s = Ee._first;
          if ((!s || !s._ts) && Ct.autoSleep && Dt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Dt.sleep();
          }
        }
      }),
      e
    );
  })(vn);
  It(pt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var zd = function (e, t, i, r, s, a, o) {
      var l = new Tt(this._pt, e, t, 0, 1, Vl, null, s),
        c = 0,
        u = 0,
        h,
        m,
        p,
        d,
        f,
        w,
        b,
        v;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (b = ~r.indexOf("random(")) && (r = hn(r)),
          a && ((v = [i, r]), a(v, e, t), (i = v[0]), (r = v[1])),
          m = i.match(fa) || [];
        (h = fa.exec(r));

      )
        (d = h[0]),
          (f = r.substring(c, h.index)),
          p ? (p = (p + 1) % 5) : f.substr(-5) === "rgba(" && (p = 1),
          d !== m[u++] &&
            ((w = parseFloat(m[u - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: f || u === 1 ? f : ",",
              s: w,
              c: d.charAt(1) === "=" ? Ir(w, d) - w : parseFloat(d) - w,
              m: p && p < 4 ? Math.round : 0,
            }),
            (c = fa.lastIndex));
      return (
        (l.c = c < r.length ? r.substring(c, r.length) : ""),
        (l.fp = o),
        (rl.test(r) || b) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Pa = function (e, t, i, r, s, a, o, l, c, u) {
      Ae(r) && (r = r(s || 0, e, a));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : Ae(h)
            ? c
              ? e[
                  t.indexOf("set") || !Ae(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](c)
              : e[t]()
            : h,
        p = Ae(h) ? (c ? $d : Hl) : La,
        d;
      if (
        (We(r) &&
          (~r.indexOf("random(") && (r = hn(r)),
          r.charAt(1) === "=" &&
            ((d = Ir(m, r) + (nt(m) || 0)), (d || d === 0) && (r = d))),
        !u || m !== r || Oa)
      )
        return !isNaN(m * r) && r !== ""
          ? ((d = new Tt(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? Hd : Wl,
              0,
              p
            )),
            c && (d.fp = c),
            o && d.modifier(o, this, e),
            (this._pt = d))
          : (!h && !(t in e) && ma(t, r),
            zd.call(this, e, t, m, r, p, l || Ct.stringFilter, c));
    },
    Rd = function (e, t, i, r, s) {
      if (
        (Ae(e) && (e = yn(e, s, t, i, r)),
        !ci(e) || (e.style && e.nodeType) || rt(e) || tl(e))
      )
        return We(e) ? yn(e, s, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = yn(e[o], s, t, i, r);
      return a;
    },
    Bl = function (e, t, i, r, s, a) {
      var o, l, c, u;
      if (
        Ot[e] &&
        (o = new Ot[e]()).init(
          s,
          o.rawVars ? t[e] : Rd(t[e], r, s, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = l = new Tt(i._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
        i !== Rr)
      )
        for (c = i._ptLookup[i._targets.indexOf(s)], u = o._props.length; u--; )
          c[o._props[u]] = l;
      return o;
    },
    Ri,
    Oa,
    Ia = function n(e, t, i) {
      var r = e.vars,
        s = r.ease,
        a = r.startAt,
        o = r.immediateRender,
        l = r.lazy,
        c = r.onUpdate,
        u = r.runBackwards,
        h = r.yoyoEase,
        m = r.keyframes,
        p = r.autoRevert,
        d = e._dur,
        f = e._startAt,
        w = e._targets,
        b = e.parent,
        v = b && b.data === "nested" ? b.vars.targets : w,
        g = e._overwrite === "auto" && !oa,
        y = e.timeline,
        _,
        A,
        M,
        E,
        k,
        x,
        D,
        S,
        T,
        C,
        L,
        z,
        O;
      if (
        (y && (!m || !s) && (s = "none"),
        (e._ease = er(s, Pr.ease)),
        (e._yEase = h ? zl(er(h === !0 ? s : h, Pr.ease)) : 0),
        h &&
          e._yoyo &&
          !e._repeat &&
          ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
        (e._from = !y && !!r.runBackwards),
        !y || (m && !r.stagger))
      ) {
        if (
          ((S = w[0] ? Ji(w[0]).harness : 0),
          (z = S && r[S.prop]),
          (_ = ls(r, ga)),
          f &&
            (f._zTime < 0 && f.progress(1),
            t < 0 && u && o && !p
              ? f.render(-1, !0)
              : f.revert(u && d ? ss : ud),
            (f._lazy = 0)),
          a)
        ) {
          if (
            (Li(
              (e._startAt = ze.set(
                w,
                It(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: b,
                    immediateRender: !0,
                    lazy: !f && _t(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      c &&
                      function () {
                        return Lt(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ze || (!o && !p)) && e._startAt.revert(ss),
            o && d && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (u && d && !f) {
          if (
            (t && (o = !1),
            (M = It(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !f && _t(l),
                immediateRender: o,
                stagger: 0,
                parent: b,
              },
              _
            )),
            z && (M[S.prop] = z),
            Li((e._startAt = ze.set(w, M))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ze ? e._startAt.revert(ss) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            n(e._startAt, it, it);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (d && _t(l)) || (l && !d), A = 0;
          A < w.length;
          A++
        ) {
          if (
            ((k = w[A]),
            (D = k._gsap || ba(w)[A]._gsap),
            (e._ptLookup[A] = C = {}),
            wa[D.id] && Ii.length && os(),
            (L = v === w ? A : v.indexOf(k)),
            S &&
              (T = new S()).init(k, z || _, e, L, v) !== !1 &&
              ((e._pt = E =
                new Tt(e._pt, k, T.name, 0, 1, T.render, T, 0, T.priority)),
              T._props.forEach(function (I) {
                C[I] = E;
              }),
              T.priority && (x = 1)),
            !S || z)
          )
            for (M in _)
              Ot[M] && (T = Bl(M, _, e, L, k, v))
                ? T.priority && (x = 1)
                : (C[M] = E =
                    Pa.call(e, k, M, "get", _[M], L, v, 0, r.stringFilter));
          e._op && e._op[A] && e.kill(k, e._op[A]),
            g &&
              e._pt &&
              ((Ri = e),
              Ee.killTweensOf(k, C, e.globalTime(t)),
              (O = !e.parent),
              (Ri = 0)),
            e._pt && l && (wa[D.id] = 1);
        }
        x && ql(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = c),
        (e._initted = (!e._op || e._pt) && !O),
        m && t <= 0 && y.render(li, !0, !0);
    },
    Nd = function (e, t, i, r, s, a, o, l) {
      var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        u,
        h,
        m,
        p;
      if (!c)
        for (
          c = e._ptCache[t] = [], m = e._ptLookup, p = e._targets.length;
          p--;

        ) {
          if (((u = m[p][t]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
          if (!u)
            return (
              (Oa = 1),
              (e.vars[t] = "+=0"),
              Ia(e, o),
              (Oa = 0),
              l ? cn(t + " not eligible for reset") : 1
            );
          c.push(u);
        }
      for (p = c.length; p--; )
        (h = c[p]),
          (u = h._pt || h),
          (u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + a * u.c),
          (u.c = i - u.s),
          h.e && (h.e = Oe(i) + nt(h.e)),
          h.b && (h.b = u.s + nt(h.b));
    },
    Fd = function (e, t) {
      var i = e[0] ? Ji(e[0]).harness : 0,
        r = i && i.aliases,
        s,
        a,
        o,
        l;
      if (!r) return t;
      s = Lr({}, t);
      for (a in r)
        if (a in s)
          for (l = r[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
      return s;
    },
    Bd = function (e, t, i, r) {
      var s = t.ease || r || "power1.inOut",
        a,
        o;
      if (rt(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (l, c) {
            return o.push({ t: (c / (t.length - 1)) * 100, v: l, e: s });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: s });
    },
    yn = function (e, t, i, r, s) {
      return Ae(e)
        ? e.call(t, i, r, s)
        : We(e) && ~e.indexOf("random(")
        ? hn(e)
        : e;
    },
    $l = ya + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Yl = {};
  St($l + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (Yl[n] = 1);
  });
  var ze = (function (n) {
    Ki(e, n);
    function e(i, r, s, a) {
      var o;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (o = n.call(this, a ? r : dn(r)) || this);
      var l = o.vars,
        c = l.duration,
        u = l.delay,
        h = l.immediateRender,
        m = l.stagger,
        p = l.overwrite,
        d = l.keyframes,
        f = l.defaults,
        w = l.scrollTrigger,
        b = l.yoyoEase,
        v = r.parent || Ee,
        g = (rt(i) || tl(i) ? _i(i[0]) : "length" in r) ? [i] : Gt(i),
        y,
        _,
        A,
        M,
        E,
        k,
        x,
        D;
      if (
        ((o._targets = g.length
          ? ba(g)
          : cn(
              "GSAP target " + i + " not found. https://gsap.com",
              !Ct.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        d || m || rs(c) || rs(u))
      ) {
        if (
          ((r = o.vars),
          (y = o.timeline =
            new pt({
              data: "nested",
              defaults: f || {},
              targets: v && v.data === "nested" ? v.vars.targets : g,
            })),
          y.kill(),
          (y.parent = y._dp = Ue(o)),
          (y._start = 0),
          m || rs(c) || rs(u))
        ) {
          if (((M = g.length), (x = m && Tl(m)), ci(m)))
            for (E in m) ~$l.indexOf(E) && (D || (D = {}), (D[E] = m[E]));
          for (_ = 0; _ < M; _++)
            (A = ls(r, Yl)),
              (A.stagger = 0),
              b && (A.yoyoEase = b),
              D && Lr(A, D),
              (k = g[_]),
              (A.duration = +yn(c, Ue(o), _, k, g)),
              (A.delay = (+yn(u, Ue(o), _, k, g) || 0) - o._delay),
              !m &&
                M === 1 &&
                A.delay &&
                ((o._delay = u = A.delay), (o._start += u), (A.delay = 0)),
              y.to(k, A, x ? x(_, k, g) : 0),
              (y._ease = oe.none);
          y.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (d) {
          dn(It(y.vars.defaults, { ease: "none" })),
            (y._ease = er(d.ease || r.ease || "none"));
          var S = 0,
            T,
            C,
            L;
          if (rt(d))
            d.forEach(function (z) {
              return y.to(g, z, ">");
            }),
              y.duration();
          else {
            A = {};
            for (E in d)
              E === "ease" || E === "easeEach" || Bd(E, d[E], A, d.easeEach);
            for (E in A)
              for (
                T = A[E].sort(function (z, O) {
                  return z.t - O.t;
                }),
                  S = 0,
                  _ = 0;
                _ < T.length;
                _++
              )
                (C = T[_]),
                  (L = {
                    ease: C.e,
                    duration: ((C.t - (_ ? T[_ - 1].t : 0)) / 100) * c,
                  }),
                  (L[E] = C.v),
                  y.to(g, L, S),
                  (S += L.duration);
            y.duration() < c && y.to({}, { duration: c - y.duration() });
          }
        }
        c || o.duration((c = y.duration()));
      } else o.timeline = 0;
      return (
        p === !0 && !oa && ((Ri = Ue(o)), Ee.killTweensOf(g), (Ri = 0)),
        di(v, Ue(o), s),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (h ||
          (!c &&
            !d &&
            o._start === De(v._time) &&
            _t(h) &&
            gd(Ue(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -u) || 0)),
        w && vl(Ue(o), w),
        o
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, s, a) {
        var o = this._time,
          l = this._tDur,
          c = this._dur,
          u = r < 0,
          h = r > l - it && !u ? l : r < it ? 0 : r,
          m,
          p,
          d,
          f,
          w,
          b,
          v,
          g,
          y;
        if (!c) vd(this, r, s, a);
        else if (
          h !== this._tTime ||
          !r ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u) ||
          this._lazy
        ) {
          if (((m = h), (g = this.timeline), this._repeat)) {
            if (((f = c + this._rDelay), this._repeat < -1 && u))
              return this.totalTime(f * 100 + r, s, a);
            if (
              ((m = De(h % f)),
              h === l
                ? ((d = this._repeat), (m = c))
                : ((w = De(h / f)),
                  (d = ~~w),
                  d && d === w ? ((m = c), d--) : m > c && (m = c)),
              (b = this._yoyo && d & 1),
              b && ((y = this._yEase), (m = c - m)),
              (w = Dr(this._tTime, f)),
              m === o && !a && this._initted && d === w)
            )
              return (this._tTime = h), this;
            d !== w &&
              (g && this._yEase && Rl(g, b),
              this.vars.repeatRefresh &&
                !b &&
                !this._lock &&
                m !== f &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(De(f * d), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (yl(this, u ? r : m, a, s, h)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && d !== w))
              return this;
            if (c !== this._dur) return this.render(r, s, a);
          }
          if (
            ((this._tTime = h),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = v = (y || this._ease)(m / c)),
            this._from && (this.ratio = v = 1 - v),
            !o && h && !s && !w && (Lt(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(v, p.d), (p = p._next);
          (g && g.render(r < 0 ? r : g._dur * g._ease(m / this._dur), s, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (u && Sa(this, r, s, a), Lt(this, "onUpdate")),
            this._repeat &&
              d !== w &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              Lt(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (u && !this._onUpdate && Sa(this, r, !0, !0),
              (r || !c) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                Li(this, 1),
              !s &&
                !(u && !o) &&
                (h || o || b) &&
                (Lt(this, h === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(h < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          n.prototype.invalidate.call(this, r)
        );
      }),
      (t.resetTo = function (r, s, a, o, l) {
        wn || Dt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || Ia(this, c),
          (u = this._ease(c / this._dur)),
          Nd(this, r, s, a, o, u, c, l)
            ? this.resetTo(r, s, a, o, 1)
            : (fs(this, 0),
              this.parent ||
                ml(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (r, s) {
        if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? mn(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ze),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, s, Ri && Ri.vars.overwrite !== !0)
              ._first || mn(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              zr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? Gt(r) : o,
          c = this._ptLookup,
          u = this._pt,
          h,
          m,
          p,
          d,
          f,
          w,
          b;
        if ((!s || s === "all") && hd(o, l))
          return s === "all" && (this._pt = 0), mn(this);
        for (
          h = this._op = this._op || [],
            s !== "all" &&
              (We(s) &&
                ((f = {}),
                St(s, function (v) {
                  return (f[v] = 1);
                }),
                (s = f)),
              (s = Fd(o, s))),
            b = o.length;
          b--;

        )
          if (~l.indexOf(o[b])) {
            (m = c[b]),
              s === "all"
                ? ((h[b] = s), (d = m), (p = {}))
                : ((p = h[b] = h[b] || {}), (d = s));
            for (f in d)
              (w = m && m[f]),
                w &&
                  ((!("kill" in w.d) || w.d.kill(f) === !0) &&
                    cs(this, w, "_pt"),
                  delete m[f]),
                p !== "all" && (p[f] = 1);
          }
        return this._initted && !this._pt && u && mn(this), this;
      }),
      (e.to = function (r, s) {
        return new e(r, s, arguments[2]);
      }),
      (e.from = function (r, s) {
        return fn(1, arguments);
      }),
      (e.delayedCall = function (r, s, a, o) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: a,
          onReverseCompleteParams: a,
          callbackScope: o,
        });
      }),
      (e.fromTo = function (r, s, a) {
        return fn(2, arguments);
      }),
      (e.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
      }),
      (e.killTweensOf = function (r, s, a) {
        return Ee.killTweensOf(r, s, a);
      }),
      e
    );
  })(vn);
  It(ze.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    St("staggerTo,staggerFrom,staggerFromTo", function (n) {
      ze[n] = function () {
        var e = new pt(),
          t = Ea.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
      };
    });
  var La = function (e, t, i) {
      return (e[t] = i);
    },
    Hl = function (e, t, i) {
      return e[t](i);
    },
    $d = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    Yd = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    Da = function (e, t) {
      return Ae(e[t]) ? Hl : ca(e[t]) && e.setAttribute ? Yd : La;
    },
    Wl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Hd = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Vl = function (e, t) {
      var i = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (e === 1 && t.e) r = t.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * e)
              : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += t.c;
      }
      t.set(t.t, t.p, r, t);
    },
    za = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    Wd = function (e, t, i, r) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === r && s.modifier(e, t, i), (s = a);
    },
    Vd = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? cs(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    qd = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    ql = function (e) {
      for (var t = e._pt, i, r, s, a; t; ) {
        for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (s = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = s;
    },
    Tt = (function () {
      function n(t, i, r, s, a, o, l, c, u) {
        (this.t = i),
          (this.s = s),
          (this.c = a),
          (this.p = r),
          (this.r = o || Wl),
          (this.d = l || this),
          (this.set = c || La),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = n.prototype;
      return (
        (e.modifier = function (i, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = qd),
            (this.m = i),
            (this.mt = s),
            (this.tween = r);
        }),
        n
      );
    })();
  St(
    ya +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return (ga[n] = 1);
    }
  ),
    (Pt.TweenMax = Pt.TweenLite = ze),
    (Pt.TimelineLite = Pt.TimelineMax = pt),
    (Ee = new pt({
      sortChildren: !1,
      defaults: Pr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Ct.stringFilter = Dl);
  var ir = [],
    ps = {},
    Gd = [],
    Gl = 0,
    jd = 0,
    Ra = function (e) {
      return (ps[e] || Gd).map(function (t) {
        return t();
      });
    },
    Na = function () {
      var e = Date.now(),
        t = [];
      e - Gl > 2 &&
        (Ra("matchMediaInit"),
        ir.forEach(function (i) {
          var r = i.queries,
            s = i.conditions,
            a,
            o,
            l,
            c;
          for (o in r)
            (a = ui.matchMedia(r[o]).matches),
              a && (l = 1),
              a !== s[o] && ((s[o] = a), (c = 1));
          c && (i.revert(), l && t.push(i));
        }),
        Ra("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (Gl = e),
        Ra("matchMedia"));
    },
    jl = (function () {
      function n(t, i) {
        (this.selector = i && xa(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = jd++),
          t && this.add(t);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          Ae(i) && ((s = r), (r = i), (i = Ae));
          var a = this,
            o = function () {
              var c = ye,
                u = a.selector,
                h;
              return (
                c && c !== a && c.data.push(a),
                s && (a.selector = xa(s)),
                (ye = a),
                (h = r.apply(a, arguments)),
                Ae(h) && a._r.push(h),
                (ye = c),
                (a.selector = u),
                (a.isReverted = !1),
                h
              );
            };
          return (
            (a.last = o),
            i === Ae
              ? o(a, function (l) {
                  return a.add(null, l);
                })
              : i
              ? (a[i] = o)
              : o
          );
        }),
        (e.ignore = function (i) {
          var r = ye;
          (ye = null), i(this), (ye = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof n
                ? i.push.apply(i, r.getTweens())
                : r instanceof ze &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (i, r) {
          var s = this;
          if (
            (i
              ? (function () {
                  for (var o = s.getTweens(), l = s.data.length, c; l--; )
                    (c = s.data[l]),
                      c.data === "isFlip" &&
                        (c.revert(),
                        c.getChildren(!0, !0, !1).forEach(function (u) {
                          return o.splice(o.indexOf(u), 1);
                        }));
                  for (
                    o
                      .map(function (u) {
                        return {
                          g:
                            u._dur ||
                            u._delay ||
                            (u._sat && !u._sat.vars.immediateRender)
                              ? u.globalTime(0)
                              : -1 / 0,
                          t: u,
                        };
                      })
                      .sort(function (u, h) {
                        return h.g - u.g || -1 / 0;
                      })
                      .forEach(function (u) {
                        return u.t.revert(i);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (c = s.data[l]),
                      c instanceof pt
                        ? c.data !== "nested" &&
                          (c.scrollTrigger && c.scrollTrigger.revert(),
                          c.kill())
                        : !(c instanceof ze) && c.revert && c.revert(i);
                  s._r.forEach(function (u) {
                    return u(i, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (o) {
                  return o.kill && o.kill();
                }),
            this.clear(),
            r)
          )
            for (var a = ir.length; a--; )
              ir[a].id === this.id && ir.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        n
      );
    })(),
    Xd = (function () {
      function n(t) {
        (this.contexts = []), (this.scope = t), ye && ye.data.push(this);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          ci(i) || (i = { matches: i });
          var a = new jl(0, s || this.scope),
            o = (a.conditions = {}),
            l,
            c,
            u;
          ye && !a.selector && (a.selector = ye.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = i);
          for (c in i)
            c === "all"
              ? (u = 1)
              : ((l = ui.matchMedia(i[c])),
                l &&
                  (ir.indexOf(a) < 0 && ir.push(a),
                  (o[c] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(Na)
                    : l.addEventListener("change", Na)));
          return (
            u &&
              r(a, function (h) {
                return a.add(null, h);
              }),
            this
          );
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        (e.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        n
      );
    })(),
    hs = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return Pl(r);
        });
      },
      timeline: function (e) {
        return new pt(e);
      },
      getTweensOf: function (e, t) {
        return Ee.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        We(e) && (e = Gt(e)[0]);
        var s = Ji(e || {}).get,
          a = i ? pl : fl;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a(((Ot[t] && Ot[t].get) || s)(e, t, i, r))
              : function (o, l, c) {
                  return a(((Ot[o] && Ot[o].get) || s)(e, o, l, c));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Gt(e)), e.length > 1)) {
          var r = e.map(function (u) {
              return Et.quickSetter(u, t, i);
            }),
            s = r.length;
          return function (u) {
            for (var h = s; h--; ) r[h](u);
          };
        }
        e = e[0] || {};
        var a = Ot[t],
          o = Ji(e),
          l = (o.harness && (o.harness.aliases || {})[t]) || t,
          c = a
            ? function (u) {
                var h = new a();
                (Rr._pt = 0),
                  h.init(e, i ? u + i : u, Rr, 0, [e]),
                  h.render(1, h),
                  Rr._pt && za(1, Rr);
              }
            : o.set(e, l);
        return a
          ? c
          : function (u) {
              return c(e, l, i ? u + i : u, o, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          s = Et.to(
            e,
            It(
              ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          a = function (l, c, u) {
            return s.resetTo(t, l, c, u);
          };
        return (a.tween = s), a;
      },
      isTweening: function (e) {
        return Ee.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = er(e.ease, Pr.ease)), hl(Pr, e || {});
      },
      config: function (e) {
        return hl(Ct, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          s = e.defaults,
          a = e.extendTimeline;
        (r || "").split(",").forEach(function (o) {
          return (
            o &&
            !Ot[o] &&
            !Pt[o] &&
            cn(t + " effect requires " + o + " plugin.")
          );
        }),
          (va[t] = function (o, l, c) {
            return i(Gt(o), It(l || {}, s), c);
          }),
          a &&
            (pt.prototype[t] = function (o, l, c) {
              return this.add(va[t](o, ci(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (e, t) {
        oe[e] = er(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? er(e, t) : oe;
      },
      getById: function (e) {
        return Ee.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new pt(e),
          r,
          s;
        for (
          i.smoothChildTiming = _t(e.smoothChildTiming),
            Ee.remove(i),
            i._dp = 0,
            i._time = i._tTime = Ee._time,
            r = Ee._first;
          r;

        )
          (s = r._next),
            (t ||
              !(
                !r._dur &&
                r instanceof ze &&
                r.vars.onComplete === r._targets[0]
              )) &&
              di(i, r, r._start - r._delay),
            (r = s);
        return di(Ee, i, 0), i;
      },
      context: function (e, t) {
        return e ? new jl(e, t) : ye;
      },
      matchMedia: function (e) {
        return new Xd(e);
      },
      matchMediaRefresh: function () {
        return (
          ir.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || Na()
        );
      },
      addEventListener: function (e, t) {
        var i = ps[e] || (ps[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = ps[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: Md,
        wrapYoyo: Ad,
        distribute: Tl,
        random: xl,
        snap: El,
        normalize: xd,
        getUnit: nt,
        clamp: _d,
        splitColor: Ol,
        toArray: Gt,
        selector: xa,
        mapRange: Al,
        pipe: Td,
        unitize: Ed,
        interpolate: kd,
        shuffle: Sl,
      },
      install: al,
      effects: va,
      ticker: Dt,
      updateRoot: pt.updateRoot,
      plugins: Ot,
      globalTimeline: Ee,
      core: {
        PropTween: Tt,
        globals: ol,
        Tween: ze,
        Timeline: pt,
        Animation: vn,
        getCache: Ji,
        _removeLinkedListItem: cs,
        reverting: function () {
          return Ze;
        },
        context: function (e) {
          return e && ye && (ye.data.push(e), (e._ctx = ye)), ye;
        },
        suppressOverwrites: function (e) {
          return (oa = e);
        },
      },
    };
  St("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (hs[n] = ze[n]);
  }),
    Dt.add(pt.updateRoot),
    (Rr = hs.to({}, { duration: 0 }));
  var Ud = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    Zd = function (e, t) {
      var i = e._targets,
        r,
        s,
        a;
      for (r in t)
        for (s = i.length; s--; )
          (a = e._ptLookup[s][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = Ud(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[s], r));
    },
    Fa = function (e, t) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (r, s, a) {
          a._onInit = function (o) {
            var l, c;
            if (
              (We(s) &&
                ((l = {}),
                St(s, function (u) {
                  return (l[u] = 1);
                }),
                (s = l)),
              t)
            ) {
              l = {};
              for (c in s) l[c] = t(s[c]);
              s = l;
            }
            Zd(o, s);
          };
        },
      };
    },
    Et =
      hs.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, r, s) {
            var a, o, l;
            this.tween = i;
            for (a in t)
              (l = e.getAttribute(a) || ""),
                (o = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  t[a],
                  r,
                  s,
                  0,
                  0,
                  a
                )),
                (o.op = a),
                (o.b = l),
                this._props.push(a);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              Ze ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        Fa("roundProps", Ma),
        Fa("modifiers"),
        Fa("snap", El)
      ) || hs;
  (ze.version = pt.version = Et.version = "3.13.0"),
    (sl = 1),
    ua() && Nr(),
    oe.Power0,
    oe.Power1,
    oe.Power2,
    oe.Power3,
    oe.Power4,
    oe.Linear,
    oe.Quad,
    oe.Cubic,
    oe.Quart,
    oe.Quint,
    oe.Strong,
    oe.Elastic,
    oe.Back,
    oe.SteppedEase,
    oe.Bounce,
    oe.Sine,
    oe.Expo,
    oe.Circ;
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Xl,
    Ni,
    Fr,
    Ba,
    rr,
    Ul,
    $a,
    Kd = function () {
      return typeof window < "u";
    },
    Si = {},
    nr = 180 / Math.PI,
    Br = Math.PI / 180,
    $r = Math.atan2,
    Zl = 1e8,
    Ya = /([A-Z])/g,
    Jd = /(left|right|width|margin|padding|x)/i,
    Qd = /[\s,\(]\S/,
    fi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ha = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    ef = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    tf = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    rf = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Kl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Jl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    nf = function (e, t, i) {
      return (e.style[t] = i);
    },
    sf = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    af = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    of = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    lf = function (e, t, i, r, s) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(s, a);
    },
    cf = function (e, t, i, r, s) {
      var a = e._gsap;
      (a[t] = i), a.renderTransform(s, a);
    },
    xe = "transform",
    xt = xe + "Origin",
    uf = function n(e, t) {
      var i = this,
        r = this.target,
        s = r.style,
        a = r._gsap;
      if (e in Si && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = fi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = Ti(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : Ti(r, e)),
            e === xt && (this.tfm.zOrigin = a.zOrigin);
        else
          return fi.transform.split(",").forEach(function (o) {
            return n.call(i, o, t);
          });
        if (this.props.indexOf(xe) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(xt, t, "")),
          (e = xe);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    Ql = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    df = function () {
      var e = this.props,
        t = this.target,
        i = t.style,
        r = t._gsap,
        s,
        a;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? e[s + 1] === 2
            ? t[e[s]](e[s + 2])
            : (t[e[s]] = e[s + 2])
          : e[s + 2]
          ? (i[e[s]] = e[s + 2])
          : i.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(Ya, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = $a()),
          (!s || !s.isStart) &&
            !i[xe] &&
            (Ql(i),
            r.zOrigin &&
              i[xt] &&
              ((i[xt] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    ec = function (e, t) {
      var i = { target: e, props: [], revert: df, save: uf };
      return (
        e._gsap || Et.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    tc,
    Wa = function (e, t) {
      var i = Ni.createElementNS
        ? Ni.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Ni.createElement(e);
      return i && i.style ? i : Ni.createElement(e);
    },
    jt = function n(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(Ya, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && n(e, Yr(t) || t, 1)) ||
        ""
      );
    },
    ic = "O,Moz,ms,Ms,Webkit".split(","),
    Yr = function (e, t, i) {
      var r = t || rr,
        s = r.style,
        a = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(ic[a] + e in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? ic[a] : "") + e;
    },
    Va = function () {
      Kd() &&
        window.document &&
        ((Xl = window),
        (Ni = Xl.document),
        (Fr = Ni.documentElement),
        (rr = Wa("div") || { style: {} }),
        Wa("div"),
        (xe = Yr(xe)),
        (xt = xe + "Origin"),
        (rr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (tc = !!Yr("perspective")),
        ($a = Et.core.reverting),
        (Ba = 1));
    },
    rc = function (e) {
      var t = e.ownerSVGElement,
        i = Wa(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        s;
      (r.style.display = "block"), i.appendChild(r), Fr.appendChild(i);
      try {
        s = r.getBBox();
      } catch {}
      return i.removeChild(r), Fr.removeChild(i), s;
    },
    nc = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    sc = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch {
        (t = rc(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = rc(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +nc(e, ["x", "cx", "x1"]) || 0,
              y: +nc(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    ac = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && sc(e));
    },
    sr = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in Si && t !== xt && (t = xe),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(Ya, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Fi = function (e, t, i, r, s, a) {
      var o = new Tt(e._pt, t, i, 0, 1, a ? Jl : Kl);
      return (e._pt = o), (o.b = r), (o.e = s), e._props.push(i), o;
    },
    oc = { deg: 1, rad: 1, turn: 1 },
    ff = { grid: 1, flex: 1 },
    Bi = function n(e, t, i, r) {
      var s = parseFloat(i) || 0,
        a = (i + "").trim().substr((s + "").length) || "px",
        o = rr.style,
        l = Jd.test(t),
        c = e.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        d,
        f,
        w,
        b;
      if (r === a || !s || oc[r] || oc[a]) return s;
      if (
        (a !== "px" && !m && (s = n(e, t, i, "px")),
        (b = e.getCTM && ac(e)),
        (p || a === "%") && (Si[t] || ~t.indexOf("adius")))
      )
        return (
          (d = b ? e.getBBox()[l ? "width" : "height"] : e[u]),
          Oe(p ? (s / d) * h : (s / 100) * d)
        );
      if (
        ((o[l ? "width" : "height"] = h + (m ? a : r)),
        (f =
          (r !== "rem" && ~t.indexOf("adius")) ||
          (r === "em" && e.appendChild && !c)
            ? e
            : e.parentNode),
        b && (f = (e.ownerSVGElement || {}).parentNode),
        (!f || f === Ni || !f.appendChild) && (f = Ni.body),
        (w = f._gsap),
        w && p && w.width && l && w.time === Dt.time && !w.uncache)
      )
        return Oe((s / w.width) * h);
      if (p && (t === "height" || t === "width")) {
        var v = e.style[t];
        (e.style[t] = h + r), (d = e[u]), v ? (e.style[t] = v) : sr(e, t);
      } else
        (p || a === "%") &&
          !ff[jt(f, "display")] &&
          (o.position = jt(e, "position")),
          f === e && (o.position = "static"),
          f.appendChild(rr),
          (d = rr[u]),
          f.removeChild(rr),
          (o.position = "absolute");
      return (
        l && p && ((w = Ji(f)), (w.time = Dt.time), (w.width = f[u])),
        Oe(m ? (d * s) / h : d && s ? (h / d) * s : 0)
      );
    },
    Ti = function (e, t, i, r) {
      var s;
      return (
        Ba || Va(),
        t in fi &&
          t !== "transform" &&
          ((t = fi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Si[t] && t !== "transform"
          ? ((s = _n(e, r)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : gs(jt(e, xt)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (ms[t] && ms[t](e, t, i)) ||
                jt(e, t) ||
                ul(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Bi(e, t, s, i) + i : s
      );
    },
    pf = function (e, t, i, r) {
      if (!i || i === "none") {
        var s = Yr(t, e, 1),
          a = s && jt(e, s, 1);
        a && a !== i
          ? ((t = s), (i = a))
          : t === "borderColor" && (i = jt(e, "borderTopColor"));
      }
      var o = new Tt(this._pt, e.style, t, 0, 1, Vl),
        l = 0,
        c = 0,
        u,
        h,
        m,
        p,
        d,
        f,
        w,
        b,
        v,
        g,
        y,
        _;
      if (
        ((o.b = i),
        (o.e = r),
        (i += ""),
        (r += ""),
        r.substring(0, 6) === "var(--" &&
          (r = jt(e, r.substring(4, r.indexOf(")")))),
        r === "auto" &&
          ((f = e.style[t]),
          (e.style[t] = r),
          (r = jt(e, t) || r),
          f ? (e.style[t] = f) : sr(e, t)),
        (u = [i, r]),
        Dl(u),
        (i = u[0]),
        (r = u[1]),
        (m = i.match(Or) || []),
        (_ = r.match(Or) || []),
        _.length)
      ) {
        for (; (h = Or.exec(r)); )
          (w = h[0]),
            (v = r.substring(l, h.index)),
            d
              ? (d = (d + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (d = 1),
            w !== (f = m[c++] || "") &&
              ((p = parseFloat(f) || 0),
              (y = f.substr((p + "").length)),
              w.charAt(1) === "=" && (w = Ir(p, w) + y),
              (b = parseFloat(w)),
              (g = w.substr((b + "").length)),
              (l = Or.lastIndex - g.length),
              g ||
                ((g = g || Ct.units[t] || y),
                l === r.length && ((r += g), (o.e += g))),
              y !== g && (p = Bi(e, t, f, g) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || c === 1 ? v : ",",
                s: p,
                c: b - p,
                m: (d && d < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = t === "display" && r === "none" ? Jl : Kl;
      return rl.test(r) && (o.e = 0), (this._pt = o), o;
    },
    lc = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    hf = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = lc[i] || i),
        (t[1] = lc[r] || r),
        t.join(" ")
      );
    },
    mf = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          s = t.u,
          a = i._gsap,
          o,
          l,
          c;
        if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
        else
          for (s = s.split(","), c = s.length; --c > -1; )
            (o = s[c]),
              Si[o] && ((l = 1), (o = o === "transformOrigin" ? xt : xe)),
              sr(i, o);
        l &&
          (sr(i, xe),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            _n(i, 1),
            (a.uncache = 1),
            Ql(r)));
      }
    },
    ms = {
      clearProps: function (e, t, i, r, s) {
        if (s.data !== "isFromStart") {
          var a = (e._pt = new Tt(e._pt, t, i, 0, 0, mf));
          return (a.u = r), (a.pr = -10), (a.tween = s), e._props.push(i), 1;
        }
      },
    },
    bn = [1, 0, 0, 1, 0, 0],
    cc = {},
    uc = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    dc = function (e) {
      var t = jt(e, xe);
      return uc(t) ? bn : t.substr(7).match(il).map(Oe);
    },
    qa = function (e, t) {
      var i = e._gsap || Ji(e),
        r = e.style,
        s = dc(e),
        a,
        o,
        l,
        c;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? bn : s)
        : (s === bn &&
            !e.offsetParent &&
            e !== Fr &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((c = 1), (o = e.nextElementSibling), Fr.appendChild(e)),
            (s = dc(e)),
            l ? (r.display = l) : sr(e, "display"),
            c &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Fr.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Ga = function (e, t, i, r, s, a) {
      var o = e._gsap,
        l = s || qa(e, !0),
        c = o.xOrigin || 0,
        u = o.yOrigin || 0,
        h = o.xOffset || 0,
        m = o.yOffset || 0,
        p = l[0],
        d = l[1],
        f = l[2],
        w = l[3],
        b = l[4],
        v = l[5],
        g = t.split(" "),
        y = parseFloat(g[0]) || 0,
        _ = parseFloat(g[1]) || 0,
        A,
        M,
        E,
        k;
      i
        ? l !== bn &&
          (M = p * w - d * f) &&
          ((E = y * (w / M) + _ * (-f / M) + (f * v - w * b) / M),
          (k = y * (-d / M) + _ * (p / M) - (p * v - d * b) / M),
          (y = E),
          (_ = k))
        : ((A = sc(e)),
          (y = A.x + (~g[0].indexOf("%") ? (y / 100) * A.width : y)),
          (_ =
            A.y + (~(g[1] || g[0]).indexOf("%") ? (_ / 100) * A.height : _))),
        r || (r !== !1 && o.smooth)
          ? ((b = y - c),
            (v = _ - u),
            (o.xOffset = h + (b * p + v * f) - b),
            (o.yOffset = m + (b * d + v * w) - v))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = y),
        (o.yOrigin = _),
        (o.smooth = !!r),
        (o.origin = t),
        (o.originIsAbsolute = !!i),
        (e.style[xt] = "0px 0px"),
        a &&
          (Fi(a, o, "xOrigin", c, y),
          Fi(a, o, "yOrigin", u, _),
          Fi(a, o, "xOffset", h, o.xOffset),
          Fi(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", y + " " + _);
    },
    _n = function (e, t) {
      var i = e._gsap || new Fl(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        s = i.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        c = jt(e, xt) || "0",
        u,
        h,
        m,
        p,
        d,
        f,
        w,
        b,
        v,
        g,
        y,
        _,
        A,
        M,
        E,
        k,
        x,
        D,
        S,
        T,
        C,
        L,
        z,
        O,
        I,
        N,
        P,
        H,
        G,
        re,
        ue,
        B;
      return (
        (u = h = m = f = w = b = v = g = y = 0),
        (p = d = 1),
        (i.svg = !!(e.getCTM && ac(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[xe] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[xe] !== "none" ? l[xe] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (M = qa(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((I = e.getBBox()),
              (c = i.xOrigin - I.x + "px " + (i.yOrigin - I.y) + "px"),
              (O = ""))
            : (O = !t && e.getAttribute("data-svg-origin")),
          Ga(e, O || c, !!O || i.originIsAbsolute, i.smooth !== !1, M)),
        (_ = i.xOrigin || 0),
        (A = i.yOrigin || 0),
        M !== bn &&
          ((D = M[0]),
          (S = M[1]),
          (T = M[2]),
          (C = M[3]),
          (u = L = M[4]),
          (h = z = M[5]),
          M.length === 6
            ? ((p = Math.sqrt(D * D + S * S)),
              (d = Math.sqrt(C * C + T * T)),
              (f = D || S ? $r(S, D) * nr : 0),
              (v = T || C ? $r(T, C) * nr + f : 0),
              v && (d *= Math.abs(Math.cos(v * Br))),
              i.svg && ((u -= _ - (_ * D + A * T)), (h -= A - (_ * S + A * C))))
            : ((B = M[6]),
              (re = M[7]),
              (P = M[8]),
              (H = M[9]),
              (G = M[10]),
              (ue = M[11]),
              (u = M[12]),
              (h = M[13]),
              (m = M[14]),
              (E = $r(B, G)),
              (w = E * nr),
              E &&
                ((k = Math.cos(-E)),
                (x = Math.sin(-E)),
                (O = L * k + P * x),
                (I = z * k + H * x),
                (N = B * k + G * x),
                (P = L * -x + P * k),
                (H = z * -x + H * k),
                (G = B * -x + G * k),
                (ue = re * -x + ue * k),
                (L = O),
                (z = I),
                (B = N)),
              (E = $r(-T, G)),
              (b = E * nr),
              E &&
                ((k = Math.cos(-E)),
                (x = Math.sin(-E)),
                (O = D * k - P * x),
                (I = S * k - H * x),
                (N = T * k - G * x),
                (ue = C * x + ue * k),
                (D = O),
                (S = I),
                (T = N)),
              (E = $r(S, D)),
              (f = E * nr),
              E &&
                ((k = Math.cos(E)),
                (x = Math.sin(E)),
                (O = D * k + S * x),
                (I = L * k + z * x),
                (S = S * k - D * x),
                (z = z * k - L * x),
                (D = O),
                (L = I)),
              w &&
                Math.abs(w) + Math.abs(f) > 359.9 &&
                ((w = f = 0), (b = 180 - b)),
              (p = Oe(Math.sqrt(D * D + S * S + T * T))),
              (d = Oe(Math.sqrt(z * z + B * B))),
              (E = $r(L, z)),
              (v = Math.abs(E) > 2e-4 ? E * nr : 0),
              (y = ue ? 1 / (ue < 0 ? -ue : ue) : 0)),
          i.svg &&
            ((O = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !uc(jt(e, xe))),
            O && e.setAttribute("transform", O))),
        Math.abs(v) > 90 &&
          Math.abs(v) < 270 &&
          (s
            ? ((p *= -1),
              (v += f <= 0 ? 180 : -180),
              (f += f <= 0 ? 180 : -180))
            : ((d *= -1), (v += v <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          u -
          ((i.xPercent =
            u &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
            ? (e.offsetWidth * i.xPercent) / 100
            : 0) +
          a),
        (i.y =
          h -
          ((i.yPercent =
            h &&
            ((!t && i.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
            ? (e.offsetHeight * i.yPercent) / 100
            : 0) +
          a),
        (i.z = m + a),
        (i.scaleX = Oe(p)),
        (i.scaleY = Oe(d)),
        (i.rotation = Oe(f) + o),
        (i.rotationX = Oe(w) + o),
        (i.rotationY = Oe(b) + o),
        (i.skewX = v + o),
        (i.skewY = g + o),
        (i.transformPerspective = y + a),
        (i.zOrigin = parseFloat(c.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[xt] = gs(c)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Ct.force3D),
        (i.renderTransform = i.svg ? wf : tc ? fc : gf),
        (i.uncache = 0),
        i
      );
    },
    gs = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    ja = function (e, t, i) {
      var r = nt(t);
      return Oe(parseFloat(t) + parseFloat(Bi(e, "x", i + "px", r))) + r;
    },
    gf = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        fc(e, t);
    },
    ar = "0deg",
    Sn = "0px",
    or = ") ",
    fc = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.z,
        c = i.rotation,
        u = i.rotationY,
        h = i.rotationX,
        m = i.skewX,
        p = i.skewY,
        d = i.scaleX,
        f = i.scaleY,
        w = i.transformPerspective,
        b = i.force3D,
        v = i.target,
        g = i.zOrigin,
        y = "",
        _ = (b === "auto" && e && e !== 1) || b === !0;
      if (g && (h !== ar || u !== ar)) {
        var A = parseFloat(u) * Br,
          M = Math.sin(A),
          E = Math.cos(A),
          k;
        (A = parseFloat(h) * Br),
          (k = Math.cos(A)),
          (a = ja(v, a, M * k * -g)),
          (o = ja(v, o, -Math.sin(A) * -g)),
          (l = ja(v, l, E * k * -g + g));
      }
      w !== Sn && (y += "perspective(" + w + or),
        (r || s) && (y += "translate(" + r + "%, " + s + "%) "),
        (_ || a !== Sn || o !== Sn || l !== Sn) &&
          (y +=
            l !== Sn || _
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + or),
        c !== ar && (y += "rotate(" + c + or),
        u !== ar && (y += "rotateY(" + u + or),
        h !== ar && (y += "rotateX(" + h + or),
        (m !== ar || p !== ar) && (y += "skew(" + m + ", " + p + or),
        (d !== 1 || f !== 1) && (y += "scale(" + d + ", " + f + or),
        (v.style[xe] = y || "translate(0, 0)");
    },
    wf = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.rotation,
        c = i.skewX,
        u = i.skewY,
        h = i.scaleX,
        m = i.scaleY,
        p = i.target,
        d = i.xOrigin,
        f = i.yOrigin,
        w = i.xOffset,
        b = i.yOffset,
        v = i.forceCSS,
        g = parseFloat(a),
        y = parseFloat(o),
        _,
        A,
        M,
        E,
        k;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (c += u), (l += u)),
        l || c
          ? ((l *= Br),
            (c *= Br),
            (_ = Math.cos(l) * h),
            (A = Math.sin(l) * h),
            (M = Math.sin(l - c) * -m),
            (E = Math.cos(l - c) * m),
            c &&
              ((u *= Br),
              (k = Math.tan(c - u)),
              (k = Math.sqrt(1 + k * k)),
              (M *= k),
              (E *= k),
              u &&
                ((k = Math.tan(u)),
                (k = Math.sqrt(1 + k * k)),
                (_ *= k),
                (A *= k))),
            (_ = Oe(_)),
            (A = Oe(A)),
            (M = Oe(M)),
            (E = Oe(E)))
          : ((_ = h), (E = m), (A = M = 0)),
        ((g && !~(a + "").indexOf("px")) || (y && !~(o + "").indexOf("px"))) &&
          ((g = Bi(p, "x", a, "px")), (y = Bi(p, "y", o, "px"))),
        (d || f || w || b) &&
          ((g = Oe(g + d - (d * _ + f * M) + w)),
          (y = Oe(y + f - (d * A + f * E) + b))),
        (r || s) &&
          ((k = p.getBBox()),
          (g = Oe(g + (r / 100) * k.width)),
          (y = Oe(y + (s / 100) * k.height))),
        (k =
          "matrix(" +
          _ +
          "," +
          A +
          "," +
          M +
          "," +
          E +
          "," +
          g +
          "," +
          y +
          ")"),
        p.setAttribute("transform", k),
        v && (p.style[xe] = k);
    },
    vf = function (e, t, i, r, s) {
      var a = 360,
        o = We(s),
        l = parseFloat(s) * (o && ~s.indexOf("rad") ? nr : 1),
        c = l - r,
        u = r + c + "deg",
        h,
        m;
      return (
        o &&
          ((h = s.split("_")[1]),
          h === "short" &&
            ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -360)),
          h === "cw" && c < 0
            ? (c = ((c + a * Zl) % a) - ~~(c / a) * a)
            : h === "ccw" && c > 0 && (c = ((c - a * Zl) % a) - ~~(c / a) * a)),
        (e._pt = m = new Tt(e._pt, t, i, r, c, ef)),
        (m.e = u),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    pc = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    yf = function (e, t, i) {
      var r = pc({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        a = i.style,
        o,
        l,
        c,
        u,
        h,
        m,
        p,
        d;
      r.svg
        ? ((c = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (a[xe] = t),
          (o = _n(i, 1)),
          sr(i, xe),
          i.setAttribute("transform", c))
        : ((c = getComputedStyle(i)[xe]),
          (a[xe] = t),
          (o = _n(i, 1)),
          (a[xe] = c));
      for (l in Si)
        (c = r[l]),
          (u = o[l]),
          c !== u &&
            s.indexOf(l) < 0 &&
            ((p = nt(c)),
            (d = nt(u)),
            (h = p !== d ? Bi(i, l, c, d) : parseFloat(c)),
            (m = parseFloat(u)),
            (e._pt = new Tt(e._pt, o, l, h, m - h, Ha)),
            (e._pt.u = d || 0),
            e._props.push(l));
      pc(o, r);
    };
  St("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      s = "Left",
      a = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (
        o
      ) {
        return e < 2 ? n + o : "border" + o + n;
      });
    ms[e > 1 ? "border" + n : n] = function (o, l, c, u, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = a.map(function (d) {
            return Ti(o, d, c);
          })),
          (p = m.join(" ")),
          p.split(m[0]).length === 5 ? m[0] : p
        );
      (m = (u + "").split(" ")),
        (p = {}),
        a.forEach(function (d, f) {
          return (p[d] = m[f] = m[f] || m[((f - 1) / 2) | 0]);
        }),
        o.init(l, p, h);
    };
  });
  var hc = {
    name: "css",
    register: Va,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, s) {
      var a = this._props,
        o = e.style,
        l = i.vars.startAt,
        c,
        u,
        h,
        m,
        p,
        d,
        f,
        w,
        b,
        v,
        g,
        y,
        _,
        A,
        M,
        E;
      Ba || Va(),
        (this.styles = this.styles || ec(e)),
        (E = this.styles.props),
        (this.tween = i);
      for (f in t)
        if (
          f !== "autoRound" &&
          ((u = t[f]), !(Ot[f] && Bl(f, t, i, r, e, s)))
        ) {
          if (
            ((p = typeof u),
            (d = ms[f]),
            p === "function" && ((u = u.call(i, r, e, s)), (p = typeof u)),
            p === "string" && ~u.indexOf("random(") && (u = hn(u)),
            d)
          )
            d(this, e, f, u, i) && (M = 1);
          else if (f.substr(0, 2) === "--")
            (c = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
              (u += ""),
              (zi.lastIndex = 0),
              zi.test(c) || ((w = nt(c)), (b = nt(u))),
              b ? w !== b && (c = Bi(e, f, c, b) + b) : w && (u += w),
              this.add(o, "setProperty", c, u, r, s, 0, 0, f),
              a.push(f),
              E.push(f, 0, o[f]);
          else if (p !== "undefined") {
            if (
              (l && f in l
                ? ((c =
                    typeof l[f] == "function" ? l[f].call(i, r, e, s) : l[f]),
                  We(c) && ~c.indexOf("random(") && (c = hn(c)),
                  nt(c + "") ||
                    c === "auto" ||
                    (c += Ct.units[f] || nt(Ti(e, f)) || ""),
                  (c + "").charAt(1) === "=" && (c = Ti(e, f)))
                : (c = Ti(e, f)),
              (m = parseFloat(c)),
              (v = p === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              v && (u = u.substr(2)),
              (h = parseFloat(u)),
              f in fi &&
                (f === "autoAlpha" &&
                  (m === 1 && Ti(e, "visibility") === "hidden" && h && (m = 0),
                  E.push("visibility", 0, o.visibility),
                  Fi(
                    this,
                    o,
                    "visibility",
                    m ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                f !== "scale" &&
                  f !== "transform" &&
                  ((f = fi[f]), ~f.indexOf(",") && (f = f.split(",")[0]))),
              (g = f in Si),
              g)
            ) {
              if (
                (this.styles.save(f),
                p === "string" &&
                  u.substring(0, 6) === "var(--" &&
                  ((u = jt(e, u.substring(4, u.indexOf(")")))),
                  (h = parseFloat(u))),
                y ||
                  ((_ = e._gsap),
                  (_.renderTransform && !t.parseTransform) ||
                    _n(e, t.parseTransform),
                  (A = t.smoothOrigin !== !1 && _.smooth),
                  (y = this._pt =
                    new Tt(this._pt, o, xe, 0, 1, _.renderTransform, _, 0, -1)),
                  (y.dep = 1)),
                f === "scale")
              )
                (this._pt = new Tt(
                  this._pt,
                  _,
                  "scaleY",
                  _.scaleY,
                  (v ? Ir(_.scaleY, v + h) : h) - _.scaleY || 0,
                  Ha
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", f),
                  (f += "X");
              else if (f === "transformOrigin") {
                E.push(xt, 0, o[xt]),
                  (u = hf(u)),
                  _.svg
                    ? Ga(e, u, 0, A, 0, this)
                    : ((b = parseFloat(u.split(" ")[2]) || 0),
                      b !== _.zOrigin && Fi(this, _, "zOrigin", _.zOrigin, b),
                      Fi(this, o, f, gs(c), gs(u)));
                continue;
              } else if (f === "svgOrigin") {
                Ga(e, u, 1, A, 0, this);
                continue;
              } else if (f in cc) {
                vf(this, _, f, m, v ? Ir(m, v + u) : u);
                continue;
              } else if (f === "smoothOrigin") {
                Fi(this, _, "smooth", _.smooth, u);
                continue;
              } else if (f === "force3D") {
                _[f] = u;
                continue;
              } else if (f === "transform") {
                yf(this, u, e);
                continue;
              }
            } else f in o || (f = Yr(f) || f);
            if (
              g ||
              ((h || h === 0) && (m || m === 0) && !Qd.test(u) && f in o)
            )
              (w = (c + "").substr((m + "").length)),
                h || (h = 0),
                (b = nt(u) || (f in Ct.units ? Ct.units[f] : w)),
                w !== b && (m = Bi(e, f, c, b)),
                (this._pt = new Tt(
                  this._pt,
                  g ? _ : o,
                  f,
                  m,
                  (v ? Ir(m, v + h) : h) - m,
                  !g && (b === "px" || f === "zIndex") && t.autoRound !== !1
                    ? rf
                    : Ha
                )),
                (this._pt.u = b || 0),
                w !== b && b !== "%" && ((this._pt.b = c), (this._pt.r = tf));
            else if (f in o) pf.call(this, e, f, c, v ? v + u : u);
            else if (f in e) this.add(e, f, c || e[f], v ? v + u : u, r, s);
            else if (f !== "parseTransform") {
              ma(f, u);
              continue;
            }
            g ||
              (f in o
                ? E.push(f, 0, o[f])
                : typeof e[f] == "function"
                ? E.push(f, 2, e[f]())
                : E.push(f, 1, c || e[f])),
              a.push(f);
          }
        }
      M && ql(this);
    },
    render: function (e, t) {
      if (t.tween._time || !$a())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Ti,
    aliases: fi,
    getSetter: function (e, t, i) {
      var r = fi[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in Si && t !== xt && (e._gsap.x || Ti(e, "x"))
          ? i && Ul === i
            ? t === "scale"
              ? of
              : af
            : (Ul = i || {}) && (t === "scale" ? lf : cf)
          : e.style && !ca(e.style[t])
          ? nf
          : ~t.indexOf("-")
          ? sf
          : Da(e, t)
      );
    },
    core: { _removeProperty: sr, _getMatrix: qa },
  };
  (Et.utils.checkPrefix = Yr),
    (Et.core.getStyleSaver = ec),
    (function (n, e, t, i) {
      var r = St(n + "," + e + "," + t, function (s) {
        Si[s] = 1;
      });
      St(e, function (s) {
        (Ct.units[s] = "deg"), (cc[s] = 1);
      }),
        (fi[r[13]] = n + "," + e),
        St(i, function (s) {
          var a = s.split(":");
          fi[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    St(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (n) {
        Ct.units[n] = "px";
      }
    ),
    Et.registerPlugin(hc);
  var ke = Et.registerPlugin(hc) || Et;
  ke.core.Tween;
  class bf {
    constructor() {
      var e;
      (this.elements = {
        header: document.querySelector(".page_header"),
        banner: document.querySelector(".page_banner_wrap"),
        nav: document.querySelector(".page_navigation"),
        navTop: document.querySelector(".page_navigation_top"),
        navBridge: document.querySelector(".page_navigation_bridge"),
        navMenu: document.querySelector(".page_navigation_menu_component"),
        navMenuContent: document.querySelectorAll(
          ".page_navigation_menu_content_item"
        ),
        navMenuLinks: document.querySelectorAll(
          ".page_navigation_link_component"
        ),
        pageOverlay: document.querySelector(".page_overlay"),
      }),
        Array.from(this.elements.navMenuContent).forEach((t, i) => {
          t.style.setProperty("--index", i);
        }),
        (this.states = {
          isOpen: !1,
          isAnimating: !1,
          activeMenuLink: null,
          activeMenuContent: null,
          isOverTrigger: !1,
          closeTimeout: null,
          resizeTimeout: null,
        }),
        (this.config = {
          closeDelay: 50,
          resizeDelay: 150,
          menuBottomSpacing: "2.5rem",
          menuClosedHeight: "auto",
          hasOriginalDarkTheme:
            ((e = document.querySelector(".page_header")) == null
              ? void 0
              : e.classList.contains("u-theme-dark")) || !1,
        }),
        (this.handleMouseMove = this.handleMouseMove.bind(this)),
        (this.handleResize = this.handleResize.bind(this)),
        (this.handleEscape = this.handleEscape.bind(this)),
        (this.handleTriggerEnter = this.handleTriggerEnter.bind(this)),
        (this.handleTriggerLeave = this.handleTriggerLeave.bind(this)),
        (this.handleMouseEnter = this.handleMouseEnter.bind(this)),
        (this.handleMouseLeave = this.handleMouseLeave.bind(this)),
        (this.handleTouchStart = this.handleTouchStart.bind(this)),
        (this.handleTouchEnd = this.handleTouchEnd.bind(this)),
        this.init();
    }
    init() {
      if (!this.validateElements()) {
        console.error("Main Nav Component is missing required elements");
        return;
      }
      this.setupEventListeners(), this.setVariables();
    }
    validateElements() {
      return (
        this.elements.header &&
        this.elements.banner &&
        this.elements.nav &&
        this.elements.navTop &&
        this.elements.navBridge &&
        this.elements.navMenu &&
        this.elements.navMenuContent &&
        this.elements.navMenuLinks &&
        this.elements.pageOverlay
      );
    }
    calculateNavHeight() {
      const e = this.elements.navTop.offsetHeight,
        t = this.states.activeMenuContent
          ? this.states.activeMenuContent.scrollHeight
          : 0,
        i =
          parseFloat(this.config.menuBottomSpacing) *
          parseFloat(getComputedStyle(document.documentElement).fontSize);
      return { navTopHeight: e, activeMenuContentHeight: t, bottomSpacing: i };
    }
    setVariables() {
      const {
          navTopHeight: e,
          activeMenuContentHeight: t,
          bottomSpacing: i,
        } = this.calculateNavHeight(),
        r = this.states.isOpen ? e + t + i : e;
      this.elements.nav.style.setProperty("height", `${r}px`),
        this.states.activeMenuContent &&
          this.states.activeMenuContent.style.setProperty("height", `${t}px`),
        Array.from(this.elements.navMenuContent)
          .filter((s) => s !== this.states.activeMenuContent)
          .forEach((s) => {
            s.style.setProperty("height", this.config.menuClosedHeight);
          });
    }
    shouldKeepOpen(e) {
      var i;
      const t = Array.from(this.elements.navMenuLinks).filter((r) => {
        const s = r.getAttribute("nav-link");
        return (
          s &&
          Array.from(this.elements.navMenuContent).some(
            (a) => a.getAttribute("nav-content") === s
          )
        );
      });
      return (
        this.elements.navMenu.contains(e.target) ||
        this.elements.navBridge.contains(e.target) ||
        Array.from(this.elements.navMenuContent).some((r) =>
          r.contains(e.target)
        ) ||
        t.some((r) => r.contains(e.target)) ||
        ((i = this.states.activeMenuLink) == null
          ? void 0
          : i.contains(e.target)) ||
        this.states.isOverTrigger
      );
    }
    openNavMenu() {
      this.clearCloseTimeout(),
        Object.values(this.elements).forEach((e) => {
          e instanceof NodeList
            ? e.forEach((t) => t.classList.add("is-open"))
            : e && e.classList.add("is-open");
        }),
        this.elements.navMenu.setAttribute("menu-state", "open"),
        this.elements.navMenu.setAttribute("aria-expanded", "true"),
        this.elements.header.classList.remove("u-theme-dark"),
        this.elements.header.classList.add("u-theme-light"),
        this.elements.pageOverlay.setAttribute("page-overlay", "active"),
        this.states.activeMenuContent &&
          this.states.activeMenuContent.setAttribute("menu-content", "active"),
        this.states.activeMenuLink &&
          this.states.activeMenuLink.setAttribute("menu-link", "active"),
        (this.states.isOpen = !0),
        this.setVariables();
    }
    closeNavMenu() {
      Object.values(this.elements).forEach((e) => {
        e instanceof NodeList
          ? e.forEach((t) => t.classList.remove("is-open"))
          : e && e.classList.remove("is-open");
      }),
        this.elements.navMenu.setAttribute("menu-state", "closed"),
        this.elements.navMenu.setAttribute("aria-expanded", "false"),
        this.elements.header.classList.remove("u-theme-light"),
        this.config.hasOriginalDarkTheme &&
          this.elements.header.classList.add("u-theme-dark"),
        this.elements.pageOverlay.setAttribute("page-overlay", "inactive"),
        this.states.activeMenuContent &&
          (this.states.activeMenuContent.setAttribute(
            "menu-content",
            "inactive"
          ),
          this.states.activeMenuContent.style.setProperty(
            "height",
            this.config.menuClosedHeight
          )),
        this.states.activeMenuLink &&
          this.states.activeMenuLink.setAttribute("menu-link", "inactive"),
        (this.states.isOpen = !1),
        (this.states.activeMenuLink = null),
        (this.states.activeMenuContent = null),
        this.setVariables();
    }
    clearCloseTimeout() {
      this.states.closeTimeout &&
        (clearTimeout(this.states.closeTimeout),
        (this.states.closeTimeout = null));
    }
    handleTriggerEnter() {
      (this.states.isOverTrigger = !0),
        this.clearCloseTimeout(),
        this.states.isOpen && this.openNavMenu();
    }
    handleTriggerLeave() {
      (this.states.isOverTrigger = !1), this.clearCloseTimeout();
    }
    handleMouseMove(e) {
      this.states.isOpen &&
        (this.shouldKeepOpen(e)
          ? this.clearCloseTimeout()
          : this.states.closeTimeout ||
            (this.states.closeTimeout = setTimeout(() => {
              this.closeNavMenu(), (this.states.closeTimeout = null);
            }, this.config.closeDelay)));
    }
    handleResize() {
      clearTimeout(this.states.resizeTimeout),
        (this.states.resizeTimeout = setTimeout(() => {
          this.setVariables(), this.states.isOpen;
        }, this.config.resizeDelay));
    }
    handleEscape(e) {
      e.key === "Escape" && this.states.isOpen && this.closeNavMenu();
    }
    handleMouseEnter() {
      (this.states.isOverTrigger = !0),
        this.states.isOpen || this.openNavMenu();
    }
    handleMouseLeave() {
      (this.states.isOverTrigger = !1),
        this.states.isOpen &&
          (this.states.closeTimeout = setTimeout(() => {
            this.closeNavMenu(), (this.states.closeTimeout = null);
          }, this.config.closeDelay));
    }
    handleTouchStart() {
      this.states.isOpen || this.openNavMenu();
    }
    handleTouchEnd() {
      this.states.isOpen && this.closeNavMenu();
    }
    handleMenuLinkInteraction(e) {
      const t = e.getAttribute("nav-link");
      if (!t) return;
      const i = Array.from(this.elements.navMenuContent).find(
        (r) => r.getAttribute("nav-content") === t
      );
      i &&
        (this.states.activeMenuLink &&
          this.states.activeMenuLink.setAttribute("menu-link", "inactive"),
        this.states.activeMenuContent &&
          this.states.activeMenuContent.setAttribute(
            "menu-content",
            "inactive"
          ),
        (this.states.activeMenuLink = e),
        (this.states.activeMenuContent = i),
        this.openNavMenu());
    }
    setupEventListeners() {
      document.addEventListener("keydown", this.handleEscape),
        window.addEventListener("resize", this.handleResize),
        document.addEventListener("mousemove", this.handleMouseMove),
        this.elements.navMenu.addEventListener(
          "touchstart",
          this.handleTouchStart
        ),
        this.elements.navMenu.addEventListener("touchend", this.handleTouchEnd),
        this.elements.navMenu.addEventListener(
          "mouseenter",
          this.handleTriggerEnter
        ),
        this.elements.navMenu.addEventListener(
          "mouseleave",
          this.handleTriggerLeave
        ),
        this.elements.navMenuLinks.forEach((e) => {
          e.addEventListener("mouseenter", () => {
            this.handleMenuLinkInteraction(e);
          }),
            e.addEventListener("mouseleave", (t) => {
              this.shouldKeepOpen(t) || this.handleMouseLeave();
            }),
            e.addEventListener("touchstart", () => {
              this.handleMenuLinkInteraction(e);
            });
        });
    }
    destroy() {
      document.removeEventListener("keydown", this.handleEscape),
        window.removeEventListener("resize", this.handleResize),
        document.removeEventListener("mousemove", this.handleMouseMove),
        this.elements.navMenu.removeEventListener(
          "touchstart",
          this.handleTouchStart
        ),
        this.elements.navMenu.removeEventListener(
          "touchend",
          this.handleTouchEnd
        ),
        this.elements.navMenu.removeEventListener(
          "mouseenter",
          this.handleTriggerEnter
        ),
        this.elements.navMenu.removeEventListener(
          "mouseleave",
          this.handleTriggerLeave
        ),
        this.elements.navMenuLinks.forEach((e) => {
          e.removeEventListener("mouseenter", () => {
            this.handleMenuLinkInteraction(e);
          }),
            e.removeEventListener("mouseleave", this.handleMouseLeave),
            e.removeEventListener("touchstart", () => {
              this.handleMenuLinkInteraction(e);
            });
        }),
        this.clearCloseTimeout(),
        this.states.resizeTimeout &&
          (clearTimeout(this.states.resizeTimeout),
          (this.states.resizeTimeout = null));
    }
  }
  function _f() {
    return (
      console.log("Main Nav Component Animation Starter Initialized"), new bf()
    );
  }
  function Sf() {
    console.log("Button Component Animation Starter Initialized");
  }
  function Tf() {
    document.querySelectorAll("[data-skeleton]").forEach((e) => {
      setTimeout(() => {
        e.setAttribute("data-skeleton", "hidden");
      }, 100);
    });
  }
  class Ef {
    constructor() {
      (this.elements = {
        contentWrap: document.querySelector("[banner='content-wrap']"),
        contentItems: document.querySelectorAll("[banner='content-item']"),
      }),
        (this.state = {
          currentIndex: 0,
          itemCount: this.elements.contentItems.length,
          isAnimating: !1,
        }),
        (this.config = {
          animationDuration: 1,
          displayDuration: 3,
          yOffsetHidden: 100,
          ease: "elastic.out(1.4, 1)",
        }),
        this.state.itemCount > 1 && this.init();
    }
    init() {
      this.setItemStates(),
        this.elements.contentItems.forEach((e, t) => {
          e.style.setProperty("--banner-index", t);
        }),
        this.startAnimationLoop();
    }
    setItemStates() {
      this.elements.contentItems.forEach((e, t) => {
        t === this.state.currentIndex
          ? (e.setAttribute("banner-status", "active"),
            ke.set(e, { y: "0%", opacity: 1 }))
          : (e.setAttribute("banner-status", "inactive"),
            ke.set(e, { y: "100%", opacity: 0 }));
      });
    }
    startAnimationLoop() {
      ke.timeline({ onComplete: () => this.advanceToNextItem() }).to(
        {},
        this.config.displayDuration,
        {}
      );
    }
    advanceToNextItem() {
      if (this.state.isAnimating) return;
      this.state.isAnimating = !0;
      const e = this.elements.contentItems[this.state.currentIndex];
      this.state.currentIndex =
        (this.state.currentIndex + 1) % this.state.itemCount;
      const t = this.elements.contentItems[this.state.currentIndex],
        i = ke.timeline({
          onComplete: () => {
            (this.state.isAnimating = !1), this.startAnimationLoop();
          },
        });
      i.to(e, {
        y: `-${this.config.yOffsetHidden}%`,
        opacity: 0,
        duration: this.config.animationDuration,
        ease: this.config.ease,
      }),
        i.fromTo(
          t,
          { y: `${this.config.yOffsetHidden}%`, opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: this.config.animationDuration,
            ease: this.config.ease,
          },
          "-=0.6"
        ),
        i.add(() => {
          e.setAttribute("banner-status", "inactive"),
            t.setAttribute("banner-status", "active");
        }),
        i.set(e, { y: `${this.config.yOffsetHidden}%` });
    }
  }
  const xf = () => new Ef();
  class Mf {
    constructor(e = document) {
      (this.container = e),
        (this.accordions = []),
        this.container.querySelectorAll("[accordion='main']").forEach((i) => {
          this.accordions.push({
            element: i,
            items: i.querySelectorAll("[accordion='item']"),
            itemContents: i.querySelectorAll("[accordion='item-content']"),
            closeSiblings:
              i.getAttribute("close-siblings") === "" ||
              i.getAttribute("close-siblings") === "true",
          });
        }),
        this.init();
    }
    init() {
      this.accordions.length &&
        this.accordions.forEach((e) => {
          e.items.length &&
            (e.element.addEventListener("click", (t) => this.handleClick(t, e)),
            e.items.forEach((t, i) => {
              const r = t.querySelector("[accordion='header']"),
                s = t.querySelector("[accordion='item-content']");
              if (r && s) {
                t.setAttribute("state", "closed");
                const a = `accordion-${this._generateId()}-${i}`;
                (s.id = a),
                  r.setAttribute("aria-expanded", "false"),
                  r.setAttribute("aria-controls", a),
                  r.setAttribute("role", "button"),
                  r.setAttribute("tabindex", "0"),
                  r.addEventListener("keydown", (o) => {
                    (o.key === "Enter" || o.key === " ") &&
                      (o.preventDefault(), this._toggleItem(t, e));
                  });
              }
            }));
        });
    }
    handleClick(e, t) {
      const i = e.target.closest("[accordion='item']"),
        r = e.target.closest("[accordion='header']");
      !i || !r || this._toggleItem(i, t);
    }
    _toggleItem(e, t) {
      const r = e.getAttribute("state") === "open",
        s = e.querySelector("[accordion='header']");
      e.setAttribute("state", r ? "closed" : "open"),
        s && s.setAttribute("aria-expanded", r ? "false" : "true"),
        t.closeSiblings &&
          !r &&
          t.items.forEach((a) => {
            if (a !== e && a.getAttribute("state") === "open") {
              a.setAttribute("state", "closed");
              const o = a.querySelector("[accordion='header']");
              o && o.setAttribute("aria-expanded", "false");
            }
          });
    }
    _generateId() {
      return Math.random().toString(36).substring(2, 10);
    }
  }
  const Af = (n = document) => new Mf(n);
  class kf {
    constructor() {
      this.footer = document.querySelectorAll("[footer-year]");
    }
    init() {
      this.footer.forEach((e) => {
        e.innerHTML = new Date().getFullYear();
      });
    }
  }
  const Cf = () => {
    new kf().init();
  };
  class Pf {
    constructor() {
      (this.elements = {
        marquee: document.querySelectorAll("[marquee=component]"),
        marqueeList: document.querySelectorAll("[marquee=list]"),
        marqueeItem: document.querySelectorAll("[marquee=item]"),
      }),
        (this.defaultSpeed = 75),
        this.init();
    }
    init() {
      this.elements.marquee.forEach((e) => {
        e.querySelectorAll("[marquee=list]").forEach((t) => {
          const i = t.cloneNode(!0);
          e.appendChild(i);
        }),
          this.createObserver(e),
          this.setAnimationDuration(e);
      });
    }
    createObserver(e) {
      new IntersectionObserver(
        (i) => {
          i.forEach((r) => {
            r.target
              .querySelectorAll("[marquee=list]")
              .forEach(
                (s) =>
                  (s.style.animationPlayState = r.isIntersecting
                    ? "running"
                    : "paused")
              );
          });
        },
        { threshold: 0 }
      ).observe(e);
    }
    getMarqueeSpeed(e) {
      const t = e.getAttribute("marquee-speed");
      return t && !isNaN(parseInt(t)) ? parseInt(t) : this.defaultSpeed;
    }
    setAnimationDuration(e) {
      const t = this.getMarqueeSpeed(e);
      e.querySelectorAll("[marquee=list]").forEach((i) => {
        (i.style.animationDuration = i.offsetWidth / t + "s"),
          (i.style.animationPlayState = "paused");
      });
    }
  }
  const Of = () => {
    new Pf();
  };
  function If(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function Lf(n, e, t) {
    return If(n.prototype, e), n;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Ke,
    ws,
    zt,
    $i,
    Yi,
    Hr,
    mc,
    lr,
    Tn,
    gc,
    Ei,
    ii,
    wc,
    vc = function () {
      return (
        Ke ||
        (typeof window < "u" && (Ke = window.gsap) && Ke.registerPlugin && Ke)
      );
    },
    yc = 1,
    Wr = [],
    te = [],
    pi = [],
    En = Date.now,
    Xa = function (e, t) {
      return t;
    },
    Df = function () {
      var e = Tn.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, te),
        r.push.apply(r, pi),
        (te = i),
        (pi = r),
        (Xa = function (a, o) {
          return t[a](o);
        });
    },
    Hi = function (e, t) {
      return ~pi.indexOf(e) && pi[pi.indexOf(e) + 1][t];
    },
    xn = function (e) {
      return !!~gc.indexOf(e);
    },
    ht = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!s });
    },
    mt = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    vs = "scrollLeft",
    ys = "scrollTop",
    Ua = function () {
      return (Ei && Ei.isPressed) || te.cache++;
    },
    bs = function (e, t) {
      var i = function r(s) {
        if (s || s === 0) {
          yc && (zt.history.scrollRestoration = "manual");
          var a = Ei && Ei.isPressed;
          (s = r.v = Math.round(s) || (Ei && Ei.iOS ? 1 : 0)),
            e(s),
            (r.cacheID = te.cache),
            a && Xa("ss", s);
        } else
          (t || te.cache !== r.cacheID || Xa("ref")) &&
            ((r.cacheID = te.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    gt = {
      s: vs,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: bs(function (n) {
        return arguments.length
          ? zt.scrollTo(n, Be.sc())
          : zt.pageXOffset || $i[vs] || Yi[vs] || Hr[vs] || 0;
      }),
    },
    Be = {
      s: ys,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: gt,
      sc: bs(function (n) {
        return arguments.length
          ? zt.scrollTo(gt.sc(), n)
          : zt.pageYOffset || $i[ys] || Yi[ys] || Hr[ys] || 0;
      }),
    },
    Mt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || Ke.utils.toArray)(e)[0] ||
        (typeof e == "string" && Ke.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    zf = function (e, t) {
      for (var i = t.length; i--; )
        if (t[i] === e || t[i].contains(e)) return !0;
      return !1;
    },
    Wi = function (e, t) {
      var i = t.s,
        r = t.sc;
      xn(e) && (e = $i.scrollingElement || Yi);
      var s = te.indexOf(e),
        a = r === Be.sc ? 1 : 2;
      !~s && (s = te.push(e) - 1), te[s + a] || ht(e, "scroll", Ua);
      var o = te[s + a],
        l =
          o ||
          (te[s + a] =
            bs(Hi(e, i), !0) ||
            (xn(e)
              ? r
              : bs(function (c) {
                  return arguments.length ? (e[i] = c) : e[i];
                })));
      return (
        (l.target = e),
        o || (l.smooth = Ke.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Za = function (e, t, i) {
      var r = e,
        s = e,
        a = En(),
        o = a,
        l = t || 50,
        c = Math.max(500, l * 3),
        u = function (d, f) {
          var w = En();
          f || w - a > l
            ? ((s = r), (r = d), (o = a), (a = w))
            : i
            ? (r += d)
            : (r = s + ((d - s) / (w - o)) * (a - o));
        },
        h = function () {
          (s = r = i ? 0 : r), (o = a = 0);
        },
        m = function (d) {
          var f = o,
            w = s,
            b = En();
          return (
            (d || d === 0) && d !== r && u(d),
            a === o || b - o > c
              ? 0
              : ((r + (i ? w : -w)) / ((i ? b : a) - f)) * 1e3
          );
        };
      return { update: u, reset: h, getVelocity: m };
    },
    Mn = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    bc = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    _c = function () {
      (Tn = Ke.core.globals().ScrollTrigger), Tn && Tn.core && Df();
    },
    Sc = function (e) {
      return (
        (Ke = e || vc()),
        !ws &&
          Ke &&
          typeof document < "u" &&
          document.body &&
          ((zt = window),
          ($i = document),
          (Yi = $i.documentElement),
          (Hr = $i.body),
          (gc = [zt, $i, Yi, Hr]),
          Ke.utils.clamp,
          (wc = Ke.core.context || function () {}),
          (lr = "onpointerenter" in Hr ? "pointer" : "mouse"),
          (mc = Ie.isTouch =
            zt.matchMedia &&
            zt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in zt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (ii = Ie.eventTypes =
            (
              "ontouchstart" in Yi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Yi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (yc = 0);
          }, 500),
          _c(),
          (ws = 1)),
        ws
      );
    };
  (gt.op = Be), (te.cache = 0);
  var Ie = (function () {
    function n(t) {
      this.init(t);
    }
    var e = n.prototype;
    return (
      (e.init = function (i) {
        ws || Sc(Ke) || console.warn("Please gsap.registerPlugin(Observer)"),
          Tn || _c();
        var r = i.tolerance,
          s = i.dragMinimum,
          a = i.type,
          o = i.target,
          l = i.lineHeight,
          c = i.debounce,
          u = i.preventDefault,
          h = i.onStop,
          m = i.onStopDelay,
          p = i.ignore,
          d = i.wheelSpeed,
          f = i.event,
          w = i.onDragStart,
          b = i.onDragEnd,
          v = i.onDrag,
          g = i.onPress,
          y = i.onRelease,
          _ = i.onRight,
          A = i.onLeft,
          M = i.onUp,
          E = i.onDown,
          k = i.onChangeX,
          x = i.onChangeY,
          D = i.onChange,
          S = i.onToggleX,
          T = i.onToggleY,
          C = i.onHover,
          L = i.onHoverEnd,
          z = i.onMove,
          O = i.ignoreCheck,
          I = i.isNormalizer,
          N = i.onGestureStart,
          P = i.onGestureEnd,
          H = i.onWheel,
          G = i.onEnable,
          re = i.onDisable,
          ue = i.onClick,
          B = i.scrollSpeed,
          F = i.capture,
          $ = i.allowClicks,
          j = i.lockAxis,
          ce = i.onLockAxis;
        (this.target = o = Mt(o) || Yi),
          (this.vars = i),
          p && (p = Ke.utils.toArray(p)),
          (r = r || 1e-9),
          (s = s || 0),
          (d = d || 1),
          (B = B || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(zt.getComputedStyle(Hr).lineHeight) || 22);
        var Qe,
          _e,
          Se,
          K,
          ne,
          ve,
          Ye,
          R = this,
          Ne = 0,
          ct = 0,
          Ht = i.passive || (!u && i.passive !== !1),
          me = Wi(o, gt),
          Wt = Wi(o, Be),
          Qt = me(),
          ri = Wt(),
          Ce =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            ii[0] === "pointerdown",
          ei = xn(o),
          pe = o.ownerDocument || $i,
          kt = [0, 0, 0],
          je = [0, 0, 0],
          Ci = 0,
          Qn = function () {
            return (Ci = En());
          },
          Fe = function (X, de) {
            return (
              ((R.event = X) && p && zf(X.target, p)) ||
              (de && Ce && X.pointerType !== "touch") ||
              (O && O(X, de))
            );
          },
          na = function () {
            R._vx.reset(), R._vy.reset(), _e.pause(), h && h(R);
          },
          Pi = function () {
            var X = (R.deltaX = bc(kt)),
              de = (R.deltaY = bc(je)),
              Y = Math.abs(X) >= r,
              U = Math.abs(de) >= r;
            D && (Y || U) && D(R, X, de, kt, je),
              Y &&
                (_ && R.deltaX > 0 && _(R),
                A && R.deltaX < 0 && A(R),
                k && k(R),
                S && R.deltaX < 0 != Ne < 0 && S(R),
                (Ne = R.deltaX),
                (kt[0] = kt[1] = kt[2] = 0)),
              U &&
                (E && R.deltaY > 0 && E(R),
                M && R.deltaY < 0 && M(R),
                x && x(R),
                T && R.deltaY < 0 != ct < 0 && T(R),
                (ct = R.deltaY),
                (je[0] = je[1] = je[2] = 0)),
              (K || Se) &&
                (z && z(R),
                Se && (w && Se === 1 && w(R), v && v(R), (Se = 0)),
                (K = !1)),
              ve && !(ve = !1) && ce && ce(R),
              ne && (H(R), (ne = !1)),
              (Qe = 0);
          },
          an = function (X, de, Y) {
            (kt[Y] += X),
              (je[Y] += de),
              R._vx.update(X),
              R._vy.update(de),
              c ? Qe || (Qe = requestAnimationFrame(Pi)) : Pi();
          },
          on = function (X, de) {
            j &&
              !Ye &&
              ((R.axis = Ye = Math.abs(X) > Math.abs(de) ? "x" : "y"),
              (ve = !0)),
              Ye !== "y" && ((kt[2] += X), R._vx.update(X, !0)),
              Ye !== "x" && ((je[2] += de), R._vy.update(de, !0)),
              c ? Qe || (Qe = requestAnimationFrame(Pi)) : Pi();
          },
          Ui = function (X) {
            if (!Fe(X, 1)) {
              X = Mn(X, u);
              var de = X.clientX,
                Y = X.clientY,
                U = de - R.x,
                q = Y - R.y,
                Z = R.isDragging;
              (R.x = de),
                (R.y = Y),
                (Z ||
                  ((U || q) &&
                    (Math.abs(R.startX - de) >= s ||
                      Math.abs(R.startY - Y) >= s))) &&
                  ((Se = Z ? 2 : 1), Z || (R.isDragging = !0), on(U, q));
            }
          },
          Mr = (R.onPress = function (J) {
            Fe(J, 1) ||
              (J && J.button) ||
              ((R.axis = Ye = null),
              _e.pause(),
              (R.isPressed = !0),
              (J = Mn(J)),
              (Ne = ct = 0),
              (R.startX = R.x = J.clientX),
              (R.startY = R.y = J.clientY),
              R._vx.reset(),
              R._vy.reset(),
              ht(I ? o : pe, ii[1], Ui, Ht, !0),
              (R.deltaX = R.deltaY = 0),
              g && g(R));
          }),
          ae = (R.onRelease = function (J) {
            if (!Fe(J, 1)) {
              mt(I ? o : pe, ii[1], Ui, !0);
              var X = !isNaN(R.y - R.startY),
                de = R.isDragging,
                Y =
                  de &&
                  (Math.abs(R.x - R.startX) > 3 ||
                    Math.abs(R.y - R.startY) > 3),
                U = Mn(J);
              !Y &&
                X &&
                (R._vx.reset(),
                R._vy.reset(),
                u &&
                  $ &&
                  Ke.delayedCall(0.08, function () {
                    if (En() - Ci > 300 && !J.defaultPrevented) {
                      if (J.target.click) J.target.click();
                      else if (pe.createEvent) {
                        var q = pe.createEvent("MouseEvents");
                        q.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          zt,
                          1,
                          U.screenX,
                          U.screenY,
                          U.clientX,
                          U.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          J.target.dispatchEvent(q);
                      }
                    }
                  })),
                (R.isDragging = R.isGesturing = R.isPressed = !1),
                h && de && !I && _e.restart(!0),
                Se && Pi(),
                b && de && b(R),
                y && y(R, Y);
            }
          }),
          Ar = function (X) {
            return (
              X.touches &&
              X.touches.length > 1 &&
              (R.isGesturing = !0) &&
              N(X, R.isDragging)
            );
          },
          ni = function () {
            return (R.isGesturing = !1) || P(R);
          },
          si = function (X) {
            if (!Fe(X)) {
              var de = me(),
                Y = Wt();
              an((de - Qt) * B, (Y - ri) * B, 1),
                (Qt = de),
                (ri = Y),
                h && _e.restart(!0);
            }
          },
          ai = function (X) {
            if (!Fe(X)) {
              (X = Mn(X, u)), H && (ne = !0);
              var de =
                (X.deltaMode === 1
                  ? l
                  : X.deltaMode === 2
                  ? zt.innerHeight
                  : 1) * d;
              an(X.deltaX * de, X.deltaY * de, 0), h && !I && _e.restart(!0);
            }
          },
          kr = function (X) {
            if (!Fe(X)) {
              var de = X.clientX,
                Y = X.clientY,
                U = de - R.x,
                q = Y - R.y;
              (R.x = de),
                (R.y = Y),
                (K = !0),
                h && _e.restart(!0),
                (U || q) && on(U, q);
            }
          },
          ln = function (X) {
            (R.event = X), C(R);
          },
          Oi = function (X) {
            (R.event = X), L(R);
          },
          es = function (X) {
            return Fe(X) || (Mn(X, u) && ue(R));
          };
        (_e = R._dc = Ke.delayedCall(m || 0.25, na).pause()),
          (R.deltaX = R.deltaY = 0),
          (R._vx = Za(0, 50, !0)),
          (R._vy = Za(0, 50, !0)),
          (R.scrollX = me),
          (R.scrollY = Wt),
          (R.isDragging = R.isGesturing = R.isPressed = !1),
          wc(this),
          (R.enable = function (J) {
            return (
              R.isEnabled ||
                (ht(ei ? pe : o, "scroll", Ua),
                a.indexOf("scroll") >= 0 &&
                  ht(ei ? pe : o, "scroll", si, Ht, F),
                a.indexOf("wheel") >= 0 && ht(o, "wheel", ai, Ht, F),
                ((a.indexOf("touch") >= 0 && mc) ||
                  a.indexOf("pointer") >= 0) &&
                  (ht(o, ii[0], Mr, Ht, F),
                  ht(pe, ii[2], ae),
                  ht(pe, ii[3], ae),
                  $ && ht(o, "click", Qn, !0, !0),
                  ue && ht(o, "click", es),
                  N && ht(pe, "gesturestart", Ar),
                  P && ht(pe, "gestureend", ni),
                  C && ht(o, lr + "enter", ln),
                  L && ht(o, lr + "leave", Oi),
                  z && ht(o, lr + "move", kr)),
                (R.isEnabled = !0),
                (R.isDragging = R.isGesturing = R.isPressed = K = Se = !1),
                R._vx.reset(),
                R._vy.reset(),
                (Qt = me()),
                (ri = Wt()),
                J && J.type && Mr(J),
                G && G(R)),
              R
            );
          }),
          (R.disable = function () {
            R.isEnabled &&
              (Wr.filter(function (J) {
                return J !== R && xn(J.target);
              }).length || mt(ei ? pe : o, "scroll", Ua),
              R.isPressed &&
                (R._vx.reset(), R._vy.reset(), mt(I ? o : pe, ii[1], Ui, !0)),
              mt(ei ? pe : o, "scroll", si, F),
              mt(o, "wheel", ai, F),
              mt(o, ii[0], Mr, F),
              mt(pe, ii[2], ae),
              mt(pe, ii[3], ae),
              mt(o, "click", Qn, !0),
              mt(o, "click", es),
              mt(pe, "gesturestart", Ar),
              mt(pe, "gestureend", ni),
              mt(o, lr + "enter", ln),
              mt(o, lr + "leave", Oi),
              mt(o, lr + "move", kr),
              (R.isEnabled = R.isPressed = R.isDragging = !1),
              re && re(R));
          }),
          (R.kill = R.revert =
            function () {
              R.disable();
              var J = Wr.indexOf(R);
              J >= 0 && Wr.splice(J, 1), Ei === R && (Ei = 0);
            }),
          Wr.push(R),
          I && xn(o) && (Ei = R),
          R.enable(f);
      }),
      Lf(n, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      n
    );
  })();
  (Ie.version = "3.13.0"),
    (Ie.create = function (n) {
      return new Ie(n);
    }),
    (Ie.register = Sc),
    (Ie.getAll = function () {
      return Wr.slice();
    }),
    (Ie.getById = function (n) {
      return Wr.filter(function (e) {
        return e.vars.id === n;
      })[0];
    }),
    vc() && Ke.registerPlugin(Ie);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var W,
    Vr,
    ie,
    we,
    Rt,
    fe,
    Ka,
    _s,
    An,
    kn,
    Cn,
    Ss,
    st,
    Ts,
    Ja,
    wt,
    Tc,
    Ec,
    qr,
    xc,
    Qa,
    Mc,
    vt,
    eo,
    Ac,
    kc,
    Vi,
    to,
    io,
    Gr,
    ro,
    Es,
    no,
    so,
    xs = 1,
    at = Date.now,
    ao = at(),
    Xt = 0,
    Pn = 0,
    Cc = function (e, t, i) {
      var r = Nt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    Pc = function (e, t) {
      return t && (!Nt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Rf = function n() {
      return Pn && requestAnimationFrame(n);
    },
    Oc = function () {
      return (Ts = 1);
    },
    Ic = function () {
      return (Ts = 0);
    },
    hi = function (e) {
      return e;
    },
    On = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Lc = function () {
      return typeof window < "u";
    },
    Dc = function () {
      return W || (Lc() && (W = window.gsap) && W.registerPlugin && W);
    },
    cr = function (e) {
      return !!~Ka.indexOf(e);
    },
    zc = function (e) {
      return (
        (e === "Height" ? ro : ie["inner" + e]) ||
        Rt["client" + e] ||
        fe["client" + e]
      );
    },
    Rc = function (e) {
      return (
        Hi(e, "getBoundingClientRect") ||
        (cr(e)
          ? function () {
              return (Fs.width = ie.innerWidth), (Fs.height = ro), Fs;
            }
          : function () {
              return xi(e);
            })
      );
    },
    Nf = function (e, t, i) {
      var r = i.d,
        s = i.d2,
        a = i.a;
      return (a = Hi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? zc(s) : e["client" + s]) || 0;
          };
    },
    Ff = function (e, t) {
      return !t || ~pi.indexOf(e)
        ? Rc(e)
        : function () {
            return Fs;
          };
    },
    mi = function (e, t) {
      var i = t.s,
        r = t.d2,
        s = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Hi(e, i))
          ? a() - Rc(e)()[s]
          : cr(e)
          ? (Rt[i] || fe[i]) - zc(r)
          : e[i] - e["offset" + r]
      );
    },
    Ms = function (e, t) {
      for (var i = 0; i < qr.length; i += 3)
        (!t || ~t.indexOf(qr[i + 1])) && e(qr[i], qr[i + 1], qr[i + 2]);
    },
    Nt = function (e) {
      return typeof e == "string";
    },
    ot = function (e) {
      return typeof e == "function";
    },
    In = function (e) {
      return typeof e == "number";
    },
    ur = function (e) {
      return typeof e == "object";
    },
    Ln = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    oo = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    jr = Math.abs,
    Nc = "left",
    Fc = "top",
    lo = "right",
    co = "bottom",
    dr = "width",
    fr = "height",
    Dn = "Right",
    zn = "Left",
    Rn = "Top",
    Nn = "Bottom",
    Re = "padding",
    Ut = "margin",
    Xr = "Width",
    uo = "Height",
    $e = "px",
    Zt = function (e) {
      return ie.getComputedStyle(e);
    },
    Bf = function (e) {
      var t = Zt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Bc = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    xi = function (e, t) {
      var i =
          t &&
          Zt(e)[Ja] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          W.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        r = e.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    As = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    $c = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        s;
      for (s in i) t.push(i[s] / r);
      return t;
    },
    $f = function (e) {
      return function (t) {
        return W.utils.snap($c(e), t);
      };
    },
    fo = function (e) {
      var t = W.utils.snap(e),
        i =
          Array.isArray(e) &&
          e.slice(0).sort(function (r, s) {
            return r - s;
          });
      return i
        ? function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o;
            if (!s) return t(r);
            if (s > 0) {
              for (r -= a, o = 0; o < i.length; o++) if (i[o] >= r) return i[o];
              return i[o - 1];
            } else for (o = i.length, r += a; o--; ) if (i[o] <= r) return i[o];
            return i[0];
          }
        : function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o = t(r);
            return !s || Math.abs(o - r) < a || o - r < 0 == s < 0
              ? o
              : t(s < 0 ? r - e : r + e);
          };
    },
    Yf = function (e) {
      return function (t, i) {
        return fo($c(e))(t, i.direction);
      };
    },
    ks = function (e, t, i, r) {
      return i.split(",").forEach(function (s) {
        return e(t, s, r);
      });
    },
    Ve = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: !r, capture: !!s });
    },
    qe = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Cs = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Yc = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ps = { toggleActions: "play", anticipatePin: 0 },
    Os = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Is = function (e, t) {
      if (Nt(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in Os
              ? Os[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Ls = function (e, t, i, r, s, a, o, l) {
      var c = s.startColor,
        u = s.endColor,
        h = s.fontSize,
        m = s.indent,
        p = s.fontWeight,
        d = we.createElement("div"),
        f = cr(i) || Hi(i, "pinType") === "fixed",
        w = e.indexOf("scroller") !== -1,
        b = f ? fe : i,
        v = e.indexOf("start") !== -1,
        g = v ? c : u,
        y =
          "border-color:" +
          g +
          ";font-size:" +
          h +
          ";color:" +
          g +
          ";font-weight:" +
          p +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (y += "position:" + ((w || l) && f ? "fixed;" : "absolute;")),
        (w || l || !f) &&
          (y += (r === Be ? lo : co) + ":" + (a + parseFloat(m)) + "px;"),
        o &&
          (y +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (d._isStart = v),
        d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (d.style.cssText = y),
        (d.innerText = t || t === 0 ? e + "-" + t : e),
        b.children[0] ? b.insertBefore(d, b.children[0]) : b.appendChild(d),
        (d._offset = d["offset" + r.op.d2]),
        Ds(d, 0, r, v),
        d
      );
    },
    Ds = function (e, t, i, r) {
      var s = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (s[i.a + "Percent"] = r ? -100 : 0),
        (s[i.a] = r ? "1px" : 0),
        (s["border" + a + Xr] = 1),
        (s["border" + o + Xr] = 0),
        (s[i.p] = t + "px"),
        W.set(e, s);
    },
    ee = [],
    po = {},
    Fn,
    Hc = function () {
      return at() - Xt > 34 && (Fn || (Fn = requestAnimationFrame(Mi)));
    },
    Ur = function () {
      (!vt || !vt.isPressed || vt.startX > fe.clientWidth) &&
        (te.cache++,
        vt ? Fn || (Fn = requestAnimationFrame(Mi)) : Mi(),
        Xt || hr("scrollStart"),
        (Xt = at()));
    },
    ho = function () {
      (kc = ie.innerWidth), (Ac = ie.innerHeight);
    },
    Bn = function (e) {
      te.cache++,
        (e === !0 ||
          (!st &&
            !Mc &&
            !we.fullscreenElement &&
            !we.webkitFullscreenElement &&
            (!eo ||
              kc !== ie.innerWidth ||
              Math.abs(ie.innerHeight - Ac) > ie.innerHeight * 0.25))) &&
          _s.restart(!0);
    },
    pr = {},
    Hf = [],
    Wc = function n() {
      return qe(Q, "scrollEnd", n) || gr(!0);
    },
    hr = function (e) {
      return (
        (pr[e] &&
          pr[e].map(function (t) {
            return t();
          })) ||
        Hf
      );
    },
    Ft = [],
    Vc = function (e) {
      for (var t = 0; t < Ft.length; t += 5)
        (!e || (Ft[t + 4] && Ft[t + 4].query === e)) &&
          ((Ft[t].style.cssText = Ft[t + 1]),
          Ft[t].getBBox && Ft[t].setAttribute("transform", Ft[t + 2] || ""),
          (Ft[t + 3].uncache = 1));
    },
    mo = function (e, t) {
      var i;
      for (wt = 0; wt < ee.length; wt++)
        (i = ee[wt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (Es = !0), t && Vc(t), t || hr("revert");
    },
    qc = function (e, t) {
      te.cache++,
        (t || !yt) &&
          te.forEach(function (i) {
            return ot(i) && i.cacheID++ && (i.rec = 0);
          }),
        Nt(e) && (ie.history.scrollRestoration = io = e);
    },
    yt,
    mr = 0,
    Gc,
    Wf = function () {
      if (Gc !== mr) {
        var e = (Gc = mr);
        requestAnimationFrame(function () {
          return e === mr && gr(!0);
        });
      }
    },
    jc = function () {
      fe.appendChild(Gr),
        (ro = (!vt && Gr.offsetHeight) || ie.innerHeight),
        fe.removeChild(Gr);
    },
    Xc = function (e) {
      return An(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    gr = function (e, t) {
      if (
        ((Rt = we.documentElement),
        (fe = we.body),
        (Ka = [ie, we, Rt, fe]),
        Xt && !e && !Es)
      ) {
        Ve(Q, "scrollEnd", Wc);
        return;
      }
      jc(),
        (yt = Q.isRefreshing = !0),
        te.forEach(function (r) {
          return ot(r) && ++r.cacheID && (r.rec = r());
        });
      var i = hr("refreshInit");
      xc && Q.sort(),
        t || mo(),
        te.forEach(function (r) {
          ot(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        ee.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Es = !1),
        ee.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[s];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - a), r.refresh();
          }
        }),
        (no = 1),
        Xc(!0),
        ee.forEach(function (r) {
          var s = mi(r.scroller, r._dir),
            a = r.vars.end === "max" || (r._endClamp && r.end > s),
            o = r._startClamp && r.start >= s;
          (a || o) &&
            r.setPositions(
              o ? s - 1 : r.start,
              a ? Math.max(o ? s : r.start + 1, s) : r.end,
              !0
            );
        }),
        Xc(!1),
        (no = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        te.forEach(function (r) {
          ot(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        qc(io, 1),
        _s.pause(),
        mr++,
        (yt = 2),
        Mi(2),
        ee.forEach(function (r) {
          return ot(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (yt = Q.isRefreshing = !1),
        hr("refresh");
    },
    go = 0,
    zs = 1,
    $n,
    Mi = function (e) {
      if (e === 2 || (!yt && !Es)) {
        (Q.isUpdating = !0), $n && $n.update(0);
        var t = ee.length,
          i = at(),
          r = i - ao >= 50,
          s = t && ee[0].scroll();
        if (
          ((zs = go > s ? -1 : 1),
          yt || (go = s),
          r &&
            (Xt && !Ts && i - Xt > 200 && ((Xt = 0), hr("scrollEnd")),
            (Cn = ao),
            (ao = i)),
          zs < 0)
        ) {
          for (wt = t; wt-- > 0; ) ee[wt] && ee[wt].update(0, r);
          zs = 1;
        } else for (wt = 0; wt < t; wt++) ee[wt] && ee[wt].update(0, r);
        Q.isUpdating = !1;
      }
      Fn = 0;
    },
    wo = [
      Nc,
      Fc,
      co,
      lo,
      Ut + Nn,
      Ut + Dn,
      Ut + Rn,
      Ut + zn,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Rs = wo.concat([
      dr,
      fr,
      "boxSizing",
      "max" + Xr,
      "max" + uo,
      "position",
      Ut,
      Re,
      Re + Rn,
      Re + Dn,
      Re + Nn,
      Re + zn,
    ]),
    Vf = function (e, t, i) {
      Zr(i);
      var r = e._gsap;
      if (r.spacerIsNative) Zr(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    vo = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var s = wo.length, a = t.style, o = e.style, l; s--; )
          (l = wo[s]), (a[l] = i[l]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[co] = o[lo] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[dr] = As(e, gt) + $e),
          (a[fr] = As(e, Be) + $e),
          (a[Re] = o[Ut] = o[Fc] = o[Nc] = "0"),
          Zr(r),
          (o[dr] = o["max" + Xr] = i[dr]),
          (o[fr] = o["max" + uo] = i[fr]),
          (o[Re] = i[Re]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    qf = /([A-Z])/g,
    Zr = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          r = 0,
          s,
          a;
        for ((e.t._gsap || W.core.getCache(e.t)).uncache = 1; r < i; r += 2)
          (a = e[r + 1]),
            (s = e[r]),
            a
              ? (t[s] = a)
              : t[s] && t.removeProperty(s.replace(qf, "-$1").toLowerCase());
      }
    },
    Ns = function (e) {
      for (var t = Rs.length, i = e.style, r = [], s = 0; s < t; s++)
        r.push(Rs[s], i[Rs[s]]);
      return (r.t = e), r;
    },
    Gf = function (e, t, i) {
      for (var r = [], s = e.length, a = i ? 8 : 0, o; a < s; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    Fs = { left: 0, top: 0 },
    Uc = function (e, t, i, r, s, a, o, l, c, u, h, m, p, d) {
      ot(e) && (e = e(l)),
        Nt(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? Is("0" + e.substr(3), i) : 0));
      var f = p ? p.time() : 0,
        w,
        b,
        v;
      if ((p && p.seek(0), isNaN(e) || (e = +e), In(e)))
        p &&
          (e = W.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            m,
            e
          )),
          o && Ds(o, i, r, !0);
      else {
        ot(t) && (t = t(l));
        var g = (e || "0").split(" "),
          y,
          _,
          A,
          M;
        (v = Mt(t, l) || fe),
          (y = xi(v) || {}),
          (!y || (!y.left && !y.top)) &&
            Zt(v).display === "none" &&
            ((M = v.style.display),
            (v.style.display = "block"),
            (y = xi(v)),
            M ? (v.style.display = M) : v.style.removeProperty("display")),
          (_ = Is(g[0], y[r.d])),
          (A = Is(g[1] || "0", i)),
          (e = y[r.p] - c[r.p] - u + _ + s - A),
          o && Ds(o, A, r, i - A < 20 || (o._isStart && A > 20)),
          (i -= i - A);
      }
      if ((d && ((l[d] = e || -0.001), e < 0 && (e = 0)), a)) {
        var E = e + i,
          k = a._isStart;
        (w = "scroll" + r.d2),
          Ds(
            a,
            E,
            r,
            (k && E > 20) ||
              (!k && (h ? Math.max(fe[w], Rt[w]) : a.parentNode[w]) <= E + 1)
          ),
          h &&
            ((c = xi(o)),
            h && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + $e));
      }
      return (
        p &&
          v &&
          ((w = xi(v)),
          p.seek(m),
          (b = xi(v)),
          (p._caScrollDist = w[r.p] - b[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(f),
        p ? e : Math.round(e)
      );
    },
    jf = /(webkit|moz|length|cssText|inset)/i,
    Zc = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var s = e.style,
          a,
          o;
        if (t === fe) {
          (e._stOrig = s.cssText), (o = Zt(e));
          for (a in o)
            !+a &&
              !jf.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = i), (s.left = r);
        } else s.cssText = e._stOrig;
        (W.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Kc = function (e, t, i) {
      var r = t,
        s = r;
      return function (a) {
        var o = Math.round(e());
        return (
          o !== r &&
            o !== s &&
            Math.abs(o - r) > 3 &&
            Math.abs(o - s) > 3 &&
            ((a = o), i && i()),
          (s = r),
          (r = Math.round(a)),
          r
        );
      };
    },
    Bs = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), W.set(e, r);
    },
    Jc = function (e, t) {
      var i = Wi(e, t),
        r = "_scroll" + t.p2,
        s = function a(o, l, c, u, h) {
          var m = a.tween,
            p = l.onComplete,
            d = {};
          c = c || i();
          var f = Kc(i, c, function () {
            m.kill(), (a.tween = 0);
          });
          return (
            (h = (u && h) || 0),
            (u = u || o - c),
            m && m.kill(),
            (l[r] = o),
            (l.inherit = !1),
            (l.modifiers = d),
            (d[r] = function () {
              return f(c + u * m.ratio + h * m.ratio * m.ratio);
            }),
            (l.onUpdate = function () {
              te.cache++, a.tween && Mi();
            }),
            (l.onComplete = function () {
              (a.tween = 0), p && p.call(m);
            }),
            (m = a.tween = W.to(e, l)),
            m
          );
        };
      return (
        (e[r] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ve(e, "wheel", i.wheelHandler),
        Q.isTouch && Ve(e, "touchmove", i.wheelHandler),
        s
      );
    },
    Q = (function () {
      function n(t, i) {
        Vr ||
          n.register(W) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          to(this),
          this.init(t, i);
      }
      var e = n.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Pn)
          ) {
            this.update = this.refresh = this.kill = hi;
            return;
          }
          i = Bc(Nt(i) || In(i) || i.nodeType ? { trigger: i } : i, Ps);
          var s = i,
            a = s.onUpdate,
            o = s.toggleClass,
            l = s.id,
            c = s.onToggle,
            u = s.onRefresh,
            h = s.scrub,
            m = s.trigger,
            p = s.pin,
            d = s.pinSpacing,
            f = s.invalidateOnRefresh,
            w = s.anticipatePin,
            b = s.onScrubComplete,
            v = s.onSnapComplete,
            g = s.once,
            y = s.snap,
            _ = s.pinReparent,
            A = s.pinSpacer,
            M = s.containerAnimation,
            E = s.fastScrollEnd,
            k = s.preventOverlaps,
            x =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? gt
                : Be,
            D = !h && h !== 0,
            S = Mt(i.scroller || ie),
            T = W.core.getCache(S),
            C = cr(S),
            L =
              ("pinType" in i
                ? i.pinType
                : Hi(S, "pinType") || (C && "fixed")) === "fixed",
            z = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            O = D && i.toggleActions.split(" "),
            I = "markers" in i ? i.markers : Ps.markers,
            N = C ? 0 : parseFloat(Zt(S)["border" + x.p2 + Xr]) || 0,
            P = this,
            H =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(P);
              },
            G = Nf(S, C, x),
            re = Ff(S, C),
            ue = 0,
            B = 0,
            F = 0,
            $ = Wi(S, x),
            j,
            ce,
            Qe,
            _e,
            Se,
            K,
            ne,
            ve,
            Ye,
            R,
            Ne,
            ct,
            Ht,
            me,
            Wt,
            Qt,
            ri,
            Ce,
            ei,
            pe,
            kt,
            je,
            Ci,
            Qn,
            Fe,
            na,
            Pi,
            an,
            on,
            Ui,
            Mr,
            ae,
            Ar,
            ni,
            si,
            ai,
            kr,
            ln,
            Oi;
          if (
            ((P._startClamp = P._endClamp = !1),
            (P._dir = x),
            (w *= 45),
            (P.scroller = S),
            (P.scroll = M ? M.time.bind(M) : $),
            (_e = $()),
            (P.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((xc = 1), i.refreshPriority === -9999 && ($n = P)),
            (T.tweenScroll = T.tweenScroll || {
              top: Jc(S, Be),
              left: Jc(S, gt),
            }),
            (P.tweenTo = j = T.tweenScroll[x.p]),
            (P.scrubDuration = function (Y) {
              (Ar = In(Y) && Y),
                Ar
                  ? ae
                    ? ae.duration(Y)
                    : (ae = W.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Ar,
                        paused: !0,
                        onComplete: function () {
                          return b && b(P);
                        },
                      }))
                  : (ae && ae.progress(1).kill(), (ae = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !P.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (P.animation = r.pause()),
              (r.scrollTrigger = P),
              P.scrubDuration(h),
              (Ui = 0),
              l || (l = r.vars.id)),
            y &&
              ((!ur(y) || y.push) && (y = { snapTo: y }),
              "scrollBehavior" in fe.style &&
                W.set(C ? [fe, Rt] : S, { scrollBehavior: "auto" }),
              te.forEach(function (Y) {
                return (
                  ot(Y) &&
                  Y.target === (C ? we.scrollingElement || Rt : S) &&
                  (Y.smooth = !1)
                );
              }),
              (Qe = ot(y.snapTo)
                ? y.snapTo
                : y.snapTo === "labels"
                ? $f(r)
                : y.snapTo === "labelsDirectional"
                ? Yf(r)
                : y.directional !== !1
                ? function (Y, U) {
                    return fo(y.snapTo)(Y, at() - B < 500 ? 0 : U.direction);
                  }
                : W.utils.snap(y.snapTo)),
              (ni = y.duration || { min: 0.1, max: 2 }),
              (ni = ur(ni) ? kn(ni.min, ni.max) : kn(ni, ni)),
              (si = W.delayedCall(y.delay || Ar / 2 || 0.1, function () {
                var Y = $(),
                  U = at() - B < 500,
                  q = j.tween;
                if (
                  (U || Math.abs(P.getVelocity()) < 10) &&
                  !q &&
                  !Ts &&
                  ue !== Y
                ) {
                  var Z = (Y - K) / me,
                    Xe = r && !D ? r.totalProgress() : Z,
                    le = U ? 0 : ((Xe - Mr) / (at() - Cn)) * 1e3 || 0,
                    Le = W.utils.clamp(-Z, 1 - Z, (jr(le / 2) * le) / 0.185),
                    ut = Z + (y.inertia === !1 ? 0 : Le),
                    Pe,
                    Te,
                    ge = y,
                    oi = ge.onStart,
                    Me = ge.onInterrupt,
                    Vt = ge.onComplete;
                  if (
                    ((Pe = Qe(ut, P)),
                    In(Pe) || (Pe = ut),
                    (Te = Math.max(0, Math.round(K + Pe * me))),
                    Y <= ne && Y >= K && Te !== Y)
                  ) {
                    if (q && !q._initted && q.data <= jr(Te - Y)) return;
                    y.inertia === !1 && (Le = Pe - Z),
                      j(
                        Te,
                        {
                          duration: ni(
                            jr(
                              (Math.max(jr(ut - Xe), jr(Pe - Xe)) * 0.185) /
                                le /
                                0.05 || 0
                            )
                          ),
                          ease: y.ease || "power3",
                          data: jr(Te - Y),
                          onInterrupt: function () {
                            return si.restart(!0) && Me && Me(P);
                          },
                          onComplete: function () {
                            P.update(),
                              (ue = $()),
                              r &&
                                !D &&
                                (ae
                                  ? ae.resetTo(
                                      "totalProgress",
                                      Pe,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(Pe)),
                              (Ui = Mr =
                                r && !D ? r.totalProgress() : P.progress),
                              v && v(P),
                              Vt && Vt(P);
                          },
                        },
                        Y,
                        Le * me,
                        Te - Y - Le * me
                      ),
                      oi && oi(P, j.tween);
                  }
                } else P.isActive && ue !== Y && si.restart(!0);
              }).pause())),
            l && (po[l] = P),
            (m = P.trigger = Mt(m || (p !== !0 && p))),
            (Oi = m && m._gsap && m._gsap.stRevert),
            Oi && (Oi = Oi(P)),
            (p = p === !0 ? m : Mt(p)),
            Nt(o) && (o = { targets: m, className: o }),
            p &&
              (d === !1 ||
                d === Ut ||
                (d =
                  !d &&
                  p.parentNode &&
                  p.parentNode.style &&
                  Zt(p.parentNode).display === "flex"
                    ? !1
                    : Re),
              (P.pin = p),
              (ce = W.core.getCache(p)),
              ce.spacer
                ? (Wt = ce.pinState)
                : (A &&
                    ((A = Mt(A)),
                    A && !A.nodeType && (A = A.current || A.nativeElement),
                    (ce.spacerIsNative = !!A),
                    A && (ce.spacerState = Ns(A))),
                  (ce.spacer = Ce = A || we.createElement("div")),
                  Ce.classList.add("pin-spacer"),
                  l && Ce.classList.add("pin-spacer-" + l),
                  (ce.pinState = Wt = Ns(p))),
              i.force3D !== !1 && W.set(p, { force3D: !0 }),
              (P.spacer = Ce = ce.spacer),
              (on = Zt(p)),
              (Qn = on[d + x.os2]),
              (pe = W.getProperty(p)),
              (kt = W.quickSetter(p, x.a, $e)),
              vo(p, Ce, on),
              (ri = Ns(p))),
            I)
          ) {
            (ct = ur(I) ? Bc(I, Yc) : Yc),
              (R = Ls("scroller-start", l, S, x, ct, 0)),
              (Ne = Ls("scroller-end", l, S, x, ct, 0, R)),
              (ei = R["offset" + x.op.d2]);
            var es = Mt(Hi(S, "content") || S);
            (ve = this.markerStart = Ls("start", l, es, x, ct, ei, 0, M)),
              (Ye = this.markerEnd = Ls("end", l, es, x, ct, ei, 0, M)),
              M && (ln = W.quickSetter([ve, Ye], x.a, $e)),
              !L &&
                !(pi.length && Hi(S, "fixedMarkers") === !0) &&
                (Bf(C ? fe : S),
                W.set([R, Ne], { force3D: !0 }),
                (na = W.quickSetter(R, x.a, $e)),
                (an = W.quickSetter(Ne, x.a, $e)));
          }
          if (M) {
            var J = M.vars.onUpdate,
              X = M.vars.onUpdateParams;
            M.eventCallback("onUpdate", function () {
              P.update(0, 0, 1), J && J.apply(M, X || []);
            });
          }
          if (
            ((P.previous = function () {
              return ee[ee.indexOf(P) - 1];
            }),
            (P.next = function () {
              return ee[ee.indexOf(P) + 1];
            }),
            (P.revert = function (Y, U) {
              if (!U) return P.kill(!0);
              var q = Y !== !1 || !P.enabled,
                Z = st;
              q !== P.isReverted &&
                (q &&
                  ((ai = Math.max($(), P.scroll.rec || 0)),
                  (F = P.progress),
                  (kr = r && r.progress())),
                ve &&
                  [ve, Ye, R, Ne].forEach(function (Xe) {
                    return (Xe.style.display = q ? "none" : "block");
                  }),
                q && ((st = P), P.update(q)),
                p &&
                  (!_ || !P.isActive) &&
                  (q ? Vf(p, Ce, Wt) : vo(p, Ce, Zt(p), Fe)),
                q || P.update(q),
                (st = Z),
                (P.isReverted = q));
            }),
            (P.refresh = function (Y, U, q, Z) {
              if (!((st || !P.enabled) && !U)) {
                if (p && Y && Xt) {
                  Ve(n, "scrollEnd", Wc);
                  return;
                }
                !yt && H && H(P),
                  (st = P),
                  j.tween && !q && (j.tween.kill(), (j.tween = 0)),
                  ae && ae.pause(),
                  f &&
                    r &&
                    (r.revert({ kill: !1 }).invalidate(),
                    r.getChildren &&
                      r.getChildren(!0, !0, !1).forEach(function (Zi) {
                        return Zi.vars.immediateRender && Zi.render(0, !0, !0);
                      })),
                  P.isReverted || P.revert(!0, !0),
                  (P._subPinOffset = !1);
                var Xe = G(),
                  le = re(),
                  Le = M ? M.duration() : mi(S, x),
                  ut = me <= 0.01 || !me,
                  Pe = 0,
                  Te = Z || 0,
                  ge = ur(q) ? q.end : i.end,
                  oi = i.endTrigger || m,
                  Me = ur(q)
                    ? q.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  Vt = (P.pinnedContainer =
                    i.pinnedContainer && Mt(i.pinnedContainer, P)),
                  vi = (m && Math.max(0, ee.indexOf(P))) || 0,
                  et = vi,
                  tt,
                  dt,
                  Cr,
                  sa,
                  ft,
                  He,
                  yi,
                  Qo,
                  rd,
                  ts,
                  bi,
                  is,
                  aa;
                for (
                  I &&
                  ur(q) &&
                  ((is = W.getProperty(R, x.p)), (aa = W.getProperty(Ne, x.p)));
                  et-- > 0;

                )
                  (He = ee[et]),
                    He.end || He.refresh(0, 1) || (st = P),
                    (yi = He.pin),
                    yi &&
                      (yi === m || yi === p || yi === Vt) &&
                      !He.isReverted &&
                      (ts || (ts = []), ts.unshift(He), He.revert(!0, !0)),
                    He !== ee[et] && (vi--, et--);
                for (
                  ot(Me) && (Me = Me(P)),
                    Me = Cc(Me, "start", P),
                    K =
                      Uc(
                        Me,
                        m,
                        Xe,
                        x,
                        $(),
                        ve,
                        R,
                        P,
                        le,
                        N,
                        L,
                        Le,
                        M,
                        P._startClamp && "_startClamp"
                      ) || (p ? -0.001 : 0),
                    ot(ge) && (ge = ge(P)),
                    Nt(ge) &&
                      !ge.indexOf("+=") &&
                      (~ge.indexOf(" ")
                        ? (ge = (Nt(Me) ? Me.split(" ")[0] : "") + ge)
                        : ((Pe = Is(ge.substr(2), Xe)),
                          (ge = Nt(Me)
                            ? Me
                            : (M
                                ? W.utils.mapRange(
                                    0,
                                    M.duration(),
                                    M.scrollTrigger.start,
                                    M.scrollTrigger.end,
                                    K
                                  )
                                : K) + Pe),
                          (oi = m))),
                    ge = Cc(ge, "end", P),
                    ne =
                      Math.max(
                        K,
                        Uc(
                          ge || (oi ? "100% 0" : Le),
                          oi,
                          Xe,
                          x,
                          $() + Pe,
                          Ye,
                          Ne,
                          P,
                          le,
                          N,
                          L,
                          Le,
                          M,
                          P._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Pe = 0,
                    et = vi;
                  et--;

                )
                  (He = ee[et]),
                    (yi = He.pin),
                    yi &&
                      He.start - He._pinPush <= K &&
                      !M &&
                      He.end > 0 &&
                      ((tt =
                        He.end -
                        (P._startClamp ? Math.max(0, He.start) : He.start)),
                      ((yi === m && He.start - He._pinPush < K) || yi === Vt) &&
                        isNaN(Me) &&
                        (Pe += tt * (1 - He.progress)),
                      yi === p && (Te += tt));
                if (
                  ((K += Pe),
                  (ne += Pe),
                  P._startClamp && (P._startClamp += Pe),
                  P._endClamp &&
                    !yt &&
                    ((P._endClamp = ne || -0.001),
                    (ne = Math.min(ne, mi(S, x)))),
                  (me = ne - K || ((K -= 0.01) && 0.001)),
                  ut && (F = W.utils.clamp(0, 1, W.utils.normalize(K, ne, ai))),
                  (P._pinPush = Te),
                  ve &&
                    Pe &&
                    ((tt = {}),
                    (tt[x.a] = "+=" + Pe),
                    Vt && (tt[x.p] = "-=" + $()),
                    W.set([ve, Ye], tt)),
                  p && !(no && P.end >= mi(S, x)))
                )
                  (tt = Zt(p)),
                    (sa = x === Be),
                    (Cr = $()),
                    (je = parseFloat(pe(x.a)) + Te),
                    !Le &&
                      ne > 1 &&
                      ((bi = (C ? we.scrollingElement || Rt : S).style),
                      (bi = {
                        style: bi,
                        value: bi["overflow" + x.a.toUpperCase()],
                      }),
                      C &&
                        Zt(fe)["overflow" + x.a.toUpperCase()] !== "scroll" &&
                        (bi.style["overflow" + x.a.toUpperCase()] = "scroll")),
                    vo(p, Ce, tt),
                    (ri = Ns(p)),
                    (dt = xi(p, !0)),
                    (Qo = L && Wi(S, sa ? gt : Be)()),
                    d
                      ? ((Fe = [d + x.os2, me + Te + $e]),
                        (Fe.t = Ce),
                        (et = d === Re ? As(p, x) + me + Te : 0),
                        et &&
                          (Fe.push(x.d, et + $e),
                          Ce.style.flexBasis !== "auto" &&
                            (Ce.style.flexBasis = et + $e)),
                        Zr(Fe),
                        Vt &&
                          ee.forEach(function (Zi) {
                            Zi.pin === Vt &&
                              Zi.vars.pinSpacing !== !1 &&
                              (Zi._subPinOffset = !0);
                          }),
                        L && $(ai))
                      : ((et = As(p, x)),
                        et &&
                          Ce.style.flexBasis !== "auto" &&
                          (Ce.style.flexBasis = et + $e)),
                    L &&
                      ((ft = {
                        top: dt.top + (sa ? Cr - K : Qo) + $e,
                        left: dt.left + (sa ? Qo : Cr - K) + $e,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ft[dr] = ft["max" + Xr] = Math.ceil(dt.width) + $e),
                      (ft[fr] = ft["max" + uo] = Math.ceil(dt.height) + $e),
                      (ft[Ut] =
                        ft[Ut + Rn] =
                        ft[Ut + Dn] =
                        ft[Ut + Nn] =
                        ft[Ut + zn] =
                          "0"),
                      (ft[Re] = tt[Re]),
                      (ft[Re + Rn] = tt[Re + Rn]),
                      (ft[Re + Dn] = tt[Re + Dn]),
                      (ft[Re + Nn] = tt[Re + Nn]),
                      (ft[Re + zn] = tt[Re + zn]),
                      (Qt = Gf(Wt, ft, _)),
                      yt && $(0)),
                    r
                      ? ((rd = r._initted),
                        Qa(1),
                        r.render(r.duration(), !0, !0),
                        (Ci = pe(x.a) - je + me + Te),
                        (Pi = Math.abs(me - Ci) > 1),
                        L && Pi && Qt.splice(Qt.length - 2, 2),
                        r.render(0, !0, !0),
                        rd || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Qa(0))
                      : (Ci = me),
                    bi &&
                      (bi.value
                        ? (bi.style["overflow" + x.a.toUpperCase()] = bi.value)
                        : bi.style.removeProperty("overflow-" + x.a));
                else if (m && $() && !M)
                  for (dt = m.parentNode; dt && dt !== fe; )
                    dt._pinOffset &&
                      ((K -= dt._pinOffset), (ne -= dt._pinOffset)),
                      (dt = dt.parentNode);
                ts &&
                  ts.forEach(function (Zi) {
                    return Zi.revert(!1, !0);
                  }),
                  (P.start = K),
                  (P.end = ne),
                  (_e = Se = yt ? ai : $()),
                  !M && !yt && (_e < ai && $(ai), (P.scroll.rec = 0)),
                  P.revert(!1, !0),
                  (B = at()),
                  si && ((ue = -1), si.restart(!0)),
                  (st = 0),
                  r &&
                    D &&
                    (r._initted || kr) &&
                    r.progress() !== kr &&
                    r.progress(kr || 0, !0).render(r.time(), !0, !0),
                  (ut || F !== P.progress || M || f || (r && !r._initted)) &&
                    (r &&
                      !D &&
                      (r._initted || F || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        M && K < -0.001 && !F ? W.utils.normalize(K, ne, 0) : F,
                        !0
                      ),
                    (P.progress = ut || (_e - K) / me === F ? 0 : F)),
                  p && d && (Ce._pinOffset = Math.round(P.progress * Ci)),
                  ae && ae.invalidate(),
                  isNaN(is) ||
                    ((is -= W.getProperty(R, x.p)),
                    (aa -= W.getProperty(Ne, x.p)),
                    Bs(R, x, is),
                    Bs(ve, x, is - (Z || 0)),
                    Bs(Ne, x, aa),
                    Bs(Ye, x, aa - (Z || 0))),
                  ut && !yt && P.update(),
                  u && !yt && !Ht && ((Ht = !0), u(P), (Ht = !1));
              }
            }),
            (P.getVelocity = function () {
              return (($() - Se) / (at() - Cn)) * 1e3 || 0;
            }),
            (P.endAnimation = function () {
              Ln(P.callbackAnimation),
                r &&
                  (ae
                    ? ae.progress(1)
                    : r.paused()
                    ? D || Ln(r, P.direction < 0, 1)
                    : Ln(r, r.reversed()));
            }),
            (P.labelToScroll = function (Y) {
              return (
                (r &&
                  r.labels &&
                  (K || P.refresh() || K) +
                    (r.labels[Y] / r.duration()) * me) ||
                0
              );
            }),
            (P.getTrailing = function (Y) {
              var U = ee.indexOf(P),
                q =
                  P.direction > 0 ? ee.slice(0, U).reverse() : ee.slice(U + 1);
              return (
                Nt(Y)
                  ? q.filter(function (Z) {
                      return Z.vars.preventOverlaps === Y;
                    })
                  : q
              ).filter(function (Z) {
                return P.direction > 0 ? Z.end <= K : Z.start >= ne;
              });
            }),
            (P.update = function (Y, U, q) {
              if (!(M && !q && !Y)) {
                var Z = yt === !0 ? ai : P.scroll(),
                  Xe = Y ? 0 : (Z - K) / me,
                  le = Xe < 0 ? 0 : Xe > 1 ? 1 : Xe || 0,
                  Le = P.progress,
                  ut,
                  Pe,
                  Te,
                  ge,
                  oi,
                  Me,
                  Vt,
                  vi;
                if (
                  (U &&
                    ((Se = _e),
                    (_e = M ? $() : Z),
                    y && ((Mr = Ui), (Ui = r && !D ? r.totalProgress() : le))),
                  w &&
                    p &&
                    !st &&
                    !xs &&
                    Xt &&
                    (!le && K < Z + ((Z - Se) / (at() - Cn)) * w
                      ? (le = 1e-4)
                      : le === 1 &&
                        ne > Z + ((Z - Se) / (at() - Cn)) * w &&
                        (le = 0.9999)),
                  le !== Le && P.enabled)
                ) {
                  if (
                    ((ut = P.isActive = !!le && le < 1),
                    (Pe = !!Le && Le < 1),
                    (Me = ut !== Pe),
                    (oi = Me || !!le != !!Le),
                    (P.direction = le > Le ? 1 : -1),
                    (P.progress = le),
                    oi &&
                      !st &&
                      ((Te = le && !Le ? 0 : le === 1 ? 1 : Le === 1 ? 2 : 3),
                      D &&
                        ((ge =
                          (!Me && O[Te + 1] !== "none" && O[Te + 1]) || O[Te]),
                        (vi =
                          r &&
                          (ge === "complete" || ge === "reset" || ge in r)))),
                    k &&
                      (Me || vi) &&
                      (vi || h || !r) &&
                      (ot(k)
                        ? k(P)
                        : P.getTrailing(k).forEach(function (Cr) {
                            return Cr.endAnimation();
                          })),
                    D ||
                      (ae && !st && !xs
                        ? (ae._dp._time - ae._start !== ae._time &&
                            ae.render(ae._dp._time - ae._start),
                          ae.resetTo
                            ? ae.resetTo(
                                "totalProgress",
                                le,
                                r._tTime / r._tDur
                              )
                            : ((ae.vars.totalProgress = le),
                              ae.invalidate().restart()))
                        : r && r.totalProgress(le, !!(st && (B || Y)))),
                    p)
                  ) {
                    if ((Y && d && (Ce.style[d + x.os2] = Qn), !L))
                      kt(On(je + Ci * le));
                    else if (oi) {
                      if (
                        ((Vt =
                          !Y && le > Le && ne + 1 > Z && Z + 1 >= mi(S, x)),
                        _)
                      )
                        if (!Y && (ut || Vt)) {
                          var et = xi(p, !0),
                            tt = Z - K;
                          Zc(
                            p,
                            fe,
                            et.top + (x === Be ? tt : 0) + $e,
                            et.left + (x === Be ? 0 : tt) + $e
                          );
                        } else Zc(p, Ce);
                      Zr(ut || Vt ? Qt : ri),
                        (Pi && le < 1 && ut) ||
                          kt(je + (le === 1 && !Vt ? Ci : 0));
                    }
                  }
                  y && !j.tween && !st && !xs && si.restart(!0),
                    o &&
                      (Me || (g && le && (le < 1 || !so))) &&
                      An(o.targets).forEach(function (Cr) {
                        return Cr.classList[ut || g ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !D && !Y && a(P),
                    oi && !st
                      ? (D &&
                          (vi &&
                            (ge === "complete"
                              ? r.pause().totalProgress(1)
                              : ge === "reset"
                              ? r.restart(!0).pause()
                              : ge === "restart"
                              ? r.restart(!0)
                              : r[ge]()),
                          a && a(P)),
                        (Me || !so) &&
                          (c && Me && oo(P, c),
                          z[Te] && oo(P, z[Te]),
                          g && (le === 1 ? P.kill(!1, 1) : (z[Te] = 0)),
                          Me ||
                            ((Te = le === 1 ? 1 : 3), z[Te] && oo(P, z[Te]))),
                        E &&
                          !ut &&
                          Math.abs(P.getVelocity()) > (In(E) ? E : 2500) &&
                          (Ln(P.callbackAnimation),
                          ae
                            ? ae.progress(1)
                            : Ln(r, ge === "reverse" ? 1 : !le, 1)))
                      : D && a && !st && a(P);
                }
                if (an) {
                  var dt = M ? (Z / M.duration()) * (M._caScrollDist || 0) : Z;
                  na(dt + (R._isFlipped ? 1 : 0)), an(dt);
                }
                ln && ln((-Z / M.duration()) * (M._caScrollDist || 0));
              }
            }),
            (P.enable = function (Y, U) {
              P.enabled ||
                ((P.enabled = !0),
                Ve(S, "resize", Bn),
                C || Ve(S, "scroll", Ur),
                H && Ve(n, "refreshInit", H),
                Y !== !1 && ((P.progress = F = 0), (_e = Se = ue = $())),
                U !== !1 && P.refresh());
            }),
            (P.getTween = function (Y) {
              return Y && j ? j.tween : ae;
            }),
            (P.setPositions = function (Y, U, q, Z) {
              if (M) {
                var Xe = M.scrollTrigger,
                  le = M.duration(),
                  Le = Xe.end - Xe.start;
                (Y = Xe.start + (Le * Y) / le), (U = Xe.start + (Le * U) / le);
              }
              P.refresh(
                !1,
                !1,
                {
                  start: Pc(Y, q && !!P._startClamp),
                  end: Pc(U, q && !!P._endClamp),
                },
                Z
              ),
                P.update();
            }),
            (P.adjustPinSpacing = function (Y) {
              if (Fe && Y) {
                var U = Fe.indexOf(x.d) + 1;
                (Fe[U] = parseFloat(Fe[U]) + Y + $e),
                  (Fe[1] = parseFloat(Fe[1]) + Y + $e),
                  Zr(Fe);
              }
            }),
            (P.disable = function (Y, U) {
              if (
                P.enabled &&
                (Y !== !1 && P.revert(!0, !0),
                (P.enabled = P.isActive = !1),
                U || (ae && ae.pause()),
                (ai = 0),
                ce && (ce.uncache = 1),
                H && qe(n, "refreshInit", H),
                si && (si.pause(), j.tween && j.tween.kill() && (j.tween = 0)),
                !C)
              ) {
                for (var q = ee.length; q--; )
                  if (ee[q].scroller === S && ee[q] !== P) return;
                qe(S, "resize", Bn), C || qe(S, "scroll", Ur);
              }
            }),
            (P.kill = function (Y, U) {
              P.disable(Y, U), ae && !U && ae.kill(), l && delete po[l];
              var q = ee.indexOf(P);
              q >= 0 && ee.splice(q, 1),
                q === wt && zs > 0 && wt--,
                (q = 0),
                ee.forEach(function (Z) {
                  return Z.scroller === P.scroller && (q = 1);
                }),
                q || yt || (P.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  Y && r.revert({ kill: !1 }),
                  U || r.kill()),
                ve &&
                  [ve, Ye, R, Ne].forEach(function (Z) {
                    return Z.parentNode && Z.parentNode.removeChild(Z);
                  }),
                $n === P && ($n = 0),
                p &&
                  (ce && (ce.uncache = 1),
                  (q = 0),
                  ee.forEach(function (Z) {
                    return Z.pin === p && q++;
                  }),
                  q || (ce.spacer = 0)),
                i.onKill && i.onKill(P);
            }),
            ee.push(P),
            P.enable(!1, !1),
            Oi && Oi(P),
            r && r.add && !me)
          ) {
            var de = P.update;
            (P.update = function () {
              (P.update = de), te.cache++, K || ne || P.refresh();
            }),
              W.delayedCall(0.01, P.update),
              (me = 0.01),
              (K = ne = 0);
          } else P.refresh();
          p && Wf();
        }),
        (n.register = function (i) {
          return (
            Vr ||
              ((W = i || Dc()),
              Lc() && window.document && n.enable(),
              (Vr = Pn)),
            Vr
          );
        }),
        (n.defaults = function (i) {
          if (i) for (var r in i) Ps[r] = i[r];
          return Ps;
        }),
        (n.disable = function (i, r) {
          (Pn = 0),
            ee.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            qe(ie, "wheel", Ur),
            qe(we, "scroll", Ur),
            clearInterval(Ss),
            qe(we, "touchcancel", hi),
            qe(fe, "touchstart", hi),
            ks(qe, we, "pointerdown,touchstart,mousedown", Oc),
            ks(qe, we, "pointerup,touchend,mouseup", Ic),
            _s.kill(),
            Ms(qe);
          for (var s = 0; s < te.length; s += 3)
            Cs(qe, te[s], te[s + 1]), Cs(qe, te[s], te[s + 2]);
        }),
        (n.enable = function () {
          if (
            ((ie = window),
            (we = document),
            (Rt = we.documentElement),
            (fe = we.body),
            W &&
              ((An = W.utils.toArray),
              (kn = W.utils.clamp),
              (to = W.core.context || hi),
              (Qa = W.core.suppressOverwrites || hi),
              (io = ie.history.scrollRestoration || "auto"),
              (go = ie.pageYOffset || 0),
              W.core.globals("ScrollTrigger", n),
              fe))
          ) {
            (Pn = 1),
              (Gr = document.createElement("div")),
              (Gr.style.height = "100vh"),
              (Gr.style.position = "absolute"),
              jc(),
              Rf(),
              Ie.register(W),
              (n.isTouch = Ie.isTouch),
              (Vi =
                Ie.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (eo = Ie.isTouch === 1),
              Ve(ie, "wheel", Ur),
              (Ka = [ie, we, Rt, fe]),
              W.matchMedia
                ? ((n.matchMedia = function (c) {
                    var u = W.matchMedia(),
                      h;
                    for (h in c) u.add(h, c[h]);
                    return u;
                  }),
                  W.addEventListener("matchMediaInit", function () {
                    return mo();
                  }),
                  W.addEventListener("matchMediaRevert", function () {
                    return Vc();
                  }),
                  W.addEventListener("matchMedia", function () {
                    gr(0, 1), hr("matchMedia");
                  }),
                  W.matchMedia().add("(orientation: portrait)", function () {
                    return ho(), ho;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              ho(),
              Ve(we, "scroll", Ur);
            var i = fe.hasAttribute("style"),
              r = fe.style,
              s = r.borderTopStyle,
              a = W.core.Animation.prototype,
              o,
              l;
            for (
              a.revert ||
                Object.defineProperty(a, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                r.borderTopStyle = "solid",
                o = xi(fe),
                Be.m = Math.round(o.top + Be.sc()) || 0,
                gt.m = Math.round(o.left + gt.sc()) || 0,
                s
                  ? (r.borderTopStyle = s)
                  : r.removeProperty("border-top-style"),
                i ||
                  (fe.setAttribute("style", ""), fe.removeAttribute("style")),
                Ss = setInterval(Hc, 250),
                W.delayedCall(0.5, function () {
                  return (xs = 0);
                }),
                Ve(we, "touchcancel", hi),
                Ve(fe, "touchstart", hi),
                ks(Ve, we, "pointerdown,touchstart,mousedown", Oc),
                ks(Ve, we, "pointerup,touchend,mouseup", Ic),
                Ja = W.utils.checkPrefix("transform"),
                Rs.push(Ja),
                Vr = at(),
                _s = W.delayedCall(0.2, gr).pause(),
                qr = [
                  we,
                  "visibilitychange",
                  function () {
                    var c = ie.innerWidth,
                      u = ie.innerHeight;
                    we.hidden
                      ? ((Tc = c), (Ec = u))
                      : (Tc !== c || Ec !== u) && Bn();
                  },
                  we,
                  "DOMContentLoaded",
                  gr,
                  ie,
                  "load",
                  gr,
                  ie,
                  "resize",
                  Bn,
                ],
                Ms(Ve),
                ee.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < te.length;
              l += 3
            )
              Cs(qe, te[l], te[l + 1]), Cs(qe, te[l], te[l + 2]);
          }
        }),
        (n.config = function (i) {
          "limitCallbacks" in i && (so = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(Ss)) || ((Ss = r) && setInterval(Hc, r)),
            "ignoreMobileResize" in i &&
              (eo = n.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (Ms(qe) || Ms(Ve, i.autoRefreshEvents || "none"),
              (Mc = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (n.scrollerProxy = function (i, r) {
          var s = Mt(i),
            a = te.indexOf(s),
            o = cr(s);
          ~a && te.splice(a, o ? 6 : 2),
            r && (o ? pi.unshift(ie, r, fe, r, Rt, r) : pi.unshift(s, r));
        }),
        (n.clearMatchMedia = function (i) {
          ee.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (i, r, s) {
          var a = (Nt(i) ? Mt(i) : i).getBoundingClientRect(),
            o = a[s ? dr : fr] * r || 0;
          return s
            ? a.right - o > 0 && a.left + o < ie.innerWidth
            : a.bottom - o > 0 && a.top + o < ie.innerHeight;
        }),
        (n.positionInViewport = function (i, r, s) {
          Nt(i) && (i = Mt(i));
          var a = i.getBoundingClientRect(),
            o = a[s ? dr : fr],
            l =
              r == null
                ? o / 2
                : r in Os
                ? Os[r] * o
                : ~r.indexOf("%")
                ? (parseFloat(r) * o) / 100
                : parseFloat(r) || 0;
          return s
            ? (a.left + l) / ie.innerWidth
            : (a.top + l) / ie.innerHeight;
        }),
        (n.killAll = function (i) {
          if (
            (ee.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            i !== !0)
          ) {
            var r = pr.killAll || [];
            (pr = {}),
              r.forEach(function (s) {
                return s();
              });
          }
        }),
        n
      );
    })();
  (Q.version = "3.13.0"),
    (Q.saveStyles = function (n) {
      return n
        ? An(n).forEach(function (e) {
            if (e && e.style) {
              var t = Ft.indexOf(e);
              t >= 0 && Ft.splice(t, 5),
                Ft.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  W.core.getCache(e),
                  to()
                );
            }
          })
        : Ft;
    }),
    (Q.revert = function (n, e) {
      return mo(!n, e);
    }),
    (Q.create = function (n, e) {
      return new Q(n, e);
    }),
    (Q.refresh = function (n) {
      return n ? Bn(!0) : (Vr || Q.register()) && gr(!0);
    }),
    (Q.update = function (n) {
      return ++te.cache && Mi(n === !0 ? 2 : 0);
    }),
    (Q.clearScrollMemory = qc),
    (Q.maxScroll = function (n, e) {
      return mi(n, e ? gt : Be);
    }),
    (Q.getScrollFunc = function (n, e) {
      return Wi(Mt(n), e ? gt : Be);
    }),
    (Q.getById = function (n) {
      return po[n];
    }),
    (Q.getAll = function () {
      return ee.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
      });
    }),
    (Q.isScrolling = function () {
      return !!Xt;
    }),
    (Q.snapDirectional = fo),
    (Q.addEventListener = function (n, e) {
      var t = pr[n] || (pr[n] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (Q.removeEventListener = function (n, e) {
      var t = pr[n],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (Q.batch = function (n, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        s = e.batchMax || 1e9,
        a = function (c, u) {
          var h = [],
            m = [],
            p = W.delayedCall(r, function () {
              u(h, m), (h = []), (m = []);
            }).pause();
          return function (d) {
            h.length || p.restart(!0),
              h.push(d.trigger),
              m.push(d),
              s <= h.length && p.progress(1);
          };
        },
        o;
      for (o in e)
        i[o] =
          o.substr(0, 2) === "on" && ot(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        ot(s) &&
          ((s = s()),
          Ve(Q, "refresh", function () {
            return (s = e.batchMax());
          })),
        An(n).forEach(function (l) {
          var c = {};
          for (o in i) c[o] = i[o];
          (c.trigger = l), t.push(Q.create(c));
        }),
        t
      );
    });
  var Qc = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    yo = function n(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Ie.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Rt && n(fe, t);
    },
    $s = { auto: 1, scroll: 1 },
    Xf = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = s._gsap || W.core.getCache(s),
        o = at(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== fe &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !($s[(l = Zt(s)).overflowY] || $s[l.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== i &&
          !cr(s) &&
          ($s[(l = Zt(s)).overflowY] || $s[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    eu = function (e, t, i, r) {
      return Ie.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && Xf),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Ve(we, Ie.eventTypes[0], iu, !1, !0);
        },
        onDisable: function () {
          return qe(we, Ie.eventTypes[0], iu, !0);
        },
      });
    },
    Uf = /(input|label|select|textarea)/i,
    tu,
    iu = function (e) {
      var t = Uf.test(e.target.tagName);
      (t || tu) && ((e._gsapAllow = !0), (tu = t));
    },
    Zf = function (e) {
      ur(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t = e,
        i = t.normalizeScrollX,
        r = t.momentum,
        s = t.allowNestedScroll,
        a = t.onRelease,
        o,
        l,
        c = Mt(e.target) || Rt,
        u = W.core.globals().ScrollSmoother,
        h = u && u.get(),
        m =
          Vi &&
          ((e.content && Mt(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = Wi(c, Be),
        d = Wi(c, gt),
        f = 1,
        w =
          (Ie.isTouch && ie.visualViewport
            ? ie.visualViewport.scale * ie.visualViewport.width
            : ie.outerWidth) / ie.innerWidth,
        b = 0,
        v = ot(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        g,
        y,
        _ = eu(c, e.type, !0, s),
        A = function () {
          return (y = !1);
        },
        M = hi,
        E = hi,
        k = function () {
          (l = mi(c, Be)),
            (E = kn(Vi ? 1 : 0, l)),
            i && (M = kn(0, mi(c, gt))),
            (g = mr);
        },
        x = function () {
          (m._gsap.y = On(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        D = function () {
          if (y) {
            requestAnimationFrame(A);
            var I = On(o.deltaY / 2),
              N = E(p.v - I);
            if (m && N !== p.v + p.offset) {
              p.offset = N - p.v;
              var P = On((parseFloat(m && m._gsap.y) || 0) - p.offset);
              (m.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                P +
                ", 0, 1)"),
                (m._gsap.y = P + "px"),
                (p.cacheID = te.cache),
                Mi();
            }
            return !0;
          }
          p.offset && x(), (y = !0);
        },
        S,
        T,
        C,
        L,
        z = function () {
          k(),
            S.isActive() &&
              S.vars.scrollY > l &&
              (p() > l ? S.progress(1) && p(l) : S.resetTo("scrollY", l));
        };
      return (
        m && W.set(m, { y: "+=0" }),
        (e.ignoreCheck = function (O) {
          return (
            (Vi && O.type === "touchmove" && D()) ||
            (f > 1.05 && O.type !== "touchstart") ||
            o.isGesturing ||
            (O.touches && O.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          y = !1;
          var O = f;
          (f = On(((ie.visualViewport && ie.visualViewport.scale) || 1) / w)),
            S.pause(),
            O !== f && yo(c, f > 1.01 ? !0 : i ? !1 : "x"),
            (T = d()),
            (C = p()),
            k(),
            (g = mr);
        }),
        (e.onRelease = e.onGestureStart =
          function (O, I) {
            if ((p.offset && x(), !I)) L.restart(!0);
            else {
              te.cache++;
              var N = v(),
                P,
                H;
              i &&
                ((P = d()),
                (H = P + (N * 0.05 * -O.velocityX) / 0.227),
                (N *= Qc(d, P, H, mi(c, gt))),
                (S.vars.scrollX = M(H))),
                (P = p()),
                (H = P + (N * 0.05 * -O.velocityY) / 0.227),
                (N *= Qc(p, P, H, mi(c, Be))),
                (S.vars.scrollY = E(H)),
                S.invalidate().duration(N).play(0.01),
                ((Vi && S.vars.scrollY >= l) || P >= l - 1) &&
                  W.to({}, { onUpdate: z, duration: N });
            }
            a && a(O);
          }),
        (e.onWheel = function () {
          S._ts && S.pause(), at() - b > 1e3 && ((g = 0), (b = at()));
        }),
        (e.onChange = function (O, I, N, P, H) {
          if (
            (mr !== g && k(),
            I && i && d(M(P[2] === I ? T + (O.startX - O.x) : d() + I - P[1])),
            N)
          ) {
            p.offset && x();
            var G = H[2] === N,
              re = G ? C + O.startY - O.y : p() + N - H[1],
              ue = E(re);
            G && re !== ue && (C += ue - re), p(ue);
          }
          (N || I) && Mi();
        }),
        (e.onEnable = function () {
          yo(c, i ? !1 : "x"),
            Q.addEventListener("refresh", z),
            Ve(ie, "resize", z),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = d.smooth = !1)),
            _.enable();
        }),
        (e.onDisable = function () {
          yo(c, !0),
            qe(ie, "resize", z),
            Q.removeEventListener("refresh", z),
            _.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Ie(e)),
        (o.iOS = Vi),
        Vi && !p() && p(1),
        Vi && W.ticker.add(hi),
        (L = o._dc),
        (S = W.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Kc(p, p(), function () {
              return S.pause();
            }),
          },
          onUpdate: Mi,
          onComplete: L.vars.onComplete,
        })),
        o
      );
    };
  (Q.sort = function (n) {
    if (ot(n)) return ee.sort(n);
    var e = ie.pageYOffset || 0;
    return (
      Q.getAll().forEach(function (t) {
        return (t._sortY = t.trigger
          ? e + t.trigger.getBoundingClientRect().top
          : t.start + ie.innerHeight);
      }),
      ee.sort(
        n ||
          function (t, i) {
            return (
              (t.vars.refreshPriority || 0) * -1e6 +
              (t.vars.containerAnimation ? 1e6 : t._sortY) -
              ((i.vars.containerAnimation ? 1e6 : i._sortY) +
                (i.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (Q.observe = function (n) {
      return new Ie(n);
    }),
    (Q.normalizeScroll = function (n) {
      if (typeof n > "u") return vt;
      if (n === !0 && vt) return vt.enable();
      if (n === !1) {
        vt && vt.kill(), (vt = n);
        return;
      }
      var e = n instanceof Ie ? n : Zf(n);
      return (
        vt && vt.target === e.target && vt.kill(), cr(e.target) && (vt = e), e
      );
    }),
    (Q.core = {
      _getVelocityProp: Za,
      _inputObserver: eu,
      _scrollers: te,
      _proxies: pi,
      bridge: {
        ss: function () {
          Xt || hr("scrollStart"), (Xt = at());
        },
        ref: function () {
          return st;
        },
      },
    }),
    Dc() && W.registerPlugin(Q);
  var Kf = "1.2.3";
  function ru(n, e, t) {
    return Math.max(n, Math.min(e, t));
  }
  function Jf(n, e, t) {
    return (1 - t) * n + t * e;
  }
  function Qf(n, e, t, i) {
    return Jf(n, e, 1 - Math.exp(-t * i));
  }
  function ep(n, e) {
    return ((n % e) + e) % e;
  }
  var tp = class {
    constructor() {
      V(this, "isRunning", !1);
      V(this, "value", 0);
      V(this, "from", 0);
      V(this, "to", 0);
      V(this, "currentTime", 0);
      V(this, "lerp");
      V(this, "duration");
      V(this, "easing");
      V(this, "onUpdate");
    }
    advance(n) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += n;
        const i = ru(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = Qf(this.value, this.to, this.lerp * 60, n)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(),
        (t = this.onUpdate) == null || t.call(this, this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(n, e, { lerp: t, duration: i, easing: r, onStart: s, onUpdate: a }) {
      (this.from = this.value = n),
        (this.to = e),
        (this.lerp = t),
        (this.duration = i),
        (this.easing = r),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = a);
    }
  };
  function ip(n, e) {
    let t;
    return function (...i) {
      let r = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), n.apply(r, i);
        }, e));
    };
  }
  var rp = class {
      constructor(n, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
        V(this, "width", 0);
        V(this, "height", 0);
        V(this, "scrollHeight", 0);
        V(this, "scrollWidth", 0);
        V(this, "debouncedResize");
        V(this, "wrapperResizeObserver");
        V(this, "contentResizeObserver");
        V(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        V(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        V(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = n),
          (this.content = e),
          t &&
            ((this.debouncedResize = ip(this.resize, i)),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize();
      }
      destroy() {
        var n, e;
        (n = this.wrapperResizeObserver) == null || n.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize, !1);
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    nu = class {
      constructor() {
        V(this, "events", {});
      }
      emit(n, ...e) {
        var i;
        let t = this.events[n] || [];
        for (let r = 0, s = t.length; r < s; r++)
          (i = t[r]) == null || i.call(t, ...e);
      }
      on(n, e) {
        var t;
        return (
          ((t = this.events[n]) != null && t.push(e)) || (this.events[n] = [e]),
          () => {
            var i;
            this.events[n] =
              (i = this.events[n]) == null ? void 0 : i.filter((r) => e !== r);
          }
        );
      }
      off(n, e) {
        var t;
        this.events[n] =
          (t = this.events[n]) == null ? void 0 : t.filter((i) => e !== i);
      }
      destroy() {
        this.events = {};
      }
    },
    su = 100 / 6,
    qi = { passive: !1 },
    np = class {
      constructor(n, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        V(this, "touchStart", { x: 0, y: 0 });
        V(this, "lastDelta", { x: 0, y: 0 });
        V(this, "window", { width: 0, height: 0 });
        V(this, "emitter", new nu());
        V(this, "onTouchStart", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
            ? n.targetTouches[0]
            : n;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: n });
        });
        V(this, "onTouchMove", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
              ? n.targetTouches[0]
              : n,
            i = -(e - this.touchStart.x) * this.options.touchMultiplier,
            r = -(t - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: i, y: r }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: n });
        });
        V(this, "onTouchEnd", (n) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: n,
          });
        });
        V(this, "onWheel", (n) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = n;
          const r = i === 1 ? su : i === 2 ? this.window.width : 1,
            s = i === 1 ? su : i === 2 ? this.window.height : 1;
          (e *= r),
            (t *= s),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: n });
        });
        V(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = n),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, qi),
          this.element.addEventListener("touchstart", this.onTouchStart, qi),
          this.element.addEventListener("touchmove", this.onTouchMove, qi),
          this.element.addEventListener("touchend", this.onTouchEnd, qi);
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, qi),
          this.element.removeEventListener("touchstart", this.onTouchStart, qi),
          this.element.removeEventListener("touchmove", this.onTouchMove, qi),
          this.element.removeEventListener("touchend", this.onTouchEnd, qi);
      }
    },
    sp = class {
      constructor({
        wrapper: n = window,
        content: e = document.documentElement,
        eventsTarget: t = n,
        smoothWheel: i = !0,
        syncTouch: r = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaMultiplier: a = 35,
        duration: o,
        easing: l = (A) => Math.min(1, 1.001 - Math.pow(2, -10 * A)),
        lerp: c = 0.1,
        infinite: u = !1,
        orientation: h = "vertical",
        gestureOrientation: m = "vertical",
        touchMultiplier: p = 1,
        wheelMultiplier: d = 1,
        autoResize: f = !0,
        prevent: w,
        virtualScroll: b,
        overscroll: v = !0,
        autoRaf: g = !1,
        anchors: y = !1,
        __experimental__naiveDimensions: _ = !1,
      } = {}) {
        V(this, "_isScrolling", !1);
        V(this, "_isStopped", !1);
        V(this, "_isLocked", !1);
        V(this, "_preventNextNativeScrollEvent", !1);
        V(this, "_resetVelocityTimeout", null);
        V(this, "__rafID", null);
        V(this, "isTouching");
        V(this, "time", 0);
        V(this, "userData", {});
        V(this, "lastVelocity", 0);
        V(this, "velocity", 0);
        V(this, "direction", 0);
        V(this, "options");
        V(this, "targetScroll");
        V(this, "animatedScroll");
        V(this, "animate", new tp());
        V(this, "emitter", new nu());
        V(this, "dimensions");
        V(this, "virtualScroll");
        V(this, "onScrollEnd", (n) => {
          n instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              n.stopPropagation());
        });
        V(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        V(this, "onClick", (n) => {
          const t = n.composedPath().find((i) => {
            var r, s, a;
            return (
              i instanceof HTMLAnchorElement &&
              (((r = i.getAttribute("href")) == null
                ? void 0
                : r.startsWith("#")) ||
                ((s = i.getAttribute("href")) == null
                  ? void 0
                  : s.startsWith("/#")) ||
                ((a = i.getAttribute("href")) == null
                  ? void 0
                  : a.startsWith("./#")))
            );
          });
          if (t) {
            const i = t.getAttribute("href");
            if (i) {
              const r =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              this.scrollTo(`#${i.split("#")[1]}`, r);
            }
          }
        });
        V(this, "onPointerDown", (n) => {
          n.button === 1 && this.reset();
        });
        V(this, "onVirtualScroll", (n) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(n) === !1
          )
            return;
          const { deltaX: e, deltaY: t, event: i } = n;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: t,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          const r = i.type.includes("touch"),
            s = i.type.includes("wheel");
          this.isTouching = i.type === "touchstart" || i.type === "touchmove";
          const a = e === 0 && t === 0;
          if (
            this.options.syncTouch &&
            r &&
            i.type === "touchstart" &&
            a &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const l =
            (this.options.gestureOrientation === "vertical" && t === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (a || l) return;
          let c = i.composedPath();
          c = c.slice(0, c.indexOf(this.rootElement));
          const u = this.options.prevent;
          if (
            c.find((w) => {
              var b, v, g;
              return (
                w instanceof HTMLElement &&
                ((typeof u == "function" && (u == null ? void 0 : u(w))) ||
                  ((b = w.hasAttribute) == null
                    ? void 0
                    : b.call(w, "data-lenis-prevent")) ||
                  (r &&
                    ((v = w.hasAttribute) == null
                      ? void 0
                      : v.call(w, "data-lenis-prevent-touch"))) ||
                  (s &&
                    ((g = w.hasAttribute) == null
                      ? void 0
                      : g.call(w, "data-lenis-prevent-wheel"))))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            i.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && r) || (this.options.smoothWheel && s))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (i.lenisStopPropagation = !0);
            return;
          }
          let m = t;
          this.options.gestureOrientation === "both"
            ? (m = Math.abs(t) > Math.abs(e) ? t : e)
            : this.options.gestureOrientation === "horizontal" && (m = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && t > 0) ||
                  (this.animatedScroll === this.limit && t < 0)))) &&
              (i.lenisStopPropagation = !0),
            i.preventDefault();
          const p = r && this.options.syncTouch,
            f = r && i.type === "touchend" && Math.abs(m) > 5;
          f && (m = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + m, {
              programmatic: !1,
              ...(p
                ? { lerp: f ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            });
        });
        V(this, "onNativeScroll", () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === "native") {
            const n = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - n),
              (this.direction = Math.sign(this.animatedScroll - n)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        });
        V(this, "raf", (n) => {
          const e = n - (this.time || n);
          (this.time = n),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = Kf),
          (!n || n === document.documentElement) && (n = window),
          (this.options = {
            wrapper: n,
            content: e,
            eventsTarget: t,
            smoothWheel: i,
            syncTouch: r,
            syncTouchLerp: s,
            touchInertiaMultiplier: a,
            duration: o,
            easing: l,
            lerp: c,
            infinite: u,
            gestureOrientation: m,
            orientation: h,
            touchMultiplier: p,
            wheelMultiplier: d,
            autoResize: f,
            prevent: w,
            virtualScroll: b,
            overscroll: v,
            autoRaf: g,
            anchors: y,
            __experimental__naiveDimensions: _,
          }),
          (this.dimensions = new rp(n, e, { autoResize: f })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0,
          }),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.addEventListener("click", this.onClick, !1),
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          (this.virtualScroll = new np(t, {
            touchMultiplier: p,
            wheelMultiplier: d,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.removeEventListener(
            "scrollend",
            this.onScrollEnd,
            { capture: !0 }
          ),
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.removeEventListener("click", this.onClick, !1),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this.__rafID && cancelAnimationFrame(this.__rafID);
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      off(n, e) {
        return this.emitter.off(n, e);
      }
      setScroll(n) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: n, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: n, behavior: "instant" });
      }
      resize() {
        this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop();
      }
      start() {
        this.isStopped && (this.reset(), (this.isStopped = !1));
      }
      stop() {
        this.isStopped || (this.reset(), (this.isStopped = !0));
      }
      scrollTo(
        n,
        {
          offset: e = 0,
          immediate: t = !1,
          lock: i = !1,
          duration: r = this.options.duration,
          easing: s = this.options.easing,
          lerp: a = this.options.lerp,
          onStart: o,
          onComplete: l,
          force: c = !1,
          programmatic: u = !0,
          userData: h,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !c)) {
          if (typeof n == "string" && ["top", "left", "start"].includes(n))
            n = 0;
          else if (
            typeof n == "string" &&
            ["bottom", "right", "end"].includes(n)
          )
            n = this.limit;
          else {
            let m;
            if (
              (typeof n == "string"
                ? (m = document.querySelector(n))
                : n instanceof HTMLElement &&
                  n != null &&
                  n.nodeType &&
                  (m = n),
              m)
            ) {
              if (this.options.wrapper !== window) {
                const d = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? d.left : d.top;
              }
              const p = m.getBoundingClientRect();
              n = (this.isHorizontal ? p.left : p.top) + this.animatedScroll;
            }
          }
          if (typeof n == "number") {
            if (
              ((n += e),
              (n = Math.round(n)),
              this.options.infinite
                ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                : (n = ru(0, n, this.limit)),
              n === this.targetScroll)
            ) {
              o == null || o(this), l == null || l(this);
              return;
            }
            if (((this.userData = h ?? {}), t)) {
              (this.animatedScroll = this.targetScroll = n),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l == null || l(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            u || (this.targetScroll = n),
              this.animate.fromTo(this.animatedScroll, n, {
                duration: r,
                easing: s,
                lerp: a,
                onStart: () => {
                  i && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    o == null || o(this);
                },
                onUpdate: (m, p) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = m - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = m),
                    this.setScroll(this.scroll),
                    u && (this.targetScroll = m),
                    p || this.emit(),
                    p &&
                      (this.reset(),
                      this.emit(),
                      l == null || l(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent());
                },
              });
          }
        }
      }
      preventNextNativeScrollEvent() {
        (this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          });
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.__experimental__naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        const n = this.options.wrapper;
        return this.isHorizontal
          ? n.scrollX ?? n.scrollLeft
          : n.scrollY ?? n.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? ep(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(n) {
        this._isScrolling !== n &&
          ((this._isScrolling = n), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(n) {
        this._isStopped !== n &&
          ((this._isStopped = n), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(n) {
        this._isLocked !== n && ((this._isLocked = n), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let n = "lenis";
        return (
          this.isStopped && (n += " lenis-stopped"),
          this.isLocked && (n += " lenis-locked"),
          this.isScrolling && (n += " lenis-scrolling"),
          this.isScrolling === "smooth" && (n += " lenis-smooth"),
          n
        );
      }
      updateClassName() {
        this.cleanUpClassName(),
          (this.rootElement.className =
            `${this.rootElement.className} ${this.className}`.trim());
      }
      cleanUpClassName() {
        this.rootElement.className = this.rootElement.className
          .replace(/lenis(-\w+)?/g, "")
          .trim();
      }
    };
  class ap {
    constructor() {
      (this.lenis = new sp({})),
        (window.lenis = this.lenis),
        this.lenis.on("scroll", Q.update),
        ke.ticker.add((e) => {
          this.lenis.raf(e * 1e3);
        }),
        ke.ticker.lagSmoothing(0),
        this.initScrollLinks();
    }
    getLenis() {
      return this.lenis;
    }
    initScrollLinks() {
      document.addEventListener("click", (e) => {
        const t = e.target.closest("[data-scrolllink]");
        if (!t) return;
        e.preventDefault();
        const i = t.getAttribute("data-scrolllink"),
          r = document.querySelector(i);
        r &&
          (document.querySelectorAll(".w--current").forEach((s) => {
            s.classList.remove("w--current");
          }),
          t.classList.add("w--current"),
          this.lenis.scrollTo(r, {
            offset: -200,
            immediate: !1,
            duration: 1.2,
            easing: (s) => Math.min(1, 1.001 - Math.pow(2, -10 * s)),
          }));
      });
    }
  }
  const op = () => new ap();
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let Yn,
    Kr,
    bo,
    lp = () => bo || Qr.register(window.gsap),
    au = typeof Intl < "u" ? new Intl.Segmenter() : 0,
    Ys = (n) =>
      typeof n == "string"
        ? Ys(document.querySelectorAll(n))
        : "length" in n
        ? Array.from(n)
        : [n],
    ou = (n) => Ys(n).filter((e) => e instanceof HTMLElement),
    _o = [],
    So = function () {},
    cp = /\s+/g,
    lu = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    cu = { left: 0, top: 0, width: 0, height: 0 },
    uu = (n, e) => {
      if (e) {
        let t = new Set(n.join("").match(e) || _o),
          i = n.length,
          r,
          s,
          a,
          o;
        if (t.size)
          for (; --i > -1; ) {
            s = n[i];
            for (a of t)
              if (a.startsWith(s) && a.length > s.length) {
                for (
                  r = 0, o = s;
                  a.startsWith((o += n[i + ++r])) && o.length < a.length;

                );
                if (r && o.length === a.length) {
                  (n[i] = a), n.splice(i + 1, r);
                  break;
                }
              }
          }
      }
      return n;
    },
    du = (n) =>
      window.getComputedStyle(n).display === "inline" &&
      (n.style.display = "inline-block"),
    Jr = (n, e, t) =>
      e.insertBefore(typeof n == "string" ? document.createTextNode(n) : n, t),
    To = (n, e, t) => {
      let i = e[n + "sClass"] || "",
        { tag: r = "div", aria: s = "auto", propIndex: a = !1 } = e,
        o = n === "line" ? "block" : "inline-block",
        l = i.indexOf("++") > -1,
        c = (u) => {
          let h = document.createElement(r),
            m = t.length + 1;
          return (
            i && (h.className = i + (l ? " " + i + m : "")),
            a && h.style.setProperty("--" + n, m + ""),
            s !== "none" && h.setAttribute("aria-hidden", "true"),
            r !== "span" &&
              ((h.style.position = "relative"), (h.style.display = o)),
            (h.textContent = u),
            t.push(h),
            h
          );
        };
      return l && (i = i.replace("++", "")), (c.collection = t), c;
    },
    up = (n, e, t, i) => {
      let r = To("line", t, i),
        s = window.getComputedStyle(n).textAlign || "left";
      return (a, o) => {
        let l = r("");
        for (l.style.textAlign = s, n.insertBefore(l, e[a]); a < o; a++)
          l.appendChild(e[a]);
        l.normalize();
      };
    },
    fu = (n, e, t, i, r, s, a, o, l, c) => {
      var u;
      let h = Array.from(n.childNodes),
        m = 0,
        { wordDelimiter: p, reduceWhiteSpace: d = !0, prepareText: f } = e,
        w = n.getBoundingClientRect(),
        b = w,
        v =
          !d && window.getComputedStyle(n).whiteSpace.substring(0, 3) === "pre",
        g = 0,
        y = t.collection,
        _,
        A,
        M,
        E,
        k,
        x,
        D,
        S,
        T,
        C,
        L,
        z,
        O,
        I,
        N,
        P,
        H,
        G;
      for (
        typeof p == "object"
          ? ((M = p.delimiter || p), (A = p.replaceWith || ""))
          : (A = p === "" ? "" : p || " "),
          _ = A !== " ";
        m < h.length;
        m++
      )
        if (((E = h[m]), E.nodeType === 3)) {
          for (
            N = E.textContent || "",
              d
                ? (N = N.replace(cp, " "))
                : v &&
                  (N = N.replace(
                    /\n/g,
                    A +
                      `
`
                  )),
              f && (N = f(N, n)),
              E.textContent = N,
              k = A || M ? N.split(M || A) : N.match(o) || _o,
              H = k[k.length - 1],
              S = _ ? H.slice(-1) === " " : !H,
              H || k.pop(),
              b = w,
              D = _ ? k[0].charAt(0) === " " : !k[0],
              D && Jr(" ", n, E),
              k[0] || k.shift(),
              uu(k, l),
              (s && c) || (E.textContent = ""),
              T = 1;
            T <= k.length;
            T++
          )
            if (
              ((P = k[T - 1]),
              !d &&
                v &&
                P.charAt(0) ===
                  `
` &&
                ((u = E.previousSibling) == null || u.remove(),
                Jr(document.createElement("br"), n, E),
                (P = P.slice(1))),
              !d && P === "")
            )
              Jr(A, n, E);
            else if (P === " ") n.insertBefore(document.createTextNode(" "), E);
            else {
              if (
                (_ && P.charAt(0) === " " && Jr(" ", n, E),
                g && T === 1 && !D && y.indexOf(g.parentNode) > -1
                  ? ((x = y[y.length - 1]),
                    x.appendChild(document.createTextNode(i ? "" : P)))
                  : ((x = t(i ? "" : P)),
                    Jr(x, n, E),
                    g && T === 1 && !D && x.insertBefore(g, x.firstChild)),
                i)
              )
                for (
                  L = au
                    ? uu(
                        [...au.segment(P)].map((re) => re.segment),
                        l
                      )
                    : P.match(o) || _o,
                    G = 0;
                  G < L.length;
                  G++
                )
                  x.appendChild(
                    L[G] === " " ? document.createTextNode(" ") : i(L[G])
                  );
              if (s && c) {
                if (
                  ((N = E.textContent = N.substring(P.length + 1, N.length)),
                  (C = x.getBoundingClientRect()),
                  C.top > b.top && C.left <= b.left)
                ) {
                  for (z = n.cloneNode(), O = n.childNodes[0]; O && O !== x; )
                    (I = O), (O = O.nextSibling), z.appendChild(I);
                  n.parentNode.insertBefore(z, n), r && du(z);
                }
                b = C;
              }
              (T < k.length || S) &&
                Jr(
                  T >= k.length ? " " : _ && P.slice(-1) === " " ? " " + A : A,
                  n,
                  E
                );
            }
          n.removeChild(E), (g = 0);
        } else
          E.nodeType === 1 &&
            (a && a.indexOf(E) > -1
              ? (y.indexOf(E.previousSibling) > -1 &&
                  y[y.length - 1].appendChild(E),
                (g = E))
              : (fu(E, e, t, i, r, s, a, o, l, !0), (g = 0)),
            r && du(E));
    };
  const pu = class nd {
    constructor(e, t) {
      (this.isSplit = !1),
        lp(),
        (this.elements = ou(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = t),
        (this._split = () => this.isSplit && this.split(this.vars));
      let i = [],
        r,
        s = () => {
          let a = i.length,
            o;
          for (; a--; ) {
            o = i[a];
            let l = o.element.offsetWidth;
            if (l !== o.width) {
              (o.width = l), this._split();
              return;
            }
          }
        };
      (this._data = {
        orig: i,
        obs:
          typeof ResizeObserver < "u" &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(s, 200));
          }),
      }),
        So(this),
        this.split(t);
    }
    split(e) {
      this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
      let {
          type: t = "chars,words,lines",
          aria: i = "auto",
          deepSlice: r = !0,
          smartWrap: s,
          onSplit: a,
          autoSplit: o = !1,
          specialChars: l,
          mask: c,
        } = this.vars,
        u = t.indexOf("lines") > -1,
        h = t.indexOf("chars") > -1,
        m = t.indexOf("words") > -1,
        p = h && !m && !u,
        d =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        f = d ? new RegExp(d.source + "|" + lu.source, "gu") : lu,
        w = !!e.ignore && ou(e.ignore),
        { orig: b, animTime: v, obs: g } = this._data,
        y;
      return (
        (h || m || u) &&
          (this.elements.forEach((_, A) => {
            (b[A] = {
              element: _,
              html: _.innerHTML,
              ariaL: _.getAttribute("aria-label"),
              ariaH: _.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? _.setAttribute("aria-label", (_.textContent || "").trim())
                : i === "hidden" && _.setAttribute("aria-hidden", "true");
            let M = [],
              E = [],
              k = [],
              x = h ? To("char", e, M) : null,
              D = To("word", e, E),
              S,
              T,
              C,
              L;
            if ((fu(_, e, D, x, p, r && (u || p), w, f, d, !1), u)) {
              let z = Ys(_.childNodes),
                O = up(_, z, e, k),
                I,
                N = [],
                P = 0,
                H = z.map((re) =>
                  re.nodeType === 1 ? re.getBoundingClientRect() : cu
                ),
                G = cu;
              for (S = 0; S < z.length; S++)
                (I = z[S]),
                  I.nodeType === 1 &&
                    (I.nodeName === "BR"
                      ? (N.push(I), O(P, S + 1), (P = S + 1), (G = H[P]))
                      : (S &&
                          H[S].top > G.top &&
                          H[S].left <= G.left &&
                          (O(P, S), (P = S)),
                        (G = H[S])));
              P < S && O(P, S),
                N.forEach((re) => {
                  var ue;
                  return (ue = re.parentNode) == null
                    ? void 0
                    : ue.removeChild(re);
                });
            }
            if (!m) {
              for (S = 0; S < E.length; S++)
                if (
                  ((T = E[S]),
                  h || !T.nextSibling || T.nextSibling.nodeType !== 3)
                )
                  if (s && !u) {
                    for (
                      C = document.createElement("span"),
                        C.style.whiteSpace = "nowrap";
                      T.firstChild;

                    )
                      C.appendChild(T.firstChild);
                    T.replaceWith(C);
                  } else T.replaceWith(...T.childNodes);
                else
                  (L = T.nextSibling),
                    L &&
                      L.nodeType === 3 &&
                      ((L.textContent =
                        (T.textContent || "") + (L.textContent || "")),
                      T.remove());
              (E.length = 0), _.normalize();
            }
            this.lines.push(...k), this.words.push(...E), this.chars.push(...M);
          }),
          c &&
            this[c] &&
            this.masks.push(
              ...this[c].map((_) => {
                let A = _.cloneNode();
                return (
                  _.replaceWith(A),
                  A.appendChild(_),
                  _.className &&
                    (A.className = _.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (A.style.overflow = "clip"),
                  A
                );
              })
            )),
        (this.isSplit = !0),
        Kr &&
          (o
            ? Kr.addEventListener("loadingdone", this._split)
            : Kr.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (y = a && a(this)) &&
          y.totalTime &&
          (this._data.anim = v ? y.totalTime(v) : y),
        u &&
          o &&
          this.elements.forEach((_, A) => {
            (b[A].width = _.offsetWidth), g && g.observe(_);
          }),
        this
      );
    }
    revert() {
      var e, t;
      let { orig: i, anim: r, obs: s } = this._data;
      return (
        s && s.disconnect(),
        i.forEach(({ element: a, html: o, ariaL: l, ariaH: c }) => {
          (a.innerHTML = o),
            l
              ? a.setAttribute("aria-label", l)
              : a.removeAttribute("aria-label"),
            c
              ? a.setAttribute("aria-hidden", c)
              : a.removeAttribute("aria-hidden");
        }),
        (this.chars.length =
          this.words.length =
          this.lines.length =
          i.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        Kr == null || Kr.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new nd(e, t);
    }
    static register(e) {
      (Yn = Yn || e || window.gsap),
        Yn && ((Ys = Yn.utils.toArray), (So = Yn.core.context || So)),
        !bo && window.innerWidth > 0 && ((Kr = document.fonts), (bo = !0));
    }
  };
  pu.version = "3.13.0";
  let Qr = pu;
  ke.registerPlugin(Q, Qr);
  const dp = async () => {
      try {
        await document.fonts.ready, console.log("Fonts loaded successfully");
      } catch (s) {
        console.error("Error loading fonts:", s);
      }
      const n = document.querySelectorAll("[split-text]");
      let e = [];
      function t() {
        e.forEach((s) => {
          s.revert && s.revert();
        }),
          (e = []),
          n.forEach((s) => {
            const a = window.getComputedStyle(s).textWrap,
              o = s.getAttribute("split-text"),
              l = new Qr(s, { type: "lines", linesClass: "split-line" }),
              c = new Qr(s, { type: "lines", linesClass: "mask-line" });
            e.push(l, c),
              ke.set(c.lines, { overflow: "clip", paddingBottom: "0.08em" });
            let u;
            switch (o) {
              case "head":
                u = {
                  yPercent: 105,
                  opacity: 0.5,
                  rotateZ: 0.1,
                  rotateY: 50,
                  duration: 1.4,
                  ease: "expo.out",
                  stagger: 0.1,
                  scrollTrigger: {
                    trigger: s,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                  },
                };
                break;
              case "left-head":
                u = {
                  yPercent: 105,
                  opacity: 0.5,
                  rotateZ: 0.1,
                  rotateY: 30,
                  transformOrigin: "left center",
                  duration: 1.4,
                  ease: "expo.out",
                  stagger: 0.1,
                  scrollTrigger: {
                    trigger: s,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                  },
                };
                break;
              case "eyebrow":
                u = {
                  yPercent: 105,
                  opacity: 0.5,
                  rotateZ: 0.1,
                  rotateY: 50,
                  duration: 1.4,
                  ease: "expo.out",
                  stagger: 0.1,
                  scrollTrigger: {
                    trigger: s,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                  },
                };
                break;
              default:
                u = {
                  yPercent: 105,
                  opacity: 0.5,
                  rotateY: 20,
                  rotateZ: 0.6,
                  duration: 1,
                  ease: "power3.out",
                  stagger: 0.06,
                  scrollTrigger: {
                    trigger: s,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                  },
                };
            }
            ke.from(l.lines, u).eventCallback("onComplete", () => {
              a &&
                setTimeout(() => {
                  ke.set(s, { textWrap: a });
                }, 250);
            });
          });
      }
      t();
      let i;
      const r = () => {
        clearTimeout(i), (i = setTimeout(t, 250));
      };
      return (
        window.addEventListener("resize", r),
        window.addEventListener("orientationchange", t),
        () => {
          window.removeEventListener("resize", r),
            window.removeEventListener("orientationchange", t),
            e.forEach((s) => {
              s.revert && s.revert();
            });
        }
      );
    },
    fp = () => dp();
  function pp() {
    console.log("Initializing general animations"),
      op(),
      _f(),
      Sf(),
      Tf(),
      xf(),
      Af(),
      Cf(),
      Of(),
      fp();
  }
  class hp {
    constructor() {
      (this.elements = {
        searchComponent: document.querySelectorAll("[search-component='main']"),
        searchInput: document.querySelector("[search-component='input']"),
        searchResultsWrap: document.querySelector(
          "[search-component='results-wrap']"
        ),
        searchResults: document.querySelector("[search-component='results']"),
        searchClear: document.querySelector("[search-component='clear']"),
        searchPageResults: document.querySelector(
          "[search-component='page-results']"
        ),
        searchLoading: document.querySelector("[search-component='loader']"),
      }),
        (this.state = { isOpen: !1 }),
        this.setInitialStatus(),
        this.init();
    }
    setInitialStatus() {
      this.elements.searchComponent &&
        this.elements.searchComponent.forEach((t) => {
          t.setAttribute("search-component-status", "inactive");
        }),
        [
          "searchInput",
          "searchResults",
          "searchClear",
          "searchPageResults",
          "searchResultsWrap",
        ].forEach((t) => {
          this.elements[t] &&
            this.elements[t].setAttribute(
              "search-component-status",
              "inactive"
            );
        });
    }
    init() {
      this.elements.searchInput.addEventListener(
        "input",
        this.handleInput.bind(this)
      ),
        this.elements.searchClear &&
          this.elements.searchClear.addEventListener(
            "click",
            this.handleClear.bind(this)
          );
    }
    handleInput(e) {
      const t = e.target.value;
      t.length
        ? (this.openSearchComponent(), this.fetchSearchResults(t))
        : this.closeSearchComponent();
    }
    openSearchComponent() {
      this.elements.searchComponent &&
        this.elements.searchComponent.forEach((t) => {
          t.setAttribute("search-component-status", "active");
        }),
        [
          "searchInput",
          "searchResults",
          "searchClear",
          "searchPageResults",
          "searchResultsWrap",
        ].forEach((t) => {
          this.elements[t] &&
            this.elements[t].setAttribute("search-component-status", "active");
        }),
        (this.state.isOpen = !0);
    }
    closeSearchComponent() {
      this.elements.searchComponent &&
        this.elements.searchComponent.forEach((t) => {
          t.setAttribute("search-component-status", "inactive");
        }),
        [
          "searchInput",
          "searchResults",
          "searchClear",
          "searchPageResults",
          "searchResultsWrap",
        ].forEach((t) => {
          this.elements[t] &&
            this.elements[t].setAttribute(
              "search-component-status",
              "inactive"
            );
        }),
        (this.state.isOpen = !1);
    }
    fetchSearchResults(e) {
      this.elements.searchLoading &&
        this.elements.searchLoading.setAttribute(
          "search-component-status",
          "loading"
        ),
        fetch(`/search?query=${e.replaceAll(" ", "+")}`)
          .then((t) => t.text())
          .then((t) => {
            const s = new DOMParser()
              .parseFromString(t, "text/html")
              .querySelector("[search-component='page-results']");
            this.elements.searchResults &&
              s &&
              ((this.elements.searchResults.innerHTML = ""),
              this.elements.searchResults.appendChild(s)),
              this.elements.searchLoading &&
                this.elements.searchLoading.setAttribute(
                  "search-component-status",
                  "loaded"
                );
          })
          .catch((t) => {
            console.error("Error fetching search results:", t),
              this.elements.searchLoading &&
                this.elements.searchLoading.setAttribute(
                  "search-component-status",
                  "loaded"
                );
          });
    }
    handleClear() {
      this.elements.searchInput && (this.elements.searchInput.value = ""),
        this.elements.searchLoading &&
          this.elements.searchLoading.setAttribute(
            "search-component-status",
            "inactive"
          ),
        this.closeSearchComponent();
    }
  }
  const mp = () => {
    new hp();
  };
  function gi(n, e) {
    var t = {};
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) &&
        e.indexOf(i) < 0 &&
        (t[i] = n[i]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      for (i = Object.getOwnPropertySymbols(n); r < i.length; r++)
        e.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(n, i[r]) &&
          (t[i[r]] = n[i[r]]);
    }
    return t;
  }
  typeof SuppressedError == "function" && SuppressedError;
  var wr =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function Eo(n) {
    return n &&
      n.__esModule &&
      Object.prototype.hasOwnProperty.call(n, "default")
      ? n.default
      : n;
  }
  function xo(n, e) {
    return n((e = { exports: {} }), e.exports), e.exports;
  }
  var vr = xo(function (n, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = (function () {
      function i() {
        var r = this;
        (this.locked = new Map()),
          (this.addToLocked = function (s, a) {
            var o = r.locked.get(s);
            o === void 0
              ? a === void 0
                ? r.locked.set(s, [])
                : r.locked.set(s, [a])
              : a !== void 0 && (o.unshift(a), r.locked.set(s, o));
          }),
          (this.isLocked = function (s) {
            return r.locked.has(s);
          }),
          (this.lock = function (s) {
            return new Promise(function (a, o) {
              r.isLocked(s) ? r.addToLocked(s, a) : (r.addToLocked(s), a());
            });
          }),
          (this.unlock = function (s) {
            var a = r.locked.get(s);
            if (a !== void 0 && a.length !== 0) {
              var o = a.pop();
              r.locked.set(s, a), o !== void 0 && setTimeout(o, 0);
            } else r.locked.delete(s);
          });
      }
      return (
        (i.getInstance = function () {
          return i.instance === void 0 && (i.instance = new i()), i.instance;
        }),
        i
      );
    })();
    e.default = function () {
      return t.getInstance();
    };
  });
  Eo(vr);
  var gp = Eo(
    xo(function (n, e) {
      var t =
          (wr && wr.__awaiter) ||
          function (u, h, m, p) {
            return new (m || (m = Promise))(function (d, f) {
              function w(g) {
                try {
                  v(p.next(g));
                } catch (y) {
                  f(y);
                }
              }
              function b(g) {
                try {
                  v(p.throw(g));
                } catch (y) {
                  f(y);
                }
              }
              function v(g) {
                g.done
                  ? d(g.value)
                  : new m(function (y) {
                      y(g.value);
                    }).then(w, b);
              }
              v((p = p.apply(u, h || [])).next());
            });
          },
        i =
          (wr && wr.__generator) ||
          function (u, h) {
            var m,
              p,
              d,
              f,
              w = {
                label: 0,
                sent: function () {
                  if (1 & d[0]) throw d[1];
                  return d[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (f = { next: b(0), throw: b(1), return: b(2) }),
              typeof Symbol == "function" &&
                (f[Symbol.iterator] = function () {
                  return this;
                }),
              f
            );
            function b(v) {
              return function (g) {
                return (function (y) {
                  if (m) throw new TypeError("Generator is already executing.");
                  for (; w; )
                    try {
                      if (
                        ((m = 1),
                        p &&
                          (d =
                            2 & y[0]
                              ? p.return
                              : y[0]
                              ? p.throw || ((d = p.return) && d.call(p), 0)
                              : p.next) &&
                          !(d = d.call(p, y[1])).done)
                      )
                        return d;
                      switch (((p = 0), d && (y = [2 & y[0], d.value]), y[0])) {
                        case 0:
                        case 1:
                          d = y;
                          break;
                        case 4:
                          return w.label++, { value: y[1], done: !1 };
                        case 5:
                          w.label++, (p = y[1]), (y = [0]);
                          continue;
                        case 7:
                          (y = w.ops.pop()), w.trys.pop();
                          continue;
                        default:
                          if (
                            ((d = w.trys),
                            !(
                              (d = d.length > 0 && d[d.length - 1]) ||
                              (y[0] !== 6 && y[0] !== 2)
                            ))
                          ) {
                            w = 0;
                            continue;
                          }
                          if (
                            y[0] === 3 &&
                            (!d || (y[1] > d[0] && y[1] < d[3]))
                          ) {
                            w.label = y[1];
                            break;
                          }
                          if (y[0] === 6 && w.label < d[1]) {
                            (w.label = d[1]), (d = y);
                            break;
                          }
                          if (d && w.label < d[2]) {
                            (w.label = d[2]), w.ops.push(y);
                            break;
                          }
                          d[2] && w.ops.pop(), w.trys.pop();
                          continue;
                      }
                      y = h.call(u, w);
                    } catch (_) {
                      (y = [6, _]), (p = 0);
                    } finally {
                      m = d = 0;
                    }
                  if (5 & y[0]) throw y[1];
                  return { value: y[0] ? y[1] : void 0, done: !0 };
                })([v, g]);
              };
            }
          },
        r = wr;
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = "browser-tabs-lock-key",
        a = {
          key: function (u) {
            return t(r, void 0, void 0, function () {
              return i(this, function (h) {
                throw new Error("Unsupported");
              });
            });
          },
          getItem: function (u) {
            return t(r, void 0, void 0, function () {
              return i(this, function (h) {
                throw new Error("Unsupported");
              });
            });
          },
          clear: function () {
            return t(r, void 0, void 0, function () {
              return i(this, function (u) {
                return [2, window.localStorage.clear()];
              });
            });
          },
          removeItem: function (u) {
            return t(r, void 0, void 0, function () {
              return i(this, function (h) {
                throw new Error("Unsupported");
              });
            });
          },
          setItem: function (u, h) {
            return t(r, void 0, void 0, function () {
              return i(this, function (m) {
                throw new Error("Unsupported");
              });
            });
          },
          keySync: function (u) {
            return window.localStorage.key(u);
          },
          getItemSync: function (u) {
            return window.localStorage.getItem(u);
          },
          clearSync: function () {
            return window.localStorage.clear();
          },
          removeItemSync: function (u) {
            return window.localStorage.removeItem(u);
          },
          setItemSync: function (u, h) {
            return window.localStorage.setItem(u, h);
          },
        };
      function o(u) {
        return new Promise(function (h) {
          return setTimeout(h, u);
        });
      }
      function l(u) {
        for (
          var h =
              "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
            m = "",
            p = 0;
          p < u;
          p++
        )
          m += h[Math.floor(Math.random() * h.length)];
        return m;
      }
      var c = (function () {
        function u(h) {
          (this.acquiredIatSet = new Set()),
            (this.storageHandler = void 0),
            (this.id = Date.now().toString() + l(15)),
            (this.acquireLock = this.acquireLock.bind(this)),
            (this.releaseLock = this.releaseLock.bind(this)),
            (this.releaseLock__private__ =
              this.releaseLock__private__.bind(this)),
            (this.waitForSomethingToChange =
              this.waitForSomethingToChange.bind(this)),
            (this.refreshLockWhileAcquired =
              this.refreshLockWhileAcquired.bind(this)),
            (this.storageHandler = h),
            u.waiters === void 0 && (u.waiters = []);
        }
        return (
          (u.prototype.acquireLock = function (h, m) {
            return (
              m === void 0 && (m = 5e3),
              t(this, void 0, void 0, function () {
                var p, d, f, w, b, v, g;
                return i(this, function (y) {
                  switch (y.label) {
                    case 0:
                      (p = Date.now() + l(4)),
                        (d = Date.now() + m),
                        (f = s + "-" + h),
                        (w =
                          this.storageHandler === void 0
                            ? a
                            : this.storageHandler),
                        (y.label = 1);
                    case 1:
                      return Date.now() < d ? [4, o(30)] : [3, 8];
                    case 2:
                      return (
                        y.sent(),
                        w.getItemSync(f) !== null
                          ? [3, 5]
                          : ((b = this.id + "-" + h + "-" + p),
                            [4, o(Math.floor(25 * Math.random()))])
                      );
                    case 3:
                      return (
                        y.sent(),
                        w.setItemSync(
                          f,
                          JSON.stringify({
                            id: this.id,
                            iat: p,
                            timeoutKey: b,
                            timeAcquired: Date.now(),
                            timeRefreshed: Date.now(),
                          })
                        ),
                        [4, o(30)]
                      );
                    case 4:
                      return (
                        y.sent(),
                        (v = w.getItemSync(f)) !== null &&
                        (g = JSON.parse(v)).id === this.id &&
                        g.iat === p
                          ? (this.acquiredIatSet.add(p),
                            this.refreshLockWhileAcquired(f, p),
                            [2, !0])
                          : [3, 7]
                      );
                    case 5:
                      return (
                        u.lockCorrector(
                          this.storageHandler === void 0
                            ? a
                            : this.storageHandler
                        ),
                        [4, this.waitForSomethingToChange(d)]
                      );
                    case 6:
                      y.sent(), (y.label = 7);
                    case 7:
                      return (p = Date.now() + l(4)), [3, 1];
                    case 8:
                      return [2, !1];
                  }
                });
              })
            );
          }),
          (u.prototype.refreshLockWhileAcquired = function (h, m) {
            return t(this, void 0, void 0, function () {
              var p = this;
              return i(this, function (d) {
                return (
                  setTimeout(function () {
                    return t(p, void 0, void 0, function () {
                      var f, w, b;
                      return i(this, function (v) {
                        switch (v.label) {
                          case 0:
                            return [4, vr.default().lock(m)];
                          case 1:
                            return (
                              v.sent(),
                              this.acquiredIatSet.has(m)
                                ? ((f =
                                    this.storageHandler === void 0
                                      ? a
                                      : this.storageHandler),
                                  (w = f.getItemSync(h)) === null
                                    ? (vr.default().unlock(m), [2])
                                    : (((b = JSON.parse(w)).timeRefreshed =
                                        Date.now()),
                                      f.setItemSync(h, JSON.stringify(b)),
                                      vr.default().unlock(m),
                                      this.refreshLockWhileAcquired(h, m),
                                      [2]))
                                : (vr.default().unlock(m), [2])
                            );
                        }
                      });
                    });
                  }, 1e3),
                  [2]
                );
              });
            });
          }),
          (u.prototype.waitForSomethingToChange = function (h) {
            return t(this, void 0, void 0, function () {
              return i(this, function (m) {
                switch (m.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (p) {
                        var d = !1,
                          f = Date.now(),
                          w = !1;
                        function b() {
                          if (
                            (w ||
                              (window.removeEventListener("storage", b),
                              u.removeFromWaiting(b),
                              clearTimeout(v),
                              (w = !0)),
                            !d)
                          ) {
                            d = !0;
                            var g = 50 - (Date.now() - f);
                            g > 0 ? setTimeout(p, g) : p(null);
                          }
                        }
                        window.addEventListener("storage", b),
                          u.addToWaiting(b);
                        var v = setTimeout(b, Math.max(0, h - Date.now()));
                      }),
                    ];
                  case 1:
                    return m.sent(), [2];
                }
              });
            });
          }),
          (u.addToWaiting = function (h) {
            this.removeFromWaiting(h),
              u.waiters !== void 0 && u.waiters.push(h);
          }),
          (u.removeFromWaiting = function (h) {
            u.waiters !== void 0 &&
              (u.waiters = u.waiters.filter(function (m) {
                return m !== h;
              }));
          }),
          (u.notifyWaiters = function () {
            u.waiters !== void 0 &&
              u.waiters.slice().forEach(function (h) {
                return h();
              });
          }),
          (u.prototype.releaseLock = function (h) {
            return t(this, void 0, void 0, function () {
              return i(this, function (m) {
                switch (m.label) {
                  case 0:
                    return [4, this.releaseLock__private__(h)];
                  case 1:
                    return [2, m.sent()];
                }
              });
            });
          }),
          (u.prototype.releaseLock__private__ = function (h) {
            return t(this, void 0, void 0, function () {
              var m, p, d, f;
              return i(this, function (w) {
                switch (w.label) {
                  case 0:
                    return (
                      (m =
                        this.storageHandler === void 0
                          ? a
                          : this.storageHandler),
                      (p = s + "-" + h),
                      (d = m.getItemSync(p)) === null
                        ? [2]
                        : (f = JSON.parse(d)).id !== this.id
                        ? [3, 2]
                        : [4, vr.default().lock(f.iat)]
                    );
                  case 1:
                    w.sent(),
                      this.acquiredIatSet.delete(f.iat),
                      m.removeItemSync(p),
                      vr.default().unlock(f.iat),
                      u.notifyWaiters(),
                      (w.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (u.lockCorrector = function (h) {
            for (var m = Date.now() - 5e3, p = h, d = [], f = 0; ; ) {
              var w = p.keySync(f);
              if (w === null) break;
              d.push(w), f++;
            }
            for (var b = !1, v = 0; v < d.length; v++) {
              var g = d[v];
              if (g.includes(s)) {
                var y = p.getItemSync(g);
                if (y !== null) {
                  var _ = JSON.parse(y);
                  ((_.timeRefreshed === void 0 && _.timeAcquired < m) ||
                    (_.timeRefreshed !== void 0 && _.timeRefreshed < m)) &&
                    (p.removeItemSync(g), (b = !0));
                }
              }
            }
            b && u.notifyWaiters();
          }),
          (u.waiters = void 0),
          u
        );
      })();
      e.default = c;
    })
  );
  const wp = { timeoutInSeconds: 60 },
    hu = { name: "auth0-spa-js", version: "2.1.3" },
    mu = () => Date.now();
  class lt extends Error {
    constructor(e, t) {
      super(t),
        (this.error = e),
        (this.error_description = t),
        Object.setPrototypeOf(this, lt.prototype);
    }
    static fromPayload({ error: e, error_description: t }) {
      return new lt(e, t);
    }
  }
  class Mo extends lt {
    constructor(e, t, i, r = null) {
      super(e, t),
        (this.state = i),
        (this.appState = r),
        Object.setPrototypeOf(this, Mo.prototype);
    }
  }
  class Hn extends lt {
    constructor() {
      super("timeout", "Timeout"), Object.setPrototypeOf(this, Hn.prototype);
    }
  }
  class Ao extends Hn {
    constructor(e) {
      super(), (this.popup = e), Object.setPrototypeOf(this, Ao.prototype);
    }
  }
  class ko extends lt {
    constructor(e) {
      super("cancelled", "Popup closed"),
        (this.popup = e),
        Object.setPrototypeOf(this, ko.prototype);
    }
  }
  class Co extends lt {
    constructor(e, t, i) {
      super(e, t),
        (this.mfa_token = i),
        Object.setPrototypeOf(this, Co.prototype);
    }
  }
  class Hs extends lt {
    constructor(e, t) {
      super(
        "missing_refresh_token",
        `Missing Refresh Token (audience: '${gu(e, ["default"])}', scope: '${gu(
          t
        )}')`
      ),
        (this.audience = e),
        (this.scope = t),
        Object.setPrototypeOf(this, Hs.prototype);
    }
  }
  function gu(n, e = []) {
    return n && !e.includes(n) ? n : "";
  }
  const Ws = () => window.crypto,
    Po = () => {
      const n =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
      let e = "";
      return (
        Array.from(Ws().getRandomValues(new Uint8Array(43))).forEach(
          (t) => (e += n[t % n.length])
        ),
        e
      );
    },
    wu = (n) => btoa(n),
    Oo = (n) => {
      var { clientId: e } = n,
        t = gi(n, ["clientId"]);
      return new URLSearchParams(
        ((i) =>
          Object.keys(i)
            .filter((r) => i[r] !== void 0)
            .reduce(
              (r, s) => Object.assign(Object.assign({}, r), { [s]: i[s] }),
              {}
            ))(Object.assign({ client_id: e }, t))
      ).toString();
    },
    vu = (n) =>
      ((e) =>
        decodeURIComponent(
          atob(e)
            .split("")
            .map((t) => "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        ))(n.replace(/_/g, "/").replace(/-/g, "+")),
    vp = async (n, e) => {
      const t = await fetch(n, e);
      return { ok: t.ok, json: await t.json() };
    },
    yp = async (n, e, t) => {
      const i = new AbortController();
      let r;
      return (
        (e.signal = i.signal),
        Promise.race([
          vp(n, e),
          new Promise((s, a) => {
            r = setTimeout(() => {
              i.abort(), a(new Error("Timeout when executing 'fetch'"));
            }, t);
          }),
        ]).finally(() => {
          clearTimeout(r);
        })
      );
    },
    bp = async (n, e, t, i, r, s, a) => {
      return (
        (o = {
          auth: { audience: e, scope: t },
          timeout: r,
          fetchUrl: n,
          fetchOptions: i,
          useFormData: a,
        }),
        (l = s),
        new Promise(function (c, u) {
          const h = new MessageChannel();
          (h.port1.onmessage = function (m) {
            m.data.error ? u(new Error(m.data.error)) : c(m.data),
              h.port1.close();
          }),
            l.postMessage(o, [h.port2]);
        })
      );
      var o, l;
    },
    _p = async (n, e, t, i, r, s, a = 1e4) =>
      r ? bp(n, e, t, i, a, r, s) : yp(n, i, a);
  async function Sp(n, e) {
    var {
        baseUrl: t,
        timeout: i,
        audience: r,
        scope: s,
        auth0Client: a,
        useFormData: o,
      } = n,
      l = gi(n, [
        "baseUrl",
        "timeout",
        "audience",
        "scope",
        "auth0Client",
        "useFormData",
      ]);
    const c = o ? Oo(l) : JSON.stringify(l);
    return await (async function (u, h, m, p, d, f, w) {
      let b,
        v = null;
      for (let E = 0; E < 3; E++)
        try {
          (b = await _p(u, m, p, d, f, w, h)), (v = null);
          break;
        } catch (k) {
          v = k;
        }
      if (v) throw v;
      const g = b.json,
        { error: y, error_description: _ } = g,
        A = gi(g, ["error", "error_description"]),
        { ok: M } = b;
      if (!M) {
        const E = _ || `HTTP error. Unable to fetch ${u}`;
        throw y === "mfa_required"
          ? new Co(y, E, A.mfa_token)
          : y === "missing_refresh_token"
          ? new Hs(m, p)
          : new lt(y || "request_error", E);
      }
      return A;
    })(
      `${t}/oauth/token`,
      i,
      r || "default",
      s,
      {
        method: "POST",
        body: c,
        headers: {
          "Content-Type": o
            ? "application/x-www-form-urlencoded"
            : "application/json",
          "Auth0-Client": btoa(JSON.stringify(a || hu)),
        },
      },
      e,
      o
    );
  }
  const Vs = (...n) => {
    return ((e = n.filter(Boolean).join(" ").trim().split(/\s+/)),
    Array.from(new Set(e))).join(" ");
    var e;
  };
  class wi {
    constructor(e, t = "@@auth0spajs@@", i) {
      (this.prefix = t),
        (this.suffix = i),
        (this.clientId = e.clientId),
        (this.scope = e.scope),
        (this.audience = e.audience);
    }
    toKey() {
      return [
        this.prefix,
        this.clientId,
        this.audience,
        this.scope,
        this.suffix,
      ]
        .filter(Boolean)
        .join("::");
    }
    static fromKey(e) {
      const [t, i, r, s] = e.split("::");
      return new wi({ clientId: i, scope: s, audience: r }, t);
    }
    static fromCacheEntry(e) {
      const { scope: t, audience: i, client_id: r } = e;
      return new wi({ scope: t, audience: i, clientId: r });
    }
  }
  class Tp {
    set(e, t) {
      localStorage.setItem(e, JSON.stringify(t));
    }
    get(e) {
      const t = window.localStorage.getItem(e);
      if (t)
        try {
          return JSON.parse(t);
        } catch {
          return;
        }
    }
    remove(e) {
      localStorage.removeItem(e);
    }
    allKeys() {
      return Object.keys(window.localStorage).filter((e) =>
        e.startsWith("@@auth0spajs@@")
      );
    }
  }
  class yu {
    constructor() {
      this.enclosedCache = (function () {
        let e = {};
        return {
          set(t, i) {
            e[t] = i;
          },
          get(t) {
            const i = e[t];
            if (i) return i;
          },
          remove(t) {
            delete e[t];
          },
          allKeys: () => Object.keys(e),
        };
      })();
    }
  }
  class Ep {
    constructor(e, t, i) {
      (this.cache = e), (this.keyManifest = t), (this.nowProvider = i || mu);
    }
    async setIdToken(e, t, i) {
      var r;
      const s = this.getIdTokenCacheKey(e);
      await this.cache.set(s, { id_token: t, decodedToken: i }),
        await ((r = this.keyManifest) === null || r === void 0
          ? void 0
          : r.add(s));
    }
    async getIdToken(e) {
      const t = await this.cache.get(this.getIdTokenCacheKey(e.clientId));
      if (!t && e.scope && e.audience) {
        const i = await this.get(e);
        return !i || !i.id_token || !i.decodedToken
          ? void 0
          : { id_token: i.id_token, decodedToken: i.decodedToken };
      }
      if (t) return { id_token: t.id_token, decodedToken: t.decodedToken };
    }
    async get(e, t = 0) {
      var i;
      let r = await this.cache.get(e.toKey());
      if (!r) {
        const o = await this.getCacheKeys();
        if (!o) return;
        const l = this.matchExistingCacheKey(e, o);
        l && (r = await this.cache.get(l));
      }
      if (!r) return;
      const s = await this.nowProvider(),
        a = Math.floor(s / 1e3);
      return r.expiresAt - t < a
        ? r.body.refresh_token
          ? ((r.body = { refresh_token: r.body.refresh_token }),
            await this.cache.set(e.toKey(), r),
            r.body)
          : (await this.cache.remove(e.toKey()),
            void (await ((i = this.keyManifest) === null || i === void 0
              ? void 0
              : i.remove(e.toKey()))))
        : r.body;
    }
    async set(e) {
      var t;
      const i = new wi({
          clientId: e.client_id,
          scope: e.scope,
          audience: e.audience,
        }),
        r = await this.wrapCacheEntry(e);
      await this.cache.set(i.toKey(), r),
        await ((t = this.keyManifest) === null || t === void 0
          ? void 0
          : t.add(i.toKey()));
    }
    async clear(e) {
      var t;
      const i = await this.getCacheKeys();
      i &&
        (await i
          .filter((r) => !e || r.includes(e))
          .reduce(async (r, s) => {
            await r, await this.cache.remove(s);
          }, Promise.resolve()),
        await ((t = this.keyManifest) === null || t === void 0
          ? void 0
          : t.clear()));
    }
    async wrapCacheEntry(e) {
      const t = await this.nowProvider();
      return { body: e, expiresAt: Math.floor(t / 1e3) + e.expires_in };
    }
    async getCacheKeys() {
      var e;
      return this.keyManifest
        ? (e = await this.keyManifest.get()) === null || e === void 0
          ? void 0
          : e.keys
        : this.cache.allKeys
        ? this.cache.allKeys()
        : void 0;
    }
    getIdTokenCacheKey(e) {
      return new wi({ clientId: e }, "@@auth0spajs@@", "@@user@@").toKey();
    }
    matchExistingCacheKey(e, t) {
      return t.filter((i) => {
        var r;
        const s = wi.fromKey(i),
          a = new Set(s.scope && s.scope.split(" ")),
          o =
            ((r = e.scope) === null || r === void 0 ? void 0 : r.split(" ")) ||
            [],
          l = s.scope && o.reduce((c, u) => c && a.has(u), !0);
        return (
          s.prefix === "@@auth0spajs@@" &&
          s.clientId === e.clientId &&
          s.audience === e.audience &&
          l
        );
      })[0];
    }
  }
  class xp {
    constructor(e, t, i) {
      (this.storage = e),
        (this.clientId = t),
        (this.cookieDomain = i),
        (this.storageKey = `a0.spajs.txs.${this.clientId}`);
    }
    create(e) {
      this.storage.save(this.storageKey, e, {
        daysUntilExpire: 1,
        cookieDomain: this.cookieDomain,
      });
    }
    get() {
      return this.storage.get(this.storageKey);
    }
    remove() {
      this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
    }
  }
  const Wn = (n) => typeof n == "number",
    Mp = [
      "iss",
      "aud",
      "exp",
      "nbf",
      "iat",
      "jti",
      "azp",
      "nonce",
      "auth_time",
      "at_hash",
      "c_hash",
      "acr",
      "amr",
      "sub_jwk",
      "cnf",
      "sip_from_tag",
      "sip_date",
      "sip_callid",
      "sip_cseq_num",
      "sip_via_branch",
      "orig",
      "dest",
      "mky",
      "events",
      "toe",
      "txn",
      "rph",
      "sid",
      "vot",
      "vtm",
    ],
    Ap = (n) => {
      if (!n.id_token) throw new Error("ID token is required but missing");
      const e = ((s) => {
        const a = s.split("."),
          [o, l, c] = a;
        if (a.length !== 3 || !o || !l || !c)
          throw new Error("ID token could not be decoded");
        const u = JSON.parse(vu(l)),
          h = { __raw: s },
          m = {};
        return (
          Object.keys(u).forEach((p) => {
            (h[p] = u[p]), Mp.includes(p) || (m[p] = u[p]);
          }),
          {
            encoded: { header: o, payload: l, signature: c },
            header: JSON.parse(vu(o)),
            claims: h,
            user: m,
          }
        );
      })(n.id_token);
      if (!e.claims.iss)
        throw new Error(
          "Issuer (iss) claim must be a string present in the ID token"
        );
      if (e.claims.iss !== n.iss)
        throw new Error(
          `Issuer (iss) claim mismatch in the ID token; expected "${n.iss}", found "${e.claims.iss}"`
        );
      if (!e.user.sub)
        throw new Error(
          "Subject (sub) claim must be a string present in the ID token"
        );
      if (e.header.alg !== "RS256")
        throw new Error(
          `Signature algorithm of "${e.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`
        );
      if (
        !e.claims.aud ||
        (typeof e.claims.aud != "string" && !Array.isArray(e.claims.aud))
      )
        throw new Error(
          "Audience (aud) claim must be a string or array of strings present in the ID token"
        );
      if (Array.isArray(e.claims.aud)) {
        if (!e.claims.aud.includes(n.aud))
          throw new Error(
            `Audience (aud) claim mismatch in the ID token; expected "${
              n.aud
            }" but was not one of "${e.claims.aud.join(", ")}"`
          );
        if (e.claims.aud.length > 1) {
          if (!e.claims.azp)
            throw new Error(
              "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"
            );
          if (e.claims.azp !== n.aud)
            throw new Error(
              `Authorized Party (azp) claim mismatch in the ID token; expected "${n.aud}", found "${e.claims.azp}"`
            );
        }
      } else if (e.claims.aud !== n.aud)
        throw new Error(
          `Audience (aud) claim mismatch in the ID token; expected "${n.aud}" but found "${e.claims.aud}"`
        );
      if (n.nonce) {
        if (!e.claims.nonce)
          throw new Error(
            "Nonce (nonce) claim must be a string present in the ID token"
          );
        if (e.claims.nonce !== n.nonce)
          throw new Error(
            `Nonce (nonce) claim mismatch in the ID token; expected "${n.nonce}", found "${e.claims.nonce}"`
          );
      }
      if (n.max_age && !Wn(e.claims.auth_time))
        throw new Error(
          "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
        );
      if (e.claims.exp == null || !Wn(e.claims.exp))
        throw new Error(
          "Expiration Time (exp) claim must be a number present in the ID token"
        );
      if (!Wn(e.claims.iat))
        throw new Error(
          "Issued At (iat) claim must be a number present in the ID token"
        );
      const t = n.leeway || 60,
        i = new Date(n.now || Date.now()),
        r = new Date(0);
      if ((r.setUTCSeconds(e.claims.exp + t), i > r))
        throw new Error(
          `Expiration Time (exp) claim error in the ID token; current time (${i}) is after expiration time (${r})`
        );
      if (e.claims.nbf != null && Wn(e.claims.nbf)) {
        const s = new Date(0);
        if ((s.setUTCSeconds(e.claims.nbf - t), i < s))
          throw new Error(
            `Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${i}) is before ${s}`
          );
      }
      if (e.claims.auth_time != null && Wn(e.claims.auth_time)) {
        const s = new Date(0);
        if (
          (s.setUTCSeconds(parseInt(e.claims.auth_time) + n.max_age + t), i > s)
        )
          throw new Error(
            `Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${i}) is after last auth at ${s}`
          );
      }
      if (n.organization) {
        const s = n.organization.trim();
        if (s.startsWith("org_")) {
          const a = s;
          if (!e.claims.org_id)
            throw new Error(
              "Organization ID (org_id) claim must be a string present in the ID token"
            );
          if (a !== e.claims.org_id)
            throw new Error(
              `Organization ID (org_id) claim mismatch in the ID token; expected "${a}", found "${e.claims.org_id}"`
            );
        } else {
          const a = s.toLowerCase();
          if (!e.claims.org_name)
            throw new Error(
              "Organization Name (org_name) claim must be a string present in the ID token"
            );
          if (a !== e.claims.org_name)
            throw new Error(
              `Organization Name (org_name) claim mismatch in the ID token; expected "${a}", found "${e.claims.org_name}"`
            );
        }
      }
      return e;
    };
  var yr = xo(function (n, e) {
    var t =
      (wr && wr.__assign) ||
      function () {
        return (
          (t =
            Object.assign ||
            function (l) {
              for (var c, u = 1, h = arguments.length; u < h; u++)
                for (var m in (c = arguments[u]))
                  Object.prototype.hasOwnProperty.call(c, m) && (l[m] = c[m]);
              return l;
            }),
          t.apply(this, arguments)
        );
      };
    function i(l, c) {
      if (!c) return "";
      var u = "; " + l;
      return c === !0 ? u : u + "=" + c;
    }
    function r(l, c, u) {
      return (
        encodeURIComponent(l)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29") +
        "=" +
        encodeURIComponent(c).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function (h) {
          if (typeof h.expires == "number") {
            var m = new Date();
            m.setMilliseconds(m.getMilliseconds() + 864e5 * h.expires),
              (h.expires = m);
          }
          return (
            i("Expires", h.expires ? h.expires.toUTCString() : "") +
            i("Domain", h.domain) +
            i("Path", h.path) +
            i("Secure", h.secure) +
            i("SameSite", h.sameSite)
          );
        })(u)
      );
    }
    function s(l) {
      for (
        var c = {}, u = l ? l.split("; ") : [], h = /(%[\dA-F]{2})+/gi, m = 0;
        m < u.length;
        m++
      ) {
        var p = u[m].split("="),
          d = p.slice(1).join("=");
        d.charAt(0) === '"' && (d = d.slice(1, -1));
        try {
          c[p[0].replace(h, decodeURIComponent)] = d.replace(
            h,
            decodeURIComponent
          );
        } catch {}
      }
      return c;
    }
    function a() {
      return s(document.cookie);
    }
    function o(l, c, u) {
      document.cookie = r(l, c, t({ path: "/" }, u));
    }
    (e.__esModule = !0),
      (e.encode = r),
      (e.parse = s),
      (e.getAll = a),
      (e.get = function (l) {
        return a()[l];
      }),
      (e.set = o),
      (e.remove = function (l, c) {
        o(l, "", t(t({}, c), { expires: -1 }));
      });
  });
  Eo(yr), yr.encode, yr.parse, yr.getAll;
  var kp = yr.get,
    bu = yr.set,
    _u = yr.remove;
  const en = {
      get(n) {
        const e = kp(n);
        if (e !== void 0) return JSON.parse(e);
      },
      save(n, e, t) {
        let i = {};
        window.location.protocol === "https:" &&
          (i = { secure: !0, sameSite: "none" }),
          t != null && t.daysUntilExpire && (i.expires = t.daysUntilExpire),
          t != null && t.cookieDomain && (i.domain = t.cookieDomain),
          bu(n, JSON.stringify(e), i);
      },
      remove(n, e) {
        let t = {};
        e != null && e.cookieDomain && (t.domain = e.cookieDomain), _u(n, t);
      },
    },
    Cp = {
      get(n) {
        return en.get(n) || en.get(`_legacy_${n}`);
      },
      save(n, e, t) {
        let i = {};
        window.location.protocol === "https:" && (i = { secure: !0 }),
          t != null && t.daysUntilExpire && (i.expires = t.daysUntilExpire),
          t != null && t.cookieDomain && (i.domain = t.cookieDomain),
          bu(`_legacy_${n}`, JSON.stringify(e), i),
          en.save(n, e, t);
      },
      remove(n, e) {
        let t = {};
        e != null && e.cookieDomain && (t.domain = e.cookieDomain),
          _u(n, t),
          en.remove(n, e),
          en.remove(`_legacy_${n}`, e);
      },
    },
    Pp = {
      get(n) {
        if (typeof sessionStorage > "u") return;
        const e = sessionStorage.getItem(n);
        return e != null ? JSON.parse(e) : void 0;
      },
      save(n, e) {
        sessionStorage.setItem(n, JSON.stringify(e));
      },
      remove(n) {
        sessionStorage.removeItem(n);
      },
    };
  function Op(n, e, t) {
    var i = e === void 0 ? null : e,
      r = (function (l, c) {
        var u = atob(l);
        if (c) {
          for (
            var h = new Uint8Array(u.length), m = 0, p = u.length;
            m < p;
            ++m
          )
            h[m] = u.charCodeAt(m);
          return String.fromCharCode.apply(null, new Uint16Array(h.buffer));
        }
        return u;
      })(n, t !== void 0 && t),
      s =
        r.indexOf(
          `
`,
          10
        ) + 1,
      a = r.substring(s) + (i ? "//# sourceMappingURL=" + i : ""),
      o = new Blob([a], { type: "application/javascript" });
    return URL.createObjectURL(o);
  }
  var Su,
    Tu,
    Eu,
    Io,
    Ip =
      ((Su =
        "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo="),
      (Tu = null),
      (Eu = !1),
      function (n) {
        return (Io = Io || Op(Su, Tu, Eu)), new Worker(Io, n);
      });
  const Lo = {};
  class Lp {
    constructor(e, t) {
      (this.cache = e),
        (this.clientId = t),
        (this.manifestKey = this.createManifestKeyFrom(this.clientId));
    }
    async add(e) {
      var t;
      const i = new Set(
        ((t = await this.cache.get(this.manifestKey)) === null || t === void 0
          ? void 0
          : t.keys) || []
      );
      i.add(e), await this.cache.set(this.manifestKey, { keys: [...i] });
    }
    async remove(e) {
      const t = await this.cache.get(this.manifestKey);
      if (t) {
        const i = new Set(t.keys);
        return (
          i.delete(e),
          i.size > 0
            ? await this.cache.set(this.manifestKey, { keys: [...i] })
            : await this.cache.remove(this.manifestKey)
        );
      }
    }
    get() {
      return this.cache.get(this.manifestKey);
    }
    clear() {
      return this.cache.remove(this.manifestKey);
    }
    createManifestKeyFrom(e) {
      return `@@auth0spajs@@::${e}`;
    }
  }
  const Dp = {
      memory: () => new yu().enclosedCache,
      localstorage: () => new Tp(),
    },
    xu = (n) => Dp[n],
    Mu = (n) => {
      const { openUrl: e, onRedirect: t } = n,
        i = gi(n, ["openUrl", "onRedirect"]);
      return Object.assign(Object.assign({}, i), {
        openUrl: e === !1 || e ? e : t,
      });
    },
    Do = new gp();
  class zp {
    constructor(e) {
      let t, i;
      if (
        ((this.userCache = new yu().enclosedCache),
        (this.defaultOptions = {
          authorizationParams: { scope: "openid profile email" },
          useRefreshTokensFallback: !1,
          useFormData: !0,
        }),
        (this._releaseLockOnPageHide = async () => {
          await Do.releaseLock("auth0.lock.getTokenSilently"),
            window.removeEventListener("pagehide", this._releaseLockOnPageHide);
        }),
        (this.options = Object.assign(
          Object.assign(Object.assign({}, this.defaultOptions), e),
          {
            authorizationParams: Object.assign(
              Object.assign({}, this.defaultOptions.authorizationParams),
              e.authorizationParams
            ),
          }
        )),
        typeof window < "u" &&
          (() => {
            if (!Ws())
              throw new Error(
                "For security reasons, `window.crypto` is required to run `auth0-spa-js`."
              );
            if (Ws().subtle === void 0)
              throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `);
          })(),
        e.cache &&
          e.cacheLocation &&
          console.warn(
            "Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."
          ),
        e.cache)
      )
        i = e.cache;
      else {
        if (((t = e.cacheLocation || "memory"), !xu(t)))
          throw new Error(`Invalid cache location "${t}"`);
        i = xu(t)();
      }
      (this.httpTimeoutMs = e.httpTimeoutInSeconds
        ? 1e3 * e.httpTimeoutInSeconds
        : 1e4),
        (this.cookieStorage = e.legacySameSiteCookie === !1 ? en : Cp),
        (this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`),
        (this.isAuthenticatedCookieName = ((a) =>
          `auth0.${a}.is.authenticated`)(this.options.clientId)),
        (this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1);
      const r = e.useCookiesForTransactions ? this.cookieStorage : Pp;
      var s;
      (this.scope = Vs(
        "openid",
        this.options.authorizationParams.scope,
        this.options.useRefreshTokens ? "offline_access" : ""
      )),
        (this.transactionManager = new xp(
          r,
          this.options.clientId,
          this.options.cookieDomain
        )),
        (this.nowProvider = this.options.nowProvider || mu),
        (this.cacheManager = new Ep(
          i,
          i.allKeys ? void 0 : new Lp(i, this.options.clientId),
          this.nowProvider
        )),
        (this.domainUrl =
          ((s = this.options.domain),
          /^https?:\/\//.test(s) ? s : `https://${s}`)),
        (this.tokenIssuer = ((a, o) =>
          a ? (a.startsWith("https://") ? a : `https://${a}/`) : `${o}/`)(
          this.options.issuer,
          this.domainUrl
        )),
        typeof window < "u" &&
          window.Worker &&
          this.options.useRefreshTokens &&
          t === "memory" &&
          (this.options.workerUrl
            ? (this.worker = new Worker(this.options.workerUrl))
            : (this.worker = new Ip()));
    }
    _url(e) {
      const t = encodeURIComponent(
        btoa(JSON.stringify(this.options.auth0Client || hu))
      );
      return `${this.domainUrl}${e}&auth0Client=${t}`;
    }
    _authorizeUrl(e) {
      return this._url(`/authorize?${Oo(e)}`);
    }
    async _verifyIdToken(e, t, i) {
      const r = await this.nowProvider();
      return Ap({
        iss: this.tokenIssuer,
        aud: this.options.clientId,
        id_token: e,
        nonce: t,
        organization: i,
        leeway: this.options.leeway,
        max_age:
          ((s = this.options.authorizationParams.max_age),
          typeof s != "string" ? s : parseInt(s, 10) || void 0),
        now: r,
      });
      var s;
    }
    _processOrgHint(e) {
      e
        ? this.cookieStorage.save(this.orgHintCookieName, e, {
            daysUntilExpire: this.sessionCheckExpiryDays,
            cookieDomain: this.options.cookieDomain,
          })
        : this.cookieStorage.remove(this.orgHintCookieName, {
            cookieDomain: this.options.cookieDomain,
          });
    }
    async _prepareAuthorizeUrl(e, t, i) {
      const r = wu(Po()),
        s = wu(Po()),
        a = Po(),
        o = ((u) => {
          const h = new Uint8Array(u);
          return ((m) => {
            const p = { "+": "-", "/": "_", "=": "" };
            return m.replace(/[+/=]/g, (d) => p[d]);
          })(window.btoa(String.fromCharCode(...Array.from(h))));
        })(
          await (async (u) =>
            await Ws().subtle.digest(
              { name: "SHA-256" },
              new TextEncoder().encode(u)
            ))(a)
        ),
        l = ((u, h, m, p, d, f, w, b) =>
          Object.assign(
            Object.assign(
              Object.assign({ client_id: u.clientId }, u.authorizationParams),
              m
            ),
            {
              scope: Vs(h, m.scope),
              response_type: "code",
              response_mode: b || "query",
              state: p,
              nonce: d,
              redirect_uri: w || u.authorizationParams.redirect_uri,
              code_challenge: f,
              code_challenge_method: "S256",
            }
          ))(
          this.options,
          this.scope,
          e,
          r,
          s,
          o,
          e.redirect_uri || this.options.authorizationParams.redirect_uri || i,
          t == null ? void 0 : t.response_mode
        ),
        c = this._authorizeUrl(l);
      return {
        nonce: s,
        code_verifier: a,
        scope: l.scope,
        audience: l.audience || "default",
        redirect_uri: l.redirect_uri,
        state: r,
        url: c,
      };
    }
    async loginWithPopup(e, t) {
      var i;
      if (
        ((e = e || {}),
        !(t = t || {}).popup &&
          ((t.popup = ((o) => {
            const l = window.screenX + (window.innerWidth - 400) / 2,
              c = window.screenY + (window.innerHeight - 600) / 2;
            return window.open(
              o,
              "auth0:authorize:popup",
              `left=${l},top=${c},width=400,height=600,resizable,scrollbars=yes,status=1`
            );
          })("")),
          !t.popup))
      )
        throw new Error(
          "Unable to open a popup for loginWithPopup - window.open returned `null`"
        );
      const r = await this._prepareAuthorizeUrl(
        e.authorizationParams || {},
        { response_mode: "web_message" },
        window.location.origin
      );
      t.popup.location.href = r.url;
      const s = await ((o) =>
        new Promise((l, c) => {
          let u;
          const h = setInterval(() => {
              o.popup &&
                o.popup.closed &&
                (clearInterval(h),
                clearTimeout(m),
                window.removeEventListener("message", u, !1),
                c(new ko(o.popup)));
            }, 1e3),
            m = setTimeout(() => {
              clearInterval(h),
                c(new Ao(o.popup)),
                window.removeEventListener("message", u, !1);
            }, 1e3 * (o.timeoutInSeconds || 60));
          (u = function (p) {
            if (p.data && p.data.type === "authorization_response") {
              if (
                (clearTimeout(m),
                clearInterval(h),
                window.removeEventListener("message", u, !1),
                o.popup.close(),
                p.data.response.error)
              )
                return c(lt.fromPayload(p.data.response));
              l(p.data.response);
            }
          }),
            window.addEventListener("message", u);
        }))(
        Object.assign(Object.assign({}, t), {
          timeoutInSeconds:
            t.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60,
        })
      );
      if (r.state !== s.state) throw new lt("state_mismatch", "Invalid state");
      const a =
        ((i = e.authorizationParams) === null || i === void 0
          ? void 0
          : i.organization) || this.options.authorizationParams.organization;
      await this._requestToken(
        {
          audience: r.audience,
          scope: r.scope,
          code_verifier: r.code_verifier,
          grant_type: "authorization_code",
          code: s.code,
          redirect_uri: r.redirect_uri,
        },
        { nonceIn: r.nonce, organization: a }
      );
    }
    async getUser() {
      var e;
      const t = await this._getIdTokenFromCache();
      return (e = t == null ? void 0 : t.decodedToken) === null || e === void 0
        ? void 0
        : e.user;
    }
    async getIdTokenClaims() {
      var e;
      const t = await this._getIdTokenFromCache();
      return (e = t == null ? void 0 : t.decodedToken) === null || e === void 0
        ? void 0
        : e.claims;
    }
    async loginWithRedirect(e = {}) {
      var t;
      const i = Mu(e),
        { openUrl: r, fragment: s, appState: a } = i,
        o = gi(i, ["openUrl", "fragment", "appState"]),
        l =
          ((t = o.authorizationParams) === null || t === void 0
            ? void 0
            : t.organization) || this.options.authorizationParams.organization,
        c = await this._prepareAuthorizeUrl(o.authorizationParams || {}),
        { url: u } = c,
        h = gi(c, ["url"]);
      this.transactionManager.create(
        Object.assign(
          Object.assign(Object.assign({}, h), { appState: a }),
          l && { organization: l }
        )
      );
      const m = s ? `${u}#${s}` : u;
      r ? await r(m) : window.location.assign(m);
    }
    async handleRedirectCallback(e = window.location.href) {
      const t = e.split("?").slice(1);
      if (t.length === 0)
        throw new Error("There are no query params available for parsing.");
      const {
          state: i,
          code: r,
          error: s,
          error_description: a,
        } = ((h) => {
          h.indexOf("#") > -1 && (h = h.substring(0, h.indexOf("#")));
          const m = new URLSearchParams(h);
          return {
            state: m.get("state"),
            code: m.get("code") || void 0,
            error: m.get("error") || void 0,
            error_description: m.get("error_description") || void 0,
          };
        })(t.join("")),
        o = this.transactionManager.get();
      if (!o) throw new lt("missing_transaction", "Invalid state");
      if ((this.transactionManager.remove(), s))
        throw new Mo(s, a || s, i, o.appState);
      if (!o.code_verifier || (o.state && o.state !== i))
        throw new lt("state_mismatch", "Invalid state");
      const l = o.organization,
        c = o.nonce,
        u = o.redirect_uri;
      return (
        await this._requestToken(
          Object.assign(
            {
              audience: o.audience,
              scope: o.scope,
              code_verifier: o.code_verifier,
              grant_type: "authorization_code",
              code: r,
            },
            u ? { redirect_uri: u } : {}
          ),
          { nonceIn: c, organization: l }
        ),
        { appState: o.appState }
      );
    }
    async checkSession(e) {
      if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
        if (!this.cookieStorage.get("auth0.is.authenticated")) return;
        this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
          daysUntilExpire: this.sessionCheckExpiryDays,
          cookieDomain: this.options.cookieDomain,
        }),
          this.cookieStorage.remove("auth0.is.authenticated");
      }
      try {
        await this.getTokenSilently(e);
      } catch {}
    }
    async getTokenSilently(e = {}) {
      var t;
      const i = Object.assign(Object.assign({ cacheMode: "on" }, e), {
          authorizationParams: Object.assign(
            Object.assign(
              Object.assign({}, this.options.authorizationParams),
              e.authorizationParams
            ),
            {
              scope: Vs(
                this.scope,
                (t = e.authorizationParams) === null || t === void 0
                  ? void 0
                  : t.scope
              ),
            }
          ),
        }),
        r = await ((s, a) => {
          let o = Lo[a];
          return (
            o ||
              ((o = s().finally(() => {
                delete Lo[a], (o = null);
              })),
              (Lo[a] = o)),
            o
          );
        })(
          () => this._getTokenSilently(i),
          `${this.options.clientId}::${i.authorizationParams.audience}::${i.authorizationParams.scope}`
        );
      return e.detailedResponse ? r : r == null ? void 0 : r.access_token;
    }
    async _getTokenSilently(e) {
      const { cacheMode: t } = e,
        i = gi(e, ["cacheMode"]);
      if (t !== "off") {
        const r = await this._getEntryFromCache({
          scope: i.authorizationParams.scope,
          audience: i.authorizationParams.audience || "default",
          clientId: this.options.clientId,
        });
        if (r) return r;
      }
      if (t !== "cache-only") {
        if (
          !(await (async (r, s = 3) => {
            for (let a = 0; a < s; a++) if (await r()) return !0;
            return !1;
          })(() => Do.acquireLock("auth0.lock.getTokenSilently", 5e3), 10))
        )
          throw new Hn();
        try {
          if (
            (window.addEventListener("pagehide", this._releaseLockOnPageHide),
            t !== "off")
          ) {
            const c = await this._getEntryFromCache({
              scope: i.authorizationParams.scope,
              audience: i.authorizationParams.audience || "default",
              clientId: this.options.clientId,
            });
            if (c) return c;
          }
          const r = this.options.useRefreshTokens
              ? await this._getTokenUsingRefreshToken(i)
              : await this._getTokenFromIFrame(i),
            {
              id_token: s,
              access_token: a,
              oauthTokenScope: o,
              expires_in: l,
            } = r;
          return Object.assign(
            Object.assign(
              { id_token: s, access_token: a },
              o ? { scope: o } : null
            ),
            { expires_in: l }
          );
        } finally {
          await Do.releaseLock("auth0.lock.getTokenSilently"),
            window.removeEventListener("pagehide", this._releaseLockOnPageHide);
        }
      }
    }
    async getTokenWithPopup(e = {}, t = {}) {
      var i;
      const r = Object.assign(Object.assign({}, e), {
        authorizationParams: Object.assign(
          Object.assign(
            Object.assign({}, this.options.authorizationParams),
            e.authorizationParams
          ),
          {
            scope: Vs(
              this.scope,
              (i = e.authorizationParams) === null || i === void 0
                ? void 0
                : i.scope
            ),
          }
        ),
      });
      return (
        (t = Object.assign(Object.assign({}, wp), t)),
        await this.loginWithPopup(r, t),
        (
          await this.cacheManager.get(
            new wi({
              scope: r.authorizationParams.scope,
              audience: r.authorizationParams.audience || "default",
              clientId: this.options.clientId,
            })
          )
        ).access_token
      );
    }
    async isAuthenticated() {
      return !!(await this.getUser());
    }
    _buildLogoutUrl(e) {
      e.clientId !== null
        ? (e.clientId = e.clientId || this.options.clientId)
        : delete e.clientId;
      const t = e.logoutParams || {},
        { federated: i } = t,
        r = gi(t, ["federated"]),
        s = i ? "&federated" : "";
      return (
        this._url(
          `/v2/logout?${Oo(Object.assign({ clientId: e.clientId }, r))}`
        ) + s
      );
    }
    async logout(e = {}) {
      const t = Mu(e),
        { openUrl: i } = t,
        r = gi(t, ["openUrl"]);
      e.clientId === null
        ? await this.cacheManager.clear()
        : await this.cacheManager.clear(e.clientId || this.options.clientId),
        this.cookieStorage.remove(this.orgHintCookieName, {
          cookieDomain: this.options.cookieDomain,
        }),
        this.cookieStorage.remove(this.isAuthenticatedCookieName, {
          cookieDomain: this.options.cookieDomain,
        }),
        this.userCache.remove("@@user@@");
      const s = this._buildLogoutUrl(r);
      i ? await i(s) : i !== !1 && window.location.assign(s);
    }
    async _getTokenFromIFrame(e) {
      const t = Object.assign(Object.assign({}, e.authorizationParams), {
          prompt: "none",
        }),
        i = this.cookieStorage.get(this.orgHintCookieName);
      i && !t.organization && (t.organization = i);
      const {
        url: r,
        state: s,
        nonce: a,
        code_verifier: o,
        redirect_uri: l,
        scope: c,
        audience: u,
      } = await this._prepareAuthorizeUrl(
        t,
        { response_mode: "web_message" },
        window.location.origin
      );
      try {
        if (window.crossOriginIsolated)
          throw new lt(
            "login_required",
            "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible."
          );
        const h = e.timeoutInSeconds || this.options.authorizeTimeoutInSeconds,
          m = await ((d, f, w = 60) =>
            new Promise((b, v) => {
              const g = window.document.createElement("iframe");
              g.setAttribute("width", "0"),
                g.setAttribute("height", "0"),
                (g.style.display = "none");
              const y = () => {
                window.document.body.contains(g) &&
                  (window.document.body.removeChild(g),
                  window.removeEventListener("message", _, !1));
              };
              let _;
              const A = setTimeout(() => {
                v(new Hn()), y();
              }, 1e3 * w);
              (_ = function (M) {
                if (
                  M.origin != f ||
                  !M.data ||
                  M.data.type !== "authorization_response"
                )
                  return;
                const E = M.source;
                E && E.close(),
                  M.data.response.error
                    ? v(lt.fromPayload(M.data.response))
                    : b(M.data.response),
                  clearTimeout(A),
                  window.removeEventListener("message", _, !1),
                  setTimeout(y, 2e3);
              }),
                window.addEventListener("message", _, !1),
                window.document.body.appendChild(g),
                g.setAttribute("src", d);
            }))(r, this.domainUrl, h);
        if (s !== m.state) throw new lt("state_mismatch", "Invalid state");
        const p = await this._requestToken(
          Object.assign(Object.assign({}, e.authorizationParams), {
            code_verifier: o,
            code: m.code,
            grant_type: "authorization_code",
            redirect_uri: l,
            timeout: e.authorizationParams.timeout || this.httpTimeoutMs,
          }),
          { nonceIn: a, organization: t.organization }
        );
        return Object.assign(Object.assign({}, p), {
          scope: c,
          oauthTokenScope: p.scope,
          audience: u,
        });
      } catch (h) {
        throw (h.error === "login_required" && this.logout({ openUrl: !1 }), h);
      }
    }
    async _getTokenUsingRefreshToken(e) {
      const t = await this.cacheManager.get(
        new wi({
          scope: e.authorizationParams.scope,
          audience: e.authorizationParams.audience || "default",
          clientId: this.options.clientId,
        })
      );
      if (!((t && t.refresh_token) || this.worker)) {
        if (this.options.useRefreshTokensFallback)
          return await this._getTokenFromIFrame(e);
        throw new Hs(
          e.authorizationParams.audience || "default",
          e.authorizationParams.scope
        );
      }
      const i =
          e.authorizationParams.redirect_uri ||
          this.options.authorizationParams.redirect_uri ||
          window.location.origin,
        r =
          typeof e.timeoutInSeconds == "number"
            ? 1e3 * e.timeoutInSeconds
            : null;
      try {
        const s = await this._requestToken(
          Object.assign(
            Object.assign(Object.assign({}, e.authorizationParams), {
              grant_type: "refresh_token",
              refresh_token: t && t.refresh_token,
              redirect_uri: i,
            }),
            r && { timeout: r }
          )
        );
        return Object.assign(Object.assign({}, s), {
          scope: e.authorizationParams.scope,
          oauthTokenScope: s.scope,
          audience: e.authorizationParams.audience || "default",
        });
      } catch (s) {
        if (
          (s.message.indexOf("Missing Refresh Token") > -1 ||
            (s.message && s.message.indexOf("invalid refresh token") > -1)) &&
          this.options.useRefreshTokensFallback
        )
          return await this._getTokenFromIFrame(e);
        throw s;
      }
    }
    async _saveEntryInCache(e) {
      const { id_token: t, decodedToken: i } = e,
        r = gi(e, ["id_token", "decodedToken"]);
      this.userCache.set("@@user@@", { id_token: t, decodedToken: i }),
        await this.cacheManager.setIdToken(
          this.options.clientId,
          e.id_token,
          e.decodedToken
        ),
        await this.cacheManager.set(r);
    }
    async _getIdTokenFromCache() {
      const e = this.options.authorizationParams.audience || "default",
        t = await this.cacheManager.getIdToken(
          new wi({
            clientId: this.options.clientId,
            audience: e,
            scope: this.scope,
          })
        ),
        i = this.userCache.get("@@user@@");
      return t && t.id_token === (i == null ? void 0 : i.id_token)
        ? i
        : (this.userCache.set("@@user@@", t), t);
    }
    async _getEntryFromCache({ scope: e, audience: t, clientId: i }) {
      const r = await this.cacheManager.get(
        new wi({ scope: e, audience: t, clientId: i }),
        60
      );
      if (r && r.access_token) {
        const { access_token: s, oauthTokenScope: a, expires_in: o } = r,
          l = await this._getIdTokenFromCache();
        return (
          l &&
          Object.assign(
            Object.assign(
              { id_token: l.id_token, access_token: s },
              a ? { scope: a } : null
            ),
            { expires_in: o }
          )
        );
      }
    }
    async _requestToken(e, t) {
      const { nonceIn: i, organization: r } = t || {},
        s = await Sp(
          Object.assign(
            {
              baseUrl: this.domainUrl,
              client_id: this.options.clientId,
              auth0Client: this.options.auth0Client,
              useFormData: this.options.useFormData,
              timeout: this.httpTimeoutMs,
            },
            e
          ),
          this.worker
        ),
        a = await this._verifyIdToken(s.id_token, i, r);
      return (
        await this._saveEntryInCache(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, s), {
                decodedToken: a,
                scope: e.scope,
                audience: e.audience || "default",
              }),
              s.scope ? { oauthTokenScope: s.scope } : null
            ),
            { client_id: this.options.clientId }
          )
        ),
        this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
          daysUntilExpire: this.sessionCheckExpiryDays,
          cookieDomain: this.options.cookieDomain,
        }),
        this._processOrgHint(r || a.claims.org_id),
        Object.assign(Object.assign({}, s), { decodedToken: a })
      );
    }
  }
  const zo = {
      domain: "dev-4byffv68pjm24xxs.us.auth0.com",
      clientId: "U89PtuKBLIluKKIQOI8hPIA9CfQYkpb6",
      redirectUri: window.location.origin,
      audience: "strive-v2-api",
    },
    Vn = new zp({
      domain: zo.domain,
      clientId: zo.clientId,
      authorizationParams: {
        redirect_uri: zo.redirectUri,
        scope: "openid profile email offline_access",
        audience: "strive-v2-api",
        response_type: "code",
      },
      cacheLocation: "localstorage",
      useRefreshTokens: !0,
      useCookiesForTransactions: !1,
      advancedOptions: {
        defaultScope: "openid profile email",
        useFormData: !0,
      },
      errorPath: "/error",
      legacySameSiteCookie: !1,
      httpTimeoutInSeconds: 60,
    }),
    Au = async () => {
      try {
        return await Vn.isAuthenticated();
      } catch (n) {
        return console.error("Error checking authentication:", n), !1;
      }
    },
    Rp = async (n = {}) => {
      try {
        if (!(await Vn.isAuthenticated())) return null;
        const t = {
          authorizationParams: {
            audience: "strive-v2-api",
            scope: "openid profile email offline_access",
          },
          timeoutInSeconds: 60,
          ...n,
        };
        return await Vn.getTokenSilently(t);
      } catch (e) {
        return console.error("Error getting token silently:", e), null;
      }
    },
    Np = async () => {
      const n = window.location.search;
      if (n.includes("code=") && n.includes("state="))
        try {
          sessionStorage.removeItem("auth_state"),
            localStorage.removeItem("auth0.is.authenticated"),
            console.log("Starting Auth0 callback handling...");
          const e = await Vn.handleRedirectCallback();
          return (
            console.log("Auth0 callback handled successfully", e),
            window.history.replaceState(
              {},
              document.title,
              window.location.pathname
            ),
            e == null ? void 0 : e.appState
          );
        } catch (e) {
          return (
            console.error("Error handling Auth0 callback:", {
              error: e,
              message: e.message,
              errorCode: e.error,
              description: e.error_description,
              stack: e.stack,
            }),
            sessionStorage.removeItem("auth_state"),
            localStorage.removeItem("auth0.is.authenticated"),
            localStorage.removeItem("auth0.is.authenticated"),
            Object.keys(localStorage).forEach((t) => {
              t.startsWith("auth0.") && localStorage.removeItem(t);
            }),
            {
              error: !0,
              message: e.message || "Authentication failed",
              code: e.error || "unknown_error",
            }
          );
        }
      return null;
    },
    Fp = async () => {
      try {
        return (await Au()) ? await Vn.getUser() : null;
      } catch (n) {
        return console.error("Error getting user profile:", n), null;
      }
    },
    Gi = {
      ATTRIBUTES: { PAGE: "data-page-auth" },
      REQUIREMENTS: { REQUIRED: "required", PUBLIC: "public" },
      PROTECTED_ROUTES: [
        "/dashboard",
        "/account",
        "/settings",
        "/mock/dashboard",
      ],
      REDIRECTS: { UNAUTHORIZED: "/login", SUCCESS: "/mock/dashboard" },
    };
  class Bp {
    constructor() {
      this.currentPath = window.location.pathname;
    }
    requiresAuth() {
      const e = document.querySelector(`[${Gi.ATTRIBUTES.PAGE}]`);
      return e
        ? e.getAttribute(Gi.ATTRIBUTES.PAGE) === Gi.REQUIREMENTS.REQUIRED
        : Gi.PROTECTED_ROUTES.includes(this.currentPath);
    }
    async checkPageAccess(e) {
      if (
        this.currentPath.startsWith("/error") ||
        this.currentPath === Gi.REDIRECTS.UNAUTHORIZED
      )
        return !0;
      if (this.requiresAuth() && !e)
        return (
          sessionStorage.setItem("authRedirect", this.currentPath),
          (window.location.href = Gi.REDIRECTS.UNAUTHORIZED),
          !1
        );
      if (e && this.currentPath === Gi.REDIRECTS.UNAUTHORIZED) {
        const t =
          sessionStorage.getItem("authRedirect") || Gi.REDIRECTS.SUCCESS;
        return (window.location.href = t), !1;
      }
      return !0;
    }
    handleAuthenticatedRedirect() {
      const e = sessionStorage.getItem("authRedirect");
      return e
        ? (sessionStorage.removeItem("authRedirect"),
          (window.location.href = e),
          !0)
        : !1;
    }
  }
  const $p = async () => {
    const n = document.querySelectorAll('[data-show="auth"]'),
      e = document.querySelectorAll('[data-show="guest"]'),
      t = (r, s) => {
        r.forEach((a) => {
          if (s) {
            a.setAttribute("auth-visible", "");
            const o = a.dataset.display;
            o && (a.style.display = o);
          } else a.removeAttribute("auth-visible");
        });
      },
      i = (r) => {
        ["name", "email", "picture"].forEach((a) => {
          document
            .querySelectorAll(`[data-auth-profile="${a}"]`)
            .forEach((l) => {
              r[a] &&
                (l.tagName.toLowerCase() === "img"
                  ? ((l.src = r[a]), (l.alt = `${r.name}'s profile picture`))
                  : (l.textContent = r[a]));
            });
        });
      };
    try {
      if (!(await Au())) return t(n, !1), t(e, !0), { authenticated: !1 };
      const s = await Rp(),
        a = await Fp();
      if (!s || !a) throw new Error("Failed to get token or user profile");
      return t(n, !0), t(e, !1), i(a), { authenticated: !0, token: s, user: a };
    } catch (r) {
      return (
        console.error("Auth state error:", r),
        t(n, !1),
        t(e, !0),
        { authenticated: !1 }
      );
    }
  };
  async function Yp() {
    const n = new Bp();
    try {
      const e = window.location.search.includes("code=") ? await Np() : null;
      if (e != null && e.error) {
        sessionStorage.setItem("authError", JSON.stringify(e)),
          (window.location.href = `/error?code=${encodeURIComponent(
            e.code
          )}&message=${encodeURIComponent(e.message)}`);
        return;
      }
      const { authenticated: t } = await $p();
      if (!(await n.checkPageAccess(t))) return;
      if (t) {
        const r =
            sessionStorage.getItem("preAuthPath") ||
            sessionStorage.getItem("authRedirect"),
          s = window.location.pathname,
          a = r && r !== s;
        sessionStorage.removeItem("preAuthPath"),
          sessionStorage.removeItem("authRedirect"),
          a && (window.location.href = r);
      }
    } catch (e) {
      console.error("Auth initialization error:", e),
        sessionStorage.setItem(
          "authError",
          JSON.stringify({ code: "init_error", message: e.message })
        ),
        (window.location.href = `/error?code=init_error&message=${encodeURIComponent(
          e.message
        )}`);
    }
  }
  class Hp {
    constructor() {
      (this.elements = {
        searchModal: document.querySelector("[search-modal='main']"),
        searchModalComponent: document.querySelector(
          "[search-modal='component']"
        ),
        searchModalClose: document.querySelectorAll(
          "[search-modal='close-btn']"
        ),
        searchModalOpen: document.querySelectorAll("[search-modal='open-btn']"),
        pageOverlay: document.querySelector("[page-overlay]"),
      }),
        (this.state = { isOpen: !1 }),
        (this.lenis = window.lenis),
        this.init();
    }
    init() {
      this.elements.searchModalComponent &&
        this.elements.searchModalComponent.setAttribute(
          "search-modal-status",
          "inactive"
        ),
        this.elements.searchModal &&
          this.elements.searchModal.setAttribute(
            "search-modal-status",
            "inactive"
          ),
        this.elements.searchModalOpen &&
          this.elements.searchModalOpen.length > 0 &&
          this.elements.searchModalOpen.forEach((e) => {
            e.addEventListener("click", () => {
              this.openModal(), this.lenis && this.lenis.stop();
            });
          }),
        this.elements.searchModalClose &&
          this.elements.searchModalClose.forEach((e) => {
            e.addEventListener("click", () => {
              this.closeModal(), this.lenis && this.lenis.start();
            });
          }),
        this.elements.pageOverlay &&
          this.elements.pageOverlay.addEventListener("click", () => {
            this.state.isOpen &&
              (this.closeModal(), this.lenis && this.lenis.start());
          }),
        this.elements.searchModal &&
          this.elements.searchModal.addEventListener("click", (e) => {
            if (this.state.isOpen) {
              const t = this.elements.searchModalComponent.contains(e.target);
              (e.target === this.elements.searchModal || !t) &&
                (this.closeModal(), this.lenis && this.lenis.start());
            }
          });
    }
    openModal() {
      this.state.isOpen ||
        ((this.state.isOpen = !0),
        this.elements.searchModalComponent &&
          this.elements.searchModalComponent.setAttribute(
            "search-modal-status",
            "active"
          ),
        this.elements.searchModal &&
          this.elements.searchModal.setAttribute(
            "search-modal-status",
            "active"
          ),
        this.elements.pageOverlay &&
          this.elements.pageOverlay.setAttribute("page-overlay", "active"));
    }
    closeModal() {
      this.state.isOpen &&
        ((this.state.isOpen = !1),
        this.elements.searchModalComponent &&
          this.elements.searchModalComponent.setAttribute(
            "search-modal-status",
            "inactive"
          ),
        this.elements.searchModal &&
          this.elements.searchModal.setAttribute(
            "search-modal-status",
            "inactive"
          ),
        this.elements.pageOverlay &&
          this.elements.pageOverlay.setAttribute("page-overlay", "inactive"));
    }
  }
  const Wp = () => {
    new Hp();
  };
  class Vp {
    constructor() {
      (this.elements = {
        pageMenu: document.querySelector("[page-menu='main']"),
        pageMenuOpen: document.querySelectorAll("[page-menu='open-btn']"),
        pageMenuClose: document.querySelectorAll("[page-menu='close-btn']"),
        pageMenuComponent: document.querySelectorAll("[page-menu='component']"),
        pageMenuOverlay: document.querySelector("[page-menu='overlay']"),
        pageMenuList: document.querySelectorAll("[page-menu-list]"),
        pageMenuModal: document.querySelectorAll("[page-menu-modal]"),
        pageMenuBackBtn: document.querySelectorAll("[page-menu='back-btn']"),
        pageMenuHeader: document.querySelector("[page-menu='header']"),
        pageMenuDefault: document.querySelector("[page-menu='default']"),
        pageMenuSearchWrap: document.querySelector("[page-menu='search-wrap']"),
      }),
        (this.state = { isOpen: !1, activeModal: null }),
        (this.lenis = window.lenis),
        this.init();
    }
    init() {
      this.elements.pageMenu &&
        this.elements.pageMenu.setAttribute("page-menu-status", "inactive"),
        this.elements.pageMenuComponent &&
          this.elements.pageMenuComponent.forEach((e) => {
            e.setAttribute("page-menu-status", "inactive");
          }),
        this.elements.pageMenuModal &&
          this.elements.pageMenuModal.forEach((e) => {
            e.setAttribute("menu-modal-status", "inactive");
          }),
        this.elements.pageMenuHeader &&
          (this.elements.pageMenuHeader.textContent = "MENU"),
        this.elements.pageMenuDefault &&
          this.elements.pageMenuDefault.setAttribute(
            "page-menu-status",
            "active"
          ),
        this.elements.pageMenuBackBtn &&
          this.elements.pageMenuBackBtn.forEach((e) => {
            e.setAttribute("page-menu-btn-status", "inactive");
          }),
        this.elements.pageMenuOpen &&
          this.elements.pageMenuOpen.length > 0 &&
          this.elements.pageMenuOpen.forEach((e) => {
            e.addEventListener("click", () => {
              this.openMenu(), this.lenis && this.lenis.stop();
            });
          }),
        this.elements.pageMenuClose &&
          this.elements.pageMenuClose.length > 0 &&
          this.elements.pageMenuClose.forEach((e) => {
            e.addEventListener("click", () => {
              this.closeMenu(), this.lenis && this.lenis.start();
            });
          }),
        this.elements.pageMenuOverlay &&
          this.elements.pageMenuOverlay.addEventListener("click", () => {
            this.closeMenu(), this.lenis && this.lenis.start();
          }),
        this.elements.pageMenuList &&
          this.elements.pageMenuList.length > 0 &&
          this.elements.pageMenuList.forEach((e) => {
            e.addEventListener("click", () => {
              const t = e.getAttribute("page-menu-list");
              this.openModal(t);
            });
          }),
        this.elements.pageMenuBackBtn &&
          this.elements.pageMenuBackBtn.length > 0 &&
          this.elements.pageMenuBackBtn.forEach((e) => {
            e.addEventListener("click", () => {
              this.closeModal();
            });
          }),
        this.elements.pageMenu &&
          this.elements.pageMenu.addEventListener("click", (e) => {
            if (this.state.isOpen) {
              const t = e.target === this.elements.pageMenu,
                i = Array.from(this.elements.pageMenuComponent).some((r) =>
                  r.contains(e.target)
                );
              (t || !i) && (this.closeMenu(), this.lenis && this.lenis.start());
            }
          }),
        this.elements.pageMenuSearchWrap &&
          this.elements.pageMenuSearchWrap.setAttribute(
            "page-menu-search-status",
            "active"
          );
    }
    openMenu() {
      this.state.isOpen ||
        ((this.state.isOpen = !0),
        this.elements.pageMenuComponent &&
          this.elements.pageMenuComponent.forEach((e) => {
            e.setAttribute("page-menu-status", "active");
          }),
        this.elements.pageMenu &&
          this.elements.pageMenu.setAttribute("page-menu-status", "active"),
        this.elements.pageMenuOverlay &&
          this.elements.pageMenuOverlay.setAttribute(
            "page-menu-overlay",
            "active"
          ),
        this.elements.pageMenuHeader &&
          (this.elements.pageMenuHeader.textContent = "MENU"),
        this.elements.pageMenuDefault &&
          this.elements.pageMenuDefault.setAttribute(
            "page-menu-status",
            "active"
          ));
    }
    openModal(e) {
      this.closeModal(), (this.state.activeModal = e);
      const t = Array.from(this.elements.pageMenuModal).find(
        (i) => i.getAttribute("page-menu-modal") === e
      );
      t &&
        (t.setAttribute("menu-modal-status", "active"),
        this.elements.pageMenuHeader &&
          (this.elements.pageMenuHeader.textContent = e.toUpperCase()),
        this.elements.pageMenuDefault &&
          this.elements.pageMenuDefault.setAttribute(
            "page-menu-status",
            "inactive"
          ),
        this.elements.pageMenuBackBtn &&
          this.elements.pageMenuBackBtn.forEach((i) => {
            i.setAttribute("page-menu-btn-status", "active");
          }),
        this.elements.pageMenuSearchWrap &&
          this.elements.pageMenuSearchWrap.setAttribute(
            "page-menu-search-status",
            "inactive"
          ));
    }
    closeModal() {
      if (this.state.activeModal) {
        const e = Array.from(this.elements.pageMenuModal).find(
          (t) => t.getAttribute("page-menu-modal") === this.state.activeModal
        );
        e && e.setAttribute("menu-modal-status", "inactive"),
          (this.state.activeModal = null),
          this.elements.pageMenuHeader &&
            (this.elements.pageMenuHeader.textContent = "MENU"),
          this.elements.pageMenuDefault &&
            this.elements.pageMenuDefault.setAttribute(
              "page-menu-status",
              "active"
            ),
          this.elements.pageMenuBackBtn &&
            this.elements.pageMenuBackBtn.forEach((t) => {
              t.setAttribute("page-menu-btn-status", "inactive");
            }),
          this.elements.pageMenuSearchWrap &&
            this.elements.pageMenuSearchWrap.setAttribute(
              "page-menu-search-status",
              "active"
            );
      }
    }
    closeMenu() {
      this.state.isOpen &&
        ((this.state.isOpen = !1),
        this.closeModal(),
        this.elements.pageMenuComponent &&
          this.elements.pageMenuComponent.forEach((e) => {
            e.setAttribute("page-menu-status", "inactive");
          }),
        this.elements.pageMenu &&
          this.elements.pageMenu.setAttribute("page-menu-status", "inactive"),
        this.elements.pageMenuOverlay &&
          this.elements.pageMenuOverlay.setAttribute(
            "page-menu-overlay",
            "inactive"
          ),
        this.elements.pageMenuBackBtn &&
          this.elements.pageMenuBackBtn.forEach((e) => {
            e.setAttribute("page-menu-btn-status", "inactive");
          }));
    }
  }
  const qp = () => {
    new Vp();
  };
  async function Gp() {
    pp(), await Yp(), mp(), Wp(), qp();
  }
  function jp() {
    console.log("Home Component Starter Initialized");
  }
  function ku(n) {
    return (
      n !== null &&
      typeof n == "object" &&
      "constructor" in n &&
      n.constructor === Object
    );
  }
  function Ro(n, e) {
    n === void 0 && (n = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof n[i] > "u"
          ? (n[i] = e[i])
          : ku(e[i]) &&
            ku(n[i]) &&
            Object.keys(e[i]).length > 0 &&
            Ro(n[i], e[i]);
      });
  }
  const Cu = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function Ge() {
    const n = typeof document < "u" ? document : {};
    return Ro(n, Cu), n;
  }
  const Xp = {
    document: Cu,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(n) {
      return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
    },
    cancelAnimationFrame(n) {
      typeof setTimeout > "u" || clearTimeout(n);
    },
  };
  function be() {
    const n = typeof window < "u" ? window : {};
    return Ro(n, Xp), n;
  }
  function ji(n) {
    return (
      n === void 0 && (n = ""),
      n
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Up(n) {
    const e = n;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch {}
      try {
        delete e[t];
      } catch {}
    });
  }
  function br(n, e) {
    return e === void 0 && (e = 0), setTimeout(n, e);
  }
  function Kt() {
    return Date.now();
  }
  function Zp(n) {
    const e = be();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(n, null)),
      !t && n.currentStyle && (t = n.currentStyle),
      t || (t = n.style),
      t
    );
  }
  function No(n, e) {
    e === void 0 && (e = "x");
    const t = be();
    let i, r, s;
    const a = Zp(n);
    return (
      t.WebKitCSSMatrix
        ? ((r = a.transform || a.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((o) => o.replace(",", "."))
              .join(", ")),
          (s = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
        : ((s =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = s.toString().split(","))),
      e === "x" &&
        (t.WebKitCSSMatrix
          ? (r = s.m41)
          : i.length === 16
          ? (r = parseFloat(i[12]))
          : (r = parseFloat(i[4]))),
      e === "y" &&
        (t.WebKitCSSMatrix
          ? (r = s.m42)
          : i.length === 16
          ? (r = parseFloat(i[13]))
          : (r = parseFloat(i[5]))),
      r || 0
    );
  }
  function qn(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      n.constructor &&
      Object.prototype.toString.call(n).slice(8, -1) === "Object"
    );
  }
  function Kp(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? n instanceof HTMLElement
      : n && (n.nodeType === 1 || n.nodeType === 11);
  }
  function Bt() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Kp(i)) {
        const r = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, a = r.length; s < a; s += 1) {
          const o = r[s],
            l = Object.getOwnPropertyDescriptor(i, o);
          l !== void 0 &&
            l.enumerable &&
            (qn(n[o]) && qn(i[o])
              ? i[o].__swiper__
                ? (n[o] = i[o])
                : Bt(n[o], i[o])
              : !qn(n[o]) && qn(i[o])
              ? ((n[o] = {}), i[o].__swiper__ ? (n[o] = i[o]) : Bt(n[o], i[o]))
              : (n[o] = i[o]));
        }
      }
    }
    return n;
  }
  function Gn(n, e, t) {
    n.style.setProperty(e, t);
  }
  function Pu(n) {
    let { swiper: e, targetPosition: t, side: i } = n;
    const r = be(),
      s = -e.translate;
    let a = null,
      o;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > s ? "next" : "prev",
      u = (m, p) => (c === "next" && m >= p) || (c === "prev" && m <= p),
      h = () => {
        (o = new Date().getTime()), a === null && (a = o);
        const m = Math.max(Math.min((o - a) / l, 1), 0),
          p = 0.5 - Math.cos(m * Math.PI) / 2;
        let d = s + p * (t - s);
        if ((u(d, t) && (d = t), e.wrapperEl.scrollTo({ [i]: d }), u(d, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: d });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(h);
      };
    h();
  }
  function _r(n) {
    return (
      n.querySelector(".swiper-slide-transform") ||
      (n.shadowRoot && n.shadowRoot.querySelector(".swiper-slide-transform")) ||
      n
    );
  }
  function Je(n, e) {
    e === void 0 && (e = "");
    const t = be(),
      i = [...n.children];
    return (
      t.HTMLSlotElement &&
        n instanceof HTMLSlotElement &&
        i.push(...n.assignedElements()),
      e ? i.filter((r) => r.matches(e)) : i
    );
  }
  function Jp(n, e) {
    const t = [e];
    for (; t.length > 0; ) {
      const i = t.shift();
      if (n === i) return !0;
      t.push(
        ...i.children,
        ...(i.shadowRoot ? i.shadowRoot.children : []),
        ...(i.assignedElements ? i.assignedElements() : [])
      );
    }
  }
  function Qp(n, e) {
    const t = be();
    let i = e.contains(n);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(n)), i || (i = Jp(n, e))),
      i
    );
  }
  function qs(n) {
    try {
      console.warn(n);
      return;
    } catch {}
  }
  function $t(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...(Array.isArray(e) ? e : ji(e))), t;
  }
  function Gs(n) {
    const e = be(),
      t = Ge(),
      i = n.getBoundingClientRect(),
      r = t.body,
      s = n.clientTop || r.clientTop || 0,
      a = n.clientLeft || r.clientLeft || 0,
      o = n === e ? e.scrollY : n.scrollTop,
      l = n === e ? e.scrollX : n.scrollLeft;
    return { top: i.top + o - s, left: i.left + l - a };
  }
  function eh(n, e) {
    const t = [];
    for (; n.previousElementSibling; ) {
      const i = n.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function th(n, e) {
    const t = [];
    for (; n.nextElementSibling; ) {
      const i = n.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function Xi(n, e) {
    return be().getComputedStyle(n, null).getPropertyValue(e);
  }
  function jn(n) {
    let e = n,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Sr(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function Xn(n, e) {
    function t(i) {
      i.target === n &&
        (e.call(n, i), n.removeEventListener("transitionend", t));
    }
    e && n.addEventListener("transitionend", t);
  }
  function Fo(n, e, t) {
    const i = be();
    return (
      n[e === "width" ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        i
          .getComputedStyle(n, null)
          .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
      ) +
      parseFloat(
        i
          .getComputedStyle(n, null)
          .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
      )
    );
  }
  function se(n) {
    return (Array.isArray(n) ? n : [n]).filter((e) => !!e);
  }
  function js(n) {
    return (e) =>
      Math.abs(e) > 0 &&
      n.browser &&
      n.browser.need3dFix &&
      Math.abs(e) % 90 === 0
        ? e + 0.001
        : e;
  }
  let Bo;
  function ih() {
    const n = be(),
      e = Ge();
    return {
      smoothScroll:
        e.documentElement &&
        e.documentElement.style &&
        "scrollBehavior" in e.documentElement.style,
      touch: !!(
        "ontouchstart" in n ||
        (n.DocumentTouch && e instanceof n.DocumentTouch)
      ),
    };
  }
  function Ou() {
    return Bo || (Bo = ih()), Bo;
  }
  let $o;
  function rh(n) {
    let { userAgent: e } = n === void 0 ? {} : n;
    const t = Ou(),
      i = be(),
      r = i.navigator.platform,
      s = e || i.navigator.userAgent,
      a = { ios: !1, android: !1 },
      o = i.screen.width,
      l = i.screen.height,
      c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = s.match(/(iPad).*OS\s([\d_]+)/);
    const h = s.match(/(iPod)(.*OS\s([\d_]+))?/),
      m = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      p = r === "Win32";
    let d = r === "MacIntel";
    const f = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !u &&
        d &&
        t.touch &&
        f.indexOf(`${o}x${l}`) >= 0 &&
        ((u = s.match(/(Version)\/([\d.]+)/)),
        u || (u = [0, 1, "13_0_0"]),
        (d = !1)),
      c && !p && ((a.os = "android"), (a.android = !0)),
      (u || m || h) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function Iu(n) {
    return n === void 0 && (n = {}), $o || ($o = rh(n)), $o;
  }
  let Yo;
  function nh() {
    const n = be(),
      e = Iu();
    let t = !1;
    function i() {
      const o = n.navigator.userAgent.toLowerCase();
      return (
        o.indexOf("safari") >= 0 &&
        o.indexOf("chrome") < 0 &&
        o.indexOf("android") < 0
      );
    }
    if (i()) {
      const o = String(n.navigator.userAgent);
      if (o.includes("Version/")) {
        const [l, c] = o
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((u) => Number(u));
        t = l < 16 || (l === 16 && c < 2);
      }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        n.navigator.userAgent
      ),
      s = i(),
      a = s || (r && e.ios);
    return {
      isSafari: t || s,
      needPerspectiveFix: t,
      need3dFix: a,
      isWebView: r,
    };
  }
  function Lu() {
    return Yo || (Yo = nh()), Yo;
  }
  function sh(n) {
    let { swiper: e, on: t, emit: i } = n;
    const r = be();
    let s = null,
      a = null;
    const o = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
      },
      l = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((s = new ResizeObserver((h) => {
            a = r.requestAnimationFrame(() => {
              const { width: m, height: p } = e;
              let d = m,
                f = p;
              h.forEach((w) => {
                let { contentBoxSize: b, contentRect: v, target: g } = w;
                (g && g !== e.el) ||
                  ((d = v ? v.width : (b[0] || b).inlineSize),
                  (f = v ? v.height : (b[0] || b).blockSize));
              }),
                (d !== m || f !== p) && o();
            });
          })),
          s.observe(e.el));
      },
      c = () => {
        a && r.cancelAnimationFrame(a),
          s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
      },
      u = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
        l();
        return;
      }
      r.addEventListener("resize", o),
        r.addEventListener("orientationchange", u);
    }),
      t("destroy", () => {
        c(),
          r.removeEventListener("resize", o),
          r.removeEventListener("orientationchange", u);
      });
  }
  function ah(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = [],
      a = be(),
      o = function (u, h) {
        h === void 0 && (h = {});
        const m = a.MutationObserver || a.WebkitMutationObserver,
          p = new m((d) => {
            if (e.__preventObserver__) return;
            if (d.length === 1) {
              r("observerUpdate", d[0]);
              return;
            }
            const f = function () {
              r("observerUpdate", d[0]);
            };
            a.requestAnimationFrame
              ? a.requestAnimationFrame(f)
              : a.setTimeout(f, 0);
          });
        p.observe(u, {
          attributes: typeof h.attributes > "u" ? !0 : h.attributes,
          childList:
            e.isElement || (typeof h.childList > "u" ? !0 : h).childList,
          characterData: typeof h.characterData > "u" ? !0 : h.characterData,
        }),
          s.push(p);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const u = Sr(e.hostEl);
            for (let h = 0; h < u.length; h += 1) o(u[h]);
          }
          o(e.hostEl, { childList: e.params.observeSlideChildren }),
            o(e.wrapperEl, { attributes: !1 });
        }
      },
      c = () => {
        s.forEach((u) => {
          u.disconnect();
        }),
          s.splice(0, s.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", l),
      i("destroy", c);
  }
  var oh = {
    on(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const r = t ? "unshift" : "push";
      return (
        n.split(" ").forEach((s) => {
          i.eventsListeners[s] || (i.eventsListeners[s] = []),
            i.eventsListeners[s][r](e);
        }),
        i
      );
    },
    once(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      function r() {
        i.off(n, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var s = arguments.length, a = new Array(s), o = 0; o < s; o++)
          a[o] = arguments[o];
        e.apply(i, a);
      }
      return (r.__emitterProxy = e), i.on(n, r, t);
    },
    onAny(n, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof n != "function") return t;
      const i = e ? "unshift" : "push";
      return (
        t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t
      );
    },
    offAny(n) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(n);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(n, e) {
      const t = this;
      return (
        !t.eventsListeners ||
          t.destroyed ||
          !t.eventsListeners ||
          n.split(" ").forEach((i) => {
            typeof e > "u"
              ? (t.eventsListeners[i] = [])
              : t.eventsListeners[i] &&
                t.eventsListeners[i].forEach((r, s) => {
                  (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                    t.eventsListeners[i].splice(s, 1);
                });
          }),
        t
      );
    },
    emit() {
      const n = this;
      if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
      let e, t, i;
      for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++)
        s[a] = arguments[a];
      return (
        typeof s[0] == "string" || Array.isArray(s[0])
          ? ((e = s[0]), (t = s.slice(1, s.length)), (i = n))
          : ((e = s[0].events), (t = s[0].data), (i = s[0].context || n)),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
          n.eventsAnyListeners &&
            n.eventsAnyListeners.length &&
            n.eventsAnyListeners.forEach((c) => {
              c.apply(i, [l, ...t]);
            }),
            n.eventsListeners &&
              n.eventsListeners[l] &&
              n.eventsListeners[l].forEach((c) => {
                c.apply(i, t);
              });
        }),
        n
      );
    },
  };
  function lh() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null
      ? (e = n.params.width)
      : (e = i.clientWidth),
      typeof n.params.height < "u" && n.params.height !== null
        ? (t = n.params.height)
        : (t = i.clientHeight),
      !((e === 0 && n.isHorizontal()) || (t === 0 && n.isVertical())) &&
        ((e =
          e -
          parseInt(Xi(i, "padding-left") || 0, 10) -
          parseInt(Xi(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(Xi(i, "padding-top") || 0, 10) -
          parseInt(Xi(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(n, {
          width: e,
          height: t,
          size: n.isHorizontal() ? e : t,
        }));
  }
  function ch() {
    const n = this;
    function e(x, D) {
      return parseFloat(x.getPropertyValue(n.getDirectionLabel(D)) || 0);
    }
    const t = n.params,
      { wrapperEl: i, slidesEl: r, size: s, rtlTranslate: a, wrongRTL: o } = n,
      l = n.virtual && t.virtual.enabled,
      c = l ? n.virtual.slides.length : n.slides.length,
      u = Je(r, `.${n.params.slideClass}, swiper-slide`),
      h = l ? n.virtual.slides.length : u.length;
    let m = [];
    const p = [],
      d = [];
    let f = t.slidesOffsetBefore;
    typeof f == "function" && (f = t.slidesOffsetBefore.call(n));
    let w = t.slidesOffsetAfter;
    typeof w == "function" && (w = t.slidesOffsetAfter.call(n));
    const b = n.snapGrid.length,
      v = n.slidesGrid.length;
    let g = t.spaceBetween,
      y = -f,
      _ = 0,
      A = 0;
    if (typeof s > "u") return;
    typeof g == "string" && g.indexOf("%") >= 0
      ? (g = (parseFloat(g.replace("%", "")) / 100) * s)
      : typeof g == "string" && (g = parseFloat(g)),
      (n.virtualSize = -g),
      u.forEach((x) => {
        a ? (x.style.marginLeft = "") : (x.style.marginRight = ""),
          (x.style.marginBottom = ""),
          (x.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (Gn(i, "--swiper-centered-offset-before", ""),
        Gn(i, "--swiper-centered-offset-after", ""));
    const M = t.grid && t.grid.rows > 1 && n.grid;
    M ? n.grid.initSlides(u) : n.grid && n.grid.unsetSlides();
    let E;
    const k =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (x) => typeof t.breakpoints[x].slidesPerView < "u"
      ).length > 0;
    for (let x = 0; x < h; x += 1) {
      E = 0;
      let D;
      if (
        (u[x] && (D = u[x]),
        M && n.grid.updateSlide(x, D, u),
        !(u[x] && Xi(D, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          k && (u[x].style[n.getDirectionLabel("width")] = "");
          const S = getComputedStyle(D),
            T = D.style.transform,
            C = D.style.webkitTransform;
          if (
            (T && (D.style.transform = "none"),
            C && (D.style.webkitTransform = "none"),
            t.roundLengths)
          )
            E = n.isHorizontal() ? Fo(D, "width") : Fo(D, "height");
          else {
            const L = e(S, "width"),
              z = e(S, "padding-left"),
              O = e(S, "padding-right"),
              I = e(S, "margin-left"),
              N = e(S, "margin-right"),
              P = S.getPropertyValue("box-sizing");
            if (P && P === "border-box") E = L + I + N;
            else {
              const { clientWidth: H, offsetWidth: G } = D;
              E = L + z + O + I + N + (G - H);
            }
          }
          T && (D.style.transform = T),
            C && (D.style.webkitTransform = C),
            t.roundLengths && (E = Math.floor(E));
        } else
          (E = (s - (t.slidesPerView - 1) * g) / t.slidesPerView),
            t.roundLengths && (E = Math.floor(E)),
            u[x] && (u[x].style[n.getDirectionLabel("width")] = `${E}px`);
        u[x] && (u[x].swiperSlideSize = E),
          d.push(E),
          t.centeredSlides
            ? ((y = y + E / 2 + _ / 2 + g),
              _ === 0 && x !== 0 && (y = y - s / 2 - g),
              x === 0 && (y = y - s / 2 - g),
              Math.abs(y) < 1 / 1e3 && (y = 0),
              t.roundLengths && (y = Math.floor(y)),
              A % t.slidesPerGroup === 0 && m.push(y),
              p.push(y))
            : (t.roundLengths && (y = Math.floor(y)),
              (A - Math.min(n.params.slidesPerGroupSkip, A)) %
                n.params.slidesPerGroup ===
                0 && m.push(y),
              p.push(y),
              (y = y + E + g)),
          (n.virtualSize += E + g),
          (_ = E),
          (A += 1);
      }
    }
    if (
      ((n.virtualSize = Math.max(n.virtualSize, s) + w),
      a &&
        o &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${n.virtualSize + g}px`),
      t.setWrapperSize &&
        (i.style[n.getDirectionLabel("width")] = `${n.virtualSize + g}px`),
      M && n.grid.updateWrapperSize(E, m),
      !t.centeredSlides)
    ) {
      const x = [];
      for (let D = 0; D < m.length; D += 1) {
        let S = m[D];
        t.roundLengths && (S = Math.floor(S)),
          m[D] <= n.virtualSize - s && x.push(S);
      }
      (m = x),
        Math.floor(n.virtualSize - s) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(n.virtualSize - s);
    }
    if (l && t.loop) {
      const x = d[0] + g;
      if (t.slidesPerGroup > 1) {
        const D = Math.ceil(
            (n.virtual.slidesBefore + n.virtual.slidesAfter) / t.slidesPerGroup
          ),
          S = x * t.slidesPerGroup;
        for (let T = 0; T < D; T += 1) m.push(m[m.length - 1] + S);
      }
      for (
        let D = 0;
        D < n.virtual.slidesBefore + n.virtual.slidesAfter;
        D += 1
      )
        t.slidesPerGroup === 1 && m.push(m[m.length - 1] + x),
          p.push(p[p.length - 1] + x),
          (n.virtualSize += x);
    }
    if ((m.length === 0 && (m = [0]), g !== 0)) {
      const x =
        n.isHorizontal() && a
          ? "marginLeft"
          : n.getDirectionLabel("marginRight");
      u.filter((D, S) =>
        !t.cssMode || t.loop ? !0 : S !== u.length - 1
      ).forEach((D) => {
        D.style[x] = `${g}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let x = 0;
      d.forEach((S) => {
        x += S + (g || 0);
      }),
        (x -= g);
      const D = x > s ? x - s : 0;
      m = m.map((S) => (S <= 0 ? -f : S > D ? D + w : S));
    }
    if (t.centerInsufficientSlides) {
      let x = 0;
      d.forEach((S) => {
        x += S + (g || 0);
      }),
        (x -= g);
      const D = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (x + D < s) {
        const S = (s - x - D) / 2;
        m.forEach((T, C) => {
          m[C] = T - S;
        }),
          p.forEach((T, C) => {
            p[C] = T + S;
          });
      }
    }
    if (
      (Object.assign(n, {
        slides: u,
        snapGrid: m,
        slidesGrid: p,
        slidesSizesGrid: d,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      Gn(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        Gn(
          i,
          "--swiper-centered-offset-after",
          `${n.size / 2 - d[d.length - 1] / 2}px`
        );
      const x = -n.snapGrid[0],
        D = -n.slidesGrid[0];
      (n.snapGrid = n.snapGrid.map((S) => S + x)),
        (n.slidesGrid = n.slidesGrid.map((S) => S + D));
    }
    if (
      (h !== c && n.emit("slidesLengthChange"),
      m.length !== b &&
        (n.params.watchOverflow && n.checkOverflow(),
        n.emit("snapGridLengthChange")),
      p.length !== v && n.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && n.updateSlidesOffset(),
      n.emit("slidesUpdated"),
      !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const x = `${t.containerModifierClass}backface-hidden`,
        D = n.el.classList.contains(x);
      h <= t.maxBackfaceHiddenSlides
        ? D || n.el.classList.add(x)
        : D && n.el.classList.remove(x);
    }
  }
  function uh(n) {
    const e = this,
      t = [],
      i = e.virtual && e.params.virtual.enabled;
    let r = 0,
      s;
    typeof n == "number"
      ? e.setTransition(n)
      : n === !0 && e.setTransition(e.params.speed);
    const a = (o) => (i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o]);
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((o) => {
          t.push(o);
        });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const o = e.activeIndex + s;
          if (o > e.slides.length && !i) break;
          t.push(a(o));
        }
    else t.push(a(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
      if (typeof t[s] < "u") {
        const o = t[s].offsetHeight;
        r = o > r ? o : r;
      }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
  }
  function dh() {
    const n = this,
      e = n.slides,
      t = n.isElement
        ? n.isHorizontal()
          ? n.wrapperEl.offsetLeft
          : n.wrapperEl.offsetTop
        : 0;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset =
        (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
        t -
        n.cssOverflowAdjustment();
  }
  const Du = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function fh(n) {
    n === void 0 && (n = (this && this.translate) || 0);
    const e = this,
      t = e.params,
      { slides: i, rtlTranslate: r, snapGrid: s } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -n;
    r && (a = n), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
    let o = t.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0
      ? (o = (parseFloat(o.replace("%", "")) / 100) * e.size)
      : typeof o == "string" && (o = parseFloat(o));
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l];
      let u = c.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
      const h =
          (a + (t.centeredSlides ? e.minTranslate() : 0) - u) /
          (c.swiperSlideSize + o),
        m =
          (a - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
          (c.swiperSlideSize + o),
        p = -(a - u),
        d = p + e.slidesSizesGrid[l],
        f = p >= 0 && p <= e.size - e.slidesSizesGrid[l],
        w =
          (p >= 0 && p < e.size - 1) ||
          (d > 1 && d <= e.size) ||
          (p <= 0 && d >= e.size);
      w && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(l)),
        Du(c, w, t.slideVisibleClass),
        Du(c, f, t.slideFullyVisibleClass),
        (c.progress = r ? -h : h),
        (c.originalProgress = r ? -m : m);
    }
  }
  function ph(n) {
    const e = this;
    if (typeof n > "u") {
      const u = e.rtlTranslate ? -1 : 1;
      n = (e && e.translate && e.translate * u) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: s, isEnd: a, progressLoop: o } = e;
    const l = s,
      c = a;
    if (i === 0) (r = 0), (s = !0), (a = !0);
    else {
      r = (n - e.minTranslate()) / i;
      const u = Math.abs(n - e.minTranslate()) < 1,
        h = Math.abs(n - e.maxTranslate()) < 1;
      (s = u || r <= 0), (a = h || r >= 1), u && (r = 0), h && (r = 1);
    }
    if (t.loop) {
      const u = e.getSlideIndexByData(0),
        h = e.getSlideIndexByData(e.slides.length - 1),
        m = e.slidesGrid[u],
        p = e.slidesGrid[h],
        d = e.slidesGrid[e.slidesGrid.length - 1],
        f = Math.abs(n);
      f >= m ? (o = (f - m) / d) : (o = (f + d - p) / d), o > 1 && (o -= 1);
    }
    Object.assign(e, {
      progress: r,
      progressLoop: o,
      isBeginning: s,
      isEnd: a,
    }),
      (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
        e.updateSlidesProgress(n),
      s && !l && e.emit("reachBeginning toEdge"),
      a && !c && e.emit("reachEnd toEdge"),
      ((l && !s) || (c && !a)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  const Ho = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function hh() {
    const n = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = n,
      s = n.virtual && t.virtual.enabled,
      a = n.grid && t.grid && t.grid.rows > 1,
      o = (h) => Je(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
    let l, c, u;
    if (s)
      if (t.loop) {
        let h = r - n.virtual.slidesBefore;
        h < 0 && (h = n.virtual.slides.length + h),
          h >= n.virtual.slides.length && (h -= n.virtual.slides.length),
          (l = o(`[data-swiper-slide-index="${h}"]`));
      } else l = o(`[data-swiper-slide-index="${r}"]`);
    else
      a
        ? ((l = e.find((h) => h.column === r)),
          (u = e.find((h) => h.column === r + 1)),
          (c = e.find((h) => h.column === r - 1)))
        : (l = e[r]);
    l &&
      (a ||
        ((u = th(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u && (u = e[0]),
        (c = eh(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c === 0 && (c = e[e.length - 1]))),
      e.forEach((h) => {
        Ho(h, h === l, t.slideActiveClass),
          Ho(h, h === u, t.slideNextClass),
          Ho(h, h === c, t.slidePrevClass);
      }),
      n.emitSlidesClasses();
  }
  const Xs = (n, e) => {
      if (!n || n.destroyed || !n.params) return;
      const t = () =>
          n.isElement ? "swiper-slide" : `.${n.params.slideClass}`,
        i = e.closest(t());
      if (i) {
        let r = i.querySelector(`.${n.params.lazyPreloaderClass}`);
        !r &&
          n.isElement &&
          (i.shadowRoot
            ? (r = i.shadowRoot.querySelector(
                `.${n.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                i.shadowRoot &&
                  ((r = i.shadowRoot.querySelector(
                    `.${n.params.lazyPreloaderClass}`
                  )),
                  r && r.remove());
              })),
          r && r.remove();
      }
    },
    Wo = (n, e) => {
      if (!n.slides[e]) return;
      const t = n.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    Vo = (n) => {
      if (!n || n.destroyed || !n.params) return;
      let e = n.params.lazyPreloadPrevNext;
      const t = n.slides.length;
      if (!t || !e || e < 0) return;
      e = Math.min(e, t);
      const i =
          n.params.slidesPerView === "auto"
            ? n.slidesPerViewDynamic()
            : Math.ceil(n.params.slidesPerView),
        r = n.activeIndex;
      if (n.params.grid && n.params.grid.rows > 1) {
        const a = r,
          o = [a - e];
        o.push(...Array.from({ length: e }).map((l, c) => a + i + c)),
          n.slides.forEach((l, c) => {
            o.includes(l.column) && Wo(n, c);
          });
        return;
      }
      const s = r + i - 1;
      if (n.params.rewind || n.params.loop)
        for (let a = r - e; a <= s + e; a += 1) {
          const o = ((a % t) + t) % t;
          (o < r || o > s) && Wo(n, o);
        }
      else
        for (let a = Math.max(r - e, 0); a <= Math.min(s + e, t - 1); a += 1)
          a !== r && (a > s || a < r) && Wo(n, a);
    };
  function mh(n) {
    const { slidesGrid: e, params: t } = n,
      i = n.rtlTranslate ? n.translate : -n.translate;
    let r;
    for (let s = 0; s < e.length; s += 1)
      typeof e[s + 1] < "u"
        ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2
          ? (r = s)
          : i >= e[s] && i < e[s + 1] && (r = s + 1)
        : i >= e[s] && (r = s);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
  }
  function gh(n) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: i,
        params: r,
        activeIndex: s,
        realIndex: a,
        snapIndex: o,
      } = e;
    let l = n,
      c;
    const u = (p) => {
      let d = p - e.virtual.slidesBefore;
      return (
        d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        d
      );
    };
    if ((typeof l > "u" && (l = mh(e)), i.indexOf(t) >= 0)) c = i.indexOf(t);
    else {
      const p = Math.min(r.slidesPerGroupSkip, l);
      c = p + Math.floor((l - p) / r.slidesPerGroup);
    }
    if ((c >= i.length && (c = i.length - 1), l === s && !e.params.loop)) {
      c !== o && ((e.snapIndex = c), e.emit("snapIndexChange"));
      return;
    }
    if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = u(l);
      return;
    }
    const h = e.grid && r.grid && r.grid.rows > 1;
    let m;
    if (e.virtual && r.virtual.enabled && r.loop) m = u(l);
    else if (h) {
      const p = e.slides.find((f) => f.column === l);
      let d = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(d) && (d = Math.max(e.slides.indexOf(p), 0)),
        (m = Math.floor(d / r.grid.rows));
    } else if (e.slides[l]) {
      const p = e.slides[l].getAttribute("data-swiper-slide-index");
      p ? (m = parseInt(p, 10)) : (m = l);
    } else m = l;
    Object.assign(e, {
      previousSnapIndex: o,
      snapIndex: c,
      previousRealIndex: a,
      realIndex: m,
      previousIndex: s,
      activeIndex: l,
    }),
      e.initialized && Vo(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (a !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function wh(n, e) {
    const t = this,
      i = t.params;
    let r = n.closest(`.${i.slideClass}, swiper-slide`);
    !r &&
      t.isElement &&
      e &&
      e.length > 1 &&
      e.includes(n) &&
      [...e.slice(e.indexOf(n) + 1, e.length)].forEach((o) => {
        !r &&
          o.matches &&
          o.matches(`.${i.slideClass}, swiper-slide`) &&
          (r = o);
      });
    let s = !1,
      a;
    if (r) {
      for (let o = 0; o < t.slides.length; o += 1)
        if (t.slides[o] === r) {
          (s = !0), (a = o);
          break;
        }
    }
    if (r && s)
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              r.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = a);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    i.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  var vh = {
    updateSize: lh,
    updateSlides: ch,
    updateAutoHeight: uh,
    updateSlidesOffset: dh,
    updateSlidesProgress: fh,
    updateProgress: ph,
    updateSlidesClasses: hh,
    updateActiveIndex: gh,
    updateClickedSlide: wh,
  };
  function yh(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let a = No(s, n);
    return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
  }
  function bh(n, e) {
    const t = this,
      { rtlTranslate: i, params: r, wrapperEl: s, progress: a } = t;
    let o = 0,
      l = 0;
    const c = 0;
    t.isHorizontal() ? (o = i ? -n : n) : (l = n),
      r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
      (t.previousTranslate = t.translate),
      (t.translate = t.isHorizontal() ? o : l),
      r.cssMode
        ? (s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
            ? -o
            : -l)
        : r.virtualTranslate ||
          (t.isHorizontal()
            ? (o -= t.cssOverflowAdjustment())
            : (l -= t.cssOverflowAdjustment()),
          (s.style.transform = `translate3d(${o}px, ${l}px, ${c}px)`));
    let u;
    const h = t.maxTranslate() - t.minTranslate();
    h === 0 ? (u = 0) : (u = (n - t.minTranslate()) / h),
      u !== a && t.updateProgress(n),
      t.emit("setTranslate", t.translate, e);
  }
  function _h() {
    return -this.snapGrid[0];
  }
  function Sh() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Th(n, e, t, i, r) {
    n === void 0 && (n = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const s = this,
      { params: a, wrapperEl: o } = s;
    if (s.animating && a.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
      c = s.maxTranslate();
    let u;
    if (
      (i && n > l ? (u = l) : i && n < c ? (u = c) : (u = n),
      s.updateProgress(u),
      a.cssMode)
    ) {
      const h = s.isHorizontal();
      if (e === 0) o[h ? "scrollLeft" : "scrollTop"] = -u;
      else {
        if (!s.support.smoothScroll)
          return (
            Pu({ swiper: s, targetPosition: -u, side: h ? "left" : "top" }), !0
          );
        o.scrollTo({ [h ? "left" : "top"]: -u, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(u),
          t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
        : (s.setTransition(e),
          s.setTranslate(u),
          t &&
            (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
          s.animating ||
            ((s.animating = !0),
            s.onTranslateToWrapperTransitionEnd ||
              (s.onTranslateToWrapperTransitionEnd = function (m) {
                !s ||
                  s.destroyed ||
                  (m.target === this &&
                    (s.wrapperEl.removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    (s.animating = !1),
                    t && s.emit("transitionEnd")));
              }),
            s.wrapperEl.addEventListener(
              "transitionend",
              s.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var Eh = {
    getTranslate: yh,
    setTranslate: bh,
    minTranslate: _h,
    maxTranslate: Sh,
    translateTo: Th,
  };
  function xh(n, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${n}ms`),
      (t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : "")),
      t.emit("setTransition", n, e);
  }
  function zu(n) {
    let { swiper: e, runCallbacks: t, direction: i, step: r } = n;
    const { activeIndex: s, previousIndex: a } = e;
    let o = i;
    if (
      (o || (s > a ? (o = "next") : s < a ? (o = "prev") : (o = "reset")),
      e.emit(`transition${r}`),
      t && s !== a)
    ) {
      if (o === "reset") {
        e.emit(`slideResetTransition${r}`);
        return;
      }
      e.emit(`slideChangeTransition${r}`),
        o === "next"
          ? e.emit(`slideNextTransition${r}`)
          : e.emit(`slidePrevTransition${r}`);
    }
  }
  function Mh(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      zu({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
  }
  function Ah(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        zu({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
  }
  var kh = { setTransition: xh, transitionStart: Mh, transitionEnd: Ah };
  function Ch(n, e, t, i, r) {
    n === void 0 && (n = 0),
      t === void 0 && (t = !0),
      typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    let a = n;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: c,
      previousIndex: u,
      activeIndex: h,
      rtlTranslate: m,
      wrapperEl: p,
      enabled: d,
    } = s;
    if (
      (!d && !i && !r) ||
      s.destroyed ||
      (s.animating && o.preventInteractionOnTransition)
    )
      return !1;
    typeof e > "u" && (e = s.params.speed);
    const f = Math.min(s.params.slidesPerGroupSkip, a);
    let w = f + Math.floor((a - f) / s.params.slidesPerGroup);
    w >= l.length && (w = l.length - 1);
    const b = -l[w];
    if (o.normalizeSlideIndex)
      for (let M = 0; M < c.length; M += 1) {
        const E = -Math.floor(b * 100),
          k = Math.floor(c[M] * 100),
          x = Math.floor(c[M + 1] * 100);
        typeof c[M + 1] < "u"
          ? E >= k && E < x - (x - k) / 2
            ? (a = M)
            : E >= k && E < x && (a = M + 1)
          : E >= k && (a = M);
      }
    if (
      s.initialized &&
      a !== h &&
      ((!s.allowSlideNext &&
        (m
          ? b > s.translate && b > s.minTranslate()
          : b < s.translate && b < s.minTranslate())) ||
        (!s.allowSlidePrev &&
          b > s.translate &&
          b > s.maxTranslate() &&
          (h || 0) !== a))
    )
      return !1;
    a !== (u || 0) && t && s.emit("beforeSlideChangeStart"),
      s.updateProgress(b);
    let v;
    a > h ? (v = "next") : a < h ? (v = "prev") : (v = "reset");
    const g = s.virtual && s.params.virtual.enabled;
    if (!(g && r) && ((m && -b === s.translate) || (!m && b === s.translate)))
      return (
        s.updateActiveIndex(a),
        o.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        o.effect !== "slide" && s.setTranslate(b),
        v !== "reset" && (s.transitionStart(t, v), s.transitionEnd(t, v)),
        !1
      );
    if (o.cssMode) {
      const M = s.isHorizontal(),
        E = m ? b : -b;
      if (e === 0)
        g &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          g && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                p[M ? "scrollLeft" : "scrollTop"] = E;
              }))
            : (p[M ? "scrollLeft" : "scrollTop"] = E),
          g &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._immediateVirtual = !1);
            });
      else {
        if (!s.support.smoothScroll)
          return (
            Pu({ swiper: s, targetPosition: E, side: M ? "left" : "top" }), !0
          );
        p.scrollTo({ [M ? "left" : "top"]: E, behavior: "smooth" });
      }
      return !0;
    }
    const A = Lu().isSafari;
    return (
      g && !r && A && s.isElement && s.virtual.update(!1, !1, a),
      s.setTransition(e),
      s.setTranslate(b),
      s.updateActiveIndex(a),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, i),
      s.transitionStart(t, v),
      e === 0
        ? s.transitionEnd(t, v)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (E) {
              !s ||
                s.destroyed ||
                (E.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(t, v)));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function Ph(n, e, t, i) {
    n === void 0 && (n = 0),
      t === void 0 && (t = !0),
      typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    if (r.destroyed) return;
    typeof e > "u" && (e = r.params.speed);
    const s = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = n;
    if (r.params.loop)
      if (r.virtual && r.params.virtual.enabled) a = a + r.virtual.slidesBefore;
      else {
        let o;
        if (s) {
          const m = a * r.params.grid.rows;
          o = r.slides.find(
            (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
          ).column;
        } else o = r.getSlideIndexByData(a);
        const l = s
            ? Math.ceil(r.slides.length / r.params.grid.rows)
            : r.slides.length,
          { centeredSlides: c } = r.params;
        let u = r.params.slidesPerView;
        u === "auto"
          ? (u = r.slidesPerViewDynamic())
          : ((u = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
            c && u % 2 === 0 && (u = u + 1));
        let h = l - o < u;
        if (
          (c && (h = h || o < Math.ceil(u / 2)),
          i && c && r.params.slidesPerView !== "auto" && !s && (h = !1),
          h)
        ) {
          const m = c
            ? o < r.activeIndex
              ? "prev"
              : "next"
            : o - r.activeIndex - 1 < r.params.slidesPerView
            ? "next"
            : "prev";
          r.loopFix({
            direction: m,
            slideTo: !0,
            activeSlideIndex: m === "next" ? o + 1 : o - l + 1,
            slideRealIndex: m === "next" ? r.realIndex : void 0,
          });
        }
        if (s) {
          const m = a * r.params.grid.rows;
          a = r.slides.find(
            (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
          ).column;
        } else a = r.getSlideIndexByData(a);
      }
    return (
      requestAnimationFrame(() => {
        r.slideTo(a, e, t, i);
      }),
      r
    );
  }
  function Oh(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      { enabled: r, params: s, animating: a } = i;
    if (!r || i.destroyed) return i;
    typeof n > "u" && (n = i.params.speed);
    let o = s.slidesPerGroup;
    s.slidesPerView === "auto" &&
      s.slidesPerGroup === 1 &&
      s.slidesPerGroupAuto &&
      (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
      c = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (a && !c && s.loopPreventsSliding) return !1;
      if (
        (i.loopFix({ direction: "next" }),
        (i._clientLeft = i.wrapperEl.clientLeft),
        i.activeIndex === i.slides.length - 1 && s.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + l, n, e, t);
          }),
          !0
        );
    }
    return s.rewind && i.isEnd
      ? i.slideTo(0, n, e, t)
      : i.slideTo(i.activeIndex + l, n, e, t);
  }
  function Ih(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: r,
        snapGrid: s,
        slidesGrid: a,
        rtlTranslate: o,
        enabled: l,
        animating: c,
      } = i;
    if (!l || i.destroyed) return i;
    typeof n > "u" && (n = i.params.speed);
    const u = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (c && !u && r.loopPreventsSliding) return !1;
      i.loopFix({ direction: "prev" }),
        (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const h = o ? i.translate : -i.translate;
    function m(v) {
      return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v);
    }
    const p = m(h),
      d = s.map((v) => m(v)),
      f = r.freeMode && r.freeMode.enabled;
    let w = s[d.indexOf(p) - 1];
    if (typeof w > "u" && (r.cssMode || f)) {
      let v;
      s.forEach((g, y) => {
        p >= g && (v = y);
      }),
        typeof v < "u" && (w = f ? s[v] : s[v > 0 ? v - 1 : v]);
    }
    let b = 0;
    if (
      (typeof w < "u" &&
        ((b = a.indexOf(w)),
        b < 0 && (b = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((b = b - i.slidesPerViewDynamic("previous", !0) + 1),
          (b = Math.max(b, 0)))),
      r.rewind && i.isBeginning)
    ) {
      const v =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(v, n, e, t);
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(b, n, e, t);
        }),
        !0
      );
    return i.slideTo(b, n, e, t);
  }
  function Lh(n, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof n > "u" && (n = i.params.speed),
        i.slideTo(i.activeIndex, n, e, t)
      );
  }
  function Dh(n, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof n > "u" && (n = r.params.speed);
    let s = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, s),
      o = a + Math.floor((s - a) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const c = r.snapGrid[o],
        u = r.snapGrid[o + 1];
      l - c > (u - c) * i && (s += r.params.slidesPerGroup);
    } else {
      const c = r.snapGrid[o - 1],
        u = r.snapGrid[o];
      l - c <= (u - c) * i && (s -= r.params.slidesPerGroup);
    }
    return (
      (s = Math.max(s, 0)),
      (s = Math.min(s, r.slidesGrid.length - 1)),
      r.slideTo(s, n, e, t)
    );
  }
  function zh() {
    const n = this;
    if (n.destroyed) return;
    const { params: e, slidesEl: t } = n,
      i =
        e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let r = n.clickedIndex,
      s;
    const a = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (n.animating) return;
      (s = parseInt(
        n.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        e.centeredSlides
          ? r < n.loopedSlides - i / 2 ||
            r > n.slides.length - n.loopedSlides + i / 2
            ? (n.loopFix(),
              (r = n.getSlideIndex(
                Je(t, `${a}[data-swiper-slide-index="${s}"]`)[0]
              )),
              br(() => {
                n.slideTo(r);
              }))
            : n.slideTo(r)
          : r > n.slides.length - i
          ? (n.loopFix(),
            (r = n.getSlideIndex(
              Je(t, `${a}[data-swiper-slide-index="${s}"]`)[0]
            )),
            br(() => {
              n.slideTo(r);
            }))
          : n.slideTo(r);
    } else n.slideTo(r);
  }
  var Rh = {
    slideTo: Ch,
    slideToLoop: Ph,
    slideNext: Oh,
    slidePrev: Ih,
    slideReset: Lh,
    slideToClosest: Dh,
    slideToClickedSlide: zh,
  };
  function Nh(n) {
    const e = this,
      { params: t, slidesEl: i } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    const r = () => {
        Je(i, `.${t.slideClass}, swiper-slide`).forEach((h, m) => {
          h.setAttribute("data-swiper-slide-index", m);
        });
      },
      s = e.grid && t.grid && t.grid.rows > 1,
      a = t.slidesPerGroup * (s ? t.grid.rows : 1),
      o = e.slides.length % a !== 0,
      l = s && e.slides.length % t.grid.rows !== 0,
      c = (u) => {
        for (let h = 0; h < u; h += 1) {
          const m = e.isElement
            ? $t("swiper-slide", [t.slideBlankClass])
            : $t("div", [t.slideClass, t.slideBlankClass]);
          e.slidesEl.append(m);
        }
      };
    if (o) {
      if (t.loopAddBlankSlides) {
        const u = a - (e.slides.length % a);
        c(u), e.recalcSlides(), e.updateSlides();
      } else
        qs(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else if (l) {
      if (t.loopAddBlankSlides) {
        const u = t.grid.rows - (e.slides.length % t.grid.rows);
        c(u), e.recalcSlides(), e.updateSlides();
      } else
        qs(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else r();
    e.loopFix({
      slideRealIndex: n,
      direction: t.centeredSlides ? void 0 : "next",
    });
  }
  function Fh(n) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: r,
      activeSlideIndex: s,
      byController: a,
      byMousewheel: o,
    } = n === void 0 ? {} : n;
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const {
        slides: c,
        allowSlidePrev: u,
        allowSlideNext: h,
        slidesEl: m,
        params: p,
      } = l,
      { centeredSlides: d } = p;
    if (
      ((l.allowSlidePrev = !0),
      (l.allowSlideNext = !0),
      l.virtual && p.virtual.enabled)
    ) {
      t &&
        (!p.centeredSlides && l.snapIndex === 0
          ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
          : p.centeredSlides && l.snapIndex < p.slidesPerView
          ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
          : l.snapIndex === l.snapGrid.length - 1 &&
            l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        (l.allowSlidePrev = u),
        (l.allowSlideNext = h),
        l.emit("loopFix");
      return;
    }
    let f = p.slidesPerView;
    f === "auto"
      ? (f = l.slidesPerViewDynamic())
      : ((f = Math.ceil(parseFloat(p.slidesPerView, 10))),
        d && f % 2 === 0 && (f = f + 1));
    const w = p.slidesPerGroupAuto ? f : p.slidesPerGroup;
    let b = w;
    b % w !== 0 && (b += w - (b % w)),
      (b += p.loopAdditionalSlides),
      (l.loopedSlides = b);
    const v = l.grid && p.grid && p.grid.rows > 1;
    c.length < f + b
      ? qs(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : v &&
        p.grid.fill === "row" &&
        qs(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const g = [],
      y = [];
    let _ = l.activeIndex;
    typeof s > "u"
      ? (s = l.getSlideIndex(
          c.find((T) => T.classList.contains(p.slideActiveClass))
        ))
      : (_ = s);
    const A = i === "next" || !i,
      M = i === "prev" || !i;
    let E = 0,
      k = 0;
    const x = v ? Math.ceil(c.length / p.grid.rows) : c.length,
      S = (v ? c[s].column : s) + (d && typeof r > "u" ? -f / 2 + 0.5 : 0);
    if (S < b) {
      E = Math.max(b - S, w);
      for (let T = 0; T < b - S; T += 1) {
        const C = T - Math.floor(T / x) * x;
        if (v) {
          const L = x - C - 1;
          for (let z = c.length - 1; z >= 0; z -= 1)
            c[z].column === L && g.push(z);
        } else g.push(x - C - 1);
      }
    } else if (S + f > x - b) {
      k = Math.max(S - (x - b * 2), w);
      for (let T = 0; T < k; T += 1) {
        const C = T - Math.floor(T / x) * x;
        v
          ? c.forEach((L, z) => {
              L.column === C && y.push(z);
            })
          : y.push(C);
      }
    }
    if (
      ((l.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        l.__preventObserver__ = !1;
      }),
      M &&
        g.forEach((T) => {
          (c[T].swiperLoopMoveDOM = !0),
            m.prepend(c[T]),
            (c[T].swiperLoopMoveDOM = !1);
        }),
      A &&
        y.forEach((T) => {
          (c[T].swiperLoopMoveDOM = !0),
            m.append(c[T]),
            (c[T].swiperLoopMoveDOM = !1);
        }),
      l.recalcSlides(),
      p.slidesPerView === "auto"
        ? l.updateSlides()
        : v &&
          ((g.length > 0 && M) || (y.length > 0 && A)) &&
          l.slides.forEach((T, C) => {
            l.grid.updateSlide(C, T, l.slides);
          }),
      p.watchSlidesProgress && l.updateSlidesOffset(),
      t)
    ) {
      if (g.length > 0 && M) {
        if (typeof e > "u") {
          const T = l.slidesGrid[_],
            L = l.slidesGrid[_ + E] - T;
          o
            ? l.setTranslate(l.translate - L)
            : (l.slideTo(_ + Math.ceil(E), 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - L),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - L)));
        } else if (r) {
          const T = v ? g.length / p.grid.rows : g.length;
          l.slideTo(l.activeIndex + T, 0, !1, !0),
            (l.touchEventsData.currentTranslate = l.translate);
        }
      } else if (y.length > 0 && A)
        if (typeof e > "u") {
          const T = l.slidesGrid[_],
            L = l.slidesGrid[_ - k] - T;
          o
            ? l.setTranslate(l.translate - L)
            : (l.slideTo(_ - k, 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - L),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - L)));
        } else {
          const T = v ? y.length / p.grid.rows : y.length;
          l.slideTo(l.activeIndex - T, 0, !1, !0);
        }
    }
    if (
      ((l.allowSlidePrev = u),
      (l.allowSlideNext = h),
      l.controller && l.controller.control && !a)
    ) {
      const T = {
        slideRealIndex: e,
        direction: i,
        setTranslate: r,
        activeSlideIndex: s,
        byController: !0,
      };
      Array.isArray(l.controller.control)
        ? l.controller.control.forEach((C) => {
            !C.destroyed &&
              C.params.loop &&
              C.loopFix({
                ...T,
                slideTo: C.params.slidesPerView === p.slidesPerView ? t : !1,
              });
          })
        : l.controller.control instanceof l.constructor &&
          l.controller.control.params.loop &&
          l.controller.control.loopFix({
            ...T,
            slideTo:
              l.controller.control.params.slidesPerView === p.slidesPerView
                ? t
                : !1,
          });
    }
    l.emit("loopFix");
  }
  function Bh() {
    const n = this,
      { params: e, slidesEl: t } = n;
    if (!e.loop || !t || (n.virtual && n.params.virtual.enabled)) return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach((r) => {
      const s =
        typeof r.swiperSlideIndex > "u"
          ? r.getAttribute("data-swiper-slide-index") * 1
          : r.swiperSlideIndex;
      i[s] = r;
    }),
      n.slides.forEach((r) => {
        r.removeAttribute("data-swiper-slide-index");
      }),
      i.forEach((r) => {
        t.append(r);
      }),
      n.recalcSlides(),
      n.slideTo(n.realIndex, 0);
  }
  var $h = { loopCreate: Nh, loopFix: Fh, loopDestroy: Bh };
  function Yh(n) {
    const e = this;
    if (
      !e.params.simulateTouch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode
    )
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
      (t.style.cursor = "move"),
      (t.style.cursor = n ? "grabbing" : "grab"),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        });
  }
  function Hh() {
    const n = this;
    (n.params.watchOverflow && n.isLocked) ||
      n.params.cssMode ||
      (n.isElement && (n.__preventObserver__ = !0),
      (n[
        n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      n.isElement &&
        requestAnimationFrame(() => {
          n.__preventObserver__ = !1;
        }));
  }
  var Wh = { setGrabCursor: Yh, unsetGrabCursor: Hh };
  function Vh(n, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === Ge() || i === be()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(n);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function Ru(n, e, t) {
    const i = be(),
      { params: r } = n,
      s = r.edgeSwipeDetection,
      a = r.edgeSwipeThreshold;
    return s && (t <= a || t >= i.innerWidth - a)
      ? s === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function qh(n) {
    const e = this,
      t = Ge();
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      Ru(e, i, i.targetTouches[0].pageX);
      return;
    }
    const { params: s, touches: a, enabled: o } = e;
    if (
      !o ||
      (!s.simulateTouch && i.pointerType === "mouse") ||
      (e.animating && s.preventInteractionOnTransition)
    )
      return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let l = i.target;
    if (
      (s.touchEventsTarget === "wrapper" && !Qp(l, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const c = !!s.noSwipingClass && s.noSwipingClass !== "",
      u = i.composedPath ? i.composedPath() : i.path;
    c && i.target && i.target.shadowRoot && u && (l = u[0]);
    const h = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      m = !!(i.target && i.target.shadowRoot);
    if (s.noSwiping && (m ? Vh(h, l) : l.closest(h))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const p = a.currentX,
      d = a.currentY;
    if (!Ru(e, i, p)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = p),
      (a.startY = d),
      (r.touchStartTime = Kt()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (r.allowThresholdMove = !1);
    let f = !0;
    l.matches(r.focusableElements) &&
      ((f = !1), l.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== l &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !l.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const w = f && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || w) &&
      !l.isContentEditable &&
      i.preventDefault(),
      s.freeMode &&
        s.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !s.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", i);
  }
  function Gh(n) {
    const e = Ge(),
      t = this,
      i = t.touchEventsData,
      { params: r, touches: s, rtlTranslate: a, enabled: o } = t;
    if (!o || (!r.simulateTouch && n.pointerType === "mouse")) return;
    let l = n;
    if (
      (l.originalEvent && (l = l.originalEvent),
      l.type === "pointermove" &&
        (i.touchId !== null || l.pointerId !== i.pointerId))
    )
      return;
    let c;
    if (l.type === "touchmove") {
      if (
        ((c = [...l.changedTouches].find((_) => _.identifier === i.touchId)),
        !c || c.identifier !== i.touchId)
      )
        return;
    } else c = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
      return;
    }
    const u = c.pageX,
      h = c.pageY;
    if (l.preventedByNestedSwiper) {
      (s.startX = u), (s.startY = h);
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(s, { startX: u, startY: h, currentX: u, currentY: h }),
          (i.touchStartTime = Kt()));
      return;
    }
    if (r.touchReleaseOnEdges && !r.loop) {
      if (t.isVertical()) {
        if (
          (h < s.startY && t.translate <= t.maxTranslate()) ||
          (h > s.startY && t.translate >= t.minTranslate())
        ) {
          (i.isTouched = !1), (i.isMoved = !1);
          return;
        }
      } else if (
        (u < s.startX && t.translate <= t.maxTranslate()) ||
        (u > s.startX && t.translate >= t.minTranslate())
      )
        return;
    }
    if (
      (e.activeElement &&
        e.activeElement.matches(i.focusableElements) &&
        e.activeElement !== l.target &&
        l.pointerType !== "mouse" &&
        e.activeElement.blur(),
      e.activeElement &&
        l.target === e.activeElement &&
        l.target.matches(i.focusableElements))
    ) {
      (i.isMoved = !0), (t.allowClick = !1);
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
      (s.previousX = s.currentX),
      (s.previousY = s.currentY),
      (s.currentX = u),
      (s.currentY = h);
    const m = s.currentX - s.startX,
      p = s.currentY - s.startY;
    if (t.params.threshold && Math.sqrt(m ** 2 + p ** 2) < t.params.threshold)
      return;
    if (typeof i.isScrolling > "u") {
      let _;
      (t.isHorizontal() && s.currentY === s.startY) ||
      (t.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : m * m + p * p >= 25 &&
          ((_ = (Math.atan2(Math.abs(p), Math.abs(m)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? _ > r.touchAngle
            : 90 - _ > r.touchAngle));
    }
    if (
      (i.isScrolling && t.emit("touchMoveOpposite", l),
      typeof i.startMoving > "u" &&
        (s.currentX !== s.startX || s.currentY !== s.startY) &&
        (i.startMoving = !0),
      i.isScrolling ||
        (l.type === "touchmove" && i.preventTouchMoveFromPointerMove))
    ) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving) return;
    (t.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let d = t.isHorizontal() ? m : p,
      f = t.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    r.oneWayMovement &&
      ((d = Math.abs(d) * (a ? 1 : -1)), (f = Math.abs(f) * (a ? 1 : -1))),
      (s.diff = d),
      (d *= r.touchRatio),
      a && ((d = -d), (f = -f));
    const w = t.touchesDirection;
    (t.swipeDirection = d > 0 ? "prev" : "next"),
      (t.touchesDirection = f > 0 ? "prev" : "next");
    const b = t.params.loop && !r.cssMode,
      v =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (b && v && t.loopFix({ direction: t.swipeDirection }),
        (i.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const _ = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(_);
      }
      (i.allowMomentumBounce = !1),
        r.grabCursor &&
          (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
          t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l);
    }
    if (
      (new Date().getTime(),
      r._loopSwapReset !== !1 &&
        i.isMoved &&
        i.allowThresholdMove &&
        w !== t.touchesDirection &&
        b &&
        v &&
        Math.abs(d) >= 1)
    ) {
      Object.assign(s, {
        startX: u,
        startY: h,
        currentX: u,
        currentY: h,
        startTranslate: i.currentTranslate,
      }),
        (i.loopSwapReset = !0),
        (i.startTranslate = i.currentTranslate);
      return;
    }
    t.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = d + i.startTranslate);
    let g = !0,
      y = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (y = 0),
      d > 0
        ? (b &&
            v &&
            i.allowThresholdMove &&
            i.currentTranslate >
              (r.centeredSlides
                ? t.minTranslate() -
                  t.slidesSizesGrid[t.activeIndex + 1] -
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.activeIndex + 1] +
                      t.params.spaceBetween
                    : 0) -
                  t.params.spaceBetween
                : t.minTranslate()) &&
            t.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > t.minTranslate() &&
            ((g = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + d) ** y)))
        : d < 0 &&
          (b &&
            v &&
            i.allowThresholdMove &&
            i.currentTranslate <
              (r.centeredSlides
                ? t.maxTranslate() +
                  t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                  t.params.spaceBetween +
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                      t.params.spaceBetween
                    : 0)
                : t.maxTranslate()) &&
            t.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                t.slides.length -
                (r.slidesPerView === "auto"
                  ? t.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          i.currentTranslate < t.maxTranslate() &&
            ((g = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - i.startTranslate - d) ** y))),
      g && (l.preventedByNestedSwiper = !0),
      !t.allowSlideNext &&
        t.swipeDirection === "next" &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        t.swipeDirection === "prev" &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        !t.allowSlideNext &&
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    )
      if (Math.abs(d) > r.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          (i.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (i.currentTranslate = i.startTranslate),
            (s.diff = t.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY);
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !r.followFinger ||
      r.cssMode ||
      (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
        r.watchSlidesProgress) &&
        (t.updateActiveIndex(), t.updateSlidesClasses()),
      r.freeMode &&
        r.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(i.currentTranslate),
      t.setTranslate(i.currentTranslate));
  }
  function jh(n) {
    const e = this,
      t = e.touchEventsData;
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((r = [...i.changedTouches].find((_) => _.identifier === t.touchId)),
        !r || r.identifier !== t.touchId)
      )
        return;
    } else {
      if (t.touchId !== null || i.pointerId !== t.pointerId) return;
      r = i;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        i.type
      ) &&
      !(
        ["pointercancel", "contextmenu"].includes(i.type) &&
        (e.browser.isSafari || e.browser.isWebView)
      )
    )
      return;
    (t.pointerId = null), (t.touchId = null);
    const {
      params: a,
      touches: o,
      rtlTranslate: l,
      slidesGrid: c,
      enabled: u,
    } = e;
    if (!u || (!a.simulateTouch && i.pointerType === "mouse")) return;
    if (
      (t.allowTouchCallbacks && e.emit("touchEnd", i),
      (t.allowTouchCallbacks = !1),
      !t.isTouched)
    ) {
      t.isMoved && a.grabCursor && e.setGrabCursor(!1),
        (t.isMoved = !1),
        (t.startMoving = !1);
      return;
    }
    a.grabCursor &&
      t.isMoved &&
      t.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const h = Kt(),
      m = h - t.touchStartTime;
    if (e.allowClick) {
      const _ = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((_ && _[0]) || i.target, _),
        e.emit("tap click", i),
        m < 300 &&
          h - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = Kt()),
      br(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !t.isTouched ||
        !t.isMoved ||
        !e.swipeDirection ||
        (o.diff === 0 && !t.loopSwapReset) ||
        (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
    ) {
      (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
      return;
    }
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    let p;
    if (
      (a.followFinger
        ? (p = l ? e.translate : -e.translate)
        : (p = -t.currentTranslate),
      a.cssMode)
    )
      return;
    if (a.freeMode && a.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: p });
      return;
    }
    const d = p >= -e.maxTranslate() && !e.params.loop;
    let f = 0,
      w = e.slidesSizesGrid[0];
    for (
      let _ = 0;
      _ < c.length;
      _ += _ < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const A = _ < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof c[_ + A] < "u"
        ? (d || (p >= c[_] && p < c[_ + A])) && ((f = _), (w = c[_ + A] - c[_]))
        : (d || p >= c[_]) &&
          ((f = _), (w = c[c.length - 1] - c[c.length - 2]));
    }
    let b = null,
      v = null;
    a.rewind &&
      (e.isBeginning
        ? (v =
            a.virtual && a.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (b = 0));
    const g = (p - c[f]) / w,
      y = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (m > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (g >= a.longSwipesRatio
          ? e.slideTo(a.rewind && e.isEnd ? b : f + y)
          : e.slideTo(f)),
        e.swipeDirection === "prev" &&
          (g > 1 - a.longSwipesRatio
            ? e.slideTo(f + y)
            : v !== null && g < 0 && Math.abs(g) > a.longSwipesRatio
            ? e.slideTo(v)
            : e.slideTo(f));
    } else {
      if (!a.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(f + y)
          : e.slideTo(f)
        : (e.swipeDirection === "next" && e.slideTo(b !== null ? b : f + y),
          e.swipeDirection === "prev" && e.slideTo(v !== null ? v : f));
    }
  }
  function Nu() {
    const n = this,
      { params: e, el: t } = n;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && n.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = n,
      a = n.virtual && n.params.virtual.enabled;
    (n.allowSlideNext = !0),
      (n.allowSlidePrev = !0),
      n.updateSize(),
      n.updateSlides(),
      n.updateSlidesClasses();
    const o = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    n.isEnd &&
    !n.isBeginning &&
    !n.params.centeredSlides &&
    !o
      ? n.slideTo(n.slides.length - 1, 0, !1, !0)
      : n.params.loop && !a
      ? n.slideToLoop(n.realIndex, 0, !1, !0)
      : n.slideTo(n.activeIndex, 0, !1, !0),
      n.autoplay &&
        n.autoplay.running &&
        n.autoplay.paused &&
        (clearTimeout(n.autoplay.resizeTimeout),
        (n.autoplay.resizeTimeout = setTimeout(() => {
          n.autoplay &&
            n.autoplay.running &&
            n.autoplay.paused &&
            n.autoplay.resume();
        }, 500))),
      (n.allowSlidePrev = r),
      (n.allowSlideNext = i),
      n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow();
  }
  function Xh(n) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && n.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (n.stopPropagation(), n.stopImmediatePropagation())));
  }
  function Uh() {
    const n = this,
      { wrapperEl: e, rtlTranslate: t, enabled: i } = n;
    if (!i) return;
    (n.previousTranslate = n.translate),
      n.isHorizontal()
        ? (n.translate = -e.scrollLeft)
        : (n.translate = -e.scrollTop),
      n.translate === 0 && (n.translate = 0),
      n.updateActiveIndex(),
      n.updateSlidesClasses();
    let r;
    const s = n.maxTranslate() - n.minTranslate();
    s === 0 ? (r = 0) : (r = (n.translate - n.minTranslate()) / s),
      r !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
      n.emit("setTranslate", n.translate, !1);
  }
  function Zh(n) {
    const e = this;
    Xs(e, n.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Kh() {
    const n = this;
    n.documentTouchHandlerProceeded ||
      ((n.documentTouchHandlerProceeded = !0),
      n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"));
  }
  const Fu = (n, e) => {
    const t = Ge(),
      { params: i, el: r, wrapperEl: s, device: a } = n,
      o = !!i.nested,
      l = e === "on" ? "addEventListener" : "removeEventListener",
      c = e;
    !r ||
      typeof r == "string" ||
      (t[l]("touchstart", n.onDocumentTouchStart, { passive: !1, capture: o }),
      r[l]("touchstart", n.onTouchStart, { passive: !1 }),
      r[l]("pointerdown", n.onTouchStart, { passive: !1 }),
      t[l]("touchmove", n.onTouchMove, { passive: !1, capture: o }),
      t[l]("pointermove", n.onTouchMove, { passive: !1, capture: o }),
      t[l]("touchend", n.onTouchEnd, { passive: !0 }),
      t[l]("pointerup", n.onTouchEnd, { passive: !0 }),
      t[l]("pointercancel", n.onTouchEnd, { passive: !0 }),
      t[l]("touchcancel", n.onTouchEnd, { passive: !0 }),
      t[l]("pointerout", n.onTouchEnd, { passive: !0 }),
      t[l]("pointerleave", n.onTouchEnd, { passive: !0 }),
      t[l]("contextmenu", n.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[l]("click", n.onClick, !0),
      i.cssMode && s[l]("scroll", n.onScroll),
      i.updateOnWindowResize
        ? n[c](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Nu,
            !0
          )
        : n[c]("observerUpdate", Nu, !0),
      r[l]("load", n.onLoad, { capture: !0 }));
  };
  function Jh() {
    const n = this,
      { params: e } = n;
    (n.onTouchStart = qh.bind(n)),
      (n.onTouchMove = Gh.bind(n)),
      (n.onTouchEnd = jh.bind(n)),
      (n.onDocumentTouchStart = Kh.bind(n)),
      e.cssMode && (n.onScroll = Uh.bind(n)),
      (n.onClick = Xh.bind(n)),
      (n.onLoad = Zh.bind(n)),
      Fu(n, "on");
  }
  function Qh() {
    Fu(this, "off");
  }
  var em = { attachEvents: Jh, detachEvents: Qh };
  const Bu = (n, e) => n.grid && e.grid && e.grid.rows > 1;
  function tm() {
    const n = this,
      { realIndex: e, initialized: t, params: i, el: r } = n,
      s = i.breakpoints;
    if (!s || (s && Object.keys(s).length === 0)) return;
    const a = Ge(),
      o =
        i.breakpointsBase === "window" || !i.breakpointsBase
          ? i.breakpointsBase
          : "container",
      l =
        ["window", "container"].includes(i.breakpointsBase) ||
        !i.breakpointsBase
          ? n.el
          : a.querySelector(i.breakpointsBase),
      c = n.getBreakpoint(s, o, l);
    if (!c || n.currentBreakpoint === c) return;
    const h = (c in s ? s[c] : void 0) || n.originalParams,
      m = Bu(n, i),
      p = Bu(n, h),
      d = n.params.grabCursor,
      f = h.grabCursor,
      w = i.enabled;
    m && !p
      ? (r.classList.remove(
          `${i.containerModifierClass}grid`,
          `${i.containerModifierClass}grid-column`
        ),
        n.emitContainerClasses())
      : !m &&
        p &&
        (r.classList.add(`${i.containerModifierClass}grid`),
        ((h.grid.fill && h.grid.fill === "column") ||
          (!h.grid.fill && i.grid.fill === "column")) &&
          r.classList.add(`${i.containerModifierClass}grid-column`),
        n.emitContainerClasses()),
      d && !f ? n.unsetGrabCursor() : !d && f && n.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((A) => {
        if (typeof h[A] > "u") return;
        const M = i[A] && i[A].enabled,
          E = h[A] && h[A].enabled;
        M && !E && n[A].disable(), !M && E && n[A].enable();
      });
    const b = h.direction && h.direction !== i.direction,
      v = i.loop && (h.slidesPerView !== i.slidesPerView || b),
      g = i.loop;
    b && t && n.changeDirection(), Bt(n.params, h);
    const y = n.params.enabled,
      _ = n.params.loop;
    Object.assign(n, {
      allowTouchMove: n.params.allowTouchMove,
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
    }),
      w && !y ? n.disable() : !w && y && n.enable(),
      (n.currentBreakpoint = c),
      n.emit("_beforeBreakpoint", h),
      t &&
        (v
          ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides())
          : !g && _
          ? (n.loopCreate(e), n.updateSlides())
          : g && !_ && n.loopDestroy()),
      n.emit("breakpoint", h);
  }
  function im(n, e, t) {
    if ((e === void 0 && (e = "window"), !n || (e === "container" && !t)))
      return;
    let i = !1;
    const r = be(),
      s = e === "window" ? r.innerHeight : t.clientHeight,
      a = Object.keys(n).map((o) => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
          const l = parseFloat(o.substr(1));
          return { value: s * l, point: o };
        }
        return { value: o, point: o };
      });
    a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
      const { point: l, value: c } = a[o];
      e === "window"
        ? r.matchMedia(`(min-width: ${c}px)`).matches && (i = l)
        : c <= t.clientWidth && (i = l);
    }
    return i || "max";
  }
  var rm = { setBreakpoint: tm, getBreakpoint: im };
  function nm(n, e) {
    const t = [];
    return (
      n.forEach((i) => {
        typeof i == "object"
          ? Object.keys(i).forEach((r) => {
              i[r] && t.push(e + r);
            })
          : typeof i == "string" && t.push(e + i);
      }),
      t
    );
  }
  function sm() {
    const n = this,
      { classNames: e, params: t, rtl: i, el: r, device: s } = n,
      a = nm(
        [
          "initialized",
          t.direction,
          { "free-mode": n.params.freeMode && t.freeMode.enabled },
          { autoheight: t.autoHeight },
          { rtl: i },
          { grid: t.grid && t.grid.rows > 1 },
          {
            "grid-column":
              t.grid && t.grid.rows > 1 && t.grid.fill === "column",
          },
          { android: s.android },
          { ios: s.ios },
          { "css-mode": t.cssMode },
          { centered: t.cssMode && t.centeredSlides },
          { "watch-progress": t.watchSlidesProgress },
        ],
        t.containerModifierClass
      );
    e.push(...a), r.classList.add(...e), n.emitContainerClasses();
  }
  function am() {
    const n = this,
      { el: e, classNames: t } = n;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), n.emitContainerClasses());
  }
  var om = { addClasses: sm, removeClasses: am };
  function lm() {
    const n = this,
      { isLocked: e, params: t } = n,
      { slidesOffsetBefore: i } = t;
    if (i) {
      const r = n.slides.length - 1,
        s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
      n.isLocked = n.size > s;
    } else n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
      t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
      e && e !== n.isLocked && (n.isEnd = !1),
      e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
  }
  var cm = { checkOverflow: lm },
    $u = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function um(n, e) {
    return function (i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0],
        s = i[r];
      if (typeof s != "object" || s === null) {
        Bt(e, i);
        return;
      }
      if (
        (n[r] === !0 && (n[r] = { enabled: !0 }),
        r === "navigation" &&
          n[r] &&
          n[r].enabled &&
          !n[r].prevEl &&
          !n[r].nextEl &&
          (n[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 &&
          n[r] &&
          n[r].enabled &&
          !n[r].el &&
          (n[r].auto = !0),
        !(r in n && "enabled" in s))
      ) {
        Bt(e, i);
        return;
      }
      typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
        n[r] || (n[r] = { enabled: !1 }),
        Bt(e, i);
    };
  }
  const qo = {
      eventsEmitter: oh,
      update: vh,
      translate: Eh,
      transition: kh,
      slide: Rh,
      loop: $h,
      grabCursor: Wh,
      events: em,
      breakpoints: rm,
      checkOverflow: cm,
      classes: om,
    },
    Go = {};
  class Yt {
    constructor() {
      let e, t;
      for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
        r[s] = arguments[s];
      r.length === 1 &&
      r[0].constructor &&
      Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
        ? (t = r[0])
        : ([e, t] = r),
        t || (t = {}),
        (t = Bt({}, t)),
        e && !t.el && (t.el = e);
      const a = Ge();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const u = [];
        return (
          a.querySelectorAll(t.el).forEach((h) => {
            const m = Bt({}, t, { el: h });
            u.push(new Yt(m));
          }),
          u
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = Ou()),
        (o.device = Iu({ userAgent: t.userAgent })),
        (o.browser = Lu()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const l = {};
      o.modules.forEach((u) => {
        u({
          params: t,
          swiper: o,
          extendParams: um(t, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const c = Bt({}, $u, l);
      return (
        (o.params = Bt({}, c, Go, t)),
        (o.originalParams = Bt({}, o.params)),
        (o.passedParams = Bt({}, t)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((u) => {
            o.on(u, o.params.on[u]);
          }),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
          enabled: o.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return o.params.direction === "horizontal";
          },
          isVertical() {
            return o.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: o.params.allowSlideNext,
          allowSlidePrev: o.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: o.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: o.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this,
        r = Je(t, `.${i.slideClass}, swiper-slide`),
        s = jn(r[0]);
      return jn(e) - s;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.find(
          (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
        )
      );
    }
    recalcSlides() {
      const e = this,
        { slidesEl: t, params: i } = e;
      e.slides = Je(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(),
        a = (i.maxTranslate() - r) * e + r;
      i.translateTo(a, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (i) =>
            i.indexOf("swiper") === 0 ||
            i.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (i) =>
                i.indexOf("swiper-slide") === 0 ||
                i.indexOf(t.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const r = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const i = this,
        {
          params: r,
          slides: s,
          slidesGrid: a,
          slidesSizesGrid: o,
          size: l,
          activeIndex: c,
        } = i;
      let u = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let h = s[c] ? Math.ceil(s[c].swiperSlideSize) : 0,
          m;
        for (let p = c + 1; p < s.length; p += 1)
          s[p] &&
            !m &&
            ((h += Math.ceil(s[p].swiperSlideSize)),
            (u += 1),
            h > l && (m = !0));
        for (let p = c - 1; p >= 0; p -= 1)
          s[p] &&
            !m &&
            ((h += s[p].swiperSlideSize), (u += 1), h > l && (m = !0));
      } else if (e === "current")
        for (let h = c + 1; h < s.length; h += 1)
          (t ? a[h] + o[h] - a[c] < l : a[h] - a[c] < l) && (u += 1);
      else for (let h = c - 1; h >= 0; h -= 1) a[c] - a[h] < l && (u += 1);
      return u;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
          a.complete && Xs(e, a);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function r() {
        const a = e.rtlTranslate ? e.translate * -1 : e.translate,
          o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
        e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
        r(), i.autoHeight && e.updateAutoHeight();
      else {
        if (
          (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
          e.isEnd &&
          !i.centeredSlides
        ) {
          const a =
            e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          s = e.slideTo(a.length - 1, 0, !1, !0);
        } else s = e.slideTo(e.activeIndex, 0, !1, !0);
        s || r();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const i = this,
        r = i.params.direction;
      return (
        e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r ||
          (e !== "horizontal" && e !== "vertical") ||
          (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
          i.el.classList.add(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.forEach((s) => {
            e === "vertical" ? (s.style.width = "") : (s.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && e === "rtl") ||
        (!t.rtl && e === "ltr") ||
        ((t.rtl = e === "rtl"),
        (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if ((typeof i == "string" && (i = document.querySelector(i)), !i))
        return !1;
      (i.swiper = t),
        i.parentNode &&
          i.parentNode.host &&
          i.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const r = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a =
        i && i.shadowRoot && i.shadowRoot.querySelector
          ? i.shadowRoot.querySelector(r())
          : Je(i, r())[0];
      return (
        !a &&
          t.params.createElements &&
          ((a = $t("div", t.params.wrapperClass)),
          i.append(a),
          Je(i, `.${t.params.slideClass}`).forEach((o) => {
            a.append(o);
          })),
        Object.assign(t, {
          el: i,
          wrapperEl: a,
          slidesEl:
            t.isElement && !i.parentNode.host.slideSlots
              ? i.parentNode.host
              : a,
          hostEl: t.isElement ? i.parentNode.host : i,
          mounted: !0,
          rtl: i.dir.toLowerCase() === "rtl" || Xi(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || Xi(i, "direction") === "rtl"),
          wrongRTL: Xi(a, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
      const r = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach((s) => {
          s.complete
            ? Xs(t, s)
            : s.addEventListener("load", (a) => {
                Xs(t, a.target);
              });
        }),
        Vo(t),
        (t.initialized = !0),
        Vo(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const i = this,
        { params: r, el: s, wrapperEl: a, slides: o } = i;
      return (
        typeof i.params > "u" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            s && typeof s != "string" && s.removeAttribute("style"),
            a && a.removeAttribute("style"),
            o &&
              o.length &&
              o.forEach((l) => {
                l.classList.remove(
                  r.slideVisibleClass,
                  r.slideFullyVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  l.removeAttribute("style"),
                  l.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((l) => {
            i.off(l);
          }),
          e !== !1 &&
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Up(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Bt(Go, e);
    }
    static get extendedDefaults() {
      return Go;
    }
    static get defaults() {
      return $u;
    }
    static installModule(e) {
      Yt.prototype.__modules__ || (Yt.prototype.__modules__ = []);
      const t = Yt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Yt.installModule(t)), Yt)
        : (Yt.installModule(e), Yt);
    }
  }
  Object.keys(qo).forEach((n) => {
    Object.keys(qo[n]).forEach((e) => {
      Yt.prototype[e] = qo[n][e];
    });
  }),
    Yt.use([sh, ah]);
  function dm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    t({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    });
    let s;
    const a = Ge();
    e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    const o = a.createElement("div");
    function l(d, f) {
      const w = e.params.virtual;
      if (w.cache && e.virtual.cache[f]) return e.virtual.cache[f];
      let b;
      return (
        w.renderSlide
          ? ((b = w.renderSlide.call(e, d, f)),
            typeof b == "string" && ((o.innerHTML = b), (b = o.children[0])))
          : e.isElement
          ? (b = $t("swiper-slide"))
          : (b = $t("div", e.params.slideClass)),
        b.setAttribute("data-swiper-slide-index", f),
        w.renderSlide || (b.innerHTML = d),
        w.cache && (e.virtual.cache[f] = b),
        b
      );
    }
    function c(d, f, w) {
      const {
        slidesPerView: b,
        slidesPerGroup: v,
        centeredSlides: g,
        loop: y,
        initialSlide: _,
      } = e.params;
      if (f && !y && _ > 0) return;
      const { addSlidesBefore: A, addSlidesAfter: M } = e.params.virtual,
        { from: E, to: k, slides: x, slidesGrid: D, offset: S } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const T = typeof w > "u" ? e.activeIndex || 0 : w;
      let C;
      e.rtlTranslate ? (C = "right") : (C = e.isHorizontal() ? "left" : "top");
      let L, z;
      g
        ? ((L = Math.floor(b / 2) + v + M), (z = Math.floor(b / 2) + v + A))
        : ((L = b + (v - 1) + M), (z = (y ? b : v) + A));
      let O = T - z,
        I = T + L;
      y || ((O = Math.max(O, 0)), (I = Math.min(I, x.length - 1)));
      let N = (e.slidesGrid[O] || 0) - (e.slidesGrid[0] || 0);
      y && T >= z
        ? ((O -= z), g || (N += e.slidesGrid[0]))
        : y && T < z && ((O = -z), g && (N += e.slidesGrid[0])),
        Object.assign(e.virtual, {
          from: O,
          to: I,
          offset: N,
          slidesGrid: e.slidesGrid,
          slidesBefore: z,
          slidesAfter: L,
        });
      function P() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          r("virtualUpdate");
      }
      if (E === O && k === I && !d) {
        e.slidesGrid !== D &&
          N !== S &&
          e.slides.forEach((F) => {
            F.style[C] = `${N - Math.abs(e.cssOverflowAdjustment())}px`;
          }),
          e.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: N,
          from: O,
          to: I,
          slides: (function () {
            const $ = [];
            for (let j = O; j <= I; j += 1) $.push(x[j]);
            return $;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? P() : r("virtualUpdate");
        return;
      }
      const H = [],
        G = [],
        re = (F) => {
          let $ = F;
          return (
            F < 0 ? ($ = x.length + F) : $ >= x.length && ($ = $ - x.length), $
          );
        };
      if (d)
        e.slides
          .filter((F) => F.matches(`.${e.params.slideClass}, swiper-slide`))
          .forEach((F) => {
            F.remove();
          });
      else
        for (let F = E; F <= k; F += 1)
          if (F < O || F > I) {
            const $ = re(F);
            e.slides
              .filter((j) =>
                j.matches(
                  `.${e.params.slideClass}[data-swiper-slide-index="${$}"], swiper-slide[data-swiper-slide-index="${$}"]`
                )
              )
              .forEach((j) => {
                j.remove();
              });
          }
      const ue = y ? -x.length : 0,
        B = y ? x.length * 2 : x.length;
      for (let F = ue; F < B; F += 1)
        if (F >= O && F <= I) {
          const $ = re(F);
          typeof k > "u" || d
            ? G.push($)
            : (F > k && G.push($), F < E && H.push($));
        }
      if (
        (G.forEach((F) => {
          e.slidesEl.append(l(x[F], F));
        }),
        y)
      )
        for (let F = H.length - 1; F >= 0; F -= 1) {
          const $ = H[F];
          e.slidesEl.prepend(l(x[$], $));
        }
      else
        H.sort((F, $) => $ - F),
          H.forEach((F) => {
            e.slidesEl.prepend(l(x[F], F));
          });
      Je(e.slidesEl, ".swiper-slide, swiper-slide").forEach((F) => {
        F.style[C] = `${N - Math.abs(e.cssOverflowAdjustment())}px`;
      }),
        P();
    }
    function u(d) {
      if (typeof d == "object" && "length" in d)
        for (let f = 0; f < d.length; f += 1)
          d[f] && e.virtual.slides.push(d[f]);
      else e.virtual.slides.push(d);
      c(!0);
    }
    function h(d) {
      const f = e.activeIndex;
      let w = f + 1,
        b = 1;
      if (Array.isArray(d)) {
        for (let v = 0; v < d.length; v += 1)
          d[v] && e.virtual.slides.unshift(d[v]);
        (w = f + d.length), (b = d.length);
      } else e.virtual.slides.unshift(d);
      if (e.params.virtual.cache) {
        const v = e.virtual.cache,
          g = {};
        Object.keys(v).forEach((y) => {
          const _ = v[y],
            A = _.getAttribute("data-swiper-slide-index");
          A && _.setAttribute("data-swiper-slide-index", parseInt(A, 10) + b),
            (g[parseInt(y, 10) + b] = _);
        }),
          (e.virtual.cache = g);
      }
      c(!0), e.slideTo(w, 0);
    }
    function m(d) {
      if (typeof d > "u" || d === null) return;
      let f = e.activeIndex;
      if (Array.isArray(d))
        for (let w = d.length - 1; w >= 0; w -= 1)
          e.params.virtual.cache &&
            (delete e.virtual.cache[d[w]],
            Object.keys(e.virtual.cache).forEach((b) => {
              b > d &&
                ((e.virtual.cache[b - 1] = e.virtual.cache[b]),
                e.virtual.cache[b - 1].setAttribute(
                  "data-swiper-slide-index",
                  b - 1
                ),
                delete e.virtual.cache[b]);
            })),
            e.virtual.slides.splice(d[w], 1),
            d[w] < f && (f -= 1),
            (f = Math.max(f, 0));
      else
        e.params.virtual.cache &&
          (delete e.virtual.cache[d],
          Object.keys(e.virtual.cache).forEach((w) => {
            w > d &&
              ((e.virtual.cache[w - 1] = e.virtual.cache[w]),
              e.virtual.cache[w - 1].setAttribute(
                "data-swiper-slide-index",
                w - 1
              ),
              delete e.virtual.cache[w]);
          })),
          e.virtual.slides.splice(d, 1),
          d < f && (f -= 1),
          (f = Math.max(f, 0));
      c(!0), e.slideTo(f, 0);
    }
    function p() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        c(!0),
        e.slideTo(0, 0);
    }
    i("beforeInit", () => {
      if (!e.params.virtual.enabled) return;
      let d;
      if (typeof e.passedParams.virtual.slides > "u") {
        const f = [...e.slidesEl.children].filter((w) =>
          w.matches(`.${e.params.slideClass}, swiper-slide`)
        );
        f.length &&
          ((e.virtual.slides = [...f]),
          (d = !0),
          f.forEach((w, b) => {
            w.setAttribute("data-swiper-slide-index", b),
              (e.virtual.cache[b] = w),
              w.remove();
          }));
      }
      d || (e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        (e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0),
        c(!1, !0);
    }),
      i("setTranslate", () => {
        e.params.virtual.enabled &&
          (e.params.cssMode && !e._immediateVirtual
            ? (clearTimeout(s),
              (s = setTimeout(() => {
                c();
              }, 100)))
            : c());
      }),
      i("init update resize", () => {
        e.params.virtual.enabled &&
          e.params.cssMode &&
          Gn(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: u,
        prependSlide: h,
        removeSlide: m,
        removeAllSlides: p,
        update: c,
      });
  }
  function fm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = Ge(),
      a = be();
    (e.keyboard = { enabled: !1 }),
      t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
    function o(u) {
      if (!e.enabled) return;
      const { rtlTranslate: h } = e;
      let m = u;
      m.originalEvent && (m = m.originalEvent);
      const p = m.keyCode || m.charCode,
        d = e.params.keyboard.pageUpDown,
        f = d && p === 33,
        w = d && p === 34,
        b = p === 37,
        v = p === 39,
        g = p === 38,
        y = p === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && v) || (e.isVertical() && y) || w)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && b) || (e.isVertical() && g) || f))
      )
        return !1;
      if (
        !(m.shiftKey || m.altKey || m.ctrlKey || m.metaKey) &&
        !(
          s.activeElement &&
          s.activeElement.nodeName &&
          (s.activeElement.nodeName.toLowerCase() === "input" ||
            s.activeElement.nodeName.toLowerCase() === "textarea")
        )
      ) {
        if (e.params.keyboard.onlyInViewport && (f || w || b || v || g || y)) {
          let _ = !1;
          if (
            Sr(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
            Sr(e.el, `.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const A = e.el,
            M = A.clientWidth,
            E = A.clientHeight,
            k = a.innerWidth,
            x = a.innerHeight,
            D = Gs(A);
          h && (D.left -= A.scrollLeft);
          const S = [
            [D.left, D.top],
            [D.left + M, D.top],
            [D.left, D.top + E],
            [D.left + M, D.top + E],
          ];
          for (let T = 0; T < S.length; T += 1) {
            const C = S[T];
            if (C[0] >= 0 && C[0] <= k && C[1] >= 0 && C[1] <= x) {
              if (C[0] === 0 && C[1] === 0) continue;
              _ = !0;
            }
          }
          if (!_) return;
        }
        e.isHorizontal()
          ? ((f || w || b || v) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (((w || v) && !h) || ((f || b) && h)) && e.slideNext(),
            (((f || b) && !h) || ((w || v) && h)) && e.slidePrev())
          : ((f || w || g || y) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (w || y) && e.slideNext(),
            (f || g) && e.slidePrev()),
          r("keyPress", p);
      }
    }
    function l() {
      e.keyboard.enabled ||
        (s.addEventListener("keydown", o), (e.keyboard.enabled = !0));
    }
    function c() {
      e.keyboard.enabled &&
        (s.removeEventListener("keydown", o), (e.keyboard.enabled = !1));
    }
    i("init", () => {
      e.params.keyboard.enabled && l();
    }),
      i("destroy", () => {
        e.keyboard.enabled && c();
      }),
      Object.assign(e.keyboard, { enable: l, disable: c });
  }
  function pm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = be();
    t({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel",
      },
    }),
      (e.mousewheel = { enabled: !1 });
    let a,
      o = Kt(),
      l;
    const c = [];
    function u(g) {
      let M = 0,
        E = 0,
        k = 0,
        x = 0;
      return (
        "detail" in g && (E = g.detail),
        "wheelDelta" in g && (E = -g.wheelDelta / 120),
        "wheelDeltaY" in g && (E = -g.wheelDeltaY / 120),
        "wheelDeltaX" in g && (M = -g.wheelDeltaX / 120),
        "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((M = E), (E = 0)),
        (k = M * 10),
        (x = E * 10),
        "deltaY" in g && (x = g.deltaY),
        "deltaX" in g && (k = g.deltaX),
        g.shiftKey && !k && ((k = x), (x = 0)),
        (k || x) &&
          g.deltaMode &&
          (g.deltaMode === 1
            ? ((k *= 40), (x *= 40))
            : ((k *= 800), (x *= 800))),
        k && !M && (M = k < 1 ? -1 : 1),
        x && !E && (E = x < 1 ? -1 : 1),
        { spinX: M, spinY: E, pixelX: k, pixelY: x }
      );
    }
    function h() {
      e.enabled && (e.mouseEntered = !0);
    }
    function m() {
      e.enabled && (e.mouseEntered = !1);
    }
    function p(g) {
      return (e.params.mousewheel.thresholdDelta &&
        g.delta < e.params.mousewheel.thresholdDelta) ||
        (e.params.mousewheel.thresholdTime &&
          Kt() - o < e.params.mousewheel.thresholdTime)
        ? !1
        : g.delta >= 6 && Kt() - o < 60
        ? !0
        : (g.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), r("scroll", g.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), r("scroll", g.raw)),
          (o = new s.Date().getTime()),
          !1);
    }
    function d(g) {
      const y = e.params.mousewheel;
      if (g.direction < 0) {
        if (e.isEnd && !e.params.loop && y.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges) return !0;
      return !1;
    }
    function f(g) {
      let y = g,
        _ = !0;
      if (
        !e.enabled ||
        g.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
      )
        return;
      const A = e.params.mousewheel;
      e.params.cssMode && y.preventDefault();
      let M = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (M = document.querySelector(e.params.mousewheel.eventsTarget));
      const E = M && M.contains(y.target);
      if (!e.mouseEntered && !E && !A.releaseOnEdges) return !0;
      y.originalEvent && (y = y.originalEvent);
      let k = 0;
      const x = e.rtlTranslate ? -1 : 1,
        D = u(y);
      if (A.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(D.pixelX) > Math.abs(D.pixelY)) k = -D.pixelX * x;
          else return !0;
        else if (Math.abs(D.pixelY) > Math.abs(D.pixelX)) k = -D.pixelY;
        else return !0;
      else
        k = Math.abs(D.pixelX) > Math.abs(D.pixelY) ? -D.pixelX * x : -D.pixelY;
      if (k === 0) return !0;
      A.invert && (k = -k);
      let S = e.getTranslate() + k * A.sensitivity;
      if (
        (S >= e.minTranslate() && (S = e.minTranslate()),
        S <= e.maxTranslate() && (S = e.maxTranslate()),
        (_ = e.params.loop
          ? !0
          : !(S === e.minTranslate() || S === e.maxTranslate())),
        _ && e.params.nested && y.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const T = {
          time: Kt(),
          delta: Math.abs(k),
          direction: Math.sign(k),
          raw: g,
        };
        c.length >= 2 && c.shift();
        const C = c.length ? c[c.length - 1] : void 0;
        if (
          (c.push(T),
          C
            ? (T.direction !== C.direction ||
                T.delta > C.delta ||
                T.time > C.time + 150) &&
              p(T)
            : p(T),
          d(T))
        )
          return !0;
      } else {
        const T = { time: Kt(), delta: Math.abs(k), direction: Math.sign(k) },
          C =
            l &&
            T.time < l.time + 500 &&
            T.delta <= l.delta &&
            T.direction === l.direction;
        if (!C) {
          l = void 0;
          let L = e.getTranslate() + k * A.sensitivity;
          const z = e.isBeginning,
            O = e.isEnd;
          if (
            (L >= e.minTranslate() && (L = e.minTranslate()),
            L <= e.maxTranslate() && (L = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(L),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!z && e.isBeginning) || (!O && e.isEnd)) &&
              e.updateSlidesClasses(),
            e.params.loop &&
              e.loopFix({
                direction: T.direction < 0 ? "next" : "prev",
                byMousewheel: !0,
              }),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(a), (a = void 0), c.length >= 15 && c.shift();
            const I = c.length ? c[c.length - 1] : void 0,
              N = c[0];
            if (
              (c.push(T),
              I && (T.delta > I.delta || T.direction !== I.direction))
            )
              c.splice(0);
            else if (
              c.length >= 15 &&
              T.time - N.time < 500 &&
              N.delta - T.delta >= 1 &&
              T.delta <= 6
            ) {
              const P = k > 0 ? 0.8 : 0.2;
              (l = T),
                c.splice(0),
                (a = br(() => {
                  e.destroyed ||
                    !e.params ||
                    e.slideToClosest(e.params.speed, !0, void 0, P);
                }, 0));
            }
            a ||
              (a = br(() => {
                if (e.destroyed || !e.params) return;
                const P = 0.5;
                (l = T),
                  c.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, P);
              }, 500));
          }
          if (
            (C || r("scroll", y),
            e.params.autoplay &&
              e.params.autoplay.disableOnInteraction &&
              e.autoplay.stop(),
            A.releaseOnEdges &&
              (L === e.minTranslate() || L === e.maxTranslate()))
          )
            return !0;
        }
      }
      return y.preventDefault ? y.preventDefault() : (y.returnValue = !1), !1;
    }
    function w(g) {
      let y = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (y = document.querySelector(e.params.mousewheel.eventsTarget)),
        y[g]("mouseenter", h),
        y[g]("mouseleave", m),
        y[g]("wheel", f);
    }
    function b() {
      return e.params.cssMode
        ? (e.wrapperEl.removeEventListener("wheel", f), !0)
        : e.mousewheel.enabled
        ? !1
        : (w("addEventListener"), (e.mousewheel.enabled = !0), !0);
    }
    function v() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, f), !0)
        : e.mousewheel.enabled
        ? (w("removeEventListener"), (e.mousewheel.enabled = !1), !0)
        : !1;
    }
    i("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && v(),
        e.params.mousewheel.enabled && b();
    }),
      i("destroy", () => {
        e.params.cssMode && b(), e.mousewheel.enabled && v();
      }),
      Object.assign(e.mousewheel, { enable: b, disable: v });
  }
  function jo(n, e, t, i) {
    return (
      n.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let s = Je(n.el, `.${i[r]}`)[0];
            s || ((s = $t("div", i[r])), (s.className = i[r]), n.el.append(s)),
              (t[r] = s),
              (e[r] = s);
          }
        }),
      t
    );
  }
  function hm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    function s(d) {
      let f;
      return d &&
        typeof d == "string" &&
        e.isElement &&
        ((f = e.el.querySelector(d) || e.hostEl.querySelector(d)), f)
        ? f
        : (d &&
            (typeof d == "string" && (f = [...document.querySelectorAll(d)]),
            e.params.uniqueNavElements &&
            typeof d == "string" &&
            f &&
            f.length > 1 &&
            e.el.querySelectorAll(d).length === 1
              ? (f = e.el.querySelector(d))
              : f && f.length === 1 && (f = f[0])),
          d && !f ? d : f);
    }
    function a(d, f) {
      const w = e.params.navigation;
      (d = se(d)),
        d.forEach((b) => {
          b &&
            (b.classList[f ? "add" : "remove"](...w.disabledClass.split(" ")),
            b.tagName === "BUTTON" && (b.disabled = f),
            e.params.watchOverflow &&
              e.enabled &&
              b.classList[e.isLocked ? "add" : "remove"](w.lockClass));
        });
    }
    function o() {
      const { nextEl: d, prevEl: f } = e.navigation;
      if (e.params.loop) {
        a(f, !1), a(d, !1);
        return;
      }
      a(f, e.isBeginning && !e.params.rewind),
        a(d, e.isEnd && !e.params.rewind);
    }
    function l(d) {
      d.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function c(d) {
      d.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function u() {
      const d = e.params.navigation;
      if (
        ((e.params.navigation = jo(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(d.nextEl || d.prevEl))
      )
        return;
      let f = s(d.nextEl),
        w = s(d.prevEl);
      Object.assign(e.navigation, { nextEl: f, prevEl: w }),
        (f = se(f)),
        (w = se(w));
      const b = (v, g) => {
        v && v.addEventListener("click", g === "next" ? c : l),
          !e.enabled && v && v.classList.add(...d.lockClass.split(" "));
      };
      f.forEach((v) => b(v, "next")), w.forEach((v) => b(v, "prev"));
    }
    function h() {
      let { nextEl: d, prevEl: f } = e.navigation;
      (d = se(d)), (f = se(f));
      const w = (b, v) => {
        b.removeEventListener("click", v === "next" ? c : l),
          b.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      d.forEach((b) => w(b, "next")), f.forEach((b) => w(b, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? p() : (u(), o());
    }),
      i("toEdge fromEdge lock unlock", () => {
        o();
      }),
      i("destroy", () => {
        h();
      }),
      i("enable disable", () => {
        let { nextEl: d, prevEl: f } = e.navigation;
        if (((d = se(d)), (f = se(f)), e.enabled)) {
          o();
          return;
        }
        [...d, ...f]
          .filter((w) => !!w)
          .forEach((w) => w.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (d, f) => {
        let { nextEl: w, prevEl: b } = e.navigation;
        (w = se(w)), (b = se(b));
        const v = f.target;
        let g = b.includes(v) || w.includes(v);
        if (e.isElement && !g) {
          const y = f.path || (f.composedPath && f.composedPath());
          y && (g = y.find((_) => w.includes(_) || b.includes(_)));
        }
        if (e.params.navigation.hideOnClick && !g) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === v || e.pagination.el.contains(v))
          )
            return;
          let y;
          w.length
            ? (y = w[0].classList.contains(e.params.navigation.hiddenClass))
            : b.length &&
              (y = b[0].classList.contains(e.params.navigation.hiddenClass)),
            r(y === !0 ? "navigationShow" : "navigationHide"),
            [...w, ...b]
              .filter((_) => !!_)
              .forEach((_) =>
                _.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const m = () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          u(),
          o();
      },
      p = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          h();
      };
    Object.assign(e.navigation, {
      enable: m,
      disable: p,
      update: o,
      init: u,
      destroy: h,
    });
  }
  function Ai(n) {
    return (
      n === void 0 && (n = ""),
      `.${n
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function mm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = "swiper-pagination";
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (v) => v,
        formatFractionTotal: (v) => v,
        bulletClass: `${s}-bullet`,
        bulletActiveClass: `${s}-bullet-active`,
        modifierClass: `${s}-`,
        currentClass: `${s}-current`,
        totalClass: `${s}-total`,
        hiddenClass: `${s}-hidden`,
        progressbarFillClass: `${s}-progressbar-fill`,
        progressbarOppositeClass: `${s}-progressbar-opposite`,
        clickableClass: `${s}-clickable`,
        lockClass: `${s}-lock`,
        horizontalClass: `${s}-horizontal`,
        verticalClass: `${s}-vertical`,
        paginationDisabledClass: `${s}-disabled`,
      },
    }),
      (e.pagination = { el: null, bullets: [] });
    let a,
      o = 0;
    function l() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
      );
    }
    function c(v, g) {
      const { bulletActiveClass: y } = e.params.pagination;
      v &&
        ((v = v[`${g === "prev" ? "previous" : "next"}ElementSibling`]),
        v &&
          (v.classList.add(`${y}-${g}`),
          (v = v[`${g === "prev" ? "previous" : "next"}ElementSibling`]),
          v && v.classList.add(`${y}-${g}-${g}`)));
    }
    function u(v, g, y) {
      if (((v = v % y), (g = g % y), g === v + 1)) return "next";
      if (g === v - 1) return "previous";
    }
    function h(v) {
      const g = v.target.closest(Ai(e.params.pagination.bulletClass));
      if (!g) return;
      v.preventDefault();
      const y = jn(g) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === y) return;
        const _ = u(e.realIndex, y, e.slides.length);
        _ === "next"
          ? e.slideNext()
          : _ === "previous"
          ? e.slidePrev()
          : e.slideToLoop(y);
      } else e.slideTo(y);
    }
    function m() {
      const v = e.rtl,
        g = e.params.pagination;
      if (l()) return;
      let y = e.pagination.el;
      y = se(y);
      let _, A;
      const M =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        E = e.params.loop
          ? Math.ceil(M / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((A = e.previousRealIndex || 0),
            (_ =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex < "u"
          ? ((_ = e.snapIndex), (A = e.previousSnapIndex))
          : ((A = e.previousIndex || 0), (_ = e.activeIndex || 0)),
        g.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const k = e.pagination.bullets;
        let x, D, S;
        if (
          (g.dynamicBullets &&
            ((a = Fo(k[0], e.isHorizontal() ? "width" : "height")),
            y.forEach((T) => {
              T.style[e.isHorizontal() ? "width" : "height"] = `${
                a * (g.dynamicMainBullets + 4)
              }px`;
            }),
            g.dynamicMainBullets > 1 &&
              A !== void 0 &&
              ((o += _ - (A || 0)),
              o > g.dynamicMainBullets - 1
                ? (o = g.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (x = Math.max(_ - o, 0)),
            (D = x + (Math.min(k.length, g.dynamicMainBullets) - 1)),
            (S = (D + x) / 2)),
          k.forEach((T) => {
            const C = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((L) => `${g.bulletActiveClass}${L}`),
            ]
              .map((L) =>
                typeof L == "string" && L.includes(" ") ? L.split(" ") : L
              )
              .flat();
            T.classList.remove(...C);
          }),
          y.length > 1)
        )
          k.forEach((T) => {
            const C = jn(T);
            C === _
              ? T.classList.add(...g.bulletActiveClass.split(" "))
              : e.isElement && T.setAttribute("part", "bullet"),
              g.dynamicBullets &&
                (C >= x &&
                  C <= D &&
                  T.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),
                C === x && c(T, "prev"),
                C === D && c(T, "next"));
          });
        else {
          const T = k[_];
          if (
            (T && T.classList.add(...g.bulletActiveClass.split(" ")),
            e.isElement &&
              k.forEach((C, L) => {
                C.setAttribute("part", L === _ ? "bullet-active" : "bullet");
              }),
            g.dynamicBullets)
          ) {
            const C = k[x],
              L = k[D];
            for (let z = x; z <= D; z += 1)
              k[z] &&
                k[z].classList.add(...`${g.bulletActiveClass}-main`.split(" "));
            c(C, "prev"), c(L, "next");
          }
        }
        if (g.dynamicBullets) {
          const T = Math.min(k.length, g.dynamicMainBullets + 4),
            C = (a * T - a) / 2 - S * a,
            L = v ? "right" : "left";
          k.forEach((z) => {
            z.style[e.isHorizontal() ? L : "top"] = `${C}px`;
          });
        }
      }
      y.forEach((k, x) => {
        if (
          (g.type === "fraction" &&
            (k.querySelectorAll(Ai(g.currentClass)).forEach((D) => {
              D.textContent = g.formatFractionCurrent(_ + 1);
            }),
            k.querySelectorAll(Ai(g.totalClass)).forEach((D) => {
              D.textContent = g.formatFractionTotal(E);
            })),
          g.type === "progressbar")
        ) {
          let D;
          g.progressbarOpposite
            ? (D = e.isHorizontal() ? "vertical" : "horizontal")
            : (D = e.isHorizontal() ? "horizontal" : "vertical");
          const S = (_ + 1) / E;
          let T = 1,
            C = 1;
          D === "horizontal" ? (T = S) : (C = S),
            k.querySelectorAll(Ai(g.progressbarFillClass)).forEach((L) => {
              (L.style.transform = `translate3d(0,0,0) scaleX(${T}) scaleY(${C})`),
                (L.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        g.type === "custom" && g.renderCustom
          ? ((k.innerHTML = g.renderCustom(e, _ + 1, E)),
            x === 0 && r("paginationRender", k))
          : (x === 0 && r("paginationRender", k), r("paginationUpdate", k)),
          e.params.watchOverflow &&
            e.enabled &&
            k.classList[e.isLocked ? "add" : "remove"](g.lockClass);
      });
    }
    function p() {
      const v = e.params.pagination;
      if (l()) return;
      const g =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
      let y = e.pagination.el;
      y = se(y);
      let _ = "";
      if (v.type === "bullets") {
        let A = e.params.loop
          ? Math.ceil(g / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && A > g && (A = g);
        for (let M = 0; M < A; M += 1)
          v.renderBullet
            ? (_ += v.renderBullet.call(e, M, v.bulletClass))
            : (_ += `<${v.bulletElement} ${
                e.isElement ? 'part="bullet"' : ""
              } class="${v.bulletClass}"></${v.bulletElement}>`);
      }
      v.type === "fraction" &&
        (v.renderFraction
          ? (_ = v.renderFraction.call(e, v.currentClass, v.totalClass))
          : (_ = `<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`)),
        v.type === "progressbar" &&
          (v.renderProgressbar
            ? (_ = v.renderProgressbar.call(e, v.progressbarFillClass))
            : (_ = `<span class="${v.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        y.forEach((A) => {
          v.type !== "custom" && (A.innerHTML = _ || ""),
            v.type === "bullets" &&
              e.pagination.bullets.push(
                ...A.querySelectorAll(Ai(v.bulletClass))
              );
        }),
        v.type !== "custom" && r("paginationRender", y[0]);
    }
    function d() {
      e.params.pagination = jo(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const v = e.params.pagination;
      if (!v.el) return;
      let g;
      typeof v.el == "string" && e.isElement && (g = e.el.querySelector(v.el)),
        !g &&
          typeof v.el == "string" &&
          (g = [...document.querySelectorAll(v.el)]),
        g || (g = v.el),
        !(!g || g.length === 0) &&
          (e.params.uniqueNavElements &&
            typeof v.el == "string" &&
            Array.isArray(g) &&
            g.length > 1 &&
            ((g = [...e.el.querySelectorAll(v.el)]),
            g.length > 1 && (g = g.find((y) => Sr(y, ".swiper")[0] === e.el))),
          Array.isArray(g) && g.length === 1 && (g = g[0]),
          Object.assign(e.pagination, { el: g }),
          (g = se(g)),
          g.forEach((y) => {
            v.type === "bullets" &&
              v.clickable &&
              y.classList.add(...(v.clickableClass || "").split(" ")),
              y.classList.add(v.modifierClass + v.type),
              y.classList.add(
                e.isHorizontal() ? v.horizontalClass : v.verticalClass
              ),
              v.type === "bullets" &&
                v.dynamicBullets &&
                (y.classList.add(`${v.modifierClass}${v.type}-dynamic`),
                (o = 0),
                v.dynamicMainBullets < 1 && (v.dynamicMainBullets = 1)),
              v.type === "progressbar" &&
                v.progressbarOpposite &&
                y.classList.add(v.progressbarOppositeClass),
              v.clickable && y.addEventListener("click", h),
              e.enabled || y.classList.add(v.lockClass);
          }));
    }
    function f() {
      const v = e.params.pagination;
      if (l()) return;
      let g = e.pagination.el;
      g &&
        ((g = se(g)),
        g.forEach((y) => {
          y.classList.remove(v.hiddenClass),
            y.classList.remove(v.modifierClass + v.type),
            y.classList.remove(
              e.isHorizontal() ? v.horizontalClass : v.verticalClass
            ),
            v.clickable &&
              (y.classList.remove(...(v.clickableClass || "").split(" ")),
              y.removeEventListener("click", h));
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((y) =>
            y.classList.remove(...v.bulletActiveClass.split(" "))
          );
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const v = e.params.pagination;
      let { el: g } = e.pagination;
      (g = se(g)),
        g.forEach((y) => {
          y.classList.remove(v.horizontalClass, v.verticalClass),
            y.classList.add(
              e.isHorizontal() ? v.horizontalClass : v.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.pagination.enabled === !1 ? b() : (d(), p(), m());
      }),
      i("activeIndexChange", () => {
        typeof e.snapIndex > "u" && m();
      }),
      i("snapIndexChange", () => {
        m();
      }),
      i("snapGridLengthChange", () => {
        p(), m();
      }),
      i("destroy", () => {
        f();
      }),
      i("enable disable", () => {
        let { el: v } = e.pagination;
        v &&
          ((v = se(v)),
          v.forEach((g) =>
            g.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      i("lock unlock", () => {
        m();
      }),
      i("click", (v, g) => {
        const y = g.target,
          _ = se(e.pagination.el);
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          _ &&
          _.length > 0 &&
          !y.classList.contains(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && y === e.navigation.nextEl) ||
              (e.navigation.prevEl && y === e.navigation.prevEl))
          )
            return;
          const A = _[0].classList.contains(e.params.pagination.hiddenClass);
          r(A === !0 ? "paginationShow" : "paginationHide"),
            _.forEach((M) =>
              M.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const w = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: v } = e.pagination;
        v &&
          ((v = se(v)),
          v.forEach((g) =>
            g.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          d(),
          p(),
          m();
      },
      b = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: v } = e.pagination;
        v &&
          ((v = se(v)),
          v.forEach((g) =>
            g.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          f();
      };
    Object.assign(e.pagination, {
      enable: w,
      disable: b,
      render: p,
      update: m,
      init: d,
      destroy: f,
    });
  }
  function gm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = Ge();
    let a = !1,
      o = null,
      l = null,
      c,
      u,
      h,
      m;
    t({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical",
      },
    }),
      (e.scrollbar = { el: null, dragEl: null });
    function p() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: S, rtlTranslate: T } = e,
        { dragEl: C, el: L } = S,
        z = e.params.scrollbar,
        O = e.params.loop ? e.progressLoop : e.progress;
      let I = u,
        N = (h - u) * O;
      T
        ? ((N = -N), N > 0 ? ((I = u - N), (N = 0)) : -N + u > h && (I = h + N))
        : N < 0
        ? ((I = u + N), (N = 0))
        : N + u > h && (I = h - N),
        e.isHorizontal()
          ? ((C.style.transform = `translate3d(${N}px, 0, 0)`),
            (C.style.width = `${I}px`))
          : ((C.style.transform = `translate3d(0px, ${N}px, 0)`),
            (C.style.height = `${I}px`)),
        z.hide &&
          (clearTimeout(o),
          (L.style.opacity = 1),
          (o = setTimeout(() => {
            (L.style.opacity = 0), (L.style.transitionDuration = "400ms");
          }, 1e3)));
    }
    function d(S) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        (e.scrollbar.dragEl.style.transitionDuration = `${S}ms`);
    }
    function f() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: S } = e,
        { dragEl: T, el: C } = S;
      (T.style.width = ""),
        (T.style.height = ""),
        (h = e.isHorizontal() ? C.offsetWidth : C.offsetHeight),
        (m =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (u = h * m)
          : (u = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (T.style.width = `${u}px`)
          : (T.style.height = `${u}px`),
        m >= 1 ? (C.style.display = "none") : (C.style.display = ""),
        e.params.scrollbar.hide && (C.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          S.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function w(S) {
      return e.isHorizontal() ? S.clientX : S.clientY;
    }
    function b(S) {
      const { scrollbar: T, rtlTranslate: C } = e,
        { el: L } = T;
      let z;
      (z =
        (w(S) -
          Gs(L)[e.isHorizontal() ? "left" : "top"] -
          (c !== null ? c : u / 2)) /
        (h - u)),
        (z = Math.max(Math.min(z, 1), 0)),
        C && (z = 1 - z);
      const O = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * z;
      e.updateProgress(O),
        e.setTranslate(O),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function v(S) {
      const T = e.params.scrollbar,
        { scrollbar: C, wrapperEl: L } = e,
        { el: z, dragEl: O } = C;
      (a = !0),
        (c =
          S.target === O
            ? w(S) -
              S.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        S.preventDefault(),
        S.stopPropagation(),
        (L.style.transitionDuration = "100ms"),
        (O.style.transitionDuration = "100ms"),
        b(S),
        clearTimeout(l),
        (z.style.transitionDuration = "0ms"),
        T.hide && (z.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        r("scrollbarDragStart", S);
    }
    function g(S) {
      const { scrollbar: T, wrapperEl: C } = e,
        { el: L, dragEl: z } = T;
      a &&
        (S.preventDefault && S.cancelable
          ? S.preventDefault()
          : (S.returnValue = !1),
        b(S),
        (C.style.transitionDuration = "0ms"),
        (L.style.transitionDuration = "0ms"),
        (z.style.transitionDuration = "0ms"),
        r("scrollbarDragMove", S));
    }
    function y(S) {
      const T = e.params.scrollbar,
        { scrollbar: C, wrapperEl: L } = e,
        { el: z } = C;
      a &&
        ((a = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (L.style.transitionDuration = "")),
        T.hide &&
          (clearTimeout(l),
          (l = br(() => {
            (z.style.opacity = 0), (z.style.transitionDuration = "400ms");
          }, 1e3))),
        r("scrollbarDragEnd", S),
        T.snapOnRelease && e.slideToClosest());
    }
    function _(S) {
      const { scrollbar: T, params: C } = e,
        L = T.el;
      if (!L) return;
      const z = L,
        O = C.passiveListeners ? { passive: !1, capture: !1 } : !1,
        I = C.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!z) return;
      const N = S === "on" ? "addEventListener" : "removeEventListener";
      z[N]("pointerdown", v, O),
        s[N]("pointermove", g, O),
        s[N]("pointerup", y, I);
    }
    function A() {
      !e.params.scrollbar.el || !e.scrollbar.el || _("on");
    }
    function M() {
      !e.params.scrollbar.el || !e.scrollbar.el || _("off");
    }
    function E() {
      const { scrollbar: S, el: T } = e;
      e.params.scrollbar = jo(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const C = e.params.scrollbar;
      if (!C.el) return;
      let L;
      if (
        (typeof C.el == "string" &&
          e.isElement &&
          (L = e.el.querySelector(C.el)),
        !L && typeof C.el == "string")
      ) {
        if (((L = s.querySelectorAll(C.el)), !L.length)) return;
      } else L || (L = C.el);
      e.params.uniqueNavElements &&
        typeof C.el == "string" &&
        L.length > 1 &&
        T.querySelectorAll(C.el).length === 1 &&
        (L = T.querySelector(C.el)),
        L.length > 0 && (L = L[0]),
        L.classList.add(e.isHorizontal() ? C.horizontalClass : C.verticalClass);
      let z;
      L &&
        ((z = L.querySelector(Ai(e.params.scrollbar.dragClass))),
        z || ((z = $t("div", e.params.scrollbar.dragClass)), L.append(z))),
        Object.assign(S, { el: L, dragEl: z }),
        C.draggable && A(),
        L &&
          L.classList[e.enabled ? "remove" : "add"](
            ...ji(e.params.scrollbar.lockClass)
          );
    }
    function k() {
      const S = e.params.scrollbar,
        T = e.scrollbar.el;
      T &&
        T.classList.remove(
          ...ji(e.isHorizontal() ? S.horizontalClass : S.verticalClass)
        ),
        M();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const S = e.params.scrollbar;
      let { el: T } = e.scrollbar;
      (T = se(T)),
        T.forEach((C) => {
          C.classList.remove(S.horizontalClass, S.verticalClass),
            C.classList.add(
              e.isHorizontal() ? S.horizontalClass : S.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? D() : (E(), f(), p());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        f();
      }),
      i("setTranslate", () => {
        p();
      }),
      i("setTransition", (S, T) => {
        d(T);
      }),
      i("enable disable", () => {
        const { el: S } = e.scrollbar;
        S &&
          S.classList[e.enabled ? "remove" : "add"](
            ...ji(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        k();
      });
    const x = () => {
        e.el.classList.remove(...ji(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...ji(e.params.scrollbar.scrollbarDisabledClass)
            ),
          E(),
          f(),
          p();
      },
      D = () => {
        e.el.classList.add(...ji(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...ji(e.params.scrollbar.scrollbarDisabledClass)
            ),
          k();
      };
    Object.assign(e.scrollbar, {
      enable: x,
      disable: D,
      updateSize: f,
      setTranslate: p,
      init: E,
      destroy: k,
    });
  }
  function wm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ parallax: { enabled: !1 } });
    const r =
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      s = (l, c) => {
        const { rtl: u } = e,
          h = u ? -1 : 1,
          m = l.getAttribute("data-swiper-parallax") || "0";
        let p = l.getAttribute("data-swiper-parallax-x"),
          d = l.getAttribute("data-swiper-parallax-y");
        const f = l.getAttribute("data-swiper-parallax-scale"),
          w = l.getAttribute("data-swiper-parallax-opacity"),
          b = l.getAttribute("data-swiper-parallax-rotate");
        if (
          (p || d
            ? ((p = p || "0"), (d = d || "0"))
            : e.isHorizontal()
            ? ((p = m), (d = "0"))
            : ((d = m), (p = "0")),
          p.indexOf("%") >= 0
            ? (p = `${parseInt(p, 10) * c * h}%`)
            : (p = `${p * c * h}px`),
          d.indexOf("%") >= 0
            ? (d = `${parseInt(d, 10) * c}%`)
            : (d = `${d * c}px`),
          typeof w < "u" && w !== null)
        ) {
          const g = w - (w - 1) * (1 - Math.abs(c));
          l.style.opacity = g;
        }
        let v = `translate3d(${p}, ${d}, 0px)`;
        if (typeof f < "u" && f !== null) {
          const g = f - (f - 1) * (1 - Math.abs(c));
          v += ` scale(${g})`;
        }
        if (b && typeof b < "u" && b !== null) {
          const g = b * c * -1;
          v += ` rotate(${g}deg)`;
        }
        l.style.transform = v;
      },
      a = () => {
        const { el: l, slides: c, progress: u, snapGrid: h, isElement: m } = e,
          p = Je(l, r);
        e.isElement && p.push(...Je(e.hostEl, r)),
          p.forEach((d) => {
            s(d, u);
          }),
          c.forEach((d, f) => {
            let w = d.progress;
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== "auto" &&
              (w += Math.ceil(f / 2) - u * (h.length - 1)),
              (w = Math.min(Math.max(w, -1), 1)),
              d
                .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
                .forEach((b) => {
                  s(b, w);
                });
          });
      },
      o = function (l) {
        l === void 0 && (l = e.params.speed);
        const { el: c, hostEl: u } = e,
          h = [...c.querySelectorAll(r)];
        e.isElement && h.push(...u.querySelectorAll(r)),
          h.forEach((m) => {
            let p =
              parseInt(m.getAttribute("data-swiper-parallax-duration"), 10) ||
              l;
            l === 0 && (p = 0), (m.style.transitionDuration = `${p}ms`);
          });
      };
    i("beforeInit", () => {
      e.params.parallax.enabled &&
        ((e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0));
    }),
      i("init", () => {
        e.params.parallax.enabled && a();
      }),
      i("setTranslate", () => {
        e.params.parallax.enabled && a();
      }),
      i("setTransition", (l, c) => {
        e.params.parallax.enabled && o(c);
      });
  }
  function vm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = be();
    t({
      zoom: {
        enabled: !1,
        limitToOriginalSize: !1,
        maxRatio: 3,
        minRatio: 1,
        panOnMouseMove: !1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    }),
      (e.zoom = { enabled: !1 });
    let a = 1,
      o = !1,
      l = !1,
      c = { x: 0, y: 0 };
    const u = -3;
    let h, m;
    const p = [],
      d = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3,
      },
      f = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {},
      },
      w = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0,
      };
    let b = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return b;
      },
      set(B) {
        if (b !== B) {
          const F = d.imageEl,
            $ = d.slideEl;
          r("zoomChange", B, F, $);
        }
        b = B;
      },
    });
    function v() {
      if (p.length < 2) return 1;
      const B = p[0].pageX,
        F = p[0].pageY,
        $ = p[1].pageX,
        j = p[1].pageY;
      return Math.sqrt(($ - B) ** 2 + (j - F) ** 2);
    }
    function g() {
      const B = e.params.zoom,
        F = d.imageWrapEl.getAttribute("data-swiper-zoom") || B.maxRatio;
      if (B.limitToOriginalSize && d.imageEl && d.imageEl.naturalWidth) {
        const $ = d.imageEl.naturalWidth / d.imageEl.offsetWidth;
        return Math.min($, F);
      }
      return F;
    }
    function y() {
      if (p.length < 2) return { x: null, y: null };
      const B = d.imageEl.getBoundingClientRect();
      return [
        (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - B.x - s.scrollX) / a,
        (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - B.y - s.scrollY) / a,
      ];
    }
    function _() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function A(B) {
      const F = _();
      return !!(
        B.target.matches(F) ||
        e.slides.filter(($) => $.contains(B.target)).length > 0
      );
    }
    function M(B) {
      const F = `.${e.params.zoom.containerClass}`;
      return !!(
        B.target.matches(F) ||
        [...e.hostEl.querySelectorAll(F)].filter(($) => $.contains(B.target))
          .length > 0
      );
    }
    function E(B) {
      if ((B.pointerType === "mouse" && p.splice(0, p.length), !A(B))) return;
      const F = e.params.zoom;
      if (((h = !1), (m = !1), p.push(B), !(p.length < 2))) {
        if (((h = !0), (d.scaleStart = v()), !d.slideEl)) {
          (d.slideEl = B.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
            d.slideEl || (d.slideEl = e.slides[e.activeIndex]);
          let $ = d.slideEl.querySelector(`.${F.containerClass}`);
          if (
            ($ &&
              ($ = $.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
            (d.imageEl = $),
            $
              ? (d.imageWrapEl = Sr(d.imageEl, `.${F.containerClass}`)[0])
              : (d.imageWrapEl = void 0),
            !d.imageWrapEl)
          ) {
            d.imageEl = void 0;
            return;
          }
          d.maxRatio = g();
        }
        if (d.imageEl) {
          const [$, j] = y();
          (d.originX = $),
            (d.originY = j),
            (d.imageEl.style.transitionDuration = "0ms");
        }
        o = !0;
      }
    }
    function k(B) {
      if (!A(B)) return;
      const F = e.params.zoom,
        $ = e.zoom,
        j = p.findIndex((ce) => ce.pointerId === B.pointerId);
      j >= 0 && (p[j] = B),
        !(p.length < 2) &&
          ((m = !0),
          (d.scaleMove = v()),
          d.imageEl &&
            (($.scale = (d.scaleMove / d.scaleStart) * a),
            $.scale > d.maxRatio &&
              ($.scale = d.maxRatio - 1 + ($.scale - d.maxRatio + 1) ** 0.5),
            $.scale < F.minRatio &&
              ($.scale = F.minRatio + 1 - (F.minRatio - $.scale + 1) ** 0.5),
            (d.imageEl.style.transform = `translate3d(0,0,0) scale(${$.scale})`)));
    }
    function x(B) {
      if (!A(B) || (B.pointerType === "mouse" && B.type === "pointerout"))
        return;
      const F = e.params.zoom,
        $ = e.zoom,
        j = p.findIndex((ce) => ce.pointerId === B.pointerId);
      j >= 0 && p.splice(j, 1),
        !(!h || !m) &&
          ((h = !1),
          (m = !1),
          d.imageEl &&
            (($.scale = Math.max(Math.min($.scale, d.maxRatio), F.minRatio)),
            (d.imageEl.style.transitionDuration = `${e.params.speed}ms`),
            (d.imageEl.style.transform = `translate3d(0,0,0) scale(${$.scale})`),
            (a = $.scale),
            (o = !1),
            $.scale > 1 && d.slideEl
              ? d.slideEl.classList.add(`${F.zoomedSlideClass}`)
              : $.scale <= 1 &&
                d.slideEl &&
                d.slideEl.classList.remove(`${F.zoomedSlideClass}`),
            $.scale === 1 &&
              ((d.originX = 0), (d.originY = 0), (d.slideEl = void 0))));
    }
    let D;
    function S() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function T() {
      clearTimeout(D),
        (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
        (D = setTimeout(() => {
          e.destroyed || S();
        }));
    }
    function C(B) {
      const F = e.device;
      if (!d.imageEl || f.isTouched) return;
      F.android && B.cancelable && B.preventDefault(), (f.isTouched = !0);
      const $ = p.length > 0 ? p[0] : B;
      (f.touchesStart.x = $.pageX), (f.touchesStart.y = $.pageY);
    }
    function L(B) {
      const $ = B.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
      if (!A(B) || !M(B)) return;
      const j = e.zoom;
      if (!d.imageEl) return;
      if (!f.isTouched || !d.slideEl) {
        $ && I(B);
        return;
      }
      if ($) {
        I(B);
        return;
      }
      f.isMoved ||
        ((f.width = d.imageEl.offsetWidth || d.imageEl.clientWidth),
        (f.height = d.imageEl.offsetHeight || d.imageEl.clientHeight),
        (f.startX = No(d.imageWrapEl, "x") || 0),
        (f.startY = No(d.imageWrapEl, "y") || 0),
        (d.slideWidth = d.slideEl.offsetWidth),
        (d.slideHeight = d.slideEl.offsetHeight),
        (d.imageWrapEl.style.transitionDuration = "0ms"));
      const ce = f.width * j.scale,
        Qe = f.height * j.scale;
      if (
        ((f.minX = Math.min(d.slideWidth / 2 - ce / 2, 0)),
        (f.maxX = -f.minX),
        (f.minY = Math.min(d.slideHeight / 2 - Qe / 2, 0)),
        (f.maxY = -f.minY),
        (f.touchesCurrent.x = p.length > 0 ? p[0].pageX : B.pageX),
        (f.touchesCurrent.y = p.length > 0 ? p[0].pageY : B.pageY),
        Math.max(
          Math.abs(f.touchesCurrent.x - f.touchesStart.x),
          Math.abs(f.touchesCurrent.y - f.touchesStart.y)
        ) > 5 && (e.allowClick = !1),
        !f.isMoved && !o)
      ) {
        if (
          e.isHorizontal() &&
          ((Math.floor(f.minX) === Math.floor(f.startX) &&
            f.touchesCurrent.x < f.touchesStart.x) ||
            (Math.floor(f.maxX) === Math.floor(f.startX) &&
              f.touchesCurrent.x > f.touchesStart.x))
        ) {
          (f.isTouched = !1), S();
          return;
        }
        if (
          !e.isHorizontal() &&
          ((Math.floor(f.minY) === Math.floor(f.startY) &&
            f.touchesCurrent.y < f.touchesStart.y) ||
            (Math.floor(f.maxY) === Math.floor(f.startY) &&
              f.touchesCurrent.y > f.touchesStart.y))
        ) {
          (f.isTouched = !1), S();
          return;
        }
      }
      B.cancelable && B.preventDefault(),
        B.stopPropagation(),
        T(),
        (f.isMoved = !0);
      const Se = (j.scale - a) / (d.maxRatio - e.params.zoom.minRatio),
        { originX: K, originY: ne } = d;
      (f.currentX =
        f.touchesCurrent.x -
        f.touchesStart.x +
        f.startX +
        Se * (f.width - K * 2)),
        (f.currentY =
          f.touchesCurrent.y -
          f.touchesStart.y +
          f.startY +
          Se * (f.height - ne * 2)),
        f.currentX < f.minX &&
          (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
        f.currentX > f.maxX &&
          (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
        f.currentY < f.minY &&
          (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
        f.currentY > f.maxY &&
          (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
        w.prevPositionX || (w.prevPositionX = f.touchesCurrent.x),
        w.prevPositionY || (w.prevPositionY = f.touchesCurrent.y),
        w.prevTime || (w.prevTime = Date.now()),
        (w.x =
          (f.touchesCurrent.x - w.prevPositionX) /
          (Date.now() - w.prevTime) /
          2),
        (w.y =
          (f.touchesCurrent.y - w.prevPositionY) /
          (Date.now() - w.prevTime) /
          2),
        Math.abs(f.touchesCurrent.x - w.prevPositionX) < 2 && (w.x = 0),
        Math.abs(f.touchesCurrent.y - w.prevPositionY) < 2 && (w.y = 0),
        (w.prevPositionX = f.touchesCurrent.x),
        (w.prevPositionY = f.touchesCurrent.y),
        (w.prevTime = Date.now()),
        (d.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
    }
    function z() {
      const B = e.zoom;
      if (((p.length = 0), !d.imageEl)) return;
      if (!f.isTouched || !f.isMoved) {
        (f.isTouched = !1), (f.isMoved = !1);
        return;
      }
      (f.isTouched = !1), (f.isMoved = !1);
      let F = 300,
        $ = 300;
      const j = w.x * F,
        ce = f.currentX + j,
        Qe = w.y * $,
        _e = f.currentY + Qe;
      w.x !== 0 && (F = Math.abs((ce - f.currentX) / w.x)),
        w.y !== 0 && ($ = Math.abs((_e - f.currentY) / w.y));
      const Se = Math.max(F, $);
      (f.currentX = ce), (f.currentY = _e);
      const K = f.width * B.scale,
        ne = f.height * B.scale;
      (f.minX = Math.min(d.slideWidth / 2 - K / 2, 0)),
        (f.maxX = -f.minX),
        (f.minY = Math.min(d.slideHeight / 2 - ne / 2, 0)),
        (f.maxY = -f.minY),
        (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
        (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
        (d.imageWrapEl.style.transitionDuration = `${Se}ms`),
        (d.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
    }
    function O() {
      const B = e.zoom;
      d.slideEl &&
        e.activeIndex !== e.slides.indexOf(d.slideEl) &&
        (d.imageEl &&
          (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        d.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
        (B.scale = 1),
        (a = 1),
        (d.slideEl = void 0),
        (d.imageEl = void 0),
        (d.imageWrapEl = void 0),
        (d.originX = 0),
        (d.originY = 0));
    }
    function I(B) {
      if (a <= 1 || !d.imageWrapEl || !A(B) || !M(B)) return;
      const F = s.getComputedStyle(d.imageWrapEl).transform,
        $ = new s.DOMMatrix(F);
      if (!l) {
        (l = !0),
          (c.x = B.clientX),
          (c.y = B.clientY),
          (f.startX = $.e),
          (f.startY = $.f),
          (f.width = d.imageEl.offsetWidth || d.imageEl.clientWidth),
          (f.height = d.imageEl.offsetHeight || d.imageEl.clientHeight),
          (d.slideWidth = d.slideEl.offsetWidth),
          (d.slideHeight = d.slideEl.offsetHeight);
        return;
      }
      const j = (B.clientX - c.x) * u,
        ce = (B.clientY - c.y) * u,
        Qe = f.width * a,
        _e = f.height * a,
        Se = d.slideWidth,
        K = d.slideHeight,
        ne = Math.min(Se / 2 - Qe / 2, 0),
        ve = -ne,
        Ye = Math.min(K / 2 - _e / 2, 0),
        R = -Ye,
        Ne = Math.max(Math.min(f.startX + j, ve), ne),
        ct = Math.max(Math.min(f.startY + ce, R), Ye);
      (d.imageWrapEl.style.transitionDuration = "0ms"),
        (d.imageWrapEl.style.transform = `translate3d(${Ne}px, ${ct}px, 0)`),
        (c.x = B.clientX),
        (c.y = B.clientY),
        (f.startX = Ne),
        (f.startY = ct),
        (f.currentX = Ne),
        (f.currentY = ct);
    }
    function N(B) {
      const F = e.zoom,
        $ = e.params.zoom;
      if (!d.slideEl) {
        B &&
          B.target &&
          (d.slideEl = B.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
          d.slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (d.slideEl = Je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (d.slideEl = e.slides[e.activeIndex]));
        let je = d.slideEl.querySelector(`.${$.containerClass}`);
        je &&
          (je = je.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (d.imageEl = je),
          je
            ? (d.imageWrapEl = Sr(d.imageEl, `.${$.containerClass}`)[0])
            : (d.imageWrapEl = void 0);
      }
      if (!d.imageEl || !d.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        d.slideEl.classList.add(`${$.zoomedSlideClass}`);
      let j, ce, Qe, _e, Se, K, ne, ve, Ye, R, Ne, ct, Ht, me, Wt, Qt, ri, Ce;
      typeof f.touchesStart.x > "u" && B
        ? ((j = B.pageX), (ce = B.pageY))
        : ((j = f.touchesStart.x), (ce = f.touchesStart.y));
      const ei = a,
        pe = typeof B == "number" ? B : null;
      a === 1 &&
        pe &&
        ((j = void 0),
        (ce = void 0),
        (f.touchesStart.x = void 0),
        (f.touchesStart.y = void 0));
      const kt = g();
      (F.scale = pe || kt),
        (a = pe || kt),
        B && !(a === 1 && pe)
          ? ((ri = d.slideEl.offsetWidth),
            (Ce = d.slideEl.offsetHeight),
            (Qe = Gs(d.slideEl).left + s.scrollX),
            (_e = Gs(d.slideEl).top + s.scrollY),
            (Se = Qe + ri / 2 - j),
            (K = _e + Ce / 2 - ce),
            (Ye = d.imageEl.offsetWidth || d.imageEl.clientWidth),
            (R = d.imageEl.offsetHeight || d.imageEl.clientHeight),
            (Ne = Ye * F.scale),
            (ct = R * F.scale),
            (Ht = Math.min(ri / 2 - Ne / 2, 0)),
            (me = Math.min(Ce / 2 - ct / 2, 0)),
            (Wt = -Ht),
            (Qt = -me),
            ei > 0 &&
            pe &&
            typeof f.currentX == "number" &&
            typeof f.currentY == "number"
              ? ((ne = (f.currentX * F.scale) / ei),
                (ve = (f.currentY * F.scale) / ei))
              : ((ne = Se * F.scale), (ve = K * F.scale)),
            ne < Ht && (ne = Ht),
            ne > Wt && (ne = Wt),
            ve < me && (ve = me),
            ve > Qt && (ve = Qt))
          : ((ne = 0), (ve = 0)),
        pe && F.scale === 1 && ((d.originX = 0), (d.originY = 0)),
        (f.currentX = ne),
        (f.currentY = ve),
        (d.imageWrapEl.style.transitionDuration = "300ms"),
        (d.imageWrapEl.style.transform = `translate3d(${ne}px, ${ve}px,0)`),
        (d.imageEl.style.transitionDuration = "300ms"),
        (d.imageEl.style.transform = `translate3d(0,0,0) scale(${F.scale})`);
    }
    function P() {
      const B = e.zoom,
        F = e.params.zoom;
      if (!d.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (d.slideEl = Je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
          : (d.slideEl = e.slides[e.activeIndex]);
        let $ = d.slideEl.querySelector(`.${F.containerClass}`);
        $ &&
          ($ = $.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (d.imageEl = $),
          $
            ? (d.imageWrapEl = Sr(d.imageEl, `.${F.containerClass}`)[0])
            : (d.imageWrapEl = void 0);
      }
      !d.imageEl ||
        !d.imageWrapEl ||
        (e.params.cssMode &&
          ((e.wrapperEl.style.overflow = ""),
          (e.wrapperEl.style.touchAction = "")),
        (B.scale = 1),
        (a = 1),
        (f.currentX = void 0),
        (f.currentY = void 0),
        (f.touchesStart.x = void 0),
        (f.touchesStart.y = void 0),
        (d.imageWrapEl.style.transitionDuration = "300ms"),
        (d.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        (d.imageEl.style.transitionDuration = "300ms"),
        (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        d.slideEl.classList.remove(`${F.zoomedSlideClass}`),
        (d.slideEl = void 0),
        (d.originX = 0),
        (d.originY = 0),
        e.params.zoom.panOnMouseMove &&
          ((c = { x: 0, y: 0 }),
          l && ((l = !1), (f.startX = 0), (f.startY = 0))));
    }
    function H(B) {
      const F = e.zoom;
      F.scale && F.scale !== 1 ? P() : N(B);
    }
    function G() {
      const B = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
        F = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: B, activeListenerWithCapture: F };
    }
    function re() {
      const B = e.zoom;
      if (B.enabled) return;
      B.enabled = !0;
      const { passiveListener: F, activeListenerWithCapture: $ } = G();
      e.wrapperEl.addEventListener("pointerdown", E, F),
        e.wrapperEl.addEventListener("pointermove", k, $),
        ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
          e.wrapperEl.addEventListener(j, x, F);
        }),
        e.wrapperEl.addEventListener("pointermove", L, $);
    }
    function ue() {
      const B = e.zoom;
      if (!B.enabled) return;
      B.enabled = !1;
      const { passiveListener: F, activeListenerWithCapture: $ } = G();
      e.wrapperEl.removeEventListener("pointerdown", E, F),
        e.wrapperEl.removeEventListener("pointermove", k, $),
        ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
          e.wrapperEl.removeEventListener(j, x, F);
        }),
        e.wrapperEl.removeEventListener("pointermove", L, $);
    }
    i("init", () => {
      e.params.zoom.enabled && re();
    }),
      i("destroy", () => {
        ue();
      }),
      i("touchStart", (B, F) => {
        e.zoom.enabled && C(F);
      }),
      i("touchEnd", (B, F) => {
        e.zoom.enabled && z();
      }),
      i("doubleTap", (B, F) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          H(F);
      }),
      i("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && O();
      }),
      i("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && O();
      }),
      Object.assign(e.zoom, {
        enable: re,
        disable: ue,
        in: N,
        out: P,
        toggle: H,
      });
  }
  function ym(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
    function r(c, u) {
      const h = (function () {
        let f, w, b;
        return (v, g) => {
          for (w = -1, f = v.length; f - w > 1; )
            (b = (f + w) >> 1), v[b] <= g ? (w = b) : (f = b);
          return f;
        };
      })();
      (this.x = c), (this.y = u), (this.lastIndex = c.length - 1);
      let m, p;
      return (
        (this.interpolate = function (f) {
          return f
            ? ((p = h(this.x, f)),
              (m = p - 1),
              ((f - this.x[m]) * (this.y[p] - this.y[m])) /
                (this.x[p] - this.x[m]) +
                this.y[m])
            : 0;
        }),
        this
      );
    }
    function s(c) {
      e.controller.spline = e.params.loop
        ? new r(e.slidesGrid, c.slidesGrid)
        : new r(e.snapGrid, c.snapGrid);
    }
    function a(c, u) {
      const h = e.controller.control;
      let m, p;
      const d = e.constructor;
      function f(w) {
        if (w.destroyed) return;
        const b = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (s(w), (p = -e.controller.spline.interpolate(-b))),
          (!p || e.params.controller.by === "container") &&
            ((m =
              (w.maxTranslate() - w.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (Number.isNaN(m) || !Number.isFinite(m)) && (m = 1),
            (p = (b - e.minTranslate()) * m + w.minTranslate())),
          e.params.controller.inverse && (p = w.maxTranslate() - p),
          w.updateProgress(p),
          w.setTranslate(p, e),
          w.updateActiveIndex(),
          w.updateSlidesClasses();
      }
      if (Array.isArray(h))
        for (let w = 0; w < h.length; w += 1)
          h[w] !== u && h[w] instanceof d && f(h[w]);
      else h instanceof d && u !== h && f(h);
    }
    function o(c, u) {
      const h = e.constructor,
        m = e.controller.control;
      let p;
      function d(f) {
        f.destroyed ||
          (f.setTransition(c, e),
          c !== 0 &&
            (f.transitionStart(),
            f.params.autoHeight &&
              br(() => {
                f.updateAutoHeight();
              }),
            Xn(f.wrapperEl, () => {
              m && f.transitionEnd();
            })));
      }
      if (Array.isArray(m))
        for (p = 0; p < m.length; p += 1)
          m[p] !== u && m[p] instanceof h && d(m[p]);
      else m instanceof h && u !== m && d(m);
    }
    function l() {
      e.controller.control &&
        e.controller.spline &&
        ((e.controller.spline = void 0), delete e.controller.spline);
    }
    i("beforeInit", () => {
      if (
        typeof window < "u" &&
        (typeof e.params.controller.control == "string" ||
          e.params.controller.control instanceof HTMLElement)
      ) {
        (typeof e.params.controller.control == "string"
          ? [...document.querySelectorAll(e.params.controller.control)]
          : [e.params.controller.control]
        ).forEach((u) => {
          if (
            (e.controller.control || (e.controller.control = []), u && u.swiper)
          )
            e.controller.control.push(u.swiper);
          else if (u) {
            const h = `${e.params.eventsPrefix}init`,
              m = (p) => {
                e.controller.control.push(p.detail[0]),
                  e.update(),
                  u.removeEventListener(h, m);
              };
            u.addEventListener(h, m);
          }
        });
        return;
      }
      e.controller.control = e.params.controller.control;
    }),
      i("update", () => {
        l();
      }),
      i("resize", () => {
        l();
      }),
      i("observerUpdate", () => {
        l();
      }),
      i("setTranslate", (c, u, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTranslate(u, h);
      }),
      i("setTransition", (c, u, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTransition(u, h);
      }),
      Object.assign(e.controller, { setTranslate: a, setTransition: o });
  }
  function bm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        containerRole: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
        scrollOnFocus: !0,
      },
    }),
      (e.a11y = { clicked: !1 });
    let r = null,
      s,
      a,
      o = new Date().getTime();
    function l(O) {
      const I = r;
      I.length !== 0 && ((I.innerHTML = ""), (I.innerHTML = O));
    }
    function c(O) {
      const I = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(O).replace(/x/g, I);
    }
    function u(O) {
      (O = se(O)),
        O.forEach((I) => {
          I.setAttribute("tabIndex", "0");
        });
    }
    function h(O) {
      (O = se(O)),
        O.forEach((I) => {
          I.setAttribute("tabIndex", "-1");
        });
    }
    function m(O, I) {
      (O = se(O)),
        O.forEach((N) => {
          N.setAttribute("role", I);
        });
    }
    function p(O, I) {
      (O = se(O)),
        O.forEach((N) => {
          N.setAttribute("aria-roledescription", I);
        });
    }
    function d(O, I) {
      (O = se(O)),
        O.forEach((N) => {
          N.setAttribute("aria-controls", I);
        });
    }
    function f(O, I) {
      (O = se(O)),
        O.forEach((N) => {
          N.setAttribute("aria-label", I);
        });
    }
    function w(O, I) {
      (O = se(O)),
        O.forEach((N) => {
          N.setAttribute("id", I);
        });
    }
    function b(O, I) {
      (O = se(O)),
        O.forEach((N) => {
          N.setAttribute("aria-live", I);
        });
    }
    function v(O) {
      (O = se(O)),
        O.forEach((I) => {
          I.setAttribute("aria-disabled", !0);
        });
    }
    function g(O) {
      (O = se(O)),
        O.forEach((I) => {
          I.setAttribute("aria-disabled", !1);
        });
    }
    function y(O) {
      if (O.keyCode !== 13 && O.keyCode !== 32) return;
      const I = e.params.a11y,
        N = O.target;
      if (
        !(
          e.pagination &&
          e.pagination.el &&
          (N === e.pagination.el || e.pagination.el.contains(O.target)) &&
          !O.target.matches(Ai(e.params.pagination.bulletClass))
        )
      ) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const P = se(e.navigation.prevEl);
          se(e.navigation.nextEl).includes(N) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? l(I.lastSlideMessage) : l(I.nextSlideMessage)),
            P.includes(N) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? l(I.firstSlideMessage) : l(I.prevSlideMessage));
        }
        e.pagination &&
          N.matches(Ai(e.params.pagination.bulletClass)) &&
          N.click();
      }
    }
    function _() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: O, prevEl: I } = e.navigation;
      I && (e.isBeginning ? (v(I), h(I)) : (g(I), u(I))),
        O && (e.isEnd ? (v(O), h(O)) : (g(O), u(O)));
    }
    function A() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function M() {
      return A() && e.params.pagination.clickable;
    }
    function E() {
      const O = e.params.a11y;
      A() &&
        e.pagination.bullets.forEach((I) => {
          e.params.pagination.clickable &&
            (u(I),
            e.params.pagination.renderBullet ||
              (m(I, "button"),
              f(
                I,
                O.paginationBulletMessage.replace(/\{\{index\}\}/, jn(I) + 1)
              ))),
            I.matches(Ai(e.params.pagination.bulletActiveClass))
              ? I.setAttribute("aria-current", "true")
              : I.removeAttribute("aria-current");
        });
    }
    const k = (O, I, N) => {
        u(O),
          O.tagName !== "BUTTON" &&
            (m(O, "button"), O.addEventListener("keydown", y)),
          f(O, N),
          d(O, I);
      },
      x = (O) => {
        a && a !== O.target && !a.contains(O.target) && (s = !0),
          (e.a11y.clicked = !0);
      },
      D = () => {
        (s = !1),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
      },
      S = (O) => {
        o = new Date().getTime();
      },
      T = (O) => {
        if (
          e.a11y.clicked ||
          !e.params.a11y.scrollOnFocus ||
          new Date().getTime() - o < 100
        )
          return;
        const I = O.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!I || !e.slides.includes(I)) return;
        a = I;
        const N = e.slides.indexOf(I) === e.activeIndex,
          P =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(I);
        N ||
          P ||
          (O.sourceCapabilities && O.sourceCapabilities.firesTouchEvents) ||
          (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
          requestAnimationFrame(() => {
            s ||
              (e.params.loop
                ? e.slideToLoop(
                    parseInt(I.getAttribute("data-swiper-slide-index")),
                    0
                  )
                : e.slideTo(e.slides.indexOf(I), 0),
              (s = !1));
          }));
      },
      C = () => {
        const O = e.params.a11y;
        O.itemRoleDescriptionMessage &&
          p(e.slides, O.itemRoleDescriptionMessage),
          O.slideRole && m(e.slides, O.slideRole);
        const I = e.slides.length;
        O.slideLabelMessage &&
          e.slides.forEach((N, P) => {
            const H = e.params.loop
                ? parseInt(N.getAttribute("data-swiper-slide-index"), 10)
                : P,
              G = O.slideLabelMessage
                .replace(/\{\{index\}\}/, H + 1)
                .replace(/\{\{slidesLength\}\}/, I);
            f(N, G);
          });
      },
      L = () => {
        const O = e.params.a11y;
        e.el.append(r);
        const I = e.el;
        O.containerRoleDescriptionMessage &&
          p(I, O.containerRoleDescriptionMessage),
          O.containerMessage && f(I, O.containerMessage),
          O.containerRole && m(I, O.containerRole);
        const N = e.wrapperEl,
          P = O.id || N.getAttribute("id") || `swiper-wrapper-${c(16)}`,
          H = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        w(N, P), b(N, H), C();
        let { nextEl: G, prevEl: re } = e.navigation ? e.navigation : {};
        (G = se(G)),
          (re = se(re)),
          G && G.forEach((B) => k(B, P, O.nextSlideMessage)),
          re && re.forEach((B) => k(B, P, O.prevSlideMessage)),
          M() &&
            se(e.pagination.el).forEach((F) => {
              F.addEventListener("keydown", y);
            }),
          Ge().addEventListener("visibilitychange", S),
          e.el.addEventListener("focus", T, !0),
          e.el.addEventListener("focus", T, !0),
          e.el.addEventListener("pointerdown", x, !0),
          e.el.addEventListener("pointerup", D, !0);
      };
    function z() {
      r && r.remove();
      let { nextEl: O, prevEl: I } = e.navigation ? e.navigation : {};
      (O = se(O)),
        (I = se(I)),
        O && O.forEach((P) => P.removeEventListener("keydown", y)),
        I && I.forEach((P) => P.removeEventListener("keydown", y)),
        M() &&
          se(e.pagination.el).forEach((H) => {
            H.removeEventListener("keydown", y);
          }),
        Ge().removeEventListener("visibilitychange", S),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", T, !0),
          e.el.removeEventListener("pointerdown", x, !0),
          e.el.removeEventListener("pointerup", D, !0));
    }
    i("beforeInit", () => {
      (r = $t("span", e.params.a11y.notificationClass)),
        r.setAttribute("aria-live", "assertive"),
        r.setAttribute("aria-atomic", "true");
    }),
      i("afterInit", () => {
        e.params.a11y.enabled && L();
      }),
      i(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          e.params.a11y.enabled && C();
        }
      ),
      i("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && _();
      }),
      i("paginationUpdate", () => {
        e.params.a11y.enabled && E();
      }),
      i("destroy", () => {
        e.params.a11y.enabled && z();
      });
  }
  function _m(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1,
      },
    });
    let r = !1,
      s = {};
    const a = (p) =>
        p
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      o = (p) => {
        const d = be();
        let f;
        p ? (f = new URL(p)) : (f = d.location);
        const w = f.pathname
            .slice(1)
            .split("/")
            .filter((y) => y !== ""),
          b = w.length,
          v = w[b - 2],
          g = w[b - 1];
        return { key: v, value: g };
      },
      l = (p, d) => {
        const f = be();
        if (!r || !e.params.history.enabled) return;
        let w;
        e.params.url ? (w = new URL(e.params.url)) : (w = f.location);
        const b =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(`[data-swiper-slide-index="${d}"]`)
            : e.slides[d];
        let v = a(b.getAttribute("data-history"));
        if (e.params.history.root.length > 0) {
          let y = e.params.history.root;
          y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)),
            (v = `${y}/${p ? `${p}/` : ""}${v}`);
        } else w.pathname.includes(p) || (v = `${p ? `${p}/` : ""}${v}`);
        e.params.history.keepQuery && (v += w.search);
        const g = f.history.state;
        (g && g.value === v) ||
          (e.params.history.replaceState
            ? f.history.replaceState({ value: v }, null, v)
            : f.history.pushState({ value: v }, null, v));
      },
      c = (p, d, f) => {
        if (d)
          for (let w = 0, b = e.slides.length; w < b; w += 1) {
            const v = e.slides[w];
            if (a(v.getAttribute("data-history")) === d) {
              const y = e.getSlideIndex(v);
              e.slideTo(y, p, f);
            }
          }
        else e.slideTo(0, p, f);
      },
      u = () => {
        (s = o(e.params.url)), c(e.params.speed, s.value, !1);
      },
      h = () => {
        const p = be();
        if (e.params.history) {
          if (!p.history || !p.history.pushState) {
            (e.params.history.enabled = !1),
              (e.params.hashNavigation.enabled = !0);
            return;
          }
          if (((r = !0), (s = o(e.params.url)), !s.key && !s.value)) {
            e.params.history.replaceState || p.addEventListener("popstate", u);
            return;
          }
          c(0, s.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || p.addEventListener("popstate", u);
        }
      },
      m = () => {
        const p = be();
        e.params.history.replaceState || p.removeEventListener("popstate", u);
      };
    i("init", () => {
      e.params.history.enabled && h();
    }),
      i("destroy", () => {
        e.params.history.enabled && m();
      }),
      i("transitionEnd _freeModeNoMomentumRelease", () => {
        r && l(e.params.history.key, e.activeIndex);
      }),
      i("slideChange", () => {
        r && e.params.cssMode && l(e.params.history.key, e.activeIndex);
      });
  }
  function Sm(n) {
    let { swiper: e, extendParams: t, emit: i, on: r } = n,
      s = !1;
    const a = Ge(),
      o = be();
    t({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
        getSlideIndex(m, p) {
          if (e.virtual && e.params.virtual.enabled) {
            const d = e.slides.find((w) => w.getAttribute("data-hash") === p);
            return d
              ? parseInt(d.getAttribute("data-swiper-slide-index"), 10)
              : 0;
          }
          return e.getSlideIndex(
            Je(
              e.slidesEl,
              `.${e.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`
            )[0]
          );
        },
      },
    });
    const l = () => {
        i("hashChange");
        const m = a.location.hash.replace("#", ""),
          p =
            e.virtual && e.params.virtual.enabled
              ? e.slidesEl.querySelector(
                  `[data-swiper-slide-index="${e.activeIndex}"]`
                )
              : e.slides[e.activeIndex],
          d = p ? p.getAttribute("data-hash") : "";
        if (m !== d) {
          const f = e.params.hashNavigation.getSlideIndex(e, m);
          if (typeof f > "u" || Number.isNaN(f)) return;
          e.slideTo(f);
        }
      },
      c = () => {
        if (!s || !e.params.hashNavigation.enabled) return;
        const m =
            e.virtual && e.params.virtual.enabled
              ? e.slidesEl.querySelector(
                  `[data-swiper-slide-index="${e.activeIndex}"]`
                )
              : e.slides[e.activeIndex],
          p = m
            ? m.getAttribute("data-hash") || m.getAttribute("data-history")
            : "";
        e.params.hashNavigation.replaceState &&
        o.history &&
        o.history.replaceState
          ? (o.history.replaceState(null, null, `#${p}` || ""), i("hashSet"))
          : ((a.location.hash = p || ""), i("hashSet"));
      },
      u = () => {
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        s = !0;
        const m = a.location.hash.replace("#", "");
        if (m) {
          const d = e.params.hashNavigation.getSlideIndex(e, m);
          e.slideTo(d || 0, 0, e.params.runCallbacksOnInit, !0);
        }
        e.params.hashNavigation.watchState &&
          o.addEventListener("hashchange", l);
      },
      h = () => {
        e.params.hashNavigation.watchState &&
          o.removeEventListener("hashchange", l);
      };
    r("init", () => {
      e.params.hashNavigation.enabled && u();
    }),
      r("destroy", () => {
        e.params.hashNavigation.enabled && h();
      }),
      r("transitionEnd _freeModeNoMomentumRelease", () => {
        s && c();
      }),
      r("slideChange", () => {
        s && e.params.cssMode && c();
      });
  }
  function Tm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r, params: s } = n;
    (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
      t({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !1,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      });
    let a,
      o,
      l = s && s.autoplay ? s.autoplay.delay : 3e3,
      c = s && s.autoplay ? s.autoplay.delay : 3e3,
      u,
      h = new Date().getTime(),
      m,
      p,
      d,
      f,
      w,
      b,
      v;
    function g(I) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (I.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", g),
          !(v || (I.detail && I.detail.bySwiperTouchMove)) && x()));
    }
    const y = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (m = !0) : m && ((c = u), (m = !1));
        const I = e.autoplay.paused ? u : h + c - new Date().getTime();
        (e.autoplay.timeLeft = I),
          r("autoplayTimeLeft", I, I / l),
          (o = requestAnimationFrame(() => {
            y();
          }));
      },
      _ = () => {
        let I;
        return (
          e.virtual && e.params.virtual.enabled
            ? (I = e.slides.find((P) =>
                P.classList.contains("swiper-slide-active")
              ))
            : (I = e.slides[e.activeIndex]),
          I ? parseInt(I.getAttribute("data-swiper-autoplay"), 10) : void 0
        );
      },
      A = (I) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(o), y();
        let N = typeof I > "u" ? e.params.autoplay.delay : I;
        (l = e.params.autoplay.delay), (c = e.params.autoplay.delay);
        const P = _();
        !Number.isNaN(P) &&
          P > 0 &&
          typeof I > "u" &&
          ((N = P), (l = P), (c = P)),
          (u = N);
        const H = e.params.speed,
          G = () => {
            !e ||
              e.destroyed ||
              (e.params.autoplay.reverseDirection
                ? !e.isBeginning || e.params.loop || e.params.rewind
                  ? (e.slidePrev(H, !0, !0), r("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(e.slides.length - 1, H, !0, !0), r("autoplay"))
                : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(H, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, H, !0, !0), r("autoplay")),
              e.params.cssMode &&
                ((h = new Date().getTime()),
                requestAnimationFrame(() => {
                  A();
                })));
          };
        return (
          N > 0
            ? (clearTimeout(a),
              (a = setTimeout(() => {
                G();
              }, N)))
            : requestAnimationFrame(() => {
                G();
              }),
          N
        );
      },
      M = () => {
        (h = new Date().getTime()),
          (e.autoplay.running = !0),
          A(),
          r("autoplayStart");
      },
      E = () => {
        (e.autoplay.running = !1),
          clearTimeout(a),
          cancelAnimationFrame(o),
          r("autoplayStop");
      },
      k = (I, N) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(a), I || (b = !0);
        const P = () => {
          r("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", g)
              : x();
        };
        if (((e.autoplay.paused = !0), N)) {
          w && (u = e.params.autoplay.delay), (w = !1), P();
          return;
        }
        (u = (u || e.params.autoplay.delay) - (new Date().getTime() - h)),
          !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0), P());
      },
      x = () => {
        (e.isEnd && u < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((h = new Date().getTime()),
          b ? ((b = !1), A(u)) : A(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      D = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const I = Ge();
        I.visibilityState === "hidden" && ((b = !0), k(!0)),
          I.visibilityState === "visible" && x();
      },
      S = (I) => {
        I.pointerType === "mouse" &&
          ((b = !0), (v = !0), !(e.animating || e.autoplay.paused) && k(!0));
      },
      T = (I) => {
        I.pointerType === "mouse" && ((v = !1), e.autoplay.paused && x());
      },
      C = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", S),
          e.el.addEventListener("pointerleave", T));
      },
      L = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", S),
          e.el.removeEventListener("pointerleave", T));
      },
      z = () => {
        Ge().addEventListener("visibilitychange", D);
      },
      O = () => {
        Ge().removeEventListener("visibilitychange", D);
      };
    i("init", () => {
      e.params.autoplay.enabled && (C(), z(), M());
    }),
      i("destroy", () => {
        L(), O(), e.autoplay.running && E();
      }),
      i("_freeModeStaticRelease", () => {
        (d || b) && x();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? E() : k(!0, !0);
      }),
      i("beforeTransitionStart", (I, N, P) => {
        e.destroyed ||
          !e.autoplay.running ||
          (P || !e.params.autoplay.disableOnInteraction ? k(!0, !0) : E());
      }),
      i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (e.params.autoplay.disableOnInteraction) {
            E();
            return;
          }
          (p = !0),
            (d = !1),
            (b = !1),
            (f = setTimeout(() => {
              (b = !0), (d = !0), k(!0);
            }, 200));
        }
      }),
      i("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !p)) {
          if (
            (clearTimeout(f),
            clearTimeout(a),
            e.params.autoplay.disableOnInteraction)
          ) {
            (d = !1), (p = !1);
            return;
          }
          d && e.params.cssMode && x(), (d = !1), (p = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (w = !0);
      }),
      Object.assign(e.autoplay, { start: M, stop: E, pause: k, resume: x });
  }
  function Em(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs",
      },
    });
    let r = !1,
      s = !1;
    e.thumbs = { swiper: null };
    function a() {
      const c = e.thumbs.swiper;
      if (!c || c.destroyed) return;
      const u = c.clickedIndex,
        h = c.clickedSlide;
      if (
        (h && h.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
        typeof u > "u" ||
        u === null
      )
        return;
      let m;
      c.params.loop
        ? (m = parseInt(
            c.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (m = u),
        e.params.loop ? e.slideToLoop(m) : e.slideTo(m);
    }
    function o() {
      const { thumbs: c } = e.params;
      if (r) return !1;
      r = !0;
      const u = e.constructor;
      if (c.swiper instanceof u) {
        if (c.swiper.destroyed) return (r = !1), !1;
        (e.thumbs.swiper = c.swiper),
          Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          e.thumbs.swiper.update();
      } else if (qn(c.swiper)) {
        const h = Object.assign({}, c.swiper);
        Object.assign(h, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new u(h)),
          (s = !0);
      }
      return (
        e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", a),
        !0
      );
    }
    function l(c) {
      const u = e.thumbs.swiper;
      if (!u || u.destroyed) return;
      const h =
        u.params.slidesPerView === "auto"
          ? u.slidesPerViewDynamic()
          : u.params.slidesPerView;
      let m = 1;
      const p = e.params.thumbs.slideThumbActiveClass;
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (m = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (m = 1),
        (m = Math.floor(m)),
        u.slides.forEach((w) => w.classList.remove(p)),
        u.params.loop || (u.params.virtual && u.params.virtual.enabled))
      )
        for (let w = 0; w < m; w += 1)
          Je(
            u.slidesEl,
            `[data-swiper-slide-index="${e.realIndex + w}"]`
          ).forEach((b) => {
            b.classList.add(p);
          });
      else
        for (let w = 0; w < m; w += 1)
          u.slides[e.realIndex + w] &&
            u.slides[e.realIndex + w].classList.add(p);
      const d = e.params.thumbs.autoScrollOffset,
        f = d && !u.params.loop;
      if (e.realIndex !== u.realIndex || f) {
        const w = u.activeIndex;
        let b, v;
        if (u.params.loop) {
          const g = u.slides.find(
            (y) =>
              y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
          );
          (b = u.slides.indexOf(g)),
            (v = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (b = e.realIndex), (v = b > e.previousIndex ? "next" : "prev");
        f && (b += v === "next" ? d : -1 * d),
          u.visibleSlidesIndexes &&
            u.visibleSlidesIndexes.indexOf(b) < 0 &&
            (u.params.centeredSlides
              ? b > w
                ? (b = b - Math.floor(h / 2) + 1)
                : (b = b + Math.floor(h / 2) - 1)
              : b > w && u.params.slidesPerGroup,
            u.slideTo(b, c ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const { thumbs: c } = e.params;
      if (!(!c || !c.swiper))
        if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
          const u = Ge(),
            h = () => {
              const p =
                typeof c.swiper == "string"
                  ? u.querySelector(c.swiper)
                  : c.swiper;
              if (p && p.swiper) (c.swiper = p.swiper), o(), l(!0);
              else if (p) {
                const d = `${e.params.eventsPrefix}init`,
                  f = (w) => {
                    (c.swiper = w.detail[0]),
                      p.removeEventListener(d, f),
                      o(),
                      l(!0),
                      c.swiper.update(),
                      e.update();
                  };
                p.addEventListener(d, f);
              }
              return p;
            },
            m = () => {
              if (e.destroyed) return;
              h() || requestAnimationFrame(m);
            };
          requestAnimationFrame(m);
        } else o(), l(!0);
    }),
      i("slideChange update resize observerUpdate", () => {
        l();
      }),
      i("setTransition", (c, u) => {
        const h = e.thumbs.swiper;
        !h || h.destroyed || h.setTransition(u);
      }),
      i("beforeDestroy", () => {
        const c = e.thumbs.swiper;
        !c || c.destroyed || (s && c.destroy());
      }),
      Object.assign(e.thumbs, { init: o, update: l });
  }
  function xm(n) {
    let { swiper: e, extendParams: t, emit: i, once: r } = n;
    t({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: 0.02,
      },
    });
    function s() {
      if (e.params.cssMode) return;
      const l = e.getTranslate();
      e.setTranslate(l),
        e.setTransition(0),
        (e.touchEventsData.velocities.length = 0),
        e.freeMode.onTouchEnd({
          currentPos: e.rtl ? e.translate : -e.translate,
        });
    }
    function a() {
      if (e.params.cssMode) return;
      const { touchEventsData: l, touches: c } = e;
      l.velocities.length === 0 &&
        l.velocities.push({
          position: c[e.isHorizontal() ? "startX" : "startY"],
          time: l.touchStartTime,
        }),
        l.velocities.push({
          position: c[e.isHorizontal() ? "currentX" : "currentY"],
          time: Kt(),
        });
    }
    function o(l) {
      let { currentPos: c } = l;
      if (e.params.cssMode) return;
      const {
          params: u,
          wrapperEl: h,
          rtlTranslate: m,
          snapGrid: p,
          touchEventsData: d,
        } = e,
        w = Kt() - d.touchStartTime;
      if (c < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (c > -e.maxTranslate()) {
        e.slides.length < p.length
          ? e.slideTo(p.length - 1)
          : e.slideTo(e.slides.length - 1);
        return;
      }
      if (u.freeMode.momentum) {
        if (d.velocities.length > 1) {
          const E = d.velocities.pop(),
            k = d.velocities.pop(),
            x = E.position - k.position,
            D = E.time - k.time;
          (e.velocity = x / D),
            (e.velocity /= 2),
            Math.abs(e.velocity) < u.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (D > 150 || Kt() - E.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= u.freeMode.momentumVelocityRatio),
          (d.velocities.length = 0);
        let b = 1e3 * u.freeMode.momentumRatio;
        const v = e.velocity * b;
        let g = e.translate + v;
        m && (g = -g);
        let y = !1,
          _;
        const A = Math.abs(e.velocity) * 20 * u.freeMode.momentumBounceRatio;
        let M;
        if (g < e.maxTranslate())
          u.freeMode.momentumBounce
            ? (g + e.maxTranslate() < -A && (g = e.maxTranslate() - A),
              (_ = e.maxTranslate()),
              (y = !0),
              (d.allowMomentumBounce = !0))
            : (g = e.maxTranslate()),
            u.loop && u.centeredSlides && (M = !0);
        else if (g > e.minTranslate())
          u.freeMode.momentumBounce
            ? (g - e.minTranslate() > A && (g = e.minTranslate() + A),
              (_ = e.minTranslate()),
              (y = !0),
              (d.allowMomentumBounce = !0))
            : (g = e.minTranslate()),
            u.loop && u.centeredSlides && (M = !0);
        else if (u.freeMode.sticky) {
          let E;
          for (let k = 0; k < p.length; k += 1)
            if (p[k] > -g) {
              E = k;
              break;
            }
          Math.abs(p[E] - g) < Math.abs(p[E - 1] - g) ||
          e.swipeDirection === "next"
            ? (g = p[E])
            : (g = p[E - 1]),
            (g = -g);
        }
        if (
          (M &&
            r("transitionEnd", () => {
              e.loopFix();
            }),
          e.velocity !== 0)
        ) {
          if (
            (m
              ? (b = Math.abs((-g - e.translate) / e.velocity))
              : (b = Math.abs((g - e.translate) / e.velocity)),
            u.freeMode.sticky)
          ) {
            const E = Math.abs((m ? -g : g) - e.translate),
              k = e.slidesSizesGrid[e.activeIndex];
            E < k
              ? (b = u.speed)
              : E < 2 * k
              ? (b = u.speed * 1.5)
              : (b = u.speed * 2.5);
          }
        } else if (u.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        u.freeMode.momentumBounce && y
          ? (e.updateProgress(_),
            e.setTransition(b),
            e.setTranslate(g),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            Xn(h, () => {
              !e ||
                e.destroyed ||
                !d.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(u.speed),
                setTimeout(() => {
                  e.setTranslate(_),
                    Xn(h, () => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (i("_freeModeNoMomentumRelease"),
            e.updateProgress(g),
            e.setTransition(b),
            e.setTranslate(g),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              Xn(h, () => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(g),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (u.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else u.freeMode && i("_freeModeNoMomentumRelease");
      (!u.freeMode.momentum || w >= u.longSwipesMs) &&
        (i("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: { onTouchStart: s, onTouchMove: a, onTouchEnd: o },
    });
  }
  function Mm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ grid: { rows: 1, fill: "column" } });
    let r, s, a, o;
    const l = () => {
        let f = e.params.spaceBetween;
        return (
          typeof f == "string" && f.indexOf("%") >= 0
            ? (f = (parseFloat(f.replace("%", "")) / 100) * e.size)
            : typeof f == "string" && (f = parseFloat(f)),
          f
        );
      },
      c = (f) => {
        const { slidesPerView: w } = e.params,
          { rows: b, fill: v } = e.params.grid,
          g =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : f.length;
        (a = Math.floor(g / b)),
          Math.floor(g / b) === g / b ? (r = g) : (r = Math.ceil(g / b) * b),
          w !== "auto" && v === "row" && (r = Math.max(r, w * b)),
          (s = r / b);
      },
      u = () => {
        e.slides &&
          e.slides.forEach((f) => {
            f.swiperSlideGridSet &&
              ((f.style.height = ""),
              (f.style[e.getDirectionLabel("margin-top")] = ""));
          });
      },
      h = (f, w, b) => {
        const { slidesPerGroup: v } = e.params,
          g = l(),
          { rows: y, fill: _ } = e.params.grid,
          A =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : b.length;
        let M, E, k;
        if (_ === "row" && v > 1) {
          const x = Math.floor(f / (v * y)),
            D = f - y * v * x,
            S = x === 0 ? v : Math.min(Math.ceil((A - x * y * v) / y), v);
          (k = Math.floor(D / S)),
            (E = D - k * S + x * v),
            (M = E + (k * r) / y),
            (w.style.order = M);
        } else
          _ === "column"
            ? ((E = Math.floor(f / y)),
              (k = f - E * y),
              (E > a || (E === a && k === y - 1)) &&
                ((k += 1), k >= y && ((k = 0), (E += 1))))
            : ((k = Math.floor(f / s)), (E = f - k * s));
        (w.row = k),
          (w.column = E),
          (w.style.height = `calc((100% - ${(y - 1) * g}px) / ${y})`),
          (w.style[e.getDirectionLabel("margin-top")] =
            k !== 0 ? g && `${g}px` : ""),
          (w.swiperSlideGridSet = !0);
      },
      m = (f, w) => {
        const { centeredSlides: b, roundLengths: v } = e.params,
          g = l(),
          { rows: y } = e.params.grid;
        if (
          ((e.virtualSize = (f + g) * r),
          (e.virtualSize = Math.ceil(e.virtualSize / y) - g),
          e.params.cssMode ||
            (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
              e.virtualSize + g
            }px`),
          b)
        ) {
          const _ = [];
          for (let A = 0; A < w.length; A += 1) {
            let M = w[A];
            v && (M = Math.floor(M)), w[A] < e.virtualSize + w[0] && _.push(M);
          }
          w.splice(0, w.length), w.push(..._);
        }
      },
      p = () => {
        o = e.params.grid && e.params.grid.rows > 1;
      },
      d = () => {
        const { params: f, el: w } = e,
          b = f.grid && f.grid.rows > 1;
        o && !b
          ? (w.classList.remove(
              `${f.containerModifierClass}grid`,
              `${f.containerModifierClass}grid-column`
            ),
            (a = 1),
            e.emitContainerClasses())
          : !o &&
            b &&
            (w.classList.add(`${f.containerModifierClass}grid`),
            f.grid.fill === "column" &&
              w.classList.add(`${f.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          (o = b);
      };
    i("init", p),
      i("update", d),
      (e.grid = {
        initSlides: c,
        unsetSlides: u,
        updateSlide: h,
        updateWrapperSize: m,
      });
  }
  function Am(n) {
    const e = this,
      { params: t, slidesEl: i } = e;
    t.loop && e.loopDestroy();
    const r = (s) => {
      if (typeof s == "string") {
        const a = document.createElement("div");
        (a.innerHTML = s), i.append(a.children[0]), (a.innerHTML = "");
      } else i.append(s);
    };
    if (typeof n == "object" && "length" in n)
      for (let s = 0; s < n.length; s += 1) n[s] && r(n[s]);
    else r(n);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update();
  }
  function km(n) {
    const e = this,
      { params: t, activeIndex: i, slidesEl: r } = e;
    t.loop && e.loopDestroy();
    let s = i + 1;
    const a = (o) => {
      if (typeof o == "string") {
        const l = document.createElement("div");
        (l.innerHTML = o), r.prepend(l.children[0]), (l.innerHTML = "");
      } else r.prepend(o);
    };
    if (typeof n == "object" && "length" in n) {
      for (let o = 0; o < n.length; o += 1) n[o] && a(n[o]);
      s = i + n.length;
    } else a(n);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update(),
      e.slideTo(s, 0, !1);
  }
  function Cm(n, e) {
    const t = this,
      { params: i, activeIndex: r, slidesEl: s } = t;
    let a = r;
    i.loop && ((a -= t.loopedSlides), t.loopDestroy(), t.recalcSlides());
    const o = t.slides.length;
    if (n <= 0) {
      t.prependSlide(e);
      return;
    }
    if (n >= o) {
      t.appendSlide(e);
      return;
    }
    let l = a > n ? a + 1 : a;
    const c = [];
    for (let u = o - 1; u >= n; u -= 1) {
      const h = t.slides[u];
      h.remove(), c.unshift(h);
    }
    if (typeof e == "object" && "length" in e) {
      for (let u = 0; u < e.length; u += 1) e[u] && s.append(e[u]);
      l = a > n ? a + e.length : a;
    } else s.append(e);
    for (let u = 0; u < c.length; u += 1) s.append(c[u]);
    t.recalcSlides(),
      i.loop && t.loopCreate(),
      (!i.observer || t.isElement) && t.update(),
      i.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function Pm(n) {
    const e = this,
      { params: t, activeIndex: i } = e;
    let r = i;
    t.loop && ((r -= e.loopedSlides), e.loopDestroy());
    let s = r,
      a;
    if (typeof n == "object" && "length" in n) {
      for (let o = 0; o < n.length; o += 1)
        (a = n[o]), e.slides[a] && e.slides[a].remove(), a < s && (s -= 1);
      s = Math.max(s, 0);
    } else (a = n), e.slides[a] && e.slides[a].remove(), a < s && (s -= 1), (s = Math.max(s, 0));
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update(),
      t.loop ? e.slideTo(s + e.loopedSlides, 0, !1) : e.slideTo(s, 0, !1);
  }
  function Om() {
    const n = this,
      e = [];
    for (let t = 0; t < n.slides.length; t += 1) e.push(t);
    n.removeSlide(e);
  }
  function Im(n) {
    let { swiper: e } = n;
    Object.assign(e, {
      appendSlide: Am.bind(e),
      prependSlide: km.bind(e),
      addSlide: Cm.bind(e),
      removeSlide: Pm.bind(e),
      removeAllSlides: Om.bind(e),
    });
  }
  function tn(n) {
    const {
      effect: e,
      swiper: t,
      on: i,
      setTranslate: r,
      setTransition: s,
      overwriteParams: a,
      perspective: o,
      recreateShadows: l,
      getEffectParams: c,
    } = n;
    i("beforeInit", () => {
      if (t.params.effect !== e) return;
      t.classNames.push(`${t.params.containerModifierClass}${e}`),
        o && o() && t.classNames.push(`${t.params.containerModifierClass}3d`);
      const h = a ? a() : {};
      Object.assign(t.params, h), Object.assign(t.originalParams, h);
    }),
      i("setTranslate", () => {
        t.params.effect === e && r();
      }),
      i("setTransition", (h, m) => {
        t.params.effect === e && s(m);
      }),
      i("transitionEnd", () => {
        if (t.params.effect === e && l) {
          if (!c || !c().slideShadows) return;
          t.slides.forEach((h) => {
            h.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((m) => m.remove());
          }),
            l();
        }
      });
    let u;
    i("virtualUpdate", () => {
      t.params.effect === e &&
        (t.slides.length || (u = !0),
        requestAnimationFrame(() => {
          u && t.slides && t.slides.length && (r(), (u = !1));
        }));
    });
  }
  function Un(n, e) {
    const t = _r(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function Us(n) {
    let { swiper: e, duration: t, transformElements: i, allSlides: r } = n;
    const { activeIndex: s } = e,
      a = (o) =>
        o.parentElement
          ? o.parentElement
          : e.slides.find((c) => c.shadowRoot && c.shadowRoot === o.parentNode);
    if (e.params.virtualTranslate && t !== 0) {
      let o = !1,
        l;
      r
        ? (l = i)
        : (l = i.filter((c) => {
            const u = c.classList.contains("swiper-slide-transform") ? a(c) : c;
            return e.getSlideIndex(u) === s;
          })),
        l.forEach((c) => {
          Xn(c, () => {
            if (o || !e || e.destroyed) return;
            (o = !0), (e.animating = !1);
            const u = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            e.wrapperEl.dispatchEvent(u);
          });
        });
    }
  }
  function Lm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ fadeEffect: { crossFade: !1 } }),
      tn({
        effect: "fade",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: a } = e,
            o = e.params.fadeEffect;
          for (let l = 0; l < a.length; l += 1) {
            const c = e.slides[l];
            let h = -c.swiperSlideOffset;
            e.params.virtualTranslate || (h -= e.translate);
            let m = 0;
            e.isHorizontal() || ((m = h), (h = 0));
            const p = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(c.progress), 0)
                : 1 + Math.min(Math.max(c.progress, -1), 0),
              d = Un(o, c);
            (d.style.opacity = p),
              (d.style.transform = `translate3d(${h}px, ${m}px, 0px)`);
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => _r(l));
          o.forEach((l) => {
            l.style.transitionDuration = `${a}ms`;
          }),
            Us({ swiper: e, duration: a, transformElements: o, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  function Dm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const r = (l, c, u) => {
      let h = u
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        m = u
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      h ||
        ((h = $t(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            u ? "left" : "top"
          }`.split(" ")
        )),
        l.append(h)),
        m ||
          ((m = $t(
            "div",
            `swiper-slide-shadow-cube swiper-slide-shadow-${
              u ? "right" : "bottom"
            }`.split(" ")
          )),
          l.append(m)),
        h && (h.style.opacity = Math.max(-c, 0)),
        m && (m.style.opacity = Math.max(c, 0));
    };
    tn({
      effect: "cube",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
            el: l,
            wrapperEl: c,
            slides: u,
            width: h,
            height: m,
            rtlTranslate: p,
            size: d,
            browser: f,
          } = e,
          w = js(e),
          b = e.params.cubeEffect,
          v = e.isHorizontal(),
          g = e.virtual && e.params.virtual.enabled;
        let y = 0,
          _;
        b.shadow &&
          (v
            ? ((_ = e.wrapperEl.querySelector(".swiper-cube-shadow")),
              _ ||
                ((_ = $t("div", "swiper-cube-shadow")), e.wrapperEl.append(_)),
              (_.style.height = `${h}px`))
            : ((_ = l.querySelector(".swiper-cube-shadow")),
              _ || ((_ = $t("div", "swiper-cube-shadow")), l.append(_))));
        for (let M = 0; M < u.length; M += 1) {
          const E = u[M];
          let k = M;
          g && (k = parseInt(E.getAttribute("data-swiper-slide-index"), 10));
          let x = k * 90,
            D = Math.floor(x / 360);
          p && ((x = -x), (D = Math.floor(-x / 360)));
          const S = Math.max(Math.min(E.progress, 1), -1);
          let T = 0,
            C = 0,
            L = 0;
          k % 4 === 0
            ? ((T = -D * 4 * d), (L = 0))
            : (k - 1) % 4 === 0
            ? ((T = 0), (L = -D * 4 * d))
            : (k - 2) % 4 === 0
            ? ((T = d + D * 4 * d), (L = d))
            : (k - 3) % 4 === 0 && ((T = -d), (L = 3 * d + d * 4 * D)),
            p && (T = -T),
            v || ((C = T), (T = 0));
          const z = `rotateX(${w(v ? 0 : -x)}deg) rotateY(${w(
            v ? x : 0
          )}deg) translate3d(${T}px, ${C}px, ${L}px)`;
          S <= 1 &&
            S > -1 &&
            ((y = k * 90 + S * 90), p && (y = -k * 90 - S * 90)),
            (E.style.transform = z),
            b.slideShadows && r(E, S, v);
        }
        if (
          ((c.style.transformOrigin = `50% 50% -${d / 2}px`),
          (c.style["-webkit-transform-origin"] = `50% 50% -${d / 2}px`),
          b.shadow)
        )
          if (v)
            _.style.transform = `translate3d(0px, ${
              h / 2 + b.shadowOffset
            }px, ${-h / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
              b.shadowScale
            })`;
          else {
            const M = Math.abs(y) - Math.floor(Math.abs(y) / 90) * 90,
              E =
                1.5 -
                (Math.sin((M * 2 * Math.PI) / 360) / 2 +
                  Math.cos((M * 2 * Math.PI) / 360) / 2),
              k = b.shadowScale,
              x = b.shadowScale / E,
              D = b.shadowOffset;
            _.style.transform = `scale3d(${k}, 1, ${x}) translate3d(0px, ${
              m / 2 + D
            }px, ${-m / 2 / x}px) rotateX(-89.99deg)`;
          }
        const A =
          (f.isSafari || f.isWebView) && f.needPerspectiveFix ? -d / 2 : 0;
        (c.style.transform = `translate3d(0px,0,${A}px) rotateX(${w(
          e.isHorizontal() ? 0 : y
        )}deg) rotateY(${w(e.isHorizontal() ? -y : 0)}deg)`),
          c.style.setProperty("--swiper-cube-translate-z", `${A}px`);
      },
      setTransition: (l) => {
        const { el: c, slides: u } = e;
        if (
          (u.forEach((h) => {
            (h.style.transitionDuration = `${l}ms`),
              h
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((m) => {
                  m.style.transitionDuration = `${l}ms`;
                });
          }),
          e.params.cubeEffect.shadow && !e.isHorizontal())
        ) {
          const h = c.querySelector(".swiper-cube-shadow");
          h && (h.style.transitionDuration = `${l}ms`);
        }
      },
      recreateShadows: () => {
        const l = e.isHorizontal();
        e.slides.forEach((c) => {
          const u = Math.max(Math.min(c.progress, 1), -1);
          r(c, u, l);
        });
      },
      getEffectParams: () => e.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0,
      }),
    });
  }
  function rn(n, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
        n ? ` swiper-slide-shadow-${n}` : ""
      }`,
      r = _r(e);
    let s = r.querySelector(`.${i.split(" ").join(".")}`);
    return s || ((s = $t("div", i.split(" "))), r.append(s)), s;
  }
  function zm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
    const r = (l, c) => {
      let u = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        h = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      u || (u = rn("flip", l, e.isHorizontal() ? "left" : "top")),
        h || (h = rn("flip", l, e.isHorizontal() ? "right" : "bottom")),
        u && (u.style.opacity = Math.max(-c, 0)),
        h && (h.style.opacity = Math.max(c, 0));
    };
    tn({
      effect: "flip",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: l, rtlTranslate: c } = e,
          u = e.params.flipEffect,
          h = js(e);
        for (let m = 0; m < l.length; m += 1) {
          const p = l[m];
          let d = p.progress;
          e.params.flipEffect.limitRotation &&
            (d = Math.max(Math.min(p.progress, 1), -1));
          const f = p.swiperSlideOffset;
          let b = -180 * d,
            v = 0,
            g = e.params.cssMode ? -f - e.translate : -f,
            y = 0;
          e.isHorizontal()
            ? c && (b = -b)
            : ((y = g), (g = 0), (v = -b), (b = 0)),
            (p.style.zIndex = -Math.abs(Math.round(d)) + l.length),
            u.slideShadows && r(p, d);
          const _ = `translate3d(${g}px, ${y}px, 0px) rotateX(${h(
              v
            )}deg) rotateY(${h(b)}deg)`,
            A = Un(u, p);
          A.style.transform = _;
        }
      },
      setTransition: (l) => {
        const c = e.slides.map((u) => _r(u));
        c.forEach((u) => {
          (u.style.transitionDuration = `${l}ms`),
            u
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((h) => {
                h.style.transitionDuration = `${l}ms`;
              });
        }),
          Us({ swiper: e, duration: l, transformElements: c });
      },
      recreateShadows: () => {
        e.params.flipEffect,
          e.slides.forEach((l) => {
            let c = l.progress;
            e.params.flipEffect.limitRotation &&
              (c = Math.max(Math.min(l.progress, 1), -1)),
              r(l, c);
          });
      },
      getEffectParams: () => e.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function Rm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
      },
    }),
      tn({
        effect: "coverflow",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { width: a, height: o, slides: l, slidesSizesGrid: c } = e,
            u = e.params.coverflowEffect,
            h = e.isHorizontal(),
            m = e.translate,
            p = h ? -m + a / 2 : -m + o / 2,
            d = h ? u.rotate : -u.rotate,
            f = u.depth,
            w = js(e);
          for (let b = 0, v = l.length; b < v; b += 1) {
            const g = l[b],
              y = c[b],
              _ = g.swiperSlideOffset,
              A = (p - _ - y / 2) / y,
              M =
                typeof u.modifier == "function"
                  ? u.modifier(A)
                  : A * u.modifier;
            let E = h ? d * M : 0,
              k = h ? 0 : d * M,
              x = -f * Math.abs(M),
              D = u.stretch;
            typeof D == "string" &&
              D.indexOf("%") !== -1 &&
              (D = (parseFloat(u.stretch) / 100) * y);
            let S = h ? 0 : D * M,
              T = h ? D * M : 0,
              C = 1 - (1 - u.scale) * Math.abs(M);
            Math.abs(T) < 0.001 && (T = 0),
              Math.abs(S) < 0.001 && (S = 0),
              Math.abs(x) < 0.001 && (x = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(k) < 0.001 && (k = 0),
              Math.abs(C) < 0.001 && (C = 0);
            const L = `translate3d(${T}px,${S}px,${x}px)  rotateX(${w(
                k
              )}deg) rotateY(${w(E)}deg) scale(${C})`,
              z = Un(u, g);
            if (
              ((z.style.transform = L),
              (g.style.zIndex = -Math.abs(Math.round(M)) + 1),
              u.slideShadows)
            ) {
              let O = h
                  ? g.querySelector(".swiper-slide-shadow-left")
                  : g.querySelector(".swiper-slide-shadow-top"),
                I = h
                  ? g.querySelector(".swiper-slide-shadow-right")
                  : g.querySelector(".swiper-slide-shadow-bottom");
              O || (O = rn("coverflow", g, h ? "left" : "top")),
                I || (I = rn("coverflow", g, h ? "right" : "bottom")),
                O && (O.style.opacity = M > 0 ? M : 0),
                I && (I.style.opacity = -M > 0 ? -M : 0);
            }
          }
        },
        setTransition: (a) => {
          e.slides
            .map((l) => _r(l))
            .forEach((l) => {
              (l.style.transitionDuration = `${a}ms`),
                l
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((c) => {
                    c.style.transitionDuration = `${a}ms`;
                  });
            });
        },
        perspective: () => !0,
        overwriteParams: () => ({ watchSlidesProgress: !0 }),
      });
  }
  function Nm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
        next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
      },
    });
    const r = (o) => (typeof o == "string" ? o : `${o}px`);
    tn({
      effect: "creative",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: o, wrapperEl: l, slidesSizesGrid: c } = e,
          u = e.params.creativeEffect,
          { progressMultiplier: h } = u,
          m = e.params.centeredSlides,
          p = js(e);
        if (m) {
          const d = c[0] / 2 - e.params.slidesOffsetBefore || 0;
          l.style.transform = `translateX(calc(50% - ${d}px))`;
        }
        for (let d = 0; d < o.length; d += 1) {
          const f = o[d],
            w = f.progress,
            b = Math.min(
              Math.max(f.progress, -u.limitProgress),
              u.limitProgress
            );
          let v = b;
          m ||
            (v = Math.min(
              Math.max(f.originalProgress, -u.limitProgress),
              u.limitProgress
            ));
          const g = f.swiperSlideOffset,
            y = [e.params.cssMode ? -g - e.translate : -g, 0, 0],
            _ = [0, 0, 0];
          let A = !1;
          e.isHorizontal() || ((y[1] = y[0]), (y[0] = 0));
          let M = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          b < 0 ? ((M = u.next), (A = !0)) : b > 0 && ((M = u.prev), (A = !0)),
            y.forEach((C, L) => {
              y[L] = `calc(${C}px + (${r(M.translate[L])} * ${Math.abs(
                b * h
              )}))`;
            }),
            _.forEach((C, L) => {
              let z = M.rotate[L] * Math.abs(b * h);
              _[L] = z;
            }),
            (f.style.zIndex = -Math.abs(Math.round(w)) + o.length);
          const E = y.join(", "),
            k = `rotateX(${p(_[0])}deg) rotateY(${p(_[1])}deg) rotateZ(${p(
              _[2]
            )}deg)`,
            x =
              v < 0
                ? `scale(${1 + (1 - M.scale) * v * h})`
                : `scale(${1 - (1 - M.scale) * v * h})`,
            D =
              v < 0 ? 1 + (1 - M.opacity) * v * h : 1 - (1 - M.opacity) * v * h,
            S = `translate3d(${E}) ${k} ${x}`;
          if ((A && M.shadow) || !A) {
            let C = f.querySelector(".swiper-slide-shadow");
            if ((!C && M.shadow && (C = rn("creative", f)), C)) {
              const L = u.shadowPerProgress ? b * (1 / u.limitProgress) : b;
              C.style.opacity = Math.min(Math.max(Math.abs(L), 0), 1);
            }
          }
          const T = Un(u, f);
          (T.style.transform = S),
            (T.style.opacity = D),
            M.origin && (T.style.transformOrigin = M.origin);
        }
      },
      setTransition: (o) => {
        const l = e.slides.map((c) => _r(c));
        l.forEach((c) => {
          (c.style.transitionDuration = `${o}ms`),
            c.querySelectorAll(".swiper-slide-shadow").forEach((u) => {
              u.style.transitionDuration = `${o}ms`;
            });
        }),
          Us({ swiper: e, duration: o, transformElements: l, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function Fm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      tn({
        effect: "cards",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: a, activeIndex: o, rtlTranslate: l } = e,
            c = e.params.cardsEffect,
            { startTranslate: u, isTouched: h } = e.touchEventsData,
            m = l ? -e.translate : e.translate;
          for (let p = 0; p < a.length; p += 1) {
            const d = a[p],
              f = d.progress,
              w = Math.min(Math.max(f, -4), 4);
            let b = d.swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (b -= a[0].swiperSlideOffset);
            let v = e.params.cssMode ? -b - e.translate : -b,
              g = 0;
            const y = -100 * Math.abs(w);
            let _ = 1,
              A = -c.perSlideRotate * w,
              M = c.perSlideOffset - Math.abs(w) * 0.75;
            const E =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p,
              k =
                (E === o || E === o - 1) &&
                w > 0 &&
                w < 1 &&
                (h || e.params.cssMode) &&
                m < u,
              x =
                (E === o || E === o + 1) &&
                w < 0 &&
                w > -1 &&
                (h || e.params.cssMode) &&
                m > u;
            if (k || x) {
              const C = (1 - Math.abs((Math.abs(w) - 0.5) / 0.5)) ** 0.5;
              (A += -28 * w * C),
                (_ += -0.5 * C),
                (M += 96 * C),
                (g = `${-25 * C * Math.abs(w)}%`);
            }
            if (
              (w < 0
                ? (v = `calc(${v}px ${l ? "-" : "+"} (${M * Math.abs(w)}%))`)
                : w > 0
                ? (v = `calc(${v}px ${l ? "-" : "+"} (-${M * Math.abs(w)}%))`)
                : (v = `${v}px`),
              !e.isHorizontal())
            ) {
              const C = g;
              (g = v), (v = C);
            }
            const D = w < 0 ? `${1 + (1 - _) * w}` : `${1 - (1 - _) * w}`,
              S = `
        translate3d(${v}, ${g}, ${y}px)
        rotateZ(${c.rotate ? (l ? -A : A) : 0}deg)
        scale(${D})
      `;
            if (c.slideShadows) {
              let C = d.querySelector(".swiper-slide-shadow");
              C || (C = rn("cards", d)),
                C &&
                  (C.style.opacity = Math.min(
                    Math.max((Math.abs(w) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            d.style.zIndex = -Math.abs(Math.round(f)) + a.length;
            const T = Un(c, d);
            T.style.transform = S;
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => _r(l));
          o.forEach((l) => {
            (l.style.transitionDuration = `${a}ms`),
              l.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
                c.style.transitionDuration = `${a}ms`;
              });
          }),
            Us({ swiper: e, duration: a, transformElements: o });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          _loopSwapReset: !1,
          watchSlidesProgress: !0,
          loopAdditionalSlides: 3,
          centeredSlides: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  const Bm = [
    dm,
    fm,
    pm,
    hm,
    mm,
    gm,
    wm,
    vm,
    ym,
    bm,
    _m,
    Sm,
    Tm,
    Em,
    xm,
    Mm,
    Im,
    Lm,
    Dm,
    zm,
    Rm,
    Nm,
    Fm,
  ];
  Yt.use(Bm);
  class $m {
    constructor(e = {}) {
      (this.instances = []),
        (this.globalOptions = e),
        (this.defaultConfig = {
          slidesPerView: 1.2,
          spaceBetween: 20,
          breakpoints: {
            480: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.8 },
          },
        });
    }
    init() {
      return (
        document.querySelectorAll('[data-swiper="container"]').forEach((e) => {
          const t = this.createSwiperInstance(e);
          t && this.instances.push(t);
        }),
        this.instances
      );
    }
    createSwiperInstance(e) {
      const t = e.querySelector('[data-swiper="main"]');
      if (!t) return null;
      try {
        const i = this.parseConfigFromAttributes(e, t);
        return new Yt(t, i);
      } catch (i) {
        return console.error("Swiper initialization error:", i), null;
      }
    }
    parseConfigFromAttributes(e, t) {
      const i = {
          slidesPerView: this.getDataAttribute(
            t,
            "slides-per-view",
            this.defaultConfig.slidesPerView
          ),
          spaceBetween: this.getDataAttribute(
            t,
            "space-between",
            this.defaultConfig.spaceBetween
          ),
          loop: this.getDataAttribute(t, "loop", !1),
          autoplay: this.parseAutoplay(t),
          effect: this.getDataAttribute(t, "effect", "slide"),
        },
        r = e.querySelector('[data-swiper="button-next"]'),
        s = e.querySelector('[data-swiper="button-prev"]');
      (r || s) && (i.navigation = { nextEl: r, prevEl: s });
      const a = e.querySelector('[data-swiper="pagination"]');
      a &&
        (i.pagination = {
          el: a,
          clickable: this.getDataAttribute(a, "clickable", !0),
          dynamicBullets: this.getDataAttribute(a, "dynamic-bullets", !1),
          type: this.getDataAttribute(a, "type", "bullets"),
        });
      const o = e.querySelector('[data-swiper="scrollbar"]');
      o &&
        (i.scrollbar = {
          el: o,
          draggable: this.getDataAttribute(o, "draggable", !0),
          hide: this.getDataAttribute(o, "hide", !1),
        }),
        (i.breakpoints = this.parseBreakpoints(t));
      const l = { ...this.defaultConfig };
      return (
        i.breakpoints &&
          Object.keys(i.breakpoints).length > 0 &&
          delete l.breakpoints,
        { ...l, ...i, ...this.globalOptions }
      );
    }
    parseAutoplay(e) {
      return this.getDataAttribute(e, "autoplay", !1)
        ? {
            delay: this.getDataAttribute(e, "autoplay-delay", 3e3),
            disableOnInteraction: this.getDataAttribute(
              e,
              "autoplay-disable-on-interaction",
              !0
            ),
            pauseOnMouseEnter: this.getDataAttribute(
              e,
              "autoplay-pause-on-mouse-enter",
              !1
            ),
          }
        : !1;
    }
    parseBreakpoints(e) {
      const t = {
          480: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 3.8 },
        },
        i = this.getDataAttribute(e, "use-default-breakpoints", !0),
        r = i ? { ...t } : {};
      return (
        [480, 768, 1024, 1280].forEach((a) => {
          const o = this.getDataAttribute(e, `slides-per-view-${a}`, null),
            l = this.getDataAttribute(e, `space-between-${a}`, null);
          (o !== null || l !== null) &&
            (r[a] || (r[a] = {}),
            o !== null && (r[a].slidesPerView = o),
            l !== null && (r[a].spaceBetween = l));
        }),
        i || Object.keys(r).length > 0 ? r : null
      );
    }
    getDataAttribute(e, t, i) {
      const r = `data-swiper-${t}`;
      if (!e.hasAttribute(r)) return i;
      const s = e.getAttribute(r);
      return s === "true"
        ? !0
        : s === "false"
        ? !1
        : s === "null"
        ? null
        : !isNaN(s) && s !== ""
        ? Number(s)
        : s;
    }
    destroy() {
      this.instances.forEach((e) => {
        e && typeof e.destroy == "function" && e.destroy();
      }),
        (this.instances = []);
    }
  }
  function Zs(n = {}) {
    return new $m(n).init();
  }
  function Ym() {
    jp(), Zs();
  }
  ke.registerPlugin(Q);
  const Hm = () => {
      const n = document.querySelector('[hero-image-reveal="wrapper"]'),
        e = document.querySelector('[hero-image-reveal="middle"]'),
        t = document.querySelector('[hero-image-reveal="left"]'),
        i = document.querySelector('[hero-image-reveal="right"]'),
        r = document.querySelectorAll('[hero-image-reveal="img"]'),
        s = document.querySelector('[hero-image-reveal="scroll"]'),
        a = document.querySelector('[hero-image-reveal="marquee"]');
      ke.timeline({
        scrollTrigger: {
          trigger: n,
          start: "top 0%",
          end: "top -=100%",
          scrub: 1.2,
          markers: !1,
        },
      })
        .fromTo(
          r,
          { scale: 1.1, filter: "blur(3px)" },
          { scale: 1, filter: "blur(0px)", duration: 1.8, ease: "power2.out" },
          "<"
        )
        .to(s, { yPercent: 100, duration: 1.8, ease: "power2.out" }, "<")
        .fromTo(
          a,
          { opacity: 0, yPercent: 100 },
          { opacity: 1, yPercent: 0, duration: 1.8, ease: "power2.out" },
          "<"
        )
        .fromTo(
          e,
          { scale: 0.95, yPercent: 6.5 },
          { scale: 1, yPercent: 0, duration: 1.8, ease: "power2.out" },
          "<"
        )
        .fromTo(
          t,
          { xPercent: 0, scale: 0.9, rotate: "0deg" },
          {
            xPercent: -60,
            duration: 1.5,
            rotate: "-10deg",
            ease: "power2.out",
          },
          "<"
        )
        .fromTo(
          i,
          { xPercent: 0, scale: 0.9, rotate: "0deg" },
          {
            xPercent: 60,
            scale: 1,
            rotate: "10deg",
            duration: 1.5,
            ease: "power2.out",
          },
          "<"
        );
    },
    Wm = () => {
      Hm();
    };
  function Vm() {
    Ym(), Wm();
  }
  function qm() {
    console.log("About Component Animation Starter Initialized");
  }
  function Gm() {
    qm();
  }
  /*! @vimeo/player v2.26.0 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function Yu(
    n,
    e
  ) {
    var t = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(n);
      e &&
        (i = i.filter(function (r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })),
        t.push.apply(t, i);
    }
    return t;
  }
  function Hu(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Yu(Object(t), !0).forEach(function (i) {
            Ks(n, i, t[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
        : Yu(Object(t)).forEach(function (i) {
            Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
          });
    }
    return n;
  }
  function bt() {
    bt = function () {
      return n;
    };
    var n = {},
      e = Object.prototype,
      t = e.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (S, T, C) {
          S[T] = C.value;
        },
      r = typeof Symbol == "function" ? Symbol : {},
      s = r.iterator || "@@iterator",
      a = r.asyncIterator || "@@asyncIterator",
      o = r.toStringTag || "@@toStringTag";
    function l(S, T, C) {
      return (
        Object.defineProperty(S, T, {
          value: C,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        S[T]
      );
    }
    try {
      l({}, "");
    } catch {
      l = function (T, C, L) {
        return (T[C] = L);
      };
    }
    function c(S, T, C, L) {
      var z = T && T.prototype instanceof m ? T : m,
        O = Object.create(z.prototype),
        I = new k(L || []);
      return i(O, "_invoke", { value: _(S, C, I) }), O;
    }
    function u(S, T, C) {
      try {
        return { type: "normal", arg: S.call(T, C) };
      } catch (L) {
        return { type: "throw", arg: L };
      }
    }
    n.wrap = c;
    var h = {};
    function m() {}
    function p() {}
    function d() {}
    var f = {};
    l(f, s, function () {
      return this;
    });
    var w = Object.getPrototypeOf,
      b = w && w(w(x([])));
    b && b !== e && t.call(b, s) && (f = b);
    var v = (d.prototype = m.prototype = Object.create(f));
    function g(S) {
      ["next", "throw", "return"].forEach(function (T) {
        l(S, T, function (C) {
          return this._invoke(T, C);
        });
      });
    }
    function y(S, T) {
      function C(z, O, I, N) {
        var P = u(S[z], S, O);
        if (P.type !== "throw") {
          var H = P.arg,
            G = H.value;
          return G && typeof G == "object" && t.call(G, "__await")
            ? T.resolve(G.__await).then(
                function (re) {
                  C("next", re, I, N);
                },
                function (re) {
                  C("throw", re, I, N);
                }
              )
            : T.resolve(G).then(
                function (re) {
                  (H.value = re), I(H);
                },
                function (re) {
                  return C("throw", re, I, N);
                }
              );
        }
        N(P.arg);
      }
      var L;
      i(this, "_invoke", {
        value: function (z, O) {
          function I() {
            return new T(function (N, P) {
              C(z, O, N, P);
            });
          }
          return (L = L ? L.then(I, I) : I());
        },
      });
    }
    function _(S, T, C) {
      var L = "suspendedStart";
      return function (z, O) {
        if (L === "executing") throw new Error("Generator is already running");
        if (L === "completed") {
          if (z === "throw") throw O;
          return D();
        }
        for (C.method = z, C.arg = O; ; ) {
          var I = C.delegate;
          if (I) {
            var N = A(I, C);
            if (N) {
              if (N === h) continue;
              return N;
            }
          }
          if (C.method === "next") C.sent = C._sent = C.arg;
          else if (C.method === "throw") {
            if (L === "suspendedStart") throw ((L = "completed"), C.arg);
            C.dispatchException(C.arg);
          } else C.method === "return" && C.abrupt("return", C.arg);
          L = "executing";
          var P = u(S, T, C);
          if (P.type === "normal") {
            if (((L = C.done ? "completed" : "suspendedYield"), P.arg === h))
              continue;
            return { value: P.arg, done: C.done };
          }
          P.type === "throw" &&
            ((L = "completed"), (C.method = "throw"), (C.arg = P.arg));
        }
      };
    }
    function A(S, T) {
      var C = T.method,
        L = S.iterator[C];
      if (L === void 0)
        return (
          (T.delegate = null),
          (C === "throw" &&
            S.iterator.return &&
            ((T.method = "return"),
            (T.arg = void 0),
            A(S, T),
            T.method === "throw")) ||
            (C !== "return" &&
              ((T.method = "throw"),
              (T.arg = new TypeError(
                "The iterator does not provide a '" + C + "' method"
              )))),
          h
        );
      var z = u(L, S.iterator, T.arg);
      if (z.type === "throw")
        return (T.method = "throw"), (T.arg = z.arg), (T.delegate = null), h;
      var O = z.arg;
      return O
        ? O.done
          ? ((T[S.resultName] = O.value),
            (T.next = S.nextLoc),
            T.method !== "return" && ((T.method = "next"), (T.arg = void 0)),
            (T.delegate = null),
            h)
          : O
        : ((T.method = "throw"),
          (T.arg = new TypeError("iterator result is not an object")),
          (T.delegate = null),
          h);
    }
    function M(S) {
      var T = { tryLoc: S[0] };
      1 in S && (T.catchLoc = S[1]),
        2 in S && ((T.finallyLoc = S[2]), (T.afterLoc = S[3])),
        this.tryEntries.push(T);
    }
    function E(S) {
      var T = S.completion || {};
      (T.type = "normal"), delete T.arg, (S.completion = T);
    }
    function k(S) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        S.forEach(M, this),
        this.reset(!0);
    }
    function x(S) {
      if (S) {
        var T = S[s];
        if (T) return T.call(S);
        if (typeof S.next == "function") return S;
        if (!isNaN(S.length)) {
          var C = -1,
            L = function z() {
              for (; ++C < S.length; )
                if (t.call(S, C)) return (z.value = S[C]), (z.done = !1), z;
              return (z.value = void 0), (z.done = !0), z;
            };
          return (L.next = L);
        }
      }
      return { next: D };
    }
    function D() {
      return { value: void 0, done: !0 };
    }
    return (
      (p.prototype = d),
      i(v, "constructor", { value: d, configurable: !0 }),
      i(d, "constructor", { value: p, configurable: !0 }),
      (p.displayName = l(d, o, "GeneratorFunction")),
      (n.isGeneratorFunction = function (S) {
        var T = typeof S == "function" && S.constructor;
        return (
          !!T && (T === p || (T.displayName || T.name) === "GeneratorFunction")
        );
      }),
      (n.mark = function (S) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(S, d)
            : ((S.__proto__ = d), l(S, o, "GeneratorFunction")),
          (S.prototype = Object.create(v)),
          S
        );
      }),
      (n.awrap = function (S) {
        return { __await: S };
      }),
      g(y.prototype),
      l(y.prototype, a, function () {
        return this;
      }),
      (n.AsyncIterator = y),
      (n.async = function (S, T, C, L, z) {
        z === void 0 && (z = Promise);
        var O = new y(c(S, T, C, L), z);
        return n.isGeneratorFunction(T)
          ? O
          : O.next().then(function (I) {
              return I.done ? I.value : O.next();
            });
      }),
      g(v),
      l(v, o, "Generator"),
      l(v, s, function () {
        return this;
      }),
      l(v, "toString", function () {
        return "[object Generator]";
      }),
      (n.keys = function (S) {
        var T = Object(S),
          C = [];
        for (var L in T) C.push(L);
        return (
          C.reverse(),
          function z() {
            for (; C.length; ) {
              var O = C.pop();
              if (O in T) return (z.value = O), (z.done = !1), z;
            }
            return (z.done = !0), z;
          }
        );
      }),
      (n.values = x),
      (k.prototype = {
        constructor: k,
        reset: function (S) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(E),
            !S)
          )
            for (var T in this)
              T.charAt(0) === "t" &&
                t.call(this, T) &&
                !isNaN(+T.slice(1)) &&
                (this[T] = void 0);
        },
        stop: function () {
          this.done = !0;
          var S = this.tryEntries[0].completion;
          if (S.type === "throw") throw S.arg;
          return this.rval;
        },
        dispatchException: function (S) {
          if (this.done) throw S;
          var T = this;
          function C(P, H) {
            return (
              (O.type = "throw"),
              (O.arg = S),
              (T.next = P),
              H && ((T.method = "next"), (T.arg = void 0)),
              !!H
            );
          }
          for (var L = this.tryEntries.length - 1; L >= 0; --L) {
            var z = this.tryEntries[L],
              O = z.completion;
            if (z.tryLoc === "root") return C("end");
            if (z.tryLoc <= this.prev) {
              var I = t.call(z, "catchLoc"),
                N = t.call(z, "finallyLoc");
              if (I && N) {
                if (this.prev < z.catchLoc) return C(z.catchLoc, !0);
                if (this.prev < z.finallyLoc) return C(z.finallyLoc);
              } else if (I) {
                if (this.prev < z.catchLoc) return C(z.catchLoc, !0);
              } else {
                if (!N)
                  throw new Error("try statement without catch or finally");
                if (this.prev < z.finallyLoc) return C(z.finallyLoc);
              }
            }
          }
        },
        abrupt: function (S, T) {
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var L = this.tryEntries[C];
            if (
              L.tryLoc <= this.prev &&
              t.call(L, "finallyLoc") &&
              this.prev < L.finallyLoc
            ) {
              var z = L;
              break;
            }
          }
          z &&
            (S === "break" || S === "continue") &&
            z.tryLoc <= T &&
            T <= z.finallyLoc &&
            (z = null);
          var O = z ? z.completion : {};
          return (
            (O.type = S),
            (O.arg = T),
            z
              ? ((this.method = "next"), (this.next = z.finallyLoc), h)
              : this.complete(O)
          );
        },
        complete: function (S, T) {
          if (S.type === "throw") throw S.arg;
          return (
            S.type === "break" || S.type === "continue"
              ? (this.next = S.arg)
              : S.type === "return"
              ? ((this.rval = this.arg = S.arg),
                (this.method = "return"),
                (this.next = "end"))
              : S.type === "normal" && T && (this.next = T),
            h
          );
        },
        finish: function (S) {
          for (var T = this.tryEntries.length - 1; T >= 0; --T) {
            var C = this.tryEntries[T];
            if (C.finallyLoc === S)
              return this.complete(C.completion, C.afterLoc), E(C), h;
          }
        },
        catch: function (S) {
          for (var T = this.tryEntries.length - 1; T >= 0; --T) {
            var C = this.tryEntries[T];
            if (C.tryLoc === S) {
              var L = C.completion;
              if (L.type === "throw") {
                var z = L.arg;
                E(C);
              }
              return z;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (S, T, C) {
          return (
            (this.delegate = { iterator: x(S), resultName: T, nextLoc: C }),
            this.method === "next" && (this.arg = void 0),
            h
          );
        },
      }),
      n
    );
  }
  function Wu(n, e, t, i, r, s, a) {
    try {
      var o = n[s](a),
        l = o.value;
    } catch (c) {
      t(c);
      return;
    }
    o.done ? e(l) : Promise.resolve(l).then(i, r);
  }
  function Tr(n) {
    return function () {
      var e = this,
        t = arguments;
      return new Promise(function (i, r) {
        var s = n.apply(e, t);
        function a(l) {
          Wu(s, i, r, a, o, "next", l);
        }
        function o(l) {
          Wu(s, i, r, a, o, "throw", l);
        }
        a(void 0);
      });
    };
  }
  function Vu(n, e) {
    if (!(n instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function jm(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, ju(i.key), i);
    }
  }
  function qu(n, e, t) {
    return (
      e && jm(n.prototype, e),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
  }
  function Ks(n, e, t) {
    return (
      (e = ju(e)),
      e in n
        ? Object.defineProperty(n, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (n[e] = t),
      n
    );
  }
  function Xm(n, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    (n.prototype = Object.create(e && e.prototype, {
      constructor: { value: n, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      e && Kn(n, e);
  }
  function Zn(n) {
    return (
      (Zn = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      Zn(n)
    );
  }
  function Kn(n, e) {
    return (
      (Kn = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (i, r) {
            return (i.__proto__ = r), i;
          }),
      Kn(n, e)
    );
  }
  function Gu() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function Js(n, e, t) {
    return (
      Gu()
        ? (Js = Reflect.construct.bind())
        : (Js = function (r, s, a) {
            var o = [null];
            o.push.apply(o, s);
            var l = Function.bind.apply(r, o),
              c = new l();
            return a && Kn(c, a.prototype), c;
          }),
      Js.apply(null, arguments)
    );
  }
  function Um(n) {
    return Function.toString.call(n).indexOf("[native code]") !== -1;
  }
  function Xo(n) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (Xo = function (i) {
        if (i === null || !Um(i)) return i;
        if (typeof i != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof e < "u") {
          if (e.has(i)) return e.get(i);
          e.set(i, r);
        }
        function r() {
          return Js(i, arguments, Zn(this).constructor);
        }
        return (
          (r.prototype = Object.create(i.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Kn(r, i)
        );
      }),
      Xo(n)
    );
  }
  function Qs(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function Zm(n, e) {
    if (e && (typeof e == "object" || typeof e == "function")) return e;
    if (e !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return Qs(n);
  }
  function Km(n) {
    var e = Gu();
    return function () {
      var i = Zn(n),
        r;
      if (e) {
        var s = Zn(this).constructor;
        r = Reflect.construct(i, arguments, s);
      } else r = i.apply(this, arguments);
      return Zm(this, r);
    };
  }
  function Jm(n, e) {
    if (typeof n != "object" || n === null) return n;
    var t = n[Symbol.toPrimitive];
    if (t !== void 0) {
      var i = t.call(n, e);
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(n);
  }
  function ju(n) {
    var e = Jm(n, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  var Xu =
    typeof global < "u" && {}.toString.call(global) === "[object global]";
  function Uu(n, e) {
    return n.indexOf(e.toLowerCase()) === 0
      ? n
      : ""
          .concat(e.toLowerCase())
          .concat(n.substr(0, 1).toUpperCase())
          .concat(n.substr(1));
  }
  function Qm(n) {
    return !!(
      n &&
      n.nodeType === 1 &&
      "nodeName" in n &&
      n.ownerDocument &&
      n.ownerDocument.defaultView
    );
  }
  function eg(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && Math.floor(n) == n;
  }
  function Er(n) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      n
    );
  }
  function Zu(n) {
    var e =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return e.test(n);
  }
  function tg(n) {
    for (
      var e = (n || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
        t = ((e && e[1]) || "").replace("player.", ""),
        i = [".videoji.hk", ".vimeo.work", ".videoji.cn"],
        r = 0,
        s = i;
      r < s.length;
      r++
    ) {
      var a = s[r];
      if (t.endsWith(a)) return t;
    }
    return "vimeo.com";
  }
  function Ku() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = n.id,
      t = n.url,
      i = e || t;
    if (!i)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (eg(i)) return "https://vimeo.com/".concat(i);
    if (Er(i)) return i.replace("http:", "https:");
    throw e
      ? new TypeError("“".concat(e, "” is not a valid video id."))
      : new TypeError("“".concat(i, "” is not a vimeo.com url."));
  }
  var Ju = function (e, t, i) {
      var r =
          arguments.length > 3 && arguments[3] !== void 0
            ? arguments[3]
            : "addEventListener",
        s =
          arguments.length > 4 && arguments[4] !== void 0
            ? arguments[4]
            : "removeEventListener",
        a = typeof t == "string" ? [t] : t;
      return (
        a.forEach(function (o) {
          e[r](o, i);
        }),
        {
          cancel: function () {
            return a.forEach(function (l) {
              return e[s](l, i);
            });
          },
        }
      );
    },
    ig = typeof Array.prototype.indexOf < "u",
    rg = typeof window < "u" && typeof window.postMessage < "u";
  if (!Xu && (!ig || !rg))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var nn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function ng(n, e) {
    return (e = { exports: {} }), n(e, e.exports), e.exports;
  }
  /*!
   * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */ (function (n) {
    if (n.WeakMap) return;
    var e = Object.prototype.hasOwnProperty,
      t =
        Object.defineProperty &&
        (function () {
          try {
            return Object.defineProperty({}, "x", { value: 1 }).x === 1;
          } catch {}
        })(),
      i = function (s, a, o) {
        t
          ? Object.defineProperty(s, a, {
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (s[a] = o);
      };
    n.WeakMap = (function () {
      function s() {
        if (this === void 0)
          throw new TypeError("Constructor WeakMap requires 'new'");
        if ((i(this, "_id", o("_WeakMap")), arguments.length > 0))
          throw new TypeError("WeakMap iterable is not supported");
      }
      i(s.prototype, "delete", function (c) {
        if ((a(this, "delete"), !r(c))) return !1;
        var u = c[this._id];
        return u && u[0] === c ? (delete c[this._id], !0) : !1;
      }),
        i(s.prototype, "get", function (c) {
          if ((a(this, "get"), !!r(c))) {
            var u = c[this._id];
            if (u && u[0] === c) return u[1];
          }
        }),
        i(s.prototype, "has", function (c) {
          if ((a(this, "has"), !r(c))) return !1;
          var u = c[this._id];
          return !!(u && u[0] === c);
        }),
        i(s.prototype, "set", function (c, u) {
          if ((a(this, "set"), !r(c)))
            throw new TypeError("Invalid value used as weak map key");
          var h = c[this._id];
          return h && h[0] === c
            ? ((h[1] = u), this)
            : (i(c, this._id, [c, u]), this);
        });
      function a(c, u) {
        if (!r(c) || !e.call(c, "_id"))
          throw new TypeError(
            u + " method called on incompatible receiver " + typeof c
          );
      }
      function o(c) {
        return c + "_" + l() + "." + l();
      }
      function l() {
        return Math.random().toString().substring(2);
      }
      return i(s, "_polyfill", !0), s;
    })();
    function r(s) {
      return Object(s) === s;
    }
  })(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : nn
  );
  var Jt = ng(function (n) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (t, i, r) {
        (i[t] = i[t] || r()), n.exports && (n.exports = i[t]);
      })("Promise", nn, function () {
        var t,
          i,
          r,
          s = Object.prototype.toString,
          a =
            typeof setImmediate < "u"
              ? function (g) {
                  return setImmediate(g);
                }
              : setTimeout;
        try {
          Object.defineProperty({}, "x", {}),
            (t = function (g, y, _, A) {
              return Object.defineProperty(g, y, {
                value: _,
                writable: !0,
                configurable: A !== !1,
              });
            });
        } catch {
          t = function (y, _, A) {
            return (y[_] = A), y;
          };
        }
        r = (function () {
          var g, y, _;
          function A(M, E) {
            (this.fn = M), (this.self = E), (this.next = void 0);
          }
          return {
            add: function (E, k) {
              (_ = new A(E, k)),
                y ? (y.next = _) : (g = _),
                (y = _),
                (_ = void 0);
            },
            drain: function () {
              var E = g;
              for (g = y = i = void 0; E; ) E.fn.call(E.self), (E = E.next);
            },
          };
        })();
        function o(v, g) {
          r.add(v, g), i || (i = a(r.drain));
        }
        function l(v) {
          var g,
            y = typeof v;
          return (
            v != null && (y == "object" || y == "function") && (g = v.then),
            typeof g == "function" ? g : !1
          );
        }
        function c() {
          for (var v = 0; v < this.chain.length; v++)
            u(
              this,
              this.state === 1 ? this.chain[v].success : this.chain[v].failure,
              this.chain[v]
            );
          this.chain.length = 0;
        }
        function u(v, g, y) {
          var _, A;
          try {
            g === !1
              ? y.reject(v.msg)
              : (g === !0 ? (_ = v.msg) : (_ = g.call(void 0, v.msg)),
                _ === y.promise
                  ? y.reject(TypeError("Promise-chain cycle"))
                  : (A = l(_))
                  ? A.call(_, y.resolve, y.reject)
                  : y.resolve(_));
          } catch (M) {
            y.reject(M);
          }
        }
        function h(v) {
          var g,
            y = this;
          if (!y.triggered) {
            (y.triggered = !0), y.def && (y = y.def);
            try {
              (g = l(v))
                ? o(function () {
                    var _ = new d(y);
                    try {
                      g.call(
                        v,
                        function () {
                          h.apply(_, arguments);
                        },
                        function () {
                          m.apply(_, arguments);
                        }
                      );
                    } catch (A) {
                      m.call(_, A);
                    }
                  })
                : ((y.msg = v), (y.state = 1), y.chain.length > 0 && o(c, y));
            } catch (_) {
              m.call(new d(y), _);
            }
          }
        }
        function m(v) {
          var g = this;
          g.triggered ||
            ((g.triggered = !0),
            g.def && (g = g.def),
            (g.msg = v),
            (g.state = 2),
            g.chain.length > 0 && o(c, g));
        }
        function p(v, g, y, _) {
          for (var A = 0; A < g.length; A++)
            (function (E) {
              v.resolve(g[E]).then(function (x) {
                y(E, x);
              }, _);
            })(A);
        }
        function d(v) {
          (this.def = v), (this.triggered = !1);
        }
        function f(v) {
          (this.promise = v),
            (this.state = 0),
            (this.triggered = !1),
            (this.chain = []),
            (this.msg = void 0);
        }
        function w(v) {
          if (typeof v != "function") throw TypeError("Not a function");
          if (this.__NPO__ !== 0) throw TypeError("Not a promise");
          this.__NPO__ = 1;
          var g = new f(this);
          (this.then = function (_, A) {
            var M = {
              success: typeof _ == "function" ? _ : !0,
              failure: typeof A == "function" ? A : !1,
            };
            return (
              (M.promise = new this.constructor(function (k, x) {
                if (typeof k != "function" || typeof x != "function")
                  throw TypeError("Not a function");
                (M.resolve = k), (M.reject = x);
              })),
              g.chain.push(M),
              g.state !== 0 && o(c, g),
              M.promise
            );
          }),
            (this.catch = function (_) {
              return this.then(void 0, _);
            });
          try {
            v.call(
              void 0,
              function (_) {
                h.call(g, _);
              },
              function (_) {
                m.call(g, _);
              }
            );
          } catch (y) {
            m.call(g, y);
          }
        }
        var b = t({}, "constructor", w, !1);
        return (
          (w.prototype = b),
          t(b, "__NPO__", 0, !1),
          t(w, "resolve", function (g) {
            var y = this;
            return g && typeof g == "object" && g.__NPO__ === 1
              ? g
              : new y(function (A, M) {
                  if (typeof A != "function" || typeof M != "function")
                    throw TypeError("Not a function");
                  A(g);
                });
          }),
          t(w, "reject", function (g) {
            return new this(function (_, A) {
              if (typeof _ != "function" || typeof A != "function")
                throw TypeError("Not a function");
              A(g);
            });
          }),
          t(w, "all", function (g) {
            var y = this;
            return s.call(g) != "[object Array]"
              ? y.reject(TypeError("Not an array"))
              : g.length === 0
              ? y.resolve([])
              : new y(function (A, M) {
                  if (typeof A != "function" || typeof M != "function")
                    throw TypeError("Not a function");
                  var E = g.length,
                    k = Array(E),
                    x = 0;
                  p(
                    y,
                    g,
                    function (S, T) {
                      (k[S] = T), ++x === E && A(k);
                    },
                    M
                  );
                });
          }),
          t(w, "race", function (g) {
            var y = this;
            return s.call(g) != "[object Array]"
              ? y.reject(TypeError("Not an array"))
              : new y(function (A, M) {
                  if (typeof A != "function" || typeof M != "function")
                    throw TypeError("Not a function");
                  p(
                    y,
                    g,
                    function (k, x) {
                      A(x);
                    },
                    M
                  );
                });
          }),
          w
        );
      });
    }),
    ki = new WeakMap();
  function Jn(n, e, t) {
    var i = ki.get(n.element) || {};
    e in i || (i[e] = []), i[e].push(t), ki.set(n.element, i);
  }
  function ea(n, e) {
    var t = ki.get(n.element) || {};
    return t[e] || [];
  }
  function ta(n, e, t) {
    var i = ki.get(n.element) || {};
    if (!i[e]) return !0;
    if (!t) return (i[e] = []), ki.set(n.element, i), !0;
    var r = i[e].indexOf(t);
    return (
      r !== -1 && i[e].splice(r, 1),
      ki.set(n.element, i),
      i[e] && i[e].length === 0
    );
  }
  function sg(n, e) {
    var t = ea(n, e);
    if (t.length < 1) return !1;
    var i = t.shift();
    return ta(n, e, i), i;
  }
  function ag(n, e) {
    var t = ki.get(n);
    ki.set(e, t), ki.delete(n);
  }
  function ia(n) {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch (e) {
        return console.warn(e), {};
      }
    return n;
  }
  function xr(n, e, t) {
    if (!(!n.element.contentWindow || !n.element.contentWindow.postMessage)) {
      var i = { method: e };
      t !== void 0 && (i.value = t);
      var r = parseFloat(
        navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
      );
      r >= 8 && r < 10 && (i = JSON.stringify(i)),
        n.element.contentWindow.postMessage(i, n.origin);
    }
  }
  function og(n, e) {
    e = ia(e);
    var t = [],
      i;
    if (e.event) {
      if (e.event === "error") {
        var r = ea(n, e.data.method);
        r.forEach(function (a) {
          var o = new Error(e.data.message);
          (o.name = e.data.name), a.reject(o), ta(n, e.data.method, a);
        });
      }
      (t = ea(n, "event:".concat(e.event))), (i = e.data);
    } else if (e.method) {
      var s = sg(n, e.method);
      s && (t.push(s), (i = e.value));
    }
    t.forEach(function (a) {
      try {
        if (typeof a == "function") {
          a.call(n, i);
          return;
        }
        a.resolve(i);
      } catch {}
    });
  }
  var lg = [
    "airplay",
    "audio_tracks",
    "audiotrack",
    "autopause",
    "autoplay",
    "background",
    "byline",
    "cc",
    "chapter_id",
    "chapters",
    "chromecast",
    "color",
    "colors",
    "controls",
    "dnt",
    "end_time",
    "fullscreen",
    "height",
    "id",
    "interactive_params",
    "keyboard",
    "loop",
    "maxheight",
    "maxwidth",
    "muted",
    "play_button_position",
    "playsinline",
    "portrait",
    "progress_bar",
    "quality_selector",
    "responsive",
    "skipping_forward",
    "speed",
    "start_time",
    "texttrack",
    "title",
    "transcript",
    "transparent",
    "unmute_button",
    "url",
    "vimeo_logo",
    "volume",
    "watch_full_video",
    "width",
  ];
  function Qu(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return lg.reduce(function (t, i) {
      var r = n.getAttribute("data-vimeo-".concat(i));
      return (r || r === "") && (t[i] = r === "" ? 1 : r), t;
    }, e);
  }
  function Uo(n, e) {
    var t = n.html;
    if (!e) throw new TypeError("An element must be provided");
    if (e.getAttribute("data-vimeo-initialized") !== null)
      return e.querySelector("iframe");
    var i = document.createElement("div");
    return (
      (i.innerHTML = t),
      e.appendChild(i.firstChild),
      e.setAttribute("data-vimeo-initialized", "true"),
      e.querySelector("iframe")
    );
  }
  function ed(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (i, r) {
      if (!Er(n))
        throw new TypeError("“".concat(n, "” is not a vimeo.com url."));
      var s = tg(n),
        a = "https://"
          .concat(s, "/api/oembed.json?url=")
          .concat(encodeURIComponent(n));
      for (var o in e)
        e.hasOwnProperty(o) &&
          (a += "&".concat(o, "=").concat(encodeURIComponent(e[o])));
      var l =
        "XDomainRequest" in window
          ? new XDomainRequest()
          : new XMLHttpRequest();
      l.open("GET", a, !0),
        (l.onload = function () {
          if (l.status === 404) {
            r(new Error("“".concat(n, "” was not found.")));
            return;
          }
          if (l.status === 403) {
            r(new Error("“".concat(n, "” is not embeddable.")));
            return;
          }
          try {
            var c = JSON.parse(l.responseText);
            if (c.domain_status_code === 403) {
              Uo(c, t), r(new Error("“".concat(n, "” is not embeddable.")));
              return;
            }
            i(c);
          } catch (u) {
            r(u);
          }
        }),
        (l.onerror = function () {
          var c = l.status ? " (".concat(l.status, ")") : "";
          r(
            new Error(
              "There was an error fetching the embed code from Vimeo".concat(
                c,
                "."
              )
            )
          );
        }),
        l.send();
    });
  }
  function cg() {
    var n =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : document,
      e = [].slice.call(
        n.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
      ),
      t = function (r) {
        "console" in window &&
          console.error &&
          console.error("There was an error creating an embed: ".concat(r));
      };
    e.forEach(function (i) {
      try {
        if (i.getAttribute("data-vimeo-defer") !== null) return;
        var r = Qu(i),
          s = Ku(r);
        ed(s, r, i)
          .then(function (a) {
            return Uo(a, i);
          })
          .catch(t);
      } catch (a) {
        t(a);
      }
    });
  }
  function ug() {
    var n =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var e = function (i) {
        if (Er(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
          for (var r = n.querySelectorAll("iframe"), s = 0; s < r.length; s++)
            if (r[s].contentWindow === i.source) {
              var a = r[s].parentElement;
              a.style.paddingBottom = "".concat(i.data.data[0].bottom, "px");
              break;
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function dg() {
    var n =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var e = function (i) {
        if (Er(i.origin)) {
          var r = ia(i.data);
          if (!(!r || r.event !== "ready"))
            for (
              var s = n.querySelectorAll("iframe"), a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a],
                l = o.contentWindow === i.source;
              if (Zu(o.src) && l) {
                var c = new ra(o);
                c.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function fg() {
    var n =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
      window.VimeoCheckedUrlTimeParam = !0;
      var e = function (r) {
          "console" in window &&
            console.error &&
            console.error("There was an error getting video Id: ".concat(r));
        },
        t = function (r) {
          if (Er(r.origin)) {
            var s = ia(r.data);
            if (!(!s || s.event !== "ready"))
              for (
                var a = n.querySelectorAll("iframe"),
                  o = function () {
                    var u = a[l],
                      h = u.contentWindow === r.source;
                    if (Zu(u.src) && h) {
                      var m = new ra(u);
                      m.getVideoId()
                        .then(function (p) {
                          var d = new RegExp(
                            "[?&]vimeo_t_".concat(p, "=([^&#]*)")
                          ).exec(window.location.href);
                          if (d && d[1]) {
                            var f = decodeURI(d[1]);
                            m.setCurrentTime(f);
                          }
                        })
                        .catch(e);
                    }
                  },
                  l = 0;
                l < a.length;
                l++
              )
                o();
          }
        };
      window.addEventListener("message", t);
    }
  }
  function pg() {
    var n = (function () {
        for (
          var i,
            r = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            s = 0,
            a = r.length,
            o = {};
          s < a;
          s++
        )
          if (((i = r[s]), i && i[1] in document)) {
            for (s = 0; s < i.length; s++) o[r[0][s]] = i[s];
            return o;
          }
        return !1;
      })(),
      e = {
        fullscreenchange: n.fullscreenchange,
        fullscreenerror: n.fullscreenerror,
      },
      t = {
        request: function (r) {
          return new Promise(function (s, a) {
            var o = function c() {
              t.off("fullscreenchange", c), s();
            };
            t.on("fullscreenchange", o), (r = r || document.documentElement);
            var l = r[n.requestFullscreen]();
            l instanceof Promise && l.then(o).catch(a);
          });
        },
        exit: function () {
          return new Promise(function (r, s) {
            if (!t.isFullscreen) {
              r();
              return;
            }
            var a = function l() {
              t.off("fullscreenchange", l), r();
            };
            t.on("fullscreenchange", a);
            var o = document[n.exitFullscreen]();
            o instanceof Promise && o.then(a).catch(s);
          });
        },
        on: function (r, s) {
          var a = e[r];
          a && document.addEventListener(a, s);
        },
        off: function (r, s) {
          var a = e[r];
          a && document.removeEventListener(a, s);
        },
      };
    return (
      Object.defineProperties(t, {
        isFullscreen: {
          get: function () {
            return !!document[n.fullscreenElement];
          },
        },
        element: {
          enumerable: !0,
          get: function () {
            return document[n.fullscreenElement];
          },
        },
        isEnabled: {
          enumerable: !0,
          get: function () {
            return !!document[n.fullscreenEnabled];
          },
        },
      }),
      t
    );
  }
  var hg = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    mg = (function (n) {
      Xm(t, n);
      var e = Km(t);
      function t(i, r) {
        var s,
          a =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          Vu(this, t),
          (s = e.call(this)),
          Ks(Qs(s), "logger", void 0),
          Ks(Qs(s), "speedAdjustment", 0),
          Ks(
            Qs(s),
            "adjustSpeed",
            (function () {
              var l = Tr(
                bt().mark(function c(u, h) {
                  var m;
                  return bt().wrap(function (d) {
                    for (;;)
                      switch ((d.prev = d.next)) {
                        case 0:
                          if (s.speedAdjustment !== h) {
                            d.next = 2;
                            break;
                          }
                          return d.abrupt("return");
                        case 2:
                          return (d.next = 4), u.getPlaybackRate();
                        case 4:
                          return (
                            (d.t0 = d.sent),
                            (d.t1 = s.speedAdjustment),
                            (d.t2 = d.t0 - d.t1),
                            (d.t3 = h),
                            (m = d.t2 + d.t3),
                            s.log("New playbackRate:  ".concat(m)),
                            (d.next = 12),
                            u.setPlaybackRate(m)
                          );
                        case 12:
                          s.speedAdjustment = h;
                        case 13:
                        case "end":
                          return d.stop();
                      }
                  }, c);
                })
              );
              return function (c, u) {
                return l.apply(this, arguments);
              };
            })()
          ),
          (s.logger = o),
          s.init(r, i, Hu(Hu({}, hg), a)),
          s
        );
      }
      return (
        qu(t, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value: (function () {
              var i = Tr(
                bt().mark(function s(a, o, l) {
                  var c = this,
                    u,
                    h,
                    m;
                  return bt().wrap(
                    function (d) {
                      for (;;)
                        switch ((d.prev = d.next)) {
                          case 0:
                            return (
                              (d.next = 2), this.waitForTOReadyState(a, "open")
                            );
                          case 2:
                            if (l.role !== "viewer") {
                              d.next = 10;
                              break;
                            }
                            return (d.next = 5), this.updatePlayer(a, o, l);
                          case 5:
                            (u = Ju(a, "change", function () {
                              return c.updatePlayer(a, o, l);
                            })),
                              (h = this.maintainPlaybackPosition(a, o, l)),
                              this.addEventListener("disconnect", function () {
                                h.cancel(), u.cancel();
                              }),
                              (d.next = 14);
                            break;
                          case 10:
                            return (d.next = 12), this.updateTimingObject(a, o);
                          case 12:
                            (m = Ju(
                              o,
                              ["seeked", "play", "pause", "ratechange"],
                              function () {
                                return c.updateTimingObject(a, o);
                              },
                              "on",
                              "off"
                            )),
                              this.addEventListener("disconnect", function () {
                                return m.cancel();
                              });
                          case 14:
                          case "end":
                            return d.stop();
                        }
                    },
                    s,
                    this
                  );
                })
              );
              function r(s, a, o) {
                return i.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "updateTimingObject",
            value: (function () {
              var i = Tr(
                bt().mark(function s(a, o) {
                  return bt().wrap(function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (c.t0 = a), (c.next = 3), o.getCurrentTime();
                        case 3:
                          return (c.t1 = c.sent), (c.next = 6), o.getPaused();
                        case 6:
                          if (!c.sent) {
                            c.next = 10;
                            break;
                          }
                          (c.t2 = 0), (c.next = 13);
                          break;
                        case 10:
                          return (c.next = 12), o.getPlaybackRate();
                        case 12:
                          c.t2 = c.sent;
                        case 13:
                          (c.t3 = c.t2),
                            (c.t4 = { position: c.t1, velocity: c.t3 }),
                            c.t0.update.call(c.t0, c.t4);
                        case 16:
                        case "end":
                          return c.stop();
                      }
                  }, s);
                })
              );
              function r(s, a) {
                return i.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "updatePlayer",
            value: (function () {
              var i = Tr(
                bt().mark(function s(a, o, l) {
                  var c, u, h;
                  return bt().wrap(
                    function (p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            if (
                              ((c = a.query()),
                              (u = c.position),
                              (h = c.velocity),
                              typeof u == "number" && o.setCurrentTime(u),
                              typeof h != "number")
                            ) {
                              p.next = 25;
                              break;
                            }
                            if (h !== 0) {
                              p.next = 11;
                              break;
                            }
                            return (p.next = 6), o.getPaused();
                          case 6:
                            if (((p.t0 = p.sent), p.t0 !== !1)) {
                              p.next = 9;
                              break;
                            }
                            o.pause();
                          case 9:
                            p.next = 25;
                            break;
                          case 11:
                            if (!(h > 0)) {
                              p.next = 25;
                              break;
                            }
                            return (p.next = 14), o.getPaused();
                          case 14:
                            if (((p.t1 = p.sent), p.t1 !== !0)) {
                              p.next = 19;
                              break;
                            }
                            return (
                              (p.next = 18),
                              o.play().catch(
                                (function () {
                                  var d = Tr(
                                    bt().mark(function f(w) {
                                      return bt().wrap(function (v) {
                                        for (;;)
                                          switch ((v.prev = v.next)) {
                                            case 0:
                                              if (
                                                !(
                                                  w.name ===
                                                    "NotAllowedError" &&
                                                  l.autoPlayMuted
                                                )
                                              ) {
                                                v.next = 5;
                                                break;
                                              }
                                              return (
                                                (v.next = 3), o.setMuted(!0)
                                              );
                                            case 3:
                                              return (
                                                (v.next = 5),
                                                o.play().catch(function (g) {
                                                  return console.error(
                                                    "Couldn't play the video from TimingSrcConnector. Error:",
                                                    g
                                                  );
                                                })
                                              );
                                            case 5:
                                            case "end":
                                              return v.stop();
                                          }
                                      }, f);
                                    })
                                  );
                                  return function (f) {
                                    return d.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 18:
                            this.updatePlayer(a, o, l);
                          case 19:
                            return (p.next = 21), o.getPlaybackRate();
                          case 21:
                            if (((p.t2 = p.sent), (p.t3 = h), p.t2 === p.t3)) {
                              p.next = 25;
                              break;
                            }
                            o.setPlaybackRate(h);
                          case 25:
                          case "end":
                            return p.stop();
                        }
                    },
                    s,
                    this
                  );
                })
              );
              function r(s, a, o) {
                return i.apply(this, arguments);
              }
              return r;
            })(),
          },
          {
            key: "maintainPlaybackPosition",
            value: function (r, s, a) {
              var o = this,
                l = a.allowedDrift,
                c = a.maxAllowedDrift,
                u = a.minCheckInterval,
                h = a.maxRateAdjustment,
                m = a.maxTimeToCatchUp,
                p = Math.min(m, Math.max(u, c)) * 1e3,
                d = (function () {
                  var w = Tr(
                    bt().mark(function b() {
                      var v, g, y, _, A;
                      return bt().wrap(function (E) {
                        for (;;)
                          switch ((E.prev = E.next)) {
                            case 0:
                              if (((E.t0 = r.query().velocity === 0), E.t0)) {
                                E.next = 6;
                                break;
                              }
                              return (E.next = 4), s.getPaused();
                            case 4:
                              (E.t1 = E.sent), (E.t0 = E.t1 === !0);
                            case 6:
                              if (!E.t0) {
                                E.next = 8;
                                break;
                              }
                              return E.abrupt("return");
                            case 8:
                              return (
                                (E.t2 = r.query().position),
                                (E.next = 11),
                                s.getCurrentTime()
                              );
                            case 11:
                              if (
                                ((E.t3 = E.sent),
                                (v = E.t2 - E.t3),
                                (g = Math.abs(v)),
                                o.log("Drift: ".concat(v)),
                                !(g > c))
                              ) {
                                E.next = 22;
                                break;
                              }
                              return (E.next = 18), o.adjustSpeed(s, 0);
                            case 18:
                              s.setCurrentTime(r.query().position),
                                o.log("Resync by currentTime"),
                                (E.next = 29);
                              break;
                            case 22:
                              if (!(g > l)) {
                                E.next = 29;
                                break;
                              }
                              return (
                                (y = g / m),
                                (_ = h),
                                (A = y < _ ? (_ - y) / 2 : _),
                                (E.next = 28),
                                o.adjustSpeed(s, A * Math.sign(v))
                              );
                            case 28:
                              o.log("Resync by playbackRate");
                            case 29:
                            case "end":
                              return E.stop();
                          }
                      }, b);
                    })
                  );
                  return function () {
                    return w.apply(this, arguments);
                  };
                })(),
                f = setInterval(function () {
                  return d();
                }, p);
              return {
                cancel: function () {
                  return clearInterval(f);
                },
              };
            },
          },
          {
            key: "log",
            value: function (r) {
              var s;
              (s = this.logger) === null ||
                s === void 0 ||
                s.call(this, "TimingSrcConnector: ".concat(r));
            },
          },
          {
            key: "waitForTOReadyState",
            value: function (r, s) {
              return new Promise(function (a) {
                var o = function l() {
                  r.readyState === s
                    ? a()
                    : r.addEventListener("readystatechange", l, { once: !0 });
                };
                o();
              });
            },
          },
        ]),
        t
      );
    })(Xo(EventTarget)),
    sn = new WeakMap(),
    Zo = new WeakMap(),
    At = {},
    ra = (function () {
      function n(e) {
        var t = this,
          i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (Vu(this, n),
          window.jQuery &&
            e instanceof jQuery &&
            (e.length > 1 &&
              window.console &&
              console.warn &&
              console.warn(
                "A jQuery object with multiple elements was passed, using the first element."
              ),
            (e = e[0])),
          typeof document < "u" &&
            typeof e == "string" &&
            (e = document.getElementById(e)),
          !Qm(e))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (e.nodeName !== "IFRAME") {
          var r = e.querySelector("iframe");
          r && (e = r);
        }
        if (e.nodeName === "IFRAME" && !Er(e.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (sn.has(e)) return sn.get(e);
        (this._window = e.ownerDocument.defaultView),
          (this.element = e),
          (this.origin = "*");
        var s = new Jt(function (o, l) {
          if (
            ((t._onMessage = function (h) {
              if (!(!Er(h.origin) || t.element.contentWindow !== h.source)) {
                t.origin === "*" && (t.origin = h.origin);
                var m = ia(h.data),
                  p = m && m.event === "error",
                  d = p && m.data && m.data.method === "ready";
                if (d) {
                  var f = new Error(m.data.message);
                  (f.name = m.data.name), l(f);
                  return;
                }
                var w = m && m.event === "ready",
                  b = m && m.method === "ping";
                if (w || b) {
                  t.element.setAttribute("data-ready", "true"), o();
                  return;
                }
                og(t, m);
              }
            }),
            t._window.addEventListener("message", t._onMessage),
            t.element.nodeName !== "IFRAME")
          ) {
            var c = Qu(e, i),
              u = Ku(c);
            ed(u, c, e)
              .then(function (h) {
                var m = Uo(h, e);
                return (
                  (t.element = m),
                  (t._originalElement = e),
                  ag(e, m),
                  sn.set(t.element, t),
                  h
                );
              })
              .catch(l);
          }
        });
        if (
          (Zo.set(this, s),
          sn.set(this.element, this),
          this.element.nodeName === "IFRAME" && xr(this, "ping"),
          At.isEnabled)
        ) {
          var a = function () {
            return At.exit();
          };
          (this.fullscreenchangeHandler = function () {
            At.isFullscreen
              ? Jn(t, "event:exitFullscreen", a)
              : ta(t, "event:exitFullscreen", a),
              t.ready().then(function () {
                xr(t, "fullscreenchange", At.isFullscreen);
              });
          }),
            At.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        qu(n, [
          {
            key: "callMethod",
            value: function (t) {
              var i = this,
                r =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
              return new Jt(function (s, a) {
                return i
                  .ready()
                  .then(function () {
                    Jn(i, t, { resolve: s, reject: a }), xr(i, t, r);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "get",
            value: function (t) {
              var i = this;
              return new Jt(function (r, s) {
                return (
                  (t = Uu(t, "get")),
                  i
                    .ready()
                    .then(function () {
                      Jn(i, t, { resolve: r, reject: s }), xr(i, t);
                    })
                    .catch(s)
                );
              });
            },
          },
          {
            key: "set",
            value: function (t, i) {
              var r = this;
              return new Jt(function (s, a) {
                if (((t = Uu(t, "set")), i == null))
                  throw new TypeError("There must be a value to set.");
                return r
                  .ready()
                  .then(function () {
                    Jn(r, t, { resolve: s, reject: a }), xr(r, t, i);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "on",
            value: function (t, i) {
              if (!t) throw new TypeError("You must pass an event name.");
              if (!i) throw new TypeError("You must pass a callback function.");
              if (typeof i != "function")
                throw new TypeError("The callback must be a function.");
              var r = ea(this, "event:".concat(t));
              r.length === 0 &&
                this.callMethod("addEventListener", t).catch(function () {}),
                Jn(this, "event:".concat(t), i);
            },
          },
          {
            key: "off",
            value: function (t, i) {
              if (!t) throw new TypeError("You must pass an event name.");
              if (i && typeof i != "function")
                throw new TypeError("The callback must be a function.");
              var r = ta(this, "event:".concat(t), i);
              r &&
                this.callMethod("removeEventListener", t).catch(function (
                  s
                ) {});
            },
          },
          {
            key: "loadVideo",
            value: function (t) {
              return this.callMethod("loadVideo", t);
            },
          },
          {
            key: "ready",
            value: function () {
              var t =
                Zo.get(this) ||
                new Jt(function (i, r) {
                  r(new Error("Unknown player. Probably unloaded."));
                });
              return Jt.resolve(t);
            },
          },
          {
            key: "addCuePoint",
            value: function (t) {
              var i =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              return this.callMethod("addCuePoint", { time: t, data: i });
            },
          },
          {
            key: "removeCuePoint",
            value: function (t) {
              return this.callMethod("removeCuePoint", t);
            },
          },
          {
            key: "enableTextTrack",
            value: function (t, i) {
              if (!t) throw new TypeError("You must pass a language.");
              return this.callMethod("enableTextTrack", {
                language: t,
                kind: i,
              });
            },
          },
          {
            key: "disableTextTrack",
            value: function () {
              return this.callMethod("disableTextTrack");
            },
          },
          {
            key: "pause",
            value: function () {
              return this.callMethod("pause");
            },
          },
          {
            key: "play",
            value: function () {
              return this.callMethod("play");
            },
          },
          {
            key: "requestFullscreen",
            value: function () {
              return At.isEnabled
                ? At.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return At.isEnabled
                ? At.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return At.isEnabled
                ? Jt.resolve(At.isFullscreen)
                : this.get("fullscreen");
            },
          },
          {
            key: "requestPictureInPicture",
            value: function () {
              return this.callMethod("requestPictureInPicture");
            },
          },
          {
            key: "exitPictureInPicture",
            value: function () {
              return this.callMethod("exitPictureInPicture");
            },
          },
          {
            key: "getPictureInPicture",
            value: function () {
              return this.get("pictureInPicture");
            },
          },
          {
            key: "remotePlaybackPrompt",
            value: function () {
              return this.callMethod("remotePlaybackPrompt");
            },
          },
          {
            key: "unload",
            value: function () {
              return this.callMethod("unload");
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = this;
              return new Jt(function (i) {
                if (
                  (Zo.delete(t),
                  sn.delete(t.element),
                  t._originalElement &&
                    (sn.delete(t._originalElement),
                    t._originalElement.removeAttribute(
                      "data-vimeo-initialized"
                    )),
                  t.element &&
                    t.element.nodeName === "IFRAME" &&
                    t.element.parentNode &&
                    (t.element.parentNode.parentNode &&
                    t._originalElement &&
                    t._originalElement !== t.element.parentNode
                      ? t.element.parentNode.parentNode.removeChild(
                          t.element.parentNode
                        )
                      : t.element.parentNode.removeChild(t.element)),
                  t.element &&
                    t.element.nodeName === "DIV" &&
                    t.element.parentNode)
                ) {
                  t.element.removeAttribute("data-vimeo-initialized");
                  var r = t.element.querySelector("iframe");
                  r &&
                    r.parentNode &&
                    (r.parentNode.parentNode &&
                    t._originalElement &&
                    t._originalElement !== r.parentNode
                      ? r.parentNode.parentNode.removeChild(r.parentNode)
                      : r.parentNode.removeChild(r));
                }
                t._window.removeEventListener("message", t._onMessage),
                  At.isEnabled &&
                    At.off("fullscreenchange", t.fullscreenchangeHandler),
                  i();
              });
            },
          },
          {
            key: "getAutopause",
            value: function () {
              return this.get("autopause");
            },
          },
          {
            key: "setAutopause",
            value: function (t) {
              return this.set("autopause", t);
            },
          },
          {
            key: "getBuffered",
            value: function () {
              return this.get("buffered");
            },
          },
          {
            key: "getCameraProps",
            value: function () {
              return this.get("cameraProps");
            },
          },
          {
            key: "setCameraProps",
            value: function (t) {
              return this.set("cameraProps", t);
            },
          },
          {
            key: "getChapters",
            value: function () {
              return this.get("chapters");
            },
          },
          {
            key: "getCurrentChapter",
            value: function () {
              return this.get("currentChapter");
            },
          },
          {
            key: "getColor",
            value: function () {
              return this.get("color");
            },
          },
          {
            key: "getColors",
            value: function () {
              return Jt.all([
                this.get("colorOne"),
                this.get("colorTwo"),
                this.get("colorThree"),
                this.get("colorFour"),
              ]);
            },
          },
          {
            key: "setColor",
            value: function (t) {
              return this.set("color", t);
            },
          },
          {
            key: "setColors",
            value: function (t) {
              if (!Array.isArray(t))
                return new Jt(function (s, a) {
                  return a(new TypeError("Argument must be an array."));
                });
              var i = new Jt(function (s) {
                  return s(null);
                }),
                r = [
                  t[0] ? this.set("colorOne", t[0]) : i,
                  t[1] ? this.set("colorTwo", t[1]) : i,
                  t[2] ? this.set("colorThree", t[2]) : i,
                  t[3] ? this.set("colorFour", t[3]) : i,
                ];
              return Jt.all(r);
            },
          },
          {
            key: "getCuePoints",
            value: function () {
              return this.get("cuePoints");
            },
          },
          {
            key: "getCurrentTime",
            value: function () {
              return this.get("currentTime");
            },
          },
          {
            key: "setCurrentTime",
            value: function (t) {
              return this.set("currentTime", t);
            },
          },
          {
            key: "getDuration",
            value: function () {
              return this.get("duration");
            },
          },
          {
            key: "getEnded",
            value: function () {
              return this.get("ended");
            },
          },
          {
            key: "getLoop",
            value: function () {
              return this.get("loop");
            },
          },
          {
            key: "setLoop",
            value: function (t) {
              return this.set("loop", t);
            },
          },
          {
            key: "setMuted",
            value: function (t) {
              return this.set("muted", t);
            },
          },
          {
            key: "getMuted",
            value: function () {
              return this.get("muted");
            },
          },
          {
            key: "getPaused",
            value: function () {
              return this.get("paused");
            },
          },
          {
            key: "getPlaybackRate",
            value: function () {
              return this.get("playbackRate");
            },
          },
          {
            key: "setPlaybackRate",
            value: function (t) {
              return this.set("playbackRate", t);
            },
          },
          {
            key: "getPlayed",
            value: function () {
              return this.get("played");
            },
          },
          {
            key: "getQualities",
            value: function () {
              return this.get("qualities");
            },
          },
          {
            key: "getQuality",
            value: function () {
              return this.get("quality");
            },
          },
          {
            key: "setQuality",
            value: function (t) {
              return this.set("quality", t);
            },
          },
          {
            key: "getRemotePlaybackAvailability",
            value: function () {
              return this.get("remotePlaybackAvailability");
            },
          },
          {
            key: "getRemotePlaybackState",
            value: function () {
              return this.get("remotePlaybackState");
            },
          },
          {
            key: "getSeekable",
            value: function () {
              return this.get("seekable");
            },
          },
          {
            key: "getSeeking",
            value: function () {
              return this.get("seeking");
            },
          },
          {
            key: "getTextTracks",
            value: function () {
              return this.get("textTracks");
            },
          },
          {
            key: "getVideoEmbedCode",
            value: function () {
              return this.get("videoEmbedCode");
            },
          },
          {
            key: "getVideoId",
            value: function () {
              return this.get("videoId");
            },
          },
          {
            key: "getVideoTitle",
            value: function () {
              return this.get("videoTitle");
            },
          },
          {
            key: "getVideoWidth",
            value: function () {
              return this.get("videoWidth");
            },
          },
          {
            key: "getVideoHeight",
            value: function () {
              return this.get("videoHeight");
            },
          },
          {
            key: "getVideoUrl",
            value: function () {
              return this.get("videoUrl");
            },
          },
          {
            key: "getVolume",
            value: function () {
              return this.get("volume");
            },
          },
          {
            key: "setVolume",
            value: function (t) {
              return this.set("volume", t);
            },
          },
          {
            key: "setTimingSrc",
            value: (function () {
              var e = Tr(
                bt().mark(function i(r, s) {
                  var a = this,
                    o;
                  return bt().wrap(
                    function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            if (r) {
                              c.next = 2;
                              break;
                            }
                            throw new TypeError(
                              "A Timing Object must be provided."
                            );
                          case 2:
                            return (c.next = 4), this.ready();
                          case 4:
                            return (
                              (o = new mg(this, r, s)),
                              xr(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return xr(a, "notifyTimingObjectDisconnect");
                              }),
                              c.abrupt("return", o)
                            );
                          case 8:
                          case "end":
                            return c.stop();
                        }
                    },
                    i,
                    this
                  );
                })
              );
              function t(i, r) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
        ]),
        n
      );
    })();
  Xu || ((At = pg()), cg(), ug(), dg(), fg());
  class gg {
    constructor() {
      typeof ra < "u"
        ? this.init()
        : console.error("Vimeo Player SDK not available");
    }
    init() {
      document.querySelectorAll("[data-vimeo-player-init]").length > 0 &&
        this.initVimeoPlayer();
    }
    initVimeoPlayer() {
      document.querySelectorAll("[data-vimeo-player-init]").forEach((t, i) => {
        try {
          let v = function (x) {
              let D = Math.floor(x / 3600);
              x -= D * 3600;
              let S = Math.floor(x / 60);
              return (x -= S * 60), S + ":" + (x < 10 ? "0" + x : x);
            },
            A = function () {
              c.getDuration().then(function () {
                const x = y.value;
                c.setCurrentTime(x), _ && (_.value = x);
              });
            },
            E = function () {
              t.setAttribute("data-vimeo-hover", "false");
            },
            k = function () {
              t.setAttribute("data-vimeo-activated", "false"),
                t.setAttribute("data-vimeo-playing", "false"),
                c.unload();
            };
          const r = t.getAttribute("data-vimeo-video-id");
          if (!r) return;
          const s = t.querySelector("iframe");
          if (!s) {
            console.error("No iframe found in vimeo player element", t);
            return;
          }
          const a = `https://player.vimeo.com/video/${r}?api=1&background=1&autoplay=0&loop=0&muted=1`;
          s.setAttribute("src", a);
          const o = "vimeo-player-index-" + i;
          t.setAttribute("id", o);
          const l = t.id,
            c = new ra(s);
          if (
            (t.getAttribute("data-vimeo-update-size") === "true" &&
              c.getVideoWidth().then(function (x) {
                c.getVideoHeight().then(function (D) {
                  const S = t.querySelector(".vimeo-player__before");
                  S && (S.style.paddingTop = (D / x) * 100 + "%");
                });
              }),
            c.on("play", function () {
              t.setAttribute("data-vimeo-loaded", "true");
            }),
            t.getAttribute("data-vimeo-autoplay") === "false")
          )
            c.setVolume(1), c.pause();
          else if (
            (c.setVolume(0),
            t.setAttribute("data-vimeo-muted", "true"),
            t.getAttribute("data-vimeo-paused-by-user") === "false")
          ) {
            const x = () => {
              const D = t.getBoundingClientRect();
              D.top < window.innerHeight && D.bottom > 0 ? u() : h();
            };
            x(), window.addEventListener("scroll", x);
          }
          const u = () => {
              t.setAttribute("data-vimeo-activated", "true"),
                t.setAttribute("data-vimeo-playing", "true"),
                c.play();
            },
            h = () => {
              t.setAttribute("data-vimeo-playing", "false"), c.pause();
            },
            m = t.querySelector('[data-vimeo-control="play"]');
          m &&
            m.addEventListener("click", function () {
              c.setVolume(0),
                u(),
                t.getAttribute("data-vimeo-muted") === "true"
                  ? c.setVolume(0)
                  : c.setVolume(1);
            });
          const p = t.querySelector('[data-vimeo-control="pause"]');
          p &&
            p.addEventListener("click", function () {
              h(),
                t.getAttribute("data-vimeo-autoplay") === "true" &&
                  (t.setAttribute("data-vimeo-paused-by-user", "true"),
                  window.removeEventListener("scroll", checkVisibility));
            });
          const d = t.querySelector('[data-vimeo-control="mute"]');
          d &&
            d.addEventListener("click", function () {
              t.getAttribute("data-vimeo-muted") === "false"
                ? (c.setVolume(0), t.setAttribute("data-vimeo-muted", "true"))
                : (c.setVolume(1), t.setAttribute("data-vimeo-muted", "false"));
            });
          const f = !!(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            ),
            w = t.querySelector('[data-vimeo-control="fullscreen"]');
          !f && w && (w.style.display = "none"),
            w &&
              w.addEventListener("click", () => {
                const x = document.getElementById(l);
                if (!x) return;
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
                  ? (t.setAttribute("data-vimeo-fullscreen", "false"),
                    (
                      document.exitFullscreen ||
                      document.webkitExitFullscreen ||
                      document.mozCancelFullScreen ||
                      document.msExitFullscreen
                    ).call(document))
                  : (t.setAttribute("data-vimeo-fullscreen", "true"),
                    (
                      x.requestFullscreen ||
                      x.webkitRequestFullscreen ||
                      x.mozRequestFullScreen ||
                      x.msRequestFullscreen
                    ).call(x));
              });
          const b = () => {
            const x =
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement;
            t.setAttribute("data-vimeo-fullscreen", x ? "true" : "false");
          };
          [
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "msfullscreenchange",
          ].forEach((x) => {
            document.addEventListener(x, b);
          });
          const g = t.querySelector("[data-vimeo-duration]");
          c.getDuration().then(function (x) {
            g && (g.textContent = v(x)),
              t
                .querySelectorAll('[data-vimeo-control="timeline"], progress')
                .forEach((S) => {
                  S.setAttribute("max", x);
                });
          });
          const y = t.querySelector('[data-vimeo-control="timeline"]'),
            _ = t.querySelector("progress");
          y &&
            ["input", "change"].forEach((x) => {
              y.addEventListener(x, A);
            }),
            c.on("timeupdate", function (x) {
              y && (y.value = x.seconds),
                _ && (_.value = x.seconds),
                g && (g.textContent = v(Math.trunc(x.seconds)));
            });
          let M;
          t.addEventListener("mousemove", function () {
            t.getAttribute("data-vimeo-hover") === "false" &&
              t.setAttribute("data-vimeo-hover", "true"),
              clearTimeout(M),
              (M = setTimeout(E, 3e3));
          }),
            c.on("ended", k);
        } catch (r) {
          console.error("Error initializing Vimeo player:", r);
        }
      });
    }
  }
  const wg = () => {
    new gg();
  };
  ke.registerPlugin(Q, Qr);
  const vg = () => {
      const n = document.querySelectorAll("[text-reveal]");
      n.length !== 0 &&
        n.forEach((e) => {
          const i = new Qr(e, {
            type: "chars, words",
            charsClass: "char++",
            wordsClass: "word++",
          }).chars;
          ke.fromTo(
            i,
            { "will-change": "opacity", opacity: 0.2 },
            {
              ease: "power4",
              opacity: 1,
              stagger: 0.04,
              scrollTrigger: {
                trigger: e,
                start: "center+=10% bottom",
                end: "+=50%",
                scrub: !0,
                markers: !1,
              },
            }
          );
        });
    },
    Ko = () => {
      vg();
    };
  function yg() {
    Gm(), wg(), Ko();
  }
  const td = "https://boards-api.greenhouse.io/v1/boards/strivepharmacy";
  class Jo {
    constructor(e = `${td}/departments`) {
      (this.apiEndpoint = e), (this.dataType = this.determineDataType(e));
    }
    determineDataType(e) {
      return e.includes("/departments")
        ? "departments"
        : e.includes("/jobs")
        ? "jobs"
        : null;
    }
    async fetchData() {
      if (!this.apiEndpoint || !this.dataType) return;
      const e = {
        method: "GET",
        redirect: "follow",
        headers: { "Content-Type": "application/json" },
      };
      try {
        const t = await fetch(this.apiEndpoint, e);
        if (!t.ok) throw new Error(`HTTP error! status: ${t.status}`);
        const i = await t.json();
        if (
          (this.dataType === "departments" && !i.departments) ||
          (this.dataType === "jobs" && !i.jobs)
        )
          return;
        (this.data = i),
          this.dataType === "departments"
            ? this.populateDepartments(i.departments)
            : this.populateJobs(i.jobs);
      } catch (t) {
        console.error("Error fetching Greenhouse data:", t);
      }
    }
    populateDepartments(e) {
      const t = document.querySelector("[gw-departments-container]");
      if (!t || !e || e.length === 0) {
        t && (t.textContent = "No departments found.");
        return;
      }
      const i = document.querySelector("[gw-departments-item]");
      i &&
        (i.remove(),
        e.forEach((r) => {
          const s = i.cloneNode(!0);
          if (((s.style.display = ""), !r.jobs || r.jobs.length === 0)) {
            s.style.display = "none";
            return;
          }
          s.setAttribute("gw-department-item", r.name);
          const a = s.querySelector("[gw-departments-quantity]");
          a && (a.textContent = `(${r.jobs.length})`);
          const o = s.querySelector("[gw-departments-title]");
          o && (o.textContent = r.name), t.appendChild(s);
          const l = s.querySelector("[gw-jobs-container]");
          r.jobs && r.jobs.length > 0 && l && this.populateJobs(r.jobs, l);
        }));
    }
    populateJobs(e, t = document.querySelector("[gw-jobs-container]")) {
      if (!t) return;
      const i = t.querySelector("[gw-jobs-item]");
      i &&
        (i.remove(),
        e.forEach((r) => {
          const s = i.cloneNode(!0);
          s.style.display = "";
          const a = s.querySelector("[gw-jobs-title]");
          a && (a.textContent = r.title);
          const o = s.querySelector("[gw-jobs-location]");
          o && r.location && (o.textContent = r.location.name);
          const l = s.querySelector("[gw-jobs-apply]");
          l && ((l.href = r.absolute_url), (l.target = "_blank")),
            t.appendChild(s);
        }));
    }
    filterDepartments(e) {
      if (!e) return;
      const t = document.querySelector("[gw-filter-departments]");
      if (t) {
        for (; t.options.length > 1; ) t.remove(1);
        if (t.options.length === 0 || t.options[0].value !== "") {
          const i = new Option("All Departments", "", !0, !0);
          t.add(i, t.options[0]);
        }
        e.forEach((i) => {
          if (i.jobs && i.jobs.length > 0) {
            const r = new Option(i.name, i.name);
            t.add(r);
          }
        }),
          t.addEventListener("change", (i) => {
            const r = i.target.value;
            document.querySelectorAll("[gw-departments-item]").forEach((s) => {
              s.style.display =
                r === "" || s.getAttribute("gw-department-item") === r
                  ? ""
                  : "none";
            });
          });
      }
    }
    static init(e = `${td}/departments`) {
      const t = new Jo(e);
      return (
        document.readyState === "loading"
          ? document.addEventListener("DOMContentLoaded", () => {
              t.dataType === "departments" &&
              document.querySelector("[gw-departments-item]")
                ? t.fetchData().then(() => {
                    var i;
                    (i = t.data) != null &&
                      i.departments &&
                      t.filterDepartments(t.data.departments);
                  })
                : t.dataType === "jobs" &&
                  document.querySelector("[gw-jobs-item]") &&
                  t.fetchData();
            })
          : t.dataType === "departments" &&
            document.querySelector("[gw-departments-item]")
          ? t.fetchData().then(() => {
              var i;
              (i = t.data) != null &&
                i.departments &&
                t.filterDepartments(t.data.departments);
            })
          : t.dataType === "jobs" &&
            document.querySelector("[gw-jobs-item]") &&
            t.fetchData(),
        t
      );
    }
  }
  Jo.init();
  function bg() {
    Ko();
  }
  class _g {
    constructor() {
      (this.elements = {
        providerTabLinkList: document.querySelector(
          "[provider-tab='link-list']"
        ),
        providerTabLinkItems: document.querySelectorAll(
          "[provider-tab-link-item]"
        ),
        providerTabContentList: document.querySelector(
          "[provider-tab='content-list']"
        ),
        providerTabContentItems: document.querySelectorAll(
          "[provider-tab-content-item]"
        ),
      }),
        this.init();
    }
    init() {
      this.elements.providerTabLinkItems.length &&
        (this.setupTabs(), this.setupClickHandlers(), this.activateTab(0));
    }
    setupTabs() {
      this.elements.providerTabLinkItems.forEach((e, t) => {
        e.setAttribute("data-tab-index", t),
          e.setAttribute("link-status", "inactive");
      }),
        this.elements.providerTabContentItems.forEach((e, t) => {
          e.setAttribute("data-tab-index", t),
            e.setAttribute("content-status", "inactive");
        });
    }
    setupClickHandlers() {
      this.elements.providerTabLinkItems.forEach((e) => {
        e.addEventListener("click", (t) => {
          t.preventDefault();
          const i = parseInt(e.getAttribute("data-tab-index"));
          this.activateTab(i);
        });
      });
    }
    activateTab(e) {
      this.elements.providerTabLinkItems.forEach((r) => {
        r.setAttribute("link-status", "inactive");
      }),
        this.elements.providerTabContentItems.forEach((r) => {
          r.setAttribute("content-status", "inactive");
        });
      const t = this.elements.providerTabLinkItems[e],
        i = this.elements.providerTabContentItems[e];
      t &&
        i &&
        (t.setAttribute("link-status", "active"),
        i.setAttribute("content-status", "active"));
    }
  }
  const Sg = () => new _g();
  function Tg() {
    Zs(), Sg();
  }
  function Eg() {
    Zs();
  }
  function xg() {
    Ko();
  }
  async function Mg() {
    Zs();
  }
  const id = {
      PREVIEWABLE_TYPES: [
        ".pdf",
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".bmp",
        ".webp",
      ],
      init: function () {
        (this.downloadButtons = document.querySelectorAll(
          '[download-file="button"]'
        )),
          this.attachEventListeners();
      },
      attachEventListeners: function () {
        this.downloadButtons.forEach((n) => {
          n.addEventListener("click", this.handleClick.bind(this));
        });
      },
      formatFileName: function (n) {
        const e = n.getAttribute("download-file-name"),
          t = n.getAttribute("pharmacy-name") || "Strive";
        if (e) {
          const i = e.replace(/\.[^/.]+$/, "");
          return `${t}_${i}_Guide.pdf`;
        }
        return `${t}_Instructional_Guide.pdf`;
      },
      isPreviewableFile: function (n) {
        return n
          ? this.PREVIEWABLE_TYPES.some((e) => n.toLowerCase().endsWith(e))
          : !1;
      },
      handleClick: async function (n) {
        n.preventDefault();
        const e = n.currentTarget,
          t = e.getAttribute("download-file-link");
        t &&
          (this.isPreviewableFile(t) && window.open(t, "_blank"),
          await this.handleDownload(e));
      },
      handleDownload: async function (n) {
        const e = n.getAttribute("download-file-link");
        if (!e) return;
        const t = this.formatFileName(n);
        try {
          n.disabled = !0;
          const i = await fetch(e);
          if (!i.ok) throw new Error("Download failed");
          const r = await i.blob(),
            s = window.URL.createObjectURL(r),
            a = document.createElement("a");
          (a.style.display = "none"),
            (a.href = s),
            (a.download = t),
            document.body.appendChild(a),
            a.click(),
            window.URL.revokeObjectURL(s),
            document.body.removeChild(a);
        } catch (i) {
          console.error("Download error:", i);
        } finally {
          n.disabled = !1;
        }
      },
      destroy: function () {
        this.downloadButtons.forEach((n) => {
          n.removeEventListener("click", this.handleClick.bind(this));
        });
      },
    },
    Ag = () => (id.init(), id),
    kg = () => {
      Ag();
    };
  class Cg {
    constructor() {
      (this.elements = {
        mapDot: document.querySelectorAll("[map-dot='component']"),
        mapDotGlow: document.querySelectorAll("[map-dot='glow']"),
        mapDotSmall: document.querySelectorAll("[map-dot='small']"),
        mapDotLarge: document.querySelectorAll("[map-dot='large']"),
        mapDotTag: document.querySelectorAll("[map-dot='tag']"),
      }),
        (this.state = { activeIndex: null, timelines: [] }),
        this.init();
    }
    init() {
      console.log("initLocationMapHover"),
        this.elements.mapDot.forEach((e, t) => {
          ke.set(this.elements.mapDotTag[t], { scale: 0, y: 20, opacity: 0 }),
            ke.set(this.elements.mapDotGlow[t], { opacity: 0.3, scale: 1 }),
            ke.set(this.elements.mapDotLarge[t], {
              scale: 1,
              backgroundColor: "var(--swatch--light-faded)",
            }),
            this.createIdleAnimation(t),
            e.addEventListener("mouseenter", () => this.handleHover(t, !0)),
            e.addEventListener("mouseleave", () => this.handleHover(t, !1));
        });
    }
    createIdleAnimation(e) {
      this.state.timelines[e] && this.state.timelines[e].kill();
      const t = ke.timeline({ repeat: -1 }),
        i = 1.2 + Math.random() * 0.4,
        r = 1.5 + Math.random() * 0.5,
        s = Math.random() * 0.8;
      t
        .to(this.elements.mapDotGlow[e], {
          scale: i,
          opacity: 0.5,
          duration: r / 2,
          ease: "power2.inOut",
          delay: s,
        })
        .to(this.elements.mapDotGlow[e], {
          scale: 1,
          opacity: 0.3,
          duration: r / 2,
          ease: "power2.inOut",
        }),
        (this.state.timelines[e] = t);
    }
    handleHover(e, t) {
      if (
        (this.state.activeIndex !== null &&
          this.state.activeIndex !== e &&
          this.forceExitHover(this.state.activeIndex),
        this.state.timelines[e] && this.state.timelines[e].pause(),
        t)
      ) {
        this.state.activeIndex = e;
        const i = ke.timeline();
        i
          .to(
            this.elements.mapDotGlow[e],
            { scale: 1.5, opacity: 0.7, duration: 0.5, ease: "power2.out" },
            0
          )
          .to(
            this.elements.mapDotGlow[e],
            { scale: 1.8, opacity: 0, duration: 0.5, ease: "power2.out" },
            0.2
          ),
          i.to(
            this.elements.mapDotLarge[e],
            {
              scale: 1.3,
              backgroundColor: "var(--swatch--brand)",
              duration: 0.8,
              ease: "back.out(2)",
            },
            0
          ),
          i.to(
            this.elements.mapDotSmall[e],
            { scale: 0.8, duration: 0.6, ease: "back.out(1.7)" },
            0
          ),
          i.to(
            this.elements.mapDotTag[e],
            {
              opacity: 1,
              scale: 1,
              y: -10,
              duration: 0.5,
              ease: "back.out(1.2)",
            },
            0.1
          );
      } else this.forceExitHover(e);
    }
    forceExitHover(e) {
      e === this.state.activeIndex && (this.state.activeIndex = null),
        ke.killTweensOf([
          this.elements.mapDotGlow[e],
          this.elements.mapDotLarge[e],
          this.elements.mapDotSmall[e],
          this.elements.mapDotTag[e],
        ]);
      const t = ke.timeline({
        onComplete: () => {
          this.createIdleAnimation(e);
        },
      });
      t.to(
        this.elements.mapDotLarge[e],
        {
          scale: 1,
          backgroundColor: "var(--swatch--light-faded)",
          duration: 0.5,
          ease: "power3.out",
        },
        0
      ),
        t.to(
          this.elements.mapDotSmall[e],
          { scale: 1, duration: 0.5, ease: "power3.out" },
          0
        ),
        t.to(
          this.elements.mapDotTag[e],
          { opacity: 0, scale: 0.8, y: 10, duration: 0.25, ease: "power3.in" },
          0
        ),
        t.to(
          this.elements.mapDotGlow[e],
          { scale: 1, opacity: 0.3, duration: 0.4, ease: "power2.inOut" },
          0.1
        );
    }
    pauseAll() {
      this.state.timelines.forEach((e) => {
        e && e.pause();
      });
    }
    resumeAll() {
      this.state.timelines.forEach((e, t) => {
        e && this.state.activeIndex !== t && e.play();
      });
    }
  }
  const Pg = () => new Cg(),
    Og = () => {
      Pg();
    },
    Ig = () => {
      Og();
    },
    Lg = () => {
      document.querySelectorAll('[filter-accordion="wrap"]').forEach((e) => {
        const t = e.querySelector('[filter-accordion="trigger"]'),
          i = e.querySelector('[filter-accordion="content"]'),
          r = e.querySelector('[filter-accordion="icon-vertical"]'),
          s = e.querySelector('[filter-accordion="icon-horizontal"]'),
          a = [i, r, s, t];
        a.forEach((l) => {
          l && l.setAttribute("filter-accordion-status", "inactive");
        });
        const o = () => {
          const c =
            i.getAttribute("filter-accordion-status") === "active"
              ? "inactive"
              : "active";
          a.forEach((u) => {
            u && u.setAttribute("filter-accordion-status", c);
          });
        };
        t.addEventListener("click", o);
      });
    },
    Dg = () => {
      Lg();
    };
  function zg() {
    Dg();
  }
  const Rg = {
    home: { init: Vm },
    about: { init: yg },
    career: { init: bg },
    provider_cms: { init: Tg },
    patient_cms: { init: Eg },
    blog_cms: { init: Mg },
    team: { init: xg },
    guide: { init: kg },
    location: { init: Ig },
    shop_medication: { init: zg },
    dashboard: { init: () => console.log("Dashboard initialized") },
    login: { init: () => console.log("Login initialized") },
    medication_cms: { init: () => console.log("Medication CMS initialized") },
    error: {
      init: () => {
        const n = new URLSearchParams(window.location.search),
          e = n.get("code"),
          t = n.get("message");
        console.error("Auth Error:", e, t);
      },
    },
  };
  async function Ng() {
    try {
      await Gp();
      const n = document.querySelector("[data-page]");
      if (!n) return;
      const e = n.getAttribute("data-page"),
        t = Rg[e];
      t != null && t.init && (await t.init());
    } catch (n) {
      console.error("Page initialization error:", n);
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    Ng();
  });
});
