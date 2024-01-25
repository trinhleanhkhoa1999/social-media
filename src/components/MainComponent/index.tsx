/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { BsChat, BsDot } from "react-icons/bs";
import {
  FaChartLine,
  FaRegHeart,
  FaRetweet,
  FaShareSquare,
} from "react-icons/fa";
import Modal from "../Modal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainComponent = ({ listArticles }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  console.log(data);
  const handleShowHide = (item: any) => {
    setShowModal(!showModal);
    setData(item);
  };

  const randomTime = Math.floor(Math.random() * 10) + 1;

  return (
    <main className="text-white mx-2 flex w-[58%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-2xl font-bold p-6  backdrop-blur bg-black/10 sticky top-0">
        Home
      </h1>

      {/* what is happening */}
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch space-x-2 py-4 border-gray-600 relative">
        <div className="w-10 h-10 rounded-full bg-gray-400 flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <input
            type="text"
            className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
            placeholder="what is happening ?"
          />
          <div className="w-full justify-between items-center flex">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button className="w-full rounded-full bg-primary px-4 py-2 text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold ">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* listArticles  */}
      <div className="flex flex-col">
        {listArticles &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          listArticles.map((item: any, idx: any) => (
            <div
              key={idx}
              className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4"
            >
              <div>
                <div className="w-10 h-10">
                  <img
                    src={item.author.image}
                    alt="image author"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center w-full space-x-1">
                    <div className="font-bold">{item.author.username}</div>
                    {/* <div className="text-gray-500">@trinhleanhkhoa</div> */}
                    <div className="text-gray-500">
                      <BsDot />
                    </div>
                    <div className="text-gray-500">{randomTime} hours ago</div>
                  </div>
                </div>
                <div className="text-white text-xl font-medium my-2">
                  {item.title}
                </div>
                <div className="mt-2 text-sm ">{item.description}</div>
                <div className="w-full flex justify-end items-center my-2">
                  <button
                    className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"
                    type="button"
                    onClick={() => handleShowHide(item)}
                  >
                    Read more ...
                  </button>
                </div>

                <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <BsChat />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <FaRetweet />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer flex items-center gap-1">
                    <FaRegHeart />
                    {item.favoritesCount}
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <FaChartLine />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <FaShareSquare />
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          ))}
      </div>
      {/* show dialog */}
      {showModal && <Modal setShowModal={setShowModal} data={data} />}
    </main>
  );
};

export default MainComponent;
