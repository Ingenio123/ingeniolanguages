import { useState } from "react";
import styled from "styled-components";
import Inglaterra from "../../assets/images/EnglishImage.jpg";
import Espanish from "../../assets/images/SpainImage.jpg";
import Francia from "../../assets/images/frenchImg.jpg";
import { FaTrashAlt } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { Delete_Package } from "../../redux/actions/packageAction";
// import {Link} from 'react-router-dom'
import { isAuth } from "../../helpers/Auth";
import ModalSignIn from "../ModalsForm/ModalSignIn";
import { IoLogoPaypal, IoCardSharp } from "react-icons/io5";
import Paypal from "../../assets/images/svgs/paypal.svg";
import axios from "axios";
import Url from "../Urls";
import { Redirect } from "react-router-dom";
import ProgressStetpBar from "../modalsPackage/ProgressStetpBar";

// type tarjets
import marcasTarjetas from "../../assets/images/marcas-tarjetas.png";

export default function OrderPay(props) {
  // States
  const { items } = useSelector((state) => state.package);
  // states   Modal
  const [ShowModal, setShowModal] = useState(false);
  // end State Modal
  const [ClickPaypal, setClickPaypal] = useState({
    click: false,
    priceTotal: "",
    datosArray: "",
  });
  const dispatch = useDispatch();
  const ShowBanderas = (idiom) => {
    switch (idiom) {
      case "English":
        return <ImgIdiom src={Inglaterra} />;
      case "Spanish":
        return <ImgIdiom src={Espanish} />;
      case "French":
        return <ImgIdiom src={Francia} />;
      case "Korean":
        return (
          <ImgIdiom src="https://static.euronews.com/articles/stories/06/17/53/80/1440x810_cmsv2_a0a5e7cc-ffae-5264-a7c6-8bd86d6b94e7-6175380.jpg" />
        );

      case "Germany":
        return (
          <ImgIdiom src="https://udgtv.com/wp-content/uploads/2018/12/Gobierno-Alemani-efectococuyo.jpg" />
        );
      case "Russian":
        return (
          <ImgIdiom src="https://proyectoviajero.com/wp-content/uploads/2021/05/plaza-roja-moscu.jpg" />
        );

      default:
        return <ImgIdiom src={idiom} />;
    }
  };

  const ClickDelete = (id) => {
    dispatch(Delete_Package(id));
    if (items.length === 1) {
      dispatch({ type: "Remove" });
    }
  };

  let res = "";

  if (items) {
    const arrayPrices = [];

    items.map((val) => arrayPrices.push(val.price));

    res = items.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);

    res = parseFloat(res).toFixed(2);
  }

  const VerifyIsAuth = () => {
    dispatch({
      type: "TYPE_METHOD",
      payload: "tarjet",
    });
    if (isAuth()) {
      props.history.push("/payclient");
    }

    OpenModal();
    console.log("No estas Authenticado");
  };

  const OpenModal = () => {
    console.log("Open");
    setShowModal((prev) => !prev);
  };

  const HanldePay = async (valor) => {
    dispatch({
      type: "TYPE_METHOD",
      payload: "paypal",
    });
    if (isAuth()) {
      return props.history.push("/paypalorder");
    }
    setClickPaypal({
      ...ClickPaypal,
      click: true,
      priceTotal: valor,
      datosArray: items,
    });
    OpenModal();
  };

  return (
    <>
      <Container>
        <SectionOrder>
          <ProgressStetpBar />
          {items.map((item, index) => (
            <div key={index}>
              <BoxContentOrderSummary>
                <BoxImages>
                  {ShowBanderas(item.kids ? item.img : item.idiom)}
                </BoxImages>
                <BoxContent>
                  <ListContent>
                    <ItemListContent>
                      {" "}
                      <TextFuerte>Language: </TextFuerte>
                      {item.idiom} {item.kids && "(Kids)"}
                    </ItemListContent>

                    <ItemListContent>
                      <TextFuerte>Duration of lessons:</TextFuerte> {item.time}{" "}
                      minutes
                    </ItemListContent>
                    <ItemListContent>
                      <TextFuerte>Number of lessons: </TextFuerte>
                      {item.lesson} {item.lesson > 1 ? "lessons" : "lesson"} per
                      month
                    </ItemListContent>
                    <ItemListContent>
                      <TextFuerte>Number of months:</TextFuerte> {item.months}{" "}
                      {item.months > 1 ? "months" : "month"}
                    </ItemListContent>
                    {item?.cantPersons > 1 && (
                      <ItemListContent>
                        <TextFuerte>Number of students:</TextFuerte>{" "}
                        {item.cantPersons} students
                      </ItemListContent>
                    )}
                    <br />
                    <ItemListContent>Subtotal: ${item.price}</ItemListContent>
                  </ListContent>
                </BoxContent>

                <BoxButton>
                  <ButtonDelete onClick={() => ClickDelete(item.id)}>
                    <Icontrash />
                  </ButtonDelete>
                </BoxButton>
              </BoxContentOrderSummary>
              <hr style={{ margin: "0" }} />
            </div>
          ))}
          <Box>
            <BoxPrices>
              <TextPrices>$ {res} </TextPrices>
              {/* <img
                src={marcasTarjetas}
                alt="iumages"
                style={{ width: "196px", marginBottom: ".5rem" }}
              /> */}
              {/* <ProceedPay onClick={items.length > 0 ? VerifyIsAuth : null}>
                <IconsCard /> Debit or Credit card
              </ProceedPay> */}
              {/* <span className="or">or</span> */}
              <Paypaypal
                onClick={items.length > 0 ? () => HanldePay(res) : null}
              >
                <img src={Paypal} alt="Paypal" />
              </Paypaypal>

              {/* <PaypalButton valorPago={res} /> */}
            </BoxPrices>
          </Box>
        </SectionOrder>
      </Container>
      <ModalSignIn
        ShowModal={ShowModal}
        setShowModal={setShowModal}
        ClickPaypal={ClickPaypal}
      />
    </>
  );
}

