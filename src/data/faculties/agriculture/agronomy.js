export const agronomyDept = {
  id: 'dept-agronomy',
  name: 'Agronomy',
  courses: [
    { code: 'AGR101', title: 'General Crop Production' },
    { code: 'AGR201', title: 'Principles of Agronomy' },
    { code: 'AGR301', title: 'Weed Science & Management' },
    { code: 'AGR401', title: 'Crop Physiology' },
  ],
};

export const agronomyQuestions = [
  {
    id: 'q-AGR101-1',
    courseCode: 'AGR101',
    departmentId: 'dept-agronomy',
    question: 'Photosynthesis in plants primarily occurs in the:',
    options: ['Root cells', 'Chloroplasts', 'Mitochondria', 'Cell nucleus'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-20',
  },
  {
    id: 'q-AGR101-2',
    courseCode: 'AGR101',
    departmentId: 'dept-agronomy',
    question: 'Which of the following is a C4 crop?',
    options: ['Rice', 'Wheat', 'Maize', 'Soybean'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-20',
  },
  {
    id: 'q-AGR301-1',
    courseCode: 'AGR301',
    departmentId: 'dept-agronomy',
    question: 'Weeds are most competitive with crops during which growth stage?',
    options: ['Maturity stage', 'Early vegetative stage', 'Reproductive stage', 'Senescence stage'],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-07-01',
  },
];
