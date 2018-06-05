const button = document.querySelector('button');

function changeHeading() {
    const heading2 = document.querySelector('#spell2');
    heading2.textContent = "Cast";
}
button.addEventListener('click', changeHeading);


