burger = document.querySelector('.burger')
nv2 = document.querySelector('.nv2')
nav = document.querySelector('.nav')



burger.addEventListener('click', () => {
    nv2.classList.toggle('mrindia');
    nav.classList.toggle('chobad');
})