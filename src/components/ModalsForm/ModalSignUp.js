import {
  Form,
  Gender,
  BoxChecks,
  InputCountry,
  InputWhithIcon,
  Icon_i2,
  Input,
  Icon_i,
  Centrar,
  ButtonSubmit,
  LineCenter,
  TextGray,
  Button,
  Label,
} from "./styles";
import { useForm } from "react-hook-form";
import { useState, memo } from "react";
import PhoneInput from "react-phone-input-2";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import GoogleButton from "../GoogleButton/Google";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import axios from "axios";
import Url from "../Urls";
import { REGISTER_SUCCESS } from "../../redux/actions/types";
import { authenticate } from "../../helpers/Auth";
import styled from "styled-components";

//
import useUser from "../../hooks/useUser";

const ModalSignUp = ({ showSignUp, setSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState(false);
  const [types, setTypes] = useState(true);
  const [valor, setValor] = useState({ phone: null });
  const [ValueCountry, setValueCountry] = useState(false);
  const [types2, setTypes2] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  /**
   *
   */
  const { method } = useSelector((state) => state.Method);
  const { ActivarLoged } = useUser();

  const selectCountry = (val) => {
    setValue(val.toLowerCase());
    setValueCountry(val);
  };

  const ShowPassword = (valor) => {
    if (valor === 2) {
      setTypes2(!types2);
      return;
    }
    setTypes(!types);
  };

  const SubmitData = async (data) => {
    const Endpoint = Url.url + "/data/userSignUp";
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const {
      FirstName,
      LastName,
      Gender,
      password,
      your_lenguage,
      email,
      confirmPassword,
      age,
    } = data;

    var phone = valor.phone;
    var country = ValueCountry;

    const body = JSON.stringify({
      FirstName,
      LastName,
      Gender,
      password,
      your_lenguage,
      email,
      confirmPassword,
      age,
      country,
      phone,
    });
    const res = await axios.post(Endpoint, body, config);

    authenticate(res, () => {
      if (method === "paypal") {
        ActivarLoged(res.data);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        return history.push("/paypalorder");
      }
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      return history.push("/payclient");
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit((data) => SubmitData(data))}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              className="form-group"
              style={{ margin: "0", fontSize: "18px" }}
            >
              <Label>First Name</Label>
              <Input
                type="text"
                className="form-control"
                placeholder="User Name"
                {...register("FirstName", {
                  required: "First Name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Character no permitidos/ no debe tener espacios",
                  },
                })}
              />
              <span className="text-samall text-danger">
                {errors.username?.message}
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="form-group"
              style={{ margin: "0", fontSize: "18px" }}
            >
              <Label>Last Name</Label>
              <Input
                type="text"
                className="form-control"
                placeholder="Last Name"
                {...register("LastName", {
                  required: "Last Name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Character no permitidos/ no debe tener espacios",
                  },
                })}
              />
              <span className="text-samall text-danger">
                {" "}
                {errors.username?.message}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6">
            <Label>Age</Label>
            <Input
              type="number"
              className="form-control"
              placeholder="Age"
              {...register("age", {
                required: "Age is required",
                maxLength: {
                  value: 2,
                  message: "Age max NN",
                },
                min: {
                  value: 6,
                  message: "Age min 6 to 80",
                },
                max: {
                  value: 80,
                  message: "Age max 80",
                },
              })}
            />
            <span className="text-small text-danger">
              {" "}
              {errors.age?.message}{" "}
            </span>
          </div>
          <div className="col-6 col-md-6">
            <BoxChecks>
              {/* select */}
              <div class="input-group">
                <Label className="mt-2">Gender</Label>
                <Gender
                  class="form-control custom-select "
                  {...register("Gender", {
                    required: "Gender is Required",
                  })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Gender>
              </div>
            </BoxChecks>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <Label>Country</Label>
              <br />
              <InputCountry
                valueType="short"
                onChange={(val) => selectCountry(val)}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <PhoneInput
              country={value}
              value={valor.phone}
              specialLabel={""}
              onChange={(phone) => setValor({ phone })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <label for="Email">Email</label>
            <InputWhithIcon>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {/* icon */}
              <i className="icon__email">
                <IoMailOutline />{" "}
              </i>
              <span className="text-small text-danger">
                {errors.email?.message}{" "}
              </span>
            </InputWhithIcon>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6">
            <div className="form-group">
              <Label>Password</Label>
              <InputWhithIcon>
                <input
                  type={types ? "password" : "text"}
                  className="form-control"
                  {...register("password", {
                    required: "password required",
                    maxLength: {
                      value: 20,
                      message: "max length character is 8",
                    },
                    minLength: {
                      value: 8,
                      message: "min lingth character is 4",
                    },
                  })}
                />
                <i className="icon__left">
                  {" "}
                  <IoLockClosedOutline />{" "}
                </i>
                {types ? (
                  <i className="icon__right">
                    <Icon_i onClick={() => ShowPassword()} />
                  </i>
                ) : (
                  <i className="icon__right">
                    <Icon_i2 onClick={() => ShowPassword()} />
                  </i>
                )}
              </InputWhithIcon>
              <span className="text-small text-danger">
                {errors.password?.message}{" "}
              </span>
            </div>
          </div>
          <div className="col-6 col-md-6">
            <div className="form-group">
              <Label>Confirm Password</Label>
              <InputWhithIcon>
                <Input
                  type={types2 ? "password" : "text"}
                  className="form-control"
                  {...register("confirmPassword", {
                    required: "Confirm password  is required",
                    maxLength: {
                      value: 20,
                      message: "max length character is 20",
                    },
                    minLength: {
                      value: 8,
                      message: "min lingth character is 8",
                    },
                  })}
                />
                <i style={{ top: "6px" }}>
                  {" "}
                  <IoLockClosedOutline />{" "}
                </i>
                {types2 ? (
                  <i className="icon__right">
                    <Icon_i onClick={() => ShowPassword(2)} />
                  </i>
                ) : (
                  <i className="icon__right">
                    <Icon_i2 onClick={() => ShowPassword(2)} />
                  </i>
                )}
              </InputWhithIcon>
              {errors.ConfirmPassword && (
                <span className="text-small text-danger">
                  {" "}
                  {errors.ConfirmPassword.message}{" "}
                </span>
              )}
            </div>
          </div>
        </div>
        <Centrar>
          <ButtonSubmit mt={true} className="btn">
            Sign Up
          </ButtonSubmit>
        </Centrar>
      </Form>

      <LineCenter>Or</LineCenter>
      <Centrar>
        <GoogleButton contentSign={"Sign up with Google"} />
      </Centrar>
      <Centrar>
        <div>
          <TextGray>If you already have an account</TextGray>
          <Button onClick={() => setSignUp((prev) => !prev)}> Sign In</Button>
        </div>
      </Centrar>
      <Centrar></Centrar>
    </div>
  );
};
export default memo(ModalSignUp);

const BoxFlex = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 4px;
`;
