var ThirdDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  //use Jquery to add a class to the node
  //$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
  this.$node.removeClass("dancer").addClass("third-dancer");
};

ThirdDancer.prototype = Object.create(Dancer.prototype);
ThirdDancer.prototype.constructor = Dancer;
ThirdDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
  };
