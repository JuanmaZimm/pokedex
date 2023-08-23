import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Pokemon from "./Pokemon"

const Index = () => {
    const [pokemonLoaded, setPokemonLoaded] = useState(false)
    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetchPokemon();
    }, []);

    useEffect(() => {
        fetchPokemon();
    }, [id]);

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json(); // Use .json() to parse the response
            if (data !== undefined) {
                setPokemon(data);
                console.log(data);
                setPokemonLoaded(true)
            } // Note that this log may not show the updated 'pokemon' immediately due to the asynchronous nature of 'setState'
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleIdChange = async (search) => {
        setId(search)
    }

    return (
        <div className="bg-starter">
            <Navbar changeId={handleIdChange} />
            {pokemonLoaded ? <Pokemon pokemon={pokemon} /> : <>No hay Pokémon zapallo</>}
        </div>
    )
}

export default Index