$('.main_slide').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    dots: true,
    prevArrow : '<i class="fa-solid fa-angles-left pre_button"></i>',
    nextArrow:'<i class="fa-solid fa-angles-right next_button"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow:5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      }
    ]
  });
          