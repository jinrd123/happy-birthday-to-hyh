const container = document.querySelector('.container');
const lightBtn = document.querySelector('#light-on-btn');
const bulbsContainer = document.querySelector('.bulbs-container');
const bulb_yellow = document.querySelector('.bulb_yellow');
const bulb_red = document.querySelector('.bulb_red');
const bulb_blue = document.querySelector('.bulb_blue');
const bulb_green = document.querySelector('.bulb_green');
const bulb_orange = document.querySelector('.bulb_orange');
const bulb_pink = document.querySelector('.bulb_pink');
lightBtn.addEventListener('click', () => {
    container.style.transition = 'all 3s';
    container.style.backgroundColor = '#FFDAB9';
    bulbsContainer.style.opacity = 1;

    bulb_yellow.classList.add('bulb-yellow_animation');
    bulb_yellow.classList.add('bulb-yellow-animation-end');

    bulb_red.classList.add('bulb-red_animation');
    bulb_red.classList.add('bulb-red-animation-end');

    bulb_blue.classList.add('bulb-blue_animation');
    bulb_blue.classList.add('bulb-blue-animation-end');

    bulb_green.classList.add('bulb-green_animation');
    bulb_green.classList.add('bulb-green-animation-end');

    bulb_orange.classList.add('bulb-orange_animation');
    bulb_orange.classList.add('bulb-orange-animation-end');

    bulb_pink.classList.add('bulb-pink_animation');
    bulb_pink.classList.add('bulb-pink-animation-end');

    lightBtn.style.transition = 'all 1.5s';
    lightBtn.style.opacity = 0;
})

export default lightBtn;

