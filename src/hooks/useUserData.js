import Context from "../components/Context/userDataContext";
import { useContext, useCallback } from "react";
import { GetDataUserDemoClass } from "../services/UserService";
import { useState } from "react";

export default function UseUser() {
  const { DataUser, setDataUser } = useContext(Context);
  const [Loading, setLoading] = useState(undefined);
  const [DemoClass, setDemoClass] = useState(null);
  const GetData = useCallback(async () => {
    try {
      setLoading(true);
      const user = window.localStorage.getItem("user");
      const res = await GetDataUserDemoClass(JSON.parse(user).token);
      console.log("########### RESULTADO ############", res);
      setDataUser(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }, [setDataUser]);

  return {
    DataUser,
    GetData,
    Loading,
  };
}
