const balloonBorder = document.querySelector('.balloon-border');

const flyBalloonBtn = document.createElement('button');
flyBalloonBtn.textContent = "Fly With Balloons";
flyBalloonBtn.classList.add('style-button');
flyBalloonBtn.classList.add('btn-position');
flyBalloonBtn.classList.add('btn-appear_animation');
flyBalloonBtn.addEventListener('click', () => {
    balloonBorder.classList.add('fly-end');
}, 0)

export default flyBalloonBtn;