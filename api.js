let allMeals = document.querySelector('.all-meals');
const mealSearch = document.getElementById('meal-search-btn');
mealSearch.addEventListener('click', function(){
    let searchItem = document.getElementById('search-item').value;
    // console.log(searchItem);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchItem}`)
    .then(res => res.json())
    .then(data => findMeals(data));

    const findMeals = foods => {
        // console.log(foods)
            allMeals.innerHTML = "";
            if(foods.meals && searchItem != ""){
                foods.meals.forEach(meal => {
                   const mealInfo = `
                    <div class="single-meal" onclick= "info('${meal.strMeal}')">
                    <img src=${meal.strMealThumb} alt="">
                    <h3>${meal.strMeal}</h3> 
                    </div>      
                     `;
                     allMeals.innerHTML += mealInfo;
                 });
             }
            else{
                allMeals.innerHTML = `<h3 class="no-information">Sorry! we didn't get your favorite meal.</h3>`;
            }
    }
});


const info = items => {
    let mealInfo = document.querySelector('.meal-details')
    const mealUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${items}`
    console.log(items)
    fetch(mealUrl)
    .then(res => res.json())
    .then(data => itemInfo(data))

    const itemInfo = details => {
            console.log(details)
    details.meals.forEach(item =>{
        
    const infoHtml =`
    <span id="close-box">&times</span>
    <div class="ingredients">
    <img src=${item.strMealThumb} alt="">
    <h3>${item.strMeal}</h3>
    <h5>---Ingredients---</h5>
    <ul>
        <li>${item.strIngredient1}</li>
        <li>${item.strIngredient10}</li>
        <li>${item.strIngredient11}</li>
        <li>${item.strIngredient12}</li>
        <li>${item.strIngredient13}</li>
        <li>${item.strIngredient14}</li>
    </ul>
    </div>
    `;
    mealInfo.innerHTML = infoHtml;
    });
    
    mealInfo.style.display= 'block';
    const closeBtn = document.getElementById('close-box');
    console.log(closeBtn);
    closeBtn.addEventListener('click', function(){
    mealInfo.style.display='none';

    })

    }
}




// let displayIngredients = document.querySelector('.single-meal');
 
 


// function myFunction(){
//     const mealInfo = document.querySelector('.meal-details')
//     const infoHtml =`
//     <div class="ingredients">
//     <img src=${meal.strMealThumb} alt="">
//     <h3>${meal.strMeal}</h3>
//     <h5>Ingredients</h5>
//     <ul>
//         <li>0</li>
//         <li>2</li>
//         <li>3</li>
//         <li>4</li>
//         <li>5</li>
//     </ul>
// </div>
//     `;
//     mealInfo.innerHTML = infoHtml;
// };





    // const getDetails = document.querySelector('.single-meal');
    // // console.log(getDetails);
    // getDetails.addEventListener('click', function(){
        
    //     console.log('amakedekao');
    // })
    

// const mealsList = document.querySelector('.all-meals');
// mealsList.addEventListener('click', function(event){
//     event.preventDefault()
    
//        const mealDetails = event.target.parentNode;
//        console.log(mealDetails)
// })