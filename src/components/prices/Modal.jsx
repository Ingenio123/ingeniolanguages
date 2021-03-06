import styled from "styled-components";
//icons
import { IoCloseSharp, IoPersonSharp, IoPeopleSharp } from "react-icons/io5";
import { BsCart2, BsCreditCard } from "react-icons/bs";
// librerias
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//actions
import { Select_Package } from "../../redux/actions/packageAction";
import { GroupPersons } from "../../redux/actions/ItemOnePackageAction";

//components
import OptionTime from "../modalsPackage/Optiontime";
import OptionValues from "../modalsPackage/OptionsValues";

//
import { RESET_PRICES } from "../../redux/actions/types";

import ProgressStetpBar from "../modalsPackage/ProgressStetpBar";
const Modal = (props) => {
  //react router dom
  const history = useHistory();
  //dispatch
  const dispatch = useDispatch();
  //refs
  const InputMonthtow = useRef();
  //states
  const [PersonsGroup, setPersonsGroup] = useState({ value: 0 });

  const [Valores, setValores] = useState(false);
  const [IndividualClass, setIndividualClass] = useState(true);
  const [GroupClass, setGroupClass] = useState(false);
  const [Lesson, setLessons] = useState(null);
  const [Time, setTime] = useState(null);

  // ---- end states ------
  //selectors
  const CalculoPrices = useSelector(
    (state) => state.itemPackage.calculatePrices
  );
  const LessonsMonth = useSelector(
    (state) => state.itemPackage.lessonMonth.value
  );
  const time = useSelector((state) => state.itemPackage.timeLesson.value);
  const MonthsNumber = useSelector((state) => state.itemPackage.numberMonts);
  const GroupActive = useSelector((state) => state.itemPackage.groupActive);
  const CantPersons = useSelector((state) => state.itemPackage.cantPersons);
  const IndividualActive = useSelector(
    (state) => state.itemPackage.individualActive
  );
  //   end selectors

  //click marque el inputa que hizo click y cuando haga click en input anterior deje de marcarse
  /**
   * -> click input 1 setState(1)
   * -> click input 2 setState(2)
   * <- input 1 false
   */
  const OnClickValores = () => {
    setValores(!Valores);
  };

  const close = () => {
    setGroupClass(false);
    setIndividualClass(true);
    props.setClickModal(false);
    ClearSelectsTime();
    ClearSelectsTimeLesson();
    dispatch({
      type: RESET_PRICES,
    });
  };

  /**
   *
   *
   */

  const OnClickIndividual = () => {
    setIndividualClass(true);
    setGroupClass(false);
    dispatch({
      type: "INIDIVIDUAL_ACTIVE",
      payload: true,
    });
    dispatch({
      type: "RESET_PRICES",
    });
    dispatch({
      type: "GROUP_CLASS",
      payload: 1,
    });
    ClearSelectsTime();
    ClearSelectsTimeLesson();
  };

  const OnClickGroup = () => {
    setGroupClass(true);
    setIndividualClass(false);
    dispatch({
      type: "GROUP_ACTIVE",
      payload: true,
    });
    dispatch({
      type: "RESET_PRICES",
    });

    dispatch({
      type: "GROUP_CLASS",
      payload: 2,
    });
    ClearSelectsTime();
    ClearSelectsTimeLesson();
  };

  /**
   *
   */
  const handleProcced = () => {
    dispatch(
      Select_Package(
        CalculoPrices,
        props.nameCourse,
        LessonsMonth,
        time,
        MonthsNumber,
        props.kids,
        props.id,
        CantPersons,
        props.img
      )
    );
    props.setClickModal(false);
    return history.push("/orderSummary");
  };

  const handleCart = () => {
    //price , idiom , lesson
    const kids = props.kids;
    dispatch(
      Select_Package(
        CalculoPrices,
        props.nameCourse,
        LessonsMonth,
        time,
        MonthsNumber,
        kids,
        props.id,
        props.img
      )
    );

    dispatch({ type: "ADD_CART" });
    dispatch({
      type: "AddCart",
      payload: 25,
    });
    ClearSelectsTime();
    ClearSelectsTimeLesson();
    setPersonsGroup(false);
    setIndividualClass(true);
    dispatch({
      type: RESET_PRICES,
    });
    props.setClickModal(false);
  };
  // ====================================== //
  const handleNumber = (e) => {
    var val = parseInt(e.target.value);

    if (isNaN(val)) {
      setPersonsGroup({ value: 0 });
      return;
    }
    const inputMonth = InputMonthtow.current;
    inputMonth.value = 1;
    setPersonsGroup({ value: e.target.value });
  };
  // ======================================  //
  useEffect(() => {
    setPersonsGroup({ value: 1 });
  }, [Valores]);
  //
  useEffect(() => {
    dispatch(GroupPersons(PersonsGroup));
  }, [PersonsGroup]);

  //
  const handleChange = () => {
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
    }
  };

  // #########################################
  const ClearSelectsTimeLesson = () => {
    setLessons(null);
  };
  const ClearSelectsTime = () => {
    setTime(null);
  };

  return (
    <>
      {props.open && (
        <Content>
          {/* onMouseDown={() => console.log("alert")} */}
          <Card>
            <ImageContent img={props.img} />
            <CardContent>
              <Title>{props.nameCourse} lessons</Title>
              <ProgressStetpBar />
              <PricesBox>
                <h4>${CalculoPrices.toFixed(2)}</h4>
              </PricesBox>
              {/* Icons */}
              <ContentIcon>
                <ButtonType
                  activado={IndividualClass}
                  onClick={OnClickIndividual}
                >
                  One to one
                </ButtonType>
                <ButtonType activado={GroupClass} onClick={OnClickGroup}>
                  Group lessons
                </ButtonType>
                {/* <Tooltip>
                  <IndividualI active={true} onClick={OnClickIndividual} />
                  <span className="tooltip-box">One to one</span>
                </Tooltip> */}
                {/* <Tooltip>
                  <GroupI active={false} onClick={OnClickGroup} />
                  <span className="tooltip-box-group">Group lessons</span>
                </Tooltip> */}
              </ContentIcon>
              <ContentGrid>
                <ContentSelect>
                  <span>Lessons per month</span>
                  <OptionValues
                    valor={OnClickValores}
                    setLessons={setLessons}
                    Lesson={Lesson}
                    InputMonthtow={InputMonthtow}
                  />
                </ContentSelect>
                <ContentSelect>
                  <span>lessons length </span>
                  <OptionTime
                    valor={OnClickValores}
                    Time={Time}
                    setTime={setTime}
                    InputMonthtow={InputMonthtow}
                  />
                </ContentSelect>
              </ContentGrid>
              <ContentGrid>
                {GroupClass && (
                  <ContentSelect>
                    <span>Number of students</span>
                    <MonthBuy
                      type="number"
                      value={PersonsGroup.value}
                      min="2"
                      max="10"
                      onChange={(e) => handleNumber(e)}
                    />
                  </ContentSelect>
                )}
                <ContentSelect>
                  <span>Number of Months</span>
                  <MonthNumber
                    ref={InputMonthtow}
                    onChange={handleChange}
                    type="number"
                    min="1"
                    max="12"
                  />
                </ContentSelect>
              </ContentGrid>
              {/* End Icons */}
              <ContentButtonFlex>
                {/* Buttons */}
                <ContentButton>
                  <BtnCart
                    bg={CalculoPrices > 0 && "#ff3946"}
                    disabled={CalculoPrices > 0 ? false : true}
                    onClick={handleCart}
                    // bg="#ff3946"
                  >
                    <BtnIcon bg="#ff3946">
                      <CartPlusI />
                    </BtnIcon>
                    Add to Cart
                  </BtnCart>
                  <Btn
                    bg={CalculoPrices > 0 && "#314584"}
                    // bg="#d4d9e9"
                    disabled={CalculoPrices > 0 ? false : true}
                    onClick={handleProcced}
                  >
                    <BtnIcon bg="#314584">
                      <CardI />
                    </BtnIcon>
                    Checkout
                  </Btn>
                </ContentButton>
                {/* End Buttons */}
              </ContentButtonFlex>
            </CardContent>
            <BtnClose onClick={() => close()} />
          </Card>
        </Content>
      )}
    </>
  );
};

