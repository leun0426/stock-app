import React from 'react';

import SearchBar from 'components/search-bar/search-bar';

class AppHeader extends React.Component {

  render() {
    return (
      <div className="card-body menu-wrapper">
        <SearchBar></SearchBar>
      </div>

    )
  }
}

export default AppHeader; 