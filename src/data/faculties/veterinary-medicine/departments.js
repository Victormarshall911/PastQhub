export const vetAnatomyDept = {
  id: 'dept-vet-anatomy',
  name: 'Veterinary Anatomy',
  courses: [
    { code: 'VAN101', title: 'Gross Veterinary Anatomy I' },
    { code: 'VAN201', title: 'Gross Veterinary Anatomy II' },
    { code: 'VAN301', title: 'Veterinary Histology & Embryology' },
  ],
};

export const vetAnatomyQuestions = [
  {
    id: 'q-VAN101-1',
    courseCode: 'VAN101',
    departmentId: 'dept-vet-anatomy',
    question: 'Ruminants are characterised by having:',
    options: [
      'A single-chambered stomach',
      'A four-chambered stomach (rumen, reticulum, omasum, abomasum)',
      'A two-chambered stomach',
      'No stomach (absorption through intestines)',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const vetPathologyDept = {
  id: 'dept-vet-pathology',
  name: 'Veterinary Pathology & Microbiology',
  courses: [
    { code: 'VPT301', title: 'General Veterinary Pathology' },
    { code: 'VPT401', title: 'Systemic Veterinary Pathology' },
    { code: 'VPT402', title: 'Veterinary Microbiology' },
  ],
};

export const vetPathologyQuestions = [
  {
    id: 'q-VPT301-1',
    courseCode: 'VPT301',
    departmentId: 'dept-vet-pathology',
    question: 'Necrosis differs from apoptosis in that:',
    options: [
      'Necrosis is programmed cell death while apoptosis is not',
      'Necrosis is unprogrammed/accidental cell death causing inflammation',
      'Necrosis only occurs in plants',
      'Apoptosis always leads to tissue damage',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const vetMedicineDept = {
  id: 'dept-vet-medicine',
  name: 'Veterinary Medicine & Surgery',
  courses: [
    { code: 'VMD301', title: 'Veterinary Pharmacology' },
    { code: 'VMD401', title: 'Diseases of Ruminants' },
    { code: 'VMD501', title: 'Veterinary Surgery & Anaesthesia' },
    { code: 'VMD601', title: 'Diseases of Poultry' },
  ],
};

export const vetMedicineQuestions = [
  {
    id: 'q-VMD401-1',
    courseCode: 'VMD401',
    departmentId: 'dept-vet-medicine',
    question: 'Foot and Mouth Disease (FMD) in cattle is caused by:',
    options: ['A bacterium', 'A fungus', 'An apicomplexan parasite', 'A picornavirus'],
    correctAnswer: 3,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const vetPublicHealthDept = {
  id: 'dept-vet-public-health',
  name: 'Veterinary Public Health & Preventive Medicine',
  courses: [
    { code: 'VPH301', title: 'Introduction to Veterinary Public Health' },
    { code: 'VPH401', title: 'Zoonotic Diseases' },
    { code: 'VPH501', title: 'Meat Hygiene & Inspection' },
    { code: 'VPH601', title: 'One Health Approach' },
  ],
};

export const vetPublicHealthQuestions = [
  {
    id: 'q-VPH401-1',
    courseCode: 'VPH401',
    departmentId: 'dept-vet-public-health',
    question: 'A zoonotic disease is one that:',
    options: [
      'Only affects zoo animals',
      'Can be transmitted between animals and humans',
      'Is caused by zoo-acquired pathogens',
      'Only affects domestic livestock',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];
