import { clinicalPharmacyDept, clinicalPharmacyQuestions, pharmacologyDept, pharmacologyQuestions, pharmaceuticsDept, pharmaceuticsQuestions, pharmacognosyDept, pharmacognosyQuestions } from './departments';

export const pharmacyFaculty = {
  id: 'fac-pharmacy',
  name: 'Pharmacy',
  icon: 'Pill',
  departments: [
    clinicalPharmacyDept,
    pharmacologyDept,
    pharmaceuticsDept,
    pharmacognosyDept,
  ],
};

export const pharmacyQuestions = [
  ...clinicalPharmacyQuestions,
  ...pharmacologyQuestions,
  ...pharmaceuticsQuestions,
  ...pharmacognosyQuestions,
];
