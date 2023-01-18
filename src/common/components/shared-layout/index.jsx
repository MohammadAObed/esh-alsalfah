import RoutesManager from "../../../setup/routes-manager";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../navbar";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* direct us to whatever link we pressed */}
    </>
  );
};

export default SharedLayout;
