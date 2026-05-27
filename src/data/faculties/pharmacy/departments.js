export const clinicalPharmacyDept = {
  id: 'dept-clinical-pharmacy',
  name: 'Clinical Pharmacy & Pharmacy Practice',
  courses: [
    { code: 'CLP301', title: 'Clinical Pharmacy I' },
    { code: 'CLP401', title: 'Pharmacotherapy' },
    { code: 'CLP402', title: 'Pharmaceutical Care' },
    { code: 'CLP501', title: 'Drug Information & Literature Evaluation' },
  ],
};

export const clinicalPharmacyQuestions = [
  {
    id: 'q-CLP301-1',
    courseCode: 'CLP301',
    departmentId: 'dept-clinical-pharmacy',
    question: 'The therapeutic index of a drug is defined as:',
    options: [
      'The ratio of the lethal dose to the effective dose (LD50/ED50)',
      'The rate of drug absorption',
      'The volume of distribution of a drug',
      'The time to peak plasma concentration',
    ],
    correctAnswer: 0,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const pharmacologyDept = {
  id: 'dept-pharmacology',
  name: 'Pharmacology & Toxicology',
  courses: [
    { code: 'PHK201', title: 'General Pharmacology' },
    { code: 'PHK301', title: 'Pharmacokinetics' },
    { code: 'PHK401', title: 'Toxicology' },
    { code: 'PHK402', title: 'Chemotherapy' },
  ],
};

export const pharmacologyQuestions = [
  {
    id: 'q-PHK201-1',
    courseCode: 'PHK201',
    departmentId: 'dept-pharmacology',
    question: 'A drug antagonist works by:',
    options: [
      'Mimicking the action of the natural ligand',
      'Blocking a receptor without activating it',
      'Increasing the synthesis of neurotransmitters',
      'Destroying the target receptor',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-PHK301-1',
    courseCode: 'PHK301',
    departmentId: 'dept-pharmacology',
    question: 'The first-pass effect refers to:',
    options: [
      'The initial absorption of a drug through the skin',
      'The metabolism of an orally administered drug in the gut wall and liver before reaching systemic circulation',
      'The rapid distribution of a drug to target tissues',
      'The excretion of a drug through the kidneys',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-15',
  },
];

export const pharmaceuticsDept = {
  id: 'dept-pharmaceutics',
  name: 'Pharmaceutics & Pharmaceutical Technology',
  courses: [
    { code: 'PHT201', title: 'Physical Pharmacy' },
    { code: 'PHT301', title: 'Dosage Form Design' },
    { code: 'PHT401', title: 'Biopharmaceutics & Drug Delivery' },
    { code: 'PHT402', title: 'Industrial Pharmacy' },
  ],
};

export const pharmaceuticsQuestions = [
  {
    id: 'q-PHT301-1',
    courseCode: 'PHT301',
    departmentId: 'dept-pharmaceutics',
    question: 'Enteric-coated tablets are designed to:',
    options: [
      'Dissolve quickly in the mouth',
      'Resist dissolution in gastric acid and release drug in the intestine',
      'Release drug slowly over 24 hours',
      'Improve the taste of bitter drugs',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const pharmacognosyDept = {
  id: 'dept-pharmacognosy',
  name: 'Pharmacognosy & Herbal Medicine',
  courses: [
    { code: 'PCG201', title: 'General Pharmacognosy' },
    { code: 'PCG301', title: 'Phytochemistry' },
    { code: 'PCG401', title: 'Herbal Medicine & Ethnopharmacology' },
    { code: 'PCG402', title: 'Marine Natural Products' },
  ],
};

export const pharmacognosyQuestions = [
  {
    id: 'q-PCG201-1',
    courseCode: 'PCG201',
    departmentId: 'dept-pharmacognosy',
    question: 'Pharmacognosy is defined as the study of:',
    options: [
      'Drug interactions in the body',
      'Drugs derived from natural sources (plants, animals, minerals)',
      'Synthetic drug manufacturing',
      'Drug legislation and regulation',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];
