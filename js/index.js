$(document).ready(function(){


			$('html, body').delay(400).animate({
			    scrollTop: $(".scroll").offset().top
			}, 2000);


			$(window).bind('scroll',function(e){
		   		parallaxScroll();
		   	});
		 
		   	function parallaxScroll(){
		   		var scrolledY = $(window).scrollTop();
				$('.one').css('top','+'+((scrolledY/2.5))+'px');
				$('.two').css('top','+'+((scrolledY/1))+'px');
				$('.three').css('top','+'+((scrolledY/1.75))+'px');
				$('.four').css('top','+'+((scrolledY/2.5))+'px');
				$('.five').css('top','+'+((scrolledY/1.5))+'px');
				$('.six').css('top','+'+((scrolledY/2.25))+'px');
				$('.seven').css('top','+'+((scrolledY/1))+'px');
				$('.eight').css('top','+'+((scrolledY/0.75))+'px');
				$('.nine').css('top','+'+((scrolledY/0.5))+'px');
				$('.ten').css('top','+'+((scrolledY/0.25))+'px');
		   	}
		 
		});