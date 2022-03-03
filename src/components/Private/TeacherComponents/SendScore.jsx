import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useState, useContext } from "react";
import styled from "styled-components";
import { BiX, BiCheck } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { useScoreExam } from "../../../hooks/useScoreExam";
import {
  AddScoreExam,
  UpdateScoreExamForIdStudent,
} from "../../../helpers/User";
import ContextProgress from "../../../context/ProgressContext";
const OptionsSelect = [
  {
    label: "A1",
    value: "A1",
  },
  {
    label: "A2",
    value: "A2",
  },
  {
    label: "B1",
    value: "B1",
  },
  {
    label: "B2",
    value: "B2",
  },
  {
    label: "C1",
    value: "C1",
  },
  {
    label: "C2",
    value: "C2",
  },
];
const OptionsA1 = [
  {
    label: "A1.1",
    value: "A1.1",
  },
  {
    label: "A1.2",
    value: "A1.2",
  },
  {
    label: "A1.3",
    value: "A1.3",
  },
];
const OptionsA2 = [
  {
    label: "A2.1",
    value: "A2.1",
  },
  {
    label: "A2.2",
    value: "A2.2",
  },
  {
    label: "A2.3",
    value: "A2.3",
  },
];
const OptionsB1 = [
  {
    label: "B1.1",
    value: "B1.1",
  },
  {
    label: "B1.2",
    value: "B1.2",
  },
  {
    label: "B1.3",
    value: "B1.3",
  },
];
const OptionsB2 = [
  {
    label: "B2.1",
    value: "B2.1",
  },
  {
    label: "B2.2",
    value: "B2.2",
  },
  {
    label: "B2.3",
    value: "B2.3",
  },
];
const OptionsC1 = [
  {
    label: "C1.1",
    value: "C1.1",
  },
  {
    label: "C1.2",
    value: "C1.2",
  },
  {
    label: "C1.3",
    value: "C1.3",
  },
];

const OptionsC2 = [
  {
    label: "C2.1",
    value: "C2.1",
  },
  {
    label: "C2.2",
    value: "C2.2",
  },
  {
    label: "C2.3",
    value: "C2.3",
  },
];

