const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 300,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      switch (index) {
        case 0:
          return '<span class="' + className + '">' + "MOBILISE" + "</span>";
        case 1:
          return '<span class="' + className + '">' + "MONETISE" + "</span>";
        case 2:
          return (
            '<span class="' + className + '">' + "RETAIN &  REWAARD" + "</span>"
          );
      }
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  effect: "coverflow",
  speed: 1000,
});

const swiperSpecialized = new Swiper(".swiper-specialized-solutions", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2,
  // autoplay: {
  //   delay: 3000,
  // },
  // speed: 1000,
  breakpoints: {
    570: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1180: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1670: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
