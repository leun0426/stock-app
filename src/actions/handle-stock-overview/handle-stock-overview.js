/**
 * action handler for stock overview that sends it to the reducer
 * @param {object} payload - stock details in the form of JSON object
 */
export const handleStockOverview = payload => {
  return {
    payload,
    type: 'stockoverview'
  }
}