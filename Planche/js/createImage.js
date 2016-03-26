var model = 'yukari';
var path = '/pose1';
var adult = false;
var partsLength = {'yukari':18, '76_maki':12, '76_yukari':19, 'yu_yukari':13};
var fileArry = new Array(partsLength[model]);
var layerCounter = new Array(partsLength[model]);
var numMaterials = fileArry.length;
var loadedCounter = 0;
var imgObjArry = [];
var canvas;
var ctx;
var deviceSize = 500;
var poseLayerCounter = 9;
var canvasDisplay = true;
var modelInfo = {'yukari':[649,1068,'/pose1'],
                 '76_maki':[553,1000,''],
                 '76_yukari':[707,1000,''],
                 'yu_yukari':[699,1090,'']
                };
var presetArry = {
                  'yukari0':[5,0,0,0,0,0,1,2,0,1,4,0,29,1,1,0,0,0],
                  'yukari1':[3,0,0,0,0,0,2,0,0,2,3,0,19,1,1,0,0,0],
                  'yukari2':[0,0,0,0,1,3,2,0,0,3,2,0,6,1,1,0,0,0],
                  'yukari3':[6,0,0,0,0,0,0,0,0,4,0,0,15,1,1,4,0,0],
                  'yukari4':[0,0,0,0,0,0,0,0,0,0,0,0,49,1,2,4,8,3],
                  'yukari5':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                };
var defaultPose = {'yukari':[5,0,0,0,0,0,1,2,0,1,4,0,29,1,1,0,0,0],
                 '76_maki':[0,0,0,0,0,0,0,0,0,0,0,0],
                 '76_yukari':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 'yu_yukari':[0,0,0,0,0,0,0,0,0,0,0,0,0]
                };
var imgLength = {'yukari/pose1':[6 ,4,4,4,1,3,2,3,0,7,4,3,52,1,2,4,23,3],
                 'yukari/pose2':[13,4,4,4,1,3,2,3,0,7,4,3,52,1,2,4,23,3],
                 'yukari/pose3':[6 ,4,4,4,1,3,2,3,0,7,4,3,52,1,2,4,23,3],
                 'yukari/pose4':[7 ,4,7,4,1,5,2,3,1,7,4,3,52,1,2,4,23,3],
                 'yukari/pose5':[6 ,4,4,4,1,3,2,3,0,7,4,3,52,1,2,4,23,3],
                 '76_maki':[1,1,0,7,11,3,8,4,7,0,0,5],
                 '76_yukari':[0,1,1,1,1,1,1,1,1,1,1,17,14,5,7,7,2,3,1],
                 'yu_yukari':[4,3,3,2,1,3,23,7,18,1,1,1,6]
                };
var partsName = {'yukari':['服装','下着(上)','下着(下)','ガーター','スカート','上着','ニーソ','パーカー','サイド髪','リング',
                          'ヘアピン','影','表情','鼻','頬','汗','感情','アレ'],
                 '76_maki':['ポニテ','アホ毛','身体','目','口','ほっぺ','まゆげ','汗','感情','銃','手','バッチ'],
                 '76_yukari':['身体','銃','目','口','頬染め','眉','感情','汗','涙','はね毛',
                              'バッチ1','バッチ2','バッチ3','バッチ4','バッチ5','バッチ6','バッチ7','バッチ8','バッチ9'],
                 'yu_yukari':['身体','髪','頬染め','頰線','青線','汗','口','眉','目','メガネ','髪飾り','シュシュ','感情']
                };
var nicoUrl = {'yukari':'http://seiga.nicovideo.jp/seiga/im5641821',
               '76_maki':'http://seiga.nicovideo.jp/seiga/im5660355',
               '76_yukari':'http://seiga.nicovideo.jp/seiga/im5644487',
               'yu_yukari': 'http://seiga.nicovideo.jp/seiga/im5212730'};
