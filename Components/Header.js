import React from "react"
import Filter from "./Filter"

function Header({toggleFavourites, showFavorites, updateSearchTerm, searchTerm}) {
    return (
        <header className="header">
            <h1>Friends List</h1>
            <Filter showFavorites={showFavorites} toggleFavourites={toggleFavourites} updateSearchTerm={updateSearchTerm} searchTerm={searchTerm}/>
        </header>
    )
}

export default Header;