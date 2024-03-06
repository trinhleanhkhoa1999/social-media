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
const postLikeArticle = (slug: string) => {
  return axios.post(`articles/${slug}/favorite`);
};
const deleLikeArticle = (slug: string) => {
  return axios.delete(`articles/${slug}/favorite`);
};
export {
  getAllArticles,
  postRegister,
  postLogin,
  postLikeArticle,
  deleLikeArticle,
};
