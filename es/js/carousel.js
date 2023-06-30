$(document).ready(function () {
  $('.text-content-caroussel').slick({
      arrows: false,
      dots: true,
      infinite: true,
      fade: true,
      speed: 0,
      touchThreshold: 10,
      lazyLoad: 'ondemand',
  });
});

$(document).ready(function () {
  $('.benefits-carousel').slick({
      arrows: false,
      dots: true,
      infinite: true,
      lazyLoad: 'ondemand',
  });
});

$(document).ready(function () {
  $('.easy-carousel').slick({
      arrows: false,
      dots: true,
      infinite: true,
      lazyLoad: 'ondemand',
  });
});

$(document).ready(function () {
  $('.testmonials-carousel').slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      lazyLoad: 'ondemand',
      responsive: [
          {
              breakpoint: 981,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 673,
              settings: {
                  slidesToShow: 1.68,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 573,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});