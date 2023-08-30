import React, { useEffect, useState } from "react";
import "./index.less";
import _service from "@netuno/service-client";

function DetailTable() {
  const [dados, setDados] = useState([]); 

  useEffect(() => {
    _service({
      url: "/astros/detail",
      method: 'GET',
      data: { uid: "d9ba1de8-86d2-46f9-8371-e0b0bc0e6de5" },
      success: ({ json }) => {
        setDados(json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      }
    });
  }, []);

  return (
    <div className="celestial-body-table ">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Raio</th>
            <th>Rotação</th>
            <th>Tipo</th>
            <th>UID</th>
          </tr>
        </thead>
        <tbody>
             <tr>
              <td>{dados.nome}</td>
              <td>{dados.raio}</td>
              <td>{dados.rotacao}</td>
              <td>{dados.tipo}</td>
              <td>{dados.uid}</td>
            </tr>          
        </tbody>
      </table>
    </div>
  );
}

export default DetailTable;
