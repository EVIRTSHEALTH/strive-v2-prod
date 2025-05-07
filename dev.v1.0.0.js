var Rg = Object.defineProperty;
var Bg = (ei, Xe, Ki) =>
  Xe in ei
    ? Rg(ei, Xe, { enumerable: !0, configurable: !0, writable: !0, value: Ki })
    : (ei[Xe] = Ki);
var W = (ei, Xe, Ki) => Bg(ei, typeof Xe != "symbol" ? Xe + "" : Xe, Ki);
(function (ei) {
  typeof define == "function" && define.amd ? define(ei) : ei();
})(function () {
  "use strict";
  var ei = document.createElement("style");
  (ei.textContent = `body{margin:0;padding:0}[data-show=auth],[data-show=guest]{transition:opacity .3s ease;opacity:0;pointer-events:none;display:none!important}[auth-visible]{opacity:1;pointer-events:all;display:block!important}[auth-visible][data-display=flex]{display:flex!important}[auth-visible][data-display=grid]{display:grid!important}[auth-visible][data-display=inline]{display:inline!important}@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:var(--swiper-navigation-top-offset, 50%);width:calc(var(--swiper-navigation-size) / 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-prev svg,.swiper-rtl .swiper-button-next svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset, 10px);right:auto}.swiper-button-lock{display:none}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset, 10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}
/*$vite$:1*/`),
    document.head.appendChild(ei);
  function Xe(n) {
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
   * GSAP 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Mt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    kr = { duration: 0.5, overwrite: !1, delay: 0 },
    oa,
    Ue,
    ye,
    oi = 1e8,
    tt = 1 / oi,
    la = Math.PI * 2,
    id = la / 4,
    rd = 0,
    Jo = Math.sqrt,
    nd = Math.cos,
    sd = Math.sin,
    Ye = function (e) {
      return typeof e == "string";
    },
    Ce = function (e) {
      return typeof e == "function";
    },
    Di = function (e) {
      return typeof e == "number";
    },
    ua = function (e) {
      return typeof e > "u";
    },
    li = function (e) {
      return typeof e == "object";
    },
    _t = function (e) {
      return e !== !1;
    },
    ca = function () {
      return typeof window < "u";
    },
    is = function (e) {
      return Ce(e) || Ye(e);
    },
    Qo =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    it = Array.isArray,
    da = /(?:-?\.?\d|\.)+/gi,
    el = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Pr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    fa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    tl = /[+-]=-?[.\d]+/,
    il = /[^,'"\[\]\s]+/gi,
    ad = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Se,
    ui,
    pa,
    ha,
    kt = {},
    rs = {},
    rl,
    nl = function (e) {
      return (rs = Ir(e, kt)) && St;
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
    on = function (e, t) {
      return !t && console.warn(e);
    },
    sl = function (e, t) {
      return (e && (kt[e] = t) && rs && (rs[e] = t)) || kt;
    },
    ln = function () {
      return 0;
    },
    od = { suppressEvents: !0, isStart: !0, kill: !1 },
    ns = { suppressEvents: !0, kill: !1 },
    ld = { suppressEvents: !0 },
    ga = {},
    Ii = [],
    wa = {},
    al,
    Pt = {},
    va = {},
    ol = 30,
    ss = [],
    ya = "",
    ba = function (e) {
      var t = e[0],
        i,
        r;
      if ((li(t) || Ce(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = ss.length; r-- && !ss[r].targetTest(t); );
        i = ss[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new zl(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    Ji = function (e) {
      return e._gsap || ba(qt(e))[0]._gsap;
    },
    ll = function (e, t, i) {
      return (i = e[t]) && Ce(i)
        ? e[t]()
        : (ua(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Dt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    ke = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Ie = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Or = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    ud = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    as = function () {
      var e = Ii.length,
        t = Ii.slice(0),
        i,
        r;
      for (wa = {}, Ii.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    ul = function (e, t, i, r) {
      Ii.length && !Ue && as(),
        e.render(t, i, Ue && t < 0 && (e._initted || e._startAt)),
        Ii.length && !Ue && as();
    },
    cl = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(il).length < 2
        ? t
        : Ye(e)
        ? e.trim()
        : e;
    },
    dl = function (e) {
      return e;
    },
    Ot = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    cd = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    Ir = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    fl = function n(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = li(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    os = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    un = function (e) {
      var t = e.parent || Se,
        i = e.keyframes ? cd(it(e.keyframes)) : Ot;
      if (_t(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    dd = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    pl = function (e, t, i, r, s) {
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
    ls = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var s = t._prev,
        a = t._next;
      s ? (s._next = a) : e[i] === t && (e[i] = a),
        a ? (a._prev = s) : e[r] === t && (e[r] = s),
        (t._next = t._prev = t.parent = null);
    },
    Fi = function (e, t) {
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
    fd = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    _a = function (e, t, i, r) {
      return (
        e._startAt &&
        (Ue
          ? e._startAt.revert(ns)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    pd = function n(e) {
      return !e || (e._ts && n(e.parent));
    },
    hl = function (e) {
      return e._repeat ? Fr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Fr = function (e, t) {
      var i = Math.floor((e = Ie(e / t)));
      return e && i === e ? i - 1 : i;
    },
    us = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    cs = function (e) {
      return (e._end = Ie(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || tt) || 0)
      ));
    },
    ds = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = Ie(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          cs(e),
          i._dirty || Qi(i, e)),
        e
      );
    },
    ml = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = us(e.rawTime(), t)),
          (!t._dur || dn(0, t.totalDuration(), i) - t._tTime > tt) &&
            t.render(i, !0)),
        Qi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -1e-8;
      }
    },
    ci = function (e, t, i, r) {
      return (
        t.parent && Fi(t),
        (t._start = Ie(
          (Di(i) ? i : i || e !== Se ? Gt(e, i, t) : e._time) + t._delay
        )),
        (t._end = Ie(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        pl(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Da(t) || (e._recent = t),
        r || ml(e, t),
        e._ts < 0 && ds(e, e._tTime),
        e
      );
    },
    gl = function (e, t) {
      return (
        (kt.ScrollTrigger || ma("scrollTrigger", t)) &&
        kt.ScrollTrigger.create(t, e)
      );
    },
    wl = function (e, t, i, r, s) {
      if ((Pa(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Ue &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        al !== Ft.frame
      )
        return Ii.push(e), (e._lazy = [s, r]), 1;
    },
    hd = function n(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
    },
    Da = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    md = function (e, t, i, r) {
      var s = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && hd(e) && !(!e._initted && Da(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Da(e))))
            ? 0
            : 1,
        o = e._rDelay,
        l = 0,
        u,
        c,
        h;
      if (
        (o &&
          e._repeat &&
          ((l = dn(0, e._tDur, t)),
          (c = Fr(l, o)),
          e._yoyo && c & 1 && (a = 1 - a),
          c !== Fr(e._tTime, o) &&
            ((s = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== s || Ue || r || e._zTime === tt || (!t && e._zTime))
      ) {
        if (!e._initted && wl(e, t, r, i, l)) return;
        for (
          h = e._zTime,
            e._zTime = t || (i ? tt : 0),
            i || (i = t && !h),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            u = e._pt;
          u;

        )
          u.r(a, u.d), (u = u._next);
        t < 0 && _a(e, t, i, !0),
          e._onUpdate && !i && It(e, "onUpdate"),
          l && e._repeat && !i && e.parent && It(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && Fi(e, 1),
            !i &&
              !Ue &&
              (It(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    gd = function (e, t, i) {
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
    Lr = function (e, t, i, r) {
      var s = e._repeat,
        a = Ie(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = s ? (s < 0 ? 1e10 : Ie(a * (s + 1) + e._rDelay * s)) : a),
        o > 0 && !r && ds(e, (e._tTime = e._tDur * o)),
        e.parent && cs(e),
        i || Qi(e.parent, e),
        e
      );
    },
    vl = function (e) {
      return e instanceof pt ? Qi(e) : Lr(e, e._dur);
    },
    wd = { _start: 0, endTime: ln, totalDuration: ln },
    Gt = function n(e, t, i) {
      var r = e.labels,
        s = e._recent || wd,
        a = e.duration() >= oi ? s.endTime(!1) : e._dur,
        o,
        l,
        u;
      return Ye(t) && (isNaN(t) || t in r)
        ? ((l = t.charAt(0)),
          (u = t.substr(-1) === "%"),
          (o = t.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (u ? (o < 0 ? s : i).totalDuration() / 100 : 1))
            : o < 0
            ? (t in r || (r[t] = a), r[t])
            : ((l = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
              u && i && (l = (l / 100) * (it(i) ? i[0] : i).totalDuration()),
              o > 1 ? n(e, t.substr(0, o - 1), i) + l : a + l))
        : t == null
        ? a
        : +t;
    },
    cn = function (e, t, i) {
      var r = Di(t[1]),
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
      return new Fe(t[0], a, t[s + 1]);
    },
    Li = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    dn = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    rt = function (e, t) {
      return !Ye(e) || !(t = ad.exec(e)) ? "" : t[1];
    },
    vd = function (e, t, i) {
      return Li(i, function (r) {
        return dn(e, t, r);
      });
    },
    Ea = [].slice,
    yl = function (e, t) {
      return (
        e &&
        li(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && li(e[0]))) &&
        !e.nodeType &&
        e !== ui
      );
    },
    yd = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var s;
          return (Ye(r) && !t) || yl(r, 1)
            ? (s = i).push.apply(s, qt(r))
            : i.push(r);
        }) || i
      );
    },
    qt = function (e, t, i) {
      return ye && !t && ye.selector
        ? ye.selector(e)
        : Ye(e) && !i && (pa || !Rr())
        ? Ea.call((t || ha).querySelectorAll(e), 0)
        : it(e)
        ? yd(e, i)
        : yl(e)
        ? Ea.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Sa = function (e) {
      return (
        (e = qt(e)[0] || on("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return qt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? on("Invalid scope") || ha.createElement("div")
              : e
          );
        }
      );
    },
    bl = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    _l = function (e) {
      if (Ce(e)) return e;
      var t = li(e) ? e : { each: e },
        i = er(t.ease),
        r = t.from || 0,
        s = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        u = t.axis,
        c = r,
        h = r;
      return (
        Ye(r)
          ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((c = r[0]), (h = r[1])),
        function (m, p, f) {
          var d = (f || t).length,
            g = a[d],
            b,
            v,
            w,
            y,
            _,
            C,
            T,
            x,
            A;
          if (!g) {
            if (((A = t.grid === "auto" ? 0 : (t.grid || [1, oi])[1]), !A)) {
              for (
                T = -1e8;
                T < (T = f[A++].getBoundingClientRect().left) && A < d;

              );
              A < d && A--;
            }
            for (
              g = a[d] = [],
                b = l ? Math.min(A, d) * c - 0.5 : r % A,
                v = A === oi ? 0 : l ? (d * h) / A - 0.5 : (r / A) | 0,
                T = 0,
                x = oi,
                C = 0;
              C < d;
              C++
            )
              (w = (C % A) - b),
                (y = v - ((C / A) | 0)),
                (g[C] = _ =
                  u ? Math.abs(u === "y" ? y : w) : Jo(w * w + y * y)),
                _ > T && (T = _),
                _ < x && (x = _);
            r === "random" && bl(g),
              (g.max = T - x),
              (g.min = x),
              (g.v = d =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (A > d
                      ? d - 1
                      : u
                      ? u === "y"
                        ? d / A
                        : A
                      : Math.max(A, d / A)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = d < 0 ? s - d : s),
              (g.u = rt(t.amount || t.each) || 0),
              (i = i && d < 0 ? Il(i) : i);
          }
          return (
            (d = (g[m] - g.min) / g.max || 0),
            Ie(g.b + (i ? i(d) : d) * g.v) + g.u
          );
        }
      );
    },
    Ta = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = Ie(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (Di(i) ? 0 : rt(i));
      };
    },
    Dl = function (e, t) {
      var i = it(e),
        r,
        s;
      return (
        !i &&
          li(e) &&
          ((r = i = e.radius || oi),
          e.values
            ? ((e = qt(e.values)), (s = !Di(e[0])) && (r *= r))
            : (e = Ta(e.increment))),
        Li(
          t,
          i
            ? Ce(e)
              ? function (a) {
                  return (s = e(a)), Math.abs(s - a) <= r ? s : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(s ? a.x : a),
                      l = parseFloat(s ? a.y : 0),
                      u = oi,
                      c = 0,
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
                      m < u && ((u = m), (c = h));
                  return (
                    (c = !r || u <= r ? e[c] : a),
                    s || c === a || Di(a) ? c : c + rt(a)
                  );
                }
            : Ta(e)
        )
      );
    },
    El = function (e, t, i, r) {
      return Li(it(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return it(e)
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
    bd = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (s, a) {
          return a(s);
        }, r);
      };
    },
    _d = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || rt(i));
      };
    },
    Dd = function (e, t, i) {
      return Tl(e, t, 0, 1, i);
    },
    Sl = function (e, t, i) {
      return Li(i, function (r) {
        return e[~~t(r)];
      });
    },
    Ed = function n(e, t, i) {
      var r = t - e;
      return it(e)
        ? Sl(e, n(0, e.length), t)
        : Li(i, function (s) {
            return ((r + ((s - e) % r)) % r) + e;
          });
    },
    Sd = function n(e, t, i) {
      var r = t - e,
        s = r * 2;
      return it(e)
        ? Sl(e, n(0, e.length - 1), t)
        : Li(i, function (a) {
            return (a = (s + ((a - e) % s)) % s || 0), e + (a > r ? s - a : a);
          });
    },
    fn = function (e) {
      for (var t = 0, i = "", r, s, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (s = e.substr(r + 7, a - r - 7).match(o ? il : da)),
          (i +=
            e.substr(t, r - t) +
            El(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    Tl = function (e, t, i, r, s) {
      var a = t - e,
        o = r - i;
      return Li(s, function (l) {
        return i + (((l - e) / a) * o || 0);
      });
    },
    Td = function n(e, t, i, r) {
      var s = isNaN(e + t)
        ? 0
        : function (p) {
            return (1 - p) * e + p * t;
          };
      if (!s) {
        var a = Ye(e),
          o = {},
          l,
          u,
          c,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (it(e) && !it(t)) {
          for (c = [], h = e.length, m = h - 2, u = 1; u < h; u++)
            c.push(n(e[u - 1], e[u]));
          h--,
            (s = function (f) {
              f *= h;
              var d = Math.min(m, ~~f);
              return c[d](f - d);
            }),
            (i = t);
        } else r || (e = Ir(it(e) ? [] : {}, e));
        if (!c) {
          for (l in t) Ma.call(o, e, l, "get", t[l]);
          s = function (f) {
            return Fa(f, o) || (a ? e.p : e);
          };
        }
      }
      return Li(i, s);
    },
    xl = function (e, t, i) {
      var r = e.labels,
        s = oi,
        a,
        o,
        l;
      for (a in r)
        (o = r[a] - t),
          o < 0 == !!i && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
      return l;
    },
    It = function (e, t, i) {
      var r = e.vars,
        s = r[t],
        a = ye,
        o = e._ctx,
        l,
        u,
        c;
      if (s)
        return (
          (l = r[t + "Params"]),
          (u = r.callbackScope || e),
          i && Ii.length && as(),
          o && (ye = o),
          (c = l ? s.apply(u, l) : s.call(u)),
          (ye = a),
          c
        );
    },
    pn = function (e) {
      return (
        Fi(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ue),
        e.progress() < 1 && It(e, "onInterrupt"),
        e
      );
    },
    zr,
    Cl = [],
    Al = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), ca() || e.headless)) {
          var t = e.name,
            i = Ce(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: ln,
              render: Fa,
              add: Ma,
              kill: Hd,
              modifier: $d,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Ia,
              aliases: {},
              register: 0,
            };
          if ((Rr(), e !== r)) {
            if (Pt[t]) return;
            Ot(r, Ot(os(e, s), a)),
              Ir(r.prototype, Ir(s, os(e, a))),
              (Pt[(r.prop = t)] = r),
              e.targetTest && (ss.push(r), (ga[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          sl(t, r), e.register && e.register(St, r, Et);
        } else Cl.push(e);
    },
    he = 255,
    hn = {
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
    xa = function (e, t, i) {
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
    Ml = function (e, t, i) {
      var r = e ? (Di(e) ? [e >> 16, (e >> 8) & he, e & he] : 0) : hn.black,
        s,
        a,
        o,
        l,
        u,
        c,
        h,
        m,
        p,
        f;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), hn[e]))
          r = hn[e];
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
          if (((r = f = e.match(da)), !t))
            (l = (+r[0] % 360) / 360),
              (u = +r[1] / 100),
              (c = +r[2] / 100),
              (a = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (s = c * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = xa(l + 1 / 3, s, a)),
              (r[1] = xa(l, s, a)),
              (r[2] = xa(l - 1 / 3, s, a));
          else if (~e.indexOf("="))
            return (r = e.match(el)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(da) || hn.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !f &&
          ((s = r[0] / he),
          (a = r[1] / he),
          (o = r[2] / he),
          (h = Math.max(s, a, o)),
          (m = Math.min(s, a, o)),
          (c = (h + m) / 2),
          h === m
            ? (l = u = 0)
            : ((p = h - m),
              (u = c > 0.5 ? p / (2 - h - m) : p / (h + m)),
              (l =
                h === s
                  ? (a - o) / p + (a < o ? 6 : 0)
                  : h === a
                  ? (o - s) / p + 2
                  : (s - a) / p + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    kl = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(zi).forEach(function (s) {
          var a = s.match(Pr) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Pl = function (e, t, i) {
      var r = "",
        s = (e + r).match(zi),
        a = t ? "hsla(" : "rgba(",
        o = 0,
        l,
        u,
        c,
        h;
      if (!s) return e;
      if (
        ((s = s.map(function (m) {
          return (
            (m = Ml(m, t, 1)) &&
            a +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((c = kl(e)), (l = i.c), l.join(r) !== c.c.join(r)))
      )
        for (u = e.replace(zi, "1").split(Pr), h = u.length - 1; o < h; o++)
          r +=
            u[o] +
            (~l.indexOf(o)
              ? s.shift() || a + "0,0,0,0)"
              : (c.length ? c : s.length ? s : i).shift());
      if (!u)
        for (u = e.split(zi), h = u.length - 1; o < h; o++) r += u[o] + s[o];
      return r + u[h];
    },
    zi = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in hn) n += "|" + e + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    xd = /hsl[a]?\(/,
    Ol = function (e) {
      var t = e.join(" "),
        i;
      if (((zi.lastIndex = 0), zi.test(t)))
        return (
          (i = xd.test(t)),
          (e[1] = Pl(e[1], i)),
          (e[0] = Pl(e[0], i, kl(e[1]))),
          !0
        );
    },
    mn,
    Ft = (function () {
      var n = Date.now,
        e = 500,
        t = 33,
        i = n(),
        r = i,
        s = 1e3 / 240,
        a = s,
        o = [],
        l,
        u,
        c,
        h,
        m,
        p,
        f = function d(g) {
          var b = n() - r,
            v = g === !0,
            w,
            y,
            _,
            C;
          if (
            ((b > e || b < 0) && (i += b - t),
            (r += b),
            (_ = r - i),
            (w = _ - a),
            (w > 0 || v) &&
              ((C = ++h.frame),
              (m = _ - h.time * 1e3),
              (h.time = _ = _ / 1e3),
              (a += w + (w >= s ? 4 : s - w)),
              (y = 1)),
            v || (l = u(d)),
            y)
          )
            for (p = 0; p < o.length; p++) o[p](_, m, C, g);
        };
      return (
        (h = {
          time: 0,
          frame: 0,
          tick: function () {
            f(!0);
          },
          deltaRatio: function (g) {
            return m / (1e3 / (g || 60));
          },
          wake: function () {
            rl &&
              (!pa &&
                ca() &&
                ((ui = pa = window),
                (ha = ui.document || {}),
                (kt.gsap = St),
                (ui.gsapVersions || (ui.gsapVersions = [])).push(St.version),
                nl(rs || ui.GreenSockGlobals || (!ui.gsap && ui) || {}),
                Cl.forEach(Al)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && h.sleep(),
              (u =
                c ||
                function (g) {
                  return setTimeout(g, (a - h.time * 1e3 + 1) | 0);
                }),
              (mn = 1),
              f(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (mn = 0), (u = ln);
          },
          lagSmoothing: function (g, b) {
            (e = g || 1 / 0), (t = Math.min(b || 33, e));
          },
          fps: function (g) {
            (s = 1e3 / (g || 240)), (a = h.time * 1e3 + s);
          },
          add: function (g, b, v) {
            var w = b
              ? function (y, _, C, T) {
                  g(y, _, C, T), h.remove(w);
                }
              : g;
            return h.remove(g), o[v ? "unshift" : "push"](w), Rr(), w;
          },
          remove: function (g, b) {
            ~(b = o.indexOf(g)) && o.splice(b, 1) && p >= b && p--;
          },
          _listeners: o,
        }),
        h
      );
    })(),
    Rr = function () {
      return !mn && Ft.wake();
    },
    oe = {},
    Cd = /^[\d.\-M][\d.\-,\s]/,
    Ad = /["']/g,
    Md = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          s = 1,
          a = i.length,
          o,
          l,
          u;
        s < a;
        s++
      )
        (l = i[s]),
          (o = s !== a - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, o)),
          (t[r] = isNaN(u) ? u.replace(Ad, "").trim() : +u),
          (r = l.substr(o + 1).trim());
      return t;
    },
    kd = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    Pd = function (e) {
      var t = (e + "").split("("),
        i = oe[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Md(t[1])] : kd(e).split(",").map(cl)
          )
        : oe._CE && Cd.test(e)
        ? oe._CE("", e)
        : i;
    },
    Il = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Fl = function n(e, t) {
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
      return (e && (Ce(e) ? e : oe[e] || Pd(e))) || t;
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
        Dt(e, function (o) {
          (oe[o] = kt[o] = s), (oe[(a = o.toLowerCase())] = i);
          for (var l in s)
            oe[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = oe[o + "." + l] = s[l];
        }),
        s
      );
    },
    Ll = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Ca = function n(e, t, i) {
      var r = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (s / la) * (Math.asin(1 / r) || 0),
        o = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * sd((c - a) * s) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (u) {
                return 1 - o(1 - u);
              }
            : Ll(o);
      return (
        (s = la / s),
        (l.config = function (u, c) {
          return n(e, u, c);
        }),
        l
      );
    },
    Aa = function n(e, t) {
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
            : Ll(i);
      return (
        (r.config = function (s) {
          return n(e, s);
        }),
        r
      );
    };
  Dt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
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
    tr("Elastic", Ca("in"), Ca("out"), Ca()),
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
      return -(Jo(1 - n * n) - 1);
    }),
    tr("Sine", function (n) {
      return n === 1 ? 1 : -nd(n * id) + 1;
    }),
    tr("Back", Aa("in"), Aa("out"), Aa()),
    (oe.SteppedEase =
      oe.steps =
      kt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              a = 1 - tt;
            return function (o) {
              return (((r * dn(0, a, o)) | 0) + s) * i;
            };
          },
        }),
    (kr.ease = oe["quad.out"]),
    Dt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (n) {
        return (ya += n + "," + n + "Params,");
      }
    );
  var zl = function (e, t) {
      (this.id = rd++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : ll),
        (this.set = t ? t.getSetter : Ia);
    },
    gn = (function () {
      function n(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Lr(this, +t.duration, 1, 1),
          (this.data = t.data),
          ye && ((this._ctx = ye), ye.data.push(this)),
          mn || Ft.wake();
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
              Lr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((Rr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              ds(this, i), !s._dp || s.parent || ml(s, this);
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
              ci(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === tt) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), ul(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + hl(this)) %
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
                  hl(this),
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
            ? Fr(this._tTime, s) + 1
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
            this.totalTime(dn(-Math.abs(this._delay), this._tDur, s), r !== !1),
            cs(this),
            fd(this)
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
                  : (Rr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== tt &&
                        (this._tTime -= tt)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && ci(r, this, i - this._delay),
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
          i === void 0 && (i = ld);
          var r = Ue;
          return (
            (Ue = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (Ue = r),
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
            ? ((this._repeat = i === 1 / 0 ? -2 : i), vl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), vl(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Gt(this, i), _t(r));
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
              s < this.endTime(!0) - tt)
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
            var a = Ce(i) ? i : dl,
              o = function () {
                var u = r.then;
                (r.then = null),
                  Ce(a) && (a = a(r)) && (a.then || a === r) && (r.then = u),
                  s(a),
                  (r.then = u);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? o()
              : (r._prom = o);
          });
        }),
        (e.kill = function () {
          pn(this);
        }),
        n
      );
    })();
  Ot(gn.prototype, {
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
        Se && ci(i.parent || Se, Xe(s), r),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && gl(Xe(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, s, a) {
        return cn(0, arguments, this), this;
      }),
      (t.from = function (r, s, a) {
        return cn(1, arguments, this), this;
      }),
      (t.fromTo = function (r, s, a, o) {
        return cn(2, arguments, this), this;
      }),
      (t.set = function (r, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          un(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Fe(r, s, Gt(this, a), 1),
          this
        );
      }),
      (t.call = function (r, s, a) {
        return ci(this, Fe.delayedCall(0, r, s), a);
      }),
      (t.staggerTo = function (r, s, a, o, l, u, c) {
        return (
          (a.duration = s),
          (a.stagger = a.stagger || o),
          (a.onComplete = u),
          (a.onCompleteParams = c),
          (a.parent = this),
          new Fe(r, a, Gt(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, s, a, o, l, u, c) {
        return (
          (a.runBackwards = 1),
          (un(a).immediateRender = _t(a.immediateRender)),
          this.staggerTo(r, s, a, o, l, u, c)
        );
      }),
      (t.staggerFromTo = function (r, s, a, o, l, u, c, h) {
        return (
          (o.startAt = a),
          (un(o).immediateRender = _t(o.immediateRender)),
          this.staggerTo(r, s, o, l, u, c, h)
        );
      }),
      (t.render = function (r, s, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = r <= 0 ? 0 : Ie(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !u),
          m,
          p,
          f,
          d,
          g,
          b,
          v,
          w,
          y,
          _,
          C,
          T;
        if (
          (this !== Se && c > l && r >= 0 && (c = l),
          c !== this._tTime || a || h)
        ) {
          if (
            (o !== this._time &&
              u &&
              ((c += this._time - o), (r += this._time - o)),
            (m = c),
            (y = this._start),
            (w = this._ts),
            (b = !w),
            h && (u || (o = this._zTime), (r || !s) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((C = this._yoyo),
              (g = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, s, a);
            if (
              ((m = Ie(c % g)),
              c === l
                ? ((d = this._repeat), (m = u))
                : ((_ = Ie(c / g)),
                  (d = ~~_),
                  d && d === _ && ((m = u), d--),
                  m > u && (m = u)),
              (_ = Fr(this._tTime, g)),
              !o &&
                this._tTime &&
                _ !== d &&
                this._tTime - _ * g - this._dur <= 0 &&
                (_ = d),
              C && d & 1 && ((m = u - m), (T = 1)),
              d !== _ && !this._lock)
            ) {
              var x = C && _ & 1,
                A = x === (C && d & 1);
              if (
                (d < _ && (x = !x),
                (o = x ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(o || (T ? 0 : Ie(d * g)), s, !u)._lock = 0),
                (this._tTime = c),
                !s && this.parent && It(this, "onRepeat"),
                this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  b !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                A &&
                  ((this._lock = 2),
                  (o = x ? u : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !T && this.invalidate()),
                (this._lock = 0),
                !this._ts && !b)
              )
                return this;
              Fl(this, T);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = gd(this, Ie(o), Ie(m))), v && (c -= m - (m = v._start))),
            (this._tTime = c),
            (this._time = m),
            (this._act = !w),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && m && !s && !d && (It(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (m >= o && r >= 0)
            for (p = this._first; p; ) {
              if (
                ((f = p._next), (p._act || m >= p._start) && p._ts && v !== p)
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
                  (v = 0), f && (c += this._zTime = -1e-8);
                  break;
                }
              }
              p = f;
            }
          else {
            p = this._last;
            for (var E = r < 0 ? r : m; p; ) {
              if (
                ((f = p._prev), (p._act || E <= p._end) && p._ts && v !== p)
              ) {
                if (p.parent !== this) return this.render(r, s, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (E - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (E - p._start) * p._ts,
                    s,
                    a || (Ue && (p._initted || p._startAt))
                  ),
                  m !== this._time || (!this._ts && !b))
                ) {
                  (v = 0), f && (c += this._zTime = E ? -1e-8 : tt);
                  break;
                }
              }
              p = f;
            }
          }
          if (
            v &&
            !s &&
            (this.pause(),
            (v.render(m >= o ? 0 : -1e-8)._zTime = m >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = y), cs(this), this.render(r, s, a);
          this._onUpdate && !s && It(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && o)) &&
              (y === this._start || Math.abs(w) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  Fi(this, 1),
                !s &&
                  !(r < 0 && !o) &&
                  (c || o || !l) &&
                  (It(
                    this,
                    c === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, s) {
        var a = this;
        if ((Di(s) || (s = Gt(this, s, r)), !(r instanceof gn))) {
          if (it(r))
            return (
              r.forEach(function (o) {
                return a.add(o, s);
              }),
              this
            );
          if (Ye(r)) return this.addLabel(r, s);
          if (Ce(r)) r = Fe.delayedCall(0, r);
          else return this;
        }
        return this !== r ? ci(this, r, s) : this;
      }),
      (t.getChildren = function (r, s, a, o) {
        r === void 0 && (r = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -1e8);
        for (var l = [], u = this._first; u; )
          u._start >= o &&
            (u instanceof Fe
              ? s && l.push(u)
              : (a && l.push(u),
                r && l.push.apply(l, u.getChildren(!0, s, a)))),
            (u = u._next);
        return l;
      }),
      (t.getById = function (r) {
        for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
          if (s[a].vars.id === r) return s[a];
      }),
      (t.remove = function (r) {
        return Ye(r)
          ? this.removeLabel(r)
          : Ce(r)
          ? this.killTweensOf(r)
          : (r.parent === this && ls(this, r),
            r === this._recent && (this._recent = this._last),
            Qi(this));
      }),
      (t.totalTime = function (r, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Ie(
                Ft.time -
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
        return (this.labels[r] = Gt(this, s)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, s, a) {
        var o = Fe.delayedCall(0, s || ln, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), ci(this, o, Gt(this, r))
        );
      }),
      (t.removePause = function (r) {
        var s = this._first;
        for (r = Gt(this, r); s; )
          s._start === r && s.data === "isPause" && Fi(s), (s = s._next);
      }),
      (t.killTweensOf = function (r, s, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          Ri !== o[l] && o[l].kill(r, s);
        return this;
      }),
      (t.getTweensOf = function (r, s) {
        for (var a = [], o = qt(r), l = this._first, u = Di(s), c; l; )
          l instanceof Fe
            ? ud(l._targets, o) &&
              (u
                ? (!Ri || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              a.push(l)
            : (c = l.getTweensOf(o, s)).length && a.push.apply(a, c),
            (l = l._next);
        return a;
      }),
      (t.tweenTo = function (r, s) {
        s = s || {};
        var a = this,
          o = Gt(a, r),
          l = s,
          u = l.startAt,
          c = l.onStart,
          h = l.onStartParams,
          m = l.immediateRender,
          p,
          f = Fe.to(
            a,
            Ot(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (o - (u && "time" in u ? u.time : a._time)) / a.timeScale()
                  ) ||
                  tt,
                onStart: function () {
                  if ((a.pause(), !p)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (o - (u && "time" in u ? u.time : a._time)) /
                          a.timeScale()
                      );
                    f._dur !== g && Lr(f, g, 0, 1).render(f._time, !0, !0),
                      (p = 1);
                  }
                  c && c.apply(f, h || []);
                },
              },
              s
            )
          );
        return m ? f.render(0) : f;
      }),
      (t.tweenFromTo = function (r, s, a) {
        return this.tweenTo(s, Ot({ startAt: { time: Gt(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), xl(this, Gt(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), xl(this, Gt(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + tt);
      }),
      (t.shiftChildren = function (r, s, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, u; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (s) for (u in l) l[u] >= a && (l[u] += r);
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
          l = oi,
          u,
          c,
          h;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -r : r)
          );
        if (a._dirty) {
          for (h = a.parent; o; )
            (u = o._prev),
              o._dirty && o.totalDuration(),
              (c = o._start),
              c > l && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (ci(a, o, c - o._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                o._ts &&
                ((s -= c),
                ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                  ((a._start += c / a._ts), (a._time -= c), (a._tTime -= c)),
                a.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              o._end > s && o._ts && (s = o._end),
              (o = u);
          Lr(a, a === Se && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Se._ts && (ul(Se, us(r, Se)), (al = Ft.frame)), Ft.frame >= ol)) {
          ol += Mt.autoSleep || 120;
          var s = Se._first;
          if ((!s || !s._ts) && Mt.autoSleep && Ft._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Ft.sleep();
          }
        }
      }),
      e
    );
  })(gn);
  Ot(pt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Od = function (e, t, i, r, s, a, o) {
      var l = new Et(this._pt, e, t, 0, 1, Yl, null, s),
        u = 0,
        c = 0,
        h,
        m,
        p,
        f,
        d,
        g,
        b,
        v;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (b = ~r.indexOf("random(")) && (r = fn(r)),
          a && ((v = [i, r]), a(v, e, t), (i = v[0]), (r = v[1])),
          m = i.match(fa) || [];
        (h = fa.exec(r));

      )
        (f = h[0]),
          (d = r.substring(u, h.index)),
          p ? (p = (p + 1) % 5) : d.substr(-5) === "rgba(" && (p = 1),
          f !== m[c++] &&
            ((g = parseFloat(m[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: d || c === 1 ? d : ",",
              s: g,
              c: f.charAt(1) === "=" ? Or(g, f) - g : parseFloat(f) - g,
              m: p && p < 4 ? Math.round : 0,
            }),
            (u = fa.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = o),
        (tl.test(r) || b) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Ma = function (e, t, i, r, s, a, o, l, u, c) {
      Ce(r) && (r = r(s || 0, e, a));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : Ce(h)
            ? u
              ? e[
                  t.indexOf("set") || !Ce(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](u)
              : e[t]()
            : h,
        p = Ce(h) ? (u ? Rd : $l) : Oa,
        f;
      if (
        (Ye(r) &&
          (~r.indexOf("random(") && (r = fn(r)),
          r.charAt(1) === "=" &&
            ((f = Or(m, r) + (rt(m) || 0)), (f || f === 0) && (r = f))),
        !c || m !== r || ka)
      )
        return !isNaN(m * r) && r !== ""
          ? ((f = new Et(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? Nd : Hl,
              0,
              p
            )),
            u && (f.fp = u),
            o && f.modifier(o, this, e),
            (this._pt = f))
          : (!h && !(t in e) && ma(t, r),
            Od.call(this, e, t, m, r, p, l || Mt.stringFilter, u));
    },
    Id = function (e, t, i, r, s) {
      if (
        (Ce(e) && (e = wn(e, s, t, i, r)),
        !li(e) || (e.style && e.nodeType) || it(e) || Qo(e))
      )
        return Ye(e) ? wn(e, s, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = wn(e[o], s, t, i, r);
      return a;
    },
    Rl = function (e, t, i, r, s, a) {
      var o, l, u, c;
      if (
        Pt[e] &&
        (o = new Pt[e]()).init(
          s,
          o.rawVars ? t[e] : Id(t[e], r, s, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = l = new Et(i._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
        i !== zr)
      )
        for (u = i._ptLookup[i._targets.indexOf(s)], c = o._props.length; c--; )
          u[o._props[c]] = l;
      return o;
    },
    Ri,
    ka,
    Pa = function n(e, t, i) {
      var r = e.vars,
        s = r.ease,
        a = r.startAt,
        o = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        c = r.runBackwards,
        h = r.yoyoEase,
        m = r.keyframes,
        p = r.autoRevert,
        f = e._dur,
        d = e._startAt,
        g = e._targets,
        b = e.parent,
        v = b && b.data === "nested" ? b.vars.targets : g,
        w = e._overwrite === "auto" && !oa,
        y = e.timeline,
        _,
        C,
        T,
        x,
        A,
        E,
        z,
        D,
        S,
        M,
        L,
        F,
        P;
      if (
        (y && (!m || !s) && (s = "none"),
        (e._ease = er(s, kr.ease)),
        (e._yEase = h ? Il(er(h === !0 ? s : h, kr.ease)) : 0),
        h &&
          e._yoyo &&
          !e._repeat &&
          ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
        (e._from = !y && !!r.runBackwards),
        !y || (m && !r.stagger))
      ) {
        if (
          ((D = g[0] ? Ji(g[0]).harness : 0),
          (F = D && r[D.prop]),
          (_ = os(r, ga)),
          d &&
            (d._zTime < 0 && d.progress(1),
            t < 0 && c && o && !p
              ? d.render(-1, !0)
              : d.revert(c && f ? ns : od),
            (d._lazy = 0)),
          a)
        ) {
          if (
            (Fi(
              (e._startAt = Fe.set(
                g,
                Ot(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: b,
                    immediateRender: !0,
                    lazy: !d && _t(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return It(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ue || (!o && !p)) && e._startAt.revert(ns),
            o && f && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && f && !d) {
          if (
            (t && (o = !1),
            (T = Ot(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !d && _t(l),
                immediateRender: o,
                stagger: 0,
                parent: b,
              },
              _
            )),
            F && (T[D.prop] = F),
            Fi((e._startAt = Fe.set(g, T))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ue ? e._startAt.revert(ns) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            n(e._startAt, tt, tt);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (f && _t(l)) || (l && !f), C = 0;
          C < g.length;
          C++
        ) {
          if (
            ((A = g[C]),
            (z = A._gsap || ba(g)[C]._gsap),
            (e._ptLookup[C] = M = {}),
            wa[z.id] && Ii.length && as(),
            (L = v === g ? C : v.indexOf(A)),
            D &&
              (S = new D()).init(A, F || _, e, L, v) !== !1 &&
              ((e._pt = x =
                new Et(e._pt, A, S.name, 0, 1, S.render, S, 0, S.priority)),
              S._props.forEach(function (I) {
                M[I] = x;
              }),
              S.priority && (E = 1)),
            !D || F)
          )
            for (T in _)
              Pt[T] && (S = Rl(T, _, e, L, A, v))
                ? S.priority && (E = 1)
                : (M[T] = x =
                    Ma.call(e, A, T, "get", _[T], L, v, 0, r.stringFilter));
          e._op && e._op[C] && e.kill(A, e._op[C]),
            w &&
              e._pt &&
              ((Ri = e),
              Se.killTweensOf(A, M, e.globalTime(t)),
              (P = !e.parent),
              (Ri = 0)),
            e._pt && l && (wa[z.id] = 1);
        }
        E && Vl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !P),
        m && t <= 0 && y.render(oi, !0, !0);
    },
    Fd = function (e, t, i, r, s, a, o, l) {
      var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        c,
        h,
        m,
        p;
      if (!u)
        for (
          u = e._ptCache[t] = [], m = e._ptLookup, p = e._targets.length;
          p--;

        ) {
          if (((c = m[p][t]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
          if (!c)
            return (
              (ka = 1),
              (e.vars[t] = "+=0"),
              Pa(e, o),
              (ka = 0),
              l ? on(t + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (p = u.length; p--; )
        (h = u[p]),
          (c = h._pt || h),
          (c.s = (r || r === 0) && !s ? r : c.s + (r || 0) + a * c.c),
          (c.c = i - c.s),
          h.e && (h.e = ke(i) + rt(h.e)),
          h.b && (h.b = c.s + rt(h.b));
    },
    Ld = function (e, t) {
      var i = e[0] ? Ji(e[0]).harness : 0,
        r = i && i.aliases,
        s,
        a,
        o,
        l;
      if (!r) return t;
      s = Ir({}, t);
      for (a in r)
        if (a in s)
          for (l = r[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
      return s;
    },
    zd = function (e, t, i, r) {
      var s = t.ease || r || "power1.inOut",
        a,
        o;
      if (it(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (l, u) {
            return o.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: s });
    },
    wn = function (e, t, i, r, s) {
      return Ce(e)
        ? e.call(t, i, r, s)
        : Ye(e) && ~e.indexOf("random(")
        ? fn(e)
        : e;
    },
    Bl = ya + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Nl = {};
  Dt(Bl + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (Nl[n] = 1);
  });
  var Fe = (function (n) {
    Ki(e, n);
    function e(i, r, s, a) {
      var o;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (o = n.call(this, a ? r : un(r)) || this);
      var l = o.vars,
        u = l.duration,
        c = l.delay,
        h = l.immediateRender,
        m = l.stagger,
        p = l.overwrite,
        f = l.keyframes,
        d = l.defaults,
        g = l.scrollTrigger,
        b = l.yoyoEase,
        v = r.parent || Se,
        w = (it(i) || Qo(i) ? Di(i[0]) : "length" in r) ? [i] : qt(i),
        y,
        _,
        C,
        T,
        x,
        A,
        E,
        z;
      if (
        ((o._targets = w.length
          ? ba(w)
          : on(
              "GSAP target " + i + " not found. https://gsap.com",
              !Mt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        f || m || is(u) || is(c))
      ) {
        if (
          ((r = o.vars),
          (y = o.timeline =
            new pt({
              data: "nested",
              defaults: d || {},
              targets: v && v.data === "nested" ? v.vars.targets : w,
            })),
          y.kill(),
          (y.parent = y._dp = Xe(o)),
          (y._start = 0),
          m || is(u) || is(c))
        ) {
          if (((T = w.length), (E = m && _l(m)), li(m)))
            for (x in m) ~Bl.indexOf(x) && (z || (z = {}), (z[x] = m[x]));
          for (_ = 0; _ < T; _++)
            (C = os(r, Nl)),
              (C.stagger = 0),
              b && (C.yoyoEase = b),
              z && Ir(C, z),
              (A = w[_]),
              (C.duration = +wn(u, Xe(o), _, A, w)),
              (C.delay = (+wn(c, Xe(o), _, A, w) || 0) - o._delay),
              !m &&
                T === 1 &&
                C.delay &&
                ((o._delay = c = C.delay), (o._start += c), (C.delay = 0)),
              y.to(A, C, E ? E(_, A, w) : 0),
              (y._ease = oe.none);
          y.duration() ? (u = c = 0) : (o.timeline = 0);
        } else if (f) {
          un(Ot(y.vars.defaults, { ease: "none" })),
            (y._ease = er(f.ease || r.ease || "none"));
          var D = 0,
            S,
            M,
            L;
          if (it(f))
            f.forEach(function (F) {
              return y.to(w, F, ">");
            }),
              y.duration();
          else {
            C = {};
            for (x in f)
              x === "ease" || x === "easeEach" || zd(x, f[x], C, f.easeEach);
            for (x in C)
              for (
                S = C[x].sort(function (F, P) {
                  return F.t - P.t;
                }),
                  D = 0,
                  _ = 0;
                _ < S.length;
                _++
              )
                (M = S[_]),
                  (L = {
                    ease: M.e,
                    duration: ((M.t - (_ ? S[_ - 1].t : 0)) / 100) * u,
                  }),
                  (L[x] = M.v),
                  y.to(w, L, D),
                  (D += L.duration);
            y.duration() < u && y.to({}, { duration: u - y.duration() });
          }
        }
        u || o.duration((u = y.duration()));
      } else o.timeline = 0;
      return (
        p === !0 && !oa && ((Ri = Xe(o)), Se.killTweensOf(w), (Ri = 0)),
        ci(v, Xe(o), s),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (h ||
          (!u &&
            !f &&
            o._start === Ie(v._time) &&
            _t(h) &&
            pd(Xe(o)) &&
            v.data !== "nested")) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -c) || 0)),
        g && gl(Xe(o), g),
        o
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, s, a) {
        var o = this._time,
          l = this._tDur,
          u = this._dur,
          c = r < 0,
          h = r > l - tt && !c ? l : r < tt ? 0 : r,
          m,
          p,
          f,
          d,
          g,
          b,
          v,
          w,
          y;
        if (!u) md(this, r, s, a);
        else if (
          h !== this._tTime ||
          !r ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((m = h), (w = this.timeline), this._repeat)) {
            if (((d = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(d * 100 + r, s, a);
            if (
              ((m = Ie(h % d)),
              h === l
                ? ((f = this._repeat), (m = u))
                : ((g = Ie(h / d)),
                  (f = ~~g),
                  f && f === g ? ((m = u), f--) : m > u && (m = u)),
              (b = this._yoyo && f & 1),
              b && ((y = this._yEase), (m = u - m)),
              (g = Fr(this._tTime, d)),
              m === o && !a && this._initted && f === g)
            )
              return (this._tTime = h), this;
            f !== g &&
              (w && this._yEase && Fl(w, b),
              this.vars.repeatRefresh &&
                !b &&
                !this._lock &&
                m !== d &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(Ie(d * f), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (wl(this, c ? r : m, a, s, h)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && f !== g))
              return this;
            if (u !== this._dur) return this.render(r, s, a);
          }
          if (
            ((this._tTime = h),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = v = (y || this._ease)(m / u)),
            this._from && (this.ratio = v = 1 - v),
            m && !o && !s && !f && (It(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(v, p.d), (p = p._next);
          (w && w.render(r < 0 ? r : w._dur * w._ease(m / this._dur), s, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (c && _a(this, r, s, a), It(this, "onUpdate")),
            this._repeat &&
              f !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              It(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (c && !this._onUpdate && _a(this, r, !0, !0),
              (r || !u) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                Fi(this, 1),
              !s &&
                !(c && !o) &&
                (h || o || b) &&
                (It(this, h === l ? "onComplete" : "onReverseComplete", !0),
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
        mn || Ft.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Pa(this, u),
          (c = this._ease(u / this._dur)),
          Fd(this, r, s, a, o, c, u, l)
            ? this.resetTo(r, s, a, o, 1)
            : (ds(this, 0),
              this.parent ||
                pl(
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
              ? pn(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ue),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, s, Ri && Ri.vars.overwrite !== !0)
              ._first || pn(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              Lr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? qt(r) : o,
          u = this._ptLookup,
          c = this._pt,
          h,
          m,
          p,
          f,
          d,
          g,
          b;
        if ((!s || s === "all") && dd(o, l))
          return s === "all" && (this._pt = 0), pn(this);
        for (
          h = this._op = this._op || [],
            s !== "all" &&
              (Ye(s) &&
                ((d = {}),
                Dt(s, function (v) {
                  return (d[v] = 1);
                }),
                (s = d)),
              (s = Ld(o, s))),
            b = o.length;
          b--;

        )
          if (~l.indexOf(o[b])) {
            (m = u[b]),
              s === "all"
                ? ((h[b] = s), (f = m), (p = {}))
                : ((p = h[b] = h[b] || {}), (f = s));
            for (d in f)
              (g = m && m[d]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(d) === !0) &&
                    ls(this, g, "_pt"),
                  delete m[d]),
                p !== "all" && (p[d] = 1);
          }
        return this._initted && !this._pt && c && pn(this), this;
      }),
      (e.to = function (r, s) {
        return new e(r, s, arguments[2]);
      }),
      (e.from = function (r, s) {
        return cn(1, arguments);
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
        return cn(2, arguments);
      }),
      (e.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
      }),
      (e.killTweensOf = function (r, s, a) {
        return Se.killTweensOf(r, s, a);
      }),
      e
    );
  })(gn);
  Ot(Fe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Dt("staggerTo,staggerFrom,staggerFromTo", function (n) {
      Fe[n] = function () {
        var e = new pt(),
          t = Ea.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
      };
    });
  var Oa = function (e, t, i) {
      return (e[t] = i);
    },
    $l = function (e, t, i) {
      return e[t](i);
    },
    Rd = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    Bd = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    Ia = function (e, t) {
      return Ce(e[t]) ? $l : ua(e[t]) && e.setAttribute ? Bd : Oa;
    },
    Hl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Nd = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Yl = function (e, t) {
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
    Fa = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    $d = function (e, t, i, r) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === r && s.modifier(e, t, i), (s = a);
    },
    Hd = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? ls(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    Yd = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    Vl = function (e) {
      for (var t = e._pt, i, r, s, a; t; ) {
        for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (s = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = s;
    },
    Et = (function () {
      function n(t, i, r, s, a, o, l, u, c) {
        (this.t = i),
          (this.s = s),
          (this.c = a),
          (this.p = r),
          (this.r = o || Hl),
          (this.d = l || this),
          (this.set = u || Oa),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = n.prototype;
      return (
        (e.modifier = function (i, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = Yd),
            (this.m = i),
            (this.mt = s),
            (this.tween = r);
        }),
        n
      );
    })();
  Dt(
    ya +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return (ga[n] = 1);
    }
  ),
    (kt.TweenMax = kt.TweenLite = Fe),
    (kt.TimelineLite = kt.TimelineMax = pt),
    (Se = new pt({
      sortChildren: !1,
      defaults: kr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Mt.stringFilter = Ol);
  var ir = [],
    fs = {},
    Vd = [],
    Wl = 0,
    Wd = 0,
    La = function (e) {
      return (fs[e] || Vd).map(function (t) {
        return t();
      });
    },
    za = function () {
      var e = Date.now(),
        t = [];
      e - Wl > 2 &&
        (La("matchMediaInit"),
        ir.forEach(function (i) {
          var r = i.queries,
            s = i.conditions,
            a,
            o,
            l,
            u;
          for (o in r)
            (a = ui.matchMedia(r[o]).matches),
              a && (l = 1),
              a !== s[o] && ((s[o] = a), (u = 1));
          u && (i.revert(), l && t.push(i));
        }),
        La("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (Wl = e),
        La("matchMedia"));
    },
    Gl = (function () {
      function n(t, i) {
        (this.selector = i && Sa(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Wd++),
          t && this.add(t);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          Ce(i) && ((s = r), (r = i), (i = Ce));
          var a = this,
            o = function () {
              var u = ye,
                c = a.selector,
                h;
              return (
                u && u !== a && u.data.push(a),
                s && (a.selector = Sa(s)),
                (ye = a),
                (h = r.apply(a, arguments)),
                Ce(h) && a._r.push(h),
                (ye = u),
                (a.selector = c),
                (a.isReverted = !1),
                h
              );
            };
          return (
            (a.last = o),
            i === Ce
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
                : r instanceof Fe &&
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
                  for (var o = s.getTweens(), l = s.data.length, u; l--; )
                    (u = s.data[l]),
                      u.data === "isFlip" &&
                        (u.revert(),
                        u.getChildren(!0, !0, !1).forEach(function (c) {
                          return o.splice(o.indexOf(c), 1);
                        }));
                  for (
                    o
                      .map(function (c) {
                        return {
                          g:
                            c._dur ||
                            c._delay ||
                            (c._sat && !c._sat.vars.immediateRender)
                              ? c.globalTime(0)
                              : -1 / 0,
                          t: c,
                        };
                      })
                      .sort(function (c, h) {
                        return h.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(i);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (u = s.data[l]),
                      u instanceof pt
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Fe) && u.revert && u.revert(i);
                  s._r.forEach(function (c) {
                    return c(i, s);
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
    Gd = (function () {
      function n(t) {
        (this.contexts = []), (this.scope = t), ye && ye.data.push(this);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          li(i) || (i = { matches: i });
          var a = new Gl(0, s || this.scope),
            o = (a.conditions = {}),
            l,
            u,
            c;
          ye && !a.selector && (a.selector = ye.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = i);
          for (u in i)
            u === "all"
              ? (c = 1)
              : ((l = ui.matchMedia(i[u])),
                l &&
                  (ir.indexOf(a) < 0 && ir.push(a),
                  (o[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(za)
                    : l.addEventListener("change", za)));
          return (
            c &&
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
    ps = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return Al(r);
        });
      },
      timeline: function (e) {
        return new pt(e);
      },
      getTweensOf: function (e, t) {
        return Se.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Ye(e) && (e = qt(e)[0]);
        var s = Ji(e || {}).get,
          a = i ? dl : cl;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a(((Pt[t] && Pt[t].get) || s)(e, t, i, r))
              : function (o, l, u) {
                  return a(((Pt[o] && Pt[o].get) || s)(e, o, l, u));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = qt(e)), e.length > 1)) {
          var r = e.map(function (c) {
              return St.quickSetter(c, t, i);
            }),
            s = r.length;
          return function (c) {
            for (var h = s; h--; ) r[h](c);
          };
        }
        e = e[0] || {};
        var a = Pt[t],
          o = Ji(e),
          l = (o.harness && (o.harness.aliases || {})[t]) || t,
          u = a
            ? function (c) {
                var h = new a();
                (zr._pt = 0),
                  h.init(e, i ? c + i : c, zr, 0, [e]),
                  h.render(1, h),
                  zr._pt && Fa(1, zr);
              }
            : o.set(e, l);
        return a
          ? u
          : function (c) {
              return u(e, l, i ? c + i : c, o, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          s = St.to(
            e,
            Ot(
              ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          a = function (l, u, c) {
            return s.resetTo(t, l, u, c);
          };
        return (a.tween = s), a;
      },
      isTweening: function (e) {
        return Se.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = er(e.ease, kr.ease)), fl(kr, e || {});
      },
      config: function (e) {
        return fl(Mt, e || {});
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
            !Pt[o] &&
            !kt[o] &&
            on(t + " effect requires " + o + " plugin.")
          );
        }),
          (va[t] = function (o, l, u) {
            return i(qt(o), Ot(l || {}, s), u);
          }),
          a &&
            (pt.prototype[t] = function (o, l, u) {
              return this.add(va[t](o, li(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (e, t) {
        oe[e] = er(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? er(e, t) : oe;
      },
      getById: function (e) {
        return Se.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new pt(e),
          r,
          s;
        for (
          i.smoothChildTiming = _t(e.smoothChildTiming),
            Se.remove(i),
            i._dp = 0,
            i._time = i._tTime = Se._time,
            r = Se._first;
          r;

        )
          (s = r._next),
            (t ||
              !(
                !r._dur &&
                r instanceof Fe &&
                r.vars.onComplete === r._targets[0]
              )) &&
              ci(i, r, r._start - r._delay),
            (r = s);
        return ci(Se, i, 0), i;
      },
      context: function (e, t) {
        return e ? new Gl(e, t) : ye;
      },
      matchMedia: function (e) {
        return new Gd(e);
      },
      matchMediaRefresh: function () {
        return (
          ir.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || za()
        );
      },
      addEventListener: function (e, t) {
        var i = fs[e] || (fs[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = fs[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: Ed,
        wrapYoyo: Sd,
        distribute: _l,
        random: El,
        snap: Dl,
        normalize: Dd,
        getUnit: rt,
        clamp: vd,
        splitColor: Ml,
        toArray: qt,
        selector: Sa,
        mapRange: Tl,
        pipe: bd,
        unitize: _d,
        interpolate: Td,
        shuffle: bl,
      },
      install: nl,
      effects: va,
      ticker: Ft,
      updateRoot: pt.updateRoot,
      plugins: Pt,
      globalTimeline: Se,
      core: {
        PropTween: Et,
        globals: sl,
        Tween: Fe,
        Timeline: pt,
        Animation: gn,
        getCache: Ji,
        _removeLinkedListItem: ls,
        reverting: function () {
          return Ue;
        },
        context: function (e) {
          return e && ye && (ye.data.push(e), (e._ctx = ye)), ye;
        },
        suppressOverwrites: function (e) {
          return (oa = e);
        },
      },
    };
  Dt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (ps[n] = Fe[n]);
  }),
    Ft.add(pt.updateRoot),
    (zr = ps.to({}, { duration: 0 }));
  var qd = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    jd = function (e, t) {
      var i = e._targets,
        r,
        s,
        a;
      for (r in t)
        for (s = i.length; s--; )
          (a = e._ptLookup[s][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = qd(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[s], r));
    },
    Ra = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, s, a) {
          a._onInit = function (o) {
            var l, u;
            if (
              (Ye(s) &&
                ((l = {}),
                Dt(s, function (c) {
                  return (l[c] = 1);
                }),
                (s = l)),
              t)
            ) {
              l = {};
              for (u in s) l[u] = t(s[u]);
              s = l;
            }
            jd(o, s);
          };
        },
      };
    },
    St =
      ps.registerPlugin(
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
              Ue ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        Ra("roundProps", Ta),
        Ra("modifiers"),
        Ra("snap", Dl)
      ) || ps;
  (Fe.version = pt.version = St.version = "3.12.7"),
    (rl = 1),
    ca() && Rr(),
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
   * CSSPlugin 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ql,
    Bi,
    Br,
    Ba,
    rr,
    jl,
    Na,
    Xd = function () {
      return typeof window < "u";
    },
    Ei = {},
    nr = 180 / Math.PI,
    Nr = Math.PI / 180,
    $r = Math.atan2,
    Xl = 1e8,
    $a = /([A-Z])/g,
    Ud = /(left|right|width|margin|padding|x)/i,
    Zd = /[\s,\(]\S/,
    di = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ha = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    Kd = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    Jd = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    Qd = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Ul = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Zl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    ef = function (e, t, i) {
      return (e.style[t] = i);
    },
    tf = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    rf = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    nf = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    sf = function (e, t, i, r, s) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(s, a);
    },
    af = function (e, t, i, r, s) {
      var a = e._gsap;
      (a[t] = i), a.renderTransform(s, a);
    },
    Te = "transform",
    Tt = Te + "Origin",
    of = function n(e, t) {
      var i = this,
        r = this.target,
        s = r.style,
        a = r._gsap;
      if (e in Ei && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = di[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = Si(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : Si(r, e)),
            e === Tt && (this.tfm.zOrigin = a.zOrigin);
        else
          return di.transform.split(",").forEach(function (o) {
            return n.call(i, o, t);
          });
        if (this.props.indexOf(Te) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Tt, t, "")),
          (e = Te);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    Kl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    lf = function () {
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
                : e[s].replace($a, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = Na()),
          (!s || !s.isStart) &&
            !i[Te] &&
            (Kl(i),
            r.zOrigin &&
              i[Tt] &&
              ((i[Tt] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    Jl = function (e, t) {
      var i = { target: e, props: [], revert: lf, save: of };
      return (
        e._gsap || St.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    Ql,
    Ya = function (e, t) {
      var i = Bi.createElementNS
        ? Bi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Bi.createElement(e);
      return i && i.style ? i : Bi.createElement(e);
    },
    fi = function n(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace($a, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && n(e, Hr(t) || t, 1)) ||
        ""
      );
    },
    eu = "O,Moz,ms,Ms,Webkit".split(","),
    Hr = function (e, t, i) {
      var r = t || rr,
        s = r.style,
        a = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(eu[a] + e in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? eu[a] : "") + e;
    },
    Va = function () {
      Xd() &&
        window.document &&
        ((ql = window),
        (Bi = ql.document),
        (Br = Bi.documentElement),
        (rr = Ya("div") || { style: {} }),
        Ya("div"),
        (Te = Hr(Te)),
        (Tt = Te + "Origin"),
        (rr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Ql = !!Hr("perspective")),
        (Na = St.core.reverting),
        (Ba = 1));
    },
    tu = function (e) {
      var t = e.ownerSVGElement,
        i = Ya(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        s;
      (r.style.display = "block"), i.appendChild(r), Br.appendChild(i);
      try {
        s = r.getBBox();
      } catch {}
      return i.removeChild(r), Br.removeChild(i), s;
    },
    iu = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    ru = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch {
        (t = tu(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = tu(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +iu(e, ["x", "cx", "x1"]) || 0,
              y: +iu(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    nu = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ru(e));
    },
    sr = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in Ei && t !== Tt && (t = Te),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace($a, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Ni = function (e, t, i, r, s, a) {
      var o = new Et(e._pt, t, i, 0, 1, a ? Zl : Ul);
      return (e._pt = o), (o.b = r), (o.e = s), e._props.push(i), o;
    },
    su = { deg: 1, rad: 1, turn: 1 },
    uf = { grid: 1, flex: 1 },
    $i = function n(e, t, i, r) {
      var s = parseFloat(i) || 0,
        a = (i + "").trim().substr((s + "").length) || "px",
        o = rr.style,
        l = Ud.test(t),
        u = e.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        f,
        d,
        g,
        b;
      if (r === a || !s || su[r] || su[a]) return s;
      if (
        (a !== "px" && !m && (s = n(e, t, i, "px")),
        (b = e.getCTM && nu(e)),
        (p || a === "%") && (Ei[t] || ~t.indexOf("adius")))
      )
        return (
          (f = b ? e.getBBox()[l ? "width" : "height"] : e[c]),
          ke(p ? (s / f) * h : (s / 100) * f)
        );
      if (
        ((o[l ? "width" : "height"] = h + (m ? a : r)),
        (d =
          (r !== "rem" && ~t.indexOf("adius")) ||
          (r === "em" && e.appendChild && !u)
            ? e
            : e.parentNode),
        b && (d = (e.ownerSVGElement || {}).parentNode),
        (!d || d === Bi || !d.appendChild) && (d = Bi.body),
        (g = d._gsap),
        g && p && g.width && l && g.time === Ft.time && !g.uncache)
      )
        return ke((s / g.width) * h);
      if (p && (t === "height" || t === "width")) {
        var v = e.style[t];
        (e.style[t] = h + r), (f = e[c]), v ? (e.style[t] = v) : sr(e, t);
      } else
        (p || a === "%") &&
          !uf[fi(d, "display")] &&
          (o.position = fi(e, "position")),
          d === e && (o.position = "static"),
          d.appendChild(rr),
          (f = rr[c]),
          d.removeChild(rr),
          (o.position = "absolute");
      return (
        l && p && ((g = Ji(d)), (g.time = Ft.time), (g.width = d[c])),
        ke(m ? (f * s) / h : f && s ? (h / f) * s : 0)
      );
    },
    Si = function (e, t, i, r) {
      var s;
      return (
        Ba || Va(),
        t in di &&
          t !== "transform" &&
          ((t = di[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Ei[t] && t !== "transform"
          ? ((s = yn(e, r)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : ms(fi(e, Tt)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (hs[t] && hs[t](e, t, i)) ||
                fi(e, t) ||
                ll(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? $i(e, t, s, i) + i : s
      );
    },
    cf = function (e, t, i, r) {
      if (!i || i === "none") {
        var s = Hr(t, e, 1),
          a = s && fi(e, s, 1);
        a && a !== i
          ? ((t = s), (i = a))
          : t === "borderColor" && (i = fi(e, "borderTopColor"));
      }
      var o = new Et(this._pt, e.style, t, 0, 1, Yl),
        l = 0,
        u = 0,
        c,
        h,
        m,
        p,
        f,
        d,
        g,
        b,
        v,
        w,
        y,
        _;
      if (
        ((o.b = i),
        (o.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((d = e.style[t]),
          (e.style[t] = r),
          (r = fi(e, t) || r),
          d ? (e.style[t] = d) : sr(e, t)),
        (c = [i, r]),
        Ol(c),
        (i = c[0]),
        (r = c[1]),
        (m = i.match(Pr) || []),
        (_ = r.match(Pr) || []),
        _.length)
      ) {
        for (; (h = Pr.exec(r)); )
          (g = h[0]),
            (v = r.substring(l, h.index)),
            f
              ? (f = (f + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (f = 1),
            g !== (d = m[u++] || "") &&
              ((p = parseFloat(d) || 0),
              (y = d.substr((p + "").length)),
              g.charAt(1) === "=" && (g = Or(p, g) + y),
              (b = parseFloat(g)),
              (w = g.substr((b + "").length)),
              (l = Pr.lastIndex - w.length),
              w ||
                ((w = w || Mt.units[t] || y),
                l === r.length && ((r += w), (o.e += w))),
              y !== w && (p = $i(e, t, d, w) || 0),
              (o._pt = {
                _next: o._pt,
                p: v || u === 1 ? v : ",",
                s: p,
                c: b - p,
                m: (f && f < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = t === "display" && r === "none" ? Zl : Ul;
      return tl.test(r) && (o.e = 0), (this._pt = o), o;
    },
    au = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    df = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = au[i] || i),
        (t[1] = au[r] || r),
        t.join(" ")
      );
    },
    ff = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          s = t.u,
          a = i._gsap,
          o,
          l,
          u;
        if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
        else
          for (s = s.split(","), u = s.length; --u > -1; )
            (o = s[u]),
              Ei[o] && ((l = 1), (o = o === "transformOrigin" ? Tt : Te)),
              sr(i, o);
        l &&
          (sr(i, Te),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            yn(i, 1),
            (a.uncache = 1),
            Kl(r)));
      }
    },
    hs = {
      clearProps: function (e, t, i, r, s) {
        if (s.data !== "isFromStart") {
          var a = (e._pt = new Et(e._pt, t, i, 0, 0, ff));
          return (a.u = r), (a.pr = -10), (a.tween = s), e._props.push(i), 1;
        }
      },
    },
    vn = [1, 0, 0, 1, 0, 0],
    ou = {},
    lu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    uu = function (e) {
      var t = fi(e, Te);
      return lu(t) ? vn : t.substr(7).match(el).map(ke);
    },
    Wa = function (e, t) {
      var i = e._gsap || Ji(e),
        r = e.style,
        s = uu(e),
        a,
        o,
        l,
        u;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? vn : s)
        : (s === vn &&
            !e.offsetParent &&
            e !== Br &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((u = 1), (o = e.nextElementSibling), Br.appendChild(e)),
            (s = uu(e)),
            l ? (r.display = l) : sr(e, "display"),
            u &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Br.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Ga = function (e, t, i, r, s, a) {
      var o = e._gsap,
        l = s || Wa(e, !0),
        u = o.xOrigin || 0,
        c = o.yOrigin || 0,
        h = o.xOffset || 0,
        m = o.yOffset || 0,
        p = l[0],
        f = l[1],
        d = l[2],
        g = l[3],
        b = l[4],
        v = l[5],
        w = t.split(" "),
        y = parseFloat(w[0]) || 0,
        _ = parseFloat(w[1]) || 0,
        C,
        T,
        x,
        A;
      i
        ? l !== vn &&
          (T = p * g - f * d) &&
          ((x = y * (g / T) + _ * (-d / T) + (d * v - g * b) / T),
          (A = y * (-f / T) + _ * (p / T) - (p * v - f * b) / T),
          (y = x),
          (_ = A))
        : ((C = ru(e)),
          (y = C.x + (~w[0].indexOf("%") ? (y / 100) * C.width : y)),
          (_ =
            C.y + (~(w[1] || w[0]).indexOf("%") ? (_ / 100) * C.height : _))),
        r || (r !== !1 && o.smooth)
          ? ((b = y - u),
            (v = _ - c),
            (o.xOffset = h + (b * p + v * d) - b),
            (o.yOffset = m + (b * f + v * g) - v))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = y),
        (o.yOrigin = _),
        (o.smooth = !!r),
        (o.origin = t),
        (o.originIsAbsolute = !!i),
        (e.style[Tt] = "0px 0px"),
        a &&
          (Ni(a, o, "xOrigin", u, y),
          Ni(a, o, "yOrigin", c, _),
          Ni(a, o, "xOffset", h, o.xOffset),
          Ni(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", y + " " + _);
    },
    yn = function (e, t) {
      var i = e._gsap || new zl(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        s = i.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        u = fi(e, Tt) || "0",
        c,
        h,
        m,
        p,
        f,
        d,
        g,
        b,
        v,
        w,
        y,
        _,
        C,
        T,
        x,
        A,
        E,
        z,
        D,
        S,
        M,
        L,
        F,
        P,
        I,
        O,
        k,
        Y,
        X,
        ue,
        re,
        B;
      return (
        (c = h = m = d = g = b = v = w = y = 0),
        (p = f = 1),
        (i.svg = !!(e.getCTM && nu(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[Te] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[Te] !== "none" ? l[Te] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (T = Wa(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((I = e.getBBox()),
              (u = i.xOrigin - I.x + "px " + (i.yOrigin - I.y) + "px"),
              (P = ""))
            : (P = !t && e.getAttribute("data-svg-origin")),
          Ga(e, P || u, !!P || i.originIsAbsolute, i.smooth !== !1, T)),
        (_ = i.xOrigin || 0),
        (C = i.yOrigin || 0),
        T !== vn &&
          ((z = T[0]),
          (D = T[1]),
          (S = T[2]),
          (M = T[3]),
          (c = L = T[4]),
          (h = F = T[5]),
          T.length === 6
            ? ((p = Math.sqrt(z * z + D * D)),
              (f = Math.sqrt(M * M + S * S)),
              (d = z || D ? $r(D, z) * nr : 0),
              (v = S || M ? $r(S, M) * nr + d : 0),
              v && (f *= Math.abs(Math.cos(v * Nr))),
              i.svg && ((c -= _ - (_ * z + C * S)), (h -= C - (_ * D + C * M))))
            : ((B = T[6]),
              (ue = T[7]),
              (k = T[8]),
              (Y = T[9]),
              (X = T[10]),
              (re = T[11]),
              (c = T[12]),
              (h = T[13]),
              (m = T[14]),
              (x = $r(B, X)),
              (g = x * nr),
              x &&
                ((A = Math.cos(-x)),
                (E = Math.sin(-x)),
                (P = L * A + k * E),
                (I = F * A + Y * E),
                (O = B * A + X * E),
                (k = L * -E + k * A),
                (Y = F * -E + Y * A),
                (X = B * -E + X * A),
                (re = ue * -E + re * A),
                (L = P),
                (F = I),
                (B = O)),
              (x = $r(-S, X)),
              (b = x * nr),
              x &&
                ((A = Math.cos(-x)),
                (E = Math.sin(-x)),
                (P = z * A - k * E),
                (I = D * A - Y * E),
                (O = S * A - X * E),
                (re = M * E + re * A),
                (z = P),
                (D = I),
                (S = O)),
              (x = $r(D, z)),
              (d = x * nr),
              x &&
                ((A = Math.cos(x)),
                (E = Math.sin(x)),
                (P = z * A + D * E),
                (I = L * A + F * E),
                (D = D * A - z * E),
                (F = F * A - L * E),
                (z = P),
                (L = I)),
              g &&
                Math.abs(g) + Math.abs(d) > 359.9 &&
                ((g = d = 0), (b = 180 - b)),
              (p = ke(Math.sqrt(z * z + D * D + S * S))),
              (f = ke(Math.sqrt(F * F + B * B))),
              (x = $r(L, F)),
              (v = Math.abs(x) > 2e-4 ? x * nr : 0),
              (y = re ? 1 / (re < 0 ? -re : re) : 0)),
          i.svg &&
            ((P = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !lu(fi(e, Te))),
            P && e.setAttribute("transform", P))),
        Math.abs(v) > 90 &&
          Math.abs(v) < 270 &&
          (s
            ? ((p *= -1),
              (v += d <= 0 ? 180 : -180),
              (d += d <= 0 ? 180 : -180))
            : ((f *= -1), (v += v <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          c -
          ((i.xPercent =
            c &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
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
        (i.scaleX = ke(p)),
        (i.scaleY = ke(f)),
        (i.rotation = ke(d) + o),
        (i.rotationX = ke(g) + o),
        (i.rotationY = ke(b) + o),
        (i.skewX = v + o),
        (i.skewY = w + o),
        (i.transformPerspective = y + a),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[Tt] = ms(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Mt.force3D),
        (i.renderTransform = i.svg ? hf : Ql ? cu : pf),
        (i.uncache = 0),
        i
      );
    },
    ms = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    qa = function (e, t, i) {
      var r = rt(t);
      return ke(parseFloat(t) + parseFloat($i(e, "x", i + "px", r))) + r;
    },
    pf = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        cu(e, t);
    },
    ar = "0deg",
    bn = "0px",
    or = ") ",
    cu = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.z,
        u = i.rotation,
        c = i.rotationY,
        h = i.rotationX,
        m = i.skewX,
        p = i.skewY,
        f = i.scaleX,
        d = i.scaleY,
        g = i.transformPerspective,
        b = i.force3D,
        v = i.target,
        w = i.zOrigin,
        y = "",
        _ = (b === "auto" && e && e !== 1) || b === !0;
      if (w && (h !== ar || c !== ar)) {
        var C = parseFloat(c) * Nr,
          T = Math.sin(C),
          x = Math.cos(C),
          A;
        (C = parseFloat(h) * Nr),
          (A = Math.cos(C)),
          (a = qa(v, a, T * A * -w)),
          (o = qa(v, o, -Math.sin(C) * -w)),
          (l = qa(v, l, x * A * -w + w));
      }
      g !== bn && (y += "perspective(" + g + or),
        (r || s) && (y += "translate(" + r + "%, " + s + "%) "),
        (_ || a !== bn || o !== bn || l !== bn) &&
          (y +=
            l !== bn || _
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + or),
        u !== ar && (y += "rotate(" + u + or),
        c !== ar && (y += "rotateY(" + c + or),
        h !== ar && (y += "rotateX(" + h + or),
        (m !== ar || p !== ar) && (y += "skew(" + m + ", " + p + or),
        (f !== 1 || d !== 1) && (y += "scale(" + f + ", " + d + or),
        (v.style[Te] = y || "translate(0, 0)");
    },
    hf = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.rotation,
        u = i.skewX,
        c = i.skewY,
        h = i.scaleX,
        m = i.scaleY,
        p = i.target,
        f = i.xOrigin,
        d = i.yOrigin,
        g = i.xOffset,
        b = i.yOffset,
        v = i.forceCSS,
        w = parseFloat(a),
        y = parseFloat(o),
        _,
        C,
        T,
        x,
        A;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= Nr),
            (u *= Nr),
            (_ = Math.cos(l) * h),
            (C = Math.sin(l) * h),
            (T = Math.sin(l - u) * -m),
            (x = Math.cos(l - u) * m),
            u &&
              ((c *= Nr),
              (A = Math.tan(u - c)),
              (A = Math.sqrt(1 + A * A)),
              (T *= A),
              (x *= A),
              c &&
                ((A = Math.tan(c)),
                (A = Math.sqrt(1 + A * A)),
                (_ *= A),
                (C *= A))),
            (_ = ke(_)),
            (C = ke(C)),
            (T = ke(T)),
            (x = ke(x)))
          : ((_ = h), (x = m), (C = T = 0)),
        ((w && !~(a + "").indexOf("px")) || (y && !~(o + "").indexOf("px"))) &&
          ((w = $i(p, "x", a, "px")), (y = $i(p, "y", o, "px"))),
        (f || d || g || b) &&
          ((w = ke(w + f - (f * _ + d * T) + g)),
          (y = ke(y + d - (f * C + d * x) + b))),
        (r || s) &&
          ((A = p.getBBox()),
          (w = ke(w + (r / 100) * A.width)),
          (y = ke(y + (s / 100) * A.height))),
        (A =
          "matrix(" +
          _ +
          "," +
          C +
          "," +
          T +
          "," +
          x +
          "," +
          w +
          "," +
          y +
          ")"),
        p.setAttribute("transform", A),
        v && (p.style[Te] = A);
    },
    mf = function (e, t, i, r, s) {
      var a = 360,
        o = Ye(s),
        l = parseFloat(s) * (o && ~s.indexOf("rad") ? nr : 1),
        u = l - r,
        c = r + u + "deg",
        h,
        m;
      return (
        o &&
          ((h = s.split("_")[1]),
          h === "short" &&
            ((u %= a), u !== u % (a / 2) && (u += u < 0 ? a : -360)),
          h === "cw" && u < 0
            ? (u = ((u + a * Xl) % a) - ~~(u / a) * a)
            : h === "ccw" && u > 0 && (u = ((u - a * Xl) % a) - ~~(u / a) * a)),
        (e._pt = m = new Et(e._pt, t, i, r, u, Kd)),
        (m.e = c),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    du = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    gf = function (e, t, i) {
      var r = du({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        a = i.style,
        o,
        l,
        u,
        c,
        h,
        m,
        p,
        f;
      r.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (a[Te] = t),
          (o = yn(i, 1)),
          sr(i, Te),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[Te]),
          (a[Te] = t),
          (o = yn(i, 1)),
          (a[Te] = u));
      for (l in Ei)
        (u = r[l]),
          (c = o[l]),
          u !== c &&
            s.indexOf(l) < 0 &&
            ((p = rt(u)),
            (f = rt(c)),
            (h = p !== f ? $i(i, l, u, f) : parseFloat(u)),
            (m = parseFloat(c)),
            (e._pt = new Et(e._pt, o, l, h, m - h, Ha)),
            (e._pt.u = f || 0),
            e._props.push(l));
      du(o, r);
    };
  Dt("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      s = "Left",
      a = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (
        o
      ) {
        return e < 2 ? n + o : "border" + o + n;
      });
    hs[e > 1 ? "border" + n : n] = function (o, l, u, c, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = a.map(function (f) {
            return Si(o, f, u);
          })),
          (p = m.join(" ")),
          p.split(m[0]).length === 5 ? m[0] : p
        );
      (m = (c + "").split(" ")),
        (p = {}),
        a.forEach(function (f, d) {
          return (p[f] = m[d] = m[d] || m[((d - 1) / 2) | 0]);
        }),
        o.init(l, p, h);
    };
  });
  var fu = {
    name: "css",
    register: Va,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, s) {
      var a = this._props,
        o = e.style,
        l = i.vars.startAt,
        u,
        c,
        h,
        m,
        p,
        f,
        d,
        g,
        b,
        v,
        w,
        y,
        _,
        C,
        T,
        x;
      Ba || Va(),
        (this.styles = this.styles || Jl(e)),
        (x = this.styles.props),
        (this.tween = i);
      for (d in t)
        if (
          d !== "autoRound" &&
          ((c = t[d]), !(Pt[d] && Rl(d, t, i, r, e, s)))
        ) {
          if (
            ((p = typeof c),
            (f = hs[d]),
            p === "function" && ((c = c.call(i, r, e, s)), (p = typeof c)),
            p === "string" && ~c.indexOf("random(") && (c = fn(c)),
            f)
          )
            f(this, e, d, c, i) && (T = 1);
          else if (d.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
              (c += ""),
              (zi.lastIndex = 0),
              zi.test(u) || ((g = rt(u)), (b = rt(c))),
              b ? g !== b && (u = $i(e, d, u, b) + b) : g && (c += g),
              this.add(o, "setProperty", u, c, r, s, 0, 0, d),
              a.push(d),
              x.push(d, 0, o[d]);
          else if (p !== "undefined") {
            if (
              (l && d in l
                ? ((u =
                    typeof l[d] == "function" ? l[d].call(i, r, e, s) : l[d]),
                  Ye(u) && ~u.indexOf("random(") && (u = fn(u)),
                  rt(u + "") ||
                    u === "auto" ||
                    (u += Mt.units[d] || rt(Si(e, d)) || ""),
                  (u + "").charAt(1) === "=" && (u = Si(e, d)))
                : (u = Si(e, d)),
              (m = parseFloat(u)),
              (v = p === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              v && (c = c.substr(2)),
              (h = parseFloat(c)),
              d in di &&
                (d === "autoAlpha" &&
                  (m === 1 && Si(e, "visibility") === "hidden" && h && (m = 0),
                  x.push("visibility", 0, o.visibility),
                  Ni(
                    this,
                    o,
                    "visibility",
                    m ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                d !== "scale" &&
                  d !== "transform" &&
                  ((d = di[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
              (w = d in Ei),
              w)
            ) {
              if (
                (this.styles.save(d),
                y ||
                  ((_ = e._gsap),
                  (_.renderTransform && !t.parseTransform) ||
                    yn(e, t.parseTransform),
                  (C = t.smoothOrigin !== !1 && _.smooth),
                  (y = this._pt =
                    new Et(this._pt, o, Te, 0, 1, _.renderTransform, _, 0, -1)),
                  (y.dep = 1)),
                d === "scale")
              )
                (this._pt = new Et(
                  this._pt,
                  _,
                  "scaleY",
                  _.scaleY,
                  (v ? Or(_.scaleY, v + h) : h) - _.scaleY || 0,
                  Ha
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", d),
                  (d += "X");
              else if (d === "transformOrigin") {
                x.push(Tt, 0, o[Tt]),
                  (c = df(c)),
                  _.svg
                    ? Ga(e, c, 0, C, 0, this)
                    : ((b = parseFloat(c.split(" ")[2]) || 0),
                      b !== _.zOrigin && Ni(this, _, "zOrigin", _.zOrigin, b),
                      Ni(this, o, d, ms(u), ms(c)));
                continue;
              } else if (d === "svgOrigin") {
                Ga(e, c, 1, C, 0, this);
                continue;
              } else if (d in ou) {
                mf(this, _, d, m, v ? Or(m, v + c) : c);
                continue;
              } else if (d === "smoothOrigin") {
                Ni(this, _, "smooth", _.smooth, c);
                continue;
              } else if (d === "force3D") {
                _[d] = c;
                continue;
              } else if (d === "transform") {
                gf(this, c, e);
                continue;
              }
            } else d in o || (d = Hr(d) || d);
            if (
              w ||
              ((h || h === 0) && (m || m === 0) && !Zd.test(c) && d in o)
            )
              (g = (u + "").substr((m + "").length)),
                h || (h = 0),
                (b = rt(c) || (d in Mt.units ? Mt.units[d] : g)),
                g !== b && (m = $i(e, d, u, b)),
                (this._pt = new Et(
                  this._pt,
                  w ? _ : o,
                  d,
                  m,
                  (v ? Or(m, v + h) : h) - m,
                  !w && (b === "px" || d === "zIndex") && t.autoRound !== !1
                    ? Qd
                    : Ha
                )),
                (this._pt.u = b || 0),
                g !== b && b !== "%" && ((this._pt.b = u), (this._pt.r = Jd));
            else if (d in o) cf.call(this, e, d, u, v ? v + c : c);
            else if (d in e) this.add(e, d, u || e[d], v ? v + c : c, r, s);
            else if (d !== "parseTransform") {
              ma(d, c);
              continue;
            }
            w ||
              (d in o
                ? x.push(d, 0, o[d])
                : typeof e[d] == "function"
                ? x.push(d, 2, e[d]())
                : x.push(d, 1, u || e[d])),
              a.push(d);
          }
        }
      T && Vl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Na())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Si,
    aliases: di,
    getSetter: function (e, t, i) {
      var r = di[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in Ei && t !== Tt && (e._gsap.x || Si(e, "x"))
          ? i && jl === i
            ? t === "scale"
              ? nf
              : rf
            : (jl = i || {}) && (t === "scale" ? sf : af)
          : e.style && !ua(e.style[t])
          ? ef
          : ~t.indexOf("-")
          ? tf
          : Ia(e, t)
      );
    },
    core: { _removeProperty: sr, _getMatrix: Wa },
  };
  (St.utils.checkPrefix = Hr),
    (St.core.getStyleSaver = Jl),
    (function (n, e, t, i) {
      var r = Dt(n + "," + e + "," + t, function (s) {
        Ei[s] = 1;
      });
      Dt(e, function (s) {
        (Mt.units[s] = "deg"), (ou[s] = 1);
      }),
        (di[r[13]] = n + "," + e),
        Dt(i, function (s) {
          var a = s.split(":");
          di[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Dt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (n) {
        Mt.units[n] = "px";
      }
    ),
    St.registerPlugin(fu);
  var nt = St.registerPlugin(fu) || St;
  nt.core.Tween;
  class wf {
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
  function vf() {
    return (
      console.log("Main Nav Component Animation Starter Initialized"), new wf()
    );
  }
  function yf() {
    console.log("Button Component Animation Starter Initialized");
  }
  function bf() {
    document.querySelectorAll("[data-skeleton]").forEach((e) => {
      setTimeout(() => {
        e.setAttribute("data-skeleton", "hidden");
      }, 100);
    });
  }
  class _f {
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
            nt.set(e, { y: "0%", opacity: 1 }))
          : (e.setAttribute("banner-status", "inactive"),
            nt.set(e, { y: "100%", opacity: 0 }));
      });
    }
    startAnimationLoop() {
      nt.timeline({ onComplete: () => this.advanceToNextItem() }).to(
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
        i = nt.timeline({
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
  const Df = () => new _f();
  class Ef {
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
  const Sf = (n = document) => new Ef(n);
  class Tf {
    constructor() {
      this.footer = document.querySelectorAll("[footer-year]");
    }
    init() {
      this.footer.forEach((e) => {
        e.innerHTML = new Date().getFullYear();
      });
    }
  }
  const xf = () => {
    new Tf().init();
  };
  class Cf {
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
  const Af = () => {
    new Cf();
  };
  function Mf(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function kf(n, e, t) {
    return Mf(n.prototype, e), n;
  }
  /*!
   * Observer 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Ze,
    gs,
    Lt,
    Hi,
    Yi,
    Yr,
    pu,
    lr,
    _n,
    hu,
    Ti,
    ti,
    mu,
    gu = function () {
      return (
        Ze ||
        (typeof window < "u" && (Ze = window.gsap) && Ze.registerPlugin && Ze)
      );
    },
    wu = 1,
    Vr = [],
    ee = [],
    pi = [],
    Dn = Date.now,
    ja = function (e, t) {
      return t;
    },
    Pf = function () {
      var e = _n.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, ee),
        r.push.apply(r, pi),
        (ee = i),
        (pi = r),
        (ja = function (a, o) {
          return t[a](o);
        });
    },
    Vi = function (e, t) {
      return ~pi.indexOf(e) && pi[pi.indexOf(e) + 1][t];
    },
    En = function (e) {
      return !!~hu.indexOf(e);
    },
    ht = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!s });
    },
    mt = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    ws = "scrollLeft",
    vs = "scrollTop",
    Xa = function () {
      return (Ti && Ti.isPressed) || ee.cache++;
    },
    ys = function (e, t) {
      var i = function r(s) {
        if (s || s === 0) {
          wu && (Lt.history.scrollRestoration = "manual");
          var a = Ti && Ti.isPressed;
          (s = r.v = Math.round(s) || (Ti && Ti.iOS ? 1 : 0)),
            e(s),
            (r.cacheID = ee.cache),
            a && ja("ss", s);
        } else
          (t || ee.cache !== r.cacheID || ja("ref")) &&
            ((r.cacheID = ee.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    gt = {
      s: ws,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: ys(function (n) {
        return arguments.length
          ? Lt.scrollTo(n, Be.sc())
          : Lt.pageXOffset || Hi[ws] || Yi[ws] || Yr[ws] || 0;
      }),
    },
    Be = {
      s: vs,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: gt,
      sc: ys(function (n) {
        return arguments.length
          ? Lt.scrollTo(gt.sc(), n)
          : Lt.pageYOffset || Hi[vs] || Yi[vs] || Yr[vs] || 0;
      }),
    },
    xt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || Ze.utils.toArray)(e)[0] ||
        (typeof e == "string" && Ze.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Wi = function (e, t) {
      var i = t.s,
        r = t.sc;
      En(e) && (e = Hi.scrollingElement || Yi);
      var s = ee.indexOf(e),
        a = r === Be.sc ? 1 : 2;
      !~s && (s = ee.push(e) - 1), ee[s + a] || ht(e, "scroll", Xa);
      var o = ee[s + a],
        l =
          o ||
          (ee[s + a] =
            ys(Vi(e, i), !0) ||
            (En(e)
              ? r
              : ys(function (u) {
                  return arguments.length ? (e[i] = u) : e[i];
                })));
      return (
        (l.target = e),
        o || (l.smooth = Ze.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Ua = function (e, t, i) {
      var r = e,
        s = e,
        a = Dn(),
        o = a,
        l = t || 50,
        u = Math.max(500, l * 3),
        c = function (f, d) {
          var g = Dn();
          d || g - a > l
            ? ((s = r), (r = f), (o = a), (a = g))
            : i
            ? (r += f)
            : (r = s + ((f - s) / (g - o)) * (a - o));
        },
        h = function () {
          (s = r = i ? 0 : r), (o = a = 0);
        },
        m = function (f) {
          var d = o,
            g = s,
            b = Dn();
          return (
            (f || f === 0) && f !== r && c(f),
            a === o || b - o > u
              ? 0
              : ((r + (i ? g : -g)) / ((i ? b : a) - d)) * 1e3
          );
        };
      return { update: c, reset: h, getVelocity: m };
    },
    Sn = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    vu = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    yu = function () {
      (_n = Ze.core.globals().ScrollTrigger), _n && _n.core && Pf();
    },
    bu = function (e) {
      return (
        (Ze = e || gu()),
        !gs &&
          Ze &&
          typeof document < "u" &&
          document.body &&
          ((Lt = window),
          (Hi = document),
          (Yi = Hi.documentElement),
          (Yr = Hi.body),
          (hu = [Lt, Hi, Yi, Yr]),
          Ze.utils.clamp,
          (mu = Ze.core.context || function () {}),
          (lr = "onpointerenter" in Yr ? "pointer" : "mouse"),
          (pu = Pe.isTouch =
            Lt.matchMedia &&
            Lt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Lt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (ti = Pe.eventTypes =
            (
              "ontouchstart" in Yi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Yi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (wu = 0);
          }, 500),
          yu(),
          (gs = 1)),
        gs
      );
    };
  (gt.op = Be), (ee.cache = 0);
  var Pe = (function () {
    function n(t) {
      this.init(t);
    }
    var e = n.prototype;
    return (
      (e.init = function (i) {
        gs || bu(Ze) || console.warn("Please gsap.registerPlugin(Observer)"),
          _n || yu();
        var r = i.tolerance,
          s = i.dragMinimum,
          a = i.type,
          o = i.target,
          l = i.lineHeight,
          u = i.debounce,
          c = i.preventDefault,
          h = i.onStop,
          m = i.onStopDelay,
          p = i.ignore,
          f = i.wheelSpeed,
          d = i.event,
          g = i.onDragStart,
          b = i.onDragEnd,
          v = i.onDrag,
          w = i.onPress,
          y = i.onRelease,
          _ = i.onRight,
          C = i.onLeft,
          T = i.onUp,
          x = i.onDown,
          A = i.onChangeX,
          E = i.onChangeY,
          z = i.onChange,
          D = i.onToggleX,
          S = i.onToggleY,
          M = i.onHover,
          L = i.onHoverEnd,
          F = i.onMove,
          P = i.ignoreCheck,
          I = i.isNormalizer,
          O = i.onGestureStart,
          k = i.onGestureEnd,
          Y = i.onWheel,
          X = i.onEnable,
          ue = i.onDisable,
          re = i.onClick,
          B = i.scrollSpeed,
          N = i.capture,
          $ = i.allowClicks,
          q = i.lockAxis,
          ce = i.onLockAxis;
        (this.target = o = xt(o) || Yi),
          (this.vars = i),
          p && (p = Ze.utils.toArray(p)),
          (r = r || 1e-9),
          (s = s || 0),
          (f = f || 1),
          (B = B || 1),
          (a = a || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Lt.getComputedStyle(Yr).lineHeight) || 22);
        var Je,
          _e,
          De,
          K,
          ne,
          we,
          $e,
          R = this,
          ze = 0,
          ut = 0,
          Yt = i.passive || (!c && i.passive !== !1),
          ve = Wi(o, gt),
          Vt = Wi(o, Be),
          Jt = ve(),
          ii = Vt(),
          Ae =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            ti[0] === "pointerdown",
          Qt = En(o),
          pe = o.ownerDocument || Hi,
          At = [0, 0, 0],
          qe = [0, 0, 0],
          ki = 0,
          Kn = function () {
            return (ki = Dn());
          },
          Re = function (j, de) {
            return (
              ((R.event = j) && p && ~p.indexOf(j.target)) ||
              (de && Ae && j.pointerType !== "touch") ||
              (P && P(j, de))
            );
          },
          na = function () {
            R._vx.reset(), R._vy.reset(), _e.pause(), h && h(R);
          },
          Pi = function () {
            var j = (R.deltaX = vu(At)),
              de = (R.deltaY = vu(qe)),
              H = Math.abs(j) >= r,
              U = Math.abs(de) >= r;
            z && (H || U) && z(R, j, de, At, qe),
              H &&
                (_ && R.deltaX > 0 && _(R),
                C && R.deltaX < 0 && C(R),
                A && A(R),
                D && R.deltaX < 0 != ze < 0 && D(R),
                (ze = R.deltaX),
                (At[0] = At[1] = At[2] = 0)),
              U &&
                (x && R.deltaY > 0 && x(R),
                T && R.deltaY < 0 && T(R),
                E && E(R),
                S && R.deltaY < 0 != ut < 0 && S(R),
                (ut = R.deltaY),
                (qe[0] = qe[1] = qe[2] = 0)),
              (K || De) &&
                (F && F(R),
                De && (g && De === 1 && g(R), v && v(R), (De = 0)),
                (K = !1)),
              we && !(we = !1) && ce && ce(R),
              ne && (Y(R), (ne = !1)),
              (Je = 0);
          },
          nn = function (j, de, H) {
            (At[H] += j),
              (qe[H] += de),
              R._vx.update(j),
              R._vy.update(de),
              u ? Je || (Je = requestAnimationFrame(Pi)) : Pi();
          },
          sn = function (j, de) {
            q &&
              !$e &&
              ((R.axis = $e = Math.abs(j) > Math.abs(de) ? "x" : "y"),
              (we = !0)),
              $e !== "y" && ((At[2] += j), R._vx.update(j, !0)),
              $e !== "x" && ((qe[2] += de), R._vy.update(de, !0)),
              u ? Je || (Je = requestAnimationFrame(Pi)) : Pi();
          },
          Zi = function (j) {
            if (!Re(j, 1)) {
              j = Sn(j, c);
              var de = j.clientX,
                H = j.clientY,
                U = de - R.x,
                G = H - R.y,
                Z = R.isDragging;
              (R.x = de),
                (R.y = H),
                (Z ||
                  ((U || G) &&
                    (Math.abs(R.startX - de) >= s ||
                      Math.abs(R.startY - H) >= s))) &&
                  ((De = Z ? 2 : 1), Z || (R.isDragging = !0), sn(U, G));
            }
          },
          xr = (R.onPress = function (J) {
            Re(J, 1) ||
              (J && J.button) ||
              ((R.axis = $e = null),
              _e.pause(),
              (R.isPressed = !0),
              (J = Sn(J)),
              (ze = ut = 0),
              (R.startX = R.x = J.clientX),
              (R.startY = R.y = J.clientY),
              R._vx.reset(),
              R._vy.reset(),
              ht(I ? o : pe, ti[1], Zi, Yt, !0),
              (R.deltaX = R.deltaY = 0),
              w && w(R));
          }),
          ae = (R.onRelease = function (J) {
            if (!Re(J, 1)) {
              mt(I ? o : pe, ti[1], Zi, !0);
              var j = !isNaN(R.y - R.startY),
                de = R.isDragging,
                H =
                  de &&
                  (Math.abs(R.x - R.startX) > 3 ||
                    Math.abs(R.y - R.startY) > 3),
                U = Sn(J);
              !H &&
                j &&
                (R._vx.reset(),
                R._vy.reset(),
                c &&
                  $ &&
                  Ze.delayedCall(0.08, function () {
                    if (Dn() - ki > 300 && !J.defaultPrevented) {
                      if (J.target.click) J.target.click();
                      else if (pe.createEvent) {
                        var G = pe.createEvent("MouseEvents");
                        G.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Lt,
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
                          J.target.dispatchEvent(G);
                      }
                    }
                  })),
                (R.isDragging = R.isGesturing = R.isPressed = !1),
                h && de && !I && _e.restart(!0),
                De && Pi(),
                b && de && b(R),
                y && y(R, H);
            }
          }),
          Cr = function (j) {
            return (
              j.touches &&
              j.touches.length > 1 &&
              (R.isGesturing = !0) &&
              O(j, R.isDragging)
            );
          },
          ri = function () {
            return (R.isGesturing = !1) || k(R);
          },
          ni = function (j) {
            if (!Re(j)) {
              var de = ve(),
                H = Vt();
              nn((de - Jt) * B, (H - ii) * B, 1),
                (Jt = de),
                (ii = H),
                h && _e.restart(!0);
            }
          },
          si = function (j) {
            if (!Re(j)) {
              (j = Sn(j, c)), Y && (ne = !0);
              var de =
                (j.deltaMode === 1
                  ? l
                  : j.deltaMode === 2
                  ? Lt.innerHeight
                  : 1) * f;
              nn(j.deltaX * de, j.deltaY * de, 0), h && !I && _e.restart(!0);
            }
          },
          Ar = function (j) {
            if (!Re(j)) {
              var de = j.clientX,
                H = j.clientY,
                U = de - R.x,
                G = H - R.y;
              (R.x = de),
                (R.y = H),
                (K = !0),
                h && _e.restart(!0),
                (U || G) && sn(U, G);
            }
          },
          an = function (j) {
            (R.event = j), M(R);
          },
          Oi = function (j) {
            (R.event = j), L(R);
          },
          Jn = function (j) {
            return Re(j) || (Sn(j, c) && re(R));
          };
        (_e = R._dc = Ze.delayedCall(m || 0.25, na).pause()),
          (R.deltaX = R.deltaY = 0),
          (R._vx = Ua(0, 50, !0)),
          (R._vy = Ua(0, 50, !0)),
          (R.scrollX = ve),
          (R.scrollY = Vt),
          (R.isDragging = R.isGesturing = R.isPressed = !1),
          mu(this),
          (R.enable = function (J) {
            return (
              R.isEnabled ||
                (ht(Qt ? pe : o, "scroll", Xa),
                a.indexOf("scroll") >= 0 &&
                  ht(Qt ? pe : o, "scroll", ni, Yt, N),
                a.indexOf("wheel") >= 0 && ht(o, "wheel", si, Yt, N),
                ((a.indexOf("touch") >= 0 && pu) ||
                  a.indexOf("pointer") >= 0) &&
                  (ht(o, ti[0], xr, Yt, N),
                  ht(pe, ti[2], ae),
                  ht(pe, ti[3], ae),
                  $ && ht(o, "click", Kn, !0, !0),
                  re && ht(o, "click", Jn),
                  O && ht(pe, "gesturestart", Cr),
                  k && ht(pe, "gestureend", ri),
                  M && ht(o, lr + "enter", an),
                  L && ht(o, lr + "leave", Oi),
                  F && ht(o, lr + "move", Ar)),
                (R.isEnabled = !0),
                (R.isDragging = R.isGesturing = R.isPressed = K = De = !1),
                R._vx.reset(),
                R._vy.reset(),
                (Jt = ve()),
                (ii = Vt()),
                J && J.type && xr(J),
                X && X(R)),
              R
            );
          }),
          (R.disable = function () {
            R.isEnabled &&
              (Vr.filter(function (J) {
                return J !== R && En(J.target);
              }).length || mt(Qt ? pe : o, "scroll", Xa),
              R.isPressed &&
                (R._vx.reset(), R._vy.reset(), mt(I ? o : pe, ti[1], Zi, !0)),
              mt(Qt ? pe : o, "scroll", ni, N),
              mt(o, "wheel", si, N),
              mt(o, ti[0], xr, N),
              mt(pe, ti[2], ae),
              mt(pe, ti[3], ae),
              mt(o, "click", Kn, !0),
              mt(o, "click", Jn),
              mt(pe, "gesturestart", Cr),
              mt(pe, "gestureend", ri),
              mt(o, lr + "enter", an),
              mt(o, lr + "leave", Oi),
              mt(o, lr + "move", Ar),
              (R.isEnabled = R.isPressed = R.isDragging = !1),
              ue && ue(R));
          }),
          (R.kill = R.revert =
            function () {
              R.disable();
              var J = Vr.indexOf(R);
              J >= 0 && Vr.splice(J, 1), Ti === R && (Ti = 0);
            }),
          Vr.push(R),
          I && En(o) && (Ti = R),
          R.enable(d);
      }),
      kf(n, [
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
  (Pe.version = "3.12.7"),
    (Pe.create = function (n) {
      return new Pe(n);
    }),
    (Pe.register = bu),
    (Pe.getAll = function () {
      return Vr.slice();
    }),
    (Pe.getById = function (n) {
      return Vr.filter(function (e) {
        return e.vars.id === n;
      })[0];
    }),
    gu() && Ze.registerPlugin(Pe);
  /*!
   * ScrollTrigger 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var V,
    Wr,
    te,
    ge,
    zt,
    fe,
    Za,
    bs,
    Tn,
    xn,
    Cn,
    _s,
    st,
    Ds,
    Ka,
    wt,
    _u,
    Du,
    Gr,
    Eu,
    Ja,
    Su,
    vt,
    Qa,
    Tu,
    xu,
    Gi,
    eo,
    to,
    qr,
    io,
    Es,
    ro,
    no,
    Ss = 1,
    at = Date.now,
    so = at(),
    jt = 0,
    An = 0,
    Cu = function (e, t, i) {
      var r = Rt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    Au = function (e, t) {
      return t && (!Rt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Of = function n() {
      return An && requestAnimationFrame(n);
    },
    Mu = function () {
      return (Ds = 1);
    },
    ku = function () {
      return (Ds = 0);
    },
    hi = function (e) {
      return e;
    },
    Mn = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Pu = function () {
      return typeof window < "u";
    },
    Ou = function () {
      return V || (Pu() && (V = window.gsap) && V.registerPlugin && V);
    },
    ur = function (e) {
      return !!~Za.indexOf(e);
    },
    Iu = function (e) {
      return (
        (e === "Height" ? io : te["inner" + e]) ||
        zt["client" + e] ||
        fe["client" + e]
      );
    },
    Fu = function (e) {
      return (
        Vi(e, "getBoundingClientRect") ||
        (ur(e)
          ? function () {
              return (Rs.width = te.innerWidth), (Rs.height = io), Rs;
            }
          : function () {
              return xi(e);
            })
      );
    },
    If = function (e, t, i) {
      var r = i.d,
        s = i.d2,
        a = i.a;
      return (a = Vi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? Iu(s) : e["client" + s]) || 0;
          };
    },
    Ff = function (e, t) {
      return !t || ~pi.indexOf(e)
        ? Fu(e)
        : function () {
            return Rs;
          };
    },
    mi = function (e, t) {
      var i = t.s,
        r = t.d2,
        s = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Vi(e, i))
          ? a() - Fu(e)()[s]
          : ur(e)
          ? (zt[i] || fe[i]) - Iu(r)
          : e[i] - e["offset" + r]
      );
    },
    Ts = function (e, t) {
      for (var i = 0; i < Gr.length; i += 3)
        (!t || ~t.indexOf(Gr[i + 1])) && e(Gr[i], Gr[i + 1], Gr[i + 2]);
    },
    Rt = function (e) {
      return typeof e == "string";
    },
    ot = function (e) {
      return typeof e == "function";
    },
    kn = function (e) {
      return typeof e == "number";
    },
    cr = function (e) {
      return typeof e == "object";
    },
    Pn = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    ao = function (e, t) {
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
    Lu = "left",
    zu = "top",
    oo = "right",
    lo = "bottom",
    dr = "width",
    fr = "height",
    On = "Right",
    In = "Left",
    Fn = "Top",
    Ln = "Bottom",
    Le = "padding",
    Xt = "margin",
    Xr = "Width",
    uo = "Height",
    Ne = "px",
    Ut = function (e) {
      return te.getComputedStyle(e);
    },
    Lf = function (e) {
      var t = Ut(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Ru = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    xi = function (e, t) {
      var i =
          t &&
          Ut(e)[Ka] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          V.to(e, {
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
    xs = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    Bu = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        s;
      for (s in i) t.push(i[s] / r);
      return t;
    },
    zf = function (e) {
      return function (t) {
        return V.utils.snap(Bu(e), t);
      };
    },
    co = function (e) {
      var t = V.utils.snap(e),
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
    Rf = function (e) {
      return function (t, i) {
        return co(Bu(e))(t, i.direction);
      };
    },
    Cs = function (e, t, i, r) {
      return i.split(",").forEach(function (s) {
        return e(t, s, r);
      });
    },
    Ve = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: !r, capture: !!s });
    },
    We = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    As = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Nu = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ms = { toggleActions: "play", anticipatePin: 0 },
    ks = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Ps = function (e, t) {
      if (Rt(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in ks
              ? ks[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Os = function (e, t, i, r, s, a, o, l) {
      var u = s.startColor,
        c = s.endColor,
        h = s.fontSize,
        m = s.indent,
        p = s.fontWeight,
        f = ge.createElement("div"),
        d = ur(i) || Vi(i, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        b = d ? fe : i,
        v = e.indexOf("start") !== -1,
        w = v ? u : c,
        y =
          "border-color:" +
          w +
          ";font-size:" +
          h +
          ";color:" +
          w +
          ";font-weight:" +
          p +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (y += "position:" + ((g || l) && d ? "fixed;" : "absolute;")),
        (g || l || !d) &&
          (y += (r === Be ? oo : lo) + ":" + (a + parseFloat(m)) + "px;"),
        o &&
          (y +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (f._isStart = v),
        f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (f.style.cssText = y),
        (f.innerText = t || t === 0 ? e + "-" + t : e),
        b.children[0] ? b.insertBefore(f, b.children[0]) : b.appendChild(f),
        (f._offset = f["offset" + r.op.d2]),
        Is(f, 0, r, v),
        f
      );
    },
    Is = function (e, t, i, r) {
      var s = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (s[i.a + "Percent"] = r ? -100 : 0),
        (s[i.a] = r ? "1px" : 0),
        (s["border" + a + Xr] = 1),
        (s["border" + o + Xr] = 0),
        (s[i.p] = t + "px"),
        V.set(e, s);
    },
    Q = [],
    fo = {},
    zn,
    $u = function () {
      return at() - jt > 34 && (zn || (zn = requestAnimationFrame(Ci)));
    },
    Ur = function () {
      (!vt || !vt.isPressed || vt.startX > fe.clientWidth) &&
        (ee.cache++,
        vt ? zn || (zn = requestAnimationFrame(Ci)) : Ci(),
        jt || hr("scrollStart"),
        (jt = at()));
    },
    po = function () {
      (xu = te.innerWidth), (Tu = te.innerHeight);
    },
    Rn = function (e) {
      ee.cache++,
        (e === !0 ||
          (!st &&
            !Su &&
            !ge.fullscreenElement &&
            !ge.webkitFullscreenElement &&
            (!Qa ||
              xu !== te.innerWidth ||
              Math.abs(te.innerHeight - Tu) > te.innerHeight * 0.25))) &&
          bs.restart(!0);
    },
    pr = {},
    Bf = [],
    Hu = function n() {
      return We(ie, "scrollEnd", n) || gr(!0);
    },
    hr = function (e) {
      return (
        (pr[e] &&
          pr[e].map(function (t) {
            return t();
          })) ||
        Bf
      );
    },
    Bt = [],
    Yu = function (e) {
      for (var t = 0; t < Bt.length; t += 5)
        (!e || (Bt[t + 4] && Bt[t + 4].query === e)) &&
          ((Bt[t].style.cssText = Bt[t + 1]),
          Bt[t].getBBox && Bt[t].setAttribute("transform", Bt[t + 2] || ""),
          (Bt[t + 3].uncache = 1));
    },
    ho = function (e, t) {
      var i;
      for (wt = 0; wt < Q.length; wt++)
        (i = Q[wt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (Es = !0), t && Yu(t), t || hr("revert");
    },
    Vu = function (e, t) {
      ee.cache++,
        (t || !yt) &&
          ee.forEach(function (i) {
            return ot(i) && i.cacheID++ && (i.rec = 0);
          }),
        Rt(e) && (te.history.scrollRestoration = to = e);
    },
    yt,
    mr = 0,
    Wu,
    Nf = function () {
      if (Wu !== mr) {
        var e = (Wu = mr);
        requestAnimationFrame(function () {
          return e === mr && gr(!0);
        });
      }
    },
    Gu = function () {
      fe.appendChild(qr),
        (io = (!vt && qr.offsetHeight) || te.innerHeight),
        fe.removeChild(qr);
    },
    qu = function (e) {
      return Tn(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    gr = function (e, t) {
      if (
        ((zt = ge.documentElement),
        (fe = ge.body),
        (Za = [te, ge, zt, fe]),
        jt && !e && !Es)
      ) {
        Ve(ie, "scrollEnd", Hu);
        return;
      }
      Gu(),
        (yt = ie.isRefreshing = !0),
        ee.forEach(function (r) {
          return ot(r) && ++r.cacheID && (r.rec = r());
        });
      var i = hr("refreshInit");
      Eu && ie.sort(),
        t || ho(),
        ee.forEach(function (r) {
          ot(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        Q.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Es = !1),
        Q.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[s];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - a), r.refresh();
          }
        }),
        (ro = 1),
        qu(!0),
        Q.forEach(function (r) {
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
        qu(!1),
        (ro = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        ee.forEach(function (r) {
          ot(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        Vu(to, 1),
        bs.pause(),
        mr++,
        (yt = 2),
        Ci(2),
        Q.forEach(function (r) {
          return ot(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (yt = ie.isRefreshing = !1),
        hr("refresh");
    },
    mo = 0,
    Fs = 1,
    Bn,
    Ci = function (e) {
      if (e === 2 || (!yt && !Es)) {
        (ie.isUpdating = !0), Bn && Bn.update(0);
        var t = Q.length,
          i = at(),
          r = i - so >= 50,
          s = t && Q[0].scroll();
        if (
          ((Fs = mo > s ? -1 : 1),
          yt || (mo = s),
          r &&
            (jt && !Ds && i - jt > 200 && ((jt = 0), hr("scrollEnd")),
            (Cn = so),
            (so = i)),
          Fs < 0)
        ) {
          for (wt = t; wt-- > 0; ) Q[wt] && Q[wt].update(0, r);
          Fs = 1;
        } else for (wt = 0; wt < t; wt++) Q[wt] && Q[wt].update(0, r);
        ie.isUpdating = !1;
      }
      zn = 0;
    },
    go = [
      Lu,
      zu,
      lo,
      oo,
      Xt + Ln,
      Xt + On,
      Xt + Fn,
      Xt + In,
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
    Ls = go.concat([
      dr,
      fr,
      "boxSizing",
      "max" + Xr,
      "max" + uo,
      "position",
      Xt,
      Le,
      Le + Fn,
      Le + On,
      Le + Ln,
      Le + In,
    ]),
    $f = function (e, t, i) {
      Zr(i);
      var r = e._gsap;
      if (r.spacerIsNative) Zr(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    wo = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var s = go.length, a = t.style, o = e.style, l; s--; )
          (l = go[s]), (a[l] = i[l]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[lo] = o[oo] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[dr] = xs(e, gt) + Ne),
          (a[fr] = xs(e, Be) + Ne),
          (a[Le] = o[Xt] = o[zu] = o[Lu] = "0"),
          Zr(r),
          (o[dr] = o["max" + Xr] = i[dr]),
          (o[fr] = o["max" + uo] = i[fr]),
          (o[Le] = i[Le]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Hf = /([A-Z])/g,
    Zr = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          r = 0,
          s,
          a;
        for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; r < i; r += 2)
          (a = e[r + 1]),
            (s = e[r]),
            a
              ? (t[s] = a)
              : t[s] && t.removeProperty(s.replace(Hf, "-$1").toLowerCase());
      }
    },
    zs = function (e) {
      for (var t = Ls.length, i = e.style, r = [], s = 0; s < t; s++)
        r.push(Ls[s], i[Ls[s]]);
      return (r.t = e), r;
    },
    Yf = function (e, t, i) {
      for (var r = [], s = e.length, a = i ? 8 : 0, o; a < s; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    Rs = { left: 0, top: 0 },
    ju = function (e, t, i, r, s, a, o, l, u, c, h, m, p, f) {
      ot(e) && (e = e(l)),
        Rt(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? Ps("0" + e.substr(3), i) : 0));
      var d = p ? p.time() : 0,
        g,
        b,
        v;
      if ((p && p.seek(0), isNaN(e) || (e = +e), kn(e)))
        p &&
          (e = V.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            m,
            e
          )),
          o && Is(o, i, r, !0);
      else {
        ot(t) && (t = t(l));
        var w = (e || "0").split(" "),
          y,
          _,
          C,
          T;
        (v = xt(t, l) || fe),
          (y = xi(v) || {}),
          (!y || (!y.left && !y.top)) &&
            Ut(v).display === "none" &&
            ((T = v.style.display),
            (v.style.display = "block"),
            (y = xi(v)),
            T ? (v.style.display = T) : v.style.removeProperty("display")),
          (_ = Ps(w[0], y[r.d])),
          (C = Ps(w[1] || "0", i)),
          (e = y[r.p] - u[r.p] - c + _ + s - C),
          o && Is(o, C, r, i - C < 20 || (o._isStart && C > 20)),
          (i -= i - C);
      }
      if ((f && ((l[f] = e || -0.001), e < 0 && (e = 0)), a)) {
        var x = e + i,
          A = a._isStart;
        (g = "scroll" + r.d2),
          Is(
            a,
            x,
            r,
            (A && x > 20) ||
              (!A && (h ? Math.max(fe[g], zt[g]) : a.parentNode[g]) <= x + 1)
          ),
          h &&
            ((u = xi(o)),
            h && (a.style[r.op.p] = u[r.op.p] - r.op.m - a._offset + Ne));
      }
      return (
        p &&
          v &&
          ((g = xi(v)),
          p.seek(m),
          (b = xi(v)),
          (p._caScrollDist = g[r.p] - b[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(d),
        p ? e : Math.round(e)
      );
    },
    Vf = /(webkit|moz|length|cssText|inset)/i,
    Xu = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var s = e.style,
          a,
          o;
        if (t === fe) {
          (e._stOrig = s.cssText), (o = Ut(e));
          for (a in o)
            !+a &&
              !Vf.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = i), (s.left = r);
        } else s.cssText = e._stOrig;
        (V.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Uu = function (e, t, i) {
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
      (r[t.p] = "+=" + i), V.set(e, r);
    },
    Zu = function (e, t) {
      var i = Wi(e, t),
        r = "_scroll" + t.p2,
        s = function a(o, l, u, c, h) {
          var m = a.tween,
            p = l.onComplete,
            f = {};
          u = u || i();
          var d = Uu(i, u, function () {
            m.kill(), (a.tween = 0);
          });
          return (
            (h = (c && h) || 0),
            (c = c || o - u),
            m && m.kill(),
            (l[r] = o),
            (l.inherit = !1),
            (l.modifiers = f),
            (f[r] = function () {
              return d(u + c * m.ratio + h * m.ratio * m.ratio);
            }),
            (l.onUpdate = function () {
              ee.cache++, a.tween && Ci();
            }),
            (l.onComplete = function () {
              (a.tween = 0), p && p.call(m);
            }),
            (m = a.tween = V.to(e, l)),
            m
          );
        };
      return (
        (e[r] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ve(e, "wheel", i.wheelHandler),
        ie.isTouch && Ve(e, "touchmove", i.wheelHandler),
        s
      );
    },
    ie = (function () {
      function n(t, i) {
        Wr ||
          n.register(V) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          eo(this),
          this.init(t, i);
      }
      var e = n.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !An)
          ) {
            this.update = this.refresh = this.kill = hi;
            return;
          }
          i = Ru(Rt(i) || kn(i) || i.nodeType ? { trigger: i } : i, Ms);
          var s = i,
            a = s.onUpdate,
            o = s.toggleClass,
            l = s.id,
            u = s.onToggle,
            c = s.onRefresh,
            h = s.scrub,
            m = s.trigger,
            p = s.pin,
            f = s.pinSpacing,
            d = s.invalidateOnRefresh,
            g = s.anticipatePin,
            b = s.onScrubComplete,
            v = s.onSnapComplete,
            w = s.once,
            y = s.snap,
            _ = s.pinReparent,
            C = s.pinSpacer,
            T = s.containerAnimation,
            x = s.fastScrollEnd,
            A = s.preventOverlaps,
            E =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? gt
                : Be,
            z = !h && h !== 0,
            D = xt(i.scroller || te),
            S = V.core.getCache(D),
            M = ur(D),
            L =
              ("pinType" in i
                ? i.pinType
                : Vi(D, "pinType") || (M && "fixed")) === "fixed",
            F = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            P = z && i.toggleActions.split(" "),
            I = "markers" in i ? i.markers : Ms.markers,
            O = M ? 0 : parseFloat(Ut(D)["border" + E.p2 + Xr]) || 0,
            k = this,
            Y =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(k);
              },
            X = If(D, M, E),
            ue = Ff(D, M),
            re = 0,
            B = 0,
            N = 0,
            $ = Wi(D, E),
            q,
            ce,
            Je,
            _e,
            De,
            K,
            ne,
            we,
            $e,
            R,
            ze,
            ut,
            Yt,
            ve,
            Vt,
            Jt,
            ii,
            Ae,
            Qt,
            pe,
            At,
            qe,
            ki,
            Kn,
            Re,
            na,
            Pi,
            nn,
            sn,
            Zi,
            xr,
            ae,
            Cr,
            ri,
            ni,
            si,
            Ar,
            an,
            Oi;
          if (
            ((k._startClamp = k._endClamp = !1),
            (k._dir = E),
            (g *= 45),
            (k.scroller = D),
            (k.scroll = T ? T.time.bind(T) : $),
            (_e = $()),
            (k.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((Eu = 1), i.refreshPriority === -9999 && (Bn = k)),
            (S.tweenScroll = S.tweenScroll || {
              top: Zu(D, Be),
              left: Zu(D, gt),
            }),
            (k.tweenTo = q = S.tweenScroll[E.p]),
            (k.scrubDuration = function (H) {
              (Cr = kn(H) && H),
                Cr
                  ? ae
                    ? ae.duration(H)
                    : (ae = V.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Cr,
                        paused: !0,
                        onComplete: function () {
                          return b && b(k);
                        },
                      }))
                  : (ae && ae.progress(1).kill(), (ae = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !k.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (k.animation = r.pause()),
              (r.scrollTrigger = k),
              k.scrubDuration(h),
              (Zi = 0),
              l || (l = r.vars.id)),
            y &&
              ((!cr(y) || y.push) && (y = { snapTo: y }),
              "scrollBehavior" in fe.style &&
                V.set(M ? [fe, zt] : D, { scrollBehavior: "auto" }),
              ee.forEach(function (H) {
                return (
                  ot(H) &&
                  H.target === (M ? ge.scrollingElement || zt : D) &&
                  (H.smooth = !1)
                );
              }),
              (Je = ot(y.snapTo)
                ? y.snapTo
                : y.snapTo === "labels"
                ? zf(r)
                : y.snapTo === "labelsDirectional"
                ? Rf(r)
                : y.directional !== !1
                ? function (H, U) {
                    return co(y.snapTo)(H, at() - B < 500 ? 0 : U.direction);
                  }
                : V.utils.snap(y.snapTo)),
              (ri = y.duration || { min: 0.1, max: 2 }),
              (ri = cr(ri) ? xn(ri.min, ri.max) : xn(ri, ri)),
              (ni = V.delayedCall(y.delay || Cr / 2 || 0.1, function () {
                var H = $(),
                  U = at() - B < 500,
                  G = q.tween;
                if (
                  (U || Math.abs(k.getVelocity()) < 10) &&
                  !G &&
                  !Ds &&
                  re !== H
                ) {
                  var Z = (H - K) / ve,
                    je = r && !z ? r.totalProgress() : Z,
                    le = U ? 0 : ((je - xr) / (at() - Cn)) * 1e3 || 0,
                    Oe = V.utils.clamp(-Z, 1 - Z, (jr(le / 2) * le) / 0.185),
                    ct = Z + (y.inertia === !1 ? 0 : Oe),
                    Me,
                    Ee,
                    me = y,
                    ai = me.onStart,
                    xe = me.onInterrupt,
                    Wt = me.onComplete;
                  if (
                    ((Me = Je(ct, k)),
                    kn(Me) || (Me = ct),
                    (Ee = Math.max(0, Math.round(K + Me * ve))),
                    H <= ne && H >= K && Ee !== H)
                  ) {
                    if (G && !G._initted && G.data <= jr(Ee - H)) return;
                    y.inertia === !1 && (Oe = Me - Z),
                      q(
                        Ee,
                        {
                          duration: ri(
                            jr(
                              (Math.max(jr(ct - je), jr(Me - je)) * 0.185) /
                                le /
                                0.05 || 0
                            )
                          ),
                          ease: y.ease || "power3",
                          data: jr(Ee - H),
                          onInterrupt: function () {
                            return ni.restart(!0) && xe && xe(k);
                          },
                          onComplete: function () {
                            k.update(),
                              (re = $()),
                              r &&
                                !z &&
                                (ae
                                  ? ae.resetTo(
                                      "totalProgress",
                                      Me,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(Me)),
                              (Zi = xr =
                                r && !z ? r.totalProgress() : k.progress),
                              v && v(k),
                              Wt && Wt(k);
                          },
                        },
                        H,
                        Oe * ve,
                        Ee - H - Oe * ve
                      ),
                      ai && ai(k, q.tween);
                  }
                } else k.isActive && re !== H && ni.restart(!0);
              }).pause())),
            l && (fo[l] = k),
            (m = k.trigger = xt(m || (p !== !0 && p))),
            (Oi = m && m._gsap && m._gsap.stRevert),
            Oi && (Oi = Oi(k)),
            (p = p === !0 ? m : xt(p)),
            Rt(o) && (o = { targets: m, className: o }),
            p &&
              (f === !1 ||
                f === Xt ||
                (f =
                  !f &&
                  p.parentNode &&
                  p.parentNode.style &&
                  Ut(p.parentNode).display === "flex"
                    ? !1
                    : Le),
              (k.pin = p),
              (ce = V.core.getCache(p)),
              ce.spacer
                ? (Vt = ce.pinState)
                : (C &&
                    ((C = xt(C)),
                    C && !C.nodeType && (C = C.current || C.nativeElement),
                    (ce.spacerIsNative = !!C),
                    C && (ce.spacerState = zs(C))),
                  (ce.spacer = Ae = C || ge.createElement("div")),
                  Ae.classList.add("pin-spacer"),
                  l && Ae.classList.add("pin-spacer-" + l),
                  (ce.pinState = Vt = zs(p))),
              i.force3D !== !1 && V.set(p, { force3D: !0 }),
              (k.spacer = Ae = ce.spacer),
              (sn = Ut(p)),
              (Kn = sn[f + E.os2]),
              (pe = V.getProperty(p)),
              (At = V.quickSetter(p, E.a, Ne)),
              wo(p, Ae, sn),
              (ii = zs(p))),
            I)
          ) {
            (ut = cr(I) ? Ru(I, Nu) : Nu),
              (R = Os("scroller-start", l, D, E, ut, 0)),
              (ze = Os("scroller-end", l, D, E, ut, 0, R)),
              (Qt = R["offset" + E.op.d2]);
            var Jn = xt(Vi(D, "content") || D);
            (we = this.markerStart = Os("start", l, Jn, E, ut, Qt, 0, T)),
              ($e = this.markerEnd = Os("end", l, Jn, E, ut, Qt, 0, T)),
              T && (an = V.quickSetter([we, $e], E.a, Ne)),
              !L &&
                !(pi.length && Vi(D, "fixedMarkers") === !0) &&
                (Lf(M ? fe : D),
                V.set([R, ze], { force3D: !0 }),
                (na = V.quickSetter(R, E.a, Ne)),
                (nn = V.quickSetter(ze, E.a, Ne)));
          }
          if (T) {
            var J = T.vars.onUpdate,
              j = T.vars.onUpdateParams;
            T.eventCallback("onUpdate", function () {
              k.update(0, 0, 1), J && J.apply(T, j || []);
            });
          }
          if (
            ((k.previous = function () {
              return Q[Q.indexOf(k) - 1];
            }),
            (k.next = function () {
              return Q[Q.indexOf(k) + 1];
            }),
            (k.revert = function (H, U) {
              if (!U) return k.kill(!0);
              var G = H !== !1 || !k.enabled,
                Z = st;
              G !== k.isReverted &&
                (G &&
                  ((si = Math.max($(), k.scroll.rec || 0)),
                  (N = k.progress),
                  (Ar = r && r.progress())),
                we &&
                  [we, $e, R, ze].forEach(function (je) {
                    return (je.style.display = G ? "none" : "block");
                  }),
                G && ((st = k), k.update(G)),
                p &&
                  (!_ || !k.isActive) &&
                  (G ? $f(p, Ae, Vt) : wo(p, Ae, Ut(p), Re)),
                G || k.update(G),
                (st = Z),
                (k.isReverted = G));
            }),
            (k.refresh = function (H, U, G, Z) {
              if (!((st || !k.enabled) && !U)) {
                if (p && H && jt) {
                  Ve(n, "scrollEnd", Hu);
                  return;
                }
                !yt && Y && Y(k),
                  (st = k),
                  q.tween && !G && (q.tween.kill(), (q.tween = 0)),
                  ae && ae.pause(),
                  d && r && r.revert({ kill: !1 }).invalidate(),
                  k.isReverted || k.revert(!0, !0),
                  (k._subPinOffset = !1);
                var je = X(),
                  le = ue(),
                  Oe = T ? T.duration() : mi(D, E),
                  ct = ve <= 0.01,
                  Me = 0,
                  Ee = Z || 0,
                  me = cr(G) ? G.end : i.end,
                  ai = i.endTrigger || m,
                  xe = cr(G)
                    ? G.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  Wt = (k.pinnedContainer =
                    i.pinnedContainer && xt(i.pinnedContainer, k)),
                  yi = (m && Math.max(0, Q.indexOf(k))) || 0,
                  Qe = yi,
                  et,
                  dt,
                  Mr,
                  sa,
                  ft,
                  He,
                  bi,
                  Ko,
                  td,
                  Qn,
                  _i,
                  es,
                  aa;
                for (
                  I &&
                  cr(G) &&
                  ((es = V.getProperty(R, E.p)), (aa = V.getProperty(ze, E.p)));
                  Qe-- > 0;

                )
                  (He = Q[Qe]),
                    He.end || He.refresh(0, 1) || (st = k),
                    (bi = He.pin),
                    bi &&
                      (bi === m || bi === p || bi === Wt) &&
                      !He.isReverted &&
                      (Qn || (Qn = []), Qn.unshift(He), He.revert(!0, !0)),
                    He !== Q[Qe] && (yi--, Qe--);
                for (
                  ot(xe) && (xe = xe(k)),
                    xe = Cu(xe, "start", k),
                    K =
                      ju(
                        xe,
                        m,
                        je,
                        E,
                        $(),
                        we,
                        R,
                        k,
                        le,
                        O,
                        L,
                        Oe,
                        T,
                        k._startClamp && "_startClamp"
                      ) || (p ? -0.001 : 0),
                    ot(me) && (me = me(k)),
                    Rt(me) &&
                      !me.indexOf("+=") &&
                      (~me.indexOf(" ")
                        ? (me = (Rt(xe) ? xe.split(" ")[0] : "") + me)
                        : ((Me = Ps(me.substr(2), je)),
                          (me = Rt(xe)
                            ? xe
                            : (T
                                ? V.utils.mapRange(
                                    0,
                                    T.duration(),
                                    T.scrollTrigger.start,
                                    T.scrollTrigger.end,
                                    K
                                  )
                                : K) + Me),
                          (ai = m))),
                    me = Cu(me, "end", k),
                    ne =
                      Math.max(
                        K,
                        ju(
                          me || (ai ? "100% 0" : Oe),
                          ai,
                          je,
                          E,
                          $() + Me,
                          $e,
                          ze,
                          k,
                          le,
                          O,
                          L,
                          Oe,
                          T,
                          k._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Me = 0,
                    Qe = yi;
                  Qe--;

                )
                  (He = Q[Qe]),
                    (bi = He.pin),
                    bi &&
                      He.start - He._pinPush <= K &&
                      !T &&
                      He.end > 0 &&
                      ((et =
                        He.end -
                        (k._startClamp ? Math.max(0, He.start) : He.start)),
                      ((bi === m && He.start - He._pinPush < K) || bi === Wt) &&
                        isNaN(xe) &&
                        (Me += et * (1 - He.progress)),
                      bi === p && (Ee += et));
                if (
                  ((K += Me),
                  (ne += Me),
                  k._startClamp && (k._startClamp += Me),
                  k._endClamp &&
                    !yt &&
                    ((k._endClamp = ne || -0.001),
                    (ne = Math.min(ne, mi(D, E)))),
                  (ve = ne - K || ((K -= 0.01) && 0.001)),
                  ct && (N = V.utils.clamp(0, 1, V.utils.normalize(K, ne, si))),
                  (k._pinPush = Ee),
                  we &&
                    Me &&
                    ((et = {}),
                    (et[E.a] = "+=" + Me),
                    Wt && (et[E.p] = "-=" + $()),
                    V.set([we, $e], et)),
                  p && !(ro && k.end >= mi(D, E)))
                )
                  (et = Ut(p)),
                    (sa = E === Be),
                    (Mr = $()),
                    (qe = parseFloat(pe(E.a)) + Ee),
                    !Oe &&
                      ne > 1 &&
                      ((_i = (M ? ge.scrollingElement || zt : D).style),
                      (_i = {
                        style: _i,
                        value: _i["overflow" + E.a.toUpperCase()],
                      }),
                      M &&
                        Ut(fe)["overflow" + E.a.toUpperCase()] !== "scroll" &&
                        (_i.style["overflow" + E.a.toUpperCase()] = "scroll")),
                    wo(p, Ae, et),
                    (ii = zs(p)),
                    (dt = xi(p, !0)),
                    (Ko = L && Wi(D, sa ? gt : Be)()),
                    f
                      ? ((Re = [f + E.os2, ve + Ee + Ne]),
                        (Re.t = Ae),
                        (Qe = f === Le ? xs(p, E) + ve + Ee : 0),
                        Qe &&
                          (Re.push(E.d, Qe + Ne),
                          Ae.style.flexBasis !== "auto" &&
                            (Ae.style.flexBasis = Qe + Ne)),
                        Zr(Re),
                        Wt &&
                          Q.forEach(function (ts) {
                            ts.pin === Wt &&
                              ts.vars.pinSpacing !== !1 &&
                              (ts._subPinOffset = !0);
                          }),
                        L && $(si))
                      : ((Qe = xs(p, E)),
                        Qe &&
                          Ae.style.flexBasis !== "auto" &&
                          (Ae.style.flexBasis = Qe + Ne)),
                    L &&
                      ((ft = {
                        top: dt.top + (sa ? Mr - K : Ko) + Ne,
                        left: dt.left + (sa ? Ko : Mr - K) + Ne,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ft[dr] = ft["max" + Xr] = Math.ceil(dt.width) + Ne),
                      (ft[fr] = ft["max" + uo] = Math.ceil(dt.height) + Ne),
                      (ft[Xt] =
                        ft[Xt + Fn] =
                        ft[Xt + On] =
                        ft[Xt + Ln] =
                        ft[Xt + In] =
                          "0"),
                      (ft[Le] = et[Le]),
                      (ft[Le + Fn] = et[Le + Fn]),
                      (ft[Le + On] = et[Le + On]),
                      (ft[Le + Ln] = et[Le + Ln]),
                      (ft[Le + In] = et[Le + In]),
                      (Jt = Yf(Vt, ft, _)),
                      yt && $(0)),
                    r
                      ? ((td = r._initted),
                        Ja(1),
                        r.render(r.duration(), !0, !0),
                        (ki = pe(E.a) - qe + ve + Ee),
                        (Pi = Math.abs(ve - ki) > 1),
                        L && Pi && Jt.splice(Jt.length - 2, 2),
                        r.render(0, !0, !0),
                        td || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Ja(0))
                      : (ki = ve),
                    _i &&
                      (_i.value
                        ? (_i.style["overflow" + E.a.toUpperCase()] = _i.value)
                        : _i.style.removeProperty("overflow-" + E.a));
                else if (m && $() && !T)
                  for (dt = m.parentNode; dt && dt !== fe; )
                    dt._pinOffset &&
                      ((K -= dt._pinOffset), (ne -= dt._pinOffset)),
                      (dt = dt.parentNode);
                Qn &&
                  Qn.forEach(function (ts) {
                    return ts.revert(!1, !0);
                  }),
                  (k.start = K),
                  (k.end = ne),
                  (_e = De = yt ? si : $()),
                  !T && !yt && (_e < si && $(si), (k.scroll.rec = 0)),
                  k.revert(!1, !0),
                  (B = at()),
                  ni && ((re = -1), ni.restart(!0)),
                  (st = 0),
                  r &&
                    z &&
                    (r._initted || Ar) &&
                    r.progress() !== Ar &&
                    r.progress(Ar || 0, !0).render(r.time(), !0, !0),
                  (ct || N !== k.progress || T || d || (r && !r._initted)) &&
                    (r &&
                      !z &&
                      r.totalProgress(
                        T && K < -0.001 && !N ? V.utils.normalize(K, ne, 0) : N,
                        !0
                      ),
                    (k.progress = ct || (_e - K) / ve === N ? 0 : N)),
                  p && f && (Ae._pinOffset = Math.round(k.progress * ki)),
                  ae && ae.invalidate(),
                  isNaN(es) ||
                    ((es -= V.getProperty(R, E.p)),
                    (aa -= V.getProperty(ze, E.p)),
                    Bs(R, E, es),
                    Bs(we, E, es - (Z || 0)),
                    Bs(ze, E, aa),
                    Bs($e, E, aa - (Z || 0))),
                  ct && !yt && k.update(),
                  c && !yt && !Yt && ((Yt = !0), c(k), (Yt = !1));
              }
            }),
            (k.getVelocity = function () {
              return (($() - De) / (at() - Cn)) * 1e3 || 0;
            }),
            (k.endAnimation = function () {
              Pn(k.callbackAnimation),
                r &&
                  (ae
                    ? ae.progress(1)
                    : r.paused()
                    ? z || Pn(r, k.direction < 0, 1)
                    : Pn(r, r.reversed()));
            }),
            (k.labelToScroll = function (H) {
              return (
                (r &&
                  r.labels &&
                  (K || k.refresh() || K) +
                    (r.labels[H] / r.duration()) * ve) ||
                0
              );
            }),
            (k.getTrailing = function (H) {
              var U = Q.indexOf(k),
                G = k.direction > 0 ? Q.slice(0, U).reverse() : Q.slice(U + 1);
              return (
                Rt(H)
                  ? G.filter(function (Z) {
                      return Z.vars.preventOverlaps === H;
                    })
                  : G
              ).filter(function (Z) {
                return k.direction > 0 ? Z.end <= K : Z.start >= ne;
              });
            }),
            (k.update = function (H, U, G) {
              if (!(T && !G && !H)) {
                var Z = yt === !0 ? si : k.scroll(),
                  je = H ? 0 : (Z - K) / ve,
                  le = je < 0 ? 0 : je > 1 ? 1 : je || 0,
                  Oe = k.progress,
                  ct,
                  Me,
                  Ee,
                  me,
                  ai,
                  xe,
                  Wt,
                  yi;
                if (
                  (U &&
                    ((De = _e),
                    (_e = T ? $() : Z),
                    y && ((xr = Zi), (Zi = r && !z ? r.totalProgress() : le))),
                  g &&
                    p &&
                    !st &&
                    !Ss &&
                    jt &&
                    (!le && K < Z + ((Z - De) / (at() - Cn)) * g
                      ? (le = 1e-4)
                      : le === 1 &&
                        ne > Z + ((Z - De) / (at() - Cn)) * g &&
                        (le = 0.9999)),
                  le !== Oe && k.enabled)
                ) {
                  if (
                    ((ct = k.isActive = !!le && le < 1),
                    (Me = !!Oe && Oe < 1),
                    (xe = ct !== Me),
                    (ai = xe || !!le != !!Oe),
                    (k.direction = le > Oe ? 1 : -1),
                    (k.progress = le),
                    ai &&
                      !st &&
                      ((Ee = le && !Oe ? 0 : le === 1 ? 1 : Oe === 1 ? 2 : 3),
                      z &&
                        ((me =
                          (!xe && P[Ee + 1] !== "none" && P[Ee + 1]) || P[Ee]),
                        (yi =
                          r &&
                          (me === "complete" || me === "reset" || me in r)))),
                    A &&
                      (xe || yi) &&
                      (yi || h || !r) &&
                      (ot(A)
                        ? A(k)
                        : k.getTrailing(A).forEach(function (Mr) {
                            return Mr.endAnimation();
                          })),
                    z ||
                      (ae && !st && !Ss
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
                        : r && r.totalProgress(le, !!(st && (B || H)))),
                    p)
                  ) {
                    if ((H && f && (Ae.style[f + E.os2] = Kn), !L))
                      At(Mn(qe + ki * le));
                    else if (ai) {
                      if (
                        ((Wt =
                          !H && le > Oe && ne + 1 > Z && Z + 1 >= mi(D, E)),
                        _)
                      )
                        if (!H && (ct || Wt)) {
                          var Qe = xi(p, !0),
                            et = Z - K;
                          Xu(
                            p,
                            fe,
                            Qe.top + (E === Be ? et : 0) + Ne,
                            Qe.left + (E === Be ? 0 : et) + Ne
                          );
                        } else Xu(p, Ae);
                      Zr(ct || Wt ? Jt : ii),
                        (Pi && le < 1 && ct) ||
                          At(qe + (le === 1 && !Wt ? ki : 0));
                    }
                  }
                  y && !q.tween && !st && !Ss && ni.restart(!0),
                    o &&
                      (xe || (w && le && (le < 1 || !no))) &&
                      Tn(o.targets).forEach(function (Mr) {
                        return Mr.classList[ct || w ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !z && !H && a(k),
                    ai && !st
                      ? (z &&
                          (yi &&
                            (me === "complete"
                              ? r.pause().totalProgress(1)
                              : me === "reset"
                              ? r.restart(!0).pause()
                              : me === "restart"
                              ? r.restart(!0)
                              : r[me]()),
                          a && a(k)),
                        (xe || !no) &&
                          (u && xe && ao(k, u),
                          F[Ee] && ao(k, F[Ee]),
                          w && (le === 1 ? k.kill(!1, 1) : (F[Ee] = 0)),
                          xe ||
                            ((Ee = le === 1 ? 1 : 3), F[Ee] && ao(k, F[Ee]))),
                        x &&
                          !ct &&
                          Math.abs(k.getVelocity()) > (kn(x) ? x : 2500) &&
                          (Pn(k.callbackAnimation),
                          ae
                            ? ae.progress(1)
                            : Pn(r, me === "reverse" ? 1 : !le, 1)))
                      : z && a && !st && a(k);
                }
                if (nn) {
                  var dt = T ? (Z / T.duration()) * (T._caScrollDist || 0) : Z;
                  na(dt + (R._isFlipped ? 1 : 0)), nn(dt);
                }
                an && an((-Z / T.duration()) * (T._caScrollDist || 0));
              }
            }),
            (k.enable = function (H, U) {
              k.enabled ||
                ((k.enabled = !0),
                Ve(D, "resize", Rn),
                M || Ve(D, "scroll", Ur),
                Y && Ve(n, "refreshInit", Y),
                H !== !1 && ((k.progress = N = 0), (_e = De = re = $())),
                U !== !1 && k.refresh());
            }),
            (k.getTween = function (H) {
              return H && q ? q.tween : ae;
            }),
            (k.setPositions = function (H, U, G, Z) {
              if (T) {
                var je = T.scrollTrigger,
                  le = T.duration(),
                  Oe = je.end - je.start;
                (H = je.start + (Oe * H) / le), (U = je.start + (Oe * U) / le);
              }
              k.refresh(
                !1,
                !1,
                {
                  start: Au(H, G && !!k._startClamp),
                  end: Au(U, G && !!k._endClamp),
                },
                Z
              ),
                k.update();
            }),
            (k.adjustPinSpacing = function (H) {
              if (Re && H) {
                var U = Re.indexOf(E.d) + 1;
                (Re[U] = parseFloat(Re[U]) + H + Ne),
                  (Re[1] = parseFloat(Re[1]) + H + Ne),
                  Zr(Re);
              }
            }),
            (k.disable = function (H, U) {
              if (
                k.enabled &&
                (H !== !1 && k.revert(!0, !0),
                (k.enabled = k.isActive = !1),
                U || (ae && ae.pause()),
                (si = 0),
                ce && (ce.uncache = 1),
                Y && We(n, "refreshInit", Y),
                ni && (ni.pause(), q.tween && q.tween.kill() && (q.tween = 0)),
                !M)
              ) {
                for (var G = Q.length; G--; )
                  if (Q[G].scroller === D && Q[G] !== k) return;
                We(D, "resize", Rn), M || We(D, "scroll", Ur);
              }
            }),
            (k.kill = function (H, U) {
              k.disable(H, U), ae && !U && ae.kill(), l && delete fo[l];
              var G = Q.indexOf(k);
              G >= 0 && Q.splice(G, 1),
                G === wt && Fs > 0 && wt--,
                (G = 0),
                Q.forEach(function (Z) {
                  return Z.scroller === k.scroller && (G = 1);
                }),
                G || yt || (k.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  H && r.revert({ kill: !1 }),
                  U || r.kill()),
                we &&
                  [we, $e, R, ze].forEach(function (Z) {
                    return Z.parentNode && Z.parentNode.removeChild(Z);
                  }),
                Bn === k && (Bn = 0),
                p &&
                  (ce && (ce.uncache = 1),
                  (G = 0),
                  Q.forEach(function (Z) {
                    return Z.pin === p && G++;
                  }),
                  G || (ce.spacer = 0)),
                i.onKill && i.onKill(k);
            }),
            Q.push(k),
            k.enable(!1, !1),
            Oi && Oi(k),
            r && r.add && !ve)
          ) {
            var de = k.update;
            (k.update = function () {
              (k.update = de), ee.cache++, K || ne || k.refresh();
            }),
              V.delayedCall(0.01, k.update),
              (ve = 0.01),
              (K = ne = 0);
          } else k.refresh();
          p && Nf();
        }),
        (n.register = function (i) {
          return (
            Wr ||
              ((V = i || Ou()),
              Pu() && window.document && n.enable(),
              (Wr = An)),
            Wr
          );
        }),
        (n.defaults = function (i) {
          if (i) for (var r in i) Ms[r] = i[r];
          return Ms;
        }),
        (n.disable = function (i, r) {
          (An = 0),
            Q.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            We(te, "wheel", Ur),
            We(ge, "scroll", Ur),
            clearInterval(_s),
            We(ge, "touchcancel", hi),
            We(fe, "touchstart", hi),
            Cs(We, ge, "pointerdown,touchstart,mousedown", Mu),
            Cs(We, ge, "pointerup,touchend,mouseup", ku),
            bs.kill(),
            Ts(We);
          for (var s = 0; s < ee.length; s += 3)
            As(We, ee[s], ee[s + 1]), As(We, ee[s], ee[s + 2]);
        }),
        (n.enable = function () {
          if (
            ((te = window),
            (ge = document),
            (zt = ge.documentElement),
            (fe = ge.body),
            V &&
              ((Tn = V.utils.toArray),
              (xn = V.utils.clamp),
              (eo = V.core.context || hi),
              (Ja = V.core.suppressOverwrites || hi),
              (to = te.history.scrollRestoration || "auto"),
              (mo = te.pageYOffset || 0),
              V.core.globals("ScrollTrigger", n),
              fe))
          ) {
            (An = 1),
              (qr = document.createElement("div")),
              (qr.style.height = "100vh"),
              (qr.style.position = "absolute"),
              Gu(),
              Of(),
              Pe.register(V),
              (n.isTouch = Pe.isTouch),
              (Gi =
                Pe.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Qa = Pe.isTouch === 1),
              Ve(te, "wheel", Ur),
              (Za = [te, ge, zt, fe]),
              V.matchMedia
                ? ((n.matchMedia = function (u) {
                    var c = V.matchMedia(),
                      h;
                    for (h in u) c.add(h, u[h]);
                    return c;
                  }),
                  V.addEventListener("matchMediaInit", function () {
                    return ho();
                  }),
                  V.addEventListener("matchMediaRevert", function () {
                    return Yu();
                  }),
                  V.addEventListener("matchMedia", function () {
                    gr(0, 1), hr("matchMedia");
                  }),
                  V.matchMedia().add("(orientation: portrait)", function () {
                    return po(), po;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              po(),
              Ve(ge, "scroll", Ur);
            var i = fe.hasAttribute("style"),
              r = fe.style,
              s = r.borderTopStyle,
              a = V.core.Animation.prototype,
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
                _s = setInterval($u, 250),
                V.delayedCall(0.5, function () {
                  return (Ss = 0);
                }),
                Ve(ge, "touchcancel", hi),
                Ve(fe, "touchstart", hi),
                Cs(Ve, ge, "pointerdown,touchstart,mousedown", Mu),
                Cs(Ve, ge, "pointerup,touchend,mouseup", ku),
                Ka = V.utils.checkPrefix("transform"),
                Ls.push(Ka),
                Wr = at(),
                bs = V.delayedCall(0.2, gr).pause(),
                Gr = [
                  ge,
                  "visibilitychange",
                  function () {
                    var u = te.innerWidth,
                      c = te.innerHeight;
                    ge.hidden
                      ? ((_u = u), (Du = c))
                      : (_u !== u || Du !== c) && Rn();
                  },
                  ge,
                  "DOMContentLoaded",
                  gr,
                  te,
                  "load",
                  gr,
                  te,
                  "resize",
                  Rn,
                ],
                Ts(Ve),
                Q.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < ee.length;
              l += 3
            )
              As(We, ee[l], ee[l + 1]), As(We, ee[l], ee[l + 2]);
          }
        }),
        (n.config = function (i) {
          "limitCallbacks" in i && (no = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(_s)) || ((_s = r) && setInterval($u, r)),
            "ignoreMobileResize" in i &&
              (Qa = n.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (Ts(We) || Ts(Ve, i.autoRefreshEvents || "none"),
              (Su = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (n.scrollerProxy = function (i, r) {
          var s = xt(i),
            a = ee.indexOf(s),
            o = ur(s);
          ~a && ee.splice(a, o ? 6 : 2),
            r && (o ? pi.unshift(te, r, fe, r, zt, r) : pi.unshift(s, r));
        }),
        (n.clearMatchMedia = function (i) {
          Q.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (i, r, s) {
          var a = (Rt(i) ? xt(i) : i).getBoundingClientRect(),
            o = a[s ? dr : fr] * r || 0;
          return s
            ? a.right - o > 0 && a.left + o < te.innerWidth
            : a.bottom - o > 0 && a.top + o < te.innerHeight;
        }),
        (n.positionInViewport = function (i, r, s) {
          Rt(i) && (i = xt(i));
          var a = i.getBoundingClientRect(),
            o = a[s ? dr : fr],
            l =
              r == null
                ? o / 2
                : r in ks
                ? ks[r] * o
                : ~r.indexOf("%")
                ? (parseFloat(r) * o) / 100
                : parseFloat(r) || 0;
          return s
            ? (a.left + l) / te.innerWidth
            : (a.top + l) / te.innerHeight;
        }),
        (n.killAll = function (i) {
          if (
            (Q.slice(0).forEach(function (s) {
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
  (ie.version = "3.12.7"),
    (ie.saveStyles = function (n) {
      return n
        ? Tn(n).forEach(function (e) {
            if (e && e.style) {
              var t = Bt.indexOf(e);
              t >= 0 && Bt.splice(t, 5),
                Bt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  V.core.getCache(e),
                  eo()
                );
            }
          })
        : Bt;
    }),
    (ie.revert = function (n, e) {
      return ho(!n, e);
    }),
    (ie.create = function (n, e) {
      return new ie(n, e);
    }),
    (ie.refresh = function (n) {
      return n ? Rn(!0) : (Wr || ie.register()) && gr(!0);
    }),
    (ie.update = function (n) {
      return ++ee.cache && Ci(n === !0 ? 2 : 0);
    }),
    (ie.clearScrollMemory = Vu),
    (ie.maxScroll = function (n, e) {
      return mi(n, e ? gt : Be);
    }),
    (ie.getScrollFunc = function (n, e) {
      return Wi(xt(n), e ? gt : Be);
    }),
    (ie.getById = function (n) {
      return fo[n];
    }),
    (ie.getAll = function () {
      return Q.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
      });
    }),
    (ie.isScrolling = function () {
      return !!jt;
    }),
    (ie.snapDirectional = co),
    (ie.addEventListener = function (n, e) {
      var t = pr[n] || (pr[n] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (ie.removeEventListener = function (n, e) {
      var t = pr[n],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (ie.batch = function (n, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        s = e.batchMax || 1e9,
        a = function (u, c) {
          var h = [],
            m = [],
            p = V.delayedCall(r, function () {
              c(h, m), (h = []), (m = []);
            }).pause();
          return function (f) {
            h.length || p.restart(!0),
              h.push(f.trigger),
              m.push(f),
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
          Ve(ie, "refresh", function () {
            return (s = e.batchMax());
          })),
        Tn(n).forEach(function (l) {
          var u = {};
          for (o in i) u[o] = i[o];
          (u.trigger = l), t.push(ie.create(u));
        }),
        t
      );
    });
  var Ku = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    vo = function n(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Pe.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === zt && n(fe, t);
    },
    Ns = { auto: 1, scroll: 1 },
    Wf = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = s._gsap || V.core.getCache(s),
        o = at(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== fe &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(Ns[(l = Ut(s)).overflowY] || Ns[l.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== i &&
          !ur(s) &&
          (Ns[(l = Ut(s)).overflowY] || Ns[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Ju = function (e, t, i, r) {
      return Pe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && Wf),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Ve(ge, Pe.eventTypes[0], ec, !1, !0);
        },
        onDisable: function () {
          return We(ge, Pe.eventTypes[0], ec, !0);
        },
      });
    },
    Gf = /(input|label|select|textarea)/i,
    Qu,
    ec = function (e) {
      var t = Gf.test(e.target.tagName);
      (t || Qu) && ((e._gsapAllow = !0), (Qu = t));
    },
    qf = function (e) {
      cr(e) || (e = {}),
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
        u = xt(e.target) || zt,
        c = V.core.globals().ScrollSmoother,
        h = c && c.get(),
        m =
          Gi &&
          ((e.content && xt(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = Wi(u, Be),
        f = Wi(u, gt),
        d = 1,
        g =
          (Pe.isTouch && te.visualViewport
            ? te.visualViewport.scale * te.visualViewport.width
            : te.outerWidth) / te.innerWidth,
        b = 0,
        v = ot(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        w,
        y,
        _ = Ju(u, e.type, !0, s),
        C = function () {
          return (y = !1);
        },
        T = hi,
        x = hi,
        A = function () {
          (l = mi(u, Be)),
            (x = xn(Gi ? 1 : 0, l)),
            i && (T = xn(0, mi(u, gt))),
            (w = mr);
        },
        E = function () {
          (m._gsap.y = Mn(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        z = function () {
          if (y) {
            requestAnimationFrame(C);
            var I = Mn(o.deltaY / 2),
              O = x(p.v - I);
            if (m && O !== p.v + p.offset) {
              p.offset = O - p.v;
              var k = Mn((parseFloat(m && m._gsap.y) || 0) - p.offset);
              (m.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                k +
                ", 0, 1)"),
                (m._gsap.y = k + "px"),
                (p.cacheID = ee.cache),
                Ci();
            }
            return !0;
          }
          p.offset && E(), (y = !0);
        },
        D,
        S,
        M,
        L,
        F = function () {
          A(),
            D.isActive() &&
              D.vars.scrollY > l &&
              (p() > l ? D.progress(1) && p(l) : D.resetTo("scrollY", l));
        };
      return (
        m && V.set(m, { y: "+=0" }),
        (e.ignoreCheck = function (P) {
          return (
            (Gi && P.type === "touchmove" && z()) ||
            (d > 1.05 && P.type !== "touchstart") ||
            o.isGesturing ||
            (P.touches && P.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          y = !1;
          var P = d;
          (d = Mn(((te.visualViewport && te.visualViewport.scale) || 1) / g)),
            D.pause(),
            P !== d && vo(u, d > 1.01 ? !0 : i ? !1 : "x"),
            (S = f()),
            (M = p()),
            A(),
            (w = mr);
        }),
        (e.onRelease = e.onGestureStart =
          function (P, I) {
            if ((p.offset && E(), !I)) L.restart(!0);
            else {
              ee.cache++;
              var O = v(),
                k,
                Y;
              i &&
                ((k = f()),
                (Y = k + (O * 0.05 * -P.velocityX) / 0.227),
                (O *= Ku(f, k, Y, mi(u, gt))),
                (D.vars.scrollX = T(Y))),
                (k = p()),
                (Y = k + (O * 0.05 * -P.velocityY) / 0.227),
                (O *= Ku(p, k, Y, mi(u, Be))),
                (D.vars.scrollY = x(Y)),
                D.invalidate().duration(O).play(0.01),
                ((Gi && D.vars.scrollY >= l) || k >= l - 1) &&
                  V.to({}, { onUpdate: F, duration: O });
            }
            a && a(P);
          }),
        (e.onWheel = function () {
          D._ts && D.pause(), at() - b > 1e3 && ((w = 0), (b = at()));
        }),
        (e.onChange = function (P, I, O, k, Y) {
          if (
            (mr !== w && A(),
            I && i && f(T(k[2] === I ? S + (P.startX - P.x) : f() + I - k[1])),
            O)
          ) {
            p.offset && E();
            var X = Y[2] === O,
              ue = X ? M + P.startY - P.y : p() + O - Y[1],
              re = x(ue);
            X && ue !== re && (M += re - ue), p(re);
          }
          (O || I) && Ci();
        }),
        (e.onEnable = function () {
          vo(u, i ? !1 : "x"),
            ie.addEventListener("refresh", F),
            Ve(te, "resize", F),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = f.smooth = !1)),
            _.enable();
        }),
        (e.onDisable = function () {
          vo(u, !0),
            We(te, "resize", F),
            ie.removeEventListener("refresh", F),
            _.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Pe(e)),
        (o.iOS = Gi),
        Gi && !p() && p(1),
        Gi && V.ticker.add(hi),
        (L = o._dc),
        (D = V.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Uu(p, p(), function () {
              return D.pause();
            }),
          },
          onUpdate: Ci,
          onComplete: L.vars.onComplete,
        })),
        o
      );
    };
  (ie.sort = function (n) {
    if (ot(n)) return Q.sort(n);
    var e = te.pageYOffset || 0;
    return (
      ie.getAll().forEach(function (t) {
        return (t._sortY = t.trigger
          ? e + t.trigger.getBoundingClientRect().top
          : t.start + te.innerHeight);
      }),
      Q.sort(
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
    (ie.observe = function (n) {
      return new Pe(n);
    }),
    (ie.normalizeScroll = function (n) {
      if (typeof n > "u") return vt;
      if (n === !0 && vt) return vt.enable();
      if (n === !1) {
        vt && vt.kill(), (vt = n);
        return;
      }
      var e = n instanceof Pe ? n : qf(n);
      return (
        vt && vt.target === e.target && vt.kill(), ur(e.target) && (vt = e), e
      );
    }),
    (ie.core = {
      _getVelocityProp: Ua,
      _inputObserver: Ju,
      _scrollers: ee,
      _proxies: pi,
      bridge: {
        ss: function () {
          jt || hr("scrollStart"), (jt = at());
        },
        ref: function () {
          return st;
        },
      },
    }),
    Ou() && V.registerPlugin(ie);
  var jf = "1.2.3";
  function tc(n, e, t) {
    return Math.max(n, Math.min(e, t));
  }
  function Xf(n, e, t) {
    return (1 - t) * n + t * e;
  }
  function Uf(n, e, t, i) {
    return Xf(n, e, 1 - Math.exp(-t * i));
  }
  function Zf(n, e) {
    return ((n % e) + e) % e;
  }
  var Kf = class {
    constructor() {
      W(this, "isRunning", !1);
      W(this, "value", 0);
      W(this, "from", 0);
      W(this, "to", 0);
      W(this, "currentTime", 0);
      W(this, "lerp");
      W(this, "duration");
      W(this, "easing");
      W(this, "onUpdate");
    }
    advance(n) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += n;
        const i = tc(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = Uf(this.value, this.to, this.lerp * 60, n)),
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
  function Jf(n, e) {
    let t;
    return function (...i) {
      let r = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), n.apply(r, i);
        }, e));
    };
  }
  var Qf = class {
      constructor(n, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
        W(this, "width", 0);
        W(this, "height", 0);
        W(this, "scrollHeight", 0);
        W(this, "scrollWidth", 0);
        W(this, "debouncedResize");
        W(this, "wrapperResizeObserver");
        W(this, "contentResizeObserver");
        W(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        W(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        W(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = n),
          (this.content = e),
          t &&
            ((this.debouncedResize = Jf(this.resize, i)),
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
    ic = class {
      constructor() {
        W(this, "events", {});
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
    rc = 100 / 6,
    qi = { passive: !1 },
    ep = class {
      constructor(n, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        W(this, "touchStart", { x: 0, y: 0 });
        W(this, "lastDelta", { x: 0, y: 0 });
        W(this, "window", { width: 0, height: 0 });
        W(this, "emitter", new ic());
        W(this, "onTouchStart", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
            ? n.targetTouches[0]
            : n;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: n });
        });
        W(this, "onTouchMove", (n) => {
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
        W(this, "onTouchEnd", (n) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: n,
          });
        });
        W(this, "onWheel", (n) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = n;
          const r = i === 1 ? rc : i === 2 ? this.window.width : 1,
            s = i === 1 ? rc : i === 2 ? this.window.height : 1;
          (e *= r),
            (t *= s),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: n });
        });
        W(this, "onWindowResize", () => {
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
    tp = class {
      constructor({
        wrapper: n = window,
        content: e = document.documentElement,
        eventsTarget: t = n,
        smoothWheel: i = !0,
        syncTouch: r = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaMultiplier: a = 35,
        duration: o,
        easing: l = (C) => Math.min(1, 1.001 - Math.pow(2, -10 * C)),
        lerp: u = 0.1,
        infinite: c = !1,
        orientation: h = "vertical",
        gestureOrientation: m = "vertical",
        touchMultiplier: p = 1,
        wheelMultiplier: f = 1,
        autoResize: d = !0,
        prevent: g,
        virtualScroll: b,
        overscroll: v = !0,
        autoRaf: w = !1,
        anchors: y = !1,
        __experimental__naiveDimensions: _ = !1,
      } = {}) {
        W(this, "_isScrolling", !1);
        W(this, "_isStopped", !1);
        W(this, "_isLocked", !1);
        W(this, "_preventNextNativeScrollEvent", !1);
        W(this, "_resetVelocityTimeout", null);
        W(this, "__rafID", null);
        W(this, "isTouching");
        W(this, "time", 0);
        W(this, "userData", {});
        W(this, "lastVelocity", 0);
        W(this, "velocity", 0);
        W(this, "direction", 0);
        W(this, "options");
        W(this, "targetScroll");
        W(this, "animatedScroll");
        W(this, "animate", new Kf());
        W(this, "emitter", new ic());
        W(this, "dimensions");
        W(this, "virtualScroll");
        W(this, "onScrollEnd", (n) => {
          n instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              n.stopPropagation());
        });
        W(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        W(this, "onClick", (n) => {
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
        W(this, "onPointerDown", (n) => {
          n.button === 1 && this.reset();
        });
        W(this, "onVirtualScroll", (n) => {
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
          let u = i.composedPath();
          u = u.slice(0, u.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            u.find((g) => {
              var b, v, w;
              return (
                g instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(g))) ||
                  ((b = g.hasAttribute) == null
                    ? void 0
                    : b.call(g, "data-lenis-prevent")) ||
                  (r &&
                    ((v = g.hasAttribute) == null
                      ? void 0
                      : v.call(g, "data-lenis-prevent-touch"))) ||
                  (s &&
                    ((w = g.hasAttribute) == null
                      ? void 0
                      : w.call(g, "data-lenis-prevent-wheel"))))
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
            d = r && i.type === "touchend" && Math.abs(m) > 5;
          d && (m = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + m, {
              programmatic: !1,
              ...(p
                ? { lerp: d ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            });
        });
        W(this, "onNativeScroll", () => {
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
        W(this, "raf", (n) => {
          const e = n - (this.time || n);
          (this.time = n),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = jf),
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
            lerp: u,
            infinite: c,
            gestureOrientation: m,
            orientation: h,
            touchMultiplier: p,
            wheelMultiplier: f,
            autoResize: d,
            prevent: g,
            virtualScroll: b,
            overscroll: v,
            autoRaf: w,
            anchors: y,
            __experimental__naiveDimensions: _,
          }),
          (this.dimensions = new Qf(n, e, { autoResize: d })),
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
          (this.virtualScroll = new ep(t, {
            touchMultiplier: p,
            wheelMultiplier: f,
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
          force: u = !1,
          programmatic: c = !0,
          userData: h,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !u)) {
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
                const f = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? f.left : f.top;
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
                ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                : (n = tc(0, n, this.limit)),
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
            c || (this.targetScroll = n),
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
                    c && (this.targetScroll = m),
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
          ? Zf(this.animatedScroll, this.limit)
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
  class ip {
    constructor() {
      (this.lenis = new tp({})),
        (window.lenis = this.lenis),
        this.lenis.on("scroll", ie.update),
        nt.ticker.add((e) => {
          this.lenis.raf(e * 1e3);
        }),
        nt.ticker.lagSmoothing(0),
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
  const rp = () => new ip();
  function np() {
    console.log("Initializing general animations"),
      rp(),
      vf(),
      yf(),
      bf(),
      Df(),
      Sf(),
      xf(),
      Af();
  }
  class sp {
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
  const ap = () => {
    new sp();
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
  function yo(n) {
    return n &&
      n.__esModule &&
      Object.prototype.hasOwnProperty.call(n, "default")
      ? n.default
      : n;
  }
  function bo(n, e) {
    return n((e = { exports: {} }), e.exports), e.exports;
  }
  var vr = bo(function (n, e) {
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
  yo(vr);
  var op = yo(
    bo(function (n, e) {
      var t =
          (wr && wr.__awaiter) ||
          function (c, h, m, p) {
            return new (m || (m = Promise))(function (f, d) {
              function g(w) {
                try {
                  v(p.next(w));
                } catch (y) {
                  d(y);
                }
              }
              function b(w) {
                try {
                  v(p.throw(w));
                } catch (y) {
                  d(y);
                }
              }
              function v(w) {
                w.done
                  ? f(w.value)
                  : new m(function (y) {
                      y(w.value);
                    }).then(g, b);
              }
              v((p = p.apply(c, h || [])).next());
            });
          },
        i =
          (wr && wr.__generator) ||
          function (c, h) {
            var m,
              p,
              f,
              d,
              g = {
                label: 0,
                sent: function () {
                  if (1 & f[0]) throw f[1];
                  return f[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (d = { next: b(0), throw: b(1), return: b(2) }),
              typeof Symbol == "function" &&
                (d[Symbol.iterator] = function () {
                  return this;
                }),
              d
            );
            function b(v) {
              return function (w) {
                return (function (y) {
                  if (m) throw new TypeError("Generator is already executing.");
                  for (; g; )
                    try {
                      if (
                        ((m = 1),
                        p &&
                          (f =
                            2 & y[0]
                              ? p.return
                              : y[0]
                              ? p.throw || ((f = p.return) && f.call(p), 0)
                              : p.next) &&
                          !(f = f.call(p, y[1])).done)
                      )
                        return f;
                      switch (((p = 0), f && (y = [2 & y[0], f.value]), y[0])) {
                        case 0:
                        case 1:
                          f = y;
                          break;
                        case 4:
                          return g.label++, { value: y[1], done: !1 };
                        case 5:
                          g.label++, (p = y[1]), (y = [0]);
                          continue;
                        case 7:
                          (y = g.ops.pop()), g.trys.pop();
                          continue;
                        default:
                          if (
                            ((f = g.trys),
                            !(
                              (f = f.length > 0 && f[f.length - 1]) ||
                              (y[0] !== 6 && y[0] !== 2)
                            ))
                          ) {
                            g = 0;
                            continue;
                          }
                          if (
                            y[0] === 3 &&
                            (!f || (y[1] > f[0] && y[1] < f[3]))
                          ) {
                            g.label = y[1];
                            break;
                          }
                          if (y[0] === 6 && g.label < f[1]) {
                            (g.label = f[1]), (f = y);
                            break;
                          }
                          if (f && g.label < f[2]) {
                            (g.label = f[2]), g.ops.push(y);
                            break;
                          }
                          f[2] && g.ops.pop(), g.trys.pop();
                          continue;
                      }
                      y = h.call(c, g);
                    } catch (_) {
                      (y = [6, _]), (p = 0);
                    } finally {
                      m = f = 0;
                    }
                  if (5 & y[0]) throw y[1];
                  return { value: y[0] ? y[1] : void 0, done: !0 };
                })([v, w]);
              };
            }
          },
        r = wr;
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = "browser-tabs-lock-key",
        a = {
          key: function (c) {
            return t(r, void 0, void 0, function () {
              return i(this, function (h) {
                throw new Error("Unsupported");
              });
            });
          },
          getItem: function (c) {
            return t(r, void 0, void 0, function () {
              return i(this, function (h) {
                throw new Error("Unsupported");
              });
            });
          },
          clear: function () {
            return t(r, void 0, void 0, function () {
              return i(this, function (c) {
                return [2, window.localStorage.clear()];
              });
            });
          },
          removeItem: function (c) {
            return t(r, void 0, void 0, function () {
              return i(this, function (h) {
                throw new Error("Unsupported");
              });
            });
          },
          setItem: function (c, h) {
            return t(r, void 0, void 0, function () {
              return i(this, function (m) {
                throw new Error("Unsupported");
              });
            });
          },
          keySync: function (c) {
            return window.localStorage.key(c);
          },
          getItemSync: function (c) {
            return window.localStorage.getItem(c);
          },
          clearSync: function () {
            return window.localStorage.clear();
          },
          removeItemSync: function (c) {
            return window.localStorage.removeItem(c);
          },
          setItemSync: function (c, h) {
            return window.localStorage.setItem(c, h);
          },
        };
      function o(c) {
        return new Promise(function (h) {
          return setTimeout(h, c);
        });
      }
      function l(c) {
        for (
          var h =
              "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
            m = "",
            p = 0;
          p < c;
          p++
        )
          m += h[Math.floor(Math.random() * h.length)];
        return m;
      }
      var u = (function () {
        function c(h) {
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
            c.waiters === void 0 && (c.waiters = []);
        }
        return (
          (c.prototype.acquireLock = function (h, m) {
            return (
              m === void 0 && (m = 5e3),
              t(this, void 0, void 0, function () {
                var p, f, d, g, b, v, w;
                return i(this, function (y) {
                  switch (y.label) {
                    case 0:
                      (p = Date.now() + l(4)),
                        (f = Date.now() + m),
                        (d = s + "-" + h),
                        (g =
                          this.storageHandler === void 0
                            ? a
                            : this.storageHandler),
                        (y.label = 1);
                    case 1:
                      return Date.now() < f ? [4, o(30)] : [3, 8];
                    case 2:
                      return (
                        y.sent(),
                        g.getItemSync(d) !== null
                          ? [3, 5]
                          : ((b = this.id + "-" + h + "-" + p),
                            [4, o(Math.floor(25 * Math.random()))])
                      );
                    case 3:
                      return (
                        y.sent(),
                        g.setItemSync(
                          d,
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
                        (v = g.getItemSync(d)) !== null &&
                        (w = JSON.parse(v)).id === this.id &&
                        w.iat === p
                          ? (this.acquiredIatSet.add(p),
                            this.refreshLockWhileAcquired(d, p),
                            [2, !0])
                          : [3, 7]
                      );
                    case 5:
                      return (
                        c.lockCorrector(
                          this.storageHandler === void 0
                            ? a
                            : this.storageHandler
                        ),
                        [4, this.waitForSomethingToChange(f)]
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
          (c.prototype.refreshLockWhileAcquired = function (h, m) {
            return t(this, void 0, void 0, function () {
              var p = this;
              return i(this, function (f) {
                return (
                  setTimeout(function () {
                    return t(p, void 0, void 0, function () {
                      var d, g, b;
                      return i(this, function (v) {
                        switch (v.label) {
                          case 0:
                            return [4, vr.default().lock(m)];
                          case 1:
                            return (
                              v.sent(),
                              this.acquiredIatSet.has(m)
                                ? ((d =
                                    this.storageHandler === void 0
                                      ? a
                                      : this.storageHandler),
                                  (g = d.getItemSync(h)) === null
                                    ? (vr.default().unlock(m), [2])
                                    : (((b = JSON.parse(g)).timeRefreshed =
                                        Date.now()),
                                      d.setItemSync(h, JSON.stringify(b)),
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
          (c.prototype.waitForSomethingToChange = function (h) {
            return t(this, void 0, void 0, function () {
              return i(this, function (m) {
                switch (m.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (p) {
                        var f = !1,
                          d = Date.now(),
                          g = !1;
                        function b() {
                          if (
                            (g ||
                              (window.removeEventListener("storage", b),
                              c.removeFromWaiting(b),
                              clearTimeout(v),
                              (g = !0)),
                            !f)
                          ) {
                            f = !0;
                            var w = 50 - (Date.now() - d);
                            w > 0 ? setTimeout(p, w) : p(null);
                          }
                        }
                        window.addEventListener("storage", b),
                          c.addToWaiting(b);
                        var v = setTimeout(b, Math.max(0, h - Date.now()));
                      }),
                    ];
                  case 1:
                    return m.sent(), [2];
                }
              });
            });
          }),
          (c.addToWaiting = function (h) {
            this.removeFromWaiting(h),
              c.waiters !== void 0 && c.waiters.push(h);
          }),
          (c.removeFromWaiting = function (h) {
            c.waiters !== void 0 &&
              (c.waiters = c.waiters.filter(function (m) {
                return m !== h;
              }));
          }),
          (c.notifyWaiters = function () {
            c.waiters !== void 0 &&
              c.waiters.slice().forEach(function (h) {
                return h();
              });
          }),
          (c.prototype.releaseLock = function (h) {
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
          (c.prototype.releaseLock__private__ = function (h) {
            return t(this, void 0, void 0, function () {
              var m, p, f, d;
              return i(this, function (g) {
                switch (g.label) {
                  case 0:
                    return (
                      (m =
                        this.storageHandler === void 0
                          ? a
                          : this.storageHandler),
                      (p = s + "-" + h),
                      (f = m.getItemSync(p)) === null
                        ? [2]
                        : (d = JSON.parse(f)).id !== this.id
                        ? [3, 2]
                        : [4, vr.default().lock(d.iat)]
                    );
                  case 1:
                    g.sent(),
                      this.acquiredIatSet.delete(d.iat),
                      m.removeItemSync(p),
                      vr.default().unlock(d.iat),
                      c.notifyWaiters(),
                      (g.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (c.lockCorrector = function (h) {
            for (var m = Date.now() - 5e3, p = h, f = [], d = 0; ; ) {
              var g = p.keySync(d);
              if (g === null) break;
              f.push(g), d++;
            }
            for (var b = !1, v = 0; v < f.length; v++) {
              var w = f[v];
              if (w.includes(s)) {
                var y = p.getItemSync(w);
                if (y !== null) {
                  var _ = JSON.parse(y);
                  ((_.timeRefreshed === void 0 && _.timeAcquired < m) ||
                    (_.timeRefreshed !== void 0 && _.timeRefreshed < m)) &&
                    (p.removeItemSync(w), (b = !0));
                }
              }
            }
            b && c.notifyWaiters();
          }),
          (c.waiters = void 0),
          c
        );
      })();
      e.default = u;
    })
  );
  const lp = { timeoutInSeconds: 60 },
    nc = { name: "auth0-spa-js", version: "2.1.3" },
    sc = () => Date.now();
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
  class _o extends lt {
    constructor(e, t, i, r = null) {
      super(e, t),
        (this.state = i),
        (this.appState = r),
        Object.setPrototypeOf(this, _o.prototype);
    }
  }
  class Nn extends lt {
    constructor() {
      super("timeout", "Timeout"), Object.setPrototypeOf(this, Nn.prototype);
    }
  }
  class Do extends Nn {
    constructor(e) {
      super(), (this.popup = e), Object.setPrototypeOf(this, Do.prototype);
    }
  }
  class Eo extends lt {
    constructor(e) {
      super("cancelled", "Popup closed"),
        (this.popup = e),
        Object.setPrototypeOf(this, Eo.prototype);
    }
  }
  class So extends lt {
    constructor(e, t, i) {
      super(e, t),
        (this.mfa_token = i),
        Object.setPrototypeOf(this, So.prototype);
    }
  }
  class $s extends lt {
    constructor(e, t) {
      super(
        "missing_refresh_token",
        `Missing Refresh Token (audience: '${ac(e, ["default"])}', scope: '${ac(
          t
        )}')`
      ),
        (this.audience = e),
        (this.scope = t),
        Object.setPrototypeOf(this, $s.prototype);
    }
  }
  function ac(n, e = []) {
    return n && !e.includes(n) ? n : "";
  }
  const Hs = () => window.crypto,
    To = () => {
      const n =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
      let e = "";
      return (
        Array.from(Hs().getRandomValues(new Uint8Array(43))).forEach(
          (t) => (e += n[t % n.length])
        ),
        e
      );
    },
    oc = (n) => btoa(n),
    xo = (n) => {
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
    lc = (n) =>
      ((e) =>
        decodeURIComponent(
          atob(e)
            .split("")
            .map((t) => "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        ))(n.replace(/_/g, "/").replace(/-/g, "+")),
    up = async (n, e) => {
      const t = await fetch(n, e);
      return { ok: t.ok, json: await t.json() };
    },
    cp = async (n, e, t) => {
      const i = new AbortController();
      let r;
      return (
        (e.signal = i.signal),
        Promise.race([
          up(n, e),
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
    dp = async (n, e, t, i, r, s, a) => {
      return (
        (o = {
          auth: { audience: e, scope: t },
          timeout: r,
          fetchUrl: n,
          fetchOptions: i,
          useFormData: a,
        }),
        (l = s),
        new Promise(function (u, c) {
          const h = new MessageChannel();
          (h.port1.onmessage = function (m) {
            m.data.error ? c(new Error(m.data.error)) : u(m.data),
              h.port1.close();
          }),
            l.postMessage(o, [h.port2]);
        })
      );
      var o, l;
    },
    fp = async (n, e, t, i, r, s, a = 1e4) =>
      r ? dp(n, e, t, i, a, r, s) : cp(n, i, a);
  async function pp(n, e) {
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
    const u = o ? xo(l) : JSON.stringify(l);
    return await (async function (c, h, m, p, f, d, g) {
      let b,
        v = null;
      for (let x = 0; x < 3; x++)
        try {
          (b = await fp(c, m, p, f, d, g, h)), (v = null);
          break;
        } catch (A) {
          v = A;
        }
      if (v) throw v;
      const w = b.json,
        { error: y, error_description: _ } = w,
        C = gi(w, ["error", "error_description"]),
        { ok: T } = b;
      if (!T) {
        const x = _ || `HTTP error. Unable to fetch ${c}`;
        throw y === "mfa_required"
          ? new So(y, x, C.mfa_token)
          : y === "missing_refresh_token"
          ? new $s(m, p)
          : new lt(y || "request_error", x);
      }
      return C;
    })(
      `${t}/oauth/token`,
      i,
      r || "default",
      s,
      {
        method: "POST",
        body: u,
        headers: {
          "Content-Type": o
            ? "application/x-www-form-urlencoded"
            : "application/json",
          "Auth0-Client": btoa(JSON.stringify(a || nc)),
        },
      },
      e,
      o
    );
  }
  const Ys = (...n) => {
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
  class hp {
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
  class uc {
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
  class mp {
    constructor(e, t, i) {
      (this.cache = e), (this.keyManifest = t), (this.nowProvider = i || sc);
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
          l = s.scope && o.reduce((u, c) => u && a.has(c), !0);
        return (
          s.prefix === "@@auth0spajs@@" &&
          s.clientId === e.clientId &&
          s.audience === e.audience &&
          l
        );
      })[0];
    }
  }
  class gp {
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
  const $n = (n) => typeof n == "number",
    wp = [
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
    vp = (n) => {
      if (!n.id_token) throw new Error("ID token is required but missing");
      const e = ((s) => {
        const a = s.split("."),
          [o, l, u] = a;
        if (a.length !== 3 || !o || !l || !u)
          throw new Error("ID token could not be decoded");
        const c = JSON.parse(lc(l)),
          h = { __raw: s },
          m = {};
        return (
          Object.keys(c).forEach((p) => {
            (h[p] = c[p]), wp.includes(p) || (m[p] = c[p]);
          }),
          {
            encoded: { header: o, payload: l, signature: u },
            header: JSON.parse(lc(o)),
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
      if (n.max_age && !$n(e.claims.auth_time))
        throw new Error(
          "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
        );
      if (e.claims.exp == null || !$n(e.claims.exp))
        throw new Error(
          "Expiration Time (exp) claim must be a number present in the ID token"
        );
      if (!$n(e.claims.iat))
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
      if (e.claims.nbf != null && $n(e.claims.nbf)) {
        const s = new Date(0);
        if ((s.setUTCSeconds(e.claims.nbf - t), i < s))
          throw new Error(
            `Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${i}) is before ${s}`
          );
      }
      if (e.claims.auth_time != null && $n(e.claims.auth_time)) {
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
  var yr = bo(function (n, e) {
    var t =
      (wr && wr.__assign) ||
      function () {
        return (
          (t =
            Object.assign ||
            function (l) {
              for (var u, c = 1, h = arguments.length; c < h; c++)
                for (var m in (u = arguments[c]))
                  Object.prototype.hasOwnProperty.call(u, m) && (l[m] = u[m]);
              return l;
            }),
          t.apply(this, arguments)
        );
      };
    function i(l, u) {
      if (!u) return "";
      var c = "; " + l;
      return u === !0 ? c : c + "=" + u;
    }
    function r(l, u, c) {
      return (
        encodeURIComponent(l)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29") +
        "=" +
        encodeURIComponent(u).replace(
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
        })(c)
      );
    }
    function s(l) {
      for (
        var u = {}, c = l ? l.split("; ") : [], h = /(%[\dA-F]{2})+/gi, m = 0;
        m < c.length;
        m++
      ) {
        var p = c[m].split("="),
          f = p.slice(1).join("=");
        f.charAt(0) === '"' && (f = f.slice(1, -1));
        try {
          u[p[0].replace(h, decodeURIComponent)] = f.replace(
            h,
            decodeURIComponent
          );
        } catch {}
      }
      return u;
    }
    function a() {
      return s(document.cookie);
    }
    function o(l, u, c) {
      document.cookie = r(l, u, t({ path: "/" }, c));
    }
    (e.__esModule = !0),
      (e.encode = r),
      (e.parse = s),
      (e.getAll = a),
      (e.get = function (l) {
        return a()[l];
      }),
      (e.set = o),
      (e.remove = function (l, u) {
        o(l, "", t(t({}, u), { expires: -1 }));
      });
  });
  yo(yr), yr.encode, yr.parse, yr.getAll;
  var yp = yr.get,
    cc = yr.set,
    dc = yr.remove;
  const Kr = {
      get(n) {
        const e = yp(n);
        if (e !== void 0) return JSON.parse(e);
      },
      save(n, e, t) {
        let i = {};
        window.location.protocol === "https:" &&
          (i = { secure: !0, sameSite: "none" }),
          t != null && t.daysUntilExpire && (i.expires = t.daysUntilExpire),
          t != null && t.cookieDomain && (i.domain = t.cookieDomain),
          cc(n, JSON.stringify(e), i);
      },
      remove(n, e) {
        let t = {};
        e != null && e.cookieDomain && (t.domain = e.cookieDomain), dc(n, t);
      },
    },
    bp = {
      get(n) {
        return Kr.get(n) || Kr.get(`_legacy_${n}`);
      },
      save(n, e, t) {
        let i = {};
        window.location.protocol === "https:" && (i = { secure: !0 }),
          t != null && t.daysUntilExpire && (i.expires = t.daysUntilExpire),
          t != null && t.cookieDomain && (i.domain = t.cookieDomain),
          cc(`_legacy_${n}`, JSON.stringify(e), i),
          Kr.save(n, e, t);
      },
      remove(n, e) {
        let t = {};
        e != null && e.cookieDomain && (t.domain = e.cookieDomain),
          dc(n, t),
          Kr.remove(n, e),
          Kr.remove(`_legacy_${n}`, e);
      },
    },
    _p = {
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
  function Dp(n, e, t) {
    var i = e === void 0 ? null : e,
      r = (function (l, u) {
        var c = atob(l);
        if (u) {
          for (
            var h = new Uint8Array(c.length), m = 0, p = c.length;
            m < p;
            ++m
          )
            h[m] = c.charCodeAt(m);
          return String.fromCharCode.apply(null, new Uint16Array(h.buffer));
        }
        return c;
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
  var fc,
    pc,
    hc,
    Co,
    Ep =
      ((fc =
        "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo="),
      (pc = null),
      (hc = !1),
      function (n) {
        return (Co = Co || Dp(fc, pc, hc)), new Worker(Co, n);
      });
  const Ao = {};
  class Sp {
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
  const Tp = {
      memory: () => new uc().enclosedCache,
      localstorage: () => new hp(),
    },
    mc = (n) => Tp[n],
    gc = (n) => {
      const { openUrl: e, onRedirect: t } = n,
        i = gi(n, ["openUrl", "onRedirect"]);
      return Object.assign(Object.assign({}, i), {
        openUrl: e === !1 || e ? e : t,
      });
    },
    Mo = new op();
  class xp {
    constructor(e) {
      let t, i;
      if (
        ((this.userCache = new uc().enclosedCache),
        (this.defaultOptions = {
          authorizationParams: { scope: "openid profile email" },
          useRefreshTokensFallback: !1,
          useFormData: !0,
        }),
        (this._releaseLockOnPageHide = async () => {
          await Mo.releaseLock("auth0.lock.getTokenSilently"),
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
            if (!Hs())
              throw new Error(
                "For security reasons, `window.crypto` is required to run `auth0-spa-js`."
              );
            if (Hs().subtle === void 0)
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
        if (((t = e.cacheLocation || "memory"), !mc(t)))
          throw new Error(`Invalid cache location "${t}"`);
        i = mc(t)();
      }
      (this.httpTimeoutMs = e.httpTimeoutInSeconds
        ? 1e3 * e.httpTimeoutInSeconds
        : 1e4),
        (this.cookieStorage = e.legacySameSiteCookie === !1 ? Kr : bp),
        (this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`),
        (this.isAuthenticatedCookieName = ((a) =>
          `auth0.${a}.is.authenticated`)(this.options.clientId)),
        (this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1);
      const r = e.useCookiesForTransactions ? this.cookieStorage : _p;
      var s;
      (this.scope = Ys(
        "openid",
        this.options.authorizationParams.scope,
        this.options.useRefreshTokens ? "offline_access" : ""
      )),
        (this.transactionManager = new gp(
          r,
          this.options.clientId,
          this.options.cookieDomain
        )),
        (this.nowProvider = this.options.nowProvider || sc),
        (this.cacheManager = new mp(
          i,
          i.allKeys ? void 0 : new Sp(i, this.options.clientId),
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
            : (this.worker = new Ep()));
    }
    _url(e) {
      const t = encodeURIComponent(
        btoa(JSON.stringify(this.options.auth0Client || nc))
      );
      return `${this.domainUrl}${e}&auth0Client=${t}`;
    }
    _authorizeUrl(e) {
      return this._url(`/authorize?${xo(e)}`);
    }
    async _verifyIdToken(e, t, i) {
      const r = await this.nowProvider();
      return vp({
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
      const r = oc(To()),
        s = oc(To()),
        a = To(),
        o = ((c) => {
          const h = new Uint8Array(c);
          return ((m) => {
            const p = { "+": "-", "/": "_", "=": "" };
            return m.replace(/[+/=]/g, (f) => p[f]);
          })(window.btoa(String.fromCharCode(...Array.from(h))));
        })(
          await (async (c) =>
            await Hs().subtle.digest(
              { name: "SHA-256" },
              new TextEncoder().encode(c)
            ))(a)
        ),
        l = ((c, h, m, p, f, d, g, b) =>
          Object.assign(
            Object.assign(
              Object.assign({ client_id: c.clientId }, c.authorizationParams),
              m
            ),
            {
              scope: Ys(h, m.scope),
              response_type: "code",
              response_mode: b || "query",
              state: p,
              nonce: f,
              redirect_uri: g || c.authorizationParams.redirect_uri,
              code_challenge: d,
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
        u = this._authorizeUrl(l);
      return {
        nonce: s,
        code_verifier: a,
        scope: l.scope,
        audience: l.audience || "default",
        redirect_uri: l.redirect_uri,
        state: r,
        url: u,
      };
    }
    async loginWithPopup(e, t) {
      var i;
      if (
        ((e = e || {}),
        !(t = t || {}).popup &&
          ((t.popup = ((o) => {
            const l = window.screenX + (window.innerWidth - 400) / 2,
              u = window.screenY + (window.innerHeight - 600) / 2;
            return window.open(
              o,
              "auth0:authorize:popup",
              `left=${l},top=${u},width=400,height=600,resizable,scrollbars=yes,status=1`
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
        new Promise((l, u) => {
          let c;
          const h = setInterval(() => {
              o.popup &&
                o.popup.closed &&
                (clearInterval(h),
                clearTimeout(m),
                window.removeEventListener("message", c, !1),
                u(new Eo(o.popup)));
            }, 1e3),
            m = setTimeout(() => {
              clearInterval(h),
                u(new Do(o.popup)),
                window.removeEventListener("message", c, !1);
            }, 1e3 * (o.timeoutInSeconds || 60));
          (c = function (p) {
            if (p.data && p.data.type === "authorization_response") {
              if (
                (clearTimeout(m),
                clearInterval(h),
                window.removeEventListener("message", c, !1),
                o.popup.close(),
                p.data.response.error)
              )
                return u(lt.fromPayload(p.data.response));
              l(p.data.response);
            }
          }),
            window.addEventListener("message", c);
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
      const i = gc(e),
        { openUrl: r, fragment: s, appState: a } = i,
        o = gi(i, ["openUrl", "fragment", "appState"]),
        l =
          ((t = o.authorizationParams) === null || t === void 0
            ? void 0
            : t.organization) || this.options.authorizationParams.organization,
        u = await this._prepareAuthorizeUrl(o.authorizationParams || {}),
        { url: c } = u,
        h = gi(u, ["url"]);
      this.transactionManager.create(
        Object.assign(
          Object.assign(Object.assign({}, h), { appState: a }),
          l && { organization: l }
        )
      );
      const m = s ? `${c}#${s}` : c;
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
        throw new _o(s, a || s, i, o.appState);
      if (!o.code_verifier || (o.state && o.state !== i))
        throw new lt("state_mismatch", "Invalid state");
      const l = o.organization,
        u = o.nonce,
        c = o.redirect_uri;
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
            c ? { redirect_uri: c } : {}
          ),
          { nonceIn: u, organization: l }
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
              scope: Ys(
                this.scope,
                (t = e.authorizationParams) === null || t === void 0
                  ? void 0
                  : t.scope
              ),
            }
          ),
        }),
        r = await ((s, a) => {
          let o = Ao[a];
          return (
            o ||
              ((o = s().finally(() => {
                delete Ao[a], (o = null);
              })),
              (Ao[a] = o)),
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
          })(() => Mo.acquireLock("auth0.lock.getTokenSilently", 5e3), 10))
        )
          throw new Nn();
        try {
          if (
            (window.addEventListener("pagehide", this._releaseLockOnPageHide),
            t !== "off")
          ) {
            const u = await this._getEntryFromCache({
              scope: i.authorizationParams.scope,
              audience: i.authorizationParams.audience || "default",
              clientId: this.options.clientId,
            });
            if (u) return u;
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
          await Mo.releaseLock("auth0.lock.getTokenSilently"),
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
            scope: Ys(
              this.scope,
              (i = e.authorizationParams) === null || i === void 0
                ? void 0
                : i.scope
            ),
          }
        ),
      });
      return (
        (t = Object.assign(Object.assign({}, lp), t)),
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
          `/v2/logout?${xo(Object.assign({ clientId: e.clientId }, r))}`
        ) + s
      );
    }
    async logout(e = {}) {
      const t = gc(e),
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
        scope: u,
        audience: c,
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
          m = await ((f, d, g = 60) =>
            new Promise((b, v) => {
              const w = window.document.createElement("iframe");
              w.setAttribute("width", "0"),
                w.setAttribute("height", "0"),
                (w.style.display = "none");
              const y = () => {
                window.document.body.contains(w) &&
                  (window.document.body.removeChild(w),
                  window.removeEventListener("message", _, !1));
              };
              let _;
              const C = setTimeout(() => {
                v(new Nn()), y();
              }, 1e3 * g);
              (_ = function (T) {
                if (
                  T.origin != d ||
                  !T.data ||
                  T.data.type !== "authorization_response"
                )
                  return;
                const x = T.source;
                x && x.close(),
                  T.data.response.error
                    ? v(lt.fromPayload(T.data.response))
                    : b(T.data.response),
                  clearTimeout(C),
                  window.removeEventListener("message", _, !1),
                  setTimeout(y, 2e3);
              }),
                window.addEventListener("message", _, !1),
                window.document.body.appendChild(w),
                w.setAttribute("src", f);
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
          scope: u,
          oauthTokenScope: p.scope,
          audience: c,
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
        throw new $s(
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
        s = await pp(
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
  const ko = {
      domain: "dev-4byffv68pjm24xxs.us.auth0.com",
      clientId: "U89PtuKBLIluKKIQOI8hPIA9CfQYkpb6",
      redirectUri: window.location.origin,
      audience: "strive-v2-api",
    },
    Hn = new xp({
      domain: ko.domain,
      clientId: ko.clientId,
      authorizationParams: {
        redirect_uri: ko.redirectUri,
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
    wc = async () => {
      try {
        return await Hn.isAuthenticated();
      } catch (n) {
        return console.error("Error checking authentication:", n), !1;
      }
    },
    Cp = async (n = {}) => {
      try {
        if (!(await Hn.isAuthenticated())) return null;
        const t = {
          authorizationParams: {
            audience: "strive-v2-api",
            scope: "openid profile email offline_access",
          },
          timeoutInSeconds: 60,
          ...n,
        };
        return await Hn.getTokenSilently(t);
      } catch (e) {
        return console.error("Error getting token silently:", e), null;
      }
    },
    Ap = async () => {
      const n = window.location.search;
      if (n.includes("code=") && n.includes("state="))
        try {
          sessionStorage.removeItem("auth_state"),
            localStorage.removeItem("auth0.is.authenticated"),
            console.log("Starting Auth0 callback handling...");
          const e = await Hn.handleRedirectCallback();
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
    Mp = async () => {
      try {
        return (await wc()) ? await Hn.getUser() : null;
      } catch (n) {
        return console.error("Error getting user profile:", n), null;
      }
    },
    ji = {
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
  class kp {
    constructor() {
      this.currentPath = window.location.pathname;
    }
    requiresAuth() {
      const e = document.querySelector(`[${ji.ATTRIBUTES.PAGE}]`);
      return e
        ? e.getAttribute(ji.ATTRIBUTES.PAGE) === ji.REQUIREMENTS.REQUIRED
        : ji.PROTECTED_ROUTES.includes(this.currentPath);
    }
    async checkPageAccess(e) {
      if (
        this.currentPath.startsWith("/error") ||
        this.currentPath === ji.REDIRECTS.UNAUTHORIZED
      )
        return !0;
      if (this.requiresAuth() && !e)
        return (
          sessionStorage.setItem("authRedirect", this.currentPath),
          (window.location.href = ji.REDIRECTS.UNAUTHORIZED),
          !1
        );
      if (e && this.currentPath === ji.REDIRECTS.UNAUTHORIZED) {
        const t =
          sessionStorage.getItem("authRedirect") || ji.REDIRECTS.SUCCESS;
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
  const Pp = async () => {
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
      if (!(await wc())) return t(n, !1), t(e, !0), { authenticated: !1 };
      const s = await Cp(),
        a = await Mp();
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
  async function Op() {
    const n = new kp();
    try {
      const e = window.location.search.includes("code=") ? await Ap() : null;
      if (e != null && e.error) {
        sessionStorage.setItem("authError", JSON.stringify(e)),
          (window.location.href = `/error?code=${encodeURIComponent(
            e.code
          )}&message=${encodeURIComponent(e.message)}`);
        return;
      }
      const { authenticated: t } = await Pp();
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
  class Ip {
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
  const Fp = () => {
    new Ip();
  };
  class Lp {
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
  const zp = () => {
    new Lp();
  };
  async function Rp() {
    np(), await Op(), ap(), Fp(), zp();
  }
  function Bp() {
    console.log("Home Component Starter Initialized");
  }
  function vc(n) {
    return (
      n !== null &&
      typeof n == "object" &&
      "constructor" in n &&
      n.constructor === Object
    );
  }
  function Po(n, e) {
    n === void 0 && (n = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof n[i] > "u"
          ? (n[i] = e[i])
          : vc(e[i]) &&
            vc(n[i]) &&
            Object.keys(e[i]).length > 0 &&
            Po(n[i], e[i]);
      });
  }
  const yc = {
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
    return Po(n, yc), n;
  }
  const Np = {
    document: yc,
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
    return Po(n, Np), n;
  }
  function Xi(n) {
    return (
      n === void 0 && (n = ""),
      n
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function $p(n) {
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
  function Zt() {
    return Date.now();
  }
  function Hp(n) {
    const e = be();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(n, null)),
      !t && n.currentStyle && (t = n.currentStyle),
      t || (t = n.style),
      t
    );
  }
  function Oo(n, e) {
    e === void 0 && (e = "x");
    const t = be();
    let i, r, s;
    const a = Hp(n);
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
  function Yn(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      n.constructor &&
      Object.prototype.toString.call(n).slice(8, -1) === "Object"
    );
  }
  function Yp(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? n instanceof HTMLElement
      : n && (n.nodeType === 1 || n.nodeType === 11);
  }
  function Nt() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Yp(i)) {
        const r = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, a = r.length; s < a; s += 1) {
          const o = r[s],
            l = Object.getOwnPropertyDescriptor(i, o);
          l !== void 0 &&
            l.enumerable &&
            (Yn(n[o]) && Yn(i[o])
              ? i[o].__swiper__
                ? (n[o] = i[o])
                : Nt(n[o], i[o])
              : !Yn(n[o]) && Yn(i[o])
              ? ((n[o] = {}), i[o].__swiper__ ? (n[o] = i[o]) : Nt(n[o], i[o]))
              : (n[o] = i[o]));
        }
      }
    }
    return n;
  }
  function Vn(n, e, t) {
    n.style.setProperty(e, t);
  }
  function bc(n) {
    let { swiper: e, targetPosition: t, side: i } = n;
    const r = be(),
      s = -e.translate;
    let a = null,
      o;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > s ? "next" : "prev",
      c = (m, p) => (u === "next" && m >= p) || (u === "prev" && m <= p),
      h = () => {
        (o = new Date().getTime()), a === null && (a = o);
        const m = Math.max(Math.min((o - a) / l, 1), 0),
          p = 0.5 - Math.cos(m * Math.PI) / 2;
        let f = s + p * (t - s);
        if ((c(f, t) && (f = t), e.wrapperEl.scrollTo({ [i]: f }), c(f, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: f });
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
  function Ke(n, e) {
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
  function Vp(n, e) {
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
  function Wp(n, e) {
    const t = be();
    let i = e.contains(n);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(n)), i || (i = Vp(n, e))),
      i
    );
  }
  function Vs(n) {
    try {
      console.warn(n);
      return;
    } catch {}
  }
  function $t(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...(Array.isArray(e) ? e : Xi(e))), t;
  }
  function Ws(n) {
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
  function Gp(n, e) {
    const t = [];
    for (; n.previousElementSibling; ) {
      const i = n.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function qp(n, e) {
    const t = [];
    for (; n.nextElementSibling; ) {
      const i = n.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function Ui(n, e) {
    return be().getComputedStyle(n, null).getPropertyValue(e);
  }
  function Wn(n) {
    let e = n,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Dr(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function Gn(n, e) {
    function t(i) {
      i.target === n &&
        (e.call(n, i), n.removeEventListener("transitionend", t));
    }
    e && n.addEventListener("transitionend", t);
  }
  function Io(n, e, t) {
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
  function Gs(n) {
    return (e) =>
      Math.abs(e) > 0 &&
      n.browser &&
      n.browser.need3dFix &&
      Math.abs(e) % 90 === 0
        ? e + 0.001
        : e;
  }
  let Fo;
  function jp() {
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
  function _c() {
    return Fo || (Fo = jp()), Fo;
  }
  let Lo;
  function Xp(n) {
    let { userAgent: e } = n === void 0 ? {} : n;
    const t = _c(),
      i = be(),
      r = i.navigator.platform,
      s = e || i.navigator.userAgent,
      a = { ios: !1, android: !1 },
      o = i.screen.width,
      l = i.screen.height,
      u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = s.match(/(iPad).*OS\s([\d_]+)/);
    const h = s.match(/(iPod)(.*OS\s([\d_]+))?/),
      m = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      p = r === "Win32";
    let f = r === "MacIntel";
    const d = [
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
      !c &&
        f &&
        t.touch &&
        d.indexOf(`${o}x${l}`) >= 0 &&
        ((c = s.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (f = !1)),
      u && !p && ((a.os = "android"), (a.android = !0)),
      (c || m || h) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function Dc(n) {
    return n === void 0 && (n = {}), Lo || (Lo = Xp(n)), Lo;
  }
  let zo;
  function Up() {
    const n = be(),
      e = Dc();
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
        const [l, u] = o
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((c) => Number(c));
        t = l < 16 || (l === 16 && u < 2);
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
  function Ec() {
    return zo || (zo = Up()), zo;
  }
  function Zp(n) {
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
              let f = m,
                d = p;
              h.forEach((g) => {
                let { contentBoxSize: b, contentRect: v, target: w } = g;
                (w && w !== e.el) ||
                  ((f = v ? v.width : (b[0] || b).inlineSize),
                  (d = v ? v.height : (b[0] || b).blockSize));
              }),
                (f !== m || d !== p) && o();
            });
          })),
          s.observe(e.el));
      },
      u = () => {
        a && r.cancelAnimationFrame(a),
          s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
      },
      c = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
        l();
        return;
      }
      r.addEventListener("resize", o),
        r.addEventListener("orientationchange", c);
    }),
      t("destroy", () => {
        u(),
          r.removeEventListener("resize", o),
          r.removeEventListener("orientationchange", c);
      });
  }
  function Kp(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = [],
      a = be(),
      o = function (c, h) {
        h === void 0 && (h = {});
        const m = a.MutationObserver || a.WebkitMutationObserver,
          p = new m((f) => {
            if (e.__preventObserver__) return;
            if (f.length === 1) {
              r("observerUpdate", f[0]);
              return;
            }
            const d = function () {
              r("observerUpdate", f[0]);
            };
            a.requestAnimationFrame
              ? a.requestAnimationFrame(d)
              : a.setTimeout(d, 0);
          });
        p.observe(c, {
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
            const c = Dr(e.hostEl);
            for (let h = 0; h < c.length; h += 1) o(c[h]);
          }
          o(e.hostEl, { childList: e.params.observeSlideChildren }),
            o(e.wrapperEl, { attributes: !1 });
        }
      },
      u = () => {
        s.forEach((c) => {
          c.disconnect();
        }),
          s.splice(0, s.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", l),
      i("destroy", u);
  }
  var Jp = {
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
            n.eventsAnyListeners.forEach((u) => {
              u.apply(i, [l, ...t]);
            }),
            n.eventsListeners &&
              n.eventsListeners[l] &&
              n.eventsListeners[l].forEach((u) => {
                u.apply(i, t);
              });
        }),
        n
      );
    },
  };
  function Qp() {
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
          parseInt(Ui(i, "padding-left") || 0, 10) -
          parseInt(Ui(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(Ui(i, "padding-top") || 0, 10) -
          parseInt(Ui(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(n, {
          width: e,
          height: t,
          size: n.isHorizontal() ? e : t,
        }));
  }
  function eh() {
    const n = this;
    function e(E, z) {
      return parseFloat(E.getPropertyValue(n.getDirectionLabel(z)) || 0);
    }
    const t = n.params,
      { wrapperEl: i, slidesEl: r, size: s, rtlTranslate: a, wrongRTL: o } = n,
      l = n.virtual && t.virtual.enabled,
      u = l ? n.virtual.slides.length : n.slides.length,
      c = Ke(r, `.${n.params.slideClass}, swiper-slide`),
      h = l ? n.virtual.slides.length : c.length;
    let m = [];
    const p = [],
      f = [];
    let d = t.slidesOffsetBefore;
    typeof d == "function" && (d = t.slidesOffsetBefore.call(n));
    let g = t.slidesOffsetAfter;
    typeof g == "function" && (g = t.slidesOffsetAfter.call(n));
    const b = n.snapGrid.length,
      v = n.slidesGrid.length;
    let w = t.spaceBetween,
      y = -d,
      _ = 0,
      C = 0;
    if (typeof s > "u") return;
    typeof w == "string" && w.indexOf("%") >= 0
      ? (w = (parseFloat(w.replace("%", "")) / 100) * s)
      : typeof w == "string" && (w = parseFloat(w)),
      (n.virtualSize = -w),
      c.forEach((E) => {
        a ? (E.style.marginLeft = "") : (E.style.marginRight = ""),
          (E.style.marginBottom = ""),
          (E.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (Vn(i, "--swiper-centered-offset-before", ""),
        Vn(i, "--swiper-centered-offset-after", ""));
    const T = t.grid && t.grid.rows > 1 && n.grid;
    T ? n.grid.initSlides(c) : n.grid && n.grid.unsetSlides();
    let x;
    const A =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (E) => typeof t.breakpoints[E].slidesPerView < "u"
      ).length > 0;
    for (let E = 0; E < h; E += 1) {
      x = 0;
      let z;
      if (
        (c[E] && (z = c[E]),
        T && n.grid.updateSlide(E, z, c),
        !(c[E] && Ui(z, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          A && (c[E].style[n.getDirectionLabel("width")] = "");
          const D = getComputedStyle(z),
            S = z.style.transform,
            M = z.style.webkitTransform;
          if (
            (S && (z.style.transform = "none"),
            M && (z.style.webkitTransform = "none"),
            t.roundLengths)
          )
            x = n.isHorizontal() ? Io(z, "width") : Io(z, "height");
          else {
            const L = e(D, "width"),
              F = e(D, "padding-left"),
              P = e(D, "padding-right"),
              I = e(D, "margin-left"),
              O = e(D, "margin-right"),
              k = D.getPropertyValue("box-sizing");
            if (k && k === "border-box") x = L + I + O;
            else {
              const { clientWidth: Y, offsetWidth: X } = z;
              x = L + F + P + I + O + (X - Y);
            }
          }
          S && (z.style.transform = S),
            M && (z.style.webkitTransform = M),
            t.roundLengths && (x = Math.floor(x));
        } else
          (x = (s - (t.slidesPerView - 1) * w) / t.slidesPerView),
            t.roundLengths && (x = Math.floor(x)),
            c[E] && (c[E].style[n.getDirectionLabel("width")] = `${x}px`);
        c[E] && (c[E].swiperSlideSize = x),
          f.push(x),
          t.centeredSlides
            ? ((y = y + x / 2 + _ / 2 + w),
              _ === 0 && E !== 0 && (y = y - s / 2 - w),
              E === 0 && (y = y - s / 2 - w),
              Math.abs(y) < 1 / 1e3 && (y = 0),
              t.roundLengths && (y = Math.floor(y)),
              C % t.slidesPerGroup === 0 && m.push(y),
              p.push(y))
            : (t.roundLengths && (y = Math.floor(y)),
              (C - Math.min(n.params.slidesPerGroupSkip, C)) %
                n.params.slidesPerGroup ===
                0 && m.push(y),
              p.push(y),
              (y = y + x + w)),
          (n.virtualSize += x + w),
          (_ = x),
          (C += 1);
      }
    }
    if (
      ((n.virtualSize = Math.max(n.virtualSize, s) + g),
      a &&
        o &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${n.virtualSize + w}px`),
      t.setWrapperSize &&
        (i.style[n.getDirectionLabel("width")] = `${n.virtualSize + w}px`),
      T && n.grid.updateWrapperSize(x, m),
      !t.centeredSlides)
    ) {
      const E = [];
      for (let z = 0; z < m.length; z += 1) {
        let D = m[z];
        t.roundLengths && (D = Math.floor(D)),
          m[z] <= n.virtualSize - s && E.push(D);
      }
      (m = E),
        Math.floor(n.virtualSize - s) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(n.virtualSize - s);
    }
    if (l && t.loop) {
      const E = f[0] + w;
      if (t.slidesPerGroup > 1) {
        const z = Math.ceil(
            (n.virtual.slidesBefore + n.virtual.slidesAfter) / t.slidesPerGroup
          ),
          D = E * t.slidesPerGroup;
        for (let S = 0; S < z; S += 1) m.push(m[m.length - 1] + D);
      }
      for (
        let z = 0;
        z < n.virtual.slidesBefore + n.virtual.slidesAfter;
        z += 1
      )
        t.slidesPerGroup === 1 && m.push(m[m.length - 1] + E),
          p.push(p[p.length - 1] + E),
          (n.virtualSize += E);
    }
    if ((m.length === 0 && (m = [0]), w !== 0)) {
      const E =
        n.isHorizontal() && a
          ? "marginLeft"
          : n.getDirectionLabel("marginRight");
      c.filter((z, D) =>
        !t.cssMode || t.loop ? !0 : D !== c.length - 1
      ).forEach((z) => {
        z.style[E] = `${w}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let E = 0;
      f.forEach((D) => {
        E += D + (w || 0);
      }),
        (E -= w);
      const z = E > s ? E - s : 0;
      m = m.map((D) => (D <= 0 ? -d : D > z ? z + g : D));
    }
    if (t.centerInsufficientSlides) {
      let E = 0;
      f.forEach((D) => {
        E += D + (w || 0);
      }),
        (E -= w);
      const z = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (E + z < s) {
        const D = (s - E - z) / 2;
        m.forEach((S, M) => {
          m[M] = S - D;
        }),
          p.forEach((S, M) => {
            p[M] = S + D;
          });
      }
    }
    if (
      (Object.assign(n, {
        slides: c,
        snapGrid: m,
        slidesGrid: p,
        slidesSizesGrid: f,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      Vn(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        Vn(
          i,
          "--swiper-centered-offset-after",
          `${n.size / 2 - f[f.length - 1] / 2}px`
        );
      const E = -n.snapGrid[0],
        z = -n.slidesGrid[0];
      (n.snapGrid = n.snapGrid.map((D) => D + E)),
        (n.slidesGrid = n.slidesGrid.map((D) => D + z));
    }
    if (
      (h !== u && n.emit("slidesLengthChange"),
      m.length !== b &&
        (n.params.watchOverflow && n.checkOverflow(),
        n.emit("snapGridLengthChange")),
      p.length !== v && n.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && n.updateSlidesOffset(),
      n.emit("slidesUpdated"),
      !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const E = `${t.containerModifierClass}backface-hidden`,
        z = n.el.classList.contains(E);
      h <= t.maxBackfaceHiddenSlides
        ? z || n.el.classList.add(E)
        : z && n.el.classList.remove(E);
    }
  }
  function th(n) {
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
  function ih() {
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
  const Sc = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function rh(n) {
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
      const u = i[l];
      let c = u.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
      const h =
          (a + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (u.swiperSlideSize + o),
        m =
          (a - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (u.swiperSlideSize + o),
        p = -(a - c),
        f = p + e.slidesSizesGrid[l],
        d = p >= 0 && p <= e.size - e.slidesSizesGrid[l],
        g =
          (p >= 0 && p < e.size - 1) ||
          (f > 1 && f <= e.size) ||
          (p <= 0 && f >= e.size);
      g && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
        Sc(u, g, t.slideVisibleClass),
        Sc(u, d, t.slideFullyVisibleClass),
        (u.progress = r ? -h : h),
        (u.originalProgress = r ? -m : m);
    }
  }
  function nh(n) {
    const e = this;
    if (typeof n > "u") {
      const c = e.rtlTranslate ? -1 : 1;
      n = (e && e.translate && e.translate * c) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: s, isEnd: a, progressLoop: o } = e;
    const l = s,
      u = a;
    if (i === 0) (r = 0), (s = !0), (a = !0);
    else {
      r = (n - e.minTranslate()) / i;
      const c = Math.abs(n - e.minTranslate()) < 1,
        h = Math.abs(n - e.maxTranslate()) < 1;
      (s = c || r <= 0), (a = h || r >= 1), c && (r = 0), h && (r = 1);
    }
    if (t.loop) {
      const c = e.getSlideIndexByData(0),
        h = e.getSlideIndexByData(e.slides.length - 1),
        m = e.slidesGrid[c],
        p = e.slidesGrid[h],
        f = e.slidesGrid[e.slidesGrid.length - 1],
        d = Math.abs(n);
      d >= m ? (o = (d - m) / f) : (o = (d + f - p) / f), o > 1 && (o -= 1);
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
      a && !u && e.emit("reachEnd toEdge"),
      ((l && !s) || (u && !a)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  const Ro = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function sh() {
    const n = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = n,
      s = n.virtual && t.virtual.enabled,
      a = n.grid && t.grid && t.grid.rows > 1,
      o = (h) => Ke(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
    let l, u, c;
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
          (c = e.find((h) => h.column === r + 1)),
          (u = e.find((h) => h.column === r - 1)))
        : (l = e[r]);
    l &&
      (a ||
        ((c = qp(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (u = Gp(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u === 0 && (u = e[e.length - 1]))),
      e.forEach((h) => {
        Ro(h, h === l, t.slideActiveClass),
          Ro(h, h === c, t.slideNextClass),
          Ro(h, h === u, t.slidePrevClass);
      }),
      n.emitSlidesClasses();
  }
  const qs = (n, e) => {
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
    Bo = (n, e) => {
      if (!n.slides[e]) return;
      const t = n.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    No = (n) => {
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
        o.push(...Array.from({ length: e }).map((l, u) => a + i + u)),
          n.slides.forEach((l, u) => {
            o.includes(l.column) && Bo(n, u);
          });
        return;
      }
      const s = r + i - 1;
      if (n.params.rewind || n.params.loop)
        for (let a = r - e; a <= s + e; a += 1) {
          const o = ((a % t) + t) % t;
          (o < r || o > s) && Bo(n, o);
        }
      else
        for (let a = Math.max(r - e, 0); a <= Math.min(s + e, t - 1); a += 1)
          a !== r && (a > s || a < r) && Bo(n, a);
    };
  function ah(n) {
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
  function oh(n) {
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
      u;
    const c = (p) => {
      let f = p - e.virtual.slidesBefore;
      return (
        f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        f
      );
    };
    if ((typeof l > "u" && (l = ah(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
    else {
      const p = Math.min(r.slidesPerGroupSkip, l);
      u = p + Math.floor((l - p) / r.slidesPerGroup);
    }
    if ((u >= i.length && (u = i.length - 1), l === s && !e.params.loop)) {
      u !== o && ((e.snapIndex = u), e.emit("snapIndexChange"));
      return;
    }
    if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = c(l);
      return;
    }
    const h = e.grid && r.grid && r.grid.rows > 1;
    let m;
    if (e.virtual && r.virtual.enabled && r.loop) m = c(l);
    else if (h) {
      const p = e.slides.find((d) => d.column === l);
      let f = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(f) && (f = Math.max(e.slides.indexOf(p), 0)),
        (m = Math.floor(f / r.grid.rows));
    } else if (e.slides[l]) {
      const p = e.slides[l].getAttribute("data-swiper-slide-index");
      p ? (m = parseInt(p, 10)) : (m = l);
    } else m = l;
    Object.assign(e, {
      previousSnapIndex: o,
      snapIndex: u,
      previousRealIndex: a,
      realIndex: m,
      previousIndex: s,
      activeIndex: l,
    }),
      e.initialized && No(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (a !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function lh(n, e) {
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
  var uh = {
    updateSize: Qp,
    updateSlides: eh,
    updateAutoHeight: th,
    updateSlidesOffset: ih,
    updateSlidesProgress: rh,
    updateProgress: nh,
    updateSlidesClasses: sh,
    updateActiveIndex: oh,
    updateClickedSlide: lh,
  };
  function ch(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let a = Oo(s, n);
    return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
  }
  function dh(n, e) {
    const t = this,
      { rtlTranslate: i, params: r, wrapperEl: s, progress: a } = t;
    let o = 0,
      l = 0;
    const u = 0;
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
          (s.style.transform = `translate3d(${o}px, ${l}px, ${u}px)`));
    let c;
    const h = t.maxTranslate() - t.minTranslate();
    h === 0 ? (c = 0) : (c = (n - t.minTranslate()) / h),
      c !== a && t.updateProgress(n),
      t.emit("setTranslate", t.translate, e);
  }
  function fh() {
    return -this.snapGrid[0];
  }
  function ph() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function hh(n, e, t, i, r) {
    n === void 0 && (n = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const s = this,
      { params: a, wrapperEl: o } = s;
    if (s.animating && a.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
      u = s.maxTranslate();
    let c;
    if (
      (i && n > l ? (c = l) : i && n < u ? (c = u) : (c = n),
      s.updateProgress(c),
      a.cssMode)
    ) {
      const h = s.isHorizontal();
      if (e === 0) o[h ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!s.support.smoothScroll)
          return (
            bc({ swiper: s, targetPosition: -c, side: h ? "left" : "top" }), !0
          );
        o.scrollTo({ [h ? "left" : "top"]: -c, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(c),
          t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
        : (s.setTransition(e),
          s.setTranslate(c),
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
  var mh = {
    getTranslate: ch,
    setTranslate: dh,
    minTranslate: fh,
    maxTranslate: ph,
    translateTo: hh,
  };
  function gh(n, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${n}ms`),
      (t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : "")),
      t.emit("setTransition", n, e);
  }
  function Tc(n) {
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
  function wh(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      Tc({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
  }
  function vh(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        Tc({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
  }
  var yh = { setTransition: gh, transitionStart: wh, transitionEnd: vh };
  function bh(n, e, t, i, r) {
    n === void 0 && (n = 0),
      t === void 0 && (t = !0),
      typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    let a = n;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: u,
      previousIndex: c,
      activeIndex: h,
      rtlTranslate: m,
      wrapperEl: p,
      enabled: f,
    } = s;
    if (
      (!f && !i && !r) ||
      s.destroyed ||
      (s.animating && o.preventInteractionOnTransition)
    )
      return !1;
    typeof e > "u" && (e = s.params.speed);
    const d = Math.min(s.params.slidesPerGroupSkip, a);
    let g = d + Math.floor((a - d) / s.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const b = -l[g];
    if (o.normalizeSlideIndex)
      for (let T = 0; T < u.length; T += 1) {
        const x = -Math.floor(b * 100),
          A = Math.floor(u[T] * 100),
          E = Math.floor(u[T + 1] * 100);
        typeof u[T + 1] < "u"
          ? x >= A && x < E - (E - A) / 2
            ? (a = T)
            : x >= A && x < E && (a = T + 1)
          : x >= A && (a = T);
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
    a !== (c || 0) && t && s.emit("beforeSlideChangeStart"),
      s.updateProgress(b);
    let v;
    a > h ? (v = "next") : a < h ? (v = "prev") : (v = "reset");
    const w = s.virtual && s.params.virtual.enabled;
    if (!(w && r) && ((m && -b === s.translate) || (!m && b === s.translate)))
      return (
        s.updateActiveIndex(a),
        o.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        o.effect !== "slide" && s.setTranslate(b),
        v !== "reset" && (s.transitionStart(t, v), s.transitionEnd(t, v)),
        !1
      );
    if (o.cssMode) {
      const T = s.isHorizontal(),
        x = m ? b : -b;
      if (e === 0)
        w &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          w && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                p[T ? "scrollLeft" : "scrollTop"] = x;
              }))
            : (p[T ? "scrollLeft" : "scrollTop"] = x),
          w &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._immediateVirtual = !1);
            });
      else {
        if (!s.support.smoothScroll)
          return (
            bc({ swiper: s, targetPosition: x, side: T ? "left" : "top" }), !0
          );
        p.scrollTo({ [T ? "left" : "top"]: x, behavior: "smooth" });
      }
      return !0;
    }
    const C = Ec().isSafari;
    return (
      w && !r && C && s.isElement && s.virtual.update(!1, !1, a),
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
            (s.onSlideToWrapperTransitionEnd = function (x) {
              !s ||
                s.destroyed ||
                (x.target === this &&
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
  function _h(n, e, t, i) {
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
          { centeredSlides: u } = r.params;
        let c = r.params.slidesPerView;
        c === "auto"
          ? (c = r.slidesPerViewDynamic())
          : ((c = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
            u && c % 2 === 0 && (c = c + 1));
        let h = l - o < c;
        if (
          (u && (h = h || o < Math.ceil(c / 2)),
          i && u && r.params.slidesPerView !== "auto" && !s && (h = !1),
          h)
        ) {
          const m = u
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
  function Dh(n, e, t) {
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
      u = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (a && !u && s.loopPreventsSliding) return !1;
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
  function Eh(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: r,
        snapGrid: s,
        slidesGrid: a,
        rtlTranslate: o,
        enabled: l,
        animating: u,
      } = i;
    if (!l || i.destroyed) return i;
    typeof n > "u" && (n = i.params.speed);
    const c = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (u && !c && r.loopPreventsSliding) return !1;
      i.loopFix({ direction: "prev" }),
        (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const h = o ? i.translate : -i.translate;
    function m(v) {
      return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v);
    }
    const p = m(h),
      f = s.map((v) => m(v)),
      d = r.freeMode && r.freeMode.enabled;
    let g = s[f.indexOf(p) - 1];
    if (typeof g > "u" && (r.cssMode || d)) {
      let v;
      s.forEach((w, y) => {
        p >= w && (v = y);
      }),
        typeof v < "u" && (g = d ? s[v] : s[v > 0 ? v - 1 : v]);
    }
    let b = 0;
    if (
      (typeof g < "u" &&
        ((b = a.indexOf(g)),
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
  function Sh(n, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof n > "u" && (n = i.params.speed),
        i.slideTo(i.activeIndex, n, e, t)
      );
  }
  function Th(n, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof n > "u" && (n = r.params.speed);
    let s = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, s),
      o = a + Math.floor((s - a) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const u = r.snapGrid[o],
        c = r.snapGrid[o + 1];
      l - u > (c - u) * i && (s += r.params.slidesPerGroup);
    } else {
      const u = r.snapGrid[o - 1],
        c = r.snapGrid[o];
      l - u <= (c - u) * i && (s -= r.params.slidesPerGroup);
    }
    return (
      (s = Math.max(s, 0)),
      (s = Math.min(s, r.slidesGrid.length - 1)),
      r.slideTo(s, n, e, t)
    );
  }
  function xh() {
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
                Ke(t, `${a}[data-swiper-slide-index="${s}"]`)[0]
              )),
              br(() => {
                n.slideTo(r);
              }))
            : n.slideTo(r)
          : r > n.slides.length - i
          ? (n.loopFix(),
            (r = n.getSlideIndex(
              Ke(t, `${a}[data-swiper-slide-index="${s}"]`)[0]
            )),
            br(() => {
              n.slideTo(r);
            }))
          : n.slideTo(r);
    } else n.slideTo(r);
  }
  var Ch = {
    slideTo: bh,
    slideToLoop: _h,
    slideNext: Dh,
    slidePrev: Eh,
    slideReset: Sh,
    slideToClosest: Th,
    slideToClickedSlide: xh,
  };
  function Ah(n) {
    const e = this,
      { params: t, slidesEl: i } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    const r = () => {
        Ke(i, `.${t.slideClass}, swiper-slide`).forEach((h, m) => {
          h.setAttribute("data-swiper-slide-index", m);
        });
      },
      s = e.grid && t.grid && t.grid.rows > 1,
      a = t.slidesPerGroup * (s ? t.grid.rows : 1),
      o = e.slides.length % a !== 0,
      l = s && e.slides.length % t.grid.rows !== 0,
      u = (c) => {
        for (let h = 0; h < c; h += 1) {
          const m = e.isElement
            ? $t("swiper-slide", [t.slideBlankClass])
            : $t("div", [t.slideClass, t.slideBlankClass]);
          e.slidesEl.append(m);
        }
      };
    if (o) {
      if (t.loopAddBlankSlides) {
        const c = a - (e.slides.length % a);
        u(c), e.recalcSlides(), e.updateSlides();
      } else
        Vs(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else if (l) {
      if (t.loopAddBlankSlides) {
        const c = t.grid.rows - (e.slides.length % t.grid.rows);
        u(c), e.recalcSlides(), e.updateSlides();
      } else
        Vs(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else r();
    e.loopFix({
      slideRealIndex: n,
      direction: t.centeredSlides ? void 0 : "next",
    });
  }
  function Mh(n) {
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
        slides: u,
        allowSlidePrev: c,
        allowSlideNext: h,
        slidesEl: m,
        params: p,
      } = l,
      { centeredSlides: f } = p;
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
        (l.allowSlidePrev = c),
        (l.allowSlideNext = h),
        l.emit("loopFix");
      return;
    }
    let d = p.slidesPerView;
    d === "auto"
      ? (d = l.slidesPerViewDynamic())
      : ((d = Math.ceil(parseFloat(p.slidesPerView, 10))),
        f && d % 2 === 0 && (d = d + 1));
    const g = p.slidesPerGroupAuto ? d : p.slidesPerGroup;
    let b = g;
    b % g !== 0 && (b += g - (b % g)),
      (b += p.loopAdditionalSlides),
      (l.loopedSlides = b);
    const v = l.grid && p.grid && p.grid.rows > 1;
    u.length < d + b
      ? Vs(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : v &&
        p.grid.fill === "row" &&
        Vs(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const w = [],
      y = [];
    let _ = l.activeIndex;
    typeof s > "u"
      ? (s = l.getSlideIndex(
          u.find((S) => S.classList.contains(p.slideActiveClass))
        ))
      : (_ = s);
    const C = i === "next" || !i,
      T = i === "prev" || !i;
    let x = 0,
      A = 0;
    const E = v ? Math.ceil(u.length / p.grid.rows) : u.length,
      D = (v ? u[s].column : s) + (f && typeof r > "u" ? -d / 2 + 0.5 : 0);
    if (D < b) {
      x = Math.max(b - D, g);
      for (let S = 0; S < b - D; S += 1) {
        const M = S - Math.floor(S / E) * E;
        if (v) {
          const L = E - M - 1;
          for (let F = u.length - 1; F >= 0; F -= 1)
            u[F].column === L && w.push(F);
        } else w.push(E - M - 1);
      }
    } else if (D + d > E - b) {
      A = Math.max(D - (E - b * 2), g);
      for (let S = 0; S < A; S += 1) {
        const M = S - Math.floor(S / E) * E;
        v
          ? u.forEach((L, F) => {
              L.column === M && y.push(F);
            })
          : y.push(M);
      }
    }
    if (
      ((l.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        l.__preventObserver__ = !1;
      }),
      T &&
        w.forEach((S) => {
          (u[S].swiperLoopMoveDOM = !0),
            m.prepend(u[S]),
            (u[S].swiperLoopMoveDOM = !1);
        }),
      C &&
        y.forEach((S) => {
          (u[S].swiperLoopMoveDOM = !0),
            m.append(u[S]),
            (u[S].swiperLoopMoveDOM = !1);
        }),
      l.recalcSlides(),
      p.slidesPerView === "auto"
        ? l.updateSlides()
        : v &&
          ((w.length > 0 && T) || (y.length > 0 && C)) &&
          l.slides.forEach((S, M) => {
            l.grid.updateSlide(M, S, l.slides);
          }),
      p.watchSlidesProgress && l.updateSlidesOffset(),
      t)
    ) {
      if (w.length > 0 && T) {
        if (typeof e > "u") {
          const S = l.slidesGrid[_],
            L = l.slidesGrid[_ + x] - S;
          o
            ? l.setTranslate(l.translate - L)
            : (l.slideTo(_ + Math.ceil(x), 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - L),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - L)));
        } else if (r) {
          const S = v ? w.length / p.grid.rows : w.length;
          l.slideTo(l.activeIndex + S, 0, !1, !0),
            (l.touchEventsData.currentTranslate = l.translate);
        }
      } else if (y.length > 0 && C)
        if (typeof e > "u") {
          const S = l.slidesGrid[_],
            L = l.slidesGrid[_ - A] - S;
          o
            ? l.setTranslate(l.translate - L)
            : (l.slideTo(_ - A, 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - L),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - L)));
        } else {
          const S = v ? y.length / p.grid.rows : y.length;
          l.slideTo(l.activeIndex - S, 0, !1, !0);
        }
    }
    if (
      ((l.allowSlidePrev = c),
      (l.allowSlideNext = h),
      l.controller && l.controller.control && !a)
    ) {
      const S = {
        slideRealIndex: e,
        direction: i,
        setTranslate: r,
        activeSlideIndex: s,
        byController: !0,
      };
      Array.isArray(l.controller.control)
        ? l.controller.control.forEach((M) => {
            !M.destroyed &&
              M.params.loop &&
              M.loopFix({
                ...S,
                slideTo: M.params.slidesPerView === p.slidesPerView ? t : !1,
              });
          })
        : l.controller.control instanceof l.constructor &&
          l.controller.control.params.loop &&
          l.controller.control.loopFix({
            ...S,
            slideTo:
              l.controller.control.params.slidesPerView === p.slidesPerView
                ? t
                : !1,
          });
    }
    l.emit("loopFix");
  }
  function kh() {
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
  var Ph = { loopCreate: Ah, loopFix: Mh, loopDestroy: kh };
  function Oh(n) {
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
  function Ih() {
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
  var Fh = { setGrabCursor: Oh, unsetGrabCursor: Ih };
  function Lh(n, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === Ge() || i === be()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(n);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function xc(n, e, t) {
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
  function zh(n) {
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
      xc(e, i, i.targetTouches[0].pageX);
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
      (s.touchEventsTarget === "wrapper" && !Wp(l, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const u = !!s.noSwipingClass && s.noSwipingClass !== "",
      c = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && c && (l = c[0]);
    const h = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      m = !!(i.target && i.target.shadowRoot);
    if (s.noSwiping && (m ? Lh(h, l) : l.closest(h))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const p = a.currentX,
      f = a.currentY;
    if (!xc(e, i, p)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = p),
      (a.startY = f),
      (r.touchStartTime = Zt()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (r.allowThresholdMove = !1);
    let d = !0;
    l.matches(r.focusableElements) &&
      ((d = !1), l.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== l &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !l.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const g = d && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || g) &&
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
  function Rh(n) {
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
    let u;
    if (l.type === "touchmove") {
      if (
        ((u = [...l.changedTouches].find((_) => _.identifier === i.touchId)),
        !u || u.identifier !== i.touchId)
      )
        return;
    } else u = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
      return;
    }
    const c = u.pageX,
      h = u.pageY;
    if (l.preventedByNestedSwiper) {
      (s.startX = c), (s.startY = h);
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(s, { startX: c, startY: h, currentX: c, currentY: h }),
          (i.touchStartTime = Zt()));
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
        (c < s.startX && t.translate <= t.maxTranslate()) ||
        (c > s.startX && t.translate >= t.minTranslate())
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
      (s.currentX = c),
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
    let f = t.isHorizontal() ? m : p,
      d = t.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    r.oneWayMovement &&
      ((f = Math.abs(f) * (a ? 1 : -1)), (d = Math.abs(d) * (a ? 1 : -1))),
      (s.diff = f),
      (f *= r.touchRatio),
      a && ((f = -f), (d = -d));
    const g = t.touchesDirection;
    (t.swipeDirection = f > 0 ? "prev" : "next"),
      (t.touchesDirection = d > 0 ? "prev" : "next");
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
        g !== t.touchesDirection &&
        b &&
        v &&
        Math.abs(f) >= 1)
    ) {
      Object.assign(s, {
        startX: c,
        startY: h,
        currentX: c,
        currentY: h,
        startTranslate: i.currentTranslate,
      }),
        (i.loopSwapReset = !0),
        (i.startTranslate = i.currentTranslate);
      return;
    }
    t.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = f + i.startTranslate);
    let w = !0,
      y = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (y = 0),
      f > 0
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
            ((w = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + f) ** y)))
        : f < 0 &&
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
            ((w = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - i.startTranslate - f) ** y))),
      w && (l.preventedByNestedSwiper = !0),
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
      if (Math.abs(f) > r.threshold || i.allowThresholdMove) {
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
  function Bh(n) {
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
      slidesGrid: u,
      enabled: c,
    } = e;
    if (!c || (!a.simulateTouch && i.pointerType === "mouse")) return;
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
    const h = Zt(),
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
      ((t.lastClickTime = Zt()),
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
    const f = p >= -e.maxTranslate() && !e.params.loop;
    let d = 0,
      g = e.slidesSizesGrid[0];
    for (
      let _ = 0;
      _ < u.length;
      _ += _ < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const C = _ < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof u[_ + C] < "u"
        ? (f || (p >= u[_] && p < u[_ + C])) && ((d = _), (g = u[_ + C] - u[_]))
        : (f || p >= u[_]) &&
          ((d = _), (g = u[u.length - 1] - u[u.length - 2]));
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
    const w = (p - u[d]) / g,
      y = d < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (m > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (w >= a.longSwipesRatio
          ? e.slideTo(a.rewind && e.isEnd ? b : d + y)
          : e.slideTo(d)),
        e.swipeDirection === "prev" &&
          (w > 1 - a.longSwipesRatio
            ? e.slideTo(d + y)
            : v !== null && w < 0 && Math.abs(w) > a.longSwipesRatio
            ? e.slideTo(v)
            : e.slideTo(d));
    } else {
      if (!a.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(d + y)
          : e.slideTo(d)
        : (e.swipeDirection === "next" && e.slideTo(b !== null ? b : d + y),
          e.swipeDirection === "prev" && e.slideTo(v !== null ? v : d));
    }
  }
  function Cc() {
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
  function Nh(n) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && n.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (n.stopPropagation(), n.stopImmediatePropagation())));
  }
  function $h() {
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
  function Hh(n) {
    const e = this;
    qs(e, n.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Yh() {
    const n = this;
    n.documentTouchHandlerProceeded ||
      ((n.documentTouchHandlerProceeded = !0),
      n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"));
  }
  const Ac = (n, e) => {
    const t = Ge(),
      { params: i, el: r, wrapperEl: s, device: a } = n,
      o = !!i.nested,
      l = e === "on" ? "addEventListener" : "removeEventListener",
      u = e;
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
        ? n[u](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Cc,
            !0
          )
        : n[u]("observerUpdate", Cc, !0),
      r[l]("load", n.onLoad, { capture: !0 }));
  };
  function Vh() {
    const n = this,
      { params: e } = n;
    (n.onTouchStart = zh.bind(n)),
      (n.onTouchMove = Rh.bind(n)),
      (n.onTouchEnd = Bh.bind(n)),
      (n.onDocumentTouchStart = Yh.bind(n)),
      e.cssMode && (n.onScroll = $h.bind(n)),
      (n.onClick = Nh.bind(n)),
      (n.onLoad = Hh.bind(n)),
      Ac(n, "on");
  }
  function Wh() {
    Ac(this, "off");
  }
  var Gh = { attachEvents: Vh, detachEvents: Wh };
  const Mc = (n, e) => n.grid && e.grid && e.grid.rows > 1;
  function qh() {
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
      u = n.getBreakpoint(s, o, l);
    if (!u || n.currentBreakpoint === u) return;
    const h = (u in s ? s[u] : void 0) || n.originalParams,
      m = Mc(n, i),
      p = Mc(n, h),
      f = n.params.grabCursor,
      d = h.grabCursor,
      g = i.enabled;
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
      f && !d ? n.unsetGrabCursor() : !f && d && n.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((C) => {
        if (typeof h[C] > "u") return;
        const T = i[C] && i[C].enabled,
          x = h[C] && h[C].enabled;
        T && !x && n[C].disable(), !T && x && n[C].enable();
      });
    const b = h.direction && h.direction !== i.direction,
      v = i.loop && (h.slidesPerView !== i.slidesPerView || b),
      w = i.loop;
    b && t && n.changeDirection(), Nt(n.params, h);
    const y = n.params.enabled,
      _ = n.params.loop;
    Object.assign(n, {
      allowTouchMove: n.params.allowTouchMove,
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
    }),
      g && !y ? n.disable() : !g && y && n.enable(),
      (n.currentBreakpoint = u),
      n.emit("_beforeBreakpoint", h),
      t &&
        (v
          ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides())
          : !w && _
          ? (n.loopCreate(e), n.updateSlides())
          : w && !_ && n.loopDestroy()),
      n.emit("breakpoint", h);
  }
  function jh(n, e, t) {
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
      const { point: l, value: u } = a[o];
      e === "window"
        ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
        : u <= t.clientWidth && (i = l);
    }
    return i || "max";
  }
  var Xh = { setBreakpoint: qh, getBreakpoint: jh };
  function Uh(n, e) {
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
  function Zh() {
    const n = this,
      { classNames: e, params: t, rtl: i, el: r, device: s } = n,
      a = Uh(
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
  function Kh() {
    const n = this,
      { el: e, classNames: t } = n;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), n.emitContainerClasses());
  }
  var Jh = { addClasses: Zh, removeClasses: Kh };
  function Qh() {
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
  var em = { checkOverflow: Qh },
    kc = {
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
  function tm(n, e) {
    return function (i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0],
        s = i[r];
      if (typeof s != "object" || s === null) {
        Nt(e, i);
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
        Nt(e, i);
        return;
      }
      typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
        n[r] || (n[r] = { enabled: !1 }),
        Nt(e, i);
    };
  }
  const $o = {
      eventsEmitter: Jp,
      update: uh,
      translate: mh,
      transition: yh,
      slide: Ch,
      loop: Ph,
      grabCursor: Fh,
      events: Gh,
      breakpoints: Xh,
      checkOverflow: em,
      classes: Jh,
    },
    Ho = {};
  class Ht {
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
        (t = Nt({}, t)),
        e && !t.el && (t.el = e);
      const a = Ge();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const c = [];
        return (
          a.querySelectorAll(t.el).forEach((h) => {
            const m = Nt({}, t, { el: h });
            c.push(new Ht(m));
          }),
          c
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = _c()),
        (o.device = Dc({ userAgent: t.userAgent })),
        (o.browser = Ec()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const l = {};
      o.modules.forEach((c) => {
        c({
          params: t,
          swiper: o,
          extendParams: tm(t, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const u = Nt({}, kc, l);
      return (
        (o.params = Nt({}, u, Ho, t)),
        (o.originalParams = Nt({}, o.params)),
        (o.passedParams = Nt({}, t)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((c) => {
            o.on(c, o.params.on[c]);
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
        r = Ke(t, `.${i.slideClass}, swiper-slide`),
        s = Wn(r[0]);
      return Wn(e) - s;
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
      e.slides = Ke(t, `.${i.slideClass}, swiper-slide`);
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
          activeIndex: u,
        } = i;
      let c = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let h = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
          m;
        for (let p = u + 1; p < s.length; p += 1)
          s[p] &&
            !m &&
            ((h += Math.ceil(s[p].swiperSlideSize)),
            (c += 1),
            h > l && (m = !0));
        for (let p = u - 1; p >= 0; p -= 1)
          s[p] &&
            !m &&
            ((h += s[p].swiperSlideSize), (c += 1), h > l && (m = !0));
      } else if (e === "current")
        for (let h = u + 1; h < s.length; h += 1)
          (t ? a[h] + o[h] - a[u] < l : a[h] - a[u] < l) && (c += 1);
      else for (let h = u - 1; h >= 0; h -= 1) a[u] - a[h] < l && (c += 1);
      return c;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
          a.complete && qs(e, a);
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
          : Ke(i, r())[0];
      return (
        !a &&
          t.params.createElements &&
          ((a = $t("div", t.params.wrapperClass)),
          i.append(a),
          Ke(i, `.${t.params.slideClass}`).forEach((o) => {
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
          rtl: i.dir.toLowerCase() === "rtl" || Ui(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || Ui(i, "direction") === "rtl"),
          wrongRTL: Ui(a, "display") === "-webkit-box",
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
            ? qs(t, s)
            : s.addEventListener("load", (a) => {
                qs(t, a.target);
              });
        }),
        No(t),
        (t.initialized = !0),
        No(t),
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), $p(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Nt(Ho, e);
    }
    static get extendedDefaults() {
      return Ho;
    }
    static get defaults() {
      return kc;
    }
    static installModule(e) {
      Ht.prototype.__modules__ || (Ht.prototype.__modules__ = []);
      const t = Ht.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Ht.installModule(t)), Ht)
        : (Ht.installModule(e), Ht);
    }
  }
  Object.keys($o).forEach((n) => {
    Object.keys($o[n]).forEach((e) => {
      Ht.prototype[e] = $o[n][e];
    });
  }),
    Ht.use([Zp, Kp]);
  function im(n) {
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
    function l(f, d) {
      const g = e.params.virtual;
      if (g.cache && e.virtual.cache[d]) return e.virtual.cache[d];
      let b;
      return (
        g.renderSlide
          ? ((b = g.renderSlide.call(e, f, d)),
            typeof b == "string" && ((o.innerHTML = b), (b = o.children[0])))
          : e.isElement
          ? (b = $t("swiper-slide"))
          : (b = $t("div", e.params.slideClass)),
        b.setAttribute("data-swiper-slide-index", d),
        g.renderSlide || (b.innerHTML = f),
        g.cache && (e.virtual.cache[d] = b),
        b
      );
    }
    function u(f, d, g) {
      const {
        slidesPerView: b,
        slidesPerGroup: v,
        centeredSlides: w,
        loop: y,
        initialSlide: _,
      } = e.params;
      if (d && !y && _ > 0) return;
      const { addSlidesBefore: C, addSlidesAfter: T } = e.params.virtual,
        { from: x, to: A, slides: E, slidesGrid: z, offset: D } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const S = typeof g > "u" ? e.activeIndex || 0 : g;
      let M;
      e.rtlTranslate ? (M = "right") : (M = e.isHorizontal() ? "left" : "top");
      let L, F;
      w
        ? ((L = Math.floor(b / 2) + v + T), (F = Math.floor(b / 2) + v + C))
        : ((L = b + (v - 1) + T), (F = (y ? b : v) + C));
      let P = S - F,
        I = S + L;
      y || ((P = Math.max(P, 0)), (I = Math.min(I, E.length - 1)));
      let O = (e.slidesGrid[P] || 0) - (e.slidesGrid[0] || 0);
      y && S >= F
        ? ((P -= F), w || (O += e.slidesGrid[0]))
        : y && S < F && ((P = -F), w && (O += e.slidesGrid[0])),
        Object.assign(e.virtual, {
          from: P,
          to: I,
          offset: O,
          slidesGrid: e.slidesGrid,
          slidesBefore: F,
          slidesAfter: L,
        });
      function k() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          r("virtualUpdate");
      }
      if (x === P && A === I && !f) {
        e.slidesGrid !== z &&
          O !== D &&
          e.slides.forEach((N) => {
            N.style[M] = `${O - Math.abs(e.cssOverflowAdjustment())}px`;
          }),
          e.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: O,
          from: P,
          to: I,
          slides: (function () {
            const $ = [];
            for (let q = P; q <= I; q += 1) $.push(E[q]);
            return $;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? k() : r("virtualUpdate");
        return;
      }
      const Y = [],
        X = [],
        ue = (N) => {
          let $ = N;
          return (
            N < 0 ? ($ = E.length + N) : $ >= E.length && ($ = $ - E.length), $
          );
        };
      if (f)
        e.slides
          .filter((N) => N.matches(`.${e.params.slideClass}, swiper-slide`))
          .forEach((N) => {
            N.remove();
          });
      else
        for (let N = x; N <= A; N += 1)
          if (N < P || N > I) {
            const $ = ue(N);
            e.slides
              .filter((q) =>
                q.matches(
                  `.${e.params.slideClass}[data-swiper-slide-index="${$}"], swiper-slide[data-swiper-slide-index="${$}"]`
                )
              )
              .forEach((q) => {
                q.remove();
              });
          }
      const re = y ? -E.length : 0,
        B = y ? E.length * 2 : E.length;
      for (let N = re; N < B; N += 1)
        if (N >= P && N <= I) {
          const $ = ue(N);
          typeof A > "u" || f
            ? X.push($)
            : (N > A && X.push($), N < x && Y.push($));
        }
      if (
        (X.forEach((N) => {
          e.slidesEl.append(l(E[N], N));
        }),
        y)
      )
        for (let N = Y.length - 1; N >= 0; N -= 1) {
          const $ = Y[N];
          e.slidesEl.prepend(l(E[$], $));
        }
      else
        Y.sort((N, $) => $ - N),
          Y.forEach((N) => {
            e.slidesEl.prepend(l(E[N], N));
          });
      Ke(e.slidesEl, ".swiper-slide, swiper-slide").forEach((N) => {
        N.style[M] = `${O - Math.abs(e.cssOverflowAdjustment())}px`;
      }),
        k();
    }
    function c(f) {
      if (typeof f == "object" && "length" in f)
        for (let d = 0; d < f.length; d += 1)
          f[d] && e.virtual.slides.push(f[d]);
      else e.virtual.slides.push(f);
      u(!0);
    }
    function h(f) {
      const d = e.activeIndex;
      let g = d + 1,
        b = 1;
      if (Array.isArray(f)) {
        for (let v = 0; v < f.length; v += 1)
          f[v] && e.virtual.slides.unshift(f[v]);
        (g = d + f.length), (b = f.length);
      } else e.virtual.slides.unshift(f);
      if (e.params.virtual.cache) {
        const v = e.virtual.cache,
          w = {};
        Object.keys(v).forEach((y) => {
          const _ = v[y],
            C = _.getAttribute("data-swiper-slide-index");
          C && _.setAttribute("data-swiper-slide-index", parseInt(C, 10) + b),
            (w[parseInt(y, 10) + b] = _);
        }),
          (e.virtual.cache = w);
      }
      u(!0), e.slideTo(g, 0);
    }
    function m(f) {
      if (typeof f > "u" || f === null) return;
      let d = e.activeIndex;
      if (Array.isArray(f))
        for (let g = f.length - 1; g >= 0; g -= 1)
          e.params.virtual.cache &&
            (delete e.virtual.cache[f[g]],
            Object.keys(e.virtual.cache).forEach((b) => {
              b > f &&
                ((e.virtual.cache[b - 1] = e.virtual.cache[b]),
                e.virtual.cache[b - 1].setAttribute(
                  "data-swiper-slide-index",
                  b - 1
                ),
                delete e.virtual.cache[b]);
            })),
            e.virtual.slides.splice(f[g], 1),
            f[g] < d && (d -= 1),
            (d = Math.max(d, 0));
      else
        e.params.virtual.cache &&
          (delete e.virtual.cache[f],
          Object.keys(e.virtual.cache).forEach((g) => {
            g > f &&
              ((e.virtual.cache[g - 1] = e.virtual.cache[g]),
              e.virtual.cache[g - 1].setAttribute(
                "data-swiper-slide-index",
                g - 1
              ),
              delete e.virtual.cache[g]);
          })),
          e.virtual.slides.splice(f, 1),
          f < d && (d -= 1),
          (d = Math.max(d, 0));
      u(!0), e.slideTo(d, 0);
    }
    function p() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        u(!0),
        e.slideTo(0, 0);
    }
    i("beforeInit", () => {
      if (!e.params.virtual.enabled) return;
      let f;
      if (typeof e.passedParams.virtual.slides > "u") {
        const d = [...e.slidesEl.children].filter((g) =>
          g.matches(`.${e.params.slideClass}, swiper-slide`)
        );
        d.length &&
          ((e.virtual.slides = [...d]),
          (f = !0),
          d.forEach((g, b) => {
            g.setAttribute("data-swiper-slide-index", b),
              (e.virtual.cache[b] = g),
              g.remove();
          }));
      }
      f || (e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        (e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0),
        u(!1, !0);
    }),
      i("setTranslate", () => {
        e.params.virtual.enabled &&
          (e.params.cssMode && !e._immediateVirtual
            ? (clearTimeout(s),
              (s = setTimeout(() => {
                u();
              }, 100)))
            : u());
      }),
      i("init update resize", () => {
        e.params.virtual.enabled &&
          e.params.cssMode &&
          Vn(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: c,
        prependSlide: h,
        removeSlide: m,
        removeAllSlides: p,
        update: u,
      });
  }
  function rm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = Ge(),
      a = be();
    (e.keyboard = { enabled: !1 }),
      t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
    function o(c) {
      if (!e.enabled) return;
      const { rtlTranslate: h } = e;
      let m = c;
      m.originalEvent && (m = m.originalEvent);
      const p = m.keyCode || m.charCode,
        f = e.params.keyboard.pageUpDown,
        d = f && p === 33,
        g = f && p === 34,
        b = p === 37,
        v = p === 39,
        w = p === 38,
        y = p === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && v) || (e.isVertical() && y) || g)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && b) || (e.isVertical() && w) || d))
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
        if (e.params.keyboard.onlyInViewport && (d || g || b || v || w || y)) {
          let _ = !1;
          if (
            Dr(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
            Dr(e.el, `.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const C = e.el,
            T = C.clientWidth,
            x = C.clientHeight,
            A = a.innerWidth,
            E = a.innerHeight,
            z = Ws(C);
          h && (z.left -= C.scrollLeft);
          const D = [
            [z.left, z.top],
            [z.left + T, z.top],
            [z.left, z.top + x],
            [z.left + T, z.top + x],
          ];
          for (let S = 0; S < D.length; S += 1) {
            const M = D[S];
            if (M[0] >= 0 && M[0] <= A && M[1] >= 0 && M[1] <= E) {
              if (M[0] === 0 && M[1] === 0) continue;
              _ = !0;
            }
          }
          if (!_) return;
        }
        e.isHorizontal()
          ? ((d || g || b || v) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (((g || v) && !h) || ((d || b) && h)) && e.slideNext(),
            (((d || b) && !h) || ((g || v) && h)) && e.slidePrev())
          : ((d || g || w || y) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (g || y) && e.slideNext(),
            (d || w) && e.slidePrev()),
          r("keyPress", p);
      }
    }
    function l() {
      e.keyboard.enabled ||
        (s.addEventListener("keydown", o), (e.keyboard.enabled = !0));
    }
    function u() {
      e.keyboard.enabled &&
        (s.removeEventListener("keydown", o), (e.keyboard.enabled = !1));
    }
    i("init", () => {
      e.params.keyboard.enabled && l();
    }),
      i("destroy", () => {
        e.keyboard.enabled && u();
      }),
      Object.assign(e.keyboard, { enable: l, disable: u });
  }
  function nm(n) {
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
      o = Zt(),
      l;
    const u = [];
    function c(w) {
      let T = 0,
        x = 0,
        A = 0,
        E = 0;
      return (
        "detail" in w && (x = w.detail),
        "wheelDelta" in w && (x = -w.wheelDelta / 120),
        "wheelDeltaY" in w && (x = -w.wheelDeltaY / 120),
        "wheelDeltaX" in w && (T = -w.wheelDeltaX / 120),
        "axis" in w && w.axis === w.HORIZONTAL_AXIS && ((T = x), (x = 0)),
        (A = T * 10),
        (E = x * 10),
        "deltaY" in w && (E = w.deltaY),
        "deltaX" in w && (A = w.deltaX),
        w.shiftKey && !A && ((A = E), (E = 0)),
        (A || E) &&
          w.deltaMode &&
          (w.deltaMode === 1
            ? ((A *= 40), (E *= 40))
            : ((A *= 800), (E *= 800))),
        A && !T && (T = A < 1 ? -1 : 1),
        E && !x && (x = E < 1 ? -1 : 1),
        { spinX: T, spinY: x, pixelX: A, pixelY: E }
      );
    }
    function h() {
      e.enabled && (e.mouseEntered = !0);
    }
    function m() {
      e.enabled && (e.mouseEntered = !1);
    }
    function p(w) {
      return (e.params.mousewheel.thresholdDelta &&
        w.delta < e.params.mousewheel.thresholdDelta) ||
        (e.params.mousewheel.thresholdTime &&
          Zt() - o < e.params.mousewheel.thresholdTime)
        ? !1
        : w.delta >= 6 && Zt() - o < 60
        ? !0
        : (w.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), r("scroll", w.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), r("scroll", w.raw)),
          (o = new s.Date().getTime()),
          !1);
    }
    function f(w) {
      const y = e.params.mousewheel;
      if (w.direction < 0) {
        if (e.isEnd && !e.params.loop && y.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges) return !0;
      return !1;
    }
    function d(w) {
      let y = w,
        _ = !0;
      if (
        !e.enabled ||
        w.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
      )
        return;
      const C = e.params.mousewheel;
      e.params.cssMode && y.preventDefault();
      let T = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (T = document.querySelector(e.params.mousewheel.eventsTarget));
      const x = T && T.contains(y.target);
      if (!e.mouseEntered && !x && !C.releaseOnEdges) return !0;
      y.originalEvent && (y = y.originalEvent);
      let A = 0;
      const E = e.rtlTranslate ? -1 : 1,
        z = c(y);
      if (C.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(z.pixelX) > Math.abs(z.pixelY)) A = -z.pixelX * E;
          else return !0;
        else if (Math.abs(z.pixelY) > Math.abs(z.pixelX)) A = -z.pixelY;
        else return !0;
      else
        A = Math.abs(z.pixelX) > Math.abs(z.pixelY) ? -z.pixelX * E : -z.pixelY;
      if (A === 0) return !0;
      C.invert && (A = -A);
      let D = e.getTranslate() + A * C.sensitivity;
      if (
        (D >= e.minTranslate() && (D = e.minTranslate()),
        D <= e.maxTranslate() && (D = e.maxTranslate()),
        (_ = e.params.loop
          ? !0
          : !(D === e.minTranslate() || D === e.maxTranslate())),
        _ && e.params.nested && y.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const S = {
          time: Zt(),
          delta: Math.abs(A),
          direction: Math.sign(A),
          raw: w,
        };
        u.length >= 2 && u.shift();
        const M = u.length ? u[u.length - 1] : void 0;
        if (
          (u.push(S),
          M
            ? (S.direction !== M.direction ||
                S.delta > M.delta ||
                S.time > M.time + 150) &&
              p(S)
            : p(S),
          f(S))
        )
          return !0;
      } else {
        const S = { time: Zt(), delta: Math.abs(A), direction: Math.sign(A) },
          M =
            l &&
            S.time < l.time + 500 &&
            S.delta <= l.delta &&
            S.direction === l.direction;
        if (!M) {
          l = void 0;
          let L = e.getTranslate() + A * C.sensitivity;
          const F = e.isBeginning,
            P = e.isEnd;
          if (
            (L >= e.minTranslate() && (L = e.minTranslate()),
            L <= e.maxTranslate() && (L = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(L),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!F && e.isBeginning) || (!P && e.isEnd)) &&
              e.updateSlidesClasses(),
            e.params.loop &&
              e.loopFix({
                direction: S.direction < 0 ? "next" : "prev",
                byMousewheel: !0,
              }),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(a), (a = void 0), u.length >= 15 && u.shift();
            const I = u.length ? u[u.length - 1] : void 0,
              O = u[0];
            if (
              (u.push(S),
              I && (S.delta > I.delta || S.direction !== I.direction))
            )
              u.splice(0);
            else if (
              u.length >= 15 &&
              S.time - O.time < 500 &&
              O.delta - S.delta >= 1 &&
              S.delta <= 6
            ) {
              const k = A > 0 ? 0.8 : 0.2;
              (l = S),
                u.splice(0),
                (a = br(() => {
                  e.destroyed ||
                    !e.params ||
                    e.slideToClosest(e.params.speed, !0, void 0, k);
                }, 0));
            }
            a ||
              (a = br(() => {
                if (e.destroyed || !e.params) return;
                const k = 0.5;
                (l = S),
                  u.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, k);
              }, 500));
          }
          if (
            (M || r("scroll", y),
            e.params.autoplay &&
              e.params.autoplay.disableOnInteraction &&
              e.autoplay.stop(),
            C.releaseOnEdges &&
              (L === e.minTranslate() || L === e.maxTranslate()))
          )
            return !0;
        }
      }
      return y.preventDefault ? y.preventDefault() : (y.returnValue = !1), !1;
    }
    function g(w) {
      let y = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (y = document.querySelector(e.params.mousewheel.eventsTarget)),
        y[w]("mouseenter", h),
        y[w]("mouseleave", m),
        y[w]("wheel", d);
    }
    function b() {
      return e.params.cssMode
        ? (e.wrapperEl.removeEventListener("wheel", d), !0)
        : e.mousewheel.enabled
        ? !1
        : (g("addEventListener"), (e.mousewheel.enabled = !0), !0);
    }
    function v() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, d), !0)
        : e.mousewheel.enabled
        ? (g("removeEventListener"), (e.mousewheel.enabled = !1), !0)
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
  function Yo(n, e, t, i) {
    return (
      n.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let s = Ke(n.el, `.${i[r]}`)[0];
            s || ((s = $t("div", i[r])), (s.className = i[r]), n.el.append(s)),
              (t[r] = s),
              (e[r] = s);
          }
        }),
      t
    );
  }
  function sm(n) {
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
    function s(f) {
      let d;
      return f &&
        typeof f == "string" &&
        e.isElement &&
        ((d = e.el.querySelector(f) || e.hostEl.querySelector(f)), d)
        ? d
        : (f &&
            (typeof f == "string" && (d = [...document.querySelectorAll(f)]),
            e.params.uniqueNavElements &&
            typeof f == "string" &&
            d &&
            d.length > 1 &&
            e.el.querySelectorAll(f).length === 1
              ? (d = e.el.querySelector(f))
              : d && d.length === 1 && (d = d[0])),
          f && !d ? f : d);
    }
    function a(f, d) {
      const g = e.params.navigation;
      (f = se(f)),
        f.forEach((b) => {
          b &&
            (b.classList[d ? "add" : "remove"](...g.disabledClass.split(" ")),
            b.tagName === "BUTTON" && (b.disabled = d),
            e.params.watchOverflow &&
              e.enabled &&
              b.classList[e.isLocked ? "add" : "remove"](g.lockClass));
        });
    }
    function o() {
      const { nextEl: f, prevEl: d } = e.navigation;
      if (e.params.loop) {
        a(d, !1), a(f, !1);
        return;
      }
      a(d, e.isBeginning && !e.params.rewind),
        a(f, e.isEnd && !e.params.rewind);
    }
    function l(f) {
      f.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function u(f) {
      f.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function c() {
      const f = e.params.navigation;
      if (
        ((e.params.navigation = Yo(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(f.nextEl || f.prevEl))
      )
        return;
      let d = s(f.nextEl),
        g = s(f.prevEl);
      Object.assign(e.navigation, { nextEl: d, prevEl: g }),
        (d = se(d)),
        (g = se(g));
      const b = (v, w) => {
        v && v.addEventListener("click", w === "next" ? u : l),
          !e.enabled && v && v.classList.add(...f.lockClass.split(" "));
      };
      d.forEach((v) => b(v, "next")), g.forEach((v) => b(v, "prev"));
    }
    function h() {
      let { nextEl: f, prevEl: d } = e.navigation;
      (f = se(f)), (d = se(d));
      const g = (b, v) => {
        b.removeEventListener("click", v === "next" ? u : l),
          b.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      f.forEach((b) => g(b, "next")), d.forEach((b) => g(b, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? p() : (c(), o());
    }),
      i("toEdge fromEdge lock unlock", () => {
        o();
      }),
      i("destroy", () => {
        h();
      }),
      i("enable disable", () => {
        let { nextEl: f, prevEl: d } = e.navigation;
        if (((f = se(f)), (d = se(d)), e.enabled)) {
          o();
          return;
        }
        [...f, ...d]
          .filter((g) => !!g)
          .forEach((g) => g.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (f, d) => {
        let { nextEl: g, prevEl: b } = e.navigation;
        (g = se(g)), (b = se(b));
        const v = d.target;
        let w = b.includes(v) || g.includes(v);
        if (e.isElement && !w) {
          const y = d.path || (d.composedPath && d.composedPath());
          y && (w = y.find((_) => g.includes(_) || b.includes(_)));
        }
        if (e.params.navigation.hideOnClick && !w) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === v || e.pagination.el.contains(v))
          )
            return;
          let y;
          g.length
            ? (y = g[0].classList.contains(e.params.navigation.hiddenClass))
            : b.length &&
              (y = b[0].classList.contains(e.params.navigation.hiddenClass)),
            r(y === !0 ? "navigationShow" : "navigationHide"),
            [...g, ...b]
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
          c(),
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
      init: c,
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
  function am(n) {
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
    function u(v, w) {
      const { bulletActiveClass: y } = e.params.pagination;
      v &&
        ((v = v[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
        v &&
          (v.classList.add(`${y}-${w}`),
          (v = v[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
          v && v.classList.add(`${y}-${w}-${w}`)));
    }
    function c(v, w, y) {
      if (((v = v % y), (w = w % y), w === v + 1)) return "next";
      if (w === v - 1) return "previous";
    }
    function h(v) {
      const w = v.target.closest(Ai(e.params.pagination.bulletClass));
      if (!w) return;
      v.preventDefault();
      const y = Wn(w) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === y) return;
        const _ = c(e.realIndex, y, e.slides.length);
        _ === "next"
          ? e.slideNext()
          : _ === "previous"
          ? e.slidePrev()
          : e.slideToLoop(y);
      } else e.slideTo(y);
    }
    function m() {
      const v = e.rtl,
        w = e.params.pagination;
      if (l()) return;
      let y = e.pagination.el;
      y = se(y);
      let _, C;
      const T =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        x = e.params.loop
          ? Math.ceil(T / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((C = e.previousRealIndex || 0),
            (_ =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex < "u"
          ? ((_ = e.snapIndex), (C = e.previousSnapIndex))
          : ((C = e.previousIndex || 0), (_ = e.activeIndex || 0)),
        w.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const A = e.pagination.bullets;
        let E, z, D;
        if (
          (w.dynamicBullets &&
            ((a = Io(A[0], e.isHorizontal() ? "width" : "height")),
            y.forEach((S) => {
              S.style[e.isHorizontal() ? "width" : "height"] = `${
                a * (w.dynamicMainBullets + 4)
              }px`;
            }),
            w.dynamicMainBullets > 1 &&
              C !== void 0 &&
              ((o += _ - (C || 0)),
              o > w.dynamicMainBullets - 1
                ? (o = w.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (E = Math.max(_ - o, 0)),
            (z = E + (Math.min(A.length, w.dynamicMainBullets) - 1)),
            (D = (z + E) / 2)),
          A.forEach((S) => {
            const M = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((L) => `${w.bulletActiveClass}${L}`),
            ]
              .map((L) =>
                typeof L == "string" && L.includes(" ") ? L.split(" ") : L
              )
              .flat();
            S.classList.remove(...M);
          }),
          y.length > 1)
        )
          A.forEach((S) => {
            const M = Wn(S);
            M === _
              ? S.classList.add(...w.bulletActiveClass.split(" "))
              : e.isElement && S.setAttribute("part", "bullet"),
              w.dynamicBullets &&
                (M >= E &&
                  M <= z &&
                  S.classList.add(...`${w.bulletActiveClass}-main`.split(" ")),
                M === E && u(S, "prev"),
                M === z && u(S, "next"));
          });
        else {
          const S = A[_];
          if (
            (S && S.classList.add(...w.bulletActiveClass.split(" ")),
            e.isElement &&
              A.forEach((M, L) => {
                M.setAttribute("part", L === _ ? "bullet-active" : "bullet");
              }),
            w.dynamicBullets)
          ) {
            const M = A[E],
              L = A[z];
            for (let F = E; F <= z; F += 1)
              A[F] &&
                A[F].classList.add(...`${w.bulletActiveClass}-main`.split(" "));
            u(M, "prev"), u(L, "next");
          }
        }
        if (w.dynamicBullets) {
          const S = Math.min(A.length, w.dynamicMainBullets + 4),
            M = (a * S - a) / 2 - D * a,
            L = v ? "right" : "left";
          A.forEach((F) => {
            F.style[e.isHorizontal() ? L : "top"] = `${M}px`;
          });
        }
      }
      y.forEach((A, E) => {
        if (
          (w.type === "fraction" &&
            (A.querySelectorAll(Ai(w.currentClass)).forEach((z) => {
              z.textContent = w.formatFractionCurrent(_ + 1);
            }),
            A.querySelectorAll(Ai(w.totalClass)).forEach((z) => {
              z.textContent = w.formatFractionTotal(x);
            })),
          w.type === "progressbar")
        ) {
          let z;
          w.progressbarOpposite
            ? (z = e.isHorizontal() ? "vertical" : "horizontal")
            : (z = e.isHorizontal() ? "horizontal" : "vertical");
          const D = (_ + 1) / x;
          let S = 1,
            M = 1;
          z === "horizontal" ? (S = D) : (M = D),
            A.querySelectorAll(Ai(w.progressbarFillClass)).forEach((L) => {
              (L.style.transform = `translate3d(0,0,0) scaleX(${S}) scaleY(${M})`),
                (L.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        w.type === "custom" && w.renderCustom
          ? ((A.innerHTML = w.renderCustom(e, _ + 1, x)),
            E === 0 && r("paginationRender", A))
          : (E === 0 && r("paginationRender", A), r("paginationUpdate", A)),
          e.params.watchOverflow &&
            e.enabled &&
            A.classList[e.isLocked ? "add" : "remove"](w.lockClass);
      });
    }
    function p() {
      const v = e.params.pagination;
      if (l()) return;
      const w =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
      let y = e.pagination.el;
      y = se(y);
      let _ = "";
      if (v.type === "bullets") {
        let C = e.params.loop
          ? Math.ceil(w / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && C > w && (C = w);
        for (let T = 0; T < C; T += 1)
          v.renderBullet
            ? (_ += v.renderBullet.call(e, T, v.bulletClass))
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
        y.forEach((C) => {
          v.type !== "custom" && (C.innerHTML = _ || ""),
            v.type === "bullets" &&
              e.pagination.bullets.push(
                ...C.querySelectorAll(Ai(v.bulletClass))
              );
        }),
        v.type !== "custom" && r("paginationRender", y[0]);
    }
    function f() {
      e.params.pagination = Yo(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const v = e.params.pagination;
      if (!v.el) return;
      let w;
      typeof v.el == "string" && e.isElement && (w = e.el.querySelector(v.el)),
        !w &&
          typeof v.el == "string" &&
          (w = [...document.querySelectorAll(v.el)]),
        w || (w = v.el),
        !(!w || w.length === 0) &&
          (e.params.uniqueNavElements &&
            typeof v.el == "string" &&
            Array.isArray(w) &&
            w.length > 1 &&
            ((w = [...e.el.querySelectorAll(v.el)]),
            w.length > 1 && (w = w.find((y) => Dr(y, ".swiper")[0] === e.el))),
          Array.isArray(w) && w.length === 1 && (w = w[0]),
          Object.assign(e.pagination, { el: w }),
          (w = se(w)),
          w.forEach((y) => {
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
    function d() {
      const v = e.params.pagination;
      if (l()) return;
      let w = e.pagination.el;
      w &&
        ((w = se(w)),
        w.forEach((y) => {
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
      let { el: w } = e.pagination;
      (w = se(w)),
        w.forEach((y) => {
          y.classList.remove(v.horizontalClass, v.verticalClass),
            y.classList.add(
              e.isHorizontal() ? v.horizontalClass : v.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.pagination.enabled === !1 ? b() : (f(), p(), m());
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
        d();
      }),
      i("enable disable", () => {
        let { el: v } = e.pagination;
        v &&
          ((v = se(v)),
          v.forEach((w) =>
            w.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      i("lock unlock", () => {
        m();
      }),
      i("click", (v, w) => {
        const y = w.target,
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
          const C = _[0].classList.contains(e.params.pagination.hiddenClass);
          r(C === !0 ? "paginationShow" : "paginationHide"),
            _.forEach((T) =>
              T.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const g = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: v } = e.pagination;
        v &&
          ((v = se(v)),
          v.forEach((w) =>
            w.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          f(),
          p(),
          m();
      },
      b = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: v } = e.pagination;
        v &&
          ((v = se(v)),
          v.forEach((w) =>
            w.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          d();
      };
    Object.assign(e.pagination, {
      enable: g,
      disable: b,
      render: p,
      update: m,
      init: f,
      destroy: d,
    });
  }
  function om(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = Ge();
    let a = !1,
      o = null,
      l = null,
      u,
      c,
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
      const { scrollbar: D, rtlTranslate: S } = e,
        { dragEl: M, el: L } = D,
        F = e.params.scrollbar,
        P = e.params.loop ? e.progressLoop : e.progress;
      let I = c,
        O = (h - c) * P;
      S
        ? ((O = -O), O > 0 ? ((I = c - O), (O = 0)) : -O + c > h && (I = h + O))
        : O < 0
        ? ((I = c + O), (O = 0))
        : O + c > h && (I = h - O),
        e.isHorizontal()
          ? ((M.style.transform = `translate3d(${O}px, 0, 0)`),
            (M.style.width = `${I}px`))
          : ((M.style.transform = `translate3d(0px, ${O}px, 0)`),
            (M.style.height = `${I}px`)),
        F.hide &&
          (clearTimeout(o),
          (L.style.opacity = 1),
          (o = setTimeout(() => {
            (L.style.opacity = 0), (L.style.transitionDuration = "400ms");
          }, 1e3)));
    }
    function f(D) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        (e.scrollbar.dragEl.style.transitionDuration = `${D}ms`);
    }
    function d() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: D } = e,
        { dragEl: S, el: M } = D;
      (S.style.width = ""),
        (S.style.height = ""),
        (h = e.isHorizontal() ? M.offsetWidth : M.offsetHeight),
        (m =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (c = h * m)
          : (c = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (S.style.width = `${c}px`)
          : (S.style.height = `${c}px`),
        m >= 1 ? (M.style.display = "none") : (M.style.display = ""),
        e.params.scrollbar.hide && (M.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          D.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function g(D) {
      return e.isHorizontal() ? D.clientX : D.clientY;
    }
    function b(D) {
      const { scrollbar: S, rtlTranslate: M } = e,
        { el: L } = S;
      let F;
      (F =
        (g(D) -
          Ws(L)[e.isHorizontal() ? "left" : "top"] -
          (u !== null ? u : c / 2)) /
        (h - c)),
        (F = Math.max(Math.min(F, 1), 0)),
        M && (F = 1 - F);
      const P = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * F;
      e.updateProgress(P),
        e.setTranslate(P),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function v(D) {
      const S = e.params.scrollbar,
        { scrollbar: M, wrapperEl: L } = e,
        { el: F, dragEl: P } = M;
      (a = !0),
        (u =
          D.target === P
            ? g(D) -
              D.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        D.preventDefault(),
        D.stopPropagation(),
        (L.style.transitionDuration = "100ms"),
        (P.style.transitionDuration = "100ms"),
        b(D),
        clearTimeout(l),
        (F.style.transitionDuration = "0ms"),
        S.hide && (F.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        r("scrollbarDragStart", D);
    }
    function w(D) {
      const { scrollbar: S, wrapperEl: M } = e,
        { el: L, dragEl: F } = S;
      a &&
        (D.preventDefault && D.cancelable
          ? D.preventDefault()
          : (D.returnValue = !1),
        b(D),
        (M.style.transitionDuration = "0ms"),
        (L.style.transitionDuration = "0ms"),
        (F.style.transitionDuration = "0ms"),
        r("scrollbarDragMove", D));
    }
    function y(D) {
      const S = e.params.scrollbar,
        { scrollbar: M, wrapperEl: L } = e,
        { el: F } = M;
      a &&
        ((a = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (L.style.transitionDuration = "")),
        S.hide &&
          (clearTimeout(l),
          (l = br(() => {
            (F.style.opacity = 0), (F.style.transitionDuration = "400ms");
          }, 1e3))),
        r("scrollbarDragEnd", D),
        S.snapOnRelease && e.slideToClosest());
    }
    function _(D) {
      const { scrollbar: S, params: M } = e,
        L = S.el;
      if (!L) return;
      const F = L,
        P = M.passiveListeners ? { passive: !1, capture: !1 } : !1,
        I = M.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!F) return;
      const O = D === "on" ? "addEventListener" : "removeEventListener";
      F[O]("pointerdown", v, P),
        s[O]("pointermove", w, P),
        s[O]("pointerup", y, I);
    }
    function C() {
      !e.params.scrollbar.el || !e.scrollbar.el || _("on");
    }
    function T() {
      !e.params.scrollbar.el || !e.scrollbar.el || _("off");
    }
    function x() {
      const { scrollbar: D, el: S } = e;
      e.params.scrollbar = Yo(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const M = e.params.scrollbar;
      if (!M.el) return;
      let L;
      if (
        (typeof M.el == "string" &&
          e.isElement &&
          (L = e.el.querySelector(M.el)),
        !L && typeof M.el == "string")
      ) {
        if (((L = s.querySelectorAll(M.el)), !L.length)) return;
      } else L || (L = M.el);
      e.params.uniqueNavElements &&
        typeof M.el == "string" &&
        L.length > 1 &&
        S.querySelectorAll(M.el).length === 1 &&
        (L = S.querySelector(M.el)),
        L.length > 0 && (L = L[0]),
        L.classList.add(e.isHorizontal() ? M.horizontalClass : M.verticalClass);
      let F;
      L &&
        ((F = L.querySelector(Ai(e.params.scrollbar.dragClass))),
        F || ((F = $t("div", e.params.scrollbar.dragClass)), L.append(F))),
        Object.assign(D, { el: L, dragEl: F }),
        M.draggable && C(),
        L &&
          L.classList[e.enabled ? "remove" : "add"](
            ...Xi(e.params.scrollbar.lockClass)
          );
    }
    function A() {
      const D = e.params.scrollbar,
        S = e.scrollbar.el;
      S &&
        S.classList.remove(
          ...Xi(e.isHorizontal() ? D.horizontalClass : D.verticalClass)
        ),
        T();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const D = e.params.scrollbar;
      let { el: S } = e.scrollbar;
      (S = se(S)),
        S.forEach((M) => {
          M.classList.remove(D.horizontalClass, D.verticalClass),
            M.classList.add(
              e.isHorizontal() ? D.horizontalClass : D.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? z() : (x(), d(), p());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        d();
      }),
      i("setTranslate", () => {
        p();
      }),
      i("setTransition", (D, S) => {
        f(S);
      }),
      i("enable disable", () => {
        const { el: D } = e.scrollbar;
        D &&
          D.classList[e.enabled ? "remove" : "add"](
            ...Xi(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        A();
      });
    const E = () => {
        e.el.classList.remove(...Xi(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...Xi(e.params.scrollbar.scrollbarDisabledClass)
            ),
          x(),
          d(),
          p();
      },
      z = () => {
        e.el.classList.add(...Xi(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...Xi(e.params.scrollbar.scrollbarDisabledClass)
            ),
          A();
      };
    Object.assign(e.scrollbar, {
      enable: E,
      disable: z,
      updateSize: d,
      setTranslate: p,
      init: x,
      destroy: A,
    });
  }
  function lm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ parallax: { enabled: !1 } });
    const r =
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      s = (l, u) => {
        const { rtl: c } = e,
          h = c ? -1 : 1,
          m = l.getAttribute("data-swiper-parallax") || "0";
        let p = l.getAttribute("data-swiper-parallax-x"),
          f = l.getAttribute("data-swiper-parallax-y");
        const d = l.getAttribute("data-swiper-parallax-scale"),
          g = l.getAttribute("data-swiper-parallax-opacity"),
          b = l.getAttribute("data-swiper-parallax-rotate");
        if (
          (p || f
            ? ((p = p || "0"), (f = f || "0"))
            : e.isHorizontal()
            ? ((p = m), (f = "0"))
            : ((f = m), (p = "0")),
          p.indexOf("%") >= 0
            ? (p = `${parseInt(p, 10) * u * h}%`)
            : (p = `${p * u * h}px`),
          f.indexOf("%") >= 0
            ? (f = `${parseInt(f, 10) * u}%`)
            : (f = `${f * u}px`),
          typeof g < "u" && g !== null)
        ) {
          const w = g - (g - 1) * (1 - Math.abs(u));
          l.style.opacity = w;
        }
        let v = `translate3d(${p}, ${f}, 0px)`;
        if (typeof d < "u" && d !== null) {
          const w = d - (d - 1) * (1 - Math.abs(u));
          v += ` scale(${w})`;
        }
        if (b && typeof b < "u" && b !== null) {
          const w = b * u * -1;
          v += ` rotate(${w}deg)`;
        }
        l.style.transform = v;
      },
      a = () => {
        const { el: l, slides: u, progress: c, snapGrid: h, isElement: m } = e,
          p = Ke(l, r);
        e.isElement && p.push(...Ke(e.hostEl, r)),
          p.forEach((f) => {
            s(f, c);
          }),
          u.forEach((f, d) => {
            let g = f.progress;
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== "auto" &&
              (g += Math.ceil(d / 2) - c * (h.length - 1)),
              (g = Math.min(Math.max(g, -1), 1)),
              f
                .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
                .forEach((b) => {
                  s(b, g);
                });
          });
      },
      o = function (l) {
        l === void 0 && (l = e.params.speed);
        const { el: u, hostEl: c } = e,
          h = [...u.querySelectorAll(r)];
        e.isElement && h.push(...c.querySelectorAll(r)),
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
      i("setTransition", (l, u) => {
        e.params.parallax.enabled && o(u);
      });
  }
  function um(n) {
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
      u = { x: 0, y: 0 };
    const c = -3;
    let h, m;
    const p = [],
      f = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3,
      },
      d = {
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
      g = {
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
          const N = f.imageEl,
            $ = f.slideEl;
          r("zoomChange", B, N, $);
        }
        b = B;
      },
    });
    function v() {
      if (p.length < 2) return 1;
      const B = p[0].pageX,
        N = p[0].pageY,
        $ = p[1].pageX,
        q = p[1].pageY;
      return Math.sqrt(($ - B) ** 2 + (q - N) ** 2);
    }
    function w() {
      const B = e.params.zoom,
        N = f.imageWrapEl.getAttribute("data-swiper-zoom") || B.maxRatio;
      if (B.limitToOriginalSize && f.imageEl && f.imageEl.naturalWidth) {
        const $ = f.imageEl.naturalWidth / f.imageEl.offsetWidth;
        return Math.min($, N);
      }
      return N;
    }
    function y() {
      if (p.length < 2) return { x: null, y: null };
      const B = f.imageEl.getBoundingClientRect();
      return [
        (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - B.x - s.scrollX) / a,
        (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - B.y - s.scrollY) / a,
      ];
    }
    function _() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function C(B) {
      const N = _();
      return !!(
        B.target.matches(N) ||
        e.slides.filter(($) => $.contains(B.target)).length > 0
      );
    }
    function T(B) {
      const N = `.${e.params.zoom.containerClass}`;
      return !!(
        B.target.matches(N) ||
        [...e.hostEl.querySelectorAll(N)].filter(($) => $.contains(B.target))
          .length > 0
      );
    }
    function x(B) {
      if ((B.pointerType === "mouse" && p.splice(0, p.length), !C(B))) return;
      const N = e.params.zoom;
      if (((h = !1), (m = !1), p.push(B), !(p.length < 2))) {
        if (((h = !0), (f.scaleStart = v()), !f.slideEl)) {
          (f.slideEl = B.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
            f.slideEl || (f.slideEl = e.slides[e.activeIndex]);
          let $ = f.slideEl.querySelector(`.${N.containerClass}`);
          if (
            ($ &&
              ($ = $.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
            (f.imageEl = $),
            $
              ? (f.imageWrapEl = Dr(f.imageEl, `.${N.containerClass}`)[0])
              : (f.imageWrapEl = void 0),
            !f.imageWrapEl)
          ) {
            f.imageEl = void 0;
            return;
          }
          f.maxRatio = w();
        }
        if (f.imageEl) {
          const [$, q] = y();
          (f.originX = $),
            (f.originY = q),
            (f.imageEl.style.transitionDuration = "0ms");
        }
        o = !0;
      }
    }
    function A(B) {
      if (!C(B)) return;
      const N = e.params.zoom,
        $ = e.zoom,
        q = p.findIndex((ce) => ce.pointerId === B.pointerId);
      q >= 0 && (p[q] = B),
        !(p.length < 2) &&
          ((m = !0),
          (f.scaleMove = v()),
          f.imageEl &&
            (($.scale = (f.scaleMove / f.scaleStart) * a),
            $.scale > f.maxRatio &&
              ($.scale = f.maxRatio - 1 + ($.scale - f.maxRatio + 1) ** 0.5),
            $.scale < N.minRatio &&
              ($.scale = N.minRatio + 1 - (N.minRatio - $.scale + 1) ** 0.5),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${$.scale})`)));
    }
    function E(B) {
      if (!C(B) || (B.pointerType === "mouse" && B.type === "pointerout"))
        return;
      const N = e.params.zoom,
        $ = e.zoom,
        q = p.findIndex((ce) => ce.pointerId === B.pointerId);
      q >= 0 && p.splice(q, 1),
        !(!h || !m) &&
          ((h = !1),
          (m = !1),
          f.imageEl &&
            (($.scale = Math.max(Math.min($.scale, f.maxRatio), N.minRatio)),
            (f.imageEl.style.transitionDuration = `${e.params.speed}ms`),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${$.scale})`),
            (a = $.scale),
            (o = !1),
            $.scale > 1 && f.slideEl
              ? f.slideEl.classList.add(`${N.zoomedSlideClass}`)
              : $.scale <= 1 &&
                f.slideEl &&
                f.slideEl.classList.remove(`${N.zoomedSlideClass}`),
            $.scale === 1 &&
              ((f.originX = 0), (f.originY = 0), (f.slideEl = void 0))));
    }
    let z;
    function D() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function S() {
      clearTimeout(z),
        (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
        (z = setTimeout(() => {
          e.destroyed || D();
        }));
    }
    function M(B) {
      const N = e.device;
      if (!f.imageEl || d.isTouched) return;
      N.android && B.cancelable && B.preventDefault(), (d.isTouched = !0);
      const $ = p.length > 0 ? p[0] : B;
      (d.touchesStart.x = $.pageX), (d.touchesStart.y = $.pageY);
    }
    function L(B) {
      const $ = B.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
      if (!C(B) || !T(B)) return;
      const q = e.zoom;
      if (!f.imageEl) return;
      if (!d.isTouched || !f.slideEl) {
        $ && I(B);
        return;
      }
      if ($) {
        I(B);
        return;
      }
      d.isMoved ||
        ((d.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
        (d.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
        (d.startX = Oo(f.imageWrapEl, "x") || 0),
        (d.startY = Oo(f.imageWrapEl, "y") || 0),
        (f.slideWidth = f.slideEl.offsetWidth),
        (f.slideHeight = f.slideEl.offsetHeight),
        (f.imageWrapEl.style.transitionDuration = "0ms"));
      const ce = d.width * q.scale,
        Je = d.height * q.scale;
      if (
        ((d.minX = Math.min(f.slideWidth / 2 - ce / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - Je / 2, 0)),
        (d.maxY = -d.minY),
        (d.touchesCurrent.x = p.length > 0 ? p[0].pageX : B.pageX),
        (d.touchesCurrent.y = p.length > 0 ? p[0].pageY : B.pageY),
        Math.max(
          Math.abs(d.touchesCurrent.x - d.touchesStart.x),
          Math.abs(d.touchesCurrent.y - d.touchesStart.y)
        ) > 5 && (e.allowClick = !1),
        !d.isMoved && !o)
      ) {
        if (
          e.isHorizontal() &&
          ((Math.floor(d.minX) === Math.floor(d.startX) &&
            d.touchesCurrent.x < d.touchesStart.x) ||
            (Math.floor(d.maxX) === Math.floor(d.startX) &&
              d.touchesCurrent.x > d.touchesStart.x))
        ) {
          (d.isTouched = !1), D();
          return;
        }
        if (
          !e.isHorizontal() &&
          ((Math.floor(d.minY) === Math.floor(d.startY) &&
            d.touchesCurrent.y < d.touchesStart.y) ||
            (Math.floor(d.maxY) === Math.floor(d.startY) &&
              d.touchesCurrent.y > d.touchesStart.y))
        ) {
          (d.isTouched = !1), D();
          return;
        }
      }
      B.cancelable && B.preventDefault(),
        B.stopPropagation(),
        S(),
        (d.isMoved = !0);
      const De = (q.scale - a) / (f.maxRatio - e.params.zoom.minRatio),
        { originX: K, originY: ne } = f;
      (d.currentX =
        d.touchesCurrent.x -
        d.touchesStart.x +
        d.startX +
        De * (d.width - K * 2)),
        (d.currentY =
          d.touchesCurrent.y -
          d.touchesStart.y +
          d.startY +
          De * (d.height - ne * 2)),
        d.currentX < d.minX &&
          (d.currentX = d.minX + 1 - (d.minX - d.currentX + 1) ** 0.8),
        d.currentX > d.maxX &&
          (d.currentX = d.maxX - 1 + (d.currentX - d.maxX + 1) ** 0.8),
        d.currentY < d.minY &&
          (d.currentY = d.minY + 1 - (d.minY - d.currentY + 1) ** 0.8),
        d.currentY > d.maxY &&
          (d.currentY = d.maxY - 1 + (d.currentY - d.maxY + 1) ** 0.8),
        g.prevPositionX || (g.prevPositionX = d.touchesCurrent.x),
        g.prevPositionY || (g.prevPositionY = d.touchesCurrent.y),
        g.prevTime || (g.prevTime = Date.now()),
        (g.x =
          (d.touchesCurrent.x - g.prevPositionX) /
          (Date.now() - g.prevTime) /
          2),
        (g.y =
          (d.touchesCurrent.y - g.prevPositionY) /
          (Date.now() - g.prevTime) /
          2),
        Math.abs(d.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
        Math.abs(d.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
        (g.prevPositionX = d.touchesCurrent.x),
        (g.prevPositionY = d.touchesCurrent.y),
        (g.prevTime = Date.now()),
        (f.imageWrapEl.style.transform = `translate3d(${d.currentX}px, ${d.currentY}px,0)`);
    }
    function F() {
      const B = e.zoom;
      if (((p.length = 0), !f.imageEl)) return;
      if (!d.isTouched || !d.isMoved) {
        (d.isTouched = !1), (d.isMoved = !1);
        return;
      }
      (d.isTouched = !1), (d.isMoved = !1);
      let N = 300,
        $ = 300;
      const q = g.x * N,
        ce = d.currentX + q,
        Je = g.y * $,
        _e = d.currentY + Je;
      g.x !== 0 && (N = Math.abs((ce - d.currentX) / g.x)),
        g.y !== 0 && ($ = Math.abs((_e - d.currentY) / g.y));
      const De = Math.max(N, $);
      (d.currentX = ce), (d.currentY = _e);
      const K = d.width * B.scale,
        ne = d.height * B.scale;
      (d.minX = Math.min(f.slideWidth / 2 - K / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - ne / 2, 0)),
        (d.maxY = -d.minY),
        (d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
        (d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
        (f.imageWrapEl.style.transitionDuration = `${De}ms`),
        (f.imageWrapEl.style.transform = `translate3d(${d.currentX}px, ${d.currentY}px,0)`);
    }
    function P() {
      const B = e.zoom;
      f.slideEl &&
        e.activeIndex !== e.slides.indexOf(f.slideEl) &&
        (f.imageEl &&
          (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        f.imageWrapEl && (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        f.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
        (B.scale = 1),
        (a = 1),
        (f.slideEl = void 0),
        (f.imageEl = void 0),
        (f.imageWrapEl = void 0),
        (f.originX = 0),
        (f.originY = 0));
    }
    function I(B) {
      if (a <= 1 || !f.imageWrapEl || !C(B) || !T(B)) return;
      const N = s.getComputedStyle(f.imageWrapEl).transform,
        $ = new s.DOMMatrix(N);
      if (!l) {
        (l = !0),
          (u.x = B.clientX),
          (u.y = B.clientY),
          (d.startX = $.e),
          (d.startY = $.f),
          (d.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
          (d.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
          (f.slideWidth = f.slideEl.offsetWidth),
          (f.slideHeight = f.slideEl.offsetHeight);
        return;
      }
      const q = (B.clientX - u.x) * c,
        ce = (B.clientY - u.y) * c,
        Je = d.width * a,
        _e = d.height * a,
        De = f.slideWidth,
        K = f.slideHeight,
        ne = Math.min(De / 2 - Je / 2, 0),
        we = -ne,
        $e = Math.min(K / 2 - _e / 2, 0),
        R = -$e,
        ze = Math.max(Math.min(d.startX + q, we), ne),
        ut = Math.max(Math.min(d.startY + ce, R), $e);
      (f.imageWrapEl.style.transitionDuration = "0ms"),
        (f.imageWrapEl.style.transform = `translate3d(${ze}px, ${ut}px, 0)`),
        (u.x = B.clientX),
        (u.y = B.clientY),
        (d.startX = ze),
        (d.startY = ut),
        (d.currentX = ze),
        (d.currentY = ut);
    }
    function O(B) {
      const N = e.zoom,
        $ = e.params.zoom;
      if (!f.slideEl) {
        B &&
          B.target &&
          (f.slideEl = B.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
          f.slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (f.slideEl = Ke(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (f.slideEl = e.slides[e.activeIndex]));
        let qe = f.slideEl.querySelector(`.${$.containerClass}`);
        qe &&
          (qe = qe.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = qe),
          qe
            ? (f.imageWrapEl = Dr(f.imageEl, `.${$.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      if (!f.imageEl || !f.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        f.slideEl.classList.add(`${$.zoomedSlideClass}`);
      let q, ce, Je, _e, De, K, ne, we, $e, R, ze, ut, Yt, ve, Vt, Jt, ii, Ae;
      typeof d.touchesStart.x > "u" && B
        ? ((q = B.pageX), (ce = B.pageY))
        : ((q = d.touchesStart.x), (ce = d.touchesStart.y));
      const Qt = a,
        pe = typeof B == "number" ? B : null;
      a === 1 &&
        pe &&
        ((q = void 0),
        (ce = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0));
      const At = w();
      (N.scale = pe || At),
        (a = pe || At),
        B && !(a === 1 && pe)
          ? ((ii = f.slideEl.offsetWidth),
            (Ae = f.slideEl.offsetHeight),
            (Je = Ws(f.slideEl).left + s.scrollX),
            (_e = Ws(f.slideEl).top + s.scrollY),
            (De = Je + ii / 2 - q),
            (K = _e + Ae / 2 - ce),
            ($e = f.imageEl.offsetWidth || f.imageEl.clientWidth),
            (R = f.imageEl.offsetHeight || f.imageEl.clientHeight),
            (ze = $e * N.scale),
            (ut = R * N.scale),
            (Yt = Math.min(ii / 2 - ze / 2, 0)),
            (ve = Math.min(Ae / 2 - ut / 2, 0)),
            (Vt = -Yt),
            (Jt = -ve),
            Qt > 0 &&
            pe &&
            typeof d.currentX == "number" &&
            typeof d.currentY == "number"
              ? ((ne = (d.currentX * N.scale) / Qt),
                (we = (d.currentY * N.scale) / Qt))
              : ((ne = De * N.scale), (we = K * N.scale)),
            ne < Yt && (ne = Yt),
            ne > Vt && (ne = Vt),
            we < ve && (we = ve),
            we > Jt && (we = Jt))
          : ((ne = 0), (we = 0)),
        pe && N.scale === 1 && ((f.originX = 0), (f.originY = 0)),
        (d.currentX = ne),
        (d.currentY = we),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = `translate3d(${ne}px, ${we}px,0)`),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`);
    }
    function k() {
      const B = e.zoom,
        N = e.params.zoom;
      if (!f.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (f.slideEl = Ke(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
          : (f.slideEl = e.slides[e.activeIndex]);
        let $ = f.slideEl.querySelector(`.${N.containerClass}`);
        $ &&
          ($ = $.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = $),
          $
            ? (f.imageWrapEl = Dr(f.imageEl, `.${N.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      !f.imageEl ||
        !f.imageWrapEl ||
        (e.params.cssMode &&
          ((e.wrapperEl.style.overflow = ""),
          (e.wrapperEl.style.touchAction = "")),
        (B.scale = 1),
        (a = 1),
        (d.currentX = void 0),
        (d.currentY = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        f.slideEl.classList.remove(`${N.zoomedSlideClass}`),
        (f.slideEl = void 0),
        (f.originX = 0),
        (f.originY = 0),
        e.params.zoom.panOnMouseMove &&
          ((u = { x: 0, y: 0 }),
          l && ((l = !1), (d.startX = 0), (d.startY = 0))));
    }
    function Y(B) {
      const N = e.zoom;
      N.scale && N.scale !== 1 ? k() : O(B);
    }
    function X() {
      const B = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
        N = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: B, activeListenerWithCapture: N };
    }
    function ue() {
      const B = e.zoom;
      if (B.enabled) return;
      B.enabled = !0;
      const { passiveListener: N, activeListenerWithCapture: $ } = X();
      e.wrapperEl.addEventListener("pointerdown", x, N),
        e.wrapperEl.addEventListener("pointermove", A, $),
        ["pointerup", "pointercancel", "pointerout"].forEach((q) => {
          e.wrapperEl.addEventListener(q, E, N);
        }),
        e.wrapperEl.addEventListener("pointermove", L, $);
    }
    function re() {
      const B = e.zoom;
      if (!B.enabled) return;
      B.enabled = !1;
      const { passiveListener: N, activeListenerWithCapture: $ } = X();
      e.wrapperEl.removeEventListener("pointerdown", x, N),
        e.wrapperEl.removeEventListener("pointermove", A, $),
        ["pointerup", "pointercancel", "pointerout"].forEach((q) => {
          e.wrapperEl.removeEventListener(q, E, N);
        }),
        e.wrapperEl.removeEventListener("pointermove", L, $);
    }
    i("init", () => {
      e.params.zoom.enabled && ue();
    }),
      i("destroy", () => {
        re();
      }),
      i("touchStart", (B, N) => {
        e.zoom.enabled && M(N);
      }),
      i("touchEnd", (B, N) => {
        e.zoom.enabled && F();
      }),
      i("doubleTap", (B, N) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          Y(N);
      }),
      i("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && P();
      }),
      i("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && P();
      }),
      Object.assign(e.zoom, {
        enable: ue,
        disable: re,
        in: O,
        out: k,
        toggle: Y,
      });
  }
  function cm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
    function r(u, c) {
      const h = (function () {
        let d, g, b;
        return (v, w) => {
          for (g = -1, d = v.length; d - g > 1; )
            (b = (d + g) >> 1), v[b] <= w ? (g = b) : (d = b);
          return d;
        };
      })();
      (this.x = u), (this.y = c), (this.lastIndex = u.length - 1);
      let m, p;
      return (
        (this.interpolate = function (d) {
          return d
            ? ((p = h(this.x, d)),
              (m = p - 1),
              ((d - this.x[m]) * (this.y[p] - this.y[m])) /
                (this.x[p] - this.x[m]) +
                this.y[m])
            : 0;
        }),
        this
      );
    }
    function s(u) {
      e.controller.spline = e.params.loop
        ? new r(e.slidesGrid, u.slidesGrid)
        : new r(e.snapGrid, u.snapGrid);
    }
    function a(u, c) {
      const h = e.controller.control;
      let m, p;
      const f = e.constructor;
      function d(g) {
        if (g.destroyed) return;
        const b = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (s(g), (p = -e.controller.spline.interpolate(-b))),
          (!p || e.params.controller.by === "container") &&
            ((m =
              (g.maxTranslate() - g.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (Number.isNaN(m) || !Number.isFinite(m)) && (m = 1),
            (p = (b - e.minTranslate()) * m + g.minTranslate())),
          e.params.controller.inverse && (p = g.maxTranslate() - p),
          g.updateProgress(p),
          g.setTranslate(p, e),
          g.updateActiveIndex(),
          g.updateSlidesClasses();
      }
      if (Array.isArray(h))
        for (let g = 0; g < h.length; g += 1)
          h[g] !== c && h[g] instanceof f && d(h[g]);
      else h instanceof f && c !== h && d(h);
    }
    function o(u, c) {
      const h = e.constructor,
        m = e.controller.control;
      let p;
      function f(d) {
        d.destroyed ||
          (d.setTransition(u, e),
          u !== 0 &&
            (d.transitionStart(),
            d.params.autoHeight &&
              br(() => {
                d.updateAutoHeight();
              }),
            Gn(d.wrapperEl, () => {
              m && d.transitionEnd();
            })));
      }
      if (Array.isArray(m))
        for (p = 0; p < m.length; p += 1)
          m[p] !== c && m[p] instanceof h && f(m[p]);
      else m instanceof h && c !== m && f(m);
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
        ).forEach((c) => {
          if (
            (e.controller.control || (e.controller.control = []), c && c.swiper)
          )
            e.controller.control.push(c.swiper);
          else if (c) {
            const h = `${e.params.eventsPrefix}init`,
              m = (p) => {
                e.controller.control.push(p.detail[0]),
                  e.update(),
                  c.removeEventListener(h, m);
              };
            c.addEventListener(h, m);
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
      i("setTranslate", (u, c, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTranslate(c, h);
      }),
      i("setTransition", (u, c, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTransition(c, h);
      }),
      Object.assign(e.controller, { setTranslate: a, setTransition: o });
  }
  function dm(n) {
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
    function l(P) {
      const I = r;
      I.length !== 0 && ((I.innerHTML = ""), (I.innerHTML = P));
    }
    function u(P) {
      const I = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(P).replace(/x/g, I);
    }
    function c(P) {
      (P = se(P)),
        P.forEach((I) => {
          I.setAttribute("tabIndex", "0");
        });
    }
    function h(P) {
      (P = se(P)),
        P.forEach((I) => {
          I.setAttribute("tabIndex", "-1");
        });
    }
    function m(P, I) {
      (P = se(P)),
        P.forEach((O) => {
          O.setAttribute("role", I);
        });
    }
    function p(P, I) {
      (P = se(P)),
        P.forEach((O) => {
          O.setAttribute("aria-roledescription", I);
        });
    }
    function f(P, I) {
      (P = se(P)),
        P.forEach((O) => {
          O.setAttribute("aria-controls", I);
        });
    }
    function d(P, I) {
      (P = se(P)),
        P.forEach((O) => {
          O.setAttribute("aria-label", I);
        });
    }
    function g(P, I) {
      (P = se(P)),
        P.forEach((O) => {
          O.setAttribute("id", I);
        });
    }
    function b(P, I) {
      (P = se(P)),
        P.forEach((O) => {
          O.setAttribute("aria-live", I);
        });
    }
    function v(P) {
      (P = se(P)),
        P.forEach((I) => {
          I.setAttribute("aria-disabled", !0);
        });
    }
    function w(P) {
      (P = se(P)),
        P.forEach((I) => {
          I.setAttribute("aria-disabled", !1);
        });
    }
    function y(P) {
      if (P.keyCode !== 13 && P.keyCode !== 32) return;
      const I = e.params.a11y,
        O = P.target;
      if (
        !(
          e.pagination &&
          e.pagination.el &&
          (O === e.pagination.el || e.pagination.el.contains(P.target)) &&
          !P.target.matches(Ai(e.params.pagination.bulletClass))
        )
      ) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const k = se(e.navigation.prevEl);
          se(e.navigation.nextEl).includes(O) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? l(I.lastSlideMessage) : l(I.nextSlideMessage)),
            k.includes(O) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? l(I.firstSlideMessage) : l(I.prevSlideMessage));
        }
        e.pagination &&
          O.matches(Ai(e.params.pagination.bulletClass)) &&
          O.click();
      }
    }
    function _() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: P, prevEl: I } = e.navigation;
      I && (e.isBeginning ? (v(I), h(I)) : (w(I), c(I))),
        P && (e.isEnd ? (v(P), h(P)) : (w(P), c(P)));
    }
    function C() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function T() {
      return C() && e.params.pagination.clickable;
    }
    function x() {
      const P = e.params.a11y;
      C() &&
        e.pagination.bullets.forEach((I) => {
          e.params.pagination.clickable &&
            (c(I),
            e.params.pagination.renderBullet ||
              (m(I, "button"),
              d(
                I,
                P.paginationBulletMessage.replace(/\{\{index\}\}/, Wn(I) + 1)
              ))),
            I.matches(Ai(e.params.pagination.bulletActiveClass))
              ? I.setAttribute("aria-current", "true")
              : I.removeAttribute("aria-current");
        });
    }
    const A = (P, I, O) => {
        c(P),
          P.tagName !== "BUTTON" &&
            (m(P, "button"), P.addEventListener("keydown", y)),
          d(P, O),
          f(P, I);
      },
      E = (P) => {
        a && a !== P.target && !a.contains(P.target) && (s = !0),
          (e.a11y.clicked = !0);
      },
      z = () => {
        (s = !1),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
      },
      D = (P) => {
        o = new Date().getTime();
      },
      S = (P) => {
        if (
          e.a11y.clicked ||
          !e.params.a11y.scrollOnFocus ||
          new Date().getTime() - o < 100
        )
          return;
        const I = P.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!I || !e.slides.includes(I)) return;
        a = I;
        const O = e.slides.indexOf(I) === e.activeIndex,
          k =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(I);
        O ||
          k ||
          (P.sourceCapabilities && P.sourceCapabilities.firesTouchEvents) ||
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
      M = () => {
        const P = e.params.a11y;
        P.itemRoleDescriptionMessage &&
          p(e.slides, P.itemRoleDescriptionMessage),
          P.slideRole && m(e.slides, P.slideRole);
        const I = e.slides.length;
        P.slideLabelMessage &&
          e.slides.forEach((O, k) => {
            const Y = e.params.loop
                ? parseInt(O.getAttribute("data-swiper-slide-index"), 10)
                : k,
              X = P.slideLabelMessage
                .replace(/\{\{index\}\}/, Y + 1)
                .replace(/\{\{slidesLength\}\}/, I);
            d(O, X);
          });
      },
      L = () => {
        const P = e.params.a11y;
        e.el.append(r);
        const I = e.el;
        P.containerRoleDescriptionMessage &&
          p(I, P.containerRoleDescriptionMessage),
          P.containerMessage && d(I, P.containerMessage),
          P.containerRole && m(I, P.containerRole);
        const O = e.wrapperEl,
          k = P.id || O.getAttribute("id") || `swiper-wrapper-${u(16)}`,
          Y = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        g(O, k), b(O, Y), M();
        let { nextEl: X, prevEl: ue } = e.navigation ? e.navigation : {};
        (X = se(X)),
          (ue = se(ue)),
          X && X.forEach((B) => A(B, k, P.nextSlideMessage)),
          ue && ue.forEach((B) => A(B, k, P.prevSlideMessage)),
          T() &&
            se(e.pagination.el).forEach((N) => {
              N.addEventListener("keydown", y);
            }),
          Ge().addEventListener("visibilitychange", D),
          e.el.addEventListener("focus", S, !0),
          e.el.addEventListener("focus", S, !0),
          e.el.addEventListener("pointerdown", E, !0),
          e.el.addEventListener("pointerup", z, !0);
      };
    function F() {
      r && r.remove();
      let { nextEl: P, prevEl: I } = e.navigation ? e.navigation : {};
      (P = se(P)),
        (I = se(I)),
        P && P.forEach((k) => k.removeEventListener("keydown", y)),
        I && I.forEach((k) => k.removeEventListener("keydown", y)),
        T() &&
          se(e.pagination.el).forEach((Y) => {
            Y.removeEventListener("keydown", y);
          }),
        Ge().removeEventListener("visibilitychange", D),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", S, !0),
          e.el.removeEventListener("pointerdown", E, !0),
          e.el.removeEventListener("pointerup", z, !0));
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
          e.params.a11y.enabled && M();
        }
      ),
      i("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && _();
      }),
      i("paginationUpdate", () => {
        e.params.a11y.enabled && x();
      }),
      i("destroy", () => {
        e.params.a11y.enabled && F();
      });
  }
  function fm(n) {
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
        const f = be();
        let d;
        p ? (d = new URL(p)) : (d = f.location);
        const g = d.pathname
            .slice(1)
            .split("/")
            .filter((y) => y !== ""),
          b = g.length,
          v = g[b - 2],
          w = g[b - 1];
        return { key: v, value: w };
      },
      l = (p, f) => {
        const d = be();
        if (!r || !e.params.history.enabled) return;
        let g;
        e.params.url ? (g = new URL(e.params.url)) : (g = d.location);
        const b =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(`[data-swiper-slide-index="${f}"]`)
            : e.slides[f];
        let v = a(b.getAttribute("data-history"));
        if (e.params.history.root.length > 0) {
          let y = e.params.history.root;
          y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)),
            (v = `${y}/${p ? `${p}/` : ""}${v}`);
        } else g.pathname.includes(p) || (v = `${p ? `${p}/` : ""}${v}`);
        e.params.history.keepQuery && (v += g.search);
        const w = d.history.state;
        (w && w.value === v) ||
          (e.params.history.replaceState
            ? d.history.replaceState({ value: v }, null, v)
            : d.history.pushState({ value: v }, null, v));
      },
      u = (p, f, d) => {
        if (f)
          for (let g = 0, b = e.slides.length; g < b; g += 1) {
            const v = e.slides[g];
            if (a(v.getAttribute("data-history")) === f) {
              const y = e.getSlideIndex(v);
              e.slideTo(y, p, d);
            }
          }
        else e.slideTo(0, p, d);
      },
      c = () => {
        (s = o(e.params.url)), u(e.params.speed, s.value, !1);
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
            e.params.history.replaceState || p.addEventListener("popstate", c);
            return;
          }
          u(0, s.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || p.addEventListener("popstate", c);
        }
      },
      m = () => {
        const p = be();
        e.params.history.replaceState || p.removeEventListener("popstate", c);
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
  function pm(n) {
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
            const f = e.slides.find((g) => g.getAttribute("data-hash") === p);
            return f
              ? parseInt(f.getAttribute("data-swiper-slide-index"), 10)
              : 0;
          }
          return e.getSlideIndex(
            Ke(
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
          f = p ? p.getAttribute("data-hash") : "";
        if (m !== f) {
          const d = e.params.hashNavigation.getSlideIndex(e, m);
          if (typeof d > "u" || Number.isNaN(d)) return;
          e.slideTo(d);
        }
      },
      u = () => {
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
      c = () => {
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        s = !0;
        const m = a.location.hash.replace("#", "");
        if (m) {
          const f = e.params.hashNavigation.getSlideIndex(e, m);
          e.slideTo(f || 0, 0, e.params.runCallbacksOnInit, !0);
        }
        e.params.hashNavigation.watchState &&
          o.addEventListener("hashchange", l);
      },
      h = () => {
        e.params.hashNavigation.watchState &&
          o.removeEventListener("hashchange", l);
      };
    r("init", () => {
      e.params.hashNavigation.enabled && c();
    }),
      r("destroy", () => {
        e.params.hashNavigation.enabled && h();
      }),
      r("transitionEnd _freeModeNoMomentumRelease", () => {
        s && u();
      }),
      r("slideChange", () => {
        s && e.params.cssMode && u();
      });
  }
  function hm(n) {
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
      u = s && s.autoplay ? s.autoplay.delay : 3e3,
      c,
      h = new Date().getTime(),
      m,
      p,
      f,
      d,
      g,
      b,
      v;
    function w(I) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (I.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", w),
          !(v || (I.detail && I.detail.bySwiperTouchMove)) && E()));
    }
    const y = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (m = !0) : m && ((u = c), (m = !1));
        const I = e.autoplay.paused ? c : h + u - new Date().getTime();
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
            ? (I = e.slides.find((k) =>
                k.classList.contains("swiper-slide-active")
              ))
            : (I = e.slides[e.activeIndex]),
          I ? parseInt(I.getAttribute("data-swiper-autoplay"), 10) : void 0
        );
      },
      C = (I) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(o), y();
        let O = typeof I > "u" ? e.params.autoplay.delay : I;
        (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
        const k = _();
        !Number.isNaN(k) &&
          k > 0 &&
          typeof I > "u" &&
          ((O = k), (l = k), (u = k)),
          (c = O);
        const Y = e.params.speed,
          X = () => {
            !e ||
              e.destroyed ||
              (e.params.autoplay.reverseDirection
                ? !e.isBeginning || e.params.loop || e.params.rewind
                  ? (e.slidePrev(Y, !0, !0), r("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(e.slides.length - 1, Y, !0, !0), r("autoplay"))
                : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(Y, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, Y, !0, !0), r("autoplay")),
              e.params.cssMode &&
                ((h = new Date().getTime()),
                requestAnimationFrame(() => {
                  C();
                })));
          };
        return (
          O > 0
            ? (clearTimeout(a),
              (a = setTimeout(() => {
                X();
              }, O)))
            : requestAnimationFrame(() => {
                X();
              }),
          O
        );
      },
      T = () => {
        (h = new Date().getTime()),
          (e.autoplay.running = !0),
          C(),
          r("autoplayStart");
      },
      x = () => {
        (e.autoplay.running = !1),
          clearTimeout(a),
          cancelAnimationFrame(o),
          r("autoplayStop");
      },
      A = (I, O) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(a), I || (b = !0);
        const k = () => {
          r("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", w)
              : E();
        };
        if (((e.autoplay.paused = !0), O)) {
          g && (c = e.params.autoplay.delay), (g = !1), k();
          return;
        }
        (c = (c || e.params.autoplay.delay) - (new Date().getTime() - h)),
          !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), k());
      },
      E = () => {
        (e.isEnd && c < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((h = new Date().getTime()),
          b ? ((b = !1), C(c)) : C(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      z = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const I = Ge();
        I.visibilityState === "hidden" && ((b = !0), A(!0)),
          I.visibilityState === "visible" && E();
      },
      D = (I) => {
        I.pointerType === "mouse" &&
          ((b = !0), (v = !0), !(e.animating || e.autoplay.paused) && A(!0));
      },
      S = (I) => {
        I.pointerType === "mouse" && ((v = !1), e.autoplay.paused && E());
      },
      M = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", D),
          e.el.addEventListener("pointerleave", S));
      },
      L = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", D),
          e.el.removeEventListener("pointerleave", S));
      },
      F = () => {
        Ge().addEventListener("visibilitychange", z);
      },
      P = () => {
        Ge().removeEventListener("visibilitychange", z);
      };
    i("init", () => {
      e.params.autoplay.enabled && (M(), F(), T());
    }),
      i("destroy", () => {
        L(), P(), e.autoplay.running && x();
      }),
      i("_freeModeStaticRelease", () => {
        (f || b) && E();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? x() : A(!0, !0);
      }),
      i("beforeTransitionStart", (I, O, k) => {
        e.destroyed ||
          !e.autoplay.running ||
          (k || !e.params.autoplay.disableOnInteraction ? A(!0, !0) : x());
      }),
      i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (e.params.autoplay.disableOnInteraction) {
            x();
            return;
          }
          (p = !0),
            (f = !1),
            (b = !1),
            (d = setTimeout(() => {
              (b = !0), (f = !0), A(!0);
            }, 200));
        }
      }),
      i("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !p)) {
          if (
            (clearTimeout(d),
            clearTimeout(a),
            e.params.autoplay.disableOnInteraction)
          ) {
            (f = !1), (p = !1);
            return;
          }
          f && e.params.cssMode && E(), (f = !1), (p = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (g = !0);
      }),
      Object.assign(e.autoplay, { start: T, stop: x, pause: A, resume: E });
  }
  function mm(n) {
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
      const u = e.thumbs.swiper;
      if (!u || u.destroyed) return;
      const c = u.clickedIndex,
        h = u.clickedSlide;
      if (
        (h && h.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
        typeof c > "u" ||
        c === null
      )
        return;
      let m;
      u.params.loop
        ? (m = parseInt(
            u.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (m = c),
        e.params.loop ? e.slideToLoop(m) : e.slideTo(m);
    }
    function o() {
      const { thumbs: u } = e.params;
      if (r) return !1;
      r = !0;
      const c = e.constructor;
      if (u.swiper instanceof c) {
        if (u.swiper.destroyed) return (r = !1), !1;
        (e.thumbs.swiper = u.swiper),
          Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          e.thumbs.swiper.update();
      } else if (Yn(u.swiper)) {
        const h = Object.assign({}, u.swiper);
        Object.assign(h, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new c(h)),
          (s = !0);
      }
      return (
        e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", a),
        !0
      );
    }
    function l(u) {
      const c = e.thumbs.swiper;
      if (!c || c.destroyed) return;
      const h =
        c.params.slidesPerView === "auto"
          ? c.slidesPerViewDynamic()
          : c.params.slidesPerView;
      let m = 1;
      const p = e.params.thumbs.slideThumbActiveClass;
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (m = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (m = 1),
        (m = Math.floor(m)),
        c.slides.forEach((g) => g.classList.remove(p)),
        c.params.loop || (c.params.virtual && c.params.virtual.enabled))
      )
        for (let g = 0; g < m; g += 1)
          Ke(
            c.slidesEl,
            `[data-swiper-slide-index="${e.realIndex + g}"]`
          ).forEach((b) => {
            b.classList.add(p);
          });
      else
        for (let g = 0; g < m; g += 1)
          c.slides[e.realIndex + g] &&
            c.slides[e.realIndex + g].classList.add(p);
      const f = e.params.thumbs.autoScrollOffset,
        d = f && !c.params.loop;
      if (e.realIndex !== c.realIndex || d) {
        const g = c.activeIndex;
        let b, v;
        if (c.params.loop) {
          const w = c.slides.find(
            (y) =>
              y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
          );
          (b = c.slides.indexOf(w)),
            (v = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (b = e.realIndex), (v = b > e.previousIndex ? "next" : "prev");
        d && (b += v === "next" ? f : -1 * f),
          c.visibleSlidesIndexes &&
            c.visibleSlidesIndexes.indexOf(b) < 0 &&
            (c.params.centeredSlides
              ? b > g
                ? (b = b - Math.floor(h / 2) + 1)
                : (b = b + Math.floor(h / 2) - 1)
              : b > g && c.params.slidesPerGroup,
            c.slideTo(b, u ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const { thumbs: u } = e.params;
      if (!(!u || !u.swiper))
        if (typeof u.swiper == "string" || u.swiper instanceof HTMLElement) {
          const c = Ge(),
            h = () => {
              const p =
                typeof u.swiper == "string"
                  ? c.querySelector(u.swiper)
                  : u.swiper;
              if (p && p.swiper) (u.swiper = p.swiper), o(), l(!0);
              else if (p) {
                const f = `${e.params.eventsPrefix}init`,
                  d = (g) => {
                    (u.swiper = g.detail[0]),
                      p.removeEventListener(f, d),
                      o(),
                      l(!0),
                      u.swiper.update(),
                      e.update();
                  };
                p.addEventListener(f, d);
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
      i("setTransition", (u, c) => {
        const h = e.thumbs.swiper;
        !h || h.destroyed || h.setTransition(c);
      }),
      i("beforeDestroy", () => {
        const u = e.thumbs.swiper;
        !u || u.destroyed || (s && u.destroy());
      }),
      Object.assign(e.thumbs, { init: o, update: l });
  }
  function gm(n) {
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
      const { touchEventsData: l, touches: u } = e;
      l.velocities.length === 0 &&
        l.velocities.push({
          position: u[e.isHorizontal() ? "startX" : "startY"],
          time: l.touchStartTime,
        }),
        l.velocities.push({
          position: u[e.isHorizontal() ? "currentX" : "currentY"],
          time: Zt(),
        });
    }
    function o(l) {
      let { currentPos: u } = l;
      if (e.params.cssMode) return;
      const {
          params: c,
          wrapperEl: h,
          rtlTranslate: m,
          snapGrid: p,
          touchEventsData: f,
        } = e,
        g = Zt() - f.touchStartTime;
      if (u < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (u > -e.maxTranslate()) {
        e.slides.length < p.length
          ? e.slideTo(p.length - 1)
          : e.slideTo(e.slides.length - 1);
        return;
      }
      if (c.freeMode.momentum) {
        if (f.velocities.length > 1) {
          const x = f.velocities.pop(),
            A = f.velocities.pop(),
            E = x.position - A.position,
            z = x.time - A.time;
          (e.velocity = E / z),
            (e.velocity /= 2),
            Math.abs(e.velocity) < c.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (z > 150 || Zt() - x.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= c.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let b = 1e3 * c.freeMode.momentumRatio;
        const v = e.velocity * b;
        let w = e.translate + v;
        m && (w = -w);
        let y = !1,
          _;
        const C = Math.abs(e.velocity) * 20 * c.freeMode.momentumBounceRatio;
        let T;
        if (w < e.maxTranslate())
          c.freeMode.momentumBounce
            ? (w + e.maxTranslate() < -C && (w = e.maxTranslate() - C),
              (_ = e.maxTranslate()),
              (y = !0),
              (f.allowMomentumBounce = !0))
            : (w = e.maxTranslate()),
            c.loop && c.centeredSlides && (T = !0);
        else if (w > e.minTranslate())
          c.freeMode.momentumBounce
            ? (w - e.minTranslate() > C && (w = e.minTranslate() + C),
              (_ = e.minTranslate()),
              (y = !0),
              (f.allowMomentumBounce = !0))
            : (w = e.minTranslate()),
            c.loop && c.centeredSlides && (T = !0);
        else if (c.freeMode.sticky) {
          let x;
          for (let A = 0; A < p.length; A += 1)
            if (p[A] > -w) {
              x = A;
              break;
            }
          Math.abs(p[x] - w) < Math.abs(p[x - 1] - w) ||
          e.swipeDirection === "next"
            ? (w = p[x])
            : (w = p[x - 1]),
            (w = -w);
        }
        if (
          (T &&
            r("transitionEnd", () => {
              e.loopFix();
            }),
          e.velocity !== 0)
        ) {
          if (
            (m
              ? (b = Math.abs((-w - e.translate) / e.velocity))
              : (b = Math.abs((w - e.translate) / e.velocity)),
            c.freeMode.sticky)
          ) {
            const x = Math.abs((m ? -w : w) - e.translate),
              A = e.slidesSizesGrid[e.activeIndex];
            x < A
              ? (b = c.speed)
              : x < 2 * A
              ? (b = c.speed * 1.5)
              : (b = c.speed * 2.5);
          }
        } else if (c.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        c.freeMode.momentumBounce && y
          ? (e.updateProgress(_),
            e.setTransition(b),
            e.setTranslate(w),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            Gn(h, () => {
              !e ||
                e.destroyed ||
                !f.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(c.speed),
                setTimeout(() => {
                  e.setTranslate(_),
                    Gn(h, () => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (i("_freeModeNoMomentumRelease"),
            e.updateProgress(w),
            e.setTransition(b),
            e.setTranslate(w),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              Gn(h, () => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(w),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (c.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else c.freeMode && i("_freeModeNoMomentumRelease");
      (!c.freeMode.momentum || g >= c.longSwipesMs) &&
        (i("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: { onTouchStart: s, onTouchMove: a, onTouchEnd: o },
    });
  }
  function wm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ grid: { rows: 1, fill: "column" } });
    let r, s, a, o;
    const l = () => {
        let d = e.params.spaceBetween;
        return (
          typeof d == "string" && d.indexOf("%") >= 0
            ? (d = (parseFloat(d.replace("%", "")) / 100) * e.size)
            : typeof d == "string" && (d = parseFloat(d)),
          d
        );
      },
      u = (d) => {
        const { slidesPerView: g } = e.params,
          { rows: b, fill: v } = e.params.grid,
          w =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : d.length;
        (a = Math.floor(w / b)),
          Math.floor(w / b) === w / b ? (r = w) : (r = Math.ceil(w / b) * b),
          g !== "auto" && v === "row" && (r = Math.max(r, g * b)),
          (s = r / b);
      },
      c = () => {
        e.slides &&
          e.slides.forEach((d) => {
            d.swiperSlideGridSet &&
              ((d.style.height = ""),
              (d.style[e.getDirectionLabel("margin-top")] = ""));
          });
      },
      h = (d, g, b) => {
        const { slidesPerGroup: v } = e.params,
          w = l(),
          { rows: y, fill: _ } = e.params.grid,
          C =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : b.length;
        let T, x, A;
        if (_ === "row" && v > 1) {
          const E = Math.floor(d / (v * y)),
            z = d - y * v * E,
            D = E === 0 ? v : Math.min(Math.ceil((C - E * y * v) / y), v);
          (A = Math.floor(z / D)),
            (x = z - A * D + E * v),
            (T = x + (A * r) / y),
            (g.style.order = T);
        } else
          _ === "column"
            ? ((x = Math.floor(d / y)),
              (A = d - x * y),
              (x > a || (x === a && A === y - 1)) &&
                ((A += 1), A >= y && ((A = 0), (x += 1))))
            : ((A = Math.floor(d / s)), (x = d - A * s));
        (g.row = A),
          (g.column = x),
          (g.style.height = `calc((100% - ${(y - 1) * w}px) / ${y})`),
          (g.style[e.getDirectionLabel("margin-top")] =
            A !== 0 ? w && `${w}px` : ""),
          (g.swiperSlideGridSet = !0);
      },
      m = (d, g) => {
        const { centeredSlides: b, roundLengths: v } = e.params,
          w = l(),
          { rows: y } = e.params.grid;
        if (
          ((e.virtualSize = (d + w) * r),
          (e.virtualSize = Math.ceil(e.virtualSize / y) - w),
          e.params.cssMode ||
            (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
              e.virtualSize + w
            }px`),
          b)
        ) {
          const _ = [];
          for (let C = 0; C < g.length; C += 1) {
            let T = g[C];
            v && (T = Math.floor(T)), g[C] < e.virtualSize + g[0] && _.push(T);
          }
          g.splice(0, g.length), g.push(..._);
        }
      },
      p = () => {
        o = e.params.grid && e.params.grid.rows > 1;
      },
      f = () => {
        const { params: d, el: g } = e,
          b = d.grid && d.grid.rows > 1;
        o && !b
          ? (g.classList.remove(
              `${d.containerModifierClass}grid`,
              `${d.containerModifierClass}grid-column`
            ),
            (a = 1),
            e.emitContainerClasses())
          : !o &&
            b &&
            (g.classList.add(`${d.containerModifierClass}grid`),
            d.grid.fill === "column" &&
              g.classList.add(`${d.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          (o = b);
      };
    i("init", p),
      i("update", f),
      (e.grid = {
        initSlides: u,
        unsetSlides: c,
        updateSlide: h,
        updateWrapperSize: m,
      });
  }
  function vm(n) {
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
  function ym(n) {
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
  function bm(n, e) {
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
    const u = [];
    for (let c = o - 1; c >= n; c -= 1) {
      const h = t.slides[c];
      h.remove(), u.unshift(h);
    }
    if (typeof e == "object" && "length" in e) {
      for (let c = 0; c < e.length; c += 1) e[c] && s.append(e[c]);
      l = a > n ? a + e.length : a;
    } else s.append(e);
    for (let c = 0; c < u.length; c += 1) s.append(u[c]);
    t.recalcSlides(),
      i.loop && t.loopCreate(),
      (!i.observer || t.isElement) && t.update(),
      i.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function _m(n) {
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
  function Dm() {
    const n = this,
      e = [];
    for (let t = 0; t < n.slides.length; t += 1) e.push(t);
    n.removeSlide(e);
  }
  function Em(n) {
    let { swiper: e } = n;
    Object.assign(e, {
      appendSlide: vm.bind(e),
      prependSlide: ym.bind(e),
      addSlide: bm.bind(e),
      removeSlide: _m.bind(e),
      removeAllSlides: Dm.bind(e),
    });
  }
  function Jr(n) {
    const {
      effect: e,
      swiper: t,
      on: i,
      setTranslate: r,
      setTransition: s,
      overwriteParams: a,
      perspective: o,
      recreateShadows: l,
      getEffectParams: u,
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
          if (!u || !u().slideShadows) return;
          t.slides.forEach((h) => {
            h.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((m) => m.remove());
          }),
            l();
        }
      });
    let c;
    i("virtualUpdate", () => {
      t.params.effect === e &&
        (t.slides.length || (c = !0),
        requestAnimationFrame(() => {
          c && t.slides && t.slides.length && (r(), (c = !1));
        }));
    });
  }
  function qn(n, e) {
    const t = _r(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function js(n) {
    let { swiper: e, duration: t, transformElements: i, allSlides: r } = n;
    const { activeIndex: s } = e,
      a = (o) =>
        o.parentElement
          ? o.parentElement
          : e.slides.find((u) => u.shadowRoot && u.shadowRoot === o.parentNode);
    if (e.params.virtualTranslate && t !== 0) {
      let o = !1,
        l;
      r
        ? (l = i)
        : (l = i.filter((u) => {
            const c = u.classList.contains("swiper-slide-transform") ? a(u) : u;
            return e.getSlideIndex(c) === s;
          })),
        l.forEach((u) => {
          Gn(u, () => {
            if (o || !e || e.destroyed) return;
            (o = !0), (e.animating = !1);
            const c = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            e.wrapperEl.dispatchEvent(c);
          });
        });
    }
  }
  function Sm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ fadeEffect: { crossFade: !1 } }),
      Jr({
        effect: "fade",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: a } = e,
            o = e.params.fadeEffect;
          for (let l = 0; l < a.length; l += 1) {
            const u = e.slides[l];
            let h = -u.swiperSlideOffset;
            e.params.virtualTranslate || (h -= e.translate);
            let m = 0;
            e.isHorizontal() || ((m = h), (h = 0));
            const p = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(u.progress), 0)
                : 1 + Math.min(Math.max(u.progress, -1), 0),
              f = qn(o, u);
            (f.style.opacity = p),
              (f.style.transform = `translate3d(${h}px, ${m}px, 0px)`);
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => _r(l));
          o.forEach((l) => {
            l.style.transitionDuration = `${a}ms`;
          }),
            js({ swiper: e, duration: a, transformElements: o, allSlides: !0 });
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
  function Tm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const r = (l, u, c) => {
      let h = c
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        m = c
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      h ||
        ((h = $t(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            c ? "left" : "top"
          }`.split(" ")
        )),
        l.append(h)),
        m ||
          ((m = $t(
            "div",
            `swiper-slide-shadow-cube swiper-slide-shadow-${
              c ? "right" : "bottom"
            }`.split(" ")
          )),
          l.append(m)),
        h && (h.style.opacity = Math.max(-u, 0)),
        m && (m.style.opacity = Math.max(u, 0));
    };
    Jr({
      effect: "cube",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
            el: l,
            wrapperEl: u,
            slides: c,
            width: h,
            height: m,
            rtlTranslate: p,
            size: f,
            browser: d,
          } = e,
          g = Gs(e),
          b = e.params.cubeEffect,
          v = e.isHorizontal(),
          w = e.virtual && e.params.virtual.enabled;
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
        for (let T = 0; T < c.length; T += 1) {
          const x = c[T];
          let A = T;
          w && (A = parseInt(x.getAttribute("data-swiper-slide-index"), 10));
          let E = A * 90,
            z = Math.floor(E / 360);
          p && ((E = -E), (z = Math.floor(-E / 360)));
          const D = Math.max(Math.min(x.progress, 1), -1);
          let S = 0,
            M = 0,
            L = 0;
          A % 4 === 0
            ? ((S = -z * 4 * f), (L = 0))
            : (A - 1) % 4 === 0
            ? ((S = 0), (L = -z * 4 * f))
            : (A - 2) % 4 === 0
            ? ((S = f + z * 4 * f), (L = f))
            : (A - 3) % 4 === 0 && ((S = -f), (L = 3 * f + f * 4 * z)),
            p && (S = -S),
            v || ((M = S), (S = 0));
          const F = `rotateX(${g(v ? 0 : -E)}deg) rotateY(${g(
            v ? E : 0
          )}deg) translate3d(${S}px, ${M}px, ${L}px)`;
          D <= 1 &&
            D > -1 &&
            ((y = A * 90 + D * 90), p && (y = -A * 90 - D * 90)),
            (x.style.transform = F),
            b.slideShadows && r(x, D, v);
        }
        if (
          ((u.style.transformOrigin = `50% 50% -${f / 2}px`),
          (u.style["-webkit-transform-origin"] = `50% 50% -${f / 2}px`),
          b.shadow)
        )
          if (v)
            _.style.transform = `translate3d(0px, ${
              h / 2 + b.shadowOffset
            }px, ${-h / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
              b.shadowScale
            })`;
          else {
            const T = Math.abs(y) - Math.floor(Math.abs(y) / 90) * 90,
              x =
                1.5 -
                (Math.sin((T * 2 * Math.PI) / 360) / 2 +
                  Math.cos((T * 2 * Math.PI) / 360) / 2),
              A = b.shadowScale,
              E = b.shadowScale / x,
              z = b.shadowOffset;
            _.style.transform = `scale3d(${A}, 1, ${E}) translate3d(0px, ${
              m / 2 + z
            }px, ${-m / 2 / E}px) rotateX(-89.99deg)`;
          }
        const C =
          (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -f / 2 : 0;
        (u.style.transform = `translate3d(0px,0,${C}px) rotateX(${g(
          e.isHorizontal() ? 0 : y
        )}deg) rotateY(${g(e.isHorizontal() ? -y : 0)}deg)`),
          u.style.setProperty("--swiper-cube-translate-z", `${C}px`);
      },
      setTransition: (l) => {
        const { el: u, slides: c } = e;
        if (
          (c.forEach((h) => {
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
          const h = u.querySelector(".swiper-cube-shadow");
          h && (h.style.transitionDuration = `${l}ms`);
        }
      },
      recreateShadows: () => {
        const l = e.isHorizontal();
        e.slides.forEach((u) => {
          const c = Math.max(Math.min(u.progress, 1), -1);
          r(u, c, l);
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
  function Qr(n, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
        n ? ` swiper-slide-shadow-${n}` : ""
      }`,
      r = _r(e);
    let s = r.querySelector(`.${i.split(" ").join(".")}`);
    return s || ((s = $t("div", i.split(" "))), r.append(s)), s;
  }
  function xm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
    const r = (l, u) => {
      let c = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        h = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      c || (c = Qr("flip", l, e.isHorizontal() ? "left" : "top")),
        h || (h = Qr("flip", l, e.isHorizontal() ? "right" : "bottom")),
        c && (c.style.opacity = Math.max(-u, 0)),
        h && (h.style.opacity = Math.max(u, 0));
    };
    Jr({
      effect: "flip",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: l, rtlTranslate: u } = e,
          c = e.params.flipEffect,
          h = Gs(e);
        for (let m = 0; m < l.length; m += 1) {
          const p = l[m];
          let f = p.progress;
          e.params.flipEffect.limitRotation &&
            (f = Math.max(Math.min(p.progress, 1), -1));
          const d = p.swiperSlideOffset;
          let b = -180 * f,
            v = 0,
            w = e.params.cssMode ? -d - e.translate : -d,
            y = 0;
          e.isHorizontal()
            ? u && (b = -b)
            : ((y = w), (w = 0), (v = -b), (b = 0)),
            (p.style.zIndex = -Math.abs(Math.round(f)) + l.length),
            c.slideShadows && r(p, f);
          const _ = `translate3d(${w}px, ${y}px, 0px) rotateX(${h(
              v
            )}deg) rotateY(${h(b)}deg)`,
            C = qn(c, p);
          C.style.transform = _;
        }
      },
      setTransition: (l) => {
        const u = e.slides.map((c) => _r(c));
        u.forEach((c) => {
          (c.style.transitionDuration = `${l}ms`),
            c
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((h) => {
                h.style.transitionDuration = `${l}ms`;
              });
        }),
          js({ swiper: e, duration: l, transformElements: u });
      },
      recreateShadows: () => {
        e.params.flipEffect,
          e.slides.forEach((l) => {
            let u = l.progress;
            e.params.flipEffect.limitRotation &&
              (u = Math.max(Math.min(l.progress, 1), -1)),
              r(l, u);
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
  function Cm(n) {
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
      Jr({
        effect: "coverflow",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { width: a, height: o, slides: l, slidesSizesGrid: u } = e,
            c = e.params.coverflowEffect,
            h = e.isHorizontal(),
            m = e.translate,
            p = h ? -m + a / 2 : -m + o / 2,
            f = h ? c.rotate : -c.rotate,
            d = c.depth,
            g = Gs(e);
          for (let b = 0, v = l.length; b < v; b += 1) {
            const w = l[b],
              y = u[b],
              _ = w.swiperSlideOffset,
              C = (p - _ - y / 2) / y,
              T =
                typeof c.modifier == "function"
                  ? c.modifier(C)
                  : C * c.modifier;
            let x = h ? f * T : 0,
              A = h ? 0 : f * T,
              E = -d * Math.abs(T),
              z = c.stretch;
            typeof z == "string" &&
              z.indexOf("%") !== -1 &&
              (z = (parseFloat(c.stretch) / 100) * y);
            let D = h ? 0 : z * T,
              S = h ? z * T : 0,
              M = 1 - (1 - c.scale) * Math.abs(T);
            Math.abs(S) < 0.001 && (S = 0),
              Math.abs(D) < 0.001 && (D = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(x) < 0.001 && (x = 0),
              Math.abs(A) < 0.001 && (A = 0),
              Math.abs(M) < 0.001 && (M = 0);
            const L = `translate3d(${S}px,${D}px,${E}px)  rotateX(${g(
                A
              )}deg) rotateY(${g(x)}deg) scale(${M})`,
              F = qn(c, w);
            if (
              ((F.style.transform = L),
              (w.style.zIndex = -Math.abs(Math.round(T)) + 1),
              c.slideShadows)
            ) {
              let P = h
                  ? w.querySelector(".swiper-slide-shadow-left")
                  : w.querySelector(".swiper-slide-shadow-top"),
                I = h
                  ? w.querySelector(".swiper-slide-shadow-right")
                  : w.querySelector(".swiper-slide-shadow-bottom");
              P || (P = Qr("coverflow", w, h ? "left" : "top")),
                I || (I = Qr("coverflow", w, h ? "right" : "bottom")),
                P && (P.style.opacity = T > 0 ? T : 0),
                I && (I.style.opacity = -T > 0 ? -T : 0);
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
                  .forEach((u) => {
                    u.style.transitionDuration = `${a}ms`;
                  });
            });
        },
        perspective: () => !0,
        overwriteParams: () => ({ watchSlidesProgress: !0 }),
      });
  }
  function Am(n) {
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
    Jr({
      effect: "creative",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: o, wrapperEl: l, slidesSizesGrid: u } = e,
          c = e.params.creativeEffect,
          { progressMultiplier: h } = c,
          m = e.params.centeredSlides,
          p = Gs(e);
        if (m) {
          const f = u[0] / 2 - e.params.slidesOffsetBefore || 0;
          l.style.transform = `translateX(calc(50% - ${f}px))`;
        }
        for (let f = 0; f < o.length; f += 1) {
          const d = o[f],
            g = d.progress,
            b = Math.min(
              Math.max(d.progress, -c.limitProgress),
              c.limitProgress
            );
          let v = b;
          m ||
            (v = Math.min(
              Math.max(d.originalProgress, -c.limitProgress),
              c.limitProgress
            ));
          const w = d.swiperSlideOffset,
            y = [e.params.cssMode ? -w - e.translate : -w, 0, 0],
            _ = [0, 0, 0];
          let C = !1;
          e.isHorizontal() || ((y[1] = y[0]), (y[0] = 0));
          let T = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          b < 0 ? ((T = c.next), (C = !0)) : b > 0 && ((T = c.prev), (C = !0)),
            y.forEach((M, L) => {
              y[L] = `calc(${M}px + (${r(T.translate[L])} * ${Math.abs(
                b * h
              )}))`;
            }),
            _.forEach((M, L) => {
              let F = T.rotate[L] * Math.abs(b * h);
              _[L] = F;
            }),
            (d.style.zIndex = -Math.abs(Math.round(g)) + o.length);
          const x = y.join(", "),
            A = `rotateX(${p(_[0])}deg) rotateY(${p(_[1])}deg) rotateZ(${p(
              _[2]
            )}deg)`,
            E =
              v < 0
                ? `scale(${1 + (1 - T.scale) * v * h})`
                : `scale(${1 - (1 - T.scale) * v * h})`,
            z =
              v < 0 ? 1 + (1 - T.opacity) * v * h : 1 - (1 - T.opacity) * v * h,
            D = `translate3d(${x}) ${A} ${E}`;
          if ((C && T.shadow) || !C) {
            let M = d.querySelector(".swiper-slide-shadow");
            if ((!M && T.shadow && (M = Qr("creative", d)), M)) {
              const L = c.shadowPerProgress ? b * (1 / c.limitProgress) : b;
              M.style.opacity = Math.min(Math.max(Math.abs(L), 0), 1);
            }
          }
          const S = qn(c, d);
          (S.style.transform = D),
            (S.style.opacity = z),
            T.origin && (S.style.transformOrigin = T.origin);
        }
      },
      setTransition: (o) => {
        const l = e.slides.map((u) => _r(u));
        l.forEach((u) => {
          (u.style.transitionDuration = `${o}ms`),
            u.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
              c.style.transitionDuration = `${o}ms`;
            });
        }),
          js({ swiper: e, duration: o, transformElements: l, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function Mm(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      Jr({
        effect: "cards",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: a, activeIndex: o, rtlTranslate: l } = e,
            u = e.params.cardsEffect,
            { startTranslate: c, isTouched: h } = e.touchEventsData,
            m = l ? -e.translate : e.translate;
          for (let p = 0; p < a.length; p += 1) {
            const f = a[p],
              d = f.progress,
              g = Math.min(Math.max(d, -4), 4);
            let b = f.swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (b -= a[0].swiperSlideOffset);
            let v = e.params.cssMode ? -b - e.translate : -b,
              w = 0;
            const y = -100 * Math.abs(g);
            let _ = 1,
              C = -u.perSlideRotate * g,
              T = u.perSlideOffset - Math.abs(g) * 0.75;
            const x =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p,
              A =
                (x === o || x === o - 1) &&
                g > 0 &&
                g < 1 &&
                (h || e.params.cssMode) &&
                m < c,
              E =
                (x === o || x === o + 1) &&
                g < 0 &&
                g > -1 &&
                (h || e.params.cssMode) &&
                m > c;
            if (A || E) {
              const M = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5;
              (C += -28 * g * M),
                (_ += -0.5 * M),
                (T += 96 * M),
                (w = `${-25 * M * Math.abs(g)}%`);
            }
            if (
              (g < 0
                ? (v = `calc(${v}px ${l ? "-" : "+"} (${T * Math.abs(g)}%))`)
                : g > 0
                ? (v = `calc(${v}px ${l ? "-" : "+"} (-${T * Math.abs(g)}%))`)
                : (v = `${v}px`),
              !e.isHorizontal())
            ) {
              const M = w;
              (w = v), (v = M);
            }
            const z = g < 0 ? `${1 + (1 - _) * g}` : `${1 - (1 - _) * g}`,
              D = `
        translate3d(${v}, ${w}, ${y}px)
        rotateZ(${u.rotate ? (l ? -C : C) : 0}deg)
        scale(${z})
      `;
            if (u.slideShadows) {
              let M = f.querySelector(".swiper-slide-shadow");
              M || (M = Qr("cards", f)),
                M &&
                  (M.style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            f.style.zIndex = -Math.abs(Math.round(d)) + a.length;
            const S = qn(u, f);
            S.style.transform = D;
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => _r(l));
          o.forEach((l) => {
            (l.style.transitionDuration = `${a}ms`),
              l.querySelectorAll(".swiper-slide-shadow").forEach((u) => {
                u.style.transitionDuration = `${a}ms`;
              });
          }),
            js({ swiper: e, duration: a, transformElements: o });
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
  const km = [
    im,
    rm,
    nm,
    sm,
    am,
    om,
    lm,
    um,
    cm,
    dm,
    fm,
    pm,
    hm,
    mm,
    gm,
    wm,
    Em,
    Sm,
    Tm,
    xm,
    Cm,
    Am,
    Mm,
  ];
  Ht.use(km);
  class Pm {
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
        return new Ht(t, i);
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
  function Xs(n = {}) {
    return new Pm(n).init();
  }
  function Om() {
    Bp(), Xs();
  }
  function Im() {
    Om();
  }
  function Fm() {
    console.log("About Component Animation Starter Initialized");
  }
  function Lm() {
    Fm();
  }
  /*! @vimeo/player v2.26.0 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function Pc(
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
  function Oc(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Pc(Object(t), !0).forEach(function (i) {
            Us(n, i, t[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
        : Pc(Object(t)).forEach(function (i) {
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
        function (D, S, M) {
          D[S] = M.value;
        },
      r = typeof Symbol == "function" ? Symbol : {},
      s = r.iterator || "@@iterator",
      a = r.asyncIterator || "@@asyncIterator",
      o = r.toStringTag || "@@toStringTag";
    function l(D, S, M) {
      return (
        Object.defineProperty(D, S, {
          value: M,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        D[S]
      );
    }
    try {
      l({}, "");
    } catch {
      l = function (S, M, L) {
        return (S[M] = L);
      };
    }
    function u(D, S, M, L) {
      var F = S && S.prototype instanceof m ? S : m,
        P = Object.create(F.prototype),
        I = new A(L || []);
      return i(P, "_invoke", { value: _(D, M, I) }), P;
    }
    function c(D, S, M) {
      try {
        return { type: "normal", arg: D.call(S, M) };
      } catch (L) {
        return { type: "throw", arg: L };
      }
    }
    n.wrap = u;
    var h = {};
    function m() {}
    function p() {}
    function f() {}
    var d = {};
    l(d, s, function () {
      return this;
    });
    var g = Object.getPrototypeOf,
      b = g && g(g(E([])));
    b && b !== e && t.call(b, s) && (d = b);
    var v = (f.prototype = m.prototype = Object.create(d));
    function w(D) {
      ["next", "throw", "return"].forEach(function (S) {
        l(D, S, function (M) {
          return this._invoke(S, M);
        });
      });
    }
    function y(D, S) {
      function M(F, P, I, O) {
        var k = c(D[F], D, P);
        if (k.type !== "throw") {
          var Y = k.arg,
            X = Y.value;
          return X && typeof X == "object" && t.call(X, "__await")
            ? S.resolve(X.__await).then(
                function (ue) {
                  M("next", ue, I, O);
                },
                function (ue) {
                  M("throw", ue, I, O);
                }
              )
            : S.resolve(X).then(
                function (ue) {
                  (Y.value = ue), I(Y);
                },
                function (ue) {
                  return M("throw", ue, I, O);
                }
              );
        }
        O(k.arg);
      }
      var L;
      i(this, "_invoke", {
        value: function (F, P) {
          function I() {
            return new S(function (O, k) {
              M(F, P, O, k);
            });
          }
          return (L = L ? L.then(I, I) : I());
        },
      });
    }
    function _(D, S, M) {
      var L = "suspendedStart";
      return function (F, P) {
        if (L === "executing") throw new Error("Generator is already running");
        if (L === "completed") {
          if (F === "throw") throw P;
          return z();
        }
        for (M.method = F, M.arg = P; ; ) {
          var I = M.delegate;
          if (I) {
            var O = C(I, M);
            if (O) {
              if (O === h) continue;
              return O;
            }
          }
          if (M.method === "next") M.sent = M._sent = M.arg;
          else if (M.method === "throw") {
            if (L === "suspendedStart") throw ((L = "completed"), M.arg);
            M.dispatchException(M.arg);
          } else M.method === "return" && M.abrupt("return", M.arg);
          L = "executing";
          var k = c(D, S, M);
          if (k.type === "normal") {
            if (((L = M.done ? "completed" : "suspendedYield"), k.arg === h))
              continue;
            return { value: k.arg, done: M.done };
          }
          k.type === "throw" &&
            ((L = "completed"), (M.method = "throw"), (M.arg = k.arg));
        }
      };
    }
    function C(D, S) {
      var M = S.method,
        L = D.iterator[M];
      if (L === void 0)
        return (
          (S.delegate = null),
          (M === "throw" &&
            D.iterator.return &&
            ((S.method = "return"),
            (S.arg = void 0),
            C(D, S),
            S.method === "throw")) ||
            (M !== "return" &&
              ((S.method = "throw"),
              (S.arg = new TypeError(
                "The iterator does not provide a '" + M + "' method"
              )))),
          h
        );
      var F = c(L, D.iterator, S.arg);
      if (F.type === "throw")
        return (S.method = "throw"), (S.arg = F.arg), (S.delegate = null), h;
      var P = F.arg;
      return P
        ? P.done
          ? ((S[D.resultName] = P.value),
            (S.next = D.nextLoc),
            S.method !== "return" && ((S.method = "next"), (S.arg = void 0)),
            (S.delegate = null),
            h)
          : P
        : ((S.method = "throw"),
          (S.arg = new TypeError("iterator result is not an object")),
          (S.delegate = null),
          h);
    }
    function T(D) {
      var S = { tryLoc: D[0] };
      1 in D && (S.catchLoc = D[1]),
        2 in D && ((S.finallyLoc = D[2]), (S.afterLoc = D[3])),
        this.tryEntries.push(S);
    }
    function x(D) {
      var S = D.completion || {};
      (S.type = "normal"), delete S.arg, (D.completion = S);
    }
    function A(D) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        D.forEach(T, this),
        this.reset(!0);
    }
    function E(D) {
      if (D) {
        var S = D[s];
        if (S) return S.call(D);
        if (typeof D.next == "function") return D;
        if (!isNaN(D.length)) {
          var M = -1,
            L = function F() {
              for (; ++M < D.length; )
                if (t.call(D, M)) return (F.value = D[M]), (F.done = !1), F;
              return (F.value = void 0), (F.done = !0), F;
            };
          return (L.next = L);
        }
      }
      return { next: z };
    }
    function z() {
      return { value: void 0, done: !0 };
    }
    return (
      (p.prototype = f),
      i(v, "constructor", { value: f, configurable: !0 }),
      i(f, "constructor", { value: p, configurable: !0 }),
      (p.displayName = l(f, o, "GeneratorFunction")),
      (n.isGeneratorFunction = function (D) {
        var S = typeof D == "function" && D.constructor;
        return (
          !!S && (S === p || (S.displayName || S.name) === "GeneratorFunction")
        );
      }),
      (n.mark = function (D) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(D, f)
            : ((D.__proto__ = f), l(D, o, "GeneratorFunction")),
          (D.prototype = Object.create(v)),
          D
        );
      }),
      (n.awrap = function (D) {
        return { __await: D };
      }),
      w(y.prototype),
      l(y.prototype, a, function () {
        return this;
      }),
      (n.AsyncIterator = y),
      (n.async = function (D, S, M, L, F) {
        F === void 0 && (F = Promise);
        var P = new y(u(D, S, M, L), F);
        return n.isGeneratorFunction(S)
          ? P
          : P.next().then(function (I) {
              return I.done ? I.value : P.next();
            });
      }),
      w(v),
      l(v, o, "Generator"),
      l(v, s, function () {
        return this;
      }),
      l(v, "toString", function () {
        return "[object Generator]";
      }),
      (n.keys = function (D) {
        var S = Object(D),
          M = [];
        for (var L in S) M.push(L);
        return (
          M.reverse(),
          function F() {
            for (; M.length; ) {
              var P = M.pop();
              if (P in S) return (F.value = P), (F.done = !1), F;
            }
            return (F.done = !0), F;
          }
        );
      }),
      (n.values = E),
      (A.prototype = {
        constructor: A,
        reset: function (D) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(x),
            !D)
          )
            for (var S in this)
              S.charAt(0) === "t" &&
                t.call(this, S) &&
                !isNaN(+S.slice(1)) &&
                (this[S] = void 0);
        },
        stop: function () {
          this.done = !0;
          var D = this.tryEntries[0].completion;
          if (D.type === "throw") throw D.arg;
          return this.rval;
        },
        dispatchException: function (D) {
          if (this.done) throw D;
          var S = this;
          function M(k, Y) {
            return (
              (P.type = "throw"),
              (P.arg = D),
              (S.next = k),
              Y && ((S.method = "next"), (S.arg = void 0)),
              !!Y
            );
          }
          for (var L = this.tryEntries.length - 1; L >= 0; --L) {
            var F = this.tryEntries[L],
              P = F.completion;
            if (F.tryLoc === "root") return M("end");
            if (F.tryLoc <= this.prev) {
              var I = t.call(F, "catchLoc"),
                O = t.call(F, "finallyLoc");
              if (I && O) {
                if (this.prev < F.catchLoc) return M(F.catchLoc, !0);
                if (this.prev < F.finallyLoc) return M(F.finallyLoc);
              } else if (I) {
                if (this.prev < F.catchLoc) return M(F.catchLoc, !0);
              } else {
                if (!O)
                  throw new Error("try statement without catch or finally");
                if (this.prev < F.finallyLoc) return M(F.finallyLoc);
              }
            }
          }
        },
        abrupt: function (D, S) {
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var L = this.tryEntries[M];
            if (
              L.tryLoc <= this.prev &&
              t.call(L, "finallyLoc") &&
              this.prev < L.finallyLoc
            ) {
              var F = L;
              break;
            }
          }
          F &&
            (D === "break" || D === "continue") &&
            F.tryLoc <= S &&
            S <= F.finallyLoc &&
            (F = null);
          var P = F ? F.completion : {};
          return (
            (P.type = D),
            (P.arg = S),
            F
              ? ((this.method = "next"), (this.next = F.finallyLoc), h)
              : this.complete(P)
          );
        },
        complete: function (D, S) {
          if (D.type === "throw") throw D.arg;
          return (
            D.type === "break" || D.type === "continue"
              ? (this.next = D.arg)
              : D.type === "return"
              ? ((this.rval = this.arg = D.arg),
                (this.method = "return"),
                (this.next = "end"))
              : D.type === "normal" && S && (this.next = S),
            h
          );
        },
        finish: function (D) {
          for (var S = this.tryEntries.length - 1; S >= 0; --S) {
            var M = this.tryEntries[S];
            if (M.finallyLoc === D)
              return this.complete(M.completion, M.afterLoc), x(M), h;
          }
        },
        catch: function (D) {
          for (var S = this.tryEntries.length - 1; S >= 0; --S) {
            var M = this.tryEntries[S];
            if (M.tryLoc === D) {
              var L = M.completion;
              if (L.type === "throw") {
                var F = L.arg;
                x(M);
              }
              return F;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (D, S, M) {
          return (
            (this.delegate = { iterator: E(D), resultName: S, nextLoc: M }),
            this.method === "next" && (this.arg = void 0),
            h
          );
        },
      }),
      n
    );
  }
  function Ic(n, e, t, i, r, s, a) {
    try {
      var o = n[s](a),
        l = o.value;
    } catch (u) {
      t(u);
      return;
    }
    o.done ? e(l) : Promise.resolve(l).then(i, r);
  }
  function Er(n) {
    return function () {
      var e = this,
        t = arguments;
      return new Promise(function (i, r) {
        var s = n.apply(e, t);
        function a(l) {
          Ic(s, i, r, a, o, "next", l);
        }
        function o(l) {
          Ic(s, i, r, a, o, "throw", l);
        }
        a(void 0);
      });
    };
  }
  function Fc(n, e) {
    if (!(n instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function zm(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, Rc(i.key), i);
    }
  }
  function Lc(n, e, t) {
    return (
      e && zm(n.prototype, e),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
  }
  function Us(n, e, t) {
    return (
      (e = Rc(e)),
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
  function Rm(n, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    (n.prototype = Object.create(e && e.prototype, {
      constructor: { value: n, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      e && Xn(n, e);
  }
  function jn(n) {
    return (
      (jn = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      jn(n)
    );
  }
  function Xn(n, e) {
    return (
      (Xn = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (i, r) {
            return (i.__proto__ = r), i;
          }),
      Xn(n, e)
    );
  }
  function zc() {
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
  function Zs(n, e, t) {
    return (
      zc()
        ? (Zs = Reflect.construct.bind())
        : (Zs = function (r, s, a) {
            var o = [null];
            o.push.apply(o, s);
            var l = Function.bind.apply(r, o),
              u = new l();
            return a && Xn(u, a.prototype), u;
          }),
      Zs.apply(null, arguments)
    );
  }
  function Bm(n) {
    return Function.toString.call(n).indexOf("[native code]") !== -1;
  }
  function Vo(n) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (Vo = function (i) {
        if (i === null || !Bm(i)) return i;
        if (typeof i != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof e < "u") {
          if (e.has(i)) return e.get(i);
          e.set(i, r);
        }
        function r() {
          return Zs(i, arguments, jn(this).constructor);
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
          Xn(r, i)
        );
      }),
      Vo(n)
    );
  }
  function Ks(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function Nm(n, e) {
    if (e && (typeof e == "object" || typeof e == "function")) return e;
    if (e !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return Ks(n);
  }
  function $m(n) {
    var e = zc();
    return function () {
      var i = jn(n),
        r;
      if (e) {
        var s = jn(this).constructor;
        r = Reflect.construct(i, arguments, s);
      } else r = i.apply(this, arguments);
      return Nm(this, r);
    };
  }
  function Hm(n, e) {
    if (typeof n != "object" || n === null) return n;
    var t = n[Symbol.toPrimitive];
    if (t !== void 0) {
      var i = t.call(n, e);
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(n);
  }
  function Rc(n) {
    var e = Hm(n, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  var Bc =
    typeof global < "u" && {}.toString.call(global) === "[object global]";
  function Nc(n, e) {
    return n.indexOf(e.toLowerCase()) === 0
      ? n
      : ""
          .concat(e.toLowerCase())
          .concat(n.substr(0, 1).toUpperCase())
          .concat(n.substr(1));
  }
  function Ym(n) {
    return !!(
      n &&
      n.nodeType === 1 &&
      "nodeName" in n &&
      n.ownerDocument &&
      n.ownerDocument.defaultView
    );
  }
  function Vm(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && Math.floor(n) == n;
  }
  function Sr(n) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      n
    );
  }
  function $c(n) {
    var e =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return e.test(n);
  }
  function Wm(n) {
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
  function Hc() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = n.id,
      t = n.url,
      i = e || t;
    if (!i)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (Vm(i)) return "https://vimeo.com/".concat(i);
    if (Sr(i)) return i.replace("http:", "https:");
    throw e
      ? new TypeError("“".concat(e, "” is not a valid video id."))
      : new TypeError("“".concat(i, "” is not a vimeo.com url."));
  }
  var Yc = function (e, t, i) {
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
    Gm = typeof Array.prototype.indexOf < "u",
    qm = typeof window < "u" && typeof window.postMessage < "u";
  if (!Bc && (!Gm || !qm))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var en =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function jm(n, e) {
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
      i(s.prototype, "delete", function (u) {
        if ((a(this, "delete"), !r(u))) return !1;
        var c = u[this._id];
        return c && c[0] === u ? (delete u[this._id], !0) : !1;
      }),
        i(s.prototype, "get", function (u) {
          if ((a(this, "get"), !!r(u))) {
            var c = u[this._id];
            if (c && c[0] === u) return c[1];
          }
        }),
        i(s.prototype, "has", function (u) {
          if ((a(this, "has"), !r(u))) return !1;
          var c = u[this._id];
          return !!(c && c[0] === u);
        }),
        i(s.prototype, "set", function (u, c) {
          if ((a(this, "set"), !r(u)))
            throw new TypeError("Invalid value used as weak map key");
          var h = u[this._id];
          return h && h[0] === u
            ? ((h[1] = c), this)
            : (i(u, this._id, [u, c]), this);
        });
      function a(u, c) {
        if (!r(u) || !e.call(u, "_id"))
          throw new TypeError(
            c + " method called on incompatible receiver " + typeof u
          );
      }
      function o(u) {
        return u + "_" + l() + "." + l();
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
      : en
  );
  var Kt = jm(function (n) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (t, i, r) {
        (i[t] = i[t] || r()), n.exports && (n.exports = i[t]);
      })("Promise", en, function () {
        var t,
          i,
          r,
          s = Object.prototype.toString,
          a =
            typeof setImmediate < "u"
              ? function (w) {
                  return setImmediate(w);
                }
              : setTimeout;
        try {
          Object.defineProperty({}, "x", {}),
            (t = function (w, y, _, C) {
              return Object.defineProperty(w, y, {
                value: _,
                writable: !0,
                configurable: C !== !1,
              });
            });
        } catch {
          t = function (y, _, C) {
            return (y[_] = C), y;
          };
        }
        r = (function () {
          var w, y, _;
          function C(T, x) {
            (this.fn = T), (this.self = x), (this.next = void 0);
          }
          return {
            add: function (x, A) {
              (_ = new C(x, A)),
                y ? (y.next = _) : (w = _),
                (y = _),
                (_ = void 0);
            },
            drain: function () {
              var x = w;
              for (w = y = i = void 0; x; ) x.fn.call(x.self), (x = x.next);
            },
          };
        })();
        function o(v, w) {
          r.add(v, w), i || (i = a(r.drain));
        }
        function l(v) {
          var w,
            y = typeof v;
          return (
            v != null && (y == "object" || y == "function") && (w = v.then),
            typeof w == "function" ? w : !1
          );
        }
        function u() {
          for (var v = 0; v < this.chain.length; v++)
            c(
              this,
              this.state === 1 ? this.chain[v].success : this.chain[v].failure,
              this.chain[v]
            );
          this.chain.length = 0;
        }
        function c(v, w, y) {
          var _, C;
          try {
            w === !1
              ? y.reject(v.msg)
              : (w === !0 ? (_ = v.msg) : (_ = w.call(void 0, v.msg)),
                _ === y.promise
                  ? y.reject(TypeError("Promise-chain cycle"))
                  : (C = l(_))
                  ? C.call(_, y.resolve, y.reject)
                  : y.resolve(_));
          } catch (T) {
            y.reject(T);
          }
        }
        function h(v) {
          var w,
            y = this;
          if (!y.triggered) {
            (y.triggered = !0), y.def && (y = y.def);
            try {
              (w = l(v))
                ? o(function () {
                    var _ = new f(y);
                    try {
                      w.call(
                        v,
                        function () {
                          h.apply(_, arguments);
                        },
                        function () {
                          m.apply(_, arguments);
                        }
                      );
                    } catch (C) {
                      m.call(_, C);
                    }
                  })
                : ((y.msg = v), (y.state = 1), y.chain.length > 0 && o(u, y));
            } catch (_) {
              m.call(new f(y), _);
            }
          }
        }
        function m(v) {
          var w = this;
          w.triggered ||
            ((w.triggered = !0),
            w.def && (w = w.def),
            (w.msg = v),
            (w.state = 2),
            w.chain.length > 0 && o(u, w));
        }
        function p(v, w, y, _) {
          for (var C = 0; C < w.length; C++)
            (function (x) {
              v.resolve(w[x]).then(function (E) {
                y(x, E);
              }, _);
            })(C);
        }
        function f(v) {
          (this.def = v), (this.triggered = !1);
        }
        function d(v) {
          (this.promise = v),
            (this.state = 0),
            (this.triggered = !1),
            (this.chain = []),
            (this.msg = void 0);
        }
        function g(v) {
          if (typeof v != "function") throw TypeError("Not a function");
          if (this.__NPO__ !== 0) throw TypeError("Not a promise");
          this.__NPO__ = 1;
          var w = new d(this);
          (this.then = function (_, C) {
            var T = {
              success: typeof _ == "function" ? _ : !0,
              failure: typeof C == "function" ? C : !1,
            };
            return (
              (T.promise = new this.constructor(function (A, E) {
                if (typeof A != "function" || typeof E != "function")
                  throw TypeError("Not a function");
                (T.resolve = A), (T.reject = E);
              })),
              w.chain.push(T),
              w.state !== 0 && o(u, w),
              T.promise
            );
          }),
            (this.catch = function (_) {
              return this.then(void 0, _);
            });
          try {
            v.call(
              void 0,
              function (_) {
                h.call(w, _);
              },
              function (_) {
                m.call(w, _);
              }
            );
          } catch (y) {
            m.call(w, y);
          }
        }
        var b = t({}, "constructor", g, !1);
        return (
          (g.prototype = b),
          t(b, "__NPO__", 0, !1),
          t(g, "resolve", function (w) {
            var y = this;
            return w && typeof w == "object" && w.__NPO__ === 1
              ? w
              : new y(function (C, T) {
                  if (typeof C != "function" || typeof T != "function")
                    throw TypeError("Not a function");
                  C(w);
                });
          }),
          t(g, "reject", function (w) {
            return new this(function (_, C) {
              if (typeof _ != "function" || typeof C != "function")
                throw TypeError("Not a function");
              C(w);
            });
          }),
          t(g, "all", function (w) {
            var y = this;
            return s.call(w) != "[object Array]"
              ? y.reject(TypeError("Not an array"))
              : w.length === 0
              ? y.resolve([])
              : new y(function (C, T) {
                  if (typeof C != "function" || typeof T != "function")
                    throw TypeError("Not a function");
                  var x = w.length,
                    A = Array(x),
                    E = 0;
                  p(
                    y,
                    w,
                    function (D, S) {
                      (A[D] = S), ++E === x && C(A);
                    },
                    T
                  );
                });
          }),
          t(g, "race", function (w) {
            var y = this;
            return s.call(w) != "[object Array]"
              ? y.reject(TypeError("Not an array"))
              : new y(function (C, T) {
                  if (typeof C != "function" || typeof T != "function")
                    throw TypeError("Not a function");
                  p(
                    y,
                    w,
                    function (A, E) {
                      C(E);
                    },
                    T
                  );
                });
          }),
          g
        );
      });
    }),
    Mi = new WeakMap();
  function Un(n, e, t) {
    var i = Mi.get(n.element) || {};
    e in i || (i[e] = []), i[e].push(t), Mi.set(n.element, i);
  }
  function Js(n, e) {
    var t = Mi.get(n.element) || {};
    return t[e] || [];
  }
  function Qs(n, e, t) {
    var i = Mi.get(n.element) || {};
    if (!i[e]) return !0;
    if (!t) return (i[e] = []), Mi.set(n.element, i), !0;
    var r = i[e].indexOf(t);
    return (
      r !== -1 && i[e].splice(r, 1),
      Mi.set(n.element, i),
      i[e] && i[e].length === 0
    );
  }
  function Xm(n, e) {
    var t = Js(n, e);
    if (t.length < 1) return !1;
    var i = t.shift();
    return Qs(n, e, i), i;
  }
  function Um(n, e) {
    var t = Mi.get(n);
    Mi.set(e, t), Mi.delete(n);
  }
  function ea(n) {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch (e) {
        return console.warn(e), {};
      }
    return n;
  }
  function Tr(n, e, t) {
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
  function Zm(n, e) {
    e = ea(e);
    var t = [],
      i;
    if (e.event) {
      if (e.event === "error") {
        var r = Js(n, e.data.method);
        r.forEach(function (a) {
          var o = new Error(e.data.message);
          (o.name = e.data.name), a.reject(o), Qs(n, e.data.method, a);
        });
      }
      (t = Js(n, "event:".concat(e.event))), (i = e.data);
    } else if (e.method) {
      var s = Xm(n, e.method);
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
  var Km = [
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
  function Vc(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Km.reduce(function (t, i) {
      var r = n.getAttribute("data-vimeo-".concat(i));
      return (r || r === "") && (t[i] = r === "" ? 1 : r), t;
    }, e);
  }
  function Wo(n, e) {
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
  function Wc(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (i, r) {
      if (!Sr(n))
        throw new TypeError("“".concat(n, "” is not a vimeo.com url."));
      var s = Wm(n),
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
            var u = JSON.parse(l.responseText);
            if (u.domain_status_code === 403) {
              Wo(u, t), r(new Error("“".concat(n, "” is not embeddable.")));
              return;
            }
            i(u);
          } catch (c) {
            r(c);
          }
        }),
        (l.onerror = function () {
          var u = l.status ? " (".concat(l.status, ")") : "";
          r(
            new Error(
              "There was an error fetching the embed code from Vimeo".concat(
                u,
                "."
              )
            )
          );
        }),
        l.send();
    });
  }
  function Jm() {
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
        var r = Vc(i),
          s = Hc(r);
        Wc(s, r, i)
          .then(function (a) {
            return Wo(a, i);
          })
          .catch(t);
      } catch (a) {
        t(a);
      }
    });
  }
  function Qm() {
    var n =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var e = function (i) {
        if (Sr(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
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
  function eg() {
    var n =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var e = function (i) {
        if (Sr(i.origin)) {
          var r = ea(i.data);
          if (!(!r || r.event !== "ready"))
            for (
              var s = n.querySelectorAll("iframe"), a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a],
                l = o.contentWindow === i.source;
              if ($c(o.src) && l) {
                var u = new ta(o);
                u.callMethod("appendVideoMetadata", window.location.href);
              }
            }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function tg() {
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
          if (Sr(r.origin)) {
            var s = ea(r.data);
            if (!(!s || s.event !== "ready"))
              for (
                var a = n.querySelectorAll("iframe"),
                  o = function () {
                    var c = a[l],
                      h = c.contentWindow === r.source;
                    if ($c(c.src) && h) {
                      var m = new ta(c);
                      m.getVideoId()
                        .then(function (p) {
                          var f = new RegExp(
                            "[?&]vimeo_t_".concat(p, "=([^&#]*)")
                          ).exec(window.location.href);
                          if (f && f[1]) {
                            var d = decodeURI(f[1]);
                            m.setCurrentTime(d);
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
  function ig() {
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
            var o = function u() {
              t.off("fullscreenchange", u), s();
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
  var rg = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    ng = (function (n) {
      Rm(t, n);
      var e = $m(t);
      function t(i, r) {
        var s,
          a =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        return (
          Fc(this, t),
          (s = e.call(this)),
          Us(Ks(s), "logger", void 0),
          Us(Ks(s), "speedAdjustment", 0),
          Us(
            Ks(s),
            "adjustSpeed",
            (function () {
              var l = Er(
                bt().mark(function u(c, h) {
                  var m;
                  return bt().wrap(function (f) {
                    for (;;)
                      switch ((f.prev = f.next)) {
                        case 0:
                          if (s.speedAdjustment !== h) {
                            f.next = 2;
                            break;
                          }
                          return f.abrupt("return");
                        case 2:
                          return (f.next = 4), c.getPlaybackRate();
                        case 4:
                          return (
                            (f.t0 = f.sent),
                            (f.t1 = s.speedAdjustment),
                            (f.t2 = f.t0 - f.t1),
                            (f.t3 = h),
                            (m = f.t2 + f.t3),
                            s.log("New playbackRate:  ".concat(m)),
                            (f.next = 12),
                            c.setPlaybackRate(m)
                          );
                        case 12:
                          s.speedAdjustment = h;
                        case 13:
                        case "end":
                          return f.stop();
                      }
                  }, u);
                })
              );
              return function (u, c) {
                return l.apply(this, arguments);
              };
            })()
          ),
          (s.logger = o),
          s.init(r, i, Oc(Oc({}, rg), a)),
          s
        );
      }
      return (
        Lc(t, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value: (function () {
              var i = Er(
                bt().mark(function s(a, o, l) {
                  var u = this,
                    c,
                    h,
                    m;
                  return bt().wrap(
                    function (f) {
                      for (;;)
                        switch ((f.prev = f.next)) {
                          case 0:
                            return (
                              (f.next = 2), this.waitForTOReadyState(a, "open")
                            );
                          case 2:
                            if (l.role !== "viewer") {
                              f.next = 10;
                              break;
                            }
                            return (f.next = 5), this.updatePlayer(a, o, l);
                          case 5:
                            (c = Yc(a, "change", function () {
                              return u.updatePlayer(a, o, l);
                            })),
                              (h = this.maintainPlaybackPosition(a, o, l)),
                              this.addEventListener("disconnect", function () {
                                h.cancel(), c.cancel();
                              }),
                              (f.next = 14);
                            break;
                          case 10:
                            return (f.next = 12), this.updateTimingObject(a, o);
                          case 12:
                            (m = Yc(
                              o,
                              ["seeked", "play", "pause", "ratechange"],
                              function () {
                                return u.updateTimingObject(a, o);
                              },
                              "on",
                              "off"
                            )),
                              this.addEventListener("disconnect", function () {
                                return m.cancel();
                              });
                          case 14:
                          case "end":
                            return f.stop();
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
              var i = Er(
                bt().mark(function s(a, o) {
                  return bt().wrap(function (u) {
                    for (;;)
                      switch ((u.prev = u.next)) {
                        case 0:
                          return (u.t0 = a), (u.next = 3), o.getCurrentTime();
                        case 3:
                          return (u.t1 = u.sent), (u.next = 6), o.getPaused();
                        case 6:
                          if (!u.sent) {
                            u.next = 10;
                            break;
                          }
                          (u.t2 = 0), (u.next = 13);
                          break;
                        case 10:
                          return (u.next = 12), o.getPlaybackRate();
                        case 12:
                          u.t2 = u.sent;
                        case 13:
                          (u.t3 = u.t2),
                            (u.t4 = { position: u.t1, velocity: u.t3 }),
                            u.t0.update.call(u.t0, u.t4);
                        case 16:
                        case "end":
                          return u.stop();
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
              var i = Er(
                bt().mark(function s(a, o, l) {
                  var u, c, h;
                  return bt().wrap(
                    function (p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            if (
                              ((u = a.query()),
                              (c = u.position),
                              (h = u.velocity),
                              typeof c == "number" && o.setCurrentTime(c),
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
                                  var f = Er(
                                    bt().mark(function d(g) {
                                      return bt().wrap(function (v) {
                                        for (;;)
                                          switch ((v.prev = v.next)) {
                                            case 0:
                                              if (
                                                !(
                                                  g.name ===
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
                                                o.play().catch(function (w) {
                                                  return console.error(
                                                    "Couldn't play the video from TimingSrcConnector. Error:",
                                                    w
                                                  );
                                                })
                                              );
                                            case 5:
                                            case "end":
                                              return v.stop();
                                          }
                                      }, d);
                                    })
                                  );
                                  return function (d) {
                                    return f.apply(this, arguments);
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
                u = a.maxAllowedDrift,
                c = a.minCheckInterval,
                h = a.maxRateAdjustment,
                m = a.maxTimeToCatchUp,
                p = Math.min(m, Math.max(c, u)) * 1e3,
                f = (function () {
                  var g = Er(
                    bt().mark(function b() {
                      var v, w, y, _, C;
                      return bt().wrap(function (x) {
                        for (;;)
                          switch ((x.prev = x.next)) {
                            case 0:
                              if (((x.t0 = r.query().velocity === 0), x.t0)) {
                                x.next = 6;
                                break;
                              }
                              return (x.next = 4), s.getPaused();
                            case 4:
                              (x.t1 = x.sent), (x.t0 = x.t1 === !0);
                            case 6:
                              if (!x.t0) {
                                x.next = 8;
                                break;
                              }
                              return x.abrupt("return");
                            case 8:
                              return (
                                (x.t2 = r.query().position),
                                (x.next = 11),
                                s.getCurrentTime()
                              );
                            case 11:
                              if (
                                ((x.t3 = x.sent),
                                (v = x.t2 - x.t3),
                                (w = Math.abs(v)),
                                o.log("Drift: ".concat(v)),
                                !(w > u))
                              ) {
                                x.next = 22;
                                break;
                              }
                              return (x.next = 18), o.adjustSpeed(s, 0);
                            case 18:
                              s.setCurrentTime(r.query().position),
                                o.log("Resync by currentTime"),
                                (x.next = 29);
                              break;
                            case 22:
                              if (!(w > l)) {
                                x.next = 29;
                                break;
                              }
                              return (
                                (y = w / m),
                                (_ = h),
                                (C = y < _ ? (_ - y) / 2 : _),
                                (x.next = 28),
                                o.adjustSpeed(s, C * Math.sign(v))
                              );
                            case 28:
                              o.log("Resync by playbackRate");
                            case 29:
                            case "end":
                              return x.stop();
                          }
                      }, b);
                    })
                  );
                  return function () {
                    return g.apply(this, arguments);
                  };
                })(),
                d = setInterval(function () {
                  return f();
                }, p);
              return {
                cancel: function () {
                  return clearInterval(d);
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
    })(Vo(EventTarget)),
    tn = new WeakMap(),
    Go = new WeakMap(),
    Ct = {},
    ta = (function () {
      function n(e) {
        var t = this,
          i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (Fc(this, n),
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
          !Ym(e))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (e.nodeName !== "IFRAME") {
          var r = e.querySelector("iframe");
          r && (e = r);
        }
        if (e.nodeName === "IFRAME" && !Sr(e.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (tn.has(e)) return tn.get(e);
        (this._window = e.ownerDocument.defaultView),
          (this.element = e),
          (this.origin = "*");
        var s = new Kt(function (o, l) {
          if (
            ((t._onMessage = function (h) {
              if (!(!Sr(h.origin) || t.element.contentWindow !== h.source)) {
                t.origin === "*" && (t.origin = h.origin);
                var m = ea(h.data),
                  p = m && m.event === "error",
                  f = p && m.data && m.data.method === "ready";
                if (f) {
                  var d = new Error(m.data.message);
                  (d.name = m.data.name), l(d);
                  return;
                }
                var g = m && m.event === "ready",
                  b = m && m.method === "ping";
                if (g || b) {
                  t.element.setAttribute("data-ready", "true"), o();
                  return;
                }
                Zm(t, m);
              }
            }),
            t._window.addEventListener("message", t._onMessage),
            t.element.nodeName !== "IFRAME")
          ) {
            var u = Vc(e, i),
              c = Hc(u);
            Wc(c, u, e)
              .then(function (h) {
                var m = Wo(h, e);
                return (
                  (t.element = m),
                  (t._originalElement = e),
                  Um(e, m),
                  tn.set(t.element, t),
                  h
                );
              })
              .catch(l);
          }
        });
        if (
          (Go.set(this, s),
          tn.set(this.element, this),
          this.element.nodeName === "IFRAME" && Tr(this, "ping"),
          Ct.isEnabled)
        ) {
          var a = function () {
            return Ct.exit();
          };
          (this.fullscreenchangeHandler = function () {
            Ct.isFullscreen
              ? Un(t, "event:exitFullscreen", a)
              : Qs(t, "event:exitFullscreen", a),
              t.ready().then(function () {
                Tr(t, "fullscreenchange", Ct.isFullscreen);
              });
          }),
            Ct.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        Lc(n, [
          {
            key: "callMethod",
            value: function (t) {
              var i = this,
                r =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
              return new Kt(function (s, a) {
                return i
                  .ready()
                  .then(function () {
                    Un(i, t, { resolve: s, reject: a }), Tr(i, t, r);
                  })
                  .catch(a);
              });
            },
          },
          {
            key: "get",
            value: function (t) {
              var i = this;
              return new Kt(function (r, s) {
                return (
                  (t = Nc(t, "get")),
                  i
                    .ready()
                    .then(function () {
                      Un(i, t, { resolve: r, reject: s }), Tr(i, t);
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
              return new Kt(function (s, a) {
                if (((t = Nc(t, "set")), i == null))
                  throw new TypeError("There must be a value to set.");
                return r
                  .ready()
                  .then(function () {
                    Un(r, t, { resolve: s, reject: a }), Tr(r, t, i);
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
              var r = Js(this, "event:".concat(t));
              r.length === 0 &&
                this.callMethod("addEventListener", t).catch(function () {}),
                Un(this, "event:".concat(t), i);
            },
          },
          {
            key: "off",
            value: function (t, i) {
              if (!t) throw new TypeError("You must pass an event name.");
              if (i && typeof i != "function")
                throw new TypeError("The callback must be a function.");
              var r = Qs(this, "event:".concat(t), i);
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
                Go.get(this) ||
                new Kt(function (i, r) {
                  r(new Error("Unknown player. Probably unloaded."));
                });
              return Kt.resolve(t);
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
              return Ct.isEnabled
                ? Ct.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return Ct.isEnabled
                ? Ct.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return Ct.isEnabled
                ? Kt.resolve(Ct.isFullscreen)
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
              return new Kt(function (i) {
                if (
                  (Go.delete(t),
                  tn.delete(t.element),
                  t._originalElement &&
                    (tn.delete(t._originalElement),
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
                  Ct.isEnabled &&
                    Ct.off("fullscreenchange", t.fullscreenchangeHandler),
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
              return Kt.all([
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
                return new Kt(function (s, a) {
                  return a(new TypeError("Argument must be an array."));
                });
              var i = new Kt(function (s) {
                  return s(null);
                }),
                r = [
                  t[0] ? this.set("colorOne", t[0]) : i,
                  t[1] ? this.set("colorTwo", t[1]) : i,
                  t[2] ? this.set("colorThree", t[2]) : i,
                  t[3] ? this.set("colorFour", t[3]) : i,
                ];
              return Kt.all(r);
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
              var e = Er(
                bt().mark(function i(r, s) {
                  var a = this,
                    o;
                  return bt().wrap(
                    function (u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            if (r) {
                              u.next = 2;
                              break;
                            }
                            throw new TypeError(
                              "A Timing Object must be provided."
                            );
                          case 2:
                            return (u.next = 4), this.ready();
                          case 4:
                            return (
                              (o = new ng(this, r, s)),
                              Tr(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return Tr(a, "notifyTimingObjectDisconnect");
                              }),
                              u.abrupt("return", o)
                            );
                          case 8:
                          case "end":
                            return u.stop();
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
  Bc || ((Ct = ig()), Jm(), Qm(), eg(), tg());
  class sg {
    constructor() {
      typeof ta < "u"
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
          let v = function (E) {
              let z = Math.floor(E / 3600);
              E -= z * 3600;
              let D = Math.floor(E / 60);
              return (E -= D * 60), D + ":" + (E < 10 ? "0" + E : E);
            },
            C = function () {
              u.getDuration().then(function () {
                const E = y.value;
                u.setCurrentTime(E), _ && (_.value = E);
              });
            },
            x = function () {
              t.setAttribute("data-vimeo-hover", "false");
            },
            A = function () {
              t.setAttribute("data-vimeo-activated", "false"),
                t.setAttribute("data-vimeo-playing", "false"),
                u.unload();
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
            u = new ta(s);
          if (
            (t.getAttribute("data-vimeo-update-size") === "true" &&
              u.getVideoWidth().then(function (E) {
                u.getVideoHeight().then(function (z) {
                  const D = t.querySelector(".vimeo-player__before");
                  D && (D.style.paddingTop = (z / E) * 100 + "%");
                });
              }),
            u.on("play", function () {
              t.setAttribute("data-vimeo-loaded", "true");
            }),
            t.getAttribute("data-vimeo-autoplay") === "false")
          )
            u.setVolume(1), u.pause();
          else if (
            (u.setVolume(0),
            t.setAttribute("data-vimeo-muted", "true"),
            t.getAttribute("data-vimeo-paused-by-user") === "false")
          ) {
            const E = () => {
              const z = t.getBoundingClientRect();
              z.top < window.innerHeight && z.bottom > 0 ? c() : h();
            };
            E(), window.addEventListener("scroll", E);
          }
          const c = () => {
              t.setAttribute("data-vimeo-activated", "true"),
                t.setAttribute("data-vimeo-playing", "true"),
                u.play();
            },
            h = () => {
              t.setAttribute("data-vimeo-playing", "false"), u.pause();
            },
            m = t.querySelector('[data-vimeo-control="play"]');
          m &&
            m.addEventListener("click", function () {
              u.setVolume(0),
                c(),
                t.getAttribute("data-vimeo-muted") === "true"
                  ? u.setVolume(0)
                  : u.setVolume(1);
            });
          const p = t.querySelector('[data-vimeo-control="pause"]');
          p &&
            p.addEventListener("click", function () {
              h(),
                t.getAttribute("data-vimeo-autoplay") === "true" &&
                  (t.setAttribute("data-vimeo-paused-by-user", "true"),
                  window.removeEventListener("scroll", checkVisibility));
            });
          const f = t.querySelector('[data-vimeo-control="mute"]');
          f &&
            f.addEventListener("click", function () {
              t.getAttribute("data-vimeo-muted") === "false"
                ? (u.setVolume(0), t.setAttribute("data-vimeo-muted", "true"))
                : (u.setVolume(1), t.setAttribute("data-vimeo-muted", "false"));
            });
          const d = !!(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            ),
            g = t.querySelector('[data-vimeo-control="fullscreen"]');
          !d && g && (g.style.display = "none"),
            g &&
              g.addEventListener("click", () => {
                const E = document.getElementById(l);
                if (!E) return;
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
                      E.requestFullscreen ||
                      E.webkitRequestFullscreen ||
                      E.mozRequestFullScreen ||
                      E.msRequestFullscreen
                    ).call(E));
              });
          const b = () => {
            const E =
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement;
            t.setAttribute("data-vimeo-fullscreen", E ? "true" : "false");
          };
          [
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "msfullscreenchange",
          ].forEach((E) => {
            document.addEventListener(E, b);
          });
          const w = t.querySelector("[data-vimeo-duration]");
          u.getDuration().then(function (E) {
            w && (w.textContent = v(E)),
              t
                .querySelectorAll('[data-vimeo-control="timeline"], progress')
                .forEach((D) => {
                  D.setAttribute("max", E);
                });
          });
          const y = t.querySelector('[data-vimeo-control="timeline"]'),
            _ = t.querySelector("progress");
          y &&
            ["input", "change"].forEach((E) => {
              y.addEventListener(E, C);
            }),
            u.on("timeupdate", function (E) {
              y && (y.value = E.seconds),
                _ && (_.value = E.seconds),
                w && (w.textContent = v(Math.trunc(E.seconds)));
            });
          let T;
          t.addEventListener("mousemove", function () {
            t.getAttribute("data-vimeo-hover") === "false" &&
              t.setAttribute("data-vimeo-hover", "true"),
              clearTimeout(T),
              (T = setTimeout(x, 3e3));
          }),
            u.on("ended", A);
        } catch (r) {
          console.error("Error initializing Vimeo player:", r);
        }
      });
    }
  }
  const ag = () => {
    new sg();
  };
  /*!
   * strings: 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var og =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function Gc(n) {
    var e = n.nodeType,
      t = "";
    if (e === 1 || e === 9 || e === 11) {
      if (typeof n.textContent == "string") return n.textContent;
      for (n = n.firstChild; n; n = n.nextSibling) t += Gc(n);
    } else if (e === 3 || e === 4) return n.nodeValue;
    return t;
  }
  /*!
   * SplitText: 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var rn,
    qo,
    qc,
    Zn,
    jc,
    ia,
    lg = /(?:\r|\n|\t\t)/g,
    ug = /(?:\s\s+)/g,
    cg = " ",
    Xc = function (e) {
      (rn = document),
        (qo = window),
        (Zn =
          Zn ||
          e ||
          qo.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")),
        Zn &&
          ((ia = Zn.utils.toArray),
          (jc = Zn.core.context || function () {}),
          (qc = 1));
    },
    Uc = function (e) {
      return qo.getComputedStyle(e);
    },
    jo = function (e) {
      return e.position === "absolute" || e.absolute === !0;
    },
    dg = function (e, t) {
      for (var i = t.length, r; --i > -1; )
        if (((r = t[i]), e.substr(0, r.length) === r)) return r.length;
    },
    fg = " style='position:relative;display:inline-block;'",
    Zc = function (e, t) {
      e === void 0 && (e = "");
      var i = ~e.indexOf("++"),
        r = 1;
      return (
        i && (e = e.split("++").join("")),
        function () {
          return (
            "<" + t + fg + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
          );
        }
      );
    },
    Kc = function n(e, t, i) {
      var r = e.nodeType;
      if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling) n(e, t, i);
      else (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(t).join(i));
    },
    Xo = function (e, t) {
      for (var i = t.length; --i > -1; ) e.push(t[i]);
    },
    Jc = function (e, t, i) {
      for (var r; e && e !== t; ) {
        if (((r = e._next || e.nextSibling), r))
          return r.textContent.charAt(0) === i;
        e = e.parentNode || e._parent;
      }
    },
    pg = function n(e) {
      var t = ia(e.childNodes),
        i = t.length,
        r,
        s;
      for (r = 0; r < i; r++)
        (s = t[r]),
          s._isSplit
            ? n(s)
            : r && s.previousSibling && s.previousSibling.nodeType === 3
            ? ((s.previousSibling.nodeValue +=
                s.nodeType === 3 ? s.nodeValue : s.firstChild.nodeValue),
              e.removeChild(s))
            : s.nodeType !== 3 &&
              (e.insertBefore(s.firstChild, s), e.removeChild(s));
    },
    vi = function (e, t) {
      return parseFloat(t[e]) || 0;
    },
    hg = function (e, t, i, r, s, a, o) {
      var l = Uc(e),
        u = vi("paddingLeft", l),
        c = -999,
        h = vi("borderBottomWidth", l) + vi("borderTopWidth", l),
        m = vi("borderLeftWidth", l) + vi("borderRightWidth", l),
        p = vi("paddingTop", l) + vi("paddingBottom", l),
        f = vi("paddingLeft", l) + vi("paddingRight", l),
        d = vi("fontSize", l) * (t.lineThreshold || 0.2),
        g = l.textAlign,
        b = [],
        v = [],
        w = [],
        y = t.wordDelimiter || " ",
        _ = t.tag ? t.tag : t.span ? "span" : "div",
        C = t.type || t.split || "chars,words,lines",
        T = s && ~C.indexOf("lines") ? [] : null,
        x = ~C.indexOf("words"),
        A = ~C.indexOf("chars"),
        E = jo(t),
        z = t.linesClass,
        D = ~(z || "").indexOf("++"),
        S = [],
        M = l.display === "flex",
        L = e.style.display,
        F,
        P,
        I,
        O,
        k,
        Y,
        X,
        ue,
        re,
        B,
        N,
        $;
      for (
        D && (z = z.split("++").join("")),
          M && (e.style.display = "block"),
          P = e.getElementsByTagName("*"),
          I = P.length,
          k = [],
          F = 0;
        F < I;
        F++
      )
        k[F] = P[F];
      if (T || E)
        for (F = 0; F < I; F++)
          (O = k[F]),
            (Y = O.parentNode === e),
            (Y || E || (A && !x)) &&
              (($ = O.offsetTop),
              T &&
                Y &&
                Math.abs($ - c) > d &&
                (O.nodeName !== "BR" || F === 0) &&
                ((X = []), T.push(X), (c = $)),
              E &&
                ((O._x = O.offsetLeft),
                (O._y = $),
                (O._w = O.offsetWidth),
                (O._h = O.offsetHeight)),
              T &&
                (((O._isSplit && Y) ||
                  (!A && Y) ||
                  (x && Y) ||
                  (!x &&
                    O.parentNode.parentNode === e &&
                    !O.parentNode._isSplit)) &&
                  (X.push(O), (O._x -= u), Jc(O, e, y) && (O._wordEnd = !0)),
                O.nodeName === "BR" &&
                  ((O.nextSibling && O.nextSibling.nodeName === "BR") ||
                    F === 0) &&
                  T.push([])));
      for (F = 0; F < I; F++) {
        if (((O = k[F]), (Y = O.parentNode === e), O.nodeName === "BR")) {
          T || E
            ? (O.parentNode && O.parentNode.removeChild(O),
              k.splice(F--, 1),
              I--)
            : x || e.appendChild(O);
          continue;
        }
        if (
          (E &&
            ((re = O.style),
            !x && !Y && ((O._x += O.parentNode._x), (O._y += O.parentNode._y)),
            (re.left = O._x + "px"),
            (re.top = O._y + "px"),
            (re.position = "absolute"),
            (re.display = "block"),
            (re.width = O._w + 1 + "px"),
            (re.height = O._h + "px")),
          !x && A)
        )
          if (O._isSplit)
            for (
              O._next = P = O.nextSibling, O.parentNode.appendChild(O);
              P && P.nodeType === 3 && P.textContent === " ";

            )
              (O._next = P.nextSibling),
                O.parentNode.appendChild(P),
                (P = P.nextSibling);
          else
            O.parentNode._isSplit
              ? ((O._parent = O.parentNode),
                !O.previousSibling &&
                  O.firstChild &&
                  (O.firstChild._isFirst = !0),
                O.nextSibling &&
                  O.nextSibling.textContent === " " &&
                  !O.nextSibling.nextSibling &&
                  S.push(O.nextSibling),
                (O._next =
                  O.nextSibling && O.nextSibling._isFirst
                    ? null
                    : O.nextSibling),
                O.parentNode.removeChild(O),
                k.splice(F--, 1),
                I--)
              : Y ||
                (($ = !O.nextSibling && Jc(O.parentNode, e, y)),
                O.parentNode._parent && O.parentNode._parent.appendChild(O),
                $ && O.parentNode.appendChild(rn.createTextNode(" ")),
                _ === "span" && (O.style.display = "inline"),
                b.push(O));
        else
          O.parentNode._isSplit && !O._isSplit && O.innerHTML !== ""
            ? v.push(O)
            : A &&
              !O._isSplit &&
              (_ === "span" && (O.style.display = "inline"), b.push(O));
      }
      for (F = S.length; --F > -1; ) S[F].parentNode.removeChild(S[F]);
      if (T) {
        for (
          E &&
            ((B = rn.createElement(_)),
            e.appendChild(B),
            (N = B.offsetWidth + "px"),
            ($ = B.offsetParent === e ? 0 : e.offsetLeft),
            e.removeChild(B)),
            re = e.style.cssText,
            e.style.cssText = "display:none;";
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (ue = y === " " && (!E || (!x && !A)), F = 0; F < T.length; F++) {
          for (
            X = T[F],
              B = rn.createElement(_),
              B.style.cssText =
                "display:block;text-align:" +
                g +
                ";position:" +
                (E ? "absolute;" : "relative;"),
              z && (B.className = z + (D ? F + 1 : "")),
              w.push(B),
              I = X.length,
              P = 0;
            P < I;
            P++
          )
            X[P].nodeName !== "BR" &&
              ((O = X[P]),
              B.appendChild(O),
              ue && O._wordEnd && B.appendChild(rn.createTextNode(" ")),
              E &&
                (P === 0 &&
                  ((B.style.top = O._y + "px"), (B.style.left = u + $ + "px")),
                (O.style.top = "0px"),
                $ && (O.style.left = O._x - $ + "px")));
          I === 0
            ? (B.innerHTML = "&nbsp;")
            : !x && !A && (pg(B), Kc(B, " ", " ")),
            E && ((B.style.width = N), (B.style.height = O._h + "px")),
            e.appendChild(B);
        }
        e.style.cssText = re;
      }
      E &&
        (o > e.clientHeight &&
          ((e.style.height = o - p + "px"),
          e.clientHeight < o && (e.style.height = o + h + "px")),
        a > e.clientWidth &&
          ((e.style.width = a - f + "px"),
          e.clientWidth < a && (e.style.width = a + m + "px"))),
        M && (L ? (e.style.display = L) : e.style.removeProperty("display")),
        Xo(i, b),
        x && Xo(r, v),
        Xo(s, w);
    },
    mg = function (e, t, i, r) {
      var s = t.tag ? t.tag : t.span ? "span" : "div",
        a = t.type || t.split || "chars,words,lines",
        o = ~a.indexOf("chars"),
        l = jo(t),
        u = t.wordDelimiter || " ",
        c = function (E) {
          return E === u || (E === cg && u === " ");
        },
        h = u !== " " ? "" : l ? "&#173; " : " ",
        m = "</" + s + ">",
        p = 1,
        f = t.specialChars
          ? typeof t.specialChars == "function"
            ? t.specialChars
            : dg
          : null,
        d,
        g,
        b,
        v,
        w,
        y,
        _,
        C,
        T = rn.createElement("div"),
        x = e.parentNode;
      for (
        x.insertBefore(T, e),
          T.textContent = e.nodeValue,
          x.removeChild(e),
          e = T,
          d = Gc(e),
          _ = d.indexOf("<") !== -1,
          t.reduceWhiteSpace !== !1 && (d = d.replace(ug, " ").replace(lg, "")),
          _ && (d = d.split("<").join("{{LT}}")),
          w = d.length,
          g = (d.charAt(0) === " " ? h : "") + i(),
          b = 0;
        b < w;
        b++
      )
        if (((y = d.charAt(b)), f && (C = f(d.substr(b), t.specialChars))))
          (y = d.substr(b, C || 1)),
            (g += o && y !== " " ? r() + y + "</" + s + ">" : y),
            (b += C - 1);
        else if (c(y) && !c(d.charAt(b - 1)) && b) {
          for (g += p ? m : "", p = 0; c(d.charAt(b + 1)); ) (g += h), b++;
          b === w - 1
            ? (g += h)
            : d.charAt(b + 1) !== ")" && ((g += h + i()), (p = 1));
        } else
          y === "{" && d.substr(b, 6) === "{{LT}}"
            ? ((g += o ? r() + "{{LT}}</" + s + ">" : "{{LT}}"), (b += 5))
            : (y.charCodeAt(0) >= 55296 && y.charCodeAt(0) <= 56319) ||
              (d.charCodeAt(b + 1) >= 65024 && d.charCodeAt(b + 1) <= 65039)
            ? ((v = ((d.substr(b, 12).split(og) || [])[1] || "").length || 2),
              (g +=
                o && y !== " "
                  ? r() + d.substr(b, v) + "</" + s + ">"
                  : d.substr(b, v)),
              (b += v - 1))
            : (g += o && y !== " " ? r() + y + "</" + s + ">" : y);
      (e.outerHTML = g + (p ? m : "")), _ && Kc(x, "{{LT}}", "<");
    },
    gg = function n(e, t, i, r) {
      var s = ia(e.childNodes),
        a = s.length,
        o = jo(t),
        l,
        u;
      if (e.nodeType !== 3 || a > 1) {
        for (t.absolute = !1, l = 0; l < a; l++)
          (u = s[l]),
            (u._next = u._isFirst = u._parent = u._wordEnd = null),
            (u.nodeType !== 3 || /\S+/.test(u.nodeValue)) &&
              (o &&
                u.nodeType !== 3 &&
                Uc(u).display === "inline" &&
                ((u.style.display = "inline-block"),
                (u.style.position = "relative")),
              (u._isSplit = !0),
              n(u, t, i, r));
        (t.absolute = o), (e._isSplit = !0);
        return;
      }
      mg(e, t, i, r);
    },
    ra = (function () {
      function n(t, i) {
        qc || Xc(),
          (this.elements = ia(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = i || {}),
          jc(this),
          this.split(i);
      }
      var e = n.prototype;
      return (
        (e.split = function (i) {
          this.isSplit && this.revert(),
            (this.vars = i = i || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var r = this.elements.length,
              s = i.tag ? i.tag : i.span ? "span" : "div",
              a = Zc(i.wordsClass, s),
              o = Zc(i.charsClass, s),
              l,
              u,
              c;
            --r > -1;

          )
            (c = this.elements[r]),
              (this._originals[r] = {
                html: c.innerHTML,
                style: c.getAttribute("style"),
              }),
              (l = c.clientHeight),
              (u = c.clientWidth),
              gg(c, i, a, o),
              hg(c, i, this.chars, this.words, this.lines, u, l);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (e.revert = function () {
          var i = this._originals;
          if (!i) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (r, s) {
              (r.innerHTML = i[s].html),
                r.setAttribute("style", i[s].style || "");
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (n.create = function (i, r) {
          return new n(i, r);
        }),
        n
      );
    })();
  (ra.version = "3.12.7"), (ra.register = Xc), nt.registerPlugin(ie, ra);
  const wg = () => {
      const n = document.querySelectorAll("[text-reveal]");
      n.length !== 0 &&
        n.forEach((e) => {
          const i = new ra(e, {
            type: "chars, words",
            charsClass: "char++",
            wordsClass: "word++",
          }).chars;
          nt.fromTo(
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
    Uo = () => {
      wg();
    };
  function vg() {
    Lm(), ag(), Uo();
  }
  const Qc = "https://boards-api.greenhouse.io/v1/boards/strivepharmacy";
  class Zo {
    constructor(e = `${Qc}/departments`) {
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
    static init(e = `${Qc}/departments`) {
      const t = new Zo(e);
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
  Zo.init();
  function yg() {
    Uo();
  }
  class bg {
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
  const _g = () => new bg();
  function Dg() {
    Xs(), _g();
  }
  function Eg() {
    Xs();
  }
  function Sg() {
    Uo();
  }
  async function Tg() {
    Xs();
  }
  const ed = {
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
    xg = () => (ed.init(), ed),
    Cg = () => {
      xg();
    };
  class Ag {
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
          nt.set(this.elements.mapDotTag[t], { scale: 0, y: 20, opacity: 0 }),
            nt.set(this.elements.mapDotGlow[t], { opacity: 0.3, scale: 1 }),
            nt.set(this.elements.mapDotLarge[t], {
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
      const t = nt.timeline({ repeat: -1 }),
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
        const i = nt.timeline();
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
        nt.killTweensOf([
          this.elements.mapDotGlow[e],
          this.elements.mapDotLarge[e],
          this.elements.mapDotSmall[e],
          this.elements.mapDotTag[e],
        ]);
      const t = nt.timeline({
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
  const Mg = () => new Ag(),
    kg = () => {
      Mg();
    },
    Pg = () => {
      kg();
    },
    Og = () => {
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
          const u =
            i.getAttribute("filter-accordion-status") === "active"
              ? "inactive"
              : "active";
          a.forEach((c) => {
            c && c.setAttribute("filter-accordion-status", u);
          });
        };
        t.addEventListener("click", o);
      });
    },
    Ig = () => {
      Og();
    };
  function Fg() {
    Ig();
  }
  const Lg = {
    home: { init: Im },
    about: { init: vg },
    career: { init: yg },
    provider_cms: { init: Dg },
    patient_cms: { init: Eg },
    blog_cms: { init: Tg },
    team: { init: Sg },
    guide: { init: Cg },
    location: { init: Pg },
    shop_medication: { init: Fg },
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
  async function zg() {
    try {
      await Rp();
      const n = document.querySelector("[data-page]");
      if (!n) return;
      const e = n.getAttribute("data-page"),
        t = Lg[e];
      t != null && t.init && (await t.init());
    } catch (n) {
      console.error("Page initialization error:", n);
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    zg();
  });
});
