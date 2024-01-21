import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaRegBookmark,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
const navigationItem = [
  {
    title: "Twitter",
    icon: <FaTwitter />,
  },
  {
    title: "Home",
    icon: <FaHome />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <FaBell />,
  },
  {
    title: "Messages",
    icon: <FaEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark />,
  },
  {
    title: "Profile",
    icon: <FaRegUser />,
  },
];
const HomePage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full flex relative h-screen">
        {/* left siderbar for navigation/header */}
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen space-y-4">
          <div className="flex flex-col items-stretch space-y-4 mt-4 h-full">
            {navigationItem.map((item, idx) => {
              return (
                <Link
                  className="hover:bg-white/10 text-xl trasiton duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl p-2 "
                  to={`/${item.title.toLocaleLowerCase()}`}
                  key={idx}
                >
                  <div className="text-white"> {item.icon}</div>
                  <div className="text-white"> {item.title}</div>
                </Link>
              );
            })}
            <button className="w-full rounded-full bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
              Tweet
            </button>
          </div>
          <div className="text-white">
            <button className="w-full rounded-full flex items-center space-x-4 bg-transparent p-4 text-center hover:bg-white/20 transition duration-200 ">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-400 w-12 h-12"></div>
                <div className="text-left text-sm">
                  <div className="font-semibold">Clubs Of Coder</div>
                  <div className="text-xs">trinhleanhkhoa1999@gmail.com</div>
                </div>
              </div>
              <div>
                <BsThreeDots />
              </div>
            </button>
          </div>
        </section>
        <section>Home timeline</section>
        <section>Right section</section>
      </div>
    </div>
  );
};

export default HomePage;
