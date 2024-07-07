const balloonBorder = document.querySelector('.balloon-border');
const balloon1 = document.querySelector('#balloon1');
const balloon2 = document.querySelector('#balloon2');
const balloon3 = document.querySelector('#balloon3');
const balloon4 = document.querySelector('#balloon4');
const balloon5 = document.querySelector('#balloon5');
const balloon6 = document.querySelector('#balloon6');
const balloon7 = document.querySelector('#balloon7');

let trigger = { able: true };
export { trigger };

const flyBalloonBtn = document.createElement('button');
flyBalloonBtn.textContent = "Fly With Balloons";
flyBalloonBtn.classList.add('style-button');
flyBalloonBtn.classList.add('btn-position');
flyBalloonBtn.classList.add('btn-appear_animation');
flyBalloonBtn.addEventListener('click', () => {
    balloonBorder.classList.add('fly-end');

    balloon1.classList.add('balloon-show');
    balloon2.classList.add('balloon-show');
    balloon3.classList.add('balloon-show');
    balloon4.classList.add('balloon-show');
    balloon5.classList.add('balloon-show');
    balloon6.classList.add('balloon-show');
    balloon7.classList.add('balloon-show');

    balloon1.classList.add('balloon-behavior-one');
    balloon3.classList.add('balloon-behavior-one');
    balloon5.classList.add('balloon-behavior-one')
    balloon6.classList.add('balloon-behavior-one');

    balloon2.classList.add('balloon-behavior-two');
    balloon4.classList.add('balloon-behavior-two');
    balloon7.classList.add('balloon-behavior-two');

    balloonFly(balloon1);
    balloonFly(balloon2);
    balloonFly(balloon3);
    balloonFly(balloon4);
    balloonFly(balloon5);
    balloonFly(balloon6);
    balloonFly(balloon7);

}, 0)

function balloonFly(balloon) {
    // 气球宽度25vw
    const targetLeft = 170 * Math.random() - 50;
    const targetTop = 150 * Math.random() - 50;
    balloon.style.left = `${targetLeft}vw`;
    balloon.style.top = `${targetTop}vh`;
    setTimeout(() => {
        if(trigger.able) balloonFly(balloon);
    }, 10000);
}

export default flyBalloonBtn;