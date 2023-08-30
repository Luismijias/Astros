import React from 'react';

import './index.less';
import PlanetTable from '../../components/Tables/Planet';

function Planet() {
  return (
    <main className="page--planet">
      <h1>Planetas</h1>
      <PlanetTable/>
    </main>
  );
};

export default Planet;