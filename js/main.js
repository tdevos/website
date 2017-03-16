$(window).scroll(function() {
    $("nav.navbar").offset() &&
    ($("nav.navbar").offset().top > 50 ? $("nav.navbar").addClass("top-nav-collapse") : $("nav.navbar").removeClass("top-nav-collapse"))
});

particlesJS.load('particles-js', './js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});