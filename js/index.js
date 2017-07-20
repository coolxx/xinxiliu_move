$(function(){
	$('.banner img:nth-child(1)').addClass('duang1');
	$('.banner img:nth-child(2)').addClass('duang2');
	$('form .sub').each(function(index){
		$(this).click(function(){
			$('.tk').eq(index).show();
		})
	})
	$('.tk em').each(function(index){
		$(this).click(function(){
			$('.tk').eq(index).hide();
		})
	})
})