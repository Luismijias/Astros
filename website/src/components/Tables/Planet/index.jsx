import React, { useEffect, useState } from "react";
import "./index.less";
import _service from "@netuno/service-client";
import { Button } from "antd";

function PlanetTable() {
  const [dados, setDados] = useState([]);
  const [numeroPagina, setNumeroPagina] = useState(1);
  const nome = "";

  useEffect(() => {
    _service({
      url: "/astros/planet/list",
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

  return (
    <div className="celestial-body-table ">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Raio</th>
            <th>Rotação</th>
            <th>Estrela Mãe</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.uid}>
              <td>{item.nome}</td>
              <td>{item.raio}</td>
              <td>{item.rotacao}</td>
              <td>{item.estrela_mae}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        onClick={() => {
          setNumeroPagina(numeroPagina - 1);
        }}
      >
        &lt;
      </Button>
      <Button
        onClick={() => {
          setNumeroPagina(numeroPagina + 1);
        }}
      >
        &gt;
      </Button>
    </div>
  );
}

export default PlanetTable;
