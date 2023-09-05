const loadMeals = (searchFood) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}
const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(mealx =>{
        console.log(mealx)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
        <img src="${mealx.strMealThumb}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${mealx.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadMealDetail(${mealx.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Details
        </button>

        </div>
      </div>
        `
        mealsContainer.appendChild(mealDiv)
    })
}

const searchMeals = () =>{
    const searchFood = document.getElementById('search-field').value ;
    console.log(searchFood);
    loadMeals(searchFood)
}

const loadMealDetail = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = mealx =>{
    document.getElementById('exampleModalLabel').innerText = mealx.strMeal;
    const mealDetails = document.getElementById('mealBody');
    mealDetails.innerHTML= `
    <img class = "img-fluid" src = "${mealx.strMealThumb}">
    `
}

loadMeals('fish')