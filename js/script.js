const swiperHero = new Swiper(".mySlider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
});

const swiperCategory = new Swiper(".myCategorySlider", {
  slidesPerView: 1.8,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5.3,
    },
  },
});

const kampanyeSwiper = new Swiper(".KampanyeTerbaru", {
  slidesPerView: 1.8,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4.5,
    },
  },
});
