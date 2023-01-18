import { NavLink } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  console.count("Navbar"); //? dont rely on console, use profiler in devtools because its more accurate, check google for clarity
  return (
    <nav className="mtb4 mlr16">
      <NavLink to="/Home">⌂</NavLink>
    </nav>
  );
};

export default Navbar;
