// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$('#btnvibrar').on('tap',function(){
	navigator.vibrate(1000);	

});// tap to vibrate
$('#btnbeep').on('tap',function(){
navigator.notification.beep(2);

});
$('#izquierda').on('swipeleft', function(){
	alert("Barrio a la izquierda");
	
	});
$('#derecha').on('swiperight', function(){
	alert("Barrio a la derecha");
    });
document.addEventListener("pause",function(){
	$('#listado').append("<p>La applicación se pauso </p>");

});
document.addEventListener("resume",function(){
	$('#listado').append("<p>La applicación se reinició </p>");
}); 
$(window).on('orientationchange',function(e){
	$('#listado').append("<p>Orientación: "+ e.orientation +"</p>");
});
});
});
