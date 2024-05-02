import { useEffect, useState } from "react";
//import { Context } from "../../utils/context/Context";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  //const category = useContext(Context);
  //const { setSelectedCategory } = category;
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://run.mocky.io/v3/947e05e1-cd6a-4af9-93e7-0727fba9fec4"
      );
      const data = await response.json();
      setCategories(data.categories);
    }
    getData();
  }, []);

  const handleCategoryItemButton = (category) => {
    //setSelectedCategory(category);

    setSelectedCategory(category);
  };

  return (
    <div className="sidebar px-5 py-5 min-w-[250px] top-0">
      <h2 className="text-[#088C03] text-lg font-semibold p-2 hidden md:block">
        Categories
      </h2>
      <ul className="flex flex-col gap-4 md:overflow-y-scroll overflow-y-hidden max-h-[70vh]">
        <div className="max-w-[180px] flex gap-5 md:gap-0 md:flex-col py-2 items-center md:items-stretch">
          <a
            className="w-full text-start mr-auto"
            href={`#`}
            onClick={() => handleCategoryItemButton("All")}
          >
            <li
              key={"a"}
              className={` text-[16px] cursor-pointer hover:bg-green-400 p-2 font-semibold min-w-[100px] h-[80px] md:h-auto truncate rounded-2xl border-[#088C03] border-2 flex items-center justify-start md:border-0 ${
                selectedCategory === "All" ? "bg-[#088C03] text-white" : ""
              }`}
            >
              All
            </li>
          </a>

          {categories.map((e, i) => {
            return (
              <li
                key={i}
                className={`text-[16px] cursor-pointer hover:bg-green-400 p-2 font-semibold min-w-[100px] h-[80px] md:h-auto truncate rounded-2xl border-[#088C03] border-2 flex items-center md:border-0 ${
                  selectedCategory === e.name ? "bg-[#088C03] text-white" : ""
                }`}
              >
                <a
                  href={`#${e.name}`}
                  onClick={() => handleCategoryItemButton(e.name)}
                >
                  <p className="w-[150px] truncate">{e.name}</p>
                </a>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
