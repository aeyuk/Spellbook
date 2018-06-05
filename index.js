const button = document.querySelector('button');
const input = document.querySelector('input');

function changeHeading() {
    const heading2 = document.querySelector('#spell2')
    heading2.textContent = input.value;
}

button.addEventListener('click', changeHeading);

document.querySelector('form').addEventListener('submit', function(e) {
    event.preventDefault();
    if (event.keyCode === 13) {
        changeHeading(); 
    }
});
