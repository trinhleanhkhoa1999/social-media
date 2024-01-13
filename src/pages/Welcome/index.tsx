import { FcGoogle, FcBusinessman } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome-container flex justify-center items-center p-14">
      <div className="flex-1">
        <img
          src="https://logowik.com/content/uploads/images/twitter-x-icon3832.logowik.com.webp"
          alt=""
          className=""
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-16">
        <h1 className="font-bold text-6xl mb-16">Happening now</h1>
        <h3 className="font-bold text-3xl mb-11">Join today.</h3>
        <button className="flex justify-between items-center w-1/2 rounded-full border border-slate-300 hover:border-indigo-300 hover:bg-blue-100 p-1 px-4 mb-4">
          <div className="flex items-center">
            <FcBusinessman />
            <div className="flex flex-col ml-5">
              <h6 className="text-start text-xs font-bold">
                Sign in as Anh Khoa
              </h6>
              <p className="text-start text-xs">trinhleanhkhoa1999@gmail.com</p>
            </div>
          </div>
          <FcGoogle className="text-lg" />
        </button>
        <button className="flex justify-center items-center w-1/2 p-2 rounded-full border border-slate-300 hover:border-indigo-300 hover:bg-blue-100 mb-4">
          <div className="flex items-center gap-2">
            <FaApple className="text-2xl" />
            <div className="text-lg font-bold">Sign up with Apple</div>
          </div>
        </button>
        <div className="w-1/2 flex mb-4">
          <span className="border-t-2 border-gray-100 w-full my-auto"></span>
          <span className="mx-2">or</span>
          <span className="border-t-2 border-gray-100 w-full my-auto"></span>
        </div>
        <button
          className="flex justify-center items-center w-1/2 p-2 rounded-full bg-cyan-400 hover:bg-cyan-500 mb-4"
          onClick={() => navigate("/register")}
        >
          <p className="text-lg font-bold text-white">Create account</p>
        </button>
        <p className="text-xs w-1/2 mb-11">
          By signing up, you agree to the{" "}
          <a href="#" className="text-cyan-400 hover:underline">
            Terms of Service
          </a>{" "}
          and
          <a href="#" className="text-cyan-400 hover:underline">
            {" "}
            Privacy Policy
          </a>
          , including{" "}
          <a href="#" className="text-cyan-400 hover:underline">
            Cookie Use
          </a>
          .
        </p>
        <h6 className="text-lg font-bold mb-4">Already have an account?</h6>
        <button
          className="flex justify-center items-center w-1/2 p-2 rounded-full border border-slate-300 hover:bg-blue-100  mb-4"
          onClick={() => navigate("/login")}
        >
          <p className="text-lg font-bold text-cyan-400">Sign in</p>
        </button>
      </div>
    </div>
  );
}
