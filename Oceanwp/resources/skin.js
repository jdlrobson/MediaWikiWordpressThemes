// Disable module exporting in this context
module = undefined; exports = undefined;
window.oceanwpLocalize = {nonce: "", isRTL: false, menuSearchStyle: "drop_down", mobileMenuSearchStyle: "disabled", sidrSource: null, sidrDisplace: true, sidrSide: "left", sidrDropdownTarget: "link", verticalHeaderTarget: "link", customSelects: ".woocommerce-ordering .orderby, #dropdown_product_cat, .widget_categories select, .widget_archive select, .single-product .variations_form .variations select"};
window.oceanwpLocalize = {nonce: "", isRTL: false, menuSearchStyle: "drop_down", mobileMenuSearchStyle: "disabled", sidrSource: null, sidrDisplace: true, sidrSide: "left", sidrDropdownTarget: "link", verticalHeaderTarget: "link", customSelects: ".woocommerce-ordering .orderby, #dropdown_product_cat, .widget_categories select, .widget_archive select, .single-product .variations_form .variations select"};
(function () {
  (function () {
    var t = window;
    var e = function (t, e) {
      "use strict";
      function i(i, s, a) {
        function u(t, e, o) {
          var n;
          var s = "$()." + i + '("' + e + '")';
          t.each(function (t, u) {
            var h = a.data(u, i);
            if (!h) {
              r(i + " not initialized. Cannot call methods, i.e. " + s);
              return;
            }
            var d = h[e];
            if (!d || e.charAt(0) == "_") {
              r(s + " is not a valid method");
              return;
            }
            var l = d.apply(h, o);
            n = n === void 0 ? l : n;
          });
          if (n === void 0) {
            return t;
          } else {
            return n;
          }
        }
        function h(t, e) {
          t.each(function (t, o) {
            var n = a.data(o, i);
            if (n) {
              n.option(e);
              n._init();
            } else {
              n = new s(o, e);
              a.data(o, i, n);
            }
          });
        }
        a = a || e || t.jQuery;
        if (a) {
          if (!s.prototype.option) {
            s.prototype.option = function (t) {
              if (a.isPlainObject(t)) {
                this.options = a.extend(true, this.options, t);
              }
            };
          }
          a.fn[i] = function (t) {
            if (typeof t == "string") {
              var e = n.call(arguments, 1);
              return u(this, t, e);
            }
            h(this, t);
            return this;
          };
          o(a);
        }
      }
      function o(t) {
        if (!!t && (!t || !t.bridget)) {
          t.bridget = i;
        }
      }
      var n = Array.prototype.slice;
      var s = t.console;
      var r = typeof s == "undefined" ? function () {} : function (t) {
        s.error(t);
      };
      o(e || t.jQuery);
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(t, require("jquery"));
    } else {
      t.jQueryBridget = e(t, t.jQuery);
    }
  }());
  (function () {
    var t = typeof window != "undefined" ? window : this;
    var e = function () {
      function t() {}
      var e = t.prototype;
      e.on = function (t, e) {
        if (t && e) {
          var i = this._events = this._events || {};
          var o = i[t] = i[t] || [];
          if (o.indexOf(e) == -1) {
            o.push(e);
          }
          return this;
        }
      };
      e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = this._onceEvents = this._onceEvents || {};
          var o = i[t] = i[t] || {};
          o[e] = true;
          return this;
        }
      };
      e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          if (o != -1) {
            i.splice(o, 1);
          }
          return this;
        }
      };
      e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          i = i.slice(0);
          e = e || [];
          var o = this._onceEvents && this._onceEvents[t];
          for (var n = 0; n < i.length; n++) {
            var s = i[n];
            var r = o && o[s];
            if (r) {
              this.off(t, s);
              delete o[s];
            }
            s.apply(this, e);
          }
          return this;
        }
      };
      e.allOff = function () {
        delete this._events;
        delete this._onceEvents;
      };
      return t;
    };
    if (typeof define == "function" && define.amd) {
      define("ev-emitter/ev-emitter", e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e();
    } else {
      t.EvEmitter = e();
    }
  }());
  (function () {
    var t = window;
    var e = function () {
      "use strict";
      function t(t) {
        var e = parseFloat(t);
        var i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e;
      }
      function e() {}
      function i() {
        var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0};
        for (var e = 0; e < h; e++) {
          var i = u[e];
          t[i] = 0;
        }
        return t;
      }
      function o(t) {
        var e = getComputedStyle(t);
        if (!e) {
          a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1");
        }
        return e;
      }
      function n() {
        if (!d) {
          d = true;
          var e = document.createElement("div");
          e.style.width = "200px";
          e.style.padding = "1px 2px 3px 4px";
          e.style.borderStyle = "solid";
          e.style.borderWidth = "1px 2px 3px 4px";
          e.style.boxSizing = "border-box";
          var i = document.body || document.documentElement;
          i.appendChild(e);
          var n = o(e);
          r = Math.round(t(n.width)) == 200;
          s.isBoxSizeOuter = r;
          i.removeChild(e);
        }
      }
      function s(e) {
        n();
        if (typeof e == "string") {
          e = document.querySelector(e);
        }
        if (e && typeof e == "object" && e.nodeType) {
          var s = o(e);
          if (s.display == "none") {
            return i();
          }
          var a = {};
          a.width = e.offsetWidth;
          a.height = e.offsetHeight;
          var d = a.isBorderBox = s.boxSizing == "border-box";
          for (var l = 0; l < h; l++) {
            var f = u[l];
            var c = s[f];
            var m = parseFloat(c);
            a[f] = isNaN(m) ? 0 : m;
          }
          var p = a.paddingLeft + a.paddingRight;
          var y = a.paddingTop + a.paddingBottom;
          var g = a.marginLeft + a.marginRight;
          var v = a.marginTop + a.marginBottom;
          var _ = a.borderLeftWidth + a.borderRightWidth;
          var z = a.borderTopWidth + a.borderBottomWidth;
          var I = d && r;
          var x = t(s.width);
          if (x !== false) {
            a.width = x + (I ? 0 : p + _);
          }
          var S = t(s.height);
          if (S !== false) {
            a.height = S + (I ? 0 : y + z);
          }
          a.innerWidth = a.width - (p + _);
          a.innerHeight = a.height - (y + z);
          a.outerWidth = a.width + g;
          a.outerHeight = a.height + v;
          return a;
        }
      }
      var r;
      var a = typeof console == "undefined" ? e : function (t) {
        console.error(t);
      };
      var u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
      var h = u.length;
      var d = false;
      return s;
    };
    if (typeof define == "function" && define.amd) {
      define("get-size/get-size", e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e();
    } else {
      t.getSize = e();
    }
  }());
  (function () {
    var t = window;
    var e = function () {
      "use strict";
      var t = function () {
        var t = window.Element.prototype;
        if (t.matches) {
          return "matches";
        }
        if (t.matchesSelector) {
          return "matchesSelector";
        }
        var e = ["webkit", "moz", "ms", "o"];
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          var n = o + "MatchesSelector";
          if (t[n]) {
            return n;
          }
        }
      }();
      return function (e, i) {
        return e[t](i);
      };
    };
    if (typeof define == "function" && define.amd) {
      define("desandro-matches-selector/matches-selector", e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e();
    } else {
      t.matchesSelector = e();
    }
  }());
  (function () {
    var t = window;
    var e = function (t, e) {
      var i = {};
      i.extend = function (t, e) {
        for (var i in e) {
          t[i] = e[i];
        }
        return t;
      };
      i.modulo = function (t, e) {
        return (t % e + e) % e;
      };
      var o = Array.prototype.slice;
      i.makeArray = function (t) {
        if (Array.isArray(t)) {
          return t;
        }
        if (t === null || t === void 0) {
          return [];
        }
        var e = typeof t == "object" && typeof t.length == "number";
        if (e) {
          return o.call(t);
        } else {
          return [t];
        }
      };
      i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        if (i != -1) {
          t.splice(i, 1);
        }
      };
      i.getParent = function (t, i) {
        while (t.parentNode && t != document.body) {
          t = t.parentNode;
          if (e(t, i)) {
            return t;
          }
        }
      };
      i.getQueryElement = function (t) {
        if (typeof t == "string") {
          return document.querySelector(t);
        } else {
          return t;
        }
      };
      i.handleEvent = function (t) {
        var e = "on" + t.type;
        if (this[e]) {
          this[e](t);
        }
      };
      i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        t.forEach(function (t) {
          if (t instanceof HTMLElement) {
            if (!o) {
              n.push(t);
              return;
            }
            if (e(t, o)) {
              n.push(t);
            }
            var i = t.querySelectorAll(o);
            for (var s = 0; s < i.length; s++) {
              n.push(i[s]);
            }
          }
        });
        return n;
      };
      i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e];
        var n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments;
          var s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e);
            delete s[n];
          }, i);
        };
      };
      i.docReady = function (t) {
        var e = document.readyState;
        if (e == "complete" || e == "interactive") {
          setTimeout(t);
        } else {
          document.addEventListener("DOMContentLoaded", t);
        }
      };
      i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
          return e + "-" + i;
        }).toLowerCase();
      };
      var n = t.console;
      i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o);
          var r = "data-" + s;
          var a = document.querySelectorAll("[" + r + "]");
          var u = document.querySelectorAll(".js-" + s);
          var h = i.makeArray(a).concat(i.makeArray(u));
          var d = r + "-options";
          var l = t.jQuery;
          h.forEach(function (t) {
            var i;
            var s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              if (n) {
                n.error("Error parsing " + r + " on " + t.className + ": " + a);
              }
              return;
            }
            var u = new e(t, i);
            if (l) {
              l.data(t, o, u);
            }
          });
        });
      };
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(t, require("desandro-matches-selector"));
    } else {
      t.fizzyUIUtils = e(t, t.matchesSelector);
    }
  }());
  (function () {
    var t = window;
    var e = function (t, e) {
      "use strict";
      function i(t) {
        for (var e in t) {
          return false;
        }
        e = null;
        return true;
      }
      function o(t, e) {
        if (t) {
          this.element = t;
          this.layout = e;
          this.position = {x: 0, y: 0};
          this._create();
        }
      }
      function n(t) {
        return t.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      }
      var s = document.documentElement.style;
      var r = typeof s.transition == "string" ? "transition" : "WebkitTransition";
      var a = typeof s.transform == "string" ? "transform" : "WebkitTransform";
      var u = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r];
      var h = {transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay"};
      var d = o.prototype = Object.create(t.prototype);
      d.constructor = o;
      d._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}};
        this.css({position: "absolute"});
      };
      d.handleEvent = function (t) {
        var e = "on" + t.type;
        if (this[e]) {
          this[e](t);
        }
      };
      d.getSize = function () {
        this.size = e(this.element);
      };
      d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      };
      d.getPosition = function () {
        var t = getComputedStyle(this.element);
        var e = this.layout._getOption("originLeft");
        var i = this.layout._getOption("originTop");
        var o = t[e ? "left" : "right"];
        var n = t[i ? "top" : "bottom"];
        var s = parseFloat(o);
        var r = parseFloat(n);
        var a = this.layout.size;
        if (o.indexOf("%") != -1) {
          s = s / 100 * a.width;
        }
        if (n.indexOf("%") != -1) {
          r = r / 100 * a.height;
        }
        s = isNaN(s) ? 0 : s;
        r = isNaN(r) ? 0 : r;
        s -= e ? a.paddingLeft : a.paddingRight;
        r -= i ? a.paddingTop : a.paddingBottom;
        this.position.x = s;
        this.position.y = r;
      };
      d.layoutPosition = function () {
        var t = this.layout.size;
        var e = {};
        var i = this.layout._getOption("originLeft");
        var o = this.layout._getOption("originTop");
        var n = i ? "paddingLeft" : "paddingRight";
        var s = i ? "left" : "right";
        var r = i ? "right" : "left";
        var a = this.position.x + t[n];
        e[s] = this.getXValue(a);
        e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom";
        var h = o ? "top" : "bottom";
        var d = o ? "bottom" : "top";
        var l = this.position.y + t[u];
        e[h] = this.getYValue(l);
        e[d] = "";
        this.css(e);
        this.emitEvent("layout", [this]);
      };
      d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        if (this.layout.options.percentPosition && !e) {
          return t / this.layout.size.width * 100 + "%";
        } else {
          return t + "px";
        }
      };
      d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        if (this.layout.options.percentPosition && e) {
          return t / this.layout.size.height * 100 + "%";
        } else {
          return t + "px";
        }
      };
      d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x;
        var o = this.position.y;
        var n = t == this.position.x && e == this.position.y;
        this.setPosition(t, e);
        if (n && !this.isTransitioning) {
          this.layoutPosition();
          return;
        }
        var s = t - i;
        var r = e - o;
        var a = {};
        a.transform = this.getTranslate(s, r);
        this.transition({to: a, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: true});
      };
      d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft");
        var o = this.layout._getOption("originTop");
        t = i ? t : -t;
        e = o ? e : -e;
        return "translate3d(" + t + "px, " + e + "px, 0)";
      };
      d.goTo = function (t, e) {
        this.setPosition(t, e);
        this.layoutPosition();
      };
      d.moveTo = d._transitionTo;
      d.setPosition = function (t, e) {
        this.position.x = parseFloat(t);
        this.position.y = parseFloat(e);
      };
      d._nonTransition = function (t) {
        this.css(t.to);
        if (t.isCleaning) {
          this._removeStyles(t.to);
        }
        for (var e in t.onTransitionEnd) {
          t.onTransitionEnd[e].call(this);
        }
      };
      d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
          this._nonTransition(t);
          return;
        }
        var e = this._transn;
        for (var i in t.onTransitionEnd) {
          e.onEnd[i] = t.onTransitionEnd[i];
        }
        for (i in t.to) {
          e.ingProperties[i] = true;
          if (t.isCleaning) {
            e.clean[i] = true;
          }
        }
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to);
        this.css(t.to);
        this.isTransitioning = true;
      };
      var l = "opacity," + n(a);
      d.enableTransition = function () {
        if (!this.isTransitioning) {
          var t = this.layout.options.transitionDuration;
          t = typeof t == "number" ? t + "ms" : t;
          this.css({transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0});
          this.element.addEventListener(u, this, false);
        }
      };
      d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      };
      d.onotransitionend = function (t) {
        this.ontransitionend(t);
      };
      var f = {"-webkit-transform": "transform"};
      d.ontransitionend = function (t) {
        if (t.target === this.element) {
          var e = this._transn;
          var o = f[t.propertyName] || t.propertyName;
          delete e.ingProperties[o];
          if (i(e.ingProperties)) {
            this.disableTransition();
          }
          if (o in e.clean) {
            this.element.style[t.propertyName] = "";
            delete e.clean[o];
          }
          if (o in e.onEnd) {
            var n = e.onEnd[o];
            n.call(this);
            delete e.onEnd[o];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      };
      d.disableTransition = function () {
        this.removeTransitionStyles();
        this.element.removeEventListener(u, this, false);
        this.isTransitioning = false;
      };
      d._removeStyles = function (t) {
        var e = {};
        for (var i in t) {
          e[i] = "";
        }
        this.css(e);
      };
      var c = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
      d.removeTransitionStyles = function () {
        this.css(c);
      };
      d.stagger = function (t) {
        t = isNaN(t) ? 0 : t;
        this.staggerDelay = t + "ms";
      };
      d.removeElem = function () {
        this.element.parentNode.removeChild(this.element);
        this.css({display: ""});
        this.emitEvent("remove", [this]);
      };
      d.remove = function () {
        if (r && parseFloat(this.layout.options.transitionDuration)) {
          this.once("transitionEnd", function () {
            this.removeElem();
          });
          this.hide();
          return;
        } else {
          this.removeElem();
          return;
        }
      };
      d.reveal = function () {
        delete this.isHidden;
        this.css({display: ""});
        var t = this.layout.options;
        var e = {};
        var i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd;
        this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: true, onTransitionEnd: e});
      };
      d.onRevealTransitionEnd = function () {
        if (!this.isHidden) {
          this.emitEvent("reveal");
        }
      };
      d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) {
          return "opacity";
        }
        for (var i in e) {
          return i;
        }
      };
      d.hide = function () {
        this.isHidden = true;
        this.css({display: ""});
        var t = this.layout.options;
        var e = {};
        var i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd;
        this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: true, onTransitionEnd: e});
      };
      d.onHideTransitionEnd = function () {
        if (this.isHidden) {
          this.css({display: "none"});
          this.emitEvent("hide");
        }
      };
      d.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""});
      };
      return o;
    };
    if (typeof define == "function" && define.amd) {
      define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(require("ev-emitter"), require("get-size"));
    } else {
      t.Outlayer = {};
      t.Outlayer.Item = e(t.EvEmitter, t.getSize);
    }
  }());
  (function () {
    var t = window;
    var e = function (t, e, i, o, n) {
      "use strict";
      function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) {
          if (u) {
            u.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
          }
          return;
        }
        this.element = i;
        if (h) {
          this.$element = h(this.element);
        }
        this.options = o.extend({}, this.constructor.defaults);
        this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n;
        f[n] = this;
        this._create();
        var s = this._getOption("initLayout");
        if (s) {
          this.layout();
        }
      }
      function r(t) {
        function e() {
          t.apply(this, arguments);
        }
        e.prototype = Object.create(t.prototype);
        e.prototype.constructor = e;
        return e;
      }
      function a(t) {
        if (typeof t == "number") {
          return t;
        }
        var e = t.match(/(^\d*\.?\d*)(\w*)/);
        var i = e && e[1];
        var o = e && e[2];
        if (!i.length) {
          return 0;
        }
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n;
      }
      var u = t.console;
      var h = t.jQuery;
      var d = function () {};
      var l = 0;
      var f = {};
      s.namespace = "outlayer";
      s.Item = n;
      s.defaults = {containerStyle: {position: "relative"}, initLayout: true, originLeft: true, originTop: true, resize: true, resizeContainer: true, transitionDuration: "0.4s", hiddenStyle: {opacity: 0, transform: "scale(0.001)"}, visibleStyle: {opacity: 1, transform: "scale(1)"}};
      var c = s.prototype;
      o.extend(c, e.prototype);
      c.option = function (t) {
        o.extend(this.options, t);
      };
      c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        if (e && this.options[e] !== void 0) {
          return this.options[e];
        } else {
          return this.options[t];
        }
      };
      s.compatOptions = {initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer"};
      c._create = function () {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        if (t) {
          this.bindResize();
        }
      };
      c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      };
      c._itemize = function (t) {
        var e = this._filterFindItemElements(t);
        var i = this.constructor.Item;
        var o = [];
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          var r = new i(s, this);
          o.push(r);
        }
        return o;
      };
      c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      };
      c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      };
      c.layout = function () {
        this._resetLayout();
        this._manageStamps();
        var t = this._getOption("layoutInstant");
        var e = t !== void 0 ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e);
        this._isLayoutInited = true;
      };
      c._init = c.layout;
      c._resetLayout = function () {
        this.getSize();
      };
      c.getSize = function () {
        this.size = i(this.element);
      };
      c._getMeasurement = function (t, e) {
        var o;
        var n = this.options[t];
        if (n) {
          if (typeof n == "string") {
            o = this.element.querySelector(n);
          } else if (n instanceof HTMLElement) {
            o = n;
          }
          this[t] = o ? i(o)[e] : n;
        } else {
          this[t] = 0;
        }
      };
      c.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t);
        this._layoutItems(t, e);
        this._postLayout();
      };
      c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      };
      c._layoutItems = function (t, e) {
        this._emitCompleteOnItems("layout", t);
        if (t && t.length) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            o.item = t;
            o.isInstant = e || t.isLayoutInstant;
            i.push(o);
          }, this);
          this._processLayoutQueue(i);
        }
      };
      c._getItemLayoutPosition = function () {
        return {x: 0, y: 0};
      };
      c._processLayoutQueue = function (t) {
        this.updateStagger();
        t.forEach(function (t, e) {
          this._positionItem(t.item, t.x, t.y, t.isInstant, e);
        }, this);
      };
      c.updateStagger = function () {
        var t = this.options.stagger;
        if (t === null || t === void 0) {
          this.stagger = 0;
          return;
        } else {
          this.stagger = a(t);
          return this.stagger;
        }
      };
      c._positionItem = function (t, e, i, o, n) {
        if (o) {
          t.goTo(e, i);
        } else {
          t.stagger(n * this.stagger);
          t.moveTo(e, i);
        }
      };
      c._postLayout = function () {
        this.resizeContainer();
      };
      c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          if (e) {
            this._setContainerMeasure(e.width, true);
            this._setContainerMeasure(e.height, false);
          }
        }
      };
      c._getContainerSize = d;
      c._setContainerMeasure = function (t, e) {
        if (t !== void 0) {
          var i = this.size;
          if (i.isBorderBox) {
            t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth;
          }
          t = Math.max(t, 0);
          this.element.style[e ? "width" : "height"] = t + "px";
        }
      };
      c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++;
          if (r == s) {
            i();
          }
        }
        var n = this;
        var s = e.length;
        if (!e || !s) {
          i();
          return;
        }
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      };
      c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        this.emitEvent(t, o);
        if (h) {
          this.$element = this.$element || h(this.element);
          if (e) {
            var n = h.Event(e);
            n.type = t;
            this.$element.trigger(n, i);
          } else {
            this.$element.trigger(t, i);
          }
        }
      };
      c.ignore = function (t) {
        var e = this.getItem(t);
        if (e) {
          e.isIgnored = true;
        }
      };
      c.unignore = function (t) {
        var e = this.getItem(t);
        if (e) {
          delete e.isIgnored;
        }
      };
      c.stamp = function (t) {
        t = this._find(t);
        if (t) {
          this.stamps = this.stamps.concat(t);
          t.forEach(this.ignore, this);
        }
      };
      c.unstamp = function (t) {
        t = this._find(t);
        if (t) {
          t.forEach(function (t) {
            o.removeFrom(this.stamps, t);
            this.unignore(t);
          }, this);
        }
      };
      c._find = function (t) {
        if (t) {
          if (typeof t == "string") {
            t = this.element.querySelectorAll(t);
          }
          return t = o.makeArray(t);
        }
      };
      c._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
          this._getBoundingRect();
          this.stamps.forEach(this._manageStamp, this);
        }
      };
      c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect();
        var e = this.size;
        this._boundingRect = {left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)};
      };
      c._manageStamp = d;
      c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect();
        var o = this._boundingRect;
        var n = i(t);
        var s = {left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom};
        return s;
      };
      c.handleEvent = o.handleEvent;
      c.bindResize = function () {
        t.addEventListener("resize", this);
        this.isResizeBound = true;
      };
      c.unbindResize = function () {
        t.removeEventListener("resize", this);
        this.isResizeBound = false;
      };
      c.onresize = function () {
        this.resize();
      };
      o.debounceMethod(s, "onresize", 100);
      c.resize = function () {
        if (this.isResizeBound && this.needsResizeLayout()) {
          this.layout();
        }
      };
      c.needsResizeLayout = function () {
        var t = i(this.element);
        var e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      };
      c.addItems = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this.items = this.items.concat(e);
        }
        return e;
      };
      c.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          this.layoutItems(e, true);
          this.reveal(e);
        }
      };
      c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          this.items = e.concat(i);
          this._resetLayout();
          this._manageStamps();
          this.layoutItems(e, true);
          this.reveal(e);
          this.layoutItems(i);
        }
      };
      c.reveal = function (t) {
        this._emitCompleteOnItems("reveal", t);
        if (t && t.length) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e);
            t.reveal();
          });
        }
      };
      c.hide = function (t) {
        this._emitCompleteOnItems("hide", t);
        if (t && t.length) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e);
            t.hide();
          });
        }
      };
      c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      };
      c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      };
      c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) {
            return i;
          }
        }
      };
      c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        t.forEach(function (t) {
          var i = this.getItem(t);
          if (i) {
            e.push(i);
          }
        }, this);
        return e;
      };
      c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e);
        if (e && e.length) {
          e.forEach(function (t) {
            t.remove();
            o.removeFrom(this.items, t);
          }, this);
        }
      };
      c.destroy = function () {
        var t = this.element.style;
        t.height = "";
        t.position = "";
        t.width = "";
        this.items.forEach(function (t) {
          t.destroy();
        });
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e];
        delete this.element.outlayerGUID;
        if (h) {
          h.removeData(this.element, this.constructor.namespace);
        }
      };
      s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      };
      s.create = function (t, e) {
        var i = r(s);
        i.defaults = o.extend({}, s.defaults);
        o.extend(i.defaults, e);
        i.compatOptions = o.extend({}, s.compatOptions);
        i.namespace = t;
        i.data = s.data;
        i.Item = r(n);
        o.htmlInit(i, t);
        if (h && h.bridget) {
          h.bridget(t, i);
        }
        return i;
      };
      var m = {ms: 1, s: 1e3};
      s.Item = n;
      return s;
    };
    if (typeof define == "function" && define.amd) {
      define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
        return e(t, i, o, n, s);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"));
    } else {
      t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
    }
  }());
  (function () {
    var t = window;
    var e = function (t) {
      "use strict";
      function e() {
        t.Item.apply(this, arguments);
      }
      var i = e.prototype = Object.create(t.Item.prototype);
      var o = i._create;
      i._create = function () {
        this.id = this.layout.itemGUID++;
        o.call(this);
        this.sortData = {};
      };
      i.updateSortData = function () {
        if (!this.isIgnored) {
          this.sortData.id = this.id;
          this.sortData["original-order"] = this.id;
          this.sortData.random = Math.random();
          var t = this.layout.options.getSortData;
          var e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      };
      var n = i.destroy;
      i.destroy = function () {
        n.apply(this, arguments);
        this.css({display: ""});
      };
      return e;
    };
    if (typeof define == "function" && define.amd) {
      define("isotope-layout/js/item", ["outlayer/outlayer"], e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(require("outlayer"));
    } else {
      t.Isotope = t.Isotope || {};
      t.Isotope.Item = e(t.Outlayer);
    }
  }());
  (function () {
    var t = window;
    var e = function (t, e) {
      "use strict";
      function i(t) {
        this.isotope = t;
        if (t) {
          this.options = t.options[this.namespace];
          this.element = t.element;
          this.items = t.filteredItems;
          this.size = t.size;
        }
      }
      var o = i.prototype;
      var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      });
      o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        var i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      };
      o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      };
      o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      };
      o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      };
      o.getSegmentSize = function (t, e) {
        var i = t + e;
        var o = "outer" + e;
        this._getMeasurement(i, o);
        if (!this[i]) {
          var n = this.getFirstItemSize();
          this[i] = n && n[o] || this.isotope.size["inner" + e];
        }
      };
      o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      };
      o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      };
      o.getSize = function () {
        this.isotope.getSize();
        this.size = this.isotope.size;
      };
      i.modes = {};
      i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        n.prototype = Object.create(o);
        n.prototype.constructor = n;
        if (e) {
          n.options = e;
        }
        n.prototype.namespace = t;
        i.modes[t] = n;
        return n;
      };
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(require("get-size"), require("outlayer"));
    } else {
      t.Isotope = t.Isotope || {};
      t.Isotope.LayoutMode = e(t.getSize, t.Outlayer);
    }
  }());
  (function () {
    var t = window;
    var e = function (t, e) {
      var i = t.create("masonry");
      i.compatOptions.fitWidth = "isFitWidth";
      var o = i.prototype;
      o._resetLayout = function () {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        this.colYs = [];
        for (var t = 0; t < this.cols; t++) {
          this.colYs.push(0);
        }
        this.maxY = 0;
        this.horizontalColIndex = 0;
      };
      o.measureColumns = function () {
        this.getContainerWidth();
        if (!this.columnWidth) {
          var t = this.items[0];
          var i = t && t.element;
          this.columnWidth = i && e(i).outerWidth || this.containerWidth;
        }
        var o = this.columnWidth += this.gutter;
        var n = this.containerWidth + this.gutter;
        var s = n / o;
        var r = o - n % o;
        var a = r && r < 1 ? "round" : "floor";
        s = Math[a](s);
        this.cols = Math.max(s, 1);
      };
      o.getContainerWidth = function () {
        var t = this._getOption("fitWidth");
        var i = t ? this.element.parentNode : this.element;
        var o = e(i);
        this.containerWidth = o && o.innerWidth;
      };
      o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth;
        var i = e && e < 1 ? "round" : "ceil";
        var o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition";
        var s = this[n](o, t);
        var r = {x: this.columnWidth * s.col, y: s.y};
        var a = s.y + t.size.outerHeight;
        var u = o + s.col;
        for (var h = s.col; h < u; h++) {
          this.colYs[h] = a;
        }
        return r;
      };
      o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t);
        var i = Math.min.apply(Math, e);
        return {col: e.indexOf(i), y: i};
      };
      o._getTopColGroup = function (t) {
        if (t < 2) {
          return this.colYs;
        }
        var e = [];
        var i = this.cols + 1 - t;
        for (var o = 0; o < i; o++) {
          e[o] = this._getColGroupY(o, t);
        }
        return e;
      };
      o._getColGroupY = function (t, e) {
        if (e < 2) {
          return this.colYs[t];
        }
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      };
      o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols;
        var o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        this.horizontalColIndex = n ? i + t : this.horizontalColIndex;
        return {col: i, y: this._getColGroupY(i, t)};
      };
      o._manageStamp = function (t) {
        var i = e(t);
        var o = this._getElementOffset(t);
        var n = this._getOption("originLeft");
        var s = n ? o.left : o.right;
        var r = s + i.outerWidth;
        var a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1;
        u = Math.min(this.cols - 1, u);
        var h = this._getOption("originTop");
        var d = (h ? o.top : o.bottom) + i.outerHeight;
        for (var l = a; l <= u; l++) {
          this.colYs[l] = Math.max(d, this.colYs[l]);
        }
      };
      o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        if (this._getOption("fitWidth")) {
          t.width = this._getContainerFitWidth();
        }
        return t;
      };
      o._getContainerFitWidth = function () {
        var t = 0;
        for (var e = this.cols; --e && this.colYs[e] === 0;) {
          t++;
        }
        return (this.cols - t) * this.columnWidth - this.gutter;
      };
      o.needsResizeLayout = function () {
        var t = this.containerWidth;
        this.getContainerWidth();
        return t != this.containerWidth;
      };
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(require("outlayer"), require("get-size"));
    } else {
      t.Masonry = e(t.Outlayer, t.getSize);
    }
  }());
  (function () {
    var t = window;
    var e = function (t, e) {
      "use strict";
      var i = t.create("masonry");
      var o = i.prototype;
      var n = {_getElementOffset: true, layout: true, _getMeasurement: true};
      for (var s in e.prototype) {
        if (!n[s]) {
          o[s] = e.prototype[s];
        }
      }
      var r = o.measureColumns;
      o.measureColumns = function () {
        this.items = this.isotope.filteredItems;
        r.call(this);
      };
      var a = o._getOption;
      o._getOption = function (t) {
        if (t == "fitWidth") {
          if (this.options.isFitWidth === void 0) {
            return this.options.fitWidth;
          } else {
            return this.options.isFitWidth;
          }
        } else {
          return a.apply(this.isotope, arguments);
        }
      };
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(require("../layout-mode"), require("masonry-layout"));
    } else {
      e(t.Isotope.LayoutMode, t.Masonry);
    }
  }());
  (function () {
    var t = window;
    var e = function (t) {
      "use strict";
      var e = t.create("fitRows");
      var i = e.prototype;
      i._resetLayout = function () {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement("gutter", "outerWidth");
      };
      i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter;
        var i = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && e + this.x > i) {
          this.x = 0;
          this.y = this.maxY;
        }
        var o = {x: this.x, y: this.y};
        this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight);
        this.x += e;
        return o;
      };
      i._getContainerSize = function () {
        return {height: this.maxY};
      };
      return e;
    };
    if (typeof define == "function" && define.amd) {
      define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e);
    } else if (typeof exports == "object") {
      module.exports = e(require("../layout-mode"));
    } else {
      e(t.Isotope.LayoutMode);
    }
  }());
  (function () {
    var t = window;
    var e = function (t) {
      "use strict";
      var e = t.create("vertical", {horizontalAlignment: 0});
      var i = e.prototype;
      i._resetLayout = function () {
        this.y = 0;
      };
      i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment;
        var i = this.y;
        this.y += t.size.outerHeight;
        return {x: e, y: i};
      };
      i._getContainerSize = function () {
        return {height: this.y};
      };
      return e;
    };
    if (typeof define == "function" && define.amd) {
      define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(require("../layout-mode"));
    } else {
      e(t.Isotope.LayoutMode);
    }
  }());
  (function () {
    var t = window;
    var e = function (t, e, i, o, n, s, r) {
      function a(t, e) {
        return function (i, o) {
          for (var n = 0; n < t.length; n++) {
            var s = t[n];
            var r = i.sortData[s];
            var a = o.sortData[s];
            if (r > a || r < a) {
              var u = e[s] !== void 0 ? e[s] : e;
              var h = u ? 1 : -1;
              return (r > a ? 1 : -1) * h;
            }
          }
          return 0;
        };
      }
      var u = t.jQuery;
      var h = String.prototype.trim ? function (t) {
        return t.trim();
      } : function (t) {
        return t.replace(/^\s+|\s+$/g, "");
      };
      var d = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: true, sortAscending: true});
      d.Item = s;
      d.LayoutMode = r;
      var l = d.prototype;
      l._create = function () {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        e.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ["original-order"];
        for (var t in r.modes) {
          this._initLayoutMode(t);
        }
      };
      l.reloadItems = function () {
        this.itemGUID = 0;
        e.prototype.reloadItems.call(this);
      };
      l._itemize = function () {
        var t = e.prototype._itemize.apply(this, arguments);
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        this._updateItemsSortData(t);
        return t;
      };
      l._initLayoutMode = function (t) {
        var e = r.modes[t];
        var i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i;
        this.modes[t] = new e(this);
      };
      l.layout = function () {
        if (!this._isLayoutInited && this._getOption("initLayout")) {
          this.arrange();
          return;
        } else {
          this._layout();
          return;
        }
      };
      l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, t);
        this._isLayoutInited = true;
      };
      l.arrange = function (t) {
        this.option(t);
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches;
        this._bindArrangeComplete();
        if (this._isInstant) {
          this._noTransition(this._hideReveal, [e]);
        } else {
          this._hideReveal(e);
        }
        this._sort();
        this._layout();
      };
      l._init = l.arrange;
      l._hideReveal = function (t) {
        this.reveal(t.needReveal);
        this.hide(t.needHide);
      };
      l._getIsInstant = function () {
        var t = this._getOption("layoutInstant");
        var e = t !== void 0 ? t : !this._isLayoutInited;
        this._isInstant = e;
        return e;
      };
      l._bindArrangeComplete = function () {
        function t() {
          if (e && i && o) {
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
          }
        }
        var e;
        var i;
        var o;
        var n = this;
        this.once("layoutComplete", function () {
          e = true;
          t();
        });
        this.once("hideComplete", function () {
          i = true;
          t();
        });
        this.once("revealComplete", function () {
          o = true;
          t();
        });
      };
      l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        var i = [];
        var o = [];
        var n = [];
        var s = this._getFilterTest(e);
        for (var r = 0; r < t.length; r++) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            if (u) {
              i.push(a);
            }
            if (u && a.isHidden) {
              o.push(a);
            } else if (!u && !a.isHidden) {
              n.push(a);
            }
          }
        }
        return {matches: i, needReveal: o, needHide: n};
      };
      l._getFilterTest = function (t) {
        if (u && this.options.isJQueryFiltering) {
          return function (e) {
            return u(e.element).is(t);
          };
        } else if (typeof t == "function") {
          return function (e) {
            return t(e.element);
          };
        } else {
          return function (e) {
            return o(e.element, t);
          };
        }
      };
      l.updateSortData = function (t) {
        var e;
        if (t) {
          t = n.makeArray(t);
          e = this.getItems(t);
        } else {
          e = this.items;
        }
        this._getSorters();
        this._updateItemsSortData(e);
      };
      l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      };
      l._updateItemsSortData = function (t) {
        var e = t && t.length;
        for (var i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      };
      var f = function () {
        function t(t) {
          if (typeof t != "string") {
            return t;
          }
          var i = h(t).split(" ");
          var o = i[0];
          var n = o.match(/^\[(.+)\]$/);
          var s = n && n[1];
          var r = e(s, o);
          var a = d.sortDataParsers[i[1]];
          return t = a ? function (t) {
            return t && a(r(t));
          } : function (t) {
            return t && r(t);
          };
        }
        function e(t, e) {
          if (t) {
            return function (e) {
              return e.getAttribute(t);
            };
          } else {
            return function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
          }
        }
        return t;
      }();
      d.sortDataParsers = {parseInt: function (t) {
        return parseInt(t, 10);
      }, parseFloat: function (t) {
        return parseFloat(t);
      }};
      l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          if (!this._getIsSameSortBy(t)) {
            this.sortHistory = t.concat(this.sortHistory);
          }
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      };
      l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++) {
          if (t[e] != this.sortHistory[e]) {
            return false;
          }
        }
        return true;
      };
      l._mode = function () {
        var t = this.options.layoutMode;
        var e = this.modes[t];
        if (!e) {
          throw new Error("No layout mode: " + t);
        }
        e.options = this.options[t];
        return e;
      };
      l._resetLayout = function () {
        e.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
      };
      l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      };
      l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      };
      l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      };
      l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      };
      l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      };
      l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout();
          this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems);
          this.filteredItems = i.concat(this.filteredItems);
          this.items = e.concat(this.items);
        }
      };
      l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        this.hide(e.needHide);
        this.reveal(e.matches);
        this.layoutItems(e.matches, true);
        return e.matches;
      };
      l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i;
          var o;
          var n = e.length;
          for (i = 0; i < n; i++) {
            o = e[i];
            this.element.appendChild(o.element);
          }
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) {
            e[i].isLayoutInstant = true;
          }
          this.arrange();
          for (i = 0; i < n; i++) {
            delete e[i].isLayoutInstant;
          }
          this.reveal(s);
        }
      };
      var c = l.remove;
      l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        var i = e && e.length;
        for (var o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      };
      l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        this.options.sortBy = "random";
        this._sort();
        this._layout();
      };
      l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        this.options.transitionDuration = i;
        return o;
      };
      l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      };
      return d;
    };
    if (typeof define == "function" && define.amd) {
      define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical"));
    } else {
      t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
    }
  }());
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  (function () {
    var e = window;
    var i = function t(e, r) {
      "use strict";
      function n(h, s, c) {
        function i(t, r, o) {
          var a;
          var l = "$()." + h + '("' + r + '")';
          t.each(function (t, e) {
            var i = c.data(e, h);
            if (!i) {
              u(h + " not initialized. Cannot call methods, i.e. " + l);
              return;
            }
            var n = i[r];
            if (!n || r.charAt(0) == "_") {
              u(l + " is not a valid method");
              return;
            }
            var s = n.apply(i, o);
            a = a === undefined ? s : a;
          });
          if (a === undefined) {
            return t;
          } else {
            return a;
          }
        }
        function n(t, n) {
          t.each(function (t, e) {
            var i = c.data(e, h);
            if (i) {
              i.option(n);
              i._init();
            } else {
              i = new s(e, n);
              c.data(e, h, i);
            }
          });
        }
        c = c || r || e.jQuery;
        if (!c) {
          return;
        }
        if (!s.prototype.option) {
          s.prototype.option = function (t) {
            if (!c.isPlainObject(t)) {
              return;
            }
            this.options = c.extend(true, this.options, t);
          };
        }
        c.fn[h] = function (t) {
          if (typeof t == "string") {
            var e = o.call(arguments, 1);
            return i(this, t, e);
          }
          n(this, t);
          return this;
        };
        a(c);
      }
      function a(t) {
        if (!t || t && t.bridget) {
          return;
        }
        t.bridget = n;
      }
      var o = Array.prototype.slice;
      var i = e.console;
      var u = typeof i == "undefined" ? function () {} : function (t) {
        i.error(t);
      };
      a(r || e.jQuery);
      return n;
    };
    if (typeof define == "function" && define.amd) {
      define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
        return i(e, t);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = i(e, require("jquery"));
    } else {
      e.jQueryBridget = i(e, e.jQuery);
    }
  }());
  (function () {
    var t = typeof window != "undefined" ? window : this;
    var e = function () {
      function t() {}
      var e = t.prototype;
      e.on = function (t, e) {
        if (!t || !e) {
          return;
        }
        var i = this._events = this._events || {};
        var n = i[t] = i[t] || [];
        if (n.indexOf(e) == -1) {
          n.push(e);
        }
        return this;
      };
      e.once = function (t, e) {
        if (!t || !e) {
          return;
        }
        this.on(t, e);
        var i = this._onceEvents = this._onceEvents || {};
        var n = i[t] = i[t] || {};
        n[e] = true;
        return this;
      };
      e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (!i || !i.length) {
          return;
        }
        var n = i.indexOf(e);
        if (n != -1) {
          i.splice(n, 1);
        }
        return this;
      };
      e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (!i || !i.length) {
          return;
        }
        i = i.slice(0);
        e = e || [];
        var n = this._onceEvents && this._onceEvents[t];
        for (var s = 0; s < i.length; s++) {
          var r = i[s];
          var o = n && n[r];
          if (o) {
            this.off(t, r);
            delete n[r];
          }
          r.apply(this, e);
        }
        return this;
      };
      e.allOff = function () {
        delete this._events;
        delete this._onceEvents;
      };
      return t;
    };
    if (typeof define == "function" && define.amd) {
      define("ev-emitter/ev-emitter", e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e();
    } else {
      t.EvEmitter = e();
    }
  }());
  (function () {
    var t = window;
    var e = function t() {
      "use strict";
      function m(t) {
        var e = parseFloat(t);
        var i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e;
      }
      function e() {}
      function E() {
        var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0};
        for (var e = 0; e < b; e++) {
          var i = y[e];
          t[i] = 0;
        }
        return t;
      }
      function S(t) {
        var e = getComputedStyle(t);
        if (!e) {
          i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1");
        }
        return e;
      }
      function x() {
        if (n) {
          return;
        }
        n = true;
        var t = document.createElement("div");
        t.style.width = "200px";
        t.style.padding = "1px 2px 3px 4px";
        t.style.borderStyle = "solid";
        t.style.borderWidth = "1px 2px 3px 4px";
        t.style.boxSizing = "border-box";
        var e = document.body || document.documentElement;
        e.appendChild(t);
        var i = S(t);
        C = Math.round(m(i.width)) == 200;
        s.isBoxSizeOuter = C;
        e.removeChild(t);
      }
      function s(t) {
        x();
        if (typeof t == "string") {
          t = document.querySelector(t);
        }
        if (!t || typeof t != "object" || !t.nodeType) {
          return;
        }
        var e = S(t);
        if (e.display == "none") {
          return E();
        }
        var i = {};
        i.width = t.offsetWidth;
        i.height = t.offsetHeight;
        var n = i.isBorderBox = e.boxSizing == "border-box";
        for (var s = 0; s < b; s++) {
          var r = y[s];
          var o = e[r];
          var a = parseFloat(o);
          i[r] = !isNaN(a) ? a : 0;
        }
        var l = i.paddingLeft + i.paddingRight;
        var h = i.paddingTop + i.paddingBottom;
        var c = i.marginLeft + i.marginRight;
        var u = i.marginTop + i.marginBottom;
        var d = i.borderLeftWidth + i.borderRightWidth;
        var f = i.borderTopWidth + i.borderBottomWidth;
        var p = n && C;
        var v = m(e.width);
        if (v !== false) {
          i.width = v + (p ? 0 : l + d);
        }
        var g = m(e.height);
        if (g !== false) {
          i.height = g + (p ? 0 : h + f);
        }
        i.innerWidth = i.width - (l + d);
        i.innerHeight = i.height - (h + f);
        i.outerWidth = i.width + c;
        i.outerHeight = i.height + u;
        return i;
      }
      var i = typeof console == "undefined" ? e : function (t) {
        console.error(t);
      };
      var y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
      var b = y.length;
      var n = false;
      var C;
      return s;
    };
    if (typeof define == "function" && define.amd) {
      define("get-size/get-size", e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e();
    } else {
      t.getSize = e();
    }
  }());
  (function () {
    var t = window;
    var e = function t() {
      "use strict";
      var n = function () {
        var t = window.Element.prototype;
        if (t.matches) {
          return "matches";
        }
        if (t.matchesSelector) {
          return "matchesSelector";
        }
        var e = ["webkit", "moz", "ms", "o"];
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          var s = n + "MatchesSelector";
          if (t[s]) {
            return s;
          }
        }
      }();
      return function t(e, i) {
        return e[n](i);
      };
    };
    if (typeof define == "function" && define.amd) {
      define("desandro-matches-selector/matches-selector", e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e();
    } else {
      t.matchesSelector = e();
    }
  }());
  (function () {
    var e = window;
    var i = function t(h, r) {
      var c = {};
      c.extend = function (t, e) {
        for (var i in e) {
          t[i] = e[i];
        }
        return t;
      };
      c.modulo = function (t, e) {
        return (t % e + e) % e;
      };
      var i = Array.prototype.slice;
      c.makeArray = function (t) {
        if (Array.isArray(t)) {
          return t;
        }
        if (t === null || t === undefined) {
          return [];
        }
        var e = typeof t == "object" && typeof t.length == "number";
        if (e) {
          return i.call(t);
        }
        return [t];
      };
      c.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        if (i != -1) {
          t.splice(i, 1);
        }
      };
      c.getParent = function (t, e) {
        while (t.parentNode && t != document.body) {
          t = t.parentNode;
          if (r(t, e)) {
            return t;
          }
        }
      };
      c.getQueryElement = function (t) {
        if (typeof t == "string") {
          return document.querySelector(t);
        }
        return t;
      };
      c.handleEvent = function (t) {
        var e = "on" + t.type;
        if (this[e]) {
          this[e](t);
        }
      };
      c.filterFindElements = function (t, n) {
        t = c.makeArray(t);
        var s = [];
        t.forEach(function (t) {
          if (!(t instanceof HTMLElement)) {
            return;
          }
          if (!n) {
            s.push(t);
            return;
          }
          if (r(t, n)) {
            s.push(t);
          }
          var e = t.querySelectorAll(n);
          for (var i = 0; i < e.length; i++) {
            s.push(e[i]);
          }
        });
        return s;
      };
      c.debounceMethod = function (t, e, n) {
        n = n || 100;
        var s = t.prototype[e];
        var r = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[r];
          clearTimeout(t);
          var e = arguments;
          var i = this;
          this[r] = setTimeout(function () {
            s.apply(i, e);
            delete i[r];
          }, n);
        };
      };
      c.docReady = function (t) {
        var e = document.readyState;
        if (e == "complete" || e == "interactive") {
          setTimeout(t);
        } else {
          document.addEventListener("DOMContentLoaded", t);
        }
      };
      c.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
          return e + "-" + i;
        }).toLowerCase();
      };
      var u = h.console;
      c.htmlInit = function (a, l) {
        c.docReady(function () {
          var t = c.toDashed(l);
          var s = "data-" + t;
          var e = document.querySelectorAll("[" + s + "]");
          var i = document.querySelectorAll(".js-" + t);
          var n = c.makeArray(e).concat(c.makeArray(i));
          var r = s + "-options";
          var o = h.jQuery;
          n.forEach(function (e) {
            var t = e.getAttribute(s) || e.getAttribute(r);
            var i;
            try {
              i = t && JSON.parse(t);
            } catch (t) {
              if (u) {
                u.error("Error parsing " + s + " on " + e.className + ": " + t);
              }
              return;
            }
            var n = new a(e, i);
            if (o) {
              o.data(e, l, n);
            }
          });
        });
      };
      return c;
    };
    if (typeof define == "function" && define.amd) {
      define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
        return i(e, t);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = i(e, require("desandro-matches-selector"));
    } else {
      e.fizzyUIUtils = i(e, e.matchesSelector);
    }
  }());
  (function () {
    var e = window;
    var i = function t(e, i) {
      function n(t, e) {
        this.element = t;
        this.parent = e;
        this.create();
      }
      var s = n.prototype;
      s.create = function () {
        this.element.style.position = "absolute";
        this.element.setAttribute("aria-hidden", "true");
        this.x = 0;
        this.shift = 0;
      };
      s.destroy = function () {
        this.unselect();
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = "";
        this.element.removeAttribute("aria-hidden");
      };
      s.getSize = function () {
        this.size = i(this.element);
      };
      s.setPosition = function (t) {
        this.x = t;
        this.updateTarget();
        this.renderPosition(t);
      };
      s.updateTarget = s.setDefaultTarget = function () {
        var t = this.parent.originSide == "left" ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
      };
      s.renderPosition = function (t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
      };
      s.select = function () {
        this.element.classList.add("is-selected");
        this.element.removeAttribute("aria-hidden");
      };
      s.unselect = function () {
        this.element.classList.remove("is-selected");
        this.element.setAttribute("aria-hidden", "true");
      };
      s.wrapShift = function (t) {
        this.shift = t;
        this.renderPosition(this.x + this.parent.slideableWidth * t);
      };
      s.remove = function () {
        this.element.parentNode.removeChild(this.element);
      };
      return n;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/cell", ["get-size/get-size"], function (t) {
        return i(e, t);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = i(e, require("get-size"));
    } else {
      e.Flickity = e.Flickity || {};
      e.Flickity.Cell = i(e, e.getSize);
    }
  }());
  (function () {
    var t = window;
    var e = function t() {
      "use strict";
      function e(t) {
        this.parent = t;
        this.isOriginLeft = t.originSide == "left";
        this.cells = [];
        this.outerWidth = 0;
        this.height = 0;
      }
      var i = e.prototype;
      i.addCell = function (t) {
        this.cells.push(t);
        this.outerWidth += t.size.outerWidth;
        this.height = Math.max(t.size.outerHeight, this.height);
        if (this.cells.length == 1) {
          this.x = t.x;
          var e = this.isOriginLeft ? "marginLeft" : "marginRight";
          this.firstMargin = t.size[e];
        }
      };
      i.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft";
        var e = this.getLastCell();
        var i = e ? e.size[t] : 0;
        var n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      };
      i.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      };
      i.select = function () {
        this.cells.forEach(function (t) {
          t.select();
        });
      };
      i.unselect = function () {
        this.cells.forEach(function (t) {
          t.unselect();
        });
      };
      i.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      };
      return e;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/slide", e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e();
    } else {
      t.Flickity = t.Flickity || {};
      t.Flickity.Slide = e();
    }
  }());
  (function () {
    var e = window;
    var i = function t(e, i) {
      var n = {};
      n.startAnimation = function () {
        if (this.isAnimating) {
          return;
        }
        this.isAnimating = true;
        this.restingFrames = 0;
        this.animate();
      };
      n.animate = function () {
        this.applyDragForce();
        this.applySelectedAttraction();
        var t = this.x;
        this.integratePhysics();
        this.positionSlider();
        this.settle(t);
        if (this.isAnimating) {
          var e = this;
          requestAnimationFrame(function t() {
            e.animate();
          });
        }
      };
      n.positionSlider = function () {
        var t = this.x;
        if (this.options.wrapAround && this.cells.length > 1) {
          t = i.modulo(t, this.slideableWidth);
          t -= this.slideableWidth;
          this.shiftWrapCells(t);
        }
        this.setTranslateX(t, this.isAnimating);
        this.dispatchScrollEvent();
      };
      n.setTranslateX = function (t, e) {
        t += this.cursorPosition;
        t = this.options.rightToLeft ? -t : t;
        var i = this.getPositionValue(t);
        this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
      };
      n.dispatchScrollEvent = function () {
        var t = this.slides[0];
        if (!t) {
          return;
        }
        var e = -this.x - t.target;
        var i = e / this.slidesWidth;
        this.dispatchEvent("scroll", null, [i, e]);
      };
      n.positionSliderAtSelected = function () {
        if (!this.cells.length) {
          return;
        }
        this.x = -this.selectedSlide.target;
        this.velocity = 0;
        this.positionSlider();
      };
      n.getPositionValue = function (t) {
        if (this.options.percentPosition) {
          return Math.round(t / this.size.innerWidth * 1e4) * .01 + "%";
        } else {
          return Math.round(t) + "px";
        }
      };
      n.settle = function (t) {
        var e = !this.isPointerDown && Math.round(this.x * 100) == Math.round(t * 100);
        if (e) {
          this.restingFrames++;
        }
        if (this.restingFrames > 2) {
          this.isAnimating = false;
          delete this.isFreeScrolling;
          this.positionSlider();
          this.dispatchEvent("settle", null, [this.selectedIndex]);
        }
      };
      n.shiftWrapCells = function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      };
      n._shiftCells = function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n];
          var r = e > 0 ? i : 0;
          s.wrapShift(r);
          e -= s.size.outerWidth;
        }
      };
      n._unshiftCells = function (t) {
        if (!t || !t.length) {
          return;
        }
        for (var e = 0; e < t.length; e++) {
          t[e].wrapShift(0);
        }
      };
      n.integratePhysics = function () {
        this.x += this.velocity;
        this.velocity *= this.getFrictionFactor();
      };
      n.applyForce = function (t) {
        this.velocity += t;
      };
      n.getFrictionFactor = function () {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
      };
      n.getRestingPosition = function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      };
      n.applyDragForce = function () {
        if (!this.isDraggable || !this.isPointerDown) {
          return;
        }
        var t = this.dragX - this.x;
        var e = t - this.velocity;
        this.applyForce(e);
      };
      n.applySelectedAttraction = function () {
        var t = this.isDraggable && this.isPointerDown;
        if (t || this.isFreeScrolling || !this.slides.length) {
          return;
        }
        var e = this.selectedSlide.target * -1 - this.x;
        var i = e * this.options.selectedAttraction;
        this.applyForce(i);
      };
      return n;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
        return i(e, t);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = i(e, require("fizzy-ui-utils"));
    } else {
      e.Flickity = e.Flickity || {};
      e.Flickity.animatePrototype = i(e, e.fizzyUIUtils);
    }
  }());
  (function () {
    var o = window;
    var a = function t(n, e, i, a, s, o, r) {
      function u(t, e) {
        t = a.makeArray(t);
        while (t.length) {
          e.appendChild(t.shift());
        }
      }
      function p(t, e) {
        var i = a.getQueryElement(t);
        if (!i) {
          if (c) {
            c.error("Bad element for Flickity: " + (i || t));
          }
          return;
        }
        this.element = i;
        if (this.element.flickityGUID) {
          var n = f[this.element.flickityGUID];
          if (n) {
            n.option(e);
          }
          return n;
        }
        if (l) {
          this.$element = l(this.element);
        }
        this.options = a.extend({}, this.constructor.defaults);
        this.option(e);
        this._create();
      }
      var l = n.jQuery;
      var h = n.getComputedStyle;
      var c = n.console;
      var d = 0;
      var f = {};
      p.defaults = {accessibility: true, cellAlign: "center", freeScrollFriction: .075, friction: .28, namespaceJQueryEvents: true, percentPosition: true, resize: true, selectedAttraction: .025, setGallerySize: true};
      p.createMethods = [];
      var v = p.prototype;
      a.extend(v, e.prototype);
      v._create = function () {
        var t = this.guid = ++d;
        this.element.flickityGUID = t;
        f[t] = this;
        this.selectedIndex = 0;
        this.restingFrames = 0;
        this.x = 0;
        this.velocity = 0;
        this.originSide = this.options.rightToLeft ? "right" : "left";
        this.viewport = document.createElement("div");
        this.viewport.className = "flickity-viewport";
        this._createSlider();
        if (this.options.resize || this.options.watchCSS) {
          n.addEventListener("resize", this);
        }
        for (var e in this.options.on) {
          var i = this.options.on[e];
          this.on(e, i);
        }
        p.createMethods.forEach(function (t) {
          this[t]();
        }, this);
        if (this.options.watchCSS) {
          this.watchCSS();
        } else {
          this.activate();
        }
      };
      v.option = function (t) {
        a.extend(this.options, t);
      };
      v.activate = function () {
        if (this.isActive) {
          return;
        }
        this.isActive = true;
        this.element.classList.add("flickity-enabled");
        if (this.options.rightToLeft) {
          this.element.classList.add("flickity-rtl");
        }
        this.getSize();
        var t = this._filterFindCellElements(this.element.children);
        u(t, this.slider);
        this.viewport.appendChild(this.slider);
        this.element.appendChild(this.viewport);
        this.reloadCells();
        if (this.options.accessibility) {
          this.element.tabIndex = 0;
          this.element.addEventListener("keydown", this);
        }
        this.emitEvent("activate");
        this.selectInitialIndex();
        this.isInitActivated = true;
        this.dispatchEvent("ready");
      };
      v._createSlider = function () {
        var t = document.createElement("div");
        t.className = "flickity-slider";
        t.style[this.originSide] = 0;
        this.slider = t;
      };
      v._filterFindCellElements = function (t) {
        return a.filterFindElements(t, this.options.cellSelector);
      };
      v.reloadCells = function () {
        this.cells = this._makeCells(this.slider.children);
        this.positionCells();
        this._getWrapShiftCells();
        this.setGallerySize();
      };
      v._makeCells = function (t) {
        var e = this._filterFindCellElements(t);
        var i = e.map(function (t) {
          return new s(t, this);
        }, this);
        return i;
      };
      v.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      };
      v.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      };
      v.positionCells = function () {
        this._sizeCells(this.cells);
        this._positionCells(0);
      };
      v._positionCells = function (t) {
        t = t || 0;
        this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
        var e = 0;
        if (t > 0) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        var n = this.cells.length;
        for (var s = t; s < n; s++) {
          var r = this.cells[s];
          r.setPosition(e);
          e += r.size.outerWidth;
          this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight);
        }
        this.slideableWidth = e;
        this.updateSlides();
        this._containSlides();
        this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0;
      };
      v._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize();
        });
      };
      v.updateSlides = function () {
        this.slides = [];
        if (!this.cells.length) {
          return;
        }
        var n = new o(this);
        this.slides.push(n);
        var t = this.originSide == "left";
        var s = t ? "marginRight" : "marginLeft";
        var r = this._getCanCellFit();
        this.cells.forEach(function (t, e) {
          if (!n.cells.length) {
            n.addCell(t);
            return;
          }
          var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
          if (r.call(this, e, i)) {
            n.addCell(t);
          } else {
            n.updateTarget();
            n = new o(this);
            this.slides.push(n);
            n.addCell(t);
          }
        }, this);
        n.updateTarget();
        this.updateSelectedSlide();
      };
      v._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t) {
          return function () {
            return false;
          };
        } else if (typeof t == "number") {
          var e = parseInt(t, 10);
          return function (t) {
            return t % e !== 0;
          };
        }
        var i = typeof t == "string" && t.match(/^(\d+)%$/);
        var n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      };
      v._init = v.reposition = function () {
        this.positionCells();
        this.positionSliderAtSelected();
      };
      v.getSize = function () {
        this.size = i(this.element);
        this.setCellAlign();
        this.cursorPosition = this.size.innerWidth * this.cellAlign;
      };
      var g = {center: {left: .5, right: .5}, left: {left: 0, right: 1}, right: {right: 0, left: 1}};
      v.setCellAlign = function () {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      };
      v.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
          this.viewport.style.height = t + "px";
        }
      };
      v._getWrapShiftCells = function () {
        if (!this.options.wrapAround) {
          return;
        }
        this._unshiftCells(this.beforeShiftCells);
        this._unshiftCells(this.afterShiftCells);
        var t = this.cursorPosition;
        var e = this.cells.length - 1;
        this.beforeShiftCells = this._getGapCells(t, e, -1);
        t = this.size.innerWidth - this.cursorPosition;
        this.afterShiftCells = this._getGapCells(t, 0, 1);
      };
      v._getGapCells = function (t, e, i) {
        var n = [];
        while (t > 0) {
          var s = this.cells[e];
          if (!s) {
            break;
          }
          n.push(s);
          e += i;
          t -= s.size.outerWidth;
        }
        return n;
      };
      v._containSlides = function () {
        if (!this.options.contain || this.options.wrapAround || !this.cells.length) {
          return;
        }
        var t = this.options.rightToLeft;
        var e = t ? "marginRight" : "marginLeft";
        var i = t ? "marginLeft" : "marginRight";
        var n = this.slideableWidth - this.getLastCell().size[i];
        var s = n < this.size.innerWidth;
        var r = this.cursorPosition + this.cells[0].size[e];
        var o = n - this.size.innerWidth * (1 - this.cellAlign);
        this.slides.forEach(function (t) {
          if (s) {
            t.target = n * this.cellAlign;
          } else {
            t.target = Math.max(t.target, r);
            t.target = Math.min(t.target, o);
          }
        }, this);
      };
      v.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        this.emitEvent(t, n);
        if (l && this.$element) {
          t += this.options.namespaceJQueryEvents ? ".flickity" : "";
          var s = t;
          if (e) {
            var r = new l.Event(e);
            r.type = t;
            s = r;
          }
          this.$element.trigger(s, i);
        }
      };
      v.select = function (t, e, i) {
        if (!this.isActive) {
          return;
        }
        t = parseInt(t, 10);
        this._wrapSelect(t);
        if (this.options.wrapAround || e) {
          t = a.modulo(t, this.slides.length);
        }
        if (!this.slides[t]) {
          return;
        }
        var n = this.selectedIndex;
        this.selectedIndex = t;
        this.updateSelectedSlide();
        if (i) {
          this.positionSliderAtSelected();
        } else {
          this.startAnimation();
        }
        if (this.options.adaptiveHeight) {
          this.setGallerySize();
        }
        this.dispatchEvent("select", null, [t]);
        if (t != n) {
          this.dispatchEvent("change", null, [t]);
        }
        this.dispatchEvent("cellSelect");
      };
      v._wrapSelect = function (t) {
        var e = this.slides.length;
        var i = this.options.wrapAround && e > 1;
        if (!i) {
          return t;
        }
        var n = a.modulo(t, e);
        var s = Math.abs(n - this.selectedIndex);
        var r = Math.abs(n + e - this.selectedIndex);
        var o = Math.abs(n - e - this.selectedIndex);
        if (!this.isDragSelect && r < s) {
          t += e;
        } else if (!this.isDragSelect && o < s) {
          t -= e;
        }
        if (t < 0) {
          this.x -= this.slideableWidth;
        } else if (t >= e) {
          this.x += this.slideableWidth;
        }
      };
      v.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e);
      };
      v.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e);
      };
      v.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        if (!t) {
          return;
        }
        this.unselectSelectedSlide();
        this.selectedSlide = t;
        t.select();
        this.selectedCells = t.cells;
        this.selectedElements = t.getCellElements();
        this.selectedCell = t.cells[0];
        this.selectedElement = this.selectedElements[0];
      };
      v.unselectSelectedSlide = function () {
        if (this.selectedSlide) {
          this.selectedSlide.unselect();
        }
      };
      v.selectInitialIndex = function () {
        var t = this.options.initialIndex;
        if (this.isInitActivated) {
          this.select(this.selectedIndex, false, true);
          return;
        }
        if (t && typeof t == "string") {
          var e = this.queryCell(t);
          if (e) {
            this.selectCell(t, false, true);
            return;
          }
        }
        var i = 0;
        if (t && this.slides[t]) {
          i = t;
        }
        this.select(i, false, true);
      };
      v.selectCell = function (t, e, i) {
        var n = this.queryCell(t);
        if (!n) {
          return;
        }
        var s = this.getCellSlideIndex(n);
        this.select(s, e, i);
      };
      v.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++) {
          var i = this.slides[e];
          var n = i.cells.indexOf(t);
          if (n != -1) {
            return e;
          }
        }
      };
      v.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) {
            return i;
          }
        }
      };
      v.getCells = function (t) {
        t = a.makeArray(t);
        var i = [];
        t.forEach(function (t) {
          var e = this.getCell(t);
          if (e) {
            i.push(e);
          }
        }, this);
        return i;
      };
      v.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      };
      v.getParentCell = function (t) {
        var e = this.getCell(t);
        if (e) {
          return e;
        }
        t = a.getParent(t, ".flickity-slider > *");
        return this.getCell(t);
      };
      v.getAdjacentCellElements = function (t, e) {
        if (!t) {
          return this.selectedSlide.getCellElements();
        }
        e = e === undefined ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + t * 2 >= i) {
          return this.getCellElements();
        }
        var n = [];
        for (var s = e - t; s <= e + t; s++) {
          var r = this.options.wrapAround ? a.modulo(s, i) : s;
          var o = this.slides[r];
          if (o) {
            n = n.concat(o.getCellElements());
          }
        }
        return n;
      };
      v.queryCell = function (t) {
        if (typeof t == "number") {
          return this.cells[t];
        }
        if (typeof t == "string") {
          if (t.match(/^[#.]?[\d/]/)) {
            return;
          }
          t = this.element.querySelector(t);
        }
        return this.getCell(t);
      };
      v.uiChange = function () {
        this.emitEvent("uiChange");
      };
      v.childUIPointerDown = function (t) {
        if (t.type != "touchstart") {
          t.preventDefault();
        }
        this.focus();
      };
      v.onresize = function () {
        this.watchCSS();
        this.resize();
      };
      a.debounceMethod(p, "onresize", 150);
      v.resize = function () {
        if (!this.isActive) {
          return;
        }
        this.getSize();
        if (this.options.wrapAround) {
          this.x = a.modulo(this.x, this.slideableWidth);
        }
        this.positionCells();
        this._getWrapShiftCells();
        this.setGallerySize();
        this.emitEvent("resize");
        var t = this.selectedElements && this.selectedElements[0];
        this.selectCell(t, false, true);
      };
      v.watchCSS = function () {
        var t = this.options.watchCSS;
        if (!t) {
          return;
        }
        var e = h(this.element, ":after").content;
        if (e.indexOf("flickity") == -1) {
          this.deactivate();
        } else {
          this.activate();
        }
      };
      v.onkeydown = function (t) {
        var e = document.activeElement && document.activeElement != this.element;
        if (!this.options.accessibility || e) {
          return;
        }
        var i = p.keyboardHandlers[t.keyCode];
        if (i) {
          i.call(this);
        }
      };
      p.keyboardHandlers = {37: function () {
        var t = this.options.rightToLeft ? "next" : "previous";
        this.uiChange();
        this[t]();
      }, 39: function () {
        var t = this.options.rightToLeft ? "previous" : "next";
        this.uiChange();
        this[t]();
      }};
      v.focus = function () {
        var t = n.pageYOffset;
        this.element.focus({preventScroll: true});
        if (n.pageYOffset != t) {
          n.scrollTo(n.pageXOffset, t);
        }
      };
      v.deactivate = function () {
        if (!this.isActive) {
          return;
        }
        this.element.classList.remove("flickity-enabled");
        this.element.classList.remove("flickity-rtl");
        this.unselectSelectedSlide();
        this.cells.forEach(function (t) {
          t.destroy();
        });
        this.element.removeChild(this.viewport);
        u(this.slider.children, this.element);
        if (this.options.accessibility) {
          this.element.removeAttribute("tabIndex");
          this.element.removeEventListener("keydown", this);
        }
        this.isActive = false;
        this.emitEvent("deactivate");
      };
      v.destroy = function () {
        this.deactivate();
        n.removeEventListener("resize", this);
        this.allOff();
        this.emitEvent("destroy");
        if (l && this.$element) {
          l.removeData(this.element, "flickity");
        }
        delete this.element.flickityGUID;
        delete f[this.guid];
      };
      a.extend(v, r);
      p.data = function (t) {
        t = a.getQueryElement(t);
        var e = t && t.flickityGUID;
        return e && f[e];
      };
      a.htmlInit(p, "flickity");
      if (l && l.bridget) {
        l.bridget("flickity", p);
      }
      p.setJQuery = function (t) {
        l = t;
      };
      p.Cell = s;
      p.Slide = o;
      return p;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (t, e, i, n, s, r) {
        return a(o, t, e, i, n, s, r);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = a(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    } else {
      var t = o.Flickity;
      o.Flickity = a(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype);
    }
  }());
  (function () {
    var e = window;
    var i = function t(s, e) {
      function i() {}
      function n() {}
      var r = n.prototype = Object.create(e.prototype);
      r.bindStartEvent = function (t) {
        this._bindStartEvent(t, true);
      };
      r.unbindStartEvent = function (t) {
        this._bindStartEvent(t, false);
      };
      r._bindStartEvent = function (t, e) {
        e = e === undefined ? true : e;
        var i = e ? "addEventListener" : "removeEventListener";
        var n = "mousedown";
        if (s.PointerEvent) {
          n = "pointerdown";
        } else if ("ontouchstart" in s) {
          n = "touchstart";
        }
        t[i](n, this);
      };
      r.handleEvent = function (t) {
        var e = "on" + t.type;
        if (this[e]) {
          this[e](t);
        }
      };
      r.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) {
            return i;
          }
        }
      };
      r.onmousedown = function (t) {
        var e = t.button;
        if (e && (e !== 0 && e !== 1)) {
          return;
        }
        this._pointerDown(t, t);
      };
      r.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0]);
      };
      r.onpointerdown = function (t) {
        this._pointerDown(t, t);
      };
      r._pointerDown = function (t, e) {
        if (t.button || this.isPointerDown) {
          return;
        }
        this.isPointerDown = true;
        this.pointerIdentifier = e.pointerId !== undefined ? e.pointerId : e.identifier;
        this.pointerDown(t, e);
      };
      r.pointerDown = function (t, e) {
        this._bindPostStartEvents(t);
        this.emitEvent("pointerDown", [t, e]);
      };
      var o = {mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"]};
      r._bindPostStartEvents = function (t) {
        if (!t) {
          return;
        }
        var e = o[t.type];
        e.forEach(function (t) {
          s.addEventListener(t, this);
        }, this);
        this._boundPointerEvents = e;
      };
      r._unbindPostStartEvents = function () {
        if (!this._boundPointerEvents) {
          return;
        }
        this._boundPointerEvents.forEach(function (t) {
          s.removeEventListener(t, this);
        }, this);
        delete this._boundPointerEvents;
      };
      r.onmousemove = function (t) {
        this._pointerMove(t, t);
      };
      r.onpointermove = function (t) {
        if (t.pointerId == this.pointerIdentifier) {
          this._pointerMove(t, t);
        }
      };
      r.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        if (e) {
          this._pointerMove(t, e);
        }
      };
      r._pointerMove = function (t, e) {
        this.pointerMove(t, e);
      };
      r.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e]);
      };
      r.onmouseup = function (t) {
        this._pointerUp(t, t);
      };
      r.onpointerup = function (t) {
        if (t.pointerId == this.pointerIdentifier) {
          this._pointerUp(t, t);
        }
      };
      r.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        if (e) {
          this._pointerUp(t, e);
        }
      };
      r._pointerUp = function (t, e) {
        this._pointerDone();
        this.pointerUp(t, e);
      };
      r.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]);
      };
      r._pointerDone = function () {
        this._pointerReset();
        this._unbindPostStartEvents();
        this.pointerDone();
      };
      r._pointerReset = function () {
        this.isPointerDown = false;
        delete this.pointerIdentifier;
      };
      r.pointerDone = i;
      r.onpointercancel = function (t) {
        if (t.pointerId == this.pointerIdentifier) {
          this._pointerCancel(t, t);
        }
      };
      r.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        if (e) {
          this._pointerCancel(t, e);
        }
      };
      r._pointerCancel = function (t, e) {
        this._pointerDone();
        this.pointerCancel(t, e);
      };
      r.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e]);
      };
      n.getPointerPoint = function (t) {
        return {x: t.pageX, y: t.pageY};
      };
      return n;
    };
    if (typeof define == "function" && define.amd) {
      define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (t) {
        return i(e, t);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = i(e, require("ev-emitter"));
    } else {
      e.Unipointer = i(e, e.EvEmitter);
    }
  }());
  (function () {
    var e = window;
    var i = function t(r, e) {
      function i() {}
      var n = i.prototype = Object.create(e.prototype);
      n.bindHandles = function () {
        this._bindHandles(true);
      };
      n.unbindHandles = function () {
        this._bindHandles(false);
      };
      n._bindHandles = function (t) {
        t = t === undefined ? true : t;
        var e = t ? "addEventListener" : "removeEventListener";
        var i = t ? this._touchActionValue : "";
        for (var n = 0; n < this.handles.length; n++) {
          var s = this.handles[n];
          this._bindStartEvent(s, t);
          s[e]("click", this);
          if (r.PointerEvent) {
            s.style.touchAction = i;
          }
        }
      };
      n._touchActionValue = "none";
      n.pointerDown = function (t, e) {
        var i = this.okayPointerDown(t);
        if (!i) {
          return;
        }
        this.pointerDownPointer = {pageX: e.pageX, pageY: e.pageY};
        t.preventDefault();
        this.pointerDownBlur();
        this._bindPostStartEvents(t);
        this.emitEvent("pointerDown", [t, e]);
      };
      var s = {TEXTAREA: true, INPUT: true, SELECT: true, OPTION: true};
      var o = {radio: true, checkbox: true, button: true, submit: true, image: true, file: true};
      n.okayPointerDown = function (t) {
        var e = s[t.target.nodeName];
        var i = o[t.target.type];
        var n = !e || i;
        if (!n) {
          this._pointerReset();
        }
        return n;
      };
      n.pointerDownBlur = function () {
        var t = document.activeElement;
        var e = t && t.blur && t != document.body;
        if (e) {
          t.blur();
        }
      };
      n.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]);
        this._dragMove(t, e, i);
      };
      n._dragPointerMove = function (t, e) {
        var i = {x: e.pageX - this.pointerDownPointer.pageX, y: e.pageY - this.pointerDownPointer.pageY};
        if (!this.isDragging && this.hasDragStarted(i)) {
          this._dragStart(t, e);
        }
        return i;
      };
      n.hasDragStarted = function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      };
      n.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]);
        this._dragPointerUp(t, e);
      };
      n._dragPointerUp = function (t, e) {
        if (this.isDragging) {
          this._dragEnd(t, e);
        } else {
          this._staticClick(t, e);
        }
      };
      n._dragStart = function (t, e) {
        this.isDragging = true;
        this.isPreventingClicks = true;
        this.dragStart(t, e);
      };
      n.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e]);
      };
      n._dragMove = function (t, e, i) {
        if (!this.isDragging) {
          return;
        }
        this.dragMove(t, e, i);
      };
      n.dragMove = function (t, e, i) {
        t.preventDefault();
        this.emitEvent("dragMove", [t, e, i]);
      };
      n._dragEnd = function (t, e) {
        this.isDragging = false;
        setTimeout(function () {
          delete this.isPreventingClicks;
        }.bind(this));
        this.dragEnd(t, e);
      };
      n.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e]);
      };
      n.onclick = function (t) {
        if (this.isPreventingClicks) {
          t.preventDefault();
        }
      };
      n._staticClick = function (t, e) {
        if (this.isIgnoringMouseUp && t.type == "mouseup") {
          return;
        }
        this.staticClick(t, e);
        if (t.type != "mouseup") {
          this.isIgnoringMouseUp = true;
          setTimeout(function () {
            delete this.isIgnoringMouseUp;
          }.bind(this), 400);
        }
      };
      n.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e]);
      };
      i.getPointerPoint = e.getPointerPoint;
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("unidragger/unidragger", ["unipointer/unipointer"], function (t) {
        return i(e, t);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = i(e, require("unipointer"));
    } else {
      e.Unidragger = i(e, e.Unipointer);
    }
  }());
  (function () {
    var n = window;
    var s = function t(n, e, i, a) {
      function h() {
        return {x: n.pageXOffset, y: n.pageYOffset};
      }
      a.extend(e.defaults, {draggable: ">1", dragThreshold: 3});
      e.createMethods.push("_createDrag");
      var s = e.prototype;
      a.extend(s, i.prototype);
      s._touchActionValue = "pan-y";
      var r = "createTouch" in document;
      var o = false;
      s._createDrag = function () {
        this.on("activate", this.onActivateDrag);
        this.on("uiChange", this._uiChangeDrag);
        this.on("deactivate", this.onDeactivateDrag);
        this.on("cellChange", this.updateDraggable);
        if (r && !o) {
          n.addEventListener("touchmove", function () {});
          o = true;
        }
      };
      s.onActivateDrag = function () {
        this.handles = [this.viewport];
        this.bindHandles();
        this.updateDraggable();
      };
      s.onDeactivateDrag = function () {
        this.unbindHandles();
        this.element.classList.remove("is-draggable");
      };
      s.updateDraggable = function () {
        if (this.options.draggable == ">1") {
          this.isDraggable = this.slides.length > 1;
        } else {
          this.isDraggable = this.options.draggable;
        }
        if (this.isDraggable) {
          this.element.classList.add("is-draggable");
        } else {
          this.element.classList.remove("is-draggable");
        }
      };
      s.bindDrag = function () {
        this.options.draggable = true;
        this.updateDraggable();
      };
      s.unbindDrag = function () {
        this.options.draggable = false;
        this.updateDraggable();
      };
      s._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      };
      s.pointerDown = function (t, e) {
        if (!this.isDraggable) {
          this._pointerDownDefault(t, e);
          return;
        }
        var i = this.okayPointerDown(t);
        if (!i) {
          return;
        }
        this._pointerDownPreventDefault(t);
        this.pointerDownFocus(t);
        if (document.activeElement != this.element) {
          this.pointerDownBlur();
        }
        this.dragX = this.x;
        this.viewport.classList.add("is-pointer-down");
        this.pointerDownScroll = h();
        n.addEventListener("scroll", this);
        this._pointerDownDefault(t, e);
      };
      s._pointerDownDefault = function (t, e) {
        this.pointerDownPointer = {pageX: e.pageX, pageY: e.pageY};
        this._bindPostStartEvents(t);
        this.dispatchEvent("pointerDown", t, [e]);
      };
      var l = {INPUT: true, TEXTAREA: true, SELECT: true};
      s.pointerDownFocus = function (t) {
        var e = l[t.target.nodeName];
        if (!e) {
          this.focus();
        }
      };
      s._pointerDownPreventDefault = function (t) {
        var e = t.type == "touchstart";
        var i = t.pointerType == "touch";
        var n = l[t.target.nodeName];
        if (!e && !i && !n) {
          t.preventDefault();
        }
      };
      s.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      };
      s.pointerUp = function (t, e) {
        delete this.isTouchScrolling;
        this.viewport.classList.remove("is-pointer-down");
        this.dispatchEvent("pointerUp", t, [e]);
        this._dragPointerUp(t, e);
      };
      s.pointerDone = function () {
        n.removeEventListener("scroll", this);
        delete this.pointerDownScroll;
      };
      s.dragStart = function (t, e) {
        if (!this.isDraggable) {
          return;
        }
        this.dragStartPosition = this.x;
        this.startAnimation();
        n.removeEventListener("scroll", this);
        this.dispatchEvent("dragStart", t, [e]);
      };
      s.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]);
        this._dragMove(t, e, i);
      };
      s.dragMove = function (t, e, i) {
        if (!this.isDraggable) {
          return;
        }
        t.preventDefault();
        this.previousDragX = this.dragX;
        var n = this.options.rightToLeft ? -1 : 1;
        if (this.options.wrapAround) {
          i.x %= this.slideableWidth;
        }
        var s = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.slides.length) {
          var r = Math.max(-this.slides[0].target, this.dragStartPosition);
          s = s > r ? (s + r) * .5 : s;
          var o = Math.min(-this.getLastSlide().target, this.dragStartPosition);
          s = s < o ? (s + o) * .5 : s;
        }
        this.dragX = s;
        this.dragMoveTime = new Date;
        this.dispatchEvent("dragMove", t, [e, i]);
      };
      s.dragEnd = function (t, e) {
        if (!this.isDraggable) {
          return;
        }
        if (this.options.freeScroll) {
          this.isFreeScrolling = true;
        }
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
          var n = this.getRestingPosition();
          this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
        } else if (!this.options.freeScroll && i == this.selectedIndex) {
          i += this.dragEndBoostSelect();
        }
        delete this.previousDragX;
        this.isDragSelect = this.options.wrapAround;
        this.select(i);
        delete this.isDragSelect;
        this.dispatchEvent("dragEnd", t, [e]);
      };
      s.dragEndRestingSelect = function () {
        var t = this.getRestingPosition();
        var e = Math.abs(this.getSlideDistance(-t, this.selectedIndex));
        var i = this._getClosestResting(t, e, 1);
        var n = this._getClosestResting(t, e, -1);
        var s = i.distance < n.distance ? i.index : n.index;
        return s;
      };
      s._getClosestResting = function (t, e, i) {
        var n = this.selectedIndex;
        var s = Infinity;
        var r = this.options.contain && !this.options.wrapAround ? function (t, e) {
          return t <= e;
        } : function (t, e) {
          return t < e;
        };
        while (r(e, s)) {
          n += i;
          s = e;
          e = this.getSlideDistance(-t, n);
          if (e === null) {
            break;
          }
          e = Math.abs(e);
        }
        return {distance: s, index: n - i};
      };
      s.getSlideDistance = function (t, e) {
        var i = this.slides.length;
        var n = this.options.wrapAround && i > 1;
        var s = n ? a.modulo(e, i) : e;
        var r = this.slides[s];
        if (!r) {
          return null;
        }
        var o = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (r.target + o);
      };
      s.dragEndBoostSelect = function () {
        if (this.previousDragX === undefined || !this.dragMoveTime || new Date - this.dragMoveTime > 100) {
          return 0;
        }
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex);
        var e = this.previousDragX - this.dragX;
        if (t > 0 && e > 0) {
          return 1;
        } else if (t < 0 && e < 0) {
          return -1;
        }
        return 0;
      };
      s.staticClick = function (t, e) {
        var i = this.getParentCell(t.target);
        var n = i && i.element;
        var s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s]);
      };
      s.onscroll = function () {
        var t = h();
        var e = this.pointerDownScroll.x - t.x;
        var i = this.pointerDownScroll.y - t.y;
        if (Math.abs(e) > 3 || Math.abs(i) > 3) {
          this._pointerDone();
        }
      };
      return e;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (t, e, i) {
        return s(n, t, e, i);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = s(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils"));
    } else {
      n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils);
    }
  }());
  (function () {
    var n = window;
    var s = function t(e, i, n, s) {
      "use strict";
      function o(t, e) {
        this.direction = t;
        this.parent = e;
        this._create();
      }
      function a(t) {
        if (typeof t == "string") {
          return t;
        }
        return "M " + t.x0 + ",50" + " L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50 " + " L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
      }
      var r = "http://www.w3.org/2000/svg";
      o.prototype = Object.create(n.prototype);
      o.prototype._create = function () {
        this.isEnabled = true;
        this.isPrevious = this.direction == -1;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button";
        e.className += this.isPrevious ? " previous" : " next";
        e.setAttribute("type", "button");
        this.disable();
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i);
        this.parent.on("select", this.update.bind(this));
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
      };
      o.prototype.activate = function () {
        this.bindStartEvent(this.element);
        this.element.addEventListener("click", this);
        this.parent.element.appendChild(this.element);
      };
      o.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element);
        this.unbindStartEvent(this.element);
        this.element.removeEventListener("click", this);
      };
      o.prototype.createSVG = function () {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("class", "flickity-button-icon");
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(r, "path");
        var i = a(this.parent.options.arrowShape);
        e.setAttribute("d", i);
        e.setAttribute("class", "arrow");
        if (!this.isLeft) {
          e.setAttribute("transform", "translate(100, 100) rotate(180) ");
        }
        t.appendChild(e);
        return t;
      };
      o.prototype.handleEvent = s.handleEvent;
      o.prototype.onclick = function () {
        if (!this.isEnabled) {
          return;
        }
        this.parent.uiChange();
        var t = this.isPrevious ? "previous" : "next";
        this.parent[t]();
      };
      o.prototype.enable = function () {
        if (this.isEnabled) {
          return;
        }
        this.element.disabled = false;
        this.isEnabled = true;
      };
      o.prototype.disable = function () {
        if (!this.isEnabled) {
          return;
        }
        this.element.disabled = true;
        this.isEnabled = false;
      };
      o.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1) {
          this.enable();
          return;
        }
        var e = t.length ? t.length - 1 : 0;
        var i = this.isPrevious ? 0 : e;
        var n = this.parent.selectedIndex == i ? "disable" : "enable";
        this[n]();
      };
      o.prototype.destroy = function () {
        this.deactivate();
        this.allOff();
      };
      s.extend(i.defaults, {prevNextButtons: true, arrowShape: {x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30}});
      i.createMethods.push("_createPrevNextButtons");
      var l = i.prototype;
      l._createPrevNextButtons = function () {
        if (!this.options.prevNextButtons) {
          return;
        }
        this.prevButton = new o(-1, this);
        this.nextButton = new o(1, this);
        this.on("activate", this.activatePrevNextButtons);
      };
      l.activatePrevNextButtons = function () {
        this.prevButton.activate();
        this.nextButton.activate();
        this.on("deactivate", this.deactivatePrevNextButtons);
      };
      l.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate();
        this.nextButton.deactivate();
        this.off("deactivate", this.deactivatePrevNextButtons);
      };
      i.PrevNextButton = o;
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
        return s(n, t, e, i);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils"));
    } else {
      s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
    }
  }());
  (function () {
    var n = window;
    var s = function t(e, i, n, s) {
      function r(t) {
        this.parent = t;
        this._create();
      }
      r.prototype = Object.create(n.prototype);
      r.prototype._create = function () {
        this.holder = document.createElement("ol");
        this.holder.className = "flickity-page-dots";
        this.dots = [];
        this.handleClick = this.onClick.bind(this);
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
      };
      r.prototype.activate = function () {
        this.setDots();
        this.holder.addEventListener("click", this.handleClick);
        this.bindStartEvent(this.holder);
        this.parent.element.appendChild(this.holder);
      };
      r.prototype.deactivate = function () {
        this.holder.removeEventListener("click", this.handleClick);
        this.unbindStartEvent(this.holder);
        this.parent.element.removeChild(this.holder);
      };
      r.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        if (t > 0) {
          this.addDots(t);
        } else if (t < 0) {
          this.removeDots(-t);
        }
      };
      r.prototype.addDots = function (t) {
        var e = document.createDocumentFragment();
        var i = [];
        var n = this.dots.length;
        var s = n + t;
        for (var r = n; r < s; r++) {
          var o = document.createElement("li");
          o.className = "dot";
          o.setAttribute("aria-label", "Page dot " + (r + 1));
          e.appendChild(o);
          i.push(o);
        }
        this.holder.appendChild(e);
        this.dots = this.dots.concat(i);
      };
      r.prototype.removeDots = function (t) {
        var e = this.dots.splice(this.dots.length - t, t);
        e.forEach(function (t) {
          this.holder.removeChild(t);
        }, this);
      };
      r.prototype.updateSelected = function () {
        if (this.selectedDot) {
          this.selectedDot.className = "dot";
          this.selectedDot.removeAttribute("aria-current");
        }
        if (!this.dots.length) {
          return;
        }
        this.selectedDot = this.dots[this.parent.selectedIndex];
        this.selectedDot.className = "dot is-selected";
        this.selectedDot.setAttribute("aria-current", "step");
      };
      r.prototype.onTap = r.prototype.onClick = function (t) {
        var e = t.target;
        if (e.nodeName != "LI") {
          return;
        }
        this.parent.uiChange();
        var i = this.dots.indexOf(e);
        this.parent.select(i);
      };
      r.prototype.destroy = function () {
        this.deactivate();
        this.allOff();
      };
      i.PageDots = r;
      s.extend(i.defaults, {pageDots: true});
      i.createMethods.push("_createPageDots");
      var o = i.prototype;
      o._createPageDots = function () {
        if (!this.options.pageDots) {
          return;
        }
        this.pageDots = new r(this);
        this.on("activate", this.activatePageDots);
        this.on("select", this.updateSelectedPageDots);
        this.on("cellChange", this.updatePageDots);
        this.on("resize", this.updatePageDots);
        this.on("deactivate", this.deactivatePageDots);
      };
      o.activatePageDots = function () {
        this.pageDots.activate();
      };
      o.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      };
      o.updatePageDots = function () {
        this.pageDots.setDots();
      };
      o.deactivatePageDots = function () {
        this.pageDots.deactivate();
      };
      i.PageDots = r;
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
        return s(n, t, e, i);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils"));
    } else {
      s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
    }
  }());
  (function () {
    var t = window;
    var n = function t(e, i, n) {
      function s(t) {
        this.parent = t;
        this.state = "stopped";
        this.onVisibilityChange = this.visibilityChange.bind(this);
        this.onVisibilityPlay = this.visibilityPlay.bind(this);
      }
      s.prototype = Object.create(e.prototype);
      s.prototype.play = function () {
        if (this.state == "playing") {
          return;
        }
        var t = document.hidden;
        if (t) {
          document.addEventListener("visibilitychange", this.onVisibilityPlay);
          return;
        }
        this.state = "playing";
        document.addEventListener("visibilitychange", this.onVisibilityChange);
        this.tick();
      };
      s.prototype.tick = function () {
        if (this.state != "playing") {
          return;
        }
        var t = this.parent.options.autoPlay;
        t = typeof t == "number" ? t : 3e3;
        var e = this;
        this.clear();
        this.timeout = setTimeout(function () {
          e.parent.next(true);
          e.tick();
        }, t);
      };
      s.prototype.stop = function () {
        this.state = "stopped";
        this.clear();
        document.removeEventListener("visibilitychange", this.onVisibilityChange);
      };
      s.prototype.clear = function () {
        clearTimeout(this.timeout);
      };
      s.prototype.pause = function () {
        if (this.state == "playing") {
          this.state = "paused";
          this.clear();
        }
      };
      s.prototype.unpause = function () {
        if (this.state == "paused") {
          this.play();
        }
      };
      s.prototype.visibilityChange = function () {
        var t = document.hidden;
        this[t ? "pause" : "unpause"]();
      };
      s.prototype.visibilityPlay = function () {
        this.play();
        document.removeEventListener("visibilitychange", this.onVisibilityPlay);
      };
      i.extend(n.defaults, {pauseAutoPlayOnHover: true});
      n.createMethods.push("_createPlayer");
      var r = n.prototype;
      r._createPlayer = function () {
        this.player = new s(this);
        this.on("activate", this.activatePlayer);
        this.on("uiChange", this.stopPlayer);
        this.on("pointerDown", this.stopPlayer);
        this.on("deactivate", this.deactivatePlayer);
      };
      r.activatePlayer = function () {
        if (!this.options.autoPlay) {
          return;
        }
        this.player.play();
        this.element.addEventListener("mouseenter", this);
      };
      r.playPlayer = function () {
        this.player.play();
      };
      r.stopPlayer = function () {
        this.player.stop();
      };
      r.pausePlayer = function () {
        this.player.pause();
      };
      r.unpausePlayer = function () {
        this.player.unpause();
      };
      r.deactivatePlayer = function () {
        this.player.stop();
        this.element.removeEventListener("mouseenter", this);
      };
      r.onmouseenter = function () {
        if (!this.options.pauseAutoPlayOnHover) {
          return;
        }
        this.player.pause();
        this.element.addEventListener("mouseleave", this);
      };
      r.onmouseleave = function () {
        this.player.unpause();
        this.element.removeEventListener("mouseleave", this);
      };
      n.Player = s;
      return n;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, e, i) {
        return n(t, e, i);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity"));
    } else {
      n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
    }
  }());
  (function () {
    var i = window;
    var n = function t(e, i, n) {
      function l(t) {
        var e = document.createDocumentFragment();
        t.forEach(function (t) {
          e.appendChild(t.element);
        });
        return e;
      }
      var s = i.prototype;
      s.insert = function (t, e) {
        var i = this._makeCells(t);
        if (!i || !i.length) {
          return;
        }
        var n = this.cells.length;
        e = e === undefined ? n : e;
        var s = l(i);
        var r = e == n;
        if (r) {
          this.slider.appendChild(s);
        } else {
          var o = this.cells[e].element;
          this.slider.insertBefore(s, o);
        }
        if (e === 0) {
          this.cells = i.concat(this.cells);
        } else if (r) {
          this.cells = this.cells.concat(i);
        } else {
          var a = this.cells.splice(e, n - e);
          this.cells = this.cells.concat(i).concat(a);
        }
        this._sizeCells(i);
        this.cellChange(e, true);
      };
      s.append = function (t) {
        this.insert(t, this.cells.length);
      };
      s.prepend = function (t) {
        this.insert(t, 0);
      };
      s.remove = function (t) {
        var e = this.getCells(t);
        if (!e || !e.length) {
          return;
        }
        var i = this.cells.length - 1;
        e.forEach(function (t) {
          t.remove();
          var e = this.cells.indexOf(t);
          i = Math.min(e, i);
          n.removeFrom(this.cells, t);
        }, this);
        this.cellChange(i, true);
      };
      s.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (!e) {
          return;
        }
        e.getSize();
        var i = this.cells.indexOf(e);
        this.cellChange(i);
      };
      s.cellChange = function (t, e) {
        var i = this.selectedElement;
        this._positionCells(t);
        this._getWrapShiftCells();
        this.setGallerySize();
        var n = this.getCell(i);
        if (n) {
          this.selectedIndex = this.getCellSlideIndex(n);
        }
        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
        this.emitEvent("cellChange", [t]);
        this.select(this.selectedIndex);
        if (e) {
          this.positionSliderAtSelected();
        }
      };
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
        return n(i, t, e);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = n(i, require("./flickity"), require("fizzy-ui-utils"));
    } else {
      n(i, i.Flickity, i.fizzyUIUtils);
    }
  }());
  (function () {
    var i = window;
    var n = function t(e, i, o) {
      "use strict";
      function s(t) {
        if (t.nodeName == "IMG") {
          var e = t.getAttribute("data-flickity-lazyload");
          var i = t.getAttribute("data-flickity-lazyload-src");
          var n = t.getAttribute("data-flickity-lazyload-srcset");
          if (e || i || n) {
            return [t];
          }
        }
        var s = "img[data-flickity-lazyload], " + "img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";
        var r = t.querySelectorAll(s);
        return o.makeArray(r);
      }
      function r(t, e) {
        this.img = t;
        this.flickity = e;
        this.on("load");
      }
      i.createMethods.push("_createLazyload");
      var n = i.prototype;
      n._createLazyload = function () {
        this.on("select", this.lazyLoad);
      };
      n.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (!t) {
          return;
        }
        var e = typeof t == "number" ? t : 0;
        var i = this.getAdjacentCellElements(e);
        var n = [];
        i.forEach(function (t) {
          var e = s(t);
          n = n.concat(e);
        });
        n.forEach(function (t) {
          new r(t, this);
        }, this);
      };
      r.prototype.handleEvent = o.handleEvent;
      r.prototype.load = function () {
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src");
        var e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t;
        if (e) {
          this.img.setAttribute("srcset", e);
        }
        this.img.removeAttribute("data-flickity-lazyload");
        this.img.removeAttribute("data-flickity-lazyload-src");
        this.img.removeAttribute("data-flickity-lazyload-srcset");
      };
      r.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded");
      };
      r.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror");
      };
      r.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img);
        var n = i && i.element;
        this.flickity.cellSizeChange(n);
        this.img.classList.add(e);
        this.flickity.dispatchEvent("lazyLoad", t, n);
      };
      i.LazyLoader = r;
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
        return n(i, t, e);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = n(i, require("./flickity"), require("fizzy-ui-utils"));
    } else {
      n(i, i.Flickity, i.fizzyUIUtils);
    }
  }());
  (function () {
    var t = window;
    var e = function t(e) {
      return e;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload"));
    }
  }());
  (function () {
    var t = window;
    var e = function t(n, s) {
      function a(t, e, i) {
        return (e - t) * i + t;
      }
      n.createMethods.push("_createAsNavFor");
      var e = n.prototype;
      e._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor);
        this.on("deactivate", this.deactivateAsNavFor);
        this.on("destroy", this.destroyAsNavFor);
        var e = this.options.asNavFor;
        if (!e) {
          return;
        }
        var i = this;
        setTimeout(function t() {
          i.setNavCompanion(e);
        });
      };
      e.setNavCompanion = function (t) {
        t = s.getQueryElement(t);
        var e = n.data(t);
        if (!e || e == this) {
          return;
        }
        this.navCompanion = e;
        var i = this;
        this.onNavCompanionSelect = function () {
          i.navCompanionSelect();
        };
        e.on("select", this.onNavCompanionSelect);
        this.on("staticClick", this.onNavStaticClick);
        this.navCompanionSelect(true);
      };
      e.navCompanionSelect = function (t) {
        var e = this.navCompanion && this.navCompanion.selectedCells;
        if (!e) {
          return;
        }
        var i = e[0];
        var n = this.navCompanion.cells.indexOf(i);
        var s = n + e.length - 1;
        var r = Math.floor(a(n, s, this.navCompanion.cellAlign));
        this.selectCell(r, false, t);
        this.removeNavSelectedElements();
        if (r >= this.cells.length) {
          return;
        }
        var o = this.cells.slice(n, s + 1);
        this.navSelectedElements = o.map(function (t) {
          return t.element;
        });
        this.changeNavSelectedClass("add");
      };
      e.changeNavSelectedClass = function (e) {
        this.navSelectedElements.forEach(function (t) {
          t.classList[e]("is-nav-selected");
        });
      };
      e.activateAsNavFor = function () {
        this.navCompanionSelect(true);
      };
      e.removeNavSelectedElements = function () {
        if (!this.navSelectedElements) {
          return;
        }
        this.changeNavSelectedClass("remove");
        delete this.navSelectedElements;
      };
      e.onNavStaticClick = function (t, e, i, n) {
        if (typeof n == "number") {
          this.navCompanion.selectCell(n);
        }
      };
      e.deactivateAsNavFor = function () {
        this.removeNavSelectedElements();
      };
      e.destroyAsNavFor = function () {
        if (!this.navCompanion) {
          return;
        }
        this.navCompanion.off("select", this.onNavCompanionSelect);
        this.off("staticClick", this.onNavStaticClick);
        delete this.navCompanion;
      };
      return n;
    };
    if (typeof define == "function" && define.amd) {
      define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e);
    } else if (typeof module == "object" && module.exports) {
      module.exports = e(require("flickity"), require("fizzy-ui-utils"));
    } else {
      t.Flickity = e(t.Flickity, t.fizzyUIUtils);
    }
  }());
  (function () {
    var e = typeof window !== "undefined" ? window : this;
    var i = function t(e, i) {
      function o(t, e) {
        for (var i in e) {
          t[i] = e[i];
        }
        return t;
      }
      function a(t) {
        if (Array.isArray(t)) {
          return t;
        }
        var e = typeof t == "object" && typeof t.length == "number";
        if (e) {
          return n.call(t);
        }
        return [t];
      }
      function l(t, e, i) {
        if (!(this instanceof l)) {
          return new l(t, e, i);
        }
        var n = t;
        if (typeof t == "string") {
          n = document.querySelectorAll(t);
        }
        if (!n) {
          r.error("Bad element for imagesLoaded " + (n || t));
          return;
        }
        this.elements = a(n);
        this.options = o({}, this.options);
        if (typeof e == "function") {
          i = e;
        } else {
          o(this.options, e);
        }
        if (i) {
          this.on("always", i);
        }
        this.getImages();
        if (s) {
          this.jqDeferred = new s.Deferred;
        }
        setTimeout(this.check.bind(this));
      }
      function c(t) {
        this.img = t;
      }
      function u(t, e) {
        this.url = t;
        this.element = e;
        this.img = new Image;
      }
      var s = e.jQuery;
      var r = e.console;
      var n = Array.prototype.slice;
      l.prototype = Object.create(i.prototype);
      l.prototype.options = {};
      l.prototype.getImages = function () {
        this.images = [];
        this.elements.forEach(this.addElementImages, this);
      };
      l.prototype.addElementImages = function (t) {
        if (t.nodeName == "IMG") {
          this.addImage(t);
        }
        if (this.options.background === true) {
          this.addElementBackgroundImages(t);
        }
        var e = t.nodeType;
        if (!e || !h[e]) {
          return;
        }
        var i = t.querySelectorAll("img");
        for (var n = 0; n < i.length; n++) {
          var s = i[n];
          this.addImage(s);
        }
        if (typeof this.options.background == "string") {
          var r = t.querySelectorAll(this.options.background);
          for (n = 0; n < r.length; n++) {
            var o = r[n];
            this.addElementBackgroundImages(o);
          }
        }
      };
      var h = {1: true, 9: true, 11: true};
      l.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (!e) {
          return;
        }
        var i = /url\((['"])?(.*?)\1\)/gi;
        var n = i.exec(e.backgroundImage);
        while (n !== null) {
          var s = n && n[2];
          if (s) {
            this.addBackground(s, t);
          }
          n = i.exec(e.backgroundImage);
        }
      };
      l.prototype.addImage = function (t) {
        var e = new c(t);
        this.images.push(e);
      };
      l.prototype.addBackground = function (t, e) {
        var i = new u(t, e);
        this.images.push(i);
      };
      l.prototype.check = function () {
        function e(t, e, i) {
          setTimeout(function () {
            n.progress(t, e, i);
          });
        }
        var n = this;
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        if (!this.images.length) {
          this.complete();
          return;
        }
        this.images.forEach(function (t) {
          t.once("progress", e);
          t.check();
        });
      };
      l.prototype.progress = function (t, e, i) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        this.emitEvent("progress", [this, t, e]);
        if (this.jqDeferred && this.jqDeferred.notify) {
          this.jqDeferred.notify(this, t);
        }
        if (this.progressedCount == this.images.length) {
          this.complete();
        }
        if (this.options.debug && r) {
          r.log("progress: " + i, t, e);
        }
      };
      l.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = true;
        this.emitEvent(t, [this]);
        this.emitEvent("always", [this]);
        if (this.jqDeferred) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      };
      c.prototype = Object.create(i.prototype);
      c.prototype.check = function () {
        var t = this.getIsImageComplete();
        if (t) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          return;
        }
        this.proxyImage = new Image;
        this.proxyImage.addEventListener("load", this);
        this.proxyImage.addEventListener("error", this);
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.proxyImage.src = this.img.src;
      };
      c.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      };
      c.prototype.confirm = function (t, e) {
        this.isLoaded = t;
        this.emitEvent("progress", [this, this.img, e]);
      };
      c.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        if (this[e]) {
          this[e](t);
        }
      };
      c.prototype.onload = function () {
        this.confirm(true, "onload");
        this.unbindEvents();
      };
      c.prototype.onerror = function () {
        this.confirm(false, "onerror");
        this.unbindEvents();
      };
      c.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this);
        this.proxyImage.removeEventListener("error", this);
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
      };
      u.prototype = Object.create(c.prototype);
      u.prototype.check = function () {
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.img.src = this.url;
        var t = this.getIsImageComplete();
        if (t) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          this.unbindEvents();
        }
      };
      u.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
      };
      u.prototype.confirm = function (t, e) {
        this.isLoaded = t;
        this.emitEvent("progress", [this, this.element, e]);
      };
      l.makeJQueryPlugin = function (t) {
        t = t || e.jQuery;
        if (!t) {
          return;
        }
        s = t;
        s.fn.imagesLoaded = function (t, e) {
          var i = new l(this, t, e);
          return i.jqDeferred.promise(s(this));
        };
      };
      l.makeJQueryPlugin();
      return l;
    };
    if (typeof define == "function" && define.amd) {
      define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (t) {
        return i(e, t);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = i(e, require("ev-emitter"));
    } else {
      e.imagesLoaded = i(e, e.EvEmitter);
    }
  }());
  (function () {
    var i = window;
    var n = function t(e, i, s) {
      "use strict";
      i.createMethods.push("_createImagesLoaded");
      var n = i.prototype;
      n._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded);
      };
      n.imagesLoaded = function () {
        function t(t, e) {
          var i = n.getParentCell(e.img);
          n.cellSizeChange(i && i.element);
          if (!n.options.freeScroll) {
            n.positionSliderAtSelected();
          }
        }
        if (!this.options.imagesLoaded) {
          return;
        }
        var n = this;
        s(this.slider).on("progress", t);
      };
      return i;
    };
    if (typeof define == "function" && define.amd) {
      define(["flickity/js/index", "imagesloaded/imagesloaded"], function (t, e) {
        return n(i, t, e);
      });
    } else if (typeof module == "object" && module.exports) {
      module.exports = n(i, require("flickity"), require("imagesloaded"));
    } else {
      i.Flickity = n(i, i.Flickity, i.imagesLoaded);
    }
  }());
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  var a = function (a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h = "Close";
    var i = "BeforeClose";
    var j = "AfterClose";
    var k = "BeforeAppend";
    var l = "MarkupParse";
    var m = "Open";
    var n = "Change";
    var o = "mfp";
    var p = "." + o;
    var q = "mfp-ready";
    var r = "mfp-removing";
    var s = "mfp-prevent-close";
    var t = function () {};
    var u = !!window.jQuery;
    var v = a(window);
    var w = function (a, c) {
      b.ev.on(o + a + p, c);
    };
    var x = function (b, c, d, e) {
      var f = document.createElement("div");
      f.className = "mfp-" + b;
      if (d) {
        f.innerHTML = d;
      }
      if (e) {
        if (c) {
          c.appendChild(f);
        }
      } else {
        f = a(f);
        if (c) {
          f.appendTo(c);
        }
      }
      return f;
    };
    var y = function (c, d) {
      b.ev.triggerHandler(o + c, d);
      if (b.st.callbacks) {
        c = c.charAt(0).toLowerCase() + c.slice(1);
        if (b.st.callbacks[c]) {
          b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]);
        }
      }
    };
    var z = function (c) {
      if (c !== g || !b.currTemplate.closeBtn) {
        b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose));
        g = c;
      }
      return b.currTemplate.closeBtn;
    };
    var A = function () {
      if (!a.magnificPopup.instance) {
        b = new t;
        b.init();
        a.magnificPopup.instance = b;
      }
    };
    var B = function () {
      var a = document.createElement("p").style;
      var b = ["ms", "O", "Moz", "Webkit"];
      if (a.transition !== void 0) {
        return true;
      }
      while (b.length) {
        if (b.pop() + "Transition" in a) {
          return true;
        }
      }
      return false;
    };
    t.prototype = {constructor: t, init: function () {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener;
      b.isAndroid = /android/gi.test(c);
      b.isIOS = /iphone|ipad|ipod/gi.test(c);
      b.supportsTransition = B();
      b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
      d = a(document);
      b.popupsCache = {};
    }, open: function (c) {
      var e;
      if (c.isObj === false) {
        b.items = c.items.toArray();
        b.index = 0;
        var g;
        var h = c.items;
        for (e = 0; e < h.length; e++) {
          g = h[e];
          if (g.parsed) {
            g = g.el[0];
          }
          if (g === c.el[0]) {
            b.index = e;
            break;
          }
        }
      } else {
        b.items = a.isArray(c.items) ? c.items : [c.items];
        b.index = c.index || 0;
      }
      if (b.isOpen) {
        b.updateItemHTML();
        return;
      }
      b.types = [];
      f = "";
      if (c.mainEl && c.mainEl.length) {
        b.ev = c.mainEl.eq(0);
      } else {
        b.ev = d;
      }
      if (c.key) {
        if (!b.popupsCache[c.key]) {
          b.popupsCache[c.key] = {};
        }
        b.currTemplate = b.popupsCache[c.key];
      } else {
        b.currTemplate = {};
      }
      b.st = a.extend(true, {}, a.magnificPopup.defaults, c);
      b.fixedContentPos = b.st.fixedContentPos === "auto" ? !b.probablyMobile : b.st.fixedContentPos;
      if (b.st.modal) {
        b.st.closeOnContentClick = false;
        b.st.closeOnBgClick = false;
        b.st.showCloseBtn = false;
        b.st.enableEscapeKey = false;
      }
      if (!b.bgOverlay) {
        b.bgOverlay = x("bg").on("click" + p, function () {
          b.close();
        });
        b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
          if (b._checkIfClose(a.target)) {
            b.close();
          }
        });
        b.container = x("container", b.wrap);
      }
      b.contentContainer = x("content");
      if (b.st.preloader) {
        b.preloader = x("preloader", b.container, b.st.tLoading);
      }
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1);
        b["init" + j].call(b);
      }
      y("BeforeOpen");
      if (b.st.showCloseBtn) {
        if (b.st.closeBtnInside) {
          w(l, function (a, b, c, d) {
            c.close_replaceWith = z(d.type);
          });
          f += " mfp-close-btn-in";
        } else {
          b.wrap.append(z());
        }
      }
      if (b.st.alignTop) {
        f += " mfp-align-top";
      }
      if (b.fixedContentPos) {
        b.wrap.css({overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY});
      } else {
        b.wrap.css({top: v.scrollTop(), position: "absolute"});
      }
      if (b.st.fixedBgPos === false || b.st.fixedBgPos === "auto" && !b.fixedContentPos) {
        b.bgOverlay.css({height: d.height(), position: "absolute"});
      }
      if (b.st.enableEscapeKey) {
        d.on("keyup" + p, function (a) {
          if (a.keyCode === 27) {
            b.close();
          }
        });
      }
      v.on("resize" + p, function () {
        b.updateSize();
      });
      if (!b.st.closeOnContentClick) {
        f += " mfp-auto-cursor";
      }
      if (f) {
        b.wrap.addClass(f);
      }
      var k = b.wH = v.height();
      var n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        if (o) {
          n.marginRight = o;
        }
      }
      if (b.fixedContentPos) {
        if (b.isIE7) {
          a("body, html").css("overflow", "hidden");
        } else {
          n.overflow = "hidden";
        }
      }
      var r = b.st.mainClass;
      if (b.isIE7) {
        r += " mfp-ie7";
      }
      if (r) {
        b._addClassToMFP(r);
      }
      b.updateItemHTML();
      y("BuildControls");
      a("html").css(n);
      b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body));
      b._lastFocusedEl = document.activeElement;
      setTimeout(function () {
        if (b.content) {
          b._addClassToMFP(q);
          b._setFocus();
        } else {
          b.bgOverlay.addClass(q);
        }
        d.on("focusin" + p, b._onFocusIn);
      }, 16);
      b.isOpen = true;
      b.updateSize(k);
      y(m);
      return c;
    }, close: function () {
      if (b.isOpen) {
        y(i);
        b.isOpen = false;
        if (b.st.removalDelay && !b.isLowIE && b.supportsTransition) {
          b._addClassToMFP(r);
          setTimeout(function () {
            b._close();
          }, b.st.removalDelay);
        } else {
          b._close();
        }
      }
    }, _close: function () {
      y(h);
      var c = r + " " + q + " ";
      b.bgOverlay.detach();
      b.wrap.detach();
      b.container.empty();
      if (b.st.mainClass) {
        c += b.st.mainClass + " ";
      }
      b._removeClassFromMFP(c);
      if (b.fixedContentPos) {
        var e = {marginRight: ""};
        if (b.isIE7) {
          a("body, html").css("overflow", "");
        } else {
          e.overflow = "";
        }
        a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p);
      b.ev.off(p);
      b.wrap.attr("class", "mfp-wrap").removeAttr("style");
      b.bgOverlay.attr("class", "mfp-bg");
      b.container.attr("class", "mfp-container");
      if (!!b.st.showCloseBtn && (!b.st.closeBtnInside || b.currTemplate[b.currItem.type] === true)) {
        if (b.currTemplate.closeBtn) {
          b.currTemplate.closeBtn.detach();
        }
      }
      if (b.st.autoFocusLast && b._lastFocusedEl) {
        a(b._lastFocusedEl).focus();
      }
      b.currItem = null;
      b.content = null;
      b.currTemplate = null;
      b.prevHeight = 0;
      y(j);
    }, updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth;
        var d = window.innerHeight * c;
        b.wrap.css("height", d);
        b.wH = d;
      } else {
        b.wH = a || v.height();
      }
      if (!b.fixedContentPos) {
        b.wrap.css("height", b.wH);
      }
      y("Resize");
    }, updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach();
      if (b.content) {
        b.content.detach();
      }
      if (!c.parsed) {
        c = b.parseEl(b.index);
      }
      var d = c.type;
      y("BeforeChange", [b.currItem ? b.currItem.type : "", d]);
      b.currItem = c;
      if (!b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : false;
        y("FirstMarkupParse", f);
        if (f) {
          b.currTemplate[d] = a(f);
        } else {
          b.currTemplate[d] = true;
        }
      }
      if (e && e !== c.type) {
        b.container.removeClass("mfp-" + e + "-holder");
      }
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d);
      c.preloaded = true;
      y(n, c);
      e = c.type;
      b.container.prepend(b.contentContainer);
      y("AfterChange");
    }, appendContent: function (a, c) {
      b.content = a;
      if (a) {
        if (b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === true) {
          if (!b.content.find(".mfp-close").length) {
            b.content.append(z());
          }
        } else {
          b.content = a;
        }
      } else {
        b.content = "";
      }
      y(k);
      b.container.addClass("mfp-" + c + "-holder");
      b.contentContainer.append(b.content);
    }, parseEl: function (c) {
      var d;
      var e = b.items[c];
      if (e.tagName) {
        e = {el: a(e)};
      } else {
        d = e.type;
        e = {data: e, src: e.src};
      }
      if (e.el) {
        var f = b.types;
        for (var g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        }
        e.src = e.el.attr("data-mfp-src");
        if (!e.src) {
          e.src = e.el.attr("href");
        }
      }
      e.type = d || b.st.type || "inline";
      e.index = c;
      e.parsed = true;
      b.items[c] = e;
      y("ElementParse", e);
      return b.items[c];
    }, addGroup: function (a, c) {
      var d = function (d) {
        d.mfpEl = this;
        b._openClick(d, a, c);
      };
      if (!c) {
        c = {};
      }
      var e = "click.magnificPopup";
      c.mainEl = a;
      if (c.items) {
        c.isObj = true;
        a.off(e).on(e, d);
      } else {
        c.isObj = false;
        if (c.delegate) {
          a.off(e).on(e, c.delegate, d);
        } else {
          c.items = a;
          a.off(e).on(e, d);
        }
      }
    }, _openClick: function (c, d, e) {
      var f = e.midClick !== void 0 ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || c.which !== 2 && !c.ctrlKey && !c.metaKey && !c.altKey && !c.shiftKey) {
        var g = e.disableOn !== void 0 ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g) {
          if (a.isFunction(g)) {
            if (!g.call(b)) {
              return true;
            }
          } else if (v.width() < g) {
            return true;
          }
        }
        if (c.type) {
          c.preventDefault();
          if (b.isOpen) {
            c.stopPropagation();
          }
        }
        e.el = a(c.mfpEl);
        if (e.delegate) {
          e.items = d.find(e.delegate);
        }
        b.open(e);
      }
    }, updateStatus: function (a, d) {
      if (b.preloader) {
        if (c !== a) {
          b.container.removeClass("mfp-s-" + c);
        }
        if (!d && a === "loading") {
          d = b.st.tLoading;
        }
        var e = {status: a, text: d};
        y("UpdateStatus", e);
        a = e.status;
        d = e.text;
        b.preloader.html(d);
        b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        });
        b.container.addClass("mfp-s-" + a);
        c = a;
      }
    }, _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick;
        var e = b.st.closeOnBgClick;
        if (d && e) {
          return true;
        }
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) {
          return true;
        }
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) {
            return true;
          }
        } else if (e && a.contains(document, c)) {
          return true;
        }
        return false;
      }
    }, _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a);
      b.wrap.addClass(a);
    }, _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a);
      b.wrap.removeClass(a);
    }, _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    }, _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    }, _onFocusIn: function (c) {
      if (c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)) {
        return;
      } else {
        b._setFocus();
        return false;
      }
    }, _parseMarkup: function (b, c, d) {
      var e;
      if (d.data) {
        c = a.extend(d.data, c);
      }
      y(l, [b, c, d]);
      a.each(c, function (c, d) {
        if (d === void 0 || d === false) {
          return true;
        }
        e = c.split("_");
        if (e.length > 1) {
          var f = b.find(p + "-" + e[0]);
          if (f.length > 0) {
            var g = e[1];
            if (g === "replaceWith") {
              if (f[0] !== d[0]) {
                f.replaceWith(d);
              }
            } else if (g === "img") {
              if (f.is("img")) {
                f.attr("src", d);
              } else {
                f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class")));
              }
            } else {
              f.attr(e[1], d);
            }
          }
        } else {
          b.find(p + "-" + c).html(d);
        }
      });
    }, _getScrollbarSize: function () {
      if (b.scrollbarSize === void 0) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
        document.body.appendChild(a);
        b.scrollbarSize = a.offsetWidth - a.clientWidth;
        document.body.removeChild(a);
      }
      return b.scrollbarSize;
    }};
    a.magnificPopup = {instance: null, proto: t.prototype, modules: [], open: function (b, c) {
      A();
      b = b ? a.extend(true, {}, b) : {};
      b.isObj = true;
      b.index = c || 0;
      return this.instance.open(b);
    }, close: function () {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    }, registerModule: function (b, c) {
      if (c.options) {
        a.magnificPopup.defaults[b] = c.options;
      }
      a.extend(this.proto, c.proto);
      this.modules.push(b);
    }, defaults: {disableOn: 0, key: null, midClick: false, mainClass: "", preloader: true, focus: "", closeOnContentClick: false, closeOnBgClick: true, closeBtnInside: true, showCloseBtn: true, enableEscapeKey: true, modal: false, alignTop: false, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: true}};
    a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if (typeof c == "string") {
        if (c === "open") {
          var e;
          var f = u ? d.data("magnificPopup") : d[0].magnificPopup;
          var g = parseInt(arguments[1], 10) || 0;
          if (f.items) {
            e = f.items[g];
          } else {
            e = d;
            if (f.delegate) {
              e = e.find(f.delegate);
            }
            e = e.eq(g);
          }
          b._openClick({mfpEl: e}, d, f);
        } else if (b.isOpen) {
          b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        }
      } else {
        c = a.extend(true, {}, c);
        if (u) {
          d.data("magnificPopup", c);
        } else {
          d[0].magnificPopup = c;
        }
        b.addGroup(d, c);
      }
      return d;
    };
    var C;
    var D;
    var E;
    var F = "inline";
    var G = function () {
      if (E) {
        D.after(E.addClass(C)).detach();
        E = null;
      }
    };
    a.magnificPopup.registerModule(F, {options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"}, proto: {initInline: function () {
      b.types.push(F);
      w(h + "." + F, function () {
        G();
      });
    }, getInline: function (c, d) {
      G();
      if (c.src) {
        var e = b.st.inline;
        var f = a(c.src);
        if (f.length) {
          var g = f[0].parentNode;
          if (g && g.tagName) {
            if (!D) {
              C = e.hiddenClass;
              D = x(C);
              C = "mfp-" + C;
            }
            E = f.after(D).detach().removeClass(C);
          }
          b.updateStatus("ready");
        } else {
          b.updateStatus("error", e.tNotFound);
          f = a("<div>");
        }
        c.inlineElement = f;
        return f;
      }
      b.updateStatus("ready");
      b._parseMarkup(d, {}, c);
      return d;
    }}});
    var H;
    var I = "ajax";
    var J = function () {
      if (H) {
        a(document.body).removeClass(H);
      }
    };
    var K = function () {
      J();
      if (b.req) {
        b.req.abort();
      }
    };
    a.magnificPopup.registerModule(I, {options: {settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.'}, proto: {initAjax: function () {
      b.types.push(I);
      H = b.st.ajax.cursor;
      w(h + "." + I, K);
      w("BeforeChange." + I, K);
    }, getAjax: function (c) {
      if (H) {
        a(document.body).addClass(H);
      }
      b.updateStatus("loading");
      var d = a.extend({url: c.src, success: function (d, e, f) {
        var g = {data: d, xhr: f};
        y("ParseAjax", g);
        b.appendContent(a(g.data), I);
        c.finished = true;
        J();
        b._setFocus();
        setTimeout(function () {
          b.wrap.addClass(q);
        }, 16);
        b.updateStatus("ready");
        y("AjaxContentAdded");
      }, error: function () {
        J();
        c.finished = c.loadError = true;
        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
      }}, b.st.ajax.settings);
      b.req = a.ajax(d);
      return "";
    }}});
    var L;
    var M = function (c) {
      if (c.data && c.data.title !== void 0) {
        return c.data.title;
      }
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) {
          return d.call(b, c);
        }
        if (c.el) {
          return c.el.attr(d) || "";
        }
      }
      return "";
    };
    a.magnificPopup.registerModule("image", {options: {markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: true, tError: '<a href="%url%">The image</a> could not be loaded.'}, proto: {initImage: function () {
      var c = b.st.image;
      var d = ".image";
      b.types.push("image");
      w(m + d, function () {
        if (b.currItem.type === "image" && c.cursor) {
          a(document.body).addClass(c.cursor);
        }
      });
      w(h + d, function () {
        if (c.cursor) {
          a(document.body).removeClass(c.cursor);
        }
        v.off("resize" + p);
      });
      w("Resize" + d, b.resizeImage);
      if (b.isLowIE) {
        w("AfterChange", b.resizeImage);
      }
    }, resizeImage: function () {
      var a = b.currItem;
      if (a && a.img && b.st.image.verticalFit) {
        var c = 0;
        if (b.isLowIE) {
          c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10);
        }
        a.img.css("max-height", b.wH - c);
      }
    }, _onImageHasSize: function (a) {
      if (a.img) {
        a.hasSize = true;
        if (L) {
          clearInterval(L);
        }
        a.isCheckingImgSize = false;
        y("ImageHasSize", a);
        if (a.imgHidden) {
          if (b.content) {
            b.content.removeClass("mfp-loading");
          }
          a.imgHidden = false;
        }
      }
    }, findImageSize: function (a) {
      var c = 0;
      var d = a.img[0];
      var e = function (f) {
        if (L) {
          clearInterval(L);
        }
        L = setInterval(function () {
          if (d.naturalWidth > 0) {
            b._onImageHasSize(a);
            return;
          } else {
            if (c > 200) {
              clearInterval(L);
            }
            c++;
            if (c === 3) {
              e(10);
            } else if (c === 40) {
              e(50);
            } else if (c === 100) {
              e(500);
            }
            return;
          }
        }, f);
      };
      e(1);
    }, getImage: function (c, d) {
      var e = 0;
      var f = function () {
        if (c) {
          if (c.img[0].complete) {
            c.img.off(".mfploader");
            if (c === b.currItem) {
              b._onImageHasSize(c);
              b.updateStatus("ready");
            }
            c.hasSize = true;
            c.loaded = true;
            y("ImageLoadComplete");
          } else {
            e++;
            if (200 > e) {
              setTimeout(f, 100);
            } else {
              g();
            }
          }
        }
      };
      var g = function () {
        if (c) {
          c.img.off(".mfploader");
          if (c === b.currItem) {
            b._onImageHasSize(c);
            b.updateStatus("error", h.tError.replace("%url%", c.src));
          }
          c.hasSize = true;
          c.loaded = true;
          c.loadError = true;
        }
      };
      var h = b.st.image;
      var i = d.find(".mfp-img");
      if (i.length) {
        var j = document.createElement("img");
        j.className = "mfp-img";
        if (c.el && c.el.find("img").length) {
          j.alt = c.el.find("img").attr("alt");
        }
        c.img = a(j).on("load.mfploader", f).on("error.mfploader", g);
        j.src = c.src;
        if (i.is("img")) {
          c.img = c.img.clone();
        }
        j = c.img[0];
        if (j.naturalWidth > 0) {
          c.hasSize = true;
        } else if (!j.width) {
          c.hasSize = false;
        }
      }
      b._parseMarkup(d, {title: M(c), img_replaceWith: c.img}, c);
      b.resizeImage();
      if (c.hasSize) {
        if (L) {
          clearInterval(L);
        }
        if (c.loadError) {
          d.addClass("mfp-loading");
          b.updateStatus("error", h.tError.replace("%url%", c.src));
        } else {
          d.removeClass("mfp-loading");
          b.updateStatus("ready");
        }
        return d;
      } else {
        b.updateStatus("loading");
        c.loading = true;
        if (!c.hasSize) {
          c.imgHidden = true;
          d.addClass("mfp-loading");
          b.findImageSize(c);
        }
        return d;
      }
    }}});
    var N;
    var O = function () {
      if (N === void 0) {
        N = document.createElement("p").style.MozTransform !== void 0;
      }
      return N;
    };
    a.magnificPopup.registerModule("zoom", {options: {enabled: false, easing: "ease-in-out", duration: 300, opener: function (a) {
      if (a.is("img")) {
        return a;
      } else {
        return a.find("img");
      }
    }}, proto: {initZoom: function () {
      var a;
      var c = b.st.zoom;
      var d = ".zoom";
      if (c.enabled && b.supportsTransition) {
        var e;
        var f;
        var g = c.duration;
        var j = function (a) {
          var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");
          var d = "all " + c.duration / 1e3 + "s " + c.easing;
          var e = {position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden"};
          var f = "transition";
          e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d;
          b.css(e);
          return b;
        };
        var k = function () {
          b.content.css("visibility", "visible");
        };
        w("BuildControls" + d, function () {
          if (b._allowZoom()) {
            clearTimeout(e);
            b.content.css("visibility", "hidden");
            a = b._getItemToZoom();
            if (!a) {
              k();
              return;
            }
            f = j(a);
            f.css(b._getOffset());
            b.wrap.append(f);
            e = setTimeout(function () {
              f.css(b._getOffset(true));
              e = setTimeout(function () {
                k();
                setTimeout(function () {
                  f.remove();
                  a = f = null;
                  y("ZoomAnimationEnded");
                }, 16);
              }, g);
            }, 16);
          }
        });
        w(i + d, function () {
          if (b._allowZoom()) {
            clearTimeout(e);
            b.st.removalDelay = g;
            if (!a) {
              a = b._getItemToZoom();
              if (!a) {
                return;
              }
              f = j(a);
            }
            f.css(b._getOffset(true));
            b.wrap.append(f);
            b.content.css("visibility", "hidden");
            setTimeout(function () {
              f.css(b._getOffset());
            }, 16);
          }
        });
        w(h + d, function () {
          if (b._allowZoom()) {
            k();
            if (f) {
              f.remove();
            }
            a = null;
          }
        });
      }
    }, _allowZoom: function () {
      return b.currItem.type === "image";
    }, _getItemToZoom: function () {
      if (b.currItem.hasSize) {
        return b.currItem.img;
      } else {
        return false;
      }
    }, _getOffset: function (c) {
      var d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
      var e = d.offset();
      var f = parseInt(d.css("padding-top"), 10);
      var g = parseInt(d.css("padding-bottom"), 10);
      e.top -= a(window).scrollTop() - f;
      var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
      if (O()) {
        h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)";
      } else {
        h.left = e.left;
        h.top = e.top;
      }
      return h;
    }}});
    var P = "iframe";
    var Q = "//about:blank";
    var R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        if (c.length) {
          if (!a) {
            c[0].src = Q;
          }
          if (b.isIE8) {
            c.css("display", a ? "block" : "none");
          }
        }
      }
    };
    a.magnificPopup.registerModule(P, {options: {markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: {youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"}, vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"}, gmaps: {index: "//maps.google.", src: "%id%&output=embed"}}}, proto: {initIframe: function () {
      b.types.push(P);
      w("BeforeChange", function (a, b, c) {
        if (b !== c) {
          if (b === P) {
            R();
          } else if (c === P) {
            R(true);
          }
        }
      });
      w(h + "." + P, function () {
        R();
      });
    }, getIframe: function (c, d) {
      var e = c.src;
      var f = b.st.iframe;
      a.each(f.patterns, function () {
        if (e.indexOf(this.index) > -1) {
          if (this.id) {
            e = typeof this.id == "string" ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e);
          }
          e = this.src.replace("%id%", e);
          return false;
        } else {
          return;
        }
      });
      var g = {};
      if (f.srcAction) {
        g[f.srcAction] = e;
      }
      b._parseMarkup(d, g, c);
      b.updateStatus("ready");
      return d;
    }}});
    var S = function (a) {
      var c = b.items.length;
      if (a > c - 1) {
        return a - c;
      } else if (0 > a) {
        return c + a;
      } else {
        return a;
      }
    };
    var T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
    a.magnificPopup.registerModule("gallery", {options: {enabled: false, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: true, arrows: true, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%"}, proto: {initGallery: function () {
      var c = b.st.gallery;
      var e = ".mfp-gallery";
      b.direction = true;
      if (c && c.enabled) {
        f += " mfp-gallery";
        w(m + e, function () {
          if (c.navigateByImgClick) {
            b.wrap.on("click" + e, ".mfp-img", function () {
              if (b.items.length > 1) {
                b.next();
                return false;
              } else {
                return;
              }
            });
          }
          d.on("keydown" + e, function (a) {
            if (a.keyCode === 37) {
              b.prev();
            } else if (a.keyCode === 39) {
              b.next();
            }
          });
        });
        w("UpdateStatus" + e, function (a, c) {
          if (c.text) {
            c.text = T(c.text, b.currItem.index, b.items.length);
          }
        });
        w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        });
        w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup;
            var e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s);
            var f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.on("click", function () {
              b.prev();
            });
            f.on("click", function () {
              b.next();
            });
            b.container.append(e.add(f));
          }
        });
        w(n + e, function () {
          if (b._preloadTimeout) {
            clearTimeout(b._preloadTimeout);
          }
          b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages();
            b._preloadTimeout = null;
          }, 16);
        });
        w(h + e, function () {
          d.off(e);
          b.wrap.off("click" + e);
          b.arrowRight = b.arrowLeft = null;
        });
        return;
      } else {
        return false;
      }
    }, next: function () {
      b.direction = true;
      b.index = S(b.index + 1);
      b.updateItemHTML();
    }, prev: function () {
      b.direction = false;
      b.index = S(b.index - 1);
      b.updateItemHTML();
    }, goTo: function (a) {
      b.direction = a >= b.index;
      b.index = a;
      b.updateItemHTML();
    }, preloadNearbyImages: function () {
      var c = b.st.gallery.preload;
      var d = Math.min(c[0], b.items.length);
      var e = Math.min(c[1], b.items.length);
      for (var a = 1; a <= (b.direction ? e : d); a++) {
        b._preloadItem(b.index + a);
      }
      for (a = 1; a <= (b.direction ? d : e); a++) {
        b._preloadItem(b.index - a);
      }
    }, _preloadItem: function (c) {
      c = S(c);
      if (!b.items[c].preloaded) {
        var d = b.items[c];
        if (!d.parsed) {
          d = b.parseEl(c);
        }
        y("LazyLoad", d);
        if (d.type === "image") {
          d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = true;
          }).on("error.mfploader", function () {
            d.hasSize = true;
            d.loadError = true;
            y("LazyLoadError", d);
          }).attr("src", d.src);
        }
        d.preloaded = true;
      }
    }}});
    var U = "retina";
    a.magnificPopup.registerModule(U, {options: {replaceSrc: function (a) {
      return a.src.replace(/\.\w+$/, function (a) {
        return "@2x" + a;
      });
    }, ratio: 1}, proto: {initRetina: function () {
      if (window.devicePixelRatio > 1) {
        var a = b.st.retina;
        var c = a.ratio;
        c = isNaN(c) ? c() : c;
        if (c > 1) {
          w("ImageHasSize." + U, function (a, b) {
            b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"});
          });
          w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          });
        }
      }
    }}});
    A();
  };
  if (typeof define == "function" && define.amd) {
    define(["jquery"], a);
  } else {
    a(typeof exports == "object" ? require("jquery") : window.jQuery || window.Zepto);
  }
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  "use strict";
  function u(e, t) {
    var n = e.getAttribute(t);
    if (typeof n == "string" && n !== "" && n !== "sidr-inner") {
      e.setAttribute(t, n.replace(/([A-Za-z0-9_.-]+)/g, "sidr-" + t + "-$1"));
    }
  }
  function f(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) {
        i.writable = true;
      }
      Object.defineProperty(e, i.key, i);
    }
  }
  function y(e, t, n) {
    var i = n.split(" ");
    for (var o = 0; o < i.length; o++) {
      var s = i[o].trim();
      e.classList[t](s);
    }
  }
  function b(e, t, n) {
    e[t] = n;
  }
  function C(e) {
    h(this, C);
    this.element = e;
  }
  function w(e) {
    return e.tagName === "BODY";
  }
  function M(e) {
    var t = "sidr-open";
    if (e !== "sidr") {
      t += " " + e + "-open";
    }
    return t;
  }
  function _(e, t) {
    h(this, _);
    var n = v(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, d.qs(e.body)));
    n.name = e.name;
    n.side = e.side;
    n.speed = e.speed;
    n.timing = e.timing;
    n.displace = e.displace;
    n.menuWidth = t;
    return n;
  }
  function P(e) {
    h(this, P);
    var t = v(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, d.id(e.name)));
    t.name = e.name;
    t.speed = e.speed;
    t.side = e.side;
    t.displace = e.displace;
    t.source = e.source;
    t.timing = e.timing;
    t.method = e.method;
    t.renaming = e.renaming;
    t.onOpenCallback = e.onOpen;
    t.onCloseCallback = e.onClose;
    t.onOpenEndCallback = e.onOpenEnd;
    t.onCloseEndCallback = e.onCloseEnd;
    t.init(e);
    return t;
  }
  function x(e) {
    if (e === "status") {
      return T;
    } else if (L[e]) {
      return L[e].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof e != "function" && typeof e != "string" && e) {
      console.error("Method " + e + " does not exist on sidr");
      return;
    } else {
      return L.toggle.apply(this, arguments);
    }
  }
  function S(e, t) {
    h(this, S);
    e = v(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, e));
    e.init(t);
    return e;
  }
  var s = {name: "sidr", speed: 200, side: "left", source: null, renaming: true, body: "body", displace: true, timing: "ease", method: "toggle", bind: "click", onOpen: function () {}, onClose: function () {}, onOpenEnd: function () {}, onCloseEnd: function () {}};
  var n = {};
  var r = function (e, t) {
    n[e] = t;
  };
  var i = function (e) {
    return n[e];
  };
  var o = function (e) {
    return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e);
  };
  var a = function (e, t) {
    for (var n in t) {
      if (t.hasOwnProperty(n)) {
        e[n] = t[n];
      }
    }
    return e;
  };
  var l = function (e, t) {
    var n = new XMLHttpRequest;
    n.onreadystatechange = function () {
      if (n.readyState === 4 && n.status === 200) {
        t(n.responseText);
      }
    };
    n.open("GET", e, true);
    n.send();
  };
  var e;
  var t;
  var c;
  var d = {id: function (e) {
    return document.getElementById(e);
  }, qs: function (e) {
    return document.querySelector(e);
  }, qsa: function (e) {
    return document.querySelectorAll(e);
  }, createElement: function (e) {
    var t = document.createElement("div");
    t.id = e;
    document.body.appendChild(t);
    return t;
  }, getHTMLContent: function (e) {
    var i = this;
    var o = "";
    e.split(", ").forEach(function (e) {
      var t = i.qsa(e);
      for (var n = 0; n < t.length; n++) {
        o += '<div class="sidr-inner">' + t[n].innerHTML + "</div>";
      }
    });
    return o;
  }, addPrefixes: function (e) {
    var t = document.createElement("div");
    t.innerHTML = e;
    var n = t.querySelectorAll("*");
    for (var i = 0; i < n.length; i++) {
      u(n[i], "id");
      u(n[i], "class");
      n[i].removeAttribute("style");
    }
    return t.innerHTML;
  }, transitions: (e = (document.body || document.documentElement).style, t = false, c = p = "transition", m = "transitionend", p in e ? t = true : (c = (t = !!(e = function (e, t) {
    var n;
    var i = ["moz", "webkit", "o", "ms"];
    for (var o = 0; o < i.length; o++) {
      if ((n = i[o]) + e in t) {
        return n;
      }
    }
    return false;
  }(p = p.charAt(0).toUpperCase() + p.substr(1), e))) ? e + p : null, p = t ? "-" + e + "-" + p.toLowerCase() : null, e === "webkit" ? m = "webkitTransitionEnd" : e === "0" && (m = "oTransitionEnd")), {cssProperty: c, supported: t, property: p, event: m})};
  var h = function (e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var p = function (e, t, n) {
    if (t) {
      f(e.prototype, t);
    }
    if (n) {
      f(e, n);
    }
    return e;
  };
  var m = function (e, t) {
    if (typeof t != "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {constructor: {value: e, enumerable: false, writable: true, configurable: true}});
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t);
      } else {
        e.__proto__ = t;
      }
    }
  };
  var v = function (e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    if (!t || typeof t != "object" && typeof t != "function") {
      return e;
    } else {
      return t;
    }
  };
  p(C, [{key: "bind", value: function (e, t) {
    this.element.addEventListener(e, t, false);
  }}, {key: "unbind", value: function (e, t) {
    this.element.removeEventListener(e, t, false);
  }}, {key: "style", value: function (e, t) {
    if (typeof e == "string") {
      this.element.style[e] = t;
    } else {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          this.element.style[n] = e[n];
        }
      }
    }
  }}, {key: "addClass", value: function (e) {
    y(this.element, "add", e);
  }}, {key: "removeClass", value: function (e) {
    y(this.element, "remove", e);
  }}, {key: "html", value: function (e) {
    if (!e) {
      return this.element.innerHTML;
    }
    b(this.element, "innerHTML", e);
  }}, {key: "scrollTop", value: function (e) {
    if (!e) {
      return this.element.scrollTop;
    }
    b(this.element, "scrollTop", e);
  }}, {key: "offsetWidth", value: function () {
    return this.element.offsetWidth;
  }}]);
  var g = C;
  var k = "sidr-animating";
  var O = "open";
  m(_, g);
  p(_, [{key: "prepare", value: function (e) {
    var t;
    var n = e === O ? "hidden" : "";
    if (w(this.element)) {
      e = (t = new g(d.qs("html"))).scrollTop();
      t.style("overflowX", n);
      t.scrollTop(e);
    }
  }}, {key: "unprepare", value: function () {
    if (w(this.element)) {
      new g(d.qs("html")).style("overflowX", "");
    }
  }}, {key: "move", value: function (e) {
    this.addClass(k);
    if (e === O) {
      this.open();
    } else {
      this.close();
    }
  }}, {key: "open", value: function () {
    var e;
    var t;
    var n = this;
    if (this.displace) {
      e = d.transitions;
      t = {width: this.offsetWidth() + "px", position: "initial"};
      this.style(this.side, "0");
      this.style(e.cssProperty, this.side + " " + this.speed / 1e3 + "s " + this.timing);
      this.style(t);
      setTimeout(function () {
        return n.style(n.side, n.menuWidth + "px");
      }, 1);
    }
  }}, {key: "onClose", value: function () {
    var e = d.transitions;
    var t = {width: "", position: "", right: "", left: ""};
    t[e.cssProperty] = "";
    this.style(t);
    this.unbind(e.event, this.temporalCallback);
  }}, {key: "close", value: function () {
    var e;
    var t;
    if (this.displace) {
      e = d.transitions;
      this.style(this.side, 0);
      (t = this).temporalCallback = function () {
        t.onClose();
      };
      this.bind(e.event, this.temporalCallback);
    }
  }}, {key: "removeAnimationClass", value: function () {
    this.removeClass(k);
  }}, {key: "removeOpenClass", value: function () {
    this.removeClass(M(this.name));
  }}, {key: "addOpenClass", value: function () {
    this.addClass(M(this.name));
  }}]);
  var E = _;
  var T = {moving: false, opened: false};
  m(P, g);
  p(P, [{key: "init", value: function (e) {
    if (!this.element) {
      this.element = d.createElement(this.name);
    }
    this.style(d.transitions.cssProperty, this.side + " " + this.speed / 1e3 + "s " + this.timing);
    this.addClass("sidr " + this.side + " sidr-" + this.side);
    this.body = new E(e, this.offsetWidth());
    this.reload();
  }}, {key: "reload", value: function () {
    var e;
    var t = this;
    if (typeof this.source == "function") {
      e = this.source(name);
      this.html(e);
    } else if (typeof this.source == "string" && o(this.source)) {
      l(this.source, function (e) {
        t.html(e);
      });
    } else if (typeof this.source == "string") {
      e = d.getHTMLContent(this.source);
      if (this.renaming) {
        e = d.addPrefixes(e);
      }
      this.html(e);
    } else if (this.source !== null) {
      console.error("Invalid Sidr Source");
    }
  }}, {key: "move", value: function (e, t) {
    T.moving = true;
    this.body.prepare(e);
    this.body.move(e);
    this.moveMenu(e, t);
  }}, {key: "open", value: function (e) {
    var t = this;
    if (T.opened !== this.name && !T.moving) {
      if (T.opened === false) {
        this.move("open", e);
        this.onOpenCallback();
      } else {
        i(T.opened).close(function () {
          t.open(e);
        });
      }
    }
  }}, {key: "close", value: function (e) {
    if (T.opened === this.name && !T.moving) {
      this.move("close", e);
      this.onCloseCallback();
    }
  }}, {key: "toggle", value: function (e) {
    if (T.opened === this.name) {
      this.close(e);
    } else {
      this.open(e);
    }
  }}, {key: "onOpenMenu", value: function (e) {
    var t = this.name;
    T.moving = false;
    T.opened = t;
    this.unbind(d.transitions.event, this.temporalOpenMenuCallback);
    this.body.removeAnimationClass();
    this.body.addOpenClass();
    this.onOpenEndCallback();
    if (typeof e == "function") {
      e(t);
    }
  }}, {key: "openMenu", value: function (e) {
    var t = this;
    this.style(this.side, 0);
    this.temporalOpenMenuCallback = function () {
      t.onOpenMenu(e);
    };
    this.bind(d.transitions.event, this.temporalOpenMenuCallback);
  }}, {key: "onCloseMenu", value: function (e) {
    this.unbind(d.transitions.event, this.temporalCloseMenuCallback);
    this.style({left: "", right: ""});
    this.body.unprepare();
    T.moving = false;
    T.opened = false;
    this.body.removeAnimationClass();
    this.body.removeOpenClass();
    this.onCloseEndCallback();
    if (typeof e == "function") {
      e(name);
    }
  }}, {key: "closeMenu", value: function (e) {
    var t = this;
    this.style(this.side, "");
    this.temporalCloseMenuCallback = function () {
      t.onCloseMenu(e);
    };
    this.bind(d.transitions.event, this.temporalCloseMenuCallback);
  }}, {key: "moveMenu", value: function (e, t) {
    if (e === "open") {
      this.openMenu(t);
    } else {
      this.closeMenu(t);
    }
  }}]);
  var A = P;
  var L = {};
  var q = ["open", "close", "toggle", "reload"];
  for (var z = 0; z < q.length; z++) {
    var j = q[z];
    L[j] = function () {
      var n = j;
      return function (e, t) {
        e = typeof e == "function" ? (t = e, "sidr") : e || "sidr";
        i(e)[n](t);
      };
    }();
  }
  m(S, g);
  p(S, [{key: "init", value: function (e) {
    var t;
    var n;
    if (!this.element.getAttribute("data-sidr")) {
      t = e.name;
      n = e.method;
      e = e.bind;
      this.element.setAttribute("data-sidr", t);
      this.bind(e, function (e) {
        e.preventDefault();
        x(n, t);
      });
    }
  }}]);
  var H = S;
  window.sidr = {new: function (e, t) {
    var n = a(s, t);
    var i = d.qsa(e);
    r(n.name, new A(n));
    for (var o = 0; o < i.length; o++) {
      new H(i[o], n);
    }
  }, status: function () {
    return x.apply(void 0, ["status"].concat(Array.prototype.slice.call(arguments)));
  }, reload: function () {
    return x.apply(void 0, ["reload"].concat(Array.prototype.slice.call(arguments)));
  }, close: function () {
    return x.apply(void 0, ["close"].concat(Array.prototype.slice.call(arguments)));
  }, open: function () {
    return x.apply(void 0, ["open"].concat(Array.prototype.slice.call(arguments)));
  }, toggle: function () {
    return x.apply(void 0, ["toggle"].concat(Array.prototype.slice.call(arguments)));
  }};
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function (a, b) {
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = b();
  } else if (typeof define == "function" && define.amd) {
    define(b);
  } else {
    a = a || self;
    a.PerfectScrollbar = b();
  }
}(this, function () {
  "use strict";
  function a(a) {
    return getComputedStyle(a);
  }
  function b(a, b) {
    for (var c in b) {
      var d = b[c];
      if (typeof d == "number") {
        d += "px";
      }
      a.style[c] = d;
    }
    return a;
  }
  function c(a) {
    var b = document.createElement("div");
    b.className = a;
    return b;
  }
  function d(a, b) {
    if (!w) {
      throw new Error("No element matching method supported");
    }
    return w.call(a, b);
  }
  function e(a) {
    if (a.remove) {
      a.remove();
    } else if (a.parentNode) {
      a.parentNode.removeChild(a);
    }
  }
  function f(a, b) {
    return Array.prototype.filter.call(a.children, function (a) {
      return d(a, b);
    });
  }
  function g(a, b) {
    var c = a.element.classList;
    var d = z.state.scrolling(b);
    if (c.contains(d)) {
      clearTimeout(A[b]);
    } else {
      c.add(d);
    }
  }
  function h(a, b) {
    A[b] = setTimeout(function () {
      return a.isAlive && a.element.classList.remove(z.state.scrolling(b));
    }, a.settings.scrollingThreshold);
  }
  function j(a, b) {
    g(a, b);
    h(a, b);
  }
  function k(a) {
    if (typeof window.CustomEvent == "function") {
      return new CustomEvent(a);
    }
    var b = document.createEvent("CustomEvent");
    b.initCustomEvent(a, false, false, void 0);
    return b;
  }
  function l(a, b, c, d, e) {
    if (d === void 0) {
      d = true;
    }
    if (e === void 0) {
      e = false;
    }
    var f;
    if (b === "top") {
      f = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
    } else if (b === "left") {
      f = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
    } else {
      throw new Error("A proper axis should be provided");
    }
    m(a, c, f, d, e);
  }
  function m(a, b, c, d, e) {
    var f = c[0];
    var g = c[1];
    var h = c[2];
    var i = c[3];
    var l = c[4];
    var m = c[5];
    if (d === void 0) {
      d = true;
    }
    if (e === void 0) {
      e = false;
    }
    var n = a.element;
    a.reach[i] = null;
    if (1 > n[h]) {
      a.reach[i] = "start";
    }
    if (n[h] > a[f] - a[g] - 1) {
      a.reach[i] = "end";
    }
    if (b) {
      n.dispatchEvent(k("ps-scroll-" + i));
      if (0 > b) {
        n.dispatchEvent(k("ps-scroll-" + l));
      } else if (0 < b) {
        n.dispatchEvent(k("ps-scroll-" + m));
      }
      if (d) {
        j(a, i);
      }
    }
    if (a.reach[i] && (b || e)) {
      n.dispatchEvent(k("ps-" + i + "-reach-" + a.reach[i]));
    }
  }
  function n(a) {
    return parseInt(a, 10) || 0;
  }
  function o(a) {
    return d(a, "input,[contenteditable]") || d(a, "select,[contenteditable]") || d(a, "textarea,[contenteditable]") || d(a, "button,[contenteditable]");
  }
  function p(b) {
    var c = a(b);
    return n(c.width) + n(c.paddingLeft) + n(c.paddingRight) + n(c.borderLeftWidth) + n(c.borderRightWidth);
  }
  function q(a) {
    var b = Math.ceil;
    var c = a.element;
    var d = v(c.scrollTop);
    var g = c.getBoundingClientRect();
    a.containerWidth = b(g.width);
    a.containerHeight = b(g.height);
    a.contentWidth = c.scrollWidth;
    a.contentHeight = c.scrollHeight;
    if (!c.contains(a.scrollbarXRail)) {
      f(c, z.element.rail("x")).forEach(function (a) {
        return e(a);
      });
      c.appendChild(a.scrollbarXRail);
    }
    if (!c.contains(a.scrollbarYRail)) {
      f(c, z.element.rail("y")).forEach(function (a) {
        return e(a);
      });
      c.appendChild(a.scrollbarYRail);
    }
    if (!a.settings.suppressScrollX && a.containerWidth + a.settings.scrollXMarginOffset < a.contentWidth) {
      a.scrollbarXActive = true;
      a.railXWidth = a.containerWidth - a.railXMarginWidth;
      a.railXRatio = a.containerWidth / a.railXWidth;
      a.scrollbarXWidth = r(a, n(a.railXWidth * a.containerWidth / a.contentWidth));
      a.scrollbarXLeft = n((a.negativeScrollAdjustment + c.scrollLeft) * (a.railXWidth - a.scrollbarXWidth) / (a.contentWidth - a.containerWidth));
    } else {
      a.scrollbarXActive = false;
    }
    if (!a.settings.suppressScrollY && a.containerHeight + a.settings.scrollYMarginOffset < a.contentHeight) {
      a.scrollbarYActive = true;
      a.railYHeight = a.containerHeight - a.railYMarginHeight;
      a.railYRatio = a.containerHeight / a.railYHeight;
      a.scrollbarYHeight = r(a, n(a.railYHeight * a.containerHeight / a.contentHeight));
      a.scrollbarYTop = n(d * (a.railYHeight - a.scrollbarYHeight) / (a.contentHeight - a.containerHeight));
    } else {
      a.scrollbarYActive = false;
    }
    if (a.scrollbarXLeft >= a.railXWidth - a.scrollbarXWidth) {
      a.scrollbarXLeft = a.railXWidth - a.scrollbarXWidth;
    }
    if (a.scrollbarYTop >= a.railYHeight - a.scrollbarYHeight) {
      a.scrollbarYTop = a.railYHeight - a.scrollbarYHeight;
    }
    s(c, a);
    if (a.scrollbarXActive) {
      c.classList.add(z.state.active("x"));
    } else {
      c.classList.remove(z.state.active("x"));
      a.scrollbarXWidth = 0;
      a.scrollbarXLeft = 0;
      c.scrollLeft = a.isRtl === true ? a.contentWidth : 0;
    }
    if (a.scrollbarYActive) {
      c.classList.add(z.state.active("y"));
    } else {
      c.classList.remove(z.state.active("y"));
      a.scrollbarYHeight = 0;
      a.scrollbarYTop = 0;
      c.scrollTop = 0;
    }
  }
  function r(a, b) {
    var c = Math.min;
    var d = Math.max;
    if (a.settings.minScrollbarLength) {
      b = d(b, a.settings.minScrollbarLength);
    }
    if (a.settings.maxScrollbarLength) {
      b = c(b, a.settings.maxScrollbarLength);
    }
    return b;
  }
  function s(a, c) {
    var d = {width: c.railXWidth};
    var e = v(a.scrollTop);
    d.left = c.isRtl ? c.negativeScrollAdjustment + a.scrollLeft + c.containerWidth - c.contentWidth : a.scrollLeft;
    if (c.isScrollbarXUsingBottom) {
      d.bottom = c.scrollbarXBottom - e;
    } else {
      d.top = c.scrollbarXTop + e;
    }
    b(c.scrollbarXRail, d);
    var f = {top: e, height: c.railYHeight};
    if (c.isScrollbarYUsingRight) {
      if (c.isRtl) {
        f.right = c.contentWidth - (c.negativeScrollAdjustment + a.scrollLeft) - c.scrollbarYRight - c.scrollbarYOuterWidth - 9;
      } else {
        f.right = c.scrollbarYRight - a.scrollLeft;
      }
    } else if (c.isRtl) {
      f.left = c.negativeScrollAdjustment + a.scrollLeft + 2 * c.containerWidth - c.contentWidth - c.scrollbarYLeft - c.scrollbarYOuterWidth;
    } else {
      f.left = c.scrollbarYLeft + a.scrollLeft;
    }
    b(c.scrollbarYRail, f);
    b(c.scrollbarX, {left: c.scrollbarXLeft, width: c.scrollbarXWidth - c.railBorderXWidth});
    b(c.scrollbarY, {top: c.scrollbarYTop, height: c.scrollbarYHeight - c.railBorderYWidth});
  }
  function t(a, b) {
    function c(b) {
      if (b.touches && b.touches[0]) {
        b[k] = b.touches[0].pageY;
      }
      s[o] = t + v * (b[k] - u);
      g(a, p);
      q(a);
      b.stopPropagation();
      b.preventDefault();
    }
    function d() {
      h(a, p);
      a[r].classList.remove(z.state.clicking);
      a.event.unbind(a.ownerDocument, "mousemove", c);
    }
    function f(b, e) {
      t = s[o];
      if (e && b.touches) {
        b[k] = b.touches[0].pageY;
      }
      u = b[k];
      v = (a[j] - a[i]) / (a[l] - a[n]);
      if (e) {
        a.event.bind(a.ownerDocument, "touchmove", c);
      } else {
        a.event.bind(a.ownerDocument, "mousemove", c);
        a.event.once(a.ownerDocument, "mouseup", d);
        b.preventDefault();
      }
      a[r].classList.add(z.state.clicking);
      b.stopPropagation();
    }
    var i = b[0];
    var j = b[1];
    var k = b[2];
    var l = b[3];
    var m = b[4];
    var n = b[5];
    var o = b[6];
    var p = b[7];
    var r = b[8];
    var s = a.element;
    var t = null;
    var u = null;
    var v = null;
    a.event.bind(a[m], "mousedown", function (a) {
      f(a);
    });
    a.event.bind(a[m], "touchstart", function (a) {
      f(a, true);
    });
  }
  var u = Math.abs;
  var v = Math.floor;
  var w = typeof Element != "undefined" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
  var z = {main: "ps", rtl: "ps__rtl", element: {thumb: function (a) {
    return "ps__thumb-" + a;
  }, rail: function (a) {
    return "ps__rail-" + a;
  }, consuming: "ps__child--consume"}, state: {focus: "ps--focus", clicking: "ps--clicking", active: function (a) {
    return "ps--active-" + a;
  }, scrolling: function (a) {
    return "ps--scrolling-" + a;
  }}};
  var A = {x: null, y: null};
  var B = function (a) {
    this.element = a;
    this.handlers = {};
  };
  var C = {isEmpty: {configurable: true}};
  B.prototype.bind = function (a, b) {
    if (typeof this.handlers[a] == "undefined") {
      this.handlers[a] = [];
    }
    this.handlers[a].push(b);
    this.element.addEventListener(a, b, false);
  };
  B.prototype.unbind = function (a, b) {
    var c = this;
    this.handlers[a] = this.handlers[a].filter(function (d) {
      return !!b && d !== b || (c.element.removeEventListener(a, d, false), false);
    });
  };
  B.prototype.unbindAll = function () {
    for (var a in this.handlers) {
      this.unbind(a);
    }
  };
  C.isEmpty.get = function () {
    var a = this;
    return Object.keys(this.handlers).every(function (b) {
      return a.handlers[b].length === 0;
    });
  };
  Object.defineProperties(B.prototype, C);
  var D = function () {
    this.eventElements = [];
  };
  D.prototype.eventElement = function (a) {
    var b = this.eventElements.filter(function (b) {
      return b.element === a;
    })[0];
    if (!b) {
      b = new B(a);
      this.eventElements.push(b);
    }
    return b;
  };
  D.prototype.bind = function (a, b, c) {
    this.eventElement(a).bind(b, c);
  };
  D.prototype.unbind = function (a, b, c) {
    var d = this.eventElement(a);
    d.unbind(b, c);
    if (d.isEmpty) {
      this.eventElements.splice(this.eventElements.indexOf(d), 1);
    }
  };
  D.prototype.unbindAll = function () {
    this.eventElements.forEach(function (a) {
      return a.unbindAll();
    });
    this.eventElements = [];
  };
  D.prototype.once = function (a, b, c) {
    var d = this.eventElement(a);
    var e = function (a) {
      d.unbind(b, e);
      c(a);
    };
    d.bind(b, e);
  };
  var E = {isWebKit: typeof document != "undefined" && "WebkitAppearance" in document.documentElement.style, supportsTouch: typeof window != "undefined" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && 0 < window.navigator.maxTouchPoints || window.DocumentTouch && document instanceof window.DocumentTouch), supportsIePointer: typeof navigator != "undefined" && navigator.msMaxTouchPoints, isChrome: typeof navigator != "undefined" && /Chrome/i.test(navigator && navigator.userAgent)};
  var F = function () {
    return {handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollingThreshold: 1e3, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: false, suppressScrollY: false, swipeEasing: true, useBothWheelAxes: false, wheelPropagation: true, wheelSpeed: 1};
  };
  var G = {"click-rail": function (a) {
    a.element;
    a.event.bind(a.scrollbarY, "mousedown", function (a) {
      return a.stopPropagation();
    });
    a.event.bind(a.scrollbarYRail, "mousedown", function (b) {
      var c = b.pageY - window.pageYOffset - a.scrollbarYRail.getBoundingClientRect().top;
      var d = c > a.scrollbarYTop ? 1 : -1;
      a.element.scrollTop += d * a.containerHeight;
      q(a);
      b.stopPropagation();
    });
    a.event.bind(a.scrollbarX, "mousedown", function (a) {
      return a.stopPropagation();
    });
    a.event.bind(a.scrollbarXRail, "mousedown", function (b) {
      var c = b.pageX - window.pageXOffset - a.scrollbarXRail.getBoundingClientRect().left;
      var d = c > a.scrollbarXLeft ? 1 : -1;
      a.element.scrollLeft += d * a.containerWidth;
      q(a);
      b.stopPropagation();
    });
  }, "drag-thumb": function (a) {
    t(a, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]);
    t(a, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
  }, keyboard: function (a) {
    function b(b, d) {
      var e = v(c.scrollTop);
      if (b === 0) {
        if (!a.scrollbarYActive) {
          return false;
        }
        if (e === 0 && 0 < d || e >= a.contentHeight - a.containerHeight && 0 > d) {
          return !a.settings.wheelPropagation;
        }
      }
      var f = c.scrollLeft;
      if (d === 0) {
        if (!a.scrollbarXActive) {
          return false;
        }
        if (f === 0 && 0 > b || f >= a.contentWidth - a.containerWidth && 0 < b) {
          return !a.settings.wheelPropagation;
        }
      }
      return true;
    }
    var c = a.element;
    var f = function () {
      return d(c, ":hover");
    };
    var g = function () {
      return d(a.scrollbarX, ":focus") || d(a.scrollbarY, ":focus");
    };
    a.event.bind(a.ownerDocument, "keydown", function (d) {
      if ((!d.isDefaultPrevented || !d.isDefaultPrevented()) && !d.defaultPrevented && (f() || g())) {
        var e = document.activeElement ? document.activeElement : a.ownerDocument.activeElement;
        if (e) {
          if (e.tagName === "IFRAME") {
            e = e.contentDocument.activeElement;
          } else {
            while (e.shadowRoot) {
              e = e.shadowRoot.activeElement;
            }
          }
          if (o(e)) {
            return;
          }
        }
        var h = 0;
        var i = 0;
        switch (d.which) {
          case 37:
            h = d.metaKey ? -a.contentWidth : d.altKey ? -a.containerWidth : -30;
            break;
          case 38:
            i = d.metaKey ? a.contentHeight : d.altKey ? a.containerHeight : 30;
            break;
          case 39:
            h = d.metaKey ? a.contentWidth : d.altKey ? a.containerWidth : 30;
            break;
          case 40:
            i = d.metaKey ? -a.contentHeight : d.altKey ? -a.containerHeight : -30;
            break;
          case 32:
            i = d.shiftKey ? a.containerHeight : -a.containerHeight;
            break;
          case 33:
            i = a.containerHeight;
            break;
          case 34:
            i = -a.containerHeight;
            break;
          case 36:
            i = a.contentHeight;
            break;
          case 35:
            i = -a.contentHeight;
            break;
          default:
            return;
        }
        if ((!a.settings.suppressScrollX || h === 0) && (!a.settings.suppressScrollY || i === 0)) {
          c.scrollTop -= i;
          c.scrollLeft += h;
          q(a);
          if (b(h, i)) {
            d.preventDefault();
          }
        }
      }
    });
  }, wheel: function (b) {
    function c(a, c) {
      var e = v(h.scrollTop);
      var f = h.scrollTop === 0;
      var g = e + h.offsetHeight === h.scrollHeight;
      var i = h.scrollLeft === 0;
      var j = h.scrollLeft + h.offsetWidth === h.scrollWidth;
      var d = u(c) > u(a) ? f || g : i || j;
      return !d || !b.settings.wheelPropagation;
    }
    function d(a) {
      var b = a.deltaX;
      var c = -1 * a.deltaY;
      if (typeof b == "undefined" || typeof c == "undefined") {
        b = -1 * a.wheelDeltaX / 6;
        c = a.wheelDeltaY / 6;
      }
      if (a.deltaMode && a.deltaMode === 1) {
        b *= 10;
        c *= 10;
      }
      if (b !== b && c !== c) {
        b = 0;
        c = a.wheelDelta;
      }
      if (a.shiftKey) {
        return [-c, -b];
      } else {
        return [b, c];
      }
    }
    function f(b, c, d) {
      if (!E.isWebKit && h.querySelector("select:focus")) {
        return true;
      }
      if (!h.contains(b)) {
        return false;
      }
      for (var e = b; e && e !== h;) {
        if (e.classList.contains(z.element.consuming)) {
          return true;
        }
        var f = a(e);
        if (d && f.overflowY.match(/(scroll|auto)/)) {
          var g = e.scrollHeight - e.clientHeight;
          if (0 < g && (0 < e.scrollTop && 0 > d || e.scrollTop < g && 0 < d)) {
            return true;
          }
        }
        if (c && f.overflowX.match(/(scroll|auto)/)) {
          var i = e.scrollWidth - e.clientWidth;
          if (0 < i && (0 < e.scrollLeft && 0 > c || e.scrollLeft < i && 0 < c)) {
            return true;
          }
        }
        e = e.parentNode;
      }
      return false;
    }
    function g(a) {
      var e = d(a);
      var g = e[0];
      var i = e[1];
      if (!f(a.target, g, i)) {
        var j = false;
        if (b.settings.useBothWheelAxes) {
          if (b.scrollbarYActive && !b.scrollbarXActive) {
            if (i) {
              h.scrollTop -= i * b.settings.wheelSpeed;
            } else {
              h.scrollTop += g * b.settings.wheelSpeed;
            }
            j = true;
          } else if (b.scrollbarXActive && !b.scrollbarYActive) {
            if (g) {
              h.scrollLeft += g * b.settings.wheelSpeed;
            } else {
              h.scrollLeft -= i * b.settings.wheelSpeed;
            }
            j = true;
          }
        } else {
          h.scrollTop -= i * b.settings.wheelSpeed;
          h.scrollLeft += g * b.settings.wheelSpeed;
        }
        q(b);
        j = j || c(g, i);
        if (j && !a.ctrlKey) {
          a.stopPropagation();
          a.preventDefault();
        }
      }
    }
    var h = b.element;
    if (typeof window.onwheel == "undefined") {
      if (typeof window.onmousewheel != "undefined") {
        b.event.bind(h, "mousewheel", g);
      }
    } else {
      b.event.bind(h, "wheel", g);
    }
  }, touch: function (b) {
    function c(a, c) {
      var d = v(l.scrollTop);
      var e = l.scrollLeft;
      var f = u(a);
      var g = u(c);
      if (g > f) {
        if (0 > c && d === b.contentHeight - b.containerHeight || 0 < c && d === 0) {
          return window.scrollY === 0 && 0 < c && E.isChrome;
        }
      } else if (f > g && (0 > a && e === b.contentWidth - b.containerWidth || 0 < a && e === 0)) {
        return true;
      }
      return true;
    }
    function d(a, c) {
      l.scrollTop -= c;
      l.scrollLeft -= a;
      q(b);
    }
    function f(a) {
      if (a.targetTouches) {
        return a.targetTouches[0];
      } else {
        return a;
      }
    }
    function g(a) {
      return (!a.pointerType || a.pointerType !== "pen" || a.buttons !== 0) && (!!a.targetTouches && a.targetTouches.length === 1 || !!a.pointerType && a.pointerType !== "mouse" && a.pointerType !== a.MSPOINTER_TYPE_MOUSE);
    }
    function h(a) {
      if (g(a)) {
        var b = f(a);
        m.pageX = b.pageX;
        m.pageY = b.pageY;
        n = (new Date).getTime();
        if (p !== null) {
          clearInterval(p);
        }
      }
    }
    function i(b, c, d) {
      if (!l.contains(b)) {
        return false;
      }
      for (var e = b; e && e !== l;) {
        if (e.classList.contains(z.element.consuming)) {
          return true;
        }
        var f = a(e);
        if (d && f.overflowY.match(/(scroll|auto)/)) {
          var g = e.scrollHeight - e.clientHeight;
          if (0 < g && (0 < e.scrollTop && 0 > d || e.scrollTop < g && 0 < d)) {
            return true;
          }
        }
        if (c && f.overflowX.match(/(scroll|auto)/)) {
          var h = e.scrollWidth - e.clientWidth;
          if (0 < h && (0 < e.scrollLeft && 0 > c || e.scrollLeft < h && 0 < c)) {
            return true;
          }
        }
        e = e.parentNode;
      }
      return false;
    }
    function j(a) {
      if (g(a)) {
        var b = f(a);
        var e = {pageX: b.pageX, pageY: b.pageY};
        var h = e.pageX - m.pageX;
        var j = e.pageY - m.pageY;
        if (i(a.target, h, j)) {
          return;
        }
        d(h, j);
        m = e;
        var k = (new Date).getTime();
        var l = k - n;
        if (0 < l) {
          o.x = h / l;
          o.y = j / l;
          n = k;
        }
        if (c(h, j)) {
          a.preventDefault();
        }
      }
    }
    function k() {
      if (b.settings.swipeEasing) {
        clearInterval(p);
        p = setInterval(function () {
          if (b.isInitialized) {
            clearInterval(p);
            return;
          } else if (o.x || o.y) {
            if (.01 > u(o.x) && .01 > u(o.y)) {
              clearInterval(p);
              return;
            } else {
              d(30 * o.x, 30 * o.y);
              o.x *= .8;
              o.y *= .8;
              return;
            }
          } else {
            clearInterval(p);
            return;
          }
        }, 10);
      }
    }
    if (E.supportsTouch || E.supportsIePointer) {
      var l = b.element;
      var m = {};
      var n = 0;
      var o = {};
      var p = null;
      if (E.supportsTouch) {
        b.event.bind(l, "touchstart", h);
        b.event.bind(l, "touchmove", j);
        b.event.bind(l, "touchend", k);
      } else if (E.supportsIePointer) {
        if (window.PointerEvent) {
          b.event.bind(l, "pointerdown", h);
          b.event.bind(l, "pointermove", j);
          b.event.bind(l, "pointerup", k);
        } else if (window.MSPointerEvent) {
          b.event.bind(l, "MSPointerDown", h);
          b.event.bind(l, "MSPointerMove", j);
          b.event.bind(l, "MSPointerUp", k);
        }
      }
    }
  }};
  var H = function (d, e) {
    var f = this;
    if (e === void 0) {
      e = {};
    }
    if (typeof d == "string") {
      d = document.querySelector(d);
    }
    if (!d || !d.nodeName) {
      throw new Error("no element is specified to initialize PerfectScrollbar");
    }
    for (var g in this.element = d, d.classList.add(z.main), this.settings = F(), e) {
      this.settings[g] = e[g];
    }
    this.containerWidth = null;
    this.containerHeight = null;
    this.contentWidth = null;
    this.contentHeight = null;
    var h = function () {
      return d.classList.add(z.state.focus);
    };
    var i = function () {
      return d.classList.remove(z.state.focus);
    };
    this.isRtl = a(d).direction === "rtl";
    if (this.isRtl === true) {
      d.classList.add(z.rtl);
    }
    this.isNegativeScroll = function () {
      var a = d.scrollLeft;
      var b = null;
      d.scrollLeft = -1;
      b = 0 > d.scrollLeft;
      d.scrollLeft = a;
      return b;
    }();
    this.negativeScrollAdjustment = this.isNegativeScroll ? d.scrollWidth - d.clientWidth : 0;
    this.event = new D;
    this.ownerDocument = d.ownerDocument || document;
    this.scrollbarXRail = c(z.element.rail("x"));
    d.appendChild(this.scrollbarXRail);
    this.scrollbarX = c(z.element.thumb("x"));
    this.scrollbarXRail.appendChild(this.scrollbarX);
    this.scrollbarX.setAttribute("tabindex", 0);
    this.event.bind(this.scrollbarX, "focus", h);
    this.event.bind(this.scrollbarX, "blur", i);
    this.scrollbarXActive = null;
    this.scrollbarXWidth = null;
    this.scrollbarXLeft = null;
    var j = a(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(j.bottom, 10);
    if (isNaN(this.scrollbarXBottom)) {
      this.isScrollbarXUsingBottom = false;
      this.scrollbarXTop = n(j.top);
    } else {
      this.isScrollbarXUsingBottom = true;
    }
    this.railBorderXWidth = n(j.borderLeftWidth) + n(j.borderRightWidth);
    b(this.scrollbarXRail, {display: "block"});
    this.railXMarginWidth = n(j.marginLeft) + n(j.marginRight);
    b(this.scrollbarXRail, {display: ""});
    this.railXWidth = null;
    this.railXRatio = null;
    this.scrollbarYRail = c(z.element.rail("y"));
    d.appendChild(this.scrollbarYRail);
    this.scrollbarY = c(z.element.thumb("y"));
    this.scrollbarYRail.appendChild(this.scrollbarY);
    this.scrollbarY.setAttribute("tabindex", 0);
    this.event.bind(this.scrollbarY, "focus", h);
    this.event.bind(this.scrollbarY, "blur", i);
    this.scrollbarYActive = null;
    this.scrollbarYHeight = null;
    this.scrollbarYTop = null;
    var k = a(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(k.right, 10);
    if (isNaN(this.scrollbarYRight)) {
      this.isScrollbarYUsingRight = false;
      this.scrollbarYLeft = n(k.left);
    } else {
      this.isScrollbarYUsingRight = true;
    }
    this.scrollbarYOuterWidth = this.isRtl ? p(this.scrollbarY) : null;
    this.railBorderYWidth = n(k.borderTopWidth) + n(k.borderBottomWidth);
    b(this.scrollbarYRail, {display: "block"});
    this.railYMarginHeight = n(k.marginTop) + n(k.marginBottom);
    b(this.scrollbarYRail, {display: ""});
    this.railYHeight = null;
    this.railYRatio = null;
    this.reach = {x: 0 >= d.scrollLeft ? "start" : d.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null, y: 0 >= d.scrollTop ? "start" : d.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null};
    this.isAlive = true;
    this.settings.handlers.forEach(function (a) {
      return G[a](f);
    });
    this.lastScrollTop = v(d.scrollTop);
    this.lastScrollLeft = d.scrollLeft;
    this.event.bind(this.element, "scroll", function (a) {
      return f.onScroll(a);
    });
    q(this);
  };
  H.prototype.update = function () {
    if (this.isAlive) {
      this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0;
      b(this.scrollbarXRail, {display: "block"});
      b(this.scrollbarYRail, {display: "block"});
      this.railXMarginWidth = n(a(this.scrollbarXRail).marginLeft) + n(a(this.scrollbarXRail).marginRight);
      this.railYMarginHeight = n(a(this.scrollbarYRail).marginTop) + n(a(this.scrollbarYRail).marginBottom);
      b(this.scrollbarXRail, {display: "none"});
      b(this.scrollbarYRail, {display: "none"});
      q(this);
      l(this, "top", 0, false, true);
      l(this, "left", 0, false, true);
      b(this.scrollbarXRail, {display: ""});
      b(this.scrollbarYRail, {display: ""});
    }
  };
  H.prototype.onScroll = function () {
    if (this.isAlive) {
      q(this);
      l(this, "top", this.element.scrollTop - this.lastScrollTop);
      l(this, "left", this.element.scrollLeft - this.lastScrollLeft);
      this.lastScrollTop = v(this.element.scrollTop);
      this.lastScrollLeft = this.element.scrollLeft;
    }
  };
  H.prototype.destroy = function () {
    if (this.isAlive) {
      this.event.unbindAll();
      e(this.scrollbarX);
      e(this.scrollbarY);
      e(this.scrollbarXRail);
      e(this.scrollbarYRail);
      this.removePsClasses();
      this.element = null;
      this.scrollbarX = null;
      this.scrollbarY = null;
      this.scrollbarXRail = null;
      this.scrollbarYRail = null;
      this.isAlive = false;
    }
  };
  H.prototype.removePsClasses = function () {
    this.element.className = this.element.className.split(" ").filter(function (a) {
      return !a.match(/^ps([-_].+|)$/);
    }).join(" ");
  };
  return H;
}));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  "use strict";
  function o() {
    function n(o, t) {
      this.scrollLeft = o;
      this.scrollTop = t;
    }
    function f(o) {
      if (o === null || typeof o != "object" || o.behavior === void 0 || o.behavior === "auto" || o.behavior === "instant") {
        return true;
      }
      if (typeof o == "object" && o.behavior === "smooth") {
        return false;
      }
      throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.");
    }
    function p(o, t) {
      if (t === "Y") {
        return o.clientHeight + c < o.scrollHeight;
      } else if (t === "X") {
        return o.clientWidth + c < o.scrollWidth;
      } else {
        return;
      }
    }
    function a(t, l) {
      var e = o.getComputedStyle(t, null)["overflow" + l];
      return e === "auto" || e === "scroll";
    }
    function d(t) {
      var n = (s() - t.startTime) / r;
      var c = n = n > 1 ? 1 : n;
      var l = .5 * (1 - Math.cos(Math.PI * c));
      var e = t.startX + (t.x - t.startX) * l;
      var i = t.startY + (t.y - t.startY) * l;
      t.method.call(t.scrollable, e, i);
      if (e !== t.x || i !== t.y) {
        o.requestAnimationFrame(d.bind(o, t));
      }
    }
    function h(l, e, r) {
      var c;
      var f;
      var p;
      var a;
      var h = s();
      if (l === t.body) {
        c = o;
        f = o.scrollX || o.pageXOffset;
        p = o.scrollY || o.pageYOffset;
        a = i.scroll;
      } else {
        c = l;
        f = l.scrollLeft;
        p = l.scrollTop;
        a = n;
      }
      d({scrollable: c, method: a, startTime: h, startX: f, startY: p, x: e, y: r});
    }
    var o = window;
    var t = document;
    if (!("scrollBehavior" in t.documentElement.style) || o.__forceSmoothScrollPolyfill__ === true) {
      var l;
      var e = o.HTMLElement || o.Element;
      var r = 468;
      var i = {scroll: o.scroll || o.scrollTo, scrollBy: o.scrollBy, elementScroll: e.prototype.scroll || n, scrollIntoView: e.prototype.scrollIntoView};
      var s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now;
      l = o.navigator.userAgent;
      var c = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0;
      o.scroll = o.scrollTo = function () {
        if (arguments[0] !== void 0) {
          if (f(arguments[0]) === true) {
            i.scroll.call(o, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : o.scrollX || o.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : o.scrollY || o.pageYOffset);
          } else {
            h.call(o, t.body, arguments[0].left !== void 0 ? ~~arguments[0].left : o.scrollX || o.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : o.scrollY || o.pageYOffset);
          }
        }
      };
      o.scrollBy = function () {
        if (arguments[0] !== void 0) {
          if (f(arguments[0])) {
            i.scrollBy.call(o, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0);
          } else {
            h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset));
          }
        }
      };
      e.prototype.scroll = e.prototype.scrollTo = function () {
        if (arguments[0] !== void 0) {
          if (f(arguments[0]) === true) {
            if (typeof arguments[0] == "number" && arguments[1] === void 0) {
              throw new SyntaxError("Value could not be converted");
            }
            i.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
          } else {
            var o = arguments[0].left;
            var t = arguments[0].top;
            h.call(this, this, o === void 0 ? this.scrollLeft : ~~o, t === void 0 ? this.scrollTop : ~~t);
          }
        }
      };
      e.prototype.scrollBy = function () {
        if (arguments[0] !== void 0) {
          if (f(arguments[0]) === true) {
            i.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
          } else {
            this.scroll({left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior});
          }
        }
      };
      e.prototype.scrollIntoView = function () {
        if (f(arguments[0]) === true) {
          i.scrollIntoView.call(this, arguments[0] === void 0 || arguments[0]);
        } else {
          var l = function (o) {
            while (o !== t.body && (e = p(l = o, "Y") && a(l, "Y"), r = p(l, "X") && a(l, "X"), e || r) === false) {
              o = o.parentNode || o.host;
            }
            var l;
            var e;
            var r;
            return o;
          }(this);
          var e = l.getBoundingClientRect();
          var r = this.getBoundingClientRect();
          if (l === t.body) {
            o.scrollBy({left: r.left, top: r.top, behavior: "smooth"});
          } else {
            h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top);
            if (o.getComputedStyle(l).position !== "fixed") {
              o.scrollBy({left: e.left, top: e.top, behavior: "smooth"});
            }
          }
        }
      };
    }
  }
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = {polyfill: o};
  } else {
    o();
  }
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function a() {
  function o(t, e) {
    if (!i[t]) {
      if (!n[t]) {
        var l = typeof require == "function" && require;
        if (!e && l) {
          return l(t, true);
        }
        if (s) {
          return s(t, true);
        }
        (l = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND";
        throw l;
      }
      l = i[t] = {exports: {}};
      n[t][0].call(l.exports, function (e) {
        return o(n[t][1][e] || e);
      }, l, l.exports, a, n, i, r);
    }
    return i[t].exports;
  }
  var n = {1: [function (e, t, l) {
    "use strict";
    Object.defineProperty(l, "__esModule", {value: true});
    l.options = void 0;
    var a = oceanwpLocalize;
    l.options = a;
  }, {}], 2: [function (e, t, l) {
    "use strict";
    function i(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 300;
      var l = window.getComputedStyle(e).display;
      if (l === "none") {
        l = "block";
      }
      e.style.transitionProperty = "height";
      e.style.transitionDuration = "".concat(t, "ms");
      e.style.opacity = 0;
      e.style.display = l;
      var a = e.offsetHeight;
      e.style.height = 0;
      e.style.opacity = 1;
      e.style.overflow = "hidden";
      setTimeout(function () {
        e.style.height = "".concat(a, "px");
      }, 5);
      window.setTimeout(function () {
        e.style.removeProperty("height");
        e.style.removeProperty("overflow");
        e.style.removeProperty("transition-duration");
        e.style.removeProperty("transition-property");
        e.style.removeProperty("opacity");
      }, t + 50);
    }
    function r(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 300;
      e.style.boxSizing = "border-box";
      e.style.transitionProperty = "height, margin";
      e.style.transitionDuration = "".concat(t, "ms");
      e.style.height = "".concat(e.offsetHeight, "px");
      e.style.marginTop = 0;
      e.style.marginBottom = 0;
      e.style.overflow = "hidden";
      setTimeout(function () {
        e.style.height = 0;
      }, 5);
      window.setTimeout(function () {
        e.style.display = "none";
        e.style.removeProperty("height");
        e.style.removeProperty("margin-top");
        e.style.removeProperty("margin-bottom");
        e.style.removeProperty("overflow");
        e.style.removeProperty("transition-duration");
        e.style.removeProperty("transition-property");
      }, t + 50);
    }
    function o(e) {
      var t = {duration: 300, display: null, opacity: 1, callback: null};
      Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
      e.style.opacity = 0;
      e.style.display = t.display || "block";
      setTimeout(function () {
        e.style.transition = "".concat(t.duration, "ms opacity ease");
        e.style.opacity = t.opacity;
      }, 5);
      setTimeout(function () {
        e.style.removeProperty("transition");
        if (t.callback) {
          t.callback();
        }
      }, t.duration + 50);
    }
    function s(e) {
      var t;
      if (e.style.display !== "none") {
        t = {duration: 300, display: null, opacity: 0, callback: null};
        Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
        e.style.opacity = 1;
        e.style.display = t.display || "block";
        setTimeout(function () {
          e.style.transition = "".concat(t.duration, "ms opacity ease");
          e.style.opacity = t.opacity;
        }, 5);
        setTimeout(function () {
          e.style.display = "none";
          e.style.removeProperty("transition");
          if (t.callback) {
            t.callback();
          }
        }, t.duration + 50);
      }
    }
    var a = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(l, "__esModule", {value: true});
    l.fadeOutNav = l.fadeInNav = l.isSelectorValid = l.isElement = l.getSiblings = l.visible = l.offset = l.fadeToggle = l.fadeOut = l.fadeIn = l.slideToggle = l.slideUp = l.slideDown = l.wrap = void 0;
    var n = a(e("@babel/runtime/helpers/typeof"));
    l.wrap = function (e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : document.createElement("div");
      if (e.nextSibling) {
        e.parentNode.insertBefore(t, e.nextSibling);
      } else {
        e.parentNode.appendChild(t);
      }
      return t.appendChild(e);
    };
    l.slideDown = i;
    l.slideUp = r;
    l.slideToggle = function (e, t) {
      (window.getComputedStyle(e).display === "none" ? i : r)(e, t);
    };
    l.fadeIn = o;
    l.fadeOut = s;
    l.fadeToggle = function (e, t) {
      (window.getComputedStyle(e).display === "none" ? o : s)(e, t);
    };
    l.offset = function (e) {
      if (!e.getClientRects().length) {
        return {top: 0, left: 0};
      }
      var t = e.getBoundingClientRect();
      var e = e.ownerDocument.defaultView;
      return {top: t.top + e.pageYOffset, left: t.left + e.pageXOffset};
    };
    l.visible = function (e) {
      return !!e && (!!e.offsetWidth || !!e.offsetHeight || !!e.getClientRects().length);
    };
    l.getSiblings = function (e) {
      var t = [];
      if (!e.parentNode) {
        return t;
      }
      for (var l = e.parentNode.firstChild; l;) {
        if (l.nodeType === 1 && l !== e) {
          t.push(l);
        }
        l = l.nextSibling;
      }
      return t;
    };
    l.isElement = function (e) {
      if ((typeof HTMLElement == "undefined" ? "undefined" : n.default(HTMLElement)) === "object") {
        return e instanceof HTMLElement;
      } else {
        return e && n.default(e) === "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
      }
    };
    var u = document.createDocumentFragment();
    var e = function (e) {
      try {
        u.querySelector(e);
      } catch (e) {
        return false;
      }
      return true;
    };
    l.isSelectorValid = e;
    l.fadeInNav = function (e) {
      var t = {duration: 300, visibility: "visible", opacity: 1, callback: null};
      Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
      e.style.opacity = 0;
      e.style.visibility = t.visibility || "visible";
      setTimeout(function () {
        e.style.transition = "".concat(t.duration, "ms opacity ease");
        e.style.opacity = t.opacity;
      }, 5);
    };
    l.fadeOutNav = function (e) {
      var t;
      if (e.style.visibility !== "hidden") {
        t = {duration: 300, visibility: "hidden", opacity: 0, callback: null};
        Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
        e.style.opacity = 1;
        e.style.visibility = t.visibility || "visible";
        setTimeout(function () {
          e.style.transition = "".concat(t.duration, "ms opacity ease");
          e.style.opacity = t.opacity;
        }, 5);
        setTimeout(function () {
          e.style.visibility = "hidden";
          e.style.removeProperty("transition");
          if (t.callback) {
            t.callback();
          }
        }, t.duration + 50);
      }
    };
  }, {"@babel/runtime/helpers/interopRequireDefault": 15, "@babel/runtime/helpers/typeof": 16}], 3: [function (e, t, l) {
    "use strict";
    function s(t, e) {
      var l;
      var a = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        l = Object.getOwnPropertySymbols(t);
        if (e) {
          l = l.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          });
        }
        a.push.apply(a, l);
      }
      return a;
    }
    function u(t) {
      for (var e = 1; e < arguments.length; e++) {
        var l = arguments[e] != null ? arguments[e] : {};
        if (e % 2) {
          s(Object(l), true).forEach(function (e) {
            n.default(t, e, l[e]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
        } else {
          s(Object(l)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
          });
        }
      }
      return t;
    }
    var a = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(l, "__esModule", {value: true});
    l.default = void 0;
    var n = a(e("@babel/runtime/helpers/defineProperty"));
    var i = a(e("@babel/runtime/helpers/classCallCheck"));
    var r = a(e("@babel/runtime/helpers/classPrivateFieldSet"));
    var o = a(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var c = new WeakMap;
    var d = new WeakMap;
    var f = new WeakMap;
    var p = new WeakMap;
    var y = new WeakMap;
    var b = new WeakMap;
    var m = new WeakMap;
    var h = new WeakMap;
    l.default = function e() {
      var l = this;
      i.default(this, e);
      c.set(this, {writable: true, value: {mainSection: document.querySelector("#main")}});
      d.set(this, {writable: true, value: null});
      f.set(this, {writable: true, value: function () {
        r.default(l, c, u(u({}, o.default(l, c)), {}, {WPAdminbar: document.querySelector("#wpadminbar"), siteFooter: document.querySelector("#footer"), calloutFooter: document.querySelector("#footer-callout-wrap"), footerBar: document.querySelector("#footer-bar"), parallax: document.querySelector(".parallax-footer"), html: document.querySelector("html"), body: document.body, wrapSection: document.querySelector("#wrap")}));
      }});
      p.set(this, {writable: true, value: function () {
        window.addEventListener("load", o.default(l, y));
        window.addEventListener("resize", o.default(l, b));
      }});
      y.set(this, {writable: true, value: function (e) {
        o.default(l, m).call(l);
        o.default(l, h).call(l);
      }});
      b.set(this, {writable: true, value: function (e) {
        o.default(l, m).call(l);
        o.default(l, h).call(l);
      }});
      m.set(this, {writable: true, value: function () {
        var e;
        var t;
        if (document.body.classList.contains("has-fixed-footer")) {
          e = (t = (e = o.default(l, c).WPAdminbar) === null || e === void 0 ? void 0 : e.offsetHeight) !== null && t !== void 0 ? t : 0;
          t = (t = (t = o.default(l, c).footerBar) === null || t === void 0 ? void 0 : t.offsetHeight) !== null && t !== void 0 ? t : 0;
          if (o.default(l, c).html.offsetHeight - e < window.innerHeight) {
            o.default(l, c).wrapSection.style.cssText = "\n                display: flex;\n                flex-direction: column;\n                min-height: calc(100vh - ".concat(e, "px - ").concat(t, "px);\n            ");
            if (o.default(l, c).calloutFooter) {
              o.default(l, c).calloutFooter.style.marginTop = "auto";
            } else if (o.default(l, c).siteFooter) {
              o.default(l, c).siteFooter.style.marginTop = "auto";
            }
            r.default(l, d, "changed");
          } else if (o.default(l, d) === "changed") {
            if ((o.default(l, c).wrapSection.style.cssText = "", o.default)(l, c).calloutFooter) {
              o.default(l, c).calloutFooter.style.marginTop = null;
            } else {
              o.default(l, c).siteFooter.style.marginTop = null;
            }
            r.default(l, d, null);
          }
        }
      }});
      h.set(this, {writable: true, value: function () {
        if (o.default(l, c).body.classList.contains("has-parallax-footer")) {
          setTimeout(function () {
            var e;
            var t = 0;
            t += (e = o.default(l, c).parallax) === null || e === void 0 ? void 0 : e.offsetHeight;
            if (o.default(l, c).calloutFooter) {
              o.default(l, c).calloutFooter.style.bottom = "".concat(t, "px");
              t += o.default(l, c).calloutFooter.offsetHeight;
            }
            o.default(l, c).mainSection.style.marginBottom = "".concat(t, "px");
          }, 10);
        }
      }});
      if (o.default(this, c).mainSection) {
        o.default(this, f).call(this);
        o.default(this, p).call(this);
      }
    };
  }, {"@babel/runtime/helpers/classCallCheck": 10, "@babel/runtime/helpers/classPrivateFieldGet": 12, "@babel/runtime/helpers/classPrivateFieldSet": 13, "@babel/runtime/helpers/defineProperty": 14, "@babel/runtime/helpers/interopRequireDefault": 15}], 4: [function (e, t, l) {
    "use strict";
    var a = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(l, "__esModule", {value: true});
    l.default = void 0;
    var n = a(e("@babel/runtime/helpers/classCallCheck"));
    var i = a(e("@babel/runtime/helpers/classPrivateFieldSet"));
    var r = a(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var o = e("../../constants");
    var s = e("../../lib/utils");
    var u = new WeakMap;
    var c = new WeakMap;
    var d = new WeakMap;
    var f = new WeakMap;
    var p = new WeakMap;
    var y = new WeakMap;
    var b = new WeakMap;
    l.default = function e() {
      var a = this;
      n.default(this, e);
      u.set(this, {writable: true, value: void 0});
      c.set(this, {writable: true, value: function () {
        i.default(a, u, {menuContents: document.querySelectorAll(".navigation .megamenu-li.auto-mega .megamenu"), menuItems: document.querySelectorAll("#site-navigation .megamenu-li.full-mega"), topbarMenuItems: document.querySelectorAll("#top-bar-nav .megamenu-li.full-mega"), header: document.querySelector("#site-header"), topbar: document.querySelector("#top-bar"), body: document.body});
      }});
      d.set(this, {writable: true, value: function () {
        r.default(a, u).menuContents.forEach(function (e) {
          var t;
          var l = e.parentNode;
          var a = s.offset(l).left;
          var n = parseInt(window.getComputedStyle(e).width);
          var i = a - n / 2 < 0 ? (t = a - 10, 0) : (t = n / 2, l.offsetWidth / 2);
          if (o.options.isRTL) {
            e.style.right = "-".concat(t, "px");
            e.style.marginRight = "".concat(i, "px");
          } else {
            e.style.left = "-".concat(t, "px");
            e.style.marginLeft = "".concat(i, "px");
          }
          if (window.innerWidth - a - t + i + n < 0) {
            e.style.left = "auto";
            e.style.right = "-".concat(window.innerWidth - a - l.offsetWidth - 10, "px");
          }
        });
      }});
      f.set(this, {writable: true, value: function () {
        r.default(a, u).menuItems.forEach(function (e) {
          e.addEventListener("mouseenter", r.default(a, p));
          e.addEventListener("keydown", r.default(a, p));
        });
        r.default(a, u).topbarMenuItems.forEach(function (e) {
          e.addEventListener("mouseenter", r.default(a, y));
          e.addEventListener("keydown", r.default(a, y));
        });
      }});
      p.set(this, {writable: true, value: function (e) {
        var t = r.default(a, u).header.classList.contains("medium-header") ? document.querySelector("#site-navigation-wrap > .container") : document.querySelector("#site-header-inner");
        r.default(a, b).call(a, t, e);
      }});
      y.set(this, {writable: true, value: function (e) {
        var t = r.default(a, u).topbar;
        r.default(a, b).call(a, t, e);
      }});
      b.set(this, {writable: true, value: function (e, t) {
        var l = t.currentTarget;
        var t = l.querySelector(".megamenu");
        var l = parseInt(s.offset(l).left - s.offset(e).left + 1);
        if (t) {
          if (r.default(a, u).body.classList.contains("boxed-layout")) {
            l -= 30;
          }
          t.style.left = "-".concat(l, "px");
          t.style.width = "".concat(e.offsetWidth, "px");
        }
      }});
      r.default(this, c).call(this);
      r.default(this, d).call(this);
      r.default(this, f).call(this);
    };
  }, {"../../constants": 1, "../../lib/utils": 2, "@babel/runtime/helpers/classCallCheck": 10, "@babel/runtime/helpers/classPrivateFieldGet": 12, "@babel/runtime/helpers/classPrivateFieldSet": 13, "@babel/runtime/helpers/interopRequireDefault": 15}], 5: [function (e, t, l) {
    "use strict";
    var a = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(l, "__esModule", {value: true});
    l.default = void 0;
    var n = a(e("@babel/runtime/helpers/classCallCheck"));
    var i = a(e("@babel/runtime/helpers/classPrivateFieldSet"));
    var o = a(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var s = e("../../lib/utils");
    var u = new WeakMap;
    var c = new WeakMap;
    var d = new WeakMap;
    var f = new WeakMap;
    var p = new WeakMap;
    var y = new WeakMap;
    var b = new WeakMap;
    var m = new WeakMap;
    l.default = function e() {
      var r = this;
      n.default(this, e);
      u.set(this, {writable: true, value: void 0});
      c.set(this, {writable: true, value: function () {
        document.querySelectorAll("li.nav-no-click > a").forEach(function (e) {
          e.addEventListener("click", o.default(r, d));
        });
        document.querySelectorAll("ul.sf-menu").forEach(function (e) {
          e.querySelectorAll(".menu-item-has-children").forEach(function (e) {
            e.addEventListener("mouseover", o.default(r, f));
            e.addEventListener("mouseout", o.default(r, p));
            e.addEventListener("keydown", o.default(r, y));
          });
        });
      }});
      d.set(this, {writable: true, value: function (e) {
        e.preventDefault();
        e.stopPropagation();
      }});
      f.set(this, {writable: true, value: function (e) {
        if (!o.default(r, u) || !o.default(r, u).contains(e.relatedTarget)) {
          i.default(r, u, e.currentTarget);
          o.default(r, b).call(r, o.default(r, u));
        }
      }});
      p.set(this, {writable: true, value: function (e) {
        if (o.default(r, u) && !o.default(r, u).contains(e.relatedTarget)) {
          o.default(r, m).call(r, o.default(r, u));
          i.default(r, u, null);
        }
      }});
      y.set(this, {writable: true, value: function (e) {
        var t;
        var l;
        var a;
        var n;
        var i;
        if (!o.default(r, u) || !o.default(r, u).contains(e.relatedTarget)) {
          t = e.keyCode === 9;
          if (!(l = e.shiftKey) && t) {
            o.default(r, f).call(r, e);
          }
          if (o.default(r, u)) {
            a = (i = o.default(r, u).querySelectorAll("ul.sub-menu a"))[0];
            n = i[i.length - 1];
            i = document.activeElement;
            if (!l && t && n === i) {
              o.default(r, p).call(r, e);
            }
            if (l && t && a === i) {
              o.default(r, p).call(r, e);
            }
          }
        }
      }});
      b.set(this, {writable: true, value: function (e) {
        var t = e.querySelector("ul.sub-menu:not( ul.sub-menu.megamenu ul.sub-menu )");
        e.classList.add("sfHover");
        if (t) {
          s.fadeInNav(t, {callback: function () {}});
        }
      }});
      m.set(this, {writable: true, value: function (e) {
        var t = e.querySelector("ul.sub-menu:not( ul.sub-menu.megamenu ul.sub-menu )");
        e.classList.remove("sfHover");
        if (t) {
          t.style.pointerEvents = "none";
          s.fadeOutNav(t, {callback: function () {
            t.style.pointerEvents = null;
            if (e.classList.contains("sfHover")) {
              o.default(r, b).call(r, e);
            }
          }});
        }
      }});
      o.default(this, c).call(this);
    };
  }, {"../../lib/utils": 2, "@babel/runtime/helpers/classCallCheck": 10, "@babel/runtime/helpers/classPrivateFieldGet": 12, "@babel/runtime/helpers/classPrivateFieldSet": 13, "@babel/runtime/helpers/interopRequireDefault": 15}], 6: [function (e, t, l) {
    "use strict";
    var a = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(l, "__esModule", {value: true});
    l.default = void 0;
    var n = a(e("@babel/runtime/helpers/classCallCheck"));
    var i = a(e("@babel/runtime/helpers/defineProperty"));
    var r = a(e("@babel/runtime/helpers/classPrivateFieldSet"));
    var o = a(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var s = new WeakMap;
    var u = new WeakMap;
    var c = new WeakMap;
    var d = new WeakMap;
    var f = new WeakMap;
    l.default = function e() {
      var l = this;
      n.default(this, e);
      s.set(this, {writable: true, value: void 0});
      i.default(this, "mobileOverlayInput", void 0);
      u.set(this, {writable: true, value: function () {
        r.default(l, s, {forms: document.querySelectorAll("form.header-searchform")});
      }});
      c.set(this, {writable: true, value: function () {
        var e;
        l.mobileOverlayInput = document.querySelector(".mobile-search-overlay-input");
        o.default(l, s).forms.forEach(function (e) {
          var t;
          if ((t = e.querySelector("input")) !== null && t !== void 0 && t.value) {
            e.classList.add("search-filled");
          }
        });
        if ((e = l.mobileOverlayInput) !== null && e !== void 0 && e.value) {
          l.mobileOverlayInput.closest("form").classList.add("search-filled");
        }
      }});
      d.set(this, {writable: true, value: function () {
        var e;
        o.default(l, s).forms.forEach(function (e) {
          var t;
          if ((t = e.querySelector("input")) !== null && t !== void 0) {
            t.addEventListener("keyup", o.default(l, f));
          }
          if ((e = e.querySelector("input")) !== null && e !== void 0) {
            e.addEventListener("blur", o.default(l, f));
          }
        });
        if ((e = l.mobileOverlayInput) !== null && e !== void 0) {
          e.addEventListener("keyup", o.default(l, f));
        }
        if ((e = l.mobileOverlayInput) !== null && e !== void 0) {
          e.addEventListener("blur", o.default(l, f));
        }
      }});
      f.set(this, {writable: true, value: function (e) {
        var t = e.currentTarget;
        var e = t.closest("form");
        if (t.value) {
          e.classList.add("search-filled");
        } else {
          e.classList.remove("search-filled");
        }
      }});
      o.default(this, u).call(this);
      o.default(this, c).call(this);
      o.default(this, d).call(this);
    };
  }, {"@babel/runtime/helpers/classCallCheck": 10, "@babel/runtime/helpers/classPrivateFieldGet": 12, "@babel/runtime/helpers/classPrivateFieldSet": 13, "@babel/runtime/helpers/defineProperty": 14, "@babel/runtime/helpers/interopRequireDefault": 15}], 7: [function (e, t, l) {
    "use strict";
    var a = e("@babel/runtime/helpers/interopRequireDefault");
    var n = a(e("@babel/runtime/helpers/classCallCheck"));
    var i = a(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var r = a(e("./menu/menu"));
    var o = a(e("./menu/mega-menu"));
    var s = a(e("./search/search"));
    var u = a(e("./footer"));
    var c = new WeakMap;
    var d = new WeakMap;
    var f = new WeakMap;
    var e = function e() {
      var t = this;
      n.default(this, e);
      c.set(this, {writable: true, value: function () {
        t.menu = new r.default;
        t.megaMenu = new o.default;
        t.search = new s.default;
        t.footer = new u.default;
      }});
      d.set(this, {writable: true, value: function () {
        document.addEventListener("keydown", i.default(t, f));
      }});
      f.set(this, {writable: true, value: function (e) {
        if (e.keyCode === 13) {
          document.querySelector(".skip-link").addEventListener("keydown", function (e) {
            var t = document.getElementById("main");
            t.tabIndex = -1;
            t.focus();
          });
        }
      }});
      i.default(this, c).call(this);
      i.default(this, d).call(this);
    };
    window.oceanwp = window.oceanwp || {};
    oceanwp.theme = new e;
  }, {"./footer": 3, "./menu/mega-menu": 4, "./menu/menu": 5, "./search/search": 6, "@babel/runtime/helpers/classCallCheck": 10, "@babel/runtime/helpers/classPrivateFieldGet": 12, "@babel/runtime/helpers/interopRequireDefault": 15}], 8: [function (e, t, l) {
    t.exports = function (e, t) {
      if (t.get) {
        return t.get.call(e);
      } else {
        return t.value;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 9: [function (e, t, l) {
    t.exports = function (e, t, l) {
      if (t.set) {
        t.set.call(e, l);
      } else {
        if (!t.writable) {
          throw new TypeError("attempted to set read only private field");
        }
        t.value = l;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 10: [function (e, t, l) {
    t.exports = function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 11: [function (e, t, l) {
    t.exports = function (e, t, l) {
      if (!t.has(e)) {
        throw new TypeError("attempted to " + l + " private field on non-instance");
      }
      return t.get(e);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 12: [function (e, t, l) {
    var a = e("./classApplyDescriptorGet.js");
    var n = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t) {
      t = n(e, t, "get");
      return a(e, t);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorGet.js": 8, "./classExtractFieldDescriptor.js": 11}], 13: [function (e, t, l) {
    var a = e("./classApplyDescriptorSet.js");
    var n = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t, l) {
      t = n(e, t, "set");
      a(e, t, l);
      return l;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorSet.js": 9, "./classExtractFieldDescriptor.js": 11}], 14: [function (e, t, l) {
    t.exports = function (e, t, l) {
      if (t in e) {
        Object.defineProperty(e, t, {value: l, enumerable: true, configurable: true, writable: true});
      } else {
        e[t] = l;
      }
      return e;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 15: [function (e, t, l) {
    t.exports = function (e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {default: e};
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 16: [function (e, t, l) {
    function a(e) {
      if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
        t.exports = a = function (e) {
          return typeof e;
        };
      } else {
        t.exports = a = function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        };
      }
      t.exports.default = t.exports;
      t.exports.__esModule = true;
      return a(e);
    }
    t.exports = a;
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}]};
  var i = {};
  var r = [7];
  var s = typeof require == "function" && require;
  for (var e = 0; e < r.length; e++) {
    o(r[e]);
  }
  return o;
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function o() {
  function a(t, e) {
    if (!r[t]) {
      if (!i[t]) {
        var n = typeof require == "function" && require;
        if (!e && n) {
          return n(t, true);
        }
        if (s) {
          return s(t, true);
        }
        (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND";
        throw n;
      }
      n = r[t] = {exports: {}};
      i[t][0].call(n.exports, function (e) {
        return a(i[t][1][e] || e);
      }, n, n.exports, o, i, r, l);
    }
    return r[t].exports;
  }
  var i = {1: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: true});
    n.options = void 0;
    var o = oceanwpLocalize;
    n.options = o;
  }, {}], 2: [function (e, t, n) {
    "use strict";
    function r(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 300;
      var n = window.getComputedStyle(e).display;
      if (n === "none") {
        n = "block";
      }
      e.style.transitionProperty = "height";
      e.style.transitionDuration = "".concat(t, "ms");
      e.style.opacity = 0;
      e.style.display = n;
      var o = e.offsetHeight;
      e.style.height = 0;
      e.style.opacity = 1;
      e.style.overflow = "hidden";
      setTimeout(function () {
        e.style.height = "".concat(o, "px");
      }, 5);
      window.setTimeout(function () {
        e.style.removeProperty("height");
        e.style.removeProperty("overflow");
        e.style.removeProperty("transition-duration");
        e.style.removeProperty("transition-property");
        e.style.removeProperty("opacity");
      }, t + 50);
    }
    function l(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 300;
      e.style.boxSizing = "border-box";
      e.style.transitionProperty = "height, margin";
      e.style.transitionDuration = "".concat(t, "ms");
      e.style.height = "".concat(e.offsetHeight, "px");
      e.style.marginTop = 0;
      e.style.marginBottom = 0;
      e.style.overflow = "hidden";
      setTimeout(function () {
        e.style.height = 0;
      }, 5);
      window.setTimeout(function () {
        e.style.display = "none";
        e.style.removeProperty("height");
        e.style.removeProperty("margin-top");
        e.style.removeProperty("margin-bottom");
        e.style.removeProperty("overflow");
        e.style.removeProperty("transition-duration");
        e.style.removeProperty("transition-property");
      }, t + 50);
    }
    function a(e) {
      var t = {duration: 300, display: null, opacity: 1, callback: null};
      Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
      e.style.opacity = 0;
      e.style.display = t.display || "block";
      setTimeout(function () {
        e.style.transition = "".concat(t.duration, "ms opacity ease");
        e.style.opacity = t.opacity;
      }, 5);
      setTimeout(function () {
        e.style.removeProperty("transition");
        if (t.callback) {
          t.callback();
        }
      }, t.duration + 50);
    }
    function s(e) {
      var t;
      if (e.style.display !== "none") {
        t = {duration: 300, display: null, opacity: 0, callback: null};
        Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
        e.style.opacity = 1;
        e.style.display = t.display || "block";
        setTimeout(function () {
          e.style.transition = "".concat(t.duration, "ms opacity ease");
          e.style.opacity = t.opacity;
        }, 5);
        setTimeout(function () {
          e.style.display = "none";
          e.style.removeProperty("transition");
          if (t.callback) {
            t.callback();
          }
        }, t.duration + 50);
      }
    }
    var o = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(n, "__esModule", {value: true});
    n.fadeOutNav = n.fadeInNav = n.isSelectorValid = n.isElement = n.getSiblings = n.visible = n.offset = n.fadeToggle = n.fadeOut = n.fadeIn = n.slideToggle = n.slideUp = n.slideDown = n.wrap = void 0;
    var i = o(e("@babel/runtime/helpers/typeof"));
    n.wrap = function (e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : document.createElement("div");
      if (e.nextSibling) {
        e.parentNode.insertBefore(t, e.nextSibling);
      } else {
        e.parentNode.appendChild(t);
      }
      return t.appendChild(e);
    };
    n.slideDown = r;
    n.slideUp = l;
    n.slideToggle = function (e, t) {
      (window.getComputedStyle(e).display === "none" ? r : l)(e, t);
    };
    n.fadeIn = a;
    n.fadeOut = s;
    n.fadeToggle = function (e, t) {
      (window.getComputedStyle(e).display === "none" ? a : s)(e, t);
    };
    n.offset = function (e) {
      if (!e.getClientRects().length) {
        return {top: 0, left: 0};
      }
      var t = e.getBoundingClientRect();
      var e = e.ownerDocument.defaultView;
      return {top: t.top + e.pageYOffset, left: t.left + e.pageXOffset};
    };
    n.visible = function (e) {
      return !!e && (!!e.offsetWidth || !!e.offsetHeight || !!e.getClientRects().length);
    };
    n.getSiblings = function (e) {
      var t = [];
      if (!e.parentNode) {
        return t;
      }
      for (var n = e.parentNode.firstChild; n;) {
        if (n.nodeType === 1 && n !== e) {
          t.push(n);
        }
        n = n.nextSibling;
      }
      return t;
    };
    n.isElement = function (e) {
      if ((typeof HTMLElement == "undefined" ? "undefined" : i.default(HTMLElement)) === "object") {
        return e instanceof HTMLElement;
      } else {
        return e && i.default(e) === "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
      }
    };
    var u = document.createDocumentFragment();
    var e = function (e) {
      try {
        u.querySelector(e);
      } catch (e) {
        return false;
      }
      return true;
    };
    n.isSelectorValid = e;
    n.fadeInNav = function (e) {
      var t = {duration: 300, visibility: "visible", opacity: 1, callback: null};
      Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
      e.style.opacity = 0;
      e.style.visibility = t.visibility || "visible";
      setTimeout(function () {
        e.style.transition = "".concat(t.duration, "ms opacity ease");
        e.style.opacity = t.opacity;
      }, 5);
    };
    n.fadeOutNav = function (e) {
      var t;
      if (e.style.visibility !== "hidden") {
        t = {duration: 300, visibility: "hidden", opacity: 0, callback: null};
        Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
        e.style.opacity = 1;
        e.style.visibility = t.visibility || "visible";
        setTimeout(function () {
          e.style.transition = "".concat(t.duration, "ms opacity ease");
          e.style.opacity = t.opacity;
        }, 5);
        setTimeout(function () {
          e.style.visibility = "hidden";
          e.style.removeProperty("transition");
          if (t.callback) {
            t.callback();
          }
        }, t.duration + 50);
      }
    };
  }, {"@babel/runtime/helpers/interopRequireDefault": 11, "@babel/runtime/helpers/typeof": 12}], 3: [function (e, t, n) {
    "use strict";
    function s(t, e) {
      var n;
      var o = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        n = Object.getOwnPropertySymbols(t);
        if (e) {
          n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          });
        }
        o.push.apply(o, n);
      }
      return o;
    }
    function p(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        if (e % 2) {
          s(Object(n), true).forEach(function (e) {
            i.default(t, e, n[e]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
        } else {
          s(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
        }
      }
      return t;
    }
    var o = e("@babel/runtime/helpers/interopRequireDefault");
    var i = o(e("@babel/runtime/helpers/defineProperty"));
    var r = o(e("@babel/runtime/helpers/classCallCheck"));
    var l = o(e("@babel/runtime/helpers/classPrivateFieldSet"));
    var u = o(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var a = o(e("delegate"));
    var c = e("../../constants");
    var d = e("../../lib/utils");
    var f = new WeakMap;
    var y = new WeakMap;
    var v = new WeakMap;
    var m = new WeakMap;
    var b = new WeakMap;
    var g = new WeakMap;
    var h = new WeakMap;
    var w = new WeakMap;
    var x = new WeakMap;
    var M = new WeakMap;
    var k = new WeakMap;
    var E = new WeakMap;
    var e = function e() {
      var s = this;
      r.default(this, e);
      f.set(this, {writable: true, value: {body: document.body}});
      y.set(this, {writable: true, value: void 0});
      v.set(this, {writable: true, value: void 0});
      m.set(this, {writable: true, value: function () {
        l.default(s, f, p(p({}, u.default(s, f)), {}, {parentMenuItems: document.querySelectorAll("#mobile-dropdown .menu-item-has-children"), navWrapper: document.querySelector("#mobile-dropdown"), hamburgerBtn: document.querySelector(".mobile-menu > .hamburger"), toggleMenuBtn: document.querySelector(".mobile-menu"), nav: document.querySelector("#mobile-dropdown > nav")}));
      }});
      b.set(this, {writable: true, value: function () {
        var e;
        var t;
        l.default(s, y, false);
        if ((e = u.default(s, f).parentMenuItems) !== null && e !== void 0) {
          e.forEach(function (e) {
            var t = document.createElement("span");
            t.className = "dropdown-toggle";
            t.setAttribute("tabindex", 0);
            e.getElementsByTagName("a")[0].appendChild(t);
          });
        }
        l.default(s, v, c.options.sidrDropdownTarget == "link" ? (t = u.default(s, f).navWrapper) === null || t === void 0 ? void 0 : t.querySelectorAll("li.menu-item-has-children > a") : (t = u.default(s, f).navWrapper) === null || t === void 0 ? void 0 : t.querySelectorAll(".dropdown-toggle"));
      }});
      g.set(this, {writable: true, value: function () {
        var e;
        a.default(document.body, ".mobile-menu", "click", u.default(s, h));
        if ((e = u.default(s, f).navWrapper) !== null && e !== void 0) {
          e.querySelectorAll('li a[href*="#"]:not([href="#"])').forEach(function (e) {
            e.addEventListener("click", u.default(s, w));
          });
        }
        document.addEventListener("click", u.default(s, w));
        if ((e = u.default(s, f).navWrapper) !== null && e !== void 0) {
          e.addEventListener("click", function (e) {
            e.stopPropagation();
          });
        }
        window.addEventListener("resize", u.default(s, x));
        if ((e = u.default(s, f).hamburgerBtn) !== null && e !== void 0) {
          e.addEventListener("click", u.default(s, M));
        }
        if ((e = u.default(s, v)) !== null && e !== void 0) {
          e.forEach(function (e) {
            e.addEventListener("click", u.default(s, k));
          });
        }
        document.addEventListener("keydown", u.default(s, E));
      }});
      h.set(this, {writable: true, value: function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (u.default(s, f).navWrapper) {
          d.slideToggle(u.default(s, f).navWrapper, 400);
        }
        if ((e = u.default(s, f).toggleMenuBtn) !== null && e !== void 0) {
          e.classList.toggle("opened");
        }
        if ((e = u.default(s, f).hamburgerBtn) !== null && e !== void 0) {
          e.classList.toggle("is-active");
        }
        if ((e = u.default(s, f).toggleMenuBtn) !== null && e !== void 0) {
          e.focus();
        }
      }});
      w.set(this, {writable: true, value: function (e) {
        var t;
        if (u.default(s, f).navWrapper) {
          d.slideUp(u.default(s, f).navWrapper, 250);
        }
        if ((t = u.default(s, f).toggleMenuBtn) !== null && t !== void 0) {
          t.classList.remove("opened");
        }
        if ((t = u.default(s, f).hamburgerBtn) !== null && t !== void 0) {
          t.classList.remove("is-active");
        }
      }});
      x.set(this, {writable: true, value: function (e) {
        if (960 <= window.innerWidth) {
          u.default(s, w).call(s);
        }
      }});
      M.set(this, {writable: true, value: function (e) {
        l.default(s, y, !u.default(s, y));
        e.currentTarget.setAttribute("aria-expanded", u.default(s, y));
      }});
      k.set(this, {writable: true, value: function (e) {
        e.preventDefault();
        e.stopPropagation();
        var t = e.currentTarget;
        var n = (c.options.sidrDropdownTarget == "link" ? t : t.parentNode).parentNode;
        var e = n.lastElementChild;
        if (n != null && n.classList.contains("active")) {
          n.classList.remove("active");
          d.slideUp(e, 250);
          if ((t = n.querySelectorAll(".menu-item-has-children.active")) !== null && t !== void 0) {
            t.forEach(function (e) {
              e.classList.remove("active");
              d.slideUp(e.querySelector("ul"));
            });
          }
        } else {
          n.classList.add("active");
          d.slideDown(e, 250);
        }
      }});
      E.set(this, {writable: true, value: function (e) {
        var t;
        var n;
        var o;
        var i;
        var r;
        var l;
        var a;
        if ((a = u.default(s, f).toggleMenuBtn) !== null && a !== void 0 && a.classList.contains("opened")) {
          t = e.keyCode === 9;
          n = e.shiftKey;
          o = e.keyCode === 27;
          i = e.keyCode === 13;
          r = u.default(s, f).toggleMenuBtn;
          l = (a = (l = u.default(s, f).nav) === null || l === void 0 ? void 0 : l.querySelectorAll("a, span.dropdown-toggle, input, button"))[0];
          a = a[a.length - 1];
          if (r) {
            r.style.outline = "";
          }
          if (o) {
            e.preventDefault();
            u.default(s, w).call(s);
          }
          if (i && document.activeElement.classList.contains("dropdown-toggle")) {
            e.preventDefault();
            document.activeElement.triggerEvent("click");
          }
          if (!n && t && a === document.activeElement) {
            e.preventDefault();
            r.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
            r.focus();
          }
          if (n && t && l === document.activeElement) {
            e.preventDefault();
            r.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
            r.focus();
          }
          if (t && l === a) {
            e.preventDefault();
          }
        }
      }});
      if (u.default(this, f).body.classList.contains("dropdown-mobile")) {
        u.default(this, m).call(this);
        u.default(this, b).call(this);
        u.default(this, g).call(this);
      }
    };
    window.oceanwp = window.oceanwp || {};
    oceanwp.dropDownMobileMenu = new e;
  }, {"../../constants": 1, "../../lib/utils": 2, "@babel/runtime/helpers/classCallCheck": 6, "@babel/runtime/helpers/classPrivateFieldGet": 8, "@babel/runtime/helpers/classPrivateFieldSet": 9, "@babel/runtime/helpers/defineProperty": 10, "@babel/runtime/helpers/interopRequireDefault": 11, delegate: 14}], 4: [function (e, t, n) {
    t.exports = function (e, t) {
      if (t.get) {
        return t.get.call(e);
      } else {
        return t.value;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 5: [function (e, t, n) {
    t.exports = function (e, t, n) {
      if (t.set) {
        t.set.call(e, n);
      } else {
        if (!t.writable) {
          throw new TypeError("attempted to set read only private field");
        }
        t.value = n;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 6: [function (e, t, n) {
    t.exports = function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 7: [function (e, t, n) {
    t.exports = function (e, t, n) {
      if (!t.has(e)) {
        throw new TypeError("attempted to " + n + " private field on non-instance");
      }
      return t.get(e);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 8: [function (e, t, n) {
    var o = e("./classApplyDescriptorGet.js");
    var i = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t) {
      t = i(e, t, "get");
      return o(e, t);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorGet.js": 4, "./classExtractFieldDescriptor.js": 7}], 9: [function (e, t, n) {
    var o = e("./classApplyDescriptorSet.js");
    var i = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t, n) {
      t = i(e, t, "set");
      o(e, t, n);
      return n;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorSet.js": 5, "./classExtractFieldDescriptor.js": 7}], 10: [function (e, t, n) {
    t.exports = function (e, t, n) {
      if (t in e) {
        Object.defineProperty(e, t, {value: n, enumerable: true, configurable: true, writable: true});
      } else {
        e[t] = n;
      }
      return e;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 11: [function (e, t, n) {
    t.exports = function (e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {default: e};
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 12: [function (e, t, n) {
    function o(e) {
      if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
        t.exports = o = function (e) {
          return typeof e;
        };
      } else {
        t.exports = o = function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        };
      }
      t.exports.default = t.exports;
      t.exports.__esModule = true;
      return o(e);
    }
    t.exports = o;
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 13: [function (e, t, n) {
    var o;
    if (typeof Element != "undefined" && !Element.prototype.matches) {
      (o = Element.prototype).matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector;
    }
    t.exports = function (e, t) {
      while (e && e.nodeType !== 9) {
        if (typeof e.matches == "function" && e.matches(t)) {
          return e;
        }
        e = e.parentNode;
      }
    };
  }, {}], 14: [function (e, t, n) {
    function r(e, t, n, o, i) {
      var r = function (t, n, e, o) {
        return function (e) {
          e.delegateTarget = l(e.target, n);
          if (e.delegateTarget) {
            o.call(t, e);
          }
        };
      }.apply(this, arguments);
      e.addEventListener(n, r, i);
      return {destroy: function () {
        e.removeEventListener(n, r, i);
      }};
    }
    var l = e("./closest");
    t.exports = function (e, t, n, o, i) {
      if (typeof e.addEventListener == "function") {
        return r.apply(null, arguments);
      } else if (typeof n == "function") {
        return r.bind(null, document).apply(null, arguments);
      } else {
        if (typeof e == "string") {
          e = document.querySelectorAll(e);
        }
        return Array.prototype.map.call(e, function (e) {
          return r(e, t, n, o, i);
        });
      }
    };
  }, {"./closest": 13}]};
  var r = {};
  var l = [3];
  var s = typeof require == "function" && require;
  for (var e = 0; e < l.length; e++) {
    a(l[e]);
  }
  return a;
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function o() {
  function u(t, e) {
    if (!s[t]) {
      if (!n[t]) {
        var r = typeof require == "function" && require;
        if (!e && r) {
          return r(t, true);
        }
        if (a) {
          return a(t, true);
        }
        (r = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND";
        throw r;
      }
      r = s[t] = {exports: {}};
      n[t][0].call(r.exports, function (e) {
        return u(n[t][1][e] || e);
      }, r, r.exports, o, n, s, l);
    }
    return s[t].exports;
  }
  var n = {1: [function (e, t, r) {
    "use strict";
    Object.defineProperty(r, "__esModule", {value: true});
    r.options = void 0;
    var o = oceanwpLocalize;
    r.options = o;
  }, {}], 2: [function (e, t, r) {
    "use strict";
    var o = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(r, "__esModule", {value: true});
    r.default = void 0;
    var n = o(e("@babel/runtime/helpers/classCallCheck"));
    var s = o(e("@babel/runtime/helpers/defineProperty"));
    r.default = function e() {
      n.default(this, e);
      s.default(this, "focus", function (e, t) {
        var r = 1e3 * parseFloat(getComputedStyle(e).transitionDuration.replace("s", ""));
        if (r = r || 600) {
          setTimeout(function () {
            e.querySelector(t).focus();
          }, r);
        }
      });
    };
  }, {"@babel/runtime/helpers/classCallCheck": 7, "@babel/runtime/helpers/defineProperty": 11, "@babel/runtime/helpers/interopRequireDefault": 14}], 3: [function (e, t, r) {
    "use strict";
    function c(r) {
      var o = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var e;
        var t = a.default(r);
        t = o ? (e = a.default(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments);
        return u.default(this, t);
      };
    }
    var o = e("@babel/runtime/helpers/interopRequireDefault");
    var n = o(e("@babel/runtime/helpers/classCallCheck"));
    var s = o(e("@babel/runtime/helpers/assertThisInitialized"));
    var l = o(e("@babel/runtime/helpers/inherits"));
    var u = o(e("@babel/runtime/helpers/possibleConstructorReturn"));
    var a = o(e("@babel/runtime/helpers/getPrototypeOf"));
    var i = o(e("@babel/runtime/helpers/classPrivateFieldSet"));
    var p = o(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var f = e("../../constants");
    var e = o(e("./base"));
    var d = new WeakMap;
    var b = new WeakMap;
    var x = new WeakMap;
    var h = new WeakMap;
    var y = new WeakMap;
    var e = function (e) {
      function o() {
        n.default(this, o);
        var r = t.call(this);
        d.set(s.default(r), {writable: true, value: void 0});
        b.set(s.default(r), {writable: true, value: function () {
          i.default(s.default(r), d, {toggleSearchBtn: document.querySelector("a.search-dropdown-toggle"), form: document.querySelector("#searchform-dropdown")});
        }});
        x.set(s.default(r), {writable: true, value: function () {
          var e;
          if ((e = p.default(s.default(r), d).toggleSearchBtn) !== null && e !== void 0) {
            e.addEventListener("click", p.default(s.default(r), h));
          }
          document.addEventListener("click", p.default(s.default(r), y));
        }});
        h.set(s.default(r), {writable: true, value: function (e) {
          e.preventDefault();
          e.stopPropagation();
          var t = p.default(s.default(r), d);
          var e = t.toggleSearchBtn;
          var t = t.form;
          e.parentNode.classList.toggle("active");
          t.classList.toggle("show");
          r.focus(t, "input.field");
        }});
        y.set(s.default(r), {writable: true, value: function (e) {
          if (!e.target.closest("#searchform-dropdown.show")) {
            if ((e = p.default(s.default(r), d).form) !== null && e !== void 0) {
              e.classList.remove("show");
            }
            if ((e = p.default(s.default(r), d).toggleSearchBtn) !== null && e !== void 0) {
              if ((e = e.parentNode) !== null && e !== void 0) {
                e.classList.remove("active");
              }
            }
          }
        }});
        if (f.options.menuSearchStyle === "drop_down") {
          p.default(s.default(r), b).call(s.default(r));
          p.default(s.default(r), x).call(s.default(r));
          return r;
        } else {
          return u.default(r);
        }
      }
      l.default(o, e);
      var t = c(o);
      return o;
    }(e.default);
    window.oceanwp = window.oceanwp || {};
    oceanwp.dropDownSearch = new e;
  }, {"../../constants": 1, "./base": 2, "@babel/runtime/helpers/assertThisInitialized": 4, "@babel/runtime/helpers/classCallCheck": 7, "@babel/runtime/helpers/classPrivateFieldGet": 9, "@babel/runtime/helpers/classPrivateFieldSet": 10, "@babel/runtime/helpers/getPrototypeOf": 12, "@babel/runtime/helpers/inherits": 13, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/possibleConstructorReturn": 15}], 4: [function (e, t, r) {
    t.exports = function (e) {
      if (e === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 5: [function (e, t, r) {
    t.exports = function (e, t) {
      if (t.get) {
        return t.get.call(e);
      } else {
        return t.value;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 6: [function (e, t, r) {
    t.exports = function (e, t, r) {
      if (t.set) {
        t.set.call(e, r);
      } else {
        if (!t.writable) {
          throw new TypeError("attempted to set read only private field");
        }
        t.value = r;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 7: [function (e, t, r) {
    t.exports = function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 8: [function (e, t, r) {
    t.exports = function (e, t, r) {
      if (!t.has(e)) {
        throw new TypeError("attempted to " + r + " private field on non-instance");
      }
      return t.get(e);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 9: [function (e, t, r) {
    var o = e("./classApplyDescriptorGet.js");
    var n = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t) {
      t = n(e, t, "get");
      return o(e, t);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorGet.js": 5, "./classExtractFieldDescriptor.js": 8}], 10: [function (e, t, r) {
    var o = e("./classApplyDescriptorSet.js");
    var n = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t, r) {
      t = n(e, t, "set");
      o(e, t, r);
      return r;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorSet.js": 6, "./classExtractFieldDescriptor.js": 8}], 11: [function (e, t, r) {
    t.exports = function (e, t, r) {
      if (t in e) {
        Object.defineProperty(e, t, {value: r, enumerable: true, configurable: true, writable: true});
      } else {
        e[t] = r;
      }
      return e;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 12: [function (e, t, r) {
    function o(e) {
      t.exports = o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      };
      t.exports.default = t.exports;
      t.exports.__esModule = true;
      return o(e);
    }
    t.exports = o;
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 13: [function (e, t, r) {
    var o = e("./setPrototypeOf.js");
    t.exports = function (e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      e.prototype = Object.create(t && t.prototype, {constructor: {value: e, writable: true, configurable: true}});
      if (t) {
        o(e, t);
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./setPrototypeOf.js": 16}], 14: [function (e, t, r) {
    t.exports = function (e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {default: e};
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 15: [function (e, t, r) {
    var o = e("@babel/runtime/helpers/typeof").default;
    var n = e("./assertThisInitialized.js");
    t.exports = function (e, t) {
      if (!t || o(t) !== "object" && typeof t != "function") {
        return n(e);
      } else {
        return t;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./assertThisInitialized.js": 4, "@babel/runtime/helpers/typeof": 17}], 16: [function (e, r, t) {
    function o(e, t) {
      r.exports = o = Object.setPrototypeOf || function (e, t) {
        e.__proto__ = t;
        return e;
      };
      r.exports.default = r.exports;
      r.exports.__esModule = true;
      return o(e, t);
    }
    r.exports = o;
    r.exports.default = r.exports;
    r.exports.__esModule = true;
  }, {}], 17: [function (e, t, r) {
    function o(e) {
      if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
        t.exports = o = function (e) {
          return typeof e;
        };
      } else {
        t.exports = o = function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        };
      }
      t.exports.default = t.exports;
      t.exports.__esModule = true;
      return o(e);
    }
    t.exports = o;
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}]};
  var s = {};
  var l = [3];
  var a = typeof require == "function" && require;
  for (var e = 0; e < l.length; e++) {
    u(l[e]);
  }
  return u;
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function o() {
  function a(t, e) {
    if (!r[t]) {
      if (!i[t]) {
        var n = typeof require == "function" && require;
        if (!e && n) {
          return n(t, true);
        }
        if (s) {
          return s(t, true);
        }
        (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND";
        throw n;
      }
      n = r[t] = {exports: {}};
      i[t][0].call(n.exports, function (e) {
        return a(i[t][1][e] || e);
      }, n, n.exports, o, i, r, l);
    }
    return r[t].exports;
  }
  var i = {1: [function (e, t, n) {
    "use strict";
    var o = e("@babel/runtime/helpers/interopRequireDefault");
    var i = o(e("@babel/runtime/helpers/classCallCheck"));
    var r = o(e("@babel/runtime/helpers/defineProperty"));
    var l = o(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var a = new WeakMap;
    var s = new WeakMap;
    var e = function e() {
      var o = this;
      i.default(this, e);
      r.default(this, "start", function () {
        if (!document.body.classList.contains("no-lightbox")) {
          l.default(o, a).call(o);
          o.initSingleImageLightbox();
          o.initGalleryLightbox();
        }
      });
      r.default(this, "initSingleImageLightbox", function () {
        var e;
        if ((e = document.querySelectorAll(".oceanwp-lightbox")) !== null && e !== void 0) {
          e.forEach(function (e) {
            e.addEventListener("click", function (e) {
              e.preventDefault();
              e.stopPropagation();
            });
          });
        }
        jQuery(".oceanwp-lightbox").magnificPopup({type: "image", mainClass: "mfp-with-zoom", zoom: {enabled: true, duration: 300, easing: "ease-in-out", opener: function (e) {
          if (e.is("img")) {
            return e;
          } else {
            return e.find("img");
          }
        }}});
      });
      r.default(this, "initGalleryLightbox", function () {
        jQuery(".wp-block-gallery, .gallery-format, .gallery").magnificPopup({delegate: ".gallery-lightbox:not(.slick-cloned)", type: "image", mainClass: "mfp-fade", gallery: {enabled: true}});
      });
      a.set(this, {writable: true, value: function () {
        var e;
        if ((e = document.querySelectorAll("body .entry-content a, body .entry a, body article .gallery-format a")) !== null && e !== void 0) {
          e.forEach(function (t) {
            var e;
            var n;
            if (t.querySelector("img")) {
              e = l.default(o, s).call(o);
              n = 0;
              e.forEach(function (e) {
                n += String(t.getAttribute("href")).indexOf("." + e);
              });
              if (n === -13) {
                t.classList.add("no-lightbox");
              }
              if (!t.classList.contains("no-lightbox") && !t.classList.contains("gallery-lightbox") && !t.parentNode.classList.contains("gallery-icon") && !t.classList.contains("woo-lightbox") && !t.classList.contains("woo-thumbnail") && !t.parentNode.classList.contains("woocommerce-product-gallery__image") && !t.closest(".wp-block-gallery") && !t.getAttribute("data-elementor-open-lightbox") && !t.classList.contains("yith_magnifier_thumbnail") && !t.classList.contains("gg-link")) {
                t.classList.add("oceanwp-lightbox");
              }
              if (!t.classList.contains("no-lightbox")) {
                if (t.parentNode.classList.contains("gallery-icon") || t.closest(".wp-block-gallery")) {
                  t.classList.add("gallery-lightbox");
                }
              }
            }
          });
        }
      }});
      s.set(this, {writable: true, value: function () {
        return ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe", "svg", "mp4", "ogg", "webm"];
      }});
      this.start();
    };
    window.oceanwp = window.oceanwp || {};
    oceanwp.owLightbox = new e;
  }, {"@babel/runtime/helpers/classCallCheck": 3, "@babel/runtime/helpers/classPrivateFieldGet": 5, "@babel/runtime/helpers/defineProperty": 6, "@babel/runtime/helpers/interopRequireDefault": 7}], 2: [function (e, t, n) {
    t.exports = function (e, t) {
      if (t.get) {
        return t.get.call(e);
      } else {
        return t.value;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 3: [function (e, t, n) {
    t.exports = function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 4: [function (e, t, n) {
    t.exports = function (e, t, n) {
      if (!t.has(e)) {
        throw new TypeError("attempted to " + n + " private field on non-instance");
      }
      return t.get(e);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 5: [function (e, t, n) {
    var o = e("./classApplyDescriptorGet.js");
    var i = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t) {
      t = i(e, t, "get");
      return o(e, t);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorGet.js": 2, "./classExtractFieldDescriptor.js": 4}], 6: [function (e, t, n) {
    t.exports = function (e, t, n) {
      if (t in e) {
        Object.defineProperty(e, t, {value: n, enumerable: true, configurable: true, writable: true});
      } else {
        e[t] = n;
      }
      return e;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 7: [function (e, t, n) {
    t.exports = function (e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {default: e};
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}]};
  var r = {};
  var l = [1];
  var s = typeof require == "function" && require;
  for (var e = 0; e < l.length; e++) {
    a(l[e]);
  }
  return a;
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function n() {
  function a(t, e) {
    if (!i[t]) {
      if (!o[t]) {
        var r = typeof require == "function" && require;
        if (!e && r) {
          return r(t, true);
        }
        if (u) {
          return u(t, true);
        }
        (r = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND";
        throw r;
      }
      r = i[t] = {exports: {}};
      o[t][0].call(r.exports, function (e) {
        return a(o[t][1][e] || e);
      }, r, r.exports, n, o, i, l);
    }
    return i[t].exports;
  }
  var o = {1: [function (e, t, r) {
    "use strict";
    var n = e("@babel/runtime/helpers/interopRequireDefault");
    var o = n(e("@babel/runtime/helpers/classCallCheck"));
    var i = n(e("@babel/runtime/helpers/defineProperty"));
    var e = function e() {
      var r = this;
      o.default(this, e);
      i.default(this, "flickity", void 0);
      i.default(this, "start", function () {
        var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : document.querySelectorAll(".gallery-format, .product-entry-slider");
        r.flickity = [];
        if (e != null) {
          e.forEach(function (e) {
            var t = new Flickity(e, {autoPlay: !e.classList.contains("woo-entry-image") && 6e3, rightToLeft: !!document.body.classList.contains("rtl"), imagesLoaded: true, pageDots: false, on: {ready: function () {
              e.style.opacity = 1;
              e.style.visibility = "visible";
              e.style.height = "auto";
            }}});
            r.flickity.push(t);
          });
        }
      });
      this.start();
    };
    window.oceanwp = window.oceanwp || {};
    window.oceanwp.theme = window.oceanwp.theme || {};
    oceanwp.owSlider = new e;
    oceanwp.theme.owSlider = oceanwp.owSlider;
  }, {"@babel/runtime/helpers/classCallCheck": 2, "@babel/runtime/helpers/defineProperty": 3, "@babel/runtime/helpers/interopRequireDefault": 4}], 2: [function (e, t, r) {
    t.exports = function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 3: [function (e, t, r) {
    t.exports = function (e, t, r) {
      if (t in e) {
        Object.defineProperty(e, t, {value: r, enumerable: true, configurable: true, writable: true});
      } else {
        e[t] = r;
      }
      return e;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 4: [function (e, t, r) {
    t.exports = function (e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {default: e};
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}]};
  var i = {};
  var l = [1];
  var u = typeof require == "function" && require;
  for (var e = 0; e < l.length; e++) {
    a(l[e]);
  }
  return a;
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function i() {
  function l(t, e) {
    if (!r[t]) {
      if (!n[t]) {
        var o = typeof require == "function" && require;
        if (!e && o) {
          return o(t, true);
        }
        if (a) {
          return a(t, true);
        }
        (o = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND";
        throw o;
      }
      o = r[t] = {exports: {}};
      n[t][0].call(o.exports, function (e) {
        return l(n[t][1][e] || e);
      }, o, o.exports, i, n, r, s);
    }
    return r[t].exports;
  }
  var n = {1: [function (e, t, o) {
    "use strict";
    function r(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 300;
      var o = window.getComputedStyle(e).display;
      if (o === "none") {
        o = "block";
      }
      e.style.transitionProperty = "height";
      e.style.transitionDuration = "".concat(t, "ms");
      e.style.opacity = 0;
      e.style.display = o;
      var i = e.offsetHeight;
      e.style.height = 0;
      e.style.opacity = 1;
      e.style.overflow = "hidden";
      setTimeout(function () {
        e.style.height = "".concat(i, "px");
      }, 5);
      window.setTimeout(function () {
        e.style.removeProperty("height");
        e.style.removeProperty("overflow");
        e.style.removeProperty("transition-duration");
        e.style.removeProperty("transition-property");
        e.style.removeProperty("opacity");
      }, t + 50);
    }
    function s(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 300;
      e.style.boxSizing = "border-box";
      e.style.transitionProperty = "height, margin";
      e.style.transitionDuration = "".concat(t, "ms");
      e.style.height = "".concat(e.offsetHeight, "px");
      e.style.marginTop = 0;
      e.style.marginBottom = 0;
      e.style.overflow = "hidden";
      setTimeout(function () {
        e.style.height = 0;
      }, 5);
      window.setTimeout(function () {
        e.style.display = "none";
        e.style.removeProperty("height");
        e.style.removeProperty("margin-top");
        e.style.removeProperty("margin-bottom");
        e.style.removeProperty("overflow");
        e.style.removeProperty("transition-duration");
        e.style.removeProperty("transition-property");
      }, t + 50);
    }
    function l(e) {
      var t = {duration: 300, display: null, opacity: 1, callback: null};
      Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
      e.style.opacity = 0;
      e.style.display = t.display || "block";
      setTimeout(function () {
        e.style.transition = "".concat(t.duration, "ms opacity ease");
        e.style.opacity = t.opacity;
      }, 5);
      setTimeout(function () {
        e.style.removeProperty("transition");
        if (t.callback) {
          t.callback();
        }
      }, t.duration + 50);
    }
    function a(e) {
      var t;
      if (e.style.display !== "none") {
        t = {duration: 300, display: null, opacity: 0, callback: null};
        Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
        e.style.opacity = 1;
        e.style.display = t.display || "block";
        setTimeout(function () {
          e.style.transition = "".concat(t.duration, "ms opacity ease");
          e.style.opacity = t.opacity;
        }, 5);
        setTimeout(function () {
          e.style.display = "none";
          e.style.removeProperty("transition");
          if (t.callback) {
            t.callback();
          }
        }, t.duration + 50);
      }
    }
    var i = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(o, "__esModule", {value: true});
    o.fadeOutNav = o.fadeInNav = o.isSelectorValid = o.isElement = o.getSiblings = o.visible = o.offset = o.fadeToggle = o.fadeOut = o.fadeIn = o.slideToggle = o.slideUp = o.slideDown = o.wrap = void 0;
    var n = i(e("@babel/runtime/helpers/typeof"));
    o.wrap = function (e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : document.createElement("div");
      if (e.nextSibling) {
        e.parentNode.insertBefore(t, e.nextSibling);
      } else {
        e.parentNode.appendChild(t);
      }
      return t.appendChild(e);
    };
    o.slideDown = r;
    o.slideUp = s;
    o.slideToggle = function (e, t) {
      (window.getComputedStyle(e).display === "none" ? r : s)(e, t);
    };
    o.fadeIn = l;
    o.fadeOut = a;
    o.fadeToggle = function (e, t) {
      (window.getComputedStyle(e).display === "none" ? l : a)(e, t);
    };
    o.offset = function (e) {
      if (!e.getClientRects().length) {
        return {top: 0, left: 0};
      }
      var t = e.getBoundingClientRect();
      var e = e.ownerDocument.defaultView;
      return {top: t.top + e.pageYOffset, left: t.left + e.pageXOffset};
    };
    o.visible = function (e) {
      return !!e && (!!e.offsetWidth || !!e.offsetHeight || !!e.getClientRects().length);
    };
    o.getSiblings = function (e) {
      var t = [];
      if (!e.parentNode) {
        return t;
      }
      for (var o = e.parentNode.firstChild; o;) {
        if (o.nodeType === 1 && o !== e) {
          t.push(o);
        }
        o = o.nextSibling;
      }
      return t;
    };
    o.isElement = function (e) {
      if ((typeof HTMLElement == "undefined" ? "undefined" : n.default(HTMLElement)) === "object") {
        return e instanceof HTMLElement;
      } else {
        return e && n.default(e) === "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
      }
    };
    var c = document.createDocumentFragment();
    var e = function (e) {
      try {
        c.querySelector(e);
      } catch (e) {
        return false;
      }
      return true;
    };
    o.isSelectorValid = e;
    o.fadeInNav = function (e) {
      var t = {duration: 300, visibility: "visible", opacity: 1, callback: null};
      Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
      e.style.opacity = 0;
      e.style.visibility = t.visibility || "visible";
      setTimeout(function () {
        e.style.transition = "".concat(t.duration, "ms opacity ease");
        e.style.opacity = t.opacity;
      }, 5);
    };
    o.fadeOutNav = function (e) {
      var t;
      if (e.style.visibility !== "hidden") {
        t = {duration: 300, visibility: "hidden", opacity: 0, callback: null};
        Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
        e.style.opacity = 1;
        e.style.visibility = t.visibility || "visible";
        setTimeout(function () {
          e.style.transition = "".concat(t.duration, "ms opacity ease");
          e.style.opacity = t.opacity;
        }, 5);
        setTimeout(function () {
          e.style.visibility = "hidden";
          e.style.removeProperty("transition");
          if (t.callback) {
            t.callback();
          }
        }, t.duration + 50);
      }
    };
  }, {"@babel/runtime/helpers/interopRequireDefault": 10, "@babel/runtime/helpers/typeof": 11}], 2: [function (e, t, o) {
    "use strict";
    function c(t, e) {
      var o;
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        o = Object.getOwnPropertySymbols(t);
        if (e) {
          o = o.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          });
        }
        i.push.apply(i, o);
      }
      return i;
    }
    function u(t) {
      for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e] != null ? arguments[e] : {};
        if (e % 2) {
          c(Object(o), true).forEach(function (e) {
            n.default(t, e, o[e]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
        } else {
          c(Object(o)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
          });
        }
      }
      return t;
    }
    var i = e("@babel/runtime/helpers/interopRequireDefault");
    var n = i(e("@babel/runtime/helpers/defineProperty"));
    var r = i(e("@babel/runtime/helpers/classCallCheck"));
    var s = i(e("@babel/runtime/helpers/classPrivateFieldSet"));
    var l = i(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var a = e("../lib/utils");
    var p = new WeakMap;
    var d = new WeakMap;
    var f = new WeakMap;
    var y = new WeakMap;
    var h = new WeakMap;
    var b = new WeakMap;
    var m = new WeakMap;
    var e = function e() {
      var n = this;
      r.default(this, e);
      p.set(this, {writable: true, value: {body: document.body}});
      d.set(this, {writable: true, value: function () {
        s.default(n, p, u(u({}, l.default(n, p)), {}, {html: document.querySelector("html"), WPAdminbar: document.querySelector("#wpadminbar"), topbarWrapper: document.querySelector("#top-bar-wrap"), header: document.querySelector("#site-header")}));
      }});
      f.set(this, {writable: true, value: function () {
        document.querySelectorAll('a[href*="#"]:not([href="#"]):not(.comment-navigation .nav-links a), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])').forEach(function (e) {
          e.addEventListener("click", l.default(n, y));
        });
      }});
      y.set(this, {writable: true, value: function (e) {
        var t;
        var o = e.currentTarget;
        if ((!o.classList.contains("elementor-item-anchor") || !o.classList.contains("has-submenu")) && !o.classList.contains("omw-open-modal") && !o.closest(".omw-open-modal") && !o.classList.contains("oew-modal-button") && !o.closest(".oew-modal-button") && !o.classList.contains("opl-link") && !o.parentNode.classList.contains("opl-link") && !o.classList.contains("sidr-class-opl-link") && !o.parentNode.classList.contains("sidr-class-opl-link") && !o.classList.contains("comment-reply") && !o.classList.contains("htb-nav-link") && !o.classList.contains("upload-file") && !o.parentNode.classList.contains("vc_tta-panel-title") && !o.classList.contains("vce-tabs-with-slide-tab-title") && !o.classList.contains("vce-tabs-with-slide-panel-title") && !o.classList.contains("vce-classic-tabs-tab-title") && !o.classList.contains("vce-classic-accordion-panel-title")) {
          o = (t = o.getAttribute("href")).substring(t.indexOf("#")).slice(1);
          if ((t = null, a.isSelectorValid)("#".concat(o))) {
            t = document.querySelector("#".concat(o));
          }
          if (o != "" && t) {
            e.preventDefault();
            e.stopPropagation();
            t = a.offset(t).top - l.default(n, h).call(n) - l.default(n, b).call(n) - l.default(n, m).call(n);
            l.default(n, p).html.scrollTo({top: t, behavior: "smooth"});
          }
        }
      }});
      h.set(this, {writable: true, value: function () {
        if (l.default(n, p).WPAdminbar) {
          return l.default(n, p).WPAdminbar.offsetHeight;
        } else {
          return 0;
        }
      }});
      b.set(this, {writable: true, value: function () {
        if (l.default(n, p).topbarWrapper && l.default(n, p).topbarWrapper.classList.contains("top-bar-sticky")) {
          return l.default(n, p).topbarWrapper.offsetHeight;
        } else {
          return 0;
        }
      }});
      m.set(this, {writable: true, value: function () {
        var e;
        var t = 0 < arguments.length && arguments[0] !== void 0 && arguments[0];
        var o = document.querySelector("#site-header-sticky-wrapper");
        if (o) {
          if (o.classList.contains("is-sticky") && !t) {
            return l.default(n, p).header.offsetHeight;
          }
          if ((t = l.default(n, p).header) !== null && t !== void 0 && t.classList.contains("top-header")) {
            return Number.parseInt(getComputedStyle(o).height);
          }
          if ((o = l.default(n, p).header) !== null && o !== void 0 && o.classList.contains("medium-header")) {
            var i = l.default(n, p).header.querySelector(".bottom-header-wrap");
            if (i.classList.contains("fixed-scroll")) {
              return i.offsetHeight;
            } else if (l.default(n, p).header.classList.contains("hidden-menu")) {
              return l.default(n, p).header.dataset.height;
            } else {
              return l.default(n, p).header.offsetHeight;
            }
          }
          if ((i = l.default(n, p).header) !== null && i !== void 0 && i.classList.contains("fixed-header")) {
            return l.default(n, p).header.offsetHeight;
          } else if ((i = l.default(n, p).header) !== null && i !== void 0 && i.classList.contains("up-effect")) {
            return 0;
          } else if ((e = (e = l.default(n, p).header) === null || e === void 0 ? void 0 : e.dataset.height) !== null && e !== void 0) {
            return e;
          } else {
            return 54;
          }
        }
        if (document.querySelector("#stick-anything-header")) {
          return document.querySelector("#stick-anything-header").offsetHeight;
        } else if ((e = document.querySelector(".elementor-section-wrap")) !== null && e !== void 0 && e.firstElementChild.classList.contains("elementor-sticky")) {
          if ((e = document.querySelector(".elementor-section-wrap")) === null || e === void 0) {
            return;
          } else {
            return e.firstElementChild.offsetHeight;
          }
        } else {
          return 0;
        }
      }});
      if (!l.default(this, p).body.classList.contains("single-product") && !l.default(this, p).body.classList.contains("no-local-scroll")) {
        l.default(this, d).call(this);
        l.default(this, f).call(this);
      }
    };
    window.oceanwp = window.oceanwp || {};
    oceanwp.scrollEffect = new e;
  }, {"../lib/utils": 1, "@babel/runtime/helpers/classCallCheck": 5, "@babel/runtime/helpers/classPrivateFieldGet": 7, "@babel/runtime/helpers/classPrivateFieldSet": 8, "@babel/runtime/helpers/defineProperty": 9, "@babel/runtime/helpers/interopRequireDefault": 10}], 3: [function (e, t, o) {
    t.exports = function (e, t) {
      if (t.get) {
        return t.get.call(e);
      } else {
        return t.value;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 4: [function (e, t, o) {
    t.exports = function (e, t, o) {
      if (t.set) {
        t.set.call(e, o);
      } else {
        if (!t.writable) {
          throw new TypeError("attempted to set read only private field");
        }
        t.value = o;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 5: [function (e, t, o) {
    t.exports = function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 6: [function (e, t, o) {
    t.exports = function (e, t, o) {
      if (!t.has(e)) {
        throw new TypeError("attempted to " + o + " private field on non-instance");
      }
      return t.get(e);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 7: [function (e, t, o) {
    var i = e("./classApplyDescriptorGet.js");
    var n = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t) {
      t = n(e, t, "get");
      return i(e, t);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorGet.js": 3, "./classExtractFieldDescriptor.js": 6}], 8: [function (e, t, o) {
    var i = e("./classApplyDescriptorSet.js");
    var n = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t, o) {
      t = n(e, t, "set");
      i(e, t, o);
      return o;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorSet.js": 4, "./classExtractFieldDescriptor.js": 6}], 9: [function (e, t, o) {
    t.exports = function (e, t, o) {
      if (t in e) {
        Object.defineProperty(e, t, {value: o, enumerable: true, configurable: true, writable: true});
      } else {
        e[t] = o;
      }
      return e;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 10: [function (e, t, o) {
    t.exports = function (e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {default: e};
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 11: [function (e, t, o) {
    function i(e) {
      if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
        t.exports = i = function (e) {
          return typeof e;
        };
      } else {
        t.exports = i = function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        };
      }
      t.exports.default = t.exports;
      t.exports.__esModule = true;
      return i(e);
    }
    t.exports = i;
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}]};
  var r = {};
  var s = [2];
  var a = typeof require == "function" && require;
  for (var e = 0; e < s.length; e++) {
    l(s[e]);
  }
  return l;
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function i() {
  function s(t, e) {
    if (!l[t]) {
      if (!n[t]) {
        var o = typeof require == "function" && require;
        if (!e && o) {
          return o(t, true);
        }
        if (a) {
          return a(t, true);
        }
        (o = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND";
        throw o;
      }
      o = l[t] = {exports: {}};
      n[t][0].call(o.exports, function (e) {
        return s(n[t][1][e] || e);
      }, o, o.exports, i, n, l, r);
    }
    return l[t].exports;
  }
  var n = {1: [function (e, t, o) {
    "use strict";
    function l(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 300;
      var o = window.getComputedStyle(e).display;
      if (o === "none") {
        o = "block";
      }
      e.style.transitionProperty = "height";
      e.style.transitionDuration = "".concat(t, "ms");
      e.style.opacity = 0;
      e.style.display = o;
      var i = e.offsetHeight;
      e.style.height = 0;
      e.style.opacity = 1;
      e.style.overflow = "hidden";
      setTimeout(function () {
        e.style.height = "".concat(i, "px");
      }, 5);
      window.setTimeout(function () {
        e.style.removeProperty("height");
        e.style.removeProperty("overflow");
        e.style.removeProperty("transition-duration");
        e.style.removeProperty("transition-property");
        e.style.removeProperty("opacity");
      }, t + 50);
    }
    function r(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 300;
      e.style.boxSizing = "border-box";
      e.style.transitionProperty = "height, margin";
      e.style.transitionDuration = "".concat(t, "ms");
      e.style.height = "".concat(e.offsetHeight, "px");
      e.style.marginTop = 0;
      e.style.marginBottom = 0;
      e.style.overflow = "hidden";
      setTimeout(function () {
        e.style.height = 0;
      }, 5);
      window.setTimeout(function () {
        e.style.display = "none";
        e.style.removeProperty("height");
        e.style.removeProperty("margin-top");
        e.style.removeProperty("margin-bottom");
        e.style.removeProperty("overflow");
        e.style.removeProperty("transition-duration");
        e.style.removeProperty("transition-property");
      }, t + 50);
    }
    function s(e) {
      var t = {duration: 300, display: null, opacity: 1, callback: null};
      Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
      e.style.opacity = 0;
      e.style.display = t.display || "block";
      setTimeout(function () {
        e.style.transition = "".concat(t.duration, "ms opacity ease");
        e.style.opacity = t.opacity;
      }, 5);
      setTimeout(function () {
        e.style.removeProperty("transition");
        if (t.callback) {
          t.callback();
        }
      }, t.duration + 50);
    }
    function a(e) {
      var t;
      if (e.style.display !== "none") {
        t = {duration: 300, display: null, opacity: 0, callback: null};
        Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
        e.style.opacity = 1;
        e.style.display = t.display || "block";
        setTimeout(function () {
          e.style.transition = "".concat(t.duration, "ms opacity ease");
          e.style.opacity = t.opacity;
        }, 5);
        setTimeout(function () {
          e.style.display = "none";
          e.style.removeProperty("transition");
          if (t.callback) {
            t.callback();
          }
        }, t.duration + 50);
      }
    }
    var i = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(o, "__esModule", {value: true});
    o.fadeOutNav = o.fadeInNav = o.isSelectorValid = o.isElement = o.getSiblings = o.visible = o.offset = o.fadeToggle = o.fadeOut = o.fadeIn = o.slideToggle = o.slideUp = o.slideDown = o.wrap = void 0;
    var n = i(e("@babel/runtime/helpers/typeof"));
    o.wrap = function (e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : document.createElement("div");
      if (e.nextSibling) {
        e.parentNode.insertBefore(t, e.nextSibling);
      } else {
        e.parentNode.appendChild(t);
      }
      return t.appendChild(e);
    };
    o.slideDown = l;
    o.slideUp = r;
    o.slideToggle = function (e, t) {
      (window.getComputedStyle(e).display === "none" ? l : r)(e, t);
    };
    o.fadeIn = s;
    o.fadeOut = a;
    o.fadeToggle = function (e, t) {
      (window.getComputedStyle(e).display === "none" ? s : a)(e, t);
    };
    o.offset = function (e) {
      if (!e.getClientRects().length) {
        return {top: 0, left: 0};
      }
      var t = e.getBoundingClientRect();
      var e = e.ownerDocument.defaultView;
      return {top: t.top + e.pageYOffset, left: t.left + e.pageXOffset};
    };
    o.visible = function (e) {
      return !!e && (!!e.offsetWidth || !!e.offsetHeight || !!e.getClientRects().length);
    };
    o.getSiblings = function (e) {
      var t = [];
      if (!e.parentNode) {
        return t;
      }
      for (var o = e.parentNode.firstChild; o;) {
        if (o.nodeType === 1 && o !== e) {
          t.push(o);
        }
        o = o.nextSibling;
      }
      return t;
    };
    o.isElement = function (e) {
      if ((typeof HTMLElement == "undefined" ? "undefined" : n.default(HTMLElement)) === "object") {
        return e instanceof HTMLElement;
      } else {
        return e && n.default(e) === "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
      }
    };
    var u = document.createDocumentFragment();
    var e = function (e) {
      try {
        u.querySelector(e);
      } catch (e) {
        return false;
      }
      return true;
    };
    o.isSelectorValid = e;
    o.fadeInNav = function (e) {
      var t = {duration: 300, visibility: "visible", opacity: 1, callback: null};
      Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
      e.style.opacity = 0;
      e.style.visibility = t.visibility || "visible";
      setTimeout(function () {
        e.style.transition = "".concat(t.duration, "ms opacity ease");
        e.style.opacity = t.opacity;
      }, 5);
    };
    o.fadeOutNav = function (e) {
      var t;
      if (e.style.visibility !== "hidden") {
        t = {duration: 300, visibility: "hidden", opacity: 0, callback: null};
        Object.assign(t, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {});
        e.style.opacity = 1;
        e.style.visibility = t.visibility || "visible";
        setTimeout(function () {
          e.style.transition = "".concat(t.duration, "ms opacity ease");
          e.style.opacity = t.opacity;
        }, 5);
        setTimeout(function () {
          e.style.visibility = "hidden";
          e.style.removeProperty("transition");
          if (t.callback) {
            t.callback();
          }
        }, t.duration + 50);
      }
    };
  }, {"@babel/runtime/helpers/interopRequireDefault": 9, "@babel/runtime/helpers/typeof": 10}], 2: [function (e, t, o) {
    "use strict";
    var i = e("@babel/runtime/helpers/interopRequireDefault");
    var n = i(e("@babel/runtime/helpers/classCallCheck"));
    var l = i(e("@babel/runtime/helpers/classPrivateFieldSet"));
    var r = i(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var s = e("../lib/utils");
    var a = new WeakMap;
    var u = new WeakMap;
    var c = new WeakMap;
    var p = new WeakMap;
    var d = new WeakMap;
    var f = new WeakMap;
    var e = function e() {
      var t = this;
      n.default(this, e);
      a.set(this, {writable: true, value: void 0});
      u.set(this, {writable: true, value: function () {
        l.default(t, a, {scrollTop: document.querySelector("#scroll-top"), goTop: document.querySelector('a[href="#go-top"]'), goTopSlash: document.querySelector('body.home a[href="/#go-top"]'), html: document.querySelector("html")});
      }});
      c.set(this, {writable: true, value: function () {}});
      p.set(this, {writable: true, value: function () {
        var e;
        window.addEventListener("scroll", r.default(t, d));
        if ((e = r.default(t, a).scrollTop) !== null && e !== void 0) {
          e.addEventListener("click", r.default(t, f));
        }
        if ((e = r.default(t, a).goTop) !== null && e !== void 0) {
          e.addEventListener("click", r.default(t, f));
        }
        if ((e = r.default(t, a).goTopSlash) !== null && e !== void 0) {
          e.addEventListener("click", r.default(t, f));
        }
      }});
      d.set(this, {writable: true, value: function (e) {
        if (r.default(t, a).scrollTop) {
          if (100 < window.pageYOffset) {
            if (window.getComputedStyle(r.default(t, a).scrollTop).display === "none") {
              s.fadeIn(r.default(t, a).scrollTop);
            }
          } else if (window.getComputedStyle(r.default(t, a).scrollTop).display !== "none") {
            s.fadeOut(r.default(t, a).scrollTop);
          }
        }
      }});
      f.set(this, {writable: true, value: function (e) {
        e.preventDefault();
        var e = e.currentTarget;
        r.default(t, a).html.scrollTo({top: 0, behavior: "smooth"});
        if ((e = e.parentNode) !== null && e !== void 0) {
          e.classList.remove("sfHover");
        }
      }});
      r.default(this, u).call(this);
      r.default(this, c).call(this);
      r.default(this, p).call(this);
    };
    window.oceanwp = window.oceanwp || {};
    oceanwp.scrollTop = new e;
  }, {"../lib/utils": 1, "@babel/runtime/helpers/classCallCheck": 5, "@babel/runtime/helpers/classPrivateFieldGet": 7, "@babel/runtime/helpers/classPrivateFieldSet": 8, "@babel/runtime/helpers/interopRequireDefault": 9}], 3: [function (e, t, o) {
    t.exports = function (e, t) {
      if (t.get) {
        return t.get.call(e);
      } else {
        return t.value;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 4: [function (e, t, o) {
    t.exports = function (e, t, o) {
      if (t.set) {
        t.set.call(e, o);
      } else {
        if (!t.writable) {
          throw new TypeError("attempted to set read only private field");
        }
        t.value = o;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 5: [function (e, t, o) {
    t.exports = function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 6: [function (e, t, o) {
    t.exports = function (e, t, o) {
      if (!t.has(e)) {
        throw new TypeError("attempted to " + o + " private field on non-instance");
      }
      return t.get(e);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 7: [function (e, t, o) {
    var i = e("./classApplyDescriptorGet.js");
    var n = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t) {
      t = n(e, t, "get");
      return i(e, t);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorGet.js": 3, "./classExtractFieldDescriptor.js": 6}], 8: [function (e, t, o) {
    var i = e("./classApplyDescriptorSet.js");
    var n = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t, o) {
      t = n(e, t, "set");
      i(e, t, o);
      return o;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorSet.js": 4, "./classExtractFieldDescriptor.js": 6}], 9: [function (e, t, o) {
    t.exports = function (e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {default: e};
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 10: [function (e, t, o) {
    function i(e) {
      if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
        t.exports = i = function (e) {
          return typeof e;
        };
      } else {
        t.exports = i = function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        };
      }
      t.exports.default = t.exports;
      t.exports.__esModule = true;
      return i(e);
    }
    t.exports = i;
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}]};
  var l = {};
  var r = [2];
  var a = typeof require == "function" && require;
  for (var e = 0; e < r.length; e++) {
    s(r[e]);
  }
  return s;
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function n() {
  function i(t, e) {
    if (!l[t]) {
      if (!a[t]) {
        var s = typeof require == "function" && require;
        if (!e && s) {
          return s(t, true);
        }
        if (o) {
          return o(t, true);
        }
        (s = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND";
        throw s;
      }
      s = l[t] = {exports: {}};
      a[t][0].call(s.exports, function (e) {
        return i(a[t][1][e] || e);
      }, s, s.exports, n, a, l, r);
    }
    return l[t].exports;
  }
  var a = {1: [function (e, t, s) {
    "use strict";
    Object.defineProperty(s, "__esModule", {value: true});
    s.options = void 0;
    var n = oceanwpLocalize;
    s.options = n;
  }, {}], 2: [function (e, t, s) {
    "use strict";
    var n = e("@babel/runtime/helpers/interopRequireDefault");
    Object.defineProperty(s, "__esModule", {value: true});
    s.default = void 0;
    var a = n(e("@babel/runtime/helpers/classCallCheck"));
    var l = n(e("@babel/runtime/helpers/defineProperty"));
    var r = n(e("@babel/runtime/helpers/classPrivateFieldSet"));
    var i = n(e("@babel/runtime/helpers/classPrivateFieldGet"));
    var o = e("../constants");
    var u = new WeakMap;
    var c = new WeakMap;
    var p = new WeakMap;
    var d = new WeakMap;
    var f = new WeakMap;
    var h = new WeakMap;
    var x = new WeakMap;
    var b = new WeakMap;
    var v = new WeakMap;
    var w = new WeakMap;
    var e = function e() {
      var t = this;
      a.default(this, e);
      u.set(this, {writable: true, value: void 0});
      c.set(this, {writable: true, value: void 0});
      p.set(this, {writable: true, value: function () {
        r.default(t, u, {selectTags: document.querySelectorAll(o.options.customSelects)});
      }});
      d.set(this, {writable: true, value: function () {
        i.default(t, u).selectTags.forEach(function (e) {
          r.default(t, c, e);
          i.default(t, c).insertAdjacentHTML("afterend", '<span class="theme-select '.concat(i.default(t, c).classList, '">\n            <span class="theme-selectInner">\n                ').concat(i.default(t, c).options[i.default(t, c).selectedIndex].text, "\n            </span>\n        </span>"));
          i.default(t, c).classList.add("hasCustomSelect");
          i.default(t, f).call(t);
          i.default(t, h).call(t);
        });
      }});
      f.set(this, {writable: true, value: function () {
        (i.default(t, c).style.opacity = 0, i.default)(t, c).style.position = "absolute";
        i.default(t, c).style.height = "34px";
        i.default(t, c).style.fontSize = "13px";
        i.default(t, c).style.appearance = "menulist-button";
        i.default(t, c).nextSibling.style.display = "inline-block";
        i.default(t, c).nextSibling.firstElementChild.style.display = "inline-block";
      }});
      h.set(this, {writable: true, value: function () {
        i.default(t, c).addEventListener("mouseenter", i.default(t, x));
        i.default(t, c).addEventListener("mouseleave", i.default(t, b));
        i.default(t, c).addEventListener("change", t.onChange);
      }});
      x.set(this, {writable: true, value: function (e) {
        e.currentTarget.classList.add("theme-selectHover");
      }});
      b.set(this, {writable: true, value: function (e) {
        e.currentTarget.classList.remove("theme-selectHover");
      }});
      l.default(this, "onChange", function (e) {
        e = e.currentTarget;
        e.nextSibling.innerHTML = e.options[e.selectedIndex].text;
      });
      v.set(this, {writable: true, value: function () {
        document.addEventListener("DOMContentLoaded", i.default(t, w));
        window.addEventListener("resize", i.default(t, w));
      }});
      w.set(this, {writable: true, value: function (e) {
        i.default(t, u).selectTags.forEach(function (e) {
          e.style.width = e.nextSibling.offsetWidth + "px";
        });
      }});
      i.default(this, p).call(this);
      i.default(this, d).call(this);
      i.default(this, v).call(this);
    };
    s.default = e;
    window.oceanwp = window.oceanwp || {};
    oceanwp.select = new e;
  }, {"../constants": 1, "@babel/runtime/helpers/classCallCheck": 5, "@babel/runtime/helpers/classPrivateFieldGet": 7, "@babel/runtime/helpers/classPrivateFieldSet": 8, "@babel/runtime/helpers/defineProperty": 9, "@babel/runtime/helpers/interopRequireDefault": 10}], 3: [function (e, t, s) {
    t.exports = function (e, t) {
      if (t.get) {
        return t.get.call(e);
      } else {
        return t.value;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 4: [function (e, t, s) {
    t.exports = function (e, t, s) {
      if (t.set) {
        t.set.call(e, s);
      } else {
        if (!t.writable) {
          throw new TypeError("attempted to set read only private field");
        }
        t.value = s;
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 5: [function (e, t, s) {
    t.exports = function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 6: [function (e, t, s) {
    t.exports = function (e, t, s) {
      if (!t.has(e)) {
        throw new TypeError("attempted to " + s + " private field on non-instance");
      }
      return t.get(e);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 7: [function (e, t, s) {
    var n = e("./classApplyDescriptorGet.js");
    var a = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t) {
      t = a(e, t, "get");
      return n(e, t);
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorGet.js": 3, "./classExtractFieldDescriptor.js": 6}], 8: [function (e, t, s) {
    var n = e("./classApplyDescriptorSet.js");
    var a = e("./classExtractFieldDescriptor.js");
    t.exports = function (e, t, s) {
      t = a(e, t, "set");
      n(e, t, s);
      return s;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {"./classApplyDescriptorSet.js": 4, "./classExtractFieldDescriptor.js": 6}], 9: [function (e, t, s) {
    t.exports = function (e, t, s) {
      if (t in e) {
        Object.defineProperty(e, t, {value: s, enumerable: true, configurable: true, writable: true});
      } else {
        e[t] = s;
      }
      return e;
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}], 10: [function (e, t, s) {
    t.exports = function (e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {default: e};
      }
    };
    t.exports.default = t.exports;
    t.exports.__esModule = true;
  }, {}]};
  var l = {};
  var r = [2];
  var o = typeof require == "function" && require;
  for (var e = 0; e < r.length; e++) {
    i(r[e]);
  }
  return i;
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  var e = function (e) {
    "use strict";
    var o = false;
    var t = false;
    var r = 0;
    var i = 2e3;
    var s = 0;
    var n = e;
    var l = document;
    var a = window;
    var c = n(a);
    var d = [];
    var u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || false;
    var h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || false;
    if (u) {
      if (!a.cancelAnimationFrame) {
        h = function (e) {};
      }
    } else {
      var p = 0;
      u = function (e, o) {
        var t = (new Date).getTime();
        var r = Math.max(0, 16 - (t - p));
        var i = a.setTimeout(function () {
          e(t + r);
        }, r);
        p = t + r;
        return i;
      };
      h = function (e) {
        a.clearTimeout(e);
      };
    }
    var m = a.MutationObserver || a.WebKitMutationObserver || false;
    var f = Date.now || function () {
      return (new Date).getTime();
    };
    var g = {zindex: "auto", cursoropacitymin: 0, cursoropacitymax: 1, cursorcolor: "#424242", cursorwidth: "6px", cursorborder: "1px solid #fff", cursorborderradius: "5px", scrollspeed: 40, mousescrollstep: 27, touchbehavior: false, emulatetouch: false, hwacceleration: true, usetransition: true, boxzoom: false, dblclickzoom: true, gesturezoom: true, grabcursorenabled: true, autohidemode: true, background: "", iframeautoresize: true, cursorminheight: 32, preservenativescrolling: true, railoffset: false, railhoffset: false, bouncescroll: true, spacebarenabled: true, railpadding: {top: 0, right: 0, left: 0, bottom: 0}, disableoutline: true, horizrailenabled: true, railalign: "right", railvalign: "bottom", enabletranslate3d: true, enablemousewheel: true, enablekeyboard: true, smoothscroll: true, sensitiverail: true, enablemouselockapi: true, cursorfixedheight: false, directionlockdeadzone: 6, hidecursordelay: 400, nativeparentscrolling: true, enablescrollonselection: true, overflowx: true, overflowy: true, cursordragspeed: .3, rtlmode: "auto", cursordragontouch: false, oneaxismousemode: "auto", scriptpath: function () {
      var e = l.currentScript || function () {
        var e = l.getElementsByTagName("script");
        return !!e.length && e[e.length - 1];
      }();
      var o = e ? e.src.split("?")[0] : "";
      if (o.split("/").length > 0) {
        return o.split("/").slice(0, -1).join("/") + "/";
      } else {
        return "";
      }
    }(), preventmultitouchscrolling: true, disablemutationobserver: false, enableobserver: true, scrollbarid: false};
    var v = false;
    var w = function () {
      if (v) {
        return v;
      }
      var e = l.createElement("DIV");
      var o = e.style;
      var t = navigator.userAgent;
      var r = navigator.platform;
      var i = {};
      i.haspointerlock = "pointerLockElement" in l || "webkitPointerLockElement" in l || "mozPointerLockElement" in l;
      i.isopera = "opera" in a;
      i.isopera12 = i.isopera && "getUserMedia" in navigator;
      i.isoperamini = Object.prototype.toString.call(a.operamini) === "[object OperaMini]";
      i.isie = "all" in l && "attachEvent" in e && !i.isopera;
      i.isieold = i.isie && !("msInterpolationMode" in o);
      i.isie7 = i.isie && !i.isieold && (!("documentMode" in l) || l.documentMode === 7);
      i.isie8 = i.isie && "documentMode" in l && l.documentMode === 8;
      i.isie9 = i.isie && "performance" in a && l.documentMode === 9;
      i.isie10 = i.isie && "performance" in a && l.documentMode === 10;
      i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11;
      i.ismsedge = "msCredentials" in a;
      i.ismozilla = "MozAppearance" in o;
      i.iswebkit = !i.ismsedge && "WebkitAppearance" in o;
      i.ischrome = i.iswebkit && "chrome" in a;
      i.ischrome38 = i.ischrome && "touchAction" in o;
      i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock;
      i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o;
      i.cantouch = "ontouchstart" in l.documentElement || "ontouchstart" in a;
      i.hasw3ctouch = (a.PointerEvent || false) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
      i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || false);
      i.ismac = /^mac$/i.test(r);
      i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r);
      i.isios4 = i.isios && !("seal" in Object);
      i.isios7 = i.isios && "webkitHidden" in l;
      i.isios8 = i.isios && "hidden" in l;
      i.isios10 = i.isios && a.Proxy;
      i.isandroid = /android/i.test(t);
      i.haseventlistener = "addEventListener" in e;
      i.trstyle = false;
      i.hastransform = false;
      i.hastranslate3d = false;
      i.transitionstyle = false;
      i.hastransition = false;
      i.transitionend = false;
      i.trstyle = "transform";
      i.hastransform = "transform" in o || function () {
        var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"];
        var t = 0;
        for (var r = e.length; t < r; t++) {
          if (o[e[t]] !== void 0) {
            i.trstyle = e[t];
            break;
          }
        }
        i.hastransform = !!i.trstyle;
      }();
      if (i.hastransform) {
        o[i.trstyle] = "translate3d(1px,2px,3px)";
        i.hastranslate3d = /translate3d/.test(o[i.trstyle]);
      }
      i.transitionstyle = "transition";
      i.prefixstyle = "";
      i.transitionend = "transitionend";
      i.hastransition = "transition" in o || function () {
        i.transitionend = false;
        var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"];
        var t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"];
        var r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"];
        var s = 0;
        for (var n = e.length; s < n; s++) {
          if (e[s] in o) {
            i.transitionstyle = e[s];
            i.prefixstyle = t[s];
            i.transitionend = r[s];
            break;
          }
        }
        if (i.ischrome26) {
          i.prefixstyle = t[1];
        }
        i.hastransition = i.transitionstyle;
      }();
      i.cursorgrabvalue = function () {
        var e = ["grab", "-webkit-grab", "-moz-grab"];
        if (i.ischrome && !i.ischrome38 || i.isie) {
          e = [];
        }
        var t = 0;
        for (var r = e.length; t < r; t++) {
          var s = e[t];
          o.cursor = s;
          if (o.cursor == s) {
            return s;
          }
        }
        return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize";
      }();
      i.hasmousecapture = "setCapture" in e;
      i.hasMutationObserver = m !== false;
      e = null;
      v = i;
      return i;
    };
    var b = function (e, p) {
      function v() {
        var e = T.doc.css(P.trstyle);
        return !!e && e.substr(0, 6) == "matrix" && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/);
      }
      function b() {
        var e = T.win;
        if ("zIndex" in e) {
          return e.zIndex();
        }
        while (e.length > 0) {
          if (e[0].nodeType == 9) {
            return false;
          }
          var o = e.css("zIndex");
          if (!isNaN(o) && o !== 0) {
            return parseInt(o);
          }
          e = e.parent();
        }
        return false;
      }
      function x(e, o, t) {
        var r = e.css(o);
        var i = parseFloat(r);
        if (isNaN(i)) {
          var s = (i = I[r] || 0) == 3 ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
          if (T.isie8 && i) {
            i += 1;
          }
          if (s) {
            return i;
          } else {
            return 0;
          }
        }
        return i;
      }
      function S(e, o, t, r) {
        T._bind(e, o, function (r) {
          var i = {original: r = r || a.event, target: r.target || r.srcElement, type: "wheel", deltaMode: r.type == "MozMousePixelScroll" ? 0 : 1, deltaX: 0, deltaZ: 0, preventDefault: function () {
            if (r.preventDefault) {
              r.preventDefault();
            } else {
              r.returnValue = false;
            }
            return false;
          }, stopImmediatePropagation: function () {
            if (r.stopImmediatePropagation) {
              r.stopImmediatePropagation();
            } else {
              r.cancelBubble = true;
            }
          }};
          if (o == "mousewheel") {
            if (r.wheelDeltaX) {
              i.deltaX = -.025 * r.wheelDeltaX;
            }
            if (r.wheelDeltaY) {
              i.deltaY = -.025 * r.wheelDeltaY;
            }
            if (!i.deltaY && !i.deltaX) {
              i.deltaY = -.025 * r.wheelDelta;
            }
          } else {
            i.deltaY = r.detail;
          }
          return t.call(e, i);
        }, r);
      }
      function z(e, o, t, r) {
        if (!T.scrollrunning) {
          T.newscrolly = T.getScrollTop();
          T.newscrollx = T.getScrollLeft();
          D = f();
        }
        var i = f() - D;
        D = f();
        if (i > 350) {
          A = 1;
        } else {
          A += (2 - A) / 10;
        }
        e = e * A | 0;
        o = o * A | 0;
        if (e) {
          if (r) {
            if (e < 0) {
              if (T.getScrollLeft() >= T.page.maxw) {
                return true;
              }
            } else if (T.getScrollLeft() <= 0) {
              return true;
            }
          }
          var s = e > 0 ? 1 : -1;
          if (X !== s) {
            if (T.scrollmom) {
              T.scrollmom.stop();
            }
            T.newscrollx = T.getScrollLeft();
            X = s;
          }
          T.lastdeltax -= e;
        }
        if (o) {
          if (function () {
            var e = T.getScrollTop();
            if (o < 0) {
              if (e >= T.page.maxh) {
                return true;
              }
            } else if (e <= 0) {
              return true;
            }
          }()) {
            if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) {
              return true;
            }
            var n = T.view.h >> 1;
            if (T.newscrolly < -n) {
              T.newscrolly = -n;
              o = -1;
            } else if (T.newscrolly > T.page.maxh + n) {
              T.newscrolly = T.page.maxh + n;
              o = 1;
            } else {
              o = 0;
            }
          }
          var l = o > 0 ? 1 : -1;
          if (B !== l) {
            if (T.scrollmom) {
              T.scrollmom.stop();
            }
            T.newscrolly = T.getScrollTop();
            B = l;
          }
          T.lastdeltay -= o;
        }
        if (o || e) {
          T.synched("relativexy", function () {
            var e = T.lastdeltay + T.newscrolly;
            T.lastdeltay = 0;
            var o = T.lastdeltax + T.newscrollx;
            T.lastdeltax = 0;
            if (!T.rail.drag) {
              T.doScrollPos(o, e);
            }
          });
        }
      }
      function k(e, o, t) {
        var r;
        var i;
        return !t && !!q || (e.deltaMode === 0 ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0, i = -e.deltaY * (M.mousescrollstep / 54) | 0) : e.deltaMode === 1 && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0, i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0), o && M.oneaxismousemode && r === 0 && i && (r = i, i = 0, t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r, r = 0)), T.isrtlmode && (r = -r), z(r, i, t, true) ? void (t && (q = true)) : (q = false, e.stopImmediatePropagation(), e.preventDefault()));
      }
      var T = this;
      this.version = "3.7.6";
      this.name = "nicescroll";
      this.me = p;
      var E = n("body");
      var M = this.opt = {doc: E, win: false};
      n.extend(M, g);
      M.snapbackspeed = 80;
      if (e) {
        for (var L in M) {
          if (e[L] !== void 0) {
            M[L] = e[L];
          }
        }
      }
      if (M.disablemutationobserver) {
        m = false;
      }
      this.doc = M.doc;
      this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "";
      this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName);
      this.haswrapper = M.win !== false;
      this.win = M.win || (this.ispage ? c : this.doc);
      this.docscroll = this.ispage && !this.haswrapper ? c : this.win;
      this.body = E;
      this.viewport = false;
      this.isfixed = false;
      this.iframe = false;
      this.isiframe = this.doc[0].nodeName == "IFRAME" && this.win[0].nodeName == "IFRAME";
      this.istextarea = this.win[0].nodeName == "TEXTAREA";
      this.forcescreen = false;
      this.canshowonmouseevent = M.autohidemode != "scroll";
      this.onmousedown = false;
      this.onmouseup = false;
      this.onmousemove = false;
      this.onmousewheel = false;
      this.onkeypress = false;
      this.ongesturezoom = false;
      this.onclick = false;
      this.onscrollstart = false;
      this.onscrollend = false;
      this.onscrollcancel = false;
      this.onzoomin = false;
      this.onzoomout = false;
      this.view = false;
      this.page = false;
      this.scroll = {x: 0, y: 0};
      this.scrollratio = {x: 0, y: 0};
      this.cursorheight = 20;
      this.scrollvaluemax = 0;
      if (M.rtlmode == "auto") {
        var C = this.win[0] == a ? this.body : this.win;
        var N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
        if (N == "horizontal-tb" || N == "lr-tb" || N === "") {
          this.isrtlmode = C.css("direction") == "rtl";
          this.isvertical = false;
        } else {
          this.isrtlmode = N == "vertical-rl" || N == "tb" || N == "tb-rl" || N == "rl-tb";
          this.isvertical = N == "vertical-rl" || N == "tb" || N == "tb-rl";
        }
      } else {
        this.isrtlmode = M.rtlmode === true;
        this.isvertical = false;
      }
      this.scrollrunning = false;
      this.scrollmom = false;
      this.observer = false;
      this.observerremover = false;
      this.observerbody = false;
      if (M.scrollbarid === false) {
        do {
          this.id = "ascrail" + i++;
        } while (l.getElementById(this.id));
      } else {
        this.id = M.scrollbarid;
      }
      this.rail = false;
      this.cursor = false;
      this.cursorfreezed = false;
      this.selectiondrag = false;
      this.zoom = false;
      this.zoomactive = false;
      this.hasfocus = false;
      this.hasmousefocus = false;
      this.railslocked = false;
      this.locked = false;
      this.hidden = false;
      this.cursoractive = true;
      this.wheelprevented = false;
      this.overflowx = M.overflowx;
      this.overflowy = M.overflowy;
      this.nativescrollingarea = false;
      this.checkarea = 0;
      this.events = [];
      this.saved = {};
      this.delaylist = {};
      this.synclist = {};
      this.lastdeltax = 0;
      this.lastdeltay = 0;
      this.detected = w();
      var P = n.extend({}, this.detected);
      this.canhwscroll = P.hastransform && M.hwacceleration;
      this.ishwscroll = this.canhwscroll && T.haswrapper;
      if (this.isrtlmode) {
        if (this.isvertical) {
          this.hasreversehr = !P.iswebkit && !P.isie && !P.isie11;
        } else {
          this.hasreversehr = !P.iswebkit && (!P.isie || !!P.isie10 || !!P.isie11);
        }
      } else {
        this.hasreversehr = false;
      }
      this.istouchcapable = false;
      if (P.cantouch || !P.hasw3ctouch && !P.hasmstouch) {
        if (!!P.cantouch && !P.isios && !P.isandroid && (!!P.iswebkit || !!P.ismozilla)) {
          this.istouchcapable = true;
        }
      } else {
        this.istouchcapable = true;
      }
      if (!M.enablemouselockapi) {
        P.hasmousecapture = false;
        P.haspointerlock = false;
      }
      this.debounced = function (e, o, t) {
        if (T) {
          if (!T.delaylist[e] && true) {
            T.delaylist[e] = {h: u(function () {
              T.delaylist[e].fn.call(T);
              T.delaylist[e] = false;
            }, t)};
            o.call(T);
          }
          T.delaylist[e].fn = o;
        }
      };
      this.synched = function (e, o) {
        if (T.synclist[e]) {
          T.synclist[e] = o;
        } else {
          T.synclist[e] = o;
          u(function () {
            if (T) {
              if (T.synclist[e]) {
                T.synclist[e].call(T);
              }
              T.synclist[e] = null;
            }
          });
        }
      };
      this.unsynched = function (e) {
        if (T.synclist[e]) {
          T.synclist[e] = false;
        }
      };
      this.css = function (e, o) {
        for (var t in o) {
          T.saved.css.push([e, t, e.css(t)]);
          e.css(t, o[t]);
        }
      };
      this.scrollTop = function (e) {
        if (e === void 0) {
          return T.getScrollTop();
        } else {
          return T.setScrollTop(e);
        }
      };
      this.scrollLeft = function (e) {
        if (e === void 0) {
          return T.getScrollLeft();
        } else {
          return T.setScrollLeft(e);
        }
      };
      var R = function (e, o, t, r, i, s, n) {
        this.st = e;
        this.ed = o;
        this.spd = t;
        this.p1 = r || 0;
        this.p2 = i || 1;
        this.p3 = s || 0;
        this.p4 = n || 1;
        this.ts = f();
        this.df = o - e;
      };
      R.prototype = {B2: function (e) {
        return 3 * (1 - e) * (1 - e) * e;
      }, B3: function (e) {
        return 3 * (1 - e) * e * e;
      }, B4: function (e) {
        return e * e * e;
      }, getPos: function () {
        return (f() - this.ts) / this.spd;
      }, getNow: function () {
        var e = (f() - this.ts) / this.spd;
        var o = this.B2(e) + this.B3(e) + this.B4(e);
        if (e >= 1) {
          return this.ed;
        } else {
          return this.st + this.df * o | 0;
        }
      }, update: function (e, o) {
        this.st = this.getNow();
        this.ed = e;
        this.spd = o;
        this.ts = f();
        this.df = this.ed - this.st;
        return this;
      }};
      if (this.ishwscroll) {
        this.doc.translate = {x: 0, y: 0, tx: "0px", ty: "0px"};
        if (P.hastranslate3d && P.isios) {
          this.doc.css("-webkit-backface-visibility", "hidden");
        }
        this.getScrollTop = function (e) {
          if (!e) {
            var o = v();
            if (o) {
              if (o.length == 16) {
                return -o[13];
              } else {
                return -o[5];
              }
            }
            if (T.timerscroll && T.timerscroll.bz) {
              return T.timerscroll.bz.getNow();
            }
          }
          return T.doc.translate.y;
        };
        this.getScrollLeft = function (e) {
          if (!e) {
            var o = v();
            if (o) {
              if (o.length == 16) {
                return -o[12];
              } else {
                return -o[4];
              }
            }
            if (T.timerscroll && T.timerscroll.bh) {
              return T.timerscroll.bh.getNow();
            }
          }
          return T.doc.translate.x;
        };
        this.notifyScrollEvent = function (e) {
          var o = l.createEvent("UIEvents");
          o.initUIEvent("scroll", false, false, a, 1);
          o.niceevent = true;
          e.dispatchEvent(o);
        };
        var _ = this.isrtlmode ? 1 : -1;
        if (P.hastranslate3d && M.enabletranslate3d) {
          this.setScrollTop = function (e, o) {
            T.doc.translate.y = e;
            T.doc.translate.ty = -1 * e + "px";
            T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)");
            if (!o) {
              T.notifyScrollEvent(T.win[0]);
            }
          };
          this.setScrollLeft = function (e, o) {
            T.doc.translate.x = e;
            T.doc.translate.tx = e * _ + "px";
            T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)");
            if (!o) {
              T.notifyScrollEvent(T.win[0]);
            }
          };
        } else {
          this.setScrollTop = function (e, o) {
            T.doc.translate.y = e;
            T.doc.translate.ty = -1 * e + "px";
            T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")");
            if (!o) {
              T.notifyScrollEvent(T.win[0]);
            }
          };
          this.setScrollLeft = function (e, o) {
            T.doc.translate.x = e;
            T.doc.translate.tx = e * _ + "px";
            T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")");
            if (!o) {
              T.notifyScrollEvent(T.win[0]);
            }
          };
        }
      } else {
        this.getScrollTop = function () {
          return T.docscroll.scrollTop();
        };
        this.setScrollTop = function (e) {
          T.docscroll.scrollTop(e);
        };
        this.getScrollLeft = function () {
          if (T.hasreversehr) {
            if (T.detected.ismozilla) {
              return T.page.maxw - Math.abs(T.docscroll.scrollLeft());
            } else {
              return T.page.maxw - T.docscroll.scrollLeft();
            }
          } else {
            return T.docscroll.scrollLeft();
          }
        };
        this.setScrollLeft = function (e) {
          return setTimeout(function () {
            if (T) {
              if (T.hasreversehr) {
                e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e;
              }
              return T.docscroll.scrollLeft(e);
            }
          }, 1);
        };
      }
      this.getTarget = function (e) {
        return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement);
      };
      this.hasParent = function (e, o) {
        if (!e) {
          return false;
        }
        for (var t = e.target || e.srcElement || e || false; t && t.id != o;) {
          t = t.parentNode || false;
        }
        return t !== false;
      };
      var I = {thin: 1, medium: 3, thick: 5};
      this.getDocumentScrollOffset = function () {
        return {top: a.pageYOffset || l.documentElement.scrollTop, left: a.pageXOffset || l.documentElement.scrollLeft};
      };
      this.getOffset = function () {
        if (T.isfixed) {
          var e = T.win.offset();
          var o = T.getDocumentScrollOffset();
          e.top -= o.top;
          e.left -= o.left;
          return e;
        }
        var t = T.win.offset();
        if (!T.viewport) {
          return t;
        }
        var r = T.viewport.offset();
        return {top: t.top - r.top, left: t.left - r.left};
      };
      this.updateScrollBar = function (e) {
        var o;
        var t;
        if (T.ishwscroll) {
          T.rail.css({height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)});
          if (T.railh) {
            T.railh.css({width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)});
          }
        } else {
          var r = T.getOffset();
          o = {top: r.top, left: r.left - (M.railpadding.left + M.railpadding.right)};
          o.top += x(T.win, "border-top-width", true);
          o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width");
          if (t = M.railoffset) {
            if (t.top) {
              o.top += t.top;
            }
            if (t.left) {
              o.left += t.left;
            }
          }
          if (!T.railslocked) {
            T.rail.css({top: o.top, left: o.left, height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)});
          }
          if (T.zoom) {
            T.zoom.css({top: o.top + 1, left: T.rail.align == 1 ? o.left - 20 : o.left + T.rail.width + 4});
          }
          if (T.railh && !T.railslocked) {
            o = {top: r.top, left: r.left};
            if (t = M.railhoffset) {
              if (t.top) {
                o.top += t.top;
              }
              if (t.left) {
                o.left += t.left;
              }
            }
            var i = T.railh.align ? o.top + x(T.win, "border-top-width", true) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", true);
            var s = o.left + x(T.win, "border-left-width");
            T.railh.css({top: i - (M.railpadding.top + M.railpadding.bottom), left: s, width: T.railh.width});
          }
        }
      };
      this.doRailClick = function (e, o, t) {
        var r;
        var i;
        var s;
        var n;
        if (!T.railslocked) {
          T.cancelEvent(e);
          if (!("pageY" in e)) {
            e.pageX = e.clientX + l.documentElement.scrollLeft;
            e.pageY = e.clientY + l.documentElement.scrollTop;
          }
          if (o) {
            r = t ? T.doScrollLeft : T.doScrollTop;
            s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y;
            T.unsynched("relativexy");
            r(0 | s);
          } else {
            r = t ? T.doScrollLeftBy : T.doScrollBy;
            s = t ? T.scroll.x : T.scroll.y;
            n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top;
            i = t ? T.view.w : T.view.h;
            r(s >= n ? i : -i);
          }
        }
      };
      T.newscrolly = T.newscrollx = 0;
      T.hasanimationframe = "requestAnimationFrame" in a;
      T.hascancelanimationframe = "cancelAnimationFrame" in a;
      T.hasborderbox = false;
      this.init = function () {
        T.saved.css = [];
        if (P.isoperamini) {
          return true;
        }
        if (P.isandroid && !("hidden" in l)) {
          return true;
        }
        M.emulatetouch = M.emulatetouch || M.touchbehavior;
        T.hasborderbox = a.getComputedStyle && a.getComputedStyle(l.body)["box-sizing"] === "border-box";
        var e = {"overflow-y": "hidden"};
        if (P.isie11 || P.isie10) {
          e["-ms-overflow-style"] = "none";
        }
        if (T.ishwscroll) {
          this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out");
          if (P.transitionend) {
            T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, false);
          }
        }
        T.zindex = "auto";
        if (T.ispage || M.zindex != "auto") {
          T.zindex = M.zindex;
        } else {
          T.zindex = b() || "auto";
        }
        if (!T.ispage && T.zindex != "auto" && T.zindex > s) {
          s = T.zindex;
        }
        if (T.isie && T.zindex === 0 && M.zindex == "auto") {
          T.zindex = "auto";
        }
        if (!T.ispage || !P.isieold) {
          var i = T.docscroll;
          if (T.ispage) {
            i = T.haswrapper ? T.win : T.doc;
          }
          T.css(i, e);
          if (T.ispage && (P.isie11 || P.isie)) {
            T.css(n("html"), e);
          }
          if (!!P.isios && !T.ispage && !T.haswrapper) {
            T.css(E, {"-webkit-overflow-scrolling": "touch"});
          }
          var d = n(l.createElement("div"));
          d.css({position: "relative", top: 0, float: "right", width: M.cursorwidth, height: 0, "background-color": M.cursorcolor, border: M.cursorborder, "background-clip": "padding-box", "-webkit-border-radius": M.cursorborderradius, "-moz-border-radius": M.cursorborderradius, "border-radius": M.cursorborderradius});
          d.addClass("nicescroll-cursors");
          T.cursor = d;
          var u = n(l.createElement("div"));
          u.attr("id", T.id);
          u.addClass("nicescroll-rails nicescroll-rails-vr");
          var h;
          var p;
          var f = ["left", "right", "top", "bottom"];
          for (var g in f) {
            p = f[g];
            if (h = M.railpadding[p] || 0) {
              u.css("padding-" + p, h + "px");
            }
          }
          u.append(d);
          u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth());
          u.css({width: u.width + "px", zIndex: T.zindex, background: M.background, cursor: "default"});
          u.visibility = true;
          u.scrollable = true;
          u.align = M.railalign == "left" ? 0 : 1;
          T.rail = u;
          T.rail.drag = false;
          var v = false;
          if (!!M.boxzoom && !T.ispage && !P.isieold) {
            v = l.createElement("div");
            T.bind(v, "click", T.doZoom);
            T.bind(v, "mouseenter", function () {
              T.zoom.css("opacity", M.cursoropacitymax);
            });
            T.bind(v, "mouseleave", function () {
              T.zoom.css("opacity", M.cursoropacitymin);
            });
            T.zoom = n(v);
            T.zoom.css({cursor: "pointer", zIndex: T.zindex, backgroundImage: "url(" + M.scriptpath + "zoomico.png)", height: 18, width: 18, backgroundPosition: "0 0"});
            if (M.dblclickzoom) {
              T.bind(T.win, "dblclick", T.doZoom);
            }
            if (P.cantouch && M.gesturezoom) {
              T.ongesturezoom = function (e) {
                if (e.scale > 1.5) {
                  T.doZoomIn(e);
                }
                if (e.scale < .8) {
                  T.doZoomOut(e);
                }
                return T.cancelEvent(e);
              };
              T.bind(T.win, "gestureend", T.ongesturezoom);
            }
          }
          T.railh = false;
          var w;
          if (M.horizrailenabled) {
            T.css(i, {overflowX: "hidden"});
            (d = n(l.createElement("div"))).css({position: "absolute", top: 0, height: M.cursorwidth, width: 0, backgroundColor: M.cursorcolor, border: M.cursorborder, backgroundClip: "padding-box", "-webkit-border-radius": M.cursorborderradius, "-moz-border-radius": M.cursorborderradius, "border-radius": M.cursorborderradius});
            if (P.isieold) {
              d.css("overflow", "hidden");
            }
            d.addClass("nicescroll-cursors");
            T.cursorh = d;
            (w = n(l.createElement("div"))).attr("id", T.id + "-hr");
            w.addClass("nicescroll-rails nicescroll-rails-hr");
            w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight());
            w.css({height: w.height + "px", zIndex: T.zindex, background: M.background});
            w.append(d);
            w.visibility = true;
            w.scrollable = true;
            w.align = M.railvalign == "top" ? 0 : 1;
            T.railh = w;
            T.railh.drag = false;
          }
          if (T.ispage) {
            u.css({position: "fixed", top: 0, height: "100%"});
            u.css(u.align ? {right: 0} : {left: 0});
            T.body.append(u);
            if (T.railh) {
              w.css({position: "fixed", left: 0, width: "100%"});
              w.css(w.align ? {bottom: 0} : {top: 0});
              T.body.append(w);
            }
          } else {
            if (T.ishwscroll) {
              if (T.win.css("position") == "static") {
                T.css(T.win, {position: "relative"});
              }
              var x = T.win[0].nodeName == "HTML" ? T.body : T.win;
              n(x).scrollTop(0).scrollLeft(0);
              if (T.zoom) {
                T.zoom.css({position: "absolute", top: 1, right: 0, "margin-right": u.width + 4});
                x.append(T.zoom);
              }
              u.css({position: "absolute", top: 0});
              u.css(u.align ? {right: 0} : {left: 0});
              x.append(u);
              if (w) {
                w.css({position: "absolute", left: 0, bottom: 0});
                w.css(w.align ? {bottom: 0} : {top: 0});
                x.append(w);
              }
            } else {
              T.isfixed = T.win.css("position") == "fixed";
              var S = T.isfixed ? "fixed" : "absolute";
              if (!T.isfixed) {
                T.viewport = T.getViewport(T.win[0]);
              }
              if (T.viewport) {
                T.body = T.viewport;
                if (!/fixed|absolute/.test(T.viewport.css("position"))) {
                  T.css(T.viewport, {position: "relative"});
                }
              }
              u.css({position: S});
              if (T.zoom) {
                T.zoom.css({position: S});
              }
              T.updateScrollBar();
              T.body.append(u);
              if (T.zoom) {
                T.body.append(T.zoom);
              }
              if (T.railh) {
                w.css({position: S});
                T.body.append(w);
              }
            }
            if (P.isios) {
              T.css(T.win, {"-webkit-tap-highlight-color": "rgba(0,0,0,0)", "-webkit-touch-callout": "none"});
            }
            if (M.disableoutline) {
              if (P.isie) {
                T.win.attr("hideFocus", "true");
              }
              if (P.iswebkit) {
                T.win.css("outline", "none");
              }
            }
          }
          if (M.autohidemode === false) {
            T.autohidedom = false;
            T.rail.css({opacity: M.cursoropacitymax});
            if (T.railh) {
              T.railh.css({opacity: M.cursoropacitymax});
            }
          } else if (M.autohidemode === true || M.autohidemode === "leave") {
            T.autohidedom = n().add(T.rail);
            if (P.isie8) {
              T.autohidedom = T.autohidedom.add(T.cursor);
            }
            if (T.railh) {
              T.autohidedom = T.autohidedom.add(T.railh);
            }
            if (T.railh && P.isie8) {
              T.autohidedom = T.autohidedom.add(T.cursorh);
            }
          } else if (M.autohidemode == "scroll") {
            T.autohidedom = n().add(T.rail);
            if (T.railh) {
              T.autohidedom = T.autohidedom.add(T.railh);
            }
          } else if (M.autohidemode == "cursor") {
            T.autohidedom = n().add(T.cursor);
            if (T.railh) {
              T.autohidedom = T.autohidedom.add(T.cursorh);
            }
          } else if (M.autohidemode == "hidden") {
            T.autohidedom = false;
            T.hide();
            T.railslocked = false;
          }
          if (P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
            T.scrollmom = new y(T);
            T.ontouchstart = function (e) {
              if (T.locked) {
                return false;
              }
              if (e.pointerType && (e.pointerType === "mouse" || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) {
                return false;
              }
              T.hasmoving = false;
              if (T.scrollmom.timer) {
                T.triggerScrollEnd();
                T.scrollmom.stop();
              }
              if (!T.railslocked) {
                var o = T.getTarget(e);
                if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) {
                  return T.stopPropagation(e);
                }
                var t = e.type === "mousedown";
                if (!("clientX" in e) && "changedTouches" in e) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
                if (T.forcescreen) {
                  var r = e;
                  (e = {original: e.original ? e.original : e}).clientX = r.screenX;
                  e.clientY = r.screenY;
                }
                T.rail.drag = {x: e.clientX, y: e.clientY, sx: T.scroll.x, sy: T.scroll.y, st: T.getScrollTop(), sl: T.getScrollLeft(), pt: 2, dl: false, tg: o};
                if (T.ispage || !M.directionlockdeadzone) {
                  T.rail.drag.dl = "f";
                } else {
                  var i = {w: c.width(), h: c.height()};
                  var s = T.getContentSize();
                  var l = s.h - i.h;
                  var a = s.w - i.w;
                  if (T.rail.scrollable && !T.railh.scrollable) {
                    T.rail.drag.ck = l > 0 && "v";
                  } else if (!T.rail.scrollable && T.railh.scrollable) {
                    T.rail.drag.ck = a > 0 && "h";
                  } else {
                    T.rail.drag.ck = false;
                  }
                }
                if (M.emulatetouch && T.isiframe && P.isie) {
                  var d = T.win.position();
                  T.rail.drag.x += d.left;
                  T.rail.drag.y += d.top;
                }
                T.hasmoving = false;
                T.lastmouseup = false;
                T.scrollmom.reset(e.clientX, e.clientY);
                if (o && t) {
                  if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName)) {
                    if (P.hasmousecapture) {
                      o.setCapture();
                    }
                    if (M.emulatetouch) {
                      if (o.onclick && !o._onclick) {
                        o._onclick = o.onclick;
                        o.onclick = function (e) {
                          if (T.hasmoving) {
                            return false;
                          }
                          o._onclick.call(this, e);
                        };
                      }
                      return T.cancelEvent(e);
                    } else {
                      return T.stopPropagation(e);
                    }
                  }
                  if (/SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type"))) {
                    T.preventclick = {tg: o, click: false};
                  }
                }
              }
            };
            T.ontouchend = function (e) {
              if (!T.rail.drag) {
                return true;
              }
              if (T.rail.drag.pt == 2) {
                if (e.pointerType && (e.pointerType === "mouse" || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) {
                  return false;
                }
                T.rail.drag = false;
                var o = e.type === "mouseup";
                if (T.hasmoving) {
                  T.scrollmom.doMomentum();
                  T.lastmouseup = true;
                  T.hideCursor();
                  if (P.hasmousecapture) {
                    l.releaseCapture();
                  }
                  if (o) {
                    return T.cancelEvent(e);
                  }
                }
              } else if (T.rail.drag.pt == 1) {
                return T.onmouseup(e);
              }
            };
            var z = M.emulatetouch && T.isiframe && !P.hasmousecapture;
            var k = .3 * M.directionlockdeadzone | 0;
            T.ontouchmove = function (e, o) {
              if (!T.rail.drag) {
                return true;
              }
              if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) {
                return true;
              }
              if (e.pointerType && (e.pointerType === "mouse" || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) {
                return true;
              }
              if (T.rail.drag.pt == 2) {
                if ("changedTouches" in e) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
                var t;
                var r;
                r = t = 0;
                if (z && !o) {
                  var i = T.win.position();
                  r = -i.left;
                  t = -i.top;
                }
                var s = e.clientY + t;
                var n = s - T.rail.drag.y;
                var a = e.clientX + r;
                var c = a - T.rail.drag.x;
                var d = T.rail.drag.st - n;
                if (T.ishwscroll && M.bouncescroll) {
                  if (d < 0) {
                    d = Math.round(d / 2);
                  } else if (d > T.page.maxh) {
                    d = T.page.maxh + Math.round((d - T.page.maxh) / 2);
                  }
                } else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), s === 0 && !T.hasmoving) {
                  if (!T.ispage) {
                    T.rail.drag = false;
                  }
                  return true;
                }
                var u = T.getScrollLeft();
                if (T.railh && T.railh.scrollable) {
                  u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c;
                  if (T.ishwscroll && M.bouncescroll) {
                    if (u < 0) {
                      u = Math.round(u / 2);
                    } else if (u > T.page.maxw) {
                      u = T.page.maxw + Math.round((u - T.page.maxw) / 2);
                    }
                  } else {
                    if (u < 0) {
                      u = 0;
                      a = 0;
                    }
                    if (u > T.page.maxw) {
                      u = T.page.maxw;
                      a = 0;
                    }
                  }
                }
                if (!T.hasmoving) {
                  if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) {
                    return T.cancelEvent(e);
                  }
                  var h = Math.abs(n);
                  var p = Math.abs(c);
                  var m = M.directionlockdeadzone;
                  if (T.rail.drag.ck) {
                    if (T.rail.drag.ck == "v") {
                      if (p > m && h <= k) {
                        T.rail.drag = false;
                      } else if (h > m) {
                        T.rail.drag.dl = "v";
                      }
                    } else if (T.rail.drag.ck == "h") {
                      if (h > m && p <= k) {
                        T.rail.drag = false;
                      } else if (p > m) {
                        T.rail.drag.dl = "h";
                      }
                    }
                  } else if (h > m && p > m) {
                    T.rail.drag.dl = "f";
                  } else if (h > m) {
                    T.rail.drag.dl = p > k ? "f" : "v";
                  } else if (p > m) {
                    T.rail.drag.dl = h > k ? "f" : "h";
                  }
                  if (!T.rail.drag.dl) {
                    return T.cancelEvent(e);
                  }
                  T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
                  T.hasmoving = true;
                }
                if (T.preventclick && !T.preventclick.click) {
                  T.preventclick.click = T.preventclick.tg.onclick || false;
                  T.preventclick.tg.onclick = T.onpreventclick;
                }
                if (T.rail.drag.dl) {
                  if (T.rail.drag.dl == "v") {
                    u = T.rail.drag.sl;
                  } else if (T.rail.drag.dl == "h") {
                    d = T.rail.drag.st;
                  }
                }
                T.synched("touchmove", function () {
                  if (T.rail.drag && T.rail.drag.pt == 2) {
                    if (T.prepareTransition) {
                      T.resetTransition();
                    }
                    if (T.rail.scrollable) {
                      T.setScrollTop(d);
                    }
                    T.scrollmom.update(a, s);
                    if (T.railh && T.railh.scrollable) {
                      T.setScrollLeft(u);
                      T.showCursor(d, u);
                    } else {
                      T.showCursor(d);
                    }
                    if (P.isie10) {
                      l.selection.clear();
                    }
                  }
                });
                return T.cancelEvent(e);
              }
              if (T.rail.drag.pt == 1) {
                return T.onmousemove(e);
              } else {
                return;
              }
            };
            T.ontouchstartCursor = function (e, o) {
              if (!T.rail.drag || T.rail.drag.pt == 3) {
                if (T.locked) {
                  return T.cancelEvent(e);
                }
                T.cancelScroll();
                T.rail.drag = {x: e.touches[0].clientX, y: e.touches[0].clientY, sx: T.scroll.x, sy: T.scroll.y, pt: 3, hr: !!o};
                var t = T.getTarget(e);
                if (!T.ispage && P.hasmousecapture) {
                  t.setCapture();
                }
                if (T.isiframe && !P.hasmousecapture) {
                  T.saved.csspointerevents = T.doc.css("pointer-events");
                  T.css(T.doc, {"pointer-events": "none"});
                }
                return T.cancelEvent(e);
              }
            };
            T.ontouchendCursor = function (e) {
              if (T.rail.drag) {
                if (P.hasmousecapture) {
                  l.releaseCapture();
                }
                if (T.isiframe && !P.hasmousecapture) {
                  T.doc.css("pointer-events", T.saved.csspointerevents);
                }
                if (T.rail.drag.pt != 3) {
                  return;
                }
                T.rail.drag = false;
                return T.cancelEvent(e);
              }
            };
            T.ontouchmoveCursor = function (e) {
              if (T.rail.drag) {
                if (T.rail.drag.pt != 3) {
                  return;
                }
                T.cursorfreezed = true;
                if (T.rail.drag.hr) {
                  T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x);
                  if (T.scroll.x < 0) {
                    T.scroll.x = 0;
                  }
                  var o = T.scrollvaluemaxw;
                  if (T.scroll.x > o) {
                    T.scroll.x = o;
                  }
                } else {
                  T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y);
                  if (T.scroll.y < 0) {
                    T.scroll.y = 0;
                  }
                  var t = T.scrollvaluemax;
                  if (T.scroll.y > t) {
                    T.scroll.y = t;
                  }
                }
                T.synched("touchmove", function () {
                  if (T.rail.drag && T.rail.drag.pt == 3) {
                    T.showCursor();
                    if (T.rail.drag.hr) {
                      T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed);
                    } else {
                      T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed);
                    }
                  }
                });
                return T.cancelEvent(e);
              }
            };
          }
          T.onmousedown = function (e, o) {
            if (!T.rail.drag || T.rail.drag.pt == 1) {
              if (T.railslocked) {
                return T.cancelEvent(e);
              }
              T.cancelScroll();
              T.rail.drag = {x: e.clientX, y: e.clientY, sx: T.scroll.x, sy: T.scroll.y, pt: 1, hr: o || false};
              var t = T.getTarget(e);
              if (P.hasmousecapture) {
                t.setCapture();
              }
              if (T.isiframe && !P.hasmousecapture) {
                T.saved.csspointerevents = T.doc.css("pointer-events");
                T.css(T.doc, {"pointer-events": "none"});
              }
              T.hasmoving = false;
              return T.cancelEvent(e);
            }
          };
          T.onmouseup = function (e) {
            if (T.rail.drag) {
              return T.rail.drag.pt != 1 || (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = false, T.cursorfreezed = false, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e));
            }
          };
          T.onmousemove = function (e) {
            if (T.rail.drag) {
              if (T.rail.drag.pt !== 1) {
                return;
              }
              if (P.ischrome && e.which === 0) {
                return T.onmouseup(e);
              }
              T.cursorfreezed = true;
              if (!T.hasmoving) {
                T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
              }
              T.hasmoving = true;
              if (T.rail.drag.hr) {
                T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x);
                if (T.scroll.x < 0) {
                  T.scroll.x = 0;
                }
                var o = T.scrollvaluemaxw;
                if (T.scroll.x > o) {
                  T.scroll.x = o;
                }
              } else {
                T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y);
                if (T.scroll.y < 0) {
                  T.scroll.y = 0;
                }
                var t = T.scrollvaluemax;
                if (T.scroll.y > t) {
                  T.scroll.y = t;
                }
              }
              T.synched("mousemove", function () {
                if (T.cursorfreezed) {
                  T.showCursor();
                  if (T.rail.drag.hr) {
                    T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x));
                  } else {
                    T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y));
                  }
                }
              });
              return T.cancelEvent(e);
            }
            T.checkarea = 0;
          };
          if (P.cantouch || M.emulatetouch) {
            T.onpreventclick = function (e) {
              if (T.preventclick) {
                T.preventclick.tg.onclick = T.preventclick.click;
                T.preventclick = false;
                return T.cancelEvent(e);
              }
            };
            T.onclick = !P.isios && function (e) {
              return !T.lastmouseup || (T.lastmouseup = false, T.cancelEvent(e));
            };
            if (M.grabcursorenabled && P.cursorgrabvalue) {
              T.css(T.ispage ? T.doc : T.win, {cursor: P.cursorgrabvalue});
              T.css(T.rail, {cursor: P.cursorgrabvalue});
            }
          } else {
            var L = function (e) {
              if (T.selectiondrag) {
                if (e) {
                  var o = T.win.outerHeight();
                  var t = e.pageY - T.selectiondrag.top;
                  if (t > 0 && t < o) {
                    t = 0;
                  }
                  if (t >= o) {
                    t -= o;
                  }
                  T.selectiondrag.df = t;
                }
                if (T.selectiondrag.df !== 0) {
                  var r = -2 * T.selectiondrag.df / 6 | 0;
                  T.doScrollBy(r);
                  T.debounced("doselectionscroll", function () {
                    L();
                  }, 50);
                }
              }
            };
            T.hasTextSelected = "getSelection" in l ? function () {
              return l.getSelection().rangeCount > 0;
            } : "selection" in l ? function () {
              return l.selection.type != "None";
            } : function () {
              return false;
            };
            T.onselectionstart = function (e) {
              if (!T.ispage) {
                T.selectiondrag = T.win.offset();
              }
            };
            T.onselectionend = function (e) {
              T.selectiondrag = false;
            };
            T.onselectiondrag = function (e) {
              if (T.selectiondrag && T.hasTextSelected()) {
                T.debounced("selectionscroll", function () {
                  L(e);
                }, 250);
              }
            };
          }
          if (P.hasw3ctouch) {
            T.css(T.ispage ? n("html") : T.win, {"touch-action": "none"});
            T.css(T.rail, {"touch-action": "none"});
            T.css(T.cursor, {"touch-action": "none"});
            T.bind(T.win, "pointerdown", T.ontouchstart);
            T.bind(l, "pointerup", T.ontouchend);
            T.delegate(l, "pointermove", T.ontouchmove);
          } else if (P.hasmstouch) {
            T.css(T.ispage ? n("html") : T.win, {"-ms-touch-action": "none"});
            T.css(T.rail, {"-ms-touch-action": "none"});
            T.css(T.cursor, {"-ms-touch-action": "none"});
            T.bind(T.win, "MSPointerDown", T.ontouchstart);
            T.bind(l, "MSPointerUp", T.ontouchend);
            T.delegate(l, "MSPointerMove", T.ontouchmove);
            T.bind(T.cursor, "MSGestureHold", function (e) {
              e.preventDefault();
            });
            T.bind(T.cursor, "contextmenu", function (e) {
              e.preventDefault();
            });
          } else if (P.cantouch) {
            T.bind(T.win, "touchstart", T.ontouchstart, false, true);
            T.bind(l, "touchend", T.ontouchend, false, true);
            T.bind(l, "touchcancel", T.ontouchend, false, true);
            T.delegate(l, "touchmove", T.ontouchmove, false, true);
          }
          if (M.emulatetouch) {
            T.bind(T.win, "mousedown", T.ontouchstart, false, true);
            T.bind(l, "mouseup", T.ontouchend, false, true);
            T.bind(l, "mousemove", T.ontouchmove, false, true);
          }
          if (M.cursordragontouch || !P.cantouch && !M.emulatetouch) {
            T.rail.css({cursor: "default"});
            if (T.railh) {
              T.railh.css({cursor: "default"});
            }
            T.jqbind(T.rail, "mouseenter", function () {
              if (!T.ispage && !T.win.is(":visible")) {
                return false;
              }
              if (T.canshowonmouseevent) {
                T.showCursor();
              }
              T.rail.active = true;
            });
            T.jqbind(T.rail, "mouseleave", function () {
              T.rail.active = false;
              if (!T.rail.drag) {
                T.hideCursor();
              }
            });
            if (M.sensitiverail) {
              T.bind(T.rail, "click", function (e) {
                T.doRailClick(e, false, false);
              });
              T.bind(T.rail, "dblclick", function (e) {
                T.doRailClick(e, true, false);
              });
              T.bind(T.cursor, "click", function (e) {
                T.cancelEvent(e);
              });
              T.bind(T.cursor, "dblclick", function (e) {
                T.cancelEvent(e);
              });
            }
            if (T.railh) {
              T.jqbind(T.railh, "mouseenter", function () {
                if (!T.ispage && !T.win.is(":visible")) {
                  return false;
                }
                if (T.canshowonmouseevent) {
                  T.showCursor();
                }
                T.rail.active = true;
              });
              T.jqbind(T.railh, "mouseleave", function () {
                T.rail.active = false;
                if (!T.rail.drag) {
                  T.hideCursor();
                }
              });
              if (M.sensitiverail) {
                T.bind(T.railh, "click", function (e) {
                  T.doRailClick(e, false, true);
                });
                T.bind(T.railh, "dblclick", function (e) {
                  T.doRailClick(e, true, true);
                });
                T.bind(T.cursorh, "click", function (e) {
                  T.cancelEvent(e);
                });
                T.bind(T.cursorh, "dblclick", function (e) {
                  T.cancelEvent(e);
                });
              }
            }
          }
          if (M.cursordragontouch && (this.istouchcapable || P.cantouch)) {
            T.bind(T.cursor, "touchstart", T.ontouchstartCursor);
            T.bind(T.cursor, "touchmove", T.ontouchmoveCursor);
            T.bind(T.cursor, "touchend", T.ontouchendCursor);
            if (T.cursorh) {
              T.bind(T.cursorh, "touchstart", function (e) {
                T.ontouchstartCursor(e, true);
              });
            }
            if (T.cursorh) {
              T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor);
            }
            if (T.cursorh) {
              T.bind(T.cursorh, "touchend", T.ontouchendCursor);
            }
          }
          if (M.emulatetouch || P.isandroid || P.isios) {
            T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend);
            if (T.onclick) {
              T.bind(l, "click", T.onclick);
            }
            if (M.cursordragontouch) {
              T.bind(T.cursor, "mousedown", T.onmousedown);
              T.bind(T.cursor, "mouseup", T.onmouseup);
              if (T.cursorh) {
                T.bind(T.cursorh, "mousedown", function (e) {
                  T.onmousedown(e, true);
                });
              }
              if (T.cursorh) {
                T.bind(T.cursorh, "mouseup", T.onmouseup);
              }
            } else {
              T.bind(T.rail, "mousedown", function (e) {
                e.preventDefault();
              });
              if (T.railh) {
                T.bind(T.railh, "mousedown", function (e) {
                  e.preventDefault();
                });
              }
            }
          } else {
            T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup);
            T.bind(l, "mousemove", T.onmousemove);
            if (T.onclick) {
              T.bind(l, "click", T.onclick);
            }
            T.bind(T.cursor, "mousedown", T.onmousedown);
            T.bind(T.cursor, "mouseup", T.onmouseup);
            if (T.railh) {
              T.bind(T.cursorh, "mousedown", function (e) {
                T.onmousedown(e, true);
              });
              T.bind(T.cursorh, "mouseup", T.onmouseup);
            }
            if (!T.ispage && M.enablescrollonselection) {
              T.bind(T.win[0], "mousedown", T.onselectionstart);
              T.bind(l, "mouseup", T.onselectionend);
              T.bind(T.cursor, "mouseup", T.onselectionend);
              if (T.cursorh) {
                T.bind(T.cursorh, "mouseup", T.onselectionend);
              }
              T.bind(l, "mousemove", T.onselectiondrag);
            }
            if (T.zoom) {
              T.jqbind(T.zoom, "mouseenter", function () {
                if (T.canshowonmouseevent) {
                  T.showCursor();
                }
                T.rail.active = true;
              });
              T.jqbind(T.zoom, "mouseleave", function () {
                T.rail.active = false;
                if (!T.rail.drag) {
                  T.hideCursor();
                }
              });
            }
          }
          if (M.enablemousewheel) {
            if (!T.isiframe) {
              T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel);
            }
            T.mousewheel(T.rail, T.onmousewheel);
            if (T.railh) {
              T.mousewheel(T.railh, T.onmousewheelhr);
            }
          }
          if (!T.ispage && !P.cantouch && !/HTML|^BODY/.test(T.win[0].nodeName)) {
            if (!T.win.attr("tabindex")) {
              T.win.attr({tabindex: ++r});
            }
            T.bind(T.win, "focus", function (e) {
              o = T.getTarget(e).id || T.getTarget(e) || false;
              T.hasfocus = true;
              if (T.canshowonmouseevent) {
                T.noticeCursor();
              }
            });
            T.bind(T.win, "blur", function (e) {
              o = false;
              T.hasfocus = false;
            });
            T.bind(T.win, "mouseenter", function (e) {
              t = T.getTarget(e).id || T.getTarget(e) || false;
              T.hasmousefocus = true;
              if (T.canshowonmouseevent) {
                T.noticeCursor();
              }
            });
            T.bind(T.win, "mouseleave", function (e) {
              t = false;
              T.hasmousefocus = false;
              if (!T.rail.drag) {
                T.hideCursor();
              }
            });
          }
          T.onkeypress = function (e) {
            if (T.railslocked && T.page.maxh === 0) {
              return true;
            }
            e = e || a.event;
            var r = T.getTarget(e);
            if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!r.getAttribute("type") && !r.type && true || !/submit|button|cancel/i.tp)) {
              return true;
            }
            if (n(r).attr("contenteditable")) {
              return true;
            }
            if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
              var i = e.keyCode;
              if (T.railslocked && i != 27) {
                return T.cancelEvent(e);
              }
              var s = e.ctrlKey || false;
              var l = e.shiftKey || false;
              var c = false;
              switch (i) {
                case 38:
                case 63233:
                  T.doScrollBy(72);
                  c = true;
                  break;
                case 40:
                case 63235:
                  T.doScrollBy(-72);
                  c = true;
                  break;
                case 37:
                case 63232:
                  if (T.railh) {
                    if (s) {
                      T.doScrollLeft(0);
                    } else {
                      T.doScrollLeftBy(72);
                    }
                    c = true;
                  }
                  break;
                case 39:
                case 63234:
                  if (T.railh) {
                    if (s) {
                      T.doScrollLeft(T.page.maxw);
                    } else {
                      T.doScrollLeftBy(-72);
                    }
                    c = true;
                  }
                  break;
                case 33:
                case 63276:
                  T.doScrollBy(T.view.h);
                  c = true;
                  break;
                case 34:
                case 63277:
                  T.doScrollBy(-T.view.h);
                  c = true;
                  break;
                case 36:
                case 63273:
                  if (T.railh && s) {
                    T.doScrollPos(0, 0);
                  } else {
                    T.doScrollTo(0);
                  }
                  c = true;
                  break;
                case 35:
                case 63275:
                  if (T.railh && s) {
                    T.doScrollPos(T.page.maxw, T.page.maxh);
                  } else {
                    T.doScrollTo(T.page.maxh);
                  }
                  c = true;
                  break;
                case 32:
                  if (M.spacebarenabled) {
                    if (l) {
                      T.doScrollBy(T.view.h);
                    } else {
                      T.doScrollBy(-T.view.h);
                    }
                    c = true;
                  }
                  break;
                case 27:
                  if (T.zoomactive) {
                    T.doZoom();
                    c = true;
                  }
              }
              if (c) {
                return T.cancelEvent(e);
              }
            }
          };
          if (M.enablekeyboard) {
            T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress);
          }
          T.bind(l, "keydown", function (e) {
            if (e.ctrlKey || false) {
              T.wheelprevented = true;
            }
          });
          T.bind(l, "keyup", function (e) {
            if (!e.ctrlKey && true) {
              T.wheelprevented = false;
            }
          });
          T.bind(a, "blur", function (e) {
            T.wheelprevented = false;
          });
          T.bind(a, "resize", T.onscreenresize);
          T.bind(a, "orientationchange", T.onscreenresize);
          T.bind(a, "load", T.lazyResize);
          if (P.ischrome && !T.ispage && !T.haswrapper) {
            var C = T.win.attr("style");
            var N = parseFloat(T.win.css("width")) + 1;
            T.win.css("width", N);
            T.synched("chromefix", function () {
              T.win.attr("style", C);
            });
          }
          T.onAttributeChange = function (e) {
            T.lazyResize(T.isieold ? 250 : 30);
          };
          if (M.enableobserver) {
            if (!T.isie11 && m !== false) {
              T.observerbody = new m(function (e) {
                e.forEach(function (e) {
                  if (e.type == "attributes") {
                    if (E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0])) {
                      return T.hide();
                    } else {
                      return T.show();
                    }
                  }
                });
                if (T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height) {
                  return T.lazyResize(30);
                }
              });
              T.observerbody.observe(l.body, {childList: true, subtree: true, characterData: false, attributes: true, attributeFilter: ["class"]});
            }
            if (!T.ispage && !T.haswrapper) {
              var R = T.win[0];
              if (m === false) {
                T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange);
                if (P.isie9) {
                  R.attachEvent("onpropertychange", T.onAttributeChange);
                }
                T.bind(R, "DOMNodeRemoved", function (e) {
                  if (e.target === R) {
                    T.remove();
                  }
                });
              } else {
                T.observer = new m(function (e) {
                  e.forEach(T.onAttributeChange);
                });
                T.observer.observe(R, {childList: true, characterData: false, attributes: true, subtree: false});
                T.observerremover = new m(function (e) {
                  e.forEach(function (e) {
                    if (e.removedNodes.length > 0) {
                      for (var o in e.removedNodes) {
                        if (T && e.removedNodes[o] === R) {
                          return T.remove();
                        }
                      }
                    }
                  });
                });
                T.observerremover.observe(R.parentNode, {childList: true, characterData: false, attributes: false, subtree: false});
              }
            }
          }
          if (!T.ispage && M.boxzoom) {
            T.bind(a, "resize", T.resizeZoom);
          }
          if (T.istextarea) {
            T.bind(T.win, "keydown", T.lazyResize);
            T.bind(T.win, "mouseup", T.lazyResize);
          }
          T.lazyResize(30);
        }
        if (this.doc[0].nodeName == "IFRAME") {
          var _ = function () {
            T.iframexd = false;
            var o;
            try {
              (o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain;
            } catch (e) {
              T.iframexd = true;
              o = false;
            }
            if (T.iframexd) {
              if ("console" in a) {
                console.log("NiceScroll error: policy restriced iframe");
              }
              return true;
            }
            T.forcescreen = true;
            if (T.isiframe) {
              T.iframe = {doc: n(o), html: T.doc.contents().find("html")[0], body: T.doc.contents().find("body")[0]};
              T.getContentSize = function () {
                return {w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth), h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)};
              };
              T.docscroll = n(T.iframe.body);
            }
            if (!P.isios && M.iframeautoresize && !T.isiframe) {
              T.win.scrollTop(0);
              T.doc.height("");
              var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
              T.doc.height(t);
            }
            T.lazyResize(30);
            T.css(n(T.iframe.body), e);
            if (P.isios && T.haswrapper) {
              T.css(n(o.body), {"-webkit-transform": "translate3d(0,0,0)"});
            }
            if ("contentWindow" in this) {
              T.bind(this.contentWindow, "scroll", T.onscroll);
            } else {
              T.bind(o, "scroll", T.onscroll);
            }
            if (M.enablemousewheel) {
              T.mousewheel(o, T.onmousewheel);
            }
            if (M.enablekeyboard) {
              T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress);
            }
            if (P.cantouch) {
              T.bind(o, "touchstart", T.ontouchstart);
              T.bind(o, "touchmove", T.ontouchmove);
            } else if (M.emulatetouch) {
              T.bind(o, "mousedown", T.ontouchstart);
              T.bind(o, "mousemove", function (e) {
                return T.ontouchmove(e, true);
              });
              if (M.grabcursorenabled && P.cursorgrabvalue) {
                T.css(n(o.body), {cursor: P.cursorgrabvalue});
              }
            }
            T.bind(o, "mouseup", T.ontouchend);
            if (T.zoom) {
              if (M.dblclickzoom) {
                T.bind(o, "dblclick", T.doZoom);
              }
              if (T.ongesturezoom) {
                T.bind(o, "gestureend", T.ongesturezoom);
              }
            }
          };
          if (this.doc[0].readyState && this.doc[0].readyState === "complete") {
            setTimeout(function () {
              _.call(T.doc[0], false);
            }, 500);
          }
          T.bind(this.doc, "load", _);
        }
      };
      this.showCursor = function (e, o) {
        if (T.cursortimeout) {
          clearTimeout(T.cursortimeout);
          T.cursortimeout = 0;
        }
        if (T.rail) {
          if (T.autohidedom) {
            T.autohidedom.stop().css({opacity: M.cursoropacitymax});
            T.cursoractive = true;
          }
          if (!T.rail.drag || T.rail.drag.pt != 1) {
            if (e !== void 0 && e !== false) {
              T.scroll.y = e / T.scrollratio.y | 0;
            }
            if (o !== void 0) {
              T.scroll.x = o / T.scrollratio.x | 0;
            }
          }
          T.cursor.css({height: T.cursorheight, top: T.scroll.y});
          if (T.cursorh) {
            var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
            T.cursorh.css({width: T.cursorwidth, left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t});
            T.cursoractive = true;
          }
          if (T.zoom) {
            T.zoom.stop().css({opacity: M.cursoropacitymax});
          }
        }
      };
      this.hideCursor = function (e) {
        if (!T.cursortimeout) {
          if (T.rail && T.autohidedom) {
            if (!T.hasmousefocus || M.autohidemode !== "leave") {
              T.cursortimeout = setTimeout(function () {
                if (!T.rail.active || !T.showonmouseevent) {
                  T.autohidedom.stop().animate({opacity: M.cursoropacitymin});
                  if (T.zoom) {
                    T.zoom.stop().animate({opacity: M.cursoropacitymin});
                  }
                  T.cursoractive = false;
                }
                T.cursortimeout = 0;
              }, e || M.hidecursordelay);
            }
          }
        }
      };
      this.noticeCursor = function (e, o, t) {
        T.showCursor(o, t);
        if (!T.rail.active) {
          T.hideCursor(e);
        }
      };
      this.getContentSize = T.ispage ? function () {
        return {w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth), h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)};
      } : T.haswrapper ? function () {
        return {w: T.doc[0].offsetWidth, h: T.doc[0].offsetHeight};
      } : function () {
        return {w: T.docscroll[0].scrollWidth, h: T.docscroll[0].scrollHeight};
      };
      this.onResize = function (e, o) {
        if (!T || !T.win) {
          return false;
        }
        var t = T.page.maxh;
        var r = T.page.maxw;
        var i = T.view.h;
        var s = T.view.w;
        T.view = {w: T.ispage ? T.win.width() : T.win[0].clientWidth, h: T.ispage ? T.win.height() : T.win[0].clientHeight};
        T.page = o || T.getContentSize();
        T.page.maxh = Math.max(0, T.page.h - T.view.h);
        T.page.maxw = Math.max(0, T.page.w - T.view.w);
        if (T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
          if (T.ispage) {
            return T;
          }
          var n = T.win.offset();
          if (T.lastposition) {
            var l = T.lastposition;
            if (l.top == n.top && l.left == n.left) {
              return T;
            }
          }
          T.lastposition = n;
        }
        if (T.page.maxh === 0) {
          T.hideRail();
          T.scrollvaluemax = 0;
          T.scroll.y = 0;
          T.scrollratio.y = 0;
          T.cursorheight = 0;
          T.setScrollTop(0);
          if (T.rail) {
            T.rail.scrollable = false;
          }
        } else {
          T.page.maxh -= M.railpadding.top + M.railpadding.bottom;
          T.rail.scrollable = true;
        }
        if (T.page.maxw === 0) {
          T.hideRailHr();
          T.scrollvaluemaxw = 0;
          T.scroll.x = 0;
          T.scrollratio.x = 0;
          T.cursorwidth = 0;
          T.setScrollLeft(0);
          if (T.railh) {
            T.railh.scrollable = false;
          }
        } else {
          T.page.maxw -= M.railpadding.left + M.railpadding.right;
          if (T.railh) {
            T.railh.scrollable = M.horizrailenabled;
          }
        }
        T.railslocked = T.locked || T.page.maxh === 0 && T.page.maxw === 0;
        if (T.railslocked) {
          if (!T.ispage) {
            T.updateScrollBar(T.view);
          }
          return false;
        } else {
          if (!T.hidden) {
            if (!T.rail.visibility) {
              T.showRail();
            }
            if (T.railh && !T.railh.visibility) {
              T.showRailHr();
            }
          }
          if (T.istextarea && T.win.css("resize") && T.win.css("resize") != "none") {
            T.view.h -= 20;
          }
          T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h)));
          T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight);
          T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w)));
          T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth);
          T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom);
          if (!T.hasborderbox) {
            T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight;
          }
          if (T.railh) {
            T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w;
            T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right);
          }
          if (!T.ispage) {
            T.updateScrollBar(T.view);
          }
          T.scrollratio = {x: T.page.maxw / T.scrollvaluemaxw, y: T.page.maxh / T.scrollvaluemax};
          if (T.getScrollTop() > T.page.maxh) {
            T.doScrollTop(T.page.maxh);
          } else {
            T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0;
            T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0;
            if (T.cursoractive) {
              T.noticeCursor();
            }
          }
          if (T.scroll.y && T.getScrollTop() === 0) {
            T.doScrollTo(T.scroll.y * T.scrollratio.y | 0);
          }
          return T;
        }
      };
      this.resize = T.onResize;
      var O = 0;
      this.onscreenresize = function (e) {
        clearTimeout(O);
        var o = !T.ispage && !T.haswrapper;
        if (o) {
          T.hideRails();
        }
        O = setTimeout(function () {
          if (T) {
            if (o) {
              T.showRails();
            }
            T.resize();
          }
          O = 0;
        }, 120);
      };
      this.lazyResize = function (e) {
        clearTimeout(O);
        e = isNaN(e) ? 240 : e;
        O = setTimeout(function () {
          if (T) {
            T.resize();
          }
          O = 0;
        }, e);
        return T;
      };
      this.jqbind = function (e, o, t) {
        T.events.push({e: e, n: o, f: t, q: true});
        n(e).on(o, t);
      };
      this.mousewheel = function (e, o, t) {
        var r = "jquery" in e ? e[0] : e;
        if ("onwheel" in l.createElement("div")) {
          T._bind(r, "wheel", o, t || false);
        } else {
          var i = l.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll";
          S(r, i, o, t || false);
          if (i == "DOMMouseScroll") {
            S(r, "MozMousePixelScroll", o, t || false);
          }
        }
      };
      var Y = false;
      if (P.haseventlistener) {
        try {
          var H = Object.defineProperty({}, "passive", {get: function () {
            Y = true;
          }});
          a.addEventListener("test", null, H);
        } catch (e) {}
        this.stopPropagation = function (e) {
          if (!e) {
            return false;
          }
          (e = e.original ? e.original : e).stopPropagation();
          return false;
        };
        this.cancelEvent = function (e) {
          if (e.cancelable) {
            e.preventDefault();
          }
          e.stopImmediatePropagation();
          if (e.preventManipulation) {
            e.preventManipulation();
          }
          return false;
        };
      } else {
        Event.prototype.preventDefault = function () {
          this.returnValue = false;
        };
        Event.prototype.stopPropagation = function () {
          this.cancelBubble = true;
        };
        a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
          this.attachEvent("on" + e, o);
        };
        a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
          this.detachEvent("on" + e, o);
        };
        this.cancelEvent = function (e) {
          if (e = e || a.event) {
            e.cancelBubble = true;
            e.cancel = true;
            e.returnValue = false;
          }
          return false;
        };
        this.stopPropagation = function (e) {
          if (e = e || a.event) {
            e.cancelBubble = true;
          }
          return false;
        };
      }
      this.delegate = function (e, o, t, r, i) {
        var s = d[o] || false;
        if (!s) {
          s = {a: [], l: [], f: function (e) {
            var o = s.l;
            var t = false;
            for (var r = o.length - 1; r >= 0; r--) {
              if ((t = o[r].call(e.target, e)) === false) {
                return false;
              }
            }
            return t;
          }};
          T.bind(e, o, s.f, r, i);
          d[o] = s;
        }
        if (T.ispage) {
          s.a = [T.id].concat(s.a);
          s.l = [t].concat(s.l);
        } else {
          s.a.push(T.id);
          s.l.push(t);
        }
      };
      this.undelegate = function (e, o, t, r, i) {
        var s = d[o] || false;
        if (s && s.l) {
          var n = 0;
          for (var l = s.l.length; n < l; n++) {
            if (s.a[n] === T.id) {
              s.a.splice(n);
              s.l.splice(n);
              if (s.a.length === 0) {
                T._unbind(e, o, s.l.f);
                d[o] = null;
              }
            }
          }
        }
      };
      this.bind = function (e, o, t, r, i) {
        var s = "jquery" in e ? e[0] : e;
        T._bind(s, o, t, r || false, i || false);
      };
      this._bind = function (e, o, t, r, i) {
        T.events.push({e: e, n: o, f: t, b: r, q: false});
        if (Y && i) {
          e.addEventListener(o, t, {passive: false, capture: r});
        } else {
          e.addEventListener(o, t, r || false);
        }
      };
      this._unbind = function (e, o, t, r) {
        if (d[o]) {
          T.undelegate(e, o, t, r);
        } else {
          e.removeEventListener(o, t, r);
        }
      };
      this.unbindAll = function () {
        for (var e = 0; e < T.events.length; e++) {
          var o = T.events[e];
          if (o.q) {
            o.e.unbind(o.n, o.f);
          } else {
            T._unbind(o.e, o.n, o.f, o.b);
          }
        }
      };
      this.showRails = function () {
        return T.showRail().showRailHr();
      };
      this.showRail = function () {
        if (T.page.maxh !== 0 && (!!T.ispage || T.win.css("display") != "none")) {
          T.rail.visibility = true;
          T.rail.css("display", "block");
        }
        return T;
      };
      this.showRailHr = function () {
        if (T.railh) {
          if (T.page.maxw !== 0 && (!!T.ispage || T.win.css("display") != "none")) {
            T.railh.visibility = true;
            T.railh.css("display", "block");
          }
        }
        return T;
      };
      this.hideRails = function () {
        return T.hideRail().hideRailHr();
      };
      this.hideRail = function () {
        T.rail.visibility = false;
        T.rail.css("display", "none");
        return T;
      };
      this.hideRailHr = function () {
        if (T.railh) {
          T.railh.visibility = false;
          T.railh.css("display", "none");
        }
        return T;
      };
      this.show = function () {
        T.hidden = false;
        T.railslocked = false;
        return T.showRails();
      };
      this.hide = function () {
        T.hidden = true;
        T.railslocked = true;
        return T.hideRails();
      };
      this.toggle = function () {
        if (T.hidden) {
          return T.show();
        } else {
          return T.hide();
        }
      };
      this.remove = function () {
        T.stop();
        if (T.cursortimeout) {
          clearTimeout(T.cursortimeout);
        }
        for (var e in T.delaylist) {
          if (T.delaylist[e]) {
            h(T.delaylist[e].h);
          }
        }
        T.doZoomOut();
        T.unbindAll();
        if (P.isie9) {
          T.win[0].detachEvent("onpropertychange", T.onAttributeChange);
        }
        if (T.observer !== false) {
          T.observer.disconnect();
        }
        if (T.observerremover !== false) {
          T.observerremover.disconnect();
        }
        if (T.observerbody !== false) {
          T.observerbody.disconnect();
        }
        T.events = null;
        if (T.cursor) {
          T.cursor.remove();
        }
        if (T.cursorh) {
          T.cursorh.remove();
        }
        if (T.rail) {
          T.rail.remove();
        }
        if (T.railh) {
          T.railh.remove();
        }
        if (T.zoom) {
          T.zoom.remove();
        }
        for (var o = 0; o < T.saved.css.length; o++) {
          var t = T.saved.css[o];
          t[0].css(t[1], t[2] === void 0 ? "" : t[2]);
        }
        T.saved = false;
        T.me.data("__nicescroll", "");
        var r = n.nicescroll;
        r.each(function (e) {
          if (this && this.id === T.id) {
            delete r[e];
            for (var o = ++e; o < r.length; o++, e++) {
              r[e] = r[o];
            }
            if (--r.length) {
              delete r[r.length];
            }
          }
        });
        for (var i in T) {
          T[i] = null;
          delete T[i];
        }
        T = null;
      };
      this.scrollstart = function (e) {
        this.onscrollstart = e;
        return T;
      };
      this.scrollend = function (e) {
        this.onscrollend = e;
        return T;
      };
      this.scrollcancel = function (e) {
        this.onscrollcancel = e;
        return T;
      };
      this.zoomin = function (e) {
        this.onzoomin = e;
        return T;
      };
      this.zoomout = function (e) {
        this.onzoomout = e;
        return T;
      };
      this.isScrollable = function (e) {
        var o = e.target ? e.target : e;
        if (o.nodeName == "OPTION") {
          return true;
        }
        while (o && o.nodeType == 1 && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName)) {
          var t = n(o);
          var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
          if (/scroll|auto/.test(r)) {
            return o.clientHeight != o.scrollHeight;
          }
          o = !!o.parentNode && o.parentNode;
        }
        return false;
      };
      this.getViewport = function (e) {
        for (var o = !!e && !!e.parentNode && e.parentNode; o && o.nodeType == 1 && !/^BODY|HTML/.test(o.nodeName);) {
          var t = n(o);
          if (/fixed|absolute/.test(t.css("position"))) {
            return t;
          }
          var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
          if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) {
            return t;
          }
          if (t.getNiceScroll().length > 0) {
            return t;
          }
          o = !!o.parentNode && o.parentNode;
        }
        return false;
      };
      this.triggerScrollStart = function (e, o, t, r, i) {
        if (T.onscrollstart) {
          var s = {type: "scrollstart", current: {x: e, y: o}, request: {x: t, y: r}, end: {x: T.newscrollx, y: T.newscrolly}, speed: i};
          T.onscrollstart.call(T, s);
        }
      };
      this.triggerScrollEnd = function () {
        if (T.onscrollend) {
          var e = T.getScrollLeft();
          var o = T.getScrollTop();
          var t = {type: "scrollend", current: {x: e, y: o}, end: {x: e, y: o}};
          T.onscrollend.call(T, t);
        }
      };
      var B = 0;
      var X = 0;
      var D = 0;
      var A = 1;
      var q = false;
      this.onmousewheel = function (e) {
        if (T.wheelprevented || T.locked) {
          return false;
        }
        if (T.railslocked) {
          T.debounced("checkunlock", T.resize, 250);
          return false;
        }
        if (T.rail.drag) {
          return T.cancelEvent(e);
        }
        if (M.oneaxismousemode === "auto" && e.deltaX !== 0) {
          M.oneaxismousemode = false;
        }
        if (M.oneaxismousemode && e.deltaX === 0 && !T.rail.scrollable) {
          return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
        }
        var o = f();
        var t = false;
        if (M.preservenativescrolling && T.checkarea + 600 < o) {
          T.nativescrollingarea = T.isScrollable(e);
          t = true;
        }
        T.checkarea = o;
        if (T.nativescrollingarea) {
          return true;
        }
        var r = k(e, false, t);
        if (r) {
          T.checkarea = 0;
        }
        return r;
      };
      this.onmousewheelhr = function (e) {
        if (!T.wheelprevented) {
          if (T.railslocked || !T.railh.scrollable) {
            return true;
          }
          if (T.rail.drag) {
            return T.cancelEvent(e);
          }
          var o = f();
          var t = false;
          if (M.preservenativescrolling && T.checkarea + 600 < o) {
            T.nativescrollingarea = T.isScrollable(e);
            t = true;
          }
          T.checkarea = o;
          return !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, true, t));
        }
      };
      this.stop = function () {
        T.cancelScroll();
        if (T.scrollmon) {
          T.scrollmon.stop();
        }
        T.cursorfreezed = false;
        T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y));
        T.noticeCursor();
        return T;
      };
      this.getTransitionSpeed = function (e) {
        return 80 + e / 72 * M.scrollspeed | 0;
      };
      if (M.smoothscroll) {
        if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
          var j = "";
          this.resetTransition = function () {
            j = "";
            T.doc.css(P.prefixstyle + "transition-duration", "0ms");
          };
          this.prepareTransition = function (e, o) {
            var t = o ? e : T.getTransitionSpeed(e);
            var r = t + "ms";
            if (j !== r) {
              j = r;
              T.doc.css(P.prefixstyle + "transition-duration", r);
            }
            return t;
          };
          this.doScrollLeft = function (e, o) {
            var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
            T.doScrollPos(e, t, o);
          };
          this.doScrollTop = function (e, o) {
            var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
            T.doScrollPos(t, e, o);
          };
          this.cursorupdate = {running: false, start: function () {
            var e = this;
            if (!e.running) {
              e.running = true;
              var o = function () {
                if (e.running) {
                  u(o);
                }
                T.showCursor(T.getScrollTop(), T.getScrollLeft());
                T.notifyScrollEvent(T.win[0]);
              };
              u(o);
            }
          }, stop: function () {
            this.running = false;
          }};
          this.doScrollPos = function (e, o, t) {
            var r = T.getScrollTop();
            var i = T.getScrollLeft();
            if ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) {
              T.cancelScroll();
            }
            if (M.bouncescroll) {
              if (o < 0) {
                o = o / 2 | 0;
              } else if (o > T.page.maxh) {
                o = T.page.maxh + (o - T.page.maxh) / 2 | 0;
              }
              if (e < 0) {
                e = e / 2 | 0;
              } else if (e > T.page.maxw) {
                e = T.page.maxw + (e - T.page.maxw) / 2 | 0;
              }
            } else {
              if (o < 0) {
                o = 0;
              } else if (o > T.page.maxh) {
                o = T.page.maxh;
              }
              if (e < 0) {
                e = 0;
              } else if (e > T.page.maxw) {
                e = T.page.maxw;
              }
            }
            if (T.scrollrunning && e == T.newscrollx && o == T.newscrolly) {
              return false;
            }
            T.newscrolly = o;
            T.newscrollx = e;
            var s = T.getScrollTop();
            var n = T.getScrollLeft();
            var l = {};
            l.x = e - n;
            l.y = o - s;
            var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y);
            var c = T.prepareTransition(a);
            if (!T.scrollrunning) {
              T.scrollrunning = true;
              T.triggerScrollStart(n, s, e, o, c);
              T.cursorupdate.start();
            }
            T.scrollendtrapped = true;
            if (!P.transitionend) {
              if (T.scrollendtrapped) {
                clearTimeout(T.scrollendtrapped);
              }
              T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c);
            }
            T.setScrollTop(T.newscrolly);
            T.setScrollLeft(T.newscrollx);
          };
          this.cancelScroll = function () {
            if (!T.scrollendtrapped) {
              return true;
            }
            var e = T.getScrollTop();
            var o = T.getScrollLeft();
            T.scrollrunning = false;
            if (!P.transitionend) {
              clearTimeout(P.transitionend);
            }
            T.scrollendtrapped = false;
            T.resetTransition();
            T.setScrollTop(e);
            if (T.railh) {
              T.setScrollLeft(o);
            }
            if (T.timerscroll && T.timerscroll.tm) {
              clearInterval(T.timerscroll.tm);
            }
            T.timerscroll = false;
            T.cursorfreezed = false;
            T.cursorupdate.stop();
            T.showCursor(e, o);
            return T;
          };
          this.onScrollTransitionEnd = function () {
            if (T.scrollendtrapped) {
              var e = T.getScrollTop();
              var o = T.getScrollLeft();
              if (e < 0) {
                e = 0;
              } else if (e > T.page.maxh) {
                e = T.page.maxh;
              }
              if (o < 0) {
                o = 0;
              } else if (o > T.page.maxw) {
                o = T.page.maxw;
              }
              if (e != T.newscrolly || o != T.newscrollx) {
                return T.doScrollPos(o, e, M.snapbackspeed);
              }
              if (T.scrollrunning) {
                T.triggerScrollEnd();
              }
              T.scrollrunning = false;
              T.scrollendtrapped = false;
              T.resetTransition();
              T.timerscroll = false;
              T.setScrollTop(e);
              if (T.railh) {
                T.setScrollLeft(o);
              }
              T.cursorupdate.stop();
              T.noticeCursor(false, e, o);
              T.cursorfreezed = false;
            }
          };
        } else {
          this.doScrollLeft = function (e, o) {
            var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
            T.doScrollPos(e, t, o);
          };
          this.doScrollTop = function (e, o) {
            var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
            T.doScrollPos(t, e, o);
          };
          this.doScrollPos = function (e, o, t) {
            var r = T.getScrollTop();
            var i = T.getScrollLeft();
            if ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) {
              T.cancelScroll();
            }
            var s = false;
            if (!T.bouncescroll || !T.rail.visibility) {
              if (o < 0) {
                o = 0;
                s = true;
              } else if (o > T.page.maxh) {
                o = T.page.maxh;
                s = true;
              }
            }
            if (!T.bouncescroll || !T.railh.visibility) {
              if (e < 0) {
                e = 0;
                s = true;
              } else if (e > T.page.maxw) {
                e = T.page.maxw;
                s = true;
              }
            }
            if (T.scrollrunning && T.newscrolly === o && T.newscrollx === e) {
              return true;
            }
            T.newscrolly = o;
            T.newscrollx = e;
            T.dst = {};
            T.dst.x = e - i;
            T.dst.y = o - r;
            T.dst.px = i;
            T.dst.py = r;
            var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y);
            var l = T.getTransitionSpeed(n);
            T.bzscroll = {};
            var a = s ? 1 : .58;
            T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1);
            T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
            f();
            var c = function () {
              if (T.scrollrunning) {
                var e = T.bzscroll.y.getPos();
                T.setScrollLeft(T.bzscroll.x.getNow());
                T.setScrollTop(T.bzscroll.y.getNow());
                if (e <= 1) {
                  T.timer = u(c);
                } else {
                  T.scrollrunning = false;
                  T.timer = 0;
                  T.triggerScrollEnd();
                }
              }
            };
            if (!T.scrollrunning) {
              T.triggerScrollStart(i, r, e, o, l);
              T.scrollrunning = true;
              T.timer = u(c);
            }
          };
          this.cancelScroll = function () {
            if (T.timer) {
              h(T.timer);
            }
            T.timer = 0;
            T.bzscroll = false;
            T.scrollrunning = false;
            return T;
          };
        }
      } else {
        this.doScrollLeft = function (e, o) {
          var t = T.getScrollTop();
          T.doScrollPos(e, t, o);
        };
        this.doScrollTop = function (e, o) {
          var t = T.getScrollLeft();
          T.doScrollPos(t, e, o);
        };
        this.doScrollPos = function (e, o, t) {
          var r = e > T.page.maxw ? T.page.maxw : e;
          if (r < 0) {
            r = 0;
          }
          var i = o > T.page.maxh ? T.page.maxh : o;
          if (i < 0) {
            i = 0;
          }
          T.synched("scroll", function () {
            T.setScrollTop(i);
            T.setScrollLeft(r);
          });
        };
        this.cancelScroll = function () {};
      }
      this.doScrollBy = function (e, o) {
        z(0, e);
      };
      this.doScrollLeftBy = function (e, o) {
        z(e, 0);
      };
      this.doScrollTo = function (e, o) {
        var t = o ? Math.round(e * T.scrollratio.y) : e;
        if (t < 0) {
          t = 0;
        } else if (t > T.page.maxh) {
          t = T.page.maxh;
        }
        T.cursorfreezed = false;
        T.doScrollTop(e);
      };
      this.checkContentSize = function () {
        var e = T.getContentSize();
        if (e.h != T.page.h || e.w != T.page.w) {
          T.resize(false, e);
        }
      };
      T.onscroll = function (e) {
        if (!T.rail.drag && !T.cursorfreezed) {
          T.synched("scroll", function () {
            T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y);
            if (T.railh) {
              T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x);
            }
            T.noticeCursor();
          });
        }
      };
      T.bind(T.docscroll, "scroll", T.onscroll);
      this.doZoomIn = function (e) {
        if (!T.zoomactive) {
          T.zoomactive = true;
          T.zoomrestore = {style: {}};
          var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"];
          var t = T.win[0].style;
          for (var r in o) {
            var i = o[r];
            T.zoomrestore.style[i] = t[i] !== void 0 ? t[i] : "";
          }
          T.zoomrestore.style.width = T.win.css("width");
          T.zoomrestore.style.height = T.win.css("height");
          T.zoomrestore.padding = {w: T.win.outerWidth() - T.win.width(), h: T.win.outerHeight() - T.win.height()};
          if (P.isios4) {
            T.zoomrestore.scrollTop = c.scrollTop();
            c.scrollTop(0);
          }
          T.win.css({position: P.isios4 ? "absolute" : "fixed", top: 0, left: 0, zIndex: s + 100, margin: 0});
          var n = T.win.css("backgroundColor");
          if (n === "" || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) {
            T.win.css("backgroundColor", "#fff");
          }
          T.rail.css({zIndex: s + 101});
          T.zoom.css({zIndex: s + 102});
          T.zoom.css("backgroundPosition", "0 -18px");
          T.resizeZoom();
          if (T.onzoomin) {
            T.onzoomin.call(T);
          }
          return T.cancelEvent(e);
        }
      };
      this.doZoomOut = function (e) {
        if (T.zoomactive) {
          T.zoomactive = false;
          T.win.css("margin", "");
          T.win.css(T.zoomrestore.style);
          if (P.isios4) {
            c.scrollTop(T.zoomrestore.scrollTop);
          }
          T.rail.css({"z-index": T.zindex});
          T.zoom.css({"z-index": T.zindex});
          T.zoomrestore = false;
          T.zoom.css("backgroundPosition", "0 0");
          T.onResize();
          if (T.onzoomout) {
            T.onzoomout.call(T);
          }
          return T.cancelEvent(e);
        }
      };
      this.doZoom = function (e) {
        if (T.zoomactive) {
          return T.doZoomOut(e);
        } else {
          return T.doZoomIn(e);
        }
      };
      this.resizeZoom = function () {
        if (T.zoomactive) {
          var e = T.getScrollTop();
          T.win.css({width: c.width() - T.zoomrestore.padding.w + "px", height: c.height() - T.zoomrestore.padding.h + "px"});
          T.onResize();
          T.setScrollTop(Math.min(T.page.maxh, e));
        }
      };
      this.init();
      n.nicescroll.push(this);
    };
    var y = function (e) {
      var o = this;
      this.nc = e;
      this.lastx = 0;
      this.lasty = 0;
      this.speedx = 0;
      this.speedy = 0;
      this.lasttime = 0;
      this.steptime = 0;
      this.snapx = false;
      this.snapy = false;
      this.demulx = 0;
      this.demuly = 0;
      this.lastscrollx = -1;
      this.lastscrolly = -1;
      this.chkx = 0;
      this.chky = 0;
      this.timer = 0;
      this.reset = function (e, t) {
        o.stop();
        o.steptime = 0;
        o.lasttime = f();
        o.speedx = 0;
        o.speedy = 0;
        o.lastx = e;
        o.lasty = t;
        o.lastscrollx = -1;
        o.lastscrolly = -1;
      };
      this.update = function (e, t) {
        var r = f();
        o.steptime = r - o.lasttime;
        o.lasttime = r;
        var i = t - o.lasty;
        var s = e - o.lastx;
        var n = o.nc.getScrollTop() + i;
        var l = o.nc.getScrollLeft() + s;
        o.snapx = l < 0 || l > o.nc.page.maxw;
        o.snapy = n < 0 || n > o.nc.page.maxh;
        o.speedx = s;
        o.speedy = i;
        o.lastx = e;
        o.lasty = t;
      };
      this.stop = function () {
        o.nc.unsynched("domomentum2d");
        if (o.timer) {
          clearTimeout(o.timer);
        }
        o.timer = 0;
        o.lastscrollx = -1;
        o.lastscrolly = -1;
      };
      this.doSnapy = function (e, t) {
        var r = false;
        if (t < 0) {
          t = 0;
          r = true;
        } else if (t > o.nc.page.maxh) {
          t = o.nc.page.maxh;
          r = true;
        }
        if (e < 0) {
          e = 0;
          r = true;
        } else if (e > o.nc.page.maxw) {
          e = o.nc.page.maxw;
          r = true;
        }
        if (r) {
          o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed);
        } else {
          o.nc.triggerScrollEnd();
        }
      };
      this.doMomentum = function (e) {
        var t = f();
        var r = e ? t + e : o.lasttime;
        var i = o.nc.getScrollLeft();
        var s = o.nc.getScrollTop();
        var n = o.nc.page.maxh;
        var l = o.nc.page.maxw;
        o.speedx = l > 0 ? Math.min(60, o.speedx) : 0;
        o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
        var a = r && t - r <= 60;
        if (s < 0 || s > n || i < 0 || i > l) {
          a = false;
        }
        var c = !!o.speedy && !!a && o.speedy;
        var d = !!o.speedx && !!a && o.speedx;
        if (c || d) {
          var u = Math.max(16, o.steptime);
          if (u > 50) {
            var h = u / 50;
            o.speedx *= h;
            o.speedy *= h;
            u = 50;
          }
          o.demulxy = 0;
          o.lastscrollx = o.nc.getScrollLeft();
          o.chkx = o.lastscrollx;
          o.lastscrolly = o.nc.getScrollTop();
          o.chky = o.lastscrolly;
          var p = o.lastscrollx;
          var m = o.lastscrolly;
          var g = function () {
            var e = f() - t > 600 ? .04 : .02;
            if (o.speedx) {
              p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy));
              o.lastscrollx = p;
              if (p < 0 || p > l) {
                e = .1;
              }
            }
            if (o.speedy) {
              m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy));
              o.lastscrolly = m;
              if (m < 0 || m > n) {
                e = .1;
              }
            }
            o.demulxy = Math.min(1, o.demulxy + e);
            o.nc.synched("domomentum2d", function () {
              if (o.speedx) {
                o.nc.getScrollLeft();
                o.chkx = p;
                o.nc.setScrollLeft(p);
              }
              if (o.speedy) {
                o.nc.getScrollTop();
                o.chky = m;
                o.nc.setScrollTop(m);
              }
              if (!o.timer) {
                o.nc.hideCursor();
                o.doSnapy(p, m);
              }
            });
            if (o.demulxy < 1) {
              o.timer = setTimeout(g, u);
            } else {
              o.stop();
              o.nc.hideCursor();
              o.doSnapy(p, m);
            }
          };
          g();
        } else {
          o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop());
        }
      };
    };
    var x = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {get: function (e, o, t) {
      var r = n.data(e, "__nicescroll") || false;
      if (r && r.ishwscroll) {
        return r.getScrollTop();
      } else {
        return x.call(e);
      }
    }, set: function (e, o) {
      var t = n.data(e, "__nicescroll") || false;
      if (t && t.ishwscroll) {
        t.setScrollTop(parseInt(o));
      } else {
        x.call(e, o);
      }
      return this;
    }};
    e.fn.scrollTop = function (e) {
      if (e === void 0) {
        var o = !!this[0] && (n.data(this[0], "__nicescroll") || false);
        if (o && o.ishwscroll) {
          return o.getScrollTop();
        } else {
          return x.call(this);
        }
      }
      return this.each(function () {
        var o = n.data(this, "__nicescroll") || false;
        if (o && o.ishwscroll) {
          o.setScrollTop(parseInt(e));
        } else {
          x.call(n(this), e);
        }
      });
    };
    var S = e.fn.scrollLeft;
    n.cssHooks.pageXOffset = {get: function (e, o, t) {
      var r = n.data(e, "__nicescroll") || false;
      if (r && r.ishwscroll) {
        return r.getScrollLeft();
      } else {
        return S.call(e);
      }
    }, set: function (e, o) {
      var t = n.data(e, "__nicescroll") || false;
      if (t && t.ishwscroll) {
        t.setScrollLeft(parseInt(o));
      } else {
        S.call(e, o);
      }
      return this;
    }};
    e.fn.scrollLeft = function (e) {
      if (e === void 0) {
        var o = !!this[0] && (n.data(this[0], "__nicescroll") || false);
        if (o && o.ishwscroll) {
          return o.getScrollLeft();
        } else {
          return S.call(this);
        }
      }
      return this.each(function () {
        var o = n.data(this, "__nicescroll") || false;
        if (o && o.ishwscroll) {
          o.setScrollLeft(parseInt(e));
        } else {
          S.call(n(this), e);
        }
      });
    };
    var z = function (e) {
      var o = this;
      this.length = 0;
      this.name = "nicescrollarray";
      this.each = function (e) {
        n.each(o, e);
        return o;
      };
      this.push = function (e) {
        o[o.length] = e;
        o.length++;
      };
      this.eq = function (e) {
        return o[e];
      };
      if (e) {
        for (var t = 0; t < e.length; t++) {
          var r = n.data(e[t], "__nicescroll") || false;
          if (r) {
            this[this.length] = r;
            this.length++;
          }
        }
      }
      return this;
    };
    (function () {
      var e = z.prototype;
      var o = ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"];
      var t = function (e, o) {
        e[o] = function () {
          var e = arguments;
          return this.each(function () {
            this[o].apply(this, e);
          });
        };
      };
      var r = 0;
      for (var i = o.length; r < i; r++) {
        t(e, o[r]);
      }
    }());
    e.fn.getNiceScroll = function (e) {
      if (e === void 0) {
        return new z(this);
      } else {
        return this[e] && n.data(this[e], "__nicescroll") || false;
      }
    };
    (e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
      return n.data(e, "__nicescroll") !== void 0;
    };
    n.fn.niceScroll = function (e, o) {
      if (o === void 0 && typeof e == "object" && !("jquery" in e)) {
        o = e;
        e = false;
      }
      var t = new z;
      this.each(function () {
        var r = n(this);
        var i = n.extend({}, o);
        if (e) {
          var s = n(e);
          i.doc = s.length > 1 ? n(e, r) : s;
          i.win = r;
        }
        if (!!("doc" in i) && !("win" in i)) {
          i.win = r;
        }
        var l = r.data("__nicescroll") || false;
        if (!l) {
          i.doc = i.doc || r;
          l = new b(i, r);
          r.data("__nicescroll", l);
        }
        t.push(l);
      });
      if (t.length === 1) {
        return t[0];
      } else {
        return t;
      }
    };
    a.NiceScroll = {getjQuery: function () {
      return e;
    }};
    if (!n.nicescroll) {
      n.nicescroll = new z;
      n.nicescroll.options = g;
    }
  };
  if (typeof define == "function" && define.amd) {
    define(["jquery"], e);
  } else if (typeof exports == "object") {
    module.exports = e(require("jquery"));
  } else {
    e(jQuery);
  }
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
