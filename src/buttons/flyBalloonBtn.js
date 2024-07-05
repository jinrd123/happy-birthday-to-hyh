const flyBalloonBtn = document.createElement('button');
flyBalloonBtn.textContent = "Fly With Balloons";
flyBalloonBtn.classList.add('style-button');
flyBalloonBtn.classList.add('btn-position');
flyBalloonBtn.classList.add('btn-appear_animation');
flyBalloonBtn.addEventListener('click', () => {
    console.log('flyBalloonBtn');
}, 0)

export default flyBalloonBtn;