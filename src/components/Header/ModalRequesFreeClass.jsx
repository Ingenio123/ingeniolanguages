import "./HeaderStyle.scss";
import styled from "styled-components";
import { Form } from "../ModalsForm/styles";
import PhoneInput from "react-phone-input-2";
import GoogleButton from "../GoogleButton/Google";
import { CountryDropdown } from "react-country-region-selector";
import { useEffect, useCallback, useRef, useState, CSSProperties } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { isAuth } from "../../helpers/Auth";
import { SendDataforEmail } from "../../helpers/User";
import Select from "react-select";

import {
  IoEyeOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoEyeOffOutline,
  IoCloseSharp,
} from "react-icons/io5";

import {ModalSucess}  from './ModalSuccess'
const options = [
  {
    label: "Spanish",
    value: "Spanish",
  },
  {
    label: "French",
    value: "French",
  },
  {
    label: "English",
    value: "English",
  },
  {
    label: "German",
    value: "German",
  },
  {
    label: "Korean",
    value: "Korean",
  },
  {
    label: "Russian",
    value: "Russian",
  },
];

const OptionLevel = [
  {
    label: "Beginner(A1)",
    value: "A1",
  },
  {
    label: "Pre-intermediate (A2)",
    value: "A2",
  },
  {
    label: "Intermediate (B1)",
    value: "B1",
  },
  {
    label: "Upper-intermediate (B2)",
    value: "B2",
  },
  {
    label: "Advanced (C1 - C2)",
    value: "c1-c2",
  },
];

const AboutOptions = [
  {
    label: " Search Engines (other websites, blogs, videos, pictures)",
    value: "Search Engines ",
  },
  {
    label: "Local press",
    value: "Localpress",
  },
  {
    label: "Internet Ads",
    value: "InternetAds",
  },
  {
    label: "Social Media",
    value: "SocialMedia",
  },
  {
    label: "Customer Review Sites",
    value: "ReviewSites",
  },
  {
    label: "Refferal",
    value: "Refferal",
  },
  {
    label: "Customer Testimonials",
    value: "CustomerTestimonials",
  },
  {
    label: "Other",
    value: "Other",
  },
];



