import { useState, useEffect } from "react";
import bgImg from "./assets/bg-cafe.jpg";
import vektor from "./assets/vector.svg";
import axios from "axios";

// Get Components
import ContentHeader from "./components/contentHeader";
import SwitchBtn from "./components/switchBtn";
import MenuList from "./components/menuList";

function App() {
  const [data, setData] = useState([]);
  const url =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
  const getAvailable = async () => {
    const res = await axios.get(url);
    const menus = res.data;
    const menuAvailable = menus.filter((menu) => menu.available === true);
    setData(menuAvailable);
  };
  const getData = async () => {
    const res = await axios.get(url);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className=" relative backgound bg-[#111315] py-36">
        <div
          className="top-bg h-[18rem] absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div className="relative z-20 top-0">
          <div className="content-container flex justify-center items-center ">
            <div className="content bg-[#1B1D1F] text-[#FEF7EE] w-80 lg:w-[50rem] xl:w-[75rem] px-[2rem] xl:px-10 py-20 xl:py-28 rounded-xl">
              <img
                src={vektor}
                alt="Vector"
                className="absolute lg:right-64 lg:top-9 xl:top-10 xl:right-96"
              />
              <div className="relative">
                {/* Content Header */}
                <ContentHeader />
                {/* Content Header End */}
                {/* Switch Button */}
                <SwitchBtn getData={getData} getAvailable={getAvailable} />
                {/* Switch Button End*/}
                {/* Menu List */}
                <MenuList data={data} />
                {/* Menu List End*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
