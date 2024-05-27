import { ProfileProps } from '@/utils/definitions'
import Image from 'next/image'
import React from 'react'
import { Button } from './button';
import { ProfileData } from '@/utils/data';

export const ProfileCard: React.FC<ProfileProps> = ({ jessicaData }) => {
  if (!jessicaData) {
    return null;
  }
  return (
    <div className='w-[467px] h-[640px] bg-[#fff] rounded-lg'>
      <div className='flex flex-col items-center justify-center mt-8'>
        <Image src={jessicaData?.profile_picture} alt={jessicaData?.name}
          width={150}
          height={200} />
        <p className='font-bold text-md py-3'>{jessicaData?.name}</p>
      </div>
      <div className='p-4'>
        {
          ProfileData.map((profile) => (
            <div key={profile.id}
              className='flex gap-2 py-2 '>
              <Image src={profile.icon} alt={profile.title} width={32} height={42} />
              <div>
                <p className='text-[14px]'>{profile.title}</p>
                <p className='font-bold text-sm'>{profile.value}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex items-center justify-center mt-8'>
        <Button className='bg-[#01F0D0] mx-auto text-black rounded-full'>
          Show All Information
        </Button>
      </div>
    </div>
  )
}