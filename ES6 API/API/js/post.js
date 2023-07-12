function posts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then(res => res.json())
        .then(data => findPost(data))
}


function findPost(posts) {


    const div = document.getElementById('div-list');

    for (const post of posts) {

        const postDiv = document.createElement('div');
        postDiv.classList.add('color');
        console.log(post);

        postDiv.innerHTML = `
        <h3>user id - ${post.userId}</h3>
        <h4>id - ${post.id}</h4>
        <p>title - ${post.title}</p>
        <p>${post.body}</p>               
        `;


        div.appendChild(postDiv);
    }
}

posts();