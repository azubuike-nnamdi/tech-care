import { LabResultData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

export const LabResult = () => {
  return (
    <div className='bg-white w-[300px] mt-4 p-4 space-y-7 rounded-lg'>
      {
        LabResultData.map((lab) => (
          <div key={lab.id} className='flex items-center justify-between'>
            <p className='font-normal text-sm'>{lab.name}</p>
            <Image src={lab.icon} alt={lab.name} width={20} height={20} />
          </div>
        ))
      }
    </div>
  )
}
