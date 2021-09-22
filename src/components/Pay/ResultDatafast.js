import styled, { css } from "styled-components";
import Success from "../../assets/images/Success.svg";
import { Link } from "react-router-dom";
import { IoArrowForwardSharp } from "react-icons/io5";
function ResultDatafast({ Datas }) {
  console.log("Datas", Datas);
  return (
    <>
      <BoxPresentacion>
        <ContainerImage>
          <img src={Success} alt="success" />
        </ContainerImage>
        <Span>Payment successful! </Span>
        <BoxContentDetails>
          <HeaderBoxDetails>
            <span>Qty</span>
            <span>Items</span>
            <span>Price</span>
            <span>Total</span>
          </HeaderBoxDetails>
          <BoxDetails>
            {Datas.cart.items.map((subitem, index) => (
              <>
                <span>{subitem.quantity}</span>
                <span>{subitem.description} </span>
                <span>$ {subitem.price} </span>
                <span>$ {subitem.price} </span>
              </>
            ))}
          </BoxDetails>
        </BoxContentDetails>
        <DesTotal>Total Amount </DesTotal>
        <ValorTotal>
          <Dollar>$ </Dollar>
          {Datas.amount}
        </ValorTotal>
        <RoutePrivate>
          <ButonLink to="private">
            Home
            <i>
              <IconArrowRight />
            </i>
          </ButonLink>
        </RoutePrivate>
      </BoxPresentacion>
    </>
  );
}

export default ResultDatafast;

const BoxPresentacion = styled.div`
  margin-top: 20px;
  width: 50%;
  padding: 20px 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  border-radius: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(100px, auto);
  grid-template-areas:
    "headerImage headerImage"
    "Resultado Resultado"
    "Details Details"
    "line line"
    "destotal total"
    "RoutePrivate RoutePrivate";
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: minmax(100px, auto);
    grid-template-areas:
      "headerImage"
      "Resultado"
      "Details Details"
      "line line"
      "destotal total";
  }
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.1);
`;
const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  grid-area: headerImage;
  & > img {
    width: 100px;
    padding: 5px 0;
  }
`;
const Span = styled.span`
  font-size: 20px;
  text-align: center;
  color: #57606f;
  grid-area: Resultado;
`;
const BoxContentDetails = styled.div`
  border: 1.5px solid #b9b9c1;
  border-radius: 4px;
  width: 100%;
  grid-area: Details;
  margin: 0 auto;
  justify-self: center;
`;
const HeaderBoxDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0.5rem 1rem;
  border-bottom: 1.5px solid #b9b9c1;
  color: #b9b9c1;
  font-size: 1rem;
  span {
    justify-self: center;
  }
`;
const BoxDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: none;
  & > span {
    align-self: center;
    justify-self: center;
    font-size: 16px;
    color: #95a5a6;
    padding: 0.5rem 0;
  }
`;

const VarTotal = css`
  font-size: 24px;
  color: #b9b9c1;
`;
const DesTotal = styled.span`
  ${VarTotal};
  grid-area: destotal;
  justify-self: center;
`;
const ValorTotal = styled.span`
  ${VarTotal};
  color: #262a32;
  grid-area: total;
  justify-self: center;
  display: flex;
  align-items: center;
`;
const Dollar = styled.span`
  color: #b9b9c1;
  font-size: 20px;
  position: relative;
  left: -4px;
`;

const RoutePrivate = styled.div`
  grid-area: RoutePrivate;
  display: flex;
  justify-content: flex-end;
`;

const Hover = css`
  &:hover {
    color: #ff3946;
  }
`;

const ButonLink = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #4a47f5;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background-color: #5e5bff;
  }
`;

const IconArrowRight = styled(IoArrowForwardSharp)`
  color: #fff;
`;
