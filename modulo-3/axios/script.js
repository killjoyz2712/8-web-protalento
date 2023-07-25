
axios({
    method: 'get',
    url: "https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json"
}).then((response)=>{
    let pokemones = response.data;
    for(let i=0;i<pokemones.length;i++){
        console.log(pokemones[i].name)
    }
})

fetch("https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json").then((result)=>{
    return result.json();
}).then(function(response){
    let pokemones = response;
    for(let i=0;i<pokemones.length;i++){
        console.log(pokemones[i].name)
    }
})