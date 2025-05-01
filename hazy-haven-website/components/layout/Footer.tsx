// components/layout/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Our B&B & Lodge offers a tranquil escape, surrounded by nature. Unwind and relax in luxury.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-sm hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-yellow-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-yellow-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="text-sm">123 Nature St., Suite 100</li>
              <li className="text-sm">City, State, 12345</li>
              <li className="text-sm">Email: contact@bnb.com</li>
              <li className="text-sm">Phone: (123) 456-7890</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-yellow-500 hover:text-white"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-yellow-500 hover:text-white"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-yellow-500 hover:text-white"
              >
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
          <p className="mt-4">&copy; {new Date().getFullYear()} Hazy Haven B&B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
