
//search the elements
const sectionS = document.getElementsByClassName('Dom-title');

//list it and do css in js
for (const section of sectionS) {
    section.style.textAlign = 'center';
}

const domTitles = document.getElementById('dom-title');
domTitles.style.backgroundColor = 'red';
domTitles.style.padding = '10px';

const sections = document.querySelectorAll('section');

for (const section of sections) {


    section.style.backgroundColor = 'red';
    section.style.border = '2px solid blue';
    section.style.color = 'yellow';
    section.style.margin = '10px';
    section.style.padding = '20px';
    section.style.borderRadius = '10px';
    console.log(section);
    
}
