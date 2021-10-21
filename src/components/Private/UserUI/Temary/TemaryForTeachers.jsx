import "./Temary.scss";
import { BiChevronUp, BiCheckCircle } from "react-icons/bi";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import useCalificacion from "../../../../hooks/useCalificacion";
export const Temary = () => {
  const [Valor, setValor] = useState([]);
  const [ClickPrimary, setClickPrimary] = useState(false);
  const [ClickSecondary, setClickSecondary] = useState(false);

  const GetDataTemary = async () => {
    const Enpoint = "https://www.ingenioapi.com/temary/getTemary";

    const res = await axios.get(Enpoint);
    console.log(res.data.temary);
    setValor(res.data.temary);
  };

  useEffect(() => {
    GetDataTemary();
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
  const { Level, Sublevel, IdContent } = useCalificacion();
  return (
    <TemaryLayout className="l-section s-border md-pxy brd-radius">
      <div className="dgrid m-grid-2 al-center header_temary">
        <h2 className="mb-0">Course content</h2>
        <div>
          <InputSearch
            type="search"
            className="input-form"
            placeholder="Search"
          />
        </div>
      </div>

      {/* contents */}
      <div className="dgrid lgrid card-template row-gap s-gap-0 s-py-1 ">
        {Valor.map((item, key) => (
          <div key={key}>
            <div className="article s-mb-0 s-borderline-left green-400 s-px-2">
              <div
                className="s-cursor-pointer"
                onClick={() => {
                  togglePrimary(key);
                  Level(item._id);
                }}
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
                      <BiChevronUp />
                    </button>
                  </div>
                </div>

                <p className="small grey-500 s-mb-0 font-md-1">
                  After you complete all the content within the A1 level, you
                  will be able to communicate in everyday situations with
                  commonly-used expressions and elementary vocabulary.
                </p>
                <div className="dflex"></div>
              </div>
              {ClickPrimary === key ? (
                <ul className="l-none s-ml-2">
                  {item.sublevel.map((subItem, keySub) => (
                    <div key={keySub}>
                      <li className="s-border-bottom s-py-2 s-transition ">
                        <div
                          className="dflex spc-between s-cursor-pointer alg-center"
                          onClick={() => {
                            toggleSecondary(keySub);
                            Sublevel(subItem._id);
                          }}
                        >
                          <h4 className=" s-mb-0 font-md-1">
                            {subItem.name_sublevel}
                          </h4>
                          <button
                            className={
                              ClickSecondary === keySub
                                ? " blue-grey-400 s-border-none s-mb-0 s-pxy-0 bg-0 icon-md s-tra s-transition   "
                                : " blue-grey-400 s-border-none s-mb-0 s-pxy-0 bg-0 icon-md s-transition s-rotation-180"
                            }
                          >
                            <BiChevronUp />
                          </button>
                        </div>
                        {ClickSecondary === keySub ? (
                          <ul className="l-none s-transition ">
                            {subItem.content.map(
                              (subItemContent, Contentindex) => (
                                <li
                                  key={Contentindex}
                                  className=" s-pxy-1 small grey-600 s-transition hover-bg-03"
                                >
                                  <div className="dflex alg-center contentInputsCheck">
                                    <input
                                      type="checkbox"
                                      id={Contentindex}
                                      value="valor luis"
                                    />
                                    <label htmlFor={Contentindex}>
                                      <i
                                        className="icon-sm s-mr-1"
                                        onClick={() =>
                                          IdContent(subItemContent._id)
                                        }
                                      >
                                        <BiCheckCircle />
                                      </i>
                                    </label>
                                    <p className="small grey-500 s-mb-0 ">
                                      {subItemContent.item}
                                    </p>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        ) : null}
                      </li>
                    </div>
                  ))}
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
const TemaryLayout = styled.div`
  padding: 0 1rem;
`;
