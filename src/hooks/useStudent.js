import StudentContext from "../components/Context/StudentContext";
import axios from "axios";
import { useReducer, useEffect } from "react";
import ReducerStudent from "../redux/reducers/Student";
import { url } from "../components/Urls";

const StudentState = (props) => {
  const EndPoint = url + "/data/verifyIstudent";

  const initialState = {
    student: null,
    loading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(ReducerStudent, initialState);

  const getStudent = async () => {
    try {
      var Token = window.localStorage.getItem("user");
      Token = JSON.parse(Token).token;
      dispatch({ type: "LOADING_STUDENT" });
      const res = await fetch(EndPoint, {
        headers: {
          authorization: `Bearer ${Token}`,
        },
      });
      if (res.status >= 400 && res.status < 500) {
        return dispatch({ type: "NOT_STUDENT" });
      }
      const data = await res.json();
      dispatch({ type: "GET_STUDENT", payload: data });
    } catch (error) {
      console.log("Err student", error);
    }
  };
  useEffect(() => {
    getStudent();
  }, []);
  return (
    <StudentContext.Provider
      value={{
        student: state.student,
        loading: state.loading,
        error: state.error,
        getStudent,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
