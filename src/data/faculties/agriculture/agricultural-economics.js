export const agriculturalEconomicsDept = {
  id: 'dept-agr-econ',
  name: 'Agricultural Economics & Extension',
  courses: [
    { code: 'AEE101', title: 'Introduction to Agricultural Economics' },
    { code: 'AEE201', title: 'Farm Management & Production Economics' },
    { code: 'AEE301', title: 'Agricultural Marketing' },
    { code: 'AEE401', title: 'Agricultural Finance & Credit' },
  ],
};

export const agriculturalEconomicsQuestions = [
  {
    id: 'q-AEE101-1',
    courseCode: 'AEE101',
    departmentId: 'dept-agr-econ',
    question: 'Which of the following best defines Agricultural Economics?',
    options: [
      'The study of plant growth and development',
      'The application of economic principles to the agricultural sector',
      'The management of agricultural machinery',
      'The study of soil fertility and crop yield',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-AEE101-2',
    courseCode: 'AEE101',
    departmentId: 'dept-agr-econ',
    question: 'The concept of opportunity cost in farming refers to:',
    options: [
      'The cost of hiring farm labor',
      'The value of the next best alternative foregone when a choice is made',
      'The total cost of purchasing farm inputs',
      'The profit margin from selling produce',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-AEE201-1',
    courseCode: 'AEE201',
    departmentId: 'dept-agr-econ',
    question: 'A farm is said to be at maximum profit when:',
    options: [
      'Total revenue equals total cost',
      'Marginal cost equals marginal revenue',
      'Average cost is at its minimum',
      'Total output is maximized',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-10',
  },
];
