import axiosService from "./axiosService";
import axios from "axios";
import {
  GET_ALL_URL,
  GET_ONE_URL,
  UPDATE_URL,
  FORGOTPASSWORD_URL,
  VERIFY_OTP_URL,
  RESET_PASSWORD_URL,
} from "./urlApi";

const userSevice = {
  resetpassword: async (params) => {
    return axios({
      url: `${RESET_PASSWORD_URL}${params.email}`,
      method: "POST",
      data: { password: params.password.trim() },
    });
  },

  verifyOTP: async (params) => {
    return axios({
      url: `${VERIFY_OTP_URL}${params.email}`,
      method: "POST",
      data: { otp_code: params.otp_code.trim() },
    });
  },

  forgotpassword: async (params) => {
    return axios({
      url: FORGOTPASSWORD_URL,
      method: "PUT",
      data: params,
    });
  },

  findOne: async (params) => {
    return axiosService()({
      url: `${GET_ONE_URL}${params.id}`,
      method: "GET",
    });
  },

  getAllUser: async (params) => {
    return axiosService()({
      method: "GET",
      url: GET_ALL_URL,
      params: {
        pageSize: params.pageSize,
        page: params.page,
      },
    });
  },

  update: async (params) => {
    return axiosService()({
      url: `${UPDATE_URL}${params.id}`,
      method: "PUT",
      data: params.data,
    });
  },
};

export default userSevice;