const SendScore = () => {
  const { Show, setShow } = useContext(ContextProgress);

  const [State, setState] = useState({
    data: null,
  });
  const [stateSubLevel, setStateSubLevel] = useState({
    data: null,
  });
  const [DateCalendar, setDateCalendar] = useState(new Date());
  const [MessageErrorBox, setMessageError] = useState(false);
  const [InputValues, setInputValues] = useState(false);
  const [StatusValidation, setValidation] = useState({
    success: false,
    error: false,
  });
  const [DatosVerify, setDatosVerify] = useState("");
  const [DatosScore, setDatosScore] = useState({
    success: false,
    socore: null,
  });
  const [ModalConfirm, setModalConfirm] = useState(false);
  const [ModalUpdate, setModalUpdate] = useState(false);
  const [ConfirmSuccess, setConfirmSuccess] = useState({
    success: null,
    error: null,
  });

  //custom hooks
  const { ObjecIdiom, AddStudent, DataScores } = useScoreExam();
  //end custom hooks
  function ReturnOptions(Level) {
    switch (Level) {
      case "A1":
        return OptionsA1;
      case "A2":
        return OptionsA2;
      case "B1":
        return OptionsB1;
      case "B2":
        return OptionsB2;
      case "C1":
        return OptionsC1;
      case "C2":
        return OptionsC2;
      default:
        return null;
    }
  }

  const handleChangeLevel = (value) => {
    ResetSublevel();
    FilterLevel(value);
    return setState({
      ...State,
      data: value,
    });
  };

  const handleChangeSubLevel = (value) => {
    console.log(value);
    FilterSublevel(value.value);
    return setStateSubLevel({
      ...stateSubLevel,
      data: value,
    });
  };

  const ResetSublevel = () => {
    return setStateSubLevel({
      data: null,
    });
  };

  const CloseMessageClick = () => {
    setMessageError(false);
  };

  // function submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    /**
     * @_1__states
     * @_2__es
     */
    if (!State.data || !stateSubLevel.data) return setMessageError(true);
    const Body = {
      idStudent: AddStudent,
      idiom: ObjecIdiom.idiom,
      kids: ObjecIdiom.kids,
      dateCalendar: DateCalendar,
      score: InputValues.inpScore,
      name_level: State.data.value,
      name_sublevel: stateSubLevel.data.value,
    };
    AddScoreExam(Body).then((res) => {
      if (res.success) {
        return setValidation({
          ...StatusValidation,
          success: true,
        });
      }
      return setValidation({
        ...StatusValidation,
        error: true,
      });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    return setInputValues({
      ...InputValues,
      [name]: value,
    });
  };

  const handleGoBack = () => {
    setShow(false);
    return setValidation({
      ...StatusValidation,
      error: false,
      success: false,
    });
  };

  const handleGoBackUpdt = () => {
    setShow(false);
    setConfirmSuccess({
      ...ConfirmSuccess,
      success: false,
      error: false,
    });
    return setModalConfirm(false);
  };

  const filterPackage = () => {
    const datos = DataScores.data
      .filter((e) => e.kids === ObjecIdiom.kids && e.idiom === e.idiom)
      .pop();
    return datos;
  };
  const FilterLevel = (level) => {
    // console.log(filterPackage());
    const levelFil = filterPackage();
    const found = levelFil.level
      .filter((e) => e.name_level === level.value)
      .pop();
    console.log(found);
    setDatosVerify(found);
  };

  const FilterSublevel = (name_sublevel) => {
    // const dat = DatosVerify.subLevel.find((e) => e.subLevel == name_sublevel);
    const dat = DatosVerify.subLevel.filter(
      (e) => e.name_sublevel === name_sublevel
    );
    console.log(dat);
    if (dat.length == 1) {
      console.log("Exists");
      return setDatosScore({
        ...StatusValidation,
        success: true,
        score: dat[0].score,
      });
    }
    return setDatosScore({
      ...StatusValidation,
      success: false,
      score: null,
    });
  };

  const ClickUpdate = () => {
    setModalUpdate(true);
  };

  const handleUpdateSubmite = (e) => {
    e.preventDefault();
    setModalUpdate((prev) => !prev);
    setModalConfirm((prev) => !prev);
  };

  const HandleSendModalConfirm = () => {
    const Body = {
      idStudent: AddStudent,
      idiom: ObjecIdiom.idiom,
      kids: ObjecIdiom.kids,
      dateCalendar: DateCalendar,
      score: InputValues.inpScore,
      name_level: State.data.value,
      name_sublevel: stateSubLevel.data.value,
    };
    UpdateScoreExamForIdStudent(Body).then((res) => {
      console.log(res);
      setConfirmSuccess({
        ...ConfirmSuccess,
        success: res.success,
      });
    }); // -> param body data
  };

  const handlCancel = () => {
    setShow(false);
    setModalConfirm((prev) => !prev);
  };

  return (
    <DivBorder>
      <SubLevel
        placeholder="Select Level"
        options={OptionsSelect}
        value={State.data}
        onChange={handleChangeLevel}
      />
      <SubLevel
        placeholder="Select SubLevel"
        options={ReturnOptions(State.data ? State.data.value : null)}
        value={stateSubLevel.data}
        onChange={handleChangeSubLevel}
      />
      {/*
        Cuando el Score existe ejecutar este code
      */}
      {DatosScore.success ? (
        <CardScoreExist>
          <h6>Exam score </h6>
          <span>Current Score: {DatosScore.score} </span>
          <ButtonChange onClick={ClickUpdate}>
            Change current score
          </ButtonChange>
        </CardScoreExist>
      ) : (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <h6>Add exam score</h6>
          <span>Date of exam</span>
          <InputDate
            selected={DateCalendar}
            onChange={(date) => setDateCalendar(date)}
          />
          <ContentInput>
            <Input
              type="text"
              placeholder="Enter Score"
              onChange={handleChange}
              name="inpScore"
            />
            <ButtonSubmit type="submit">Submit</ButtonSubmit>
          </ContentInput>
          {MessageErrorBox && (
            <MsgErrorClient>
              <p>Please, make sure you select a level and sublevel.</p>
              <IconClose onClick={CloseMessageClick} />
            </MsgErrorClient>
          )}
        </Form>
      )}

      {StatusValidation.success || StatusValidation.error ? (
        <Modal>
          <Card>
            <ContentIcon success={StatusValidation.success}>
              {StatusValidation.success ? <IconSucces /> : <IconError />}
            </ContentIcon>
            <ContentText>
              <span>{StatusValidation.success ? "Success" : "Error"} </span>
              <p>
                {StatusValidation.success
                  ? "Submited succesfully"
                  : "Error Lorem ipsum dolor sit, amet consectetur adipisicing elit Debitis, sunt."}
              </p>
            </ContentText>
            <Button onClick={() => handleGoBack()}>Go back</Button>
          </Card>
        </Modal>
      ) : null}

      {/* Si desea actualizar ejecutar esta modal */}
      {ModalUpdate && (
        <ModalFromUpdateScore>
          <CardForm>
            <IconCloseModal onClick={() => setModalUpdate(false)} />
            <Form onSubmit={(e) => handleUpdateSubmite(e)}>
              <h6>Update exam score</h6>
              <span>Date of exam</span>
              <InputDate
                selected={DateCalendar}
                onChange={(date) => setDateCalendar(date)}
              />
              <ContentInput>
                <Input
                  type="text"
                  placeholder="Enter Score"
                  onChange={handleChange}
                  name="inpScore"
                />
                <ButtonSubmit type="submit">Submit</ButtonSubmit>
              </ContentInput>
            </Form>
          </CardForm>
        </ModalFromUpdateScore>
      )}

      {ModalConfirm && (
        <ModalAreSure>
          <CardSure>
            {ConfirmSuccess.success ? (
              <>
                <ContentIcon success={ConfirmSuccess.success}>
                  {ConfirmSuccess.success ? <IconSucces /> : <IconError />}
                </ContentIcon>
                <ContentText>
                  <span>{ConfirmSuccess.success ? "Success" : "Error"} </span>
                  <p>
                    {ConfirmSuccess.success
                      ? "Submited succesfully"
                      : "Error Lorem ipsum dolor sit, amet consectetur adipisicing elit Debitis, sunt."}
                  </p>
                </ContentText>
                <Button onClick={() => handleGoBackUpdt()}>Go back</Button>
              </>
            ) : (
              <>
                <h6>Are you sure you want to update the current score ?</h6>
                <div>
                  <button className="confirm" onClick={HandleSendModalConfirm}>
                    Confirm
                  </button>
                  <button className="cancel" onClick={handlCancel}>
                    Cancel
                  </button>
                </div>
              </>
            )}
          </CardSure>
        </ModalAreSure>
      )}
    </DivBorder>
  );
};
export default SendScore;

/**
 *
 * => IconWargning
 * => Wargning
 * title =>  Are you sure you want to update the current score ?
 * button => Confirm  / Cancel
 *
 *  ########################
 * => IconCheck
 * => success
 * title => The score has been updated!
 * button => Go back => background:  #000
 *
 */

const ModalAreSure = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const CardSure = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h6 {
    font-size: 1.5rem;
    line-height: normal;
    color: #18181b;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 600 !important;
    letter-spacing: -1px;
  }
  div {
    margin: 0 auto;
  }
  button {
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 4px;
    line-height: normal;
    &.confirm {
      background-color: #1d4ed8;
      &:hover {
        background-color: #2563eb;
      }
    }
    &.cancel {
      margin-left: 1rem;
      background-color: #71717a;
      &:hover {
        background-color: #a1a1aa;
      }
    }
  }
`;

const ModalFromUpdateScore = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const CardForm = styled.div`
  position: relative;
  width: 320px;
  height: 250px;
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconCloseModal = styled(BiX)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: #18181b;
  :hover {
    cursor: pointer;
  }
`;

const ButtonChange = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1d4ed8;
  color: #fff;
  font-size: 1rem;
  line-height: normal;
  border-radius: 4px;
  margin-top: 1rem;
  width: 200px;
  :hover {
    background-color: #2563eb;
  }
`;

const CardScoreExist = styled.div`
  margin-top: 1rem;
  border: 1px solid silver;
  border-radius: 4px;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: #71717a;
    font-size: 0.89rem;
    line-height: normal;
    margin-right: auto;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }
  h6 {
    text-align: center;
    font-size: 1.25rem;
    color: #71717a;
    line-height: normal;
    font-weight: 600;
    letter-spacing: -1px;
  }
`;

const DivBorder = styled.div`
  border: 1px solid silver;
  padding: 0.8rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 6px;
  width: 400px;

  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentIcon = styled.div`
  background-color: ${(props) => (props.success ? "#86efac" : "#FCA5A5")};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconError = styled(BiX)`
  font-size: 1.8rem;
  color: #18181b;
`;

const IconSucces = styled(BiCheck)`
  font-size: 1.8rem;
  color: #18181b;
`;

const ContentText = styled.div`
  margin: 0.8rem;
  text-align: center;
  span {
    font-size: 1.2rem;
    color: #18181b;
    letter-spacing: -1px;
    font-weight: 700;
  }
  p {
    font-size: 1rem;
    line-height: normal;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: #18181b;
  color: #fff;
  margin: 0 auto;
  font-size: 1rem;
  line-height: normal;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  min-width: 200px;
  line-height: normal;
`;

const MsgErrorClient = styled.div`
  position: relative;
  background-color: #fca5a5;
  padding: 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;

  p {
    font-size: 1.02rem;
    line-height: normal;
    margin: 0;
    color: #18181b;
  }
`;

const IconClose = styled(BiX)`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 1.35rem;
  color: #18181b;
  :hover {
    cursor: pointer;
  }
`;

const SubLevel = styled(Select)`
  margin-bottom: 1rem;
`;

const Form = styled.form`
  margin-top: 1rem;
  border: 1px solid silver;
  border-radius: 4px;
  width: 100%;
  padding: 0.5rem;
  display: block;
  span {
    color: #71717a;
    font-size: 0.89rem;
    line-height: normal;
    margin-left: 0.5rem;
  }
  h6 {
    text-align: center;
    font-size: 1.25rem;
    color: #71717a;
    line-height: normal;
    font-weight: 600;
    letter-spacing: -1px;
  }
`;
const ContentInput = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
`;
const Input = styled.input`
  padding: 0.3rem 0.5rem;
  border: 1px solid silver;
  border-radius: 4px;

  &:focus {
    border-color: #2563eb;
  }
`;

const ButtonSubmit = styled.button`
  padding: 0.5rem 0.8rem;
  border: none;
  background-color: #1d4ed8;
  color: #fff;
  line-height: normal;
  font-size: 1rem;
  border-radius: 4px;
  :hover {
    background-color: #2563eb;
  }
`;
const InputDate = styled(DatePicker)`
  padding: 0.1rem 0.5rem;
  border: 1px solid blue;
  border: 1px solid silver;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: #52525b;
  width: 170px;
  &:focus {
    border-color: #2563eb;
  }
`;