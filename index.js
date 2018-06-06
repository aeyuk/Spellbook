/*const makeListElement = function() {
  const el = document.createElement('span');
  el.textContent = value;
  el.setAttribute('title', value);
  const listElement = document.createElement("LI");
  return listElement;
}


const makeSpanElement = function(name, value) {
  const el = document.createElement('span');
  el.classList.add('name'); //add class to span
  el.textContent = value; //change text
  el.setAttribute('title', value); //???
//call with const variable = renderProperty('level', level);
  return el;
}
*/ 

const addToList = function(ev) {
  ev.preventDefault();

  const f = ev.target;
  let flag = true;

  if (f.spellName.value.length > 15) {
      flag = false;
      alert("Error: exceeds character limit");
      f.reset();
  }

  if (flag) {
    const nameSpan = document.createElement('span');
    nameSpan.textContent = f.spellName.value;

    const timeSpan = document.createElement('span');
    timeSpan.textContent = f.spellTime.value;

    const listItem = document.createElement('li');
    listItem.appendChild(nameSpan);
    listItem.appendChild(timeSpan);

    const spellList = document.querySelector('#s').appendChild(listItem);
    
/*
    const SN = makeListElement();
    const spellName = document.createTextNode(f.spellName.value);
    SN.appendChild(spellName);
    const spellsList = document.querySelector('#s').appendChild(SN);

    const ST = makeListElement();
    const spellTime = document.createTextNode(f.spellTime.value);
    ST.appendChild(spellTime);
    const TimesList = document.querySelector('#t').appendChild(ST);
*/
    f.reset()
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', addToList);
