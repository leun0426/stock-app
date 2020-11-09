const handleStockOverview = (state = {}, action) => {
  switch(action.type) {
    case 'stockoverview':
      return action.payload;
    default:
      return state;
  }
};

export default handleStockOverview;