import { toast } from "react-toastify";
import { IArticle } from "../redux/articles/articlesSlice";
import axios from "../utils/axiosCustomize";

const getAllArticles = () => {
  return axios.get<any, IArticle>(`articles`);
};
const postUser = (user: {
  username: string;
  email: string;
  password: string;
}) => {
  return axios.post(`users`, {
    user: user,
  });
};

export { getAllArticles, postUser };
