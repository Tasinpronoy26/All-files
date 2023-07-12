//Fetch

const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => loadData(data))
}

const loadData = (countries) => {
    const allCountriesDataHtml = countries.map(country => getCountryData(country))
    console.log(countries);
    const countryContainer = document.getElementById('countries');
    countryContainer.innerHTML= allCountriesDataHtml.join(' ');   
}


// option3
const getCountryData = ({name, flags}) => {
    return ` 
    <div class="countryDiv">
        <h3>${name.common}</h3>
        <img src="${flags.png}">
    </div>
    `
}


// option2
// const getCountryData = country => {
     
//     const {name, flags} = country;

//     return ` 
//     <div class="countryDiv">
//         <h3>${name.common}</h3>
//         <img src="${flags.png}">
//     </div>
//     `
// }



// option1
// const getCountryData = country => {
//     return ` 
//     <div class="countryDiv">
//         <h3>${country.name.common}</h3>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }

fetchData();