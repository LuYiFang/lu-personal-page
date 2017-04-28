jQuery( function( $ ) {
	var doAnim = function(){
		
		var $portfolio = $('.portfolioUp');
		var $furkidAnim = $('.team-member');
		var winHeight = $( window ).height();
		var offset = winHeight + $(window).scrollTop();
		
		$portfolio.each(function(){	
			var $e = $(this);	
			if(($e.offset().top + $e.height()) < offset){
				$e.removeClass('anim').addClass('animed');
			}				
		});//end portfolio

		$furkidAnim.each(function(){
			var $e = $(this);	
			if((($e.offset().top + $e.height()) < offset) && $e.offset().top  > $(window).scrollTop()){
				$furkidAnim.removeClass('anim').addClass('animed');
				/*$('.newnew').css({
					'animation': "bounceIn 1s ease 1",
					'animation-delay': '0.1s',
				});
				$('.cat').css({
					'animation': "bounceIn 1s ease 1",
					'animation-delay': '1s',
				});
				$('.cola').css({
					'animation': "bounceIn 1s ease 1",
					'animation-delay': '2s',
				});*/
			}			
		}); //end furkidAnim  
	};//end doAnim
	
	var timeLineAnim = function(){
		
		var $timeLine = $('.bounceUp');
		var winHeight = $( window ).height();
		var offset = winHeight + $(window).scrollTop();
		
		$timeLine.each(function(){	
			var $e = $(this);	
			if(($e.offset().top + $e.height()) < offset){
				$e.removeClass('anim').addClass('animed').delay(200);
			}				
	  });//end timeLine
	};//end timeLineAnim
	
	$(function() {
	  transition();
	  var i = -1;
	  function transition() {
		i += 1;
		if (i == 3) {
		  i = 0;
		}
		$("li.fg").removeClass('feederNow');
		$("li.fg:eq(" + i + ")").addClass('feederNow');
		setTimeout(transition, 3000);
	  }
	});

	
	$(window).on('scroll', timeLineAnim);
	$(window).on('scroll', doAnim);
	$(window).trigger('scroll');
		
}); //end JQuery


