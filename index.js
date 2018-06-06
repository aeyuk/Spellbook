const makeSpanElement = function(name, value) {
  const el = document.createElement('span');
  el.classList.add(name); //add class to span
  el.textContent = value; //change text
  return el;
}


const makeListElement = function(spell) {
  spellProperties = Object.keys(spell); //gets array of spans
  const spanArray = spellProperties.map(function(prop) {
    return makeSpanElement(prop, spell[prop]);
  });

  const listItem = document.createElement('li');
  listItem.classList.add('spell');

  spanArray.forEach(function(el) {
    listItem.appendChild(el);
  });

  return listItem;
}



const addToList = function(ev) {
  ev.preventDefault();

  const f = ev.target;

  //spell obj
  const spell = {
    name: f.spellName.value,
    time: f.spellTime.value,
  }

  const listItem = makeListElement(spell);

  const spellList = document.querySelector('#s').appendChild(listItem);

  f.reset();
}

const form = document.querySelector('form');
form.addEventListener('submit', addToList);
