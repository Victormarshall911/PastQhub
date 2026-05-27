export const soilScienceDept = {
  id: 'dept-soil-sci',
  name: 'Soil Science & Land Management',
  courses: [
    { code: 'SSL101', title: 'Introduction to Soil Science' },
    { code: 'SSL201', title: 'Soil Chemistry & Fertility' },
    { code: 'SSL301', title: 'Soil Conservation & Management' },
    { code: 'SSL401', title: 'Soil Microbiology' },
  ],
};

export const soilScienceQuestions = [
  {
    id: 'q-SSL101-1',
    courseCode: 'SSL101',
    departmentId: 'dept-soil-sci',
    question: 'The major components of soil are:',
    options: [
      'Minerals, water, air, and organic matter',
      'Rocks, sand, water, and clay',
      'Nutrients, water, bacteria, and minerals',
      'Humus, clay, rocks, and air',
    ],
    correctAnswer: 0,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-SSL201-1',
    courseCode: 'SSL201',
    departmentId: 'dept-soil-sci',
    question: 'A soil with pH of 7 is considered:',
    options: ['Acidic', 'Neutral', 'Alkaline', 'Saline'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-03-01',
  },
];
