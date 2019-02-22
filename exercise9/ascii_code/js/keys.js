$(document).ready(function(){
	  $("body").keypress(function(e){
		$("#keys").text(e.key +' (Key Code ='+e.keyCode+')' )
	  });
	});