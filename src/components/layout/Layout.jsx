// import React from 'react'
import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar";
// import Sidebar from "../navbar/Sidebar";
import Homepage from "../pages/Homepage";

const Layout = ({ children }) => {
  return (
    <div>
      <div className=" ">
        <Navbar />
      </div>
      <div className="">
        {/* <Sidebar className=" " /> */}
        <Homepage className="" />
      </div>
      <main className="">{children}</main>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
