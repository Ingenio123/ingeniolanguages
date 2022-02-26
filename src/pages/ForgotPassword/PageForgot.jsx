import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SendForgotPassword } from "../../helpers/User";
import { BiCheck } from "react-icons/bi";
export const PageForgotPassword = (props) => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email  is required")
      .email("Invalid email format"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const [ModalState, setModalState] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    SendForgotPassword(data).then((res) => setModalState(res.success));
  };

  const FuncGoBack = () => {
    setModalState((prev) => !prev);
    return props.history.push("/siginforgotpassword");
  };

  return (
    <Container className="container">
      <CardRecovery>
        <TextH2>Forgot password?</TextH2>
        <TextP>
          To reset your password, please enter your email and click Submit.
        </TextP>
        {/* If
          you don’t have a valid email, please contact us on
          support@ingenioonline.com */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextLabel>Email</TextLabel>
          <FormControl>
            <Input type="email" name="email" {...register("email")} />
            <ButtonSubmit>Submit</ButtonSubmit>
          </FormControl>
          {errors.email && <MessageError>{errors.email?.message}</MessageError>}
        </Form>
      </CardRecovery>
      {ModalState && (
        <Modal>
          <CardModal>
            <ContentIcon>
              <IconSuccess />
            </ContentIcon>
            <TextSuccess>Success</TextSuccess>
            <p>Check your email to reset your password</p>
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
  z-index: 9999;
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CardRecovery = styled.div`
  border: 1px solid silver;
  width: 500px;
  border-radius: 4px;
  padding: 1rem;
`;
const TextH2 = styled.h2`
  margin: 0;
  font-weight: 600;
`;
const TextP = styled.p`
  line-height: 1.2;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const Form = styled.form``;
const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: normal;
  border-radius: 4px;
  border: 1px solid silver;
  width: 100%;
  :focus {
    border: 1px solid #2563eb;
  }
`;

const ButtonSubmit = styled.button`
  border: none;
  background-color: #1d4ed8;
  color: #fff;
  font-size: 1rem;
  padding: 0.45rem 1rem;
  border-radius: 4px;
  :hover {
    background-color: #2563eb;
  }
`;
const FormControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
`;
const TextLabel = styled.label`
  font-size: 1rem;
  color: #52525b;
`;
const MessageError = styled.span`
  color: #ef4444;
`;
