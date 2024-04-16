import { Button } from '@/components/ui/button'
import { Calendar, Clock } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import CancelAppoinment from './CancelAppoinment'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'

function BookingList({ bookingList, expired, updateRecord }) {
  const onDeleteBooking = (item) => {
    console.log(item)
    GlobalApi.deleteBooking(item.id).then((resp) => {
      console.log(resp)
      if (resp) {
        toast('Bookin Deleted Successfully')
        updateRecord()
      }
    })
  }
  return (
    <div className="flex flex-col gap-4 w-full border items-center p-5 m-3">
      {bookingList &&
        bookingList.map((item, index) => (
          <div key={index} className="w-full p-4 m-2 rounded-lg">
            <div className="flex items-center gap-4">
              {/* Image component with width and height specified */}
              <Image
                src={
                  item.attributes.doctor.data?.attributes?.image?.data
                    ?.attributes?.url
                }
                className="rounded-full"
                width={70} // Specify width in pixels
                height={70} // Specify height in pixels
                alt="doctor-image"
              />
              <div className="flex flex-col w-full gap-2">
                <h2 className="font-bold text-[18px] flex justify-between gap-4">
                  {item.attributes.doctor.data.attributes.Name}

                  {!expired && (
                    <CancelAppoinment
                      onContinueClick={() => onDeleteBooking(item)}
                    />
                  )}
                </h2>
              </div>
            </div>
            <div>
              <h2 className="flex items-center gap-2">
                <Calendar className="text-primary" />
                Appointment on:{' '}
                {moment(item.attributes.Date).format('DD-MMM-YYYY')}
              </h2>
              <h2 className="flex items-center gap-2">
                <Clock className="text-primary" />
                Scheduled at: {item.attributes.Time}
              </h2>
            </div>
          </div>
        ))}
    </div>
  )
}

export default BookingList
