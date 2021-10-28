import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Register } from "../../redux/actions/authAction";
import { authenticate } from "../../helpers/Auth";
import { IsAuth } from "../../helpers/Requests";
import { withRouter, Redirect, Link } from "react-router-dom";
import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.css";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { GoogleLogin } from "react-google-login";
import Url from "../Urls";
import axios from "axios";
import { SignInGoogle } from "../../redux/actions/authAction";
import { FcGoogle } from "react-icons/fc";
import { SignUpUser } from "../../helpers/Requests";

const SignUp = (props) => {
  const [value, setValue] = useState(null);
  const [valor, setValor] = useState({ phone: null });
  const [types, setTypes] = useState(true);
  const [types2, setTypes2] = useState(true);
  const [ValueCountry, setValueCountry] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // dispatch(Register(data,value,valor.phone));

    const resultados = SignUpUser(data, value, valor.phone);

    if (resultados) return props.history.push("/private");

    return props.history.push("/");
  };

  const ShowPassword = (val) => {
    if (val === 2) return setTypes2(!types2);
    return setTypes(!types);
  };
  const responseGoogle = (res) => {
    sendGoogleToken(res.tokenId);
  };
  const sendGoogleToken = (tokenId) => {
    axios
      .post(Url.url + "/data/authGoogle", {
        idToken: tokenId,
      })
      .then((res) => {
        informParent(res);
        dispatch(SignInGoogle());
      })
      .catch((err) => console.log("GOOGLE SIGNIN ERROR", err));
  };

  const informParent = (response) => {
    authenticate(response, () => {
      if (IsAuth()) {
        if (IsAuth().rol === "admin") return props.history.push("/admin");
        if (IsAuth().rol === "teacher")
          return props.history.push("/teacherPage");
        if (IsAuth().rol === "user") return props.history.push("/private");
      }
    });
  };
  const selectCountry = (val) => {
    setValue(val);
    setValueCountry(val.toLowerCase());
  };

  return (
    <>
      <Container className="container">
        {IsAuth() ? <Redirect to="/" /> : null}
        <div className="row">
          <div className="col-md-6">
            <form className="bck-theme p-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      {...register("FirstName", {
                        required: "First Name is required",
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message:
                            "Character no permitidos/ no debe tener espacios",
                        },
                      })}
                    />
                    <span className="text-samall text-danger">
                      {" "}
                      {errors.username?.message}{" "}
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      {...register("LastName", {
                        required: "Last Name is required",
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message:
                            "Character no permitidos/ no debe tener espacios",
                        },
                      })}
                    />
                    <span className="text-samall text-danger">
                      {" "}
                      {errors.username?.message}{" "}
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Age</label>
                    <input
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
                </div>
                <div className="col-12 col-md-6">
                  <Gender>Gender</Gender>
                  <SelectGender
                    {...register("Gender", {
                      required: "Gender is Required",
                    })}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </SelectGender>
                  <span className="text-small text-danger">
                    {errors.Gender?.message}{" "}
                  </span>
                </div>
                <div className="col-12 col-md-5">
                  <label>Country</label>
                  <br />
                  <InputCountry
                    valueType="short"
                    value={value}
                    onChange={(val) => selectCountry(val)}
                  />
                  {/* {value} */}
                </div>

                <div className="col-12 col-md-7">
                  <PhoneInput
                    country={ValueCountry}
                    value={valor.phone}
                    specialLabel={""}
                    onChange={(phone) => setValor({ phone })}
                  />
                </div>

                <div className="col-12 col-md-12">
                  <div className="form-group">
                    <label>E-mail</label>
                    <InputWhithIcon>
                      <input
                        type="email"
                        placeholder="E-mail"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {/* icon */}
                      <i>
                        <IoMailOutline />{" "}
                      </i>
                      <span className="text-small text-danger">
                        {errors.email?.message}{" "}
                      </span>
                    </InputWhithIcon>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="form-group">
                    <label>Create password</label>
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
                      <i clock={true}>
                        {" "}
                        <IoLockClosedOutline />{" "}
                      </i>
                      {types ? (
                        <Icon_i onClick={() => ShowPassword()} />
                      ) : (
                        <Icon_i2 onClick={() => ShowPassword()} />
                      )}
                    </InputWhithIcon>

                    <span className="text-small text-danger">
                      {errors.password?.message}{" "}
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <InputWhithIcon>
                    <label>Confirm Password</label>
                    <input
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
                    <i clock={true} style={{ top: "32px" }}>
                      {" "}
                      <IoLockClosedOutline />{" "}
                    </i>
                    {types2 ? (
                      <Icon_i
                        style={{ top: "38px" }}
                        onClick={() => ShowPassword(2)}
                      />
                    ) : (
                      <Icon_i2
                        style={{ top: "38px" }}
                        onClick={() => ShowPassword(2)}
                      />
                    )}

                    {errors.ConfirmPassword && (
                      <span className="text-small text-danger">
                        {" "}
                        {errors.ConfirmPassword.message}{" "}
                      </span>
                    )}
                  </InputWhithIcon>
                </div>
              </div>
              <Centrar>
                <ButtonSubmit disabled={false} type="submit">
                  Sign up
                </ButtonSubmit>
              </Centrar>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center">
            <LineCenter>Or</LineCenter>
            <GoogleLogin
              clientId="669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com"
              render={(renderProps) => (
                <ButtonIcon
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <IconGoogle /> Sign up With Google{" "}
                </ButtonIcon>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <div className="mt-3">
              <TextGray>If you already have an account </TextGray>{" "}
              <ButtonSignIn to="/SignIn">Sign In</ButtonSignIn>
            </div>
          </div>
          <div className="col-md-6 text-center"></div>
        </div>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default withRouter(SignUp);

const TextGray = styled.span`
  color: gray;
  font-size: 1rem;
`;
const ButtonIcon = styled.button`
  padding: 0.5rem 1rem;
  color: #314584;
  background-color: transparent;
  border: 1px solid #314584;
  outline: none;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 1rem;
  transition: all 0.3 ease-out;

  &:hover {
    background-color: rgba(49, 69, 132, 0.2);
  }
`;

const IconGoogle = styled(FcGoogle)`
  font-size: 1.2rem;
`;

// input email  css
const InputWhithIcon = styled.div`
  position: relative;
  margin: 0;
  & > input {
    padding-left: 40px !important;
    width: 100%;
    border: 1px solid silver;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
  }
  & > input:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 6px 0 #ced4da;
  }

  & > input[type="password"] {
    padding-left: 30px;
  }

  & > input[type="password"] + i {
    padding: 0;
    padding-left: 8px;
  }
  & > input[type="text"] + i {
    padding: 0;
    padding-left: 8px;
  }

  & > i {
    position: absolute;
    left: 0;
    top: 4px;
    padding: 9px 8px;
    color: #636e72;
    transition: 0.3s;
    font-size: 1.2rem;
  }
`;
// end input email css
const Icon_i = styled(IoEyeOffOutline)`
  position: absolute;
  top: 10px;
  right: 8px;
  color: #636e72;
  transition: 0.3s;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Icon_i2 = styled(IoEyeOutline)`
  position: absolute;
  top: 10px;
  right: 8px;
  color: dodgerBlue;
  transition: 0.3s;
  font-size: 1.2rem;
  cursor: pointer;
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

const Centrar = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonSubmit = styled.button`
  border-radius: 4px;
  background: #314584;
  border: 0;
  padding: 4px 24px;
  font-size: 1.2rem;
  color: white;
  transition: 0.2s ease-in-out;
  width: 80%;
  &:hover {
    cursor: pointer;
    background: #4058a7;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonSignIn = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  color: #314584;
`;

const Gender = styled.p`
  margin: 0;
  text-align: start;
  font-size: 0.8rem;
  color: #314584;
`;
const InputCountry = styled(CountryDropdown)`
  border: 1px solid silver;
  padding: 0.4rem 0.75rem;
  font-size: 1rem;
  color: #495057;
  border-radius: 5px;
  width: 100%;
`;
const SelectGender = styled.select`
  border: 1px solid #d1d5db;
  padding: 0.5rem 0 0.5rem 0.5rem;
  width: 100%;
  line-height: 1.5;
  font-size: 1rem;
  border-radius: 4px;
  color: #64748b;
  &:focus {
    border: 1px solid #2563eb;
  }
  & > option {
    font-size: 1rem;
    line-height: 3;
  }
`;

const Container = styled.div`
  margin-top: 100px;
`;
