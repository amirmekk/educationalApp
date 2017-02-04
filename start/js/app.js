$(document).ready(
	
	$('.linkAnimate').mouseover(function(){
		$(this).animate({fontSize: +30} , 1000)
	}) ,
	$('.linkAnimate').mouseout(function(){
		$(this).animate({fontSize: '120%'} , 1000)
	})



)
