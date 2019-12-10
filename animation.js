$('*:not(h1)>a').css({
  position: 'absolute',
  left: '-100%',
});
$('*:not(h1)>a').css('position', 'relative').animate({'left': 0}, 100);

$('*:not(h2)>a').on('click', function() {
  var url = $(this).attr('href');
  var newTab = $(this).attr('target');
  $(this).removeAttr('href');
  $('h2').css('color', 'transparent');
  $('hr').css('display', 'none');
  $(this).addClass('expand');
  $('a:not(.expand)').css({
    background: 'transparent',
    color: 'transparent',
  });
  $(this).css({
    'transition': '0s',
    'color': 'transparent',
    'position': 'relative',
    'box-shadow': 'none',
  }).queue(function(next) {
    $(this).parent().css({
      'transition': '0.5s',
      'z-index': 900,
      'opacity': 0.5,
      'cursor': 'not-allowed !important',
      'text-decoration': 'none !important',
      'transform': 'scale(7)',
    });
    next();
  }).animate({position: 'absolute', width: '100vw', height: '100vh', background: '#0F2080'}, 500)
  .queue(function(next) {
    if (!url) return;
    if (newTab) {
      window.open(url, newTab);
    } else {
      window.location.href = url;
    }
    // next();
  });
});

$('h2>a').on('click', function() {
  var url = $(this).attr('href');
  $(this).removeAttr('href');
  $('h2').animate({
    left: '100vw',
  }, 100);
  setTimeout(function() {
    window.location.href = url;
  }, 500); 
});

$('h2').draggable({
  axis: 'x',
  drag: function(e, ui) {
    if (ui.position.left < 0) {
      return false;
    }
    var left = $("h2").position().left;
    var fifthWidth = $(window).width()/10;
    var isPastFifthLeftOrRight = Math.abs(left) > fifthWidth;
    if (isPastFifthLeftOrRight) {
      var url = $(this).find('a').attr('href');
      $(this).animate({
        left: '100vw',
        opacity: 0,
      }, 100);
      setTimeout(function() {
        window.location.href = url;
      }, 500); 
    }
  },
  stop: function() {
    $('h2').animate({
      left: '0',
    }, 100);
  },
});
