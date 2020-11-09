import React from 'react';

import StockDetails from 'components/stock-details/stock-details';

/**
 * Wrapper class for the app body that shows the stock details
 */
class AppBody extends React.Component {

  render() {
    return (
      <div className="card-body">
        <StockDetails></StockDetails>
      </div>
    );
  }
}

export default AppBody; 