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

  useEffect(() => {
    const GetAllStudent = async () => {
      const resultado = await GetAllStudents();
      if (resultado && resultado.success) setListData(resultado.students);
    };
    GetAllStudent();
  }, []);

  const loadPagage = async () => {
    axios
      .get(`https://www.ingenioapi.com/teacherAccount/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { username, email, picture } = res.data;
        setFormData({ ...formData, name: username, email, picture });
      })
      .catch((err) => console.log(`err ${err}`));
  };

  const searchHandler = (searchTerm) => {
    setSearch(searchTerm);
    console.log(ListData);
    if (search !== "") {
      const newContactList = ListData.filter((value) => {
        // console.log("valore", value.FirstName);
        // return value.FirstName.toLowerCase().includes(searchTerm.toLowerCase());
        return Object.values(value)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
      console.log("Exist", SearchResults);
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
          <SearchStudent handleSearch={searchHandler} />
        </ProviderCourses>

        <Temary
          margin="0 0 0 0"
          column={true}
          // UseTeacher={true}
          // Sublevel={Sublevel}
          // Level={Level}
          // IdContent={IdContent}
        />
      </Grid>
      <div className="dflex"></div>
    </ProviderCalificacion>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
