import React from "react";
import Cart from "../../server/db/models/Cart";

const CartTotalBox = () => {
  return (
    <div className="container">
      <h2>Order Summary</h2>
      <h3>
        Item Total <span>$20.00</span>
      </h3>
      <h3>
        Shipping Total <span>$5.00</span>
      </h3>
      <h3>
        Sales Tax <span>$2.00</span>
      </h3>
      <h3>
        Order Total <span> $22.00</span>
      </h3>
    </div>
  );
};

export default CartTotalBox;
