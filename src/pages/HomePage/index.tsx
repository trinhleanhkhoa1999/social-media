import { useEffect, useState } from "react";
import LeftSidebar from "../../components/LeftSidebar";
import MainComponent from "../../components/MainComponent";
import RightSidebar from "../../components/RightSidebar";
import { useAppDispatch } from "../../redux/hook";
import { fetchListArticles } from "../../redux/articles/articlesSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getListArticles = () => {
      dispatch(fetchListArticles());
    };
    getListArticles();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
