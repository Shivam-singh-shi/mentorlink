import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsOpen(false);
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-xl sm:text-2xl font-bold text-blue-600"
        >
          MentorLink
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/mentors" className={navLinkClass}>
            Mentors
          </NavLink>

          <NavLink to="/programs" className={navLinkClass}>
            Programs
          </NavLink>

          <NavLink to="/pricing" className={navLinkClass}>
            Pricing
          </NavLink>

          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>

          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 text-2xl"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3 text-base">
            <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/mentors" onClick={closeMenu} className={navLinkClass}>
              Mentors
            </NavLink>
            <NavLink to="/programs" onClick={closeMenu} className={navLinkClass}>
              Programs
            </NavLink>
            <NavLink to="/pricing" onClick={closeMenu} className={navLinkClass}>
              Pricing
            </NavLink>
            <NavLink to="/resources" onClick={closeMenu} className={navLinkClass}>
              Resources
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
              Contact
            </NavLink>
            <NavLink to="/dashboard" onClick={closeMenu} className={navLinkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/profile" onClick={closeMenu} className={navLinkClass}>
              Profile
            </NavLink>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            {token ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white px-4 py-2.5 rounded-lg hover:bg-red-700 transition text-center"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className="w-full border border-blue-600 text-blue-600 px-4 py-2.5 rounded-lg text-center hover:bg-blue-600 hover:text-white transition"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  onClick={closeMenu}
                  className="w-full bg-green-600 text-white px-4 py-2.5 rounded-lg text-center hover:bg-green-700 transition"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
