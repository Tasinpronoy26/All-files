// where to add
const movieList = document.getElementById('movie-list');

//what to be add
const li = document.createElement('li');
li.innerText = 'KGF3';

//add the child
movieList.appendChild(li);

const section = document.createElement('section');
const h1 = document.createElement('h1');

h1.innerText = 'Fav Games';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = ('pubg');
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = ('free fire');
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = ('apex');
ul.appendChild(li3);

section.appendChild(ul);


const mainContainer = document.getElementById('main-container');

mainContainer.appendChild(section);



// shortcut

const section1 = document.createElement('section');
section1.innerHTML = `
<h2> Fav actor </h2>
             <ul>
                <li>Shahrukh Khan</li>
                <li>Salman Khan</li>
                <li>Amir Khan</li>
             </ul>
`

mainContainer.appendChild(section1);



