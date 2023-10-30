import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/Group 1.png";
import { BsSearch } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import log from "../../assets/images/services/1.jpg";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const { user } = useAuth();

  const [hiddeninput, setHidden] = useState(false);

  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto px-5 py-5    ">
      <div>
        <img src={logo} alt="" />
        <h1 className="text-center font-bold">Car Doctor</h1>
      </div>
      <div className="flex items-center gap-10 ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/blog "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/booking "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Booking
        </NavLink>
      </div>
      <div className="flex items-center gap-5">
        <HiShoppingBag className="text-xl"></HiShoppingBag>
        <div className="relative flex">
          <input
            placeholder="Search"
            className={`outline-none border py-1  px-2 w-40 rounded-md duration-3000 delay-1000 ease-linear  ${
              !hiddeninput && "hidden"
            }`}
            type="search"
            name="search"
            id="1001"
          />
          <BsSearch
            onClick={() => setHidden(!hiddeninput)}
            className={`text-xl hiddeninput   right-2 top-2  ${
              hiddeninput && "absolute"
            }`}
          ></BsSearch>
        </div>

        <Link to={user ? "/profile" : "/login"}>
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL ? user.photoURL : log} />
            </div>
          </div>
        </Link>
        <Link className="border px-4 py-2 rounded-md border-red-500 text-red-500">
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
