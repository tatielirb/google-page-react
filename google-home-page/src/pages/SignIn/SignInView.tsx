import React, { useState } from "react";
import "./SignInView.css";
import FormEmail from "./components/FormEmail/Index.tsx";
import FormPassoword from "./components/FormPassoword/Index.tsx";

export default function SignInView() {
  const [activeStep, setActiveStep] = useState<string>("email");

  const changeStep = (blockStep: string) => {
    if (valueEmail.trim()) setActiveStep(blockStep);
  };

  const [valueEmail, setInputValueEmail] = useState<string>("");

  const getValueEmail = (newValue: string) => {
    setInputValueEmail(newValue);
  };

  return (
    <div className="login">
      <div className="login-content">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="login-img"
        />

        {activeStep === "email" && <FormEmail />}

        {activeStep === "password" && <FormPassoword />}
      </div>
    </div>
  );
}
