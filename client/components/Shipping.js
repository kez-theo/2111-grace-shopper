import React from "react";

const Shipping = () => {
  return (
    <div>
      <h1>Shipping Method</h1>
      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="default"
              value="standard"
              checked={true}
              className="form-check-input"
            />
            Standard (Estimated 3-7 Business Days) $3.75
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="default"
              value="standard"
              checked={false}
              className="form-check-input"
            />
            Priority (Estimated 2-5 Business Days) $7.99
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="default"
              value="standard"
              checked={false}
              className="form-check-input"
            />
            UPS Ground (Estimated 3-6 Business Days) $12.00
          </label>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
