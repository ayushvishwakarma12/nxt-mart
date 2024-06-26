import { FiHome } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext } from "react";
import { Context } from "../../utils/context/Context";

const MobileNavbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { cartItem } = useContext(Context);

  const handleLogOutButton = () => {
    Cookies.remove("jwt-token");
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between px-5 py-5 rounded-t-lg">
      <Link to={"/"}>
        <div
          className={`flex flex-col items-center gap-2 text-base ${
            pathname === "/" ? "text-[#088C03] font-bold" : ""
          }`}
        >
          <FiHome className="h-[18px] w-[18px]" />
          <p>Home</p>
        </div>
      </Link>
      <Link to={"/cart"}>
        {cartItem.length > 0 && (
          <div className="relative">
            <div className="absolute bg-red-500 text-white rounded-full p-1 w-[20px] h-[20px] text-sm flex items-center justify-center -top-2 left-4">
              {cartItem.length}
            </div>
          </div>
        )}
        <div
          className={`flex flex-col items-center gap-2 text-base ${
            pathname === "/cart" ? "text-[#088C03] font-bold" : ""
          }`}
        >
          <BsCart className="h-[18px] w-[18px]" />
          <p>Cart</p>
        </div>
      </Link>

      <div
        className="flex flex-col items-center gap-2 text-base"
        onClick={handleLogOutButton}
      >
        <TbLogout2 className="h-[18px] w-[18px]" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default MobileNavbar;
