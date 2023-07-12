function post() {
    const url = 'https://jsonplaceholder.typicode.com/albums';

    fetch(url)
        .then(res => res.json())
        .then(data => findTitle(data))
}


function findTitle(data) {
    const divContainer = document.getElementById('div-container');
    for (const user of data) {
        const divTitle = document.createElement('div');
        divTitle.classList.add('color');
        divTitle.innerHTML = `
        <h3>user id - ${user.userId}</h3>
        <h4>id - ${user.id}</h4>
        <p>title - ${user.title}</p>
        `
        divContainer.appendChild(divTitle);
    }
}

post();