const btnnav = document.querySelector('.icon-nav-open');
const btnnav2 = document.querySelector('.icon-nav-close');

const header = document.querySelector('.menu');
btnnav.addEventListener('click', function(){
    header.classList.add('nav-open');
});
btnnav2.addEventListener('click', function(){
    header.classList.remove('nav-open');
});
