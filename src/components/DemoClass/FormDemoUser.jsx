import styled from "styled-components";
import { useForm } from "react-hook-form";
import { SendDataDemoClassOne } from "../../services/UserService";
import { useState } from "react";
export default function Form1({ modificadorModal }) {
  const [Message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { SecondEmail } = data;
    const Token = JSON.parse(window.localStorage.getItem("user")).token;
    try {
      const res = await SendDataDemoClassOne({ SecondEmail, Token });
      const datas = await res.json();
      if (datas.error && datas.status === false) {
        return setMessage(datas);
      }
      setMessage(datas);
      reset();
      return;
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {Message.error ? (
        <MessageResponse status={Message.error}>
          {Message.message}
        </MessageResponse>
      ) : (
        <MessageResponse status={Message.error}>
          {Message.message}
        </MessageResponse>
      )}
      <FormInput>
        <Label>Second E-mail</Label>
        <Input
          type="email"
          placeholder="Email"
          {...register("SecondEmail", {
            required: "E-mail is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        {errors.SecondEmail && <span>{errors.SecondEmail.message} </span>}
      </FormInput>
      <FormInput center>
        <ButtonSubmit type="submit" value="Send" />
      </FormInput>
    </Form>
  );
}

const Form = styled.form``;
const FormInput = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  flex-direction: ${({ center }) => (center ? "row" : "column")};
  margin-bottom: 1rem;
`;
const Input = styled.input`
  padding: 0.3rem 1rem;
  font-size: 1rem;
  border-width: 1px;
  border-color: #9d9d9d;
  background-color: transparent;
  color: #1a1a1a;
  border-style: solid;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(184, 184, 184, 0.33);
  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0);
`;
const ButtonSubmit = styled.input`
  background-color: #2563eb;
  border: none;
  color: #fff;
  padding: 0 1rem;
  height: 42px;
  min-width: 64px;
  border-radius: 4px;
  font-size: 1rem;
  letter-spacing: 2px;
  outline: none;
  transition: all 0.3s ease;
  :hover {
    background-color: #3b82f6;
  }
`;
const Label = styled.label`
  font-size: 1rem;
`;
const MessageResponse = styled.div`
  background-color: ${({ status }) => (status ? "#FECACA" : "#BBF7D0")};
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  padding: ${({ status }) => (status ? ".5rem" : "0")};
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;
