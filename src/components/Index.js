import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Pokemon from "./Pokemon"
import Footer from "./Bottom"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

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
                setPokemonLoaded(true)
            } // Note that this log may not show the updated 'pokemon' immediately due to the asynchronous nature of 'setState'
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleIdChange = async (search) => {
        setId(search)
    }

    const handleNextButton = () => {
        const next = id + 1;
        if (next <= 1010) {
            setId(next);
            fetchPokemon();
        }
    }

    const handlePrevButton = () => {
        const prev = id - 1;
        if (prev > 0) {
            setId(prev);
            fetchPokemon();
        }
    }

    return (
        <div className="bg-starter">
            <Navbar changeId={handleIdChange} />
            <main className="flex flex-row justify-between items-center px-10">
                <button onClick={handlePrevButton} className="bg-rose-700 rounded-2xl text-xl text-white p-4 flex flex-row justify-around items-center border border-black border-2"><AiOutlineArrowLeft /> Anterior</button>
                {pokemonLoaded ? <Pokemon pokemon={pokemon} /> : <>No hay Pokémon zapallo</>}
                <button onClick={handleNextButton} className="bg-rose-700 rounded-2xl text-xl text-white p-4 flex flex-row justify-around items-center border border-black border-2">Siguiente <AiOutlineArrowRight /></button>
            </main>
            <Footer />
        </div>
    )
}

export default Index