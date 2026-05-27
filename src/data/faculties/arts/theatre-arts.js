export const theatreArtsDept = {
  id: 'dept-theatre',
  name: 'Theatre Arts & Music',
  courses: [
    { code: 'THE101', title: 'Introduction to Theatre Arts' },
    { code: 'THE201', title: 'Drama & Performance' },
    { code: 'MUS201', title: 'Introduction to Music Theory' },
    { code: 'THE401', title: 'African Theatre & Drama' },
  ],
};

export const theatreArtsQuestions = [
  {
    id: 'q-THE101-1',
    courseCode: 'THE101',
    departmentId: 'dept-theatre',
    question: 'The term "catharsis" in drama refers to:',
    options: [
      'A stage direction for actors',
      'The emotional purging experienced by an audience',
      'A type of theatrical costume',
      'The climax of a dramatic plot',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-MUS201-1',
    courseCode: 'MUS201',
    departmentId: 'dept-theatre',
    question: 'A musical scale has how many notes?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-07-01',
  },
];
