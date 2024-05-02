import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Home from "./components/homepage/Home";
import Login from "./components/loginPage/Login";
import NotFound from "./components/notFound/NotFound";
import { Context } from "./utils/context/Context";
import { useState } from "react";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <NotFound />,
//   },
//   { path: "/cart", element: <Cart /> },
//   { path: "/login", element: <Login /> },
// ]);

function App() {
  const [category, setSelectedCategory] = useState("All");
  const [cartItem, setCartItem] = useState([]);

  const removeCartItem = (data, card) => {
    console.log(card);
    if (card === "home") {
      const cartItems = cartItem
        .map((e) => {
          console.log(e);
          if (e?.data?.id === data?.id) {
            if (e?.count > 1) {
              console.log("hey");
              return {
                data: e?.data,
                count: e?.count - 1,
              };
            }
            return null;
          }
          return e;
        })
        .filter((item) => item !== null);

      setCartItem(cartItems);
    } else {
      const cartItems = cartItem
        .map((e) => {
          if (e.data.id === data.data.id) {
            if (e.count > 1) {
              console.log("hello");
              return {
                data: e.data,
                count: e.count - 1,
              };
            }
            return null;
          }
          return e;
        })
        .filter((item) => item !== null);
      setCartItem(cartItems);
    }
    console.log(cartItem);
  };

  const addToCartButton = (data, card) => {
    if (card === "home") {
      const cartItems = cartItem.map((e) => {
        if (e.data.id === data.id) {
          return {
            data: e.data,
            count: e.count + 1,
          };
        }
        return e;
      });

      setCartItem(cartItems);
    } else {
      const cartItems = cartItem.map((e) => {
        if (e.data.id === data.data.id) {
          return {
            data: e.data,
            count: e.count + 1,
          };
        }
        return e;
      });
      setCartItem(cartItems);
    }
  };

  return (
    <Context.Provider
      value={{
        category,
        setSelectedCategory,
        cartItem,
        setCartItem,
        removeCartItem,
        addToCartButton,
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
