import SectionCards from "./SummaryUi/Cardssummary";
import { ProviderCourses } from "../Context/CoursesContext";

export default function UserSumary() {
  return (
    <ProviderCourses>
      <SectionCards />
    </ProviderCourses>
  );
}
