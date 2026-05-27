export const religiousStudiesDept = {
  id: 'dept-rel-studies',
  name: 'Religious Studies',
  courses: [
    { code: 'REL101', title: 'Introduction to Religious Studies' },
    { code: 'REL201', title: 'Christianity & Islam in Nigeria' },
    { code: 'REL301', title: 'African Traditional Religion' },
    { code: 'REL401', title: 'Comparative Religion' },
  ],
};

export const religiousStudiesQuestions = [
  {
    id: 'q-REL101-1',
    courseCode: 'REL101',
    departmentId: 'dept-rel-studies',
    question: 'The term "religion" is derived from the Latin word:',
    options: ['"Religio" meaning to bind', '"Rex" meaning king', '"Ratio" meaning reason', '"Relax" meaning peace'],
    correctAnswer: 0,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-REL301-1',
    courseCode: 'REL301',
    departmentId: 'dept-rel-studies',
    question: 'African Traditional Religion primarily believes in:',
    options: [
      'Atheism and secular humanism',
      'A Supreme Being alongside ancestors and divinities',
      'Polytheism with no Supreme Being',
      'Monotheism identical to Christianity',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-10',
  },
];
