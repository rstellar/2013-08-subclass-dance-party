// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this._top = top;
  this._left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(this._top,this._left);
};

Dancer.prototype.step = function(){
  var that = this;
    setTimeout(function(){that.step();}, this._timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body