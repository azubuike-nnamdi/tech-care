// DiagnosisChart component
'use client'
import { DiagnosisProps, History } from '@/utils/definitions';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';


export const DiagnosisChart: React.FC<DiagnosisProps> = ({ jessicaData }) => {
  if (!jessicaData) return null;
  const chartData: History[] = jessicaData.diagnosis_history;

  // Helper function to convert month names to their first 3 letters
  const shortenMonth = (month: string): string => month.substring(0, 3);

  const data = chartData.map((history: History) => {
    const month: string = shortenMonth(history.month);
    const monthYear: string = `${month}, ${history.year}`;
    return {
      monthYear,
      year: history.year,
      systolic: history.blood_pressure.systolic.value,
    };
  });

  // Helper function to convert monthYear string to a Date object
  const monthYearToDate = (monthYear: string): Date => {
    const [month, year] = monthYear.split(', ');
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth(); // Get month index
    return new Date(parseInt(year), monthIndex, 1);
  };

  // Filter data to include only entries from October 2023 to March 2024
  const startDate = new Date(2023, 9, 1); // October 1, 2023
  const endDate = new Date(2024, 2, 31); // March 31, 2024

  const filteredData = data.filter(item => {
    const date = monthYearToDate(item.monthYear);
    return date >= startDate && date <= endDate;
  });

  // Sort the filtered data
  filteredData.sort((a, b) => {
    const dateA = monthYearToDate(a.monthYear);
    const dateB = monthYearToDate(b.monthYear);
    return dateA.getTime() - dateB.getTime();
  });

  console.log('Jessica chart', filteredData);

  return (
    <main className='flex gap-4 bg-[#F4F0FE] mx-4 rounded-lg'>
      <div className='w-[550px]'>
        <div className="flex items-center justify-between p-4 mb-4">
          <h1 className='font-bold text-lg'>Blood Pressure</h1>
          <div className='flex items-center gap-2 text-md'>
            <p className='text-sm font-normal'>Last 6 months</p>
            <ChevronDown className='font-xs' />
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData} margin={{ top: 5, right: 10, left: 2, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="monthYear" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="systolic" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="year" stroke="#C26EB4" activeDot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className='p-4'>
        <div className='flex items-center space-x-3'>
          <div className='bg-[#E66FD2] w-3 h-3 rounded-full' />
          <p className='text-sm'>Systolic</p>
        </div>
        <p className='font-semibold text-lg py-3'>160</p>
        <div className="flex items-center space-x-3">
          <Image src="/img/ArrowUp.svg" alt='arrow' height={10} width={10} />
          <p className='text-xs font-light'>Higher than Average</p>
        </div>
        <hr className='my-4 border border-gray-200' />
        <div className='flex items-center space-x-3'>
          <div className='bg-[#8C6FE6] w-3 h-3 rounded-full' />
          <p className='text-sm'>Diastolic</p>
        </div>
        <p className='font-semibold text-lg py-3'>78</p>
        <div className="flex items-center space-x-3">
          <Image src="/img/ArrowDown.svg" alt='arrow' height={10} width={10} />
          <p className='text-xs font-light'>Lower than Average</p>
        </div>
      </div>
    </main>
  );
};
