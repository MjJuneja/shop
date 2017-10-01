(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
  

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 48
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-toggler').toggle(function(){
       $('.navbar-collapse').addClass('showing'); 
    });
//    $('.navbar-collapse>ul>li>a').click(function() {
//        $('.navbar-collapse').collapse('hide');
//    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Scroll reveal calls
//    window.sr = ScrollReveal();
//    sr.reveal('.sr-icons', {
//        duration: 600,
//        scale: 0.3,
//        distance: '0px'
//    }, 200);
//    sr.reveal('.sr-button', {
//        duration: 1000,
//        delay: 200
//    });
//    sr.reveal('.sr-contact', {
//        duration: 600,
//        scale: 0.3,
//        distance: '0px'
//    }, 300);

})(jQuery); // End of use strict
