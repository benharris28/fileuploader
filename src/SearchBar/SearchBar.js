import React from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import SearchBox from '../SearchBox/SearchBox';

class SearchBar extends React.Component {
    render() {
        return (
        <div className="SearchBar">
            <div className="SearchBar__heading">
                <h1>File Uploader</h1>
            </div>
            <div className="SearchBar__controls">
                <SearchBox 
                    searchTerm={this.props.searchTerm}
                    handleUpdate={this.props.handleUpdate}/>
                <FilterOptions 
                    filterOption={this.props.filterOption}
                    handleFilterChange={this.props.handleFilterChange}/>
            </div>
        
        </div>
        )
        
    }
}

export default SearchBar;