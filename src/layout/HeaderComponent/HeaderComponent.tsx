import { useLocation, useNavigate } from "react-router-dom";
import MyLinks from "../MyLinks";
import { ModeToggle } from "@/components/mode-toggle";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedIn: boolean = useSelector(
    (bigPie: any) => bigPie.authSlice.loggedIn
  );
  const userData = useSelector((bigPie: any) => bigPie.authSlice.userData);
  console.log(userData);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>item</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <ModeToggle />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {MyLinks.map((link, index) => (
            <li key={index}>
              <a
                className={`${
                  link.to === location.pathname
                    ? "bg-primary text-secondary"
                    : null
                }`}
                onClick={() => navigate(link.to)}
              >
                {link.children}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex flex-row gap-2">
        <p>
          <p>Hello {userData?.payload?.name}</p>
        </p>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile1
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
