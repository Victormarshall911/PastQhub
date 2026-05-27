import { englishDept, englishQuestions } from './english';
import { historyDept, historyQuestions } from './history';
import { linguisticsDept, linguisticsQuestions } from './linguistics';
import { philosophyDept, philosophyQuestions } from './philosophy';
import { religiousStudiesDept, religiousStudiesQuestions } from './religious-studies';
import { theatreArtsDept, theatreArtsQuestions } from './theatre-arts';
import { arabicIslamicDept, arabicIslamicQuestions } from './arabic-islamic';

export const artsFaculty = {
  id: 'fac-arts',
  name: 'Arts',
  icon: 'Palette',
  departments: [
    englishDept,
    historyDept,
    linguisticsDept,
    philosophyDept,
    religiousStudiesDept,
    theatreArtsDept,
    arabicIslamicDept,
  ],
};

export const artsQuestions = [
  ...englishQuestions,
  ...historyQuestions,
  ...linguisticsQuestions,
  ...philosophyQuestions,
  ...religiousStudiesQuestions,
  ...theatreArtsQuestions,
  ...arabicIslamicQuestions,
];
