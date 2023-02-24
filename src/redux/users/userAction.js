import { SET_EMAIL } from "./userTypes";

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};
