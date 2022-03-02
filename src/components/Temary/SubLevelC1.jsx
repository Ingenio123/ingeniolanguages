import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CREATE_ONE_iTEMEN_TEMARY } from "../../redux/actions/types";
import { CreateOneItemTemary } from "../../redux/actions/temaryAction";

import { TextError } from "./Style";

export default function SubLevelA2({ subLevel, Level }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const createTemary = (data) => {
    // create temary
    dispatch(
      CreateOneItemTemary({
        action: CREATE_ONE_iTEMEN_TEMARY,
        payload: {
          data,
          Level,
          subLevel,
        },
      })
    );

    document.getElementById("form_temary_C1").reset();
  };

  return (
    <div>
      <SubLevelItem className="text-center">
        {subLevel ? subLevel : <LevelMuestra>Level</LevelMuestra>}
      </SubLevelItem>
      <Form onSubmit={handleSubmit(createTemary)} id="form_temary_C1">
        <GridForm>
          <ItemsContent>
            <label> Content 1</label>
            <InputFormContent
              type="text"
              {...register("item1", {
                required: "Required Content",
              })}
            />
            {errors.item1 && (
              <TextError className="text-danger text-small">
                {errors.item1?.message}
              </TextError>
            )}
            <label> Content 2</label>
            <InputFormContent type="text" {...register("item2")} />

            <label> Content 3</label>
            <InputFormContent type="text" {...register("item3")} />
          </ItemsContent>

          <UrlExamen>
            <label htmlFor="UrlExam">Url Exam</label>
            <InputForm className="inputs" id="UrlExam" {...register("Exam")} />
          </UrlExamen>
        </GridForm>
        <ButtonSend type="submit" value="Send" />
      </Form>
    </div>
  );
}

const SubLevelItem = styled.h6`
  font-size: 1.1rem;
`;

const UrlExamen = styled.div`
  grid-area: UrlExamen;
  margin-top: 5px;
`;

const ButtonSend = styled.input`
  padding: 5px 8px;
  margin-top: 20px;
  border: none;
  background: #3867d6;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  width: 100%;
  &:hover {
    background-color: #185adb;
  }
`;
const ItemsContent = styled.div`
  grid-area: ItemContent;
  & > input {
    width: 100%;
  }
`;

const Form = styled.form`
  padding: 20px;
`;

const GridForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "Level Level"
    "ItemContent ItemContent"
    "a a"
    "UrlExamen UrlExamen";

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: "Level" "SubLevel" "ItemContent" "a" "UrlExamen";
  }
`;

const Input = css`
  padding: 4px 10px;
  border: 1px solid rgba(165, 94, 234, 0.3);

  border-radius: 4px;
  color: gray;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
  &:focus {
    border: 1px solid rgba(75, 123, 236, 0.5);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 2px rgba(165, 94, 234, 0.2);
  }

  &:disabled {
    font-weight: 700;
    background: rgba(75, 123, 236, 0.2);
    letter-spacing: 2px;
  }
`;

const InputForm = styled.input`
  ${Input};
`;

const InputFormContent = styled.textarea`
  ${Input};
`;

const LevelMuestra = styled.span`
  font-size: 1rem;
  color: silver;
  font-weight: 200;
`;
