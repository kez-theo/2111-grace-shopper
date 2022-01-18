import React, { useState } from "react";
import CartTotalBox from "./CartTotalBox";

const Shipping = () => {
  const [shippingMethod, setShippingMethod] = useState("");

  const handleChange = (e) => {
    setShippingMethod(e.target.value);
  };
  return (
    <div>
      <CartTotalBox />
      {/* Kerenie's cart books component can go right here */}
      <h1>Shipping Method</h1>
      <form>
        <div className="form-check">
          <input
            type="radio"
            value="standard"
            id="standard"
            onChange={handleChange}
            name="shipping"
          />
          <label htmlFor="standard">
            Standard (Estimated 3-7 Business Days) $3.75
          </label>
        </div>
        <div>
          <input
            type="radio"
            value="priority"
            id="priority"
            onChange={handleChange}
            name="shipping"
          />
          <label htmlFor="priority">
            Priority (Estimated 2-5 Business Days) $7.99
          </label>
        </div>
        <div>
          <input
            type="radio"
            value="UPS"
            id="UPS"
            onChange={handleChange}
            name="shipping"
          />
          <label htmlFor="UPS">
            UPS Ground (Estimated 3-6 Business Days) $12.00
          </label>
        </div>
        <div>
          <button type="submit">Save & Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
