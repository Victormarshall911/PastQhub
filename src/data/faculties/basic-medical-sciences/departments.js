export const anatomyDept = {
  id: 'dept-anatomy',
  name: 'Human Anatomy',
  courses: [
    { code: 'ANA101', title: 'Gross Anatomy I' },
    { code: 'ANA201', title: 'Gross Anatomy II' },
    { code: 'ANA301', title: 'Neuroanatomy' },
    { code: 'ANA302', title: 'Histology & Embryology' },
  ],
};

export const anatomyQuestions = [
  {
    id: 'q-ANA101-1',
    courseCode: 'ANA101',
    departmentId: 'dept-anatomy',
    question: 'The anatomical position refers to a person:',
    options: [
      'Lying face down with arms at sides',
      'Standing upright, facing forward, palms facing forward',
      'Sitting with legs crossed',
      'Standing with arms raised above the head',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-ANA301-1',
    courseCode: 'ANA301',
    departmentId: 'dept-anatomy',
    question: 'The largest part of the human brain is the:',
    options: ['Cerebellum', 'Medulla oblongata', 'Cerebrum', 'Pons'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-02-10',
  },
];

export const physiologyDept = {
  id: 'dept-physiology',
  name: 'Human Physiology',
  courses: [
    { code: 'PSY101', title: 'General Physiology' },
    { code: 'PSY201', title: 'Cardiovascular Physiology' },
    { code: 'PSY301', title: 'Neurophysiology' },
    { code: 'PSY401', title: 'Renal & Endocrine Physiology' },
  ],
};

export const physiologyQuestions = [
  {
    id: 'q-PSY101-1',
    courseCode: 'PSY101',
    departmentId: 'dept-physiology',
    question: 'The resting membrane potential of a typical neuron is approximately:',
    options: ['+70 mV', '-70 mV', '0 mV', '+40 mV'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-PSY201-1',
    courseCode: 'PSY201',
    departmentId: 'dept-physiology',
    question: 'The normal cardiac output at rest in an adult is approximately:',
    options: ['2 L/min', '3.5 L/min', '5 L/min', '8 L/min'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-15',
  },
];

export const medBiochemistryDept = {
  id: 'dept-med-biochem',
  name: 'Medical Biochemistry',
  courses: [
    { code: 'BCH101', title: 'Introductory Biochemistry' },
    { code: 'BCH201', title: 'Metabolism I (Carbohydrates & Lipids)' },
    { code: 'BCH301', title: 'Protein Chemistry & Enzymology' },
    { code: 'BCH401', title: 'Molecular Biology & Genetics' },
  ],
};

export const medBiochemistryQuestions = [
  {
    id: 'q-BCH101-1',
    courseCode: 'BCH101',
    departmentId: 'dept-med-biochem',
    question: 'The monomer unit of proteins is:',
    options: ['Glucose', 'Fatty acids', 'Amino acids', 'Nucleotides'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-BCH201-1',
    courseCode: 'BCH201',
    departmentId: 'dept-med-biochem',
    question: 'Glycolysis occurs in the:',
    options: ['Mitochondria', 'Nucleus', 'Cytoplasm', 'Endoplasmic reticulum'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-03-01',
  },
];
