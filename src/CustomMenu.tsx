import React, { useState, useRef, useEffect } from "react";

const CustomMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleMenuClick = () => setOpen((prev) => !prev);

  const handleMenuItemClick = (item: string) => {
    console.log(item);
    setOpen(false);
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-8 text-white text-center text-xl">
      <nav className="nav" ref={navRef}>
        <button
          className="hamburger text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
          id="menuBtn"
          onClick={handleMenuClick}
          aria-expanded={open}
          aria-controls="menu"
        >
          Menu
        </button>
        <ul className={`menu${open ? " open" : ""}`} id="menu">
          <li onClick={() => handleMenuItemClick("Home")}>Home</li>
          <li onClick={() => handleMenuItemClick("About")}>About</li>
          <li onClick={() => handleMenuItemClick("Contact")}>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomMenu; 