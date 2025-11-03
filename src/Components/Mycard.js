import Link from "next/link";
import React from "react";

function MyCard({ image, title, date, address, id }) {
  return (
    <div className="bg-white w-[70%] flex shadow-lg rounded-lg overflow-hidden">
<img src={image} alt={title} className="h-[180px] w-[250px]" />
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h4 className="text-xl font-semibold">{title}</h4>
          <h5 className="text-gray-500">{date}</h5>
          <p className="text-gray-600">{address}</p>
        </div>
        <div className="flex justify-end">
          <Link href={`/events/${id}`} className="bg-green-500 text-white px-4 py-2 rounded-md">
            Explore Event →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyCard;