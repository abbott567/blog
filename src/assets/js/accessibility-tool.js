;(function (global) {
  'use strict';

  var document = global.document;
  var body = document.body;
  var cookie = getCookie('settings');
  var settings = cookie ? JSON.parse(cookie) : {};

  var fontSizeChangers = body.querySelectorAll('.font-size-change');
  var fontChangers = body.querySelectorAll('.font-change');
  var colourChangers = body.querySelectorAll('.colour-change');

  Array.prototype.forEach.call(fontSizeChangers, function (button) {
    button.addEventListener('click', fontSizeHandler);
  });

  Array.prototype.forEach.call(fontChangers, function (button) {
    button.addEventListener('click', fontChangeHandler);
  });

  Array.prototype.forEach.call(colourChangers, function (button) {
    button.addEventListener('click', colourChangeHandler);
  });

  function fontSizeHandler() {
    var increment = parseFloat(this.getAttribute('data-amount'), 10);
    var currentFontSize = getComputedStyle(body)['font-size'].slice(0, -2) / 16;
    var newFontSize = currentFontSize + increment + 'em';
    body.style.fontSize = newFontSize;
    settings.fontSize = newFontSize;
    updateCookie(settings);
  }

  function fontChangeHandler() {
    var fontAttr = this.getAttribute('data-font') || '';
    settings.font = fontAttr;
    updateBodyClasses(settings);
  }

  function colourChangeHandler() {
    var theme = this.getAttribute('data-theme') || '';
    settings.theme = theme;
    updateBodyClasses(settings);
  }

  function updateBodyClasses(settings) {
    var font = settings.font || '';
    var theme = settings.theme || '';
    body.setAttribute('class', font + ' ' + theme);
    updateCookie(settings);
  }

  function updateCookie(settings) {
    document.cookie = 'settings=' + JSON.stringify(settings);
  }

  function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }
})(window);
