export const biologyDept = {
  id: 'dept-biology',
  name: 'Biology',
  courses: [
    { code: 'BIO101', title: 'General Biology I' },
    { code: 'BIO201', title: 'Cell Biology' },
    { code: 'BIO301', title: 'Genetics' },
    { code: 'BIO401', title: 'Evolution & Ecology' },
  ],
};

export const biologyQuestions = [
  {
    id: 'q-BIO101-1',
    courseCode: 'BIO101',
    departmentId: 'dept-biology',
    question: 'The powerhouse of the cell is the:',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-BIO301-1',
    courseCode: 'BIO301',
    departmentId: 'dept-biology',
    question: "Mendel's law of segregation states that:",
    options: [
      'Alleles for different genes assort independently',
      'Each organism carries two alleles for each trait, which separate during gamete formation',
      'Dominant alleles always suppress recessive alleles',
      'Genes are located on chromosomes',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-15',
  },
];

export const chemistryDept = {
  id: 'dept-chemistry',
  name: 'Chemistry',
  courses: [
    { code: 'CHM101', title: 'General Chemistry I' },
    { code: 'CHM201', title: 'Organic Chemistry I' },
    { code: 'CHM301', title: 'Physical Chemistry' },
    { code: 'CHM401', title: 'Analytical Chemistry' },
  ],
};

export const chemistryQuestions = [
  {
    id: 'q-CHM101-1',
    courseCode: 'CHM101',
    departmentId: 'dept-chemistry',
    question: 'Avogadro\'s number is approximately:',
    options: ['6.022 × 10²¹', '6.022 × 10²³', '3.14 × 10²³', '1.38 × 10²³'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-CHM201-1',
    courseCode: 'CHM201',
    departmentId: 'dept-chemistry',
    question: 'The hybridization of carbon in methane (CH₄) is:',
    options: ['sp', 'sp²', 'sp³', 'sp³d'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-03-01',
  },
];

export const computerScienceDept = {
  id: 'dept-comp-sci',
  name: 'Computer Science',
  courses: [
    { code: 'CSC101', title: 'Introduction to Computer Science' },
    { code: 'CSC201', title: 'Data Structures and Algorithms' },
    { code: 'CSC301', title: 'Operating Systems' },
    { code: 'CSC401', title: 'Database Management Systems' },
  ],
};

export const computerScienceQuestions = [
  {
    id: 'q-CSC101-1',
    courseCode: 'CSC101',
    departmentId: 'dept-comp-sci',
    question: 'Which of the following is NOT a programming paradigm?',
    options: ['Object-Oriented', 'Functional', 'Relational', 'Procedural'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-CSC201-1',
    courseCode: 'CSC201',
    departmentId: 'dept-comp-sci',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-CSC301-1',
    courseCode: 'CSC301',
    departmentId: 'dept-comp-sci',
    question: 'Which OS scheduling algorithm gives the shortest job the highest priority?',
    options: ['FCFS', 'Round Robin', 'Shortest Job First (SJF)', 'Priority Scheduling'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-20',
  },
];

export const mathematicsDept = {
  id: 'dept-mathematics',
  name: 'Mathematics',
  courses: [
    { code: 'MTH101', title: 'Elementary Mathematics I' },
    { code: 'MTH201', title: 'Mathematical Methods I' },
    { code: 'MTH301', title: 'Abstract Algebra' },
    { code: 'MTH401', title: 'Real Analysis' },
  ],
};

export const mathematicsQuestions = [
  {
    id: 'q-MTH101-1',
    courseCode: 'MTH101',
    departmentId: 'dept-mathematics',
    question: 'What is the derivative of sin(x)?',
    options: ['-cos(x)', 'cos(x)', 'tan(x)', '-sin(x)'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-20',
  },
  {
    id: 'q-MTH101-2',
    courseCode: 'MTH101',
    departmentId: 'dept-mathematics',
    question: 'Evaluate: lim(x→0) sin(x)/x',
    options: ['0', '1', '∞', 'undefined'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-20',
  },
];

export const microbiologyDept = {
  id: 'dept-microbiology',
  name: 'Microbiology',
  courses: [
    { code: 'MCB101', title: 'Introduction to Microbiology' },
    { code: 'MCB201', title: 'Bacteriology' },
    { code: 'MCB301', title: 'Virology' },
    { code: 'MCB401', title: 'Medical Microbiology' },
  ],
};

export const microbiologyQuestions = [
  {
    id: 'q-MCB101-1',
    courseCode: 'MCB101',
    departmentId: 'dept-microbiology',
    question: 'The cell wall of bacteria is primarily made of:',
    options: ['Cellulose', 'Peptidoglycan', 'Chitin', 'Phospholipids'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-MCB301-1',
    courseCode: 'MCB301',
    departmentId: 'dept-microbiology',
    question: 'Viruses are obligate intracellular parasites because they:',
    options: [
      'Can only survive in acidic environments',
      'Require a living host cell to replicate',
      'Are too small to exist outside cells',
      'Produce toxins only inside cells',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-15',
  },
];

export const physicsDept = {
  id: 'dept-physics',
  name: 'Physics',
  courses: [
    { code: 'PHY101', title: 'General Physics I (Mechanics)' },
    { code: 'PHY201', title: 'Electricity & Magnetism' },
    { code: 'PHY301', title: 'Modern Physics' },
    { code: 'PHY401', title: 'Quantum Mechanics' },
  ],
};

export const physicsQuestions = [
  {
    id: 'q-PHY101-1',
    courseCode: 'PHY101',
    departmentId: 'dept-physics',
    question: "Newton's law of universal gravitation states that the gravitational force is:",
    options: [
      'Proportional to the product of masses and inversely proportional to distance',
      'Proportional to the product of masses and inversely proportional to the square of distance',
      'Proportional to the sum of masses and inversely proportional to distance',
      'Independent of the masses involved',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-PHY201-1',
    courseCode: 'PHY201',
    departmentId: 'dept-physics',
    question: "Faraday's law of electromagnetic induction states that the induced EMF is proportional to:",
    options: [
      'The magnetic field strength',
      'The rate of change of magnetic flux',
      'The resistance of the circuit',
      'The current in the circuit',
    ],
    correctAnswer: 1,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-10',
  },
];

export const statisticsDept = {
  id: 'dept-statistics',
  name: 'Statistics',
  courses: [
    { code: 'STA101', title: 'Introduction to Statistics' },
    { code: 'STA201', title: 'Probability Theory' },
    { code: 'STA301', title: 'Statistical Inference' },
    { code: 'STA401', title: 'Regression Analysis' },
  ],
};

export const statisticsQuestions = [
  {
    id: 'q-STA101-1',
    courseCode: 'STA101',
    departmentId: 'dept-statistics',
    question: 'The mean of the numbers 4, 8, 6, 10, 2 is:',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-STA201-1',
    courseCode: 'STA201',
    departmentId: 'dept-statistics',
    question: 'The probability of an impossible event is:',
    options: ['1', '0.5', '0', 'undefined'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-02-10',
  },
];

export const geologyDept = {
  id: 'dept-geology',
  name: 'Geology',
  courses: [
    { code: 'GEO101', title: 'Introduction to Geology' },
    { code: 'GEO201', title: 'Mineralogy & Petrology' },
    { code: 'GEO301', title: 'Structural Geology' },
    { code: 'GEO401', title: 'Economic Geology' },
  ],
};

export const geologyQuestions = [
  {
    id: 'q-GEO101-1',
    courseCode: 'GEO101',
    departmentId: 'dept-geology',
    question: 'The theory of plate tectonics explains:',
    options: [
      'The formation of clouds and precipitation',
      'The movement of lithospheric plates and associated geological phenomena',
      'The circulation of ocean currents',
      'The origin of the solar system',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];
