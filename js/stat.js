'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BARCHART_X = 140;
var BARCHART_Y = 140;
var BARCHART_WIDTH = 40;
var BARCHART_HEIGHT = 100;
var TEXT_Y = 260;
var GAP = 90;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx) {
  //  Добавляем облако и его тень
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  //  Добовляем заголовок для облако
  ctx.fillStyle = '#000';
  ctx.font = ' bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // Гистограмма 1-ого участника
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', BARCHART_X + BARCHART_X * 0, TEXT_Y);
  ctx.fillStyle = 'red';
  ctx.fillRect(BARCHART_X + BARCHART_X * 0, BARCHART_Y, BARCHART_WIDTH, BARCHART_HEIGHT);

  //  Гистограмма 2-ого участника
  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', BARCHART_X + GAP * 1, TEXT_Y);
  ctx.fillStyle = 'green';
  ctx.fillRect(BARCHART_X + GAP * 1, BARCHART_Y, BARCHART_WIDTH, BARCHART_HEIGHT);

  //  Гистограмма 3-ого участника
  ctx.fillStyle = '#000';
  ctx.fillText('Катя', BARCHART_X + GAP * 2, TEXT_Y);
  ctx.fillStyle = 'blue';
  ctx.fillRect(BARCHART_X + GAP * 2, BARCHART_Y, BARCHART_WIDTH, BARCHART_HEIGHT);

  //  Гистограмма 4-ого участника
  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', BARCHART_X + GAP * 3, TEXT_Y);
  ctx.fillStyle = 'grey';
  ctx.fillRect(BARCHART_X + GAP * 3, BARCHART_Y, BARCHART_WIDTH, BARCHART_HEIGHT);
};


