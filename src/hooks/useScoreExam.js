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
  } = useContext(ContextProgress);

  const AddIdiom = (idiom, kids) => {
    setObjecIdiom({ idiom, kids });
  };

  const AddStudentFunc = (student) => {
    const { _id } = student;
    // debugger;
    setAddStudent(_id);
  };
  return {
    AddIdiom,
    ObjecIdiom,
    AddStudentFunc,
    AddStudent,
    setStatus,
    Status,
  };
};
