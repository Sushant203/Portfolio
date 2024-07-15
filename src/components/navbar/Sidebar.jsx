// import React from 'react'
// import Layout from "../layout/Layout";
import { NavItem } from "./navitems";
const Sidebar = () => {
  return (
    <div className="bg-primary w-[20%] sm:block md:block lg:hidden">
      <div className="flex-col space-y-4 text-center text-xl p-4 ">
        {NavItem.map((val, i) => {
          return (
            <div key={i} className=" p-1 cursor-pointer">
              <div className="text-blue-50  p-0.5 hover: py-1  hover:border-b delay-100  border-blue-700 rounded-lg hover:translate-x-2 transition-all ease-in-out">
                {val.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
