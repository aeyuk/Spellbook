class App {
  constructor() {
    this.spellArray = [];
    this.template = document.querySelector('.spell.template');
    this.list = document.querySelector('#s');

    this.load();

    const form = document.querySelector('form');
    form.addEventListener('submit', ev => {
      ev.preventDefault();
      this.handleSubmit(ev);
    });
  }

  save() {
    localStorage.setItem(
      'spells',
      JSON.stringify(this.spellArray)
    );
  }

  load() {
    const spellJSON = localStorage.getItem('spells');
    const spellArray = JSON.parse(spellJSON);
    if (spellArray) {
      spellArray.forEach(this.addSpell.bind(this));
    }
  }


  renderProperty(name, value) {
    const el = document.createElement('span');
    el.classList.add(name); //add class to span
    el.textContent = value; //change text
    el.setAttribute('title', value);
    return el;
  }

  renderItem(spell) {
    const item = this.template.cloneNode(true);
    item.classList.remove('template');

    const spellProperties = Object.keys(spell);

    spellProperties.forEach(property => {
      const el = item.querySelector(`.${property}`);
      if (el) {
        el.textContent = spell[property];
        el.setAttribute('title', spell[property]);
      }
    });

    //Delete button
    item
        .querySelector('button.delete')
        .addEventListener('click', 
        this.removeSpell.bind(this, spell));
    

    //Favorite button
    if (spell.favorite) {
      item.classList.add('fav');
    }
    item
      .querySelector('button.fav')
      .addEventListener(
        'click',
        this.toggleFavorite.bind(this, spell)
      );

    //Move down button
    item
      .querySelector('button.down')
      .addEventListener(
        'click',
        this.moveDown.bind(this, spell)
      );

    return item;
  }

  toggleFavorite(spell, ev) {
    const button = ev.target;
    const item = button.closest('.spell');
    spell.favorite = item.classList.toggle('fav');

    this.save();
  }

  moveDown(spell, ev) {
    const button = ev.target;
    const item = button.closest('.spell');

    const i = this.spellArray.indexOf(spell);

    if (i < this.spellArray.length - 1) {
      this.list.insertBefore(item.nextSibling, item);
      const nextSpell = this.spellArray[i + 1];
      this.spellArray[i + 1] = spell;
      this.spellArray[i] = nextSpell;

      this.save();
    }
  }

  addSpell(spell) {
    this.spellArray.push(spell);
    console.log(this.spellArray);
    const item = this.renderItem(spell);
    this.list.appendChild(item);
  }

  removeSpell(spell, ev) {
    //Removes from the DOM
    const button = ev.target;
    const item = button.closest('.spell');
    item.parentNode.removeChild(item);

    //Remove from array
    const i = this.spellArray.indexOf(spell);
    this.spellArray.splice(i, 1);
    console.log(this.spellArray);

    this.save();
  }

  handleSubmit(ev) {
    const f = ev.target;

    const spell = {
      name: f.spellName.value,
      time: f.spellTime.value,
      favorite: false,
    } 

    this.addSpell(spell);
    this.save();

    f.reset();
    f.spellName.focus;
  }
}


const app = new App();