const spellArray = [];
const app = {
  init: function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', ev => {
      this.addToList(ev);
    })
  },


  makeSpanElement: function(name, value) {
    const el = document.createElement('span');
    el.classList.add(name); //add class to span
    el.textContent = value; //change text
    return el;
  },

  makeListElement: function(spell) {
    spellProperties = Object.keys(spell);

    const spanArray = spellProperties.map(prop => {
      return this.makeSpanElement(prop, spell[prop])
    })

    const listItem = document.createElement('li');
    listItem.classList.add('spell');

    spanArray.forEach(el => {
      listItem.appendChild(el);
    });

    return listItem;
  },

  addToList: function(ev) {
    ev.preventDefault();

    const f = ev.target;

    //spell obj
    const spell = {
      name: f.spellName.value,
      time: f.spellTime.value,
    } 

    
    const listItem = this.makeListElement(spell);

    spellArray.push(listItem);
    console.log(spellArray);

    //make button
    const button = document.createElement('button');
    listItem.appendChild(button);

    button.addEventListener('click', function(ev) {
      listItem.parentNode.removeChild(listItem);
      spellArray.pop(listItem);
      console.log(spellArray);
    });
    
    
    const spellList = document.querySelector('#s').appendChild(listItem);

    f.reset();

  },
}
app.init();