import { useContext, useState } from "react";
import ContextProgress from "../context/ProgressContext";

export const useScoreExam = () => {
  const {
    ObjecIdiom,
    setObjecIdiom,
    setAddStudent,
    AddStudent,
    setStatus,
    Status,
    DataScores,
    setDataScores,
  } = useContext(ContextProgress);

  const AddIdiom = (idiom, kids) => {
    setObjecIdiom({ idiom, kids });
  };

  const AddStudentFunc = (student) => {
    const { _id } = student;
    // debugger;
    setAddStudent(_id);
  };
  const AddDataScoreExam = (data) => {
    setDataScores({ data: data });
  };
  return {
    AddIdiom,
    ObjecIdiom,
    AddStudentFunc,
    AddStudent,
    setStatus,
    Status,
    AddDataScoreExam,
    DataScores,
  };
};
