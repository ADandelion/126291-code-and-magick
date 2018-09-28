'use strict';
var wizards = [];

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топльницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


// Случайно выбираем значение из массива
var getRandomElement = function (elements) {
  var rand = Math.floor(Math.random() * elements.length);
  return elements[rand];
};

// Создаем массив из объектов.
var getWizard = function (obj) {
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: obj(WIZARD_NAMES) + ' ' + obj(WIZARD_SURNAME),
      coatColor: obj(COAT_COLOR),
      eyesColor: obj(EYES_COLOR)
    });
  }
  return wizards;
};
getWizard(getRandomElement);

// Добавляем цвет мантии, глаз, фамилию и имя для каждого мага
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Добавляем похожих магов
var getSimilarWizards = function (addWizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < addWizards.length; i++) {
    fragment.appendChild(renderWizard(addWizards[i]));
  }
  similarListElement.appendChild(fragment);
};
getSimilarWizards(wizards);

// ПОПАП НАСТРОЙКИ ПЕРСОНАЖА
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopupHandler();
  }
};

var openPopupHandler = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopupHandler = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var setupWizard = document.querySelector('.setup-wizard');
var setupEye = setupWizard.querySelector('.wizard-eyes');
var setupCoat = setupWizard.querySelector('.wizard-coat');
var setupFireball = document.querySelector('.setup-fireball-wrap');

// Хэндлеры  для  настроки цвета одежды, глаз мага и фаербола
setupCoat.addEventListener('click', function () {
  setupCoat.style.fill = getRandomElement(COAT_COLOR);
});

setupEye.addEventListener('click', function () {
  setupEye.style.fill = getRandomElement(EYES_COLOR);
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.background = getRandomElement(FIREBALL_COLOR);
});

// Хэндлеры  для  формы открытия и закрытие ПОПАПА
setupOpen.addEventListener('click', function () {
  openPopupHandler();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopupHandler();
  }
});

setupClose.addEventListener('click', function () {
  closePopupHandler();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopupHandler();
  }
});

