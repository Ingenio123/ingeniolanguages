import { useState } from "react";
import styled from "styled-components";
import { IoSearch, IoCheckmarkSharp } from "react-icons/io5";
import { BsFillUnlockFill, BsLockFill } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { useEffect, useContext } from "react";
import axios from "axios";
import { getCookie } from "../../../helpers/Auth";
import Url from "../../Urls";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCalficicaion from "../../../hooks/useCalificacion";
import ComponentSearch from "../../Search/Search";
import { GetAllStudents } from "../../../helpers/User";
import ContextCourse from "../../Context/CoursesContext";
import ComponentSelect from "../../ComponentTeachers/Calificacion";
import { Qualification } from "../../../services/teacherqualification";
import Data from "./Levels.json";
//
import { BiCheck } from "react-icons/bi";
//

function SearchStudent({ handleSearch }) {
  const [DateCalendar, setDateCalendar] = useState(new Date());
  const [SummaryInput, setSummaryInput] = useState("");
  const [Comments, setComments] = useState("");

  // states del Component Search
  const [search, setSearch] = useState("");
  const [SearchResults, setSearchResults] = useState("");
  const [ListData, setListData] = useState([]);
  const [Idiom, setIdiom] = useState(null);
  const [Score, setScore] = useState(0);
  const [Kids, setKids] = useState(false);

  const courseContext = useContext(ContextCourse);
  const { course } = courseContext;
  // effect  get Students
  useEffect(() => {
    const GetStudents = async () => {
      const resultado = await GetAllStudents();
      if (resultado && resultado.success) setListData(resultado.students);
    };
    GetStudents();
    // loadStudents();
  }, []);

  // fUNCTION SEARCH  DEL COMPONENT SEARCH
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

  // #####################################

  // #################################################

  // #################################################

  const handleChangeSummary = (e) => {
    setSummaryInput(e.target.value);
  };
  const handleChangeComments = (e) => {
    setComments(e.target.value);
  };

  // #######################################

  const handleSend = async () => {
    const value = {
      date: DateCalendar,
      SummaryInput,
      Comments,
      Name: course ? course.FirstName || course.email : null,
      idiom: Idiom ? Idiom : course.courses[0].idiom,
      email: course ? course.email : null,
      score: Score ? Score : 0,
      kids: Kids,
    };
    // const data = await Qualification(value);
    await Qualification(value);
  };
  // ##########################################
  const handleScore = (puntaje) => {
    return setScore(puntaje);
  };
  // ########################################
  const resetInput = () => {};

  const handleSelect = async (obj) => {
    const datos = await course.courses.find((elem) => elem._id === obj);
    // console.log(datos);
    setIdiom(datos.idiom);
    setKids(datos.kids);
  };

  return (
    <Content>
      <ComponentSearch
        context={courseContext}
        placeholder="Search student"
        listStudent={search.length < 1 ? [] : SearchResults}
        term={search}
        searchKeyword={searchHandler}
        resetInput={resetInput}
      />

      <BoxExample>
        <BoxCardStudent>
          <ItemsCard start={true}>
            <DateText>Date </DateText>
            <DatePickerStyle
              selected={DateCalendar}
              onChange={(date) => setDateCalendar(date)}
            />
          </ItemsCard>
          {/* start Datos Estaticos  */}
          <ItemsCard block>
            <p>
              <TextBold>Name or Email: </TextBold>
              {course ? course.FirstName || course.email : null}
            </p>
            <p>
              {course && course.courses && (
                <>
                  <TextBold>
                    {course.courses.length > 1 ? "Select Package" : null}
                  </TextBold>
                  <ComponentSelect
                    data={course.courses}
                    handleSelect={handleSelect}
                    setIdiom={setIdiom}
                  />
                </>
              )}
            </p>
          </ItemsCard>
          {/* end Datos Estaticos */}

          <ItemsCard block={true}>
            <ResumenLabel htmlFor="resumen">Class summary</ResumenLabel> <br />
            <TextLarge
              id="resumen"
              cols="45"
              value={SummaryInput}
              onChange={(e) => handleChangeSummary(e)}
              placeholder="Type in the summary of your lesson"
            ></TextLarge>
          </ItemsCard>
          <ItemsCard block={true}>
            {" "}
            <ResumenLabel htmlFor="observacion">
              Comments
            </ResumenLabel> <br />{" "}
            <TextLarge
              id="observacion"
              cols="45"
              value={Comments}
              onChange={(e) => handleChangeComments(e)}
              placeholder="Type in the comments of your lesson"
            ></TextLarge>
          </ItemsCard>
          {/* Data levels  */}
          {Data.map((item) => (
            <Centrar>
              <h6>{item.name_level}</h6>
              <StepProgress>
                <Progress style={{ width: "0%" }}></Progress>
                {item.sub_level.map((itemsub) => (
                  <>
                    <Circle active={Score >= itemsub.puntuacion}>
                      <span>{itemsub.sublevel} </span>
                    </Circle>
                    {itemsub.content.map((itemcontent) => (
                      <CircleItem
                        onClick={() => handleScore(itemcontent.puntuacion)}
                        active={Score >= itemcontent.puntuacion ? true : false}
                      >
                        {Score >= itemcontent.puntuacion && <IconVisto />}
                      </CircleItem>
                    ))}
                  </>
                ))}
              </StepProgress>
            </Centrar>
          ))}
          <ItemsCard>
            <ButtonSend onClick={handleSend}>Send</ButtonSend>
          </ItemsCard>
        </BoxCardStudent>
      </BoxExample>
    </Content>
  );
}

