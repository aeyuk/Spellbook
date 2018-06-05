const button = document.querySelector('button');
const input = document.querySelector('input');

function changeHeading() {
    const heading2 = document.querySelector('#spell2')
    heading2.textContent = input.value;
}

button.addEventListener('click', changeHeading);


input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        button.click();
    }
});