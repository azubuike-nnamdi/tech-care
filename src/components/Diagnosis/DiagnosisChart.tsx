

// DiagnosisChart component

import { DiagnosisProps } from '@/utils/definitions';
import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';

export const DiagnosisChart: React.FC<DiagnosisProps> = ({ jessicaData }) => {

  if (!jessicaData) return null;
  const chartData = jessicaData?.diagnosis_history;

  console.log('Jessica chart', chartData);
  return (
    <p>chart</p>
  );
};