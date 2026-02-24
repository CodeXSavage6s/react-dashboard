import { useContext } from "react";
import Dashboard from "./Dashboard.jsx";
import Profile from "./Profile.jsx";
import { PageContext } from "./PageProvider";

function Main() {
  const { page } = useContext(PageContext);

  return (
    <div className="absolute Main px-[2vh] sm:w-[80%] w-full right-0">
      {page === "dashboard" && <Dashboard />}
      {page === "profile" && <Profile />}
    </div>
  );
}

export default Main;