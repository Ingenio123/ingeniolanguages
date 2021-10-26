import { useCallback, useContext, useState } from "react";
import { GetCourseStudent } from "../services/UserService";
//importamos el contexto de course
import context from "../components/Context/CoursesContext";
import Url from "../components/Urls";
export default function useCourse() {
  const { course, setcourse } = useContext(context);
  const [state, setState] = useState({ loading: undefined, error: false });
  const handleCourse = useCallback(async () => {
    const jsondata = window.localStorage.getItem("user");
    const { token } = JSON.parse(jsondata);
    try {
      const { QueryStudent } = await GetCourseStudent({ token });
      if (QueryStudent) {
        setcourse(QueryStudent);
        setState({ loading: false, error: false });
        return;
      }
      setState({ loading: false, error: false });
    } catch (error) {
      console.log("hay un error", error);
      setState({ loading: true, error: true });
    }
  }, [setcourse]);

  return {
    course,
    handleCourse,
    Loading: state.loading,
    Error: state.error,
  };
}
