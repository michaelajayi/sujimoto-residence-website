import { SET_ACTIVE_ICONGROUP, SET_ACTIVE_BACKGROUND, SET_ACTIVE_CAROUSEL } from "../types";

const layoutReducer = (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_ICONGROUP:
      return {
        ...state,
        activeIconGroup: action.payload,
      };
    case SET_ACTIVE_BACKGROUND:
      return {
        ...state,
        activeBackground: action.payload,
      };
    case SET_ACTIVE_CAROUSEL:
      return {
        ...state,
        activeBackground: action.payload,
      };
    default:
      return state;
  }
};

export default layoutReducer;
