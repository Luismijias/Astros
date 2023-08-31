import React, { useState } from "react";
import _service from "@netuno/service-client";
import { Button, Input, message } from "antd"; 
import "./index.less";

function CreateStar() {
  const [nome, setNome] = useState("");
  const [raio, setRaio] = useState("");
  const [rotacao, setRotacao] = useState("");

  const handleCreateStar = () => {
    _service({
      url: "/astros/star/",
      method: "POST",
      data: { nome, raio, rotacao },
      success: ({ json }) => {
        message.success("Estrela criada com sucesso!"); 
        setRaio("");
        setRotacao("");
      },
      fail: (e) => {
        console.log("Service Error", e);
        message.error("A estrela já existe.")
      },
    });
  };

  return (
    <div className="create-star">
      <h2>Criar Nova Estrela</h2>
      <label>Nome:</label>
      <Input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label>Raio:</label>
      <Input
        value={raio}
        onChange={(e) => setRaio(e.target.value)}
      />
      <label>Rotação:</label>
      <Input
        value={rotacao}
        onChange={(e) => setRotacao(e.target.value)}
      />
      <Button type="primary" onClick={handleCreateStar}>
        Criar
      </Button>
    </div>
  );
}

export default CreateStar;
