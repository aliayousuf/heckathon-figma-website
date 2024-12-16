
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Ourshop from "@/components/ourshop";
import { PiGreaterThanThin } from "react-icons/pi";



export default function Home() {
    return (
      <main>
        {/* navbar */}
      <Navbar/>
      
      {/* background image */}
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
      Our Shop
    </span> 

    {/* Breadcrumb Navigation */}
    <div>
      <div className="flex font-poppins items-center text-sm md:text-base">
        <Link className="text-white flex items-center gap-1" href={"/"}>
          Home
        </Link>
        <PiGreaterThanThin  className="text-white"/>
        
        <span className="text-amber-500 font-bold capitalize">Shop</span>
      </div>
    </div>
  </div>
  </div>

   {/*  */}
  <Ourshop/>


      </main>
    );
  }