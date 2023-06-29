var swiper = new Swiper(".slide-content-blogs", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        // 520: {
        //     slidesPerView: 2,
        // },
        // 950: {
        //     slidesPerView: 4,
        // },
    },
  });
