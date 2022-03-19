import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import ModalRequesFreeClass from "../Header/ModalRequesFreeClass";
export const ComponentButtons = () => {
  const history = useHistory();
  const [ShowForm, setShowForm] = useState(false);

  return (
    <>
      <ContentButtons>
        <button className="primary" onClick={() => history.push("/prices")}>
          <i className="button__icon">
            <IoCartOutline />
          </i>{" "}
          buy a lesson package
        </button>
        <span>Or</span>
        <button
          className="secondary"
          onClick={() => setShowForm((prev) => !prev)}
        >
          Request free demo lesson
        </button>
      </ContentButtons>
      <ModalRequesFreeClass
        route="democlass"
        ShowForm={ShowForm}
        setShowForm={setShowForm}
        // SignUp={SignUp}
        // sendDataForEmail={send}
        // isLogged={isLogged}
        // hasLoginError={hasLoginError}
      />
    </>
  );
};

const ContentButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;

  button {
    border: none;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease;
    /* border-radius: 4px; */
    border-radius: 30px;
    font-size: 1rem;
    line-height: normal;
    color: #fff;
    /* display: inline-block; */
    /* vertical-align: middle; */
  }
  span {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
  }
  .primary {
    border: none;
    background-color: #ff3946;
    border: 2px solid #ff3946;
    display: flex;
    align-items: center;
    margin: 0;
    &:hover {
      background-color: transparent;
      border: 2px solid #ff3946;
      color: #ff3946;
    }
    &:hover .button__icon {
      color: #ff3946;
    }
  }
  .secondary {
    background-color: transparent;
    color: #314584;
    font-weight: 600;
    :hover {
      color: #ff3946;
    }
  }
  .button__icon {
    color: #fff;
    margin-bottom: 4px;
    vertical-align: middle;
    font-size: 24px;
    margin-right: 0.5rem;
  }
`;
