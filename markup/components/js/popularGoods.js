import owlCarousel from 'static/js/plugins/owl.carousel.min.js';

$(document).ready(function(){
  $(".popular-goods__slider").owlCarousel({
    slideTransition: 'ease',
    smartSpeed: 200,
    autoplay: false,
    nav: true,
    responsive: {
      1740: {
        items: 3,
        margin: 30,
        dots: true
      },
      1267: {
        items: 3,
        margin: 20,
        dots: false
      },
      710: {
        items: 2,
        margin: 30
      },
      320: {
        items: 1,
        margin: 0
      }
    }
  });
});