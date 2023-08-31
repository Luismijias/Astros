import React, { useState } from "react";
import _service from "@netuno/service-client";
import { Button, Input, message } from "antd"; 
import "./index.less";

function DeleteSatellite() {
  const [uid, setUid] = useState(""); 

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

  return (
    <div className="delete-satellite">
      <h2>Deletar Satélite</h2>
      <label>UID:</label>
      <Input
        value={uid} 
        onChange={(e) => setUid(e.target.value)} 
      />
      <Button type="primary" onClick={handleDeleteSatellite}>
        Deletar 
      </Button>
    </div>
  );
}

export default DeleteSatellite; 