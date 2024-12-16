
import Image from "next/image";
import { TfiThumbUp } from "react-icons/tfi";
import { PiChatDotsThin } from "react-icons/pi";
import { PiShareNetworkThin } from "react-icons/pi";

interface BlogPost {
  date: string;
  title: string;
  imageUrl: string;
}

const posts: BlogPost[] = [
  {
    date: "10 February 2022",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    imageUrl: "/b1.png",
  },
  {
    date: "10 February 2022",
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    imageUrl: "/b2.png",
  },
  {
    date: "10 February 2022",
    title: "Curabitur rutrum velit ac congue malesuada",
    imageUrl: "/b3.png",
  },
];

export default function PostBlog() {
  return (
    <div className="bg-neutral-950 flex flex-col items-center px-4 md:px-8">
      {/* Header */}
      <div className="text-3xl leading-none text-amber-500">
        <Image
          src="/heading7.png"
          alt="heading image"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="mt-2 text-5xl font-bold leading-none text-white text-center max-md:text-4xl">
        <span className="text-amber-500">La</span>test News & Blog
      </div>

      {/* Blog Posts */}
      <div className="self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex justify-center gap-5 flex-wrap">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col w-[30%] max-md:w-[90%] sm:w-[45%] md:w-[28%] border border-white p-4 bg-neutral-900 rounded-lg"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={300}
                height={200}
                className="object-contain w-full h-auto rounded"
              />
              <div className="mt-4 text-amber-500 text-sm">{post.date}</div>
              <div className="mt-2 text-lg font-bold text-white leading-7">
                {post.title}
              </div>
              <div className="flex items-center justify-between mt-6">
                <button className="text-white hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  Learn More
                </button>
                <div className="flex items-center gap-3">
                  <TfiThumbUp className="text-white" />
                  <PiChatDotsThin className="text-amber-500" />
                  <PiShareNetworkThin className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
