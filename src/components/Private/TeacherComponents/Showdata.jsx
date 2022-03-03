import Data from "./Levels.json";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import SelectReact from "react-select";
//custom hooks
import useSearch from "../../../hooks/useSearch";

export const Showdata = (datstudent) => {
  const [DateCalendar, setDateCalendar] = useState(new Date());
  const [values, setValues] = useState({
    comments: "",
    summary: "",
  });
  //
  const formatDate = (date) => {
    const fecha = new Date(date);
    // fecha.toLocaleFormat("%d-%b-%Y"); // 30-Dec-2011
    const y = fecha.getFullYear();
    const d = fecha.getDate();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const m = fecha.getMonth();
    const month = months[m];
    const dayIndex = fecha.getDay();
    const dayName = days[dayIndex];
    const formatted = `${dayName}, ${d} ${month} ${y}`;
    return formatted;
  };
  const { email, courses } = datstudent.datstudent;
  // custom hooks
  const { getData, data, StateSelect, SlectIdiomCallback, handleSubmit } =
    useSearch();
  const filterData = (id) => {
    // return courses.filter((x) => x._id === id);
    return courses.find((x) => x._id === id);
  };

  const handleSelect = (select) => {
    const { value } = select;
    const datosfiltrados = filterData(value);
    getData(datosfiltrados);
    SlectIdiomCallback(select);
  };

  const ShowDataArray = (dataArray) => {
    const options = dataArray.map((elem) => {
      return {
        value: elem._id,
        label: `${elem.idiom}  ${elem.kids ? "(Kids)" : ""}`,
      };
    });

    if (dataArray.length > 1) {
      return (
        <SelectReact
          options={options}
          placeholder="Select Package"
          onChange={handleSelect}
          value={StateSelect.idiom}
        />
      );
    }
    return (
      <>
        <BoxCalendar>
          <TextBold> Date: </TextBold>
          <DatePickerStyle
            selected={DateCalendar}
            onChange={(date) => setDateCalendar(date)}
          />
        </BoxCalendar>
        <Itemsdata>
          <TextBold>language: </TextBold>
          <TextNormal>
            {dataArray[0].idiom} {dataArray[0].kids && "(Kids)"}
          </TextNormal>
        </Itemsdata>
        <Itemsdata>
          <TextBold>Number of Months: </TextBold>
          <TextNormal>
            {dataArray[0].months} {dataArray[0].months > 1 ? "months" : "month"}
          </TextNormal>
        </Itemsdata>
        <Itemsdata>
          <TextBold>Duration of each lesson: </TextBold>
          <TextNormal>{dataArray[0].time} minutes </TextNormal>
        </Itemsdata>
        <Itemsdata>
          <TextBold>Active plan: </TextBold>
          <TextNormal>
            {dataArray[0].lesson}
            {dataArray[0].lesson > 1 ? " lessons" : " lesson"}
          </TextNormal>
        </Itemsdata>
        <Itemsdata>
          <TextBold>Remaining lesson: </TextBold>
          <TextNormal>
            {dataArray[0].lessonTotal}
            {dataArray[0].lessonTotal > 1 ? " lessons" : " lesson"}
          </TextNormal>
        </Itemsdata>
        <Itemsdata>
          <TextBold>Expiration date: </TextBold>
          <TextNormal>{formatDate(dataArray[0].expiresCours)} </TextNormal>
        </Itemsdata>
      </>
    );
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmitPage = (e) => {
    e.preventDefault();
    handleSubmit({ values, DateCalendar });
  };

  return (
    <BoxData>
      <Itemsdata border__bottom={true}>
        <TextBold>Student: </TextBold>
        <TextNormal>{email} </TextNormal>
      </Itemsdata>
      {ShowDataArray(courses)}
      {Object.keys(data).length !== 0 && (
        <>
          <BoxCalendar>
            <TextBold> Date: </TextBold>
            <DatePickerStyle
              selected={DateCalendar}
              onChange={(date) => setDateCalendar(date)}
            />
          </BoxCalendar>
          <Itemsdata>
            <TextBold>Number of Months: </TextBold>
            <TextNormal>
              {data.months} {data.months > 1 ? "months" : "month"}
            </TextNormal>
          </Itemsdata>
          <Itemsdata>
            <TextBold>Duration of each lesson: </TextBold>
            <TextNormal>{data.time} minutes</TextNormal>
          </Itemsdata>
          <Itemsdata>
            <TextBold>Active plan: </TextBold>
            <TextNormal>
              {data.lesson} {data.lesson > 1 ? "lessons" : "lesson"}
            </TextNormal>
          </Itemsdata>
          <Itemsdata>
            <TextBold>Remaining lesson: </TextBold>
            <TextNormal>
              {data.lessonTotal} {data.lessonTotal > 1 ? " lessons" : " lesson"}
            </TextNormal>
          </Itemsdata>
          <Itemsdata>
            <TextBold>Expiration date: </TextBold>
            <TextNormal>{formatDate(data.expiresCours)}</TextNormal>
          </Itemsdata>
        </>
      )}
      <form onSubmit={(e) => handleSubmitPage(e)}>
        <ItemsCard block={true} mt={true}>
          <ResumenLabel htmlFor="resumen">Class summary</ResumenLabel> <br />
          <TextLarge
            id="resumen"
            cols="45"
            placeholder="Type in the summary of your lesson"
            value={values.summary}
            onChange={(e) => handleOnChange(e)}
            name="summary"
          ></TextLarge>
        </ItemsCard>
        <ItemsCard block={true}>
          <ResumenLabel htmlFor="comments">Class comments</ResumenLabel> <br />
          <TextLarge
            id="comments"
            cols="45"
            value={values.comments}
            onChange={(e) => handleOnChange(e)}
            name="comments"
            placeholder="Type in the comments of your lesson"
          ></TextLarge>
        </ItemsCard>
        <ButtonSubmit>Submit</ButtonSubmit>
      </form>
    </BoxData>
  );
};

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

const BoxData = styled.div`
  border: 1px solid silver;
  border-radius: 8px;
  width: 90%;
  padding: 1rem;
  margin-top: 1rem;
`;
const Itemsdata = styled.div`
  border-bottom: ${(props) =>
    props.border__bottom ? "none" : "1px solid silver"};
  font-size: 1rem;
  margin-bottom: 0.2rem;
`;

const TextBold = styled.span`
  font-weight: 600;
`;
const TextNormal = styled.span``;

const DatePickerStyle = styled(DatePicker)`
  padding: 0.2rem 0;
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
const BoxCalendar = styled.div`
  font-size: 1rem;
  display: flex;
  margin: 1rem 0 0 0;
`;
const ItemsCard = styled.div`
  width: 100%;
  display: ${(props) => (props.block ? "block" : "flex")};
  justify-content: ${(props) => (props.start ? "flex-start" : "end")};
  align-items: center;
  ${(props) => props.mt && "margin-top: 1rem"};
  & > p {
    margin: 0;
    border: ${(props) => (props.border ? "1px solid black" : "none")};
    line-height: 1;
    padding: 0.4rem 0;
    color: #314584;
  }
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
const ButtonSubmit = styled.button`
  margin-top: 1rem;
  background-color: #1d4ed8;
  color: #fff;
  padding: 0.6rem;
  font-size: 1rem;
  line-height: normal;
  border-radius: 5px;
  /* min-width: 120px; */
  width: 200px;
  margin-left: auto;
  :hover {
    cursor: pointer;
    background-color: #2563eb;
  }
`;
