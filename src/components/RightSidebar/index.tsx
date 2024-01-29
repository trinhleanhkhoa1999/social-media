import { BsSearch } from "react-icons/bs";
import { useAppSelector } from "../../redux/hook";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RightSidebar = () => {
  const listArticles = useAppSelector((state) => state.articles);

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
        <h3 className="font-bold text-2xl px-4 my-4">Popular Tags</h3>
        <div className="flex flex-wrap">
          {listArticles.articles &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            listArticles.articles.map((item: any, idx: any) => {
              return (
                <div
                  key={idx}
                  className="hover:bg-white/10 p-4 last:rounded-b-xl border-dashed border-2 border-white m-1"
                >
                  <div className="font-bold text-lg">{item.tagList[0]}</div>
                </div>
              );
            })}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default RightSidebar;
