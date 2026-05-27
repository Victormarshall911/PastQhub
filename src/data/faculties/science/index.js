import { biologyDept, biologyQuestions, chemistryDept, chemistryQuestions, computerScienceDept, computerScienceQuestions, mathematicsDept, mathematicsQuestions, microbiologyDept, microbiologyQuestions, physicsDept, physicsQuestions, statisticsDept, statisticsQuestions, geologyDept, geologyQuestions } from './departments';

export const scienceFaculty = {
  id: 'fac-science',
  name: 'Science',
  icon: 'Atom',
  departments: [
    biologyDept,
    chemistryDept,
    computerScienceDept,
    geologyDept,
    mathematicsDept,
    microbiologyDept,
    physicsDept,
    statisticsDept,
  ],
};

export const scienceQuestions = [
  ...biologyQuestions,
  ...chemistryQuestions,
  ...computerScienceQuestions,
  ...geologyQuestions,
  ...mathematicsQuestions,
  ...microbiologyQuestions,
  ...physicsQuestions,
  ...statisticsQuestions,
];
