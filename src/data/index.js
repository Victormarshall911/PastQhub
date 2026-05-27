import { agricultureFaculty, agricultureQuestions } from './faculties/agriculture';
import { artsFaculty, artsQuestions } from './faculties/arts';
import { basicMedicalSciencesFaculty, basicMedicalSciencesQuestions } from './faculties/basic-medical-sciences';
import { educationFaculty, educationQuestions } from './faculties/education';
import { engineeringFaculty, engineeringQuestions } from './faculties/engineering';
import { environmentalSciencesFaculty, environmentalSciencesQuestions } from './faculties/environmental-sciences';
import { lawFaculty, lawQuestions } from './faculties/law';
import { managementSciencesFaculty, managementSciencesQuestions } from './faculties/management-sciences';
import { medicineFaculty, medicineQuestions } from './faculties/medicine';
import { pharmacyFaculty, pharmacyQuestions } from './faculties/pharmacy';
import { scienceFaculty, scienceQuestions } from './faculties/science';
import { socialSciencesFaculty, socialSciencesQuestions } from './faculties/social-sciences';
import { veterinaryMedicineFaculty, veterinaryMedicineQuestions } from './faculties/veterinary-medicine';

export const initialData = {
  faculties: [
    agricultureFaculty,
    artsFaculty,
    basicMedicalSciencesFaculty,
    educationFaculty,
    engineeringFaculty,
    environmentalSciencesFaculty,
    lawFaculty,
    managementSciencesFaculty,
    medicineFaculty,
    pharmacyFaculty,
    scienceFaculty,
    socialSciencesFaculty,
    veterinaryMedicineFaculty,
  ],
  questions: [
    ...agricultureQuestions,
    ...artsQuestions,
    ...basicMedicalSciencesQuestions,
    ...educationQuestions,
    ...engineeringQuestions,
    ...environmentalSciencesQuestions,
    ...lawQuestions,
    ...managementSciencesQuestions,
    ...medicineQuestions,
    ...pharmacyQuestions,
    ...scienceQuestions,
    ...socialSciencesQuestions,
    ...veterinaryMedicineQuestions,
  ],
};
