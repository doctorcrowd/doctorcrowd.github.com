$('#backtag').css({'display':'none'});
var fadingtime = 180;
$('#gallery').hover(function(){
	$('#backtag').css({'display':'block','width':'120px','top':'138px'});
	$('#backtag').fadeTo(fadingtime, 1);
});
$('ul').mouseleave(function(){
	$('#backtag').fadeTo(fadingtime, 0);
});