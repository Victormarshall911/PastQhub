import { economicsDept, economicsQuestions, massCommDept, massCommQuestions, politicalScienceDept, politicalScienceQuestions, psychologyDept, psychologyQuestions, sociologyDept, sociologyQuestions } from './departments';

export const socialSciencesFaculty = {
  id: 'fac-social-sciences',
  name: 'Social Sciences',
  icon: 'Users',
  departments: [
    economicsDept,
    massCommDept,
    politicalScienceDept,
    psychologyDept,
    sociologyDept,
  ],
};

export const socialSciencesQuestions = [
  ...economicsQuestions,
  ...massCommQuestions,
  ...politicalScienceQuestions,
  ...psychologyQuestions,
  ...sociologyQuestions,
];
