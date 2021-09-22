import { useContext } from "react";
import { StudentContext } from "../components/Context/StudentContext";

export default function UseStudent() {
  const data_student = useContext(StudentContext);
}
