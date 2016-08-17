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
});