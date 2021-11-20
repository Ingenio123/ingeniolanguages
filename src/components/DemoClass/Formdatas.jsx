import "./style.css";
import styled from "styled-components";
import { Gender, InputCountry } from "../ModalsForm/styles";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SendDataDemoClass } from "../../services/UserService";

export default function FormDatas() {
  const [valor, setValor] = useState({ phone: null });
  const [ValueCountry, setValueCountry] = useState(false);
  const [value, setValue] = useState(false);
  const [Error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const { Gender } = data;
    console.log(Gender, valor.phone, ValueCountry);
    const Phone = valor.phone;
    const Country = ValueCountry;
    const Token = JSON.parse(window.localStorage.getItem("user")).token;
    const res = await SendDataDemoClass({ Gender, Phone, Country, Token });
    const datas = await res.json();
    console.log(datas);
    if (datas.error && datas.status === false) {
      return setError(datas);
    }
    setError(datas);
    reset();
    return;

    // SendDataDemoClass({ Gender, Phone, Country, Token })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.error) {
    //       return setError({
    //         ...Error,
    //         status: res.status,
    //         error: res.message,
    //       });
    //     }

    //     reset();
    //     return setError({
    //       ...Error,
    //       error: false,
    //       status: res.status,
    //       message: res.message,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  };

  const selectCountry = (val) => {
    setValue(val.toLowerCase());
    setValueCountry(val);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {Error.error || Error.error === false ? (
          <Message status={Error.error}>{Error.message}</Message>
        ) : null}
        {/* {Error.error ||
          (Error.error === false && (
            <Message status={Error.error}>{Error.message}</Message>
          ))} */}
        <FormGroup>
          <InputCountry
            valueType="short"
            value={ValueCountry}
            onChange={(val) => selectCountry(val)}
          />
          <InputPhone
            country={value || "us"}
            value={valor.phone}
            specialLabel={""}
            onChange={(phone) => setValor({ phone })}
          />
        </FormGroup>
        <FormGroup>
          <Gender
            class="form-control custom-select"
            {...register("Gender", {
              required: "Gender is Required",
              pattern: {
                value: /[A-Za-z]{3}/,
                message: "Gener not spaces",
              },
            })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Gender>
          {errors.Gender && <span>{errors.Gender.message}</span>}
          <BoxButton>
            <ButtonSubmit type="submit" value="Send" />
          </BoxButton>
        </FormGroup>
      </Form>
    </>
  );
}

const Form = styled.form`
  margin-top: 10px;
`;
const FormGroup = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 1rem;
`;
const InputPhone = styled(PhoneInput)`
  margin-top: 0 !important;
`;
const BoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ButtonSubmit = styled.input`
  border: none;
  background-color: #1d4ed8;
  color: #fff;
  padding: 0.3rem 2rem;
  border-radius: 3px;
  letter-spacing: 2px;
  :hover {
    background-color: #2563eb;
  }
`;
const Message = styled.div`
  background-color: ${(props) => (props.status ? "#FECACA" : "#BBF7D0")};
  color: #1a1a1a;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
