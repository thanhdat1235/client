import axios from "axios";
import { REGISTER_URL } from "./urlApi";

const registerSevice = {
  register: async (params) => {
    return axios({
      url: REGISTER_URL,
      method: "POST",
      data: params,
    });
  },
};

export default registerSevice;
