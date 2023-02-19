import { SET_EMAIL } from "./userTypes";

const initialState = {
  userEmail: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    default:
      return state;
  }
};
