import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { BiLockAlt } from "react-icons/bi";
// helpers
import { isAuth } from "../../helpers/Auth";
//
import Url from "../../components/Urls";
//styled components
import { BoxOrder, Order_total } from "../../components/Pay/formCheck";
//component
import BoxVerify from "../../components/Pay/BoxVerify";

//
const PaypalOrder = () => {
  //
  let res = 0;
  //
  const { items } = useSelector((state) => state.package);
  const { valorDescuento } = useSelector((state) => state.itemPackage);
  //
  if (items) {
    const arrayPrices = [];

    items.map((val) => arrayPrices.push(val.price));

    console.log(arrayPrices);

    res = items.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);
  }
  //
  function PrintWind(res, val) {
    var valorn = res - val;
    var valorn = parseFloat(valorn).toFixed(2);
    return valorn;
  }
  const HanldePay = async (valor) => {
    if (isAuth()) {
      //   return props.history.push("/paypalorder");
      const EndPoint = Url.url + "/paypal/createPayment";
      //   console.log("items:", items);
      console.log(valor);
      const { token } = JSON.parse(window.localStorage.getItem("user"));
      const { data } = await axios.post(
        EndPoint,
        {
          priceTotal: valor,
          datosArray: items,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return window.location.assign(data.link);
    }
    // setClickPaypal({
    //   ...ClickPaypal,
    //   click: true,
    //   priceTotal: valor,
    //   datosArray: items,
    // });
    // OpenModal();
    // console.log(data.data);
    // const ultime = data.data.links.filter((e) => {
    //   return e.rel === "approve";
    // });
    // props.history.push(`${ultime[0].href}`);
    // window.open(`${ultime[0].href}`);
  };
  //
  function ValorTotal() {
    let valIva = 1.12;
    let CobroIva = res / 1.12;
    var valortotal = res - CobroIva;
    var valorn = parseFloat(valortotal).toFixed(2);
    console.log("Valor n", valorn);
    return valorn;
  }
  function ValorTotales() {
    if (valorDescuento === 1) {
      return parseFloat(res).toFixed(2);
    }
    var calculos = res * valorDescuento;
    var total = res - calculos;
    return parseFloat(total).toFixed(2);
  }
  return (
    <main className="container">
      <Section>
        <Header>
          <BoxVerify />
        </Header>
        <hr />
        <BoxOrder>
          <OrderSumary>Order Summary</OrderSumary>
          <ItemsOrder end="true">
            <span>Lesson packages: {items ? items.length : "0"} </span>
            {/* <span>Lesson packages: 2 </span> */}
          </ItemsOrder>
          <ItemsOrder>
            <span>Subtotal:</span>
            <span>$ {res !== 0 ? PrintWind(res, ValorTotal()) : 0}</span>
            {/* <span>$ 20</span> */}
          </ItemsOrder>
          <ItemsOrder>
            <span>Taxes +12%: </span> <span>$ {ValorTotal()} </span>
            {/* <span>Taxes +12%: </span> <span>$ 20 </span> */}
          </ItemsOrder>
          {valorDescuento !== 1 && (
            <ItemsOrder>
              <span>Discount -{parseFloat(valorDescuento) * 100}%</span>
              {/* <span>Discount -10%</span> */}
              <span>$ {parseFloat(ValorTotales() - res).toFixed(2)}</span>
              {/* <span>$ 2</span> */}
            </ItemsOrder>
          )}
          <hr />
          <ItemsOrder>
            <Order_total>Total</Order_total>
            <Order_total>$ {res !== 0 ? ValorTotales() : 0} </Order_total>
            {/* <Order_total>$ 18</Order_total> */}
            {/* <Order_total>Order Total</Order_total> <Order_total>$ {res !== 0 ? parseFloat(res).toFixed(2)  : 0} </Order_total> */}
          </ItemsOrder>
        </BoxOrder>
        <div className="content_button">
          <button
            className="btn checkout"
            onClick={() => HanldePay(ValorTotales())}
          >
            Checkout
          </button>
          <div className="pagoSeguro">
            <BiLockAlt />
            <span>Pago totalmente seguro</span>
          </div>
        </div>
      </Section>
    </main>
  );
};

const Section = styled.section`
  margin: 0;
  margin: 0 auto;
  /* border: 1px solid red; */
  width: 500px;
  padding: 10px 30px !important;
  border-radius: 5px;
  box-shadow: -2px 4px 20px -2px rgb(0 0 0 / 10%);
  .content_button {
    width: 100%;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .pagoSeguro {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: #3f3f46;
      font-weight: 600;
      /* border: 1px solid black; */
      span {
        margin-left: 1rem;
        line-height: 0;
      }
    }
  }
  .checkout {
    /* margin-top: 1rem; */
    background-color: #314584;
    color: #ffff;
    width: 80%;
    :hover {
      background-color: #4560ba;
    }
  }
`;

const Header = styled.div`
  width: 100%;
`;
const OrderSumary = styled.h4`
  color: #535966;
  font-weight: 700;
  letter-spacing: 0px;
  margin: 20px 0;
  justify-self: start;
`;
const ItemsOrder = styled.div`
  display: flex;
  justify-content: ${(props) => (props.end ? "flex-end" : "space-between")};
  align-items: center;
  font-size: 20px;
  color: #2e384d;
`;

export default PaypalOrder;
