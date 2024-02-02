import React, { useState } from "react";
import Button from "../../../../components/Button/Index.tsx";
import Input from "../../../../components/Input/Index.tsx";

export default function FormPassoword() {
  const [activeStep, setActiveStep] = useState<string>("email");

  const changeStep = (blockStep: string) => {
    if (valueEmail.trim()) setActiveStep(blockStep);
  };

  const [valueEmail, setInputValueEmail] = useState<string>("");

  const getValueEmail = (newValue: string) => {
    setInputValueEmail(newValue);
  };

  return (
    <div className="login-step active">
      <div className="login-header">
        <h1>Olá!</h1>
        <div className="login-header--email">{valueEmail}</div>
      </div>
      <div className="login-form">
        <div className="login-form--password">
          <Input typeProp="password" placeholderProp="Digite sua senha"></Input>
          <div className="login-form--checkbox">
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">Mostrar senha</label>
          </div>
        </div>
      </div>
      <div className="login-button">
        <Button title="Tente de outro jeito" classNameType="button-white" />
        <Button
          title="Voltar"
          classNameType="button-blue"
          onClickProp={() => changeStep("email")}
        />
      </div>
    </div>
  );
}
