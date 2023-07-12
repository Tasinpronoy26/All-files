const findUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => findData(data))
}

const findData = (data) => {
    const name = document.getElementById('name');
    name.innerHTML = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;

    const gender = document.getElementById('gender');
    gender.innerHTML = data.results[0].gender;

    const location = document.getElementById('location');
    location.innerHTML = data.results[0].location.state;

    // const image = document.getElementById('image');
    // image.innerHTML = data.results[0].picture.large;
     
}

findUser();