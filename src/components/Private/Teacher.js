import axios from "axios";
import { isAuth, getCookie } from "../../helpers/Auth";
import { useEffect, useState, useContext } from "react";
import SearchStudent from "./TeacherComponents/SearchStudent";
import { Temary } from "../Private/UserUI/Temary/TemaryForTeachers";
import styled from "styled-components";
import { ProviderCalificacion } from "../Context/CalifcacionContext";
import useCalificacion from "../../hooks/useCalificacion";

import InputSearchElement from "../Search/Search";
import { GetAllStudents } from "../../helpers/User";
import { ProviderCourses } from "../Context/CoursesContext";
import { useCardFeedback } from "../../hooks/useCardFeedBack";
import { SearchComponent } from "./TeacherComponents/SearchComponent";

export const Teacher = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    picture: "",
  });
  // states component Search
  const [ListData, setListData] = useState([]);
  const [search, setSearch] = useState("");
  const [SearchResults, setSearchResults] = useState("");
  // end states component Search
  const token = getCookie("token");
  const { getSummary } = useCardFeedback();

  useEffect(() => {
    const GetAllStudent = async () => {
      const resultado = await GetAllStudents();
      if (resultado && resultado.success) setListData(resultado.students);
    };
    GetAllStudent();
  }, []);

  const searchHandler = (searchTerm) => {
    setSearch(searchTerm);
    console.log(ListData);
    if (search !== "") {
      const newContactList = ListData.filter((value) => {
        return Object.values(value)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
      // console.log("Exist", SearchResults);
    } else {
      setSearchResults([]);
      console.log("Mot Exist");
    }
  };
  //
  const calificacion = useCalificacion();
  const { Sublevel, Level, IdContent } = calificacion;

  return (
    <ProviderCalificacion>
      <Grid className="container">
        <ProviderCourses>
          <SearchComponent data={ListData} placeholder={"Search Student"} />
        </ProviderCourses>
      </Grid>
      <div className="dflex"></div>
    </ProviderCalificacion>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  /* grid-template-columns: 300px 300px auto; */
  column-gap: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
