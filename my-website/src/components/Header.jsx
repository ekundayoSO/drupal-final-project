import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white flex items-center justify-between p-4 sticky top-0">
      <h1 className="logo">
        <Link to="/home">Ekundayo Sulaimon</Link>
      </h1>
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none" 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      <nav
        className={`md:block ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li>
            <NavLink to="/home" activeClassName="text-yellow-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="text-yellow-400">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="text-yellow-400">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="text-yellow-400">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="text-yellow-400">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
