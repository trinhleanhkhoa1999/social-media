import { useEffect, useState } from "react";
import LeftSidebar from "../../components/LeftSidebar";
import MainComponent from "../../components/MainComponent";
import RightSidebar from "../../components/RightSidebar";
import { getAllArticles } from "../../services/apiService";

const HomePage = () => {
  const [listArticles, setlistArticles] = useState([]);

  console.log("check listArticles", listArticles);

  const fetchListArticles = async () => {
    try {
      const res = await getAllArticles();
      console.log("check res", res);
      if (res.articles) {
        setlistArticles(res.articles);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  useEffect(() => {
    fetchListArticles();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent listArticles={listArticles} />
        <RightSidebar listArticles={listArticles} />
      </div>
    </div>
  );
};

export default HomePage;
