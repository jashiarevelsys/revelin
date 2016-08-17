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
        	} else {
       			$(this).find('.textbox').addClass('animated zoomIn').removeAttr('hidden').css( "animation-delay", "1s" );
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
});