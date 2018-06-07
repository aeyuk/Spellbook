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

    const spell = {
      name: f.spellName.value,
      time: f.spellTime.value,
    } 

    
    const listItem = this.makeListElement(spell);


    //Create and append button
    const button = document.createElement('button');
    button.setAttribute("class", "w3-circle");
    listItem.appendChild(button);
    
    //Push list items into array
    spellArray.push(listItem.textContent);
    console.log(spellArray);

    //Remove list item from array on click
    button.addEventListener('click', function(ev) {
      listItem.parentNode.removeChild(listItem);
      for (let i = 0; i < spellArray.length; i++) {
        if (spellArray[i] === listItem.textContent)
          spellArray.splice(i, 1);
      }
      console.log(spellArray);
    });
    
    
    const spellList = document.querySelector('#s').appendChild(listItem);

    f.reset();

  },
}
app.init();