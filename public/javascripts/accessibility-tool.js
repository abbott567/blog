var settings = Cookies.get('settings') || {};
if (typeof settings === 'string') {
  settings = JSON.parse(settings);
}

$(document).on('click', '.font-size-change', function () {
  var $html = $('html');
  var increment = parseInt($(this).attr('data-amount'), 10);
  var fontSize = parseInt($html.css('font-size'), 10) + increment;
  var em = fontSize / 16;
  $html.css('font-size', em + 'em');
  settings.fontSize = em;
  Cookies.set('settings', settings);
});

$(document).on('click', '.colour-change', function () {
  var css = $(this).attr('data-theme');
  var $customTheme = $('#custom-css');
  var link = '/stylesheets/' + css + '.css ';
  if (css === 'default') {
    $('#custom-css').remove();
  } else if ($customTheme.length) {
    $customTheme.attr('href', link);
  } else {
    $('head').append(
      '<link id="custom-css" href="' + link + '" rel="stylesheet" type="text/css" />'
    );
  }
  settings.theme = css;
  Cookies.set('settings', settings);
});

$(document).on('click', '.font-change', function () {
  var fontAttr = $(this).attr('data-font');
  var fontName = Array.isArray(fontAttr) ? fontAttr.join(' ') : fontAttr;
  $('body').css('font-family', fontName);
  settings.font = fontName;
  Cookies.set('settings', settings);
});
