const makeSpanElement = function(name, value) {
  const el = document.createElement('span');
  el.classList.add(name); //add class to span
  el.textContent = value; //change text
  return el;
}


const makeListElement = function(nameSpan, timeSpan) {
  const el = document.createElement('li');
  el.classList.add('spell');
  el.appendChild(nameSpan);
  el.appendChild(timeSpan);
  return el;
}


const addToList = function(ev) {
  ev.preventDefault();

  const f = ev.target;


    const nameSpan = makeSpanElement('name', f.spellName.value);
    const timeSpan = makeSpanElement('time', f.spellTime.value);

    const listItem = makeListElement(nameSpan, timeSpan);

    const spellList = document.querySelector('#s').appendChild(listItem);

    f.reset()
  }

const form = document.querySelector('form');
form.addEventListener('submit', addToList);
