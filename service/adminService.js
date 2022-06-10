import axiosService from "./axiosService";
import { DELETE_MANY_URL, DELETE_ONE } from "./urlApi";

const adminService = {
  deleteById: async (params) => {
    return axiosService()({
      url: `${DELETE_ONE}${params.id}`,
      method: "DELETE",
      data: params,
    });
  },

  deleteMany: async (params) => {
    console.log(params);
    return axiosService()({
      url: DELETE_MANY_URL,
      method: "DELETE",
      data: params,
    });
  },
};

export default adminService;
