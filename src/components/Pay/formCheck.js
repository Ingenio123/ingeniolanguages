import styled from "styled-components";
import { useForm } from "react-hook-form";

import { FormCheck, BoxForm, FormCheckOut, Box_input, Input } from "./styles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { SHIPPING_DATA, CANCEL_SHIPPING_DATA } from "../../redux/actions/types";
import { useDispatch } from "react-redux";
import { SendDataPayClient } from "./AxiosFormPay";

import DatafastPay from "./FormPayDatafast";
import { isAuth } from "../../helpers/Auth";
import BoxVerify from "./BoxVerify";
import ProgressStetpBar from "../modalsPackage/ProgressStetpBar";

import PhoneInput from "react-phone-input-2";

import { CountryDropdown } from "react-country-region-selector";

function CheckOut(props) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { items } = useSelector((state) => state.package);
  const { valorDescuento } = useSelector((state) => state.itemPackage);

  const [Loader, setLoader] = useState(false);
  const [ActiveButton, setActiveButton] = useState(true);
  const [Show, setShow] = useState(false);
  const [IdCheck, setIdCheck] = useState("");
  const [Valor, setValor] = useState({
    phone: null,
  });
  let res = 0;

  if (items) {
    const arrayPrices = [];

    items.map((val) => arrayPrices.push(val.price));

    console.log(arrayPrices);

    res = items.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);

    console.log("resultado ", res);
  }

  // ############## CALCULO DEL BEFORE TAX #############

  function ValorTotal() {
    let valIva = 1.12;
    let CobroIva = res / 1.12;
    var valortotal = res - CobroIva;
    var valorn = parseFloat(valortotal).toFixed(2);
    console.log("Valor n", valorn);
    return valorn;
  }

  const handleArrowLeft = () => {
    props.history.push("/");

    dispatch({
      type: CANCEL_SHIPPING_DATA,
    });
  };

  const HandleData = async (data) => {
    let userData;

    if (isAuth()) {
      userData = JSON.parse(window.localStorage.getItem("user"));
    } else {
      window.localStorage.setItem("Auth", "NotAuth");
      return props.history.push("/SignUp");
    }

    dispatch({
      type: SHIPPING_DATA,
      shippingDataForm: data,
    });

    if (res > 0) {
      setActiveButton(false);
      // const Cobrar = res + ValorTotal();
      const Cobrar = parseInt(res) + parseFloat(ValorTotal());
      const resultadoFunction = await SendDataPayClient(
        data,
        Cobrar,
        res,
        items,
        userData._id,
        userData.email,
        Valor.phone
      );
      setIdCheck(resultadoFunction.resultados.id);
      setShow(true);
    }
  };

  function PrintWind(res, val) {
    var valorn = res - val;
    var valorn = parseFloat(valorn).toFixed(2);
    return valorn;
  }

  function ValorTotales() {
    if (valorDescuento == 1) {
      return parseFloat(res).toFixed(2);
    }
    var calculos = res * valorDescuento;
    var total = res - calculos;
    return parseFloat(total).toFixed(2);
  }

  return (
    <div>
      <Section className="container">
        <FormCheck>
          <BoxForm onSubmit={handleSubmit((data) => HandleData(data))}>
            <Text>
              <h5>
                We need your information to complete your purchase process
              </h5>
            </Text>
            <FormCheckOut>
              <ProgressStetpBar />

              <Box_input>
                <TextLabel htmlFor="firstName">First Name</TextLabel>
                <Input
                  id="firstName"
                  type="text"
                  {...register("firstName", {
                    required: "First Name  required",
                    maxLength: {
                      value: 15,
                      message: "Maximum characters: 15",
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum of characters is 2",
                    },
                    pattern: {
                      value: /^[a-zA-Z]*$/,
                      value: /[A-Za-z -äöüÄÖÜßéÉèÈêÊ...]{2,}/,
                      message: "Please enter your first name only",
                    },
                  })}
                />
                <span className="text-danger text-small">
                  {errors.firstName?.message}
                </span>
              </Box_input>
              <Box_input>
                <TextLabel htmlFor="SecondName">Middle Name </TextLabel>
                <Input
                  id="SecondName"
                  type="text"
                  {...register("secondName", {
                    required: "Middle Name  required",
                    maxLength: {
                      value: 15,
                      message: "Maximum characters: 15",
                    },
                    minLength: {
                      value: 2,
                      message: "minimum of characters is 2",
                    },
                    pattern: {
                      value: /[A-Za-z -äöüÄÖÜßéÉèÈêÊ...]{2,}/,
                      message: "No se Aceptan Espacios ni caracteres numericos",
                    },
                  })}
                />
                <span className="text-danger text-small">
                  {errors.secondName?.message}
                </span>
              </Box_input>
              <Box_input>
                <TextLabel htmlFor="LastName">Last Name</TextLabel>
                <Input
                  id="LastName"
                  type="text"
                  {...register("lastName", {
                    required: "Last Name  required",
                    maxLength: {
                      value: 15,
                      message: "Maximum characters: 15",
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum characters: 2",
                    },
                    pattern: {
                      value: /[A-Za-z -äöüÄÖÜßéÉèÈêÊ...]{2,}/,
                      message: "No se Aceptan Espacios ni caracteres numericos",
                    },
                  })}
                />
                <span className="text-danger text-small">
                  {" "}
                  {errors.lastName?.message}{" "}
                </span>
              </Box_input>
              <Box_input>
                <TextLabel htmlFor="Cedula">ID / Passport Number </TextLabel>
                <Input
                  id="Cedula"
                  type="text"
                  {...register("numberCedula", {
                    required: "ID  /  Passport Number  required",
                    maxLength: {
                      value: 10,
                      message: "Maximum characters: 10",
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum  characters: 2",
                    },
                    pattern: {
                      value: /^[0-9a-zA-Z]+$/,
                      message: "Error. solo numero y letras  ",
                    },
                  })}
                />
                <span className="text-danger text-small">
                  {errors.numberCedula?.message}
                </span>
              </Box_input>

              <Box_input>
                <TextLabel htmlFor="Country">Country</TextLabel>
                <Input
                  id="Country"
                  type="text"
                  {...register("Country", {
                    required: "Country  required",
                    maxLength: {
                      value: 2,
                      message: "Maximum characters is 2",
                    },
                    minLength: {
                      value: 1,
                      message: "minimum characters is 1",
                    },
                    pattern: {
                      value: /^[A-Z]+$/,
                      message: "SOLO LETRAS MAYUSCULAS NO ESPACIOS ",
                    },
                  })}
                />
                <span className="text-danger text-small">
                  {errors.Country?.message}{" "}
                </span>
              </Box_input>
              <Box_input>
                <TextLabel htmlFor="NumeroCell">Phone Number </TextLabel>
                <PhoneInput
                  country="us"
                  value={Valor.phone}
                  specialLabel={""}
                  onChange={(phone) => setValor({ phone })}
                />
                {/* <TextLabel htmlFor="NumeroCell">Phone Number </TextLabel>
                <Input
                  id="NumeroCell"
                  type="text"
                  {...register("numberCellPhone", {
                    required: "Phone number  required",
                    maxLength: {
                      value: 15,
                      message: "Maximum characters is 15",
                    },
                    minLength: {
                      value: 2,
                      message: "minimum characters is 2",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "ERR SOLO NUMEROS NO ESPACIOS",
                    },
                  })}
                />
                <span className="text-danger text-small">
                  {errors.numberCellPhone?.message}{" "}
                </span> */}
              </Box_input>
              <Box_input>
                <TextLabel htmlFor="City">City</TextLabel>
                <Input
                  id="City"
                  type="text"
                  {...register("City", {
                    required: "City  Required",
                    maxLength: {
                      value: 40,
                      message: "Maximum characters is 15",
                    },
                    minLength: {
                      value: 2,
                      message: "minimum characters is 2",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "ERR SOLO NUMEROS NO ESPACIOS",
                    },
                  })}
                />
                <span className="text-danger text-small">
                  {errors.City?.message}{" "}
                </span>
              </Box_input>
              <Box_input>
                <TextLabel htmlFor="PostCode">Postal / Zip</TextLabel>
                <Input
                  id="PostCode"
                  {...register("PostCode", {
                    required: "Postal / Zip  required",
                    maxLength: {
                      value: 10,
                      message: "Maximum characters is 15",
                    },
                    minLength: {
                      value: 2,
                      message: "minimum characters is 2",
                    },
                    pattern: {
                      value: /^[0-9\s]+$/,
                      message: "Only numbers",
                    },
                  })}
                />
                <span className="text-danger text-small ">
                  {" "}
                  {errors.PostCode?.message}{" "}
                </span>
              </Box_input>
              <Box_button>
                <ButtonCancel>Cancel</ButtonCancel>
                <ButtonSubmit type="submit">Continue</ButtonSubmit>
              </Box_button>
            </FormCheckOut>
          </BoxForm>

          <BoxItemsProduct>
            {Loader ? null : (
              <div>
                <BoxVerify />
                <Line />
                <BoxOrder>
                  <OrderSumary>Order Sumary</OrderSumary>
                  <ItemsOrder end={true}>
                    <span>items: {items ? items.length : "0"} </span>
                  </ItemsOrder>

                  <ItemsOrder>
                    <span>Subtotal:</span>{" "}
                    <span>
                      $ {res !== 0 ? PrintWind(res, ValorTotal()) : 0}
                    </span>
                  </ItemsOrder>

                  <ItemsOrder>
                    <span>Taxes +12%: </span> <span>$ {ValorTotal()} </span>
                  </ItemsOrder>

                  <Line mb={true} />
                  <ItemsOrder>
                    <Order_total>Order Total</Order_total>{" "}
                    <Order_total>
                      $ {res !== 0 ? ValorTotales() : 0}{" "}
                    </Order_total>
                    {/* <Order_total>Order Total</Order_total> <Order_total>$ {res !== 0 ? parseFloat(res).toFixed(2)  : 0} </Order_total> */}
                  </ItemsOrder>
                </BoxOrder>
              </div>
            )}
          </BoxItemsProduct>
          <div>{Show ? <DatafastPay id={IdCheck} /> : ""}</div>
        </FormCheck>
      </Section>
    </div>
  );
}
{
  /* <DatafastPay id={IdCheck} /> */
}
export default CheckOut;

