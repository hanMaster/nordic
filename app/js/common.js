$(document).ready(function() {
  $(".video_slider").slick({
    nextArrow: '<span class="projects_next"></span>',
    prevArrow: '<span class="projects_prev"></span>',
    dots: true
  });

  $(".partners_band").slick({
    nextArrow: '<span class="partners_next"></span>',
    prevArrow: '<span class="partners_prev"></span>',
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".we_slider").slick({
    dots: true,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: '<span class="next_w"></span>',
    prevArrow: '<span class="prev_w"></span>',
    centerMode: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".kitchen_slider").slick({
    dots: true,
    nextArrow: '<span class="kitchen_next_w"></span>',
    prevArrow: '<span class="kitchen_prev_w"></span>',
    // centerMode: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  if (window.innerWidth < 769) {
    let btn = document.getElementById("more");
    btn.innerHTML = "Подробнее";
  }
});

window.onresize = changeBtn;

function changeBtn() {
  let btn = document.getElementById("more");
  if (window.innerWidth < 769) {
    btn.innerHTML = "Подробнее";
  } else {
    btn.innerHTML = "Посмотреть еще работы";
  }

  $(".we_slider").slick("unslick");
  $(".we_slider").slick({
    dots: true,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: '<span class="next_w"></span>',
    prevArrow: '<span class="prev_w"></span>',
    centerMode: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".kitchen_slider").slick("unslick");
  $(".kitchen_slider").slick({
    dots: true,
    nextArrow: '<span class="kitchen_next_w"></span>',
    prevArrow: '<span class="kitchen_prev_w"></span>',
    // centerMode: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".video_slider").slick("unslick");
  $(".video_slider").slick({
    nextArrow: '<span class="projects_next"></span>',
    prevArrow: '<span class="projects_prev"></span>',
    dots: true
  });

  $(".partners_band").slick("unslick");
  $(".partners_band").slick({
    nextArrow: '<span class="partners_next"></span>',
    prevArrow: '<span class="partners_prev"></span>',
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
