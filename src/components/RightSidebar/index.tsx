import { BsSearch } from "react-icons/bs";

const RightSidebar = () => {
  return (
    <section className="text-white sticky top-0 mt-2 w-full flex flex-col items-stretch h-screen px-6 ml-auto">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            placeholder="Search Twitter"
            className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 px-11"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-primary"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3 className="font-bold text-2xl px-4 my-4">what's happening</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="hover:bg-white/10 p-4 last:rounded-b-xl">
              <div className="font-bold text-lg">#trending ${i + 1}</div>
              <div className="text-xs text-neutral-400">35.2k</div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default RightSidebar;
