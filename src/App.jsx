import { useState, useEffect } from "react";
import bgImg from "./assets/bg-cafe.jpg";
import axios from "axios";
import starFill from "./assets/Star_fill.svg";
import star from "./assets/Star.svg";
function App() {
  const [data, setData] = useState({});
  const getAvailable = async () => {
    const url =
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
    const res = await axios.get(url);
    const menus = res.data;
    const menuAvailable = menus.filter((menu) => menu.available === true);
    setData(menuAvailable);
  };
  const getData = async () => {
    const url =
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
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
            <div className="content bg-[#1B1D1F] text-[#FEF7EE] w-[75rem] px-10 py-28 rounded-xl">
              {/* Content Header */}
              <div className="content-header flex flex-col items-center mb-5">
                <h1 className="font-bold text-4xl mb-3">Our Collection</h1>
                <div className="mx-[17rem] text-[#6F757C] text-lg font-semibold text-center">
                  <p>
                    Introducing our Coffee Collection, a selection of unique
                    coffees from different roast types and origins, expertly
                    roasted in small batches and shipped fresh weekly.
                  </p>
                </div>
              </div>
              {/* Content Header End */}
              {/* Switch Button */}
              <div className="switch-btn flex gap-5 justify-center font-medium mb-12">
                <button
                  className="border border-[#6F757C] py-2 px-3 rounded-lg bg-[#6F757C]"
                  onClick={getData}
                >
                  All Product
                </button>
                <button
                  className="border  py-2 px-3 rounded-lg  hover:bg-[#6F757C] hover:border-[#6F757C] transition-colors ease-in duration-300"
                  onClick={getAvailable}
                >
                  Available Now
                </button>
              </div>
              {/* Switch Button End*/}
              {/* Menu List */}
              <div className="menu-list-container flex justify-center">
                <div className="grid grid-cols-3 gap-10">
                  {data.map((menu, index) => (
                    <div className="menu" key={index}>
                      <div
                        className="w-[18rem] h-[12rem] bg-cover bg-center rounded-xl p-2"
                        style={{ backgroundImage: `url(${menu.image})` }}
                      >
                        {menu.popular ? (
                          <div className="bg-[#F6C768] text-black text-xs font-semibold px-2 py-1 rounded-full w-fit">
                            <h1>Popular</h1>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <div className="menu-cap flex justify-between items-center mt-3 mb-2">
                        <h1 className="font-medium text-lg">{menu.name}</h1>
                        <h1 className="py-1 px-2 text-black text-sm font-bold rounded-md bg-[#BEE3CC]">
                          {menu.price}
                        </h1>
                      </div>
                      <div className="menu-desc">
                        {menu.rating ? (
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="me-2">
                                <img
                                  src={starFill}
                                  alt="Rating"
                                  className="w-7"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">
                                  {menu.rating}{" "}
                                  <span className="text-[#6F757C]">{`(${menu.votes} Votes)`}</span>
                                </p>
                              </div>
                            </div>
                            {menu.available ? (
                              <div></div>
                            ) : (
                              <div className="flex items-center">
                                <p className="font-semibold text-[#ED735D]">
                                  Sold Out
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="me-2">
                                <img src={star} alt="Rating" className="w-7" />
                              </div>
                              <div>
                                <p className="font-semibold text-[#6F757C]">
                                  No Ratings{" "}
                                  <span className="text-[#6F757C]">{`(${menu.votes} Vote)`}</span>
                                </p>
                              </div>
                            </div>
                            {menu.available ? (
                              <div></div>
                            ) : (
                              <div>
                                <p className="font-semibold text-[#ED735D]">
                                  Sold Out
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Menu List End*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
