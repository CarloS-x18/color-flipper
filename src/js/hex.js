// Variables
const colorText = document.querySelector('.color');
const btn = document.getElementById('button-change');

// Hex Properties
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'F'];

// Color Change
btn.addEventListener('click', () => {
    // Variable donde se formara el color hexadecimal
    let colorHex = '#';
    // se realiza 6 veces, en cada una con un numero random diferente y selecciona la propiedad en el index del number
    for(i = 0; i < 6; i++) {
        const property = hex[randomNumber()];

        colorHex += property;
    }

    colorText.textContent = colorHex;
    colorText.style.color = colorHex;
    
    document.body.style.backgroundColor = colorHex;
});

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}