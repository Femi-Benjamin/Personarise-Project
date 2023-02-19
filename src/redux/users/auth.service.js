import axios from "axios";

const API_URL = "https://projectx-f5wv.onrender.com/api/user/";

const register = (
  firstname,
  lastname,
  email,
  password,
  country,
  isEmployer
) => {
  return axios.post(API_URL + "register", {
    firstname,
    lastname,
    email,
    password,
    country,
    isEmployer,
  });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + "login", {
    email,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
