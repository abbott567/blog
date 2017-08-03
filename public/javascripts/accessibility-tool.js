$(document).on('click', '.font-size-change', function () {
  var elements = ['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  for (var i = 0; i < elements.length; i++) {
    var $element = $(elements[i]);
    var fontSize = parseInt($element.css('font-size'), 10) || 0;
    var newFontSize = fontSize + parseInt($(this).attr('data-amount'), 10);
    console.log(fontSize, newFontSize)
    $element.css('font-size', newFontSize);
  }
});

$(document).on('click', '.colour-change', function () {
  var css = $(this).attr('data-colour');
  var $customTheme = $('#custom-css');
  var link = '/stylesheets/' + css + '.css ';

  if ($customTheme === 'default') {
    return $('#custom-css').remove();
  }

  if ($customTheme.length) {
    return $customTheme.attr('href', link);
  }

  $('head').append(
    '<link id="custom-css" href="' + link + '" rel="stylesheet" type="text/css" />'
  );
});