const ImgIdiom = styled.img`
  width: 200px;
  height: 141px;
  border-radius: 4px;
`;

const Container = styled.div`
  margin: 0px 40px !important;
`;

const SectionOrder = styled.section`
  width: 100%;
`;
const TextOrder = styled.h2`
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 0 !important;
`;
const BoxContentOrderSummary = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  transition: 0.3s ease;
  margin: 20px 0;
  /* border: 1px solid green; */
  &:hover {
    background: rgb(227, 242, 253);
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;
const BoxImages = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const BoxContent = styled.div`
  width: 100%;
  margin-left: 1.2rem;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
const ListContent = styled.ul`
  list-style: none;
  margin-top: 20px;
  /* border: 1px solid black; */
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;
const ItemListContent = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
`;
const TextFuerte = styled.span`
  /* font-weight: 700; */
  /* color:#2f3542; */
  color: #ff3946;
`;
const ButtonDelete = styled.div`
  border-radius: 50%;
  background-color: #ff4d4d;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #ff3838;
  }
`;
const Icontrash = styled(FaTrashAlt)`
  color: white;
  font-size: 1rem;
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BoxPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 2rem;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
  .or {
    margin: 0 auto;
    font-size: 1.2rem;
    font-weight: 500;
    color: #71717a;
  }
`;
const TextPrices = styled.span`
  font-size: 40px;
`;
const ProceedPay = styled.button`
  padding: 0.6rem 1rem;
  border: none;
  background-color: #314584;
  color: white;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1;
  font-weight: 400;

  display: flex;
  align-items: center;
`;

const Paypaypal = styled.button`
  border: none;
  border-radius: 4px;
  background: #f5bd56;
  padding: 0.4rem 1rem;
  width: 198px;
`;

const IconsCard = styled(IoCardSharp)`
  color: white;
  margin-right: 2px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
