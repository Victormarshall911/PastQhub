export const civilEngineeringDept = {
  id: 'dept-civil-eng',
  name: 'Civil Engineering',
  courses: [
    { code: 'CVE101', title: 'Engineering Drawing & CAD' },
    { code: 'CVE201', title: 'Structural Analysis' },
    { code: 'CVE301', title: 'Soil Mechanics' },
    { code: 'CVE401', title: 'Highway & Transportation Engineering' },
  ],
};

export const civilEngineeringQuestions = [
  {
    id: 'q-CVE201-1',
    courseCode: 'CVE201',
    departmentId: 'dept-civil-eng',
    question: 'A simply supported beam carries a uniformly distributed load. The maximum bending moment occurs at:',
    options: ['The supports', 'The midspan', 'The quarter span', 'The third span'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-CVE301-1',
    courseCode: 'CVE301',
    departmentId: 'dept-civil-eng',
    question: 'Consolidation in soil refers to:',
    options: [
      'The increase in shear strength of soil',
      'The gradual reduction in volume of soil under sustained load',
      'The compaction of soil by mechanical means',
      'The mixing of different soil types',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-15',
  },
];

export const chemicalEngineeringDept = {
  id: 'dept-chem-eng',
  name: 'Chemical Engineering',
  courses: [
    { code: 'CHE101', title: 'Introduction to Chemical Engineering' },
    { code: 'CHE201', title: 'Fluid Mechanics' },
    { code: 'CHE301', title: 'Heat & Mass Transfer' },
    { code: 'CHE401', title: 'Chemical Reaction Engineering' },
  ],
};

export const chemicalEngineeringQuestions = [
  {
    id: 'q-CHE201-1',
    courseCode: 'CHE201',
    departmentId: 'dept-chem-eng',
    question: 'Bernoulli\'s equation is based on the principle of conservation of:',
    options: ['Mass', 'Momentum', 'Energy', 'Charge'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-CHE401-1',
    courseCode: 'CHE401',
    departmentId: 'dept-chem-eng',
    question: 'The order of a chemical reaction is determined by:',
    options: [
      'The stoichiometric coefficients in the balanced equation',
      'Experimental data on concentration vs. rate',
      'The temperature of the reaction',
      'The catalyst used',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-10',
  },
];

export const computerEngineeringDept = {
  id: 'dept-comp-eng',
  name: 'Computer Engineering',
  courses: [
    { code: 'CPE101', title: 'Fundamentals of Computer Engineering' },
    { code: 'CPE201', title: 'Microprocessors & Microcontrollers' },
    { code: 'CPE301', title: 'Computer Architecture' },
    { code: 'CPE401', title: 'Embedded Systems Design' },
  ],
};

export const computerEngineeringQuestions = [
  {
    id: 'q-CPE201-1',
    courseCode: 'CPE201',
    departmentId: 'dept-comp-eng',
    question: 'The 8085 microprocessor has an address bus of:',
    options: ['8 bits', '12 bits', '16 bits', '32 bits'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-CPE301-1',
    courseCode: 'CPE301',
    departmentId: 'dept-comp-eng',
    question: 'RISC stands for:',
    options: [
      'Reduced Instruction Set Computer',
      'Rapid Instruction Set Computer',
      'Random Instruction Set Computer',
      'Reduced Integrated Set Computer',
    ],
    correctAnswer: 0,
    year: '2022/2023',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-02-10',
  },
];

export const petroleumEngineeringDept = {
  id: 'dept-pet-eng',
  name: 'Petroleum Engineering',
  courses: [
    { code: 'PTE101', title: 'Introduction to Petroleum Engineering' },
    { code: 'PTE201', title: 'Reservoir Engineering I' },
    { code: 'PTE301', title: 'Drilling Engineering' },
    { code: 'PTE401', title: 'Production Engineering' },
  ],
};

export const petroleumEngineeringQuestions = [
  {
    id: 'q-PTE101-1',
    courseCode: 'PTE101',
    departmentId: 'dept-pet-eng',
    question: 'Petroleum is formed from:',
    options: [
      'Chemical reactions of inorganic minerals',
      'Decomposition of ancient marine organisms under heat and pressure',
      'Volcanic eruptions deep underground',
      'Crystallization of underground rocks',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-PTE301-1',
    courseCode: 'PTE301',
    departmentId: 'dept-pet-eng',
    question: 'The primary function of drilling mud is to:',
    options: [
      'Lubricate the drill bit and carry cuttings to the surface',
      'Provide power to the rotary table',
      'Mark the depth of the wellbore',
      'Seal the wellbore permanently',
    ],
    correctAnswer: 0,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-20',
  },
];

export const metallurgicalEngineeringDept = {
  id: 'dept-met-eng',
  name: 'Metallurgical & Materials Engineering',
  courses: [
    { code: 'MME101', title: 'Introduction to Materials Science' },
    { code: 'MME201', title: 'Physical Metallurgy' },
    { code: 'MME301', title: 'Mechanical Behaviour of Materials' },
    { code: 'MME401', title: 'Corrosion & Surface Engineering' },
  ],
};

export const metallurgicalEngineeringQuestions = [
  {
    id: 'q-MME101-1',
    courseCode: 'MME101',
    departmentId: 'dept-met-eng',
    question: 'The atomic packing factor (APF) of a face-centered cubic (FCC) structure is:',
    options: ['0.52', '0.68', '0.74', '0.91'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-MME301-1',
    courseCode: 'MME301',
    departmentId: 'dept-met-eng',
    question: 'Young\'s modulus is a measure of a material\'s:',
    options: ['Hardness', 'Toughness', 'Stiffness (elastic modulus)', 'Ductility'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-10',
  },
];
