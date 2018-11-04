import fotorama from 'static/js/plugins/fotorama.js';

let addSpace = require('./util/addSpace.js');
let removeSpace = require('./util/removeSpace.js');

// goods calculate
const calc = document.querySelectorAll('.good .cont .block-left .options .calculate .calculate-block');
const weight = document.querySelectorAll('.good .cont .block-left .options .weight .weight-block');
const weightMenu = document.querySelectorAll('.good .cont .block-left .options .weight .weight-block ul');
const weightItems = document.querySelectorAll('.good .cont .block-left .options .weight .weight-block ul li');
const weightItemsVal = document.querySelectorAll('.good .cont .block-left .options .weight .weight-block p');
const oldPrice = document.querySelectorAll('.good .cont .block-left .price .old-price span');
const currentPrice = document.querySelectorAll('.good .cont .block-left .price .current-price span');
const basket = document.querySelector('.page-header .m .container .basket a .count');
const add = document.querySelectorAll('.good .cont .add');

for (let i = 0, len = weightItems.length; i < len; i++) {
  weightItems[i].textContent = weightItems[i].dataset.weight;
  
  if (weightItems[i].classList.contains('active')) {
    for (let j = 0, jlen = weightItemsVal.length; j < jlen; j++) {
      let text = document.createTextNode('');
      
      weightItemsVal[j].insertBefore(text, weightItemsVal[j].children[0]);
      weightItemsVal[j].childNodes[0].textContent = weightItems[i].dataset.weight;
      weightMenu[j].dataset.currentPrice = weightItems[i].dataset.price;
      currentPrice[j].textContent = weightItems[i].dataset.price;
      if (weightMenu[j].dataset.oldPrice === 'true') {
        oldPrice[j].textContent = weightItems[i].dataset.oldPrice;
      } else {
        oldPrice[j].parentElement.style.display = 'none';
      };
    };
  };
};

for (let i = 0, len = weight.length; i < len; i++) {
  weight[i].addEventListener('click', function (evt) {
    const par = this.closest('.good .cont');
    const val = evt.target.closest('p');
    const valText = this.querySelector('p');
    const subMenu = this.querySelector('ul');
    const subMenuItem = evt.target.closest('ul li');
    const oldPrice = par.querySelector('.good .cont .block-left .price .old-price span');
    const currentPrice = par.querySelector('.good .cont .block-left .price .current-price span');
    const calcVal = par.querySelector('.block-left .options .calculate .calculate-block p');
    
    if (val) {
      this.classList.toggle('open');
    };
    
    if (subMenuItem) {
      valText.childNodes[0].textContent = subMenuItem.dataset.weight;
      this.classList.remove('open');
      oldPrice.textContent = subMenuItem.dataset.oldPrice;
      currentPrice.textContent = subMenuItem.dataset.price;
      calcVal.textContent = 1;
    }; 
  });
};

for (let i = 0, len = calc.length; i < len; i++) {
  calc[i].addEventListener('click', function (evt) {
    const par = this.closest('.good .cont');
    const minus = evt.target.closest('button.minus');
    const val = this.querySelector('p');
    const plus = evt.target.closest('button.plus');
    const currentPrice = par.querySelector('.block-left .price .current-price span');
    const selectPrice = par.querySelector('.block-left .options .weight .weight-block ul');
    
    if (minus) {
      if (parseInt(val.textContent, 10) > 1) {
        val.textContent = parseInt(val.textContent, 10) - 1;
        currentPrice.textContent = addSpace(parseInt(removeSpace(currentPrice.textContent), 10) - parseInt(removeSpace(selectPrice.dataset.currentPrice), 10));
        if (parseInt(removeSpace(currentPrice.textContent), 10) < 1000) {
          currentPrice.parentElement.classList.remove('fix-size');
        };
      };
    };
    
    if (plus) {
      val.textContent = parseInt(val.textContent, 10) + 1;
      currentPrice.textContent = addSpace(parseInt(removeSpace(currentPrice.textContent), 10) + parseInt(removeSpace(selectPrice.dataset.currentPrice), 10));
      if (parseInt(removeSpace(currentPrice.textContent), 10) >= 1000) {
        currentPrice.parentElement.classList.add('fix-size');
      };
    };
  });
};

for (let i = 0, len = add.length; i < len; i++) {
  add[i].addEventListener('click', function (evt) {
    const par = this.closest('.good .cont');
    const val = par.querySelector('.good .cont .block-left .options .calculate .calculate-block p');
    
    basket.textContent = parseInt(basket.textContent, 10) + parseInt(val.textContent, 10);
  });
};

//fotorama actions
window.addEventListener('load', function () {
  const good = document.querySelectorAll('.good');
  const myFotorama = document.querySelectorAll('.good .fotorama');
  const count = document.querySelectorAll('.good .fotorama-wrap .count');
  
  for (let i = 0, len = count.length; i < len; i++) {
    for (let j = 0, jlen = myFotorama.length; j < jlen; j++) {
      const myFotoramaNav = myFotorama[j].querySelectorAll('.fotorama__nav__frame');
      
      for (let y = 0, ylen = myFotoramaNav.length; y < ylen; y++) {
        myFotoramaNav[y].dataset.number = y + 1;
      };
      
      count[i].textContent = '1 из ' + myFotoramaNav.length;
    };
  };
  
  for (let i = 0, len = good.length; i < len; i++) {
    good[i].addEventListener('click', function (evt) {
      const prev = evt.target.closest('.fotorama__arr--prev');
      const next = evt.target.closest('.fotorama__arr--next');
      const thisCount = this.querySelector('.fotorama-wrap .count');
      const thisNav = this.querySelectorAll('.fotorama__nav__frame');
      const thisNavItem = evt.target.closest('.fotorama__nav__frame');
      
      if (prev) {
        thisCount.textContent = (parseInt(thisCount.textContent, 10) - 1) + ' из ' + thisNav.length;
      };
      
      if (next) {
        thisCount.textContent = (parseInt(thisCount.textContent, 10) + 1) + ' из ' + thisNav.length;
      };
      
      if (thisNavItem) {
        thisCount.textContent = parseInt(thisNavItem.dataset.number, 10) + ' из ' + thisNav.length;
      };
    });
  };
});







