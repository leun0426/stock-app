export const initialState = {}

const handleStockOverview = (state = initialState, action) => {
  switch(action.type) {
    case 'stockoverview':
      return action.payload;
    default:
      return state;
  }
};

export default handleStockOverview;