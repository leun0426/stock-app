import isEmpty from 'lodash/isEmpty';
import React from 'react';

import {useSelector} from 'react-redux';

// import resourceStockDetails from 'resources/stock-details'

function StockDetails(props) {
  // const [stockDetails, setStockDetails] = useState({
  //   ...resourceStockDetails
  // })

  const stockDetails = useSelector(state => {
    console.log(state);
    return state.stockOverview
  });
  const getStockDetails = () => {
    const elements = [];
    elements.push(getTitle());
    if (!isEmpty(stockDetails)) {
      elements.push(getSymbol())
      elements.push(getStockDescription())
    }
    return elements;
  }

  const getStockDescription = () => {
    return (
      <div key="stock-description">
        <label><strong>Description:</strong></label>
        <div>
            {stockDetails.Description}
        </div>
      </div>
    )
  }

  const getSymbol = () => {
    return (
      <div key="stock-symbol">
        <h5>Symbol: {stockDetails.Symbol}</h5>
      </div>
    )
  }

  const getTitle = () => {
    let title = "Welcome to Stock App";
    if (!isEmpty(stockDetails)) {
      title = stockDetails.Name;
    }
    return (
      <div key="stock-title">
        <h4>
          {title}
        </h4>
      </div>
    );
  }

  return getStockDetails();
}

export default StockDetails;
