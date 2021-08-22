$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });
  //   toogle menu
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
  jQuery('.scroll_to').click(function (e) {
    let jump = $(this).attr('href');
    let new_position = $(jump).offset();

    $('html, body')
      .stop()
      .animate({ scrollTop: new_position.top - 40 }, 500);
    e.preventDefault();
  });
});

//type writer
let demo = document.getElementById('type-writer');

let typewriter = new Typewriter(demo, {
  strings: ['Front-end Developer'],
  cursor: '|',
  delay: 'natural', // 'natural' or Number
  loop: true, // infinite loop
  autoStart: true,
  devMode: false,
  wrapperClassName: 'Typewriter__wrapper',
  cursorClassName: 'Typewriter__cursor',
});
