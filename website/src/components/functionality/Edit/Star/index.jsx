import React, { useState, useEffect } from "react";
import _service from "@netuno/service-client";
import { Button, Input, Select, message } from "antd";

import "./index.less";

function EditStar() {
  const [nome, setNome] = useState("");
  const [uid, setUid] = useState("");
  const [raio, setRaio] = useState("");
  const [rotacao, setRotacao] = useState("");

  const [dados, setDados] = useState([]);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    _service({
      url: "/astros/star/id",
      success: ({ json }) => {
        setData(json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);

  const handleEditStar = () => {
    _service({
      url: "/astros/star/",
      method: "PUT",
      data: { uid, nome, raio, rotacao},
      success: ({ json }) => {
        message.success("Estrela Editada com sucesso!");
        setNome("");
        setUid("");
        setRaio("");
        setRotacao("");
      },
      fail: (e) => {
        console.log("Service Error", e);
        message.error("Estrela não encontrada.");
      },
    });
  };

  return (
    <div className="edit-star">
      <h2>Editar Planeta Existente</h2>
      <Select
        value={uid}
        onChange={(value) => setUid(value)}
      >
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
      <Button type="primary" onClick={handleEditStar}>
        Editar
      </Button>
    </div>
  );
}

export default EditStar;
