import React, { useEffect, useState } from "react";
import "./index.less";
import _service from "@netuno/service-client";

function CelestialBodyTable() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await _service.post("/astros/list", {
          filtro: { nome: "" },
          pagina: { numero: 1 } // Você pode ajustar o número da página conforme necessário
        });
        setDados(response.data.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content">
      <p>Lista de todos os Astros</p>
      <table className="astro-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Raio</th>
            <th>Rotação</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {dados.map(({ nome, raio, rotacao, tipo }) => (
            <tr key={nome}>
              <td>{nome}</td>
              <td>{raio}</td>
              <td>{rotacao}</td>
              <td>{tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CelestialBodyTable;
