let drinks = []
let div_drinks = document.getElementById('drinks');
let whisky = document.getElementById('whisky');
let rum = document.getElementById('rum');
/*FETCH
let consulta = fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=tequila')
.then((response) => {
    return response.json()
})
.then((data)=>{
    
    data.drinks.forEach(element => {
        drinks.push(element.strDrink)
    });

    
    console.log(drinks)
});*/

function whisky_res(){
    div_drinks.innerHTML =""
    peticion("whisky").then((response) => {
        response.drinks.forEach(element => {
            drinks.push(element.strDrink)
            div_drinks.innerHTML += "<h1>"+element.strDrink+"</h1><br>"
            div_drinks.innerHTML += "<h4>"+element.strInstructions+"</h4><br>"
            div_drinks.innerHTML += `<img src='${element.strDrinkThumb}'><br>`
        });
    
        console.log(drinks)
    })
}
function vodka_res(){
    div_drinks.innerHTML =""
    peticion("vodka").then((response) => {
        response.drinks.forEach(element => {
            drinks.push(element.strDrink)
            div_drinks.innerHTML += "<h1>"+element.strDrink+"</h1><br>"
            div_drinks.innerHTML += "<h4>"+element.strInstructions+"</h4><br>"
            div_drinks.innerHTML += `<img src='${element.strDrinkThumb}'><br>`
        });
    
        console.log(drinks)
    })
}








async function peticion(drink){
    //try catch
    let response;
    let data;
    
    
    try{
        response =  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        data = await response.json();
       
    }catch(error){
        console.log(error.message)
    }
    
    console.log("Despues de la peticion")
    return data
}