const ButtonCards = styled.button`
  border: none;
  background-color: blueviolet;
  padding: 4px 10px;
  color: white;
  border-radius: 4px;
`;

const BoxSuccess = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const BoxIconSucces = styled.div`
  margin-top: 10px;
  text-align: center;
  width: 80%;
  & > img {
    padding: 10px;
    width: 70%;
  }
  & > div {
    display: flex;
    justify-content: center;
  }
  & div > span {
    text-align: center;
    font-size: 30px;
    color: #27ae60;
  }
`;

const BoxItemsProduct = styled.div`
  width: 100%;
  padding: 10px 30px;
  padding-bottom: 0;
  margin: 10px 0 8px 0;
  grid-area: itemsOrder;
  border-radius: 5px;
  box-shadow: -2px 4px 20px -2px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    justify-self: center;
    width: 90%;
    margin-top: 120px;
    box-shadow: none;
  }
`;
const ButtonPalceOrder = styled.button`
  width: 100%;
  padding: 4px 0;
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #314584;
  font-size: 18px;
  transition: all 0.3s ease-out;
  &:hover {
    background: #5e6c9c;
    border: none;
  }

  &:disabled {
    background: rgba(49, 69, 132, 0.8);
  }
`;
const Line = styled.hr`
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${(props) => (props.mb ? "15px" : "0")};
  margin-top: 20px;
  background: #bec0cb;
`;
const BoxOrder = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 2fr 1fr 1fr 1fr;
`;

const OrderSumary = styled.h4`
  color: #535966;
  font-weight: 700;
  letter-spacing: 0px;
  margin: 20px 0;
  justify-self: start;
