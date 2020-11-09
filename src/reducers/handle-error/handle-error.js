const handleError = (state = {}, action) => {
  switch(action.type) {
    case 'error':
      return {...state, error:action.errorMessage};
    default: 
      return state;
  }
};

export default handleError;