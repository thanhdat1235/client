import axiosService from "./axiosService";
import { GET_ALL_URL, GET_ONE_URL, UPDATE_URL } from "./urlApi";

const userSevice = {
  findOne: async (params) => {
    return axiosService()({
      url: `${GET_ONE_URL}${params.id}`,
      method: "GET",
    });
  },
  getAllUser: async () => {
    return axiosService()({
      method: "GET",
      url: GET_ALL_URL,
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
