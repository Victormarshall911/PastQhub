export const animalScienceDept = {
  id: 'dept-animal-sci',
  name: 'Animal Science',
  courses: [
    { code: 'ANS101', title: 'Introduction to Animal Science' },
    { code: 'ANS201', title: 'Animal Nutrition' },
    { code: 'ANS301', title: 'Animal Breeding & Genetics' },
    { code: 'ANS401', title: 'Livestock Production Systems' },
  ],
};

export const animalScienceQuestions = [
  {
    id: 'q-ANS101-1',
    courseCode: 'ANS101',
    departmentId: 'dept-animal-sci',
    question: 'Which of the following animals is a monogastric?',
    options: ['Cattle', 'Sheep', 'Pig', 'Goat'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-18',
  },
  {
    id: 'q-ANS201-1',
    courseCode: 'ANS201',
    departmentId: 'dept-animal-sci',
    question: 'The primary function of protein in animal nutrition is:',
    options: [
      'Providing energy for movement',
      'Tissue building and repair',
      'Lubricating joints',
      'Regulating blood pressure',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-02-10',
  },
  {
    id: 'q-ANS301-1',
    courseCode: 'ANS301',
    departmentId: 'dept-animal-sci',
    question: 'Heritability is defined as the proportion of:',
    options: [
      'Phenotypic variance due to genotypic variance',
      'Environmental variance due to total variance',
      'Total variance due to environmental effects',
      'Genotypic variance due to dominant genes',
    ],
    correctAnswer: 0,
    year: '2022/2023',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-03-15',
  },
];
