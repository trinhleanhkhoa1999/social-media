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
const LeftSidebar = () => {
  return (
    <section className="sticky top-0 w-[18%] flex flex-col items-stretch h-screen px-4">
      <div className="flex flex-col items-stretch space-y-4 mt-4 h-full">
        {navigationItem.map((item, idx) => {
          return (
            <Link
              className="hover:bg-white/10 text-lg trasiton duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl p-2 "
              to={`/${item.title.toLocaleLowerCase()}`}
              key={idx}
            >
              <div className="text-white"> {item.icon}</div>
              <div className="text-white"> {item.title}</div>
            </Link>
          );
        })}
        <button className="w-full rounded-full bg-primary p-4 text-xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="w-full rounded-full flex items-center justify-center space-x-2 p-4 bg-transparent hover:bg-white/10 transition duration-200 text-white">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-xs">
            <div className="font-semibold">Clubs Of Coder</div>
            <div className="text-xs">khoaTrinh@gmail.com</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
