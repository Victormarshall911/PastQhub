import { architectureDept, architectureQuestions, estateManagementDept, estateManagementQuestions, quantitySurveyingDept, quantitySurveyingQuestions, urbanPlanningDept, urbanPlanningQuestions, buildingDept, buildingQuestions } from './departments';

export const environmentalSciencesFaculty = {
  id: 'fac-environmental',
  name: 'Environmental Sciences',
  icon: 'Building2',
  departments: [
    architectureDept,
    buildingDept,
    estateManagementDept,
    quantitySurveyingDept,
    urbanPlanningDept,
  ],
};

export const environmentalSciencesQuestions = [
  ...architectureQuestions,
  ...buildingQuestions,
  ...estateManagementQuestions,
  ...quantitySurveyingQuestions,
  ...urbanPlanningQuestions,
];
