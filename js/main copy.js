$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#drawer',
        lockAnchors: true,
        anchors:[ "revelin", "sales", "fees", "promo", "integrate", "more", "data" ],
        navigation: false,
        // navigationPosition: 'right',
        // navigationTooltips: ["To the top", "Increase Sales", "Save Money", "Built-in Promos", "POS Integration", "Learn More", "The Data"],
        // showActiveTooltip: true,

        //Scrolling
        //css3: true,
        //scrollingSpeed: 1000,
        //autoScrolling: true,
        //fitToSection: true,
        //fitToSectionDelay: 1000,
        //scrollBar: false,
        //easing: 'easeInOutCubic',
        //easingcss3: 'ease',
        //loopBottom: false,
        //loopTop: false,
        //loopHorizontal: true,
        //continuousVertical: false,
        //continuousHorizontal: false,
        //scrollHorizontally: false,
        //interlockedSlides: false,
        //resetSliders: false,
        //normalScrollElements: '#element1, .element2',
        //scrollOverflow: false,
        //scrollOverflowOptions: null,
        //touchSensitivity: 15,
        //normalScrollElementTouchThreshold: 5,
        //bigSectionsDestination: null,

        ////Accessibility
        //keyboardScrolling: true,
        //animateAnchor: true,
        //recordHistory: true,
    });
});