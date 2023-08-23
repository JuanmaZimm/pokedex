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
        <nav>
            <div className="bg-rose-700 flex flex-row">
                LOGOs
                <h1>PKDEX</h1>
                <input type="search" onChange={handleSearchChange} placeholder="Ingresar Número..."></input>
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </nav>
    )
}

export default Navbar