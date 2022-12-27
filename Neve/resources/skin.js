mw.requestIdleCallback( function () {
	// History URL
	$('[href="?action=history"]').prop('href', mw.util.getUrl( mw.config.get('wgTitle'), { action: 'history' } ) );
} );/** Polyfills for MediaWiki <= 1.40 */
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
window.NeveProperties = {ajaxurl: "", nonce: "", isRTL: false, isCustomize: false};
window.NeveProperties = {ajaxurl: "", nonce: "", isRTL: false, isCustomize: false};
(function () {
  "use strict";
  function f() {
    var e = document.querySelectorAll(".caret-wrap");
    t(e, e => {
      e.addEventListener("click", t => {
        t.preventDefault();
        t.stopPropagation();
        var n = e.parentNode.parentNode.querySelector(".sub-menu");
        o(e, p[0]);
        o(n, p[0]);
        S(document.querySelectorAll(".".concat(p[0])), p[0]);
      });
    });
  }
  function h() {
    var e = document.querySelectorAll(".nv-nav-search");
    var n = document.querySelectorAll(".menu-item-nav-search");
    var r = document.querySelectorAll(".close-responsive-search");
    t(n, e => {
      e.addEventListener("click", t => {
        t.preventDefault();
        t.stopPropagation();
        o(e, p[1]);
        setTimeout(() => {
          e.querySelector(".search-field").focus();
        }, 50);
        S(e, p[1]);
      });
    });
    t(e, e => {
      e.addEventListener("click", e => {
        e.stopPropagation();
      });
    });
    t(r, e => {
      e.addEventListener("click", e => {
        e.preventDefault();
        t(n, e => {
          a(e, p[1]);
        });
        var r = document.querySelector(".".concat(p[2]));
        if (r !== null) {
          r.parentNode.removeChild(r);
        }
      });
    });
  }
  function w() {
    var e = document.querySelector(".header--row .menu-item-nav-cart");
    if (e !== null) {
      var t = e.querySelector(".nv-nav-cart");
      if (t !== null) {
        t.style.left = e.getBoundingClientRect().left < 350 ? 0 : null;
      }
    }
  }
  function S(e, t) {
    var n = document.querySelector(".".concat(p[2]));
    if (n !== null) {
      n.parentNode.removeChild(n);
    }
    n = document.createElement("div");
    i(n, p[2]);
    var r = document.querySelector("header.header");
    r.parentNode.insertBefore(n, r);
    n.addEventListener("click", () => {
      a(e, t);
      n.parentNode.removeChild(n);
    });
  }
  function L() {
    window.HFG = new q;
    (() => {
      if (document.querySelector(".blog.nv-index-posts") === null) {
        return false;
      }
      s();
      c();
    })();
    y();
  }
  function N() {
    g();
  }
  var e;
  var t = function (e, t) {
    for (var n = 0; n < e.length; n++) {
      t(e[n]);
    }
  };
  var n = e => {
    var t = e.split("#");
    if (t.length > 1) {
      return t[0];
    } else {
      return e;
    }
  };
  var r = (e, t, n) => {
    var r = e instanceof NodeList ? e : [e];
    for (var o = 0; o < r.length; o++) {
      if (r[o]) {
        r[o].addEventListener(t, n);
      }
    }
  };
  var o = (e, t) => {
    l(e, t, "toggle");
  };
  var i = (e, t) => {
    l(e, t, "add");
  };
  var a = (e, t) => {
    l(e, t, "remove");
  };
  var l = (e, t, n) => {
    var r = t.split(" ");
    var o = e instanceof NodeList ? e : [e];
    for (var i = 0; i < o.length; i++) {
      if (o[i]) {
        o[i].classList[n].apply(o[i].classList, r);
      }
    }
  };
  var u = null;
  var d = 2;
  var s = () => {
    var {masonryStatus: e, masonryColumns: t, blogLayout: n} = NeveProperties;
    if (e === "enabled" && !(t < 2)) {
      if ((u = document.querySelector(".nv-index-posts .posts-wrapper")) !== null) {
        imagesLoaded(u, () => {
          window.nvMasonry = new Masonry(u, {itemSelector: "article.layout-".concat(n), columnWidth: "article.layout-".concat(n), percentPosition: true});
        });
      }
    }
  };
  var c = () => {
    if (NeveProperties.infScroll === "enabled" && document.querySelector(".nv-index-posts .posts-wrapper") !== null) {
      (function () {
        var e = document.querySelector(".infinite-scroll-trigger");
        var t = () => {
          if (parent.wp.customize) {
            parent.wp.customize.requestChangesetUpdate().then(() => {
              v();
            });
            return false;
          }
          v();
        };
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : .5;
        var r = new IntersectionObserver(r => {
          if (!(r[0].intersectionRatio <= n)) {
            t();
            var o = setInterval(() => {
              var n = e.getBoundingClientRect();
              var {top: r, left: i, right: a, bottom: l} = n;
              var {innerWidth: u, innerHeight: d} = window;
              if (r >= 0 && i >= 0 && a <= u && l <= d) {
                t();
              } else {
                clearInterval(o);
              }
            }, 750);
          }
        });
        r.observe(e);
      }());
    }
  };
  var v = () => {
    var e = document.querySelector(".infinite-scroll-trigger");
    if (e !== null) {
      document.querySelector(".nv-loader").style.display = "block";
      if (d > NeveProperties.maxPages) {
        e.parentNode.removeChild(e);
        document.querySelector(".nv-loader").style.display = "none";
        return;
      }
      var t;
      var n;
      var r;
      var o;
      var i = document.querySelector(".nv-index-posts .posts-wrapper");
      var a = NeveProperties.lang;
      var l = NeveProperties.endpoint + d;
      var u = m(a ? l + "/" + a : l);
      d++;
      t = u;
      n = e => {
        i.innerHTML += JSON.parse(e);
        if (NeveProperties.masonryStatus !== "enabled") {
          return false;
        }
        window.nvMasonry.reloadItems();
        window.nvMasonry.layout();
      };
      r = NeveProperties.query;
      (o = new XMLHttpRequest).onload = () => {
        if (o.readyState === 4 && o.status === 200) {
          n(o.response);
        }
      };
      o.onerror = () => {};
      o.open("POST", t, true);
      o.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
      o.send(r);
    }
  };
  var m = e => wp.customize === void 0 ? e : (e += "?customize_changeset_uuid=" + wp.customize.settings.changeset.uuid + "&customize_autosaved=on", typeof _wpCustomizeSettings == "undefined" ? e : e += "&customize_preview_nonce=" + _wpCustomizeSettings.nonce.preview);
  var p = ["dropdown-open", "active", "nav-clickaway-overlay"];
  var y = () => {
    var r;
    e = window.location.href;
    g();
    (function () {
      var r = document.querySelectorAll(".nv-nav-wrap a");
      if (r.length === 0) {
        return;
      }
      t(r, t => {
        t.addEventListener("click", t => {
          var r = t.target.getAttribute("href");
          if (r === null) {
            return false;
          }
          if (n(r) === n(e)) {
            window.HFG.toggleMenuSidebar(false);
          }
        });
      });
    }());
    f();
    h();
    w();
    if (/(Trident|MSIE|Edge)/.test(window.navigator.userAgent) === true) {
      r = document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu');
      t(r, e => {
        var t = e.parentNode;
        t.addEventListener("mouseenter", () => {
          i(e, p[0]);
        });
        t.addEventListener("mouseleave", () => {
          a(e, p[0]);
        });
      });
    }
    window.HFG.initSearch = function () {
      h();
      f();
    };
  };
  var g = () => {
    var {isRTL: e} = NeveProperties;
    var n = document.querySelectorAll(".sub-menu, .minimal .nv-nav-search");
    if (n.length !== 0) {
      var r = window.innerWidth;
      t(n, t => {
        var n = t.getBoundingClientRect();
        var o = n.left;
        if (o < 0) {
          t.style.right = e ? "-100%" : "auto";
          t.style.left = e ? "auto" : 0;
        }
        if (o + n.width >= r) {
          t.style.right = e ? 0 : "100%";
          t.style.left = "auto";
        }
      });
      if (typeof menuCalcEvent != "undefined") {
        window.dispatchEvent(menuCalcEvent);
      }
    }
  };
  window.addEventListener("resize", w);
  var b;
  var q = function () {
    this.options = {menuToggleDuration: 300};
    this.init();
  };
  q.prototype.init = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    if (e === false) {
      var t = document.querySelectorAll(".close-sidebar-panel .navbar-toggle");
      r(t, "click", () => {
        this.toggleMenuSidebar(false);
      });
    }
    var n = document.querySelectorAll(".menu-mobile-toggle");
    r(n, "click", () => {
      this.toggleMenuSidebar(true);
    });
    var o = document.querySelector(".header-menu-sidebar-overlay");
    r(o, "click", function () {
      this.toggleMenuSidebar(false);
    }.bind(this));
  };
  q.prototype.toggleMenuSidebar = function (e) {
    var t = document.querySelectorAll(".menu-mobile-toggle");
    a(document.body, "hiding-header-menu-sidebar");
    if (!NeveProperties.isCustomize && document.body.classList.contains("is-menu-sidebar") || e === false) {
      var n = document.querySelector(".nav-clickaway-overlay");
      if (n !== null) {
        n.parentNode.removeChild(n);
      }
      i(document.body, "hiding-header-menu-sidebar");
      a(document.body, "is-menu-sidebar");
      a(t, "is-active");
      setTimeout(function () {
        a(document.body, "hiding-header-menu-sidebar");
      }.bind(this), 1e3);
    } else {
      i(document.body, "is-menu-sidebar");
      i(t, "is-active");
    }
  };
  window.addEventListener("load", () => {
    L();
  });
  window.addEventListener("resize", () => {
    clearTimeout(b);
    b = setTimeout(N, 500);
  });
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
