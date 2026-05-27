import { medicineDept, medicineDeptQuestions, surgeryDept, surgeryDeptQuestions, obsGynDept, obsGynDeptQuestions, paediatricsDept, paediatricsDeptQuestions, communityMedicineDept, communityMedicineQuestions } from './departments';

export const medicineFaculty = {
  id: 'fac-medicine',
  name: 'Medicine & Surgery',
  icon: 'HeartPulse',
  departments: [
    medicineDept,
    surgeryDept,
    obsGynDept,
    paediatricsDept,
    communityMedicineDept,
  ],
};

export const medicineQuestions = [
  ...medicineDeptQuestions,
  ...surgeryDeptQuestions,
  ...obsGynDeptQuestions,
  ...paediatricsDeptQuestions,
  ...communityMedicineQuestions,
];
