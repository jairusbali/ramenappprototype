import * as actionTypes from "./actionTypes";

export const addRamenType = ramenType => {
  return {
    type: actionTypes.ADD_RAMEN_TYPE,
    ramenType: ramenType
  };
};

export const addNoodleType = noodleType => {
  return {
    type: actionTypes.ADD_NOODLE_TYPE,
    noodleType: noodleType
  };
};

export const toggleExtraItem = extra => {
  return {
    type: actionTypes.TOGGLE_EXTRA_ITEM,
    extra: extra
  };
};

export const addOrder = () => {
  return {
    type: actionTypes.ADD_ORDER
  };
};
