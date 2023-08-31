import React from 'react';
import PlanetTable from '../../components/Tables/Planet';
import CreatePlanet from '../../components/functionality/Create/Planet';
import DeletePlanet from '../../components/functionality/Delete/Planet';

import './index.less';

function Planet() {
  return (
    <main className="page--planet">
      <h1>Planetas</h1>
      <PlanetTable/>
      <CreatePlanet/>
      <DeletePlanet/>
    
    </main>
  );
};

export default Planet;