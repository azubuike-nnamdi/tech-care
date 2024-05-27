
import { Patients } from '@/utils/data'
import { Ellipsis } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Sidebar = () => {
  return (
    <div className='bg-[#FFFFFF] p-3 w-[367px] rounded-lg md:overflow-y-auto h-screen'>
      <div className="flex justify-between items-center px-2">
        <h1 className='text-2xl font-bold'>Patients</h1>
        <Image src="/img/search_FILL0_wght300_GRAD0_opsz24.svg" alt='search_icon'
          width={15}
          height={10} />
      </div>
      <div className="">
        {
          Patients.map((patient) => (
            <div key={patient.id}
              className={`flex items-center justify-between px-2 py-4 rounded-lg ${patient.name === 'Jessica Taylor' && 'bg-[#D8FCF7] items-center'}`}>
              <div className='flex space-x-4'>
                <Image src={patient.img} alt='patient' width={50} height={50} />
                <div className='leading-1'>
                  <p className='text-[14px] font-bold'>{patient.name}</p>
                  <div className="flex text-xs text-gray-400 space-x-1 ">
                    <p>{patient.gender}</p>
                    <p >{patient.age}</p>
                  </div>
                </div>
              </div>
              <Ellipsis />

            </div>
          ))
        }
      </div>
    </div>
  )
}
