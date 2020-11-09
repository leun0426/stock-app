import React from 'react';

import SearchBar from 'components/search-bar/search-bar';

/**
 * Wrapper class for the app header that shows the stock search input and icon
 */
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