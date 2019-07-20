(function($) {

	$(document).ready(function(){
		$('.header__menu--navLink').click(function(e) {
			e.preventDefault();
	
			var target = $(this.hash);
	
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000)
		});
  });
    

	$(document).ready(function(){
		$('.social__slider').slick({
			slidesToShow: 1,
			slideToScroll: 1
		});

		$('#nav-icon1').click(function(){
			$(this).toggleClass('open');
		});

		var touch = $('#nav-icon1');
		var menu = $('.menu__mobile');
	});

	$(document).ready(function(){
		$('#nav-icon1').click(function(e) {
			e.stopPropagation();
				$('.menu__mobile').slideToggle('fast', function(){
					$('.nav-icon1--span').css('background', '#fff');
					if($(this).css('display') === 'none') {
						$('.nav-icon1--span').css('background', 'black');
					}
				});
			});
  });
	

})(jQuery);