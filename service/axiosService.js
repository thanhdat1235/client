import axios from "axios";
import { API_URL } from "./urlApi";

const axiosService = () => {
  const token = localStorage.getItem("token");

  // if (!token) {
  //   window.location.replace("/admin/login");
  // }

  const axiosOption = axios.create({
    baseURL: API_URL,
    headers: {
      authorization: token,
    },
  });

  return axiosOption;
};

export default axiosService;
