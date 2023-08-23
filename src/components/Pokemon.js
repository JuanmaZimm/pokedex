import { useState, useEffect } from "react"

const Pokemon = () => {
    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null);

    const url = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        fetch(url + id)
            // Handle the response and convert it to JSON
            .then((response) => response.json())
            // Assign the JSON data to a variable called pokemon
            .then((data) => {
                const pokemon = data;
                setPokemon(pokemon);
                console.log(pokemon);
            })
            // Handle any errors
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div className="bg-rose-500 mx-auto flex flex-col p-4 my-4 w-1/2">
        <div className="text center flex flex-row flex-wrap justify-between content-center">
            <h3>#{pokemon.id}</h3>
            <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1, pokemon.name.length)}</h3>
        </div>
        <div className="flex flex-row justify-between w-full">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} className="bg-gray-50 w-1/2 rounded-xl" alt="Pokemon official artwork" />
            <div className="flex flex-col justify-between w-1/2">
                <div className="bg-gray-50 w-full mx-auto">
                    <p>Types:</p>
                </div>
                <div className="bg-gray-50 w-full mx-auto">
                    <p>Abilities:</p>
                </div>
                <div className="bg-gray-50 w-full mx-auto">
                    <p>Hidden Ability:</p>
                </div>
                <div className="bg-gray-50 w-full mx-auto">
                    <p>Texto</p>
                </div>
                <div className="bg-gray-50 w-full mx-auto">
                    <p>Texto</p>
                </div>
                <div className="bg-gray-50 w-full mx-auto">
                    <p>Texto</p>
                </div>
            </div>

        </div>

        </div>
    )
}

export default Pokemon