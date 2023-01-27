import RoutesManager from "../../../setup/routes-manager";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../navbar";
import { useEffect } from "react";
import clickSound from "../../../assets/audio/normal-click.wav";
import useAudio from "../../hooks/useAudio";
const SharedLayout = () => {
  useAudio(clickSound);
  return (
    <>
      <Navbar />
      <Outlet /> {/* direct us to whatever link we pressed */}
    </>
  );
};

export default SharedLayout;
