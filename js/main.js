$(document).ready(function(){

  $('.info').hide();
  var bodyWidth = $('body').width()/100 * 60;
  $('.title').delay(1000).animate({height:'230px', width: '280px', marginLeft: bodyWidth + "px"}, 2000, 'swing');

  new Vivus('logo', {
    duration: 400,
    file: 'wah-blue.svg',
    type: 'oneByOne',
    pathTimingFunction: Vivus.EASE_OUT});
  });

  $('#name').delay(7000).fadeIn(500, 'swing');
  $('#roll').delay(7500).fadeIn(500, 'swing');
  $('.phone').delay(8000).fadeIn(500, 'swing');
  $('.github').delay(8300).fadeIn(500, 'swing');
  $('.linkedin').delay(8400).fadeIn(500, 'swing');
