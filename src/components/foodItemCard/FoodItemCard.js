import { useContext } from "react";
import { Context } from "../../utils/context/Context";

const FoodItemCard = (foodData) => {
  const { data } = foodData;
  const { name, weight, price, image } = data;

  const { setCartItem, cartItem, removeCartItem, addToCartButton } =
    useContext(Context);

  const handleAddToCartButton = (data) => {
    const existingItemIndex = cartItem.findIndex(
      (item) => item.data.id === data.id
    );

    if (existingItemIndex !== -1) {
      const cartItems = cartItem.map((e) => {
        if (e.data.id === data.id) {
          return {
            ...e,
            count: e.count + 1,
          };
        }
        return e;
      });
      setCartItem(cartItems);
    } else {
      setCartItem([...cartItem, { data: data, count: 1 }]);
    }
  };
  const existingItemIndex = cartItem.findIndex(
    (item) => item.data.id === data.id
  );
  const index = cartItem.findIndex((item) => item.data.id === data.id);

  return (
    <div className="border border-slate-400 flex flex-col gap-2 md:gap-5 p-2 md:p-4 rounded-2xl  w-[160px] md:h-[263px] md:w-[287px]">
      <img
        className="h-[120px] md:min-w-[200px] rounded-2xl object-cover"
        alt={name}
        src={image}
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-semibold truncate w-[80px] md:w-[150px]">{name}</p>
          <p className="font-light text-slate-500 text-sm">{weight}</p>
          <p className="font-semibold">{price}</p>
        </div>
        {existingItemIndex === -1 ? (
          <button
            onClick={() => handleAddToCartButton(data)}
            className="border-2 px-4  md:px-6 py-2 font-bold border-green-500 rounded-2xl text-green-600 hover:bg-[#088C03] duration-500 hover:text-white
          "
          >
            Add
          </button>
        ) : (
          <button className=" rounded-xl border-2 px-1 py-2 text-lg flex items-center gap-2 md:gap-5 justify-center text-[#088C03] border-[#088C03]">
            <span
              className="font-bold hover:bg-[#088C03] duration-500 hover:text-white flex items-center justify-center rounded-full pb-1 w-[10px] h-[10px] md:w-[20px] md:h-[20px]"
              onClick={() => removeCartItem(data, "home")}
            >
              -
            </span>
            <span>{cartItem[index].count}</span>
            <span
              className="font-bold hover:bg-[#088C03] duration-500 hover:text-white flex items-center justify-center rounded-full pb-1 w-[10px] h-[10px] md:w-[20px] md:h-[20px]"
              onClick={() => addToCartButton(data, "home")}
            >
              +
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;