const ContentButtonFlex = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    justify-content: center;

    width: 100%;
  }
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  width: 852px;
  height: 415px;
  position: relative;
  display: grid;
  grid-template-columns: 320px 1fr;
  padding: 1rem;
  column-gap: 0.5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BtnClose = styled(IoCloseSharp)`
  color: #71717a;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
    color: #18181b;
  }
`;
const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const CardContent = styled.div`
  width: 100%;
  /* border: 1px solid silver; */
  border-radius: 0.5rem;
  color: #314584;
`;

const Title = styled.h2`
  font-family: "Sacramento", cursive;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;

  padding: 0;
  margin: 0;
`;

const PricesBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h4 {
    font-size: 2.5rem;
    font-weight: 400;
    color: unset;
    margin: 0;
  }
`;

const ContentIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  align-items: center;
`;
const Tooltip = styled.div`
  position: relative;
  /* width: 90px; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  :hover {
    .tooltip-box {
      display: block;
    }
    .tooltip-box-group {
      display: block;
    }
  }
  .tooltip-box {
    transition: all 0.3s ease;
    position: absolute;
    background-color: #314584;
    color: #fff;
    padding: 0.3rem;
    border-radius: 4px;
    top: -35px;
    left: -150%;
    font-size: 1rem;
    display: none;
    width: 100px;
    text-align: center;
  }
  .tooltip-box-group {
    transition: all 0.3s ease;
    position: absolute;
    background-color: #314584;
    color: #fff;
    padding: 0.3rem;
    border-radius: 4px;
    top: -32px;
    left: -50px;
    font-size: 1rem;
    display: none;
    width: 120px;
    text-align: center;
  }
`;
const IndividualI = styled(IoPersonSharp)`
  font-size: 1.5rem;
  color: ${(props) => (props.active ? "#314584" : "#a2b0dd")};
  :hover {
    cursor: pointer;
  }
`;

