import React, { useState , useEffect} from "react";
import _service from "@netuno/service-client";
import { Button, Input, message } from "antd"; 
import "./index.less";

function CreatePlanet() {
  const [nome, setNome] = useState("");
  const [raio, setRaio] = useState("");
  const [rotacao, setRotacao] = useState("");
  const [dados, setDados] = useState([]);

  useEffect(() => {
    _service({
      url: "/astros/star/id",
        success: ({ json }) => {
        setDados(json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);

  const handleCreateStar = () => {
    _service({
      url: "/astros/planet/",
      method: "POST",
      data: { nome, raio, rotacao },
      success: ({ json }) => {
        message.success("Planeta criado com sucesso!"); 
        setNome("");
        setRaio("");
        setRotacao("");
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  };



  return (
    <div className="create-planet">
      <h2>Criar Novo Planeta</h2>
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
        Criar Planeta
      </Button>
      {JSON.stringify(dados)}
    </div>
  );
}

export default CreatePlanet;
