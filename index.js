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

  const SN = document.createElement("LI");
  const spellName = document.createTextNode(f.spellName.value);
  SN.appendChild(spellName);
  const spellsList = document.querySelector('#s').appendChild(SN);
                        
  const ST = document.createElement("LI");
  const spellTime = document.createTextNode(f.spellTime.value);
  ST.appendChild(spellTime);
  const TimesList = document.querySelector('#t').appendChild(ST);

  f.reset()
}

const form = document.querySelector('form')
form.addEventListener('submit', AddToList)
