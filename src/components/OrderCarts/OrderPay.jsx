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
      default:
        return "nada";
    }
  };

  const ClickDelete = (idiom) => {
    dispatch(Delete_Package(idiom));
    if (items.length === 1) {
      dispatch({ type: "Remove" });
    }
  };

  let res = "";

  if (items) {
    const arrayPrices = [];

    items.map((val) => arrayPrices.push(val.price));

    console.log(arrayPrices);

    res = items.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);

    res = parseFloat(res).toFixed(2);
  }

  const VerifyIsAuth = () => {
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
    if (isAuth()) {
      const EndPoint = Url.url + "/paypal/createPayment";
      console.log("items:", items);
      const { data } = await axios.post(EndPoint, {
        priceTotal: valor,
        datosArray: items,
      });
      console.log(data);
      return window.location.assign(data.link);
    }
    setClickPaypal({
      ...ClickPaypal,
      click: true,
      priceTotal: valor,
      datosArray: items,
    });
    OpenModal();
    // console.log(data.data);
    // const ultime = data.data.links.filter((e) => {
    //   return e.rel === "approve";
    // });
    // props.history.push(`${ultime[0].href}`);
    // window.open(`${ultime[0].href}`);
  };

  return (
    <>
      <Container>
        <SectionOrder>
          <ProgressStetpBar />
          {items.map((item, index) => (
            <div key={index}>
              <BoxContentOrderSummary>
                <BoxImages>{ShowBanderas(item.idiom)}</BoxImages>
                <BoxContent>
                  <ListContent>
                    <ItemListContent>
                      {" "}
                      <TextFuerte>Language: </TextFuerte>
                      {item.idiom}
                    </ItemListContent>
                    <ItemListContent>
                      {" "}
                      <TextFuerte>Lesson type:</TextFuerte> Individual.
                    </ItemListContent>
                    <ItemListContent>
                      <TextFuerte>Number of lessons: </TextFuerte>
                      {item.lesson}{" "}
                    </ItemListContent>
                    <ItemListContent>
                      <TextFuerte>Duration of lessons:</TextFuerte> {item.time}
                    </ItemListContent>
                    <br />
                    <ItemListContent>Subtotal: ${item.price}</ItemListContent>
                  </ListContent>
                </BoxContent>

                <BoxButton>
                  <ButtonDelete onClick={() => ClickDelete(item.idiom)}>
                    <Icontrash />
                  </ButtonDelete>
                </BoxButton>
              </BoxContentOrderSummary>
              <hr style={{ margin: "0" }} />
            </div>
          ))}
          <BoxPrices>
            <div>
              <TextPrices>$ {res} </TextPrices>
              <br />
              <ProceedPay onClick={VerifyIsAuth}>
                <IconsCard /> Debit or Credit card
              </ProceedPay>
            </div>
            {/* <PaypalButton valorPago={res} /> */}
            <Paypaypal onClick={() => HanldePay(res)}>
              <img src={Paypal} alt="Paypal" />
            </Paypaypal>
          </BoxPrices>
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
  &:hover {
    background: rgb(227, 242, 253);
  }
`;
const BoxImages = styled.div``;
const BoxContent = styled.div`
  width: 70%;
  margin-left: 1.2rem;
`;
const ListContent = styled.ul`
  list-style: none;
  margin-top: 20px;
`;
const ItemListContent = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
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
  margin-bottom: 1rem;
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
