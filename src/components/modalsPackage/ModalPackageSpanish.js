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
  const LessonsMonth = useSelector(
    (state) => state.itemPackage.lessonMonth.label
  );
  const time = useSelector((state) => state.itemPackage.timeLesson.label);
  const dispatch = useDispatch();

  //  context modal
  const modalContext = useContext(ModalContext);

  const [GroupClass, setGroupClass] = useState(false);
  const [IndividualClass, setIndividualClass] = useState(true);
  const [PersonsGroup, setPersonsGroup] = useState({ value: 0 });
  const [Valores, setValores] = useState(false);
  const [Months, setMonths] = useState({ value: 1 });

  const OnClickValores = () => {
    setValores(!Valores);
  };

  const OnClickGroup = () => {
    setGroupClass(true);
    setIndividualClass(false);
    dispatch({
      type: RESET_PRICES,
    });
  };

  const OnClickIndividual = () => {
    setIndividualClass(true);
    setGroupClass(false);
    dispatch({
      type: RESET_PRICES,
    });
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalSpanish(false);
      dispatch({
        type: RESET_PRICES,
      });
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && ShowModalSpanish) {
        setShowModalSpanish(false);
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

  const handleNumber = (e) => {
    var val = parseInt(e.target.value);

    if (isNaN(val)) {
      setPersonsGroup({ value: 0 });
      return;
    }
    setPersonsGroup({ value: e.target.value });
  };
  useEffect(() => {
    dispatch(GroupPersons(PersonsGroup));
  }, [PersonsGroup, dispatch]);

  useEffect(() => {
    setPersonsGroup({ value: 1 });
  }, [Valores]);

  const handleCart = () => {
    //price , idiom , lesson
    dispatch(Select_Package(CalculoPrices, "Spanish", LessonsMonth, time));
    dispatch({ type: "ADD_CART" });
    dispatch({
      type: "AddCart",
      payload: 25,
    });
    setShowModalSpanish(false);
  };

  const handleMonth = useCallback(() => {
    setMonths({ value: InputMonths.current.value });
  }, []);
  const handleProcced = () => {
    dispatch(Select_Package(CalculoPrices, "Spanish", LessonsMonth, time));
    if (isAuth()) {
      return history.push("/payclient");
    }
    setShowModalSpanish(false);
    //               -------->!modalcontext.ModalState

    return modalContext.setModalState(true);
    // console.log(packageItems);
    // const items = packageItems.items.find((x) => x.idiom === "English");
    // console.log(items){
    // }
    // dispatch({
    //   type: "PROCCED_TO_PAY",
    //   payload: {
    //     price: itemPackage.calculatePrices,
    //     items:   1,
    //   },
    // });
  };
  return (
    <>
      {ShowModalSpanish ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper ShowModalSpanish={ShowModalSpanish}>
            <ContentImg>
              <ImageModal src={ImageFrench} alt="image " />
            </ContentImg>
            <div>
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
                      One-to-One
                    </ButoonIndividual>
                    <ButoonIndividual
                      activado={GroupClass}
                      onClick={OnClickGroup}
                    >
                      Group Class
                    </ButoonIndividual>
                  </ContentIcon>

                  <LessonMonth>
                    <ContentSelect>
                      <TextLesson>Lessons per month</TextLesson>
                      <OptionValues
                        valor={OnClickValores}
                        GroupLessons={GroupClass}
                      />
                    </ContentSelect>

                    <ContentSelect>
                      <TextLesson>Duration of each lesson</TextLesson>
                      <OptionTime
                        valor={OnClickValores}
                        GroupLessons={GroupClass}
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
                    <LessonMonths
                      Months={Months}
                      InputMonths={InputMonths}
                      handleMonth={handleMonth}
                    />

                    <div>
                      <Buttons Cart title="add to cart" onClick={handleCart}>
                        add to cart
                      </Buttons>
                      <Buttons
                        opacity={CalculoPrices > 0 ? false : true}
                        disabled={CalculoPrices > 0 ? false : true}
                        title="Procced to pay"
                        onClick={handleProcced}
                      >
                        Procced to pay
                      </Buttons>
                    </div>
                  </MonthPrices>
                </InformContent>
                <BtnClose
                  onClick={() => setShowModalSpanish((prev) => !prev)}
                />
              </ContentModel>
            </div>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

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
  justify-content: space-between;
  align-items: flex-end;
`;

const Buttons = styled.button`
  padding: 0.4rem 8px;
  border: none;
  color: #fff;
  font-size: 1rem;
  background: ${({ Cart }) => (Cart ? "#ff3946" : "#314584")};
  border-radius: 6px;
  margin-left: 5px;
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};
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
