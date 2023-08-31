import React from 'react';
import SatelliteTable from '../../components/Tables/Satellite';
import CreateSatellite from '../../components/functionality/Create/Satellite';
import EditSatellite from '../../components/functionality/Edit/Satellite';

import './index.less';

function Satellite() {
  return (
    <main className="page--satellite">
    <h1>Pagina dos Satélites</h1>
    <SatelliteTable/>
    <CreateSatellite/>
    {/* <DeleteSatellite/> */} 
    <EditSatellite/>
    </main>
  );
};

export default Satellite;