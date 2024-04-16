import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function DoctorList({ doctorList, heading = 'Doctors' }) {
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">{heading}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 lg:grid-cols-4 mt-4">
        {doctorList.length > 0
          ? doctorList.map((doctor) => (
              <div
                className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out"
                key={doctor.id} // Use a unique property like 'id' from the doctor object
              >
                <Image
                  src={doctor.attributes?.image?.data?.attributes?.url}
                  alt="doctor"
                  width={200}
                  height={100}
                  className="h-[200px] w-full object-cover rounded-lg"
                />
                <div className="mt-3 item-baseline flex-col">
                  <h2 className="text-[20px] bg-blue-100 p-1 rounded-full px-2 text-primary">
                    {doctor.attributes?.category.data.attributes?.Name}
                  </h2>
                  <h2 className="font-bold">{doctor.attributes.Name}</h2>
                  <h2>{doctor.attributes?.StartTime}</h2>
                  <h2>{doctor.attributes?.EndTime}</h2>
                  <Link href={'/details/' + doctor.id} className="w-full">
                    <h2 className="p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[20px] mt-2 cursor-pointer hover:bg-primary hover:text-white">
                      Book Now
                    </h2>
                  </Link>
                </div>
              </div>
            ))
          : [1, 2, 3].map((item, index) => (
              <div
                className="h-[220px] bg-slate-200 w-full rounded-full animate-pulse"
                key={index}
              ></div> // Make sure to include a unique key in the fallback list as well
            ))}
      </div>
    </div>
  )
}

export default DoctorList
