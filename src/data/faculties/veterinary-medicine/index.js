import { vetAnatomyDept, vetAnatomyQuestions, vetPathologyDept, vetPathologyQuestions, vetMedicineDept, vetMedicineQuestions, vetPublicHealthDept, vetPublicHealthQuestions } from './departments';

export const veterinaryMedicineFaculty = {
  id: 'fac-veterinary',
  name: 'Veterinary Medicine',
  icon: 'PawPrint',
  departments: [
    vetAnatomyDept,
    vetPathologyDept,
    vetMedicineDept,
    vetPublicHealthDept,
  ],
};

export const veterinaryMedicineQuestions = [
  ...vetAnatomyQuestions,
  ...vetPathologyQuestions,
  ...vetMedicineQuestions,
  ...vetPublicHealthQuestions,
];
