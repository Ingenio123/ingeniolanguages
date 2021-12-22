import { useState, useEffect } from "react";
import styled from "styled-components";
//component Modal Demo class
import ModalDemoClass from "../../components/FormDemoClassNew";
import FormData from "../../components/DemoClass/FormDemoUser";
import FormDatas from "../../components/DemoClass/Formdatas";
import { useSelector, useDispatch } from "react-redux";
import userState from "../../hooks/useUser";
import { GetDataUser } from "../../redux/actions/UserData";
// import RequireClass from "../../components/FormDemoClassNew/RequiredClass";
import Images from "../../components/DemoClass/ReviewClass";
export default function Index() {
  const UerData = useSelector((state) => state.UerData.data);

  const dispatch = useDispatch();
  const { isLogged } = userState();
  useEffect(() => {
    if (isLogged) {
      console.log(Object.keys(UerData).length);
      return dispatch(GetDataUser());
    }
  }, []);

  console.log(UerData);
  return (
    <Container className="container">
      {/* <RequireClass></RequireClass> */}
      <ModalDemoClass addData={UerData.addData}>
        {UerData.addData === 1 && <FormData />}
        {UerData.addData === 3 && <FormDatas />}
        {UerData.addData === 0 && <Images />}
      </ModalDemoClass>
    </Container>
  );
}

const Container = styled.div``;
