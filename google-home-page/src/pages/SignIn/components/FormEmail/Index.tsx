import React, { useState } from "react";
import Button from "../../../../components/Button/Index.tsx";
import Link from "../../../../components/Link/Index.tsx";
import Input from "../../../../components/Input/Index.tsx";

export default function FormEmail() {
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
        <h1>Fazer Login</h1>
        <p>Use sua conta do Google</p>
      </div>

      <div className="login-form">
        <div className="login-form--email">
          <Input
            typeProp="text"
            placeholderProp="E-mail e Telefone"
            valueProp={valueEmail}
            onChangeProp={(valueEmail) => getValueEmail(valueEmail)}
            requiredProp
          ></Input>

          <Link title="Esqueceu seu e-mail?"></Link>
        </div>
      </div>
      <div className="login-infos">
        <p>
          Não está no seu computador? Use o modo visitante para fazer login com
          privacidade.
        </p>
        <Link title="Saiba mais sobre como usar o Modo visitante"></Link>
      </div>
      <div className="login-button">
        <Button title="Criar conta" classNameType="button-white" />
        <Button
          title="Avançar"
          classNameType="button-blue"
          onClickProp={() => changeStep("password")}
        />
      </div>
    </div>
  );
}
