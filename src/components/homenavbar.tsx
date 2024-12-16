





"use client";
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";


export default function Homenavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className=" bg-neutral-950 flex flex-col p-4" role="navigation">
      {/* Logo Section */}
      <div className="self-center flex justify-between items-center text-2xl font-bold leading-none text-white mt-2 sm:mt-0">
        <div>
          <span className="text-amber-500">Food</span>
          <span className="text-white">tuck</span>
        </div>
        {/* Hamburger menu for small screens */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col gap-4 mt-4 text-white">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-amber-500 transition-colors px-2"
              role="menuitem"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Main Navigation Links for Large Screens */}
      <div className="hidden sm:flex flex-wrap gap-5 justify-between w-full text-base text-white">
        <div className="flex flex-col sm:flex-row gap-5 my-auto w-full sm:w-auto">
          {/* Dynamically map navigation items */}
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-amber-500 transition-colors"
              role="menuitem"
            >
              {item.label}
              {item.label === "About" && (
                <Image
                  src="/drop.png"
                  alt="About Dropdown"
                  width={12}
                  height={12}
                  className="object-contain shrink-0 my-auto inline-block ml-1"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Search Bar & Cart */}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto mt-4 sm:mt-0">
          <form
            className="flex flex-auto gap-4 sm:gap-10 px-4 sm:px-7 py-4 rounded-3xl border border-amber-500 w-full sm:w-auto"
            role="search"
          >
            <label htmlFor="search" className="sr-only">Search</label>
            <input
              type="search"
              id="search"
              placeholder="Search..."
              className="bg-transparent text-white outline-none w-full"
            />
            <button type="submit" aria-label="Search">
            <CiSearch />
            </button>
          </form>
          <button aria-label="Cart" className="my-auto">
            <Image
              src="/handbag.png"
              alt="Cart Icon"
              width={24}
              height={24}
              className="object-contain shrink-0"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
