import React from 'react';
import SatelliteTable from '../../components/Tables/Satellite';
import './index.less';

function Satellite() {
  return (
    <main className="page--satellite">
      <h1>Pagina dos Satélites</h1>
    <SatelliteTable/>
    </main>
  );
};

export default Satellite;