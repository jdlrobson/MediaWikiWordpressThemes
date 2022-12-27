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
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      do {
        if (Element.prototype.matches.call(el, s)) {
          return el;
        }
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  function twentytwentyoneToggleAriaExpanded(el, withListeners) {
    if (el.getAttribute("aria-expanded") === "true") {
      el.setAttribute("aria-expanded", "false");
      if (withListeners) {
        document.removeEventListener("click", twentytwentyoneCollapseMenuOnClickOutside);
      }
    } else {
      el.setAttribute("aria-expanded", "true");
      twentytwentyoneSubmenuPosition(el.parentElement);
      if (withListeners) {
        document.addEventListener("click", twentytwentyoneCollapseMenuOnClickOutside);
      }
    }
  }
  function twentytwentyoneCollapseMenuOnClickOutside(event) {
    if (!document.getElementById("site-navigation").contains(event.target)) {
      document.getElementById("site-navigation").querySelectorAll(".sub-menu-toggle").forEach(function (button) {
        button.setAttribute("aria-expanded", "false");
      });
    }
  }
  function twentytwentyoneSubmenuPosition(li) {
    var subMenu = li.querySelector("ul.sub-menu");
    if (!subMenu) {
      return;
    }
    var rect = subMenu.getBoundingClientRect();
    var right = Math.round(rect.right);
    var left = Math.round(rect.left);
    var windowWidth = Math.round(window.innerWidth);
    if (right > windowWidth) {
      subMenu.classList.add("submenu-reposition-right");
    } else if (document.body.classList.contains("rtl") && left < 0) {
      subMenu.classList.add("submenu-reposition-left");
    }
  }
  function twentytwentyoneExpandSubMenu(el) {
    el.closest("nav").querySelectorAll(".sub-menu-toggle").forEach(function (button) {
      if (button !== el) {
        button.setAttribute("aria-expanded", "false");
      }
    });
    twentytwentyoneToggleAriaExpanded(el, true);
    el.parentNode.querySelectorAll("ul > li:last-child > a").forEach(function (linkEl) {
      linkEl.addEventListener("blur", function (event) {
        if (!el.parentNode.contains(event.relatedTarget)) {
          el.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
  (function () {
    var navMenu = function (id) {
      var wrapper = document.body;
      var mobileButton = document.getElementById(id + "-mobile-menu");
      var navMenuEl = document.getElementById("site-navigation");
      if (!navMenuEl) {
        return;
      }
      if (mobileButton) {
        mobileButton.onclick = function () {
          wrapper.classList.toggle(id + "-navigation-open");
          wrapper.classList.toggle("lock-scrolling");
          twentytwentyoneToggleAriaExpanded(mobileButton);
          mobileButton.focus();
        };
      }
      document.addEventListener("keydown", function (event) {
        if (!wrapper.classList.contains(id + "-navigation-open")) {
          return;
        }
        var modal = document.querySelector("." + id + "-navigation");
        var selectors = "input, a, button";
        var elements = modal.querySelectorAll(selectors);
        elements = Array.prototype.slice.call(elements);
        var tabKey = event.keyCode === 9;
        var shiftKey = event.shiftKey;
        var escKey = event.keyCode === 27;
        var activeEl = document.activeElement;
        var lastEl = elements[elements.length - 1];
        var firstEl = elements[0];
        if (escKey) {
          event.preventDefault();
          wrapper.classList.remove(id + "-navigation-open", "lock-scrolling");
          twentytwentyoneToggleAriaExpanded(mobileButton);
          mobileButton.focus();
        }
        if (!shiftKey && tabKey && lastEl === activeEl) {
          event.preventDefault();
          firstEl.focus();
        }
        if (shiftKey && tabKey && firstEl === activeEl) {
          event.preventDefault();
          lastEl.focus();
        }
        if (tabKey && firstEl === lastEl) {
          event.preventDefault();
        }
      });
      document.addEventListener("click", function (event) {
        if (event.target.hash && event.target.hash.includes("#")) {
          wrapper.classList.remove(id + "-navigation-open", "lock-scrolling");
          twentytwentyoneToggleAriaExpanded(mobileButton);
          setTimeout(function () {
            var anchor = document.getElementById(event.target.hash.slice(1));
            anchor.scrollIntoView();
          }, 550);
        }
      });
      navMenuEl.querySelectorAll(".menu-wrapper > .menu-item-has-children").forEach(function (li) {
        li.addEventListener("mouseenter", function () {
          this.querySelector(".sub-menu-toggle").setAttribute("aria-expanded", "true");
          twentytwentyoneSubmenuPosition(li);
        });
        li.addEventListener("mouseleave", function () {
          this.querySelector(".sub-menu-toggle").setAttribute("aria-expanded", "false");
        });
      });
    };
    window.addEventListener("load", function () {
      new navMenu("primary");
    });
  }());
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  function twentytwentyoneResponsiveEmbeds() {
    var proportion;
    var parentWidth;
    document.querySelectorAll("iframe").forEach(function (iframe) {
      if (iframe.width && iframe.height) {
        proportion = parseFloat(iframe.width) / parseFloat(iframe.height);
        parentWidth = parseFloat(window.getComputedStyle(iframe.parentElement, null).width.replace("px", ""));
        iframe.style.maxWidth = "100%";
        iframe.style.maxHeight = Math.round(parentWidth / proportion).toString() + "px";
      }
    });
  }
  twentytwentyoneResponsiveEmbeds();
  window.onresize = twentytwentyoneResponsiveEmbeds;
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
