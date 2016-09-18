$(document).ready(function(){


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
