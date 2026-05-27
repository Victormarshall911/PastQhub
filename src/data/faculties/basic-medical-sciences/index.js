import { anatomyDept, anatomyQuestions, physiologyDept, physiologyQuestions, medBiochemistryDept, medBiochemistryQuestions } from './departments';

export const basicMedicalSciencesFaculty = {
  id: 'fac-bms',
  name: 'Basic Medical Sciences',
  icon: 'Microscope',
  departments: [anatomyDept, physiologyDept, medBiochemistryDept],
};

export const basicMedicalSciencesQuestions = [
  ...anatomyQuestions,
  ...physiologyQuestions,
  ...medBiochemistryQuestions,
];
