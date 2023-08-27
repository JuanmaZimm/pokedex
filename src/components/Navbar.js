import { useState } from "react"

const Navbar = (props) => {
    const [search, setSearch] = useState('')

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        console.log(search)
        props.changeId(search.toLowerCase())
    }


    return (
        <nav className="bg-rose-700 flex flex-row flex-wrap content-center items-center gap-4 px-10 py-4 shadow-xl border border-rose-700 border-b-rose-950 border-b-2">
            <img src="/img/pokeball.png" className="h-14" alt="Pokeball img" />
            <h1 className="leading-none my-auto text-5xl text-white">PKDeX</h1>
            <div className="flex flex-row flex-wrap justify-center content-center items-center">
                <input
                    type="search"
                    className="h-12 rounded-l-full pl-4 text-xl text-center"
                    onChange={handleSearchChange}
                    placeholder="Ingresar Número..."
                />
                <button className="bg-gray-400 h-12 rounded-r-full px-4 text-xl" onClick={handleSearch}>Buscar</button>
            </div>
        </nav>
    )
}

export default Navbar