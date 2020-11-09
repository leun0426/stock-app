import React from 'react';

import StockDetails from 'components/stock-details/stock-details';

class AppHeader extends React.Component {

  render() {
    return (
      <div className="card-body">
        <StockDetails></StockDetails>
      </div>
    );
  }
}

export default AppHeader; 