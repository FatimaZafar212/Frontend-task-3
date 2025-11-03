import MyCard from "@/Components/Mycard";
import { events } from "@/data";
import React from "react";
import "./globals.css";
function homepagesection() {
  console.log(events);

  return ( 
<div className="bg-gray-200 min-h-screen px-3 py-3 flex flex-col items-center space-y-6">
      {events.map((event) => {
        return (
          <MyCard
            key={event.id}
            id={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            address={event.address}
          />
        );
      })}
    </div>
  );
}

export default homepagesection;

