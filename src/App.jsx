import bgImg from "./assets/bg-cafe.jpg";
function App() {
  return (
    <>
      <div className=" relative backgound bg-[#111315] py-36">
        <div
          className="top-bg h-[18rem] absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div className="relative z-20 top-0">
          <div className="content-container flex justify-center items-center ">
            <div className="content bg-[#1B1D1F] text-[#FEF7EE] w-[75rem] p-10 rounded-xl">
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
              <div className="switch-btn flex gap-5 justify-center font-medium mb-12">
                <button className="border border-[#6F757C] py-2 px-3 rounded-lg bg-[#6F757C]">
                  All Product
                </button>
                <button className="border  py-2 px-3 rounded-lg  hover:bg-[#6F757C] hover:border-[#6F757C] transition-colors ease-in duration-300">
                  Available Now
                </button>
              </div>
              <div className="menu-list-container flex justify-center">
                <div className="grid grid-cols-3 gap-10">
                  <div className="menu">
                    <div className="w-[16rem] h-[10rem] bg-black rounded-xl"></div>
                    <div className="menu-cap flex justify-between items-center my-3">
                      <h1 className="font-medium text-lg">Nama Menu</h1>
                      <h1 className="py-1 px-2 text-black text-sm font-bold rounded-md bg-[#BEE3CC]">
                        $5.20
                      </h1>
                    </div>
                  </div>
                  <div className="w-[16rem] h-[10rem] bg-black rounded-xl"></div>
                  <div className="w-[16rem] h-[10rem] bg-black rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
