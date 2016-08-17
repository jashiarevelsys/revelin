$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ["revelin", "sales", "fees", "promo", "integrate", "more", "data" ],
		menu: '#menu',
		css3: true,
        scrollingSpeed: 1000,
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: [ "revelin", "sales", "fees", "promo", "integrate", "more", "data" ]
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