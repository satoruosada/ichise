"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.addEventListener('DOMContentLoaded', function () {
  var main = new Main();
});

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    this.header = document.querySelector('.header ,.header-sec'); // this.header = document.querySelector('.header-sec');

    this.sides = document.querySelectorAll('.side');
    this._observers = [];

    this._init();
  }

  _createClass(Main, [{
    key: "observers",
    get: function get() {
      return this._observers;
    },
    set: function set(val) {
      this._observers.push(val);
    }
  }, {
    key: "_init",
    value: function _init() {
      new MobileMenu();
      Pace.on('done', this._paceDone.bind(this));
    }
  }, {
    key: "_paceDone",
    value: function _paceDone() {
      this._scrollInit();
    }
  }, {
    key: "_inviewAnimation",
    value: function _inviewAnimation(el, inview) {
      if (inview) {
        el.classList.add('inview');
      } else {
        el.classList.remove('inview');
      }
    }
  }, {
    key: "_navAnimation",
    value: function _navAnimation(el, inview) {
      if (inview) {
        this.header.classList.remove('triggered');
      } else {
        this.header.classList.add('triggered');
      }
    }
  }, {
    key: "_destroyObservers",
    value: function _destroyObservers() {
      this.observers.forEach(function (ob) {
        ob.destroy();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyObservers();
    }
  }, {
    key: "_scrollInit",
    value: function _scrollInit() {
      this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {
        once: false
      });
      this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
      this.observers = new ScrollObserver('.js-appear', this._inviewAnimation);
    }
  }]);

  return Main;
}(); // スクロール


var pagetopBtn = jQuery(".footer__scroll-a");
pagetopBtn.hide();
jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 400) {
    pagetopBtn.fadeIn();
  } else {
    pagetopBtn.fadeOut();
  }
});
jQuery(window).scroll(function () {
  var height = jQuery(document).height();
  var position = jQuery(window).height() + jQuery(window).scrollTop();
  var footer = jQuery(".footer").outerHeight();

  if (height - position < footer) {
    pagetopBtn.css({
      bottom: 250
    });
  } else {
    pagetopBtn.css({
      position: "fixed",
      bottom: 10
    });
  }
});
var pagetopBtn02 = jQuery(".footer__scroll-a-sp");
pagetopBtn02.hide();
jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 400) {
    pagetopBtn02.fadeIn();
  } else {
    pagetopBtn02.fadeOut();
  }
});
jQuery(window).scroll(function () {
  var height02 = jQuery(document).height();
  var position02 = jQuery(window).height() + jQuery(window).scrollTop();
  var footer02 = jQuery(".footer__nav").outerHeight();

  if (height02 - position02 < footer02) {
    pagetopBtn02.css({
      bottom: 480
    });
  } else {
    pagetopBtn02.css({
      position: "fixed",
      bottom: 100
    });
  }
}); // aタグスクロール

jQuery(function () {
  jQuery('a[href^="#"]').click(function () {
    var speed = 500;
    var href = jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    jQuery("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});
ScrollReveal().reveal('.panel__left', {
  duration: 2000,
  // アニメーションの完了にかかる時間
  viewFactor: 0.5,
  // 0~1,どれくらい見えたら実行するか
  reset: false // 何回もアニメーション表示するか

});
ScrollReveal().reveal('.panel__right', {
  duration: 2000,
  // アニメーションの完了にかかる時間
  viewFactor: 0.5,
  // 0~1,どれくらい見えたら実行するか
  reset: false // 何回もアニメーション表示するか

});
//# sourceMappingURL=main.js.map
