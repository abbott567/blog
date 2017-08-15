var settings = Cookies.get('settings') || {};
var $body = $('body');

if (typeof settings === 'string') {
  settings = JSON.parse(settings);
}

$(document).on('click', '.font-size-change', function () {
  var increment = parseFloat($(this).attr('data-amount'), 10);
  var fontSize = parseFloat($body.css('font-size'), 10) / 16;
  var em = fontSize + increment;
  settings.fontSize = em;
  Cookies.set('settings', settings);
  updateStyles();
});

$(document).on('click', '.colour-change', function () {
  var theme = $(this).attr('data-theme');
  settings.theme = theme;
  Cookies.set('settings', settings);
  updateStyles();
});

$(document).on('click', '.font-change', function () {
  var fontAttr = $(this).attr('data-font') || '';
  settings.font = fontAttr;  
  Cookies.set('settings', settings);
  updateStyles();
});

function updateStyles() {
  var settings = JSON.parse(Cookies.get('settings'));
  $body.attr('class', '');
  $body.addClass(settings.font);
  $body.addClass('theme-' + settings.theme);
  $body.css('font-size', settings.fontSize + 'em');  
}
