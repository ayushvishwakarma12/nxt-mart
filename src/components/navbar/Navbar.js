import { TbLogout2 } from "react-icons/tb";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../utils/context/Context";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogoutButton = () => {
    Cookies.remove("jwt-token");
    navigate("/login");
  };

  const { cartItem } = useContext(Context);
  return (
    <div>
      <nav className="bg-slate-100 px-5 py-2 flex items-center justify-between">
        <Link to={"/"}>
          <img
            src="./nxtMartLogo.png"
            alt="nxtMart-logo"
            className="h-[80px] w-[120px]"
          />
        </Link>
        <ul className="flex gap-5 font-semibold [&>*]:cursor-pointer">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/cart"}>
            {cartItem.length > 0 && (
              <div className="relative">
                <div className="left-6 -top-2 absolute rounded-full flex items-center w-5 h-5 text-sm  bg-red-500 justify-center pb-1  text-white">
                  {cartItem.length}
                </div>
              </div>
            )}
            <li>Cart</li>
          </Link>
          <li className="flex items-center gap-1">
            <span>
              <TbLogout2 />
            </span>
            <button onClick={handleLogoutButton}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
