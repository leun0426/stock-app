import {combineReducers} from 'redux';

import handleStockOverview from 'reducers/handle-stock-overview/handle-stock-overview';
const allReducers = combineReducers({
  stockOverview: handleStockOverview,
})

export default allReducers;