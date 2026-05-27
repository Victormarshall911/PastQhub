export const educationalFoundationsDept = {
  id: 'dept-edu-foundations',
  name: 'Educational Foundations',
  courses: [
    { code: 'EDF101', title: 'Introduction to Education' },
    { code: 'EDF201', title: 'Philosophy of Education' },
    { code: 'EDF301', title: 'History of Education in Nigeria' },
    { code: 'EDF401', title: 'Sociology of Education' },
  ],
};

export const educationalFoundationsQuestions = [
  {
    id: 'q-EDF101-1',
    courseCode: 'EDF101',
    departmentId: 'dept-edu-foundations',
    question: 'The formal definition of education includes:',
    options: [
      'Only schooling in a classroom setting',
      'Any structured process of transmitting knowledge, skills, and values',
      'Television and social media learning only',
      'Learning through play and recreation only',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const curriculumStudiesDept = {
  id: 'dept-curriculum',
  name: 'Curriculum Studies & Educational Technology',
  courses: [
    { code: 'CRS101', title: 'Introduction to Curriculum Studies' },
    { code: 'CRS201', title: 'Curriculum Development & Design' },
    { code: 'CRS301', title: 'Educational Technology' },
    { code: 'CRS401', title: 'Instructional Design' },
  ],
};

export const curriculumStudiesQuestions = [
  {
    id: 'q-CRS201-1',
    courseCode: 'CRS201',
    departmentId: 'dept-curriculum',
    question: 'Tyler\'s curriculum model emphasises which four questions?',
    options: [
      'What, Why, How, When',
      'Purposes, Experiences, Organisation, Evaluation',
      'Goals, Content, Methods, Assessment',
      'Planning, Implementing, Evaluating, Revising',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-03-01',
  },
];

export const guidanceCounsellingDept = {
  id: 'dept-guidance',
  name: 'Guidance & Counselling',
  courses: [
    { code: 'GNC101', title: 'Introduction to Guidance & Counselling' },
    { code: 'GNC201', title: 'Theories of Counselling' },
    { code: 'GNC301', title: 'Career Guidance' },
    { code: 'GNC401', title: 'Group Counselling' },
  ],
};

export const guidanceCounsellingQuestions = [
  {
    id: 'q-GNC101-1',
    courseCode: 'GNC101',
    departmentId: 'dept-guidance',
    question: 'The primary goal of counselling is to:',
    options: [
      'Give advice and instructions to the client',
      'Help the client develop self-understanding and make informed decisions',
      'Diagnose and treat mental disorders',
      'Provide academic tutoring to students',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const physicalEducationDept = {
  id: 'dept-physical-edu',
  name: 'Physical & Health Education',
  courses: [
    { code: 'PHE101', title: 'Introduction to Physical Education' },
    { code: 'PHE201', title: 'Anatomy & Physiology for PHE' },
    { code: 'PHE301', title: 'Sports Administration & Management' },
    { code: 'PHE401', title: 'Exercise Physiology' },
  ],
};

export const physicalEducationQuestions = [
  {
    id: 'q-PHE101-1',
    courseCode: 'PHE101',
    departmentId: 'dept-physical-edu',
    question: 'Physical education is primarily concerned with:',
    options: [
      'Academic learning in a classroom',
      'The development of physical fitness, motor skills, and healthy lifestyles',
      'Competitive sports at the national level',
      'Medical treatment of sports injuries',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];
