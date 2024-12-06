// Disable module exporting in this context
module = undefined; exports = undefined;
window.screenReaderText = {expand: '<span class="screen-reader-text">{{msg-twentyfifteen-37}}</span>', collapse: '<span class="screen-reader-text">{{msg-twentyfifteen-38}}</span>'};
window.screenReaderText = {expand: '<span class="screen-reader-text">{{msg-twentyfifteen-37}}</span>', collapse: '<span class="screen-reader-text">{{msg-twentyfifteen-38}}</span>'};
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
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  function initMainNavigation(container) {
    container.find(".menu-item-has-children > a").after('<button class="dropdown-toggle" aria-expanded="false">' + screenReaderText.expand + "</button>");
    container.find(".current-menu-ancestor > button").addClass("toggle-on");
    container.find(".current-menu-ancestor > .sub-menu").addClass("toggled-on");
    container.find(".dropdown-toggle").on("click", function (e) {
      var _this = $(this);
      e.preventDefault();
      _this.toggleClass("toggle-on");
      _this.next(".children, .sub-menu").toggleClass("toggled-on");
      _this.attr("aria-expanded", _this.attr("aria-expanded") === "false" ? "true" : "false");
      _this.html(_this.html() === screenReaderText.expand ? screenReaderText.collapse : screenReaderText.expand);
    });
  }
  function onResizeARIA() {
    if (955 > $window.width()) {
      button.attr("aria-expanded", "false");
      secondary.attr("aria-expanded", "false");
      button.attr("aria-controls", "secondary");
    } else {
      button.removeAttr("aria-expanded");
      secondary.removeAttr("aria-expanded");
      button.removeAttr("aria-controls");
    }
  }
  function resizeAndScroll() {
    var windowPos = $window.scrollTop();
    var windowHeight = $window.height();
    var sidebarHeight = $sidebar.height();
    var pageHeight = $("#page").height();
    if (955 < $window.width() && pageHeight > sidebarHeight && windowPos + windowHeight >= sidebarHeight) {
      $sidebar.css({position: "fixed", bottom: sidebarHeight > windowHeight ? 0 : "auto"});
    } else {
      $sidebar.css("position", "relative");
    }
  }
  var $ = jQuery;
  var $body;
  var $window;
  var $sidebar;
  var resizeTimer;
  initMainNavigation($(".main-navigation"));
  $(document).on("customize-preview-menu-refreshed", function (e, params) {
    if (params.wpNavMenuArgs.theme_location === "primary") {
      initMainNavigation(params.newContainer);
      params.oldContainer.find(".dropdown-toggle.toggle-on").each(function () {
        var containerId = $(this).parent().prop("id");
        $(params.newContainer).find("#" + containerId + " > .dropdown-toggle").triggerHandler("click");
      });
    }
  });
  var secondary = $("#secondary");
  var button = $(".site-branding").find(".secondary-toggle");
  (function () {
    if (!secondary.length || !button.length) {
      return;
    }
    var menu = secondary.find(".nav-menu");
    var widgets = secondary.find("#widget-area");
    var social = secondary.find("#social-navigation");
    if (!widgets.length && !social.length && (!menu.length || !menu.children().length)) {
      button.hide();
      return;
    }
    button.on("click.twentyfifteen", function () {
      secondary.toggleClass("toggled-on");
      secondary.trigger("resize");
      $(this).toggleClass("toggled-on");
      if ($(this, secondary).hasClass("toggled-on")) {
        $(this).attr("aria-expanded", "true");
        secondary.attr("aria-expanded", "true");
      } else {
        $(this).attr("aria-expanded", "false");
        secondary.attr("aria-expanded", "false");
      }
    });
  }());
  $(function () {
    $body = $(document.body);
    $window = $(window);
    $sidebar = $("#sidebar").first();
    $window.on("scroll.twentyfifteen", resizeAndScroll).on("load.twentyfifteen", onResizeARIA).on("resize.twentyfifteen", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeAndScroll, 500);
      onResizeARIA();
    });
    $sidebar.on("click.twentyfifteen keydown.twentyfifteen", "button", resizeAndScroll);
    for (var i = 0; i < 6; i++) {
      setTimeout(resizeAndScroll, 100 * i);
    }
  });
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
