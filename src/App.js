import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';


class App extends React.Component {
  state = {
      searchTerm: '',
      filterOption: 'All'
    };
  
    updateSearchTerm(term) {
      this.setState({
        searchTerm: term
      })
    }

    updateFilterOption(option) {
      this.setState({
        filterOption: option
      })
    }
  
  render() {
    return (
    
      <div className="App">
        <SearchBar 
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOptions}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}
          />
        <FilterableList 
          files={this.props.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
         />
      </div>
    );
  }
  
}

export default App;
