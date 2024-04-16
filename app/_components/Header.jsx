'use client'

import { Button } from '@/components/ui/button'
import { LoginLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

function Header() {
  const { user } = useKindeBrowserClient()

  useEffect(() => {
    console.log(user)
  }, [user])
  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Explore',
      path: '/',
    },
    {
      id: 3,
      name: 'Contact Us',
      path: '/',
    },
  ]

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/Logo.png"
            alt="logo"
            width={200}
            height={120}
          />
        </Link>
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item) => (
            <li
              key={item.id}
              className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {user ? (
        <>
          <Popover>
            <PopoverTrigger>
              <Image
                src={user?.picture}
                alt="profile-image"
                width={50}
                height={50}
                className="rounded-full"
              />
            </PopoverTrigger>
            <PopoverContent className="w-44">
              <ul className="flex flex-col gap-2">
                <Link
                  href={'/my_booking'}
                  className="cursor-pointer hover:bg-slate-100 p-2"
                >
                  My Booking
                </Link>
                <li className="cursor-pointer hover:bg-slate-100 p-2">
                  <LogoutLink>Logout</LogoutLink>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  )
}

export default Header
