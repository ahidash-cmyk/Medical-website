import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          SmileCare
        </h1>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8 font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
          <li><Link to="/doctors" className="hover:text-blue-500">Doctors</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">

            <li>
              <Link to="/" onClick={closeMenu} className="hover:text-blue-500">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMenu} className="hover:text-blue-500">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" onClick={closeMenu} className="hover:text-blue-500">
                Services
              </Link>
            </li>

            <li>
              <Link to="/doctors" onClick={closeMenu} className="hover:text-blue-500">
                Doctors
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu} className="hover:text-blue-500">
                Contact
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
