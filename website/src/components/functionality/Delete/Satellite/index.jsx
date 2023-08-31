import React, { useState, useEffect } from "react";
import _service from "@netuno/service-client";
import { Button, Select, message } from "antd"; 
import "./index.less";

function DeleteSatellite() {
  const [uid, setUid] = useState(""); 
  const [dados, setDados] = useState([]);

  useEffect(() => {
    _service({
      url: "/astros/satellite/id",
      success: ({ json }) => {
        setDados(json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);

  const handleDeleteSatellite = () => {
    _service({
      url: "/astros/satellite/", 
      method: "DELETE", 
      data: { uid },
      success: ({ json }) => {
        message.success("Satélite apagado com sucesso!");
      },
      fail: (e) => {
        console.log("Service Error", e);
        message.error("Registro não encontrado.");
      },
    });
  };

  const handleSatelliteSelect = (selectedUid) => {
    setUid(selectedUid);
  };

  return (
    <div className="delete-satellite">
      <h2>Deletar Satélite</h2>
      <Select
        value={uid}
        onChange={handleSatelliteSelect}
      >
        {dados.map((item) => (
          <Select.Option key={item.uid} value={item.uid}>
            {item.nome}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleDeleteSatellite}>
        Deletar 
      </Button>
    </div>
  );
}

export default DeleteSatellite; 