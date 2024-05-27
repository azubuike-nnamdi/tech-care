import { DiagnosisDataTypes, ProfileDataType } from "./definitions";

export const NavLink = [
  {
    id: 1,
    icon: '/img/home_FILL0_wght300_GRAD0_opsz24.svg',
    name: 'Overview',
    path: '#',
  },
  {
    id: 2,
    icon: '/img/group_FILL0_wght300_GRAD0_opsz24.svg',
    name: 'Patients',
    path: '#',
  },
  {
    id: 3,
    icon: '/img/calendar_today_FILL0_wght300_GRAD0_opsz24.svg',
    name: 'Schedule',
    path: '#',
  },
  {
    id: 4,
    icon: '/img/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg',
    name: 'Profile',
    path: '#',
  },
  {
    id: 5,
    icon: '/img/credit_card_FILL0_wght300_GRAD0_opsz24.svg',
    name: 'Transactions',
    path: '#',
  }
]

export const Patients = [
  {
    id: 1,
    name: 'Emily William',
    gender: 'Female',
    age: '18',
    img: '/img/emily.png',
  },
  {
    id: 2,
    name: 'Ryan Johnson',
    gender: 'Male',
    age: '45',
    img: '/img/ryan.png',
  },
  {
    id: 3,
    name: 'Brandon Mitchell',
    gender: 'Male',
    age: '36',
    img: '/img/brandon.png',
  },
  {
    id: 4,
    name: 'Jessica Taylor',
    gender: 'Female',
    age: '28',
    img: '/img/jessica.png',
  },
  {
    id: 5,
    name: 'Samantha Johnson',
    gender: 'Female',
    age: '56',
    img: '/img/samantha.png',
  },
  {
    id: 6,
    name: 'Ashley Martinez',
    gender: 'Female',
    age: '54',
    img: '/img/ashley.png',
  },
  {
    id: 7,
    name: 'Oliver Brown',
    gender: 'Female',
    age: '32',
    img: '/img/oliver.png',
  },
  {
    id: 8,
    name: 'Tyler Davis',
    gender: 'Male',
    age: '19',
    img: '/img/davis.png',
  },
  {
    id: 9,
    name: 'Kevin Anderson',
    gender: 'Male',
    age: '40',
    img: '/img/kevin.png',
  },
  {
    id: 10,
    name: 'Dylan Thompson',
    gender: 'Male',
    age: '36',
    img: '/img/dylan.png',
  },
  {
    id: 11,
    name: 'Nathan Evans',
    gender: 'Male',
    age: '58',
    img: '/img/nathan.png',
  },
  {
    id: 12,
    name: 'Mike Nolan',
    gender: 'Male',
    age: '31',
    img: '/img/pexels-photo-1222271.png',
  }
];

export const DiagnosisData: DiagnosisDataTypes[] = [
  {
    id: 1,
    img: '/img/respiratory_rate.svg',
    issue: "Respiratory Rate",
    rate: '20 bpm',
    level: 'Normal'
  },
  {
    id: 2,
    img: '/img/temperature.svg',
    issue: "Temperature",
    rate: '98.6°F',
    level: 'Normal'
  },
  {
    id: 3,
    img: '/img/HeartBPM.svg',
    issue: "Heart Rate",
    rate: '78 bpm',
    level: 'Lower than Average'
  }
]

export const ProfileData: ProfileDataType[] = [
  {
    id: 1,
    icon: '/img/BirthIcon.svg',
    title: 'Date of Birth',
    value: 'August 23, 1996'
  },
  {
    id: 2,
    icon: '/img/FemaleIcon.svg',
    title: 'Gender',
    value: 'Female'
  },
  {
    id: 3,
    icon: '/img/PhoneIcon.svg',
    title: 'Contact Info',
    value: '(415) 555-1234'
  },
  {
    id: 4,
    icon: '/img/PhoneIcon.svg',
    title: 'Emergency Contact',
    value: '(415) 555-5678'
  },
  {
    id: 5,
    icon: '/img/InsuranceIcon.svg',
    title: 'Insurance Provider',
    value: 'Sunrise Health Assurance'
  }
]

export const LabResultData = [
  {
    id: 1,
    name: 'Blood Tests',
    icon: '/img/download_FILL0_wght300_GRAD0_opsz24.svg'
  },
  {
    id: 2,
    name: 'CT Scans',
    icon: '/img/download_FILL0_wght300_GRAD0_opsz24.svg'
  },
  {
    id: 3,
    name: 'Radiology Reports',
    icon: '/img/download_FILL0_wght300_GRAD0_opsz24.svg'
  },
  {
    id: 4,
    name: 'X-Rays',
    icon: '/img/download_FILL0_wght300_GRAD0_opsz24.svg'
  },
  {
    id: 5,
    name: 'Urine Test',
    icon: '/img/download_FILL0_wght300_GRAD0_opsz24.svg'
  }
]