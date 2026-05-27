import { accountingDept, accountingQuestions, bankingFinanceDept, bankingFinanceQuestions, businessAdminDept, businessAdminQuestions, marketingDept, marketingQuestions, publicAdminDept, publicAdminQuestions, entrepreneurshipDept, entrepreneurshipQuestions } from './departments';

export const managementSciencesFaculty = {
  id: 'fac-management',
  name: 'Management Sciences',
  icon: 'Briefcase',
  departments: [
    accountingDept,
    bankingFinanceDept,
    businessAdminDept,
    marketingDept,
    publicAdminDept,
    entrepreneurshipDept,
  ],
};

export const managementSciencesQuestions = [
  ...accountingQuestions,
  ...bankingFinanceQuestions,
  ...businessAdminQuestions,
  ...marketingQuestions,
  ...publicAdminQuestions,
  ...entrepreneurshipQuestions,
];
