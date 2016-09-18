
	var myself = document.getElementById('cartWidget');
	var trigger = document.getElementById('userMenuCart');
	trigger.onclick = function() {
		myself.style.display = (myself.style.display == 'none') ? 'block' : 'none';
	}
