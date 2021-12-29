import styled from "styled-components";
import { IoCloseSharp, IoPersonSharp, IoPeopleSharp } from "react-icons/io5";
import { BsCart2, BsCreditCard } from "react-icons/bs";
const Modal = (props) => {
  return (
    <>
      {props.open && (
        <Content>
          <Card>
            <ImageContent img={props.img} />
            <CardContent>
              <Title>{props.nameCourse} lesson</Title>
              <PricesBox>
                <h4>$0</h4>
              </PricesBox>
              {/* Icons */}
              <ContentIcon>
                <Tooltip>
                  <IndividualI active={true} />
                  <span className="tooltip-box">One to one</span>
                </Tooltip>
                <Tooltip>
                  <GroupI active={false} />
                  <span className="tooltip-box-group">Group lessons</span>
                </Tooltip>
              </ContentIcon>
              {/* End Icons */}
              <ContentGrid>
                {/* Dropdowns start  */}
                <Dropdown>
                  <TextBox
                    type="text"
                    placeholder="lesson per month"
                    readOnly
                  />
                  <Options className="options">
                    {[1, 4, 8, 12].map((item) => (
                      <div>{item} lessons</div>
                    ))}
                  </Options>
                </Dropdown>
                {/* Dropdowns end */}
                {/* Dropdowns start  */}
                <Dropdown>
                  <TextBox
                    type="text"
                    placeholder="lesson per month"
                    readOnly
                  />
                  <Options className="options">
                    {[1, 4, 8, 12].map((item) => (
                      <div>{item} lessons</div>
                    ))}
                  </Options>
                </Dropdown>
                {/* Dropdowns end */}
              </ContentGrid>

              {/* Buttons */}
              <ContentButton>
                <Btn bg="#ff3946">
                  <BtnIcon bg="#fe6f6f">
                    <CartPlusI />
                  </BtnIcon>
                  Add to Cart
                </Btn>
                <Btn bg="#7D90CF">
                  <BtnIcon bg="#314584">
                    <CardI />
                  </BtnIcon>
                  Procced to pay
                </Btn>
              </ContentButton>
              {/* End Buttons */}
            </CardContent>
            <BtnClose />
          </Card>
        </Content>
      )}
    </>
  );
};

const Content = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  width: 852px;
  height: 415px;
  position: relative;
  display: grid;
  grid-template-columns: 320px 1fr;
  padding: 1rem;
  column-gap: 0.5rem;
`;

const BtnClose = styled(IoCloseSharp)`
  color: #71717a;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
    color: #18181b;
  }
`;
const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
`;
const CardContent = styled.div`
  width: 100%;
  /* border: 1px solid silver; */
  border-radius: 0.5rem;
  color: #314584;
`;

const Title = styled.h2`
  font-family: "Sacramento", cursive;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;

  padding: 0;
  margin: 0;
`;

const PricesBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h4 {
    font-size: 2.5rem;
    font-weight: 400;
    color: unset;
    margin: 0;
  }
`;

const ContentIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  align-items: center;
`;
const Tooltip = styled.div`
  position: relative;
  /* width: 90px; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  :hover {
    .tooltip-box {
      display: block;
    }
    .tooltip-box-group {
      display: block;
    }
  }
  .tooltip-box {
    transition: all 0.3s ease;
    position: absolute;
    background-color: #314584;
    color: #fff;
    padding: 0.3rem;
    border-radius: 4px;
    top: -35px;
    left: -150%;
    font-size: 1rem;
    display: none;
    width: 100px;
    text-align: center;
  }
  .tooltip-box-group {
    transition: all 0.3s ease;
    position: absolute;
    background-color: #314584;
    color: #fff;
    padding: 0.3rem;
    border-radius: 4px;
    top: -32px;
    left: -50px;
    font-size: 1rem;
    display: none;
    width: 120px;
    text-align: center;
  }
`;
const IndividualI = styled(IoPersonSharp)`
  font-size: 1.5rem;
  color: ${(props) => (props.active ? "#314584" : "#a2b0dd")};
  :hover {
    cursor: pointer;
  }
`;

const GroupI = styled(IoPeopleSharp)`
  font-size: 2rem;
  color: ${(props) => (props.active ? "#314584" : "#a2b0dd")};
  :hover {
    cursor: pointer;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
`;
const ContentButton = styled.div``;
const Btn = styled.button`
  background-color: ${(props) => props.bg};
  color: #fff;
  font-size: 1.05rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  column-gap: 0.2rem;
  /* width: 135px; */
`;

const BtnIcon = styled.div`
  /* width: 25px;
  height: 25px; */
  padding: 0.3rem;
  /* background-color: #fe6f6f; */
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
`;
const CartPlusI = styled(BsCart2)`
  font-size: 1.25rem;
`;
const CardI = styled(BsCreditCard)`
  font-size: 1.25rem;
`;

const Dropdown = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #fff;
    border: none;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-size: 1rem;
  }
  .options {
    position: absolute;
    top: 40px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    overflow: hidden;
    font-size: 1rem;
    display: none;
  }
  .options div {
    padding: 0.2rem 1rem;
    cursor: pointer;
    :hover {
      background-color: #3b82f6;
      color: #fff;
    }
  }
`;
const TextBox = styled.input``;
const Options = styled.div``;

export default Modal;
