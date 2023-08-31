import React, { useState, useEffect } from "react";
import _service from "@netuno/service-client";
import { Button, Input, Select, message } from "antd"; 

import "./index.less";

function DeletePlanet() {
  const [uid, setUid] = useState(""); 
  const [dados, setDados] = useState([]);

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

  const handleDeletePlanet = () => {
    _service({
      url: "/astros/planet/", 
      method: "DELETE", 
      data: { uid },
      success: ({ json }) => {
        message.success("Planeta apagado com sucesso!");
      },
      fail: (e) => {
        console.log("Service Error", e);
        message.error("Registro não encontrado.");
      },
    });
  };

  const handlePlanetSelect = (selectedUid) => {
    setUid(selectedUid);
  };

  return (
    <div className="delete-planet">
      <h2>Deletar Planeta</h2>
      <Select
        value={uid}
        onChange={handlePlanetSelect}
      >
        {dados.map((item) => (
          <Select.Option key={item.uid} value={item.uid}>
            {item.nome}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleDeletePlanet}>
        Deletar
      </Button>
    </div>
  );
}

export default DeletePlanet;
