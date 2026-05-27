export const englishDept = {
  id: 'dept-english',
  name: 'English & Literary Studies',
  courses: [
    { code: 'ENG101', title: 'Use of English' },
    { code: 'ENG201', title: 'Introduction to Literature' },
    { code: 'ENG301', title: 'British Literature' },
    { code: 'ENG401', title: 'Literary Criticism & Theory' },
  ],
};

export const englishQuestions = [
  {
    id: 'q-ENG101-1',
    courseCode: 'ENG101',
    departmentId: 'dept-english',
    question: 'Which of the following is an example of a simple sentence?',
    options: [
      'She went to the market and bought fruits.',
      'The dog barked.',
      'Although it was raining, he went out.',
      'She said that she would come.',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-ENG201-1',
    courseCode: 'ENG201',
    departmentId: 'dept-english',
    question: 'The literary device where a non-human entity is given human qualities is called:',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-03-01',
  },
  {
    id: 'q-ENG401-1',
    courseCode: 'ENG401',
    departmentId: 'dept-english',
    question: 'Marxist literary criticism primarily focuses on:',
    options: [
      'The psychological state of the author',
      'Class struggle and socioeconomic factors in literature',
      'The formal structure of literary texts',
      'The reader\'s personal response to a text',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-02-10',
  },
];
