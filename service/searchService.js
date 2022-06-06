import axiosService from "./axiosService";
import { SEARCH_URL } from "./urlApi";

const searchService = {
  search: async (payload) => {
    return axiosService()({
      method: "POST",
      url: SEARCH_URL,
      data: payload,
    });
  },
};

export default searchService;
