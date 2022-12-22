// Disable module exporting in this context
module = undefined; exports = undefined;
window.astra = {break_point: 921, isRtl: false};
window.astra = {break_point: 921, isRtl: false};
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
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  var astraGetParents = function (elem, selector) {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s);
        var i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
    }
    var parents = [];
    return parents;
  };
  var getParents = function (elem, selector) {
    console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead.");
    astraGetParents(elem, selector);
  };
  var astraToggleClass = function (el, className) {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  };
  var toggleClass = function (el, className) {
    console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead.");
    astraToggleClass(el, className);
  };
  (function () {
    function CustomEvent(event, params) {
      params = params || {bubbles: false, cancelable: false, detail: undefined};
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    if (typeof window.CustomEvent === "function") {
      return false;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }());
  var astraTriggerEvent = function astraTriggerEvent(el, typeArg) {
    var customEventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var event = new CustomEvent(typeArg, customEventInit);
    el.dispatchEvent(event);
  };
  (function () {
    function updateHeaderType(e) {
      mobileHeaderType = e.detail.type;
      var popupTrigger = document.querySelectorAll(".menu-toggle");
      if (mobileHeaderType === "dropdown") {
        document.getElementById("ast-mobile-popup").classList.remove("active", "show");
        updateTrigger("updateHeader");
      }
      if (mobileHeaderType === "off-canvas") {
        for (var item = 0; item < popupTrigger.length; item++) {
          if (undefined !== popupTrigger[item] && popupTrigger[item].classList.contains("toggled")) {
            popupTrigger[item].triggerEvent("click");
          }
        }
      }
      init(mobileHeaderType);
    }
    function updateTrigger(currentElement) {
      mobileHeader = main_header_masthead.querySelector("#ast-mobile-header");
      var parent_li_sibling = "";
      if (undefined !== mobileHeader && mobileHeader !== null && mobileHeader.dataset.type === "dropdown" && currentElement !== "updateHeader") {
        return;
      }
      if (undefined !== currentElement && currentElement !== "updateHeader") {
        parent_li_sibling = currentElement.closest(".ast-mobile-popup-inner").querySelectorAll(".menu-item-has-children");
      } else {
        var popup = document.querySelector("#ast-mobile-popup");
        parent_li_sibling = popup.querySelectorAll(".menu-item-has-children");
      }
      for (var j = 0; j < parent_li_sibling.length; j++) {
        parent_li_sibling[j].classList.remove("ast-submenu-expanded");
        var all_sub_menu = parent_li_sibling[j].querySelectorAll(".sub-menu");
        for (var k = 0; k < all_sub_menu.length; k++) {
          all_sub_menu[k].style.display = "none";
        }
      }
      var popupTrigger = document.querySelectorAll(".menu-toggle");
      document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open");
      document.documentElement.classList.remove("ast-off-canvas-active");
      for (var item = 0; item < popupTrigger.length; item++) {
        popupTrigger[item].classList.remove("toggled");
        popupTrigger[item].style.display = "flex";
      }
    }
    function init(mobileHeaderType) {
      var popupTriggerMobile = document.querySelectorAll("#ast-mobile-header .menu-toggle");
      var popupTriggerDesktop = document.querySelectorAll("#ast-desktop-header .menu-toggle");
      if (undefined === mobileHeaderType && main_header_masthead !== null) {
        mobileHeader = main_header_masthead.querySelector("#ast-mobile-header");
        if (mobileHeader) {
          mobileHeaderType = mobileHeader.dataset.type;
        } else {
          var desktopHeader = main_header_masthead.querySelector("#ast-desktop-header");
          if (desktopHeader) {
            mobileHeaderType = desktopHeader.dataset.toggleType;
          } else {
            return;
          }
        }
      }
      if (mobileHeaderType === "off-canvas") {
        var popupClose = document.getElementById("menu-toggle-close");
        var popupInner = document.querySelector(".ast-mobile-popup-inner");
        var popupLinks = popupInner.getElementsByTagName("a");
        for (var item = 0; item < popupTriggerMobile.length; item++) {
          popupTriggerMobile[item].removeEventListener("click", astraNavMenuToggle, false);
          popupTriggerMobile[item].addEventListener("click", popupTriggerClick, false);
          popupTriggerMobile[item].trigger_type = "mobile";
        }
        for (var item = 0; item < popupTriggerDesktop.length; item++) {
          popupTriggerDesktop[item].removeEventListener("click", astraNavMenuToggle, false);
          popupTriggerDesktop[item].addEventListener("click", popupTriggerClick, false);
          popupTriggerDesktop[item].trigger_type = "desktop";
        }
        popupClose.addEventListener("click", function (e) {
          document.getElementById("ast-mobile-popup").classList.remove("active", "show");
          updateTrigger(this);
        });
        document.addEventListener("keyup", function (event) {
          if (event.keyCode === 27) {
            event.preventDefault();
            document.getElementById("ast-mobile-popup").classList.remove("active", "show");
            updateTrigger();
          }
        });
        document.addEventListener("click", function (event) {
          var target = event.target;
          var modal = document.querySelector(".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay");
          if (target === modal) {
            document.getElementById("ast-mobile-popup").classList.remove("active", "show");
            updateTrigger();
          }
        });
        link = 0;
        for (len = popupLinks.length; link < len; link++) {
          if (popupLinks[link].getAttribute("href") !== null && popupLinks[link].getAttribute("href") !== "#") {
            popupLinks[link].addEventListener("click", triggerToggleClose, true);
            popupLinks[link].headerType = "off-canvas";
          }
        }
        AstraToggleSetup();
      } else if (mobileHeaderType === "dropdown") {
        var mobileDropdownContent = document.querySelector(".ast-mobile-header-content");
        var desktopDropdownContent = document.querySelector(".ast-desktop-header-content");
        var mobileLinks = mobileDropdownContent.getElementsByTagName("a");
        var desktopLinks = desktopDropdownContent.getElementsByTagName("a");
        link = 0;
        for (len = mobileLinks.length; link < len; link++) {
          if (mobileLinks[link].getAttribute("href") !== null && mobileLinks[link].getAttribute("href") !== "#") {
            mobileLinks[link].addEventListener("click", triggerToggleClose, true);
            mobileLinks[link].headerType = "dropdown";
          }
        }
        link = 0;
        for (len = desktopLinks.length; link < len; link++) {
          desktopLinks[link].addEventListener("click", triggerToggleClose, true);
          desktopLinks[link].headerType = "dropdown";
        }
        for (var item = 0; item < popupTriggerMobile.length; item++) {
          popupTriggerMobile[item].removeEventListener("click", popupTriggerClick, false);
          popupTriggerMobile[item].addEventListener("click", astraNavMenuToggle, false);
          popupTriggerMobile[item].trigger_type = "mobile";
        }
        for (var item = 0; item < popupTriggerDesktop.length; item++) {
          popupTriggerDesktop[item].removeEventListener("click", popupTriggerClick, false);
          popupTriggerDesktop[item].addEventListener("click", astraNavMenuToggle, false);
          popupTriggerDesktop[item].trigger_type = "desktop";
        }
        AstraToggleSetup();
      }
      accountPopupTrigger();
    }
    function triggerToggleClose(event) {
      var headerType = event.currentTarget.headerType;
      switch (headerType) {
        case "dropdown":
          var popupTrigger = document.querySelectorAll(".menu-toggle.toggled");
          for (var item = 0; item < popupTrigger.length; item++) {
            popupTrigger[item].triggerEvent("click");
          }
          break;
        case "off-canvas":
          var popupClose = document.getElementById("menu-toggle-close");
          popupClose.triggerEvent("click");
          break;
        default:
          break;
      }
    }
    function AstraHandleResizeEvent() {
      var menu_offcanvas_close = document.getElementById("menu-toggle-close");
      var menu_dropdown_close = document.querySelector(".menu-toggle.toggled");
      var desktop_header_content = document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content");
      var elementor_editor = document.querySelector(".elementor-editor-active");
      if (desktop_header_content) {
        desktop_header_content.style.display = "none";
      }
      if (window.innerWidth !== mobile_width) {
        if (menu_dropdown_close && elementor_editor === null) {
          menu_dropdown_close.triggerEvent("click");
        }
        document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open");
        if (menu_offcanvas_close && elementor_editor == null) {
          menu_offcanvas_close.triggerEvent("click");
        }
      }
      updateHeaderBreakPoint();
      if (mobileHeaderType === "dropdown") {
        AstraToggleSetup();
      }
    }
    function navigation_accessibility(container) {
      if (!container) {
        return;
      }
      var button = container.getElementsByTagName("button")[0];
      if (typeof button === "undefined") {
        button = container.getElementsByTagName("a")[0];
        if (typeof button === "undefined") {
          return;
        }
      }
      var menu = container.getElementsByTagName("ul")[0];
      if (typeof menu === "undefined") {
        button.style.display = "none";
        return;
      }
      menu.setAttribute("aria-expanded", "false");
      if (menu.className.indexOf("nav-menu") === -1) {
        menu.className += " nav-menu";
      }
      button.onclick = function () {
        if (container.className.indexOf("toggled") === -1) {
          container.className += " toggled";
          button.setAttribute("aria-expanded", "true");
          menu.setAttribute("aria-expanded", "true");
        } else {
          container.className = container.className.replace(" toggled", "");
          button.setAttribute("aria-expanded", "false");
          menu.setAttribute("aria-expanded", "false");
        }
      };
      var links = menu.getElementsByTagName("a");
      var subMenus = menu.getElementsByTagName("ul");
      var i = 0;
      for (var len = subMenus.length; i < len; i++) {
        subMenus[i].parentNode.setAttribute("aria-haspopup", "true");
      }
      i = 0;
      for (len = links.length; i < len; i++) {
        links[i].addEventListener("focus", toggleFocus, true);
        links[i].addEventListener("blur", toggleFocus, true);
        links[i].addEventListener("click", toggleClose, true);
      }
    }
    function toggleClose() {
      var self = this || "";
      var hash = "#";
      if (self && !self.classList.contains("astra-search-icon") && self.closest(".ast-builder-menu") === null) {
        var link = new String(self);
        if (link.indexOf(hash) !== -1) {
          var link_parent = self.parentNode;
          if (body.classList.contains("ast-header-break-point")) {
            if (!document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") || !link_parent.classList.contains("menu-item-has-children")) {
              var builder_header_menu_toggle = document.querySelector(".main-header-menu-toggle");
              builder_header_menu_toggle.classList.remove("toggled");
              var main_header_bar_navigation = document.querySelector(".main-header-bar-navigation");
              main_header_bar_navigation.classList.remove("toggle-on");
              main_header_bar_navigation.style.display = "none";
              astraTriggerEvent(document.querySelector("body"), "astraMenuHashLinkClicked");
            }
          } else {
            while (self.className.indexOf("nav-menu") === -1) {
              if (self.tagName.toLowerCase() === "li") {
                if (self.className.indexOf("focus") !== -1) {
                  self.className = self.className.replace(" focus", "");
                }
              }
              self = self.parentElement;
            }
          }
        }
      }
    }
    function toggleFocus() {
      var self = this;
      while (self.className.indexOf("navigation-accessibility") === -1) {
        if (self.tagName.toLowerCase() === "li") {
          self.classList.toggle("focus");
        }
        self = self.parentElement;
      }
    }
    var menu_toggle_all = document.querySelectorAll("#masthead .main-header-menu-toggle");
    var main_header_masthead = document.getElementById("masthead");
    var menu_click_listeners = {};
    var mobileHeaderType = "";
    var body = document.body;
    var mobileHeader = "";
    if (undefined !== main_header_masthead && main_header_masthead !== null) {
      mobileHeader = main_header_masthead.querySelector("#ast-mobile-header");
    }
    if (mobileHeader !== "" && mobileHeader !== null) {
      mobileHeaderType = mobileHeader.dataset.type;
    }
    document.addEventListener("astMobileHeaderTypeChange", updateHeaderType, false);
    popupTriggerClick = function (event) {
      var triggerType = event.currentTarget.trigger_type;
      var popupWrap = document.getElementById("ast-mobile-popup");
      if (!body.classList.contains("ast-popup-nav-open")) {
        body.classList.add("ast-popup-nav-open");
      }
      if (!body.classList.contains("ast-main-header-nav-open")) {
        body.classList.add("ast-main-header-nav-open");
      }
      if (!document.documentElement.classList.contains("ast-off-canvas-active")) {
        document.documentElement.classList.add("ast-off-canvas-active");
      }
      if (triggerType === "desktop") {
        popupWrap.querySelector(".ast-mobile-popup-content").style.display = "none";
        popupWrap.querySelector(".ast-desktop-popup-content").style.display = "block";
      }
      if (triggerType === "mobile") {
        popupWrap.querySelector(".ast-desktop-popup-content").style.display = "none";
        popupWrap.querySelector(".ast-mobile-popup-content").style.display = "block";
      }
      this.style.display = "none";
      popupWrap.classList.add("active", "show");
    };
    window.addEventListener("load", function () {
      init();
    });
    document.addEventListener("astLayoutWidthChanged", function () {
      init();
    });
    document.addEventListener("astPartialContentRendered", function () {
      menu_toggle_all = document.querySelectorAll(".main-header-menu-toggle");
      body.classList.remove("ast-main-header-nav-open");
      document.addEventListener("astMobileHeaderTypeChange", updateHeaderType, false);
      init();
      accountPopupTrigger();
    });
    var mobile_width = window.innerWidth;
    window.addEventListener("resize", function () {
      if (document.activeElement.tagName !== "INPUT") {
        AstraHandleResizeEvent();
      }
    });
    document.addEventListener("DOMContentLoaded", function () {
      AstraToggleSetup();
      var container = document.querySelectorAll(".navigation-accessibility");
      for (var count = 0; count <= container.length - 1; count++) {
        if (container[count]) {
          navigation_accessibility(container[count]);
        }
      }
    });
    var get_window_width = function () {
      return document.documentElement.clientWidth;
    };
    var updateHeaderBreakPoint = function () {
      var originalOverflow = body.style.overflow;
      body.style.overflow = "hidden";
      var ww = get_window_width();
      body.style.overflow = originalOverflow;
      var break_point = astra.break_point;
      if (ww > break_point || ww === 0) {
        if (menu_toggle_all.length > 0) {
          for (var i = 0; i < menu_toggle_all.length; i++) {
            if (menu_toggle_all[i] !== null) {
              menu_toggle_all[i].classList.remove("toggled");
            }
          }
        }
        body.classList.remove("ast-header-break-point");
        body.classList.add("ast-desktop");
        astraTriggerEvent(body, "astra-header-responsive-enabled");
      } else {
        body.classList.add("ast-header-break-point");
        body.classList.remove("ast-desktop");
        astraTriggerEvent(body, "astra-header-responsive-disabled");
      }
    };
    var accountPopupTrigger = function () {
      var header_account_trigger = document.querySelectorAll(".ast-account-action-login")[0];
      if (undefined !== header_account_trigger) {
        var header_account__close_trigger = document.getElementById("ast-hb-login-close");
        var login_popup = document.getElementById("ast-hb-account-login-wrap");
        header_account_trigger.onclick = function (event) {
          event.preventDefault();
          event.stopPropagation();
          if (!login_popup.classList.contains("show")) {
            login_popup.classList.add("show");
          }
        };
        header_account__close_trigger.onclick = function (event) {
          event.preventDefault();
          login_popup.classList.remove("show");
        };
      }
    };
    updateHeaderBreakPoint();
    AstraToggleSubMenu = function (event) {
      event.preventDefault();
      var parent_li = this.parentNode;
      if (parent_li.classList.contains("ast-submenu-expanded") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")) {
        if (!this.classList.contains("ast-menu-toggle")) {
          var link = parent_li.querySelector("a").getAttribute("href");
          if (link !== "" && link !== "#") {
            window.location = link;
          }
        }
      }
      var parent_li_child = parent_li.querySelectorAll(".menu-item-has-children");
      for (var j = 0; j < parent_li_child.length; j++) {
        parent_li_child[j].classList.remove("ast-submenu-expanded");
        var parent_li_child_sub_menu = parent_li_child[j].querySelector(".sub-menu, .children");
        if (parent_li_child_sub_menu !== null) {
          parent_li_child_sub_menu.style.display = "none";
        }
      }
      var parent_li_sibling = parent_li.parentNode.querySelectorAll(".menu-item-has-children");
      for (var j = 0; j < parent_li_sibling.length; j++) {
        if (parent_li_sibling[j] != parent_li) {
          parent_li_sibling[j].classList.remove("ast-submenu-expanded");
          var all_sub_menu = parent_li_sibling[j].querySelectorAll(".sub-menu");
          for (var k = 0; k < all_sub_menu.length; k++) {
            all_sub_menu[k].style.display = "none";
          }
        }
      }
      if (parent_li.classList.contains("menu-item-has-children")) {
        astraToggleClass(parent_li, "ast-submenu-expanded");
        if (parent_li.classList.contains("ast-submenu-expanded")) {
          parent_li.querySelector(".sub-menu").style.display = "block";
        } else {
          parent_li.querySelector(".sub-menu").style.display = "none";
        }
      }
    };
    AstraToggleSetup = function () {
      if (typeof astraAddon == "undefined") {
        if (mobileHeaderType === "off-canvas" || mobileHeaderType === "full-width") {
          var __main_header_all = document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header");
          var menu_toggle_all = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle");
        } else {
          var __main_header_all = document.querySelectorAll("#ast-mobile-header");
          var menu_toggle_all = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle");
        }
        if (menu_toggle_all.length > 0) {
          for (var i = 0; i < menu_toggle_all.length; i++) {
            menu_toggle_all[i].setAttribute("data-index", i);
            if (!menu_click_listeners[i]) {
              menu_click_listeners[i] = menu_toggle_all[i];
              menu_toggle_all[i].addEventListener("click", astraNavMenuToggle, false);
            }
            if (typeof __main_header_all[i] !== "undefined") {
              for (var mainHeaderCount = 0; mainHeaderCount < __main_header_all.length; mainHeaderCount++) {
                if (document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")) {
                  var astra_menu_toggle = __main_header_all[mainHeaderCount].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle");
                } else {
                  var astra_menu_toggle = __main_header_all[mainHeaderCount].querySelectorAll("ul.main-header-menu .ast-menu-toggle");
                }
                if (astra_menu_toggle.length > 0) {
                  for (var j = 0; j < astra_menu_toggle.length; j++) {
                    astra_menu_toggle[j].addEventListener("click", AstraToggleSubMenu, false);
                  }
                }
              }
            }
          }
        }
      } else {
        astraToggleSetupPro(mobileHeaderType, body, menu_click_listeners);
      }
    };
    astraNavMenuToggle = function (event) {
      if (typeof astraAddon == "undefined") {
        event.preventDefault();
        var __main_header_all = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation");
        menu_toggle_all = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle");
        var event_index = "0";
        if (this.closest("#ast-fixed-header") !== null) {
          __main_header_all = document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation");
          menu_toggle_all = document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle");
          event_index = "0";
        }
        if (typeof __main_header_all[event_index] === "undefined") {
          return false;
        }
        var menuHasChildren = __main_header_all[event_index].querySelectorAll(".menu-item-has-children");
        for (var i = 0; i < menuHasChildren.length; i++) {
          menuHasChildren[i].classList.remove("ast-submenu-expanded");
          var menuHasChildrenSubMenu = menuHasChildren[i].querySelectorAll(".sub-menu");
          for (var j = 0; j < menuHasChildrenSubMenu.length; j++) {
            menuHasChildrenSubMenu[j].style.display = "none";
          }
        }
        var menu_class = this.getAttribute("class") || "";
        if (menu_class.indexOf("main-header-menu-toggle") !== -1) {
          astraToggleClass(__main_header_all[event_index], "toggle-on");
          astraToggleClass(menu_toggle_all[event_index], "toggled");
          if (__main_header_all[event_index].classList.contains("toggle-on")) {
            __main_header_all[event_index].style.display = "block";
            body.classList.add("ast-main-header-nav-open");
          } else {
            __main_header_all[event_index].style.display = "";
            body.classList.remove("ast-main-header-nav-open");
          }
        }
      } else {
        astraNavMenuTogglePro(event, body, mobileHeaderType, this);
      }
    };
    body.addEventListener("astra-header-responsive-enabled", function () {
      var __main_header_all = document.querySelectorAll(".main-header-bar-navigation");
      if (__main_header_all.length > 0) {
        for (var i = 0; i < __main_header_all.length; i++) {
          if (__main_header_all[i] != null) {
            __main_header_all[i].classList.remove("toggle-on");
            __main_header_all[i].style.display = "";
          }
          var sub_menu = __main_header_all[i].getElementsByClassName("sub-menu");
          for (var j = 0; j < sub_menu.length; j++) {
            sub_menu[j].style.display = "";
          }
          var child_menu = __main_header_all[i].getElementsByClassName("children");
          for (var k = 0; k < child_menu.length; k++) {
            child_menu[k].style.display = "";
          }
          var searchIcons = __main_header_all[i].getElementsByClassName("ast-search-menu-icon");
          for (var l = 0; l < searchIcons.length; l++) {
            searchIcons[l].classList.remove("ast-dropdown-active");
            searchIcons[l].style.display = "";
          }
        }
      }
    }, false);
    var get_browser = function () {
      var ua = navigator.userAgent;
      var tem;
      var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return;
      }
      if (M[1] === "Chrome") {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem != null) {
          return;
        }
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
      }
      if (M[0] === "Safari" && M[1] < 11) {
        bodyElement.classList.add("ast-safari-browser-less-than-11");
      }
    };
    get_browser();
    var SearchIcons = document.getElementsByClassName("astra-search-icon");
    for (var i = 0; i < SearchIcons.length; i++) {
      SearchIcons[i].onclick = function (event) {
        if (this.classList.contains("slide-search")) {
          event.preventDefault();
          var sibling = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon");
          if (!sibling.classList.contains("ast-dropdown-active")) {
            sibling.classList.add("ast-dropdown-active");
            sibling.querySelector(".search-field").setAttribute("autocomplete", "off");
            setTimeout(function () {
              sibling.querySelector(".search-field").focus();
            }, 200);
          } else {
            var searchTerm = sibling.querySelector(".search-field").value || "";
            if (searchTerm !== "") {
              sibling.querySelector(".search-form").submit();
            }
            sibling.classList.remove("ast-dropdown-active");
          }
        }
      };
    }
    body.onclick = function (event) {
      if (typeof event.target.classList !== "undefined") {
        if (!event.target.classList.contains("ast-search-menu-icon") && astraGetParents(event.target, ".ast-search-menu-icon").length === 0 && astraGetParents(event.target, ".ast-search-icon").length === 0) {
          var dropdownSearchWrap = document.getElementsByClassName("ast-search-menu-icon");
          for (var i = 0; i < dropdownSearchWrap.length; i++) {
            dropdownSearchWrap[i].classList.remove("ast-dropdown-active");
          }
        }
      }
    };
    if ("querySelector" in document && "addEventListener" in window) {
      body.addEventListener("mousedown", function () {
        body.classList.add("ast-mouse-clicked");
      });
      body.addEventListener("keydown", function () {
        body.classList.remove("ast-mouse-clicked");
      });
    }
  }());
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
flexibility(document.documentElement);
flexibility(document.documentElement);
