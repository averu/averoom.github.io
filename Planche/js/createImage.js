var model = 'yukari';
var path = '/pose1';
var adult = false;
var partsLength = {'yukari':15, '76maki':12};
var fileArry = new Array(partsLength[model]);
var layerCounter = new Array(partsLength[model]);
var numMaterials = fileArry.length;
var loadedCounter = 0;
var imgObjArry = [];
var canvas;
var ctx;
var modelInfo = {'yukari':[649,1068,'/pose1'],
                 '76maki':[1105,2000,'']
                };
var presetArry = [
                  [5,0,0,0,0,0,2,0,1,4,0,29,1,1,0,0,0],
                  [3,0,0,0,0,0,0,0,2,3,0,19,1,1,0,0,0],
                  [0,0,0,0,1,3,0,0,3,2,0,6,1,1,0,0,0],
                  [6,0,0,0,0,0,0,0,4,0,0,15,1,1,4,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,49,1,2,4,8,3],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                 ];
var defaultPose = {'yukari':[5,0,0,0,0,0,2,0,1,4,0,29,1,1,0,0,0],
                 '76maki':[0,0,0,0,0,0,0,0,0,0,0,0]
                };
var imgLength = {'yukari/pose1':[6,4,4,4,1,3,3,0,7,4,3,52,1,2,4,23,3],
                 'yukari/pose2':[13,4,4,4,1,3,3,0,7,4,3,52,1,2,4,23,3],
                 'yukari/pose3':[6,4,4,4,1,3,3,0,7,4,3,52,1,2,4,23,3],
                 'yukari/pose4':[7,4,7,4,1,5,3,1,7,4,3,52,1,2,4,23,3],
                 'yukari/pose5':[6,4,4,4,1,3,3,0,7,4,3,52,1,2,4,23,3],
                 '76maki':[1,1,0,7,11,3,7,4,7,0,0,5]
                };
var partsName = {'yukari':['服装','下着(上)','下着(下)','ガーター','スカート','上着','パーカー','サイドロング','リング',
                          'ヘアピン','影','表情','鼻','頬','汗','感情','アレ'],
                 '76maki':['ポニテ','アホ毛','身体','目','口','ほっぺ','まゆげ','汗','感情','銃','手','エンブレム']
                };
