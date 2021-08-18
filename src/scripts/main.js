
document.addEventListener('DOMContentLoaded' , function(){
    const cb = function (el, inview) {
      if(inview) {
        const ta = new TweenTextAnimation(el);
        ta.animate();
      }
  }
  
  const so = new ScrollObserver('.tween-animate-title', cb);
  
  
  const _inviewAnimation = function(el, inview){
    if(inview){
      el.classList.add('inview');
    }else{
      el.classList.remove('inview');
    }
  }
  const so2 = new ScrollObserver('.appear', _inviewAnimation);
  
  
  const header = document.querySelector('.header');
  
  const _navAnimation = function(el, inview){
    if(inview) {
      header.classList.remove('triggered');
  } else {
      header.classList.add('triggered');
  }
  }
  
  const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false});
  
  new MobileMenu();
  });
  



//パララックスios対応
$(function () {
    const ua = navigator.userAgent.toLowerCase();
    // alert(ua);
    if (ua.indexOf('iphone') > -1 || (ua.indexOf('android') > -1 && ua.indexOf('mobile') > -1)) {
        // スマートフォン
        // alert('スマートフォン');
        $('body').addClass('is-ios');
  
    } else if (ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) {
        // タブレット
        // alert('タブレット');
        $('body').addClass('is-ios');
    } else {
        // PC
        // alert('PC');
        $('body').removeClass('is-ios');
    }
})


// メイン画像スライド
$(document).on('ready', function () {
  $(".full-screen_one").slick({
    centerMode: true,
    centerPadding: '5%',
    dots: true,
    autoplay: false,
    autoplaySpeed: 10000,
    speed: 1000,
    infinite: true
  });
  $(".full-screen_one").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    switch (currentSlide) {
      case 0:
        // 1枚目のスライド
        $(this).slick("slickSetOption", "autoplaySpeed", 10000);
        break;

      default:
        // その他のスライド
        $(this).slick("slickSetOption", "autoplaySpeed", 3500);
        break;
    }
  });
});


// トップへのボタン
jQuery(function($){

  var sideBar = $('.footer__scroll');
  sideBar.hide();
  
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        sideBar.fadeIn();
      } else {
        sideBar.fadeOut();
      }
  });
});
// トップへのボタン
jQuery(function($){

  var sideBar = $('.footer__scroll-02');
  sideBar.hide();
  
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        sideBar.fadeIn();
      } else {
        sideBar.fadeOut();
      }
  });
});

// レスポンシブ用トップへのボタン
var pagetopBtn = $('.footer__scroll-res,.footer__scroll-02-res');
    pagetopBtn.hide();
 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetopBtn.fadeIn();
        } else {
            pagetopBtn.fadeOut();
        }
    });
 
    $(window).scroll(function () {
        var height = $(document).height();
        var position = $(window).height() + $(window).scrollTop();
        var footer = $("footer").outerHeight();
        if ( height - position  < footer) {
            pagetopBtn.css({
                bottom : 180
            });
        } else {
            pagetopBtn.css({
                position : "fixed",
                bottom: 30
            });
        }
    });

    pagetopBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


// アコーディオンメニュー
jQuery(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  jQuery('.accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    jQuery(this).next('.accordion_inner').slideToggle();
    jQuery(this).toggleClass("open");
    
  });
  //閉じるボタンがクリックされたら
  jQuery('.s_05 a.close_btn').click(function () {
    //クリックされたa.close_btnの親要素の.accordion_oneの.accordion_innerを閉じる。
    jQuery(this).parents('.accordion_inner').slideUp();
    jQuery('.accordion_header').removeClass("open");
  });
});

// ページ内リンク
jQuery(function(){
  // 閉じるボタンをクリックした場合に処理
  jQuery('.s_05 a.close_btn').click(function() {
    // 移動先を0px上にずらす
    var adjust = 200;
    // スクロールの速度
    var speed = 500; // ミリ秒
    // アンカーの値取得
    var href= jQuery(this).attr("href");
    // 移動先を取得
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top - adjust;
    // スムーススクロール
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
