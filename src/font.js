// src/font.js

var fontLetters = 'abcdefghijklmnopqrstuvwxyz0123456789!?# ';
var indexOfFontFrame = 11;

function parseText(text) {
  var indexes = [];
  for (var i = 0; i < text.length; i++) {
    indexes.push(fontLetters.indexOf(text[i]));
  }
  return indexes;
}

function drawFrame(index) {
  var letterFrame = animations[indexOfFontFrame][index];
  for (var i = 0; i < letterFrame.length; i++) {
    var coords = letterFrame[i];
    graphics.fillRect(coords[0], coords[1], 1, 1);
  }
}

function Text(props) {
  var base = GameObject(props);
  var indexes = parseText(props[2]);
  return {
    x: base.x,
    y: base.y,
    color: '#fff',
    update: base.update,
    setText: function(text) {
      indexes = parseText(text);
    },
    draw: function() {
      graphics.fillStyle = this.color;
      for (var i = 0; i < indexes.length; i++) {
        graphics.save();
        graphics.translate((~~this.x) + i*7, (~~this.y));
        drawFrame(indexes[i]);
        graphics.restore();
      }
    }
  }
}

