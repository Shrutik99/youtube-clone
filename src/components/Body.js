import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="grid grid-flow-col pt-20">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
