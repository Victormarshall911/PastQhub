export const accountingDept = {
  id: 'dept-accounting',
  name: 'Accounting',
  courses: [
    { code: 'ACC101', title: 'Introduction to Financial Accounting' },
    { code: 'ACC201', title: 'Intermediate Accounting' },
    { code: 'ACC301', title: 'Cost & Management Accounting' },
    { code: 'ACC401', title: 'Advanced Financial Accounting' },
  ],
};

export const accountingQuestions = [
  {
    id: 'q-ACC101-1',
    courseCode: 'ACC101',
    departmentId: 'dept-accounting',
    question: 'The accounting equation is:',
    options: [
      'Assets = Liabilities + Revenue',
      'Assets = Liabilities + Equity',
      'Assets + Liabilities = Equity',
      'Revenue - Expenses = Assets',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-ACC301-1',
    courseCode: 'ACC301',
    departmentId: 'dept-accounting',
    question: 'Break-even point is where:',
    options: [
      'Total revenue exceeds total costs',
      'Total revenue equals total costs',
      'Profit is maximized',
      'Variable costs equal fixed costs',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-15',
  },
];

export const bankingFinanceDept = {
  id: 'dept-banking',
  name: 'Banking & Finance',
  courses: [
    { code: 'BNF101', title: 'Introduction to Banking' },
    { code: 'BNF201', title: 'Money, Banking & Finance' },
    { code: 'BNF301', title: 'Financial Management' },
    { code: 'BNF401', title: 'Investment Analysis & Portfolio Management' },
  ],
};

export const bankingFinanceQuestions = [
  {
    id: 'q-BNF101-1',
    courseCode: 'BNF101',
    departmentId: 'dept-banking',
    question: 'The central bank of Nigeria is:',
    options: ['First Bank', 'Zenith Bank', 'Central Bank of Nigeria (CBN)', 'United Bank for Africa'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-BNF301-1',
    courseCode: 'BNF301',
    departmentId: 'dept-banking',
    question: 'The time value of money concept states that:',
    options: [
      'Money loses value over time due to inflation only',
      'A sum of money today is worth more than the same amount in the future',
      'Future money is always worth more than present money',
      'Money has no time-dependent value',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-10',
  },
];

export const businessAdminDept = {
  id: 'dept-bus-admin',
  name: 'Business Administration',
  courses: [
    { code: 'BUS101', title: 'Principles of Management' },
    { code: 'BUS201', title: 'Organisational Behaviour' },
    { code: 'BUS301', title: 'Business Strategy' },
    { code: 'BUS401', title: 'Human Resource Management' },
  ],
};

export const businessAdminQuestions = [
  {
    id: 'q-BUS101-1',
    courseCode: 'BUS101',
    departmentId: 'dept-bus-admin',
    question: 'The four functions of management are:',
    options: [
      'Planning, Organising, Leading, Controlling',
      'Planning, Staffing, Directing, Budgeting',
      'Organising, Commanding, Coordinating, Controlling',
      'Leading, Motivating, Communicating, Evaluating',
    ],
    correctAnswer: 0,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-BUS201-1',
    courseCode: 'BUS201',
    departmentId: 'dept-bus-admin',
    question: "Maslow's hierarchy of needs places which need at the top?",
    options: ['Safety needs', 'Social needs', 'Esteem needs', 'Self-actualization'],
    correctAnswer: 3,
    year: '2022/2023',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-02-15',
  },
];

export const marketingDept = {
  id: 'dept-marketing',
  name: 'Marketing',
  courses: [
    { code: 'MKT101', title: 'Principles of Marketing' },
    { code: 'MKT201', title: 'Consumer Behaviour' },
    { code: 'MKT301', title: 'Marketing Research' },
    { code: 'MKT401', title: 'International Marketing' },
  ],
};

export const marketingQuestions = [
  {
    id: 'q-MKT101-1',
    courseCode: 'MKT101',
    departmentId: 'dept-marketing',
    question: 'The marketing mix consists of the four Ps: Product, Price, Place, and:',
    options: ['People', 'Promotion', 'Profit', 'Performance'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-MKT201-1',
    courseCode: 'MKT201',
    departmentId: 'dept-marketing',
    question: 'Which of the following is NOT a factor influencing consumer behaviour?',
    options: ['Cultural factors', 'Social factors', 'Geological factors', 'Psychological factors'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-15',
  },
];

export const publicAdminDept = {
  id: 'dept-pub-admin',
  name: 'Public Administration',
  courses: [
    { code: 'PAD101', title: 'Introduction to Public Administration' },
    { code: 'PAD201', title: 'Nigerian Government & Politics' },
    { code: 'PAD301', title: 'Public Policy Analysis' },
    { code: 'PAD401', title: 'Local Government Administration' },
  ],
};

export const publicAdminQuestions = [
  {
    id: 'q-PAD101-1',
    courseCode: 'PAD101',
    departmentId: 'dept-pub-admin',
    question: 'Public Administration is primarily concerned with:',
    options: [
      'Managing private business enterprises',
      'The implementation of government policies and management of public affairs',
      'The study of political party systems',
      'International diplomatic relations',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const entrepreneurshipDept = {
  id: 'dept-entrepreneurship',
  name: 'Entrepreneurship Studies',
  courses: [
    { code: 'ENT101', title: 'Introduction to Entrepreneurship' },
    { code: 'ENT201', title: 'Business Plan Development' },
    { code: 'ENT301', title: 'Small & Medium Enterprise Management' },
    { code: 'ENT401', title: 'Innovation & Technology Commercialisation' },
  ],
};

export const entrepreneurshipQuestions = [
  {
    id: 'q-ENT101-1',
    courseCode: 'ENT101',
    departmentId: 'dept-entrepreneurship',
    question: 'An entrepreneur is best described as:',
    options: [
      'Someone who works for a large corporation',
      'A risk-taker who creates and manages a new business venture',
      'A government official who regulates businesses',
      'An investor who funds existing businesses',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];
