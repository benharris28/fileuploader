import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';


class App extends React.Component {
  state = {
    searchTerm: '',
    filterOption: 'All'
  }
  
  render() {
    return (
    
      <div>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          />
        <FilterableList files={this.props.files} />
      </div>
    );
  }
  
}

export default App;
