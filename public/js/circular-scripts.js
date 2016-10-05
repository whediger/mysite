(function(){

	var navButton = document.getElementById('navButton'),
    wrapper = document.getElementById('nav-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	navButton.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();
