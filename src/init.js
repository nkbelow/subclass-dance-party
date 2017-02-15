$(document).ready(function() {
  window.dancers = [];
  var shortest = 100000000000;
  var closestObj = {};
  
  $('.Interact').on('click', function(event) {
    for (var i = 1; i < window.dancers.length; i++) {
      var length = Math.sqrt(Math.pow(window.dancers[0].top - window.dancers[i].top, 2) + 
      Math.pow(window.dancers[0].left - window.dancers[i].left, 2));
      if (shortest > length) {
        shortest = length;
        closestObj = $(window.dancers[i].$node);
      }
    }
    closestObj.animate({top: '0px', left: '0px'}, 200);
    $(window.dancers[0].$node).animate({top: '100px', left:'0px'}, 200);
  });


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node.css('border','none');
    window.dancers.push(dancer);

  });
});

$('.addShaqButton').on('click', function(event) {
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
  var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

  var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
  $('body').append(dancer.$node);
  dancer.$node.css('border','none');
  window.dancers.push(dancer);

});


$('body').on('mouseover', '.oneal', function() {
  $(this).animate({width: 400, height:250}, 1000);       
  $(this).animate({width: 200, height:125}, 1000);
});

$('body').on('mouseover', '.swag', function() {
  $(this).fadeOut(function() {
    $(this).fadeIn();
  });
});


$('body').on('mouseover', '.blinkydancer', function() {
  var animateBall = function() {
    $('.blinkydancer').animate({top: '400px'}, 100).animate({top: '350px'}, 100, animateBall);       
  };
  animateBall();
});


$('.addSwaggyButton').on('click', function(event) {
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
  var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

  var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
  dancer.$node.css('border','none');
  $('body').append(dancer.$node);
  window.dancers.push(dancer);

});

$('.LineUp').on('click', function(event) {
  $('.shaq').animate({'left': '43%'}, 1000);
  $('.swaggy').animate({'left': '43%'}, 1000);
  $('.blinkydancer').animate({'left': '43%'}, 1000);

});