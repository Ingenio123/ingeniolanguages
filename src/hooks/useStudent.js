import StudentContext from "../components/Context/StudentContext";
import axios from "axios";
import { useReducer } from "react";
import ReducerStudent from "../redux/reducers/Student";
import { url } from "../components/Urls";

const StudentState = (props) => {
  const EndPoint = url + "/data/verifyIstudent";
  const initialState = {
    student: null,
  };
  const [state, dispatch] = useReducer(ReducerStudent, initialState);
  const getStudent = async () => {
    try {
      var Token = window.localStorage.getItem("user");
      Token = JSON.parse(Token).token;
      const res = await axios.get(EndPoint, {
        headers: {
          authorization: `Bearer ${Token}`,
        },
      });
      const data = res.data;
      dispatch({ type: "GET_STUDENT", payload: data });
    } catch (error) {
      if (error.response.status || error)
        return dispatch({ type: "ERROR_STUDENT" });
    }
  };
  return (
    <StudentContext.Provider
      value={{
        student: state.student,
        getStudent,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
