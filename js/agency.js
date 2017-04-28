// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict

//myjs
/*var $furkidAnim = $('.img-circle');
var $window = $(window);

$window.on('scroll',viewCheck);
$window.trigger('scroll');

function viewCheck(){
	var windowHeight = $window.height();
	var windowTopPos = $window.scrollTop();
	var windowBottomPos = (windowHeight + windowTopPos);
	
	$.each($furkidAnim, function(){
		var $e = $(this);
		var eHeight = $e.outerHeight();
		var eTopPos = $e.offset().top;
		var eBottomPos = (eHeight + eTopPos);
		
		if((eBottomPos >= windowTopPos)&&(eTopPos <= windowBottomPos)){
			$e.addClass('in-view');
		}else{
			$e.removeClass('in-view');
		}
	})
}*/