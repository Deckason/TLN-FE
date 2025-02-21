import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:8000"; // url

// Request interceptor (without authentication token)
axios.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const expectedError =
      err.response && err.response.status >= 400 && err.response.status < 500;

    if (!expectedError) {
      toast.error("Unexpected error occurred, please try again");
    }

    return Promise.reject(err);
  }
);

const httpServices = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default httpServices;
