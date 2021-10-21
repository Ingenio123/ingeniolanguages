import axios from "axios";
import { isAuth, getCookie } from "../../helpers/Auth";
import { useEffect, useState } from "react";
import SearchStudent from "./TeacherComponents/SearchStudent";
import { Temary } from "../Private/UserUI/Temary/TemaryForTeachers";
import styled from "styled-components";
import { ProviderCalificacion } from "../Context/CalifcacionContext";
import useCalificacion from "../../hooks/useCalificacion";

export const Teacher = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    picture: "",
  });

  const [search, setSearch] = useState(null);
  const token = getCookie("token");

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

  const handleSearch = (data) => {
    setSearch(data);
  };
  const calificacion = useCalificacion();
  const { Sublevel, Level, IdContent } = calificacion;

  return (
    <ProviderCalificacion>
      <Grid className="container">
        <Temary
          UseTeacher={true}
          Sublevel={Sublevel}
          Level={Level}
          IdContent={IdContent}
        />
        <SearchStudent handleSearch={handleSearch} />
      </Grid>
      <div className="dflex"></div>
    </ProviderCalificacion>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
