function findData2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => findUser(data))
}

function findUser(x) {

    const ul = document.getElementById('ul-list');
    for (const user of x) {
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }


}




function findData3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => findUser1(data))
}

function findUser1(x) {

    const ul = document.getElementById('ul-list');
    for (const user of x) {
        console.log(user.email)
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }


}




function findId(){
    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
    .then(res => res.json())
    .then(data => id(data))
}

function id(data){
    const ul = document.getElementById('ul-list')
    for(const user of data){
        console.log(user.id);
        const li = document.createElement('li');
        li.innerText = user.id;
        ul.appendChild(li);
} }