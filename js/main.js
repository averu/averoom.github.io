
$(document).ready(function(){
    /* 処理 */
});
/* ページ読み込み後 **************/
$(window).load(function(){
    /* 処理 */
    //画面の高さを取得して、変数wHに代入
    var wW = $(window).width();
    var wH = $(window).height();
    //高さを取得を取得して、変数divHに代入
    var divW = $('.title').innerWidth();
    var divH = $('.title').innerHeight();
    var divW = parseInt($('.title').css('width'), 10);
    var divH = parseInt($('.title').css('height'), 10);
    console.log(logo+","+divW+","+divH);
    // ボックス要素より画面サイズが大きければ実行
    if(wW > divW){
      // 横幅を加える
      $('.title').css('width',wW+'px' );
    }
    if(wH > divH){
      // 縦幅を加える
      $('.title').css('height',wH+'px' );
    }
});

$(window).resize(function() {
  var wW = $(window).width();
  var wH = $(window).height();
  if(wW > 500){
    // 高さを加える
    $('.title').css('width',wW+'px');
  }
  if(wH > 500){
    // 高さを加える
    $('.title').css('height',wH+'px');
  }
});
$(function() {
  var rotate = function(logo, angle) {
    logo.css({
      "transform" : "rotate("+angle+"deg)"
    });
  }
  $(window).scroll(function(){
    rotate($("#star"), $(window).scrollTop()*0.4);
  })
});
