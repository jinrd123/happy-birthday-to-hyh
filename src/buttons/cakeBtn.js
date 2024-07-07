const cake = document.querySelector('.cake');

const cakeBtn = document.createElement('button');
cakeBtn.textContent = "Most Delicious Cake";
cakeBtn.classList.add('style-button');
cakeBtn.classList.add('btn-position');
cakeBtn.classList.add('btn-appear_animation');
cakeBtn.addEventListener('click', () => {
    cake.classList.add('show');
}, 0)

export default cakeBtn;