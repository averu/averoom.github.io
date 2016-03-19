var canvasWidth = 649;
var canvasHeight = 1068;
var exp = 1;
$(document).ready(function() {
  $('.drawer').drawer();
  var i = 0;
  var h = $(window).height();
  if (h < canvasHeight) {
    exp = h / canvasHeight;
    canvas.width = canvasWidth * exp;
    canvas.height = canvasHeight * exp;
    // ctx.scale(exp, exp);
  }
  for (var i = 0; i < 15; i++) {
    if(i<6){
      fileArry[i] = '../Planche/img/'+ path +'/layer' + i +'/' + i + '' + presetArry[0][i] +'.png';
    }
    else{
      fileArry[i] = '..Planche//img/layer' + i +'/' + i + '' + presetArry[0][i] +'.png';
    }
    layerCounter[i] = presetArry[0][i];
    $(".counter#"+i).html(layerCounter[i]);
  }
  loadImges();
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
