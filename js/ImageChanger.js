
	function transition(){

		  var $feederNow = $('.image-change .feederNow');
		  var $next = ($feederNow.next().length > 0) ? $feederNow.next() : $('.image-change img:first');
		  $next.addClass('feederNow').removeClass('feederHide');    		  
		  $feederNow.removeClass('feederNow').addClass('feederHide'); 

		  
	}
	/*function SetHeight(){
		var $feederNow = $('.image-change .feederNow');
		$('p#FirstLine').css({

		});
		$('#feederBtn').css({
			'top': (($('p.underFeeder').offset().top + $('p.underFeeder').outerHeight()))+"px",
		});
	    $('#feederContent').css({
		    'height': ($('p.underFeeder').offset().top + $('p.underFeeder').outerHeight())+"px",
		});
		  
	}*/
	
	$(window).ready(function(){
		setInterval('transition()', 3000);
	});
	//$(window).ready(SetHeight());
