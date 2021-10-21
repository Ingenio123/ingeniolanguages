import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import Url from "../Urls";
import Layout from "./Layout";

const PrivateRoute = ({ history }) => {
  useEffect(() => {
    VerifyAuth();
  }, []);
  const VerifyAuth = async () => {
    const user = window.localStorage.getItem("user");
    if (user) {
      var data = JSON.parse(user);
      const EndPoint = Url.url + "/data/user/" + data._id;
      const res = await axios.get(EndPoint, {
        headers: { Authorization: `Bearer ${data.token}` },
      });

      if (!res) return history.push("/");
    }
  };

  return (
    <BackgroundUser>
      <Layout></Layout>
    </BackgroundUser>
  );
};
export default PrivateRoute;

const BackgroundUser = styled.div`
  background: #f8fafc !important;
`;
