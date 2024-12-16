import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai"; 
import { PiGreaterThanThin } from "react-icons/pi";

export default function BlogPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Background image */}
      <div className="relative flex justify-center items-center w-full h-[410px] max-md:h-[300px]">
        <Image
          src={"/menubg.png"}
          alt="shop hero image"
          width={1920}
          height={410}
          className="object-cover w-full h-80 mb-32"
        />
        <div className="absolute flex flex-col gap-2 items-center mb-32">
          {/* Heading */}
          <span className="font-poppins text-white text-2xl md:text-4xl font-medium">
            Blog List
          </span>

          {/* Breadcrumb Navigation */}
          <div>
            <div className="flex font-poppins items-center text-sm md:text-base">
              <Link className="text-white flex items-center gap-1" href={"/"}>
                Home
              </Link>
              <PiGreaterThanThin  className="text-white"/>
              <span className="text-amber-500 font-bold capitalize">Blog</span>
            </div>
          </div>
        </div>
      </div>




      {/*  1st blog image Inline Centered Image and Date Badge */}
      <div className="flex justify-center items-center gap-4 my-16">
        {/* Blog Image */}
        <button className="relative inline-block">
          <Image
            src={"/blog1.png"} // Replace with your image path
            alt="Centered Image"
            width={800} // Explicit size
            height={400} // Explicit size
            className="rounded-lg shadow-lg"
          />

          {/* Date Badge */}
          <div className="absolute top-3 left-3 bg-amber-400 text-white text-center rounded-md px-2 py-1">
            <p className="text-sm font-bold leading-tight">14</p>
            <p className="text-xs">Feb</p>
          </div>
        </button>
      </div>

      {/* Blog Content */}
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Post Meta Information */}
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
          <div className="flex items-center gap-1">
            <AiOutlineCalendar /> {/* Calendar Icon */}
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineUser /> {/* User Icon */}
            <span>Admin</span>
          </div>
        </div>

        {/* Post Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          10 Reasons To Do A Digital Detox Challenge
        </h2>

        {/* Post Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>

        {/* Read More Button */}
        <Link
          href="#"
          className="inline-flex items-center text-amber-500 border border-amber-500 px-4 py-2 rounded hover:bg-amber-500 hover:text-white transition"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>




          {/* 2nd blog image Inline Centered Image and Date Badge */}
          <div className="flex justify-center items-center gap-4 my-16">
        {/* Blog Image */}
        <button className="relative inline-block">
          <Image
            src={"/blog2.png"} // Replace with your image path
            alt="Centered Image"
            width={800} // Explicit size
            height={400} // Explicit size
            className="rounded-lg shadow-lg"
          />

          {/* Date Badge */}
          <div className="absolute top-3 left-3 bg-amber-400 text-white text-center rounded-md px-2 py-1">
            <p className="text-sm font-bold leading-tight">14</p>
            <p className="text-xs">Feb</p>
          </div>
        </button>
      </div>

      {/* Blog Content */}
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Post Meta Information */}
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
          <div className="flex items-center gap-1">
            <AiOutlineCalendar /> {/* Calendar Icon */}
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineUser /> {/* User Icon */}
            <span>Admin</span>
          </div>
        </div>

        {/* Post Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Traditional Soft Pretzels With Sweet Beer Cheese
        </h2>

        {/* Post Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>

        {/* Read More Button */}
        <Link
          href="#"
          className="inline-flex items-center text-amber-500 border border-amber-500 px-4 py-2 rounded hover:bg-amber-500 hover:text-white transition"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>




     
           {/*  3rd blog image  Inline Centered Image and Date Badge */}
           <div className="flex justify-center items-center gap-4 my-16">
        {/* Blog Image */}
        <button className="relative inline-block">
          <Image
            src={"/blog3.png"} 
            alt="Centered Image"
            width={800} 
            height={400} 
            className="rounded-lg shadow-lg"
          />

          {/* Date Badge */}
          <div className="absolute top-3 left-3 bg-amber-400 text-white text-center rounded-md px-2 py-1">
            <p className="text-sm font-bold leading-tight">14</p>
            <p className="text-xs">Feb</p>
          </div>
        </button>
      </div>

      {/* Blog Content */}
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Post Meta Information */}
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
          <div className="flex items-center gap-1">
            <AiOutlineCalendar /> 
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineUser />
            <span>Admin</span>
          </div>
        </div>

        {/* Post Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          The Ultimate Hangover Burger Egg in a Hole Burger
        </h2>

        {/* Post Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>

        {/* Read More Button */}
        <Link
          href="#"
          className="inline-flex items-center text-amber-500 border border-amber-500 px-4 py-2 rounded hover:bg-amber-500 hover:text-white transition"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>



    

          {/*4th blog image  Inline Centered Image and Date Badge */}
          <div className="flex justify-center items-center gap-4 my-16">
        {/* Blog Image */}
        <button className="relative inline-block">
          <Image
            src={"/blog4.png"} // Replace with your image path
            alt="Centered Image"
            width={800} // Explicit size
            height={400} // Explicit size
            className="rounded-lg shadow-lg"
          />

          {/* Date Badge */}
          <div className="absolute top-3 left-3 bg-amber-400 text-white text-center rounded-md px-2 py-1">
            <p className="text-sm font-bold leading-tight">14</p>
            <p className="text-xs">Feb</p>
          </div>
        </button>
      </div>

      {/* Blog Content */}
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Post Meta Information */}
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
          <div className="flex items-center gap-1">
            <AiOutlineCalendar /> {/* Calendar Icon */}
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineUser /> {/* User Icon */}
            <span>Admin</span>
          </div>
        </div>

        {/* Post Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          My Favourite Easy Black Pizza Toast Recipe
        </h2>

        {/* Post Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>

        {/* Read More Button */}
        <Link
          href="#"
          className="inline-flex items-center text-amber-500 border border-amber-500 px-4 py-2 rounded hover:bg-amber-500 hover:text-white transition"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>







    </>
  );
}
