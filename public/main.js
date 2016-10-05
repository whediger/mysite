new Clipboard('#email');
new Clipboard('#phone');

function startLogo() {
    new Vivus('logo', {
        duration: 200,
        file: 'wah-blue.svg',
        type: 'oneByOne',
        pathTimingFunction: Vivus.EASE_OUT
    });
}

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    x *= 127;
    y *= 127;
    var coor = "X: " + x + ", Y: " + y;
    document.getElementById("coordinates").innerHTML = coor;
}
setTimeout(function(){
  document.getElementById("roll").style.visibility = 'visible';
  document.getElementById("roll").style.opacity = '1';
}, 1200)
setTimeout(function(){
  document.getElementById("emailWrap").style.visibility = 'visible';
  document.getElementById("emailWrap").style.opacity = '1';
}, 100)
setTimeout(function(){
  document.getElementById("phoneWrap").style.visibility = 'visible';
  document.getElementById("phoneWrap").style.opacity = '1';
}, 100)

function copyEmail() {
    var save = document.getElementById("tooltipcopied").className;
    document.getElementById("tooltipcopied").style.visibility = 'visible';
    document.getElementById("tooltipcopied").style.opacity = '1';
    setTimeout(function(){
      document.getElementById("tooltipcopied").style.visibility = 'hidden';
      document.getElementById("tooltipcopied").style.opacity = '0';
    }, 1500)
    console.log(save);
}
