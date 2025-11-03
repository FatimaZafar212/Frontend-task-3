import { events } from "@/data";
import Link from 'next/link'
import { FaCalendar, FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
async function Details ({id}) {

    let data = events.find((i)=>i.id == id)

  return (
    <div className="bg-neutral-200 min-h-screen flex flex-col gap-4">
			<div className="flex justify-center items-center h-40 px-7 bg-linear-to-r from-teal-500 to-sky-300 relative">
				<div className="absolute left-10">
					<button className="p-2 rounded-lg cursor-pointer hover:bg-gray-300/40">
						<Link href={"/"} className='text-white hover:underline'>
							Go Back                            
						</Link>
					</button>
				</div>

				<h1 className="text-2xl sm:text-4xl text-white -mt-8">{data.title}</h1>

				<div className="absolute top-30 wccccccccccccccc-[45%] flex flex-col gap-10">
					<div className="bg-gray-700 flex gap-5 sm:gap-10 items-center justify-center p-8 rounded-md">
						<img
							src={data.image}
							alt="course"
							className="rounded-full w-25 sm:w-35 lg:w-45 h-25 sm:h-35 lg:h-45 border-2 border-white"
						/>

						<div className="flex flex-col gap-3 text-teal-300 text-sm sm:text-[16px]">
							<p className="flex flex-col gap-2">
								<FaCalendar></FaCalendar>
								{data.date}
							</p>

							<p className="flex flex-col gap-2">
								<FaLocationPin></FaLocationPin>
								{data.address}
							</p>
						</div>
						
					</div>

					<div className="text-center text-black">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Praesentium, officiis itaque omnis ullam, mollitia in velit optio
						quam doloremque vero magnam rem, laborum eum. Eaque, sequi tempore!
					</div>
				</div>
			</div>
		</div>
  )
}

export default Details