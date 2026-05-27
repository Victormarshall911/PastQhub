import { educationalFoundationsDept, educationalFoundationsQuestions, curriculumStudiesDept, curriculumStudiesQuestions, guidanceCounsellingDept, guidanceCounsellingQuestions, physicalEducationDept, physicalEducationQuestions } from './departments';

export const educationFaculty = {
  id: 'fac-education',
  name: 'Education',
  icon: 'GraduationCap',
  departments: [
    educationalFoundationsDept,
    curriculumStudiesDept,
    guidanceCounsellingDept,
    physicalEducationDept,
  ],
};

export const educationQuestions = [
  ...educationalFoundationsQuestions,
  ...curriculumStudiesQuestions,
  ...guidanceCounsellingQuestions,
  ...physicalEducationQuestions,
];
