import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavItem } from "./navitems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-primary h-14 p-1 flex justify-between items-center w-full"
      role="navigation"
    >
      <div className="mx-5 text-xl font-bold text-white">Logo</div>

      {/* Navigation items for large screens */}
      <div className="hidden lg:flex space-x-5 mr-4">
        {NavItem.map((val) => (
          <div
            key={val.id}
            className="text-white cursor-pointer hover:border-b-2 px-2"
          >
            {val.name}
          </div>
        ))}
      </div>

      {/* Hamburger menu for small screens */}
      <div className="block lg:hidden mr-5">
        <GiHamburgerMenu className="text-2xl text-white" onClick={toggleMenu} />
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-primary lg:hidden flex flex-col items-center space-y-2 py-2 w-full">
          {NavItem.map((val) => (
            <div
              key={val.id}
              className="text-white cursor-pointer hover:border-b-2 px-2 bg-slate-800"
            >
              {val.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
