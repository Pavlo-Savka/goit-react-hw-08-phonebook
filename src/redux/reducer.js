const initialState = {
  isLoadingAdd: false, 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING_ADD':
      return {
        ...state,
        isLoadingAdd: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;