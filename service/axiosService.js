import axios from "axios";
import { API_URL } from "./urlApi";

const axiosService = () => {
  const token = localStorage.getItem("token");

  // if (!token) {
<<<<<<< HEAD
  //   window.location.replace("/admin/login");
=======
  //   window.location.replace("/login");
>>>>>>> 833a3bdee57b184eae0771b4ee73442b1a2da7c1
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
