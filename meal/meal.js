const loadMeals = (searchTexts) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTexts}`
  console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals (data.meals))

}

const displayMeals = meals =>{
    // stp 1: need container
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach (meal =>{
        console.log(meal.strMeal)
        // stp 2: create child for each element
        const mealDiv = document.createElement('div')
               // stp 3:set child element
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card h-100">
                <img src="${meal.strMealThumb}
                " class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button onclick="loadMealModal (${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                Details
                  </button>
                </div>
              </div>
        `
 
        // stp 4:append child element
        mealsContainer.appendChild(mealDiv)
    
    })
}



const searchMeal = () =>{
  const searchText = document.getElementById('search-Text').value ;
  console.log(searchText);
  loadMeals(searchText);
}
 

const loadMealModal = idMeal =>{
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetailss(data.meals[0]))
} 
  const displayMealDetailss = meal =>{
    document.getElementById('mealModalLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailBody');
    mealsDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    `
  }



loadMeals('rice')