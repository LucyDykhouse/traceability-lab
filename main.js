const ramenPic = document.querySelector('.ramen');
const chili = document.querySelector('#chili');
const chicken = document.querySelector('#chicken');
const soy = document.querySelector('#soy');

chili.addEventListener('click', () => {
    ramenPic.src = chili.getAttribute('src');
});

chicken.addEventListener('click', () => {
    ramenPic.src = chicken.getAttribute('src');
});

soy.addEventListener('click', () => {
    ramenPic.src = soy.getAttribute('src');
});

