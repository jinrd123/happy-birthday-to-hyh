import { trigger } from "./flyBalloonBtn";
const balloon1 = document.querySelector('#balloon1');
const balloon2 = document.querySelector('#balloon2');
const balloon3 = document.querySelector('#balloon3');
const balloon4 = document.querySelector('#balloon4');
const balloon5 = document.querySelector('#balloon5');
const balloon6 = document.querySelector('#balloon6');
const balloon7 = document.querySelector('#balloon7');
const balloon1_text = document.querySelector('#balloon1 h2');
const balloon2_text = document.querySelector('#balloon2 h2');
const balloon3_text = document.querySelector('#balloon3 h2');
const balloon4_text = document.querySelector('#balloon4 h2');
const balloon5_text = document.querySelector('#balloon5 h2');
const balloon6_text = document.querySelector('#balloon6 h2');
const balloon7_text = document.querySelector('#balloon7 h2');
const message = document.querySelector('.message');

const messageBtn = document.createElement('button');
messageBtn.textContent = "A Blessing To 22'you";
messageBtn.classList.add('style-button');
messageBtn.classList.add('btn-position');
messageBtn.classList.add('btn-appear_animation');
messageBtn.addEventListener('click', () => {

    balloon1.style.transition = 'all linear 1s';
    balloon2.style.transition = 'all linear 1s';
    balloon3.style.transition = 'all linear 1s';
    balloon4.style.transition = 'all linear 1s';
    balloon5.style.transition = 'all linear 1s';
    balloon6.style.transition = 'all linear 1s';
    balloon7.style.transition = 'all linear 1s';

    balloon1_text.style.display = 'block';
    balloon2_text.style.display = 'block';
    balloon3_text.style.display = 'block';
    balloon4_text.style.display = 'block';
    balloon5_text.style.display = 'block';
    balloon6_text.style.display = 'block';
    balloon7_text.style.display = 'block';

    balloon1.style.left = '15vw'
    balloon1.style.top = '30vh'
    balloon2.style.left = '40vw'
    balloon2.style.top = '30vh'
    balloon3.style.left = '65vw'
    balloon3.style.top = '30vh'
    balloon4.style.left = '10vw'
    balloon4.style.top = '55vh'
    balloon5.style.left = '30vw'
    balloon5.style.top = '55vh'
    balloon6.style.left = '50vw'
    balloon6.style.top = '55vh'
    balloon7.style.left = '70vw'
    balloon7.style.top = '55vh'

    trigger.able = false;

    message.classList.add('show')

    messageBtn.style.transition = 'all 1s'
    messageBtn.style.opacity = 0;
}, 0)

export default messageBtn;