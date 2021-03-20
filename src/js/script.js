import '../scss/style.scss';

import './slider';


const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('_active');
    });
});