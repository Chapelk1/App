

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
  autoplay: {
    delay: 5000,
  },
  
  speed: 1000,
});

const swiperSpecialized = new Swiper(".swiper-specialized-solutions", {
  direction: "horizontal",
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    360: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },
    570: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1180: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1670: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});


const refs = {
  btnMenu: document.querySelector(".burger-menu-btn"),
  btnMenuClose: document.querySelector(".burger-menu-close"),
  menu: document.querySelector(".menu"),
};

const toggleMenu = () => {
  refs.menu.classList.toggle("open");
};

refs.btnMenu.addEventListener("click", toggleMenu);
refs.btnMenuClose.addEventListener("click", toggleMenu);

