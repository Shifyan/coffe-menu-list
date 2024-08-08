import { useState } from "react";
export default function SwitchBtn({ getData, getAvailable }) {
  const [active, setActive] = useState("btn1");
  const setActiveBtn = (btn) => {
    setActive(btn);
  };
  const activeBtn =
    "border border-[#6F757C] py-1 px-2 lg:py-2 lg:px-3 rounded-lg bg-[#6F757C]";
  const inactiveBtn =
    "border py-1 px-2 lg:py-2 lg:px-3 rounded-lg  hover:bg-[#6F757C] hover:border-[#6F757C] transition-colors ease-in duration-300";

  return (
    <div className="switch-btn text-sm xl:text-base flex gap-5 justify-center font-medium mb-12">
      <button
        className={active === "btn1" ? activeBtn : inactiveBtn}
        onClick={() => {
          getData();
          setActiveBtn("btn1");
        }}
      >
        All Product
      </button>
      <button
        className={active === "btn2" ? activeBtn : inactiveBtn}
        onClick={() => {
          getAvailable();
          setActiveBtn("btn2");
        }}
      >
        Available Now
      </button>
    </div>
  );
}
