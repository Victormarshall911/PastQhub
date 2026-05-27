export const arabicIslamicDept = {
  id: 'dept-arabic',
  name: 'Arabic & Islamic Studies',
  courses: [
    { code: 'ARA101', title: 'Elementary Arabic I' },
    { code: 'ARA201', title: 'Arabic Grammar & Composition' },
    { code: 'ISL201', title: 'Introduction to Islamic Studies' },
    { code: 'ISL301', title: 'Islamic Jurisprudence (Fiqh)' },
  ],
};

export const arabicIslamicQuestions = [
  {
    id: 'q-ISL201-1',
    courseCode: 'ISL201',
    departmentId: 'dept-arabic',
    question: 'The Five Pillars of Islam include all of the following EXCEPT:',
    options: ['Salah (Prayer)', 'Sawm (Fasting)', 'Hajj (Pilgrimage)', 'Jihad (Struggle)'],
    correctAnswer: 3,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-ARA101-1',
    courseCode: 'ARA101',
    departmentId: 'dept-arabic',
    question: 'The Arabic alphabet has how many letters?',
    options: ['24', '26', '28', '30'],
    correctAnswer: 2,
    year: '2022/2023',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-02-10',
  },
];
