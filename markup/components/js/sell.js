import owlCarousel from 'static/js/plugins/owl.carousel.min.js';

let addSpace = require('./util/addSpace.js');

const weight = document.querySelectorAll('.sell-carts__slider-slide .cont .weight .weight-block');
const weightItems = document.querySelectorAll('.sell-carts__slider-slide .cont .weight .weight-block ul li');
const weightLine = document.querySelectorAll('.sell-carts__slider-slide .cont .weight .weight-block p');
const price = document.querySelectorAll('.sell-carts__slider-slide .cont .price p span');
const basket = document.querySelector('.page-header .m .container .basket a .count');
const add = document.querySelectorAll('.sell-carts__slider-slide .img button');

for (let i = 0, len = weightItems.length; i < len; i++) {
  weightItems[i].textContent = weightItems[i].dataset.weight;
  
  if (weightItems[i].classList.contains('active')) {
    for (let j = 0, jlen = weightLine.length; j < jlen; j++) {
      let text = document.createTextNode('');
      
      weightLine[j].insertBefore(text, weightLine[j].children[0]);
      weightLine[j].childNodes[0].textContent = weightItems[i].dataset.weight;
      weight[j].dataset.currentPrice = weightItems[i].dataset.price;
      price[j].textContent = addSpace(weightItems[i].dataset.price);
    };
  };
};

for (let i = 0, len = weight.length; i < len; i++) {
  weight[i].addEventListener('click', function (evt) {
    const par = this.closest('.sell-carts__slider-slide .cont');
    const line = evt.target.closest('p');
    const linetext = this.querySelector('p');
    const subMenu = this.querySelector('ul');
    const subMenuItem = evt.target.closest('ul li');
    const thisPrice = par.querySelector('.price p span');
    
    if (line) {
      this.classList.toggle('open');
    };
    
    if (subMenuItem) {
      linetext.childNodes[0].textContent = subMenuItem.dataset.weight;
      thisPrice.textContent = addSpace(subMenuItem.dataset.price);
      this.classList.remove('open');
    };
  });
};

for (let i = 0, len = add.length; i < len; i++) {
  add[i].addEventListener('click', function () {
    basket.textContent = parseInt(basket.textContent, 10) + 1;
  });
};

window.addEventListener('load', function () {
  const dots = document.querySelectorAll('.sell-carts__slider .owl-nav');
  const nav = document.querySelectorAll('.sell-carts__slider .owl-nav');
  const weightselect = document.querySelectorAll('.sell-carts__slider-slide .cont .weight .weight-block');
  
  for (let i = 0, len = weightselect.length; i < len; i++) {
    weightselect[i].addEventListener('mouseenter', function () {
      const par = this.closest('.sell-carts__slider');
      const owlStage = par.querySelector('.owl-stage-outer');
      
      owlStage.style.zIndex = '5';
    });
    
    weightselect[i].addEventListener('mouseleave', function () {
      const par = this.closest('.sell-carts__slider');
      const owlStage = par.querySelector('.owl-stage-outer');
      
      owlStage.style.zIndex = '0';
    });
  };
});

$(document).ready(function(){
  $(".sell-carts__slider").owlCarousel({
    slideTransition: 'ease',
    smartSpeed: 200,
    autoplay: false,
    nav: true,
    responsive: {
      1740: {
        items: 4,
        margin: 29,
        dots: true
      },
      1250: {
        items: 3,
        margin: 29,
        dots: true
      },
      710: {
        items: 2,
        margin: 29
      },
      320: {
        items: 1,
        margin: 0
      }
    }
  });
});