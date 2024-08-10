// public/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    const greetMessage = document.getElementById('greetMessage');

    greetButton.addEventListener('click', () => {
        greetMessage.textContent = 'Hello, welcome to the site!';
    });
});
