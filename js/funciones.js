
$( document ).ready(function() {
	    
	cargaLuces();


	$('#musica').click(function() {
	  alert( "Handler for .click() called." );
	});


	function cargaLuces(){

   		setInterval(function(){
	  		var el = document.getElementById('blink');
	  		if(el.className == 'luz'){
	      		el.className = 'luz on';
	  		}else{
	      		el.className = 'luz';
	  		}
		},500);

	}

	function cargaMusica(){


	}

});
