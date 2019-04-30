import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            currentlyDisplayed: this.props.allProducts,
            searchTerm: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }


    handleInput(event) {
        debugger
        let filteredProducts = _.filter(this.props.allProducts, product => product.title.includes(event.target.value) || product.description.includes(event.target.value) )
        this.setState({searchTerm: event.target.value, currentlyDisplayed: filteredProducts})
    }
    

    render() {
        debugger
        return(
            <div className="search-bar-and-button">
                <input onChange={this.handleInput} value={this.state.searchTerm} className="search-bar" type="search"/>
                <button className="search-button">Search</button>
            </div>
        )
    }
}

export default Search;
