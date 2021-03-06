import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";
import Url from "../Urls";
import { authenticate } from "../../helpers/Auth";
import { withRouter } from "react-router-dom";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { LOGIN_SUCCESS } from "../../redux/actions/types";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useCallback, useEffect, useState } from "react";
import GoogleButton from "../GoogleButton/Google";
import {
  Form,
  InputWhithIcon,
  Centrar,
  ButtonSubmit,
  LineCenter,
  TextGray,
  Button,
} from "./styles";
import SignUpForm from "./ModalSignUp";

// custom hooks
import useUser from "../../hooks/useUser";

function ModalSignIn({ history, ShowModal, setShowModal }) {
  const [SignUp, setSignUp] = useState(false);
  const { method } = useSelector((state) => state.Method);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, ActivarLoged, hasLoginError, messageError } = useUser();

  const dispatch = useDispatch();

  const modalRef = useRef();
  const FormModal = useRef();

  // handleSubmit
  const handleSubmitForm = (data) => {
    console.log(FormModal);
    FormModal.current[0].value = "";
    FormModal.current[1].value = "";
    DataServer(data);
  };

  async function DataServer(data) {
    const datos = {
      email: data.email,
      password: data.password,
    };

    const EndPoint = Url.url + "/data/userSignIn";
    const res = await axios.post(EndPoint, datos);
    /**
     *
     *
     */

    authenticate(res, () => {
      if (method === "paypal") {
        console.log(res.data);
        ActivarLoged(res.data);
        dispatch({
          type: LOGIN_SUCCESS,
        });
        return history.push("/paypalorder");
      }
      ActivarLoged(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
      });
      return history.push("/payclient");
    });
  }

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && ShowModal) {
        setShowModal(false);
      }
    },
    [setShowModal, ShowModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  const [types, setTypes] = useState(true);
  const ShowPassword = () => {
    setTypes(!types);
  };

  return (
    <div>
      {ShowModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper SignUp={SignUp}>
            {SignUp ? (
              <div>
                <SignUpForm setSignUp={setSignUp} />
              </div>
            ) : (
              <div>
                <HeaderWrapper>
                  <TitleModal>Sign In</TitleModal>
                </HeaderWrapper>

                <Form
                  ref={FormModal}
                  onSubmit={handleSubmit((data) => handleSubmitForm(data))}
                >
                  <div className="form-group" style={{ margin: "0" }}>
                    <label for="Email">Email</label>
                    <InputWhithIcon>
                      <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
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
                  <div className="form-group">
                    <label for="Password">Password</label>
                    <InputWhithIcon>
                      <input
                        type={types ? "password" : "text"}
                        className="form-control"
                        {...register("password", {
                          required: "Password is required",
                          maxLength: {
                            value: 20,
                            message: "max length character is 8",
                          },
                          minLength: {
                            value: 8,
                            message: "min lingth character is 4",
                          },
                        })}
                        style={{ fontSize: "1rem" }}
                      />
                      <i style={{ top: "4px" }}>
                        {" "}
                        <IoLockClosedOutline />{" "}
                      </i>
                      {types ? (
                        <Icon_i onClick={() => ShowPassword()} />
                      ) : (
                        <Icon_i2 onClick={() => ShowPassword()} />
                      )}
                    </InputWhithIcon>
                    <MsgErr className="text-small">
                      {errors.password?.message}
                    </MsgErr>
                  </div>
                  <Centrar>
                    <ButtonSubmit className="btn">Sign In</ButtonSubmit>
                  </Centrar>
                </Form>
                <LineCenter>Or </LineCenter>
                <Centrar>
                  {/* button google  */}
                  <GoogleButton
                    contentSign="Sign in with Google"
                    route="clientPay"
                  />
                </Centrar>
                <Centrar>
                  <TextGray>
                    If you are new in Ingenio Languages Create an account{" "}
                  </TextGray>
                </Centrar>
                <Centrar>
                  <Button onClick={() => setSignUp(!SignUp)}> Sign Up</Button>
                </Centrar>
              </div>
            )}
            <BtnClose onClick={() => setShowModal((prev) => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
}

export default withRouter(ModalSignIn);

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

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 9;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  width: 40vw;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  padding: 2rem 0;
  border-radius: 4px;
  @media screen and (max-width: 900px) {
    width: 50vw;
  }
  @media screen and (max-width: 800px) {
    width: 70vw;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
const TitleModal = styled.h6`
  font-size: 1.2em;
  text-align: center;
  line-height: 1;
  margin-bottom: 0.5em !important;
  font-weight: 400;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(99, 110, 114, 0.5);
  font-size: 16px;
  margin-bottom: 0.5em;
`;

const MsgErr = styled.span`
  color: red;
`;
const BtnClose = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  padding: 0;
  z-index: 10;
`;
