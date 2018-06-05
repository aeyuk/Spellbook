/*
const button = document.querySelector('button');
const input = document.querySelector('input');

//Change name of title
const changeHeading = function(ev) {
    const f = ev.target;
    const heading = document.querySelector('#title')
    heading.textContent = input.value;
    f.reset();
}

changeButton.addEventListener('click', changeHeading);

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        changeHeading;
    }
});
*/

//Add spell to list
const AddToList = function(ev) {
  ev.preventDefault()

  const f = ev.target

  const spellName = f.spellName.value;
  const spellLevel = f.spellLevel.value;

  const spellsList = document.querySelector('#s');
  spellsList.innerHTML += `<li>${spellName}</li>`;

  const levelsList = document.querySelector('#l');
  levelsList.innerHTML += `<li>${spellLevel}</li>`;

  f.reset()
}

const form = document.querySelector('form')
form.addEventListener('submit', AddToList)
