import React from 'react';
import StarTable from '../../components/Tables/Star';
import CreateStar from '../../components/functionality/Create/Star';
import DeleteStar from '../../components/functionality/Delete/Star';
import EditStar from '../../components/functionality/Edit/Star';

import './index.less';


function Star() {
  return (
    <main className="page--star">
      <h1>Estrela</h1>
      <StarTable/>
      <CreateStar/>
      <DeleteStar/>
      <EditStar/>
    </main>
  );
};

export default Star;