`;
const ItemsOrder = styled.div`
  display: flex;
  justify-content: ${(props) => (props.end ? "flex-end" : "space-between")};
  align-items: center;
  font-size: 20px;
  color: #2e384d;
`;

const Order_total = styled.span`
  font-weight: 700;
`;

// ##########################################

const Section = styled.section`
  position: relative;
`;

const Box_button = styled.div`
  display: flex;
  padding: 4px 8px;
  align-self: center;
`;

const ButtonSubmit = styled.button`
  color: #fff;
  font-size: 18px;
  padding: 2px 1rem;
  background: #314584;
  border: none;
  border-radius: 5px;
  height: 35px;
  margin-left: 10px;
  transition: all 0.2s ease-out;
  &:hover {
    font-weight: 700px;
    background: #5e6c9c;
    border: none;
  }
`;

const ButtonCancel = styled.button`
  padding: 2px 1rem;
  background: transparent;
  border: 2px solid #e9ebee;
  border-radius: 5px;
  font-size: 18px;
  color: #535966;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 0px 2px 10px -5px rgba(0, 0, 0, 0.3);
  }
`;
const IconsArrow = styled.div`
  margin-top: 60px;
  margin-left: 26px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const IconsArrowLeft = styled(IoArrowBackCircle)`
  font-size: 50px;
  color: rgba(49, 69, 132);
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #314584;
  padding: 1rem 0;
  border-radius: 5px;
  margin-bottom: 1rem;
  h5 {
    font-size: 1.2rem;
    margin: 0;
    color: #fff;
  }
`;
const TextLabel = styled.label`
  color: #2e384d !important;
`;

const InputCounty = styled(CountryDropdown)`
  border: 1px solid silver;
  padding: 0.4rem 0.75rem;
  font-size: 1rem;
  color: #495057;
  border-radius: 5px;
  width: 100%;
`;
