import { useState, useEffect } from "react"
import typesStyles from "./typesStyle"

const Pokemon = (props) => {
    const pokemon = props.pokemon
    const [types, setTypes] = useState(['grass', 'poison']);
    const [abilities, setAbilities] = useState(['overgrow']);
    const [hiddenAbilty, setHiddenAbility] = useState('chlorophyll')

    const firstType = { color: 'lime-600' }
    const [mainStyles, setMainStyles] = useState({ color: 'lime-600' })
    const [secondaryStyles, setSecondaryStyles] = useState({ color: 'purple-800' })

    // const pokemon = props.pokemon;
    // const types = pokemon.types.map((type) => type.type.name);
    // const abilities = pokemon.abilities.filter((ability) => ability.is_hidden === false).map(ability => ability.ability.name);
    // if(pokemon.abilities.find((ability) => ability.is_hidden === true)){

    // }
    // const hiddenAbilty = pokemon.abilities.find((ability) => ability.is_hidden === true)?.ability.name;

    useEffect(() => {
        const typesAux = pokemon.types.map((type) => type.type.name);
        setTypes(typesAux)
        const abilitiesAux = pokemon.abilities.filter((ability) => ability.is_hidden === false).map(ability => ability.ability.name);
        setAbilities(abilitiesAux)
        if(pokemon.abilities.find((ability) => ability.is_hidden === true)){
            setHiddenAbility(pokemon.abilities.find((ability) => ability.is_hidden === true)?.ability.name)
        } else {
            setHiddenAbility('None')
        }
    }, [pokemon])

    useEffect(() => {
        setMainStyles(typesStyles[types[0]]);
        setSecondaryStyles(typesStyles[types[types.length - 1]]);
    }, [types]);

    //const bg = `bg-gradient-to-b from-${mainStyles.color} from-50% to-${secondaryStyles.color} to-50% mx-auto flex flex-col p-4 my-4 w-1/2`


    return (
        <div className={`type-${types[0]} mx-auto flex flex-col p-4 my-4 w-1/2`}>
            <div className="text center flex flex-row flex-wrap justify-between content-center text-gray-50 font-semibold text-2xl mb-2">
                <h3>#{pokemon?.id}</h3>
                <h3>{pokemon?.name[0].toUpperCase() + pokemon?.name.slice(1, pokemon?.name.length)}</h3>
            </div>
            <div className="flex flex-row justify-between w-full">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`} className="bg-gray-50 w-1/2 rounded-xl" alt="Pokemon official artwork" />
                <div className="flex flex-col justify-between w-1/2 pl-4">
                    <div className="bg-gray-50 w-full mx-auto rounded-lg flex flex-row flex-wrap justify-between content-center px-1 h-7">
                        <p className={`w-${types.length > 1 ? '1/3' : '1/2'} text-center`}>{types.length > 1 ? 'Types' : 'Type'}:</p>
                        <div className={`w-${types.length > 1 ? '2/3' : '1/2'} flex flex-row flex-wrap justify-${types.length > 1 ? 'between' : 'center'} content-center`}>
                            {types.map((type, index) =>
                                <img key={index} src={`/img/types/${type}.png`} className="w-24 text-center" alt={type} />
                            )}
                        </div>
                    </div>
                    <div className="bg-gray-50 w-full mx-auto rounded-lg flex flex-row justify-around px-1 h-7">
                        <p className={`w-${abilities.length > 1 ? '1/3' : '1/2'} text-center`}>{abilities.length > 1 ? 'Abilities' : 'Ability'}:</p>
                        <div className={`basis-${abilities.length > 1 ? '2/3' : '1/2'} flex flex-row flex-wrap justify-center content-center`}>
                            {abilities.map((ability, index) =>
                                <p key={index} className={`w-24 text-center`}>
                                    {ability[0].toUpperCase() + ability.slice(1, ability.length)}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="bg-gray-50 w-full mx-auto rounded-lg flex flex-row justify-between px-1 h-7">
                        <p className="basis-1/2 text-center">Hidden Ability:</p>
                        <p className="basis-1/2 text-center">{hiddenAbilty[0].toUpperCase() + hiddenAbilty.slice(1, hiddenAbilty.length)}</p>
                    </div>
                    <div className="w-full mx-auto rounded-lg flex flex-row justify-between gap-1">
                        <div className="basis-1/2 bg-gray-50 w-full rounded-lg flex flex-row justify-between h-7">
                            <p className="basis-1/2 text-center">Height:</p>
                            <p className="basis-1/2 text-center">{pokemon.height / 10}m</p>
                        </div>
                        <div className="basis-1/2 bg-gray-50 w-full rounded-lg flex flex-row justify-between h-7">
                            <p className="basis-1/2 text-center">Weight:</p>
                            <p className="basis-1/2 text-center">{pokemon.weight / 10}Kg</p>
                        </div>
                    </div>
                    {/* <div className="bg-gray-50 w-full mx-auto rounded-lg flex flex-row justify-between px-1 h-7">
                        <p>Texto</p>
                    </div>
                    <div className="bg-gray-50 w-full mx-auto rounded-lg flex flex-row justify-between px-1 h-7">
                        <p>Texto</p>
                    </div> */}
                </div>

            </div>

        </div>
    )
    /*return (<div>
        HOLA
    </div>)*/
}

export default Pokemon