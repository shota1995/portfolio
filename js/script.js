$(function () {
  $('#title').hide();
  $('#title').fadeIn(2000);
  $('.title-sub').hide();
  $('.title-sub').fadeIn(400);
});


$('.header').css({
  'height': $(window).height()
});

$(window).on('resize', function () {
  winH = $(window).height();
  $('.header').outerHeight(winH);
});

$(function () {
  $("#title").hover(function () {
    ("#title").append('<div id="bg">');
    $("#bg").hide();
    return false;
  });
});
