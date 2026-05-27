import { agriculturalEconomicsDept, agriculturalEconomicsQuestions } from './agricultural-economics';
import { agronomyDept, agronomyQuestions } from './agronomy';
import { animalScienceDept, animalScienceQuestions } from './animal-science';
import { soilScienceDept, soilScienceQuestions } from './soil-science';
import { fisheriesDept, fisheriesQuestions } from './fisheries';
import { forestryDept, forestryQuestions } from './forestry';
import { foodScienceDept, foodScienceQuestions } from './food-science';

export const agricultureFaculty = {
  id: 'fac-agriculture',
  name: 'Agriculture',
  icon: 'Sprout',
  departments: [
    agriculturalEconomicsDept,
    agronomyDept,
    animalScienceDept,
    soilScienceDept,
    fisheriesDept,
    forestryDept,
    foodScienceDept,
  ],
};

export const agricultureQuestions = [
  ...agriculturalEconomicsQuestions,
  ...agronomyQuestions,
  ...animalScienceQuestions,
  ...soilScienceQuestions,
  ...fisheriesQuestions,
  ...forestryQuestions,
  ...foodScienceQuestions,
];
