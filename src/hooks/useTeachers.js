import { useContext } from "react";
import ContextTeacher from "../components/Context/TeacherContext";
import { url } from "../components/Urls";

const Endpoint = url;
export default function UseTeachers() {
  const { idIdiom, Teachers, setidIdiom, setTeachers } =
    useContext(ContextTeacher);
  const GetTeachers = async (params, idiom) => {
    console.log(params, idiom);
    try {
      const res = await fetch(`${Endpoint}/data/courses?idiom=${idiom}`);
      const data = await res.json();
      console.log(data);
      setTeachers(data.datos);
      setidIdiom(idiom);
    } catch (error) {
      console.log(error);
    }
  };
  return { idIdiom, Teachers, GetTeachers };
}
