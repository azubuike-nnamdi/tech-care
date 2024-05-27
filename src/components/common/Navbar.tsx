import { NavLink } from '@/utils/data'
import Image from 'next/image'
import React from 'react'
import { EllipsisVertical, Settings } from 'lucide-react';


export const Navbar = () => {
  return (
    <div className='md:flex justify-between md:m-5 md:p-3 rounded-full shadow-md bg-white items-center'>
      <Image src={"/img/TestLogo.svg"} alt='brand_logo' width={150} height={200} />
      <div className="flex justify-center">
        <div className="flex space-x-8">
          {
            NavLink.map((navlink) => (
              <div key={navlink.id} className="flex items-center space-x-2">
                <Image src={navlink.icon} alt='icon' width={15} height={20} />
                <p className='text-sm font-medium'>{navlink.name}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='flex space-x-3'>
        <div className='flex items-center justify-center space-x-3'>
          <Image src="/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt='profile'
            height={30} width={30} />
          <div>
            <p className='text-sm font-semibold'>Dr. Jose Simmons</p>
            <p className='text-xs text-gray-400'>General Practitioner</p>
          </div>
        </div>
        <div className='border border-gray-300' />
        <div className='flex items-center justify-center space-x-3'>
          <Settings />
          <EllipsisVertical />
        </div>
      </div>
    </div>
  )
}
