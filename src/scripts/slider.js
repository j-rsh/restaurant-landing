document.addEventListener('DOMContentLoaded', function() {
    var flkty = new Flickity('.slider', {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false
    });

    var slideNumber = document.querySelector('.slide-number');
    var totalSlides = flkty.slides.length;

    function updateSlideNumber() {
        var number = flkty.selectedIndex + 1;
        slideNumber.textContent = number + ' / ' + totalSlides;
    }

    updateSlideNumber();

    flkty.on('select', updateSlideNumber);

    document.querySelector('.prev').addEventListener('click', function() {
        flkty.previous();
    });

    document.querySelector('.next').addEventListener('click', function() {
        flkty.next();
    });
});
