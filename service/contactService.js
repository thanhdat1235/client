import axiosService from "./axiosService";
import axios from "axios";
import { CREATE_CONTACT_URL, DELETE_CONTACT_URL } from "./urlApi";

const contactService = {
  create: async (params) => {
    return axios({
      url: CREATE_CONTACT_URL,
      method: "POST",
      data: params,
    });
  },

  delete: async (params) => {
    return axios({
      url: `${DELETE_CONTACT_URL}${params.id}`,
      method: "DELETE",
    });
  },
};

export default contactService;
