const findMeal = async(searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    mealCard(data.meals);
}


const mealCard = meals => {

    const divContainer = document.getElementById('div-container');
    divContainer.innerHTML = '';

    meals = meals.slice(0, 6);

    const noFood = document.getElementById('no-food');
    
    // if(meals.length === 0){
    //     noFood.classList.remove('d-none');
    // }
    // else{
    //     noFood.classList.add('d-none');
    // }
    

    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <button onclick="mealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#MealsDetailsModal">
                            Details
                            </button>
                        </div>
                    </div>
    
    `

        divContainer.appendChild(div);

    })

}

const searchText = () => {

    const searchField = document.getElementById('input-field').value;
    console.log(searchField);
    findMeal(searchField);

}


const mealDetails = (idMeal) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
        .then(res => res.json())
        .then(data => mealDetailsMore(data.meals[0]))
}


const mealDetailsMore = (data) => {

    document.getElementById('MealsDetailsModalLabel').innerText = data.strMeal;

    const body = document.getElementById('body');
    body.innerHTML = `
    <h1>Meal ID: ${data.idMeal}</h1>
    <img class= "img-fluid" src="${data.strMealThumb}">
    `


}

findMeal('rice');