import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CREATE_ONE_iTEMEN_TEMARY } from "../../redux/actions/types";
import { CreateOneItemTemary } from "../../redux/actions/temaryAction";
import { TextError } from "./Style";

export default function SubLevels({ subLevel, Level }) {
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

    document.getElementById("form_temary").reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(createTemary)} id="form_temary">
        <GridForm>
          <ItemsContent>
            <label> Content </label>
            <InputFormContent
              type="text"
              {...register("item1", {
                required: "Required Content",
              })}
            />
            {errors.item1 && (
              <TextError className="text-small text-danger">
                {errors.item1?.message}
              </TextError>
            )}
          </ItemsContent>
        </GridForm>
        <ButtonSend type="submit" value="Send" />
      </Form>
    </div>
  );
}

const SubLevelItem = styled.h6`
  font-size: 1.1rem;
`;

const ButtonSend = styled.input`
  padding: 5px 8px;
  margin: 0 auto;
  display: block;
  margin-top: 20px;
  border: none;
  background: #3867d6;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  width: 30%;
  &:hover {
    background-color: #185adb;
  }
`;
const ItemsContent = styled.div`
  grid-area: ItemContent;
  & > input {
    width: 100%;
  }
  label {
    font-size: 1.2rem;
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
