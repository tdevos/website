$(window).scroll(function() {
    console.log('a');
    $("nav.navbar").offset() &&
    ($("nav.navbar").offset().top > 50 ? $("nav.navbar").addClass("top-nav-collapse") : $("nav.navbar").removeClass("top-nav-collapse"))
});