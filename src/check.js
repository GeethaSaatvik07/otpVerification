const check = async () => {
  const url = "https://d7-verify.p.rapidapi.com/verify/v1/otp/send-otp";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Token: "<REQUIRED>",
      "X-RapidAPI-Key": "8223de73a6msh8e30c74bd9dadcap1579cajsn1dd6e89f887f",
      "X-RapidAPI-Host": "d7-verify.p.rapidapi.com",
    },
    body: {
      originator: "SignOTP",
      recipient: "+9715097525xx",
      content: "Greetings from D7 API, your mobile verification code is: {}",
      expiry: "600",
      data_coding: "text",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

check();
