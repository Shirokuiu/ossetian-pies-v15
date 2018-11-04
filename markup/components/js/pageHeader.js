const header = document.querySelector('.page-header');
const menuBtn = header.querySelector('.m .container .btn');
const menu = header.querySelector('.b');
const exit = header.querySelector('.b .exit');

menuBtn.addEventListener('click', function () {
  menu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

exit.addEventListener('click', function () {
  menu.classList.remove('open');
  document.body.style.overflow = 'visible';
});