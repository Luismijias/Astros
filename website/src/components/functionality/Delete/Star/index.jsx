import React, { useState } from "react";
import _service from "@netuno/service-client";
import { Button, Input, message } from "antd"; 
import "./index.less";

function DeleteStar() {
  const [uid, setUid] = useState(""); 

  const handleDeleteStar = () => {
    _service({
      url: "/astros/star/", 
      method: "DELETE", 
      data: { uid },
      success: ({ json }) => {
        message.success("Estrela apagada com sucesso!");
      },
      fail: (e) => {
        console.log("Service Error", e);
        message.error("Registro não encontrado.");
      },
    });
  };

  return (
    <div className="delete-star">
      <h2>Deletar Estrela</h2>
      <label>Colar UID aqui:</label>
      <Input
        value={uid} 
        onChange={(e) => setUid(e.target.value)} 
      />
      <Button type="primary" onClick={handleDeleteStar}>
        Deletar
      </Button>
    </div>
  );
}

export default DeleteStar; 