import React, { useState , useEffect} from "react";
import _service from "@netuno/service-client";
import { Button, Input, Select, message } from "antd"; 

import "./index.less";

function CreatePlanet() {
  const [nome, setNome] = useState("");
  const [raio, setRaio] = useState("");
  const [rotacao, setRotacao] = useState("");
  const [estrela_mae, setEstrela_mae] = useState();
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

  const handleCreatePlanet = () => {
    _service({
      url: "/astros/planet/",
      method: "POST",
      data: { nome, raio, rotacao, estrela_mae },
      success: ({ json }) => {
        message.success("Planeta criado com sucesso!"); 
        setNome("");
        setRaio("");
        setRotacao("");
        setEstrela_mae();
      },
      fail: (e) => {
        console.log("Service Error", e);
        message.error("O planeta já existe.")
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
      <label>Estrela Mãe:</label>
      <Select
        value={estrela_mae}
        onChange={(value) => setEstrela_mae(value)}
      >
        {dados.map((item) => (
          <Select.Option key={item.id} value={item.id}>
            {item.nome}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleCreatePlanet}>
        Criar
      </Button>    
    </div>
  );
}

export default CreatePlanet;