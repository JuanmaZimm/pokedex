import { useState, useEffect } from "react"
import typesStyles from "./typesStyle"

const Pokemon = (props) => {
    const pokemon = props.pokemon
    const [types, setTypes] = useState(['grass', 'poison']);
    const [abilities, setAbilities] = useState(['overgrow']);
    const [hiddenAbilty, setHiddenAbility] = useState('chlorophyll')

    useEffect(() => {
        const typesAux = pokemon.types.map((type) => type.type.name);
        setTypes(typesAux);
        const abilitiesAux = pokemon.abilities.filter((ability) => ability.is_hidden === false).map(ability => ability.ability.name);
        setAbilities(abilitiesAux)
        if (pokemon.abilities.find((ability) => ability.is_hidden === true)) {
            setHiddenAbility(pokemon.abilities.find((ability) => ability.is_hidden === true)?.ability.name)
        } else {
            setHiddenAbility('None')
        }
    }, [pokemon])

    const bg = `bg-gradient-to-b ${typesStyles[types[0]].gradientFrom} from-50% ${typesStyles[types[types.length - 1]].gradientTo} to-50% mx-auto flex flex-col px-4 pb-4 pt-2 my-10 w-1/2 rounded-xl border border-black border-2 shadow-xl`

    return (
        <div className={bg}>
            <div className="text center flex flex-row flex-wrap justify-between content-center text-gray-50 font-semibold text-3xl mb-2">
                <h3>#{pokemon?.id}</h3>
                <h3>{pokemon?.name[0].toUpperCase() + pokemon?.name.slice(1, pokemon?.name.length)}</h3>
            </div>
            <div className="flex flex-row justify-between w-full">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`} className="bg-gray-50 w-1/2 rounded-xl border border-black border-2" alt="Pokemon official artwork" />
                <div className="flex flex-col justify-between w-1/2 pl-4">
                    <div className="bg-gray-50 w-full mx-auto rounded-lg flex flex-row flex-wrap justify-between content-center items-center px-1 h-8 border border-black border-2 border border-black border-2">
                        <p className={`${types.length > 1 ? 'w-1/3' : 'w-1/2'} text-center`}>{types.length > 1 ? 'Types' : 'Type'}:</p>
                        <div className={`${types.length > 1 ? 'w-2/3' : 'w-1/2'} flex flex-row flex-wrap ${types.length > 1 ? 'justify-between' : 'justify-center'} content-center`}>
                            {types.map((type, index) =>
                                <img key={index} src={`/img/types/${type}.png`} className="w-24 text-center" alt={type} />
                            )}
                        </div>
                    </div>
                    <div className="bg-gray-50 w-full mx-auto rounded-lg flex flex-row justify-around content-center items-center px-1 h-8 border border-black border-2">
                        <p className={`${abilities.length > 1 ? 'w-1/3' : 'w-1/2'} text-center`}>{abilities.length > 1 ? 'Abilities' : 'Ability'}:</p>
                        <div className={`${abilities.length > 1 ? 'basis-2/3' : 'basis-1/2'} flex flex-row flex-wrap justify-center content-center`}>
                            {abilities.map((ability, index) =>
                                <p key={index} className={`text-center font-semibold`}>
                                    {ability[0].toUpperCase() + ability.slice(1, ability.length)}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="bg-gray-50 w-full mx-auto rounded-lg flex flex-row justify-between content-center items-center px-1 h-8 border border-black border-2">
                        <p className="basis-1/2 text-center">Hidden Ability:</p>
                        <p className="basis-1/2 text-center font-semibold">{hiddenAbilty[0].toUpperCase() + hiddenAbilty.slice(1, hiddenAbilty.length)}</p>
                    </div>
                    <div className="w-full mx-auto rounded-lg flex flex-row justify-between gap-1">
                        <div className="basis-1/2 bg-gray-50 w-full rounded-lg flex flex-row justify-between content-center items-center h-8 border border-black border-2">
                            <p className="basis-1/2 text-center">Height:</p>
                            <p className="basis-1/2 text-center font-semibold">{pokemon.height / 10}m</p>
                        </div>
                        <div className="basis-1/2 bg-gray-50 w-full rounded-lg flex flex-row justify-between content-center items-center h-8 border border-black border-2">
                            <p className="basis-1/2 text-center">Weight:</p>
                            <p className="basis-1/2 text-center font-semibold">{pokemon.weight / 10}Kg</p>
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