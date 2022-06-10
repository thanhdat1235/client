import axios from "axios";
import axiosService from "./axiosService";
import { SEARCH_URL, SEARCH_POST_URL, SEARCH_POST_BY_CATEGORY } from "./urlApi";

const searchService = {
  search: async (payload) => {
    return axiosService()({
      method: "POST",
      url: SEARCH_URL,
      data: payload,
    });
  },

  searchPost: async (payload) => {
    return axios({
      method: "POST",
      url: SEARCH_POST_URL,
      data: payload,
    });
  },

  searchPostByCategory: async (payload) => {
    return axios({
      method: "POST",
      url: `${SEARCH_POST_BY_CATEGORY}${payload.category}`,
    });
  },
};

export default searchService;
