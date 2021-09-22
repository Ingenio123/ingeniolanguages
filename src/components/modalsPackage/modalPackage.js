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
import { Link } from "react-router-dom";
import LessonMonths from "./lessonMonth";

import ProgressStetpBar from "./ProgressStetpBar";

export default function ModalPackage({ ShowModal, setShowModal }) {
  const modalRef = useRef();
  const InputMonths = useRef(0);
  const MonthsNumber = useSelector((state) => state.itemPackage.numberMonts);
  const CalculoPrices = useSelector(
    (state) => state.itemPackage.calculatePrices
  );
  const LessonsMonth = useSelector(
    (state) => state.itemPackage.lessonMonth.label
  );
  const time = useSelector((state) => state.itemPackage.timeLesson.label);

  const dispatch = useDispatch();

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

    InputMonths.current.value = 1;

    dispatch({
      type: "GROUP_CLASS",
      payload: 2,
    });
  };

  const OnClickIndividual = () => {
    setIndividualClass(true);
    setGroupClass(false);

    InputMonths.current.value = 1;
    dispatch({
      type: RESET_PRICES,
    });
    dispatch({
      type: "GROUP_CLASS",
      payload: 1,
    });
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);

      dispatch({
        type: RESET_PRICES,
      });
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && ShowModal) {
        setShowModal(false);
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

  const handleNumber = (e) => {
    var val = parseInt(e.target.value);

    if (isNaN(val)) {
      setPersonsGroup({ value: 0 });
      return;
    }
    setPersonsGroup({ value: e.target.value });
    InputMonths.current.value = 1;
  };

  useEffect(() => {
    dispatch(GroupPersons(PersonsGroup));
  }, [PersonsGroup]);

  useEffect(() => {
    setPersonsGroup({ value: 1 });
    // setMonths({value:1})
  }, [Valores]);

  const handleCart = () => {
    //price , idiom , lesson
    dispatch(
      Select_Package(CalculoPrices, "English", LessonsMonth, time, MonthsNumber)
    );

    dispatch({ type: "ADD_CART" });
    setShowModal(false);
    dispatch({
      type: "AddCart",
      payload: 50,
    });
  };
  //     ======>  realizar aqui   de los meses    <=====

  const handleMonth = useCallback(() => {
    setMonths({ value: InputMonths.current.value });
  }, [Months]);

  // ##################################################################

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
                      Individual lessons
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
                        valor={OnClickValores}
                        GroupLessons={GroupClass}
                      />
                    </ContentSelect>

                    <ContentSelect>
                      <TextLesson sson>Duration of each lesson</TextLesson>
                      <OptionTime
                        valor={OnClickValores}
                        GroupLessons={GroupClass}
                      />
                    </ContentSelect>

                    {GroupClass && (
                      <ContentSelect>
                        <TextLesson>Number persons</TextLesson>
                        {/* <NumberStudent /> */}
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
                    {/* <div style={{ width: "200px" }}>
                    <NumberMonths />
                  </div> */}

                    {/* number Months */}
                    <LessonMonths
                      Months={Months}
                      InputMonths={InputMonths}
                      handleMonth={handleMonth}
                    />
                    {/* end number Months */}

                    <Content_Buttons>
                      <Buttons Cart title="add to cart" onClick={handleCart}>
                        add to cart
                      </Buttons>
                      <Link to="/payclient">
                        <Buttons title="Procced to pay">Procced to pay</Buttons>
                      </Link>
                    </Content_Buttons>
                  </MonthPrices>
                </InformContent>
                <BtnClose onClick={() => setShowModal((prev) => !prev)} />
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

const Content_Buttons = styled.div`
  align-self: flex-end;
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
  justify-content: space-between;
`;

const Buttons = styled.button`
  padding: 0.4rem 0.5rem;
  border: none;
  color: #fff;
  font-size: 1rem;
  background: ${({ Cart }) => (Cart ? "#ff3946" : "#314584")};
  border-radius: 6px;
  margin-left: 5px;
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
