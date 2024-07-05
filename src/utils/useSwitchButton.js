export default function useSwitchButton(container, startBtn, removeTime, appearTime, endBtn) {
    startBtn.addEventListener('click', () => {
        startBtn.style.transition = `all ${removeTime / 1000}s`;
        startBtn.style.opacity = 0;
        setTimeout(() => {
            startBtn.style.display = 'none';
            setTimeout(() => {
                container.appendChild(endBtn);
            }, appearTime)
        }, removeTime)
    });
}