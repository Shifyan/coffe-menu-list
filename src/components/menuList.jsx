import starFill from "../assets/Star_fill.svg";
import star from "../assets/Star.svg";

export default function MenuList({ data }) {
  return (
    <div className="menu-list-container flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {data.map((menu, index) => (
          <div className="menu w-full" key={index}>
            <div
              className="h-[10rem] w-[14rem]  lg:w-[18rem] lg:h-[12rem] bg-cover bg-center rounded-xl p-2"
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
              <h1 className="font-medium text-base lg:text-lg">{menu.name}</h1>
              <h1 className="py-1 px-2 text-black text-sm font-bold rounded-md bg-[#BEE3CC]">
                {menu.price}
              </h1>
            </div>
            <div className="menu-desc">
              {menu.rating ? (
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className=" me-1 lg:me-2">
                      <img src={starFill} alt="Rating" className="w-6 lg:w-7" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm lg:text-base">
                        {menu.rating}{" "}
                        <span className="text-[#6F757C]">{`(${menu.votes} Votes)`}</span>
                      </p>
                    </div>
                  </div>
                  {menu.available ? (
                    <div></div>
                  ) : (
                    <div className="flex items-center">
                      <p className="font-semibold text-sm lg:text-base  text-[#ED735D]">
                        Sold Out
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="me-2">
                      <img src={star} alt="Rating" className="w-6 lg:w-7" />
                    </div>
                    <div>
                      <p className=" text-[#6F757C] font-semibold text-sm lg:text-base">
                        No Ratings{" "}
                        <span className="text-[#6F757C]">{`(${menu.votes} Vote)`}</span>
                      </p>
                    </div>
                  </div>
                  {menu.available ? (
                    <div></div>
                  ) : (
                    <div>
                      <p className="font-semibold text-[#ED735D]">Sold Out</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
