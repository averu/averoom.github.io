var canvasWidth = 649;
var canvasHeight = 1068;
// var canvasWidth = 608;
// var canvasHeight = 1000;
var exp = 1;
var h = $(window).height();
var w = $(window).width();
$(document).ready(function() {
  $('.drawer').drawer();
  $('#wrapper').drawer();
  $('#listcanvas').drawer();
  listMenuRefresh();
});
$('.drawer').drawer({
iscroll: {
  // Configuring the iScroll
  // https://github.com/cubiq/iscroll#configuring-the-iscroll
  mouseWheel: true,
  preventDefault: false
},
showOverlay: true
});
$('#wrapper').drawer({
iscroll: {
  // Configuring the iScroll
  // https://github.com/cubiq/iscroll#configuring-the-iscroll
  mouseWheel: true,
  preventDefault: false
},
showOverlay: false
});
$('#listcanvas').drawer({
iscroll: {
  // Configuring the iScroll
  // https://github.com/cubiq/iscroll#configuring-the-iscroll
  mouseWheel: true,
  preventDefault: false
},
showOverlay: false
});
$(window).on('resize', function(){
// 処理を記載
  h = $(window).innerHeight();
  $(".drawer-nav.list-nav").css({'top': h - 100,
                         'max-height': '200px'});
  // canvasWindowSize();
});
