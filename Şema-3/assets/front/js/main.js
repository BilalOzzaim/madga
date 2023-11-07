var swiper = new Swiper(".header-slider", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".logo-slider", {
  slidesPerView: 1,
  spaceBetween: 5,
  centeredSlides: false,
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    575: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    767: {
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: "row",
      },

    },
    1399: {
      slidesPerView: 6,

    },
  },
});


$('.tab-trigger').click(function () {
  $('.tab-trigger').removeClass('active')
  $(this).addClass('active')
  $('.tabcontent').removeClass('active')
  var target = $(this).data('target')
  $(target).addClass('active')
})

$('.hamburger-icon').click(function () {
  $('.header-menu-mobil').toggleClass('active')
})