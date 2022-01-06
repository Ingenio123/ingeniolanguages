import styled from "styled-components";
import axios from "axios";
import { useRef, useState } from "react";
import Url from "../Urls";
import { useDispatch } from "react-redux";

export default function BoxVerify() {
  const FormRef = useRef();
  const [Error, setError] = useState({
    error: false,
    message: "",
  });
  const [Success, setSuccess] = useState({
    success: false,
    message: "",
  });
  const dispatch = useDispatch();
  const SendCode = async (e) => {
    e.preventDefault();
    // FormRef.current[0].value
    const data = {
      CodeDesc: FormRef.current[0].value,
    };
    console.log(Url + "/verifycodeDescuento");
    const res = await fetch(Url.url + "/verifycodeDescuento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status >= 400) {
      const data = await res.json();
      setSuccess({
        ...Success,
        success: data.success,
      });
      return setError({
        ...Error,
        error: data.error,
        message: data.message,
      });
    }
    const resServer = await res.json();
    console.log(resServer);
    setError({
      ...Error,
      error: resServer.error,
    });
    setSuccess({
      ...Success,
      success: resServer.success,
      message: resServer.message,
    });
    // const res = await axios.post(Url.url + '/verifycodeDescuento',data);

    return dispatch({
      type: "ValorDesc",
      payload: resServer.valor,
    });
  };
  return (
    <>
      <BoxCodeVirify ref={FormRef} onSubmit={(e) => SendCode(e)}>
        <input
          type="text"
          placeholder="Redeem coupon"
          className="form-control"
        />
        <ButtonVerify className="btn">Verify</ButtonVerify>
      </BoxCodeVirify>
      {Error.error && (
        <ShowMessage error={Error.error}>{Error.message}</ShowMessage>
      )}
      {Success.success && <ShowMessage>{Success.message}</ShowMessage>}
    </>
  );
}

const BoxCodeVirify = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const ButtonVerify = styled.button`
  background-color: rgba(49, 69, 132, 1);
  color: white;
  margin-left: 6px;
  min-width: 100px;
  &:hover {
    color: white;
    background: #405aaf;
  }
`;
const ShowMessage = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1;
  border-radius: 0.25rem;
  width: 100%;
  background-color: ${(props) => (props.error ? "#f87171" : "#22C55E")};
  padding: 0.8rem 0.3rem;
`;
