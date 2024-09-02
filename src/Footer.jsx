import React from "react";

function Footer() {
  const customProperty = {
    textAlign: "center",
    backgroundColor: "orange",
  };

  return (
    <div>
      <p style={customProperty}>Proceed to Checkout</p>
    </div>
  );
}

export default Footer;
