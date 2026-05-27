import { lawDept1, lawDept1Questions, lawDept2, lawDept2Questions, lawDept3, lawDept3Questions, lawDept4, lawDept4Questions } from './departments';

export const lawFaculty = {
  id: 'fac-law',
  name: 'Law',
  icon: 'Scale',
  departments: [lawDept1, lawDept2, lawDept3, lawDept4],
};

export const lawQuestions = [
  ...lawDept1Questions,
  ...lawDept2Questions,
  ...lawDept3Questions,
  ...lawDept4Questions,
];
