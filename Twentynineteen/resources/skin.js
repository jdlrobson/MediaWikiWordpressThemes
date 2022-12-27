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
  function debounce(func, wait, immediate) {
    "use strict";
    var timeout;
    wait = typeof wait !== "undefined" ? wait : 20;
    immediate = typeof immediate !== "undefined" ? immediate : true;
    return function () {
      var context = this;
      var args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }
  function prependElement(container, element) {
    if (container.firstChild.nextSibling) {
      return container.insertBefore(element, container.firstChild.nextSibling);
    } else {
      return container.appendChild(element);
    }
  }
  function showButton(element) {
    element.className = element.className.replace("is-empty", "");
  }
  function hideButton(element) {
    if (!element.classList.contains("is-empty")) {
      element.className += " is-empty";
    }
  }
  function getAvailableSpace(button, container) {
    return container.offsetWidth - button.offsetWidth - 22;
  }
  function isOverflowingNavivation(list, button, container) {
    return list.offsetWidth > getAvailableSpace(button, container);
  }
  function updateNavigationMenu(container) {
    if (!container.parentNode.querySelector(".main-menu[id]")) {
      return;
    }
    var visibleList = container.parentNode.querySelector(".main-menu[id]");
    var hiddenList = visibleList.parentNode.nextElementSibling.querySelector(".hidden-links");
    var toggleButton = visibleList.parentNode.nextElementSibling.querySelector(".main-menu-more-toggle");
    if (isOverflowingNavivation(visibleList, toggleButton, container)) {
      breaks.push(visibleList.offsetWidth);
      prependElement(hiddenList, !visibleList.lastChild || visibleList.lastChild === null ? visibleList.previousElementSibling : visibleList.lastChild);
      showButton(toggleButton);
    } else {
      if (getAvailableSpace(toggleButton, container) > breaks[breaks.length - 1]) {
        visibleList.appendChild(hiddenList.firstChild.nextSibling);
        breaks.pop();
      }
      if (breaks.length < 2) {
        hideButton(toggleButton);
      }
    }
    if (isOverflowingNavivation(visibleList, toggleButton, container)) {
      updateNavigationMenu(container);
    }
  }
  var navContainer = document.querySelector(".main-navigation");
  var breaks = [];
  if (!navContainer) {
    return;
  }
  document.addEventListener("DOMContentLoaded", function () {
    updateNavigationMenu(navContainer);
    var hasSelectiveRefresh = typeof wp !== "undefined" && wp.customize && wp.customize.selectiveRefresh && wp.customize.navMenusPreview.NavMenuInstancePartial;
    if (hasSelectiveRefresh) {
      wp.customize.selectiveRefresh.bind("partial-content-rendered", function (placement) {
        var isNewNavMenu = placement && placement.partial.id.includes("nav_menu_instance") && placement.container[0].parentNode !== "null" && placement.container[0].parentNode.classList.contains("main-navigation");
        if (isNewNavMenu) {
          updateNavigationMenu(placement.container[0].parentNode);
        }
      });
    }
  });
  window.addEventListener("load", function () {
    updateNavigationMenu(navContainer);
  });
  var isResizing = false;
  window.addEventListener("resize", debounce(function () {
    if (isResizing) {
      return;
    }
    isResizing = true;
    setTimeout(function () {
      updateNavigationMenu(navContainer);
      isResizing = false;
    }, 150);
  }));
  updateNavigationMenu(navContainer);
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  function debounce(func, wait, immediate) {
    "use strict";
    var timeout;
    wait = typeof wait !== "undefined" ? wait : 20;
    immediate = typeof immediate !== "undefined" ? immediate : true;
    return function () {
      var context = this;
      var args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }
  function addClass(el, cls) {
    if (!el.className.match("(?:^|\\s)" + cls + "(?!\\S)")) {
      el.className += " " + cls;
    }
  }
  function deleteClass(el, cls) {
    el.className = el.className.replace(new RegExp("(?:^|\\s)" + cls + "(?!\\S)"), "");
  }
  function hasClass(el, cls) {
    if (el.className.match("(?:^|\\s)" + cls + "(?!\\S)")) {
      return true;
    }
  }
  function toggleAriaExpandedState(ariaItem) {
    "use strict";
    var ariaState = ariaItem.getAttribute("aria-expanded");
    if (ariaState === "true") {
      ariaState = "false";
    } else {
      ariaState = "true";
    }
    ariaItem.setAttribute("aria-expanded", ariaState);
  }
  function openSubMenu(currentSubMenu) {
    "use strict";
    currentSubMenu.parentElement.className += " off-canvas";
    currentSubMenu.parentElement.lastElementChild.className += " expanded-true";
    toggleAriaExpandedState(currentSubMenu);
  }
  function closeSubMenu(currentSubMenu) {
    "use strict";
    var menuItem = getCurrentParent(currentSubMenu, ".menu-item");
    var menuItemAria = menuItem.querySelector("a[aria-expanded]");
    var subMenu = currentSubMenu.closest(".sub-menu");
    if (getCurrentParent(currentSubMenu, "ul").classList.contains("sub-menu")) {
      menuItem.className = menuItem.className.replace("off-canvas", "");
      subMenu.className = subMenu.className.replace("expanded-true", "");
      toggleAriaExpandedState(menuItemAria);
    } else {
      menuItem.className = menuItem.className.replace("off-canvas", "");
      menuItem.lastElementChild.className = menuItem.lastElementChild.className.replace("expanded-true", "");
      toggleAriaExpandedState(menuItemAria);
    }
  }
  function getCurrentParent(child, selector, stopSelector) {
    var currentParent = null;
    while (child) {
      if (child.matches(selector)) {
        currentParent = child;
        break;
      } else if (stopSelector && child.matches(stopSelector)) {
        break;
      }
      child = child.parentElement;
    }
    return currentParent;
  }
  function removeAllFocusStates() {
    "use strict";
    var siteBranding = document.getElementsByClassName("site-branding")[0];
    var getFocusedElements = siteBranding.querySelectorAll(":hover, :focus, :focus-within");
    var getFocusedClassElements = siteBranding.querySelectorAll(".is-focused");
    for (var i = 0; i < getFocusedElements.length; i++) {
      getFocusedElements[i].blur();
    }
    for (var o = 0; o < getFocusedClassElements.length; o++) {
      deleteClass(getFocusedClassElements[o], "is-focused");
    }
  }
  function toggleSubmenuDisplay() {
    document.addEventListener("touchstart", function (event) {
      if (event.target.matches("a")) {
        var url = event.target.getAttribute("href") ? event.target.getAttribute("href") : "";
        if (url === "#" && event.target.nextSibling.matches(".submenu-expand")) {
          openSubMenu(event.target);
        }
      }
      if (event.target.matches(".submenu-expand")) {
        openSubMenu(event.target);
      } else if (getCurrentParent(event.target, ".submenu-expand") != null && getCurrentParent(event.target, ".submenu-expand").matches(".submenu-expand")) {
        openSubMenu(getCurrentParent(event.target, ".submenu-expand"));
      } else if (event.target.matches(".menu-item-link-return")) {
        closeSubMenu(event.target);
      } else if (getCurrentParent(event.target, ".menu-item-link-return") != null && getCurrentParent(event.target, ".menu-item-link-return").matches(".menu-item-link-return")) {
        closeSubMenu(event.target);
      }
      removeAllFocusStates();
    }, false);
    document.addEventListener("touchend", function (event) {
      var mainNav = getCurrentParent(event.target, ".main-navigation");
      if (mainNav != null && hasClass(mainNav, ".main-navigation")) {
        event.preventDefault();
      } else if (event.target.matches(".submenu-expand") || getCurrentParent(event.target, ".submenu-expand") != null && getCurrentParent(event.target, ".submenu-expand").matches(".submenu-expand") || event.target.matches(".menu-item-link-return") || getCurrentParent(event.target, ".menu-item-link-return") != null && getCurrentParent(event.target, ".menu-item-link-return").matches(".menu-item-link-return")) {
        event.preventDefault();
      }
      removeAllFocusStates();
    }, false);
    document.addEventListener("focus", function (event) {
      if (event.target.matches(".main-navigation > div > ul > li a")) {
        var currentDiv = getCurrentParent(event.target, "div", ".main-navigation");
        var currentDivSibling = currentDiv.previousElementSibling === null ? currentDiv.nextElementSibling : currentDiv.previousElementSibling;
        var focusedElement = currentDivSibling.querySelector(".is-focused");
        var focusedClass = "is-focused";
        var prevLi = getCurrentParent(event.target, ".main-navigation > div > ul > li", ".main-navigation").previousElementSibling;
        var nextLi = getCurrentParent(event.target, ".main-navigation > div > ul > li", ".main-navigation").nextElementSibling;
        if (focusedElement !== null && hasClass(focusedElement, focusedClass) !== null) {
          deleteClass(focusedElement, focusedClass);
        }
        if (getCurrentParent(event.target, ".main-navigation > div > ul > li", ".main-navigation")) {
          addClass(getCurrentParent(event.target, ".main-navigation > div > ul > li", ".main-navigation"), focusedClass);
        }
        if (prevLi && hasClass(prevLi, focusedClass)) {
          deleteClass(prevLi, focusedClass);
        }
        if (nextLi && hasClass(nextLi, focusedClass)) {
          deleteClass(nextLi, focusedClass);
        }
      }
    }, true);
    document.addEventListener("click", function (event) {
      if (event.target === document.getElementsByClassName("site-branding")[0]) {} else {
        removeAllFocusStates();
      }
    }, false);
  }
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
  }
  document.addEventListener("DOMContentLoaded", function () {
    toggleSubmenuDisplay();
  });
  document.addEventListener("customize-preview-menu-refreshed", function (e, params) {
    if (params.wpNavMenuArgs.theme_location === "menu-1") {
      toggleSubmenuDisplay();
    }
  });
  var isResizing = false;
  window.addEventListener("resize", function () {
    isResizing = true;
    debounce(function () {
      if (isResizing) {
        return;
      }
      toggleSubmenuDisplay();
      isResizing = false;
    }, 150);
  });
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
