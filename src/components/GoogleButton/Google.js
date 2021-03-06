import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import Url from "../Urls";
import { isAuth, authenticate } from "../../helpers/Auth";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";

import useUser from "../../hooks/useUser";
import { useSelector } from "react-redux";

export default function GoogleButton({ contentSign, route }) {
  const history = useHistory();
  const Method = useSelector((state) => state.Method);
  const { ActivarLoged } = useUser();
  const responseGoogle = (res) => {
    sendGoogleToken(res.tokenId);
  };
  const sendGoogleToken = (tokenId) => {
    axios
      .post(Url.url + "/data/authGoogle", {
        idToken: tokenId,
      })
      .then((res) => {
        console.log(res);
        informParent(res);
        ActivarLoged({ res });
      })
      .catch((err) => console.log("GOOGLE SIGNIN ERROR", err));
  };
  const informParent = (response) => {
    console.log("Inform Parent => " + response);
    authenticate(response, () => {
      if (isAuth()) {
        if (route === "clientPay") {
          if (Method.method !== "paypal") return history.push("/payclient");
          return history.push("/paypalorder");
        }
        if (route === "democlass") {
          return history.push("/democlass");
        }
        if (isAuth().rol === "user" || isAuth().rol === "student")
          return history.push("/private");
      }
    });
  };
  return (
    <div>
      <GoogleLogin
        clientId="669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com"
        render={(renderProps) => (
          <ButtonGoogle
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle /> {contentSign}{" "}
          </ButtonGoogle>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

const ButtonGoogle = styled.button`
  color: #314584;
  background-color: transparent;
  border: 1px solid #314584;
  outline: none;
  border-radius: 4px;
  font-size: 1rem;

  transition: all 0.3 ease-out;
  padding: 0.375rem 0.75rem;
  &:hover {
    background-color: rgba(49, 69, 132, 0.2);
  }
`;
