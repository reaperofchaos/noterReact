import React from 'react';

export default class Selector extends React.Component {
   constructor(props)
    {
        super(props)
  }

  handleChange = (e)=> {
    let selectedValue = e.target.value;
    this.props.onSelectChange(selectedValue);
  }

  render() {
    let listOptions = this.props.listOptions;
    let options = listOptions.map((data, index) =>
            <option 
                key={index}
                value={data}
            >
                {data}
            </option>
    );
    return(
        <select name="customSearch" className="custom-search-select" onChange={this.handleChange}>
        <option>Select Item</option>
           {options}
        </select>
    );
  }
}