/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
// }

$(document).ready(function(){
  $(".content").slice(0, 7).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  
})

// document.addEventListener('scroll', () =>{
//   const header = document.querySelector('.navigation');

//   if(window.scrollY > 0 ){
//     header.classList.add('scrolled');
//   }
//   else{
//     header.classList.remove('scrolled')
//   }
// })

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 350) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// const element = document.querySelector('.top-colour');
// element.classList.add('animate__animated', 'animate__flip', 'animate__infinite');