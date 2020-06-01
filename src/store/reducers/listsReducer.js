import {
  STATE_PRE_LIST,
  STATE_COMP_LIST,
  STATE_LISTS,
} from "../actions/actionTypes";

const initialState = {
  preList: [],
  compList: [],
};

export default function listsReducer(state = initialState, action) {
  switch (action.type) {
    case STATE_PRE_LIST:
      return {
        ...state,
        preList: action.preList,
      };
    case STATE_COMP_LIST:
      return {
        ...state,
        compList: action.compList,
      };
    case STATE_LISTS:
      return {
        ...action.lists,
      };
    default:
      return state;
  }
}
