import React from "react";

const CustomMenu: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-8 text-white text-center text-xl">
      <nav className="nav">
        <button className="hamburger text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg px-5 py-2.5 me-2 mb-2" id="menuBtn">Menu</button>
        <ul className="menu" id="menu">
          <li>Home</li><li>About</li><li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomMenu; 