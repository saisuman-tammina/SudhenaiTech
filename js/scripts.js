/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
});

$(document).ready(function () {
  $(".content").slice(0, 7).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if ($(".content:hidden").length == 0) {
      $("#loadMore").text("").addClass("noContent");
    }
  });

})

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
  if (window.scrollY > 0) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

$('body').append('<div id="toTop" class="top-btn"><img src="assets/images/arrow-1.svg" style="rotate: -90deg; width: 14px;height: 14px;position: relative;top: -3px;"></div>');
$(window).on('scroll', function () {
  if ($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
});
$('#toTop').on('click', function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});




var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
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
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// services carousel

var swiper = new Swiper(".slide-content-services", {
  slidesPerView: 4,
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
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 4,
    },
  },
});


