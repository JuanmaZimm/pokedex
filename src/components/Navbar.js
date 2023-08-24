import { useState } from "react"

const Navbar = (props) => {
    const [search, setSearch] = useState('')

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        console.log(search)
        props.changeId(search)
    }


    return (
        <nav className="bg-rose-700 flex flex-row content-center h-20 px-10 py-2">
            <img src="/img/pokeball.png" className="" alt="Pokeball img"/>
            <h1>PKDEX</h1>
            <div>
                <input type="search" onChange={handleSearchChange} placeholder="Ingresar Número..."></input>
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </nav>
    )
}

export default Navbar