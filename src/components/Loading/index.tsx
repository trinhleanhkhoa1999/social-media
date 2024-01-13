import HashLoader from "react-spinners/HashLoader";

export default function Loading() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    height: "100vh",
    width: "100vw",
    background: "black",
    transform: "none",
  };
  return <HashLoader color="#fff" cssOverride={override} />;
}
