import React from "react"
import { AiOutlineSearch } from "react-icons/ai";

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const {type, name, value} = e.target;
        type === "checkbox" ? this.setState(prevState => {
            this.props.toggleFavourites();
        }) : this.props.updateSearchTerm(value)
    }

    render() {
        return (
            <div className="filter">
                <div className="show-favourites">
                    <label>
                        <input 
                            type="checkbox" 
                            name="favourites" 
                            onChange={this.handleInput} 
                            checked={this.props.showFavorites}

                        />
                        Show favourites
                    </label>
                </div>
                <div className="search-friend">
                    <label>
                        <input 
                            type="text" 
                            name="searchInput" 
                            placeholder="Search for a friend" 
                            onChange={this.handleInput} 
                            value={this.props.searchTerm}
                        /> <AiOutlineSearch />
                    </label>
                </div>  
            </div>
        )
    }
}

export default Filter;