export default SearchStudent;

const IconVisto = styled(BiCheck)`
  color: #fff;
  font-size: 1.5rem;
`;

const Centrar = styled.div`
  width: 100%;

  border: 1px solid silver;
  padding: 1rem;
  border-radius: 0.3rem;
  h6 {
    padding: 0;
    line-height: normal;
    text-align: center;
    margin: 0;
  }
`;

const StepProgress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 100%;
  width: 100%;
  &::before {
    content: "";
    background-color: #a1a1aa;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: 1;
  }
`;
const Progress = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  z-index: 1;
  transition: 0.4s ease;
  background-color: #283593;
`;

const Circle = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.912rem;
  border: 2px solid ${({ active }) => (active ? "#16A34A" : "#A1A1AA")};
  border-radius: 50%;
  transition: 0.4s ease;
  color: ${(props) => (props.active ? " #fff" : "#283593")};
  background: ${({ active }) => (active ? "#16A34A" : "#fff")};
  z-index: 9;
`;

const CircleItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: white;
  z-index: 9;
  border: 2px solid ${({ active }) => (active ? "#16A34A" : "#A1A1AA")};
  background-color: ${(props) => (props.active ? "#16A34A" : "#fff")};
  :hover {
    cursor: pointer;
  }
`;

const CardGridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.2rem;
`;

const ContentItems = styled.div`
  padding: 0.5rem;

  .items__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      color: #242328;
      font-size: 0.8rem;
      font-weight: 600;
    }

    label {
      display: inline-block;
      cursor: pointer;
      position: relative;
      padding: 0.2rem 1rem;
      border-radius: 5px;
      transition: all 0.3s ease;
      border: 2px solid #2980b9;
    }

    input[type="checkbox"] {
      display: none;
      &:checked + label:before {
        display: none;
      }
      &:checked + label {
        background-color: #2980b9;
        color: #fff;
      }
    }
  }
  .item__body {
    padding: 0.5rem 0 0.5rem 1rem;
    .items__individual {
      font-size: 0.9rem;
    }
  }
`;

const Line = styled.hr`
  margin: 0;
  margin: 0.3rem 0;
`;

// ##########################

const BoxLevels = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  margin: 10px 0 40px;
  gap: 5px;
`;

const ItemLevels = styled.div`
  display: flex;
  ${"" /* justify-content:space-around; */}
  justify-content:space-between;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  padding: 4px 8px;
  background: ${(props) => (props.active ? "#314584" : "rgba(0,0,0,.4)")};
`;
const NameLevel = styled.span`
  font-size: 1rem;
  color: ${(props) => (props.active ? "white" : "rgba(0,0,0,.6)")};
`;
const ButtonRevised = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${(props) => (props.active ? "#44bd32" : "white")};
`;
const ButtonRevisedYellow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${(props) => (props.active ? "white" : "white")};
`;
const IconRevised = styled(IoCheckmarkSharp)`
  font-size: 12px;
  color: ${(props) => (props.active ? "white" : "rgba(0,0,0,.3)")};
`;

const IconUnLock = styled(BsFillUnlockFill)`
  font-size: 12px;
  color: ${(props) => (props.active ? "rgba(0,0,0,.6)" : "rgba(0,0,0,1)")};
`;

const IconLock = styled(BsLockFill)`
  font-size: 12px;
  color: ${(props) => (props.active ? "rgba(0,0,0,.6)" : "rgba(0,0,0,.6)")};
`;
// #####  TIME LINE ##########

