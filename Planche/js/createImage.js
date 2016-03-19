var path = 'pose1';
var fileArry = new Array(15);
var layerCounter = new Array(15);
var numMaterials = fileArry.length;
var loadedCounter = 0;
var imgObjArry = [];
var canvas = document.getElementById('canvasElem');
var ctx = canvas.getContext('2d');
var presetArry = [
                  [6,0,0,0,2,0,1,4,0,29,1,0,1,0,0],
                  [4,0,0,0,0,0,2,3,0,19,1,0,1,0,0],
                  [0,0,1,3,0,0,3,2,0,6,1,0,1,0,0],
                  [7,0,0,0,0,0,4,0,0,15,1,4,1,0,0],
                  [0,0,0,0,0,0,0,0,0,49,2,4,1,8,3],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                 ];
var imgLength = [7,4,1,3,3,0,7,4,3,52,2,4,1,23,3];
function poseChanges(poseDir){
  path = poseDir;
  for (var i = 0; i < 15; i++) {
    if(i<6){
      fileArry[i] = '../Planche/img/'+ path +'/layer' + i +'/' + i + '' + presetArry[0][i] +'.png';
    }
    else{
      fileArry[i] = '../Planche/img/layer' + i +'/' + i + '' + presetArry[0][i] +'.png';
    }
    layerCounter[i] = presetArry[0][i];
  }
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  loadImges();
}
function presetChanges(preset){
  for (var i = 0; i < 15; i++) {
    if(i<6){
      fileArry[i] = '../Planche/img/'+ path +'/layer' + i +'/' + i + '' + presetArry[preset][i] +'.png';
    }
    else{
      fileArry[i] = '../Planche/img/layer' + i +'/' + i + '' + presetArry[preset][i] +'.png';
    }
    layerCounter[i] = presetArry[preset][i];
    $(".counter#"+i).html(layerCounter[i]);
  }
  if(layerCounter[12]){
    $(".check").html("□");
  }else{
    $(".check").html("■");
  }
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  loadImges();
}
function canvasDefault(){
  if (exp < 1) {
    exp = 1;
    $("#canvasResize").html("窓サイズ");
  }else{
    var h = $(window).height();
    exp = h / canvasHeight;
    $("#canvasResize").html("原寸大");
  }
  canvas.width = canvasWidth * exp;
  canvas.height = canvasHeight * exp;
  loadImges();
}
function loadImges(){
  var imgObj = new Image();
  imgObj.addEventListener('load',
    function(){
      loadedCounter++;
      imgObjArry.push(imgObj);
      if(numMaterials == loadedCounter){
        drawImges();
      }else{
        loadImges();
      }
    },false);
  imgObj.src = fileArry[imgObjArry.length];
}
function drawImges(){
  for (var i in imgObjArry){
    ctx.drawImage(imgObjArry[i], 0, 0, canvasWidth * exp, canvasHeight * exp);
    imgObjArry[i] = null;
  }
  imgObjArry.length = 0;
  loadedCounter = 0;
}
function saveImges(){
  var dataURL = canvas.toDataURL('image/png');
  window.open(dataURL);
}
$('.return').on('click', function(){
  var index = $(this).attr("value");
  if (0 < layerCounter[index]) {
    layerCounter[index] -= 1;
  }
  else{
    layerCounter[index] = imgLength[index];
  }
  if (index < 6) {
    fileArry[index] = '../Planche/img/'+ path +'/layer'+ index +'/'+ index + '' + layerCounter[index] + '.png';
  }
  else{
    fileArry[index] = '../Planche/img/layer'+ index +'/'+ index + '' + layerCounter[index] + '.png';
  }
  $(".counter#"+index).html(layerCounter[index]);
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  numMaterials = fileArry.length;
  loadImges();
});
$('.next').on('click', function(){
  var index = $(this).attr("value");
  if (layerCounter[index] < imgLength[index]) {
    layerCounter[index] += 1;
  }
  else{
    layerCounter[index] = 0;
  }
  if (index < 6) {
    fileArry[index] = '../Planche/img/'+ path +'/layer'+ index +'/'+ index + '' + layerCounter[index] + '.png';
  }
  else{
    fileArry[index] = '../Planche/img/layer'+ index +'/'+ index + '' + layerCounter[index] + '.png';
  }
  $(".counter#"+index).html(layerCounter[index]);
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  numMaterials = fileArry.length;
  loadImges();
});
$('.check').on('click', function(){
  var index = $(this).attr("value");
  if (layerCounter[index] < imgLength[index]) {
    layerCounter[index] += 1;
    $(this).html("□");
  }
  else{
    layerCounter[index] = 0;
    $(this).html("■");
  }
  fileArry[index] = '../Planche/img/layer'+ index +'/'+ index + '' + layerCounter[index] + '.png';
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  numMaterials = fileArry.length;
  loadImges();
});
