
import Image from "next/image";

const chefData = [
  {
    name: "D. Estwood",
    role: "Chief Chef",
    imageUrl: "/chef1.png",
  },
  {
    name: "D. Scoriesh",
    role: "Assistant Chef",
    imageUrl: "/chef2.png",
  },
  {
    name: "M. William",
    role: "Advertising Chef",
    imageUrl: "/chef3.png",
  },
  {
    name: "W. Readfroad",
    role: "Chef",
    imageUrl: "/chef4.png",
  },
];

export default function MeetChef() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col items-center py-12 px-5">
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-center max-md:text-4xl">
        <span className="text-amber-500">Me</span>et Our Chef
      </h1>

      {/* Responsive Chef Cards Section */}
      <div className="flex flex-col md:flex-row md:overflow-x-auto md:gap-6 mt-10 max-w-6xl">
        {chefData.map((chef, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg overflow-hidden w-72 shadow-lg mb-4 md:mb-0"
          >
            {/* Chef Image */}
            <div className="relative w-full h-72">
              <Image
                src={chef.imageUrl}
                alt={`${chef.name} - ${chef.role}`}
                width={288}
                height={288}
                className="object-cover rounded-t-lg"
              />
            </div>
            {/* Chef Details */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{chef.name}</h3>
              <p className="text-sm text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button
        className="mt-10 px-6 py-3 text-white border border-amber-500 rounded-full hover:bg-amber-500 hover:text-black transition"
        aria-label="See more chefs"
      >
        See More
      </button>
    </div>
  );
}
