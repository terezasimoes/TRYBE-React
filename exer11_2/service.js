// Imagine que a função geradora de cor aleatória seja essa e esteja no arquivo service.js:

function randomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
module.exports = { randomRgbColor };