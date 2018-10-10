$(function(){
	// MOBILE MENU
		$('.sandwich').on('click', function(){
			$('.sandwich').toggleClass('active');
			$('.nav').toggleClass('active');
	    });
		$(document).on('click', function(e) {
			if (!$(e.target).closest('.menu').length) {
				$('.sandwich').removeClass('active');
		    	$('.nav').removeClass('active');
		  	}
		  	e.stopPropagation();
		});
	// Scroll to
		$('body').on('click', '.go_to, .go_up_btn', function(){
			var scroll_el = $(this).attr('href');
	        if ($(scroll_el).length !== 0) {
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
	        }
		    return false;
	    });
	// Modal slider init
	$('.partners_slider').owlCarousel({
    	loop: true,
		items:	4,
		nav: false,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		utoplayTimeout: 1000,
		responsive : {
		    0 : {
		    	items:	1
		    },
		    500 : {
		    	items:	2
		    },
		    767 : {
		    	items:	3
		    },
		    1000 : {
		    	items:	4
		    },
		    1200 : {
		    	items:	6
		    }
		}
	});
});