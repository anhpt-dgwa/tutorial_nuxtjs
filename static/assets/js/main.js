// main js
//======================
// Fix IE
var addClassltIE11 = function() {
  if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
    if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1 || window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) {
      $('body').addClass('ltie11');
    } else if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) {
      $('body').addClass('ltie7');
    }
  }
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 90
    }, 500);
    return false;
});


$(document).ready(function() {
  $("#hambuger").click(function() {
      $(this).find('.nav-icon').toggleClass("open");
      $(".gnav").slideToggle();
  });
});


// Fixed header
$(document).ready(function() {
  var hd = $(".page-header").height();
  var mv = $(".main-visual").height();
  var tt = (hd + mv);
  var box    = $(".gnav");
  //alert(tt);
  $(window).scroll(function() {
    $(this).scrollTop() >= tt ? box.addClass("fixed") : box.removeClass("fixed");
  });
});



$(function(){
  $(".main-visual").css({display:"none"});
  $('.main-visual').fadeIn(2000);
});

$(window).on('load',function(){
    // fade-up
    $('.animation').each(function(){
            var POS = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > POS - windowHeight){
                $(this).addClass('fadeInUp');
            }else {
                $(this).removeClass('fadeInUp');
            }
        });
    $(window).scroll(function (){
        $('.animation').each(function(){
            var POS = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > POS - windowHeight){
                $(this).addClass('fadeInUp');
            }else {
                $(this).removeClass('fadeInUp');
            }
        });
    });
});