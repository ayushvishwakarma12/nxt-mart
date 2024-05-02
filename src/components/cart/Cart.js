import { BsCart } from "react-icons/bs";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useContext, useState } from "react";
import { Context } from "../../utils/context/Context";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

const Cart = () => {
  const { cartItem, removeCartItem, addToCartButton, setCartItem } =
    useContext(Context);
  const [payment, setPayment] = useState(false);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    let amount = 0;

    cartItem.forEach((e) => {
      const price = e.data.price.slice(1, e.data.price.length);
      amount += price * e.count;
    });
    return amount;
  };

  const handleReturnToHomepageButton = () => {
    setCartItem([]);
    navigate("/");
  };

  const amount = getTotalPrice();

  return (
    <>
      <div className="md:block hidden">
        <Navbar />
      </div>
      <div className="fixed bottom-0 w-full md:hidden">
        <MobileNavbar />
      </div>
      {(!payment || cartItem.length < 1) && (
        <div className="flex py-8 px-4 md:hidden">
          <button onClick={() => navigate("/")}>
            <IoIosArrowRoundBack className="w-8 h-8" />
          </button>
          <h1 className="text-2xl mx-auto">Checkout</h1>
        </div>
      )}

      {cartItem.length < 1 ? (
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4">
          <BsCart className="h-12 w-12 text-[#088C03]" />
          <p className="font-semibold">Your cart is empty</p>
        </div>
      ) : (
        <>
          {!payment ? (
            <ul className="px-4 py-4 md:px-12 md:py-12 flex flex-col gap-5">
              <h1 className="text-xl md:text-2xl font-bold">Items</h1>
              {cartItem.map((e, i) => {
                return (
                  <div key={i}>
                    <div className="border flex items-center justify-between gap-5 rounded-2xl w-full px-5 py-5">
                      <div className="flex items-center flex-grow gap-5">
                        <img
                          className="h-[68px] w-[68px] md:h-[130px] md:min-h-28 md:max-w-[135px] md:min-w-[135px] rounded-2xl object-cover"
                          alt={e.data.name}
                          src={e.data.image}
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-2">
                            <p className="font-semibold truncate w-[150px]">
                              {e.data.name}
                            </p>
                            <p className="font-light text-slate-500 text-sm">
                              {e.data.weight}
                            </p>
                            <p className="font-semibold">{e.data.price}</p>
                          </div>
                        </div>
                      </div>
                      <button className="min-h-[20px] md:w-[100px] md:h-[47px] border flex items-center gap-5 justify-center text-[#088C03] border-[#088C03]">
                        <span
                          className="font-bold hover:bg-[#088C03] duration-500 hover:text-white flex items-center justify-center rounded-full pb-1  w-[20px] h-[20px]"
                          onClick={() => removeCartItem(e)}
                        >
                          -
                        </span>
                        <span>{e.count}</span>
                        <span
                          className="font-bold hover:bg-[#088C03] duration-500 hover:text-white flex items-center justify-center rounded-full pb-1  w-[20px] h-[20px]"
                          onClick={() => addToCartButton(e)}
                        >
                          +
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center justify-end py-8">
                <div className="flex items-center gap-5">
                  <p className="text-xl">
                    Total {`(${cartItem.length} items)`} : &#x20B9; {amount}
                  </p>
                  <button
                    className="bg-[#088C03] text-white rounded-lg px-5 py-2 font-semibold"
                    onClick={() => setPayment(true)}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </ul>
          ) : (
            <div className="h-[80vh] flex items-center justify-center">
              <div className="flex flex-col items-center gap-5">
                <div className=" rounded-full border-2 border-[#088C03] p-4 text-[#088C03]">
                  <FaCheck className="w-[50px] h-[50px]" />
                </div>
                <div className="text-center">
                  <h1 className="font-semibold text-2xl">
                    Payment Successfull
                  </h1>
                  <p className="mt-4">
                    Thank you for ordering. <br />
                    Your payment is successfully completed.
                  </p>
                </div>
                <button
                  className="bg-[#088C03] text-white px-3 py-2 rounded-lg"
                  onClick={handleReturnToHomepageButton}
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </>
  );
};

export default Cart;
