import Image from "next/image";

// Team Member Interface
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

// Team Members Data
const teamMembers: TeamMember[] = [
  {
    name: "Mark Henry",
    role: "Owner",
    imageUrl: "/ab5.png",
  },
  {
    name: "Lucky Helen",
    role: "Chef",
    imageUrl: "/ab5.png",
  },
  {
    name: "Moon Henry",
    role: "Founder",
    imageUrl: "/ab5.png",
  },
  {
    name: "Tom Monrow",
    role: "Specialist",
    imageUrl: "/ab5.png",
  },
];

export default function TeamMembers() {
  return (
    <div className="relative">
      {/* Background Section */}
      <div
        className="flex flex-col items-center px-6 py-8 bg-cover bg-center h-72"
        style={{ backgroundImage: "url('/background3.png')" }}
      >
        {/* Header Section */}
        <div className=" text-center px-4 sm:px-8 md:px-12">
  {/* Heading Section */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800 leading-tight">
    Team Members
  </h1>

  {/* Paragraph Section */}
  <p className="mt-2 sm:mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-[600px] mx-auto">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br /> Varius sed pharetra dictum neque massa congue.
  </p>
</div>

      </div>

      {/* Team Member Cards */}
      <div className="relative -mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-32 pb-20">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden mx-auto w-full max-w-[300px]"
    >
      <div className="relative w-full h-64">
        <Image
          src={member.imageUrl}
          alt={`${member.name} - ${member.role}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-zinc-800">{member.name}</h2>
        <p className="text-base text-zinc-500 mt-1">{member.role}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
