//

// function loadData(){

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data  => console.log(data))

// }



//

function loadData() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => a(data))

}


function a(data) {
    console.log(data);
}