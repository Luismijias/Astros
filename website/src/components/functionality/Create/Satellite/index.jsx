import React, { useState , useEffect} from "react";
import _service from "@netuno/service-client";
import { Button, Input, Select, message } from "antd"; 
import "./index.less";

function CreateSatellite() {
  const [nome, setNome] = useState("");
  const [raio, setRaio] = useState("");
  const [rotacao, setRotacao] = useState("");
  const [planeta_mae, setPlaneta_mae] = useState();
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

  const handleCreateSatellite = () => {
    _service({
      url: "/astros/satellite/",
      method: "POST",
      data: { nome, raio, rotacao, planeta_mae },
      success: ({ json }) => {
        message.success("Satélite criado com sucesso!"); 
        setNome("");
        setRaio("");
        setRotacao("");
        setPlaneta_mae();
      },
      fail: (e) => {
        console.log("Service Error", e);
        message.error("O satélite já existe.")
      },
    });
  };

  return (
    <div className="create-satellite">
      <h2>Criar Novo Satellite</h2>
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
      <label>Planeta Mãe:</label>
      <Select
        value={planeta_mae}
        onChange={(value) => setSatellite_mae(value)}
      >
        {dados.map((item) => (
          <Select.Option key={item.id} value={item.id}>
            {item.nome}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleCreateSatellite}>
        Criar
      </Button>
    </div>
  );
}

export default CreateSatellite;