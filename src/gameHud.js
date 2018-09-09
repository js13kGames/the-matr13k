// second scene HUD
var hudScene = Scene({});
var enemyPunched;
var enemyId = Text([250, 28, '']);

hudScene.create = function() {
  var heroBar = GameObject([20,20]);
  heroBar.barLength = 100;
  heroBar.draw = function() {
    graphics.fillStyle = '#DFEFE2';
    var length = 100*(player.hitPoints/30);
    if(length<0) return;
    graphics.fillRect(this.x, this.y, ~~length, 5);
  }
  heroBar.direction = 1;
  heroBar.update = function(dt) {}
  this.add(heroBar);

  var enemyBar = GameObject([300,20]);
  enemyBar.barLength = 100;
  enemyBar.draw = function() {
    if (enemyPunched){
      graphics.fillStyle = enemyPunched.color;
      var length = 100*(enemyPunched.hitPoints/30);
      if(length<0) return;
      var start = this.x - length
      graphics.fillRect(start, this.y, ~~length, 5);
    }
  }
  enemyBar.direction = 1;
  enemyBar.update = function(dt) {}

  this.add(heroBar);
  this.add(Text([20, 28, 'mr anderson']));
  this.add(enemyBar);
  this.add(enemyId);

  var progressBar = GameObject([20, 234]);
  progressBar.length = 280;
  progressBar.draw = function() {
    graphics.fillStyle = '#000';
    graphics.fillRect(this.x, this.y, this.length, 3);
    graphics.fillStyle = '#fff';
    var position = ~~(this.length*((player.x+12)/(mainScene.maxWidth-24)));
    graphics.fillRect(this.x + position, this.y, 1, 3);
  }
  this.add(progressBar);
};

sceneManager.add(hudScene);

