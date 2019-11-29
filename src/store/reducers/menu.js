import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ramen: null,
  noodle: null,
  extras: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RAMEN_TYPE:
      return {
        ...state,
        ramen: action.ramenType
      };

    case actionTypes.ADD_NOODLE_TYPE:
      return {
        ...state,
        noodle: action.noodleType
      };

    case actionTypes.TOGGLE_EXTRA_ITEM:
      const currentIndex = state.extras.indexOf(action.extra);
      const newExtraList = [...state.extras];

      if (currentIndex === -1) {
        newExtraList.push(action.extra);
      } else {
        newExtraList.splice(currentIndex, 1);
      }

      return {
        ...state,
        extras: [...newExtraList]
      };

    case actionTypes.ADD_ORDER:
      // resets the menu state
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default reducer;
