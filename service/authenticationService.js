import { LOGIN_URL, LOGOUT_URL } from "./urlApi";
import axios from "axios";
import axiosService from "./axiosService";

const authenticationService = {
  login: async (params) => {
    return axios({
      url: LOGIN_URL,
      method: "POST",
      data: params,
    });
  },
  logout: async (params) => {
    return axiosService()({
      method: "POST",
      url: LOGOUT_URL,
      data: params,
    });
  },
};

export default authenticationService;
