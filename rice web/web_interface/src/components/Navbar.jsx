import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Brain as Grain, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClass = "text-earth-700 font-semibold";
  const inactiveClass = "text-gray-700 hover:text-earth-600 transition-colors";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <Grain className="text-leaf-300" size={30} />
          <span className="text-xl font-semibold text-gray-400">
            RiceDetect
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            GitHub
          </a>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-white transition-all duration-300 ${
          isOpen ? "max-h-64 shadow-md" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `${isActive ? activeClass : inactiveClass} block py-2`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
