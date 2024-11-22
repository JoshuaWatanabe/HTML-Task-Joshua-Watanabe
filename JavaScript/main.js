document.addEventListener('DOMContentLoaded', function () {
    var elms = document.getElementsByClassName('splide splide-img');

    for (var i = 0; i < elms.length; i++) {
        new Splide(elms[i],{
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev your-class-prev',
            next  : 'splide__arrow--next your-class-next',
        }).mount();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var elms2 = document.getElementsByClassName('splide-vid');

    for (var i = 0; i < elms2.length; i++) {
        new Splide(elms2[i], {
            type: 'slide',   // Set the type of the carousel
            perPage: 3,         // Number of videos to show at once
            perMove: 3,
            breakpoints: {
                1200: {
                    perPage: 1,
                    perMove: 1
                },
            },         // Number of slides to move at a time
            pagination: false,    // Hide pagination if not needed
        }).mount();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var elms3 = document.getElementsByClassName('splide-ig');

    for (var i = 0; i < elms3.length; i++) {
        new Splide(elms3[i], {
            type: 'slide',   // Set the type of the carousel
            perPage: 4,         // Number of videos to show at once
            perMove: 4,
            arrows: false,
            breakpoints: {
                800: {
                    grid: {
                        rows: 2,
                        cols: 2,
                    },
                    perPage : 1,
                    perMove : 1,
                    width: '100%',
                },
            },         // Number of slides to move at a time
            pagination: false,    // Hide pagination if not needed
        }).mount(window.splide.Extensions);
    }
});
function toggleSidebar() {
    const sidebar = document.getElementById('Container-Sidebar');
    sidebar.classList.toggle('show');
    const sidebar2 = document.querySelector('.side-bar');
    sidebar2.classList.toggle('toggled');
    const sidebar3 = document.querySelector('html');
    sidebar3.classList.toggle('toggle-overflow');
    
}

function toggleList() {
    const sidebar4 = document.querySelector('#submenu-2');
    sidebar4.classList.toggle('list');
}
