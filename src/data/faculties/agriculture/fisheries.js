export const fisheriesDept = {
  id: 'dept-fisheries',
  name: 'Fisheries & Aquaculture',
  courses: [
    { code: 'FSH101', title: 'Introduction to Fisheries Science' },
    { code: 'FSH201', title: 'Fish Biology & Ecology' },
    { code: 'FSH301', title: 'Aquaculture Principles & Practice' },
    { code: 'FSH401', title: 'Fisheries Management & Conservation' },
  ],
};

export const fisheriesQuestions = [
  {
    id: 'q-FSH101-1',
    courseCode: 'FSH101',
    departmentId: 'dept-fisheries',
    question: 'Aquaculture is defined as:',
    options: [
      'The study of freshwater biology',
      'The cultivation of aquatic organisms under controlled conditions',
      'The harvesting of wild fish populations',
      'The study of marine ecosystems',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-FSH301-1',
    courseCode: 'FSH301',
    departmentId: 'dept-fisheries',
    question: 'Which of the following is a warm-water fish commonly cultured in Nigeria?',
    options: ['Trout', 'Salmon', 'Catfish (Clarias)', 'Tilapia nilotica'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-20',
  },
];