const GroupI = styled(IoPeopleSharp)`
  font-size: 2rem;
  color: ${(props) => (props.active ? "#314584" : "#a2b0dd")};
  :hover {
    cursor: pointer;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  margin-top: 1rem;
`;
const ContentButton = styled.div`
  display: flex;
  column-gap: 1rem;
`;
const Btn = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#c1c9e3")};
  color: #fff;
  font-size: 1.05rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  column-gap: 0.2rem;
  /* width: 135px; */
`;
//disabled={CalculoPrices > 0 ? false : true}
const BtnCart = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#ff8088")};
  color: #fff;
  font-size: 1.05rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  column-gap: 0.2rem;
  /* width: 135px; */
`;

const BtnIcon = styled.div`
  /* width: 25px;
  height: 25px; */
  padding: 0.3rem;
  /* background-color: #fe6f6f; */
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
`;
const CartPlusI = styled(BsCart2)`
  font-size: 1.25rem;
`;
const CardI = styled(BsCreditCard)`
  font-size: 1.25rem;
`;
const ContentSelect = styled.div`
  span {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const Dropdown = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  label {
    position: absolute;
    top: 0;
    font-size: 1rem;
    font-weight: 600;
  }
  input {
    position: absolute;
    top: 25px;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid silver;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.125);
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    font-size: 1rem;
  }
  .options {
    position: absolute;
    top: 65px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    overflow: hidden;
    font-size: 1rem;
    z-index: 999;
    overflow: auto;
    height: auto;
    max-height: 182px;
    /* display: none; */
    /* display: ${(props) => (props.show ? "block" : "none")}; */
    /* ${(props) => props.show && "display:block;"} */
  }
  .options div {
    padding: 0.2rem 1rem;
    cursor: pointer;
    :hover {
      background-color: #3b82f6;
      color: #fff;
    }
  }
`;
const TextBox = styled.input``;
const Options = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ButtonType = styled.button`
  padding: 4px 8px;
  margin: 0;
  border: ${(props) => (props.activado ? "none" : "none")};
  margin: 0 4px;
  border-radius: 5px;
  color: ${(props) => (props.activado ? "#fff" : "#0069FF")};
  background: ${(props) =>
    props.activado ? "#314584" : "rgba(0, 105, 255,.3)"};
  font-size: 1rem;
`;

const MonthBuy = styled.input`
  background: transparent;
  font-size: 1rem;
  border: 1px solid silver;
  padding: 5px 4px;
  width: ${({ Month }) => (Month ? "100%" : "100%")};
  border-radius: 5px;
`;
const MonthNumber = styled.input`
  background: transparent;
  font-size: 1rem;
  border: 1px solid silver;
  padding: 5px 4px;
  width: 100%;
  border-radius: 5px;
`;

export default Modal;
