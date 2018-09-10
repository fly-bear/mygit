
 // Calling the function
$(function() {
    $('.toggle-nav').click(function() {
        toggleNavigation();
    });
});


// The toggleNav function itself
function toggleNavigation() {
    if ($('#container').hasClass('display-nav')) {
        // Close Nav
        $('#container').removeClass('display-nav');
    } else {
        // Open Nav
        $('#container').addClass('display-nav');
    }
}


// SLiding codes
$("#toggle > li > div").click(function () {
    if (false == $(this).next().is(':visible')) {
        $('#toggle ul').slideUp();
    }

    var $currIcon=$(this).find("span.the-btn");

    $("span.the-btn").not($currIcon).addClass('fa-plus').removeClass('fa-minus');

    $currIcon.toggleClass('fa-minus fa-plus');

    $(this).next().slideToggle();

    $("#toggle > li > div").removeClass("active");
    $(this).addClass('active');

});