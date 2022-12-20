const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});
//login
const registerBtn = document.querySelector(".register")
    const form = document.querySelector("#regForm")
    const loginBtn = document.querySelector("#login")
    registerBtn.addEventListener('click',()=>{
        form.style.display="block"

    })
    loginBtn.addEventListener('click',()=>{
        form.style.display ="none"
    })