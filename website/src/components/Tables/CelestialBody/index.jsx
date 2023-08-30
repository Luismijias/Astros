import React, { useEffect, useState } from "react";
import "./index.less";
import _service from "@netuno/service-client";

function CelestialBodyTable() {
  const [dados, setDados] = useState([]);
  const [numeroPagina, setNumeroPagina] = useState(1); 
  const [nome, setNome] = useState(""); 

  useEffect(() => {
    _service({
      url: "/astros/list",
      method: 'POST',
      data: { nome, numeroPagina },
      success: ({ json }) => {
        setDados(json);
     },
      fail: (e) => {
        console.log("Service Error", e);
      }
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
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {dados.map(item => (
            <tr key={item.uid}>
              <td>{item.nome}</td>
              <td>{item.raio}</td>
              <td>{item.rotacao}</td>
              <td>{item.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CelestialBodyTable;