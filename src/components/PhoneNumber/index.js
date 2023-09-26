import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import "./index.css";

const PhoneNumber = () => {
  const [phone, setPhone] = useState("");
  //   console.log(phone);
  return (
    <PhoneInput
      specialLabel={"Enter Contact Number"}
      country={"in"}
      enableSearch={true}
      countryCodeEditable={false}
      value={phone}
      onChange={(phone) => setPhone(phone)}
      className="box"
    />
  );
};

export default PhoneNumber;
