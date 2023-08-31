import React, { useState } from "react";
import _service from "@netuno/service-client";
import { Button, Input, message } from "antd"; 
import "./index.less";

function DeletePlanet() {
  const [uid, setUid] = useState(""); 

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

  return (
    <div className="delete-planet">
      <h2>Deletar Planeta</h2>
      <label>UID:</label>
      <Input
        value={uid} 
        onChange={(e) => setUid(e.target.value)} 
      />
      <Button type="primary" onClick={handleDeletePlanet}>
        Deletar
      </Button>
    </div>
  );
}

export default DeletePlanet; 