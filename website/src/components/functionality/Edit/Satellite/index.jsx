import React, { useState, useEffect } from "react";
import _service from "@netuno/service-client";
import { Button, Input, Select, message } from "antd";

import "./index.less";

function EditSatellite() {
  const [nome, setNome] = useState("");
  const [uid, setUid] = useState("");
  const [raio, setRaio] = useState("");
  const [rotacao, setRotacao] = useState("");
  const [planeta_mae, setPlaneta_mae] = useState("");
  const [dados, setDados] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    _service({
      url: "/astros/planet/id",
      success: ({ json }) => {
        setDados(json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);

  useEffect(() => {
    _service({
      url: "/astros/satellite/id",
      success: ({ json }) => {
        setData(json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);

  useEffect(() => {
    _service({
      url: "/astros/planet/id",
      success: ({ json }) => {
        setDados(json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);

  const handleEditPlanet = () => {
    _service({
      url: "/astros/satellite/",
      method: "PUT",
      data: { uid, nome, raio, rotacao, planeta_mae },
      success: ({ json }) => {
        message.success("Planeta Editado com sucesso!");
        setNome("");
        setUid("");
        setRaio("");
        setRotacao("");
        setPlaneta_mae("");
      },
      fail: (e) => {
        console.log("Service Error", e);
        message.error("O planeta já existe.");
      },
    });
  };

  return (
    <div className="edit-planet">
      <h2>Editar Satellite Existente</h2>
      <Select value={uid} onChange={(value) => setUid(value)}>
        {data.map((planet) => (
          <Select.Option key={planet.uid} value={planet.uid}>
            {planet.nome}
          </Select.Option>
        ))}
      </Select>
      <label>UID:</label>
      <Input value={uid} onChange={(e) => setUid(e.target.value)} />
      <label>Novo nome:</label>
      <Input value={nome} onChange={(e) => setNome(e.target.value)} />
      <label>Novo raio:</label>
      <Input value={raio} onChange={(e) => setRaio(e.target.value)} />
      <label>Nova rotação:</label>
      <Input value={rotacao} onChange={(e) => setRotacao(e.target.value)} />
      <label>Planeta Mãe:</label>
      <Select value={planeta_mae} onChange={(value) => setPlaneta_mae(value)}>
        {dados.map((item) => (
          <Select.Option key={item.id} value={item.id}>
            {item.nome}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleEditPlanet}>
        Editar
      </Button>
    </div>
  );
}

export default EditSatellite;
