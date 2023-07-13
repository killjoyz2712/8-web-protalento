for(let i=0; i<elephants.length; i++){
    console.log(elephants[i])

    document.getElementById("contenedor").innerHTML += `<div>
        <h1>${elephants[i].name}</h1>
        <p>${elephants[i].note}</p>
        <img src="${elephants[i].image}">
    </div>`;

}