import "react-phone-input-2/lib/style.css";
import styled from "styled-components";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import { CountryDropdown } from "react-country-region-selector";
import { useState } from "react";
import { useForm } from "react-hook-form";

const options = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

export const InformationUpdate = () => {
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
  // end states
  const selectCountry = (val) => {
    setValue(val);
    setCountry(val.toLowerCase());
  };

  const onSubmitForm = (data) => {
    console.log(data);
    console.log(Country);
    console.log(Valor.phone);
    console.log(Gender.value);
    //services  update information  user
    const { Age, firstName, lastName } = data;
  };

  const handleGender = (data) => {
    setGender(data);
  };
  return (
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
              <input type="number" className="--flex" {...register("Age")} />
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
          </div>
          <div className="input__group">
            <div className="input__form">
              <label htmlFor="">Country</label>
              {/* <input type="number" className="--flex" /> */}
              <InputCountry
                valueType="short"
                defaultOptionLabel="Select Country"
                value={value}
                onChange={(val) => selectCountry(val)}
              />
            </div>
            <div className="input__form">
              <label htmlFor="">Phone Number</label>
              <PhoneInput
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
  );
};

const Container = styled.main`
  max-width: 1920px;
  height: 100vh;
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
      }
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
