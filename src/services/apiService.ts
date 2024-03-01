import { IArticle } from "../redux/articles/articlesSlice";
import axios from "../utils/axiosCustomize";

const getAllArticles = () => {
  return axios.get<any, IArticle>(`articles`);
};
const postRegister = (user: {
  username: string;
  email: string;
  password: string;
}) => {
  return axios.post(`users`, {
    user: user,
  });
};
const postLogin = (user: { email: string; password: string }) => {
  return axios.post(`users/login`, {
    user: user,
  });
};

export { getAllArticles, postRegister, postLogin };