// var makiLength = [1,1,0,7,11,3,7,4,7,0,0,5];
function poseChanges(poseDir){
  if(model != 'yukari'){
    return false;
  }
  path = poseDir;
  for (var i = 0; i < partsLength[model]; i++) {
    if(i<8){
      fileArry[i] = '../Planche/img/'+ model + path +'/layer' + i +'/' + presetArry[0][i] +'.png';
    }
    else{
      fileArry[i] = '../Planche/img/'+ model +'/layer' + i +'/' + presetArry[0][i] +'.png';
    }
    layerCounter[i] = presetArry[0][i];
  }
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  loadImges();
}
function presetChanges(preset){
  if(model != 'yukari'){
    return false;
  }
  for (var i = 0; i < partsLength[model]; i++) {
    if(i<8){
      fileArry[i] = '../Planche/img/'+ model + path +'/layer' + i +'/' + presetArry[preset][i] +'.png';
    }
    else{
      fileArry[i] = '../Planche/img/' + model + '/layer' + i +'/' + presetArry[preset][i] +'.png';
    }
    layerCounter[i] = presetArry[preset][i];
    $("#counter"+i).html(layerCounter[i]);
  }
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  loadImges();
}
function modelChanges(change){
  model = change;
  canvasWidth = modelInfo[model][0];
  canvasHeight = modelInfo[model][1];
  path = modelInfo[model][2];
  fileArry = new Array(partsLength[model]);
  layerCounter = new Array(partsLength[model]);
  numMaterials = fileArry.length;
  $("#listname").html('');
  $("#listreturn").html('');
  $("#listcounter").html('');
  $("#listnext").html('');
  $("#listcanvas").html('');
  for (var i = 0; i < partsLength[model]; i++) {
    if(i<8){
      fileArry[i] = '../Planche/img/'+ model + path +'/layer' + i +'/' + defaultPose[model][i] +'.png';
    }
    else{
      fileArry[i] = '../Planche/img/'+ model + '/layer' + i +'/' + defaultPose[model][i] +'.png';
    }
    layerCounter[i] = defaultPose[model][i];
    $("#listname").append('<li class="name" id="name'+i+'" value="'+i+'">'+ partsName[model][i] +'</li>');
    $("#listreturn").append('<li class="return" id="return'+i+'" value="'+i+'">◀</li>');
    $("#listcounter").append('<li class="counter" id="counter'+i+'">' + layerCounter[i] + '</li>');
    $("#listnext").append('<li class="next" id="next'+i+'" value="'+i+'">▶</li>');
    // $("#counter"+i).html(layerCounter[i]);
  }
  w = $(window).width();
  if(w > 550){
    $("#listcanvas").append('<canvas id="canvasElem" width="649" height="1068"></canvas>');
  }else{
    $("#listname").html('');
    $("#listcounter").html('');
    $("#listreturn").css({'padding-top': 50});
    $("#listnext").css({'padding-top': 50});
    $("#listcounter").append('<canvas id="canvasElem" width="649" height="1068"></canvas>');
  }
  canvas = document.getElementById('canvasElem');
  ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  canvasWindowSize();
  loadImges();
}
function adultMode(){
  if(adult){
    if(imgLength['yukari'+path][0] == 15){
      imgLength['yukari'+path][0] -= 2;
    }else{
      imgLength['yukari'+path][0] -= 1;
    }
    layerCounter[0] = 0;
    adult = false;
    $("#adult").html('R18');
  }else{
    if(imgLength['yukari'+path][0] == 13){
      imgLength['yukari'+path][0] += 2;
    }else{
      imgLength['yukari'+path][0] += 1;
    }
    layerCounter[0] = imgLength['yukari'+path][0];
    adult = true;
    $("#adult").html('健全');
  }
  fileArry[0] = '../Planche/img/'+ model + path +'/layer0/' + layerCounter[0] +'.png';
  $("#counter0").html(layerCounter[0]);
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  loadImges();
}
function canvasWindowSize(){
  h = $(window).height();
  w = $(window).width();
  if (w < 550) {
    exp =  300 / canvasWidth;
    canvas.width = canvasWidth * exp;
    canvas.height = canvasHeight * exp;
  }else{
    if (h < canvasHeight) {
      exp = h / canvasHeight;
      canvas.width = canvasWidth * exp;
      canvas.height = canvasHeight * exp;
    }
  }
}
function canvasDefault(){
  if (exp < 1) {
    exp = 1;
    $("#canvasResize").html("窓サイズ");
  }else{
    if (w < 550) {
      exp =  300 / canvasWidth;
    }else{
      if (h < canvasHeight) {
        exp = h / canvasHeight;
      }
    }
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
$(document).on('click', '.return', function(){
  var index = $(this).attr("value");
  if (0 < layerCounter[index]) {
    layerCounter[index] -= 1;
  }
  else{
    layerCounter[index] = imgLength[model+path][index];
  }
  if (index < 8) {
    fileArry[index] = '../Planche/img/'+ model + path +'/layer'+ index +'/' + layerCounter[index] + '.png';
  }
  else{
    fileArry[index] = '../Planche/img/' + model + '/layer'+ index +'/' + layerCounter[index] + '.png';
  }
  $("#counter"+index).html(layerCounter[index]);
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  numMaterials = fileArry.length;
  loadImges();
});
$(document).on('click', '.next', function(){
  var index = $(this).attr("value");
  if (layerCounter[index] < imgLength[model+path][index]) {
    layerCounter[index] += 1;
  }
  else{
    layerCounter[index] = 0;
  }
  if (index < 8) {
    fileArry[index] = '../Planche/img/'+ model + path +'/layer'+ index +'/' + layerCounter[index] + '.png';
  }
  else{
    fileArry[index] = '../Planche/img/'+ model + '/layer'+ index +'/' + layerCounter[index] + '.png';
  }
  $(".counter#counter"+index).html(layerCounter[index]);
  ctx.clearRect(0,0,canvasWidth * exp, canvasHeight * exp);
  numMaterials = fileArry.length;
  loadImges();
});
$('.brand-menu-effect, .dropdown-menu-effect').on('mousedown', function(e){
  var _self   = this;
  var x       = e.offsetX;
  var y       = e.offsetY;
  var $effect = $(_self).find('.drawer-effect');
  var w       = $effect.width();
  var h       = $effect.height();
  var _class =  $(_self).attr("class");
  var bkc = '#B195C4';
  if(_class == "drawer-brand brand-menu-effect"){
    bkc = '#92A8D1';
  }
  $effect.css({
    left: x - w / 2,
    top: y - h / 2,
    'background-color': bkc
  });
  if (!$effect.hasClass('is-show')) {
    $effect.addClass('is-show');
    $(".is-show").on('webkitAnimationEnd', function(){
      $effect.removeClass('is-show');
    });
  }
  return false;
});
