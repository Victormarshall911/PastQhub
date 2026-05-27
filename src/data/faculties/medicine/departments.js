export const medicineDept = {
  id: 'dept-medicine',
  name: 'Medicine & General Practice',
  courses: [
    { code: 'MED301', title: 'Introduction to Clinical Medicine' },
    { code: 'MED401', title: 'Internal Medicine I' },
    { code: 'MED501', title: 'Internal Medicine II' },
    { code: 'MED601', title: 'Clinical Clerkship' },
  ],
};

export const medicineDeptQuestions = [
  {
    id: 'q-MED401-1',
    courseCode: 'MED401',
    departmentId: 'dept-medicine',
    question: 'The first-line treatment for hypertension in a diabetic patient is:',
    options: ['Beta-blockers', 'ACE inhibitors', 'Calcium channel blockers', 'Diuretics'],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
  {
    id: 'q-MED401-2',
    courseCode: 'MED401',
    departmentId: 'dept-medicine',
    question: 'The classic triad of diabetic ketoacidosis (DKA) includes all EXCEPT:',
    options: ['Hyperglycemia', 'Ketonemia', 'Metabolic acidosis', 'Hypernatremia'],
    correctAnswer: 3,
    year: '2022/2023',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2023-06-10',
  },
];

export const surgeryDept = {
  id: 'dept-surgery',
  name: 'Surgery',
  courses: [
    { code: 'SRG301', title: 'Principles of Surgery' },
    { code: 'SRG401', title: 'General Surgery' },
    { code: 'SRG501', title: 'Surgical Emergencies' },
    { code: 'SRG601', title: 'Orthopaedic Surgery' },
  ],
};

export const surgeryDeptQuestions = [
  {
    id: 'q-SRG301-1',
    courseCode: 'SRG301',
    departmentId: 'dept-surgery',
    question: 'The most common cause of acute abdomen in Nigeria is:',
    options: ['Appendicitis', 'Perforated peptic ulcer', 'Intestinal obstruction', 'Trauma'],
    correctAnswer: 0,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const obsGynDept = {
  id: 'dept-obs-gyn',
  name: 'Obstetrics & Gynaecology',
  courses: [
    { code: 'OBG301', title: 'Introduction to Obstetrics' },
    { code: 'OBG401', title: 'Normal Labour & Delivery' },
    { code: 'OBG501', title: 'Gynaecological Conditions' },
    { code: 'OBG601', title: 'High Risk Pregnancy' },
  ],
};

export const obsGynDeptQuestions = [
  {
    id: 'q-OBG401-1',
    courseCode: 'OBG401',
    departmentId: 'dept-obs-gyn',
    question: 'The normal duration of a full-term pregnancy is:',
    options: ['36 weeks', '38 weeks', '40 weeks', '42 weeks'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];

export const paediatricsDept = {
  id: 'dept-paediatrics',
  name: 'Paediatrics & Child Health',
  courses: [
    { code: 'PAE301', title: 'Introduction to Paediatrics' },
    { code: 'PAE401', title: 'Neonatal Medicine' },
    { code: 'PAE501', title: 'Paediatric Infectious Diseases' },
    { code: 'PAE601', title: 'Paediatric Nutrition' },
  ],
};

export const paediatricsDeptQuestions = [
  {
    id: 'q-PAE401-1',
    courseCode: 'PAE401',
    departmentId: 'dept-paediatrics',
    question: 'The normal birth weight of a full-term neonate is:',
    options: ['1.5–2 kg', '2–2.5 kg', '2.5–4 kg', '4–5 kg'],
    correctAnswer: 2,
    year: '2023/2024',
    semester: 'Second Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-03-01',
  },
];

export const communityMedicineDept = {
  id: 'dept-community-med',
  name: 'Community Medicine & Public Health',
  courses: [
    { code: 'CMH301', title: 'Introduction to Community Medicine' },
    { code: 'CMH401', title: 'Epidemiology' },
    { code: 'CMH501', title: 'Health Promotion & Education' },
    { code: 'CMH601', title: 'Environmental Health' },
  ],
};

export const communityMedicineQuestions = [
  {
    id: 'q-CMH401-1',
    courseCode: 'CMH401',
    departmentId: 'dept-community-med',
    question: 'The incidence rate measures:',
    options: [
      'The total number of cases of disease in a population at a point in time',
      'The number of new cases of disease in a population over a specific period',
      'The proportion of deaths due to a disease',
      'The rate of recovery from a disease',
    ],
    correctAnswer: 1,
    year: '2023/2024',
    semester: 'First Semester',
    uploadedBy: 'Admin',
    createdAt: '2024-01-15',
  },
];
