import React from 'react';

class SearchBar extends React.Component {
  state = {};

  onIputChange(e) {
    console.log(e.target.value)
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form" action="">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input type="text" placeholder="Search" onChange={this.onIputChange}/>
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;


