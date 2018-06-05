const button = document.querySelector('button');

function changeHeading() {
    const heading = document.querySelector('#spell1');
    heading.textContent = "Cast";
}
button.addEventListener('click', changeHeading);


