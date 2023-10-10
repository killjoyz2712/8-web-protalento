import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
function Blog() {

    const [pokemon,setPokemon] = useState({});

    const parametros = useParams();

   
    let url = pokemon.sprites == undefined ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3APok%25C3%25A9_Ball_icon.svg&psig=AOvVaw0M9lPozmhNPq_1cxFLLvbT&ust=1696982519297000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKilkdOW6oEDFQAAAAAdAAAAABAE": pokemon.sprites.other.dream_world.front_default
    
    useEffect(function(){
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${parametros.id}`
        
        axios.get(apiUrl)
        .then(response=>{
            //console.log(response)
            setPokemon(response.data);
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error)
        })

    },[parametros])
    
    return (
        <>
            <section className="page blog">
                
                <h1>{pokemon.name}</h1>

                <img src={url}/>
               
            </section>
        </>
    )
}

export default Blog;