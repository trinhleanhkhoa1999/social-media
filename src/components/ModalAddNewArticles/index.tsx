import { useState } from "react";
import {
  createNewArticles,
  hideModalAddNew,
} from "../../redux/articles/articlesSlice";
import { useAppDispatch } from "../../redux/hook";
import { toast } from "react-toastify";

const ModalAddNewArticles = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleHideModal = () => {
    dispatch(hideModalAddNew());
  };
  const handleOnSubmit = () => {
    console.log(`title: ${title} description: ${description} body: ${body}`);
    if (!title) {
      toast.error("check title");
    }
    if (!description) {
      toast.error("check description");
    }
    if (!body) {
      toast.error("check body");
    }
    // dispatch(createNewArticles({ title, description, body }));
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-black text-3xl font-bold w-full text-center">
                Modal add new articles
              </h3>
            </div>
            {/*body*/}
            <form className="w-[900px]">
              <div className="flex flex-wrap mx-3 mb-6 w-full">
                <div className="w-10/12 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-black/10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="w-10/12 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-black/10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="description"
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="w-10/12 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2"
                    htmlFor="body"
                  >
                    Body
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-black/10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="body"
                    type="text"
                    placeholder="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </div>
              </div>
            </form>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleOnSubmit}
              >
                Save
              </button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleHideModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalAddNewArticles;
