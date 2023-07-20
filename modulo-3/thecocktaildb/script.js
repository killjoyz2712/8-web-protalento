const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const busqueda = async () =>{
    let bebida = document.getElementById("bebida").value
    // `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${bebida}`
    const response = await fetch(`${url}${bebida}`);
    const result = await response.json();
    await dibujar(result.drinks);
}

const dibujar = (drinks) => {
    document.querySelector("#resultado").innerHTML=""
    for(let i in drinks){ //while(i<drinks.length)

        let div = document.createElement("div");
        div.classList.add("column","is-3");
        div.setAttribute("data-id",drinks[i].idDrink)
        div.innerHTML+=`
            <div class="card">
                <div class="card-image">
                <figure class="image is-square">
                    <img src="${drinks[i].strDrinkThumb}" alt="${drinks[i].strDrink}">
                </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                    <p class="title is-4">${drinks[i].strDrink}</p>
                    <p class="subtitle is-6">${drinks[i].strCategory}</p>
                </div>
                </div>
            </div>`

        div.addEventListener("click",function(evt){
            console.log(evt.currentTarget)
            alert(drinks[i].strInstructions);
        })

        document.querySelector("#resultado").appendChild(div);
    }
/*
<div class="column is-3">
                <div class="card">
                    <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg" alt="Placeholder image">
                    </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                        <p class="title is-4">Tequila Fizz</p>
                        <p class="subtitle is-6">Ordinary Drink</p>
                    </div>
                    </div>
                </div>
            </div>
*/ 

}

let boton = document.querySelector("#busqueda");
boton.addEventListener("click", busqueda);
let input = document.querySelector("#bebida");
input.addEventListener("keypress", busqueda);

