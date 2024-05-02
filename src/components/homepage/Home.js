import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import FoodItemCard from "../foodItemCard/FoodItemCard";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../footer/Footer";
//import { Context } from "../../utils/context/Context";
import Loader from "../loader/Loader";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

//const FoodItemContext = createContext();

const Home = () => {
  //const selectedFoodItem = useContext(FoodItemContext);
  //   console.log(selectedFoodItem);
  //const category = useContext(Context);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [viewMore, setViewMore] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(
      "https://run.mocky.io/v3/947e05e1-cd6a-4af9-93e7-0727fba9fec4"
    );
    if (response.ok) {
      const data = await response.json();
      setCategories(data.categories);
    } else {
      setError(true);
    }
  }

  // const jwtToken = Cookies.get("jwt-token");

  // const filteredItems = () => {
  //   if (category.category === "All") {
  //     return categories;
  //   }
  //   const e = categories.filter((e) => {
  //     if (e.name === category.category) {
  //       return true;
  //     }
  //   });
  //   return e;
  // };

  // if (jwtToken === undefined) {
  //   navigate("/login");
  // }

  return (
    <>
      {!error ? (
        <>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="fixed bottom-0 w-full bg-white rounded-t-2xl border-2 md:hidden">
            <MobileNavbar />
          </div>
          <div className="flex md:flex-row flex-col overflow-hidden">
            <div className="top-0 max-h-screen w-full md:w-auto bg-white sticky md:block">
              <Sidebar />
            </div>
            {categories?.length > 1 ? (
              <div className="overflow-hidden">
                {categories?.map((e, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 py-4 cursor-pointer ">
                      <h2
                        id={e.name}
                        className="font-semibold px-2 pb-1 text-xl "
                      >
                        {e.name}{" "}
                      </h2>
                      <span>
                        <IoIosArrowForward className="w-8 h-8" />
                      </span>
                      <div
                        className="ml-auto px-4 text-[#088C03] md:hidden"
                        onClick={() => setViewMore(!viewMore)}
                      >
                        {viewMore ? "view less" : "view more"}
                      </div>
                    </div>

                    <ul
                      className={`flex gap-5 overflow-x-scroll no-scrollbar px-2 ${
                        viewMore ? "flex-wrap" : "overflow-x-scroll"
                      }`}
                    >
                      {e.products.map((data, i) => (
                        <FoodItemCard key={i} data={data} />
                      ))}
                    </ul>
                    <hr className="my-12 border-1" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full">
                <Loader />
              </div>
            )}
          </div>
          <Footer />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center gap-6 h-[80vh]">
          <img src="./NotFound.png" alt="notfound" className="w-[380px]" />
          <h1 className=" text-2xl">Oops! Something went wrong.</h1>
          <p className=" text-base">We are having some trouble.</p>
          <button
            className="bg-[#088C03] px-10 text-white py-4 rounded-2xl"
            onClick={() => getData()}
          >
            Retry
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
