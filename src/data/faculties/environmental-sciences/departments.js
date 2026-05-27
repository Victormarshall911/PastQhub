export const architectureDept = {
  id: 'dept-architecture',
  name: 'Architecture',
  courses: [
    { code: 'ARC101', title: 'Introduction to Architecture' },
    { code: 'ARC201', title: 'Architectural Design Studio II' },
    { code: 'ARC301', title: 'Building Technology' },
    { code: 'ARC401', title: 'Urban Design & Planning' },
  ],
};

export const architectureQuestions = [
  {
    id: 'q-ARC101-1',
    courseCode: 'ARC101',
    departmentId: 'dept-architecture',
    question: 'The Vitruvian principles of architecture are:',
    options: [
      'Form, Function, Aesthetics',
      'Firmitas (Strength), Utilitas (Utility), Venustas (Beauty)',
      'Structure, Space, Style',
      'Scale, Proportion, Harmony',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const estateManagementDept = {
  id: 'dept-estate-mgmt',
  name: 'Estate Management',
  courses: [
    { code: 'EST101', title: 'Introduction to Estate Management' },
    { code: 'EST201', title: 'Property Valuation I' },
    { code: 'EST301', title: 'Land Law & Administration' },
    { code: 'EST401', title: 'Property Development & Finance' },
  ],
};

export const estateManagementQuestions = [
  {
    id: 'q-EST201-1',
    courseCode: 'EST201',
    departmentId: 'dept-estate-mgmt',
    question: 'The highest and best use of a property means:',
    options: [
      'The most expensive use',
      'The legally permissible, physically possible, financially feasible use that produces maximum value',
      'The use preferred by the property owner',
      'The most common use in the neighbourhood',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-03-01',
  },
];

export const quantitySurveyingDept = {
  id: 'dept-qty-surveying',
  name: 'Quantity Surveying',
  courses: [
    { code: 'QSV101', title: 'Introduction to Quantity Surveying' },
    { code: 'QSV201', title: 'Measurement & Estimating' },
    { code: 'QSV301', title: 'Contract Administration' },
    { code: 'QSV401', title: 'Construction Project Management' },
  ],
};

export const quantitySurveyingQuestions = [
  {
    id: 'q-QSV101-1',
    courseCode: 'QSV101',
    departmentId: 'dept-qty-surveying',
    question: 'A Bill of Quantities (BOQ) is primarily used to:',
    options: [
      'Design the architectural layout of a building',
      'Describe and quantify materials and labour for a construction project',
      'Approve planning permissions for buildings',
      'Calculate structural loads on a building',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const urbanPlanningDept = {
  id: 'dept-urban-planning',
  name: 'Urban & Regional Planning',
  courses: [
    { code: 'URP101', title: 'Introduction to Urban Planning' },
    { code: 'URP201', title: 'Land Use Planning' },
    { code: 'URP301', title: 'Transportation Planning' },
    { code: 'URP401', title: 'Environmental Impact Assessment' },
  ],
};

export const urbanPlanningQuestions = [
  {
    id: 'q-URP101-1',
    courseCode: 'URP101',
    departmentId: 'dept-urban-planning',
    question: 'Zoning in urban planning refers to:',
    options: [
      'The mapping of underground water sources',
      'The division of land into zones with specific permitted uses',
      'The assessment of environmental pollution',
      'The design of road networks',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const buildingDept = {
  id: 'dept-building',
  name: 'Building',
  courses: [
    { code: 'BLD101', title: 'Building Materials & Science' },
    { code: 'BLD201', title: 'Building Construction I' },
    { code: 'BLD301', title: 'Building Services' },
    { code: 'BLD401', title: 'Construction Management' },
  ],
};

export const buildingQuestions = [
  {
    id: 'q-BLD201-1',
    courseCode: 'BLD201',
    departmentId: 'dept-building',
    question: 'The water-cement ratio in concrete primarily affects its:',
    options: ['Colour', 'Strength and workability', 'Weight', 'Thermal insulation'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];