const BoxTimeLine = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  margin: 10px;
`;
const CircleTimeLine = styled.div`
  ${"" /* justify-self:center; */}
  width:20px;
  height: 20px;
  background: ${(props) => (props.check ? "#66C958" : "#919191")};
  border: 2px solid white;
  border-radius: 50%;
  z-index: 99999;
  cursor: pointer;
  position: relative;
  &::before {
    display: block;
    position: absolute;
    content: "";
    background: rgba(145, 145, 1145, 0.4);
    width: 50px;
    height: 4px;
    left: 14px;
    top: 6px;
  }
`;
// const Line = styled.hr  `
//   position:relative;
//   top:-19px;
//   z-index:0;
//   background:rgba(49,69,132,.5);
//   width:75%;
//   height:2px;
//   margin: 0 auto ;
// `

// ##########################

const Form = styled.form`
  display: flex;
  justify-content: flex-end;
`;

// const SearchBox = styled.div`
//   position: relative;
//   border: 1px solid red;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 250px;
//   background: #314584;
//   padding: 4px;
//   padding-right: 0;
//   border-radius: 30px;
// `;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
`;

const Input = styled.input`
  background: transparent;
  width: 200px;
  color: white;
  border: none;
  padding-left: 10px;
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
`;
const IconSearch = styled(IoSearch)`
  margin: 0 auto;
  color: #314584;
`;

const BoxFatter = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`;

const BoxSearch = styled.div`
  position: absolute;
  display: flex;
  width: 250px;
  max-height: 120px;
  background: #fff;
  overflow: auto;
  z-index: 1;
  &::-webkit-scrollbar {
    background: rgba(0, 0, 0, 0.3);
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #314584;
  }
`;

const ItemsSearch = styled.p`
  width: 100%;
  padding-left: 16px;
  color: black;
  z-index: 1;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const BoxExample = styled.div`
  ${"" /* background:green; */}
  width:100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 40px;
`;

const BoxCardStudent = styled.div`
  ${"" /* display:none; */}
  width:100%;
  background: #f4f4f5;
  grid-column: 1/3;
  border-radius: 8px;
  border: 1px solid #a1a1aa;
  justify-self: end;
  padding: 0.5rem;
`;

const ItemsCard = styled.div`
  width: 100%;
  display: ${(props) => (props.block ? "block" : "flex")};
  justify-content: ${(props) => (props.start ? "flex-start" : "end")};
  align-items: center;
  padding: 10px;
  padding-bottom: 0;
  & > p {
    margin: 0;
    border: ${(props) => (props.border ? "1px solid black" : "none")};
    line-height: 1;
    padding: 0.4rem 0;
    color: #314584;
  }
`;
const ButtonSend = styled.button`
  padding: 0.4rem 1.3rem;
  background-color: #1d4ed8;
  color: #fff;
  border: none;
  outline: none;
  font-weight: 500;
  border-radius: 5px;
  letter-spacing: 1px;
  font-family: sans-serif;
  :hover {
    background-color: #2563eb;
  }
`;
const TextBold = styled.span`
  font-weight: 600;
`;

const ItemText = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;
const InputFecha = styled.input`
  color: #314584;
  width: 100px;
  background: none;
  border: none;
  padding: 5px;
  margin-left: 5px;
`;
const ResumenLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  font-size: 1.1rem;
`;
const TextLarge = styled.textarea`
  background: transparent;
  color: #314584;
  border: 1px solid rgba(49, 69, 132, 0.6);
  outline: none;
  resize: none;
  padding: 5px;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.1;
  &:focus {
    border: 1px solid #00a1f1;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px gray;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #314584;
  }
`;

const Select = styled.select`
  padding: 0.2rem 1rem 0.2rem 0;
  font-size: 1rem;
  color: #546e7a;
  border-radius: 4px;
  width: 50%;
  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(#0077ff, 0.2);
  }
`;
const Options = styled.option``;

const DatePickerStyle = styled(DatePicker)`
  margin-left: 10px;
  padding: 0.5rem 0;
  padding-right: 1rem;
  padding-left: 0.5rem;
  color: #455a64;
  border: 1px solid #b0bec5;
  font-size: 1rem;
  line-height: 1;
  border-radius: 0.2rem;
  &:focus {
    outline: none;
    border: 1px solid #1565c0;
  }
`;
const DateText = styled.span`
  color: #314584;
  line-height: 1;
  font-size: 1rem;
  font-weight: 700;
`;

const Content = styled.div`
  position: relative;
`;
