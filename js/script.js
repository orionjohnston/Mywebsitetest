// Sticky Header Shadow
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
