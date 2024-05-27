import { DiagnosisProps } from '@/utils/definitions'
import React from 'react'
import { DiagnosisData } from '@/utils/data';
import { Card, CardContent, CardFooter, CardHeader } from './card';
import Image from 'next/image';

export const Diagnosis: React.FC<DiagnosisProps> = ({ jessicaData }) => {
  console.log("jesica from diagnostics", jessicaData)

  if (!jessicaData) {
    return null;
  }

  const filteredData = jessicaData.diagnosis_history.filter(
    (history) => history.month === 'March' && history.year === 2024
  );

  // console.log(filteredData)


  return (
    <div className='h-screen '>
      <div className='w-[766px] h-[640px] bg-[#fff] rounded-lg overflow-y-hidden'>
        <p className='p-4 font-bold text-2xl'>Diagnosis History</p>
        <div className="flex items-center justify-between gap-6 p-4">
          {DiagnosisData.map((diagnosis) => {
            let bgColor;
            if (diagnosis.issue === 'Respiratory Rate') {
              bgColor = 'bg-[#E0F3FA]';
            } else if (diagnosis.issue === 'Temperature') {
              bgColor = 'bg-[#FFE6E9]';
            } else if (diagnosis.issue === 'Heart Rate') {
              bgColor = 'bg-[#FFE6F1]';
            } else {
              bgColor = 'bg-white';
            }

            const otherClasses = 'w-[228px] h-[242px]';

            return (
              <Card key={diagnosis.id} className={`${bgColor} ${otherClasses}`}>
                <CardHeader>
                  <Image src={diagnosis?.img} alt={diagnosis.issue} width={96} height={96} />
                  <CardContent className='p-0'>
                    <span className='text-[14px] text-[#072635]'>{diagnosis.issue}</span>
                    <h1 className='text-2xl font-bold'> {diagnosis.rate} </h1>
                  </CardContent>
                  <CardFooter className='p-0 text-xs pt-5'>
                    {diagnosis.level}
                  </CardFooter>

                </CardHeader>
              </Card>
            );
          })}
        </div>

      </div>
      {/* <div className='w-[766px] h-[673px] bg-[#fff] rounded-lg mt-4 md:overflow-y-auto'>
        <p className='p-4 font-bold text-2xl'>Diagnosis List</p>
      </div> */}
    </div>
  )
}
