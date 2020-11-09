export const initialState = {}

/**
 * Used for type stockOverview and stores it to be used in state.stockOverview
 * @param {object} state - shows previous state
 * @param {object} action - the involved for type stockoverview
 * @return {object} - returns the stock's overview
 */
const handleStockOverview = (state = initialState, action) => {
  switch(action.type) {
    case 'stockoverview':
      return action.payload;
    default:
      return state;
  }
};

export default handleStockOverview;