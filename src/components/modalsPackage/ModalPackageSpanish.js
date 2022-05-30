import styled from "styled-components";
import { useRef, useCallback, useEffect, useState, useContext } from "react";
import { MdClose } from "react-icons/md";
import ImageFrench from "../../assets/images/SpainImage.jpg";
import OptionValues from "./OptionsValues";
import OptionTime from "./Optiontime";
import { useSelector, useDispatch } from "react-redux";
import { RESET_PRICES } from "../../redux/actions/types";
import { GroupPersons } from "../../redux/actions/ItemOnePackageAction";
import { Select_Package } from "../../redux/actions/packageAction";
import ProgressStetpBar from "./ProgressStetpBar";
import LessonMonths from "./lessonMonth";
import ModalContext from "../Context/modlaContext";
import { Link, useHistory } from "react-router-dom";
import { isAuth } from "../../helpers/Auth";
/**
 * @function_React
 */

export default function ModalPackageFrench({
  ShowModalSpanish,
  setShowModalSpanish,
}) {
  const modalRef = useRef();
  const InputMonths = useRef(0);
  const CalculoPrices = useSelector(
    (state) => state.itemPackage.calculatePrices
  );
  const history = useHistory();
  const LessonsMonth = useSelector((state) => state.itemPackage.numberMonts);
  const time = useSelector((state) => state.itemPackage.timeLesson.value);
  const cantPersons = useSelector((state) => state.itemPackage.cantPersons);
  const numberLessons = useSelector(
    (state) => state.itemPackage.lessonMonth.value
  );
  const dispatch = useDispatch();

  //STATE
  //setIndividualClass setPersonsGroup
  const [GroupClass, setGroupClass] = useState(false);
  const [IndividualClass, setIndividualClass] = useState(true);
  const [PersonsGroup, setPersonsGroup] = useState({ value: 0 });
  const [Valores, setValores] = useState(false);
  const [Months, setMonths] = useState({ value: 1 });
  // const [TimeLesson, setTimeLesson] = useState({ value: null, label: null });
  const [Lesson, setLessons] = useState(null);
  const [Time, setTime] = useState(null);
  //END STATE
  const InputMonthtow = useRef();
  //selectors states
  const GroupActive = useSelector((state) => state.itemPackage.groupActive);
  const IndividualActive = useSelector(
    (state) => state.itemPackage.individualActive
  );
  //

  const OnClickValores = () => {
    setValores(!Valores);
  };
  const DefaultInputNumber = () => {
    const inp = InputMonthtow.current;
    inp.value = 1;
  };
  const OnClickGroup = () => {
    setGroupClass(true);
    setIndividualClass(false);
    dispatch({
      type: RESET_PRICES,
    });
    DefaultInputNumber();
    ClearSelectsTimeLesson();
    ClearSelectsTime();
  };

  const OnClickIndividual = () => {
    setIndividualClass(true);
    setGroupClass(false);
    dispatch({
      type: RESET_PRICES,
    });
    DefaultInputNumber();
    ClearSelectsTimeLesson();
    ClearSelectsTime();
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalSpanish(false);
      dispatch({
        type: RESET_PRICES,
      });
      DefaultInputNumber();
      ClearSelectsTimeLesson();
      ClearSelectsTime();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && ShowModalSpanish) {
        setShowModalSpanish(false);
        DefaultInputNumber();
        ClearSelectsTimeLesson();
        ClearSelectsTime();
      }
    },
    [setShowModalSpanish, ShowModalSpanish]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
      dispatch({
        type: RESET_PRICES,
      });
    };
  }, [dispatch, keyPress]);
  //
  const handleNumber = (e) => {
    var val = parseInt(e.target.value);
    if (isNaN(val)) {
      setPersonsGroup({ value: 0 });
      return;
    }
    setPersonsGroup({ value: e.target.value });
    dispatch({
      type: "REMOVE_MONTHS",
    });
  };
  //
  useEffect(() => {
    dispatch(GroupPersons(PersonsGroup));
  }, [PersonsGroup, dispatch]);

  useEffect(() => {
    setPersonsGroup({ value: 1 });
  }, [Valores]);

  const handleCart = () => {
    //price , idiom , lesson
    const kids = false;
    const id = 3;
    dispatch(
      Select_Package(
        CalculoPrices,
        "Spanish",
        numberLessons,
        time,
        parseInt(LessonsMonth),
        kids,
        id
      )
    );
    dispatch({ type: "ADD_CART" });
    dispatch({
      type: "AddCart",
      payload: 25,
    });
    DefaultInputNumber();
    ClearSelectsTimeLesson();
    ClearSelectsTime();
    setShowModalSpanish(false);
  };

  const handleMonth = useCallback(() => {
    setMonths({ value: InputMonths.current.value });
  }, []);
  const handleProcced = () => {
    // dispatch(Select_Package(CalculoPrices, "Spanish", LessonsMonth, time));
    let kids = false;
    const id = 3;
    dispatch(
      Select_Package(
        CalculoPrices,
        "Spanish",
        numberLessons,
        time,
        parseInt(LessonsMonth),
        kids,
        id,
        cantPersons
      )
    );
    setShowModalSpanish(false);
    return history.push("/orderSummary");
  };

  const handleChange = () => {
    /**
     * input.value -> se tendra el valor del value del input/ si se  quiere modificar el value  se hace asi ->   input.value = 1
     * 1. se va obtener el valor del value del input
     * 2. se enviara un dispatcher con el valor del months
     * 3.
     * 4.
     */
    const input = InputMonthtow.current;
    if (GroupActive) {
      dispatch({
        type: "NUMBER_MONTHS_GROUP",
        payload: input.value,
      });
      return;
    }
    if (IndividualActive) {
      dispatch({
        type: "NUMBER_MONTHS_INDIVIDUAL",
        payload: input.value,
      });
      return;
    }
  };

  const ClearSelectsTimeLesson = () => {
    setLessons(null);
  };
  const ClearSelectsTime = () => {
    setTime(null);
  };

  const ClickClose = () => {
    setGroupClass(false);
    setIndividualClass(true);
    ClearSelectsTimeLesson();
    ClearSelectsTime();
    setShowModalSpanish((prev) => !prev);
  };

  return (
    <>
      {ShowModalSpanish ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper ShowModalSpanish={ShowModalSpanish}>
            <ContentImg>
              <ImageModal src={ImageFrench} alt="image " />
            </ContentImg>
            <ContentInformation>
              <HeaderInformContent>
                <TitlePackage>Spanish Lessons </TitlePackage>
              </HeaderInformContent>
              <ProgressStetpBar />
              <ContentModel>
                <InformContent>
                  <ContentPrice>
                    <PricesSubTotal>$ {CalculoPrices} </PricesSubTotal>
                  </ContentPrice>

                  <ContentIcon>
                    <ButoonIndividual
                      activado={IndividualClass}
                      onClick={OnClickIndividual}
                    >
                      One to one
                    </ButoonIndividual>
                    <ButoonIndividual
                      activado={GroupClass}
                      onClick={OnClickGroup}
                    >
                      Group lessons
                    </ButoonIndividual>
                  </ContentIcon>

                  <LessonMonth>
                    <ContentSelect>
                      <TextLesson>Lessons per month</TextLesson>
                      <OptionValues
                        setLessons={setLessons}
                        Lesson={Lesson}
                        valor={OnClickValores}
                        GroupLessons={GroupClass}
                        InputMonthtow={InputMonthtow}
                      />
                    </ContentSelect>

                    <ContentSelect>
                      <TextLesson>Lessons length</TextLesson>
                      <OptionTime
                        Time={Time}
                        setTime={setTime}
                        valor={OnClickValores}
                        GroupLessons={GroupClass}
                        InputMonthtow={InputMonthtow}
                      />
                    </ContentSelect>

                    {GroupClass && (
                      <ContentSelect>
                        <TextLesson>Number of students</TextLesson>
                        <MonthBuy
                          type="number"
                          value={PersonsGroup.value}
                          min="2"
                          max="10"
                          onChange={(e) => handleNumber(e)}
                        />
                      </ContentSelect>
                    )}
                  </LessonMonth>

                  <MonthPrices>
                    {/* <div>
                      <TextLesson>Choose Month</TextLesson>
                      <MonthBuy Month type="number" min="1" max="12" />
                    </div> */}
                    {/* <LessonMonths
                      Months={Months}
                      InputMonths={InputMonths}
                      handleMonth={handleMonth}
                    /> */}
                    <div>
                      <span>Number of months</span>
                      <MonthNumber
                        ref={InputMonthtow}
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                      />
                    </div>
                    <ContentButtons>
                      <Buttons Cart title="add to cart" onClick={handleCart}>
                        add to cart
                      </Buttons>
                      <Buttons
                        opacity={CalculoPrices > 0 ? false : true}
                        disabled={CalculoPrices > 0 ? false : true}
                        title="Procced to pay"
                        onClick={handleProcced}
                        left={true}
                      >
                        Checkout
                      </Buttons>
                    </ContentButtons>
                  </MonthPrices>
                </InformContent>
                <BtnClose onClick={ClickClose} />
              </ContentModel>
            </ContentInformation>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

const ContentInformation = styled.div`
  width: 100%;
`;

const MonthNumber = styled.input`
  background: transparent;
  font-size: 1rem;
  border: 1px solid silver;
  padding: 5px 4px;
  width: 42%;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 9;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 850px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContentModel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const BtnClose = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  padding: 0;
  z-index: 10;
`;
const ContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

const ImageModal = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;
const InformContent = styled.div`
  padding: 0.2rem;
`;
const HeaderInformContent = styled.div`
  line-height: 5px;
  padding: 0.5rem 0;
  & > h4 {
    margin: 0;
    text-align: center;
  }
`;
const ContentPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PricesSubTotal = styled.span`
  font-size: 40px;
`;

const LessonMonth = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
const ContentSelect = styled.div`
  width: 50%;
  margin: 5px 2px;
`;
const TextLesson = styled.span`
  font-size: 16px;
  letter-spacing: 0px;
  line-height: normal;
`;
const SelectPerMonth = styled.select`
  width: 100%;
  background-color: white;
  border: 1px solid #808e9b;
  border-radius: 5px;
  padding: 2px;
  outline: none;
  font-size: 1rem;
`;
const MonthPrices = styled.div`
  display: flex;

  align-items: flex-end;
  @media screen and (max-width: 768px) {
  }
`;

const ContentButtons = styled.div`
  width: 50%;
`;
const Buttons = styled.button`
  padding: 0.4rem 8px;
  border: none;
  color: #fff;
  font-size: 1rem;
  background: ${({ Cart }) => (Cart ? "#ff3946" : "#314584")};
  border-radius: 6px;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};
  margin-left: ${({ left }) => (left ? "0.3rem" : 0)};
  @media screen and (max-width: 768px) {
    padding: 0.4rem 4px;
    margin-left: ${({ left }) => (left ? ".2rem" : 0)};
  }
`;
const MonthBuy = styled.input`
  background: transparent;
  font-size: 1rem;
  border: 1px solid silver;
  padding: 5px 4px;
  width: ${({ Month }) => (Month ? "100%" : "100%")};
  border-radius: 5px;
`;

const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
`;
const ButoonIndividual = styled.button`
  padding: 4px 8px;
  margin: 0;
  border: ${(props) =>
    props.activado ? "none" : "1px solid rgba(0, 105, 255,1)"};
  margin: 0 4px;
  border-radius: 5px;
  color: ${(props) => (props.activado ? "#fff" : "#0069FF")};
  background: ${(props) =>
    props.activado ? "#314584" : "rgba(0, 105, 255,.3)"};
  font-size: 1rem;
`;

const TitlePackage = styled.h4`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Sacramento", cursive;
  color: #314584;
`;
