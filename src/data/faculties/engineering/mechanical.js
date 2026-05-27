export const mechanicalEngineeringDept = {
  id: 'dept-mech-eng',
  name: 'Mechanical Engineering',
  courses: [
    { code: 'MEE201', title: 'Engineering Mechanics' },
    { code: 'MEE301', title: 'Thermodynamics II' },
    { code: 'MEE302', title: 'Fluid Mechanics' },
    { code: 'MEE401', title: 'Machine Design' },
  ],
};

export const mechanicalEngineeringQuestions = [
  {
    id: 'q-MEE201-1',
    courseCode: 'MEE201',
    departmentId: 'dept-mech-eng',
    question: "Newton's second law of motion states that:",
    options: [
      'Every action has an equal and opposite reaction',
      'Force equals mass times acceleration',
      'An object at rest stays at rest',
      'Energy cannot be created or destroyed',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-18',
  },
  {
    id: 'q-MEE201-2',
    courseCode: 'MEE201',
    departmentId: 'dept-mech-eng',
    question: 'What is the SI unit of torque?',
    options: ['Newton', 'Pascal', 'Newton-meter', 'Joule per second'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-18',
  },
  {
    id: 'q-MEE301-1',
    courseCode: 'MEE301',
    departmentId: 'dept-mech-eng',
    question: 'The first law of thermodynamics is a statement of:',
    options: [
      'Conservation of momentum',
      'Conservation of energy',
      'Entropy increase',
      'Temperature equilibrium',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-25',
  },
];

export const electricalEngineeringDept = {
  id: 'dept-elec-eng',
  name: 'Electrical & Electronics Engineering',
  courses: [
    { code: 'EEE201', title: 'Circuit Theory I' },
    { code: 'EEE301', title: 'Digital Electronics' },
    { code: 'EEE302', title: 'Signals & Systems' },
    { code: 'EEE401', title: 'Control Systems' },
  ],
};

export const electricalEngineeringQuestions = [
  {
    id: 'q-EEE201-1',
    courseCode: 'EEE201',
    departmentId: 'dept-elec-eng',
    question: "According to Kirchhoff's Current Law (KCL):",
    options: [
      'The sum of voltages around a loop is zero',
      'The sum of currents entering a node equals the sum leaving',
      'Voltage is proportional to current',
      'Power equals voltage times current',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-02-05',
  },
  {
    id: 'q-EEE201-2',
    courseCode: 'EEE201',
    departmentId: 'dept-elec-eng',
    question: 'What is the equivalent resistance of two 10Ω resistors in parallel?',
    options: ['20Ω', '10Ω', '5Ω', '15Ω'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-02-05',
  },
  {
    id: 'q-EEE301-1',
    courseCode: 'EEE301',
    departmentId: 'dept-elec-eng',
    question: 'The output of an AND gate is HIGH only when:',
    options: ['Any input is HIGH', 'All inputs are HIGH', 'All inputs are LOW', 'At least one input is LOW'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-02-10',
  },
];

export const agriculturalEngineeringDept = {
  id: 'dept-agr-eng',
  name: 'Agricultural Engineering',
  courses: [
    { code: 'AEN101', title: 'Introduction to Agricultural Engineering' },
    { code: 'AEN201', title: 'Farm Power & Machinery' },
    { code: 'AEN301', title: 'Irrigation & Drainage Engineering' },
    { code: 'AEN401', title: 'Food Engineering & Processing' },
  ],
};

export const agriculturalEngineeringQuestions = [
  {
    id: 'q-AEN201-1',
    courseCode: 'AEN201',
    departmentId: 'dept-agr-eng',
    question: 'The main purpose of a plough in farming is to:',
    options: [
      'Harvest crops at the surface',
      'Till and turn the soil for planting',
      'Irrigate dry farmland',
      'Spread fertilizer across fields',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];
