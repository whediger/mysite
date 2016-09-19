$(document).ready(function(){
  $('.title').hide();
  $('.info').hide();
  var bodyWidth = $('body').width()/100 * 60;

  new Vivus('logo', {
    duration: 400,
    file: 'wah-blue.svg',
    type: 'oneByOne',
    pathTimingFunction: Vivus.EASE_OUT});
  
  $('.title').delay(1000)
  .fadeIn(200)
  .animate({
    height:'230px',
    width: '280px',
    marginLeft: bodyWidth + "px",
    marginTop: '225px'},
      8000, 'swing'});

  $('#name').delay(16000).fadeIn(500, 'swing');
  $('#roll').delay(16500).fadeIn(500, 'swing');
  $('.phone').delay(17000).fadeIn(500, 'swing');
  $('.github').delay(17300).fadeIn(500, 'swing');
  $('.linkedin').delay(17400).fadeIn(500, 'swing');

});
