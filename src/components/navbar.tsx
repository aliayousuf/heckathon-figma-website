

"use client";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 md:py-[30px] md:px-[54] bg-neutral-950 relative z-10 min-h-[90px]">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold leading-none ml-4 md:ml-40">
        <span className="text-amber-500">Food</span>
        <span className="text-white">tuck</span>
      </div>

      {/* Desktop Links */}
      <nav className="hidden md:block">
        <ul className="flex gap-x-5 text-sm text-white">
          <li className="cursor-pointer font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href={"/menu"}>Menu</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href={"/blog"}>Blog</Link>
          </li>
          
          <li className="cursor-pointer font-bold">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Right-Side Icons */}
      <div className="hidden lg:flex gap-x-2 mr-52">
      <CiSearch  className="text-white"/>
        <Link href={"/signup"}>
        <CiUser className="text-white"/>
        </Link>
        <Link href="#">
        <PiHandbagLight  className="text-white"/>
        </Link>
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <MdOutlineMenu className="text-2xl text-white" />
        </button>
      </div>

      {/* Mobile Menu - Visible only when menu state is open */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-amber-500 text-center text-white font-semibold z-50">
          <ul>
            <li className="py-3 border-b border-white">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="py-3 border-b border-white">
              <Link href="/menu" onClick={toggleMenu}>
                Menu
              </Link>
            </li>
            <li className="py-3 border-b border-white">
              <Link href="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            
            <li className="py-3 border-b border-white">
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="py-3 border-b border-white">
              <Link href="/shop" onClick={toggleMenu}>
                Shop
              </Link>
            </li>
            <li className="py-3 border-b border-white">
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
