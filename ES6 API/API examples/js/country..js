const findCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => findData(data))
}

const findData = (data) => {
    const divContainer = document.getElementById('div-container');

    data.forEach(n => {
        const div = document.createElement('div');
        // console.log(n.cca2);
        div.classList.add('style');
        div.innerHTML = `
        <h3> Name: ${n.name.common}  </h3>
        <p> CCA3 : ${n.cca3} </p> 
        <button onclick="findDetail('${n.cca2}')"> Details </button>
        `
        divContainer.appendChild(div);
    })
}

const findDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => detailShow(data[0]))

}

const detailShow = (n) => {

    console.log(n.flags);

    const containerDetail = document.getElementById('container')

    container.innerHTML = `
        <h3> Name: ${n.name.common} </h3>
        <p> CCA3 : ${n.ccn3} </p>
        <img src="${n.flags.png}" >
        `
}


findCountry();