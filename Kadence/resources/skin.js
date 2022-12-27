/** Polyfills for MediaWiki <= 1.40 */
mw.requestIdleCallback( function () {
	/* Polyfill for LastModifiedLine */
	var $polyfillLastMod = $('.skin-polyfill-last-modified');
	if ( !$polyfillLastMod.length) {
		return;
	}
	mw.loader.using( 'mediawiki.api' ).then( function () {
		var api = new mw.Api();
		api.get( {
			action: 'query',
			prop: 'revisions',
			titles: mw.config.get('wgTitle'),
			formatversion: 2,
			redirects: 1
		} ).then( function ( a ) {
			var lastmod;
			try {
				lastmod = new Date( a.query.pages[0].revisions[0].timestamp );
				lastmod = lastmod.toLocaleDateString(
					mw.config.get('wgUserLanguage'),
					{ year:"numeric", month:"short", day:"numeric" }
				);
			} catch ( e ) {
				lastmod = 'Unknown';
			}
			$polyfillLastMod.replaceWith(lastmod);
		} );
	} );
} );
// Disable module exporting in this context
module = undefined; exports = undefined;
window.kadenceSlideConfig = {of: "{{msg-kadence-26}}", to: "{{msg-kadence-27}}", slide: "{{msg-kadence-28}}", next: "{{msg-kadence-29}}", prev: "{{msg-kadence-30}}"};
window.kadenceConfig = {screenReader: {expand: "{{msg-kadence-31}}", collapse: "{{msg-kadence-32}}"}, breakPoints: {desktop: 1024, tablet: 768}, scrollOffset: 0};
window.kadenceSlideConfig = {of: "{{msg-kadence-26}}", to: "{{msg-kadence-27}}", slide: "{{msg-kadence-28}}", next: "{{msg-kadence-29}}", prev: "{{msg-kadence-30}}"};
window.kadenceConfig = {screenReader: {expand: "{{msg-kadence-31}}", collapse: "{{msg-kadence-32}}"}, breakPoints: {desktop: 1024, tablet: 768}, scrollOffset: 0};
(function () {
  function _defineProperties(n, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) {
        i.writable = true;
      }
      Object.defineProperty(n, i.key, i);
    }
  }
  function _createClass(n, t, e) {
    if (t) {
      _defineProperties(n.prototype, t);
    }
    if (e) {
      _defineProperties(n, e);
    }
    Object.defineProperty(n, "prototype", {writable: false});
    return n;
  }
  (function (n, t) {
    if (typeof exports == "object" && typeof module != "undefined") {
      module.exports = t();
    } else if (typeof define == "function" && define.amd) {
      define(t);
    } else {
      (n = typeof globalThis != "undefined" ? globalThis : n || self).Splide = t();
    }
  }(this, function () {
    "use strict";
    function x(n) {
      n.length = 0;
    }
    function _(n, t, e) {
      return Array.prototype.slice.call(n, t, e);
    }
    function D(n) {
      return n.bind.apply(n, [null].concat(_(arguments, 1)));
    }
    function G() {}
    function p(n) {
      return requestAnimationFrame(n);
    }
    function t(n, t) {
      return typeof t === n;
    }
    function X(n) {
      return !r(n) && t("object", n);
    }
    function r(n) {
      return n === null;
    }
    function g(n) {
      return n instanceof HTMLElement;
    }
    function m(n) {
      if (o(n)) {
        return n;
      } else {
        return [n];
      }
    }
    function y(n, t) {
      m(n).forEach(t);
    }
    function b(n, t) {
      return -1 < n.indexOf(t);
    }
    function E(n, t) {
      n.push.apply(n, m(t));
      return n;
    }
    function L(t, n, e) {
      if (t) {
        y(n, function (n) {
          if (n) {
            t.classList[e ? "add" : "remove"](n);
          }
        });
      }
    }
    function P(n, t) {
      L(n, M(t) ? t.split(" ") : t, true);
    }
    function C(n, t) {
      y(t, n.appendChild.bind(n));
    }
    function k(n, e) {
      y(n, function (n) {
        var t = (e || n).parentNode;
        if (t) {
          t.insertBefore(n, e);
        }
      });
    }
    function B(n, t) {
      return g(n) && (n.msMatchesSelector || n.matches).call(n, t);
    }
    function S(n, t) {
      n = n ? _(n.children) : [];
      if (t) {
        return n.filter(function (n) {
          return B(n, t);
        });
      } else {
        return n;
      }
    }
    function A(n, t) {
      if (t) {
        return S(n, t)[0];
      } else {
        return n.firstElementChild;
      }
    }
    function N(n, t, e) {
      if (n) {
        var i = h(n);
        var i = e ? i.reverse() : i;
        for (var o = 0; o < i.length; o++) {
          var r = i[o];
          if (r !== "__proto__" && t(n[r], r) === false) {
            break;
          }
        }
      }
      return n;
    }
    function T(i) {
      _(arguments, 1).forEach(function (e) {
        N(e, function (n, t) {
          i[t] = e[t];
        });
      });
      return i;
    }
    function O(e) {
      _(arguments, 1).forEach(function (n) {
        N(n, function (n, t) {
          if (o(n)) {
            e[t] = n.slice();
          } else if (X(n)) {
            e[t] = O({}, X(e[t]) ? e[t] : {}, n);
          } else {
            e[t] = n;
          }
        });
      });
      return e;
    }
    function I(t, n) {
      m(n || h(t)).forEach(function (n) {
        delete t[n];
      });
    }
    function F(n, e) {
      y(n, function (t) {
        y(e, function (n) {
          if (t) {
            t.removeAttribute(n);
          }
        });
      });
    }
    function j(e, t, i) {
      if (X(t)) {
        N(t, function (n, t) {
          j(e, t, n);
        });
      } else {
        y(e, function (n) {
          if (r(i) || i === "") {
            F(n, t);
          } else {
            n.setAttribute(t, String(i));
          }
        });
      }
    }
    function H(n, t, e) {
      n = document.createElement(n);
      if (t) {
        (M(t) ? P : j)(n, t);
      }
      if (e) {
        C(e, n);
      }
      return n;
    }
    function Y(n, t, e) {
      if (z(e)) {
        return getComputedStyle(n)[t];
      }
      if (!r(e)) {
        n.style[t] = "" + e;
      }
    }
    function q(n, t) {
      Y(n, "display", t);
    }
    function U(n) {
      if (!n.setActive || !n.setActive()) {
        n.focus({preventScroll: true});
      }
    }
    function K(n, t) {
      return n.getAttribute(t);
    }
    function J(n, t) {
      return n && n.classList.contains(t);
    }
    function Q(n) {
      return n.getBoundingClientRect();
    }
    function V(n) {
      y(n, function (n) {
        if (n && n.parentNode) {
          n.parentNode.removeChild(n);
        }
      });
    }
    function Z(n) {
      return A((new DOMParser).parseFromString(n, "text/html").body);
    }
    function $(n, t) {
      n.preventDefault();
      if (t) {
        n.stopPropagation();
        n.stopImmediatePropagation();
      }
    }
    function nn(n, t) {
      return n && n.querySelector(t);
    }
    function tn(n, t) {
      if (t) {
        return _(n.querySelectorAll(t));
      } else {
        return [];
      }
    }
    function en(n, t) {
      L(n, t, false);
    }
    function on(n) {
      return n.timeStamp;
    }
    function rn(n) {
      if (M(n)) {
        return n;
      } else if (n) {
        return n + "px";
      } else {
        return "";
      }
    }
    function sn(n, t) {
      if (!n) {
        throw new Error("[" + un + "] " + (t || ""));
      }
    }
    function pn(n, t, e) {
      return dn(n - t) < e;
    }
    function hn(n, t, e, i) {
      var o = cn(t, e);
      var e = an(t, e);
      if (i) {
        return o < n && n < e;
      } else {
        return o <= n && n <= e;
      }
    }
    function vn(n, t, e) {
      var i = cn(t, e);
      var e = an(t, e);
      return cn(an(i, n), e);
    }
    function gn(n) {
      return (0 < n) - (n < 0);
    }
    function mn(t, n) {
      y(n, function (n) {
        t = t.replace("%s", "" + n);
      });
      return t;
    }
    function yn(n) {
      if (n < 10) {
        return "0" + n;
      } else {
        return "" + n;
      }
    }
    function wn() {
      function e(n, e, i) {
        y(n, function (t) {
          if (t) {
            y(e, function (n) {
              n.split(" ").forEach(function (n) {
                n = n.split(".");
                i(t, n[0], n[1]);
              });
            });
          }
        });
      }
      var s = [];
      return {bind: function (n, t, r, u) {
        e(n, t, function (n, t, e) {
          var i = "addEventListener" in n;
          var o = i ? n.removeEventListener.bind(n, t, r, u) : n.removeListener.bind(n, r);
          if (i) {
            n.addEventListener(t, r, u);
          } else {
            n.addListener(r);
          }
          s.push([n, t, e, r, o]);
        });
      }, unbind: function (n, t, o) {
        e(n, t, function (t, e, i) {
          s = s.filter(function (n) {
            return n[0] !== t || n[1] !== e || n[2] !== i || !!o && n[3] !== o || (n[4](), false);
          });
        });
      }, dispatch: function (n, t, e) {
        var i;
        if (typeof CustomEvent == "function") {
          i = new CustomEvent(t, {bubbles: true, detail: e});
        } else {
          (i = document.createEvent("CustomEvent")).initCustomEvent(t, true, false, e);
        }
        n.dispatchEvent(i);
        return i;
      }, destroy: function () {
        s.forEach(function (n) {
          n[4]();
        });
        x(s);
      }};
    }
    function Gn(n) {
      var e = n ? n.event.bus : document.createDocumentFragment();
      var i = wn();
      if (n) {
        n.event.on(u, i.destroy);
      }
      return T(i, {bus: e, on: function (n, t) {
        i.bind(e, m(n).join(" "), function (n) {
          t.apply(t, o(n.detail) ? n.detail : []);
        });
      }, off: D(i.unbind, e), emit: function (n) {
        i.dispatch(e, n, _(arguments, 1));
      }});
    }
    function Xn(t, n, e, i) {
      function f() {
        if (!c) {
          s = t ? cn((u() - o) / t, 1) : 1;
          if (e) {
            e(s);
          }
          if (1 <= s) {
            n();
            o = u();
            if (i && ++a >= i) {
              return l();
            }
          }
          p(f);
        }
      }
      function l() {
        c = true;
      }
      function d() {
        if (r) {
          cancelAnimationFrame(r);
        }
        c = !(r = s = 0);
      }
      var o;
      var r;
      var u = Date.now;
      var s = 0;
      var c = true;
      var a = 0;
      return {start: function (n) {
        if (!n) {
          d();
        }
        o = u() - (n ? s * t : 0);
        c = false;
        p(f);
      }, rewind: function () {
        o = u();
        s = 0;
        if (e) {
          e(s);
        }
      }, pause: l, cancel: d, set: function (n) {
        t = n;
      }, isPaused: function () {
        return c;
      }};
    }
    function s(n) {
      var t = n;
      return {set: function (n) {
        t = n;
      }, is: function (n) {
        return b(m(n), t);
      }};
    }
    function zt(o, e, t, r) {
      function x() {
        var n = o.splides.map(function (n) {
          n = n.splide.Components.Slides.getAt(e);
          if (n) {
            return n.slide.id;
          } else {
            return "";
          }
        }).join(" ");
        j(r, Vn, mn(h.slideX, (w ? t : e) + 1));
        j(r, Kn, n);
        j(r, qn, g ? "button" : "");
        if (g) {
          F(r, tt);
        }
      }
      function _() {
        if (!i) {
          P();
        }
      }
      function P() {
        var n;
        var t;
        if (!i) {
          n = o.index;
          if ((t = C()) !== J(r, bt)) {
            L(r, bt, t);
            j(r, Jn, d && t || "");
            s(t ? Cn : kn, k);
          }
          (function () {
            var n = function () {
              if (o.is(Mt)) {
                return C();
              }
              var n = Q(a.Elements.track);
              var t = Q(r);
              var e = m("left");
              var i = m("right");
              return fn(n[e]) <= ln(t[e]) && fn(t[i]) <= ln(n[i]);
            }();
            var t = !n && (!C() || w);
            if (!o.state.is([R, W])) {
              j(r, $n, t || "");
            }
            j(S, Un, t ? -1 : "");
            if (g) {
              j(r, Un, t ? -1 : 0);
            }
            if (n !== J(r, St)) {
              L(r, St, n);
              s(n ? Ln : An, k);
            }
            if (!n && document.activeElement === r) {
              if (n = a.Slides.getAt(o.index)) {
                U(n.slide);
              }
            }
          }());
          L(r, wt, e === n - 1);
          L(r, Et, e === n + 1);
        }
      }
      function C() {
        var n = o.index;
        return n === e || l.cloneStatus && n === t;
      }
      var i;
      var n = Gn(o);
      var u = n.on;
      var s = n.emit;
      var c = n.bind;
      var a = o.Components;
      var f = o.root;
      var l = o.options;
      var d = l.isNavigation;
      var p = l.updateOnMove;
      var h = l.i18n;
      var v = l.pagination;
      var g = l.slideFocus;
      var m = a.Direction.resolve;
      var y = K(r, "style");
      var b = K(r, Vn);
      var w = -1 < t;
      var E = A(r, "." + at);
      var S = tn(r, l.focusableNodes || "");
      var k = {index: e, slideIndex: t, slide: r, container: E, isClone: w, mount: function () {
        if (!w) {
          r.id = f.id + "-slide" + yn(e + 1);
          j(r, qn, v ? "tabpanel" : "group");
          j(r, tt, h.slide);
          j(r, Vn, b || mn(h.slideLabel, [e + 1, o.length]));
        }
        c(r, "click", D(s, Pn, k));
        c(r, "keydown", D(s, Dn, k));
        u([xn, _n, In], P);
        u(Fn, x);
        if (p) {
          u(Sn, _);
        }
      }, destroy: function () {
        i = true;
        n.destroy();
        en(r, Pt);
        F(r, it);
        j(r, "style", y);
        j(r, Vn, b || "");
      }, update: P, style: function (n, t, e) {
        Y(e && E || r, n, t);
      }, isWithin: function (n, t) {
        n = dn(n - e);
        return (n = !w && (l.rewind || o.is(Dt)) ? cn(n, o.length - n) : n) <= t;
      }};
      return k;
    }
    function It(n) {
      n = M(n) ? n : n.key;
      return Ot[n] || n;
    }
    function Ht(n, i, t) {
      var e = Gn(n).on;
      return {mount: function () {
        e([En, Mn], function () {
          v(function () {
            i.Slides.style("transition", "opacity " + t.speed + "ms " + t.easing);
          });
        });
      }, start: function (n, t) {
        var e = i.Elements.track;
        Y(e, "height", rn(Q(e).height));
        v(function () {
          t();
          Y(e, "height", "");
        });
      }, cancel: G};
    }
    function Yt(r, n, u) {
      function i() {
        l("");
        f.cancel();
      }
      var s;
      var t = Gn(r).bind;
      var c = n.Move;
      var a = n.Controller;
      var f = n.Scroll;
      var e = n.Elements.list;
      var l = D(Y, e, "transition");
      return {mount: function () {
        t(e, "transitionend", function (n) {
          if (n.target === e && s) {
            i();
            s();
          }
        });
      }, start: function (n, t) {
        var e = c.toPosition(n, true);
        var i = c.getPosition();
        var o = function (n) {
          var t = u.rewindSpeed;
          if (r.is(At) && t) {
            var e = a.getIndex(true);
            var i = a.getEnd();
            if (e === 0 && i <= n || i <= e && n === 0) {
              return t;
            }
          }
          return u.speed;
        }(n);
        if (1 <= dn(e - i) && 1 <= o) {
          if (u.useScroll) {
            f.scroll(e, o, false, t);
          } else {
            l("transform " + o + "ms " + u.easing);
            c.translate(e, true);
            s = t;
          }
        } else {
          c.jump(n);
          t();
        }
      }, cancel: i};
    }
    var d = "(prefers-reduced-motion: reduce)";
    var R = 4;
    var W = 5;
    var n = {CREATED: 1, MOUNTED: 2, IDLE: 3, MOVING: R, SCROLLING: W, DRAGGING: 6, DESTROYED: 7};
    var v = setTimeout;
    var o = Array.isArray;
    var w = D(t, "function");
    var M = D(t, "string");
    var z = D(t, "undefined");
    var h = Object.keys;
    var un = "splide";
    var i = "data-" + un;
    var cn = Math.min;
    var an = Math.max;
    var fn = Math.floor;
    var ln = Math.ceil;
    var dn = Math.abs;
    var bn = {};
    var En = "mounted";
    var Sn = "move";
    var xn = "moved";
    var _n = "shifted";
    var Pn = "click";
    var Cn = "active";
    var kn = "inactive";
    var Ln = "visible";
    var An = "hidden";
    var Dn = "slide:keydown";
    var Mn = "refresh";
    var zn = "updated";
    var Nn = "resize";
    var Tn = "resized";
    var On = "scroll";
    var In = "scrolled";
    var u = "destroy";
    var Fn = "navigation:mounted";
    var jn = "autoplay:play";
    var Rn = "autoplay:pause";
    var Wn = "lazyload:loaded";
    var e = "Arrow";
    var Bn = e + "Left";
    var Hn = e + "Right";
    var c = e + "Up";
    var a = e + "Down";
    var Yn = "ttb";
    var f = {width: ["height"], left: ["top", "right"], right: ["bottom", "left"], x: ["y"], X: ["Y"], Y: ["X"], ArrowLeft: [c, Hn], ArrowRight: [a, Bn]};
    var qn = "role";
    var Un = "tabindex";
    var e = "aria-";
    var Kn = e + "controls";
    var Jn = e + "current";
    var Qn = e + "selected";
    var Vn = e + "label";
    var Zn = e + "labelledby";
    var $n = e + "hidden";
    var nt = e + "orientation";
    var tt = e + "roledescription";
    var l = e + "live";
    var et = e + "relevant";
    var it = [qn, Un, "disabled", Kn, Jn, Vn, Zn, $n, nt, tt];
    var ot = un;
    var rt = un + "__track";
    var ut = un + "__list";
    var st = un + "__slide";
    var ct = st + "--clone";
    var at = st + "__container";
    var ft = un + "__arrows";
    var lt = un + "__arrow";
    var dt = lt + "--prev";
    var pt = lt + "--next";
    var ht = un + "__pagination";
    var vt = ht + "__page";
    var gt = un + "__progress" + "__bar";
    var mt = un + "__toggle";
    var yt = un + "__sr";
    var bt = "is-active";
    var wt = "is-prev";
    var Et = "is-next";
    var St = "is-visible";
    var xt = "is-loading";
    var _t = "is-focus-in";
    var Pt = [bt, St, wt, Et, xt, _t];
    var Ct = "touchstart mousedown";
    var kt = "touchmove mousemove";
    var Lt = "touchend touchcancel mouseup";
    var At = "slide";
    var Dt = "loop";
    var Mt = "fade";
    var Nt = i + "-interval";
    var Tt = {passive: false, capture: true};
    var Ot = {Spacebar: " ", Right: Hn, Left: Bn, Up: c, Down: a};
    var Ft = "keydown";
    var jt = i + "-lazy";
    var Rt = jt + "-srcset";
    var Wt = "[" + jt + "], [" + Rt + "]";
    var Gt = [" ", "Enter"];
    var Xt = Object.freeze({__proto__: null, Media: function (i, n, o) {
      function c(n) {
        if (n) {
          e.destroy();
        }
      }
      function a(n, t) {
        t = matchMedia(t);
        e.bind(t, "change", f);
        s.push([n, t]);
      }
      function f() {
        var n = r.is(7);
        var t = o.direction;
        var e = s.reduce(function (n, t) {
          return O(n, t[1].matches ? t[0] : {});
        }, {});
        I(o);
        l(e);
        if (o.destroy) {
          i.destroy(o.destroy === "completely");
        } else if (n) {
          c(true);
          i.mount();
        } else if (t !== o.direction) {
          i.refresh();
        }
      }
      function l(n, t) {
        O(o, n);
        if (t) {
          O(Object.getPrototypeOf(o), n);
        }
        if (!r.is(1)) {
          i.emit(zn, o);
        }
      }
      var r = i.state;
      var t = o.breakpoints || {};
      var u = o.reducedMotion || {};
      var e = wn();
      var s = [];
      return {setup: function () {
        var e = o.mediaQuery === "min";
        h(t).sort(function (n, t) {
          if (e) {
            return +n - +t;
          } else {
            return +t - +n;
          }
        }).forEach(function (n) {
          a(t[n], "(" + (e ? "min" : "max") + "-width:" + n + "px)");
        });
        a(u, d);
        f();
      }, destroy: c, reduce: function (n) {
        if (matchMedia(d).matches) {
          if (n) {
            O(o, u);
          } else {
            I(o, h(u));
          }
        }
      }, set: l};
    }, Direction: function (n, t, o) {
      return {resolve: function (n, t, e) {
        var i = (e = e || o.direction) !== "rtl" || t ? e === Yn ? 0 : -1 : 1;
        return f[n] && f[n][i] || n.replace(/width|left|right/i, function (n, t) {
          n = f[n.toLowerCase()][i] || n;
          if (0 < t) {
            return n.charAt(0).toUpperCase() + n.slice(1);
          } else {
            return n;
          }
        });
      }, orient: function (n) {
        return n * (o.direction === "rtl" ? 1 : -1);
      }};
    }, Elements: function (n, t, e) {
      function v() {
        i = y("." + rt);
        o = A(i, "." + ut);
        sn(i && o, "A track/list element is missing.");
        E(d, S(o, "." + st + ":not(." + ct + ")"));
        N({arrows: ft, pagination: ht, prev: dt, next: pt, bar: gt, toggle: mt}, function (n, t) {
          l[t] = y("." + n);
        });
        T(l, {root: a, track: i, list: o, slides: d});
        (function () {
          var n = a.id || function () {
            var n = un;
            return "" + n + yn(bn[n] = (bn[n] || 0) + 1);
          }();
          var t = e.role;
          a.id = n;
          i.id = i.id || n + "-track";
          o.id = o.id || n + "-list";
          if (!K(a, qn) && a.tagName !== "SECTION" && t) {
            j(a, qn, t);
          }
          j(a, tt, f.carousel);
          j(o, qn, "presentation");
        }());
        m();
      }
      function g(n) {
        var t = it.concat("style");
        x(d);
        en(a, p);
        en(i, h);
        F([i, o], t);
        F(a, n ? t : ["style", tt]);
      }
      function m() {
        en(a, p);
        en(i, h);
        p = b(ot);
        h = b(rt);
        P(a, p);
        P(i, h);
        j(a, Vn, e.label);
        j(a, Zn, e.labelledby);
      }
      function y(n) {
        n = nn(a, n);
        if (n && function (n, t) {
          if (w(n.closest)) {
            return n.closest(t);
          }
          for (var e = n; e && e.nodeType === 1 && !B(e, t);) {
            e = e.parentElement;
          }
          return e;
        }(n, "." + ot) === a) {
          return n;
        } else {
          return;
        }
      }
      function b(n) {
        return [n + "--" + e.type, n + "--" + e.direction, e.drag && n + "--draggable", e.isNavigation && n + "--nav", n === ot && bt];
      }
      var i;
      var o;
      var r;
      var u = Gn(n);
      var s = u.on;
      var c = u.bind;
      var a = n.root;
      var f = e.i18n;
      var l = {};
      var d = [];
      var p = [];
      var h = [];
      return T(l, {setup: v, mount: function () {
        s(Mn, g);
        s(Mn, v);
        s(zn, m);
        c(document, Ct + " keydown", function (n) {
          r = n.type === "keydown";
        }, {capture: true});
        c(a, "focusin", function () {
          L(a, _t, !!r);
        });
      }, destroy: g});
    }, Slides: function (i, o, r) {
      function e() {
        c.forEach(function (n, t) {
          d(n, t, -1);
        });
      }
      function l() {
        h(function (n) {
          n.destroy();
        });
        x(f);
      }
      function d(n, t, e) {
        n = zt(i, t, e, n);
        n.mount();
        f.push(n);
      }
      function p(n) {
        if (n) {
          return v(function (n) {
            return !n.isClone;
          });
        } else {
          return f;
        }
      }
      function h(n, t) {
        p(t).forEach(n);
      }
      function v(t) {
        return f.filter(w(t) ? t : function (n) {
          if (M(t)) {
            return B(n.slide, t);
          } else {
            return b(m(t), n.index);
          }
        });
      }
      var n = Gn(i);
      var t = n.on;
      var u = n.emit;
      var s = n.bind;
      var c = (n = o.Elements).slides;
      var a = n.list;
      var f = [];
      return {mount: function () {
        e();
        t(Mn, l);
        t(Mn, e);
        t([En, Mn], function () {
          f.sort(function (n, t) {
            return n.index - t.index;
          });
        });
      }, destroy: l, update: function () {
        h(function (n) {
          n.update();
        });
      }, register: d, get: p, getIn: function (n) {
        var t = o.Controller;
        var e = t.toIndex(n);
        var i = t.hasFocus() ? 1 : r.perPage;
        return v(function (n) {
          return hn(n.index, e, e + i - 1);
        });
      }, getAt: function (n) {
        return v(n)[0];
      }, add: function (n, o) {
        y(n, function (n) {
          var t;
          var e;
          var i;
          if (g(n = M(n) ? Z(n) : n)) {
            if (t = c[o]) {
              k(n, t);
            } else {
              C(a, n);
            }
            P(n, r.classes.slide);
            n = n;
            e = D(u, Nn);
            n = tn(n, "img");
            if (i = n.length) {
              n.forEach(function (n) {
                s(n, "load error", function () {
                  if (!--i) {
                    e();
                  }
                });
              });
            } else {
              e();
            }
          }
        });
        u(Mn);
      }, remove: function (n) {
        V(v(n).map(function (n) {
          return n.slide;
        }));
        u(Mn);
      }, forEach: h, filter: v, style: function (t, e, i) {
        h(function (n) {
          n.style(t, e, i);
        });
      }, getLength: function (n) {
        return (n ? c : f).length;
      }, isEnough: function () {
        return f.length > r.perPage;
      }};
    }, Layout: function (n, t, e) {
      function v() {
        o = null;
        i = e.direction === Yn;
        Y(f, "maxWidth", rn(e.width));
        Y(l, a("paddingLeft"), m(false));
        Y(l, a("paddingRight"), m(true));
        g();
      }
      function g() {
        var n = Q(f);
        if (!o || o.width !== n.width || o.height !== n.height) {
          Y(l, "height", function () {
            var n = "";
            if (i) {
              sn(n = y(), "height or heightRatio is missing.");
              n = "calc(" + n + " - " + m(false) + " - " + m(true) + ")";
            }
            return n;
          }());
          h(a("marginRight"), rn(e.gap));
          h("width", e.autoWidth ? null : rn(e.fixedWidth) || (i ? "" : b()));
          h("height", rn(e.fixedHeight) || (i ? e.autoHeight ? null : b() : y()), true);
          o = n;
          s(Tn);
        }
      }
      function m(n) {
        var t = e.padding;
        var n = a(n ? "right" : "left");
        return t && rn(t[n] || (X(t) ? 0 : t)) || "0px";
      }
      function y() {
        return rn(e.height || Q(d).width * e.heightRatio);
      }
      function b() {
        var n = rn(e.gap);
        return "calc((100%" + (n && " + " + n) + ")/" + (e.perPage || 1) + (n && " - " + n) + ")";
      }
      function w(n, t) {
        var e = p(n);
        if (e) {
          n = Q(e.slide)[a("right")];
          e = Q(d)[a("left")];
          return dn(n - e) + (t ? 0 : E());
        }
        return 0;
      }
      function E() {
        var n = p(0);
        return n && parseFloat(Y(n.slide, a("marginRight"))) || 0;
      }
      var i;
      var o;
      var r = (c = Gn(n)).on;
      var u = c.bind;
      var s = c.emit;
      var c = t.Slides;
      var a = t.Direction.resolve;
      var f = (t = t.Elements).root;
      var l = t.track;
      var d = t.list;
      var p = c.getAt;
      var h = c.style;
      return {mount: function () {
        var n;
        var t;
        var e;
        v();
        u(window, "resize load", (n = D(s, Nn), function () {
          if (!e) {
            (e = Xn(t || 0, function () {
              n();
              e = null;
            }, null, 1)).start();
          }
        }));
        r([zn, Mn], v);
        r(Nn, g);
      }, listSize: function () {
        return Q(d)[a("width")];
      }, slideSize: function (n, t) {
        if (n = p(n || 0)) {
          return Q(n.slide)[a("width")] + (t ? 0 : E());
        } else {
          return 0;
        }
      }, sliderSize: function () {
        return w(n.length - 1, true) - w(-1, true);
      }, totalSize: w, getPadding: function (n) {
        return parseFloat(Y(l, a("padding" + (n ? "Right" : "Left")))) || 0;
      }};
    }, Clones: function (s, e, c) {
      function u() {
        if (n = h()) {
          (function () {
            var o = n;
            var r = f.get().slice();
            var u = r.length;
            if (u) {
              while (r.length < o) {
                E(r, r);
              }
              E(r.slice(-o), r.slice(0, o)).forEach(function (n, t) {
                var e = t < o;
                var i = function (n, t) {
                  n = n.cloneNode(true);
                  P(n, c.classes.clone);
                  n.id = s.root.id + "-clone" + yn(t + 1);
                  return n;
                }(n.slide, t);
                if (e) {
                  k(i, r[0].slide);
                } else {
                  C(a.list, i);
                }
                E(l, i);
                f.register(i, t - o + (e ? 0 : u), n.index);
              });
            }
          }());
          o(Nn);
        }
      }
      function d() {
        V(l);
        x(l);
      }
      function p() {
        if (n < h()) {
          o(Mn);
        }
      }
      function h() {
        var n;
        var t = c.clones;
        if (s.is(Dt)) {
          if (!t) {
            t = (n = c[r("fixedWidth")] && e.Layout.slideSize(0)) && ln(Q(a.track)[r("width")] / n) || c[r("autoWidth")] && s.length || 2 * c.perPage;
          }
        } else {
          t = 0;
        }
        return t;
      }
      var n;
      var t = Gn(s);
      var i = t.on;
      var o = t.emit;
      var a = e.Elements;
      var f = e.Slides;
      var r = e.Direction.resolve;
      var l = [];
      return {mount: function () {
        u();
        i(Mn, d);
        i(Mn, u);
        i([zn, Nn], p);
      }, destroy: d};
    }, Move: function (i, s, o) {
      function m() {
        if (!s.Controller.isBusy()) {
          s.Scroll.cancel();
          y(i.index);
          s.Slides.update();
        }
      }
      function y(n) {
        b(S(n, true));
      }
      function b(n, t) {
        if (!i.is(Mt)) {
          t = t ? n : function (n) {
            var t;
            var e;
            if (i.is(Dt)) {
              e = h(n - x());
              t = P(false, n) && e < 0;
              e = P(true, n) && 0 < e;
              if (t || e) {
                n = w(n, e);
              }
            }
            return n;
          }(n);
          Y(v, "transform", "translate" + p("X") + "(" + t + "px)");
          if (n !== t) {
            a(_n);
          }
        }
      }
      function w(n, t) {
        var e = n - _(t);
        var i = d();
        return n -= h(i * (ln(dn(e) / i) || 1)) * (t ? 1 : -1);
      }
      function E() {
        b(x());
        c.cancel();
      }
      function S(n, t) {
        var e = h(u(n - 1) - (e = n, (n = o.focus) === "center" ? (l() - r(e, true)) / 2 : +n * r(e) || 0));
        if (t) {
          return function () {
            var n = e;
            if (o.trimSpace && i.is(At)) {
              n = vn(n, 0, h(d() - l()));
            }
            return n;
          }();
        } else {
          return e;
        }
      }
      function x() {
        var n = p("left");
        return Q(v)[n] - Q(g)[n] + h(e(false));
      }
      function _(n) {
        return S(n ? s.Controller.getEnd() : 0, !!o.trimSpace);
      }
      function P(n, t) {
        t = z(t) ? x() : t;
        var e = n !== true && h(t) < h(_(false));
        var t = n !== false && h(t) > h(_(true));
        return e || t;
      }
      var c;
      var n = Gn(i);
      var t = n.on;
      var a = n.emit;
      var f = i.state.set;
      var r = (n = s.Layout).slideSize;
      var e = n.getPadding;
      var u = n.totalSize;
      var l = n.listSize;
      var d = n.sliderSize;
      var p = (n = s.Direction).resolve;
      var h = n.orient;
      var v = (n = s.Elements).list;
      var g = n.track;
      return {mount: function () {
        c = s.Transition;
        t([En, Tn, zn, Mn], m);
      }, move: function (n, t, e, i) {
        var o;
        var r;
        var u = x();
        if (n !== t) {
          o = t < n;
          r = h(w(x(), o));
          if (o ? 0 <= r : r <= v["scroll" + p("Width")] - Q(g)[p("width")]) {
            E();
            b(w(u, t < n), true);
          }
        }
        f(R);
        a(Sn, t, e, n);
        c.start(t, function () {
          f(3);
          a(xn, t, e, n);
          if (i) {
            i();
          }
        });
      }, jump: y, translate: b, shift: w, cancel: E, toIndex: function (n) {
        var t = s.Slides.get();
        var e = 0;
        var i = 1 / 0;
        for (var o = 0; o < t.length; o++) {
          var r = t[o].index;
          var u = dn(S(r, true) - n);
          if (!(u <= i)) {
            break;
          }
          i = u;
          e = r;
        }
        return e;
      }, toPosition: S, getPosition: x, getLimit: _, exceededLimit: P, reposition: m};
    }, Controller: function (r, o, u) {
      function w() {
        s = e(true);
        i = u.perMove;
        c = u.perPage;
        var n = vn(y, 0, s - 1);
        if (n !== y) {
          y = n;
          a.reposition();
        }
      }
      function E(n, t) {
        var e = i || (L() ? 1 : c);
        var e = S(y + e * (n ? -1 : 1), y, !i && !L());
        if (e === -1 && v && !pn(f(), l(!n), 1)) {
          if (n) {
            return 0;
          } else {
            return _();
          }
        } else if (t) {
          return e;
        } else {
          return x(e);
        }
      }
      function S(n, t, e) {
        var i;
        var o;
        if (p()) {
          i = _();
          if ((o = function (n) {
            if (v && u.trimSpace === "move" && n !== y) {
              for (var t = f(); t === d(n, true) && hn(n, 0, r.length - 1, !u.rewind);) {
                if (n < y) {
                  --n;
                } else {
                  ++n;
                }
              }
            }
            return n;
          }(n)) !== n) {
            t = n;
            n = o;
            e = false;
          }
          if (n < 0 || i < n) {
            n = hn(0, n, t, true) || hn(i, t, n, true) ? P(C(n)) : h ? e ? n < 0 ? -(s % c || c) : s : n : u.rewind ? n < 0 ? i : 0 : -1;
          } else if (e && n !== t) {
            n = P(C(t) + (n < t ? -1 : 1));
          }
        } else {
          n = -1;
        }
        return n;
      }
      function x(n) {
        if (h) {
          return (n + s) % s || 0;
        } else {
          return n;
        }
      }
      function _() {
        return an(s - (L() || h && i ? 1 : c), 0);
      }
      function P(n) {
        return vn(L() ? n : c * n, 0, _());
      }
      function C(n) {
        if (L()) {
          return n;
        } else {
          return fn((n >= _() ? s - 1 : n) / c);
        }
      }
      function k(n) {
        if (n !== y) {
          b = y;
          y = n;
        }
      }
      function L() {
        return !z(u.focus) || u.isNavigation;
      }
      function A() {
        return r.state.is([R, W]) && !!u.waitForTransition;
      }
      var s;
      var i;
      var c;
      var n = Gn(r).on;
      var a = o.Move;
      var f = a.getPosition;
      var l = a.getLimit;
      var d = a.toPosition;
      var t = o.Slides;
      var p = t.isEnough;
      var e = t.getLength;
      var h = r.is(Dt);
      var v = r.is(At);
      var g = D(E, false);
      var m = D(E, true);
      var y = u.start || 0;
      var b = y;
      return {mount: function () {
        w();
        n([zn, Mn], w);
      }, go: function (n, t, e) {
        var i;
        if (!A()) {
          if (-1 < (n = x(i = function (n) {
            var t = y;
            var e;
            var i;
            if (M(n)) {
              i = n.match(/([+\-<>])(\d+)?/) || [];
              e = i[1];
              i = i[2];
              if (e === "+" || e === "-") {
                t = S(y + +("" + e + (+i || 1)), y);
              } else if (e === ">") {
                t = i ? P(+i) : g(true);
              } else if (e === "<") {
                t = m(true);
              }
            } else {
              t = h ? n : vn(n, 0, _());
            }
            return t;
          }(n))) && (t || n !== y)) {
            k(n);
            a.move(i, n, b, e);
          }
        }
      }, scroll: function (n, t, e, i) {
        o.Scroll.scroll(n, t, e, function () {
          k(x(a.toIndex(a.getPosition())));
          if (i) {
            i();
          }
        });
      }, getNext: g, getPrev: m, getAdjacent: E, getEnd: _, setIndex: k, getIndex: function (n) {
        if (n) {
          return b;
        } else {
          return y;
        }
      }, toIndex: P, toPage: C, toDest: function (n) {
        n = a.toIndex(n);
        if (v) {
          return vn(n, 0, _());
        } else {
          return n;
        }
      }, hasFocus: L, isBusy: A};
    }, Arrows: function (o, n, t) {
      function b() {
        (function () {
          var n = t.arrows;
          if (!!n && (!g || !m)) {
            v = p || H("div", a.arrows);
            g = x(true);
            m = x(false);
            e = true;
            C(v, [g, m]);
            if (!p) {
              k(v, h);
            }
          }
          if (g && m) {
            T(y, {prev: g, next: m});
            q(v, n ? "" : "none");
            P(v, i = ft + "--" + t.direction);
            if (n) {
              u([xn, Mn, In], _);
              s(m, "click", D(S, ">"));
              s(g, "click", D(S, "<"));
              _();
              j([g, m], Kn, h.id);
              c("arrows:mounted", g, m);
            }
          }
        }());
        u(zn, w);
      }
      function w() {
        E();
        b();
      }
      function E() {
        r.destroy();
        en(v, i);
        if (e) {
          V(p ? [g, m] : v);
          g = m = null;
        } else {
          F([g, m], it);
        }
      }
      function S(n) {
        d.go(n, true);
      }
      function x(n) {
        return Z('<button class="' + a.arrow + " " + (n ? a.prev : a.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' + (t.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />');
      }
      function _() {
        var n = o.index;
        var t = d.getPrev();
        var e = d.getNext();
        var i = -1 < t && n < t ? f.last : f.prev;
        var n = -1 < e && e < n ? f.first : f.next;
        g.disabled = t < 0;
        m.disabled = e < 0;
        j(g, Vn, i);
        j(m, Vn, n);
        c("arrows:updated", g, m, t, e);
      }
      var e;
      var i;
      var r = Gn(o);
      var u = r.on;
      var s = r.bind;
      var c = r.emit;
      var a = t.classes;
      var f = t.i18n;
      var l = n.Elements;
      var d = n.Controller;
      var p = l.arrows;
      var h = l.track;
      var v = p;
      var g = l.prev;
      var m = l.next;
      var y = {};
      return {arrows: y, mount: b, destroy: E};
    }, Autoplay: function (n, t, e) {
      function g() {
        if (f() && t.Slides.isEnough()) {
          a.start(!e.resetProgress);
          o = i = v = false;
          b();
          c(jn);
        }
      }
      function m(n) {
        v = !!(n = n === void 0 ? true : n);
        b();
        if (!f()) {
          a.pause();
          c(Rn);
        }
      }
      function y() {
        if (!v) {
          if (i || o) {
            m(false);
          } else {
            g();
          }
        }
      }
      function b() {
        if (p) {
          L(p, bt, !v);
          j(p, Vn, e.i18n[v ? "play" : "pause"]);
        }
      }
      function w(n) {
        n = t.Slides.getAt(n);
        a.set(n && +K(n.slide, Nt) || e.interval);
      }
      var i;
      var o;
      var r = Gn(n);
      var u = r.on;
      var s = r.bind;
      var c = r.emit;
      var a = Xn(e.interval, n.go.bind(n, ">"), function (n) {
        var t = l.bar;
        if (t) {
          Y(t, "width", 100 * n + "%");
        }
        c("autoplay:playing", n);
      });
      var f = a.isPaused;
      var l = t.Elements;
      var d = (n = t.Elements).root;
      var p = n.toggle;
      var h = e.autoplay;
      var v = h === "pause";
      return {mount: function () {
        if (h) {
          (function () {
            if (e.pauseOnHover) {
              s(d, "mouseenter mouseleave", function (n) {
                i = n.type === "mouseenter";
                y();
              });
            }
            if (e.pauseOnFocus) {
              s(d, "focusin focusout", function (n) {
                o = n.type === "focusin";
                y();
              });
            }
            if (p) {
              s(p, "click", function () {
                if (v) {
                  g();
                } else {
                  m(true);
                }
              });
            }
            u([Sn, On, Mn], a.rewind);
            u(Sn, w);
          }());
          if (p) {
            j(p, Kn, l.track.id);
          }
          if (!v) {
            g();
          }
          b();
        }
      }, destroy: a.cancel, play: g, pause: m, isPaused: f};
    }, Cover: function (n, t, e) {
      function o(e) {
        t.Slides.forEach(function (n) {
          var t = A(n.container || n.slide, "img");
          if (t && t.src) {
            r(e, t, n);
          }
        });
      }
      function r(n, t, e) {
        e.style("background", n ? 'center/cover no-repeat url("' + t.src + '")' : "", true);
        q(t, n ? "none" : "");
      }
      var i = Gn(n).on;
      return {mount: function () {
        if (e.cover) {
          i(Wn, D(r, true));
          i([En, zn, Mn], D(o, true));
        }
      }, destroy: D(o, false)};
    }, Scroll: function (r, s, u) {
      function y(n, t, e, i, o) {
        var r = p();
        E();
        if (e) {
          e = s.Layout.sliderSize();
          u = gn(n) * e * fn(dn(n) / e) || 0;
          n = d.toPosition(s.Controller.toDest(n % e)) + u;
        }
        var u = pn(r, n, 1);
        m = 1;
        t = u ? 0 : t || an(dn(n - r) / 1.5, 800);
        a = i;
        c = Xn(t, b, D(w, r, n, o), 1);
        l(W);
        f(On);
        c.start();
      }
      function b() {
        l(3);
        if (a) {
          a();
        }
        f(In);
      }
      function w(n, t, e, i) {
        var o = p();
        var n = (n + (t - n) * (n = i, (i = u.easingFunc) ? i(n) : 1 - Math.pow(1 - n, 4)) - o) * m;
        g(o + n);
        if (r.is(At) && !e && v()) {
          m *= .6;
          if (dn(n) < 10) {
            y(h(v(true)), 600, false, void 0, true);
          }
        }
      }
      function E() {
        if (c) {
          c.cancel();
        }
      }
      function e() {
        if (c && !c.isPaused()) {
          E();
          b();
        }
      }
      var c;
      var a;
      var n = Gn(r);
      var t = n.on;
      var f = n.emit;
      var l = r.state.set;
      var d = s.Move;
      var p = d.getPosition;
      var h = d.getLimit;
      var v = d.exceededLimit;
      var g = d.translate;
      var m = 1;
      return {mount: function () {
        t(Sn, E);
        t([zn, Mn], e);
      }, destroy: E, scroll: y, cancel: e};
    }, Drag: function (r, i, u) {
      function k() {
        var n = u.drag;
        j(!n);
        c = n === "free";
      }
      function L(n) {
        var t;
        var e;
        var i;
        f = false;
        if (!l) {
          t = F(n);
          e = n.target;
          i = u.noDrag;
          if (!B(e, "." + vt + ", ." + lt) && (!i || !B(e, i)) && (!!t || !n.button)) {
            if (b.isBusy()) {
              $(n, true);
            } else {
              d = t ? w : window;
              a = g.is([R, W]);
              o = null;
              h(d, kt, A, Tt);
              h(d, Lt, D, Tt);
              m.cancel();
              y.cancel();
              z(n);
            }
          }
        }
      }
      function A(n) {
        var t;
        var e;
        var i;
        var o;
        if (!g.is(6)) {
          g.set(6);
          p("drag");
        }
        if (n.cancelable) {
          if (a) {
            m.translate(s + N(n) / (C && r.is(At) ? 5 : 1));
            e = 200 < T(n);
            i = C !== (C = P());
            if (e || i) {
              z(n);
            }
            f = true;
            p("dragging");
            $(n);
          } else if (dn(N(o = n)) > dn(N(o, true))) {
            t = n;
            e = u.dragMinThreshold;
            i = X(e);
            o = i && e.mouse || 0;
            e = (i ? e.touch : +e) || 10;
            a = dn(N(t)) > (F(t) ? e : o);
            $(n);
          }
        }
      }
      function D(n) {
        if (g.is(6)) {
          g.set(3);
          p("dragged");
        }
        if (a) {
          (function (n) {
            var t = function (n) {
              if (r.is(Dt) || !C) {
                var t = T(n);
                if (t && t < 200) {
                  return N(n) / t;
                }
              }
              return 0;
            }(n);
            var e = function () {
              var n = t;
              return _() + gn(n) * cn(dn(n) * (u.flickPower || 600), c ? 1 / 0 : i.Layout.listSize() * (u.flickMaxPages || 1));
            }();
            var n = u.rewind && u.rewindByDrag;
            E(false);
            if (c) {
              b.scroll(e, 0, u.snap);
            } else if (r.is(Mt)) {
              b.go(x(gn(t)) < 0 ? n ? "<" : "-" : n ? ">" : "+");
            } else if (r.is(At) && C && n) {
              b.go(P(true) ? ">" : "<");
            } else {
              b.go(b.toDest(e), true);
            }
            E(true);
          }(n));
          $(n);
        }
        v(d, kt, A);
        v(d, Lt, D);
        a = false;
      }
      function M(n) {
        if (!l && f) {
          $(n, true);
        }
      }
      function z(n) {
        o = t;
        t = n;
        s = _();
      }
      function N(n, t) {
        return I(n, t) - I(O(n), t);
      }
      function T(n) {
        return on(n) - on(O(n));
      }
      function O(n) {
        return t === n && o || t;
      }
      function I(n, t) {
        return (F(n) ? n.changedTouches[0] : n)["page" + S(t ? "Y" : "X")];
      }
      function F(n) {
        return typeof TouchEvent != "undefined" && n instanceof TouchEvent;
      }
      function j(n) {
        l = n;
      }
      var s;
      var t;
      var o;
      var c;
      var a;
      var f;
      var l;
      var d;
      var n = Gn(r);
      var e = n.on;
      var p = n.emit;
      var h = n.bind;
      var v = n.unbind;
      var g = r.state;
      var m = i.Move;
      var y = i.Scroll;
      var b = i.Controller;
      var w = i.Elements.track;
      var E = i.Media.reduce;
      var S = (n = i.Direction).resolve;
      var x = n.orient;
      var _ = m.getPosition;
      var P = m.exceededLimit;
      var C = false;
      return {mount: function () {
        h(w, kt, G, Tt);
        h(w, Lt, G, Tt);
        h(w, Ct, L, Tt);
        h(w, "click", M, {capture: true});
        h(w, "dragstart", $);
        e([En, zn], k);
      }, disable: j, isDragging: function () {
        return a;
      }};
    }, Keyboard: function (t, n, e) {
      function l() {
        var n = e.keyboard;
        if (n) {
          i = n === "global" ? window : a;
          s(i, Ft, h);
        }
      }
      function d() {
        c(i, Ft);
      }
      function p() {
        var n = o;
        o = true;
        v(function () {
          o = n;
        });
      }
      function h(n) {
        if (!o) {
          if ((n = It(n)) === f(Bn)) {
            t.go("<");
          } else if (n === f(Hn)) {
            t.go(">");
          }
        }
      }
      var i;
      var o;
      var r = Gn(t);
      var u = r.on;
      var s = r.bind;
      var c = r.unbind;
      var a = t.root;
      var f = n.Direction.resolve;
      return {mount: function () {
        l();
        u(zn, d);
        u(zn, l);
        u(Sn, p);
      }, destroy: d, disable: function (n) {
        o = n;
      }};
    }, LazyLoad: function (e, n, o) {
      function l() {
        x(f);
        n.Slides.forEach(function (i) {
          tn(i.slide, Wt).forEach(function (n) {
            var t = K(n, jt);
            var e = K(n, Rt);
            if (t !== n.src || e !== n.srcset) {
              t = o.classes.spinner;
              e = A(e = n.parentElement, "." + t) || H("span", t, e);
              f.push([n, i, e]);
              if (!n.src) {
                q(n, "none");
              }
            }
          });
        });
        if (c) {
          v();
        }
      }
      function d() {
        if (!(f = f.filter(function (n) {
          var t = o.perPage * ((o.preloadPages || 1) + 1) - 1;
          return !n[1].isWithin(e.index, t) || p(n);
        })).length) {
          r(a);
        }
      }
      function p(n) {
        var t = n[0];
        P(n[1].slide, xt);
        u(t, "load error", D(h, n));
        j(t, "src", K(t, jt));
        j(t, "srcset", K(t, Rt));
        F(t, jt);
        F(t, Rt);
      }
      function h(n, t) {
        var e = n[0];
        var i = n[1];
        en(i.slide, xt);
        if (t.type !== "error") {
          V(n[2]);
          q(e, "");
          s(Wn, e, i);
          s(Nn);
        }
        if (c) {
          v();
        }
      }
      function v() {
        if (f.length) {
          p(f.shift());
        }
      }
      var t = Gn(e);
      var i = t.on;
      var r = t.off;
      var u = t.bind;
      var s = t.emit;
      var c = o.lazyLoad === "sequential";
      var a = [En, Mn, xn, In];
      var f = [];
      return {mount: function () {
        if (o.lazyLoad) {
          l();
          i(Mn, l);
          if (!c) {
            i(a, d);
          }
        }
      }, destroy: D(x, f)};
    }, Pagination: function (f, n, l) {
      function c() {
        if (d) {
          V(g.pagination ? _(d.children) : d);
          en(d, p);
          x(y);
          d = null;
        }
        t.destroy();
      }
      function b(n) {
        u(">" + n, true);
      }
      function w(n, t) {
        var e = y.length;
        var i = It(t);
        var o = E();
        var r = -1;
        if (i === s(Hn, false, o)) {
          r = ++n % e;
        } else if (i === s(Bn, false, o)) {
          r = (--n + e) % e;
        } else if (i === "Home") {
          r = 0;
        } else if (i === "End") {
          r = e - 1;
        }
        e = y[r];
        if (e) {
          U(e.button);
          u(">" + r);
          $(t, true);
        }
      }
      function E() {
        return l.paginationDirection || l.direction;
      }
      function a(n) {
        return y[o.toPage(n)];
      }
      function S() {
        var n;
        var t = a(r(true));
        var e = a(r());
        if (t) {
          en(n = t.button, bt);
          F(n, Qn);
          j(n, Un, -1);
        }
        if (e) {
          P(n = e.button, bt);
          j(n, Qn, true);
          j(n, Un, "");
        }
        i("pagination:updated", {list: d, items: y}, t, e);
      }
      var d;
      var p;
      var t = Gn(f);
      var e = t.on;
      var i = t.emit;
      var h = t.bind;
      var v = n.Slides;
      var g = n.Elements;
      var o = n.Controller;
      var m = o.hasFocus;
      var r = o.getIndex;
      var u = o.go;
      var s = n.Direction.resolve;
      var y = [];
      return {items: y, mount: function n() {
        c();
        e([zn, Mn], n);
        if (l.pagination && v.isEnough()) {
          e([Sn, On, In], S);
          (function () {
            var n = f.length;
            var t = l.classes;
            var e = l.i18n;
            var i = l.perPage;
            var o = m() ? n : ln(n / i);
            P(d = g.pagination || H("ul", t.pagination, g.track.parentElement), p = ht + "--" + E());
            j(d, qn, "tablist");
            j(d, Vn, e.select);
            j(d, nt, E() === Yn ? "vertical" : "");
            for (var r = 0; r < o; r++) {
              var u = H("li", null, d);
              var s = H("button", {class: t.page, type: "button"}, u);
              var c = v.getIn(r).map(function (n) {
                return n.slide.id;
              });
              var a = !m() && 1 < i ? e.pageX : e.slideX;
              h(s, "click", D(b, r));
              if (l.paginationKeyboard) {
                h(s, "keydown", D(w, r));
              }
              j(u, qn, "presentation");
              j(s, qn, "tab");
              j(s, Kn, c.join(" "));
              j(s, Vn, mn(a, r + 1));
              j(s, Un, -1);
              y.push({li: u, button: s, page: r});
            }
          }());
          S();
          i("pagination:mounted", {list: d, items: y}, a(f.index));
        }
      }, destroy: c, getAt: a, update: S};
    }, Sync: function (e, n, t) {
      function u() {
        var n;
        var t;
        e.splides.forEach(function (n) {
          if (!n.isParent) {
            c(e, n.splide);
            c(n.splide, e);
          }
        });
        if (i) {
          n = Gn(e);
          (t = n.on)(Pn, f);
          t(Dn, l);
          t([En, zn], a);
          r.push(n);
          n.emit(Fn, e.splides);
        }
      }
      function s() {
        r.forEach(function (n) {
          n.destroy();
        });
        x(r);
      }
      function c(n, i) {
        n = Gn(n);
        n.on(Sn, function (n, t, e) {
          i.go(i.is(Dt) ? e : n);
        });
        r.push(n);
      }
      function a() {
        j(n.Elements.list, nt, t.direction === Yn ? "vertical" : "");
      }
      function f(n) {
        e.go(n.index);
      }
      function l(n, t) {
        if (b(Gt, It(t))) {
          f(n);
          $(t);
        }
      }
      var i = t.isNavigation;
      var o = t.slideFocus;
      var r = [];
      return {setup: function () {
        e.options = {slideFocus: z(o) ? i : o};
      }, mount: u, destroy: s, remount: function () {
        s();
        u();
      }};
    }, Wheel: function (u, s, c) {
      function t(n) {
        var t;
        var e;
        var i;
        var o;
        var r;
        if (n.cancelable) {
          r = (t = n.deltaY) < 0;
          e = on(n);
          i = c.wheelMinThreshold || 0;
          o = c.wheelSleep || 0;
          if (dn(t) > i && o < e - a) {
            u.go(r ? "<" : ">");
            a = e;
          }
          r = r;
          if (!c.releaseWheel || !!u.state.is(R) || s.Controller.getAdjacent(r) !== -1) {
            $(n);
          }
        }
      }
      var n = Gn(u).bind;
      var a = 0;
      return {mount: function () {
        if (c.wheel) {
          n(s.Elements.track, "wheel", t, Tt);
        }
      }};
    }, Live: function (n, t, e) {
      function s(n) {
        if (r) {
          j(o, l, n ? "off" : "polite");
        }
      }
      var i = Gn(n).on;
      var o = t.Elements.track;
      var r = e.live && !e.isNavigation;
      var u = H("span", yt);
      return {mount: function () {
        if (r) {
          s(!t.Autoplay.isPaused());
          j(o, et, "additions");
          u.textContent = "\u2026";
          i(jn, D(s, true));
          i(Rn, D(s, false));
          i([xn, In], D(C, o, u));
        }
      }, disable: s, destroy: function () {
        F(o, [l, et]);
        V(u);
      }};
    }});
    var Bt = {type: "slide", role: "region", speed: 400, perPage: 1, cloneStatus: true, arrows: true, pagination: true, paginationKeyboard: true, interval: 5e3, pauseOnHover: true, pauseOnFocus: true, resetProgress: true, easing: "cubic-bezier(0.25, 1, 0.5, 1)", drag: true, direction: "ltr", trimSpace: true, focusableNodes: "a, button, textarea, input, select, iframe", live: true, classes: {slide: st, clone: ct, arrows: ft, arrow: lt, prev: dt, next: pt, pagination: ht, page: vt, spinner: un + "__spinner"}, i18n: {prev: "Previous slide", next: "Next slide", first: "Go to first slide", last: "Go to last slide", slideX: "Go to slide %s", pageX: "Go to page %s", play: "Start autoplay", pause: "Pause autoplay", carousel: "carousel", slide: "slide", select: "Select a slide to show", slideLabel: "%s of %s"}, reducedMotion: {speed: 0, rewindSpeed: 0, autoplay: "pause"}};
    a = function () {
      function e(n, t) {
        this.event = Gn();
        this.Components = {};
        this.state = s(1);
        this.splides = [];
        this._o = {};
        this._E = {};
        n = M(n) ? nn(document, n) : n;
        sn(n, n + " is invalid.");
        t = O({label: K(this.root = n, Vn) || "", labelledby: K(n, Zn) || ""}, Bt, e.defaults, t || {});
        try {
          O(t, JSON.parse(K(n, i)));
        } catch (n) {
          sn(false, "Invalid JSON");
        }
        this._o = Object.create(O({}, t));
      }
      var n = e.prototype;
      n.mount = function (n, t) {
        var e = this;
        var i = this.state;
        var o = this.Components;
        sn(i.is([1, 7]), "Already mounted!");
        i.set(1);
        this._C = o;
        this._T = t || this._T || (this.is(Mt) ? Ht : Yt);
        this._E = n || this._E;
        N(T({}, Xt, this._E, {Transition: this._T}), function (n, t) {
          n = n(e, o, e._o);
          if ((o[t] = n).setup) {
            n.setup();
          }
        });
        N(o, function (n) {
          if (n.mount) {
            n.mount();
          }
        });
        this.emit(En);
        P(this.root, "is-initialized");
        i.set(3);
        this.emit("ready");
        return this;
      };
      n.sync = function (n) {
        this.splides.push({splide: n});
        n.splides.push({splide: this, isParent: true});
        if (this.state.is(3)) {
          this._C.Sync.remount();
          n.Components.Sync.remount();
        }
        return this;
      };
      n.go = function (n) {
        this._C.Controller.go(n);
        return this;
      };
      n.on = function (n, t) {
        this.event.on(n, t);
        return this;
      };
      n.off = function (n) {
        this.event.off(n);
        return this;
      };
      n.emit = function (n) {
        var t;
        (t = this.event).emit.apply(t, [n].concat(_(arguments, 1)));
        return this;
      };
      n.add = function (n, t) {
        this._C.Slides.add(n, t);
        return this;
      };
      n.remove = function (n) {
        this._C.Slides.remove(n);
        return this;
      };
      n.is = function (n) {
        return this._o.type === n;
      };
      n.refresh = function () {
        this.emit(Mn);
        return this;
      };
      n.destroy = function (t) {
        if (t === void 0) {
          t = true;
        }
        var n = this.event;
        var e = this.state;
        if (e.is(1)) {
          Gn(this).on("ready", this.destroy.bind(this, t));
        } else {
          N(this._C, function (n) {
            if (n.destroy) {
              n.destroy(t);
            }
          }, true);
          n.emit(u);
          n.destroy();
          if (t) {
            x(this.splides);
          }
          e.set(7);
        }
        return this;
      };
      _createClass(e, [{key: "options", get: function () {
        return this._o;
      }, set: function (n) {
        this._C.Media.set(n, true);
      }}, {key: "length", get: function () {
        return this._C.Slides.getLength(true);
      }}, {key: "index", get: function () {
        return this._C.Controller.getIndex();
      }}]);
      return e;
    }();
    a.defaults = {};
    a.STATES = n;
    return a;
  }));
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  "use strict";
  window.kadenceSlide = {start: function (element) {
    var sliderDirection = "ltr";
    var nextLabel = element.getAttribute("data-slider-next-label");
    var prevLabel = element.getAttribute("data-slider-prev-label");
    var slideLabel = element.getAttribute("data-slider-slide-label");
    var sliderSpeed = parseInt(element.getAttribute("data-slider-speed"));
    var sliderAnimationSpeed = parseInt(element.getAttribute("data-slider-anim-speed"));
    var sliderArrows = element.getAttribute("data-slider-arrows");
    var sliderDots = element.getAttribute("data-slider-dots");
    var sliderPause = element.getAttribute("data-slider-pause-hover");
    var sliderLoop = element.getAttribute("data-slider-loop");
    var sliderAuto = element.getAttribute("data-slider-auto");
    var xxl = parseInt(element.getAttribute("data-columns-xxl"));
    var xl = parseInt(element.getAttribute("data-columns-xl"));
    var md = parseInt(element.getAttribute("data-columns-md"));
    var sm = parseInt(element.getAttribute("data-columns-sm"));
    var xs = parseInt(element.getAttribute("data-columns-xs"));
    var ss = parseInt(element.getAttribute("data-columns-ss"));
    var gutter = parseInt(element.getAttribute("data-slider-gutter"));
    var scroll = parseInt(element.getAttribute("data-slider-scroll"));
    if (!nextLabel) {
      nextLabel = kadenceSlideConfig.next;
    }
    if (!prevLabel) {
      prevLabel = kadenceSlideConfig.next;
    }
    if (!slideLabel) {
      slideLabel = kadenceSlideConfig.slide;
    }
    if (document.querySelector('html[dir="rtl"]')) {
      sliderDirection = "rtl";
    }
    if (scroll !== 1) {
      scroll = "page";
    }
    var scrollSxxl = xxl;
    var scrollSxl = xl;
    var scrollSmd = md;
    var scrollSsm = sm;
    var scrollSxs = xs;
    var scrollSss = ss;
    if (scroll === 1) {
      scrollSxxl = 1;
      scrollSxl = 1;
      scrollSmd = 1;
      scrollSsm = 1;
      scrollSxs = 1;
      scrollSss = 1;
    }
    var initialize = false;
    var slideCount = element.querySelector(".splide__list").childElementCount;
    if (window.innerWidth < 544) {
      if (slideCount > ss) {
        initialize = true;
      }
    } else if (window.innerWidth < 768) {
      if (slideCount > xs) {
        initialize = true;
      }
    } else if (window.innerWidth < 992) {
      if (slideCount > sm) {
        initialize = true;
      }
    } else if (window.innerWidth < 1200) {
      if (slideCount > md) {
        initialize = true;
      }
    } else if (window.innerWidth < 1500) {
      if (slideCount > xl) {
        initialize = true;
      }
    } else if (slideCount > xxl) {
      initialize = true;
    }
    if (initialize) {
      element.classList.add("splide-initial");
    }
    var options = {perPage: xxl, type: sliderLoop === "false" ? "slide" : "loop", slideFocus: false, perMove: scrollSxxl, autoplay: sliderAuto == "false" ? false : true, easing: undefined !== sliderAnimationSpeed && sliderAnimationSpeed > 1e3 ? "linear" : "cubic-bezier(0.25, 1, 0.5, 1)", speed: undefined !== sliderAnimationSpeed ? sliderAnimationSpeed : 400, interval: undefined !== sliderSpeed ? sliderSpeed : 7e3, autoplayHoverPause: sliderPause === "true" ? true : false, arrows: sliderArrows == "false" ? false : true, pagination: sliderDots == "false" ? false : true, gap: gutter + "px", direction: sliderDirection, rewind: sliderLoop == "false" ? true : false, focus: 0, perMove: scrollSxxl, i18n: {carousel: slideLabel, prev: prevLabel, next: nextLabel, slideLabel: "%s " + kadenceSlideConfig.of + " %s"}, breakpoints: {543: {perPage: ss, perMove: scrollSss}, 767: {perPage: xs, perMove: scrollSxs}, 991: {perPage: sm, perMove: scrollSsm}, 1199: {perPage: md, perMove: scrollSmd}, 1499: {perPage: xl, perMove: scrollSxl}}};
    var slider = new Splide(element, options);
    if (initialize) {
      slider.mount();
    }
  }, initAll: function (element) {
    document.querySelectorAll(".kadence-slide-init").forEach(function (element) {
      window.kadenceSlide.start(element);
    });
  }, init: function () {
    if (typeof Splide == "function") {
      window.kadenceSlide.initAll();
    } else {
      var initLoadDelay = setInterval(function () {
        if (typeof Splide == "function") {
          window.kadenceSlide.initAll();
          clearInterval(initLoadDelay);
        }
      }, 200);
    }
  }};
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.kadenceSlide.init);
  } else {
    window.kadenceSlide.init();
  }
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (e, t) {
      var n = this.length;
      t = t || window;
      for (var o = 0; o < n; o++) {
        e.call(t, this[o], o, this);
      }
    };
  }
  (function () {
    "use strict";
    function e() {
      function s(e, t) {
        this.scrollLeft = e;
        this.scrollTop = t;
      }
      function d(e) {
        if (e === null || typeof e != "object" || e.behavior === void 0 || e.behavior === "auto" || e.behavior === "instant") {
          return true;
        }
        if (typeof e == "object" && e.behavior === "smooth") {
          return false;
        }
        throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.");
      }
      function c(e, t) {
        if (t === "Y") {
          return e.clientHeight + l < e.scrollHeight;
        } else if (t === "X") {
          return e.clientWidth + l < e.scrollWidth;
        } else {
          return;
        }
      }
      function u(t, o) {
        var n = e.getComputedStyle(t, null)["overflow" + o];
        return n === "auto" || n === "scroll";
      }
      function f(t) {
        var s = (r() - t.startTime) / i;
        var l = s = s > 1 ? 1 : s;
        var o = .5 * (1 - Math.cos(Math.PI * l));
        var n = t.startX + (t.x - t.startX) * o;
        var a = t.startY + (t.y - t.startY) * o;
        t.method.call(t.scrollable, n, a);
        if (n !== t.x || a !== t.y) {
          e.requestAnimationFrame(f.bind(e, t));
        }
      }
      function g(o, n, i) {
        var l;
        var d;
        var c;
        var u;
        var g = r();
        if (o === t.body) {
          l = e;
          d = e.scrollX || e.pageXOffset;
          c = e.scrollY || e.pageYOffset;
          u = a.scroll;
        } else {
          l = o;
          d = o.scrollLeft;
          c = o.scrollTop;
          u = s;
        }
        f({scrollable: l, method: u, startTime: g, startX: d, startY: c, x: n, y: i});
      }
      var e = window;
      var t = document;
      if (!("scrollBehavior" in t.documentElement.style) || e.__forceSmoothScrollPolyfill__ === true) {
        var o;
        var n = e.HTMLElement || e.Element;
        var i = 468;
        var a = {scroll: e.scroll || e.scrollTo, scrollBy: e.scrollBy, elementScroll: n.prototype.scroll || s, scrollIntoView: n.prototype.scrollIntoView};
        var r = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now;
        o = e.navigator.userAgent;
        var l = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(o) ? 1 : 0;
        e.scroll = e.scrollTo = function () {
          if (arguments[0] !== void 0) {
            if (d(arguments[0]) === true) {
              a.scroll.call(e, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : e.scrollX || e.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : e.scrollY || e.pageYOffset);
            } else {
              g.call(e, t.body, arguments[0].left !== void 0 ? ~~arguments[0].left : e.scrollX || e.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : e.scrollY || e.pageYOffset);
            }
          }
        };
        e.scrollBy = function () {
          if (arguments[0] !== void 0) {
            if (d(arguments[0])) {
              a.scrollBy.call(e, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0);
            } else {
              g.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset));
            }
          }
        };
        n.prototype.scroll = n.prototype.scrollTo = function () {
          if (arguments[0] !== void 0) {
            if (d(arguments[0]) === true) {
              if (typeof arguments[0] == "number" && arguments[1] === void 0) {
                throw new SyntaxError("Value could not be converted");
              }
              a.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
            } else {
              var e = arguments[0].left;
              var t = arguments[0].top;
              g.call(this, this, e === void 0 ? this.scrollLeft : ~~e, t === void 0 ? this.scrollTop : ~~t);
            }
          }
        };
        n.prototype.scrollBy = function () {
          if (arguments[0] !== void 0) {
            if (d(arguments[0]) === true) {
              a.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
            } else {
              this.scroll({left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior});
            }
          }
        };
        n.prototype.scrollIntoView = function () {
          if (d(arguments[0]) === true) {
            a.scrollIntoView.call(this, arguments[0] === void 0 || arguments[0]);
          } else {
            var o = function (e) {
              while (e !== t.body && (n = c(o = e, "Y") && u(o, "Y"), i = c(o, "X") && u(o, "X"), n || i) === false) {
                e = e.parentNode || e.host;
              }
              var o;
              var n;
              var i;
              return e;
            }(this);
            var n = o.getBoundingClientRect();
            var i = this.getBoundingClientRect();
            if (o === t.body) {
              e.scrollBy({left: i.left, top: i.top, behavior: "smooth"});
            } else {
              g.call(this, o, o.scrollLeft + i.left - n.left, o.scrollTop + i.top - n.top);
              if (e.getComputedStyle(o).position !== "fixed") {
                e.scrollBy({left: n.left, top: n.top, behavior: "smooth"});
              }
            }
          }
        };
      }
    }
    if (typeof exports == "object" && typeof module != "undefined") {
      module.exports = {polyfill: e};
    } else {
      e();
    }
  }());
  (function () {
    "use strict";
    window.kadence = {initOutlineToggle: function () {
      document.body.addEventListener("keydown", function () {
        document.body.classList.remove("hide-focus-outline");
      });
      document.body.addEventListener("mousedown", function () {
        document.body.classList.add("hide-focus-outline");
      });
    }, getOffset: function (e) {
      if (e instanceof HTMLElement) {
        var t = e.getBoundingClientRect();
        return {top: t.top + window.pageYOffset, left: t.left + window.pageXOffset};
      }
      return {top: null, left: null};
    }, findParents: function (e, t) {
      var o = [];
      (function e(n) {
        var i = n.parentNode;
        if (i instanceof HTMLElement) {
          if (i.matches(t)) {
            o.push(i);
          }
          e(i);
        }
      }(e));
      return o;
    }, toggleAttribute: function (e, t, o, n) {
      if (o === void 0) {
        o = true;
      }
      if (n === void 0) {
        n = false;
      }
      if (e.getAttribute(t) === o) {
        e.setAttribute(t, n);
      } else {
        e.setAttribute(t, o);
      }
    }, initNavToggleSubmenus: function () {
      var e = document.querySelectorAll(".nav--toggle-sub");
      if (e.length) {
        for (let t = 0; t < e.length; t++) {
          window.kadence.initEachNavToggleSubmenu(e[t]);
          window.kadence.initEachNavToggleSubmenuInside(e[t]);
        }
      }
    }, initEachNavToggleSubmenu: function (e) {
      var t = e.querySelectorAll(".menu ul");
      if (t.length) {
        for (let i = 0; i < t.length; i++) {
          var o = t[i].parentNode;
          if (o.querySelector(".dropdown-nav-toggle")) {
            var n = document.createElement("BUTTON");
            n.setAttribute("aria-label", kadenceConfig.screenReader.expand);
            n.classList.add("dropdown-nav-special-toggle");
            o.insertBefore(n, o.childNodes[1]);
            n.addEventListener("click", function (e) {
              e.preventDefault();
              window.kadence.toggleSubMenu(e.target.parentNode);
            });
            o.addEventListener("mouseleave", function (e) {
              window.kadence.toggleSubMenu(e.target, false);
            });
            o.querySelector("a").addEventListener("focus", function (e) {
              var t = e.target.parentNode.parentNode.querySelectorAll("li.menu-item--toggled-on");
              for (let o = 0; o < t.length; o++) {
                window.kadence.toggleSubMenu(t[o], false);
              }
            });
            t[i].addEventListener("keydown", function (e) {
              var o = "ul.toggle-show > li > a, ul.toggle-show > li > .dropdown-nav-special-toggle";
              if (e.keyCode === 9) {
                if (e.shiftKey) {
                  if (window.kadence.isfirstFocusableElement(t[i], document.activeElement, o)) {
                    window.kadence.toggleSubMenu(t[i].parentNode, false);
                  }
                } else if (window.kadence.islastFocusableElement(t[i], document.activeElement, o)) {
                  window.kadence.toggleSubMenu(t[i].parentNode, false);
                }
              }
            });
            t[i].parentNode.classList.add("menu-item--has-toggle");
          }
        }
      }
    }, initEachNavToggleSubmenuInside: function (e) {
      var t = e.querySelectorAll(".menu-item-has-children");
      if (t.length) {
        for (let o = 0; o < t.length; o++) {
          t[o].addEventListener("mouseenter", function (e) {
            if (t[o].querySelector("ul.sub-menu")) {
              var n = t[o].querySelector("ul.sub-menu");
              if (!(window.kadence.getOffset(n).left + n.offsetWidth <= window.innerWidth)) {
                n.classList.add("sub-menu-edge");
              }
            }
          });
        }
      }
    }, toggleSubMenu: function (e, t) {
      var o = e.querySelector(".dropdown-nav-special-toggle");
      var n = e.querySelector("ul");
      let i = e.classList.contains("menu-item--toggled-on");
      if (t !== void 0 && typeof t == "boolean") {
        i = !t;
      }
      o.setAttribute("aria-expanded", (!i).toString());
      if (i) {
        e.classList.remove("menu-item--toggled-on");
        n.classList.remove("toggle-show");
        o.setAttribute("aria-label", kadenceConfig.screenReader.expand);
        var a = e.querySelectorAll(".menu-item--toggled-on");
        for (let e = 0; e < a.length; e++) {
          window.kadence.toggleSubMenu(a[e], false);
        }
      } else {
        var r = e.parentNode.querySelectorAll("li.menu-item--toggled-on");
        for (let e = 0; e < r.length; e++) {
          window.kadence.toggleSubMenu(r[e], false);
        }
        e.classList.add("menu-item--toggled-on");
        n.classList.add("toggle-show");
        o.setAttribute("aria-label", kadenceConfig.screenReader.collapse);
      }
    }, isfirstFocusableElement: function (e, t, o) {
      var n = e.querySelectorAll(o);
      return 0 < n.length && t === n[0];
    }, islastFocusableElement: function (e, t, o) {
      var n = e.querySelectorAll(o);
      return 0 < n.length && t === n[n.length - 1];
    }, toggleDrawer: function (e, t) {
      t = t === void 0 || t;
      var o = e;
      var n = document.querySelector(o.dataset.toggleTarget);
      var i = document;
      var a = window.innerWidth - document.documentElement.clientWidth;
      var r = o.dataset.toggleDuration ? o.dataset.toggleDuration : 250;
      window.kadence.toggleAttribute(o, "aria-expanded", "true", "false");
      if (n.classList.contains("show-drawer")) {
        if (o.dataset.toggleBodyClass) {
          i.body.classList.remove(o.dataset.toggleBodyClass);
        }
        n.classList.remove("active");
        n.classList.remove("pop-animated");
        i.body.classList.remove("kadence-scrollbar-fixer");
        setTimeout(function () {
          n.classList.remove("show-drawer");
          if (o.dataset.setFocus && t) {
            var e = document.querySelector(o.dataset.setFocus);
            if (e) {
              e.focus();
              if (e.hasAttribute("aria-expanded")) {
                window.kadence.toggleAttribute(e, "aria-expanded", "true", "false");
              }
            }
          }
        }, r);
      } else if (n.classList.add("show-drawer"), o.dataset.toggleBodyClass && (i.body.classList.toggle(o.dataset.toggleBodyClass), o.dataset.toggleBodyClass.includes("showing-popup-drawer-") && (i.body.style.setProperty("--scrollbar-offset", a + "px"), i.body.classList.add("kadence-scrollbar-fixer"))), setTimeout(function () {
        n.classList.add("active");
        o.dataset.setFocus;
        if (t) {
          var e = document.querySelector(o.dataset.setFocus);
          if (e) {
            if (e.hasAttribute("aria-expanded")) {
              window.kadence.toggleAttribute(e, "aria-expanded", "true", "false");
            }
            var i = e.value;
            e.value = "";
            e.focus();
            e.value = i;
          }
        }
      }, 10), setTimeout(function () {
        n.classList.add("pop-animated");
      }, r), n.classList.contains("popup-drawer")) {
        var l = n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        var s = l[0];
        var d = l[l.length - 1];
        document.addEventListener("keydown", function (e) {
          if (e.key === "Tab" || e.keyCode === 9) {
            if (e.shiftKey) {
              if (document.activeElement === s) {
                d.focus();
                e.preventDefault();
              }
            } else if (document.activeElement === d) {
              s.focus();
              e.preventDefault();
            }
          }
        });
      }
    }, initToggleDrawer: function () {
      var e = document.querySelectorAll(".drawer-toggle");
      if (e.length) {
        for (let t = 0; t < e.length; t++) {
          e[t].addEventListener("click", function (o) {
            o.preventDefault();
            window.kadence.toggleDrawer(e[t]);
          });
        }
        document.addEventListener("keyup", function (e) {
          if (e.keyCode === 27 && document.querySelectorAll(".popup-drawer.show-drawer.active")) {
            e.preventDefault();
            document.querySelectorAll(".popup-drawer.show-drawer.active").forEach(function (e) {
              window.kadence.toggleDrawer(document.querySelector('*[data-toggle-target="' + e.dataset.drawerTargetString + '"]'));
            });
          }
        });
        document.addEventListener("click", function (e) {
          var t = e.target;
          if (t === (n = document.querySelector(".show-drawer.active .drawer-overlay"))) {
            window.kadence.toggleDrawer(document.querySelector('*[data-toggle-target="' + n.dataset.drawerTargetString + '"]'));
          }
          var o = document.querySelector("#search-drawer.show-drawer.active .drawer-content");
          var n = document.querySelector("#search-drawer.show-drawer.active .drawer-overlay");
          if (t === o) {
            window.kadence.toggleDrawer(document.querySelector('*[data-toggle-target="' + n.dataset.drawerTargetString + '"]'));
          }
        });
      }
    }, initMobileToggleSub: function () {
      document.querySelectorAll(".has-collapse-sub-nav").forEach(function (e) {
        var t = e.querySelector(".current-menu-item");
        if (t) {
          window.kadence.findParents(t, "li").forEach(function (e) {
            var t = e.querySelector(".drawer-sub-toggle");
            if (t) {
              window.kadence.toggleDrawer(t, true);
            }
          });
        }
      });
      var e = document.querySelectorAll(".drawer-sub-toggle");
      if (e.length) {
        for (let t = 0; t < e.length; t++) {
          e[t].addEventListener("click", function (o) {
            o.preventDefault();
            window.kadence.toggleDrawer(e[t]);
          });
        }
      }
    }, initMobileToggleAnchor: function () {
      var e = document.getElementById("mobile-drawer");
      if (e) {
        var t = e.querySelectorAll("a");
        if (t.length) {
          for (let o = 0; o < t.length; o++) {
            t[o].addEventListener("click", function (t) {
              window.kadence.toggleDrawer(e.querySelector(".menu-toggle-close"), false);
            });
          }
        }
      }
    }, initTransHeaderPadding: function () {
      if (!document.body.classList.contains("no-header") && document.body.classList.contains("transparent-header") && document.body.classList.contains("mobile-transparent-header")) {
        var e = document.querySelector(".entry-hero-container-inner");
        var t = document.querySelector("#masthead");
        var o = function (o) {
          if (kadenceConfig.breakPoints.desktop <= window.innerWidth) {
            if (document.body.classList.contains("transparent-header")) {
              e.style.paddingTop = t.offsetHeight + "px";
            } else {
              e.style.paddingTop = 0;
            }
          } else if (document.body.classList.contains("mobile-transparent-header")) {
            e.style.paddingTop = t.offsetHeight + "px";
          } else {
            e.style.paddingTop = 0;
          }
        };
        if (e) {
          window.addEventListener("resize", o, false);
          window.addEventListener("scroll", o, false);
          window.addEventListener("load", o, false);
          o();
        }
      }
    }, initStickyHeader: function () {
      var e = document.querySelector("#main-header .kadence-sticky-header");
      var t = document.querySelector("#mobile-header .kadence-sticky-header");
      var o = document.getElementById("wrapper");
      var n = document.querySelectorAll(".kadence-pro-fixed-above");
      var i = document.querySelectorAll(".kadence-before-wrapper-item");
      var a = "mobile";
      var r = 0;
      var l = 0;
      if (parseInt(kadenceConfig.breakPoints.desktop) < window.innerWidth) {
        a = "desktop";
        if (e) {
          e.style.position = "static";
          l = window.kadence.getOffset(e).top;
          e.style.position = null;
        }
      } else if (t) {
        t.style.position = "static";
        l = window.kadence.getOffset(t).top;
        t.style.position = null;
      }
      var s;
      var d;
      var c;
      var u = function (s) {
        var d;
        var c = window.kadence.getOffset(o).top;
        if (document.body.classList.toString().includes("boom_bar-static-top")) {
          var u = document.querySelector(".boom_bar");
          c = window.kadence.getOffset(o).top - u.offsetHeight;
        }
        if (i.length) {
          var f = 0;
          for (let e = 0; e < i.length; e++) {
            f += i[e].offsetHeight;
          }
          c = window.kadence.getOffset(o).top - f;
        }
        if (n.length) {
          var g = 0;
          for (let e = 0; e < n.length; e++) {
            g += n[e].offsetHeight;
          }
          c = window.kadence.getOffset(o).top + g;
        }
        if (d = kadenceConfig.breakPoints.desktop <= window.innerWidth ? e : t) {
          if (kadenceConfig.breakPoints.desktop <= window.innerWidth) {
            if (a === "mobile") {
              l = window.kadence.getOffset(d).top;
              a = "desktop";
            } else if (s && s === "updateActive") {
              d.style.top = "auto";
              l = window.kadence.getOffset(d).top;
              a = "desktop";
            }
          } else if (a === "desktop") {
            l = window.kadence.getOffset(d).top;
            a = "mobile";
          } else if (s && s === "updateActive") {
            d.style.top = "auto";
            l = window.kadence.getOffset(d).top;
            a = "mobile";
          }
          var h = d.parentNode;
          var w = d.getAttribute("data-shrink");
          var m = d.getAttribute("data-reveal-scroll-up");
          var p = parseInt(d.getAttribute("data-start-height"));
          if (!p || s && s.type !== void 0 && s.type === "orientationchange") {
            d.setAttribute("data-start-height", d.offsetHeight);
            p = d.offsetHeight;
            if (h.classList.contains("site-header-upper-inner-wrap")) {
              h.style.height = null;
              if (s && s.type !== void 0 && s.type === "orientationchange") {
                if (d.classList.contains("item-is-fixed")) {
                  setTimeout(function () {
                    h.style.height = Math.floor(h.offsetHeight + d.offsetHeight) + "px";
                  }, 21);
                } else {
                  setTimeout(function () {
                    h.style.height = h.offsetHeight + "px";
                  }, 21);
                }
              } else {
                h.style.height = h.offsetHeight + "px";
              }
            } else if (h.classList.contains("site-header-inner-wrap")) {
              h.style.height = null;
              h.style.height = h.offsetHeight + "px";
            } else {
              h.style.height = d.offsetHeight + "px";
            }
          }
          if (w === "true") {
            var v = d.getAttribute("data-shrink-height");
            if (v) {
              if (m === "true") {
                if (window.scrollY > r) {
                  var y = Math.floor(Math.floor(l) - Math.floor(c) + Math.floor(p));
                } else {
                  y = Math.floor(l - c);
                }
              } else {
                y = Math.floor(l - c);
              }
              var b = d.querySelector(".custom-logo");
              var k = d.querySelector(".kadence-sticky-logo");
              var L = d.querySelector(".site-main-header-inner-wrap");
              var S = parseInt(L.getAttribute("data-start-height"));
              if (!S) {
                L.setAttribute("data-start-height", L.offsetHeight);
                S = L.offsetHeight;
              }
              if (window.scrollY <= y) {
                L.style.height = S + "px";
                L.style.minHeight = S + "px";
                L.style.maxHeight = S + "px";
                if (b) {
                  b.style.maxHeight = "100%";
                }
                if (k) {
                  k.style.maxHeight = "100%";
                }
              } else if (window.scrollY > y) {
                var x = Math.max(v, S - (window.scrollY - (l - c)));
                L.style.height = x + "px";
                L.style.minHeight = x + "px";
                L.style.maxHeight = x + "px";
                if (b) {
                  b.style.maxHeight = x + "px";
                }
                if (k) {
                  k.style.maxHeight = x + "px";
                }
              }
            }
          }
          if (m === "true") {
            var E = Math.floor(l - c);
            var T = window.scrollY;
            var A = d.offsetHeight;
            var q = r - T;
            var M = window.getComputedStyle(d).getPropertyValue("transform").match(/(-?[0-9\.]+)/g);
            if (M && M[5] !== void 0 && M[5]) {
              var H = parseInt(M[5]) + q;
            } else {
              H = 0;
            }
            var O = T > r;
            if (T <= E) {
              d.style.transform = "translateY(0px)";
            } else if (O) {
              d.classList.add("item-hidden-above");
              d.style.transform = "translateY(" + (Math.abs(H) > A ? -A : H) + "px)";
            } else {
              E = Math.floor(l - c);
              d.style.transform = "translateY(" + (H > 0 ? 0 : H) + "px)";
              d.classList.remove("item-hidden-above");
            }
            r = T;
          } else {
            E = Math.floor(l - c);
          }
          if (window.scrollY == E) {
            d.style.top = c + "px";
            d.classList.add("item-is-fixed");
            d.classList.add("item-at-start");
            d.classList.remove("item-is-stuck");
            h.classList.add("child-is-fixed");
            document.body.classList.add("header-is-fixed");
          } else if (window.scrollY > E) {
            if (m === "true") {
              if (window.scrollY < A + 60 && d.classList.contains("item-at-start")) {
                d.style.height = null;
                d.style.top = c + "px";
                d.classList.add("item-is-fixed");
                d.classList.add("item-is-stuck");
                h.classList.add("child-is-fixed");
                document.body.classList.add("header-is-fixed");
              } else {
                d.style.top = c + "px";
                d.classList.add("item-is-fixed");
                d.classList.add("item-is-stuck");
                d.classList.remove("item-at-start");
                h.classList.add("child-is-fixed");
                document.body.classList.add("header-is-fixed");
              }
            } else {
              d.style.top = c + "px";
              d.classList.add("item-is-fixed");
              d.classList.remove("item-at-start");
              d.classList.add("item-is-stuck");
              h.classList.add("child-is-fixed");
              document.body.classList.add("header-is-fixed");
            }
          } else if (d.classList.contains("item-is-fixed")) {
            d.classList.remove("item-is-fixed");
            d.classList.remove("item-at-start");
            d.classList.remove("item-is-stuck");
            d.style.height = null;
            d.style.top = null;
            h.classList.remove("child-is-fixed");
            document.body.classList.remove("header-is-fixed");
          }
        }
      };
      if (e || t) {
        window.addEventListener("resize", u, false);
        window.addEventListener("scroll", u, false);
        window.addEventListener("load", u, false);
        window.addEventListener("orientationchange", u);
        if (document.readyState === "complete") {
          u("updateActive");
        }
        if (document.body.classList.contains("woocommerce-demo-store") && document.body.classList.contains("kadence-store-notice-placement-above")) {
          s = document.querySelector(".woocommerce-store-notice");
          d = e => {
            u("updateActive");
          };
          c = {root: document.documentElement};
          new IntersectionObserver((e, t) => {
            e.forEach(e => {
              d(e.intersectionRatio > 0);
            });
          }, c).observe(s);
        }
      }
    }, getTopOffset: function (e = "scroll") {
      if (e === "load") {
        var t = document.querySelector("#main-header .kadence-sticky-header");
        var o = document.querySelector("#mobile-header .kadence-sticky-header");
      } else {
        t = document.querySelector('#main-header .kadence-sticky-header:not([data-reveal-scroll-up="true"])');
        o = document.querySelector('#mobile-header .kadence-sticky-header:not([data-reveal-scroll-up="true"])');
      }
      var n = 0;
      var i = 0;
      if (kadenceConfig.breakPoints.desktop <= window.innerWidth) {
        if (t) {
          n = t.getAttribute("data-shrink") !== "true" || t.classList.contains("site-header-inner-wrap") ? Math.floor(t.offsetHeight) : Math.floor(t.getAttribute("data-shrink-height"));
        } else {
          n = 0;
        }
        if (document.body.classList.contains("admin-bar")) {
          i = 32;
        }
      } else {
        if (o) {
          n = o.getAttribute("data-shrink") === "true" ? Math.floor(o.getAttribute("data-shrink-height")) : Math.floor(o.offsetHeight);
        } else {
          n = 0;
        }
        if (document.body.classList.contains("admin-bar")) {
          i = 46;
        }
      }
      return Math.floor(n + i + Math.floor(kadenceConfig.scrollOffset));
    }, scrollToElement: function (e, t, o = "scroll") {
      t = t === void 0 || t;
      var n = window.kadence.getTopOffset(o);
      var i = Math.floor(e.getBoundingClientRect().top) - n;
      window.scrollBy({top: i, left: 0, behavior: "smooth"});
      e.tabIndex = "-1";
      e.focus({preventScroll: true});
      if (e.classList.contains("kt-title-item")) {
        e.firstElementChild.triggerEvent("click");
      }
      if (t) {
        window.history.pushState("", "", "#" + e.id);
      }
    }, anchorScrollToCheck: function (e, t) {
      t = t !== void 0 ? t : null;
      if (e.target.getAttribute("href")) {
        var o = e.target;
      } else {
        if (!(o = e.target.closest("a"))) {
          return;
        }
        if (!o.getAttribute("href")) {
          return;
        }
      }
      if (!o.parentNode || !o.parentNode.hasAttribute("role") || o.parentNode.getAttribute("role") !== "tab") {
        var n;
        n = t ? t.getAttribute("href").substring(t.getAttribute("href").indexOf("#")) : o.getAttribute("href").substring(o.getAttribute("href").indexOf("#"));
        var i = document.getElementById(n.replace("#", ""));
        if (i) {
          e.preventDefault();
          window.kadence.scrollToElement(i);
        }
      }
    }, initStickySidebarWidget: function () {
      if (document.body.classList.contains("has-sticky-sidebar-widget")) {
        var e = window.kadence.getTopOffset();
        var t = document.querySelector("#secondary .sidebar-inner-wrap .widget:last-child");
        if (t) {
          t.style.top = Math.floor(e + 20) + "px";
          t.style.maxHeight = "calc( 100vh - " + Math.floor(e + 20) + "px )";
        }
      }
    }, initStickySidebar: function () {
      if (document.body.classList.contains("has-sticky-sidebar")) {
        var e = window.kadence.getTopOffset();
        var t = document.querySelector("#secondary .sidebar-inner-wrap");
        if (t) {
          t.style.top = Math.floor(e + 20) + "px";
          t.style.maxHeight = "calc( 100vh - " + Math.floor(e + 20) + "px )";
        }
      }
    }, initAnchorScrollTo: function () {
      if (!document.body.classList.contains("no-anchor-scroll")) {
        window.onhashchange = function () {
          if (window.location.hash === "") {
            window.scrollTo({top: 0, behavior: "smooth"});
            document.activeElement.blur();
          }
        };
        if (window.location.hash != "") {
          var e;
          var t = location.hash.substring(1);
          if (!/^[A-z0-9_-]+$/.test(t)) {
            return;
          }
          if (e = document.getElementById(t)) {
            window.setTimeout(function () {
              window.kadence.scrollToElement(e, false, "load");
            }, 100);
          }
        }
        var o = document.querySelectorAll("a[href*=\\#]:not([href=\\#]):not(.scroll-ignore):not([data-tab]):not([data-toggle])");
        if (o.length) {
          o.forEach(function (e) {
            if (new URL(e.href).pathname === window.location.pathname) {
              e.addEventListener("click", function (e) {
                window.kadence.anchorScrollToCheck(e);
              });
            }
          });
        }
      }
    }, initScrollToTop: function () {
      var e = document.getElementById("kt-scroll-up");
      if (e) {
        var t = function () {
          if (window.scrollY > 100) {
            e.classList.add("scroll-visible");
          } else {
            e.classList.remove("scroll-visible");
          }
        };
        window.addEventListener("scroll", t);
        t();
        e.addEventListener("click", function (e) {
          e.preventDefault();
          window.scrollTo({top: 0, behavior: "smooth"});
          document.activeElement.blur();
        });
      }
      var o = document.getElementById("kt-scroll-up-reader");
      if (o) {
        o.addEventListener("click", function (e) {
          e.preventDefault();
          window.scrollTo({top: 0, behavior: "smooth"});
          document.querySelector(".skip-link").focus();
        });
      }
    }, init: function () {
      window.kadence.initNavToggleSubmenus();
      window.kadence.initToggleDrawer();
      window.kadence.initMobileToggleAnchor();
      window.kadence.initMobileToggleSub();
      window.kadence.initOutlineToggle();
      window.kadence.initStickyHeader();
      window.kadence.initStickySidebar();
      window.kadence.initStickySidebarWidget();
      window.kadence.initTransHeaderPadding();
      window.kadence.initAnchorScrollTo();
      window.kadence.initScrollToTop();
    }};
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", window.kadence.init);
    } else {
      window.kadence.init();
    }
  }());
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
