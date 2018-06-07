const app = {
  init: function() {
    this.spellArray = [];
    this.template = document.querySelector('.spell.template');

    const form = document.querySelector('form');
    form.addEventListener('submit', ev => {
      ev.preventDefault();
      this.addToList(ev);
    })
  },


  makeSpanElement: function(name, value) {
    const el = document.createElement('span');
    el.classList.add(name); //add class to span
    el.textContent = value; //change text
    el.setAttribute('title', value);
    return el;
  },

  makeListElement: function(spell) {
    const item = this.template.cloneNode(true);
    item.classList.remove('template');

    const spellProperties = Object.keys(spell);

    spellProperties.forEach(property => {
      const el = item.querySelector(`.${property}`);
      el.textContent = spell[property]
      el.setAttribute('title', spell[property])
    });

    item.querySelector('button.delete')
        .addEventListener('click', this.removeSpell.bind(this, spell));


    
    return item;
  },


  addToList: function(ev) {
    ev.preventDefault();

    const f = ev.target;

    const spell = {
      name: f.spellName.value,
      time: f.spellTime.value,
    } 

    this.spellArray.push(spell);
    console.log(this.spellArray);

    
    const listItem = this.makeListElement(spell);
    const spellList = document.querySelector('#s').appendChild(listItem);

    f.reset();
    f.spellName.focus;
  },

  removeSpell: function(spell, ev) {
    //Removes from the DOM
    const button = ev.target;
    const item = button.closest('.spell');
    item.parentNode.removeChild(item);

    //Remove from array
    const i = this.spellArray.indexOf(spell);
    this.spellArray.splice(i, 1);
    console.log(this.spellArray);
  }

}
app.init();