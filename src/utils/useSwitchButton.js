export default function useSwitchButton(container, startBtn, removeTime, appearTime, endBtn) {
    startBtn.addEventListener('click', () => {
        setTimeout(() => {
            startBtn.style.display = 'none';
            setTimeout(() => {
                container.appendChild(endBtn);
            }, appearTime)
        }, removeTime)
    });
}