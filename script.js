$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  //   toogle menu
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  $(".project-content__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    pauseOnHover: true,
    accessibility: true,
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  jQuery(".scroll_to").click(function (e) {
    var jump = $(this).attr("href");
    var new_position = $(jump).offset();
    $("html, body").stop().animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
  });
});
//type writer

var demo = document.getElementById("type-writer");

var typewriter = new Typewriter(demo, {
  strings: ["Front-end Developer"],
  cursor: "|",
  delay: "natural", // 'natural' or Number
  loop: true, // infinite loop
  autoStart: true,
  devMode: false,
  wrapperClassName: "Typewriter__wrapper",
  cursorClassName: "Typewriter__cursor",
});
