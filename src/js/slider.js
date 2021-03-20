const items = document.querySelectorAll('.item-what'),
      previous = document.querySelector('.what__previous-arrow'),
      next = document.querySelector('.what__next-arrow');

previous.addEventListener('click', function(e) {
  if (e.target.classList.contains('_not') == false){
    for (let i = 0; i < items.length; i++) {
      if(items[i].classList.contains('_active')) {
        if (i == 1) {
          previous.classList.add('_not');
        }
        if (i != items.length - 2) {
          next.classList.remove('_not');
        }
        items[i].classList.remove('_active');
        items[i - 1].classList.add('_active');
      }
    }
  } 
});

next.addEventListener('click', function(e) {
  if (e.target.classList.contains('_not') == false){
    for (let i = items.length - 1; i >= 0; i--) {
      if(items[i].classList.contains('_active')) {
        if (i == items.length - 2) {
          next.classList.add('_not');
        }
        if (i != 1) {
          previous.classList.remove('_not');
        }
        items[i + 1].classList.add('_active');
        items[i].classList.remove('_active');
      }
    }
  } 
});