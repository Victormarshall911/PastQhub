import { mechanicalEngineeringDept, mechanicalEngineeringQuestions, electricalEngineeringDept, electricalEngineeringQuestions, agriculturalEngineeringDept, agriculturalEngineeringQuestions } from './mechanical';
import { civilEngineeringDept, civilEngineeringQuestions, chemicalEngineeringDept, chemicalEngineeringQuestions, computerEngineeringDept, computerEngineeringQuestions, petroleumEngineeringDept, petroleumEngineeringQuestions, metallurgicalEngineeringDept, metallurgicalEngineeringQuestions } from './departments';

export const engineeringFaculty = {
  id: 'fac-engineering',
  name: 'Engineering',
  icon: 'Wrench',
  departments: [
    civilEngineeringDept,
    mechanicalEngineeringDept,
    electricalEngineeringDept,
    chemicalEngineeringDept,
    computerEngineeringDept,
    petroleumEngineeringDept,
    agriculturalEngineeringDept,
    metallurgicalEngineeringDept,
  ],
};

export const engineeringQuestions = [
  ...civilEngineeringQuestions,
  ...mechanicalEngineeringQuestions,
  ...electricalEngineeringQuestions,
  ...chemicalEngineeringQuestions,
  ...computerEngineeringQuestions,
  ...petroleumEngineeringQuestions,
  ...agriculturalEngineeringQuestions,
  ...metallurgicalEngineeringQuestions,
];
