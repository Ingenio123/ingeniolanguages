import "../../assets/components/ImageForm.css";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import { useState } from "react";
import { Login } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Redirect, Link } from "react-router-dom";
import { SignInGoogle } from "../../redux/actions/authAction";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { authenticate, isAuth } from "../../helpers/Auth";
import { useForm } from "react-hook-form";
import Url from "../Urls";
import useUser from "../../hooks/useUser";

const SignIn = ({ history }) => {
  // ##########  estados ############
  const [form, setValue] = useState({
    email: "",
  });
  const { login, ActivarLoged, hasLoginError, messageError } = useUser();
  //#################h################
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const handleInput = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // SubmitLogin(form.email, form.password);

    login(form).then((res) => {
      if (res) {
        ActivarLoged({ res });
        if (isAuth()) {
          if (isAuth().rol === "admin") return history.push("/admin");
          if (isAuth().rol === "teacher") return history.push("/teacherPage");
          return history.push("/private");
        }
      }
    });

    // ###### IMPORTANT ########
    //          --> SIEMPRE UTILILIZAR EL DISPATCH PARA LLAMAR EL ACTION <--
    // dispatch(Login(form));
    // ########################
    e.target.reset();
  };

  const SubmitLogin = async (email, password) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      Url.url + "/data/userSignIn",
      { email, password },
      config
    );

    console.log(response);
    informParent(response);
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
        console.log("RestAuth", res);
        ActivarLoged(res.data.user);
        dispatch(SignInGoogle());
      })
      .catch((err) => console.log("GOOGLE SIGNIN ERROR", err));
  };

  const informParent = (response) => {
    authenticate(response, () => {
      if (isAuth()) {
        if (isAuth().rol === "admin") return history.push("/admin");
        if (isAuth().rol === "teacher") return history.push("/teacherPage");
        return history.push("/private");
      }
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    login({ email, password }).then((res) => {
      if (res) {
        console.log(res);
        ActivarLoged(res);
        if (isAuth()) {
          if (isAuth().rol === "admin") return history.push("/admin");
          if (isAuth().rol === "teacher") return history.push("/teacherPage");
          return history.push("/private");
        }
      }
    });
  };

  return (
    <>
      <Container className="container ">
        {isAuth() ? <Redirect to="/" /> : null}
        <h1 className="text-center">Welcome</h1>
        <div className="row ">
          <div className="col-md-6 ">
            <form className="p-4 bck-theme" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 row">
                <div className="col-12 col-md-12 ">
                  {hasLoginError && (
                    <MessageError>
                      <span>{messageError}</span>
                    </MessageError>
                  )}
                  <div className="form-group">
                    <label>E-mail</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email@example.com"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-samall text-danger">
                        {errors.email?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      {...register("password", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="mb-1 col-12 col-md-12">
                  <Centrar>
                    <ButtonSubmit>Sign In</ButtonSubmit>
                  </Centrar>
                  <br />
                  <LineCenter>Or </LineCenter>
                </div>
              </div>
              <Centrar>
                <GoogleLogin
                  clientId="669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <ButtonIcon
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <IconGoogle /> Sign In With Google{" "}
                    </ButtonIcon>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </Centrar>
            </form>
            <div className="mt-3 text-center">
              <TextGray>
                If you are new at <TextBold> Ingenio Languages, </TextBold>
                create an account{" "}
              </TextGray>{" "}
              <ButtonSignIn to="/SignUp">Sign Up</ButtonSignIn>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="card"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default withRouter(SignIn);

const TextBold = styled.span`
  font-weight: 600;
  color: rgb(82, 82, 91);
`;
const TextGray = styled.span`
  color: gray;
  font-size: 1.1rem;
`;
const ButtonSignIn = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  color: #314584;
  :hover {
    color: #ff3946 !important;
  }
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

const Linea = styled.hr`
  /* margin-top:30px; */
  width: 100%;
`;
const Or = styled.span`
  color: #6c757d;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: -10px;
`;

const GoogleButton = styled.button`
  color: ${(props) => (props.blue ? "#314584" : "#ff3946")};
  border: ${(props) =>
    props.blue ? "2px solid #314584" : "2px solid #ff3946"};
  background: none;
  padding: 4px 1rem;
  font-size: 20px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${(props) => (props.blue ? "#314584" : "#ff3946")};
    color: white;
    border: none;
    padding: 4px 2rem;
  }
  margin-left: 5px;
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
const Centrar = styled.div`
  display: flex;
  justify-content: center;
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

const Container = styled.div``;

const MessageError = styled.div`
  text-align: center;
  background-color: #fca5a5;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  span {
    font-size: 1rem;
  }
`;
