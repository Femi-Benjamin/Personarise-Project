import { ADD_SCORE, SET_EMAIL, REMOVE_SCORE } from "./userTypes";

const initialState = {
  userEmail: "",
  score: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };
    case REMOVE_SCORE:
      return {
        ...state,
        score: state.score - action.payload,
      };
    default:
      return state;
  }
};
