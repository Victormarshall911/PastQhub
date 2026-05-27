export const linguisticsDept = {
  id: 'dept-linguistics',
  name: 'Linguistics',
  courses: [
    { code: 'LIN101', title: 'Introduction to Linguistics' },
    { code: 'LIN201', title: 'Phonetics & Phonology' },
    { code: 'LIN301', title: 'Morphology & Syntax' },
    { code: 'LIN401', title: 'Sociolinguistics' },
  ],
};

export const linguisticsQuestions = [
  {
    id: 'q-LIN101-1',
    courseCode: 'LIN101',
    departmentId: 'dept-linguistics',
    question: 'Linguistics is best described as:',
    options: [
      'The study of foreign languages',
      'The scientific study of language and its structure',
      'The history of written communication',
      'The study of literature across cultures',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-LIN201-1',
    courseCode: 'LIN201',
    departmentId: 'dept-linguistics',
    question: 'Phonology is the study of:',
    options: [
      'Word formation rules',
      'Sentence structure',
      'Sound systems in language',
      'Meaning in language',
    ],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-03-05',
  },
];
