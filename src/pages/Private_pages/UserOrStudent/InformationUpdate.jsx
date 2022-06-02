import "react-phone-input-2/lib/style.css";
import styled from "styled-components";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import { CountryDropdown } from "react-country-region-selector";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UpdateInformation } from "../../../helpers/User";
import { BiCheck, BiX } from "react-icons/bi";

const options = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

export const InformationUpdate = ({ history }, props) => {
  //librarys
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // end librarys

  //state
  const [Valor, setValor] = useState({ phone: null });
  const [Country, setCountry] = useState(null);
  const [value, setValue] = useState(null);
  const [Gender, setGender] = useState(null);
  const [StatusModal, setModal] = useState(false);
  const [ValueNationality, setValueNationality] = useState(null);
  const [Message, setMessage] = useState({
    message: "",
    error: false,
  });
  // end states
  const selectCountry = (val) => {
    setValue(val);
    setCountry(val.toLowerCase());
  };

  const SelectCountryNationality = (val) => {
    setValueNationality(val);
  };

  const onSubmitForm = async (data) => {
    //services  update information  user
    const { Age, firstName, lastName } = data;

    const valores = {
      Age,
      firstName,
      lastName,
      country: Country,
      phone: Valor.phone,
      gender: Gender.value,
      countryeNationality: ValueNationality,
    };
    //    -> XHR (XmlHttpRequest)
    const { message, error } = await UpdateInformation({ valores });
    if (error) {
      setMessage({
        message,
        error,
      });
      return setModal(true);
    }
    setMessage({
      message,
      error,
    });
    return setModal(true);
  };

  const handleGender = (data) => {
    setGender(data);
  };

  const History = () => {
    Message.error ? history.push("/updateinformation") : history.push("/");
  };

  return (
    <>
      <Container>
        <Form className="form" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form__header">
            <h3 className="title">Personal information</h3>
          </div>
          <div className="form__body">
            <div className="input__group">
              <div className="input__form">
                <label htmlFor="">First Name</label>
                <input type="text" {...register("firstName")} />
              </div>
              <div className="input__form">
                <label htmlFor="">Last Name</label>
                <input type="text" {...register("lastName")} />
              </div>
            </div>
            <div className="input__group">
              <div className="input__form">
                <label htmlFor="">Age</label>
                <input
                  type="number"
                  className="--flex --age"
                  {...register("Age")}
                />
              </div>
              <div className="input__form">
                <label htmlFor="">Gender</label>
                <Select
                  placeholder="Select Gender"
                  value={Gender}
                  options={options}
                  onChange={handleGender}
                />
              </div>
              <div className="input__form --Grow">
                <label htmlFor="">Country of nationality</label>
                {/* <input type="number" className="--flex" /> */}
                <InputCountry
                  valueType="short"
                  defaultOptionLabel="Select Country"
                  value={ValueNationality}
                  onChange={(val) => SelectCountryNationality(val)}
                />
              </div>
            </div>
            <div className="input__group ">
              <div className="input__form ">
                <label className="all" htmlFor="">
                  Country of residence
                </label>
                {/* <input type="number" className="--flex" /> */}
                <InputCountry
                  valueType="short"
                  defaultOptionLabel="Select Country"
                  value={value}
                  onChange={(val) => selectCountry(val)}
                />
              </div>
              <div className="input__form end">
                <label htmlFor="">Phone Number</label>
                <PhoneInputTel
                  specialLabel=""
                  country={Country || "us"}
                  value={Valor.phone}
                  onChange={(phone) => setValor({ phone })}
                />
              </div>
            </div>
          </div>
          <div className="form__footer">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Container>
      {StatusModal && (
        <Modal>
          <div className="card">
            <ContentIcon error={Message.error}>
              {Message.error ? <IconError /> : <IconSuccess />}
            </ContentIcon>
            <TextTile>{Message.error ? "Error " : "Success"}</TextTile>
            <TextParrafo>{Message.message}</TextParrafo>
            <Button onClick={History}>Go Back</Button>
          </div>
        </Modal>
      )}
    </>
  );
};

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContentIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ error }) => (error ? "#FCA5A5" : "#A5F3C2")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #18181b;
  margin-bottom: 1rem;
`;

const IconSuccess = styled(BiCheck)`
  font-size: 1.5rem;
`;
const IconError = styled(BiX)`
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: #18181b;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  min-width: 130px;
  padding: 0.7rem;
  font-size: 1rem;
  line-height: normal;
`;

const TextTile = styled.h6`
  font-size: 1.25rem;
  margin: 0;
  line-height: normal;
  font-weight: 700;
  letter-spacing: -1px;
  color: #18181b;
  margin-bottom: 0.5rem;
`;

const TextParrafo = styled.p`
  margin: 0;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 1rem;
`;

const Container = styled.main`
  max-width: 1920px;
  height: 100%;
  background-color: #f4f4f5;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  h3 {
    font-weight: 500;
  }
  /* border: 1px solid #000; */
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: -1px 3px 9px -1px rgba(0, 0, 0, 0.27);
  width: 50%;
  margin:2rem 0 ;
  input {
    border: 1px solid silver;
    padding: 0.253rem;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    padding: 0.35rem;
    outline: 0;
    :focus {
      border: 1px solid #2684ff;
    }
  }
  label {
    font-size: 1rem;

    margin-right: 2rem;
    color: #52525b;
  }
  .form {
    &__header {
      .title {
        font-size: 1.5rem;
      }
    }
    &__body {
      .input__group {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        .input__form {
          display: flex;
          flex-direction: column;
          width: 50%;
          &--age {
            border: 1px solid black;
            width: 150px !important;
          }
        }
      }
    }
    .--flex {
      flex: 1;
    }

    &__footer {
      button[type="submit"] {
        border: none;
        padding: 0.7rem 1rem;
        background-color: #1d4ed8;
        color: #fff;
        line-height: normal;
        font-size: 1.2rem;
        border-radius: 0.3rem;
        :hover {
          background-color: #2563eb;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    & .form__body .input__group {
      flex-wrap: wrap;
      gap: 2%;
      justify-content: flex-start;
    }
  }
  & .form__body .input__group .input__form {
    width: 48%;
  }
  & .form__body .input__group .--Grow {
    flex-grow: 1;
  }
  & .form__body .input__group .end {
    justify-content: flex-end;
  }
  & .form__body .input__group .input__form .all {
      margin: 0;
    }
  }
`;

const InputCountry = styled(CountryDropdown)`
  border: 1px solid silver;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #495057;
  border-radius: 4px;
  width: 100%;
`;
const PhoneInputTel = styled(PhoneInput)`
  margin: 0;
`;
