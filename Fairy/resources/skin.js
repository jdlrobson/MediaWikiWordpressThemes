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
  function toggleFocus() {
    if (event.type === "focus" || event.type === "blur") {
      let self = this;
      while (!self.classList.contains("nav-menu")) {
        if (self.tagName.toLowerCase() === "li") {
          self.classList.toggle("focus");
        }
        self = self.parentNode;
      }
    }
    if (event.type === "touchstart") {
      const menuItem = this.parentNode;
      event.preventDefault();
      for (const link of menuItem.parentNode.children) {
        if (menuItem !== link) {
          link.classList.remove("focus");
        }
      }
      menuItem.classList.toggle("focus");
    }
  }
  const siteNavigation = document.getElementById("site-navigation");
  if (!siteNavigation) {
    return;
  }
  const button = document.getElementById("menu-toggle-button");
  if (typeof button === "undefined") {
    return;
  }
  const menu = document.getElementById("primary-menu");
  if (typeof menu === "undefined") {
    button.style.display = "none";
    return;
  }
  if (!menu.classList.contains("nav-menu")) {
    menu.classList.add("nav-menu");
  }
  document.addEventListener("click", function (event) {
    const isClickInside = siteNavigation.contains(event.target);
    if (!isClickInside) {
      siteNavigation.classList.remove("toggled");
      button.setAttribute("aria-expanded", "false");
    }
  });
  const links = menu.getElementsByTagName("a");
  const linksWithChildren = menu.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");
  for (const link of links) {
    link.addEventListener("focus", toggleFocus, true);
    link.addEventListener("blur", toggleFocus, true);
  }
  for (const link of linksWithChildren) {
    link.addEventListener("touchstart", toggleFocus, false);
  }
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  var $ = jQuery;
  $.fn.theiaStickySidebar = function (options) {
    function tryInitOrHookIntoEvents(options, $that) {
      var success = tryInit(options, $that);
      if (!success) {
        console.log("TST: Body width smaller than options.minWidth. Init is delayed.");
        $(document).scroll(function (options, $that) {
          return function (evt) {
            var success = tryInit(options, $that);
            if (success) {
              $(this).unbind(evt);
            }
          };
        }(options, $that));
        $(window).resize(function (options, $that) {
          return function (evt) {
            var success = tryInit(options, $that);
            if (success) {
              $(this).unbind(evt);
            }
          };
        }(options, $that));
      }
    }
    function tryInit(options, $that) {
      if (options.initialized === true) {
        return true;
      }
      if ($("body").width() < options.minWidth) {
        return false;
      }
      init(options, $that);
      return true;
    }
    function init(options, $that) {
      options.initialized = true;
      $("head").append($('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));
      $that.each(function () {
        function resetSidebar() {
          o.fixedScrollTop = 0;
          o.sidebar.css({"min-height": "1px"});
          o.stickySidebar.css({position: "static", width: ""});
        }
        function getClearedHeight(e) {
          var height = e.height();
          e.children().each(function () {
            height = Math.max(height, $(this).height());
          });
          return height;
        }
        var o = {};
        o.sidebar = $(this);
        o.options = options || {};
        o.container = $(o.options.containerSelector);
        if (o.container.length == 0) {
          o.container = o.sidebar.parent();
        }
        o.sidebar.parents().css("-webkit-transform", "none");
        o.sidebar.css({position: "relative", overflow: "visible", "-webkit-box-sizing": "border-box", "-moz-box-sizing": "border-box", "box-sizing": "border-box"});
        o.stickySidebar = o.sidebar.find(".theiaStickySidebar");
        if (o.stickySidebar.length == 0) {
          o.sidebar.find("script").remove();
          o.stickySidebar = $("<div>").addClass("theiaStickySidebar").append(o.sidebar.children());
          o.sidebar.append(o.stickySidebar);
        }
        o.marginTop = parseInt(o.sidebar.css("margin-top"));
        o.marginBottom = parseInt(o.sidebar.css("margin-bottom"));
        o.paddingTop = parseInt(o.sidebar.css("padding-top"));
        o.paddingBottom = parseInt(o.sidebar.css("padding-bottom"));
        var collapsedTopHeight = o.stickySidebar.offset().top;
        var collapsedBottomHeight = o.stickySidebar.outerHeight();
        o.stickySidebar.css("padding-top", 1);
        o.stickySidebar.css("padding-bottom", 1);
        collapsedTopHeight -= o.stickySidebar.offset().top;
        collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;
        if (collapsedTopHeight == 0) {
          o.stickySidebar.css("padding-top", 0);
          o.stickySidebarPaddingTop = 0;
        } else {
          o.stickySidebarPaddingTop = 1;
        }
        if (collapsedBottomHeight == 0) {
          o.stickySidebar.css("padding-bottom", 0);
          o.stickySidebarPaddingBottom = 0;
        } else {
          o.stickySidebarPaddingBottom = 1;
        }
        o.previousScrollTop = null;
        o.fixedScrollTop = 0;
        resetSidebar();
        o.onScroll = function (o) {
          if (!o.stickySidebar.is(":visible")) {
            return;
          }
          if ($("body").width() < o.options.minWidth) {
            resetSidebar();
            return;
          }
          if (o.options.disableOnResponsiveLayouts) {
            var sidebarWidth = o.sidebar.outerWidth(o.sidebar.css("float") == "none");
            if (sidebarWidth + 50 > o.container.width()) {
              resetSidebar();
              return;
            }
          }
          var scrollTop = $(document).scrollTop();
          var position = "static";
          if (scrollTop >= o.container.offset().top + (o.paddingTop + o.marginTop - o.options.additionalMarginTop)) {
            var offsetTop = o.paddingTop + o.marginTop + options.additionalMarginTop;
            var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;
            var containerTop = o.container.offset().top;
            var containerBottom = o.container.offset().top + getClearedHeight(o.container);
            var windowOffsetTop = 0 + options.additionalMarginTop;
            var windowOffsetBottom;
            var sidebarSmallerThanWindow = o.stickySidebar.outerHeight() + offsetTop + offsetBottom < $(window).height();
            if (sidebarSmallerThanWindow) {
              windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight();
            } else {
              windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom;
            }
            var staticLimitTop = containerTop - scrollTop + o.paddingTop + o.marginTop;
            var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;
            var top = o.stickySidebar.offset().top - scrollTop;
            var scrollTopDiff = o.previousScrollTop - scrollTop;
            if (o.stickySidebar.css("position") == "fixed") {
              if (o.options.sidebarBehavior == "modern") {
                top += scrollTopDiff;
              }
            }
            if (o.options.sidebarBehavior == "stick-to-top") {
              top = options.additionalMarginTop;
            }
            if (o.options.sidebarBehavior == "stick-to-bottom") {
              top = windowOffsetBottom - o.stickySidebar.outerHeight();
            }
            if (scrollTopDiff > 0) {
              top = Math.min(top, windowOffsetTop);
            } else {
              top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());
            }
            top = Math.max(top, staticLimitTop);
            top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());
            var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();
            if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
              position = "fixed";
            } else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {
              position = "fixed";
            } else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {
              position = "static";
            } else {
              position = "absolute";
            }
          }
          if (position == "fixed") {
            o.stickySidebar.css({position: "fixed", width: o.sidebar.width(), top: top, left: o.sidebar.offset().left + parseInt(o.sidebar.css("padding-left"))});
          } else if (position == "absolute") {
            var css = {};
            if (o.stickySidebar.css("position") != "absolute") {
              css.position = "absolute";
              css.top = scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom;
            }
            css.width = o.sidebar.width();
            css.left = "";
            o.stickySidebar.css(css);
          } else if (position == "static") {
            resetSidebar();
          }
          if (position != "static") {
            if (o.options.updateSidebarHeight == true) {
              o.sidebar.css({"min-height": o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom});
            }
          }
          o.previousScrollTop = scrollTop;
        };
        o.onScroll(o);
        $(document).scroll(function (o) {
          return function () {
            o.onScroll(o);
          };
        }(o));
        $(window).resize(function (o) {
          return function () {
            o.stickySidebar.css({position: "static"});
            o.onScroll(o);
          };
        }(o));
      });
    }
    var defaults = {containerSelector: "", additionalMarginTop: 0, additionalMarginBottom: 0, updateSidebarHeight: true, minWidth: 0, disableOnResponsiveLayouts: true, sidebarBehavior: "modern"};
    options = $.extend(defaults, options);
    options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
    options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;
    tryInitOrHookIntoEvents(options, this);
  };
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  var factory = function ($) {
    "use strict";
    var Slick = window.Slick || {};
    Slick = function () {
      function Slick(element, settings) {
        var _ = this;
        _.defaults = {accessibility: true, adaptiveHeight: false, appendArrows: $(element), appendDots: $(element), arrows: true, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: false, autoplaySpeed: 3e3, centerMode: false, centerPadding: "50px", cssEase: "ease", customPaging: function (slider, i) {
          return $('<button type="button" />').text(i + 1);
        }, dots: false, dotsClass: "slick-dots", draggable: true, easing: "linear", edgeFriction: .35, fade: false, focusOnSelect: false, focusOnChange: false, infinite: true, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: false, pauseOnHover: true, pauseOnFocus: true, pauseOnDotsHover: false, respondTo: "window", responsive: null, rows: 1, rtl: false, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: true, swipeToSlide: false, touchMove: true, touchThreshold: 5, useCSS: true, useTransform: true, variableWidth: false, vertical: false, verticalSwiping: false, waitForAnimate: true, zIndex: 1e3};
        _.initials = {animating: false, dragging: false, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: false, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: false, slideOffset: 0, swipeLeft: null, swiping: false, $list: null, touchObject: {}, transformsEnabled: false, unslicked: false};
        $.extend(_, _.initials);
        _.activeBreakpoint = null;
        _.animType = null;
        _.animProp = null;
        _.breakpoints = [];
        _.breakpointSettings = [];
        _.cssTransitions = false;
        _.focussed = false;
        _.interrupted = false;
        _.hidden = "hidden";
        _.paused = true;
        _.positionProp = null;
        _.respondTo = null;
        _.rowCount = 1;
        _.shouldClick = true;
        _.$slider = $(element);
        _.$slidesCache = null;
        _.transformType = null;
        _.transitionType = null;
        _.visibilityChange = "visibilitychange";
        _.windowWidth = 0;
        _.windowTimer = null;
        var dataSettings = $(element).data("slick") || {};
        _.options = $.extend({}, _.defaults, settings, dataSettings);
        _.currentSlide = _.options.initialSlide;
        _.originalSettings = _.options;
        if (typeof document.mozHidden === "undefined") {
          if (typeof document.webkitHidden !== "undefined") {
            _.hidden = "webkitHidden";
            _.visibilityChange = "webkitvisibilitychange";
          }
        } else {
          _.hidden = "mozHidden";
          _.visibilityChange = "mozvisibilitychange";
        }
        _.autoPlay = $.proxy(_.autoPlay, _);
        _.autoPlayClear = $.proxy(_.autoPlayClear, _);
        _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
        _.changeSlide = $.proxy(_.changeSlide, _);
        _.clickHandler = $.proxy(_.clickHandler, _);
        _.selectHandler = $.proxy(_.selectHandler, _);
        _.setPosition = $.proxy(_.setPosition, _);
        _.swipeHandler = $.proxy(_.swipeHandler, _);
        _.dragHandler = $.proxy(_.dragHandler, _);
        _.keyHandler = $.proxy(_.keyHandler, _);
        _.instanceUid = instanceUid++;
        _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
        _.registerBreakpoints();
        _.init(true);
      }
      var instanceUid = 0;
      return Slick;
    }();
    Slick.prototype.activateADA = function () {
      var _ = this;
      _.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"});
    };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
      var _ = this;
      if (typeof index === "boolean") {
        addBefore = index;
        index = null;
      } else if (index < 0 || index >= _.slideCount) {
        return false;
      }
      _.unload();
      if (typeof index === "number") {
        if (index === 0 && _.$slides.length === 0) {
          $(markup).appendTo(_.$slideTrack);
        } else if (addBefore) {
          $(markup).insertBefore(_.$slides.eq(index));
        } else {
          $(markup).insertAfter(_.$slides.eq(index));
        }
      } else if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
      _.$slides = _.$slideTrack.children(this.options.slide);
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.append(_.$slides);
      _.$slides.each(function (index, element) {
        $(element).attr("data-slick-index", index);
      });
      _.$slidesCache = _.$slides;
      _.reinit();
    };
    Slick.prototype.animateHeight = function () {
      var _ = this;
      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
        _.$list.animate({height: targetHeight}, _.options.speed);
      }
    };
    Slick.prototype.animateSlide = function (targetLeft, callback) {
      var animProps = {};
      var _ = this;
      _.animateHeight();
      if (_.options.rtl === true && _.options.vertical === false) {
        targetLeft = -targetLeft;
      }
      if (_.transformsEnabled === false) {
        if (_.options.vertical === false) {
          _.$slideTrack.animate({left: targetLeft}, _.options.speed, _.options.easing, callback);
        } else {
          _.$slideTrack.animate({top: targetLeft}, _.options.speed, _.options.easing, callback);
        }
      } else if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }
        $({animStart: _.currentLeft}).animate({animStart: targetLeft}, {duration: _.options.speed, easing: _.options.easing, step: function (now) {
          now = Math.ceil(now);
          if (_.options.vertical === false) {
            animProps[_.animType] = "translate(" + now + "px, 0px)";
            _.$slideTrack.css(animProps);
          } else {
            animProps[_.animType] = "translate(0px," + now + "px)";
            _.$slideTrack.css(animProps);
          }
        }, complete: function () {
          if (callback) {
            callback.call();
          }
        }});
      } else {
        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);
        if (_.options.vertical === false) {
          animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
        } else {
          animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
        }
        _.$slideTrack.css(animProps);
        if (callback) {
          setTimeout(function () {
            _.disableTransition();
            callback.call();
          }, _.options.speed);
        }
      }
    };
    Slick.prototype.getNavTarget = function () {
      var _ = this;
      var asNavFor = _.options.asNavFor;
      if (asNavFor && asNavFor !== null) {
        asNavFor = $(asNavFor).not(_.$slider);
      }
      return asNavFor;
    };
    Slick.prototype.asNavFor = function (index) {
      var _ = this;
      var asNavFor = _.getNavTarget();
      if (asNavFor !== null && typeof asNavFor === "object") {
        asNavFor.each(function () {
          var target = $(this).slick("getSlick");
          if (!target.unslicked) {
            target.slideHandler(index, true);
          }
        });
      }
    };
    Slick.prototype.applyTransition = function (slide) {
      var _ = this;
      var transition = {};
      if (_.options.fade === false) {
        transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase;
      } else {
        transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase;
      }
      if (_.options.fade === false) {
        _.$slideTrack.css(transition);
      } else {
        _.$slides.eq(slide).css(transition);
      }
    };
    Slick.prototype.autoPlay = function () {
      var _ = this;
      _.autoPlayClear();
      if (_.slideCount > _.options.slidesToShow) {
        _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
      }
    };
    Slick.prototype.autoPlayClear = function () {
      var _ = this;
      if (_.autoPlayTimer) {
        clearInterval(_.autoPlayTimer);
      }
    };
    Slick.prototype.autoPlayIterator = function () {
      var _ = this;
      var slideTo = _.currentSlide + _.options.slidesToScroll;
      if (!_.paused && !_.interrupted && !_.focussed) {
        if (_.options.infinite === false) {
          if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
            _.direction = 0;
          } else if (_.direction === 0) {
            slideTo = _.currentSlide - _.options.slidesToScroll;
            if (_.currentSlide - 1 === 0) {
              _.direction = 1;
            }
          }
        }
        _.slideHandler(slideTo);
      }
    };
    Slick.prototype.buildArrows = function () {
      var _ = this;
      if (_.options.arrows === true) {
        _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
        _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");
        if (_.slideCount > _.options.slidesToShow) {
          _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
          _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
          if (_.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.prependTo(_.options.appendArrows);
          }
          if (_.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.appendTo(_.options.appendArrows);
          }
          if (_.options.infinite !== true) {
            _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
          }
        } else {
          _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({"aria-disabled": "true", tabindex: "-1"});
        }
      }
    };
    Slick.prototype.buildDots = function () {
      var _ = this;
      var i;
      var dot;
      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        _.$slider.addClass("slick-dotted");
        dot = $("<ul />").addClass(_.options.dotsClass);
        for (i = 0; i <= _.getDotCount(); i += 1) {
          dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
        }
        _.$dots = dot.appendTo(_.options.appendDots);
        _.$dots.find("li").first().addClass("slick-active");
      }
    };
    Slick.prototype.buildOut = function () {
      var _ = this;
      _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
      _.slideCount = _.$slides.length;
      _.$slides.each(function (index, element) {
        $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "");
      });
      _.$slider.addClass("slick-slider");
      _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
      _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
      _.$slideTrack.css("opacity", 0);
      if (_.options.centerMode === true || _.options.swipeToSlide === true) {
        _.options.slidesToScroll = 1;
      }
      $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
      _.setupInfinite();
      _.buildArrows();
      _.buildDots();
      _.updateDots();
      _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
      if (_.options.draggable === true) {
        _.$list.addClass("draggable");
      }
    };
    Slick.prototype.buildRows = function () {
      var _ = this;
      var a;
      var b;
      var c;
      var numOfSlides;
      var slidesPerSection;
      var newSlides = document.createDocumentFragment();
      var originalSlides = _.$slider.children();
      if (_.options.rows > 0) {
        slidesPerSection = _.options.slidesPerRow * _.options.rows;
        numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
        for (a = 0; a < numOfSlides; a++) {
          var slide = document.createElement("div");
          for (b = 0; b < _.options.rows; b++) {
            var row = document.createElement("div");
            for (c = 0; c < _.options.slidesPerRow; c++) {
              var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
              if (originalSlides.get(target)) {
                row.appendChild(originalSlides.get(target));
              }
            }
            slide.appendChild(row);
          }
          newSlides.appendChild(slide);
        }
        _.$slider.empty().append(newSlides);
        _.$slider.children().children().children().css({width: 100 / _.options.slidesPerRow + "%", display: "inline-block"});
      }
    };
    Slick.prototype.checkResponsive = function (initial, forceUpdate) {
      var _ = this;
      var breakpoint;
      var targetBreakpoint;
      var respondToWidth;
      var triggerBreakpoint = false;
      var sliderWidth = _.$slider.width();
      var windowWidth = window.innerWidth || $(window).width();
      if (_.respondTo === "window") {
        respondToWidth = windowWidth;
      } else if (_.respondTo === "slider") {
        respondToWidth = sliderWidth;
      } else if (_.respondTo === "min") {
        respondToWidth = Math.min(windowWidth, sliderWidth);
      }
      if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
        targetBreakpoint = null;
        for (breakpoint in _.breakpoints) {
          if (_.breakpoints.hasOwnProperty(breakpoint)) {
            if (_.originalSettings.mobileFirst === false) {
              if (respondToWidth < _.breakpoints[breakpoint]) {
                targetBreakpoint = _.breakpoints[breakpoint];
              }
            } else if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
        if (targetBreakpoint === null) {
          if (_.activeBreakpoint !== null) {
            _.activeBreakpoint = null;
            _.options = _.originalSettings;
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
            triggerBreakpoint = targetBreakpoint;
          }
        } else if (_.activeBreakpoint === null) {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === "unslick") {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        } else if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === "unslick") {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
        if (!initial && triggerBreakpoint !== false) {
          _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
        }
      }
    };
    Slick.prototype.changeSlide = function (event, dontAnimate) {
      var _ = this;
      var $target = $(event.currentTarget);
      var slideOffset;
      if ($target.is("a")) {
        event.preventDefault();
      }
      if (!$target.is("li")) {
        $target = $target.closest("li");
      }
      var unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
      var indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
      switch (event.data.message) {
        case "previous":
          slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
          if (_.slideCount > _.options.slidesToShow) {
            _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
          }
          break;
        case "next":
          slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
          if (_.slideCount > _.options.slidesToShow) {
            _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
          }
          break;
        case "index":
          var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
          _.slideHandler(_.checkNavigable(index), false, dontAnimate);
          $target.children().trigger("focus");
          break;
        default:
          return;
      }
    };
    Slick.prototype.checkNavigable = function (index) {
      var _ = this;
      var prevNavigable;
      var navigables = _.getNavigableIndexes();
      prevNavigable = 0;
      if (index > navigables[navigables.length - 1]) {
        index = navigables[navigables.length - 1];
      } else {
        for (var n in navigables) {
          if (index < navigables[n]) {
            index = prevNavigable;
            break;
          }
          prevNavigable = navigables[n];
        }
      }
      return index;
    };
    Slick.prototype.cleanUpEvents = function () {
      var _ = this;
      if (_.options.dots && _.$dots !== null) {
        $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false));
        if (_.options.accessibility === true) {
          _.$dots.off("keydown.slick", _.keyHandler);
        }
      }
      _.$slider.off("focus.slick blur.slick");
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        if (_.$prevArrow) {
          _.$prevArrow.off("click.slick", _.changeSlide);
        }
        if (_.$nextArrow) {
          _.$nextArrow.off("click.slick", _.changeSlide);
        }
        if (_.options.accessibility === true) {
          if (_.$prevArrow) {
            _.$prevArrow.off("keydown.slick", _.keyHandler);
          }
          if (_.$nextArrow) {
            _.$nextArrow.off("keydown.slick", _.keyHandler);
          }
        }
      }
      _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
      _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
      _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
      _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
      _.$list.off("click.slick", _.clickHandler);
      $(document).off(_.visibilityChange, _.visibility);
      _.cleanUpSlideEvents();
      if (_.options.accessibility === true) {
        _.$list.off("keydown.slick", _.keyHandler);
      }
      if (_.options.focusOnSelect === true) {
        $(_.$slideTrack).children().off("click.slick", _.selectHandler);
      }
      $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);
      $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
      $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
      $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
    };
    Slick.prototype.cleanUpSlideEvents = function () {
      var _ = this;
      _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
      _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
    };
    Slick.prototype.cleanUpRows = function () {
      var _ = this;
      var originalSlides;
      if (_.options.rows > 0) {
        originalSlides = _.$slides.children().children();
        originalSlides.removeAttr("style");
        _.$slider.empty().append(originalSlides);
      }
    };
    Slick.prototype.clickHandler = function (event) {
      var _ = this;
      if (_.shouldClick === false) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
      }
    };
    Slick.prototype.destroy = function (refresh) {
      var _ = this;
      _.autoPlayClear();
      _.touchObject = {};
      _.cleanUpEvents();
      $(".slick-cloned", _.$slider).detach();
      if (_.$dots) {
        _.$dots.remove();
      }
      if (_.$prevArrow && _.$prevArrow.length) {
        _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.remove();
        }
      }
      if (_.$nextArrow && _.$nextArrow.length) {
        _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.remove();
        }
      }
      if (_.$slides) {
        _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
          $(this).attr("style", $(this).data("originalStyling"));
        });
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.detach();
        _.$list.detach();
        _.$slider.append(_.$slides);
      }
      _.cleanUpRows();
      _.$slider.removeClass("slick-slider");
      _.$slider.removeClass("slick-initialized");
      _.$slider.removeClass("slick-dotted");
      _.unslicked = true;
      if (!refresh) {
        _.$slider.trigger("destroy", [_]);
      }
    };
    Slick.prototype.disableTransition = function (slide) {
      var _ = this;
      var transition = {};
      transition[_.transitionType] = "";
      if (_.options.fade === false) {
        _.$slideTrack.css(transition);
      } else {
        _.$slides.eq(slide).css(transition);
      }
    };
    Slick.prototype.fadeSlide = function (slideIndex, callback) {
      var _ = this;
      if (_.cssTransitions === false) {
        _.$slides.eq(slideIndex).css({zIndex: _.options.zIndex});
        _.$slides.eq(slideIndex).animate({opacity: 1}, _.options.speed, _.options.easing, callback);
      } else {
        _.applyTransition(slideIndex);
        _.$slides.eq(slideIndex).css({opacity: 1, zIndex: _.options.zIndex});
        if (callback) {
          setTimeout(function () {
            _.disableTransition(slideIndex);
            callback.call();
          }, _.options.speed);
        }
      }
    };
    Slick.prototype.fadeSlideOut = function (slideIndex) {
      var _ = this;
      if (_.cssTransitions === false) {
        _.$slides.eq(slideIndex).animate({opacity: 0, zIndex: _.options.zIndex - 2}, _.options.speed, _.options.easing);
      } else {
        _.applyTransition(slideIndex);
        _.$slides.eq(slideIndex).css({opacity: 0, zIndex: _.options.zIndex - 2});
      }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
      var _ = this;
      if (filter !== null) {
        _.$slidesCache = _.$slides;
        _.unload();
        _.$slideTrack.children(this.options.slide).detach();
        _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
        _.reinit();
      }
    };
    Slick.prototype.focusHandler = function () {
      var _ = this;
      _.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (event) {
        event.stopImmediatePropagation();
        var $sf = $(this);
        setTimeout(function () {
          if (_.options.pauseOnFocus) {
            _.focussed = $sf.is(":focus");
            _.autoPlay();
          }
        }, 0);
      });
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
      var _ = this;
      return _.currentSlide;
    };
    Slick.prototype.getDotCount = function () {
      var _ = this;
      var breakPoint = 0;
      var counter = 0;
      var pagerQty = 0;
      if (_.options.infinite === true) {
        if (_.slideCount <= _.options.slidesToShow) {
          ++pagerQty;
        } else {
          while (breakPoint < _.slideCount) {
            ++pagerQty;
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
          }
        }
      } else if (_.options.centerMode === true) {
        pagerQty = _.slideCount;
      } else if (!_.options.asNavFor) {
        pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
      return pagerQty - 1;
    };
    Slick.prototype.getLeft = function (slideIndex) {
      var _ = this;
      var targetLeft;
      var verticalOffset = 0;
      var targetSlide;
      var coef;
      _.slideOffset = 0;
      var verticalHeight = _.$slides.first().outerHeight(true);
      if (_.options.infinite === true) {
        if (_.slideCount > _.options.slidesToShow) {
          _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
          coef = -1;
          if (_.options.vertical === true && _.options.centerMode === true) {
            if (_.options.slidesToShow === 2) {
              coef = -1.5;
            } else if (_.options.slidesToShow === 1) {
              coef = -2;
            }
          }
          verticalOffset = verticalHeight * _.options.slidesToShow * coef;
        }
        if (_.slideCount % _.options.slidesToScroll !== 0) {
          if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
            if (slideIndex > _.slideCount) {
              _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
              verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
            } else {
              _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
              verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
            }
          }
        }
      } else if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
      if (_.slideCount <= _.options.slidesToShow) {
        _.slideOffset = 0;
        verticalOffset = 0;
      }
      if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
      } else if (_.options.centerMode === true && _.options.infinite === true) {
        _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
      } else if (_.options.centerMode === true) {
        _.slideOffset = 0;
        _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
      }
      if (_.options.vertical === false) {
        targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
      } else {
        targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
      }
      if (_.options.variableWidth === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow);
        }
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }
        if (_.options.centerMode === true) {
          if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
            targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
          } else {
            targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1);
          }
          if (_.options.rtl === true) {
            if (targetSlide[0]) {
              targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
            } else {
              targetLeft = 0;
            }
          } else {
            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
          }
          targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
        }
      }
      return targetLeft;
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
      var _ = this;
      return _.options[option];
    };
    Slick.prototype.getNavigableIndexes = function () {
      var _ = this;
      var breakPoint = 0;
      var counter = 0;
      var indexes = [];
      var max;
      if (_.options.infinite === false) {
        max = _.slideCount;
      } else {
        breakPoint = _.options.slidesToScroll * -1;
        counter = _.options.slidesToScroll * -1;
        max = _.slideCount * 2;
      }
      while (breakPoint < max) {
        indexes.push(breakPoint);
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
      return indexes;
    };
    Slick.prototype.getSlick = function () {
      return this;
    };
    Slick.prototype.getSlideCount = function () {
      var _ = this;
      var slidesTraversed;
      var swipedSlide;
      var centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
      if (_.options.swipeToSlide === true) {
        _.$slideTrack.find(".slick-slide").each(function (index, slide) {
          if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        });
        slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
        return slidesTraversed;
      } else {
        return _.options.slidesToScroll;
      }
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
      var _ = this;
      _.changeSlide({data: {message: "index", index: parseInt(slide)}}, dontAnimate);
    };
    Slick.prototype.init = function (creation) {
      var _ = this;
      if (!$(_.$slider).hasClass("slick-initialized")) {
        $(_.$slider).addClass("slick-initialized");
        _.buildRows();
        _.buildOut();
        _.setProps();
        _.startLoad();
        _.loadSlider();
        _.initializeEvents();
        _.updateArrows();
        _.updateDots();
        _.checkResponsive(true);
        _.focusHandler();
      }
      if (creation) {
        _.$slider.trigger("init", [_]);
      }
      if (_.options.accessibility === true) {
        _.initADA();
      }
      if (_.options.autoplay) {
        _.paused = false;
        _.autoPlay();
      }
    };
    Slick.prototype.initADA = function () {
      var _ = this;
      var numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow);
      var tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
        return val >= 0 && val < _.slideCount;
      });
      _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({"aria-hidden": "true", tabindex: "-1"}).find("a, input, button, select").attr({tabindex: "-1"});
      if (_.$dots !== null) {
        _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function (i) {
          var slideControlIndex = tabControlIndexes.indexOf(i);
          $(this).attr({role: "tabpanel", id: "slick-slide" + _.instanceUid + i, tabindex: -1});
          if (slideControlIndex !== -1) {
            var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;
            if ($("#" + ariaButtonControl).length) {
              $(this).attr({"aria-describedby": ariaButtonControl});
            }
          }
        });
        _.$dots.attr("role", "tablist").find("li").each(function (i) {
          var mappedSlideIndex = tabControlIndexes[i];
          $(this).attr({role: "presentation"});
          $(this).find("button").first().attr({role: "tab", id: "slick-slide-control" + _.instanceUid + i, "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex, "aria-label": i + 1 + " of " + numDotGroups, "aria-selected": null, tabindex: "-1"});
        }).eq(_.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end();
      }
      var i = _.currentSlide;
      for (var max = i + _.options.slidesToShow; i < max; i++) {
        if (_.options.focusOnChange) {
          _.$slides.eq(i).attr({tabindex: "0"});
        } else {
          _.$slides.eq(i).removeAttr("tabindex");
        }
      }
      _.activateADA();
    };
    Slick.prototype.initArrowEvents = function () {
      var _ = this;
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, _.changeSlide);
        _.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, _.changeSlide);
        if (_.options.accessibility === true) {
          _.$prevArrow.on("keydown.slick", _.keyHandler);
          _.$nextArrow.on("keydown.slick", _.keyHandler);
        }
      }
    };
    Slick.prototype.initDotEvents = function () {
      var _ = this;
      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        $("li", _.$dots).on("click.slick", {message: "index"}, _.changeSlide);
        if (_.options.accessibility === true) {
          _.$dots.on("keydown.slick", _.keyHandler);
        }
      }
      if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
        $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false));
      }
    };
    Slick.prototype.initSlideEvents = function () {
      var _ = this;
      if (_.options.pauseOnHover) {
        _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
        _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
      }
    };
    Slick.prototype.initializeEvents = function () {
      var _ = this;
      _.initArrowEvents();
      _.initDotEvents();
      _.initSlideEvents();
      _.$list.on("touchstart.slick mousedown.slick", {action: "start"}, _.swipeHandler);
      _.$list.on("touchmove.slick mousemove.slick", {action: "move"}, _.swipeHandler);
      _.$list.on("touchend.slick mouseup.slick", {action: "end"}, _.swipeHandler);
      _.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, _.swipeHandler);
      _.$list.on("click.slick", _.clickHandler);
      $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
      if (_.options.accessibility === true) {
        _.$list.on("keydown.slick", _.keyHandler);
      }
      if (_.options.focusOnSelect === true) {
        $(_.$slideTrack).children().on("click.slick", _.selectHandler);
      }
      $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _));
      $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
      $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
      $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
      $(_.setPosition);
    };
    Slick.prototype.initUI = function () {
      var _ = this;
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow.show();
        _.$nextArrow.show();
      }
      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        _.$dots.show();
      }
    };
    Slick.prototype.keyHandler = function (event) {
      var _ = this;
      if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
        if (event.keyCode === 37 && _.options.accessibility === true) {
          _.changeSlide({data: {message: _.options.rtl === true ? "next" : "previous"}});
        } else if (event.keyCode === 39 && _.options.accessibility === true) {
          _.changeSlide({data: {message: _.options.rtl === true ? "previous" : "next"}});
        }
      }
    };
    Slick.prototype.lazyLoad = function () {
      function loadImages(imagesScope) {
        $("img[data-lazy]", imagesScope).each(function () {
          var image = $(this);
          var imageSource = $(this).attr("data-lazy");
          var imageSrcSet = $(this).attr("data-srcset");
          var imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes");
          var imageToLoad = document.createElement("img");
          imageToLoad.onload = function () {
            image.animate({opacity: 0}, 100, function () {
              if (imageSrcSet) {
                image.attr("srcset", imageSrcSet);
                if (imageSizes) {
                  image.attr("sizes", imageSizes);
                }
              }
              image.attr("src", imageSource).animate({opacity: 1}, 200, function () {
                image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
              });
              _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
            });
          };
          imageToLoad.onerror = function () {
            image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
            _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
          };
          imageToLoad.src = imageSource;
        });
      }
      var _ = this;
      var loadRange;
      var cloneRange;
      var rangeStart;
      var rangeEnd;
      if (_.options.centerMode === true) {
        if (_.options.infinite === true) {
          rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
          rangeEnd = rangeStart + _.options.slidesToShow + 2;
        } else {
          rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
          rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
        }
      } else {
        rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
        rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
        if (_.options.fade === true) {
          if (rangeStart > 0) {
            rangeStart--;
          }
          if (rangeEnd <= _.slideCount) {
            rangeEnd++;
          }
        }
      }
      loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);
      if (_.options.lazyLoad === "anticipated") {
        var prevSlide = rangeStart - 1;
        var nextSlide = rangeEnd;
        var $slides = _.$slider.find(".slick-slide");
        for (var i = 0; i < _.options.slidesToScroll; i++) {
          if (prevSlide < 0) {
            prevSlide = _.slideCount - 1;
          }
          loadRange = loadRange.add($slides.eq(prevSlide));
          loadRange = loadRange.add($slides.eq(nextSlide));
          prevSlide--;
          nextSlide++;
        }
      }
      loadImages(loadRange);
      if (_.slideCount <= _.options.slidesToShow) {
        cloneRange = _.$slider.find(".slick-slide");
        loadImages(cloneRange);
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
        cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
        loadImages(cloneRange);
      } else if (_.currentSlide === 0) {
        cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1);
        loadImages(cloneRange);
      }
    };
    Slick.prototype.loadSlider = function () {
      var _ = this;
      _.setPosition();
      _.$slideTrack.css({opacity: 1});
      _.$slider.removeClass("slick-loading");
      _.initUI();
      if (_.options.lazyLoad === "progressive") {
        _.progressiveLazyLoad();
      }
    };
    Slick.prototype.next = Slick.prototype.slickNext = function () {
      var _ = this;
      _.changeSlide({data: {message: "next"}});
    };
    Slick.prototype.orientationChange = function () {
      var _ = this;
      _.checkResponsive();
      _.setPosition();
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function () {
      var _ = this;
      _.autoPlayClear();
      _.paused = true;
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function () {
      var _ = this;
      _.autoPlay();
      _.options.autoplay = true;
      _.paused = false;
      _.focussed = false;
      _.interrupted = false;
    };
    Slick.prototype.postSlide = function (index) {
      var _ = this;
      if (!_.unslicked) {
        _.$slider.trigger("afterChange", [_, index]);
        _.animating = false;
        if (_.slideCount > _.options.slidesToShow) {
          _.setPosition();
        }
        _.swipeLeft = null;
        if (_.options.autoplay) {
          _.autoPlay();
        }
        if (_.options.accessibility === true) {
          _.initADA();
          if (_.options.focusOnChange) {
            var $currentSlide = $(_.$slides.get(_.currentSlide));
            $currentSlide.attr("tabindex", 0).focus();
          }
        }
      }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function () {
      var _ = this;
      _.changeSlide({data: {message: "previous"}});
    };
    Slick.prototype.preventDefault = function (event) {
      event.preventDefault();
    };
    Slick.prototype.progressiveLazyLoad = function (tryCount) {
      tryCount = tryCount || 1;
      var _ = this;
      var $imgsToLoad = $("img[data-lazy]", _.$slider);
      var image;
      var imageSource;
      var imageSrcSet;
      var imageSizes;
      var imageToLoad;
      if ($imgsToLoad.length) {
        image = $imgsToLoad.first();
        imageSource = image.attr("data-lazy");
        imageSrcSet = image.attr("data-srcset");
        imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
        imageToLoad = document.createElement("img");
        imageToLoad.onload = function () {
          if (imageSrcSet) {
            image.attr("srcset", imageSrcSet);
            if (imageSizes) {
              image.attr("sizes", imageSizes);
            }
          }
          image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
          if (_.options.adaptiveHeight === true) {
            _.setPosition();
          }
          _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
          _.progressiveLazyLoad();
        };
        imageToLoad.onerror = function () {
          if (tryCount < 3) {
            setTimeout(function () {
              _.progressiveLazyLoad(tryCount + 1);
            }, 500);
          } else {
            image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
            _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
            _.progressiveLazyLoad();
          }
        };
        imageToLoad.src = imageSource;
      } else {
        _.$slider.trigger("allImagesLoaded", [_]);
      }
    };
    Slick.prototype.refresh = function (initializing) {
      var _ = this;
      var lastVisibleIndex = _.slideCount - _.options.slidesToShow;
      if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
        _.currentSlide = lastVisibleIndex;
      }
      if (_.slideCount <= _.options.slidesToShow) {
        _.currentSlide = 0;
      }
      var currentSlide = _.currentSlide;
      _.destroy(true);
      $.extend(_, _.initials, {currentSlide: currentSlide});
      _.init();
      if (!initializing) {
        _.changeSlide({data: {message: "index", index: currentSlide}}, false);
      }
    };
    Slick.prototype.registerBreakpoints = function () {
      var _ = this;
      var breakpoint;
      var currentBreakpoint;
      var l;
      var responsiveSettings = _.options.responsive || null;
      if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
        _.respondTo = _.options.respondTo || "window";
        for (breakpoint in responsiveSettings) {
          l = _.breakpoints.length - 1;
          if (responsiveSettings.hasOwnProperty(breakpoint)) {
            currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
            while (l >= 0) {
              if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                _.breakpoints.splice(l, 1);
              }
              l--;
            }
            _.breakpoints.push(currentBreakpoint);
            _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
          }
        }
        _.breakpoints.sort(function (a, b) {
          if (_.options.mobileFirst) {
            return a - b;
          } else {
            return b - a;
          }
        });
      }
    };
    Slick.prototype.reinit = function () {
      var _ = this;
      _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
      _.slideCount = _.$slides.length;
      if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
        _.currentSlide = _.currentSlide - _.options.slidesToScroll;
      }
      if (_.slideCount <= _.options.slidesToShow) {
        _.currentSlide = 0;
      }
      _.registerBreakpoints();
      _.setProps();
      _.setupInfinite();
      _.buildArrows();
      _.updateArrows();
      _.initArrowEvents();
      _.buildDots();
      _.updateDots();
      _.initDotEvents();
      _.cleanUpSlideEvents();
      _.initSlideEvents();
      _.checkResponsive(false, true);
      if (_.options.focusOnSelect === true) {
        $(_.$slideTrack).children().on("click.slick", _.selectHandler);
      }
      _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
      _.setPosition();
      _.focusHandler();
      _.paused = !_.options.autoplay;
      _.autoPlay();
      _.$slider.trigger("reInit", [_]);
    };
    Slick.prototype.resize = function () {
      var _ = this;
      if ($(window).width() !== _.windowWidth) {
        clearTimeout(_.windowDelay);
        _.windowDelay = window.setTimeout(function () {
          _.windowWidth = $(window).width();
          _.checkResponsive();
          if (!_.unslicked) {
            _.setPosition();
          }
        }, 50);
      }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
      var _ = this;
      if (typeof index === "boolean") {
        removeBefore = index;
        index = removeBefore === true ? 0 : _.slideCount - 1;
      } else {
        index = removeBefore === true ? --index : index;
      }
      if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
        return false;
      }
      _.unload();
      if (removeAll === true) {
        _.$slideTrack.children().remove();
      } else {
        _.$slideTrack.children(this.options.slide).eq(index).remove();
      }
      _.$slides = _.$slideTrack.children(this.options.slide);
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.append(_.$slides);
      _.$slidesCache = _.$slides;
      _.reinit();
    };
    Slick.prototype.setCSS = function (position) {
      var _ = this;
      var positionProps = {};
      if (_.options.rtl === true) {
        position = -position;
      }
      var x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
      var y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
      positionProps[_.positionProp] = position;
      if (_.transformsEnabled === false) {
        _.$slideTrack.css(positionProps);
      } else {
        positionProps = {};
        if (_.cssTransitions === false) {
          positionProps[_.animType] = "translate(" + x + ", " + y + ")";
          _.$slideTrack.css(positionProps);
        } else {
          positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
          _.$slideTrack.css(positionProps);
        }
      }
    };
    Slick.prototype.setDimensions = function () {
      var _ = this;
      if (_.options.vertical === false) {
        if (_.options.centerMode === true) {
          _.$list.css({padding: "0px " + _.options.centerPadding});
        }
      } else {
        _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
        if (_.options.centerMode === true) {
          _.$list.css({padding: _.options.centerPadding + " 0px"});
        }
      }
      _.listWidth = _.$list.width();
      _.listHeight = _.$list.height();
      if (_.options.vertical === false && _.options.variableWidth === false) {
        _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
        _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length));
      } else if (_.options.variableWidth === true) {
        _.$slideTrack.width(5e3 * _.slideCount);
      } else {
        _.slideWidth = Math.ceil(_.listWidth);
        _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length));
      }
      var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
      if (_.options.variableWidth === false) {
        _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
      }
    };
    Slick.prototype.setFade = function () {
      var _ = this;
      var targetLeft;
      _.$slides.each(function (index, element) {
        targetLeft = _.slideWidth * index * -1;
        if (_.options.rtl === true) {
          $(element).css({position: "relative", right: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0});
        } else {
          $(element).css({position: "relative", left: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0});
        }
      });
      _.$slides.eq(_.currentSlide).css({zIndex: _.options.zIndex - 1, opacity: 1});
    };
    Slick.prototype.setHeight = function () {
      var _ = this;
      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
        _.$list.css("height", targetHeight);
      }
    };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
      var _ = this;
      var l;
      var item;
      var option;
      var value;
      var refresh = false;
      var type;
      if ($.type(arguments[0]) === "object") {
        option = arguments[0];
        refresh = arguments[1];
        type = "multiple";
      } else if ($.type(arguments[0]) === "string") {
        option = arguments[0];
        value = arguments[1];
        refresh = arguments[2];
        if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") {
          type = "responsive";
        } else if (typeof arguments[1] !== "undefined") {
          type = "single";
        }
      }
      if (type === "single") {
        _.options[option] = value;
      } else if (type === "multiple") {
        $.each(option, function (opt, val) {
          _.options[opt] = val;
        });
      } else if (type === "responsive") {
        for (item in value) {
          if ($.type(_.options.responsive) === "array") {
            l = _.options.responsive.length - 1;
            while (l >= 0) {
              if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                _.options.responsive.splice(l, 1);
              }
              l--;
            }
            _.options.responsive.push(value[item]);
          } else {
            _.options.responsive = [value[item]];
          }
        }
      }
      if (refresh) {
        _.unload();
        _.reinit();
      }
    };
    Slick.prototype.setPosition = function () {
      var _ = this;
      _.setDimensions();
      _.setHeight();
      if (_.options.fade === false) {
        _.setCSS(_.getLeft(_.currentSlide));
      } else {
        _.setFade();
      }
      _.$slider.trigger("setPosition", [_]);
    };
    Slick.prototype.setProps = function () {
      var _ = this;
      var bodyStyle = document.body.style;
      _.positionProp = _.options.vertical === true ? "top" : "left";
      if (_.positionProp === "top") {
        _.$slider.addClass("slick-vertical");
      } else {
        _.$slider.removeClass("slick-vertical");
      }
      if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
        if (_.options.useCSS === true) {
          _.cssTransitions = true;
        }
      }
      if (_.options.fade) {
        if (typeof _.options.zIndex === "number") {
          if (_.options.zIndex < 3) {
            _.options.zIndex = 3;
          }
        } else {
          _.options.zIndex = _.defaults.zIndex;
        }
      }
      if (bodyStyle.OTransform !== undefined) {
        _.animType = "OTransform";
        _.transformType = "-o-transform";
        _.transitionType = "OTransition";
        if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) {
          _.animType = false;
        }
      }
      if (bodyStyle.MozTransform !== undefined) {
        _.animType = "MozTransform";
        _.transformType = "-moz-transform";
        _.transitionType = "MozTransition";
        if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) {
          _.animType = false;
        }
      }
      if (bodyStyle.webkitTransform !== undefined) {
        _.animType = "webkitTransform";
        _.transformType = "-webkit-transform";
        _.transitionType = "webkitTransition";
        if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) {
          _.animType = false;
        }
      }
      if (bodyStyle.msTransform !== undefined) {
        _.animType = "msTransform";
        _.transformType = "-ms-transform";
        _.transitionType = "msTransition";
        if (bodyStyle.msTransform === undefined) {
          _.animType = false;
        }
      }
      if (bodyStyle.transform !== undefined && _.animType !== false) {
        _.animType = "transform";
        _.transformType = "transform";
        _.transitionType = "transition";
      }
      _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
    Slick.prototype.setSlideClasses = function (index) {
      var _ = this;
      var centerOffset;
      var indexOffset;
      var remainder;
      var allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
      _.$slides.eq(index).addClass("slick-current");
      if (_.options.centerMode === true) {
        var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (_.options.infinite === true) {
          if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
            _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false");
          } else {
            indexOffset = _.options.slidesToShow + index;
            allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false");
          }
          if (index === 0) {
            allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center");
          } else if (index === _.slideCount - 1) {
            allSlides.eq(_.options.slidesToShow).addClass("slick-center");
          }
        }
        _.$slides.eq(index).addClass("slick-center");
      } else if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass("slick-active").attr("aria-hidden", "false");
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false");
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
        }
      }
      if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") {
        _.lazyLoad();
      }
    };
    Slick.prototype.setupInfinite = function () {
      var _ = this;
      var i;
      var slideIndex;
      var infiniteCount;
      if (_.options.fade === true) {
        _.options.centerMode = false;
      }
      if (_.options.infinite === true && _.options.fade === false) {
        slideIndex = null;
        if (_.slideCount > _.options.slidesToShow) {
          if (_.options.centerMode === true) {
            infiniteCount = _.options.slidesToShow + 1;
          } else {
            infiniteCount = _.options.slidesToShow;
          }
          for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
            slideIndex = i - 1;
            $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
          }
          for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
            slideIndex = i;
            $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
          }
          _.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
            $(this).attr("id", "");
          });
        }
      }
    };
    Slick.prototype.interrupt = function (toggle) {
      var _ = this;
      if (!toggle) {
        _.autoPlay();
      }
      _.interrupted = toggle;
    };
    Slick.prototype.selectHandler = function (event) {
      var _ = this;
      var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide");
      var index = parseInt(targetElement.attr("data-slick-index"));
      if (!index) {
        index = 0;
      }
      if (_.slideCount <= _.options.slidesToShow) {
        _.slideHandler(index, false, true);
        return;
      }
      _.slideHandler(index);
    };
    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
      var targetSlide;
      var animSlide;
      var targetLeft = null;
      var _ = this;
      var navTarget;
      sync = sync || false;
      if (_.animating === true && _.options.waitForAnimate === true) {
        return;
      }
      if (_.options.fade === true && _.currentSlide === index) {
        return;
      }
      if (sync === false) {
        _.asNavFor(index);
      }
      targetSlide = index;
      targetLeft = _.getLeft(targetSlide);
      var slideLeft = _.getLeft(_.currentSlide);
      _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
      if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
        if (_.options.fade === false) {
          targetSlide = _.currentSlide;
          if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(slideLeft, function () {
              _.postSlide(targetSlide);
            });
          } else {
            _.postSlide(targetSlide);
          }
        }
        return;
      } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
        if (_.options.fade === false) {
          targetSlide = _.currentSlide;
          if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(slideLeft, function () {
              _.postSlide(targetSlide);
            });
          } else {
            _.postSlide(targetSlide);
          }
        }
        return;
      }
      if (_.options.autoplay) {
        clearInterval(_.autoPlayTimer);
      }
      if (targetSlide < 0) {
        if (_.slideCount % _.options.slidesToScroll === 0) {
          animSlide = _.slideCount + targetSlide;
        } else {
          animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
        }
      } else if (targetSlide >= _.slideCount) {
        if (_.slideCount % _.options.slidesToScroll === 0) {
          animSlide = targetSlide - _.slideCount;
        } else {
          animSlide = 0;
        }
      } else {
        animSlide = targetSlide;
      }
      _.animating = true;
      _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);
      var oldSlide = _.currentSlide;
      _.currentSlide = animSlide;
      _.setSlideClasses(_.currentSlide);
      if (_.options.asNavFor) {
        navTarget = _.getNavTarget();
        navTarget = navTarget.slick("getSlick");
        if (navTarget.slideCount <= navTarget.options.slidesToShow) {
          navTarget.setSlideClasses(_.currentSlide);
        }
      }
      _.updateDots();
      _.updateArrows();
      if (_.options.fade === true) {
        if (dontAnimate === true) {
          _.postSlide(animSlide);
        } else {
          _.fadeSlideOut(oldSlide);
          _.fadeSlide(animSlide, function () {
            _.postSlide(animSlide);
          });
        }
        _.animateHeight();
        return;
      }
      if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
        _.animateSlide(targetLeft, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
    };
    Slick.prototype.startLoad = function () {
      var _ = this;
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
        _.$prevArrow.hide();
        _.$nextArrow.hide();
      }
      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
        _.$dots.hide();
      }
      _.$slider.addClass("slick-loading");
    };
    Slick.prototype.swipeDirection = function () {
      var swipeAngle;
      var _ = this;
      var xDist = _.touchObject.startX - _.touchObject.curX;
      var yDist = _.touchObject.startY - _.touchObject.curY;
      var r = Math.atan2(yDist, xDist);
      swipeAngle = Math.round(r * 180 / Math.PI);
      if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
      }
      if (swipeAngle <= 45 && swipeAngle >= 0) {
        if (_.options.rtl === false) {
          return "left";
        } else {
          return "right";
        }
      }
      if (swipeAngle <= 360 && swipeAngle >= 315) {
        if (_.options.rtl === false) {
          return "left";
        } else {
          return "right";
        }
      }
      if (swipeAngle >= 135 && swipeAngle <= 225) {
        if (_.options.rtl === false) {
          return "right";
        } else {
          return "left";
        }
      }
      if (_.options.verticalSwiping === true) {
        if (swipeAngle >= 35 && swipeAngle <= 135) {
          return "down";
        } else {
          return "up";
        }
      }
      return "vertical";
    };
    Slick.prototype.swipeEnd = function (event) {
      var _ = this;
      var slideCount;
      var direction;
      _.dragging = false;
      _.swiping = false;
      if (_.scrolling) {
        _.scrolling = false;
        return false;
      }
      _.interrupted = false;
      _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
      if (_.touchObject.curX === undefined) {
        return false;
      }
      if (_.touchObject.edgeHit === true) {
        _.$slider.trigger("edge", [_, _.swipeDirection()]);
      }
      if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
        direction = _.swipeDirection();
        switch (direction) {
          case "left":
          case "down":
            slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
            _.currentDirection = 0;
            break;
          case "right":
          case "up":
            slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
            _.currentDirection = 1;
            break;
          default:
        }
        if (direction != "vertical") {
          _.slideHandler(slideCount);
          _.touchObject = {};
          _.$slider.trigger("swipe", [_, direction]);
        }
      } else if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);
        _.touchObject = {};
      }
    };
    Slick.prototype.swipeHandler = function (event) {
      var _ = this;
      if (_.options.swipe === false || "ontouchend" in document && _.options.swipe === false) {
        return;
      } else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) {
        return;
      }
      _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
      _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
      if (_.options.verticalSwiping === true) {
        _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
      }
      switch (event.data.action) {
        case "start":
          _.swipeStart(event);
          break;
        case "move":
          _.swipeMove(event);
          break;
        case "end":
          _.swipeEnd(event);
          break;
      }
    };
    Slick.prototype.swipeMove = function (event) {
      var _ = this;
      var edgeWasHit = false;
      var swipeLength;
      var positionOffset;
      var touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
      if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
        return false;
      }
      var curLeft = _.getLeft(_.currentSlide);
      _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
      _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
      _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
      var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
      if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
        _.scrolling = true;
        return false;
      }
      if (_.options.verticalSwiping === true) {
        _.touchObject.swipeLength = verticalSwipeLength;
      }
      var swipeDirection = _.swipeDirection();
      if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
        _.swiping = true;
        event.preventDefault();
      }
      positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
      if (_.options.verticalSwiping === true) {
        positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
      }
      swipeLength = _.touchObject.swipeLength;
      _.touchObject.edgeHit = false;
      if (_.options.infinite === false) {
        if (_.currentSlide === 0 && swipeDirection === "right" || _.currentSlide >= _.getDotCount() && swipeDirection === "left") {
          swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
          _.touchObject.edgeHit = true;
        }
      }
      if (_.options.vertical === false) {
        _.swipeLeft = curLeft + swipeLength * positionOffset;
      } else {
        _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
      }
      if (_.options.verticalSwiping === true) {
        _.swipeLeft = curLeft + swipeLength * positionOffset;
      }
      if (_.options.fade === true || _.options.touchMove === false) {
        return false;
      }
      if (_.animating === true) {
        _.swipeLeft = null;
        return false;
      }
      _.setCSS(_.swipeLeft);
    };
    Slick.prototype.swipeStart = function (event) {
      var _ = this;
      var touches;
      _.interrupted = true;
      if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
        _.touchObject = {};
        return false;
      }
      if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
        touches = event.originalEvent.touches[0];
      }
      _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
      _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
      _.dragging = true;
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
      var _ = this;
      if (_.$slidesCache !== null) {
        _.unload();
        _.$slideTrack.children(this.options.slide).detach();
        _.$slidesCache.appendTo(_.$slideTrack);
        _.reinit();
      }
    };
    Slick.prototype.unload = function () {
      var _ = this;
      $(".slick-cloned", _.$slider).remove();
      if (_.$dots) {
        _.$dots.remove();
      }
      if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
      if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
      _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    };
    Slick.prototype.unslick = function (fromBreakpoint) {
      var _ = this;
      _.$slider.trigger("unslick", [_, fromBreakpoint]);
      _.destroy();
    };
    Slick.prototype.updateArrows = function () {
      var _ = this;
      var centerOffset = Math.floor(_.options.slidesToShow / 2);
      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
        _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
        if (_.currentSlide === 0) {
          _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
          _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
          _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
          _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
        } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
          _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
          _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
        }
      }
    };
    Slick.prototype.updateDots = function () {
      var _ = this;
      if (_.$dots !== null) {
        _.$dots.find("li").removeClass("slick-active").end();
        _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active");
      }
    };
    Slick.prototype.visibility = function () {
      var _ = this;
      if (_.options.autoplay) {
        if (document[_.hidden]) {
          _.interrupted = true;
        } else {
          _.interrupted = false;
        }
      }
    };
    $.fn.slick = function () {
      var _ = this;
      var opt = arguments[0];
      var args = Array.prototype.slice.call(arguments, 1);
      var l = _.length;
      var ret;
      for (var i = 0; i < l; i++) {
        if (typeof opt == "object" || typeof opt == "undefined") {
          _[i].slick = new Slick(_[i], opt);
        } else {
          ret = _[i].slick[opt].apply(_[i].slick, args);
        }
        if (typeof ret != "undefined") {
          return ret;
        }
      }
      return _;
    };
  };
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "undefined") {
    factory(jQuery);
  } else {
    module.exports = factory(require("jquery"));
  }
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
(function () {
  jQuery(document).ready(function ($) {
    function addMobileAccessBtn() {
      parrentLink_li.append('<span class="for-sub-menu"></span>');
      secondLink_li.append('<span class="sec-sub-menu"></span>');
    }
    function mobileMenuEasyDropDown() {
      addMobileAccessBtn();
      var subMenuBtn_span = $(".for-sub-menu");
      var secSubMenuBtn_span = $(".sec-sub-menu");
      subMenuBtn_span.on("click", function () {
        $(this).siblings(subMenu_ul).toggleClass("open");
      });
      secSubMenuBtn_span.on("click", function () {
        $(this).siblings(secSubMenu_ul).toggleClass("sec-open");
      });
    }
    function offCanvaMenu() {
      jQuery(".main-navigation").addClass("toggled");
      menuPrimary_ul.addClass("off_canva_nav");
      $("#primary-menu > li:first-child").addClass("focus");
      $("#primary-menu > li:first-child a").focus();
    }
    if (jQuery(".top-header-toggle-btn").length > 0) {
      $(".top-header-toggle-btn").on("click", function (e) {
        e.preventDefault();
        $(".site-header-topbar .container").toggle("slow");
        $(".top-header-toggle-btn i").toggleClass("ct-rotate");
      });
    }
    if ($(".hero_slick-slider").length > 0) {
      $(".hero_slick-slider").slick({items: 1, dots: false, infinite: true, centerMode: false, autoplay: true, lazyLoad: "ondemand", adaptiveHeight: true});
    }
    if ($(".go-to-top").length) {
      var scrollTrigger = $("body").position();
      goToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 150) {
          $(".footer-go-to-top").addClass("show");
        } else {
          $(".footer-go-to-top").removeClass("show");
        }
      };
      goToTop();
      $(window).on("scroll", function () {
        goToTop();
      });
      $(".go-to-top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({scrollTop: scrollTrigger.top}, 700);
      });
    }
    var menuPrimary_ul = $("#primary-menu");
    var parrentLink_li = $("#primary-menu > .menu-item-has-children");
    var secondLink_li = $("#primary-menu > .menu-item-has-children .menu-item-has-children");
    var subMenu_ul = $("#primary-menu > li  > .sub-menu");
    var secSubMenu_ul = $("#primary-menu .sub-menu .sub-menu");
    var MenuToggleBtn_button = $("#masthead .menu-toggle");
    var width = $(window).width();
    if (width < 992) {
      $(".main-navigation").on("keydown", function (e) {
        if ($(".main-navigation").hasClass("toggled")) {
          var focusableEls = $(".main-navigation a[href]:not([disabled]), .main-navigation button");
          var firstFocusableEl = focusableEls[0];
          var lastFocusableEl = focusableEls[focusableEls.length - 1];
          var KEYCODE_TAB = 9;
          if (e.key === "Tab" || e.keyCode === KEYCODE_TAB) {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
              }
            } else if (document.activeElement === lastFocusableEl) {
              firstFocusableEl.focus();
              e.preventDefault();
            }
          }
        }
      });
    }
    MenuToggleBtn_button.on("click", function () {
      offCanvaMenu();
      jQuery("#primary-menu .close_nav").on("click", function () {
        jQuery(".main-navigation").removeClass("toggled");
        menuPrimary_ul.removeClass("off_canva_nav");
        $(".menu-toggle").focus();
      });
    });
    mobileMenuEasyDropDown();
    if ($(".search-section").length) {
      var searchDialoge_section = $(".site > .search-section");
      var searchToggle_button = $(".search-toggle");
      var searchField_input = $(".site > .search-section .search-field");
      var searchClose_button = $(".close-btn");
      searchToggle_button.on("click", function () {
        searchDialoge_section.toggleClass("ct-search-access");
        setTimeout(function () {
          searchField_input.focus();
        }, 100);
        $(".site > .search-section").on("keydown", function (e) {
          if ($(".site > .search-section").hasClass("ct-search-access")) {
            var focusableEls = $(" .site > .search-section .close-btn, .site > .search-section .search-field, .site > .search-section .search-submit");
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];
            var KEYCODE_TAB = 9;
            if (e.key === "Tab" || e.keyCode === KEYCODE_TAB) {
              if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                  lastFocusableEl.focus();
                  e.preventDefault();
                }
              } else if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
              }
            }
          }
        });
        searchClose_button.on("click", function () {
          searchDialoge_section.removeClass("ct-search-access");
        });
      });
    }
    var at_body = $("body");
    var at_window = $(window);
    if (at_body.hasClass("ct-sticky-sidebar")) {
      $("#secondary, #primary").theiaStickySidebar();
    }
  });
  jQuery(window).on("load", function ($) {
    if (jQuery(".fairy-masonry").length > 0) {
      var $container = jQuery(".fairy-masonry");
      $container.masonry({itemSelector: ".fairy-masonry article.post", columnWidth: ".fairy-masonry article.post", percentPosition: true});
    }
  });
}());
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
$(($('a[href="#t-permalink"]').each((i, a) => $(a).prop("href", $("#t-permalink a").attr("href"))), void null));
