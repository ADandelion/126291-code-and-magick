'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топльницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

// Случайно выбираем значение из массива
var randomElement = function (el) {
  var rand = Math.floor(Math.random() * el.length);
  return el[rand];
};

var wizards = [
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAME),
    coatColor: randomElement(COAT_COLOR),
    eyesColor: randomElement(EYES_COLOR)
  },
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAME),
    coatColor: randomElement(COAT_COLOR),
    eyesColor: randomElement(EYES_COLOR)
  },
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAME),
    coatColor: randomElement(COAT_COLOR),
    eyesColor: randomElement(EYES_COLOR)
  },
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAME),
    coatColor: randomElement(COAT_COLOR),
    eyesColor: randomElement(EYES_COLOR)
  }
];

// Добавляем цвет мантии, глаз, фамилию и имя для каждого мага
var renderWizards = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

 // В процессе создания функции
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
fragment.appendChild(renderWizards(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
