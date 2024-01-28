import axios from "../utils/axiosCustomize";

const getAllArticles = () => {
  return axios.get(`articles`);
};

const postUser =(username:string,email:string,password:string)=>{
  return axios.post(`users`,{user:{username,email,password}});

}
export { postUser,getAllArticles };
