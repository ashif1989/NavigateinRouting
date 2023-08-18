import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Login</Link>
      <Link to="/welcome">Welcome</Link>

      <Outlet />
    </div>
  );
};

export default Navbar;
