import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Paypal = () => {
  const paypal = useRef();
  let money = useSelector((state) => state.cartItem.totalAmount);
  money = parseInt(money);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'My Items',
                amount: {
                  currency_code: 'INR',
                  value: money,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [money]);

  return (
    <div className="paypal-container">
      <div ref={paypal}></div>
    </div>
  );
};

export default Paypal;
