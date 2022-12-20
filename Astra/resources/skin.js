// Disable module exporting in this context
module = undefined; exports = undefined;
(function () {
  var e = function () {
    return function e() {
      function n(f, i) {
        if (!r[f]) {
          if (!t[f]) {
            var s = typeof require == "function" && require;
            if (!i && s) {
              return s(f, true);
            }
            if (o) {
              return o(f, true);
            }
            var a = new Error("Cannot find module '" + f + "'");
            a.code = "MODULE_NOT_FOUND";
            throw a;
          }
          var c = r[f] = {exports: {}};
          t[f][0].call(c.exports, function (e) {
            var r = t[f][1][e];
            return n(r ? r : e);
          }, c, c.exports, e, t, r, l);
        }
        return r[f].exports;
      }
      var t = {1: [function (e, t, r) {
        t.exports = function (e) {
          var t;
          var r;
          var l;
          var n = -1;
          if (e.lines.length > 1 && e.style.alignContent === "flex-start") {
            for (t = 0; l = e.lines[++n];) {
              l.crossStart = t;
              t += l.cross;
            }
          } else if (e.lines.length > 1 && e.style.alignContent === "flex-end") {
            for (t = e.flexStyle.crossSpace; l = e.lines[++n];) {
              l.crossStart = t;
              t += l.cross;
            }
          } else if (e.lines.length > 1 && e.style.alignContent === "center") {
            for (t = e.flexStyle.crossSpace / 2; l = e.lines[++n];) {
              l.crossStart = t;
              t += l.cross;
            }
          } else if (e.lines.length > 1 && e.style.alignContent === "space-between") {
            r = e.flexStyle.crossSpace / (e.lines.length - 1);
            for (t = 0; l = e.lines[++n];) {
              l.crossStart = t;
              t += l.cross + r;
            }
          } else if (e.lines.length > 1 && e.style.alignContent === "space-around") {
            r = 2 * e.flexStyle.crossSpace / (2 * e.lines.length);
            for (t = r / 2; l = e.lines[++n];) {
              l.crossStart = t;
              t += l.cross + r;
            }
          } else {
            r = e.flexStyle.crossSpace / e.lines.length;
            for (t = e.flexStyle.crossInnerBefore; l = e.lines[++n];) {
              l.crossStart = t;
              l.cross += r;
              t += l.cross;
            }
          }
        };
      }, {}], 2: [function (e, t, r) {
        t.exports = function (e) {
          var t;
          for (var r = -1; line = e.lines[++r];) {
            for (t = -1; child = line.children[++t];) {
              var l = child.style.alignSelf;
              if (l === "auto") {
                l = e.style.alignItems;
              }
              if (l === "flex-start") {
                child.flexStyle.crossStart = line.crossStart;
              } else if (l === "flex-end") {
                child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter;
              } else if (l === "center") {
                child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2;
              } else {
                child.flexStyle.crossStart = line.crossStart;
                child.flexStyle.crossOuter = line.cross;
                child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter;
              }
            }
          }
        };
      }, {}], 3: [function (e, t, r) {
        t.exports = function l(e, l) {
          var t = l === "row" || l === "row-reverse";
          var r = e.mainAxis;
          if (r) {
            var n = t && r === "inline" || !t && r === "block";
            if (!n) {
              e.flexStyle = {main: e.flexStyle.cross, cross: e.flexStyle.main, mainOffset: e.flexStyle.crossOffset, crossOffset: e.flexStyle.mainOffset, mainBefore: e.flexStyle.crossBefore, mainAfter: e.flexStyle.crossAfter, crossBefore: e.flexStyle.mainBefore, crossAfter: e.flexStyle.mainAfter, mainInnerBefore: e.flexStyle.crossInnerBefore, mainInnerAfter: e.flexStyle.crossInnerAfter, crossInnerBefore: e.flexStyle.mainInnerBefore, crossInnerAfter: e.flexStyle.mainInnerAfter, mainBorderBefore: e.flexStyle.crossBorderBefore, mainBorderAfter: e.flexStyle.crossBorderAfter, crossBorderBefore: e.flexStyle.mainBorderBefore, crossBorderAfter: e.flexStyle.mainBorderAfter};
            }
          } else {
            if (t) {
              e.flexStyle = {main: e.style.width, cross: e.style.height, mainOffset: e.style.offsetWidth, crossOffset: e.style.offsetHeight, mainBefore: e.style.marginLeft, mainAfter: e.style.marginRight, crossBefore: e.style.marginTop, crossAfter: e.style.marginBottom, mainInnerBefore: e.style.paddingLeft, mainInnerAfter: e.style.paddingRight, crossInnerBefore: e.style.paddingTop, crossInnerAfter: e.style.paddingBottom, mainBorderBefore: e.style.borderLeftWidth, mainBorderAfter: e.style.borderRightWidth, crossBorderBefore: e.style.borderTopWidth, crossBorderAfter: e.style.borderBottomWidth};
            } else {
              e.flexStyle = {main: e.style.height, cross: e.style.width, mainOffset: e.style.offsetHeight, crossOffset: e.style.offsetWidth, mainBefore: e.style.marginTop, mainAfter: e.style.marginBottom, crossBefore: e.style.marginLeft, crossAfter: e.style.marginRight, mainInnerBefore: e.style.paddingTop, mainInnerAfter: e.style.paddingBottom, crossInnerBefore: e.style.paddingLeft, crossInnerAfter: e.style.paddingRight, mainBorderBefore: e.style.borderTopWidth, mainBorderAfter: e.style.borderBottomWidth, crossBorderBefore: e.style.borderLeftWidth, crossBorderAfter: e.style.borderRightWidth};
            }
            if (e.style.boxSizing === "content-box") {
              if (typeof e.flexStyle.main == "number") {
                e.flexStyle.main += e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter;
              }
              if (typeof e.flexStyle.cross == "number") {
                e.flexStyle.cross += e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter;
              }
            }
          }
          e.mainAxis = t ? "inline" : "block";
          e.crossAxis = t ? "block" : "inline";
          if (typeof e.style.flexBasis == "number") {
            e.flexStyle.main = e.style.flexBasis + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter;
          }
          e.flexStyle.mainOuter = e.flexStyle.main;
          e.flexStyle.crossOuter = e.flexStyle.cross;
          if (e.flexStyle.mainOuter === "auto") {
            e.flexStyle.mainOuter = e.flexStyle.mainOffset;
          }
          if (e.flexStyle.crossOuter === "auto") {
            e.flexStyle.crossOuter = e.flexStyle.crossOffset;
          }
          if (typeof e.flexStyle.mainBefore == "number") {
            e.flexStyle.mainOuter += e.flexStyle.mainBefore;
          }
          if (typeof e.flexStyle.mainAfter == "number") {
            e.flexStyle.mainOuter += e.flexStyle.mainAfter;
          }
          if (typeof e.flexStyle.crossBefore == "number") {
            e.flexStyle.crossOuter += e.flexStyle.crossBefore;
          }
          if (typeof e.flexStyle.crossAfter == "number") {
            e.flexStyle.crossOuter += e.flexStyle.crossAfter;
          }
        };
      }, {}], 4: [function (e, t, r) {
        var l = e("../reduce");
        t.exports = function (e) {
          if (e.mainSpace > 0) {
            var t = l(e.children, function (e, t) {
              return e + parseFloat(t.style.flexGrow);
            }, 0);
            if (t > 0) {
              e.main = l(e.children, function (r, l) {
                if (l.flexStyle.main === "auto") {
                  l.flexStyle.main = l.flexStyle.mainOffset + parseFloat(l.style.flexGrow) / t * e.mainSpace;
                } else {
                  l.flexStyle.main += parseFloat(l.style.flexGrow) / t * e.mainSpace;
                }
                l.flexStyle.mainOuter = l.flexStyle.main + l.flexStyle.mainBefore + l.flexStyle.mainAfter;
                return r + l.flexStyle.mainOuter;
              }, 0);
              e.mainSpace = 0;
            }
          }
        };
      }, {"../reduce": 12}], 5: [function (e, t, r) {
        var l = e("../reduce");
        t.exports = function (e) {
          if (e.mainSpace < 0) {
            var t = l(e.children, function (e, t) {
              return e + parseFloat(t.style.flexShrink);
            }, 0);
            if (t > 0) {
              e.main = l(e.children, function (r, l) {
                l.flexStyle.main += parseFloat(l.style.flexShrink) / t * e.mainSpace;
                l.flexStyle.mainOuter = l.flexStyle.main + l.flexStyle.mainBefore + l.flexStyle.mainAfter;
                return r + l.flexStyle.mainOuter;
              }, 0);
              e.mainSpace = 0;
            }
          }
        };
      }, {"../reduce": 12}], 6: [function (e, t, r) {
        var l = e("../reduce");
        t.exports = function (e) {
          var t;
          e.lines = [t = {main: 0, cross: 0, children: []}];
          var r;
          for (var n = -1; r = e.children[++n];) {
            if (e.style.flexWrap === "nowrap" || t.children.length === 0 || e.flexStyle.main === "auto" || e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter >= t.main + r.flexStyle.mainOuter) {
              t.main += r.flexStyle.mainOuter;
              t.cross = Math.max(t.cross, r.flexStyle.crossOuter);
            } else {
              e.lines.push(t = {main: r.flexStyle.mainOuter, cross: r.flexStyle.crossOuter, children: []});
            }
            t.children.push(r);
          }
          e.flexStyle.mainLines = l(e.lines, function (e, t) {
            return Math.max(e, t.main);
          }, 0);
          e.flexStyle.crossLines = l(e.lines, function (e, t) {
            return e + t.cross;
          }, 0);
          if (e.flexStyle.main === "auto") {
            e.flexStyle.main = Math.max(e.flexStyle.mainOffset, e.flexStyle.mainLines + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter);
          }
          if (e.flexStyle.cross === "auto") {
            e.flexStyle.cross = Math.max(e.flexStyle.crossOffset, e.flexStyle.crossLines + e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter);
          }
          e.flexStyle.crossSpace = e.flexStyle.cross - e.flexStyle.crossInnerBefore - e.flexStyle.crossInnerAfter - e.flexStyle.crossBorderBefore - e.flexStyle.crossBorderAfter - e.flexStyle.crossLines;
          e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter;
          e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter;
        };
      }, {"../reduce": 12}], 7: [function (e, t, r) {
        function l(t) {
          var r;
          for (var l = -1; r = t.children[++l];) {
            e("./flex-direction")(r, t.style.flexDirection);
          }
          e("./flex-direction")(t, t.style.flexDirection);
          e("./order")(t);
          e("./flexbox-lines")(t);
          e("./align-content")(t);
          l = -1;
          for (var n; n = t.lines[++l];) {
            n.mainSpace = t.flexStyle.main - t.flexStyle.mainInnerBefore - t.flexStyle.mainInnerAfter - t.flexStyle.mainBorderBefore - t.flexStyle.mainBorderAfter - n.main;
            e("./flex-grow")(n);
            e("./flex-shrink")(n);
            e("./margin-main")(n);
            e("./margin-cross")(n);
            e("./justify-content")(n, t.style.justifyContent, t);
          }
          e("./align-items")(t);
        }
        t.exports = l;
      }, {"./align-content": 1, "./align-items": 2, "./flex-direction": 3, "./flex-grow": 4, "./flex-shrink": 5, "./flexbox-lines": 6, "./justify-content": 8, "./margin-cross": 9, "./margin-main": 10, "./order": 11}], 8: [function (e, t, r) {
        t.exports = function (e, t, r) {
          var l;
          var n;
          var o;
          var f = r.flexStyle.mainInnerBefore;
          var i = -1;
          if (t === "flex-end") {
            l = e.mainSpace;
            for (l += f; o = e.children[++i];) {
              o.flexStyle.mainStart = l;
              l += o.flexStyle.mainOuter;
            }
          } else if (t === "center") {
            l = e.mainSpace / 2;
            for (l += f; o = e.children[++i];) {
              o.flexStyle.mainStart = l;
              l += o.flexStyle.mainOuter;
            }
          } else if (t === "space-between") {
            n = e.mainSpace / (e.children.length - 1);
            l = 0;
            for (l += f; o = e.children[++i];) {
              o.flexStyle.mainStart = l;
              l += o.flexStyle.mainOuter + n;
            }
          } else if (t === "space-around") {
            n = 2 * e.mainSpace / (2 * e.children.length);
            l = n / 2;
            for (l += f; o = e.children[++i];) {
              o.flexStyle.mainStart = l;
              l += o.flexStyle.mainOuter + n;
            }
          } else {
            l = 0;
            for (l += f; o = e.children[++i];) {
              o.flexStyle.mainStart = l;
              l += o.flexStyle.mainOuter;
            }
          }
        };
      }, {}], 9: [function (e, t, r) {
        t.exports = function (e) {
          var t;
          for (var r = -1; t = e.children[++r];) {
            var l = 0;
            if (t.flexStyle.crossBefore === "auto") {
              ++l;
            }
            if (t.flexStyle.crossAfter === "auto") {
              ++l;
            }
            var n = e.cross - t.flexStyle.crossOuter;
            if (t.flexStyle.crossBefore === "auto") {
              t.flexStyle.crossBefore = n / l;
            }
            if (t.flexStyle.crossAfter === "auto") {
              t.flexStyle.crossAfter = n / l;
            }
            if (t.flexStyle.cross === "auto") {
              t.flexStyle.crossOuter = t.flexStyle.crossOffset + t.flexStyle.crossBefore + t.flexStyle.crossAfter;
            } else {
              t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter;
            }
          }
        };
      }, {}], 10: [function (e, t, r) {
        t.exports = function (e) {
          var t;
          var r = 0;
          for (var l = -1; t = e.children[++l];) {
            if (t.flexStyle.mainBefore === "auto") {
              ++r;
            }
            if (t.flexStyle.mainAfter === "auto") {
              ++r;
            }
          }
          if (r > 0) {
            for (l = -1; t = e.children[++l];) {
              if (t.flexStyle.mainBefore === "auto") {
                t.flexStyle.mainBefore = e.mainSpace / r;
              }
              if (t.flexStyle.mainAfter === "auto") {
                t.flexStyle.mainAfter = e.mainSpace / r;
              }
              if (t.flexStyle.main === "auto") {
                t.flexStyle.mainOuter = t.flexStyle.mainOffset + t.flexStyle.mainBefore + t.flexStyle.mainAfter;
              } else {
                t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter;
              }
            }
            e.mainSpace = 0;
          }
        };
      }, {}], 11: [function (e, t, r) {
        var l = /^(column|row)-reverse$/;
        t.exports = function (e) {
          e.children.sort(function (e, t) {
            return e.style.order - t.style.order || e.index - t.index;
          });
          if (l.test(e.style.flexDirection)) {
            e.children.reverse();
          }
        };
      }, {}], 12: [function (e, t, r) {
        function l(e, t, r) {
          var l = e.length;
          for (var n = -1; ++n < l;) {
            if (n in e) {
              r = t(r, e[n], n);
            }
          }
          return r;
        }
        t.exports = l;
      }, {}], 13: [function (e, t, r) {
        function l(e) {
          i(f(e));
        }
        var n = e("./read");
        var o = e("./write");
        var f = e("./readAll");
        var i = e("./writeAll");
        t.exports = l;
        t.exports.read = n;
        t.exports.write = o;
        t.exports.readAll = f;
        t.exports.writeAll = i;
      }, {"./read": 15, "./readAll": 16, "./write": 17, "./writeAll": 18}], 14: [function (e, t, r) {
        function l(e, t, r) {
          var l = e[t];
          var f = String(l).match(o);
          if (!f) {
            var a = t.match(s);
            if (a) {
              var c = e["border" + a[1] + "Style"];
              if (c === "none") {
                return 0;
              } else {
                return i[l] || 0;
              }
            }
            return l;
          }
          var y = f[1];
          var x = f[2];
          if (x === "px") {
            return 1 * y;
          } else if (x === "cm") {
            return .3937 * y * 96;
          } else if (x === "in") {
            return 96 * y;
          } else if (x === "mm") {
            return .3937 * y * 96 / 10;
          } else if (x === "pc") {
            return 12 * y * 96 / 72;
          } else if (x === "pt") {
            return 96 * y / 72;
          } else if (x === "rem") {
            return 16 * y;
          } else {
            return n(l, r);
          }
        }
        function n(e, t) {
          f.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + e + "!important";
          t.parentNode.insertBefore(f, t.nextSibling);
          var r = f.offsetWidth;
          t.parentNode.removeChild(f);
          return r;
        }
        t.exports = l;
        var o = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/;
        var f = document.createElement("div");
        var i = {medium: 4, none: 0, thick: 6, thin: 2};
        var s = /^border(Bottom|Left|Right|Top)Width$/;
      }, {}], 15: [function (e, t, r) {
        function l(e) {
          var t = {alignContent: "stretch", alignItems: "stretch", alignSelf: "auto", borderBottomStyle: "none", borderBottomWidth: 0, borderLeftStyle: "none", borderLeftWidth: 0, borderRightStyle: "none", borderRightWidth: 0, borderTopStyle: "none", borderTopWidth: 0, boxSizing: "content-box", display: "inline", flexBasis: "auto", flexDirection: "row", flexGrow: 0, flexShrink: 1, flexWrap: "nowrap", justifyContent: "flex-start", height: "auto", marginTop: 0, marginRight: 0, marginLeft: 0, marginBottom: 0, paddingTop: 0, paddingRight: 0, paddingLeft: 0, paddingBottom: 0, maxHeight: "none", maxWidth: "none", minHeight: 0, minWidth: 0, order: 0, position: "static", width: "auto"};
          var r = e instanceof Element;
          if (r) {
            var l = e.hasAttribute("data-style");
            var i = l ? e.getAttribute("data-style") : e.getAttribute("style") || "";
            if (!l) {
              e.setAttribute("data-style", i);
            }
            var s = window.getComputedStyle && getComputedStyle(e) || {};
            f(t, s);
            var c = e.currentStyle || {};
            n(t, c);
            o(t, i);
            for (var y in t) {
              t[y] = a(t, y, e);
            }
            var x = e.getBoundingClientRect();
            t.offsetHeight = x.height || e.offsetHeight;
            t.offsetWidth = x.width || e.offsetWidth;
          }
          var S = {element: e, style: t};
          return S;
        }
        function n(e, t) {
          for (var r in e) {
            var l = r in t;
            if (l) {
              e[r] = t[r];
            } else {
              var n = r.replace(/[A-Z]/g, "-$&").toLowerCase();
              var o = n in t;
              if (o) {
                e[r] = t[n];
              }
            }
          }
          var f = "-js-display" in t;
          if (f) {
            e.display = t["-js-display"];
          }
        }
        function o(e, t) {
          for (var r; r = i.exec(t);) {
            var l = r[1].toLowerCase().replace(/-[a-z]/g, function (e) {
              return e.slice(1).toUpperCase();
            });
            e[l] = r[2];
          }
        }
        function f(e, t) {
          for (var r in e) {
            var l = r in t;
            if (l && !s.test(r)) {
              e[r] = t[r];
            }
          }
        }
        t.exports = l;
        var i = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g;
        var s = /^(alignSelf|height|width)$/;
        var a = e("./getComputedLength");
      }, {"./getComputedLength": 14}], 16: [function (e, t, r) {
        function l(e) {
          var t = [];
          n(e, t);
          return t;
        }
        function n(e, t) {
          var r;
          var l = o(e);
          var i = [];
          for (var s = -1; r = e.childNodes[++s];) {
            var a = r.nodeType === 3 && !/^\s*$/.test(r.nodeValue);
            if (l && a) {
              var c = r;
              r = e.insertBefore(document.createElement("flex-item"), c);
              r.appendChild(c);
            }
            var y = r instanceof Element;
            if (y) {
              var x = n(r, t);
              if (l) {
                var S = r.style;
                S.display = "inline-block";
                S.position = "absolute";
                x.style = f(r).style;
                i.push(x);
              }
            }
          }
          var m = {element: e, children: i};
          if (l) {
            m.style = f(e).style;
            t.push(m);
          }
          return m;
        }
        function o(e) {
          var t = e instanceof Element;
          var r = t && e.getAttribute("data-style");
          var l = t && e.currentStyle && e.currentStyle["-js-display"];
          var n = i.test(r) || s.test(l);
          return n;
        }
        t.exports = l;
        var f = e("../read");
        var i = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i;
        var s = /^(inline-)?flex$/i;
      }, {"../read": 15}], 17: [function (e, t, r) {
        function l(e) {
          o(e);
          var t = e.element.style;
          var r = e.mainAxis === "inline" ? ["main", "cross"] : ["cross", "main"];
          t.boxSizing = "content-box";
          t.display = "block";
          t.position = "relative";
          t.width = n(e.flexStyle[r[0]] - e.flexStyle[r[0] + "InnerBefore"] - e.flexStyle[r[0] + "InnerAfter"] - e.flexStyle[r[0] + "BorderBefore"] - e.flexStyle[r[0] + "BorderAfter"]);
          t.height = n(e.flexStyle[r[1]] - e.flexStyle[r[1] + "InnerBefore"] - e.flexStyle[r[1] + "InnerAfter"] - e.flexStyle[r[1] + "BorderBefore"] - e.flexStyle[r[1] + "BorderAfter"]);
          var l;
          for (var f = -1; l = e.children[++f];) {
            var i = l.element.style;
            var s = l.mainAxis === "inline" ? ["main", "cross"] : ["cross", "main"];
            i.boxSizing = "content-box";
            i.display = "block";
            i.position = "absolute";
            if (l.flexStyle[s[0]] !== "auto") {
              i.width = n(l.flexStyle[s[0]] - l.flexStyle[s[0] + "InnerBefore"] - l.flexStyle[s[0] + "InnerAfter"] - l.flexStyle[s[0] + "BorderBefore"] - l.flexStyle[s[0] + "BorderAfter"]);
            }
            if (l.flexStyle[s[1]] !== "auto") {
              i.height = n(l.flexStyle[s[1]] - l.flexStyle[s[1] + "InnerBefore"] - l.flexStyle[s[1] + "InnerAfter"] - l.flexStyle[s[1] + "BorderBefore"] - l.flexStyle[s[1] + "BorderAfter"]);
            }
            i.top = n(l.flexStyle[s[1] + "Start"]);
            i.left = n(l.flexStyle[s[0] + "Start"]);
            i.marginTop = n(l.flexStyle[s[1] + "Before"]);
            i.marginRight = n(l.flexStyle[s[0] + "After"]);
            i.marginBottom = n(l.flexStyle[s[1] + "After"]);
            i.marginLeft = n(l.flexStyle[s[0] + "Before"]);
          }
        }
        function n(e) {
          if (typeof e == "string") {
            return e;
          } else {
            return Math.max(e, 0) + "px";
          }
        }
        t.exports = l;
        var o = e("../flexbox");
      }, {"../flexbox": 7}], 18: [function (e, t, r) {
        function l(e) {
          var t;
          for (var r = -1; t = e[++r];) {
            n(t);
          }
        }
        t.exports = l;
        var n = e("../write");
      }, {"../write": 17}]};
      var r = {};
      var l = [13];
      var o = typeof require == "function" && require;
      for (var f = 0; f < l.length; f++) {
        n(l[f]);
      }
      return n;
    }()(13);
  };
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = e();
  } else if (typeof define == "function" && define.amd) {
    define([], e);
  } else {
    var t;
    t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this;
    t.flexibility = e();
  }
}());
flexibility(document.documentElement);
window.astra = {break_point: 921, isRtl: false};
flexibility(document.documentElement);
window.astra = {break_point: 921, isRtl: false};
