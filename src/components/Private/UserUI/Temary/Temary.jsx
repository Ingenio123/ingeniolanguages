import "./Temary.scss";
import { BiChevronUp, BiCheckCircle } from "react-icons/bi";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { ContextCardIdiom } from "../../../../context/CardIdiomContext";
import ContextStudent from "../../../Context/StudentContext";

export const Temary = (props) => {
  const [Valor, setValor] = useState([]);
  const [ClickPrimary, setClickPrimary] = useState(false);
  const [ClickSecondary, setClickSecondary] = useState(false);
  const FormRef = useRef();
  const { Student } = useContext(ContextCardIdiom);
  const StudentContext = useContext(ContextStudent);
  const GetDataTemary = async () => {
    const Enpoint = "https://www.ingenioapi.com/temary/getTemary";

    const res = await axios.get(Enpoint);

    setValor(res.data.temary);
  };

  useEffect(() => {
    GetDataTemary();
    console.log(StudentContext);
  }, []);
  const togglePrimary = (index) => {
    if (ClickPrimary === index) {
      return setClickPrimary(null);
    }
    setClickPrimary(index);
  };
  const toggleSecondary = (index) => {
    if (ClickSecondary === index) {
      return setClickSecondary(null);
    }
    setClickSecondary(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <TemaryLayout className="l-section s-border md-pxy brd-radius">
      <div className="  al-center header_temary">
        {/* {StudentContext.student.QueryStudent.courses[0].idiom ? (
          <h2 className="mb-0">
            {StudentContext.student.QueryStudent.courses[0].idiom} course
            content
          </h2>
        ) : (
          <h2 className="mb-0">{Student || "Spanish"} course content </h2>
        )} */}
        <h2
          className={(props.textSacramento ? "font_sacramento " : "") + "mb-1"}
        >
          {props.idiom || "English"} {props.kids && "(kids)"} learning plan
        </h2>
        {/* <div>
          <InputSearch
            type="search"
            className="input-form"
            placeholder="Search"
          />
        </div> */}
      </div>

      {/* <div className="md-px-0 ">
        <div className="s-mb-2 s-cross-center progress-bar s-py-1">
          <div className="progress-bar__bar"></div>
          <span className="progess-bar__percentage small">0% Completed</span>
        </div>
      </div> */}
      {/* contents */}
      <div className="dgrid lgrid card-template row-gap s-gap-0 s-py-1 ">
        {Valor.map((item, key) => (
          <div key={key}>
            <div className="article s-mb-0 s-borderline-left green-400 s-px-2">
              <div
                className="s-cursor-pointer"
                onClick={() => togglePrimary(key)}
              >
                <div className="dflex s-cross-center nowrap s-mb-0 spc-between">
                  <h3 className="course-class__temary-title s-mb-0 s-mr-1">
                    {item.name_level}
                  </h3>

                  <div className="s-cross-center s-px-05 s-radius s-bg-green-100 s-dark-bg-green-900"></div>

                  <div className="s-cross-center nowrap s-to-right">
                    <button
                      class={
                        ClickPrimary === key
                          ? " blue-grey-400 action-btn s-cross-center s-main-center s-border-none s-cursor-pointer   icon-md bg-0 s-transition "
                          : " blue-grey-400 action-btn s-cross-center s-main-center s-border-none s-cursor-pointer  icon-md bg-0 s-transition  s-rotation-180"
                      }
                    >
                      {" "}
                      <BiChevronUp />{" "}
                    </button>
                  </div>
                </div>

                {/* <p className="small grey-500 s-mb-0 font-md-1">
                  After you complete all the content within the A1 level, you
                  will be able to communicate in everyday situations with
                  commonly-used expressions and elementary vocabulary.
                </p> */}
                <div className="dflex"></div>
              </div>
              {ClickPrimary === key ? (
                <ul className="l-none s-ml-2">
                  <TextLi>{item.content}</TextLi>
                </ul>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </TemaryLayout>
  );
};

const InputSearch = styled.input`
  background: transparent;
  border: 1px solid silver;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1;
`;

const TextLi = styled.li`
  font-size: 1.2rem;
  color: gray;
  text-align: justify;
  line-height: normal;
`;

const TemaryLayout = styled.div`
  padding: 0 1rem;
  /* margin-bottom: 1rem; */
`;
//  {
//    item.sublevel.map((subItem, keySub) => (
//      <div key={keySub}>
//        <li className="s-border-bottom s-py-2 s-transition ">
//          <div
//            className="dflex spc-between s-cursor-pointer alg-center"
//            onClick={() => toggleSecondary(keySub)}
//          >
//            <h4 className=" s-mb-0 font-md-1">{subItem.name_sublevel}</h4>
//            <button
//              className={
//                ClickSecondary === keySub
//                  ? " blue-grey-400 s-border-none s-mb-0 s-pxy-0 bg-0 icon-md s-tra s-transition   "
//                  : " blue-grey-400 s-border-none s-mb-0 s-pxy-0 bg-0 icon-md s-transition s-rotation-180"
//              }
//            >
//              <BiChevronUp />
//            </button>
//          </div>
//          {ClickSecondary === keySub ? (
//            <ul className="l-none s-transition ">
//              <form onSubmit={(e) => handleSubmit(e)} ref={FormRef}>
//                {subItem.content.map((subItemContent, Contentindex) => (
//                  <li
//                    key={Contentindex}
//                    className=" s-pxy-1 small grey-600 s-transition hover-bg-03"
//                  >
//                    <div className="dflex alg-center contentInputsCheck">
//                      <input
//                        type="checkbox"
//                        id={Contentindex}
//                        value="valor luis"
//                      />
//                      <label htmlFor={Contentindex}>
//                        {" "}
//                        <i className="icon-sm s-mr-1">
//                          {" "}
//                          <BiCheckCircle />{" "}
//                        </i>{" "}
//                      </label>
//                      <p className="small grey-500 s-mb-0 ">
//                        {subItemContent.item}
//                      </p>
//                    </div>
//                  </li>
//                ))}

//                {/* <div className="dflex jst-content-end">
//                                   <button
//                                     className="border-blue-600 btn-temary color-blue-600"
//                                     type="submit"
//                                   >
//                                     Enviar
//                                   </button>
//                                 </div> */}
//              </form>
//            </ul>
//          ) : null}
//        </li>
//      </div>
//    ));
//  }
