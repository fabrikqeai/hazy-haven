import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef, useCallback } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo / Website Name with Custom Font */}
        <Link href="/" className="flex items-center space-x-2 text-2xl text-yellow-500">
          <span>Hazy Haven</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="text-lg hover:text-yellow-500 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-lg hover:text-yellow-500 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-lg hover:text-yellow-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        >
          <FaBars />
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-50 transition-transform ease-in-out duration-500 ${isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"}`}
          role="navigation"
          aria-hidden={!isMenuOpen}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-white"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <Link href="/about" className="text-lg text-white hover:text-yellow-500 transition-colors" onClick={closeMenu}>
            About
          </Link>
          <Link href="/services" className="text-lg text-white hover:text-yellow-500 transition-colors" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/contact" className="text-lg text-white hover:text-yellow-500 transition-colors" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
