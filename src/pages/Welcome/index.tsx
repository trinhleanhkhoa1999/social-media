export default function Welcome() {
  return (
    <div className="welcome-container flex justify-center items-center">
      <div className="colums-2 flex-1">
        <img
          src="https://logowik.com/content/uploads/images/twitter-x-icon3832.logowik.com.webp"
          alt=""
        />
      </div>

      <div className="colums-2 flex-1 bg-amber-300">
        <h1>Happening now</h1>
        <h3 className="my-5">Join today.</h3>
      </div>
    </div>
  );
}
