import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useState } from "react";
import styled from "styled-components";
import { BiX, BiCheck } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { useScoreExam } from "../../../hooks/useScoreExam";
import { AddScoreExam } from "../../../helpers/User";
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

  //custom hooks
  const { ObjecIdiom, AddStudent } = useScoreExam();
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
    return setState({
      ...State,
      data: value,
    });
  };

  const handleChangeSubLevel = (value) => {
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
    return setValidation({
      ...StatusValidation,
      error: false,
      success: false,
    });
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
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h6>Add score of exams</h6>
        <span>Date Input</span>
        <InputDate
          selected={DateCalendar}
          onChange={(date) => setDateCalendar(date)}
        />
        <ContentInput>
          <Input
            type="text"
            placeholder="Input Score"
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

      {StatusValidation.success || StatusValidation.error ? (
        <Modal>
          <Card>
            <ContentIcon success={StatusValidation.success}>
              {StatusValidation.success ? <IconSucces /> : <IconError />}
            </ContentIcon>
            <ContentText>
              <span>{StatusValidation.success ? "Success" : "Error"} </span>
              <p>
                Error Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis, sunt.
              </p>
            </ContentText>
            <Button onClick={() => handleGoBack()}>Go back</Button>
          </Card>
        </Modal>
      ) : null}
    </DivBorder>
  );
};

export default SendScore;

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
  &:focus {
    border-color: #2563eb;
  }
`;
