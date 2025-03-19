import { Tag } from "lucide-react";
import Link from "next/link";
import { cardData } from "./data/card-data";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-32 h-full">
      {cardData.map((data, i) => (
        <Link
          href={data.url}
          key={i}
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
          className="bg-cover w-72 h-96 group relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <p className="text-center text-2xl text-white hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            {data.hoverText}
          </p>
          <div className="text-sm font-semibold text-main-color absolute top-2 left-4 bg-white flex justify-center px-2 py-1  rounded-2xl items-center gap-1">
            <Tag size={14} strokeWidth="3" />
            <p>{data.tagName}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
