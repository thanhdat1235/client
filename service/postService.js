import axiosService from "./axiosService";
import axios from "axios";
import {
  CREATE_POST_URL,
  GET_ALL_POST_URL,
  UPDATE_POST_URL,
  GET_BY_ID_URL,
  DELETE_POST_URL,
} from "./urlApi";

const postService = {
  createNewPost: async (params) => {
    return axiosService()({
      url: CREATE_POST_URL,
      method: "POST",
      data: params,
    });
  },

  getAllPosts: async (params) => {
    return axiosService()({
      url: GET_ALL_POST_URL,
      method: "GET",
    });
  },

  updatePost: async (params) => {
    return axiosService()({
      url: `${UPDATE_POST_URL}${params.id}`,
      method: "PUT",
      data: params,
    });
  },

  findById: async (params) => {
    return axiosService()({
      url: `${GET_BY_ID_URL}${params.id}`,
      method: "GET",
    });
  },

  deleteById(params) {
    return axiosService()({
      url: DELETE_POST_URL,
      method: "DELETE",
      data: params,
    });
  },
};

export default postService;
