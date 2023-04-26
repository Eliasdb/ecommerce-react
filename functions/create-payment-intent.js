// domain/.netlify/functions/create-payment-intent
require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (event.body) {
    const { cart, shipping_fee, totalAmount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return shipping_fee + totalAmount;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "eur",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create payment intent",
  };
};
