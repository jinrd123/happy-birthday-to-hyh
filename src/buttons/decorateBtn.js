const banner= document.querySelector('.happy-birthday-banner');

const decorateBtn = document.createElement('button');
decorateBtn.textContent = "Let's Decorate";
decorateBtn.classList.add('style-button');
decorateBtn.classList.add('btn-position');
decorateBtn.classList.add('btn-appear_animation');
decorateBtn.addEventListener('click', () => {
    banner.classList.add('banner-come_animation');
}, 0)

export default decorateBtn;