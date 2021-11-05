import { useCallback, useState, useContext } from "react";
import { LoginUser, SignUpUser } from "../services/UserService";
import Context from "../components/Context/UserContext";

export default function useUser() {
  const { UserData, InformUser, setInformUser } = useContext(Context);

  const [state, setState] = useState({ loading: false, error: false });
  // console.log(user);

  const InitialApp = useCallback(() => {
    const user = window.localStorage.getItem("user");
    if (user) {
      setInformUser(true);
    }
  }, [setInformUser]);

  const login = useCallback(
    async ({ email, password }) => {
      setState({ loading: true, error: false });

      const res = await LoginUser({ email, password });
      console.log("Result", res.response);
      if (res) {
        console.log("Estas aqui", JSON.stringify(res.data.user));
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        setState({ loading: false, error: false });
        setInformUser(res.data.user);
        return true;
      }
      window.localStorage.removeItem("user");
      setState({ loading: false, error: true });
      return false;
    },
    [setInformUser]
  );

  const SignUp = useCallback(
    async ({ data, country, cellphone }) => {
      setState({ loading: true, error: false });
      const res = await SignUpUser({ data, country, cellphone });
      if (res) {
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        setState({ loading: false, error: false });
        setInformUser(res.data.user);
        return true;
      }
      window.localStorage.removeItem("user");
      setState({ loading: false, error: true });
      return false;
    },
    [setInformUser]
  );

  const ActivarLoged = useCallback(
    ({ res }) => {
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
  };
}
