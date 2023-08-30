import React from 'react';

import './index.less';
import PlanetTable from '../../components/Tables/Planet';
import CreatePlanet from '../../components/functionality/Create/Planet';

function Planet() {
  return (
    <main className="page--planet">
      <h1>Planetas</h1>
      <PlanetTable/>
      <CreatePlanet/>
    </main>
  );
};

export default Planet;