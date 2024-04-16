'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScanSearchIcon, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
function SearchBar() {
  const [categoryList, setCategoryList] = useState([])
  useEffect(() => {
    getCategoryList()
  }, [])
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp)
      setCategoryList(resp.data.data)
    })
  }
  return (
    <div className="mb-10 items-center flex flex-col gap-4">
      <h2 className="font-bold text-4xl traching-wide">
        {' '}
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-400 text-xl">
        Search your Docotor and Book an Appoinment in one click
      </h2>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      {categoryList.length > 0
        ? categoryList.map((item, index) => (
            <Link
              href={'/search/' + item.attributes.Name}
              key={index}
              className="flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 hover:scale-110 transition-all ease-in-out cursor-pointer"
            >
              <Image
                src={item.attributes?.icon?.data.attributes.url}
                alt="icon"
                width={80}
                height={80}
              />
              <label className="text-blue-600 text-sm">
                {item?.attributes?.Name}
              </label>
            </Link>
          ))
        : [1].map((item, index) => (
            <div
              className=" bg-slate-200 m-2 w-[100px] h-[100px] rounded-lg animate-pulse round"
              key={index}
            ></div> // Add key here as well
          ))}
    </div>
  )
}

export default SearchBar
