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


const JessicaData = [
  {
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    profile_picture: "https://fedskillstest.ct.digital/4.png",
    date_of_birth: "08/23/1996",
    phone_number: "(415) 555-1234",
    emergency_contact: "(415) 555-5678",
    insurance_type: "Sunrise Health Assurance",
    diagnosis_history: [
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: {
            value: 160,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 78,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 78,
          levels: "Lower than Average"
        },
        respiratory_rate: {
          value: 20,
          levels: "Normal"
        },
        temperature: {
          value: 98.6,
          levels: "Normal"
        }
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: {
            value: 119,
            levels: "Normal"
          },
          diastolic: {
            value: 73,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 99,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 25,
          levels: "Normal"
        },
        temperature: {
          value: 98,
          levels: "Normal"
        }
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: {
            value: 128,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 86,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 82,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 22,
          levels: "Normal"
        },
        temperature: {
          value: 103,
          levels: "Higher than Average"
        }
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 91,
            levels: "Normal"
          },
          diastolic: {
            value: 111,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 83,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 14,
          levels: "Normal"
        },
        temperature: {
          value: 101,
          levels: "Higher than Average"
        }
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 173,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 103,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 83,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 16,
          levels: "Normal"
        },
        temperature: {
          value: 103,
          levels: "Higher than Average"
        }
      },
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 125,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 103,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 93,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 19,
          levels: "Normal"
        },
        temperature: {
          value: 97,
          levels: "Normal"
        }
      },
      {
        month: "September",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 123,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 113,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 76,
          levels: "Lower than Average"
        },
        respiratory_rate: {
          value: 29,
          levels: "Normal"
        },
        temperature: {
          value: 103,
          levels: "Higher than Average"
        }
      },
      {
        month: "August",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 137,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 112,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 76,
          levels: "Lower than Average"
        },
        respiratory_rate: {
          value: 21,
          levels: "Normal"
        },
        temperature: {
          value: 103,
          levels: "Higher than Average"
        }
      },
      {
        month: "July",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 148,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 87,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 79,
          levels: "Lower than Average"
        },
        respiratory_rate: {
          value: 24,
          levels: "Normal"
        },
        temperature: {
          value: 100,
          levels: "Normal"
        }
      },
      {
        month: "June",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 102,
            levels: "Normal"
          },
          diastolic: {
            value: 73,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 85,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 26,
          levels: "Normal"
        },
        temperature: {
          value: 101,
          levels: "Higher than Average"
        }
      },
      {
        month: "May",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 98,
            levels: "Normal"
          },
          diastolic: {
            value: 115,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 99,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 20,
          levels: "Normal"
        },
        temperature: {
          value: 98,
          levels: "Normal"
        }
      },
      {
        month: "April",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 130,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 108,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 86,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 25,
          levels: "Normal"
        },
        temperature: {
          value: 98,
          levels: "Normal"
        }
      },
      {
        month: "March",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 129,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 101,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 68,
          levels: "Lower than Average"
        },
        respiratory_rate: {
          value: 23,
          levels: "Normal"
        },
        temperature: {
          value: 103,
          levels: "Higher than Average"
        }
      },
      {
        month: "February",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 173,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 69,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 91,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 30,
          levels: "Normal"
        },
        temperature: {
          value: 98,
          levels: "Normal"
        }
      },
      {
        month: "January",
        year: 2023,
        blood_pressure: {
          systolic: {
            value: 159,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 96,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 92,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 21,
          levels: "Normal"
        },
        temperature: {
          value: 97,
          levels: "Normal"
        }
      },
      {
        month: "December",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 139,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 61,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 84,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 21,
          levels: "Normal"
        },
        temperature: {
          value: 103,
          levels: "Higher than Average"
        }
      },
      {
        month: "November",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 142,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 81,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 77,
          levels: "Lower than Average"
        },
        respiratory_rate: {
          value: 21,
          levels: "Normal"
        },
        temperature: {
          value: 103,
          levels: "Higher than Average"
        }
      },
      {
        month: "October",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 175,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 108,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 92,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 25,
          levels: "Normal"
        },
        temperature: {
          value: 102,
          levels: "Higher than Average"
        }
      },
      {
        month: "September",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 117,
            levels: "Normal"
          },
          diastolic: {
            value: 111,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 75,
          levels: "Lower than Average"
        },
        respiratory_rate: {
          value: 17,
          levels: "Normal"
        },
        temperature: {
          value: 97,
          levels: "Normal"
        }
      },
      {
        month: "August",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 102,
            levels: "Normal"
          },
          diastolic: {
            value: 114,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 87,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 21,
          levels: "Normal"
        },
        temperature: {
          value: 102,
          levels: "Higher than Average"
        }
      },
      {
        month: "July",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 166,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 61,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 63,
          levels: "Lower than Average"
        },
        respiratory_rate: {
          value: 20,
          levels: "Normal"
        },
        temperature: {
          value: 100,
          levels: "Normal"
        }
      },
      {
        month: "June",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 122,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 61,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 97,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 23,
          levels: "Normal"
        },
        temperature: {
          value: 100,
          levels: "Normal"
        }
      },
      {
        month: "May",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 150,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 91,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 69,
          levels: "Lower than Average"
        },
        respiratory_rate: {
          value: 14,
          levels: "Normal"
        },
        temperature: {
          value: 98,
          levels: "Normal"
        }
      },
      {
        month: "April",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 131,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 96,
            levels: "Normal"
          }
        },
        heart_rate: {
          value: 81,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 17,
          levels: "Normal"
        },
        temperature: {
          value: 99,
          levels: "Normal"
        }
      },
      {
        month: "March",
        year: 2022,
        blood_pressure: {
          systolic: {
            value: 179,
            levels: "Higher than Average"
          },
          diastolic: {
            value: 84,
            levels: "Lower than Average"
          }
        },
        heart_rate: {
          value: 80,
          levels: "Normal"
        },
        respiratory_rate: {
          value: 26,
          levels: "Normal"
        },
        temperature: {
          value: 97,
          levels: "Normal"
        }
      }
    ],
    diagnostic_list: [
      {
        name: "Hypertension",
        description: "Chronic high blood pressure",
        status: "Under Observation"
      },
      {
        name: "Type 2 Diabetes",
        description: "Insulin resistance and elevated blood sugar",
        status: "Cured"
      },
      {
        name: "Asthma",
        description: "Recurrent episodes of bronchial constriction",
        status: "Inactive"
      },
      {
        name: "Osteoarthritis",
        description: "Degenerative joint disease",
        status: "Untreated"
      }
    ],
    lab_results: [
      "Blood Tests",
      "CT Scans",
      "Radiology Reports",
      "X-Rays"
    ]
  },
]