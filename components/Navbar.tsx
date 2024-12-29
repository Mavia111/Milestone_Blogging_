"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between flex-wrap bg-slate-100 py-4 lg:px-12 shadow ">
      <div className="flex justify-between lg:w-auto w-full pl-6 pr-2 border-b-2 lg:border-b-0 border-solid border-gray-300  lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-slate-950 mr-16">
          <span className="font-semibold text-2xl tracking-tight">The Bloggers</span>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`menu w-full lg:flex lg:items-center lg:justify-end lg:w-auto lg:px-0 px-8 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-md font-normal  lg:items-end lg:text-center text-gray-800 lg:flex-grow">
          <Link
            href="/"
            className="font-bold font-mono block mt-4 lg:inline-block lg:mt-0 px-4 py-2 rounded hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mt-4 font-mono lg:inline-block lg:mt-0 px-4 py-2 rounded hover:bg-gray-100 mr-2"
          >
            About Us
          </Link>
          <Link
            href="/blogs"
            className="block mt-4 font-mono lg:inline-block lg:mt-0 px-4 py-2 rounded hover:bg-gray-100 mr-2"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="block mt-4 font-mono lg:inline-block lg:mt-0 px-4 py-2 rounded hover:bg-gray-100 mr-2"
          >
            Contact
          </Link>
          
        </div>
      </div>
    </nav>
  );
}
