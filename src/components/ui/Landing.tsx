import React from 'react'
import { Sidebar } from '../common/Sidebar'
import { ProfileCard } from './ProfileCard';
import { Diagnosis } from '../Diagnosis/Diagnosis';
import { JessicaDataTypes } from '@/utils/definitions';

async function getData(): Promise<JessicaDataTypes[]> {
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  const credentials = btoa(`${username}:${password}`);

  const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT_URL as string, {
    headers: {
      'Authorization': `Basic ${credentials}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Landing() {
  const data: JessicaDataTypes[] = await getData()
  const jessicaData = data.find(user => user.name === 'Jessica Taylor');

  if (!jessicaData) return null;


  return (
    <div className='flex items-center justify-between gap-6 overflow-y-hidden'>
      <Sidebar />
      <div className="flex  overflow-y-auto gap-6">
        <Diagnosis jessicaData={jessicaData} />
        <ProfileCard jessicaData={jessicaData} />
      </div>
    </div>
  )
}
