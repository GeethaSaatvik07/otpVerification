import { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class VerifyOtp extends Component {
  render() {
    return (
      <div className="verify-page">
        <img
          src="https://res.cloudinary.com/dbj5bk2gm/image/upload/v1695661317/undraw_confirmed_81ex_zppqt3.svg"
          alt="otp check"
          className="verify-otp-check-image"
        />
        <h1 className="verify-mobile-line">Please verify Mobile number</h1>
        <p className="verify-mobile-otp-sent-line">
          An OTP is sent to{" "}
          <span className="mobile-number-verify">+917896781234</span>
        </p>
        <Link to="/">
          <p className="verify-change-phone-number">Change Phone Number</p>
        </Link>
        <div className="verify-otp-not-received">
          <p className="verify-not-received">Didn’t receive the code?</p>
          <p className="verify-otp-resend">Resend</p>
        </div>
        <Link to="/hello">
          <button type="button" className="verify-button">
            Verify
          </button>
        </Link>
      </div>
    );
  }
}

export default VerifyOtp;
