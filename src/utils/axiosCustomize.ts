import axios from "axios";
import { store } from "../redux/store";

const instance = axios.create({
  baseURL: "https://api.realworld.io/api/",
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token user");
    const parseToken = JSON.parse(String(token));
    if (parseToken) {
      config.headers.Authorization = `Bearer ${parseToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // console.log(">>checking response: ", response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  },
  function (error) {
    // console.log(">>checking error: ", error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);
export default instance;
