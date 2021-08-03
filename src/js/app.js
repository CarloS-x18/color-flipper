// Variables
const colorText = document.querySelector('.color');
const btn = document.getElementById('button-change');



// Color Change
const colores = ['Green', 'Red', 'Blue', 'Yellow', 'Cyan', 'Brown', 'Purple', 'Grey', 'Orange',];
btn.addEventListener('click', () => {
    const number = randomNumber(colores.length);
    const color = colores[number];

    colorText.textContent = color;
    colorText.style.color = color;

    document.body.style.backgroundColor = color;
});

function randomNumber(cantida) {
    return Math.floor(Math.random() * cantida);
}



