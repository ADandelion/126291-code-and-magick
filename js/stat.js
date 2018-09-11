'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BARCHART_X = 140;
var BARCHART_Y = 90;
var BARCHART_WIDTH = 40;
var BARCHART_HEIGHT = 150;
var TEXT_Y = 260;
var SCORE_Y = 80;
var GAP = 90;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i<arr.length; i++) {
    if (arr[i] > maxElement){
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  //  Добавляем облако и его тень
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  //  Добовляем заголовок для облако
  ctx.fillStyle = '#000';
  ctx.font = ' bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = Math.ceil(getMaxElement(times));

  ctx.fillStyle.players[0] = 'rgba(255, 0, 0, 1)';

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], BARCHART_X + GAP * i, TEXT_Y);
    ctx.fillText(Math.ceil(times[i]), BARCHART_X + GAP * i, SCORE_Y);
    ctx.fillStyle = 'rgb(0, 0, 255)';
    ctx.fillRect(BARCHART_X + GAP * i, BARCHART_Y, BARCHART_WIDTH, (BARCHART_HEIGHT * times[i]) / maxTime);
  }
};

