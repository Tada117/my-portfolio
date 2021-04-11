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
  });
  jQuery(".scroll_to").click(function (e) {
    var jump = $(this).attr("href");
    var new_position = $(jump).offset();
    $("html, body").stop().animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
  });
});
//send mail
