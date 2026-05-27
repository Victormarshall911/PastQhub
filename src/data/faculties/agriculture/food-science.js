export const foodScienceDept = {
  id: 'dept-food-sci',
  name: 'Food Science & Technology',
  courses: [
    { code: 'FST101', title: 'Introduction to Food Science' },
    { code: 'FST201', title: 'Food Chemistry' },
    { code: 'FST301', title: 'Food Microbiology' },
    { code: 'FST401', title: 'Food Processing & Preservation' },
  ],
};

export const foodScienceQuestions = [
  {
    id: 'q-FST101-1',
    courseCode: 'FST101',
    departmentId: 'dept-food-sci',
    question: 'The Maillard reaction occurs between:',
    options: [
      'Fats and water',
      'Amino acids and reducing sugars',
      'Starch and enzymes',
      'Proteins and lipids',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-FST301-1',
    courseCode: 'FST301',
    departmentId: 'dept-food-sci',
    question: 'Which microorganism is responsible for lactic acid fermentation in yoghurt?',
    options: ['Saccharomyces cerevisiae', 'Lactobacillus bulgaricus', 'Aspergillus niger', 'Clostridium botulinum'],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-07-10',
  },
];
