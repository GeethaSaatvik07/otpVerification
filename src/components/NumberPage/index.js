// import { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

// import PhoneNumber from "../PhoneNumber";

import "./index.css";

// class NumberPage extends Component {
//   render() {
const NumberPage = () => {
  const [phone, setPhone] = useState("");
  //   console.log("+" + phone);
  // console.log(phone);
  const numberWithPlus = "+" + phone;
  console.log(numberWithPlus);

  //   const onClickGetOtp = async () => {
  //     const url = "https://d7-verify.p.rapidapi.com/verify/v1/otp/send-otp";
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         Token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiYWFhODY0YjgtNjYzOS00N2YyLThmMjYtZjUzZDZlZjhlMjJhIn0.un71x2E6n0eb0OPEvWLdZDdZz1GAxxOWwGx6RWfvJiE`,
  //         "X-RapidAPI-Key": "8223de73a6msh8e30c74bd9dadcap1579cajsn1dd6e89f887f",
  //         "X-RapidAPI-Host": "d7-verify.p.rapidapi.com",
  //       },
  //       body: {
  //         originator: "SignOTP",
  //         recipient: numberWithPlus,
  //         content: "Greetings from D7 API, your mobile verification code is: {}",
  //         expiry: "600",
  //         data_coding: "text",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div className="number-page">
      <img
        src="https://res.cloudinary.com/dbj5bk2gm/image/upload/v1695661317/AK_logo_beduvs.jpg"
        alt="admitkard logo"
        className="number-page-logo"
      />
      <h1 className="number-page-heading">Welcome Back</h1>
      <p className="number-back-sign-in-line">Please sign in to your account</p>
      <div>
        <PhoneInput
          specialLabel={"Enter Contact Number"}
          country={"in"}
          enableSearch={true}
          countryCodeEditable={false}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          className="box"
        />
      </div>
      <p className="number-page-otp-note">
        We will send you a one time SMS message. Charges may apply.
      </p>
      {phone.length === 12 ? (
        <Link to="/verify">
          <button
            className="number-page-sign-in-button"
            type="button"
            // onClick={onClickGetOtp}
          >
            Sign In with OTP
          </button>
        </Link>
      ) : (
        <button className="number-page-sign-in-button" type="button">
          Sign In with OTP
        </button>
      )}
      {/* <Link to="/verify">
        <button className="number-page-sign-in-button" type="button">
          Sign In with OTP
        </button>
      </Link> */}
    </div>
  );
};

export default NumberPage;
