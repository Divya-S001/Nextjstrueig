import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-black text-slate-300 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl font-bold ml-0">Login Form</div>

        {/* Navigation Links */}
        <ul className="flex space-x-14 text-lg">
          <li>
            <Link href="/" className="hover:text-gray-300 transition text-3xl font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition text-3xl font-bold">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition text-3xl font-bold">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300 transition text-3xl font-bold">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;