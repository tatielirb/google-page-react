import React, { useState } from "react";
import Button from "../../../../components/Button/Index.tsx";
import Link from "../../../../components/Link/Index.tsx";
import Input from "../../../../components/Input/Index.tsx";
import { FormEmailProp } from "../../../../types/FormEmail.ts";

export default function FormEmail({
  valueEmailProp,
  onStepClick,
}: FormEmailProp) {
  const [valueEmail, setInputValueEmail] = useState<string>("");

  const getValueEmail = (newValue: string) => {
    setInputValueEmail(newValue);
    if (valueEmailProp) {
      valueEmailProp(newValue);
    }
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

          <Link link="#" title="Esqueceu seu e-mail?" ></Link>
        </div>
      </div>
      <div className="login-infos">
        <p>
          Não está no seu computador? Use o modo visitante para fazer login com
          privacidade.
        </p>
        <Link link="#" title="Saiba mais sobre como usar o Modo visitante"></Link>
      </div>
      <div className="login-button">
        <Button title="Criar conta" classNameType="button-white" />
        <Button
          title="Avançar"
          classNameType="button-blue"
          onClickProp={() => {
            if (onStepClick) {
              onStepClick("password");
            }
          }}
        />
      </div>
    </div>
  );
}
