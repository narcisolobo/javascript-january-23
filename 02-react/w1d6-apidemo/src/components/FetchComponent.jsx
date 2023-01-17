import React, { useState } from 'react'
import axios from "axios"

const FetchComponent = () => {
    const [pokemon, setPokemon] = useState();
    const fetchPokemon1 = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto") // apicall
            .then(res => {
                console.log(res); // status:ok response
                return res.json() // another async function
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(err => console.log(err))
    }

    const fetchPokemon2 = async()=>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/eevee") 
        const jsonResponse = await response.json()
        setPokemon(jsonResponse)
    }

    const axiosPokemon1 = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/snorlax")
            .then(res=>{
                console.log(res)
                setPokemon(res.data)
            })
            .catch(err=>console.log(err))
    }

    const axiosPokemon2 = async() =>{
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pichu")
        setPokemon(response.data)
    }

    return (
        <div>
            <h1> Fetching Pokemon</h1>
            <button onClick={fetchPokemon1}> Fetch Pokemon </button>
            <button onClick={fetchPokemon2}> Fetch Pokemon 2 with await</button>
            <button onClick={axiosPokemon1}> Axios fetch Pokemon 1</button>
            <button onClick={axiosPokemon2}> Axios fetch Pokemon 2</button>
            {
                pokemon ?
                    <div>
                        <h1> {pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} />
                    </div> :
                    <h3> Please fetch a pokemon</h3>
            }

        </div>
    )
}

export default FetchComponent