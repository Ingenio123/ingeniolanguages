import React, { useState } from "react";
import styled from "styled-components";
import GoogleButton from "../../components/GoogleButton/Google";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import URI from "../../components/Urls";
import { authenticateFetch, isAuth } from "../../helpers/Auth";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is a required field"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters")
    .required("Password is a required field"),
});

const ExpredToken = ({ history }) => {
  const [Error, setError] = useState({
    error: undefined,
    message: null,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "all" });

  const onSubmitHandler = async (data) => {
    console.log({ data });
    let response = await fetch(`${URI.url}/data/userSignIn`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    let dataResponse = await response.json();
    if (response.status >= 400 && response.status <= 499) {
      setError({
        ...Error,
        error: true,
        message: dataResponse.message, //dataResponse.message
      });
      return reset();
    }
    // AuthSessionStorage(dataResponse.user, () => {});
    authenticateFetch(dataResponse.user, () => {
      if (isAuth()) {
        if (isAuth().rol === "admin") return history.push("/admin");
        if (isAuth().rol === "teacher") return history.push("/teacherPage");
        return history.push("/private");
      }
    });

    return history.push("/");
  };
  return (
    <>
      <TextTitle className="text-center mt-2">
        Your session has expired.
      </TextTitle>
      <TextSubtitle> Sign in again</TextSubtitle>
      <MainContent className="container">
        <ContentForm>
          <Form onSubmit={handleSubmit(onSubmitHandler)}>
            {Error.error && <BoxError>{Error.message}</BoxError>}
            <ContentInputsGrpup role="group">
              <label>E-mail address</label>
              <input
                type="email"
                placeholder="Enter your e-mail"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
            </ContentInputsGrpup>
            <ContentInputsGrpup role="group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
            </ContentInputsGrpup>
            <ButtonSubmit type="submit">Submit</ButtonSubmit>
          </Form>
          <LineCenter>Or</LineCenter>
          <BoxCenter>
            <GoogleButton contentSign="Sign in with Google" route="/private" />
          </BoxCenter>
        </ContentForm>
        <ContentImage>
          <BoxImage></BoxImage>
        </ContentImage>
      </MainContent>
    </>
  );
};
export { ExpredToken };

const BoxError = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: normal;
  line-height: normal;
  color: #ffff;
  background-color: #f44336;
  height: auto;
  text-transform: uppercase;
  padding: 0.5rem 0;
  padding-inline-start: 0.5rem;
  padding-inline-end: 0.5rem;
  border-radius: 0.355rem;
  margin-bottom: 0.3rem;
`;

const TextTitle = styled.h2`
  font-weight: 600;
  letter-spacing: normal;
  font-family: "Sacramento";
  color: #314584;
  font-size: 64px;
  line-height: normal;
  margin-bottom: 0;
`;
const TextSubtitle = styled.h5`
  text-align: center;
  font-size: 2.5rem;
  color: #314584;
  letter-spacing: normal;
  margin: 0;
`;
const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.54rem;
`;

const ContentForm = styled.section`
  display: flex;
  flex-direction: column;
`;
const ContentImage = styled.section`
  overflow: hidden;
  width: 100%;
  height: 309px;
`;

const Form = styled.form`
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
`;
const ContentInputsGrpup = styled.div.attrs((props) => ({
  role: "group",
}))`
  margin-bottom: 1rem;
  label {
    font-size: 1rem;
    margin-inline-end: 0.75rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  input {
    height: 2.5rem;
    border-radius: 0.375rem;
    outline: transparent solid 2px;
    width: 100%;
    outline-offset: 2px;
    border: 1px solid silver;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    font-size: 1rem;
    color: #808080;
    transition-duration: 200ms;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    :focus {
      border-color: rgb(49, 130, 206);
      z-index: 1;
      box-shadow: rgb(49 130 206) 0px 0px 0px 1px;
    }
  }
  span {
    font-size: 1rem;
    font-weight: 500;
    color: #f44336;
    line-height: normal;
    display: block;
    margin: 0.3rem 0;
  }
`;

const ButtonSubmit = styled.button`
  /* ${({ padding }) =>
    padding ? `padding:${padding}` : "padding:.5rem .3rem"}; */
  font-size: 1.2rem;
  border-radius: 0.367rem;
  background: #4561ba;
  border: 0;
  color: white;
  height: 2.5rem;
  line-height: 1.2;
  transition: 0.2s ease-in-out;
  min-width: 200px;
  display: block;
  margin: 0 auto;
  :hover {
    background-color: #374e95;
  }
`;

const BoxImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1581547848400-c2d06d641a65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const LineCenter = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #636e72;
  font-size: 1rem;
  margin: 0;
  margin: 0 0.5rem;
  margin-bottom: 0.5rem;
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
const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
