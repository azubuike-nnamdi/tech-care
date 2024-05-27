type DiagnosisHistory = {
  month?: string;
  year?: number;
  label?: string;
  value?: number;
  levels?: string
  id?: number;
  img?: string;
  issue?: string;
  rate?: string;
  level?: string;
  blood_pressure?: {
    systolic: { value: number; levels: string };
    diastolic: { value: number; levels: string };
  };
  heart_rate?: { value: number; levels: string };
  respiratory_rate?: { value: number; levels: string };
  temperature?: { value: number; levels: string };
}

type Diagnostic = {
  name: string;
  description: string;
  status: string;
}

export type JessicaDataTypes = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: Diagnostic[];
  lab_results: string[];
}


export type DiagnosisProps = {
  jessicaData: JessicaDataTypes | undefined;
  id?: number;
  img?: string;
  issue?: string;
  rate?: string;
  level?: string;

}

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

export type DiagnosisHistoryCardProps = {
  id?: number,
  history: DiagnosisHistory;
  img?: string;
  issue?: string;
  rate?: string;
  level?: string;
};

export type ProfileDataType = {
  id: number;
  icon: string;
  title: string;
  value: string;
}