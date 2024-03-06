const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

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
});
