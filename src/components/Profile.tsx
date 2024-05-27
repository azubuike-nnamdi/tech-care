import React from 'react'
import { ProfileCard } from './ui/ProfileCard'
import { LabResult } from './LabResult'

export const Profile: React.FC<{ jessicaData: any }> = ({ jessicaData }) => {
  return (
    <div className='w-1/4'>
      <ProfileCard jessicaData={jessicaData} />
      {/* <LabResult /> */}
    </div>
  )
}
