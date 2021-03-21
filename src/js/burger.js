const menuIcon = document.querySelector('.head-header__menu'),
      menuBody = document.querySelector('.head-header__body'),
      heder = document.querySelector('.header');

if (menuIcon) {
  menuIcon.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}