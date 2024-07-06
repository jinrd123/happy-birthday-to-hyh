const container = document.querySelector('.container');

const bulb_yellow = document.querySelector('.bulb_yellow');
const bulb_red = document.querySelector('.bulb_red');
const bulb_blue = document.querySelector('.bulb_blue');
const bulb_green = document.querySelector('.bulb_green');
const bulb_orange = document.querySelector('.bulb_orange');
const bulb_pink = document.querySelector('.bulb_pink');

const musicBtn = document.createElement('button');
musicBtn.textContent = 'Play Music';
musicBtn.classList.add('style-button');
musicBtn.classList.add('btn-position');
musicBtn.classList.add('btn-appear_animation');
musicBtn.addEventListener('click', () => {

    bulb_yellow.classList.add('bulb-yellow_animation-after');
    bulb_red.classList.add('bulb-red_animation-after');
    bulb_blue.classList.add('bulb-blue_animation-after');
    bulb_green.classList.add('bulb-green_animation-after');
    bulb_orange.classList.add('bulb-orange_animation-after');
    bulb_pink.classList.add('bulb-pink_animation-after');

    container.classList.add('container-animation');

    const audio = document.querySelector('.song');
    audio.play();

}, 0)

export default musicBtn;