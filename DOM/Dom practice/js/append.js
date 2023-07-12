const mainContainer = document.getElementById('main-container');

const section = document.createElement('section-title');
section.innerHTML = `
<h2> Healings </h2>
            <ul>
                <li>MedKit</li>
                <li>FA</li>
                <li>Bandage</li>
                <li>Painkiller</li>

            </ul>
`

mainContainer.appendChild(section);