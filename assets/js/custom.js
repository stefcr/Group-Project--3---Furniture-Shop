// disable scrolling until page loads
$('html').css('overflow', 'hidden');

// force window to scrollTop on refresh
window.scrollTo(0, 0); // firefox
window.onbeforeunload = function () {
    window.scrollTo(0, 0); // chrome
}

// preloader
window.onload = function zibatPreloader() {
    $('#zibat-preloader').delay(2000).queue('fx', function () {
        $(this).addClass('zibat-preloader-end');
    });

    $('body').delay(2000).queue(function () {
        // initialize wow.js
        //new WOW().init();

        // enable scrolling
        setTimeout(function () {
            $('html').css('overflow', 'auto');
        }, 2000);
    });
}

// burger-menu
$('.burger-icon').on('click', function (event) {
    $('.navigation').toggleClass('responsive')
});

// justified-gallery
$(document).ready(function () {
    $(".isotop-image-container").justifiedGallery({
        'usedSuffix': 'lt240',
        'justifyLastRow': true,
        'rowHeight': 300,
        'fixedHeight': false,
        'lightbox': false,
        'captions': false,
        'margins': 0
    });
});

// init Isotope
var $grid = $('.isotop-image-container').isotope({
    itemSelector: '.isotop-items',
    layoutMode: 'fitRows'
});
// store filter for each group
var filters = {};

$('.isotop-filters').on('click', '.button', function () {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[filterGroup] = $this.attr('data-filter');
    // combine filters
    var filterValue = concatValues(filters);
    // set filter for Isotope
    $grid.isotope({
        filter: filterValue
    });
});

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

// flatten object by concatting values
function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
        value += obj[prop];
    }
    return value;
}

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(document).ready(function () {
    $('#product-gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
});

$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        nav: false,
        items: 1
    });
});