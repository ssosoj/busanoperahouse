$(function() {

  $(document).ready(function() {

    var scrollOffset = $('.gnb_top').offset();

    $(window).scroll(function() {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('.gnb_top').addClass('scroll-fixed');
        $('.gnb_top').addClass('on');
      }
      else {
        $('.gnb_top').removeClass('scroll-fixed');
        $('.gnb_top').removeClass('on');
      }
    });
  });
});
