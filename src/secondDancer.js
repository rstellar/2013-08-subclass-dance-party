var SecondDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  //use Jquery to add a class to the node
  //$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
  this.$node.removeClass("dancer").addClass("second-dancer");
  this.$node.prepend('<img src="../MarcusPhoto.jpg"');
};

SecondDancer.prototype = Object.create(Dancer.prototype);
SecondDancer.prototype.constructor = Dancer;
SecondDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
  };
