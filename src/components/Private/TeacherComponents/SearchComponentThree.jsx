import styled, { css } from "styled-components";
import { useState, useRef } from "react";
import Select from "react-select";
import { IoLogoYoutube, IoDocumentText } from "react-icons/io5"; // logo de Youtobe
import { FaFilePowerpoint } from "react-icons/fa";
import { MdQuiz, MdModeEdit } from "react-icons/md";
import { AddMAterialsTeacher } from "../../../services/MaterialsHttp";

const options = [
  { value: "A1", label: "A1" },
  { value: "A2", label: "A2" },
  { value: "B1", label: "B1" },
  { value: "B2", label: "B2" },
  { value: "C1", label: "C1" },
  { value: "C2", label: "C2" },
];

export const SearchComponentthree = ({ data }) => {
  //states
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [Item, setItem] = useState({});
  const [Idiom, setIdiom] = useState("");
  const [Kids, setKids] = useState(false);
  const [Icon, setIcon] = useState(false);
  const [Level, setLevel] = useState(false);
  const inputOne = useRef();
  const inputTwo = useRef();
  //end custom hooks

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.email.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleClickItem = (value) => {
    console.log(value);
    setItem(value);
    clearInput();
  };
  const filterData = (id) => {
    // return courses.filter((x) => x._id === id);
    return Item.courses.find((x) => x._id === id);
  };
  const handleSelect = (select) => {
    const { value } = select;

    const datosfiltrados = filterData(value);
    const { score, idiom, kids } = datosfiltrados;
    console.log(idiom);
    setIdiom(idiom);
    setKids(kids);
  };

  const handleSelectLevel = (select) => {
    let { value } = select;
    setLevel(value);
  };
  function SelectArray(dataArray) {
    if (dataArray.length >= 1) {
      const options = dataArray.map((elem) => {
        return {
          value: elem._id,
          label: `${elem.idiom}  ${elem.kids ? "(Kids)" : ""}`,
        };
      });

      return (
        <SelectIdiom
          placeholder="Select package"
          options={options}
          onChange={handleSelect}
        />
      );
    }
    return <span>asdasd</span>;
  }

  const handleItem = (item) => {
    setIcon(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputTitle = inputOne.current.value;
    let inputUrl = inputTwo.current.value;
    //
    let user = JSON.parse(localStorage.getItem("user"));
    let data = {
      id_student: Item._id,
      id_teacher: user._id,
      languages: [
        {
          idiom: Idiom, // ->  data idiom
          kids: Kids,
          material: [
            {
              level_material: Level,
              levels_materials: [
                {
                  type_Material: "624cb382059dbc385c039356",
                  name_material: inputTitle,
                  link_material: inputUrl,
                },
              ],
            },
          ],
        },
      ],
    };
    // console.log(inputTwo.current.value);
    // console.log(inputOne.current.value);
    AddMAterialsTeacher(data);
  };

  // codigo de programacion y maquetacion web

  return (
    <>
      <BoxSearch>
        <ContentBox>
          <TitleSearch>Search student by email</TitleSearch>
          <InputSearch
            onChange={handleFilter}
            value={wordEntered}
            placeholder="Search Student"
          />
          {filteredData.length !== 0 && (
            <DataResult>
              {filteredData.slice(0, 15).map((value, key) => (
                <ItemResult
                  key={key}
                  onClick={() => {
                    handleClickItem(value);
                  }}
                >
                  {value.email}
                </ItemResult>
              ))}
            </DataResult>
          )}
        </ContentBox>
      </BoxSearch>
      <Main>
        <p>
          Name: <TextBold>{Item?.email}</TextBold>
        </p>
        {Object.keys(Item).length >= 1 && SelectArray(Item?.courses)}
        <Select options={options} onChange={handleSelectLevel} />
        <ContentIconsBox>
          <BoxIcons
            active={Icon === "Video" ? true : false}
            onClick={() => handleItem("Video")}
          >
            <IconYoutube />
          </BoxIcons>
          <BoxIcons
            active={Icon === "Document" ? true : false}
            onClick={() => handleItem("Document")}
          >
            <IconText />
          </BoxIcons>
          <BoxIcons
            active={Icon === "Slide" ? true : false}
            onClick={() => handleItem("Slide")}
          >
            <IconSlides />
          </BoxIcons>
          <BoxIcons
            active={Icon === "Quiz" ? true : false}
            onClick={() => handleItem("Quiz")}
          >
            <IconQuiz />
          </BoxIcons>
          <BoxIcons
            active={Icon === "Homework" ? true : false}
            onClick={() => handleItem("Homework")}
          >
            <IconHomeWork />
          </BoxIcons>
        </ContentIconsBox>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputGroups>
            <span class="input-group-addon">{Icon}:</span>
            <input type="text" ref={inputOne} />
          </InputGroups>
          <InputGroupsUI>
            <label>Url</label>
            <input
              type="text"
              ref={inputTwo}
              placeholder="https://www.example.com"
            />
          </InputGroupsUI>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ButtonSubmit type="submit">Submit</ButtonSubmit>
          </div>
        </form>
      </Main>
      {/* <ModalWrap>
        <CardModal>
          <button className="goback">Go Back</button>
        </CardModal>
      </ModalWrap> */}
    </>
  );
};

// codigo de estilo

const styleIcons = css`
  height: 25px;
  width: 25px;
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardModal = styled.div`
  background-color: #fff;
  width: 40%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  .header {
    border-bottom: 1px solid silver;
    font-size: 1.5rem;
  }
  .goback {
    background-color: black;
    color: #fff;
  }
`;

const ButtonSubmit = styled.button`
  color: #fff;
  background: #2980b9;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
  min-width: 250px;
  :hover {
    background-color: #3498db;
  }
`;
//
const ContentIconsBox = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  column-gap: 1rem;
`;

const IconYoutube = styled(IoLogoYoutube)`
  ${styleIcons};
`;
const IconText = styled(IoDocumentText)`
  ${styleIcons};
`;
const IconSlides = styled(FaFilePowerpoint)`
  ${styleIcons};
`;
const IconQuiz = styled(MdQuiz)`
  ${styleIcons};
`;
const IconHomeWork = styled(MdModeEdit)`
  ${styleIcons};
`;
//
const BoxIcons = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.8s ease;
  border-radius: 3px;
  box-shadow: -3px 5px 9px -3px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  background-color: ${({ active }) => (active ? "#2979ff" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#9e9e9e")};
  :hover {
    background-color: #2979ff;
    color: #fff;
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  /* border: 1px solid red; */
  position: relative;
`;
const TitleSearch = styled.h2`
  font-size: 1.25rem;
  margin: 0;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const SelectIdiom = styled(Select)`
  width: 100%;
  margin-bottom: 1rem;
`;

const ItemResult = styled.p`
  margin: 0;
  line-height: 1.3;
  margin-bottom: 0.2rem;
  padding: 0.3rem 0.2rem;
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const DataResult = styled.div`
  border: 1px solid silver;
  border-top: none;
  z-index: 9;
  background-color: #fff;
  width: 100%;
  padding: 0.5rem;
  z-index: 999;
`;
const BoxSearch = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: 300px 300px auto;
  column-gap: 1rem;
  margin-top: 2rem;
`;

const InputSearch = styled.input`
  padding: 0.5rem;
  border: 0.5px solid silver;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  line-height: normal;
  width: 100%;

  ::placeholder {
    color: silver;
  }
  :focus {
    border: 2px solid #2989ff;
  }
`;

const Main = styled.div`
  border: 1px solid silver;
  width: 50%;
  border-radius: 0.5rem;
  padding: 0.8rem;
  background-color: #f4f4f5;
  margin-top: 1rem;
  p {
    line-height: normal;
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`;
const TextBold = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;
const InputGroups = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: stretch;
  span {
    font-size: 1rem;
  }
  input {
    border: 1px solid silver;
    font-size: 1rem;
    padding: 0.3rem;
    width: calc(100% - 92px);
    color: #7f8c8d;
  }
  .input-group-addon {
    border: none;
    padding: 0 0.3rem;
    background-color: #a8a29e;
    color: #fff;
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;
const InputGroupsUI = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 1rem;
    margin: 0.3rem 0;
    color: #2c3e50;
    font-weight: 600;
  }
  input {
    background-color: #fff;
    border: 1px solid silver;
    padding: 0.3rem;
    font-size: 1rem;
    border-radius: 0.3rem;
    color: #7f8c8d;
  }
`;
