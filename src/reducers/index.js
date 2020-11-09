import {combineReducers} from 'redux';

import handleError from 'reducers/handle-error/handle-error';
import handleStockOverview from 'reducers/handle-stock-overview/handle-stock-overview';
const allReducers = combineReducers({
  error: handleError,
  stockOverview: handleStockOverview,
})

export default allReducers;