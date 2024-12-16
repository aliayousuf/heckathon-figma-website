import React from "react";
import Image from "next/image";

export default function FoodCategory() {
  const foodItems = [
    {
      imageSrc: "/food1.png",
      discount: "30%",
      label: "Fast Food Dish",
    },
    {
      imageSrc: "/food2.png",
    },
    {
      imageSrc: "/food3.png",
    },
    {
      imageSrc: "/food4.png",
    },
  ];

  return (
    <div className="bg-neutral-950 flex flex-col items-center rounded-md p-4">
      {/* Section Heading */}
      <div>
        <Image
          src={"/heading3.png"}
          alt="heading image"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="mt-2 text-5xl font-bold leading-none text-white max-sm:text-4xl">
        <span className="text-amber-500">Ch</span>oose Food Item
      </div>

      {/* Food Grid */}
      <div className="mt-6 w-full max-w-6xl">
        <div className="flex flex-wrap justify-center gap-6">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex items-center justify-center rounded-md overflow-hidden"
            >
              {/* Food Image */}
              <Image
                loading="lazy"
                src={item.imageSrc}
                alt={item.label || "Food category item"}
                layout="fill"
                objectFit="cover"
                className="rounded-md object-cover"
              />
              {/* Discount Tag */}
              {item.discount && (
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-white text-amber-500 text-sm rounded-md">
                  Save {item.discount}
                </div>
              )}
              {/* Label */}
              {item.label && (
                <div className="absolute top-2 left-2 px-2 py-1 bg-amber-500 text-red-50 text-sm rounded-md">
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
