import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { UpdatePasswordSend } from "../../helpers/User";

export const UpdatePassword = (props) => {
  const [ModalState, setModal] = useState(false);

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(5, "Minimum number of characters is 5")
      .max(25, "Maximum number of characters is 25"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .min(5, "Minimum number of characters is 5")
      .max(25, "Maximum number of characters is 25")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    UpdatePasswordSend(data).then((res) => setModal(true));
    // const { confirmPassword, password } = data;
    return false;
  }

  const FuncGoBack = () => {
    setModal(false);
    props.history.push("/");
  };

  return (
    <Container className="container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>Create a new password</TitleForm>
        <TextExplained>
          For security reasons, please create a new password that you will
          remember.
        </TextExplained>
        <FormGroup>
          <label>Enter new password</label>
          <Input name="password" type="password" {...register("password")} />
          {/* Required => tue -> Please, Enter your new password */}
          {errors.password && (
            <MessageError>{errors.password?.message}</MessageError>
          )}
        </FormGroup>
        <FormGroup>
          <label>Confirm new password</label>
          <Input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <MessageError>{errors.confirmPassword?.message}</MessageError>
          )}
        </FormGroup>

        <ContentButton>
          <ButtonSubmit>Submit</ButtonSubmit>
        </ContentButton>
      </Form>
      {ModalState && (
        <Modal>
          <CardModal>
            <ContentIcon>
              <IconSuccess />
            </ContentIcon>
            <TextSuccess>Success</TextSuccess>
            <p>Your password has been updated</p>
            <ButtonGoBack onClick={FuncGoBack}>Go Back</ButtonGoBack>
          </CardModal>
        </Modal>
      )}
    </Container>
  );
};

const ContentIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #bbf7d0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const TextSuccess = styled.span`
  font-size: 1.25rem;
  color: #18181b;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1px;
`;

const IconSuccess = styled(BiCheck)`
  font-size: 2rem;
  color: #18181b;
`;

const ButtonGoBack = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  border-radius: 4px;
  background-color: #18181b;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardModal = styled.div`
  width: 400px;
  height: 250px;
  background-color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MessageError = styled.span`
  color: #ef4444;
`;

const ContentButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonSubmit = styled.button`
  background-color: #1d4ed8;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: normal;

  :hover {
    background-color: #2563eb;
  }
`;

const TitleForm = styled.h2`
  margin: 0;
  text-align: center;
`;

const TextExplained = styled.p`
  line-height: normal;
  margin: 0.8rem 0;
  text-align: center;
  font-style: italic;
  font-size: 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  width: 100%;
  margin: 0 0 0.8rem 0;
  label {
    display: block;
    font-size: 1rem;
    color: #71717a;
  }
`;

const Input = styled.input`
  border: 1px solid silver;
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  :focus {
    border: 1px solid #2563eb;
  }
`;

const Form = styled.form`
  border: 1px solid silver;
  padding: 1rem;
  width: 400px;
  margin: 5rem;
  margin-bottom: auto;
`;
