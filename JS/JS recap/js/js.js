document.getElementById('bg-color').addEventListener('click', function () {

    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'blue';
    }
})

document.getElementById('center').addEventListener('click', function () {

       const center = document.getElementById('centers');
       center.style.textAlign = 'center';
})

document.getElementById('add-friend').addEventListener('click', function(){
    const div = document.getElementById('add-div');
    const newDiv = document.createElement('div');
    newDiv.classList=('friend');
    newDiv.innerHTML=`
    <h3 class="friend-name">Friend</h3>
    <p> adding new para </p>
    `
    div.appendChild(newDiv);

})