export default function ModalRequesFreeClass({
  route,
  ShowForm,
  setShowForm,
  SignUp,
  isLogged,
  hasLoginError,
  sendDataForEmail,
  
}) {
  const modalRef = useRef();
  const [ShowPassword, setShowPassword] = useState(true);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(true);
  const [valueCountry, setValueCountry] = useState(null);
  const [valorPhone, setValorPhone] = useState({ phone: null });
  const [value, setValues] = useState(null);
  const history = useHistory();
  const [ClickSubmit, setClickSubmit] = useState(false);
  const [CountryLive, setCountryLive] = useState(null);

  const [ModalSuccess, setModalSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    reset,
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

  const SelectCountryData = (data) => {
    setValueCountry(data);
  };

  const SendData = async (data) => {
    console.log(data);
    const country = valueCountry;
    const cellphone = valorPhone.phone;
    console.log(country, cellphone, CountryLive);
    const res  = await SendDataforEmail(data, country, cellphone, CountryLive);
    if(res){
      setModalSuccess(true)
      reset();
    }
  };

  const SelectCountryLive = (data) => {
    setValues(data.toLowerCase());
    setCountryLive(data);

    setClickSubmit(true);
  };

  const customStyles = {
    input: (provided, state) => ({
      ...provided,
      fontSize: ".9rem",
      padding: "0.5rem 0.75rem",
      lineHeight: "normal",
    }),
    control: (provided, state) => ({
      ...provided,
      height: "20px",
      borderColor: "silver",
      minHeight: "37px",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      opacity: 0,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#495057",
      fontSize: ".9rem",
    }),
  };


  const goBack = () => {
    setShowForm(prev => !prev);
    setModalSuccess(prev => !prev);
  }

  
  

  return (
    <div>
      {ShowForm ? (
        <div className="windowModal" onClick={CloseModal} ref={modalRef}>
          <ModalWrapper>
            {/* {Object.keys(error).length > 0 && <span>{error.message}</span>} */}
            <ContainerForm>
              <Form onSubmit={handleSubmit((e) => SendData(e))}>
                <Form__Content>
                  <div>
                    <Content__Label>First Name</Content__Label>
                    <InputForm
                      type="text"
                      {...register("FirstName", {
                        required: "First Name Required",
                      })}
                    />
                    {errors.FirstName && (
                      <span className="text-small text-danger">
                        {errors.FirstName?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Content__Label>Last Name</Content__Label>
                    <InputForm
                      type="text"
                      {...register("LastName", {
                        required: "Last Name  Required",
                      })}
                    />
                    {errors.LastName && (
                      <span className="text-small text-danger">
                        {errors.LastName?.message}{" "}
                      </span>
                    )}
                  </div>
                </Form__Content>
                <Form__Content>
                  <div>
                    <Content__Label>Age</Content__Label>
                    <InputForm
                      type="number"
                      {...register("age", {
                        required: "Age  Required",
                      })}
                    />
                    {errors.age && (
                      <span className="text-small text-danger">
                        {" "}
                        {errors.age?.message}{" "}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="">Gender</label>
                    <SelectGender
                      {...register("Gender", {
                        required: "Gender  required",
                      })}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </SelectGender>
                    {errors.Gender && (
                      <span className="text-small text-danger">
                        {" "}
                        {errors.Gender?.message}{" "}
                      </span>
                    )}
                  </div>
                </Form__Content>
                <Content__Email>
                  <ContenedorRelativo>
                    <Content__Label>E-mail</Content__Label>
                    <InputForm
                      icons={true}
                      type="email"
                      {...register("email", {
                        required: "E-mail  required",
                      })}
                    />
                    {errors.email && (
                      <span className="text-small text-danger">
                        {errors.email?.message}
                      </span>
                    )}
                    <IconMail />
                  </ContenedorRelativo>
                </Content__Email>
                <Form__Content>
                  <div>
                    <label>Where do you live?</label>
                    <SelectCountry
                      valueType="short"
                      value={valueCountry}
                      onChange={(e) => SelectCountryLive(e)}
                      defaultOptionLabel="Select country "
                    />
                  </div>
                  <div>
                    <label>What's your phone number?</label>
                    <InputNumber
                      country={value || "us"}
                      specialLabel={""}
                      value={valorPhone.phone}
                      onChange={(phone) => setValorPhone({ phone })}
                      inputStyle={{ fontSize: ".9rem" }}
                    />
                  </div>
                </Form__Content>
                <Form__Content>
                  <div>
                    <label>Where are you from?</label>
                    <SelectCountry
                      valueType="short"
                      value={valueCountry}
                      onChange={(e) => SelectCountryData(e)}
                      defaultOptionLabel="Select country"
                    />
                  </div>
                  <div>
                    <label>How did you hear about us?</label>
                    <Controller
                      name={"AboutUs"}
                      control={control}
                      render={({ field: { value, onChange } }) => {
                        return (
                          <SelectAtom
                            placeholder="Select"
                            styles={customStyles}
                            options={AboutOptions}
                            onChange={(val) => onChange(val.value)}
                            value={AboutOptions.find((c) => c.value === value)}
                          />
                        );
                      }}
                    />
                  </div>
                </Form__Content>

                <ContentSelectOrganism>
                  <ContentSelectMolecula>
                    <label>I want to learn...</label>
                    <Controller
                      name={"Language"}
                      control={control}
                      render={({ field: { value, onChange } }) => {
                        return (
                          <SelectAtom
                            placeholder="Select language"
                            styles={customStyles}
                            options={options}
                            onChange={(val) => onChange(val.value)}
                            value={options.find((c) => c.value === value)}
                          />
                        );
                      }}
                    />
                  </ContentSelectMolecula>
                  <ContentSelectMolecula>
                    <label>My level is...</label>

                    <Controller
                      name={"Level"}
                      control={control}
                      render={({ field: { value, onChange } }) => {
                        return (
                          <Select
                            placeholder="Select level"
                            options={OptionLevel}
                            styles={customStyles}
                            onChange={(val) => onChange(val.value)}
                            value={OptionLevel.find((c) => c.value === value)}
                          />
                        );
                      }}
                    />
                  </ContentSelectMolecula>
                </ContentSelectOrganism>
                <ContentTextArea>
                  <label>My goals and expectations are...</label>
                  <TextAreaAtom {...register("Goals")}></TextAreaAtom>
                </ContentTextArea>
                <Content_Center>
                  <ButtonSubmit>
                    Submit to request a free demo lesson
                  </ButtonSubmit>
                </Content_Center>
              </Form>

              <IconClose onClick={() => setShowForm((prev) => !prev)} />
            </ContainerForm>
          </ModalWrapper>
                      {/* modal success */}
                      {ModalSuccess && <ModalSucess goBackF={goBack} />}
        </div>
      ) : null}
    </div>
  );
}

const InputNumber = styled(PhoneInput)`
  font-size: 0.9rem;
`;

const ContentTextArea = styled.div`
  margin: 0.5rem 0;
`;
const TextAreaAtom = styled.textarea`
  width: 100%;
  border: 1px solid silver;
  border-radius: 4px;
  padding: 0.5rem;
  &:focus {
    border-color: #1d4ed8;
  }
`;

const ContentSelectOrganism = styled.div`
  width: 100%;
  display: flex;
  column-gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ContentSelectMolecula = styled.div`
  /* border: 1px solid red; */
  width: 50%;
`;

const SelectAtom = styled(Select)``;
const LabelAtom = styled.label`
  font-size: 0.9rem;
  color: #18181b;
`;

const ModalWrapper = styled.div`
  width: 40vw;
  height: 560px;
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
  div {
    font-size: 0.9rem;
  }
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
  font-size: 0.9rem;
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

  color: #495057;
  border-radius: 5px;
  width: 100%;
  font-size: 0.9rem;
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
