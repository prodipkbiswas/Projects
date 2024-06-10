document.addEventListener('DOMContentLoaded', (event) => {
    const sliderR = document.getElementById('sliderR');
    const sliderG = document.getElementById('sliderG');
    const sliderB = document.getElementById('sliderB');
    const sliderValueR = document.getElementById('sliderValueR');
    const sliderValueG = document.getElementById('sliderValueG');
    const sliderValueB = document.getElementById('sliderValueB');
    const colorBox = document.getElementById('colorBox');

    function updateColor() {
        const r = sliderR.value;
        const g = sliderG.value;
        const b = sliderB.value;
        const rgb = `rgb(${r}, ${g}, ${b})`;
        colorBox.style.backgroundColor = rgb;
    }

    sliderR.addEventListener('input', () => {
        sliderValueR.textContent = sliderR.value;
        updateColor();
    });

    sliderG.addEventListener('input', () => {
        sliderValueG.textContent = sliderG.value;
        updateColor();
    });

    sliderB.addEventListener('input', () => {
        sliderValueB.textContent = sliderB.value;
        updateColor();
    });
});
