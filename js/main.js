$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ["revelin", "sales", "fees", "promo", "integrate", "more", "data" ],
		menu: '#menu',
		css3: true,
        scrollingSpeed: 1000,
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: [ "revelin", "sales", "fees", "promo", "integrate", "more", "data" ],
        afterLoad: function(anchorLink) {
        	var sectionClass = anchorLink;
        	if ( sectionClass !== "revelin") {
        		$(this).find('.textbox').addClass('animated zoomIn').removeAttr('hidden');
        	}
        //	else {
       	//		$(this).find('.textbox').addClass('animated zoomIn').removeAttr('hidden').css( { 	'-webkit-animation-delay': '2s',
       	//																							'animation-delay': '2s' });
        //	}
        },
        afterResize: function() {
        	var pluginContainerWidth = $(this).width();
        	if (pluginContainerWidth > 651) {
        		$('#drawer').css("display", "block");
        		$('.toggle-mnu').removeClass('on');
        	} else {
        		$('#drawer').css("display", "none");
        		$('.toggle-mnu').removeClass('on');
        	}
        }

	});

	$('.arrowUp').click(function() {
		$.fn.fullpage.moveSectionUp();
	});

	$('.arrowDown').click(function() {
		$.fn.fullpage.moveSectionDown();
	});

	$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	  $("#drawer").toggle('slide');
	  return false;
	});

	$('ul#menu li a').click(function(){
		var theWidth = $( window ).width();
		if (theWidth < 651) {
			$(".toggle-mnu").toggleClass("on");
			$("#drawer").toggle('slide');
		}
	});
});