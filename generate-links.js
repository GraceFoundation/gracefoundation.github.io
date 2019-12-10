var path = window.location.pathname;
var pathParts = path.split('/');
var door = pathParts[pathParts.length-3];
var subsection = pathParts[pathParts.length-1].replace(/\.html$/, '');
var textFilePath = '../../../lists-of-links/' + door + '/' + subsection + '.txt';
fetch(textFilePath)
.then(function(response) {
  return response.text();
})
.then(function(text) {
  var lines = text.split('\n').filter(function(line) {
    return line !== '';
  });
  lines.forEach(function(line) {
    var descriptionPattern = /^ *(D|d)escription *(=|equals?) */;
    if (descriptionPattern.test(line)) {
      createDescription(line.replace(descriptionPattern, ''));
    } else if (!line.startsWith('https://') && !line.startsWith('http://')) {
      line = 'https://' + line;
      createLink(line);
    } else { // assume link if line doesn't start with "description = "
      createLink(line);
    }
  });
  $('*:not(h1)>p').css({
    position: 'absolute',
    left: '-100%',
  });
  $('*:not(h1)>p').css('position', 'relative').animate({'left': 0}, 100);
});

function createLink(url) {
  var a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.innerHTML = url;
  var p = document.createElement('p');
  p.appendChild(a);
  document.getElementsByTagName('main')[0].appendChild(p);
}

function createDescription(text) {
  var p = document.createElement('p');
  p.innerHTML = text;
  p.className = 'description';
  document.getElementsByTagName('main')[0].appendChild(p);
}
