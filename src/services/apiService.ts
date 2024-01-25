import axios from "../utils/axiosCustomize";

const getAllArticles = () => {
  return axios.get(`articles`);
};
export { getAllArticles };
