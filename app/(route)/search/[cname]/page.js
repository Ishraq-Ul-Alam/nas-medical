'use client'
import DoctorList from '@/app/_components/DoctorList'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function Search({ params }) {
  const [doctorList, setDoctorList] = useState([])
  useEffect(() => {
    console.log(params.cname)
    getDoctors()
  }, [])

  const getDoctors = () => {
    GlobalApi.getDoctorByCategory(params.cname).then((resp) => {
      console.log(resp)
      setDoctorList(resp.data.data)
    })
  }
  return (
    <div>
      <DoctorList heading="General Practitioner" doctorList={doctorList} />
    </div>
  )
}

export default Search
