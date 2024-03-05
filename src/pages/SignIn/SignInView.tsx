import React, { useState } from "react";
import "./SignInView.css";
import FormEmail from "./components/FormEmail/Index";
import FormPassoword from "./components/FormPassoword/Index";

export default function SignInView() {
  const [valueEmail, setInputValueEmail] = useState<string>("");
  const [activeStep, setActiveStep] = useState<string>("email");

  const handleEmailInputChange = (newValue: string) => {
    setInputValueEmail(newValue);
  };

  const changeStep = (blockStep: string) => {
    if (valueEmail.trim()) setActiveStep(blockStep);
  };

  const handleBackClick = () => {
    setActiveStep("email");
  };

  return (
    <div className="login">
      <div className="login-content">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="login-img"
        />

        {activeStep === "email" && (
          <FormEmail
            valueEmailProp={handleEmailInputChange}
            onStepClick={changeStep}
          />
        )}

        {activeStep === "password" && (
          <FormPassoword
            valueEmailInput={valueEmail}
            onBackClick={handleBackClick}
          />
        )}
      </div>
    </div>
  );
}
