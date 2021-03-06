import styled from "styled-components";
import { useRef, useCallback, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import ImageEnglish from "../../assets/images/EnglishImage.jpg";
import OptionValues from "./OptionsValues";
import OptionTime from "./Optiontime";
import { useSelector, useDispatch } from "react-redux";
import { RESET_PRICES } from "../../redux/actions/types";
import { GroupPersons } from "../../redux/actions/ItemOnePackageAction";
import { Select_Package } from "../../redux/actions/packageAction";
import { useHistory } from "react-router-dom";
import LessonMonths from "./lessonMonth";
import ProgressStetpBar from "./ProgressStetpBar";
import { isAuth } from "../../helpers/Auth";

//component
import OptionMonths from "./OptionMonths";

export default function ModalPackage({
  ShowModal,
  setShowModal,
  modalcontext,
}) {
  const history = useHistory();
  const modalRef = useRef();
  const InputMonths = useRef();
  const InputMonthtow = useRef();
  const MonthsNumber = useSelector((state) => state.itemPackage.numberMonts);
  const CalculoPrices = useSelector(
    (state) => state.itemPackage.calculatePrices
  );
  const LessonsMonth = useSelector(
    (state) => state.itemPackage.lessonMonth.value
  );
  const time = useSelector((state) => state.itemPackage.timeLesson.value);
  const numberLessons = useSelector(
    (state) => state.itemPackage.lessonMonth.value
  );
  const dispatch = useDispatch();
  // setGroupClass() setIndividualClass()
  const [GroupClass, setGroupClass] = useState(false);
  const [IndividualClass, setIndividualClass] = useState(true);
  const [ErrorInputNumber, setErrorInputNumber] = useState(false);
  const [PersonsGroup, setPersonsGroup] = useState({ value: 2 });
  const [Valores, setValores] = useState(false);
  const value = useSelector((state) => state.itemPackage.numberMonts);
  const [Lesson, setLessons] = useState(null);
  const [Time, setTime] = useState(null);
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
    dispatch({
      type: "GROUP_ACTIVE",
      payload: true,
    });
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
    dispatch({
      type: "INIDIVIDUAL_ACTIVE",
      payload: true,
    });
  };

  const ResetState = () => {
    setGroupClass(false);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      // ResetState();

      console.log("closeee");
      setGroupClass(false);
      dispatch({
        type: RESET_PRICES,
      });
      DefaultInputNumber();
      ClearSelectsTime();
      ClearSelectsTimeLesson();
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && ShowModal) {
        setShowModal(false);
        DefaultInputNumber();
        ClearSelectsTime();
        ClearSelectsTimeLesson();
        console.log("I pressed");
      }
    },
    [setShowModal, ShowModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
      dispatch({
        type: RESET_PRICES,
      });
    };
  }, [keyPress]);

  useEffect(() => {
    dispatch(GroupPersons(PersonsGroup));
  }, [PersonsGroup]);

  useEffect(() => {
    setPersonsGroup({ value: 1 });
    // setMonths({value:1})
  }, [Valores]);

  const handleCart = () => {
    //price , idiom , lesson
    const kids = false;
    const id = 1;
    dispatch(
      Select_Package(
        CalculoPrices,
        "English",
        LessonsMonth,
        time,
        MonthsNumber,
        kids,
        id
      )
    );

    dispatch({ type: "ADD_CART" });
    setShowModal(false);
    dispatch({
      type: "AddCart",
      payload: 25,
    });
    DefaultInputNumber();
    ClearSelectsTime();
    ClearSelectsTimeLesson();
  };

  // ========>   <===========
  const handleNumber = (e) => {
    if (e.target.value <= 1) {
      setErrorInputNumber(false);
    }
    var val = parseInt(e.target.value);
    const input = InputMonthtow.current;
    input.value = 1;
    dispatch({
      type: "REMOVE_MONTHS",
    });

    if (isNaN(val)) {
      setPersonsGroup({ value: 0 });
      return;
    }
    setPersonsGroup({ value: e.target.value });
  };

  // -------------------------- handle procced to payment ----------------------
  const handleProcced = () => {
    dispatch(
      Select_Package(
        CalculoPrices,
        "English",
        numberLessons,
        time,
        parseInt(MonthsNumber)
      )
    );
    DefaultInputNumber();
    setShowModal(false);
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

  const clickClose = () => {
    setShowModal((prev) => !prev);
    setGroupClass(false);
    setIndividualClass(true);
  };
  return (
    <>
      {ShowModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper ShowModal={ShowModal}>
            <ContentImg>
              <ImageModal src={ImageEnglish} alt="image" />
            </ContentImg>
            <div>
              <HeaderInformContent>
                <TitlePackage>English Lessons</TitlePackage>
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
                      <TextLesson> Lessons per month </TextLesson>
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
                        setTime={setTime}
                        Time={Time}
                        valor={OnClickValores}
                        GroupLessons={GroupClass}
                        InputMonthtow={InputMonthtow}
                      />
                    </ContentSelect>

                    {GroupClass && (
                      <ContentSelect>
                        <TextLesson>Number of students </TextLesson>
                        {/* <NumberStudent /> */}
                        <MonthBuy
                          error={ErrorInputNumber}
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
                    {/* <div style={{ width: "200px" }}>
                    <NumberMonths />
                  </div> */}

                    {/* number Months */}
                    {/* <OptionMonths valor={OnClickValores} /> */}
                    <div>
                      <TextLesson>Number of months</TextLesson>
                      <MonthNumber
                        ref={InputMonthtow}
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                      />
                    </div>

                    {/* end number Months */}

                    <ContentButtons>
                      <Buttons Cart title="add to cart" onClick={handleCart}>
                        add to cart
                      </Buttons>
                      <Buttons
                        opacity={CalculoPrices > 0 ? false : true}
                        title="Procced to pay"
                        disabled={CalculoPrices > 0 ? false : true}
                        onClick={handleProcced}
                        left={true}
                      >
                        Checkout
                      </Buttons>
                      {/* <Link to="/payclient">
                      </Link> */}
                    </ContentButtons>
                  </MonthPrices>
                </InformContent>
                <BtnClose onClick={clickClose} />
              </ContentModel>
            </div>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

const ContentModel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const ContentButtons = styled.div`
  align-self: flex-end;
  width: 60%;
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
  height: 100%;
  width: 100%;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

const ImageModal = styled.img`
  border-radius: 10px;
  height: 100%;
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
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 4px;
`;
const ContentSelect = styled.div`
  width: 100%;
  /* margin:5px 2px; */
`;
const TextLesson = styled.span`
  font-size: 16px;
  letter-spacing: 0px;
`;

const MonthPrices = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Buttons = styled.button`
  padding: 0.4rem 0.5rem;
  border: none;
  color: #fff;
  font-size: 1rem;
  background: ${({ Cart }) => (Cart ? "#ff3946" : "#314584")};
  border-radius: 6px;
  margin-left: ${({ left }) => (left ? "0.3rem" : 0)};
  /* opacity: 0.5; */
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};
  @media screen and (max-width: 768px) {
    margin-left: ${({ left }) => (left ? "0.3rem" : 0)};
  }
`;
const MonthBuy = styled.input`
  background: transparent;
  font-size: 1rem;
  border: ${({ error }) => (error ? "1px solid red" : "1px solid silver")};
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
  letter-spacing: 0.05rem;
  font-weight: 400;
`;

const TitlePackage = styled.h4`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Sacramento", cursive;
  color: #314584;
`;

const Img3D = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 180px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const MonthNumber = styled.input`
  background: transparent;
  font-size: 1rem;
  border: 1px solid silver;
  padding: 5px 4px;
  width: 50%;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
