import styled from "styled-components";
//icons
import { IoCloseSharp, IoPersonSharp, IoPeopleSharp } from "react-icons/io5";
import { BsCart2, BsCreditCard } from "react-icons/bs";
// librerias
import { useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//actions
import { Select_Package } from "../../redux/actions/packageAction";
//components
import OptionTime from "../modalsPackage/Optiontime";
import OptionValues from "../modalsPackage/OptionsValues";
import LessonMonth from "../modalsPackage/lessonMonth";

const Modal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const InputMonths = useRef(0);
  const [Months, setMonths] = useState({ value: 1 });
  const [Valores, setValores] = useState(false);
  const [IndividualClass, setIndividualClass] = useState(true);
  const [GroupClass, setGroupClass] = useState(false);
  //selectors
  const CalculoPrices = useSelector(
    (state) => state.itemPackage.calculatePrices
  );
  const LessonsMonth = useSelector(
    (state) => state.itemPackage.lessonMonth.label
  );
  const time = useSelector((state) => state.itemPackage.timeLesson.label);
  const MonthsNumber = useSelector((state) => state.itemPackage.numberMonts);
  //end selectors
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
    props.setClickModal(false);
  };

  const handleMonth = useCallback(() => {
    setMonths({ value: InputMonths.current.value });
  }, []);
  /**
   *
   *
   */

  const OnClickIndividual = () => {
    setIndividualClass(true);
    setGroupClass(false);

    InputMonths.current.value = 1;
    dispatch({
      type: "RESET_PRICES",
    });
    dispatch({
      type: "GROUP_CLASS",
      payload: 1,
    });
  };

  const OnClickGroup = () => {
    setGroupClass(true);
    setIndividualClass(false);

    dispatch({
      type: "RESET_PRICES",
    });

    InputMonths.current.value = 1;

    dispatch({
      type: "GROUP_CLASS",
      payload: 2,
    });
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
        MonthsNumber
      )
    );
    props.setClickModal(false);
    return history.push("/orderSummary");
    // if (isAuth()) {
    // }
    //               -------->!modalcontext.ModalState
    // return modalcontext.setModalState(true);
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

  const handleCart = () => {
    //price , idiom , lesson
    dispatch(
      Select_Package(
        CalculoPrices,
        props.nameCourse,
        LessonsMonth,
        time,
        MonthsNumber
      )
    );

    dispatch({ type: "ADD_CART" });
    props.setClickModal(false);
    dispatch({
      type: "AddCart",
      payload: 25,
    });
  };

  return (
    <>
      {props.open && (
        <Content>
          {/* onMouseDown={() => console.log("alert")} */}
          <Card>
            <ImageContent img={props.img} />
            <CardContent>
              <Title>{props.nameCourse} lesson</Title>
              <PricesBox>
                <h4>${CalculoPrices}</h4>
              </PricesBox>
              {/* Icons */}
              <ContentIcon>
                <Tooltip>
                  <IndividualI active={true} onClick={OnClickIndividual} />
                  <span className="tooltip-box">One to one</span>
                </Tooltip>
                <Tooltip>
                  <GroupI active={false} onClick={OnClickGroup} />
                  <span className="tooltip-box-group">Group lessons</span>
                </Tooltip>
              </ContentIcon>
              <ContentGrid>
                <ContentSelect>
                  <span>Lessons per month</span>
                  <OptionValues valor={OnClickValores} />
                </ContentSelect>
                <ContentSelect>
                  <span>Duration of each lesson</span>
                  <OptionTime valor={OnClickValores} />
                </ContentSelect>
              </ContentGrid>
              <ContentGrid>
                {GroupClass && (
                  <ContentSelect>
                    <LessonMonth
                      Months={Months}
                      size="true"
                      InputMonths={InputMonths}
                      handleMonth={handleMonth}
                    />
                  </ContentSelect>
                )}
                <ContentSelect>
                  <LessonMonth
                    Months={Months}
                    size="true"
                    InputMonths={InputMonths}
                    handleMonth={handleMonth}
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
                    Procced to pay
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

export default Modal;