// var makiLength = [1,1,0,7,11,3,7,4,7,0,0,5];
function poseChanges(poseDir){
  if(model != 'yukari'){
    return false;
  }
  path = poseDir;
  for (var i = 0; i < partsLength[model]; i++) {
    if(i<poseLayerCounter){
      fileArry[i] = './img/'+ model + path +'/layer' + i +'/' + presetArry[model+0][i] +'.png';
    }
    else{
      fileArry[i] = './img/'+ model +'/layer' + i +'/' + presetArry[model+0][i] +'.png';
    }
    layerCounter[i] = presetArry[model+0][i];
  }
  ctx.clearRect(0,0,canvasWidth, canvasHeight);
  loadImges();
}
function presetChanges(preset){
  if(model != 'yukari'){
    return false;
  }
  for (var i = 0; i < partsLength[model]; i++) {
    if(i<poseLayerCounter){
      fileArry[i] = './img/'+ model + path +'/layer' + i +'/' + presetArry[model+preset][i] +'.png';
    }
    else{
      fileArry[i] = './img/' + model + '/layer' + i +'/' + presetArry[model+preset][i] +'.png';
    }
    layerCounter[i] = presetArry[model+preset][i];
    $("#counter"+i).html(layerCounter[i]);
  }
  ctx.clearRect(0,0,canvasWidth, canvasHeight);
  loadImges();
}
function defaultChanges(){
  for (var i = 0; i < defaultPose[model].length; i++) {
    if(i<poseLayerCounter){
      fileArry[i] = './img/'+ model + path +'/layer' + i +'/' + defaultPose[model][i] +'.png';
    }else{
      fileArry[i] = './img/' + model + '/layer' + i +'/' + defaultPose[model][i] +'.png';
    }
    layerCounter[i] = defaultPose[model][i];
    $("#counter"+i).html(layerCounter[i]);
  }
  ctx.clearRect(0,0,canvasWidth, canvasHeight);
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
  $('#list-menu').html('');
  $("#listcanvas").html('');
  listMenuRefresh();
  // canvasDefault();
}
function listMenuRefresh(){
  for (var i = 0; i < defaultPose[model].length; i++) {
    if(i<poseLayerCounter){
      fileArry[i] = './img/'+ model + path +'/layer' + i +'/' + defaultPose[model][i] +'.png';
    }
    else{
      fileArry[i] = './img/'+ model + '/layer' + i +'/' + defaultPose[model][i] +'.png';
    }
    layerCounter[i] = defaultPose[model][i];
    $('#list-menu').append('<ul class="list-menu-item" id="'+i+'"></ul>');
    $(".list-menu-item#"+i).append('<li class="return" id="return'+i+'" value="'+i+'"><i class="fa fa-angle-left fa-lg"></i></li>');
    $(".list-menu-item#"+i).append('<li class="name" id="name'+i+'" value="'+i+'">'+ partsName[model][i] +'</li>');
    // $(".list-menu-item#"+i).append('<li class="counter" id="counter'+i+'">' + layerCounter[i] + '</li>');
    $(".list-menu-item#"+i).append('<li class="next" id="next'+i+'" value="'+i+'"><i class="fa fa-angle-right fa-lg"></i></li>');
  }
  // h = $(window).height();
  // w = $(window).width();
  if(w > deviceSize){
    $('.main').addClass('drawer--left');
    $("#listcanvas").append('<canvas id="canvasElem" width="' + canvasWidth + '" height="' + canvasHeight + '" style="display: none;""></canvas>');
    $("#listcanvas").append('<img id="imgElem" src="" download="yukari.png" alt=""/>');
    // canvasWindowSize();
  }else{
    $('.main').addClass('drawer--top');
    $("#listcanvas").append('<canvas id="canvasElem" width="' + canvasWidth + '" height="' + canvasHeight + '" style="display: none;""></canvas>');
    $("#listcanvas").append('<img id="imgElem" src="" download="yukari.png" alt=""/>');
    // canvasWindowSize();
    $('.counter').remove();
    $(".drawer-nav.list-menu").css({'top': h - 100,
                           'max-height': '100px'});
    $(".list-menu-item").css({
                              'margin': '0 auto',
                              'padding-left': w / 2 - 92,
                              'padding-right': w / 2 - 92});
    $(".toggle-margin").css({'margin-top': '20px',
                              'margin-bottom': '50px'});
    $("#listcanvas").css({'margin-top': '0',
                          'margin-left': 'auto',
                          'margin-right': 'auto',
                          'margin-bottom': '100px',
                          'width': w});
  }
  canvas = document.getElementById('canvasElem');
  ctx = canvas.getContext('2d');
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
    layerCounter[0] = defaultPose[model][0];
    adult = false;
    $("#adult").html('<i class="fa fa-heart fa-lg"></i> R18');
  }else{
    if(imgLength['yukari'+path][0] == 13){
      imgLength['yukari'+path][0] += 2;
    }else{
      imgLength['yukari'+path][0] += 1;
    }
    layerCounter[0] = imgLength['yukari'+path][0];
    adult = true;
    $("#adult").html('<i class="fa fa-heart fa-lg"></i> 健全');
  }
  fileArry[0] = './img/'+ model + path +'/layer0/' + layerCounter[0] +'.png';
  $("#counter0").html(layerCounter[0]);
  ctx.clearRect(0,0,canvasWidth, canvasHeight);
  loadImges();
}
function nicoShare(){
  $("#nico").attr('href', nicoUrl[model]);
}
function canvasWindowSize(){
  // h = $(window).height();
  // w = $(window).width();
  if (w < deviceSize) {
    exp =  (h - 100) / canvasHeight;
    $('#imgElem').width(canvasWidth * exp +'px');
    $('#imgElem').height(canvasHeight * exp +'px');
  }else{
    if (h < canvasHeight) {
      exp = h / canvasHeight;
      $('#imgElem').width(canvasWidth * exp +'px');
      $('#imgElem').height(canvasHeight * exp +'px');
    }
  }
}
function canvasDefault(){
  // h = $(window).height();
  // w = $(window).width();
  if (exp < 1) {
    exp = 1;
    $("#canvasResize").html('<i class="fa fa-compress fa-lg"></i> 窓サイズ');
  }else{
    if (w < deviceSize) {
      exp =  (h - 100) / canvasHeight;
    }else{
      if (h < canvasHeight) {
        exp = h / canvasHeight;
      }
    }
    $("#canvasResize").html('<i class="fa fa-expand fa-lg"></i> 原寸大');
  }
  $('#imgElem').width(canvasWidth * exp +'px');
  $('#imgElem').height(canvasHeight * exp +'px');
  // loadImges();
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
    ctx.drawImage(imgObjArry[i], 0, 0, canvasWidth, canvasHeight);
    imgObjArry[i] = null;
  }
  imgObjArry.length = 0;
  loadedCounter = 0;
  fromCanvasToImg();
}
function fromCanvasToImg(){
  var dataURL = canvas.toDataURL('image/png');
  $("#imgElem").attr("src",dataURL);
  canvasDisplay = false;
  window.localStorage.clear();
}
$(document).on('click', '.return', function(){
  var index = $(this).attr("value");
  if (0 < layerCounter[index]) {
    layerCounter[index] -= 1;
  }
  else{
    layerCounter[index] = imgLength[model+path][index];
  }
  if (index < poseLayerCounter) {
    fileArry[index] = './img/'+ model + path +'/layer'+ index +'/' + layerCounter[index] + '.png';
  }
  else{
    fileArry[index] = './img/' + model + '/layer'+ index +'/' + layerCounter[index] + '.png';
  }
  $("#counter"+index).html(layerCounter[index]);
  ctx.clearRect(0,0,canvasWidth, canvasHeight);
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
  if (index < poseLayerCounter) {
    fileArry[index] = './img/'+ model + path +'/layer'+ index +'/' + layerCounter[index] + '.png';
  }
  else{
    fileArry[index] = './img/'+ model + '/layer'+ index +'/' + layerCounter[index] + '.png';
  }
  $(".counter#counter"+index).html(layerCounter[index]);
  ctx.clearRect(0,0,canvasWidth, canvasHeight);
  numMaterials = fileArry.length;
  loadImges();
});
$('.brand-menu-effect, .dropdown-menu-effect').on('mousedown',function(e){
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
$(document).on('mousedown','.list-menu-effect',function(e){
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
