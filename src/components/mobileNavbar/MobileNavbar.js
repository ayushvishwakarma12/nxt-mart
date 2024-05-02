import { FiHome } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";

const MobileNavbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-5 rounded-t-lg">
      <div className="flex flex-col items-center gap-2">
        <FiHome />
        <p>Home</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <BsCart />
        <p>Cart</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <TbLogout2 />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default MobileNavbar;
