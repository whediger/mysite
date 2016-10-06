
// draw center logo +==}========>
function startLogo() {
    new Vivus('logo', {
        duration: 200,
        file: 'assets/wah-blue.svg',
        type: 'oneByOne',
        pathTimingFunction: Vivus.EASE_OUT
    });
}

//generate x and y values for decoration - multiplied by (prime number) 127 for added effect
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    x *= 127;
    y *= 127;
    var coor = "X: " + x + ", Y: " + y;
    document.getElementById("coordinates").innerHTML = coor;
}

// animation timing functions +==}========>
setTimeout(function(){
  document.getElementById("roll").style.visibility = 'visible';
  document.getElementById("roll").style.opacity = '1';
}, 1500);
setTimeout(function(){
  document.getElementById("emailWrap").style.visibility = 'visible';
  document.getElementById("emailWrap").style.opacity = '1';
}, 50);
setTimeout(function(){
  document.getElementById("phoneWrap").style.visibility = 'visible';
  document.getElementById("phoneWrap").style.opacity = '1';
}, 100);
setTimeout(function(){
  document.getElementById("navButton").click();
}, 3500);

//copy email on click +==}========>
new Clipboard('#email');

function copyEmail() {
    var save = document.getElementById("tooltipcopied").className;
    document.getElementById("tooltipcopied").style.visibility = 'visible';
    document.getElementById("tooltipcopied").style.opacity = '1';
    setTimeout(function(){
      document.getElementById("tooltipcopied").style.visibility = 'hidden';
      document.getElementById("tooltipcopied").style.opacity = '0';
    }, 1500);
    console.log(save);
}

// handle navagation click events +==}========>

document.getElementById("contactBG").addEventListener("click", hideContact, false);
function showContact(){
  document.getElementById("contactBG").style.visibility = 'visible';
}
function hideContact(){
  document.getElementById("contactBG").style.visibility = 'hidden';
}
