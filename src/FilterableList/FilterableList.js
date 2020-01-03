import React from 'react';

class FilterableList extends React.Component {
    render() {
        const list = this.props.files.map((file, key) => <ListItem {...file} key={key} />);
    
        return (
        <div className="FilterableList">
               {list} 
         </div>
        );
        
    }
}

export default FilterableList;