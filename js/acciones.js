// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$('#btnvibrar').on('tap',function(){
	navigator.vibrate(1000);	

});// tap to vibrate
$('#btnbeep').on('tap',function(){
navigator.beep(2);	
$('#izquierda').on('swipe left', function(){
	alert("Barrio a la izquierda")
$('#derecha').on('swipe right', function(){
	alert("Barrio a la derecha")
});
});
});
}); 
});

