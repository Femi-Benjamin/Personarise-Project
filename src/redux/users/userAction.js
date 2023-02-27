import { ADD_SCORE, REMOVE_SCORE, SET_EMAIL } from "./userTypes";

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const addScore = (score) => {
  return {
    type: ADD_SCORE,
    payload: score,
  };
};

export const removeScore = (score) => {
  return {
    type: REMOVE_SCORE,
    payload: score,
  };
};
