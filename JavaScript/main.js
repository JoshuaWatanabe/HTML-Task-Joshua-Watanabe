document.addEventListener('DOMContentLoaded', function () {
    var elms = document.getElementsByClassName('splide splide-img');

    for (var i = 0; i < elms.length; i++) {
        new Splide(elms[i]).mount();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var elms2 = document.getElementsByClassName('splide-vid');

    for (var i = 0; i < elms2.length; i++) {
        new Splide(elms2[i], {
            type     : 'slide',   // Set the type of the carousel
            perPage  : 3,         // Number of videos to show at once
            perMove  : 1,         // Number of slides to move at a time
            pagination: false,    // Hide pagination if not needed
            gap      : '1rem'     // Optional: Set gap between the videos
        }).mount();
    }
});