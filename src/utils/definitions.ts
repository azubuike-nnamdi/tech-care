type BloodPressureReading = {
  systolic: {
    value: number;
    levels: string;
  };
  diastolic: {
    value: number;
    levels: string;
  };
};

type VitalSigns = {
  heart_rate: {
    value: number;
    levels: string;
  };
  respiratory_rate: {
    value: number;
    levels: string;
  };
  temperature: {
    value: number;
    levels: string;
  };
};

type Diagnosis = {
  name: string;
  description: string;
  status: string;
};

type DiagnosisHistoryEntry = {
  month: string;
  year: number;
  blood_pressure: BloodPressureReading;
  vital_signs: VitalSigns;
};

export type JessicaDataTypes = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryEntry[];
  diagnostic_list: Diagnosis[];
  lab_results: string[];
  monthYear?: string[];
  systolic?: number[];
};

export type DiagnosisDataTypes = {
  id: number;
  img: string;
  issue: string;
  rate: string;
  level: string;
};


export type ProfileProps = {
  jessicaData: JessicaDataTypes | undefined;
}

export type ProfileDataType = {
  id: number;
  icon: string;
  title: string;
  value: string;
}

export type DiagnosisProps = {
  jessicaData: JessicaDataTypes;
}


interface BloodPressure {
  systolic: {
    value: number;
  };
}

export type History = {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
}
