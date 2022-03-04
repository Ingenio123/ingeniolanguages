import { useCallback, useState, useContext } from "react";
import { LoginUser, SignUpUser } from "../services/UserService";
import Context from "../components/Context/UserContext";
import { SendDataforEmail } from "../helpers/User";

export default function useUser() {
  const { UserData, InformUser, setInformUser } = useContext(Context);

  const [state, setState] = useState({
    loading: false,
    error: false,
    message: "",
  });
  const [MsgErr, setMsgErr] = useState("");
  // console.log(user);

  const InitialApp = useCallback(() => {
    const user = window.localStorage.getItem("user");
    if (user) {
      setInformUser(true);
    }
  }, [setInformUser]);

  const login = useCallback(async ({ email, password }) => {
    setState({ loading: true, error: false });

    try {
      const res = await LoginUser({ email, password });

      if (res.success) {
        setState({ loading: false, error: false });
        window.localStorage.setItem("user", JSON.stringify(res.user));
        return res.user;
      }
      setMsgErr(res.message);
      return setState({ loading: false, error: true });
    } catch (error) {
      console.log(error);
    }
    // if (res) {
    //   console.log("Estas aqui", JSON.stringify(res.data.user));
    //   window.localStorage.setItem("user", JSON.stringify(res.data.user));
    //   setState({ loading: false, error: false });
    //   setInformUser(res.data.user);
    //   return true;
    // }
    window.localStorage.removeItem("user");
    setState({ loading: false, error: true });
    return false;
  }, []);

  const SignUp = useCallback(
    async ({ data, country, cellphone }) => {
      setState({ loading: true, error: false });
      const res = await SignUpUser({ data, country, cellphone });

      if (res.success) {
        window.localStorage.setItem("user", JSON.stringify(res.user));
        setState({ loading: false, error: false });
        setInformUser(res.user);
        return true;
      }
      window.localStorage.removeItem("user");
      setState({ loading: false, error: true, message: res.message });
      return {
        success: res.success,
        message: res.message,
      };
    },
    [setInformUser]
  );

  const ActivarLoged = useCallback(
    (res) => {
      console.log("Activado", res);
      setInformUser(res);
    },
    [setInformUser]
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem("user");
    setInformUser(null);
  }, [setInformUser]);

  const VerifyUser = useCallback(async (idUser) => {
    setState({ loading: true, error: false });
  }, []);

  const SendDataForEmail = useCallback(async (data) => {
    await SendDataforEmail(data);
  }, []);

  return {
    UserData,
    init: InitialApp,
    isLogged: Boolean(InformUser),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    ActivarLoged,
    login,
    SignUp,
    logout,
    VerifyUser,
    messageError: MsgErr,
    send: SendDataForEmail,
  };
}
