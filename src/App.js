import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';


class App extends React.Component {
  
  
  render() {
    return (
    
      <div>
        <SearchBar />
        <FilterableList files={this.props.files} />
      </div>
    );
  }
  
}

export default App;
