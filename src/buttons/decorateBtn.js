const decorateBtn = document.createElement('button');
decorateBtn.textContent = "LET'S DECORATE";
decorateBtn.classList.add('style-button');
decorateBtn.classList.add('btn-position');
decorateBtn.classList.add('btn-appear_animation');
decorateBtn.addEventListener('click', () => {
    console.log('decorateBtn');
}, 0)

export default decorateBtn;