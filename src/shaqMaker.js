var makeShaqDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('shaq');
  this.$node.append('<img class= "oneal" src="Pics/shaqTransparent.png" height = "100">');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};
makeShaqDancer.prototype = Object.create(makeDancer.prototype);
makeShaqDancer.prototype.constructor = makeShaqDancer;
makeShaqDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.animate({
//     left: '+=50',
//     height: 'toggle'
//   }, 5000);
  // this.$node.toggle();
};



// <img src="Pics/Shaq.jpg" height = "100">