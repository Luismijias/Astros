import React, { useEffect, useState } from "react"
import "./index.less"
import _service from "@netuno/service-client"
import { Button, Divider, Modal } from "antd"

function SatelliteTable() {
  const [dados, setDados] = useState([])
  const [starId, setStarId] = useState([])
  const [planetId, setPlanetId] = useState([])
  const [satelliteId, setSatelliteId] = useState([])
  const [numeroPagina, setNumeroPagina] = useState(1)
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const nome = ""

  useEffect(() => {
    _service({
      url: "/astros/relationship",
      method: "POST",
      data: { nome, numeroPagina },
      success: ({ json }) => {
        setDados(json)
      },
      fail: (e) => {
        console.log("Service Error", e)
      },
    })
  }, [nome, numeroPagina])

  useEffect(() => {
    _service({
      url: "/astros/star/id",
      method: "GET",
      data: {},
      success: ({ json }) => {
        setStarId(json)
      },
      fail: (e) => {
        console.log("Service Error", e)
      },
    })
  }, [])

  useEffect(() => {
    _service({
      url: "/astros/planet/id",
      method: "GET",
      data: {},
      success: ({ json }) => {
        setPlanetId(json)
      },
      fail: (e) => {
        console.log("Service Error", e)
      },
    })
  }, [])

  useEffect(() => {
    _service({
      url: "/astros/satellite/id",
      method: "GET",
      data: {},
      success: ({ json }) => {
        setSatelliteId(json)
      },
      fail: (e) => {
        console.log("Service Error", e)
      },
    })
  }, [])

  const handleShowModal = (item) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const handleHideModal = () => {
    setSelectedItem(null)
    setModalVisible(false)
  }

  const renderModalContent = () => {
    if (!selectedItem) return null
    const { tipo, nome, uid, origem } = selectedItem

    const planetasFiltrados = planetId
      .filter((p) => p.uid === uid)
      .map((p) => p.id)

    return (
      <div>
        <p>Nome: {nome}</p>
        <p>UID: {uid}</p>
        <p>Tipo: {tipo}</p>
        <p>Origem: {origem}</p>
        <p></p>
        {tipo === "satelite" && (
          <div>
            <p>Planeta de Origem:</p>
            <table>
              <tbody>
                {planetId
                  .filter((p) => p.id === origem)
                  .map((p) => (
                    <tr key={p.uid}>
                      <td>{p.nome}</td>
                      <td>{p.id}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <p>Estrela Mãe:</p>
            <table>
              <tbody>
                {starId
                  .filter((p) => p.id === origem)
                  .map((p) => (
                    <tr key={p.uid}>
                      <td>{p.nome}</td>
                      <td>{p.id}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
        {tipo === "planeta" && (
          <div>
            <ul>Estrela Mãe:</ul>
            <table>
              <tbody>
                {starId
                  .filter((p) => p.id === origem)
                  .map((p) => (
                    <tr key={p.uid}>
                      <td>{p.nome}</td>
                      <td>{p.id}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <p>Planet Id:{planetasFiltrados}</p>
            <Divider />
            <table>
              <caption>Satélites_Orbitando:</caption>
              {JSON.stringify(planetasFiltrados)}
              <tbody>
                {satelliteId
                  .filter((sat) => sat.id)
                  .map((sat) => (
                    <tr key={sat.id}>
                      <td>{sat.nome}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
        {tipo === "estrela" && (
          <div>
            <p>Planetas Filhos:</p>
            <table>
              <tbody>
                {planetId.map((planet) => (
                  <tr key={planet.uid}>
                    <th>{planet.nome}</th>
                    <th>{planet.id}</th>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Satélites Filhos Planetas:</p>
            <table>
              <tbody>
                {satelliteId.map((satellite) => (
                  <tr key={satellite.uid}>
                    <th>{satellite.nome}</th>
                    <th>{satellite.id}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relationship-table">
      <table className="relationship-table__detail">
        <caption>
          <h1>Detalhar</h1>
        </caption>
        <thead>
          <tr>
            <th>UID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Origem</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.uid}>
              <td>{item.uid}</td>
              <td>{item.nome}</td>
              <td>{item.tipo}</td>
              <td>{item.origem}</td>
              <td>
                <Button onClick={() => handleShowModal(item)}>Detalhar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        className="next-button"
        onClick={() => {
          setNumeroPagina(1)
        }}
      >
        &lt;
      </Button>
      <Button
        className="next-button"
        onClick={() => {
          setNumeroPagina(numeroPagina + 1)
        }}
      >
        &gt;
      </Button>
      <Modal title="Detalhes" visible={modalVisible} onCancel={handleHideModal}>
        {renderModalContent()}
      </Modal>
    </div>
  )
}

export default SatelliteTable
