import { IoLogoFacebook } from "react-icons/io";
import { FaPinterestSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="hidden md:flex h-[379px] bg-[#003F00]  flex-col justify-center items-center">
      <div className="text-center text-white font-semibold text-xl">
        <p className="text-lg md:text-xl">
          For any queries, contact +91-987654310
          <br /> or mail us help@nxtmart.co.in
        </p>
        <div className="flex gap-5 items-center justify-center mt-8">
          <IoLogoFacebook className="h-10 w-10" />
          <FaPinterestSquare className="h-10 w-10" />
          <FaTwitter className="h-10 w-10" />
          <FaInstagram className="h-10 w-10" />
        </div>

        <p className="mt-8 font-normal tex  t-lg md:text-xl">
          Copyright &copy; 2023 NxtMart Grocery Supplies Pvt Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
