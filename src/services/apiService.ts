import { IArticle } from "../redux/articles/articlesSlice";
import axios from "../utils/axiosCustomize";

const getAllArticles = () => {
  return axios.get<any, IArticle>(`articles`);
};
export { getAllArticles };
