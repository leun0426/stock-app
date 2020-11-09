import {combineReducers} from 'redux';

import handleStockOverview from 'reducers/handle-stock-overview/handle-stock-overview';

/**
 * A list of reducers
 */
const allReducers = combineReducers({
  stockOverview: handleStockOverview,
})

export default allReducers;