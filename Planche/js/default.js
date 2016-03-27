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
  // $(".drawer-nav.list-menu").css({'overflow': 'auto'});
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
  preventDefault: false,
},
showOverlay: false
});
$('#listcanvas').drawer({
iscroll: {
  // Configuring the iScroll
  // https://github.com/cubiq/iscroll#configuring-the-iscroll
  mouseWheel: true,
  preventDefault: false,
},
showOverlay: false
});
$(window).on('resize', function(){
// 処理を記載
w = $(window).width();
if (w < deviceSize) {
  h = $(window).innerHeight();
  $(".drawer-nav.list-menu").css({'top': h - 100,
                         'max-height': '200px'});
  // canvasWindowSize();
}
});
// $(function(){
//   $('#wrapper').scrollfade();
// });
// $('.list-menu').scroll(function () {
//   console.log("すくろーる");
//   var name_top =  $('#name10').offset().top;
//   console.log('高さ：'+name_top);
//   h = $('.list-menu').height() / 2;
//   if (h-25 < name_top && h+25 > name_top) {
//     $("#name10").css({'background-color': '#eee'});
//   }
//   else{
//     $("#name10").css({'background-color': '#463e4c'});
//   }
// });
// $('.list-menu').on('scroll', function() {
//     scrollDirection();
// });
// $('.list-menu').on('touchmove', function() {
//     scrollDirection();
// });
// var newScrollPoint = 0; // 現在のスクロール位置
// var scrollPoint = 0; // 現在のスクロール位置との比較用
//
// function scrollDirection() {
//     newScrollPoint = $('.list-menu').scrollTop(); // 現在のスクロール位置を取得
//     // 上にスクロールした時
//     if(newScrollPoint < scrollPoint) {
//         // $('.pagetop').show();
//         h = $('.list-menu').innerHeight() / 2;
//         console.log(h);
//         var name_top =  $('#name10').position().top;
//         if (h-50 < name_top && h+50 > name_top) {
//           $("#name10").css({'background-color': '#eee'});
//         }
//         else{
//           $("#name10").css({'background-color': '#463e4c'});
//         }
//     // 下にスクロールした時
//     } else {
//         // $('.pagetop').hide();
//         var name_top =  $('#name10').position().top;
//         h = $('.list-menu').innerHeight() / 2;
//         console.log('メニュー:'+h+',ヘアピン:'+name_top);
//           if (h-50 < name_top && h+50 > name_top) {
//             $("#name10").css({'background-color': '#eee'});
//           }
//           else{
//             $("#name10").css({'background-color': '#463e4c'});
//           }
//     }
//     scrollPoint = $('.list-menu').scrollTop(); // 現在のスクロール位置を比較用に上書きしておく
// }
