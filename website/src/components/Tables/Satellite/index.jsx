import React, { useEffect, useState } from "react";
import "./index.less";
import _service from "@netuno/service-client";
import { Button, message } from "antd";

function RelationshipTable() {
  const [dados, setDados] = useState([]);
  const [numeroPagina, setNumeroPagina] = useState(1);
  const nome = "";

  useEffect(() => {
    _service({
      url: "/astros/satellite/list",
      method: "POST",
      data: { nome, numeroPagina },
      success: ({ json }) => {
        setDados(json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, [nome, numeroPagina]);

  const handleDeleteSatellite = (uid) => {
    _service({
      url: "/astros/satellite/",
      method: "DELETE",
      data: { uid },
      success: ({ json }) => {
        message.success("Satélite apagado com sucesso!");
        setDados(dados.filter(item => item.uid !== uid));
      },
      fail: (e) => {
        console.log("Service Error", e);
        message.error("Registro não encontrado.");
      },
    });
  };
  
  return (
    <div className="satellite-table ">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Raio</th>
            <th>Rotação</th>
            <th>Planeta Mãe</th>
          
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.uid}>
              <td>{item.nome}</td>
              <td>{item.raio}</td>
              <td>{item.rotacao}</td>
              <td>{item.planeta_mae}</td>
              <td>
                <Button onClick={() => handleDeleteSatellite(item.uid)}>
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        className="next-button"
        onClick={() => {
          setNumeroPagina(1);
        }}
      >
        &lt;
      </Button>
      <Button
        className="next-button"
        onClick={() => {
          setNumeroPagina(numeroPagina + 1);
        }}
      >
        &gt;
      </Button>
    </div>
  );
}

export default RelationshipTable;
