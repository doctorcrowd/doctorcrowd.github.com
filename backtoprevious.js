$('#backtag').css({'display':'none'});
var fadingtime = 1080;
$('#gallery').hover(function(){
	$('#backtag').css({'display':'block','width':'120px','top':'138px'});
	$('#backtag').fadeTo(fadingtime, 1);
});
$('#gallery').mouseleave(function(){
	$('#backtag').fadeTo(fadingtime, 0);
});