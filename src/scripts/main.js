document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header ,.header-sec');
        // this.header = document.querySelector('.header-sec');
        this.sides = document.querySelectorAll('.side');
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val);
    }

    get observers() {
        return this._observers;
    }

    _init() {
        new MobileMenu();
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._scrollInit();
    }

    _inviewAnimation(el, inview) {
        if (inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, inview) {
        if (inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    _destroyObservers() {
        this.observers.forEach(ob => {
            ob.destroy();
        });
    }

    destroy() {
        this._destroyObservers();
    }

    _scrollInit() {
        this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false });
        this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
        this.observers = new ScrollObserver('.js-appear', this._inviewAnimation);
    }
}


// スクロール
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
            bottom: 250,
        });
    } else {
        pagetopBtn.css({
            position: "fixed",
            bottom: 10,
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
            bottom: 480,
        });
    } else {
        pagetopBtn02.css({
            position: "fixed",
            bottom: 100,
        });
    }
});





// aタグスクロール
jQuery(function () {
    jQuery('a[href^="#"]').click(function () {
        let speed = 500;
        let href = jQuery(this).attr("href");
        let target = jQuery(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        jQuery("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

ScrollReveal().reveal('.panel__left', {
    duration: 2000, // アニメーションの完了にかかる時間
    viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
    reset: false   // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.panel__right', {
    duration: 2000, // アニメーションの完了にかかる時間
    viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
    reset: false   // 何回もアニメーション表示するか
});