//const spellArray = [];
const app = {
  init: function() {
    this.spellArray = [];
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
    
    //Create and append button
    const button = document.createElement('button');
    button.setAttribute("class", "w3-circle");
    listItem.appendChild(button);
    button.textContent = "Delete";
    button.addEventListener('click', this.removeSpell.bind(this, spell));

    listItem.appendChild(button);

    return listItem;
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


    
    
    //Push list items into array
    /*spellArray.push(listItem.textContent);
    console.log(spellArray);

    //Remove list item from array on click
    //Doesn't allow for exact duplicates
      button.addEventListener('click', function(ev) {
      listItem.parentNode.removeChild(listItem);
      for (let i = 0; i < spellArray.length; i++) {
        if (spellArray[i] === listItem.textContent)
          spellArray.splice(i, 1);
      }
      console.log(spellArray);
    });
    */
    
    const spellList = document.querySelector('#s').appendChild(listItem);


    f.reset();

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