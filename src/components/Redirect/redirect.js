import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Success from "../../assets/images/Success.svg";
import { Link } from "react-router-dom";
import DataServer from "./DataServer";
import { IoArrowForwardCircle } from "react-icons/io5";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spinner from "react-loader-spinner";
import { url } from "../Urls";

export default function Redirect() {
  const [Data, setData] = useState({});
  const location = useLocation();
  const [Loader, setLoader] = useState(undefined);
  const queryLocation = location.search;

  useEffect(() => {
    const Enpoint = `${url}/paypal/sucess` + queryLocation;
    const { token } = JSON.parse(window.localStorage.getItem("user"));
    fetch(Enpoint, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(true);
      });
  }, [queryLocation]);

  return (
    <Centrar className="container">
      <CardSuccess>
        <CentrarBoxSmall column={true}>
          <ImgSuccess src={Success} alt="Success" />
          <h2>Compra Exictosamente</h2>
        </CentrarBoxSmall>
        <ContentDataServer>
          {!Loader ? (
            <Spinner
              type="Puff"
              color="#1E3A8A"
              height={50}
              width={50}
              timeout={2000} //3 secs
            />
          ) : (
            <DataServer Data={Data} />
          )}
        </ContentDataServer>
        <CentrarBoxSmall>
          <Button to="/private">
            Continue <IoArrowForwardCircle />{" "}
          </Button>
        </CentrarBoxSmall>
      </CardSuccess>
    </Centrar>
  );
}

const Centrar = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CentrarBoxSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  h2 {
    margin: 0;
    margin: 0.5rem 0;
  }
`;

const CardSuccess = styled.div`
  width: 50%;

  padding: 1rem 0;
  border: 1px solid silver;
  border-radius: 10px;
  h2 {
    font-size: 1.5rem;
  }
`;
const ImgSuccess = styled.img`
  width: 20%;
  height: 20%;
`;
const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  line-height: 1;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  background-color: #22c55e;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  :hover {
    background-color: #16a34a;
  }
`;

const ContentDataServer = styled.div`
  display: flex;
  justify-content: center;
`;

// {
//   Data.payment.transactions.map((item, index) => (
//     <div key={index}>
//       <p>{item.description}</p>
//       <BoxCard>
//         <ContentSubitem>
//           <Subtitle>Items</Subtitle> <Subtitle>Valor</Subtitle>
//         </ContentSubitem>
//         <Centrado_Data_Server></Centrado_Data_Server>
//         <Centrado_Data_Server>
//           <TextBold>TOTAL</TextBold>
//           <TextBold>
//             <Usds>{item.amount.currency}</Usds>
//             <Total>{item.amount.total} </Total>
//           </TextBold>
//         </Centrado_Data_Server>
//       </BoxCard>
//     </div>
//   ));
// }

//  {
//    item.item_list.items.map((Subitem, index2) => (
//      <ContentSubitem key={index2}>
//        <TextItem>
//          {Subitem.quantity} -{Subitem.name}
//        </TextItem>
//        <TextItem>
//          <Usds>{Subitem.currency}</Usds>
//          {Subitem.price}
//        </TextItem>
//      </ContentSubitem>
//    ));
//  }
