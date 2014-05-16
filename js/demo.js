$(document).ready(function() {
	
	$('.pop').click(function() {

		aid = $(this).attr('href');

		$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');

		type = $(this).attr('data-type');
		
		$('.overlay-container'+aid).fadeIn(function() {
			
			window.setTimeout(function(){
				$('.window-container.'+type).addClass('window-container-visible');
			}, 100);
			
		});
	});
	
	$('.close').click(function() {
		$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
	});

	$('.page-scroll').click(function() {
		$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
	});
	
});