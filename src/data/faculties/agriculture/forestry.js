export const forestryDept = {
  id: 'dept-forestry',
  name: 'Forestry & Wood Technology',
  courses: [
    { code: 'FOR101', title: 'Introduction to Forestry' },
    { code: 'FOR201', title: 'Silviculture' },
    { code: 'FOR301', title: 'Forest Management & Policy' },
    { code: 'FOR401', title: 'Wood Science & Technology' },
  ],
};

export const forestryQuestions = [
  {
    id: 'q-FOR101-1',
    courseCode: 'FOR101',
    departmentId: 'dept-forestry',
    question: 'Which of the following best defines a forest ecosystem?',
    options: [
      'A plantation of economic trees only',
      'A complex community of trees, plants, animals, and microorganisms',
      'An area of land cleared for agriculture',
      'A government-owned woodland reserve',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-FOR201-1',
    courseCode: 'FOR201',
    departmentId: 'dept-forestry',
    question: 'Silviculture is the science of:',
    options: [
      'Harvesting and processing timber',
      'Controlling the growth and composition of forests',
      'Studying forest animal populations',
      'Managing forest fires',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-02-20',
  },
];
