import LeftSidebar from "../../components/LeftSidebar";
import MainComponent from "../../components/MainComponent";

const HomePage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full flex relative h-full">
        {/* left siderbar for navigation/header */}
        <LeftSidebar />
        {/* main component content */}
        <MainComponent />
        <section className="text-white">Right section</section>
      </div>
    </div>
  );
};

export default HomePage;
