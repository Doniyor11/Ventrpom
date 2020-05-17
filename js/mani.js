$('.slider-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '.btn-right',
    prevArrow: '.btn-left',
    responsive: [{
            breakpoint: 721,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 541,
            settings: {
                slidesToShow: 1,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 376,
            settings: {
                slidesToShow: 1,
                slidesToShow: 1
            }
        }
    ]
});


// Smooth Scrolling
$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000);
            return false;
        }
    }
});


window.sr = ScrollReveal();

sr.reveal('.header-img-text', {
    duration: 2000,
    origin: 'bottom',
    distance: '150px',
});
sr.reveal('.about-box-text', {
    duration: 1500,
    origin: 'bottom',
    distance: '150px',
});
sr.reveal('.about-desc', {
    duration: 2200,
    origin: 'bottom',
    distance: '150px',
});
sr.reveal('.services-img-one', {
    duration: 2200,
    // origin: 'bottom',
    // distance: '300px',
    viewFactor: 0.2,
});
sr.reveal('.services-img-two', {
    duration: 2200,
    // origin: 'bottom',
    // distance: '300px',
    viewFactor: 0.2,
});
sr.reveal('.services-img-three', {
    duration: 2200,
    // origin: 'bottom',
    // distance: '300px',
    viewFactor: 0.2,
});
sr.reveal('.services-animate-one', {
    duration: 2200,
    origin: 'bottom',
    distance: '300px',
});
sr.reveal('.services-animate-two', {
    duration: 2200,
    origin: 'left',
    distance: '300px',
});
sr.reveal('.services-animate-three', {
    duration: 1800,
    origin: 'bottom',
    distance: '300px',
});

sr.reveal('.certificat-img', {
    duration: 1800,
    // origin: 'bottom',
    // distance: '300px',
    viewFactor: 0.4,
});
sr.reveal('.certificat-desc', {
    duration: 1800,
    origin: 'bottom',
    distance: '100px',
});
sr.reveal('.feedback-text', {
    duration: 1800,
    origin: 'bottom',
    distance: '100px',
});
sr.reveal('.fedback-ul', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px',
});
sr.reveal('.form', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
});