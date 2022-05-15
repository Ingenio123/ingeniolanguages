import StudentContext from "../components/Context/StudentContext";
import axios from "axios";
import { useReducer, useEffect } from "react";
import ReducerStudent from "../redux/reducers/Student";
import URI, { url } from "../components/Urls";

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
      if (res.status === 498) {
        window.location.href = `${URI.urlClient}/expiredToken`;
        window.localStorage.clear();
        return {
          error: true,
          student: false,
        };
      }
      if (res.status >= 400 && res.status < 500) {
        dispatch({ type: "LOADING_KILL" });
        dispatch({ type: "NOT_STUDENT" });
        return {
          error: true,
          student: false,
        };
      }
      const data = await res.json();
      dispatch({ type: "GET_STUDENT", payload: data });
      dispatch({ type: "LOADING_KILL" });
      return {
        error: false,
        student: true,
      };
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
