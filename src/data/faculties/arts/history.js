export const historyDept = {
  id: 'dept-history',
  name: 'History & International Studies',
  courses: [
    { code: 'HIS101', title: 'Introduction to History' },
    { code: 'HIS201', title: 'African History' },
    { code: 'HIS301', title: 'Nigerian History' },
    { code: 'HIS401', title: 'International Relations' },
  ],
};

export const historyQuestions = [
  {
    id: 'q-HIS101-1',
    courseCode: 'HIS101',
    departmentId: 'dept-history',
    question: 'History is primarily defined as the study of:',
    options: [
      'Future events and predictions',
      'Human past events and their significance',
      'Natural phenomena over time',
      'Geographical changes in the earth',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-HIS301-1',
    courseCode: 'HIS301',
    departmentId: 'dept-history',
    question: 'Nigeria gained independence from Britain in:',
    options: ['1956', '1960', '1963', '1966'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-HIS401-1',
    courseCode: 'HIS401',
    departmentId: 'dept-history',
    question: 'The United Nations was established in:',
    options: ['1939', '1941', '1945', '1950'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-15',
  },
];
