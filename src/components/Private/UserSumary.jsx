import StudentState from "../../hooks/useStudent";
import SectionCards from "./SummaryUi/Cardssummary";
export default function UserSumary() {
  return (
    <StudentState>
      <SectionCards />
    </StudentState>
  );
}
