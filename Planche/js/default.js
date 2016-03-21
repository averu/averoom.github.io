var canvasWidth = 649;
var canvasHeight = 1068;
// var canvasWidth = 608;
// var canvasHeight = 1000;
var exp = 1;
$(document).ready(function() {
  $('.drawer').drawer();
  var i = 0;
  canvasWindowSize();
  for (var i = 0; i < 17; i++) {
    if(i<8){
      fileArry[i] = '../img/'+ model + path +'/layer' + i +'/' + presetArry[0][i] +'.png';
    }
    else{
      fileArry[i] = '../img/'+ model + '/layer' + i +'/' + presetArry[0][i] +'.png';
    }
    layerCounter[i] = presetArry[0][i];
    $("#listname").append('<li class="name" id="name'+i+'" value="'+i+'">'+ partsName[model][i] +'</li>');
    $("#listreturn").append('<li class="return" id="return'+i+'" value="'+i+'">◀</li>');
    $("#listcounter").append('<li class="counter" id="counter'+i+'">' + layerCounter[i] + '</li>');
    $("#listnext").append('<li class="next" id="next'+i+'" value="'+i+'">▶</li>');
    // $("#counter"+i).html(layerCounter[i]);
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
