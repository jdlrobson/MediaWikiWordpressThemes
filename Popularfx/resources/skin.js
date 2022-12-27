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
(function () {
  function pfx_toggle_scroll_top() {
    var jEle = jQuery("a.pfx-scroll-top");
    if (jQuery(window).scrollTop() > 200) {
      jEle.fadeIn();
      return;
    }
    jEle.fadeOut();
  }
  (function () {
    function toggleFocus() {
      var self = this;
      while (self.className.indexOf("nav-menu") === -1) {
        if (self.tagName.toLowerCase() === "li") {
          if (self.className.indexOf("focus") === -1) {
            self.className += " focus";
          } else {
            self.className = self.className.replace(" focus", "");
          }
        }
        self = self.parentElement;
      }
    }
    var i;
    var container = document.getElementById("site-navigation");
    if (!container) {
      return;
    }
    var button = document.getElementsByClassName("menu-toggle")[0];
    if (typeof button === "undefined") {
      return;
    }
    var menu = container.getElementsByTagName("ul")[0];
    if (typeof menu === "undefined") {
      button.style.display = "none";
      return;
    }
    if (menu.className.indexOf("nav-menu") === -1) {
      menu.className += " nav-menu";
    }
    button.onclick = function () {
      if (container.classList.contains("hidden-mobile") == true) {
        container.className = container.className.replace("hidden-mobile", "");
        button.setAttribute("aria-expanded", "false");
      } else {
        container.className += " hidden-mobile";
        button.setAttribute("aria-expanded", "true");
      }
    };
    document.addEventListener("click", function (event) {
      var isClickInside = container.contains(event.target);
      if (!isClickInside) {
        container.className = container.className.replace(" toggled", "");
        button.setAttribute("aria-expanded", "false");
      }
    });
    var links = menu.getElementsByTagName("a");
    i = 0;
    for (var len = links.length; i < len; i++) {
      links[i].addEventListener("focus", toggleFocus, true);
      links[i].addEventListener("blur", toggleFocus, true);
    }
    (function () {
      container;
      var touchStartFn;
      var parentLink = container.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");
      if ("ontouchstart" in window) {
        touchStartFn = function (e) {
          var menuItem = this.parentNode;
          if (!menuItem.classList.contains("focus")) {
            e.preventDefault();
            for (i = 0; i < menuItem.parentNode.children.length; ++i) {
              if (menuItem === menuItem.parentNode.children[i]) {
                continue;
              }
              menuItem.parentNode.children[i].classList.remove("focus");
            }
            menuItem.classList.add("focus");
          } else {
            menuItem.classList.remove("focus");
          }
        };
        for (i = 0; i < parentLink.length; ++i) {
          parentLink[i].addEventListener("touchstart", touchStartFn, false);
        }
      }
    }());
  }());
  (function () {
    var isIe = /(trident|msie)/i.test(navigator.userAgent);
    if (isIe && document.getElementById && window.addEventListener) {
      window.addEventListener("hashchange", function () {
        var id = location.hash.substring(1);
        if (!/^[A-z0-9_-]+$/.test(id)) {
          return;
        }
        var element = document.getElementById(id);
        if (element) {
          if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
            element.tabIndex = -1;
          }
          element.focus();
        }
      }, false);
    }
  }());
  jQuery(document).ready(function () {
    pfx_toggle_scroll_top();
    jQuery(window).on("scroll.scroll_top", function () {
      pfx_toggle_scroll_top();
    });
  });
  jQuery(document).on("click", "a.pfx-scroll-top", function () {
    jQuery("html, body").animate({scrollTop: 0}, 700);
  });
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
