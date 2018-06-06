//Add spell to list
const addToSpellList = function(ev) {
  ev.preventDefault();

  const f = ev.target;
  let flag = true;

  if (f.spellName.value.length > 15) {
      flag = false;
      alert("Error: exceeds character limit");
      f.reset();
  }

  if (flag) {
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
}

const addToTimeList = function(ev) {
    ev.preventDefault();

    const f = ev.target;
    const ST = document.createElement("LI");
    const spellTime = document.createTextNode(f.spellTime.value);
    ST.appendChild(spellTime);
    const TimesList = document.querySelector('#t').appendChild(ST);

     f.reset();
}

const form = document.querySelector('form');
form.addEventListener('submit', addToSpellList);
form.addEventListener('submit', addToTimeList)
