import styled from "styled-components";
function DataServer({ Data }) {
  console.log(Data);
  return (
    <DatosServer>
      <h3>
        {Data.data.purchase_units[0].payments.captures[0].amount.currency_code}
      </h3>
      <h2 style={{ fontSize: "3rem", margin: 0 }}>
        $ {Data.data.purchase_units[0].payments.captures[0].amount.value}
      </h2>
      <h3>{Data.data.purchase_units[0].payments.captures[0].status}</h3>
    </DatosServer>
  );
}

const DatosServer = styled.div`
  width: 80%;
  color: #52525b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 0.5rem;

  h3 {
    font-size: 1.2rem;
    color: #314584;
    margin: 0;
  }
`;
const TextH2 = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0;
`;
export default DataServer;

// {
//   Data.payment.transactions.map((subItem, SubIndex) => (
//     <div key={SubIndex}>
//       {subItem.item_list.items.map((item2, index2) => (
//         <div key={index2}>
//           <ContentSubitem>
//             <TextBold>
//               {/* <TextNumber>{item2.quantity}</TextNumber> */}
//               <div></div>
//               <TextItem>{item2.description} </TextItem>
//               <TextItem></TextItem>
//             </TextBold>
//             <TextBold>
//               <Usds>{item2.currency}</Usds>
//               <Usds>{item2.price}</Usds>
//             </TextBold>
//           </ContentSubitem>
//         </div>
//       ))}
//       <hr />
//       <ContentSubitem>
//         <Subtotal>SUBTOTAL</Subtotal>
//         <TextBold>{subItem.amount.details.subtotal}</TextBold>
//       </ContentSubitem>
//       <ContentSubitem>
//         <Total>TOTAL</Total>
//         <TextBold>
//           <Usds>{subItem.amount.currency}</Usds>
//           {subItem.amount.total}
//         </TextBold>
//       </ContentSubitem>
//     </div>
//   ));
// }
