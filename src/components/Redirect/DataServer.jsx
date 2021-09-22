import styled from "styled-components";
function DataServer({ Data }) {
  console.log(Data);
  return (
    <DatosServer>
      {Data.payment.transactions.map((subItem, SubIndex) => (
        <div key={SubIndex}>
          {subItem.item_list.items.map((item2, index2) => (
            <div key={index2}>
              <ContentSubitem>
                <TextBold>
                  <TextNumber>{item2.quantity}</TextNumber>
                  <TextItem>{item2.name} </TextItem>
                </TextBold>
                <TextBold>
                  <Usds>{item2.currency}</Usds>
                  <Usds>{item2.price}</Usds>
                </TextBold>
              </ContentSubitem>
            </div>
          ))}
          <hr />
          <ContentSubitem>
            <Subtotal>SUBTOTAL</Subtotal>
            <TextBold>{subItem.amount.details.subtotal}</TextBold>
          </ContentSubitem>
          <ContentSubitem>
            <Total>TOTAL</Total>
            <TextBold>
              <Usds>{subItem.amount.currency}</Usds>
              {subItem.amount.total}
            </TextBold>
          </ContentSubitem>
        </div>
      ))}
    </DatosServer>
  );
}

export default DataServer;

const Subtotal = styled.span`
  font-size: 0.8rem;
  font-weight: 650;
  margin-bottom: 0.5rem;
  color: #52525b;
`;

const DatosServer = styled.div`
  width: 80%;

  margin-bottom: 0.5rem;
  color: #52525b;
`;

const TextNumber = styled.span`
  font-size: 1rem;
  margin-right: 0.2rem;
  color: #52525b;
`;
const TextItem = styled.span`
  font-size: 0.8rem;
  font-weight: 650;
  color: #52525b;
`;

const ContentSubitem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #52525b;
`;

const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #52525b;
`;

const TextBoldSmall = styled.span`
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #52525b;
`;

const TextBold = styled.span`
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
`;
const Usds = styled.span`
  font-weight: 700;
  margin-right: 0.3rem;
`;

const Total = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;
