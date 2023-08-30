import React from 'react';
import StarTable from '../../components/Tables/Star';
import CreateStar from '../../components/functionality/Create/Star';

import './index.less';
import DeleteStar from '../../components/functionality/Delete/Star';

function Star() {
  return (
    <main className="page--star">
      <h1>Estrela</h1>
      <StarTable/>
      <CreateStar/>
      <DeleteStar/>
    </main>
  );
};

export default Star;