import { useState } from "react";
import styled from "styled-components";

const FormContainer = ({ cart, totalAmount }) => {
  const [submission, setSubmission] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  const formattedCart = () => {
    const result = cart.map((cartItem) => {
      return {
        name: cartItem.name,
        amount: cartItem.amount,
        price: `${cartItem.price / 100} euro`,
        image: cartItem.image,
      };
    });

    const l = JSON.stringify(result);

    return l;
  };

  return (
    <div className="checkout-container">
      <ItemsWrapper className="items-container">
        <h3 className="title">Summary</h3>
        {cart.map((item, index) => {
          return (
            <div key={index} className="items">
              <p>
                <span className="bold">{item.amount}</span>x {item.name}
              </p>
            </div>
          );
        })}
        <div className="total">
          <h5>
            <span className="total">Total:</span>
          </h5>
          <p>{totalAmount} euro</p>
        </div>
      </ItemsWrapper>
      <FormWrapper className="form-container">
        <form
          action="https://mailthis.to/ecom-store"
          method="POST"
          className="form"
        >
          <h3 className="title">Submission form</h3>
          <div className="form-row">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              value={submission.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              value={submission.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="phoneNumber" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="form-input"
              value={submission.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="phoneNumber" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={submission.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="form-input"
              value={submission.message}
              onChange={handleChange}
            />
          </div>
          <input type="hidden" name="cart" value={formattedCart()} />
          <input
            type="hidden"
            name="_after"
            value="https://lenderts-garage.netlify.app/"
          />
          <input type="hidden" name="_honeypot" value="" />

          <button type="submit" value="Submit" className="submit-btn">
            submit
          </button>
        </form>
      </FormWrapper>
    </div>
  );
};

const FormWrapper = styled.div`
  margin-top: 5rem;
  background: var(--clr-primary-10);
  width: 50rem;
  border-radius: 1rem;
  margin-bottom: 5rem;
  border: 1px solid grey;

  body {
    overflow: hidden;
  }

  .title {
    padding-bottom: 1rem;
  }

  .form {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-row {
    margin-bottom: 1rem;
    width: 50%;
  }

  .form-input {
    width: 100%;
    max-width: 100%;
    min-width: 100%;

    padding: 0.375rem 0.75rem;
    margin-top: 0.5rem;
  }

  .form-label {
    margin-bottom: 0.5rem;
    font-weight: 800;
    display: block;
  }

  button {
    display: block;
    margin: 1.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .submit-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.5rem 0.5rem;
    border-radius: var(--radius);
    width: 50%;
  }

  textarea,
  input:focus {
    outline-color: var(--clr-primary-4);
  }
`;

const ItemsWrapper = styled.div`
  margin-top: 5rem;
  background: var(--clr-primary-10);
  width: 23rem;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid grey;
  margin-bottom: 5rem;

  .title {
    padding-bottom: 1rem;
  }

  .items {
    margin-left: 1rem;
  }
  .total {
    font-weight: 900;
    margin-top: 3rem;
  }
`;
export default FormContainer;
