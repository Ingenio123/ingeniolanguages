import "./HeaderStyle.scss";
import styled from "styled-components";
import { Form } from "../ModalsForm/styles";
import PhoneInput from "react-phone-input-2";
import GoogleButton from "../GoogleButton/Google";
import { CountryDropdown } from "react-country-region-selector";
import { useEffect, useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { isAuth } from "../../helpers/Auth";

import {
  IoEyeOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoEyeOffOutline,
  IoCloseSharp,
} from "react-icons/io5";

export default function ModalRequesFreeClass({
  ShowForm,
  setShowForm,
  SignUp,
  isLogged,
}) {
  const modalRef = useRef();
  const [ShowPassword, setShowPassword] = useState(true);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(true);
  const [valueCountry, setValueCountry] = useState(null);
  const [valorPhone, setValorPhone] = useState({ phone: null });
  const [value, setValue] = useState(null);
  const history = useHistory();
  const [ClickSubmit, setClickSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   if (isLogged) {
  //     return history.push("/private");
  //   }
  // }, [setClickSubmit]);

  const CloseModal = (e) => {
    if (modalRef.current === e.target) {
      setShowForm(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && ShowForm) {
        setShowForm(false);
      }
    },
    [setShowForm, ShowForm]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  const OnclickShowpassword = () => {
    setShowPassword(!ShowPassword);
  };
  const OnclickShowConfirmPassword = () => {
    setShowConfirmPassword(!ShowConfirmPassword);
  };

  const SendData = async (data) => {
    console.log(data);
    const country = valueCountry;
    const cellphone = valorPhone.phone;
    const res = await SignUp({ data, country, cellphone });

    if (res) {
      if (isAuth()) {
        if (isAuth().rol === "admin") return history.push("/admin");
        if (isAuth().rol === "teacher") return history.push("/teacherPage");
        if (isAuth().rol === "user" || isAuth().rol === "student") {
          return history.push("/private");
        }
      }
    }
  };

  const SelectCountryData = (data) => {
    setValue(data.toLowerCase());
    setValueCountry(data);

    setClickSubmit(true);
  };

  return (
    <div>
      {ShowForm ? (
        <div className="windowModal" onClick={CloseModal} ref={modalRef}>
          <ModalWrapper>
            <ContainerForm>
              <Form onSubmit={handleSubmit((e) => SendData(e))}>
                <Form__Content>
                  <div>
                    <Content__Label>First Name</Content__Label>
                    <InputForm
                      type="text"
                      {...register("FirstName", {
                        require: "First Name is Required",
                      })}
                    />
                  </div>
                  <div>
                    <Content__Label>Last Name</Content__Label>
                    <InputForm
                      type="text"
                      {...register("LastName", {
                        required: "Last Name is Required",
                      })}
                    />
                  </div>
                </Form__Content>
                <Form__Content>
                  <div>
                    <Content__Label>Age</Content__Label>
                    <InputForm
                      type="number"
                      {...register("age", {
                        required: "Age is Required",
                      })}
                    />
                  </div>
                  <div>
                    <label htmlFor="">Gender</label>
                    <SelectGender
                      {...register("Gender", {
                        required: "Gender is required",
                      })}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </SelectGender>
                  </div>
                </Form__Content>
                <Form__Content>
                  <div>
                    <SelectCountry
                      valueType="short"
                      value={valueCountry}
                      onChange={(e) => SelectCountryData(e)}
                    />
                  </div>
                  <div>
                    <PhoneInput
                      country={value}
                      specialLabel={""}
                      value={valorPhone.phone}
                      onChange={(phone) => setValorPhone({ phone })}
                    />
                  </div>
                </Form__Content>
                <Content__Email>
                  <ContenedorRelativo>
                    <Content__Label>E-mail</Content__Label>
                    <InputForm
                      icons={true}
                      type="email"
                      {...register("email", {
                        require: "E-mail is required",
                      })}
                    />
                    <IconMail />
                  </ContenedorRelativo>
                </Content__Email>
                <Form__Content>
                  <ContenedorRelativo>
                    <Content__Label>Password</Content__Label>
                    <InputForm
                      icons={true}
                      type={ShowPassword ? "password" : "text"}
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <div onClick={() => OnclickShowpassword()}>
                      {ShowPassword ? <DontShow /> : <Icon />}
                    </div>
                    <IconLock />
                  </ContenedorRelativo>
                  <ContenedorRelativo>
                    <Content__Label>Confirm Password</Content__Label>
                    <InputForm
                      icons={true}
                      type={ShowConfirmPassword ? "password" : "text"}
                      {...register("confirmPassword", {
                        required: "Confirm password is required",
                      })}
                    />
                    <div onClick={() => OnclickShowConfirmPassword()}>
                      {ShowConfirmPassword ? <DontShow /> : <Icon />}
                    </div>
                    <IconLock />
                  </ContenedorRelativo>
                </Form__Content>
                <Content_Center>
                  <ButtonSubmit>Sing Up</ButtonSubmit>
                </Content_Center>
              </Form>
              <LineCenter>Or</LineCenter>
              <Centrar>
                <GoogleButton contentSign={"Sign Up with Google"} />
              </Centrar>
              <IconClose onClick={() => setShowForm((prev) => !prev)} />
            </ContainerForm>
            <Card_Publicidad>
              <TextCardPublicidad>YOUR FIRST CLASS</TextCardPublicidad>
              <TextBold>100%</TextBold>
              <TextCardPublicidad>FREE</TextCardPublicidad>
            </Card_Publicidad>
            <PositionWave>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#314584"
                  fill-opacity="1"
                  d="M0,96L48,101.3C96,107,192,117,288,122.7C384,128,480,128,576,138.7C672,149,768,171,864,165.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </PositionWave>
          </ModalWrapper>
        </div>
      ) : null}
    </div>
  );
}

const ModalWrapper = styled.div`
  width: 40vw;
  height: 90vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  padding: 2rem 0;
  border-radius: 4px;
  @media screen and (max-width: 900px) {
    width: 50vw;
  }
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
  @media screen and (max-width: 400px) {
    width: 90vw;
  }
`;
const ContainerForm = styled.div`
  position: absolute;
  top: 0;
  background-color: transparent;
  width: 100%;
  padding: 1rem;
  z-index: 2;
`;
const Form__Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transition: all 0.3s ease-in-out;
  column-gap: 0.5rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;
const Content__Label = styled.label`
  font-size: 0.9rem;
  color: #314578;
`;
const InputForm = styled.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  padding: ${(props) =>
    props.icons ? "0.3rem  1.8rem 0.3rem 1.8rem" : "0.3rem"};
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.3;
  &:focus {
    border: 1px solid #1e88e5;
  }
`;
const Content__Email = styled.div`
  margin-bottom: 0.5rem;
`;

const Content_Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonSubmit = styled.button`
  margin: 0 auto;
  border: none;
  outline: 0;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  letter-spacing: 1px;
  background: #334588;
  margin-bottom: 0.5rem;
  &:hover {
    background: #312e81;
  }
`;
const Card_Publicidad = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20px;
  background-color: #fff;
  border-radius: 1rem;
  z-index: 2;
  width: 12rem;
  height: 8rem;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 5px solid #1d4ed8;
  box-shadow: 0px 7px 27px -11px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 0px 7px 27px -11px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 0px 7px 27px -11px rgba(0, 0, 0, 0.66);
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const TextCardPublicidad = styled.span`
  font-size: 1rem;
  color: #71717a;
  font-weight: 600;
`;
const TextBold = styled.span`
  font-size: 2.5rem;
  color: #18181b;
  font-weight: bold;
`;
const PositionWave = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

// line separator whith text in  center
const LineCenter = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #636e72;
  font-size: 1rem;
  &::before,
  ::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid rgba(99, 110, 114, 0.5);
  }
  &:not(:empty)::before {
    margin-right: 1rem;
  }
  &:not(:empty)::after {
    margin-left: 1rem;
  }
`;
//end line

const SelectGender = styled.select`
  /* position */
  /* box model */
  width: 100%;
  padding: 0.4rem 1rem 0.4rem 0.5rem;
  /* texto */
  font-size: 1rem;
  line-height: 1.3;
  /* visuales */
  border: 1px solid #e2e8f0;
  border-radius: 4px;

  /* otros */
`;

const Centrar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectCountry = styled(CountryDropdown)`
  border: 1px solid silver;
  padding: 0.5rem 0.75rem !important;
  font-size: 1rem;
  color: #495057;
  border-radius: 5px;
  width: 100%;
  margin-top: 0.9rem;
`;
const Icon = styled(IoEyeOutline)`
  position: absolute;
  top: 29px;
  right: 10px;
  font-size: 1.05rem;
  &:hover {
    cursor: pointer;
  }
`;
const IconLock = styled(IoLockClosedOutline)`
  position: absolute;
  top: 28px;
  left: 5px;
  font-size: 1.05rem;
`;
const IconMail = styled(IoMailOutline)`
  position: absolute;
  top: 28px;
  left: 5px;
  font-size: 1.05rem;
`;
const DontShow = styled(IoEyeOffOutline)`
  position: absolute;
  top: 29px;
  right: 10px;
  font-size: 1.05rem;
  &:hover {
    cursor: pointer;
  }
`;
const ContenedorRelativo = styled.div`
  position: relative;
`;
const IconClose = styled(IoCloseSharp)`
  /* position */
  position: absolute;
  top: 5px;
  right: 10px;
  /* box model */
  /* propiedades texto */
  font-size: 1.5rem;

  /* propiedades visuales (color - background bordes) */
  color: #18181b;
  border: none;
  cursor: pointer;
`;
