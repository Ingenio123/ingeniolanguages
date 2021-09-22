import { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Paypal({ valorPago }) {
  const paypal = useRef();
  const history = useHistory();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Package comprado desde Ingenio Languages",
                amount: {
                  currency_code: "USD",
                  value: valorPago,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          history.push("/redirect");
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
