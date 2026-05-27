export const philosophyDept = {
  id: 'dept-philosophy',
  name: 'Philosophy',
  courses: [
    { code: 'PHI101', title: 'Introduction to Philosophy' },
    { code: 'PHI201', title: 'Logic & Critical Thinking' },
    { code: 'PHI301', title: 'Ethics & Moral Philosophy' },
    { code: 'PHI401', title: 'African Philosophy' },
  ],
};

export const philosophyQuestions = [
  {
    id: 'q-PHI101-1',
    courseCode: 'PHI101',
    departmentId: 'dept-philosophy',
    question: 'Epistemology is the branch of philosophy that deals with:',
    options: ['The nature of beauty', 'Knowledge and justified belief', 'Moral values', 'Political systems'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-PHI201-1',
    courseCode: 'PHI201',
    departmentId: 'dept-philosophy',
    question: 'A valid argument is one where:',
    options: [
      'All premises are true',
      'The conclusion is true',
      'If the premises are true, the conclusion must be true',
      'The argument is persuasive',
    ],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-02-15',
  },
];
