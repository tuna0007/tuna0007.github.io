$(document).ready(function(){

  /* MAIN PAGE */
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
  $('.slider').slick({
      prevArrow: '<button type="button" class="slick-next"><img src="images/icons/left.png" alt="arrow"></button>',
      nextArrow: '<button type="button" class="slick-prev"><img src="images/icons/right.png" alt="arrow"></button>',
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: true,

      responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              centerMode: true,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              centerMode: true,
              centerPadding: '100px',
            }
          },
          {
              breakpoint: 993,
              settings: {
                  slidesToShow: 2,
                  centerMode: true,
                  centerPadding: '0px',
              }
            },
          {
              breakpoint: 769,
              settings: {
                  slidesToShow: 1,
                  centerMode: true,
              }
            },
            {
              breakpoint: 530,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '0px',
              }
            }
        ]
  });
  $('.slider-video').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              centerMode: true,
              centerPadding: '80px',
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              centerMode: true,
              centerPadding: '8px',
            }
          },
          {
              breakpoint: 993,
              settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  centerPadding: '80px',
              }
            },
          {
              breakpoint: 769,
              settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  centerPadding: '0px',
              }
            },
            {
              breakpoint: 530,
              settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  centerPadding: '0px',
              }
            }
        ]
  });

}); 
