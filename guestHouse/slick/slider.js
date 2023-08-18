$(document).ready(function(){
$('.rooms-slider').slick({
    responsive: [
    {
    breakpoint: 100000,
    settings: "unslick"
    },
    {
    breakpoint: 576,
    settings: {
        
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,

    }
    }
    ],
});


$('.feedback-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.feedback-area',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '0px',
            }
        }
    ],
});

$('.feedback-area').slick({
    prevArrow: '<button type="button" class="slick-next"><img src="images/icons/left.png" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-prev"><img src="images/icons/right.png" alt="arrow"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.feedback-slider',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                autoplay: false,
            }
        }
    ],
});

/* INFO */ 
$('.about-slider').slick({
    prevArrow: '<button type="button" class="slick-next"><img src="images/icons/left.png" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-prev"><img src="images/icons/right.png" alt="arrow"></button>',
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    centerMode: true,
    centerPadding: '8px',
});
$('.about-slider-video').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '6px',
});


/* FAMILY ROOM */
$('.family-room-slider').slick({
    prevArrow: '<button type="button" class="slick-next"><img src="images/icons/left.png" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-prev"><img src="images/icons/right.png" alt="arrow"></button>',
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    centerMode: true,
    centerPadding: '2px',
});
});
